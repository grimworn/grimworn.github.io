
import { Link } from 'react-router-dom'
import Scene3D from '../components/Scene3D'

const services = [
  {
    title: 'Creative Direction',
    text: 'Narrative systems for launches, channels, and premium creator brands that need a sharper point of view.',
    points: ['Moodboards & references', 'Art direction', 'Launch visuals'],
  },
  {
    title: '3D Motion Systems',
    text: 'Dark cinematic sequences, product scenes, logo reveals, and stylized environments with controlled tension.',
    points: ['3D loops', 'Hero scenes', 'Motion packages'],
  },
  {
    title: 'Edit & Packaging',
    text: 'Tighter edits, stronger intros, title systems, overlays, and visual pacing designed for social-native attention.',
    points: ['Short-form edits', 'Title design', 'Episode packaging'],
  },
]

const projects = [
  {
    slug: 'raven-protocol',
    title: 'Raven Protocol',
    type: 'Campaign System',
    summary: 'A brand launch system shaped around crimson lighting, modular layouts, and editorial motion.',
  },
  {
    slug: 'ashen-frame',
    title: 'Ashen Frame',
    type: 'Creator Identity',
    summary: 'A creator rebrand with dark interface language, restrained type, and impact-first motion assets.',
  },
  {
    slug: 'scarlet-signal',
    title: 'Scarlet Signal',
    type: 'Title Package',
    summary: 'A title package built to make an episodic release feel like an event instead of another upload.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero-section container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow mono">Visual worlds for launches, brands, and ambitious ideas.</p>
          <h1>We shape ideas into motion.</h1>
          <p className="lead">Grimworn develops animations, motion systems, and brand visuals for launches,
    campaigns, and ideas that need to look clear, distinctive, and professionally built.</p>
          <div className="hero-actions">
          </div>
          <div className="hero-meta">
            <span>3D animation</span>
            <span>Motion design</span>
            <span>Visual direction</span>
          </div>
        </div>
        <div className="hero-stage">
          <Scene3D />
          
        </div>
      </section>

      <section className="container stacked-band">
        <article className="band large">
          <span className="mono small">Approach</span>
          <h2>Good motion starts before animation.</h2>
          <p>Strong visual work comes from clear thinking: references, timing,
      composition, and form all need to align before the final frame does.</p>
        </article>
        <article className="band accent">
          <span className="mono small">Focus</span>
          <h3>Built to communicate, not just decorate.</h3>
          <p>The goal is not to make things look busy. It is to create motion and visuals
      that carry an idea clearly and leave a stronger impression.</p>
        </article>
      </section>

<section className="home-section work-section" id="work">
  <div className="container section-head">
    <p className="eyebrow">Work</p>
    <h2>Selected motion worlds and visual studies.</h2>
    <p className="section-text">
      A growing body of self-initiated work, brand atmospheres, and motion-led
      visual experiments.
    </p>
  </div>

  <div className="container work-showcase">
    <article className="featured-work">
      <div className="featured-work-media placeholder-panel">
        <span>Koffdark Preview</span>
      </div>

      <div className="featured-work-copy">
        <p className="work-type">Featured / Spec Brand Film</p>
        <h3>Koffdark</h3>
        <p>
          A self-initiated coffee brand project focused on darker packaging,
          stronger tone, and a cinematic promo direction.
        </p>

        <ul className="work-tags">
          <li>3D Motion</li>
          <li>Packaging</li>
          <li>Brand Direction</li>
        </ul>
      </div>
    </article>
  </div>
</section>

     

      <section className="home-section studio-section" id="studio">
        <div className="container studio-grid">
          <div className="studio-copy">
            <p className="eyebrow">Studio</p>
            <h2>A motion-led practice built around tone, tension, and presence.</h2>
            <p className="section-text">
              Grimworn focuses on 3D motion, visual development, and brand
              storytelling with a darker and more cinematic edge. The goal is
              not just to make things look polished, but to give them weight,
              mood, and identity.
            </p>
          </div>

          <div className="studio-panels">
            <article className="info-card">
              <span className="info-label">Focus</span>
              <h3>What the studio does.</h3>
              <p>
                3D motion design, visual direction, brand films, concept-driven
                identity work, and selected digital atmospheres.
              </p>
            </article>

            <article className="info-card">
              <span className="info-label">Approach</span>
              <h3>How the work is shaped.</h3>
              <p>
                Each project begins with tone and visual language, then expands
                into motion, composition, texture, and a world that feels
                singular.
              </p>
            </article>

            <article className="info-card">
              <span className="info-label">Stage</span>
              <h3>First chapter, carefully built.</h3>
              <p>
                Grimworn is currently shaping its first wave of collaborations
                and building a sharp, selective body of work.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section contact-section" id="contact">
        <div className="container contact-block">
          <p className="eyebrow">Contact</p>
          <h2>Have a brand, product, or idea that needs a stronger visual world?</h2>
          <p className="section-text">
            If the fit is right, Grimworn is open to selected collaborations in
            motion, 3D visuals, and identity-led creative work.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:hello@grimworn.com?subject=Project inquiry"
              className="btn btn-primary"
            >
              hello@grimworn.com
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
