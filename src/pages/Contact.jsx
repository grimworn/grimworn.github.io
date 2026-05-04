
import PageShell from '../components/PageShell'

export default function Contact() {
  return (
    <PageShell eyebrow="Contact" title="Bring the brief. We’ll shape the atmosphere." text="Use this page as the project handoff point for launch direction, visual systems, edit packages, or 3D-heavy creative work.">
      <div className="contact-layout">
        <article className="contact-card large-card">
          <h3>Project intake</h3>
          <p>Include your goal, target audience, existing assets, timing, and links to anything that already feels close.</p>
          <a className="btn btn-primary" href="mailto:hello@grimworn.com">hello@grimworn.com</a>
        </article>
        <article className="contact-card">
          <h3>Best for</h3>
          <ul>
            <li>Creator relaunches</li>
            <li>Dark premium studio sites</li>
            <li>3D-led brand visuals</li>
          </ul>
        </article>
      </div>
    </PageShell>
  )
}
