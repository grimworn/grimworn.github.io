
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

<section id="work" className="work-section">
  <div className="work-shell">
    <div className="work-head">
      <h2 className="work-title">Work</h2>
      <p className="work-copy">
        Digital worlds, cinematic interfaces, and brand systems built to feel sharp and memorable.
      </p>
    </div>
 <div className="work-grid">
      <a className="work-card is-featured" href="#">
      <div className="work-media work-media--video">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    controls={false}
  >
    <source src="/videos/koffdark.mp4" type="video/mp4" />
  </video>
</div>


        <div className="work-card-content">
          

          <h3>KOFFDARK</h3>
          <p>Identity, motion language, and visual system built to feel ritualistic, premium, and sharp.</p>
        </div>
      </a>
    </div>
   
  </div>

  
</section>

     <section id="studio" className="studio-section">
  <div className="studio-shell">
    <div className="studio-grid">
      <div className="studio-copy">
        <span className="studio-kicker">Studio</span>
        <h2 className="studio-title">Built for darker digital work.</h2>
        <p className="studio-text">
          Grimworn creates identity systems, motion visuals, and web experiences with a colder,
          sharper, more deliberate visual language.
        </p>
        <p className="studio-text">
          The focus is simple: fewer elements, stronger silhouettes, and a more controlled atmosphere.
        </p>
      </div>

      <div className="studio-side">
        <div className="studio-panel">
          <span className="studio-label">Focus</span>
          <ul className="studio-list">
            <li>Brand identity</li>
            <li>3D direction</li>
            <li>Motion design</li>
            <li>Creative websites</li>
          </ul>
        </div>

        <div className="studio-panel">
          <span className="studio-label">Approach</span>
          <p className="studio-note">
            Minimal structure, cinematic mood, and visuals shaped to stay clean on both desktop and mobile.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact" className="contact-section">
  <div className="contact-shell">
    <div className="contact-box">
      <div className="contact-top">
        <span className="contact-kicker">Contact</span>
        <h2 className="contact-title">Let’s talk.</h2>
        <p className="contact-text">
          For identity, motion, 3D direction, or launch visuals, get in touch with a short brief.
        </p>
      </div>

      <div className="contact-cards">
        <a className="contact-card" href="mailto:hello@grimworn.com">
          <span className="contact-label">Email</span>
          <strong className="contact-value">hello@grimworn.com</strong>
          <span className="contact-sub">Best for project inquiries and collaborations.</span>
        </a>

        <div className="contact-card">
          <span className="contact-label">Elsewhere</span>
          <div className="contact-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="contact-card">
          <span className="contact-label">Availability</span>
          <span className="contact-sub">
            Open for selected freelance work, identity systems, and darker digital launches.
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}
