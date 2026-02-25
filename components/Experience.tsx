'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'PortOne (코리아포트원)',
    role: 'SDR · 영업개발',
    period: '2025.06 ~ 현재',
    type: '결제 인프라 B2B SaaS · 약 9개월',
    bullets: [
      '<strong>AI 콜드메일 파이프라인</strong> 직접 구축 및 운영 — CSV 업로드 → 회사 정보 자동 수집 → AI 문안 생성 → 발송까지 완전 자동화',
      'Perplexity + Gemini 기반 <strong>개인화 이메일 생성 시스템</strong> 개발로 회신율 1.7% → 3.8% (2.2배) 향상',
      'Selenium + BeautifulSoup으로 뉴스 자동 스크래핑, 24시간 캐시 시스템으로 <strong>실시간 데이터 기반 아웃바운드</strong> 집행',
      'SDR 활동 총 <strong>11,674건 발송</strong>, 결제 인프라 도입 관련 파이프라인 관리',
    ],
    kpis: [
      { num: '11,674', label: '총 발송 건수' },
      { num: '2.2×', label: '회신율 향상' },
      { num: '100%', label: '자동화율' },
    ],
  },
  {
    company: 'AIPARK',
    role: 'SaaS Sales',
    period: '2024.07 ~ 2024.10',
    type: 'AI SaaS · 4개월',
    bullets: [
      'AI 음성 합성 SaaS 솔루션 B2B 영업, 미디어·광고 대행사 대상 파이프라인 구축',
      '기술 세일즈 역량 강화 — AI 제품 특성 파악 후 고객사 니즈에 맞는 제안 방식 체계화',
    ],
    kpis: [],
  },
  {
    company: '오픈놀',
    role: 'B2B 영업 매니저',
    period: '2022.05 ~ 2024.01',
    type: 'HR·교육 플랫폼 · 1년 9개월',
    bullets: [
      '기업 대상 직무 교육 프로그램 B2B 영업, 법인 고객 개발 및 관리',
      '반복 제안 업무 자동화 스크립트 작성으로 업무 효율 향상 경험을 쌓으며 개발 커리어 준비 시작',
    ],
    kpis: [],
  },
  {
    company: '브라운백 커피 (스윗버드)',
    role: 'B2B 구독 서비스 영업',
    period: '2020.10 ~ 2022.04',
    type: '커피머신 렌탈·원두 구독 · 1년 6개월',
    bullets: [
      '기업 및 오피스 대상 커피머신 렌탈·원두 구독 서비스 B2B 영업, 신규 계약 발굴',
      '구독 계약 유지를 위한 고객 관계 관리 및 갱신 협상',
    ],
    kpis: [],
  },
]

export default function Experience() {
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

  return (
    <section ref={sectionRef} id="experience" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
            Experience
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 16 }}>
            경력
          </h2>
          <p style={{ fontSize: 16, color: 'var(--color-secondary)', lineHeight: 1.75 }}>
            B2B 세일즈 현장에서 기술로 문제를 풀어온 여정입니다.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="reveal"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                padding: 28,
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px' }}>
                    {exp.company}
                  </div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                      fontSize: 12,
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 100,
                      marginTop: 4,
                    }}
                  >
                    {exp.role}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-muted)', whiteSpace: 'nowrap', textAlign: 'right' }}>
                  <div style={{ fontWeight: 600 }}>{exp.period}</div>
                  <div style={{ marginTop: 2 }}>{exp.type}</div>
                </div>
              </div>

              <ul style={{ listStyle: 'none', marginTop: 12 }}>
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{ fontSize: 14, color: 'var(--color-secondary)', paddingLeft: 18, position: 'relative', marginBottom: 8, lineHeight: 1.65 }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 9,
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--color-accent)',
                        display: 'block',
                      }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>

              {exp.kpis.length > 0 && (
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
                  {exp.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      style={{
                        background: 'var(--color-surface-2)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px 14px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1 }}>
                        {kpi.num}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--color-muted)', marginTop: 3 }}>{kpi.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
