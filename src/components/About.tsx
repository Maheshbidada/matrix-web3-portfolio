const pillars = [
  'Community Moderation',
  'Protocol Research & Testing',
  'X Content & Campaign Support',
  'Discord Architecture & Roles',
  'DeFi & NFT Ecosystems',
  'Member Onboarding & Support',
]

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-dossier-grid">
          {/* Left Column: Thesis & Philosophical Stance */}
          <div className="about-thesis-block">
            <div className="section-editorial-header">
              <span className="section-journal-tag">Field Dossier // 01</span>
              <h2 id="about-heading" className="section-title reveal">
                The human layer behind decentralized networks.
              </h2>
              <p className="section-desc reveal reveal-delay-1">
                Protocols run on cryptographic code, but they grow through people. Real community contribution is about patient onboarding, active moderation, and turning complex documentation into clear, approachable conversations.
              </p>
            </div>

            <div className="about-manifesto-note reveal reveal-delay-2" style={{ padding: '1.25rem', background: 'var(--bg-canvas)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <span className="text-cobalt" style={{ fontWeight: 700, letterSpacing: '0.04em' }}>[ CORE PRINCIPLE ]</span> Authentic participation and continuous community assistance create lasting protocol adoption, far surpassing automated hype.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Quote Card & Pillar Matrix */}
          <div className="about-content-block">
            <div className="about-quote-card reveal">
              <p className="about-quote-lead">
                "I am <strong>Matrix 18</strong>, a Web3 community contributor and content creator focused on DeFi, NFTs, and emerging protocols. I have experience in community moderation, engagement, campaign support, and X content creation across multiple Web3 ecosystems. I enjoy exploring new projects, connecting with communities, and sharing what I learn."
              </p>

              <div className="about-divider-rule" aria-hidden="true" />

              <p className="about-prose-text">
                Every project has its own unique rhythm and community culture. Whether answering technical questions for new joiners, coordinating event announcements, or tracking governance updates, I enjoy helping ecosystems build welcoming, well-moderated environments where builders and enthusiasts can connect productively.
              </p>

              <div className="about-pillars-grid" role="list" aria-label="Core focus areas">
                {pillars.map((item) => (
                  <div key={item} className="about-pillar-badge" role="listitem">
                    <span className="pillar-bullet-cobalt" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
