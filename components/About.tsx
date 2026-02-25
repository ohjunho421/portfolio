'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'AI 기반 세일즈 자동화',
    desc: '콜드메일 파이프라인, 개인화 챗봇, 회사 정보 자동 수집 등 세일즈에 필요한 AI 툴을 직접 개발',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: '데이터 기반 전환율 개선',
    desc: 'SSR 알고리즘으로 이메일 개인화, 오픈율·회신율 A/B 테스트로 체계적인 성과 개선',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: '풀스택 SaaS 개발',
    desc: 'React + Node.js 기반 SaaS 플랫폼을 기획부터 배포까지 단독 개발, 실제 결제 연동',
  },
]

export default function About() {
  const [photoError, setPhotoError] = useState(false)
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

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
            About
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-1px' }}>
            세일즈와 개발의 경계에서
          </h2>
        </div>

        <div
          className="about-grid"
          style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr', gap: 48, alignItems: 'start' }}
        >
          {/* 사진 */}
          <div className="reveal about-photo-col">
            <div
              style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: 'var(--color-surface-2)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {!photoError ? (
                <Image
                  src="/profile.jpg"
                  alt="오준호 프로필 사진"
                  fill
                  sizes="220px"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(160deg, var(--color-accent) 0%, #7C3AED 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 60,
                    fontWeight: 700,
                    color: 'rgba(255,255,255,.5)',
                  }}
                >
                  오
                </div>
              )}
              <div
                style={{
                  position: 'absolute',
                  bottom: 12,
                  left: 12,
                  right: 12,
                  background: 'rgba(255,255,255,.9)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.3 }}>오준호</div>
                  <div style={{ fontSize: 11, color: 'var(--color-muted)' }}>PortOne SDR · 재직 중</div>
                </div>
              </div>
            </div>
          </div>

          {/* 텍스트 */}
          <div className="reveal reveal-delay-1">
            {[
              <>
                생명과학을 전공하며 <strong style={{ color: 'var(--color-primary)', fontWeight: 700 }}>데이터 기반 가설 검증의 과학적 사고</strong>를 익혔지만,
                저를 더 흥분시킨 것은 비즈니스 현장이었습니다. 고객 행동 데이터를 분석해
                영업 시스템을 만들고, 매출과 계약이라는 결과를 직접 만들어내는 과정에 매력을 느껴
                데이터 중심 B2B 세일즈로 전환했습니다.
              </>,
              <>
                브라운백 커피, 오픈놀, 포트원을 거치며{' '}
                <strong style={{ color: 'var(--color-primary)', fontWeight: 700 }}>&apos;가설 수립 후 검증&apos;과 &apos;3회 이상 반복 업무는 자동화&apos;</strong>라는
                원칙을 세웠습니다. 잠재고객 발굴부터 메일 발송과 열람 추적까지 전 과정을
                Google Apps Script와 AI 챗봇으로 직접 자동화하여, 사람이 집중해야 할
                고객 소통과 제안에 시간을 투자합니다.
              </>,
              <>
                현재 PortOne에서 SDR로 재직하며{' '}
                <strong style={{ color: 'var(--color-primary)', fontWeight: 700 }}>11,674건 콜드메일, 회신율 2.2배 향상, 30건 미팅에서 5건 계약</strong>을
                달성했습니다. 개발은 부트캠프와 독학으로 익혔고, Python·TypeScript로
                실제 서비스 가능한 SaaS를 만들며 기술과 세일즈를 하나의 무기로 통합합니다.
              </>,
            ].map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-secondary)', marginBottom: 16 }}>
                {p}
              </p>
            ))}
          </div>

          {/* 하이라이트 카드 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius)',
                  padding: 20,
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
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
                <div
                  style={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    background: 'var(--color-accent-light)',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                  }}
                >
                  {h.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{h.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--color-muted)', lineHeight: 1.6 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
