
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
          <h1>Dark visuals. Sharp systems. Red signal.</h1>
          <p className="lead">Cinematic sites, 3D motion, and brand visuals for projects that need a darker edge.</p>
          <div className="hero-actions">
            <Link to="/work" className="btn btn-primary">View case studies</Link>
            <Link to="/services" className="btn btn-secondary">See capabilities</Link>
          </div>
          <div className="hero-meta">
            <span>Multi-page structure</span>
            <span>3D hero detail</span>
            <span>Crimson accent system</span>
          </div>
        </div>
        <div className="hero-stage">
          <Scene3D />
          
        </div>
      </section>

      <section className="container stacked-band">
        <article className="band large">
          <span className="mono small">Structure</span>
          <h2>More than one screen. More than one mood.</h2>
          <p>This version breaks the experience into dedicated routes so the brand can breathe: overview, services, work, story, and contact.</p>
        </article>
        <article className="band accent">
          <span className="mono small">Direction</span>
          <h3>Red, not green.</h3>
          <p>Crimson highlights, wine-dark layers, ember glows, and steel surfaces tuned for a darker editorial look.</p>
        </article>
      </section>

      <section className="container section-grid">
        <div className="section-copy">
          <p className="eyebrow mono">Capabilities</p>
          <h2>Not a generic agency stack. A tighter studio offering.</h2>
        </div>
        <div className="card-grid three">
          {services.map(service => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.points.map(item => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-grid pull-up">
        <div className="section-copy split-title">
          <div>
            <p className="eyebrow mono">Selected work</p>
            <h2>Projects framed like releases, not thumbnails.</h2>
          </div>
          <Link className="inline-link" to="/work">Open work archive <i className="ri-arrow-right-up-line"></i></Link>
        </div>
        <div className="project-stack">
          {projects.map(project => (
            <Link to="/work" className="project-row" key={project.slug}>
              <div>
                <span className="mono small">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-thumb" aria-hidden="true">
                <div className="thumb-core" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
