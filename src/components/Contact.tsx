import { ArrowUpRight } from 'lucide-react'

const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact-inner">
          {/* Left */}
          <div>
            <p className="section-label on-dark reveal" aria-hidden="true">Contact</p>
            <h2
              id="contact-heading"
              className="contact-heading reveal reveal-delay-1"
            >
              Let's build better communities.
            </h2>
            <p className="contact-text reveal reveal-delay-2">
              Have a Web3 community, NFT project, or content collaboration in
              mind? Feel free to reach out. I'm always open to connecting with
              people who care about building great communities.
            </p>

            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-x-button"
              className="btn-primary reveal reveal-delay-3"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              aria-label="Reach out to Matrix 18 on X (formerly Twitter)"
            >
              <XSocialIcon size={15} />
              Reach out on X
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-2">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-block"
              aria-label="Contact Matrix 18 on X"
            >
              <div className="contact-link-icon" aria-hidden="true">
                <XSocialIcon size={18} />
              </div>
              <div>
                <p className="contact-link-label">Find me on</p>
                <p className="contact-link-value">@DeFiMatrix18</p>
              </div>
              <ArrowUpRight
                size={16}
                style={{ color: 'var(--text-on-dark-2)', marginLeft: 'auto' }}
                aria-hidden="true"
              />
            </a>

            <p
              style={{
                marginTop: '1.5rem',
                fontSize: '0.82rem',
                color: 'var(--text-on-dark-2)',
                lineHeight: 1.6,
                paddingLeft: '0.25rem',
              }}
            >
              X is currently the best way to reach me. I aim to respond to genuine collaboration enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
