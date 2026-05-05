
import PageShell from '../components/PageShell'

const services = [
  {
    title: '3D Animation',
    text: 'Designed sequences, product visuals, and stylized motion built with attention to form, lighting, and timing.',
    points: ['Product films', 'Loop scenes', 'Animated visuals'],
  },
  {
    title: 'Motion Design',
    text: 'Titles, transitions, and motion systems that give campaigns, content, and launches a clearer visual rhythm.',
    points: ['Title sequences', 'Promos', 'Motion systems'],
  },
  {
    title: 'Art Direction',
    text: 'References, visual development, and aesthetic decisions that shape a more coherent final result from the start.',
    points: ['Look development', 'Frame direction', 'Visual consistency'],
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
      
      </div>
    </PageShell>
  )
}
