interface EcosystemItem {
  name: string
  category: string
  focus: string
  summary: string
  tags: string[]
}

const ecosystemsList: EcosystemItem[] = [
  {
    name: 'Pharos Network',
    category: 'Layer 1 / DeFi',
    focus: 'Community Contributor & Real OG',
    summary: 'Active regional community contributor helping members with ecosystem updates, devnet activities, and educational content.',
    tags: ['Regional Contributor', 'Real OG', 'Discord & Devnet'],
  },
  {
    name: 'Zama',
    category: 'FHE & Privacy',
    focus: 'Community Tracking & Exploration',
    summary: 'Following developments in Fully Homomorphic Encryption (FHE) and confidential smart contract infrastructure.',
    tags: ['FHE', 'Confidential Computing', 'Research'],
  },
  {
    name: 'Union',
    category: 'Interoperability',
    focus: 'Protocol Exploration',
    summary: 'Tracking zero-knowledge interoperability, consensus verification, and modular cross-chain messaging.',
    tags: ['ZK Interop', 'IBC', 'Cross-chain'],
  },
  {
    name: 'Aztec Network',
    category: 'Privacy Rollup',
    focus: 'Ecosystem Participation',
    summary: 'Exploring zero-knowledge privacy architecture, Noir language concepts, and private smart contract ecosystems.',
    tags: ['ZK Rollup', 'Noir', 'Privacy'],
  },
  {
    name: 'Gensyn',
    category: 'Decentralized AI',
    focus: 'Compute Network Research',
    summary: 'Exploring decentralized machine learning compute networks and hardware verification mechanics.',
    tags: ['DeAI', 'Compute', 'Verification'],
  },
  {
    name: 'Story Protocol',
    category: 'IP Infrastructure',
    focus: 'Ecosystem Community',
    summary: 'Engaging with programmable intellectual property infrastructure and digital creator attribution.',
    tags: ['Programmable IP', 'Creator Tech', 'Infrastructure'],
  },
  {
    name: 'Billions Network',
    category: 'Infrastructure',
    focus: 'Community Awareness',
    summary: 'Tracking scalable Web3 infrastructure initiatives and ecosystem contributor campaigns.',
    tags: ['Infrastructure', 'Community', 'Web3'],
  },
  {
    name: 'Perle Labs & Codex',
    category: 'Data & Storage',
    focus: 'Decentralized Tooling',
    summary: 'Researching decentralized storage primitives, data integrity tools, and modular protocol layers.',
    tags: ['Data Storage', 'Tooling', 'Modular'],
  },
  {
    name: 'Seismic, Rialo & Yakoa',
    category: 'Emerging Protocols',
    focus: 'Early Stage Exploration',
    summary: 'Participating in early-stage community testing, feedback discussions, and developer campaign tracking.',
    tags: ['Early Stage', 'Protocol Testing', 'Feedback'],
  },
]

export default function SelectedWork() {
  return (
    <section id="ecosystems" className="section ecosystem-section" aria-labelledby="ecosystems-heading">
      <div className="container">
        <div className="section-editorial-header">
          <span className="section-journal-tag">Research Archive // 05</span>
          <h2 id="ecosystems-heading" className="section-title reveal">
            Selected Web3 Ecosystems
          </h2>
          <p className="section-desc reveal reveal-delay-1">
            Networks, protocols, and modular ecosystems where I have contributed, participated in testing, or conducted community research.
          </p>
        </div>

        <div className="ecosystem-archive-grid" role="list" aria-label="Web3 Ecosystems list">
          {ecosystemsList.map((item, index) => (
            <article
              key={item.name}
              className="ecosystem-dossier-card reveal"
              style={{ transitionDelay: `${index * 0.06}s` }}
              role="listitem"
            >
              <div className="ecosystem-card-header">
                <h3 className="ecosystem-title">{item.name}</h3>
                <span className="ecosystem-domain-tag">{item.category}</span>
              </div>

              <p className="ecosystem-focus-line">
                {item.focus}
              </p>

              <p className="ecosystem-summary-text">
                {item.summary}
              </p>

              <div className="ecosystem-tags-list" aria-label={`Tags for ${item.name}`}>
                {item.tags.map((tag) => (
                  <span key={tag} className="ecosystem-tag-token">
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
