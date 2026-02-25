'use client'

const contactLinks = [
  {
    href: 'mailto:jjuno_92@hanmail.net',
    label: 'Email',
    value: 'jjuno_92@hanmail.net',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    href: 'tel:010-5001-2143',
    label: 'Phone',
    value: '010-5001-2143',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18C0 1.1.87.01 2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/ohjunho421',
    label: 'GitHub',
    value: 'github.com/ohjunho421',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://www.youtube.com/@Rorarion',
    label: 'YouTube',
    value: '@Rorarion',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{
          background: 'var(--color-primary)',
          color: '#fff',
          padding: '80px 24px',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 60,
              alignItems: 'center',
            }}
            className="contact-grid"
          >
            <div>
              <div style={{ marginBottom: 36 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#93C5FD', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
                  Contact
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-1px', color: '#fff', marginBottom: 16 }}>
                  함께 일해요
                </h2>
                <p style={{ fontSize: 16, color: '#A1A1AA', lineHeight: 1.75 }}>
                  B2B 세일즈 자동화, AI 개발 협업, 또는 커피 한 잔 이야기도 환영합니다.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {contactLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.target}
                    rel={link.target ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      background: 'rgba(255,255,255,.06)',
                      border: '1px solid rgba(255,255,255,.1)',
                      borderRadius: 'var(--radius)',
                      padding: '16px 20px',
                      textDecoration: 'none',
                      color: '#fff',
                      transition: 'all var(--transition)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'rgba(255,255,255,.1)'
                      el.style.borderColor = 'rgba(255,255,255,.2)'
                      el.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = 'rgba(255,255,255,.06)'
                      el.style.borderColor = 'rgba(255,255,255,.1)'
                      el.style.transform = ''
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255,255,255,.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#93C5FD',
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: '#71717A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                        {link.label}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 48,
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-2px',
                  marginBottom: 24,
                }}
              >
                Let&apos;s
                <br />
                <span style={{ color: '#60A5FA' }}>build</span>
                <br />
                together.
              </div>
              <a
                href="mailto:jjuno_92@hanmail.net"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#2563EB',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background var(--transition), transform var(--transition)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = '#1D4ED8'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = '#2563EB'
                  el.style.transform = ''
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                메일 보내기
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: 'var(--color-primary)',
          borderTop: '1px solid rgba(255,255,255,.06)',
          padding: 24,
          textAlign: 'center',
          fontSize: 13,
          color: '#52525B',
        }}
      >
        © 2026 오준호 · B2B Sales × AI Developer · 경기도 의정부
      </footer>
    </>
  )
}
