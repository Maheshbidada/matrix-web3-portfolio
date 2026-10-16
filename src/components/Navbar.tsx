import { useState, useEffect } from 'react'
import { Menu, X as CloseIcon } from 'lucide-react'

const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Roles', href: '#roles' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="container navbar-inner">
          {/* Wordmark */}
          <a
            href="#"
            className="nav-wordmark"
            aria-label="Matrix 18, back to top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            Matrix 18
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation">
            <ul className="nav-links" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
              aria-label="Contact Matrix 18 on X (formerly Twitter)"
            >
              <XSocialIcon />
              Contact on X
            </a>

            <button
              className="nav-mobile-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen
                ? <CloseIcon size={22} />
                : <Menu size={22} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-nav-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Contact Matrix 18 on X"
        >
          <XSocialIcon />
          Contact on X
        </a>
      </nav>
    </>
  )
}
