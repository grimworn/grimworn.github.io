
import Scene3D from '../components/Scene3D'

const services = [
  {
    title: 'Motion Direction',
    text: 'The visual rhythm of a campaign: pacing, frames, transitions, and the feeling that holds the piece together.',
    points: ['Treatments', 'Frame direction', 'Motion language'],
  },
  {
    title: 'CGI & Product Visuals',
    text: 'Stylized product moments, impossible camera moves, atmospheric scenes, and 3D details built to make the offer feel premium.',
    points: ['CGI scenes', 'Product shots', 'Look development'],
  },
  {
    title: 'Brand Films',
    text: 'Short films, launch edits, and screen-native assets shaped for campaigns, social rollouts, and brand moments.',
    points: ['Launch films', 'Social cuts', 'Campaign assets'],
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
    summary: 'A creator identity with high-contrast interface language, restrained type, and impact-first motion assets.',
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
          <p className="eyebrow mono">Motion design, CGI, and campaign visuals</p>
          <h1>
            <span>Built outside the system.</span>
            <span>Against the grain.</span>
            <span>On purpose.</span>
          </h1>
          <p className="lead">Grimworn creates motion-led brand films, product visuals, and launch assets for ideas that need a sharper presence on screen.</p>
          <div className="hero-actions">
          </div>
          <div className="hero-meta">
            <span>Motion direction</span>
            <span>CGI visuals</span>
            <span>Brand films</span>
          </div>
        </div>
        <div className="hero-stage">
          <Scene3D />
          
        </div>
      </section>

<section id="work" className="work-section">
  <div className="work-shell">
    <div className="work-head">
      <h2 className="work-title">Work</h2>
      <p className="work-copy">
        Motion pieces, product visuals, and campaign films with enough atmosphere to stand out and enough clarity to sell the idea.
      </p>
    </div>
 <div className="work-grid">
      <a className="work-card is-featured" href="#">
      <div className="work-media work-media--video">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    controls={false}
  >
    <source src="/videos/koffdark.mp4" type="video/mp4" />
  </video>
</div>


        <div className="work-card-content">
          

          <h3>KOFFDARK</h3>
          <p>A motion-led brand piece built with atmosphere, contrast, and a premium sense of control.</p>
        </div>
      </a>
    </div>
   
  </div>

  
</section>

     <section id="studio" className="studio-section">
  <div className="studio-shell">
    <div className="studio-head">
        <span className="studio-kicker">Studio</span>
        <h2 className="studio-title">Process</h2>
        <p className="studio-text">
          Grimworn works between motion design, CGI, and visual direction to shape brand films and campaign assets with a controlled cinematic edge.
        </p>
        <p className="studio-text">
          AI is not the core of the work. It is used only in rare support moments; the direction, motion, look, and final craft stay human-made and controlled.
        </p>
    </div>

      <div className="studio-process">
        <div className="studio-panel">
          <span className="studio-label">Approach</span>
          <h3>Direction</h3>
          <p className="studio-note">
            Before production, we define what the piece needs to make people feel, notice, and remember. The visual style comes after the purpose is clear.
          </p>
        </div>

        <div className="studio-panel">
          <span className="studio-label">Output</span>
          <h3>Production</h3>
          <p className="studio-note">
            We shape motion-led assets that can live across campaign films, product teasers, social cuts, and presentation moments without losing their visual identity.
          </p>
        </div>
      </div>
  </div>
</section>

<section id="contact" className="contact-section">
  <div className="contact-shell">
    <div className="contact-box">
      <div className="contact-top">
        <span className="contact-kicker">Contact</span>
        <h2 className="contact-title">Start a brief</h2>
        <p className="contact-text">
          Send the product, the mood, and the moment people should remember. We'll shape it into motion with atmosphere, clarity, and a stronger reason to be watched.
        </p>
        <a className="contact-mainlink" href="mailto:hello@grimworn.com">
          hello@grimworn.com
          <span>Start a brief</span>
        </a>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <span className="contact-label">Send</span>
          <strong className="contact-value">Product, goal, references</strong>
          <span className="contact-sub">A few links, a rough direction, or the feeling the piece needs to carry.</span>
        </div>

        <div className="contact-card">
          <span className="contact-label">Built for</span>
          <strong className="contact-value">Launch films, CGI, motion</strong>
          <span className="contact-sub">Campaign assets, product visuals, social cuts, and atmospheric brand pieces.</span>
        </div>

        <div className="contact-card">
          <span className="contact-label">Next</span>
          <strong className="contact-value">Direction, scope, step</strong>
          <span className="contact-sub">
            If the brief fits, we'll come back with a clear direction and the cleanest way forward.
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}
