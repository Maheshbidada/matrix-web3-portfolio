const skills = [
  'Discord Moderation',
  'Web3 Community Engagement',
  'NFT Community Participation',
  'Community Support',
  'Content Creation',
  'Social Media Communication',
  'Community Building',
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-label on-dark" aria-hidden="true">Skills</p>
        <h2
          id="skills-heading"
          className="section-heading reveal"
          style={{ color: '#FFFFFF' }}
        >
          What I bring to the table.
        </h2>

        <div
          className="skills-grid"
          style={{ marginTop: '2.5rem' }}
          role="list"
          aria-label="List of skills"
        >
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="skill-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
              role="listitem"
            >
              <span className="skill-dot" aria-hidden="true" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
