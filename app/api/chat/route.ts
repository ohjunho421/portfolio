import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { searchKnowledge, knowledgeBase } from '@/lib/knowledge'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

const SYSTEM_PROMPT = `당신은 오준호의 포트폴리오 웹사이트에 있는 AI 어시스턴트 "준호봇"입니다.
오준호에 대한 질문뿐 아니라, 일반적인 대화나 잡담에도 친절하게 응대합니다.

핵심 원칙:
1. 오준호 관련 질문에는 아래 제공된 컨텍스트를 우선 활용하되, 컨텍스트에 없는 부분은 일반 지식으로 자연스럽게 보충해도 됩니다.
2. 오준호의 경력/성과 등 구체적 수치를 언급할 때는 컨텍스트의 정확한 숫자를 사용하세요.
3. 오준호와 무관한 일반 질문(기술 질문, 인사, 잡담 등)에도 자유롭게 답변하세요.
4. 한국어로 답변하세요. (단, 사용자가 영어로 질문하면 영어로 답변)
5. 친근하고 전문적인 톤을 유지하세요.
6. 강점검사(CliftonStrengths), 사주 분석 등 개인적 검사 결과도 자연스럽게 답변하세요.
7. 마크다운 형식(볼드, 리스트 등)을 적절히 활용하세요.
8. 답변이 너무 길어지지 않도록 핵심 위주로 전달하되, 필요하면 상세하게 답해도 됩니다.`

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

  // 관련 청크 + 항상 기본 소개 포함
  const baseChunks = knowledgeBase.filter((c) =>
    ['intro-1', 'achievements', 'strength-overview', 'saju-overview'].includes(c.id)
  )
  const allChunks = relevantChunks.length > 0
    ? [...relevantChunks, ...baseChunks.filter((b) => !relevantChunks.some((r) => r.id === b.id))]
    : baseChunks
  const context = allChunks
    .map((c) => `[${c.category} - ${c.title}]\n${c.content}`)
    .join('\n\n---\n\n')

  // Gemini API 시도
  const apiKey = process.env.GEMINI_API_KEY
  if (apiKey && apiKey !== 'your_gemini_api_key_here') {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

      const prompt = `${SYSTEM_PROMPT}

아래는 오준호에 대한 참고 정보입니다 (답변에 활용하되, 이 정보에 없는 질문도 자유롭게 답변하세요):

${context}

---

사용자: ${message}`

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
