import { useState, useEffect } from 'react'
import { Menu, X as CloseIcon } from 'lucide-react'

const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

const navLinks = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Experience', href: '#experience', num: '02' },
  { label: 'Recognition', href: '#roles', num: '03' },
  { label: 'Skills', href: '#skills', num: '04' },
  { label: 'Ecosystems', href: '#ecosystems', num: '05' },
  { label: 'Contact', href: '#contact', num: '06' },
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
      if (window.innerWidth > 960) setMenuOpen(false)
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
      <header className={`nav-wrap${scrolled ? ' scrolled' : ''}`} role="banner">
        <nav className="nav-bar" aria-label="Main navigation">
          {/* Identity */}
          <a
            href="#"
            className="nav-logo-group"
            aria-label="Matrix 18, back to top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="nav-logo-name">Matrix 18</span>
          </a>

          {/* Desktop Links */}
          <ul className="nav-items" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-item-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                >
                  <span className="nav-item-num" aria-hidden="true">{link.num}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav-cta"
              aria-label="Contact Matrix 18 on X"
            >
              <XSocialIcon />
              <span>Contact on X</span>
            </a>

            <button
              className="nav-mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {menuOpen ? <CloseIcon size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <nav
        id="mobile-nav-drawer"
        className={`mobile-drawer${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-drawer-link"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(link.href)
            }}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className="font-mono text-cobalt" style={{ fontSize: '0.78rem' }} aria-hidden="true">{link.num}</span>
            <span>{link.label}</span>
          </a>
        ))}
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: '0.75rem', justifyContent: 'center' }}
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Contact Matrix 18 on X"
        >
          <XSocialIcon />
          <span>Contact on X</span>
        </a>
      </nav>
    </>
  )
}
