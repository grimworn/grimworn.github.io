
import PageShell from '../components/PageShell'

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

export default function Services() {
  return (
    <PageShell eyebrow="Services" title="A smaller menu, built deeper." text="Each service is designed to connect strategy, visuals, and output instead of selling disconnected deliverables.">
      <div className="masonry-grid">
        {services.map(service => (
          <article className="detail-card" key={service.title}>
            <span className="mono small">0{service.points.length}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div className="pill-row">
              {service.points.map(item => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
        <article className="detail-card accent-card tall">
          <span className="mono small">3D layer</span>
          <h3>3D can live inside the site.</h3>
          <p>Lightweight canvas elements, ambient objects, or hero-driven scene fragments can exist directly in the browser without turning the site into a gimmick.</p>
        </article>
      </div>
    </PageShell>
  )
}
