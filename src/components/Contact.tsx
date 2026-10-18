import { useState } from 'react'
import { ArrowUpRight, Copy, Check } from 'lucide-react'

const X_URL = 'https://x.com/DeFiMatrix18'
const TELEGRAM_URL = 'https://t.me/MaheshBIdada'
const DISCORD_HANDLE = '@mahesh014977'
const TELEGRAM_HANDLE = '@MaheshBIdada'
const X_HANDLE = '@DeFiMatrix18'

/* ── Brand SVG Icons ──────────────────────────────────────────── */

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
)

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
)

const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

/* ── Copy Button ──────────────────────────────────────────────── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable in some environments
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="contact-copy-btn"
      aria-label={copied ? 'Copied to clipboard' : `Copy ${text} to clipboard`}
      title={copied ? 'Copied!' : 'Copy handle'}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      <span className="contact-copy-label">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}

/* ── Contact Section ──────────────────────────────────────────── */

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-editorial-layout">

          {/* Left Column: Heading, Invitation and Actions */}
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
                <XIcon size={16} />
                <span>Contact on X</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Social Contact Cards */}
          <div className="contact-cards-stack reveal reveal-delay-2">

            {/* X */}
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-card"
              aria-label={`Open Matrix 18 X profile ${X_HANDLE}`}
            >
              <div className="contact-badge-icon contact-badge-x" aria-hidden="true">
                <XIcon size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <p className="contact-channel-label">X (Twitter)</p>
                <p className="contact-handle-text">{X_HANDLE}</p>
              </div>
              <ArrowUpRight size={20} className="text-cobalt" aria-hidden="true" />
            </a>

            {/* Discord */}
            <div
              className="contact-direct-card contact-discord-card"
              role="group"
              aria-label="Discord contact"
            >
              <div className="contact-badge-icon contact-badge-discord" aria-hidden="true">
                <DiscordIcon size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <p className="contact-channel-label">Discord</p>
                <p className="contact-handle-text">{DISCORD_HANDLE}</p>
              </div>
              <CopyButton text={DISCORD_HANDLE} />
            </div>

            {/* Telegram */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-card contact-telegram-card"
              aria-label={`Open Telegram profile ${TELEGRAM_HANDLE}`}
            >
              <div className="contact-badge-icon contact-badge-telegram" aria-hidden="true">
                <TelegramIcon size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <p className="contact-channel-label">Telegram</p>
                <p className="contact-handle-text">{TELEGRAM_HANDLE}</p>
              </div>
              <ArrowUpRight size={20} className="text-cobalt" aria-hidden="true" />
            </a>

            <div style={{ marginTop: '0.75rem', paddingLeft: '0.25rem' }}>
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
