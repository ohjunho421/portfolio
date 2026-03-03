'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'PortOne (포트원)',
    role: 'SDR · 영업개발',
    period: '2025.06 ~ 현재',
    type: '결제 인프라 B2B SaaS · 약 9개월',
    bullets: [
      'Google Apps Script로 기업 매출·거래액 데이터 자동 수집 파이프라인 구축 → 타겟 발굴 시간 <strong>80% 단축</strong>, 맞춤형 콜드메일 <strong>11,674건</strong> 발송·평균 열람률 <strong>64.5%</strong> 달성',
      '회신율 <strong>1.7% 벽</strong>에 부딪혔을 때, 발송량이 아닌 개인화가 답이라 판단 — Perplexity API + Gemini AI로 기업별 최신 뉴스를 분석해 맞춤 서론을 자동 생성하는 <strong>AI 챗봇 직접 개발</strong>. 학술 SSR 지표 적용 A/B 테스트로 <strong>회신율 3.8% (2.2배↑)</strong> 달성',
      '박람회 명함 수집 → 콜드비짓 → 즉시 팔로업까지 연결되는 <strong>다채널 아웃바운드 루틴</strong> 정립 (열람 추적 기반 최적 타이밍 자동 알림 포함) → 온라인 거래액 1억 이상 우량 기업 <strong>30곳 미팅 성사 → 5개사 온보딩 전환</strong>',
      '자동화 대시보드·AI 챗봇을 팀 전체가 활용할 수 있도록 배포 → <strong>SDR 팀 전체 아웃바운드 역량 표준화</strong>에 기여',
    ],
    kpis: [
      { num: '11,674', label: '콜드메일 발송' },
      { num: '64.5%', label: '열람률' },
      { num: '2.2×', label: '회신율 향상' },
      { num: '30건', label: '미팅 성사' },
      { num: '5건', label: '온보딩 전환' },
    ],
  },
  {
    company: 'AIPARK',
    role: 'SaaS Sales',
    period: '2024.07 ~ 2024.10',
    type: 'AI 음성 합성 SaaS · 4개월',
    bullets: [
      'Try Everything 박람회 부스 직접 운영 — 현장에서 <strong>리드 수집 및 즉석 데모</strong> 진행, AI 음성 합성 기술의 가치를 고객 언어로 풀어내어 후속 영업 파이프라인으로 연결',
      '반복되는 이메일 발송 업무를 구글 시트 기반 <strong>자동 메일 발송 시스템으로 직접 구현</strong> — 수작업 제거로 팀 발송 효율 개선 및 담당자가 고객 소통에 집중할 수 있는 환경 조성',
    ],
    kpis: [],
  },
  {
    company: '오픈놀',
    role: 'B2B 영업 매니저',
    period: '2022.05 ~ 2023.12',
    type: 'HR·교육 플랫폼 · 1년 8개월',
    bullets: [
      '일 20곳+ 콜드콜 아웃바운드 집행 — <strong>거절 사유를 매일 기록·분석</strong>하여 콜 스크립트를 지속 개선, 미팅 전환율 월평균 <strong>10%</strong> 달성 (업계 평균 대비 고전환)',
      '나라비전·게임듀오 등 <strong>40여 개 기업 파트너십 성사</strong> — 고용노동부 지정 KPI 목표(20개사) 대비 <strong>달성률 200%</strong>, 교육 과정 수강 기업 수 기준 팀 내 최다 실적',
      '강남취창업허브 오프라인 세미나 기획·운영 총괄 — 잠재 고객을 직접 한 자리에 모아 온·오프라인 <strong>잠재고객 발굴 채널을 다양화</strong>하고 파이프라인 확대에 기여',
    ],
    kpis: [
      { num: '40+', label: '기업 파트너십' },
      { num: '200%', label: 'KPI 달성률' },
      { num: '10%', label: '미팅 전환율' },
    ],
  },
  {
    company: '브라운백 커피 (스윗버드)',
    role: 'B2B 구독 서비스 영업',
    period: '2020.10 ~ 2022.04',
    type: '커피머신 렌탈·원두 구독 · 1년 6개월',
    bullets: [
      '일 40곳 인바운드 콜 대응 — 기업 규모·업종별 <strong>맞춤 구독 패키지</strong>를 즉석 제안하여 월 전환율 <strong>15%</strong> (최대 <strong>40%</strong>) 달성, <strong>팀 평균(5%) 대비 3배</strong>',
      '고객 불만의 근본 원인이 원두별 추출 세팅 편차임을 데이터로 확인 → 5가지 원두별 최적 세팅값 매뉴얼 직접 제작 + 현장 교육 실시 → <strong>설치 시간 단축·초기 이탈률 감소</strong>, 팀 전체 품질 표준화',
    ],
    kpis: [
      { num: '15%', label: '월 전환율 (팀 3배)' },
      { num: '최대 40%', label: '단월 최고 전환율' },
      { num: '5종', label: '원두 세팅 매뉴얼' },
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
                padding: 32,
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
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

              <ul style={{ listStyle: 'none', marginTop: 0, borderTop: '1px solid var(--color-border)', paddingTop: 20 }}>
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{ fontSize: 15, color: 'var(--color-secondary)', paddingLeft: 22, position: 'relative', marginBottom: 14, lineHeight: 1.82 }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 11,
                        width: 7,
                        height: 7,
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
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 0, borderTop: '1px solid var(--color-border)', paddingTop: 20 }}>
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
                      <div style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 3 }}>{kpi.label}</div>
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
