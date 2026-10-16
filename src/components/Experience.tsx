interface ExperienceItem {
  category: string
  categoryVariant?: 'cobalt' | 'stone'
  organization: string
  roles?: { label: string; variant: 'cobalt' | 'terracotta' | 'default' }[]
  bullets: string[]
  featured?: boolean
}

const experiences: ExperienceItem[] = [
  {
    category: 'Ecosystem Contributor',
    categoryVariant: 'cobalt',
    organization: 'Pharos Network',
    roles: [
      { label: 'Regional Contributor', variant: 'cobalt' },
      { label: 'Real OG Recognition', variant: 'terracotta' },
    ],
    bullets: [
      'Regional community engagement and welcoming active ecosystem participants.',
      'Helping community members with questions, resources, and protocol updates.',
      'Creating informational content around ecosystem activities, campaigns, and events.',
      'Active participation in community campaigns and contributor initiatives.',
    ],
    featured: true,
  },
  {
    category: 'Community Moderation',
    organization: 'Discord Community Moderation',
    roles: [
      { label: 'Discord Moderator', variant: 'default' },
      { label: 'Member Support', variant: 'default' },
    ],
    bullets: [
      'Discord moderation and welcoming newcomer conversations across Web3 channels.',
      'Assisting members with questions, channel navigation, and safety reminders.',
      'Maintaining constructive, organized, and spam-free community environments.',
    ],
  },
  {
    category: 'Social Content & Growth',
    organization: 'X Content Creation & Ecosystem Promotion',
    roles: [
      { label: 'Content Creator', variant: 'default' },
      { label: 'Community Support', variant: 'default' },
    ],
    bullets: [
      'X content creation and project promotion for emerging Web3 protocols and ideas.',
      'Writing threads and updates that explain ecosystem mechanics and event milestones clearly.',
      'Engaging with broader Web3 audiences to build interest in community campaigns.',
    ],
  },
  {
    category: 'Campaign & Event Operations',
    organization: 'Web3 & NFT Community Experience',
    roles: [
      { label: 'Volunteer Support', variant: 'default' },
      { label: 'Community Member', variant: 'default' },
    ],
    bullets: [
      'Campaign, giveaway, and community event support across Discord and Telegram groups.',
      'Active participation across DeFi, NFTs, privacy, infrastructure, and emerging Web3 ecosystems.',
      'Coordinating with fellow contributors to ensure smooth community activities.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-editorial-header">
          <span className="section-journal-tag">Chronology // 02</span>
          <h2 id="experience-heading" className="section-title reveal">
            Hands-on community experience.
          </h2>
          <p className="section-desc reveal reveal-delay-1">
            A track record of active moderation, content creation, and contributor roles across emerging Web3 protocols and community ecosystems.
          </p>
        </div>

        <div className="exp-chronology-list" role="list" aria-label="Experience timeline">
          {experiences.map((exp, index) => (
            <article
              key={exp.organization}
              className={`exp-entry-card reveal${exp.featured ? ' featured' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
              role="listitem"
            >
              {/* Left Meta Column */}
              <div className="exp-meta-side">
                <span className={`exp-domain-pill ${exp.categoryVariant === 'cobalt' ? 'cobalt' : ''}`}>
                  {exp.category}
                </span>

                <h3 className="exp-org-heading">
                  {exp.organization}
                </h3>

                {exp.roles && (
                  <div className="exp-roles-wrap">
                    {exp.roles.map((r) => (
                      <span
                        key={r.label}
                        className={`exp-tag-pill ${
                          r.variant === 'cobalt'
                            ? 'accent-cobalt'
                            : r.variant === 'terracotta'
                            ? 'accent-terracotta'
                            : ''
                        }`}
                      >
                        {r.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Bullets Column */}
              <div className="exp-bullets-side">
                <ul className="exp-bullets-list" aria-label={`Contributions for ${exp.organization}`}>
                  {exp.bullets.map((point) => (
                    <li key={point} className="exp-bullet-row">
                      <span className="exp-bullet-icon" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
