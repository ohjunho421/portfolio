'use client'

import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '#about', label: '소개' },
  { href: '#experience', label: '경력' },
  { href: '#projects', label: '프로젝트' },
  { href: '#skills', label: '스킬' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* 스크롤 프로그레스 바 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${progress}%`,
          background: 'var(--color-accent)',
          zIndex: 9999,
          borderRadius: '0 2px 2px 0',
          transition: 'width 0.1s linear',
        }}
      />

      <nav
        style={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: 900,
          background: 'rgba(255,255,255,.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--color-border)',
          borderRadius: 100,
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 100,
          boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transition: 'box-shadow var(--transition)',
        }}
        role="navigation"
        aria-label="주 내비게이션"
      >
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 18,
            color: 'var(--color-primary)',
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}
        >
          오준호
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: 'var(--color-secondary)',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: 100,
                transition: 'background var(--transition), color var(--transition)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = 'var(--color-surface-2)'
                ;(e.currentTarget as HTMLElement).style.color = 'var(--color-primary)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = ''
                ;(e.currentTarget as HTMLElement).style.color = 'var(--color-secondary)'
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              background: 'var(--color-primary)',
              color: '#fff',
              padding: '8px 18px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background var(--transition), transform var(--transition)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'var(--color-secondary)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'
              ;(e.currentTarget as HTMLElement).style.transform = ''
            }}
          >
            연락하기
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex md:hidden items-center justify-center p-2"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴 열기/닫기"
          aria-expanded={menuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 12,
              padding: 12,
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: 8,
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              style={{
                background: 'var(--color-primary)',
                color: '#fff',
                padding: '10px 14px',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: 4,
              }}
            >
              연락하기
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
