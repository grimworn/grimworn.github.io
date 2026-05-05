
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
    </main>
  )
}
