import { ArrowDown } from 'lucide-react'

const X_URL = 'https://x.com/DeFiMatrix18'

const XSocialIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
  </svg>
)

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-headline"
    >
      {/* Decorative orbs */}
      <div className="hero-orb-1" aria-hidden="true" />
      <div className="hero-orb-2" aria-hidden="true" />

      <div className="container" style={{ position: 'relative' }}>
        {/* Label */}
        <p className="hero-label animate-fade-up">
          Web3 Community Contributor
        </p>

        {/* Headline */}
        <h1
          id="hero-headline"
          className="hero-headline animate-fade-up delay-100"
        >
          Building stronger<br />
          communities in{' '}
          <span className="highlight">Web3.</span>
        </h1>

        {/* Sub */}
        <p className="hero-sub animate-fade-up delay-200">
          I help crypto and NFT projects grow through community engagement,
          Discord moderation, and content that connects people with the
          projects they care about.
        </p>

        {/* Actions */}
        <div className="hero-actions animate-fade-up delay-300">
          <a
            href="#contact"
            id="hero-cta-connect"
            className="btn-primary"
            onClick={scrollToContact}
          >
            Let's Connect
          </a>
          <a
            href="#experience"
            id="hero-cta-experience"
            className="btn-secondary"
            onClick={scrollToExperience}
          >
            View Experience
            <ArrowDown size={15} />
          </a>
        </div>

        {/* X link */}
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-x-link animate-fade-up delay-400"
          aria-label="Follow Matrix 18 on X (formerly Twitter)"
        >
          <XSocialIcon />
          @DeFiMatrix18
        </a>
      </div>
    </section>
  )
}
