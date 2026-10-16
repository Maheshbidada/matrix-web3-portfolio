const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-colophon" role="contentinfo">
      <div className="container">
        <div className="footer-inner-spread">
          {/* Identity & Colophon */}
          <div>
            <div className="footer-masthead-title">
              <span>Matrix 18</span>
              <span className="text-cobalt" style={{ fontSize: '0.8rem', letterSpacing: '0.06em' }}>// ARCHIVE</span>
            </div>
            <p className="footer-subtitle-text">
              Web3 Community Contributor / Content Creation / Protocol Research
            </p>
          </div>

          {/* Direct Social & Anchor Links */}
          <div className="footer-links-row">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-external-link"
              aria-label="Visit Matrix 18 on X"
            >
              <XSocialIcon />
              <span>@DeFiMatrix18</span>
            </a>

            <span className="text-muted" style={{ fontSize: '0.82rem' }} aria-label={`Copyright ${currentYear} Matrix 18`}>
              © {currentYear} Matrix 18. All verified rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
