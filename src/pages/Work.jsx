
import PageShell from '../components/PageShell'

const projects = [
  { slug:'raven-protocol', title:'Raven Protocol', type:'Campaign System', summary:'A brand launch system shaped around crimson lighting, modular layouts, and editorial motion.' },
  { slug:'ashen-frame', title:'Ashen Frame', type:'Creator Identity', summary:'A creator rebrand with dark interface language, restrained type, and impact-first motion assets.' },
  { slug:'scarlet-signal', title:'Scarlet Signal', type:'Title Package', summary:'A title package built to make an episodic release feel like an event instead of another upload.' },
]

export default function Work() {
  return (
    <PageShell eyebrow="Work" title="Case studies with enough room to feel premium." text="Instead of compressing everything into one landing page, this route gives project summaries and detail blocks more breathing space.">
      <div className="case-grid">
        {projects.map(project => (
          <article className="case-card" key={project.slug}>
            <div className="case-preview"><div className="preview-pulse" /></div>
            <div className="case-body">
              <span className="mono small">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="metrics">
                <span>Dark editorial layout</span>
                <span>Motion aware</span>
                <span>Red accent surfaces</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
