import PageShell from '../components/PageShell'

export default function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Bring the idea. We'll find the frame."
      text="Start with the product, campaign, or brand moment. Grimworn can help shape it into a motion-led piece with atmosphere, clarity, and a stronger reason to be watched."
    >
      <div className="contact-layout">
        <article className="contact-card large-card">
          <h3>Project intake</h3>
          <p>Include the product or brand, the goal, the audience, timing, existing assets, and references that point toward the right mood.</p>
          <a className="btn btn-primary" href="mailto:hello@grimworn.com">hello@grimworn.com</a>
        </article>
        <article className="contact-card">
          <h3>Best for</h3>
          <ul>
            <li>Motion-led brand pieces</li>
            <li>Product and launch films</li>
            <li>CGI and visual direction</li>
          </ul>
        </article>
      </div>
    </PageShell>
  )
}
