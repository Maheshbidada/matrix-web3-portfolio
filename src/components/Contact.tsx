import { ArrowUpRight } from 'lucide-react'

const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-editorial-layout">
          {/* Left Column: Heading, Invitation & Actions */}
          <div>
            <div className="section-editorial-header" style={{ marginBottom: '2rem' }}>
              <span className="section-journal-tag">Direct Dispatch // 06</span>
              <h2 id="contact-heading" className="contact-editorial-heading reveal">
                Let's build better Web3 communities together.
              </h2>
            </div>

            <p className="contact-message-body reveal reveal-delay-1">
              Have an emerging protocol, NFT community, Discord moderation role, or Web3 content initiative in mind? I am always open to connecting with founders, builders, and community teams who value authentic engagement and high-quality onboarding.
            </p>

            <div className="reveal reveal-delay-2">
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-cta-primary"
                className="btn-primary"
                aria-label="Contact Matrix 18 on X"
              >
                <XSocialIcon size={16} />
                <span>Contact on X</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Social Card & Channel Note */}
          <div className="reveal reveal-delay-2">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-card"
              aria-label="Open Matrix 18 X profile @DeFiMatrix18"
            >
              <div className="contact-badge-icon" aria-hidden="true">
                <XSocialIcon size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <p className="contact-channel-label">Direct Channel</p>
                <p className="contact-handle-text">@DeFiMatrix18</p>
              </div>
              <ArrowUpRight size={20} className="text-cobalt" aria-hidden="true" />
            </a>

            <div style={{ marginTop: '1.5rem', paddingLeft: '0.25rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                X DMs are the fastest way to get in touch. Open to discussions regarding community contributor positions, moderation, and Web3 research collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
