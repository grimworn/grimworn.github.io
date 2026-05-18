import Scene3D from '../components/Scene3D'

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section container">
        <div className="hero-spotlight" aria-hidden="true" />
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <p className="eyebrow mono">Motion design, 3D animation, product visuals</p>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-desktop">
              <span className="hero-title-line">
                <span>We build</span>
              </span>
              <span className="hero-title-line">
                <span>the</span>
                <span className="wind-word-2">motion</span>
              </span>
              <span className="hero-title-line">
                <span>against</span>
              </span>
              <span className="hero-title-line">
                <span>the</span>
                <span className="wind-word">flow</span>           
              </span>
            </span>
            <span className="hero-title-mobile">
              <span className="hero-title-line">
                <span>We build the</span>
                <span className="wind-word-2">motion</span>
              </span>
              <span className="hero-title-line">
                <span>against tahe</span>
                <span className="wind-word">flow.</span>
              </span>
            </span>
          </h1>
          
          <p className="lead">
            Grimworn is a creative studio building cinematic motion, 3D animation, and product visuals for brands moving against the flow.
          </p>
          <div className="hero-mobile-strip" aria-hidden="true">
            <img src="/img/gw_mobile_hero.png" alt="" loading="eager" />
          </div>
       
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <Scene3D />
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-shell">
          <div className="section-head">
            <span className="section-index mono"></span>
            <h2>WORK</h2>
            <p>Recent motion, 3D, and product visual work shaped around atmosphere, timing, and brand presence.</p>
          </div>

          <div className="work-grid">
            <a className="work-card work-card-feature" href="#">
              <div className="work-media work-media--video">
                <video autoPlay muted loop playsInline preload="metadata" controls={false}>
                  <source src="/videos/NOUVA_1R.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="work-card-content">
                <h3>NOUVA CORE</h3>
              </div>
            </a>

            <a className="work-card work-card-feature" href="#">
              <div className="work-media work-media--video">
                <video autoPlay muted loop playsInline preload="metadata" controls={false}>
                  <source src="/videos/koffdark.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="work-card-content">
                <h3>KOFFDARK</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="studio" className="process-section">
        <div className="section-shell process-layout">
          <div className="section-head">
            <span className="section-index mono"></span>
            <h2>PROCESS</h2>
            <p>
              Grimworn works where motion design, 3D animation, and product visualization meet.<br></br> Every piece is built with controlled pacing, tactile detail, and a clear reason for every frame.
            </p>
            <p className="fine-print">
              AI Notice: We do not promise instant AI output or machine-made shortcuts.<br></br> The work is built through traditional craft, careful iteration, and the time needed for motion, light, and product detail to feel intentional.
            </p>
          </div>

        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-layout">
          <div className="section-head">
            <span className="section-index mono"></span>
            <h2>CONTACT</h2>
            <p>
Tell us about your project, launch, or upcoming campaign. <br></br> From Türkiye, we work with brands and teams worldwide.        </p>
          </div>

          <a className="contact-mainlink" href="mailto:studio@grimworn.com">
            studio@grimworn.com
            <span>Start a brief</span>
          </a>
        </div>
      </section>
    </main>
  )
}
