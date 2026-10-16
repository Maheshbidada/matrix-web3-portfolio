interface SkillDetail {
  index: string
  name: string
  category: string
  description: string
}

const skillsData: SkillDetail[] = [
  {
    index: '01',
    name: 'Discord Moderation',
    category: 'Operations',
    description: 'Maintaining clear channels, enforcing community guidelines, and welcoming active participants.',
  },
  {
    index: '02',
    name: 'Community Engagement',
    category: 'Ecosystem',
    description: 'Fostering organic conversations, answering questions, and connecting early adopters.',
  },
  {
    index: '03',
    name: 'Web3, Crypto & NFTs',
    category: 'Knowledge',
    description: 'Understanding protocol mechanics, on-chain dynamics, and community token ecosystems.',
  },
  {
    index: '04',
    name: 'X Content Creation',
    category: 'Media',
    description: 'Writing engaging threads, announcements, and educational breakdowns of protocol updates.',
  },
  {
    index: '05',
    name: 'Campaign & Event Support',
    category: 'Operations',
    description: 'Assisting with community launches, community devnet contests, and ecosystem campaigns.',
  },
  {
    index: '06',
    name: 'Giveaway Coordination',
    category: 'Community',
    description: 'Organizing transparent whitelist, role distribution, and community reward initiatives.',
  },
  {
    index: '07',
    name: 'Discord Roles & Bots',
    category: 'Tooling',
    description: 'Configuring role hierarchies, verification flows, and standard Discord bot permissions.',
  },
  {
    index: '08',
    name: 'Community Growth',
    category: 'Strategy',
    description: 'Helping emerging networks scale their contributor base through helpful, consistent support.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-editorial-header">
          <span className="section-journal-tag">Capabilities // 04</span>
          <h2 id="skills-heading" className="section-title reveal">
            Strengths and community skills.
          </h2>
          <p className="section-desc reveal reveal-delay-1">
            Practical experience across Discord moderation, campaign operations, and educational Web3 content creation.
          </p>
        </div>

        <div className="skills-matrix-grid" role="list" aria-label="Core skills matrix">
          {skillsData.map((item, i) => (
            <div
              key={item.name}
              className="skill-spec-card reveal"
              style={{ transitionDelay: `${i * 0.06}s` }}
              role="listitem"
            >
              <div className="skill-card-top">
                <span className="skill-index-num">{item.index}</span>
                <span className="skill-category-pill">{item.category}</span>
              </div>

              <div>
                <h3 className="skill-name-heading">{item.name}</h3>
                <p className="skill-explanation-text">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
