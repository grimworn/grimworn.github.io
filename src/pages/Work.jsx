
import PageShell from '../components/PageShell'

const projects = [
  { slug:'raven-protocol', title:'Raven Protocol', type:'Campaign Direction', summary:'A campaign direction shaped around dramatic lighting, controlled motion, and memorable product presence.' },
  { slug:'ashen-frame', title:'Ashen Frame', type:'Motion System', summary:'A high-contrast motion language with restrained type, sharp pacing, and impact-first brand assets.' },
  { slug:'scarlet-signal', title:'Scarlet Signal', type:'Launch Film', summary:'A short launch piece built to make a release feel considered, cinematic, and event-ready.' },
]

export default function Work() {
  return (
    <PageShell eyebrow="Work" title="Frames with a reason to exist." text="Selected motion pieces, campaign films, and product-led visuals built to carry an idea clearly and make it harder to ignore.">
      <div className="case-grid">
        {projects.map(project => (
          <article className="case-card" key={project.slug}>
            <div className="case-preview"><div className="preview-pulse" /></div>
            <div className="case-body">
              <span className="mono small">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="metrics">
                <span>Motion direction</span>
                <span>Launch pacing</span>
                <span>Cinematic contrast</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
