'use client'

import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    title: 'B2B Sales & GTM',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    items: [
      { label: '아웃바운드 파이프라인', level: 'Expert', pct: 92 },
      { label: '콜드메일 카피라이팅', level: 'Advanced', pct: 88 },
      { label: 'SaaS 기술 세일즈', level: 'Advanced', pct: 82 },
      { label: 'CRM 운영', level: 'Intermediate', pct: 70 },
    ],
  },
  {
    title: 'AI & Automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M12 2a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2V4a2 2 0 012-2zM12 16a2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2v-2a2 2 0 012-2zM2 12a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2zM16 12a2 2 0 012-2h2a2 2 0 012 2 2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: [
      { label: 'Gemini / Claude API', level: 'Advanced', pct: 85 },
      { label: 'Perplexity / OpenAI', level: 'Advanced', pct: 82 },
      { label: '웹 스크래핑 (Selenium)', level: 'Advanced', pct: 78 },
      { label: '프롬프트 엔지니어링', level: 'Advanced', pct: 80 },
    ],
  },
  {
    title: 'Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      { label: 'Python', level: 'Advanced', pct: 83 },
      { label: 'TypeScript / React', level: 'Intermediate', pct: 72 },
      { label: 'Node.js / Express', level: 'Intermediate', pct: 68 },
      { label: 'Django / Flask', level: 'Intermediate', pct: 65 },
    ],
  },
]

const techTags = [
  'Python', 'TypeScript', 'React 18', 'Node.js', 'Django', 'Flask',
  'PostgreSQL', 'Claude API', 'Gemini API', 'Perplexity API', 'OpenAI API',
  'Selenium', 'BeautifulSoup', 'Pandas', 'scikit-learn', 'XGBoost',
  'TailwindCSS', 'Drizzle ORM', 'Railway', 'PortOne 결제', 'OAuth', 'JWT',
  'Git', 'MCP', 'Zustand', 'Framer Motion', 'Vite',
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
              setTimeout(() => bar.classList.add('visible'), i * 130)
            })
            skillObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    sectionRef.current?.querySelectorAll('.skill-group-card').forEach((el) => skillObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      skillObserver.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} id="skills" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
            Skills
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 16 }}>
            기술 스택
          </h2>
          <p style={{ fontSize: 16, color: 'var(--color-secondary)', lineHeight: 1.75 }}>
            세일즈와 개발을 연결하는 도구들입니다.
          </p>
        </div>

        <div
          className="skills-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className={`skill-group-card reveal${gi > 0 ? ` reveal-delay-${gi}` : ''}`}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                padding: 24,
                transition: 'box-shadow var(--transition)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '' }}
            >
              <div
                style={{
                  width: 40, height: 40,
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--color-accent-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                  color: 'var(--color-accent)',
                }}
              >
                {group.icon}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>{group.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: 13, color: 'var(--color-secondary)', marginBottom: 4, display: 'flex', justifyContent: 'space-between' }}>
                      {item.label}
                      <span style={{ fontSize: 12, color: 'var(--color-muted)' }}>{item.level}</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="reveal" style={{ marginTop: 32 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            전체 기술 태그
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {techTags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-secondary)',
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'all var(--transition)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--color-accent-light)'
                  el.style.borderColor = '#93C5FD'
                  el.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--color-surface-2)'
                  el.style.borderColor = 'var(--color-border)'
                  el.style.color = 'var(--color-secondary)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
