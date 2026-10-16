import { ArrowUpRight, Clock } from 'lucide-react'

interface WorkItem {
  number: string
  title: string
  description: string
  isPlaceholder: boolean
  link?: string
  linkLabel?: string
}

const works: WorkItem[] = [
  {
    number: '01',
    title: 'Community Contributions',
    description:
      'Ongoing participation and contribution to Web3 and NFT project communities, including support activities, discussions, and engagement with community members.',
    isPlaceholder: true,
  },
  {
    number: '02',
    title: 'Web3 Content',
    description:
      'Content created to share Web3 project updates, ecosystem insights, and community news. Making information accessible and useful for community members.',
    isPlaceholder: true,
  },
  {
    number: '03',
    title: 'Discord Community Support',
    description:
      'Moderation and support activities in Discord community servers. Keeping spaces welcoming, organised, and helpful for members at all experience levels.',
    isPlaceholder: true,
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="section work-section" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-divider" aria-hidden="true" />

        <p className="section-label" aria-hidden="true">Selected Work</p>
        <h2 id="work-heading" className="section-heading reveal">
          Things I've worked on.
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            marginTop: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          Real examples and links will be added as they become available.
        </p>

        <div className="work-grid">
          {works.map((item, i) => (
            <article
              key={item.number}
              className="work-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-labelledby={`work-title-${item.number}`}
            >
              <div className="work-card-inner">
                <p className="work-card-number" aria-hidden="true">
                  {item.number}
                </p>
                <h3
                  id={`work-title-${item.number}`}
                  className="work-card-title"
                >
                  {item.title}
                </h3>
                <p className="work-card-desc">{item.description}</p>

                {item.isPlaceholder && !item.link && (
                  <span
                    className="work-card-placeholder"
                    aria-label="Placeholder. Link to be added."
                  >
                    <Clock size={11} />
                    Link coming soon
                  </span>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-card-link"
                    aria-label={`View ${item.title}`}
                  >
                    {item.linkLabel ?? 'View'} <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
