'use client'

import { useEffect, useRef } from 'react'

// ─── 제가(Claude) 분석한 핵심 특성 4가지 ───────────────────────────────────
const traits = [
  {
    emoji: '⚡',
    title: '도전하는 실행가',
    summary: '말보다 실행이 먼저입니다. 생각이 생기면 바로 만들어서 확인합니다.',
    detail:
      '생명과학 → B2B 세일즈 → AI 개발로의 전환은 "해보면서 배운다"는 태도의 증거입니다.<br>회신율이 낮자 AI 챗봇을 직접 개발했고,<br>팀 전체의 아웃바운드 역량을 높이기 위해 자동화 시스템을 직접 만들어 배포했습니다.',
    evidence: ['AI 챗봇 직접 개발 → 회신율 2.2배 향상', '타겟 발굴 자동화 → 시간 80% 단축', '반복 업무 3회 이상이면 자동화하는 원칙'],
    friendQuotes: ['망설임 없이 도전할 때가 제일 부럽다', '무언가 계속 도전하는 모습이 멋지다'],
    color: '#6366F1',
    bg: '#EEF2FF',
  },
  {
    emoji: '🤝',
    title: '사람에게서 에너지를 얻는 리더',
    summary: '사람과 함께할 때 최고 퍼포먼스가 나오는 타입입니다.',
    detail:
      'CliftonStrengths Top 5가 전부 "대인관계·영향력" 영역입니다.<br>개인 성과에 그치지 않고 팀 전체가 쓸 수 있는 시스템을 만드는 것을 중요하게 여깁니다.<br>ENFJ 특유의 리더십이 영업 조직 안에서 자연스럽게 발현됩니다.',
    evidence: ['갤럽 강점검사: 사교성·긍정·개발·개별화·책임 (전부 대인관계 영역)', '자동화 도구를 팀 전체에 배포해 조직 역량 향상', '40여 개 기업 파트너십 성사 (오픈놀)'],
    friendQuotes: ['항상 에너지 넘치고 남들에게 좋은 영향을 준다', '야구를 관계 속에서 활용하며 리더 역할도 잘하면서 즐기는 사람'],
    color: '#0EA5E9',
    bg: '#E0F2FE',
  },
  {
    emoji: '🔍',
    title: '겉은 에너지, 속은 치밀한 분석',
    summary: '활발해 보이지만 실제로는 데이터로 판단하고 신중하게 행동합니다.',
    detail:
      '친구들이 "의외로 신중한 스타일"이라고 표현합니다.<br>브라운백에서 고객 머무름 데이터를 분석해 콜드메일 3종을 A/B 테스트했고,<br>포트원에서는 SalesClue로 제안서 열람 데이터를 추적해 전략을 수정했습니다.<br>직관처럼 보이는 행동 뒤에는 항상 데이터가 있습니다.',
    evidence: ['콜드메일 A/B 테스트로 회신율 1.7% → 3.8% 개선', 'SalesClue 열람 추적으로 제안서 전략 수정', '"가설 수립 후 검증" 원칙을 모든 업무에 적용'],
    friendQuotes: ['진지한 사람이다', '의외로 신중한 스타일이다'],
    color: '#10B981',
    bg: '#D1FAE5',
  },
  {
    emoji: '🎯',
    title: '선명한 정체성, 잊히지 않는 존재감',
    summary: '무엇을 좋아하는지 명확하고, 그 열정이 일에서도 그대로 나옵니다.',
    detail:
      '야구·댄스·우드카빙·AI개발·유튜브 — 겉으로는 다 달라 보이지만<br>"좋아하면 깊이 파고드는" 패턴 하나로 관통됩니다.<br>이 패턴이 영업에서는 자동화 도구 개발로, 팀에서는 시스템 구축으로 나타납니다.<br>조직에 들어오면 존재감이 선명한 사람입니다.',
    evidence: ['우드카빙·Kpop댄스·AI노래방 유튜브 등 다채로운 취미를 직접 즐김', 'BlogCheatKey SaaS — 기획부터 배포까지 단독 개발', '포트폴리오 웹사이트도 직접 개발'],
    friendQuotes: ['캐릭터가 명확해서 잊혀지지 않을 사람', '대한민국 대표 청춘'],
    color: '#F59E0B',
    bg: '#FEF3C7',
  },
]

// ─── 친구들의 한 마디 ────────────────────────────────────────────────────────
const friendWords = [
  '진지한 사람',
  '도전하는 사람!',
  '대한민국 대표 청춘',
  '의외로 신중한 스타일',
  '에너지 넘치고 남들에게 좋은 영향을 주는 사람',
  '삶을 다채롭게 사는 열정이 있다',
  '능글맞은 모습이 장점',
  '캐릭터가 명확해서 잊혀지지 않을 사람',
  '망설임 없이 도전할 때 제일 부럽다',
  '취미와 좋아하는 것을 알고 누릴 줄 안다',
  '무언가 계속 도전하는 모습이 멋지다',
  '열정있게 삶을 즐길 줄 아는 모습',
]

