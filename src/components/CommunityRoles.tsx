import { useState, useEffect, useCallback } from 'react'
import { ZoomIn, X as CloseIcon, ShieldCheck } from 'lucide-react'

interface CommunityRoleItem {
  id: string
  title: string
  platform: string
  confirmedRole?: string
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
    description: 'Community roles earned within the Pharos Network ecosystem.',
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
    description: 'Community involvement in JuiceHedz with confirmed Volunteer role. Other visible Discord roles represent profile details.',
    imageSrc: '/assets/juicehedz-roles.png',
    imageAlt: 'JuiceHedz Discord profile screenshot showing confirmed Volunteer role and community profile details',
    roles: [
      'Volunteer (Confirmed Role)',
      'JuiceList GTD',
      'JuiceList FCFS',
      'Juiced',
    ],
    note: 'Confirmed role: Volunteer. Other visible Discord roles are profile details.',
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
    <section id="roles" className="section community-section" aria-labelledby="roles-heading">
      <div className="container">
        <div className="section-divider" aria-hidden="true" />

        <div className="roles-header">
          <p className="section-label" aria-hidden="true">Recognition</p>
          <h2 id="roles-heading" className="section-heading reveal">
            Community Roles &amp; Recognition
          </h2>
          <p className="section-subtitle reveal">
            Communities I've been part of and roles I've earned.
          </p>
        </div>

        <div className="community-grid" role="list" aria-label="Visual proof of Web3 community roles">
          {communityRolesData.map((item, index) => (
            <article
              key={item.id}
              className="community-card reveal"
              style={{ transitionDelay: `${index * 0.12}s` }}
              role="listitem"
            >
              {/* Image Preview Container */}
              <div
                className="community-image-wrapper"
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
                  className="community-img"
                  loading="lazy"
                />
                <div className="community-image-overlay">
                  <span className="community-zoom-badge">
                    <ZoomIn size={15} aria-hidden="true" />
                    Click to enlarge
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="community-card-body">
                <div className="community-card-meta">
                  <span className="community-platform-badge">
                    {item.platform}
                  </span>
                  {item.confirmedRole && (
                    <span className="community-confirmed-badge">
                      <ShieldCheck size={13} aria-hidden="true" />
                      {item.confirmedRole}
                    </span>
                  )}
                </div>

                <h3 className="community-card-title">
                  {item.title}
                </h3>

                <p className="community-card-desc">
                  {item.description}
                </p>

                {/* Role tags list */}
                <div className="community-roles-tags" aria-label={`Roles for ${item.title}`}>
                  {item.roles.map((role) => (
                    <span key={role} className="community-role-pill">
                      {role}
                    </span>
                  ))}
                </div>

                {item.note && (
                  <p className="community-card-note">
                    {item.note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="lightbox-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${activeItem.title}`}
        >
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <div>
                <span className="lightbox-platform">{activeItem.platform}</span>
                <h4 className="lightbox-title">{activeItem.title}</h4>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeModal}
                aria-label="Close enlarged screenshot"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <div className="lightbox-image-box">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.imageAlt}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-footer">
              <p className="lightbox-caption">{activeItem.description}</p>
              <div className="lightbox-tags">
                {activeItem.roles.map((r) => (
                  <span key={r} className="community-role-pill">
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
