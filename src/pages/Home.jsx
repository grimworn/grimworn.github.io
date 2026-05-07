
import Scene3D from '../components/Scene3D'

export default function Home() {
  return (
    <main>
      <section className="hero-section container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow mono">Motion design, 3D animation, product visuals</p>
          <h1>
            <span>We build the motion</span>
            <span>against the flow.</span>
          </h1>
          <p className="lead">
Grimworn is a creative studio building cinematic motion, 3D animation, and product visuals for brands moving against the flow.          </p>
          <div className="hero-meta">
            <span>Motion design</span>
            <span>3D animation</span>
            <span>Product visuals</span>
          </div>
        </div>
        <div className="hero-stage">
          <Scene3D />
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="work-shell">
          <div className="section-box work-box">
            <div className="work-head">
              <h3 className="work-title">Work</h3>
              <p className="work-copy">
                Selected motion and 3D work built around timing, texture, and product presence.
              </p>
            </div>

            <div className="work-grid">
              <a className="work-card is-featured" href="#">
                <div className="work-media work-media--video">
                  <video autoPlay muted loop playsInline preload="metadata" controls={false}>
                    <source src="/videos/koffdark.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="work-card-content">
                  <h3>KOFFDARK</h3>
                  <p>
                    A dark motion piece shaped with atmosphere, contrast, and controlled product presence.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="studio" className="studio-section">
        <div className="studio-shell">
          <div className="section-box studio-box">
            <div className="studio-head">
              <h2 className="studio-title">Process</h2>
              <p className="studio-text">
                Grimworn works where motion design, 3D animation, and product visualization meet. Every piece is built with controlled pacing, tactile detail, and a clear reason for every frame.
              </p>
              <p className="studio-text">
                AI Notice: We do not promise instant AI output or machine-made shortcuts. The work is built through traditional craft, careful iteration, and the time needed for motion, light, and product detail to feel intentional.
              </p>
            </div>

            <div className="studio-process">
              <div className="studio-panel">
                <span className="studio-label">Approach</span>
                <h3>Intent</h3>
                <p className="studio-note">
                  We begin with what the product or brand needs people to notice, feel, and remember. Style follows purpose, not the other way around.
                </p>
              </div>

              <div className="studio-panel">
                <span className="studio-label">Craft</span>
                <h3>Motion & 3D</h3>
                <p className="studio-note">
                  From CGI product shots to animated loops and campaign films, the final work is shaped to hold its identity across screens, formats, and moments.
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
              <h2 className="contact-title">Contact</h2>
              <p className="contact-text">
                Send the product, the mood, and the moment people should remember. We will shape a clear path for motion, 3D, or product visualization that can be produced with care.
              </p>
              <a className="contact-mainlink" href="mailto:hello@grimworn.com">
                hello@grimworn.com
                <span>Start a brief</span>
              </a>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-label">Send</span>
                <strong className="contact-value">Product, mood, references</strong>
                <span className="contact-sub">
                  A rough brief, visual references, or the feeling the piece needs to carry.
                </span>
              </div>

              <div className="contact-card">
                <span className="contact-label">Built for</span>
                <strong className="contact-value">Motion, 3D, product visuals</strong>
                <span className="contact-sub">
                  Campaign films, CGI shots, animated loops, and social-ready product moments.
                </span>
              </div>

              <div className="contact-card">
                <span className="contact-label">Next</span>
                <strong className="contact-value">Scope, timing, craft</strong>
                <span className="contact-sub">
                  If the brief fits, we will come back with a clear direction and a realistic way forward.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