export default function PeopleSay() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="people-say"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="reveal" style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
            Who I Am
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 14 }}>
            어떤 사람인가요?
          </h2>
          <p style={{ fontSize: 15, color: 'var(--color-muted)', maxWidth: 600, lineHeight: 1.7 }}>
            이력서의 숫자 너머, 함께 일하게 될 사람이 어떤 사람인지 —<br/>
            업무 데이터와 주변 사람들의 시각을 함께 정리했습니다.
          </p>
        </div>

        {/* ── 핵심 특성 4개 ─────────────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 56 }}>
          {traits.map((trait, i) => (
            <div
              key={trait.title}
              className={`reveal reveal-delay-${i % 2}`}
              style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                padding: '28px 28px 24px',
                transition: 'box-shadow var(--transition), transform var(--transition)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = 'var(--shadow-md)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = ''
                el.style.transform = ''
              }}
            >
              {/* 제목 행 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: trait.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {trait.emoji}
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                    {trait.title}
                  </h3>
                  <p style={{ fontSize: 13, color: trait.color, fontWeight: 600, margin: 0, marginTop: 2 }}>
                    {trait.summary}
                  </p>
                </div>
              </div>

              {/* 본문 */}
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--color-secondary)', margin: '12px 0 16px', paddingLeft: 52 }} dangerouslySetInnerHTML={{ __html: trait.detail }} />

              {/* 근거 + 주변 말 */}
              <div style={{ paddingLeft: 52, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {/* 업무 근거 */}
                <div
                  style={{
                    background: 'var(--color-surface)',
                    borderRadius: 8,
                    padding: '12px 14px',
                    borderLeft: `3px solid ${trait.color}`,
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                    업무 근거
                  </div>
                  {trait.evidence.map((e) => (
                    <div key={e} style={{ fontSize: 13, color: 'var(--color-secondary)', lineHeight: 1.6, marginBottom: 4, display: 'flex', gap: 6 }}>
                      <span style={{ color: trait.color, flexShrink: 0 }}>•</span>
                      {e}
                    </div>
                  ))}
                </div>

                {/* 주변 사람 말 */}
                <div
                  style={{
                    background: 'var(--color-surface)',
                    borderRadius: 8,
                    padding: '12px 14px',
                    borderLeft: `3px solid ${trait.color}44`,
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                    주변 사람들의 말
                  </div>
                  {trait.friendQuotes.map((q) => (
                    <div key={q} style={{ fontSize: 13, color: 'var(--color-secondary)', lineHeight: 1.6, marginBottom: 4 }}>
                      <span style={{ color: trait.color, opacity: 0.5, fontFamily: 'Georgia, serif', fontSize: 16, lineHeight: 1 }}>&ldquo;</span>
                      {' '}{q}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── AI 분석 한 줄 요약 배너 ──────────────────────────── */}
        <div
          className="reveal"
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #1e3a5f 100%)',
            borderRadius: 'var(--radius)',
            padding: '28px 32px',
            marginBottom: 48,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute', top: -20, right: -10,
              fontSize: 100, opacity: 0.04, userSelect: 'none',
              fontFamily: 'Georgia, serif', color: '#fff',
            }}
          >
            AI
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#818CF8', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
            Claude의 분석
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#E0E7FF', fontWeight: 500, margin: '0 0 16px' }}>
            에너지는 사람에서 오고, 결과는 데이터에서 나오는 사람입니다.<br />
            활발해 보이지만 실제로는 치밀하게 분석하고, 혼자 잘하는 데서 멈추지 않고 팀이 잘되는 시스템을 만들려는 사람입니다.
          </p>
          <p style={{ fontSize: 13, color: '#A5B4FC', margin: 0, lineHeight: 1.6 }}>
            이력서·강점검사·사주·주변 사람들의 말이 전부 같은 방향을 가리킵니다 —{' '}
            <strong style={{ color: '#C7D2FE' }}>사람을 좋아하고, 문제를 보면 직접 풀고, 그 결과를 나누는 사람.</strong>
          </p>
        </div>

        {/* ── 주변 사람들의 말 태그 모음 ────────────────────────── */}
        <div className="reveal">
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-muted)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>
            주변 사람들이 남긴 말들
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {friendWords.map((word, i) => {
              const colors = ['#6366F1', '#0EA5E9', '#10B981', '#F59E0B', '#EF4444']
              const bgs = ['#EEF2FF', '#E0F2FE', '#D1FAE5', '#FEF3C7', '#FEE2E2']
              const c = colors[i % colors.length]
              const b = bgs[i % bgs.length]
              return (
                <span
                  key={word}
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    padding: '6px 14px',
                    borderRadius: 100,
                    background: b,
                    color: c,
                    border: `1px solid ${c}33`,
                  }}
                >
                  {word}
                </span>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
