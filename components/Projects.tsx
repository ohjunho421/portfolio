'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    featured: true,
    href: 'https://github.com/ohjunho421/blogcheatkey_railway',
    name: 'BlogCheatKey',
    desc: '자영업자를 위한 AI 기반 SEO 최적화 블로그 자동 생성 SaaS 플랫폼. 키워드 하나로 1,700~2,000자 SEO 최적화 글을 3분 내 생성. Claude Sonnet + Gemini 2.5 Pro + Perplexity 멀티 AI 아키텍처. 포트원 결제 연동, Google/Kakao/Naver OAuth 구현.',
    tags: ['TypeScript', 'React 18', 'Node.js', 'PostgreSQL', 'Claude AI', 'Gemini', 'Perplexity', 'Railway'],
    stats: [
      { num: '3분', label: '6시간 → 3분으로 단축' },
      { num: '3개', label: '멀티 AI 모델 통합' },
      { num: 'SaaS', label: '실결제 연동 서비스' },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    featured: false,
    href: 'https://github.com/ohjunho421/email-copywriting-chatbot',
    name: '콜드메일 자동화 챗봇',
    desc: 'PortOne SDR 업무에서 직접 개발·사용 중인 AI 영업 메일 생성 시스템. CSV 업로드 → 회사 정보 자동 수집 → Gemini 기반 개인화 문안 4종 생성. SSR 알고리즘 기반 관련성 스코어링, 24시간 캐시로 효율 극대화.',
    tags: ['Python', 'Flask', 'Gemini 2.5', 'Perplexity', 'Selenium', 'Pandas'],
    stats: [],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    featured: false,
    href: 'https://github.com/ohjunho421/saju-tarot',
    name: '사주 타로 통합 서비스',
    desc: '동양 사주 만세력과 서양 타로를 융합한 AI 운세 해석 플랫폼. 생년월일시 기반 오행 분석 + 다중 타로 스프레드 + OpenAI 통합 해석. React 18 + TypeScript, Framer Motion 애니메이션, 163개 커밋 활발 개발 중.',
    tags: ['TypeScript', 'React 18', 'Node.js', 'OpenAI', 'Zustand', 'Framer Motion'],
    stats: [],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    featured: false,
    href: 'https://github.com/ohjunho421/lottodeeplearing',
    name: '로또 딥러닝 예측 웹앱',
    desc: 'XGBoost + RandomForest 머신러닝으로 로또 번호 추천하는 Django 웹앱. 과거 당첨 빈도 vs 미래 잠재력 이중 전략, JWT 인증, OpenAI 챗봇 UI. 1스타 획득, 56개 커밋.',
    tags: ['Python', 'Django', 'XGBoost', 'scikit-learn', 'Pandas', 'JWT'],
    stats: [],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
]

const LinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
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
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)

  const cardHover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
    const el = e.currentTarget as HTMLElement
    el.style.boxShadow = enter ? 'var(--shadow-md)' : ''
    el.style.transform = enter ? 'translateY(-3px)' : ''
    el.style.borderColor = enter ? '#CBD5E1' : 'var(--color-border)'
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        background: 'var(--color-surface-2)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
            Projects
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 16 }}>
            직접 만든 것들
          </h2>
          <p style={{ fontSize: 16, color: 'var(--color-secondary)', lineHeight: 1.75 }}>
            세일즈 현장에서 필요를 느끼고, 코드로 해결한 프로젝트들입니다.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="projects-grid">
          {/* Featured */}
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal"
            onMouseEnter={(e) => cardHover(e, true)}
            onMouseLeave={(e) => cardHover(e, false)}
            style={{
              gridColumn: '1 / -1',
              display: 'grid',
              gridTemplateColumns: '1fr 240px',
              gap: 24,
              alignItems: 'start',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius)',
              padding: 24,
              textDecoration: 'none',
              color: 'inherit',
              transition: 'box-shadow var(--transition), transform var(--transition), border-color var(--transition)',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--color-accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  {featured.icon}
                </div>
                <span style={{ color: 'var(--color-muted)' }}><LinkIcon /></span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, marginBottom: 6, letterSpacing: '-0.3px' }}>
                {featured.name}
              </div>
              <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.65 }}>{featured.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 16 }}>
                {featured.tags.map((t) => (
                  <span key={t} style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', color: 'var(--color-secondary)', fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 100 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {featured.stats.map((s) => (
                <div key={s.label} style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </a>

          {/* Rest */}
          {rest.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal"
              onMouseEnter={(e) => cardHover(e, true)}
              onMouseLeave={(e) => cardHover(e, false)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                padding: 24,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'box-shadow var(--transition), transform var(--transition), border-color var(--transition)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--color-accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                  {p.icon}
                </div>
                <span style={{ color: 'var(--color-muted)' }}><LinkIcon /></span>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, marginBottom: 6, letterSpacing: '-0.3px' }}>
                {p.name}
              </div>
              <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.65, flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 16 }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', color: 'var(--color-secondary)', fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 100 }}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
