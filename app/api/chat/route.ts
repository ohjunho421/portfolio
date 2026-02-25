import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { searchKnowledge, knowledgeBase } from '@/lib/knowledge'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

const SYSTEM_PROMPT = `당신은 오준호의 포트폴리오 웹사이트에 있는 AI 어시스턴트입니다.
오준호에 대한 질문에 친절하고 전문적으로 답변합니다.

규칙:
1. 제공된 컨텍스트 정보만을 기반으로 답변하세요.
2. 컨텍스트에 없는 정보는 추측하지 말고, "해당 정보는 제가 가진 자료에 없습니다"라고 답하세요.
3. 한국어로 답변하세요.
4. 답변은 간결하되 핵심 내용은 빠짐없이 전달하세요.
5. 수치나 성과를 언급할 때는 정확한 숫자를 사용하세요.
6. 오준호에 대해 긍정적이되 과장하지 않는 톤을 유지하세요.
7. 강점검사(CliftonStrengths), 사주 분석 등 개인적 검사 결과에 대해서도 자연스럽게 답변하세요.
8. 마크다운 형식(볼드, 리스트 등)을 적절히 활용하세요.`

export async function POST(request: NextRequest) {
  let message = ''

  try {
    const body = await request.json()
    message = body.message
  } catch {
    return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 })
  }

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: '메시지가 필요합니다.' }, { status: 400 })
  }

  // RAG: 질문과 관련된 지식 청크 검색
  const relevantChunks = searchKnowledge(message)

  // 관련 청크가 없으면 전체 소개 + 강점 + 사주 기본 포함
  let context: string
  if (relevantChunks.length === 0) {
    const fallbackChunks = knowledgeBase.filter((c) =>
      ['intro-1', 'achievements', 'strength-overview', 'saju-overview'].includes(c.id)
    )
    context = fallbackChunks.map((c) => `[${c.category} - ${c.title}]\n${c.content}`).join('\n\n---\n\n')
  } else {
    context = relevantChunks
      .map((c) => `[${c.category} - ${c.title}]\n${c.content}`)
      .join('\n\n---\n\n')
  }

  // Gemini API 시도
  const apiKey = process.env.GEMINI_API_KEY
  if (apiKey && apiKey !== 'your_gemini_api_key_here') {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

      const prompt = `${SYSTEM_PROMPT}

아래는 오준호에 대한 관련 정보입니다:

${context}

---

사용자 질문: ${message}

위 컨텍스트를 기반으로 답변하세요.`

      const result = await model.generateContent(prompt)
      const response = result.response
      const text = response.text()

      return NextResponse.json({ reply: text })
    } catch (error: unknown) {
      console.error('Gemini API error, falling back to knowledge base:', error)
    }
  }

  // Fallback: 지식베이스에서 직접 답변
  return NextResponse.json({
    reply: generateFallbackReply(message, relevantChunks),
  })
}

function generateFallbackReply(
  message: string,
  chunks: ReturnType<typeof searchKnowledge>
): string {
  if (chunks.length === 0) {
    return '죄송합니다. 해당 질문에 대한 정보를 찾지 못했습니다. 경력, 기술 스택, 성과, 강점검사, 사주 분석 등에 대해 질문해 주세요!'
  }

  const mainChunk = chunks[0]
  let reply = mainChunk.content

  // 추가 관련 청크가 있으면 보조 정보 추가
  if (chunks.length > 1) {
    const supplement = chunks
      .slice(1, 3)
      .map((c) => c.content)
      .join('\n\n')
    reply += '\n\n' + supplement
  }

  return reply
}
