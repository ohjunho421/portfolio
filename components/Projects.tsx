'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    featured: true,
    href: 'https://github.com/ohjunho421/blogcheatkey_railway',
    name: 'BlogCheatKey',
    desc: '자영업자를 위한 AI 기반 SEO 최적화 블로그 자동 생성 SaaS 플랫폼.<br>키워드 하나로 1,700~2,000자 SEO 최적화 글을 3분 내 생성.<br>Claude Sonnet + Gemini 2.5 Pro + Perplexity 멀티 AI 아키텍처.<br>포트원 결제 연동, Google/Kakao/Naver OAuth 구현.',
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
    desc: 'PortOne SDR 업무에서 직접 개발·사용 중인 AI 영업 메일 생성 시스템.<br>CSV 업로드 → 회사 정보 자동 수집 → Gemini 기반 개인화 문안 4종 생성.<br>SSR 알고리즘 기반 관련성 스코어링, 24시간 캐시로 효율 극대화.',
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
    desc: '동양 사주 만세력과 서양 타로를 융합한 AI 운세 해석 플랫폼.<br>생년월일시 기반 오행 분석 + 다중 타로 스프레드 + OpenAI 통합 해석.<br>React 18 + TypeScript, Framer Motion 애니메이션, 163개 커밋 활발 개발 중.',
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
    desc: 'XGBoost + RandomForest 머신러닝으로 로또 번호 추천하는 Django 웹앱.<br>과거 당첨 빈도 vs 미래 잠재력 이중 전략, JWT 인증, OpenAI 챗봇 UI.<br>1스타 획득, 56개 커밋.',
    tags: ['Python', 'Django', 'XGBoost', 'scikit-learn', 'Pandas', 'JWT'],
    stats: [],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
  },
]

const privateProjects = [
  {
    name: '타겟 발굴 자동화',
    desc: '브라운백 커피 재직 시 개발.<br>잠재 고객사 정보를 웹에서 자동 수집·정제해 영업 리스트로 변환하는 파이프라인.<br>수동 대비 시간 80% 단축, 팀 전체에 배포해 조직 역량 향상.',
    tags: ['Python', 'Selenium', 'Google Apps Script', 'Pandas'],
    achievement: '시간 80% 단축',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    name: '콜드메일 A/B 테스트 시스템',
    desc: '제목·본문·CTA 3가지 변수 조합으로 콜드메일 효과를 자동 비교.<br>발송 후 오픈율·회신율을 스프레드시트에 집계하고 최적안을 선택.<br>회신율 1.7% → 3.8% 개선.',
    tags: ['Python', 'Google Sheets API', 'SMTP', 'Pandas'],
    achievement: '회신율 2.2배',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: 'SDR 내부 자동화 툴킷',
    desc: 'PortOne SDR 재직 중 구축한 사내 영업 자동화 도구 모음.<br>잠재고객 회사 정보 자동 수집, Gemini 기반 개인화 제안서 생성,<br>SalesClue 열람 추적 연동.',
    tags: ['Python', 'Google Apps Script', 'Gemini API', 'Perplexity'],
    achievement: '11,674건 발송 기반',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
]

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
)

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
              <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: featured.desc }} />
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
              <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.65, flex: 1 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
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

        {/* ── 비공개 프로젝트 ─────────────────────────────────── */}
        <div className="reveal" style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ height: 1, flex: 1, background: 'var(--color-border)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: 1.5, padding: '4px 12px', border: '1px solid var(--color-border)', borderRadius: 100, background: 'var(--color-surface)', whiteSpace: 'nowrap' }}>
              <LockIcon />
              비공개 프로젝트
            </div>
            <div style={{ height: 1, flex: 1, background: 'var(--color-border)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="private-projects-grid">
            {privateProjects.map((p) => (
              <div
                key={p.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius)',
                  padding: 20,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-muted)' }}>
                    {p.icon}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 600, color: 'var(--color-muted)', background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', padding: '3px 8px', borderRadius: 100 }}>
                    <LockIcon />
                    Private
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 700, marginBottom: 6, letterSpacing: '-0.3px' }}>
                  {p.name}
                </div>
                <p style={{ fontSize: 12, color: 'var(--color-muted)', lineHeight: 1.65, flex: 1, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
                  {p.tags.map((t) => (
                    <span key={t} style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', color: 'var(--color-secondary)', fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 100 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {p.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
