
import PageShell from '../components/PageShell'

const services = [
  {
    title: 'Motion Direction',
    text: 'The rhythm, structure, and visual language of a moving piece before it becomes production.',
    points: ['Treatments', 'Frame direction', 'Motion language'],
  },
  {
    title: 'CGI & Product Visuals',
    text: 'Stylized product shots, atmospheric scenes, and 3D details made for launches, campaigns, and screen-first brand moments.',
    points: ['Product visuals', 'CGI scenes', 'Look development'],
  },
  {
    title: 'Brand Films',
    text: 'Short-form films, launch edits, and social cuts that make a brand or product feel more memorable on screen.',
    points: ['Launch films', 'Social cuts', 'Campaign assets'],
  },
]

export default function Services() {
  return (
    <PageShell eyebrow="Services" title="Services" text="Direction, CGI, and production for motion-led brand pieces.">
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
      
      </div>
    </PageShell>
  )
}
