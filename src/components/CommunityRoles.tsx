import { useState, useEffect, useCallback } from 'react'
import { ZoomIn, X as CloseIcon, CheckCircle2 } from 'lucide-react'

interface CommunityRoleItem {
  id: string
  title: string
  platform: string
  confirmedRole: string
  description: string
  imageSrc: string
  imageAlt: string
  roles: string[]
  note?: string
}

const communityRolesData: CommunityRoleItem[] = [
  {
    id: 'pharos',
    title: 'Pharos Network Community Roles',
    platform: 'Discord',
    confirmedRole: 'Real OG & Contributor',
    description: 'Verified community roles earned within the Pharos Network Discord server.',
    imageSrc: '/assets/pharos-roles.png',
    imageAlt: 'Pharos Network Discord community roles screenshot showing Real OG, Pharos Maniac, Elder Storyteller, Reg-Contributor, Octopi, Developer, Public Devnet Contest, and IN roles',
    roles: [
      'Real OG',
      'Pharos Maniac',
      'Elder Storyteller',
      'Reg-Contributor',
      'Octopi',
      'Developer',
      'Public Devnet Contest',
      'IN',
    ],
  },
  {
    id: 'juicehedz',
    title: 'JuiceHedz Community',
    platform: 'Discord',
    confirmedRole: 'Volunteer',
    description: 'Active community involvement in JuiceHedz with confirmed Volunteer role.',
    imageSrc: '/assets/juicehedz-roles.png',
    imageAlt: 'JuiceHedz Discord profile screenshot showing confirmed Volunteer role and community profile details',
    roles: [
      'Volunteer (Confirmed Role)',
      'JuiceList GTD',
      'JuiceList FCFS',
      'Juiced',
    ],
    note: 'Confirmed role: Volunteer. Other visible Discord roles represent profile details.',
  },
  {
    id: 'perpsx',
    title: 'PerpsX Warrior',
    platform: 'Telegram',
    confirmedRole: 'PerpsX Warrior',
    description: 'Community welcome and recognition as PerpsX Warrior on Telegram.',
    imageSrc: '/assets/perpsx-warrior.png',
    imageAlt: 'PerpsX Telegram screenshot welcoming community members as PerpsX Warriors',
    roles: [
      'PerpsX Warrior',
      'Telegram Community',
    ],
  },
]

export default function CommunityRoles() {
  const [activeItem, setActiveItem] = useState<CommunityRoleItem | null>(null)

  const closeModal = useCallback(() => {
    setActiveItem(null)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (activeItem) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeItem, closeModal])

  return (
    <section id="roles" className="section roles-archive-section" aria-labelledby="roles-heading">
      <div className="container">
        <div className="section-editorial-header">
          <span className="section-journal-tag terracotta">Verified Proof // 03</span>
          <h2 id="roles-heading" className="section-title reveal">
            Community Roles &amp; Recognition
          </h2>
          <p className="section-desc reveal reveal-delay-1">
            Visual documentation of earned roles, contributor titles, and community involvement across verified Web3 Discord servers and Telegram groups.
          </p>
        </div>

        <div className="proof-archive-grid" role="list" aria-label="Visual proof of Web3 community roles">
          {communityRolesData.map((item, index) => (
            <article
              key={item.id}
              className="proof-specimen-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
              role="listitem"
            >
              {/* Image Preview Container */}
              <div
                className="proof-figure-frame"
                onClick={() => setActiveItem(item)}
                role="button"
                tabIndex={0}
                aria-label={`View larger screenshot for ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveItem(item)
                  }
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="proof-screenshot-img"
                  loading="lazy"
                  width="400"
                  height="220"
                />
                <div className="proof-hover-cue">
                  <span className="proof-zoom-button">
                    <ZoomIn size={15} aria-hidden="true" />
                    Enlarge Evidence
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="proof-card-body">
                <div className="proof-top-meta">
                  <span className="proof-channel-tag">
                    {item.platform}
                  </span>

                  <span className="proof-status-confirmed">
                    <CheckCircle2 size={13} aria-hidden="true" />
                    <span>{item.confirmedRole}</span>
                  </span>
                </div>

                <h3 className="proof-title">
                  {item.title}
                </h3>

                <p className="proof-description">
                  {item.description}
                </p>

                {/* Roles Tray */}
                <div className="proof-roles-tray" aria-label={`Roles for ${item.title}`}>
                  {item.roles.map((role) => (
                    <span key={role} className="proof-role-chip">
                      {role}
                    </span>
                  ))}
                </div>

                {item.note && (
                  <p className="proof-clarification-note">
                    {item.note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && (
        <div
          className="lightbox-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${activeItem.title}`}
        >
          <div
            className="lightbox-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-topbar">
              <div>
                <span className="proof-channel-tag" style={{ display: 'inline-block', marginBottom: '0.25rem' }}>
                  {activeItem.platform}
                </span>
                <h4 className="lightbox-title">{activeItem.title}</h4>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeModal}
                aria-label="Close enlarged screenshot"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className="lightbox-viewport">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.imageAlt}
                className="lightbox-full-image"
              />
            </div>

            <div className="lightbox-footer-info">
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{activeItem.description}</p>
              <div className="proof-roles-tray" style={{ borderTop: 'none', paddingTop: 0 }}>
                {activeItem.roles.map((r) => (
                  <span key={r} className="proof-role-chip">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
