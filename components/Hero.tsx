'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false)

  return (
    <section
      id="main"
      style={{
        paddingTop: 140,
        paddingBottom: 80,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 24px 80px',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
        <div
          className="hero-inner"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: 60,
            alignItems: 'center',
          }}
        >
          {/* 왼쪽: 텍스트 */}
          <div>
            {/* 뱃지 */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--color-accent-light)',
                color: 'var(--color-accent)',
                border: '1px solid #BFDBFE',
                padding: '6px 14px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                marginBottom: 20,
                opacity: 0,
                animation: 'fadeUp 0.5s 0.1s ease forwards',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              PortOne · SDR 재직 중
            </div>

            {/* 제목 */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-2px',
                marginBottom: 20,
                opacity: 0,
                animation: 'fadeUp 0.55s 0.2s ease forwards',
              }}
            >
              데이터로{' '}
              <span
                style={{
                  color: 'var(--color-accent)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                세일즈
                <span
                  style={{
                    content: "''",
                    position: 'absolute',
                    bottom: 2,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, var(--color-accent), #7C3AED)',
                    borderRadius: 2,
                    opacity: 0.25,
                  }}
                />
              </span>
              를
              <br />
              코드로{' '}
              <span
                style={{
                  color: 'var(--color-accent)',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                자동화
                <span
                  style={{
                    position: 'absolute',
                    bottom: 2,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, var(--color-accent), #7C3AED)',
                    borderRadius: 2,
                    opacity: 0.25,
                  }}
                />
              </span>
              합니다
            </h1>

            {/* 설명 */}
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: 'var(--color-secondary)',
                marginBottom: 32,
                maxWidth: 480,
                opacity: 0,
                animation: 'fadeUp 0.55s 0.3s ease forwards',
              }}
            >
              AI 툴을 직접 개발해 B2B 세일즈에 접목하는 영업 매니저입니다.
              콜드메일 파이프라인 구축, 개인화 챗봇 개발, 반복 업무 자동화로
              전환율을 끌어올립니다.
            </p>

            {/* 버튼 */}
            <div
              style={{
                display: 'flex',
                gap: 12,
                flexWrap: 'wrap',
                opacity: 0,
                animation: 'fadeUp 0.55s 0.4s ease forwards',
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--color-accent)',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background var(--transition), transform var(--transition), box-shadow var(--transition)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--color-accent-hover)'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = '0 8px 20px rgba(37,99,235,.3)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'var(--color-accent)'
                  el.style.transform = ''
                  el.style.boxShadow = ''
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                프로젝트 보기
              </a>
              <a
                href="https://github.com/ohjunho421"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--color-surface)',
                  color: 'var(--color-primary)',
                  border: '1.5px solid var(--color-border)',
                  padding: '12px 24px',
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'border-color var(--transition), transform var(--transition), box-shadow var(--transition)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-primary)'
                  el.style.transform = 'translateY(-2px)'
                  el.style.boxShadow = 'var(--shadow-sm)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.transform = ''
                  el.style.boxShadow = ''
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            {/* 통계 */}
            <div
              style={{
                display: 'flex',
                marginTop: 40,
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                opacity: 0,
                animation: 'fadeUp 0.55s 0.5s ease forwards',
              }}
            >
              {[
                { num: '11,674', unit: '건', label: '콜드메일 발송' },
                { num: '2.2', unit: '배', label: '회신율 향상' },
                { num: '21', unit: '개', label: 'GitHub 레포' },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    flex: 1,
                    padding: '16px 20px',
                    borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                    transition: 'background var(--transition)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--color-surface-2)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = ''
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 26,
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      lineHeight: 1,
                      letterSpacing: '-1px',
                    }}
                  >
                    {s.num}
                    <span style={{ color: 'var(--color-accent)' }}>{s.unit}</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-muted)', marginTop: 5, fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽: 프로필 카드 */}
          <div
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 20,
              padding: 28,
              boxShadow: 'var(--shadow-lg)',
              opacity: 0,
              animation: 'fadeScale 0.6s 0.3s ease forwards',
            }}
            className="hero-card"
          >
            <div style={{ position: 'relative', width: 88, height: 88, marginBottom: 16 }}>
              {!avatarError ? (
                <Image
                  src="/profile.jpg"
                  alt="오준호 프로필 사진"
                  width={88}
                  height={88}
                  style={{ borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: '3px solid var(--color-border)' }}
                  onError={() => setAvatarError(true)}
                />
              ) : (
                <div
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, #7C3AED 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 30,
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  오
                </div>
              )}
              <div
                style={{
                  position: 'absolute',
                  bottom: 4,
                  right: 4,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: '#22C55E',
                  border: '2.5px solid #fff',
                }}
              />
            </div>

            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px' }}>
              오준호
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-accent)', fontWeight: 600, marginTop: 2 }}>
              B2B Sales × AI Developer
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              경기도 의정부
            </div>

            <div style={{ height: 1, background: 'var(--color-border)', margin: '16px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                {
                  href: 'mailto:jjuno_92@hanmail.net',
                  label: 'jjuno_92@hanmail.net',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  href: 'tel:010-5001-2143',
                  label: '010-5001-2143',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18C0 1.1.87.01 2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://github.com/ohjunho421',
                  label: 'github.com/ohjunho421',
                  target: '_blank',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: 'https://www.youtube.com/@Rorarion',
                  label: '@Rorarion',
                  target: '_blank',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel={link.target ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 13,
                    fontWeight: 500,
                    color: 'var(--color-secondary)',
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid transparent',
                    transition: 'all var(--transition)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'var(--color-surface-2)'
                    el.style.borderColor = 'var(--color-border)'
                    el.style.color = 'var(--color-primary)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = ''
                    el.style.borderColor = 'transparent'
                    el.style.color = 'var(--color-secondary)'
                  }}
                >
                  <span style={{ color: 'var(--color-muted)', flexShrink: 0 }}>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
              {['Python', 'TypeScript', 'React', 'B2B SaaS', 'AI 자동화', 'SEO'].map((s) => (
                <span
                  key={s}
                  style={{
                    background: 'var(--color-surface-2)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-secondary)',
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: 100,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
