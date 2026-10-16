import { useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-spread-grid">
          {/* Left Column: Asymmetrical Editorial Copy */}
          <div className="hero-copy-column">
            {/* Journal Meta Header */}
            <div className="hero-journal-meta reveal">
              <span className="journal-issue-chip">Field Journal // Vol. 04</span>
              <span className="journal-location-text">Web3 Contributor / Research &amp; Community</span>
            </div>

            {/* Headline */}
            <div className="reveal reveal-delay-1">
              <h1 id="hero-title" className="hero-editorial-headline">
                Exploring decentralized networks.<br />
                <span className="hero-headline-italic">Building the community layer.</span>
              </h1>
            </div>

            {/* Introduction */}
            <p className="hero-intro-text reveal reveal-delay-2">
              I am a Web3 community contributor and content creator exploring emerging protocols, DeFi, and NFTs. I support ecosystems through hands-on moderation, clear technical onboarding, and authentic research dispatches.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions-group reveal reveal-delay-2">
              <a
                href="#experience"
                id="hero-cta-explore"
                className="btn-primary"
                onClick={scrollToExperience}
              >
                <span>Explore Experience</span>
                <ArrowDown size={16} aria-hidden="true" />
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-contact-x"
                className="btn-secondary"
                aria-label="Contact Matrix 18 on X"
              >
                <XSocialIcon />
                <span>Contact on X</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>

            {/* Field Journal Dispatch Bar */}
            <div className="hero-field-dispatch-bar reveal reveal-delay-3">
              <span className="dispatch-live-badge">
                <span className="dispatch-pulse-dot" aria-hidden="true" />
                Active Dispatch
              </span>
              <span>Focus: Pharos Network Contributor / DeFi Ecosystems</span>
              <span className="text-muted">/</span>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent-cobalt)', fontWeight: 600 }}
              >
                @DeFiMatrix18
              </a>
            </div>
          </div>

          {/* Right Column: Mounted Field Specimen Card */}
          <div className="hero-specimen-column reveal reveal-delay-1">
            <div className="specimen-mounting-card">
              <div className="specimen-header">
                <span>SPECIMEN // M18-ARCHIVE</span>
                <span className="text-terracotta">VERIFIED ID</span>
              </div>

              <div className="specimen-image-frame">
                {!imageError ? (
                  <img
                    src="/assets/matrix-18-pfp.jpg"
                    alt="Matrix 18 profile picture"
                    className="specimen-avatar-img"
                    onError={() => setImageError(true)}
                    width="320"
                    height="320"
                    loading="eager"
                  />
                ) : (
                  <div className="specimen-monogram-view" aria-label="Matrix 18 avatar representation">
                    <div className="specimen-monogram-initials">M18</div>
                    <span className="specimen-monogram-sub">WEB3 CONTRIBUTOR</span>
                  </div>
                )}
              </div>

              {/* Specimen Log Details */}
              <div className="specimen-log-details" aria-label="Profile metadata">
                <div className="specimen-log-row">
                  <span className="specimen-log-key">classification:</span>
                  <span className="specimen-log-val">community_contributor</span>
                </div>
                <div className="specimen-log-row">
                  <span className="specimen-log-key">research:</span>
                  <span className="specimen-log-val text-cobalt">defi · nfts · testnets</span>
                </div>
                <div className="specimen-log-row">
                  <span className="specimen-log-key">channels:</span>
                  <span className="specimen-log-val">discord · telegram · x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
