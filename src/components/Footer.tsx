const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Left */}
          <div>
            <p className="footer-wordmark">Matrix 18</p>
            <p className="footer-tagline">Web3 Community · Engagement · Content</p>
          </div>

          {/* Right */}
          <div className="footer-right">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-x-link"
              aria-label="Follow Matrix 18 on X (formerly Twitter)"
            >
              <XSocialIcon />
              @DeFiMatrix18
            </a>
            <p className="footer-copy" aria-label={`Copyright ${year} Matrix 18`}>
              © {year} Matrix 18
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
