const interests = [
  'Web3 Community',
  'Discord Moderation',
  'NFT Ecosystems',
  'Content Creation',
  'Community Support',
  'Social Media',
]

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left col */}
          <div className="about-left">
            <p className="section-label" aria-hidden="true">About</p>
            <h2 id="about-heading" className="section-heading reveal">
              A little about me.
            </h2>

            <div className="about-tags reveal reveal-delay-1">
              {interests.map((tag) => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right col */}
          <div>
            <p className="about-text reveal">
              I'm Matrix 18, a Web3 community contributor who genuinely enjoys
              being part of crypto and NFT ecosystems. My interest in this space
              started with curiosity about how decentralized projects actually work,
              and quickly grew into a passion for the communities that make them
              thrive.
            </p>
            <p className="about-text reveal reveal-delay-1">
              Community is the backbone of every Web3 project. A great product
              doesn't go far without engaged, informed, and welcoming people
              around it. That's where I like to contribute: moderating Discord
              servers, helping newcomers find their footing, and creating content
              that makes complex topics more approachable.
            </p>
            <p className="about-text reveal reveal-delay-2">
              I focus on honest engagement over hype. I'd rather help someone
              genuinely understand a project than push empty enthusiasm. If you're
              building a Web3 community or NFT project and need someone who cares
              about the people behind the wallets, let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
