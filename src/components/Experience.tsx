interface ExperienceItem {
  badge: string
  badgeVariant?: 'default' | 'pharos'
  org: string
  role?: string
  rolePills?: { label: string; variant: 'blue' | 'violet' | 'default' }[]
  bullets: string[]
  isPharos?: boolean
}

const experiences: ExperienceItem[] = [
  {
    badge: 'Community Contribution',
    badgeVariant: 'pharos',
    org: 'Pharos Network',
    rolePills: [
      { label: 'Regional Contributor', variant: 'blue' },
      { label: 'Real OG', variant: 'violet' },
    ],
    bullets: [
      'Recognised as a Regional Contributor and Real OG within the Pharos Network community.',
      'Participated in community activities and helped support the growth of the Pharos ecosystem.',
      'Engaged with community members and contributed to ongoing discussions and initiatives.',
    ],
    isPharos: true,
  },
  {
    badge: 'Moderation',
    org: 'Discord Community Moderation',
    role: 'Community Moderator',
    bullets: [
      'Supported community conversations and helped maintain welcoming, organised spaces.',
      'Assisted members with questions and encouraged constructive participation.',
      'Helped keep community channels focused, respectful, and accessible to newcomers.',
    ],
  },
  {
    badge: 'Engagement',
    org: 'Web3 and NFT Community Engagement',
    role: 'Community Participant',
    bullets: [
      'Actively participated in Web3 and NFT communities across various platforms.',
      'Engaged with community members and supported project discussions.',
      'Contributed to community activities and helped build connections within ecosystems.',
    ],
  },
  {
    badge: 'Content',
    org: 'Web3 Content Creation',
    role: 'Content Creator',
    bullets: [
      'Created content about Web3 projects, ecosystems, and community news.',
      'Shared updates, insights, and community-related posts to keep people informed.',
      'Made project information more approachable and easier to understand for community members.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-divider" aria-hidden="true" />

        <p className="section-label" aria-hidden="true">Experience</p>
        <h2 id="experience-heading" className="section-heading reveal">
          What I've been up to.
        </h2>

        <div className="experience-list" style={{ marginTop: '2.5rem' }} role="list">
          {experiences.map((exp, i) => (
            <article
              key={exp.org}
              className={`exp-item reveal${exp.isPharos ? ' pharos' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              role="listitem"
            >
              {/* Meta */}
              <div className="exp-meta">
                <span className={`exp-badge${exp.badgeVariant === 'pharos' ? ' pharos-badge' : ''}`}>
                  {exp.badge}
                </span>
                <p className="exp-org">{exp.org}</p>

                {exp.role && (
                  <p className="exp-role">{exp.role}</p>
                )}

                {exp.rolePills && (
                  <div className="exp-role-pills">
                    {exp.rolePills.map((pill) => (
                      <span
                        key={pill.label}
                        className={`exp-role-pill ${pill.variant}`}
                      >
                        {pill.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="exp-description">
                <ul className="exp-bullets" aria-label={`Contributions at ${exp.org}`}>
                  {exp.bullets.map((b) => (
                    <li key={b} className="exp-bullet">
                      <span className="exp-bullet-dot" aria-hidden="true" />
                      {b}
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
