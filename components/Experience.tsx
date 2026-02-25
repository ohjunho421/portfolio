'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'PortOne (포트원)',
    role: 'SDR · 영업개발',
    period: '2025.06 ~ 현재',
    type: '결제 인프라 B2B SaaS · 약 9개월',
    bullets: [
      '맞춤형 콜드메일 <strong>11,674건</strong> 발송, 평균 열람률 <strong>64.5%</strong> 달성 — Google Apps Script로 기업 정보 자동 수집하여 타겟 발굴 시간 <strong>80% 단축</strong>',
      'Perplexity API + Gemini AI 연동 <strong>개인화 챗봇 직접 개발</strong> → 회신율 <strong>1.7% → 3.8% (2.2배↑)</strong> — 기업별 최근 뉴스 자동 분석 후 맞춤 이메일 서론 생성',
      '열람 추적 기반 최적 타이밍 후속 연락 루틴 정립, 다채널 아웃바운드로 <strong>30곳 미팅 성사 → 5개사 신규 계약</strong> 전환',
      '자동화 대시보드·AI 챗봇을 SDR 팀 전체에 배포 → <strong>팀 전체 아웃바운드 역량 향상</strong>에 기여',
    ],
    kpis: [
      { num: '11,674', label: '콜드메일 발송' },
      { num: '64.5%', label: '열람률' },
      { num: '2.2×', label: '회신율 향상' },
      { num: '30건', label: '미팅 성사' },
      { num: '5건', label: '신규 계약' },
    ],
  },
  {
    company: 'AIPARK',
    role: 'SaaS Sales',
    period: '2024.07 ~ 2024.10',
    type: 'AI 음성 합성 SaaS · 4개월',
    bullets: [
      'Try Everything 박람회 현장 <strong>리드 수집 및 즉석 데모</strong> 진행 — AI SaaS 기술 가치를 고객 언어로 전환하여 후속 영업 연결',
      '시트 기반 <strong>자동 메일 발송 시스템</strong> 직접 구현, 반복 영업 작업 자동화로 발송 효율 개선',
    ],
    kpis: [],
  },
  {
    company: '오픈놀',
    role: 'B2B 영업 매니저',
    period: '2022.05 ~ 2023.12',
    type: 'HR·교육 플랫폼 · 1년 8개월',
    bullets: [
      '일 20곳+ 아웃바운드 → 미팅 전환율 월평균 <strong>10%</strong> 달성 — 거절 사유 분석으로 콜 스크립트 지속 개선',
      '<strong>40여 개</strong> 기업 파트너십 성사 (나라비전, 게임듀오 등) — 고용노동부 KPI(20%) 대비 <strong>달성률 72%</strong>',
      '강남취창업허브 오프라인 세미나 기획·운영 총괄 — 온·오프라인 <strong>잠재고객 발굴 채널 다양화</strong>',
    ],
    kpis: [
      { num: '40+', label: '기업 파트너십' },
      { num: '72%', label: 'KPI 달성률' },
      { num: '10%', label: '미팅 전환율' },
    ],
  },
  {
    company: '브라운백 커피 (스윗버드)',
    role: 'B2B 구독 서비스 영업',
    period: '2020.10 ~ 2022.04',
    type: '커피머신 렌탈·원두 구독 · 1년 6개월',
    bullets: [
      '일 40곳 인바운드 대응 → 월 전환율 <strong>15%</strong> (최대 <strong>40%</strong>), 팀 평균(5%) 대비 <strong>3배</strong> — 기업별 맞춤 구독 패키지 제안',
      '고객 불만 근본 원인 분석 → 원두별 최적 세팅 매뉴얼 구축 + 현장 교육 실시로 <strong>설치 시간 단축 및 초기 이탈 감소</strong>',
    ],
    kpis: [
      { num: '15%', label: '월 전환율 (팀 3배)' },
      { num: '최대 40%', label: '단월 최고' },
    ],
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
