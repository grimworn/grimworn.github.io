
import PageShell from '../components/PageShell'

export default function About() {
  return (
    <PageShell eyebrow="About" title="Founder-led, internet-literate, visually stubborn." text="Grimworn is positioned like a small studio with taste: fewer projects, more intent, and stronger control over the final frame.">
      <div className="about-layout">
        <article className="about-card wide">
          <h3>What this version fixes</h3>
          <p>The earlier site was a single long page with one visual tempo. This direction adds route-based separation, more layered composition, richer visual hierarchy, and a stronger brand color story.</p>
        </article>
        <article className="about-card">
          <h3>Brand cue</h3>
          <p>Red raven energy: severe, memorable, premium, rebellious.</p>
        </article>
        <article className="about-card">
          <h3>Build stack</h3>
          <p>React, React Router, Vite, and Three.js for the lightweight 3D hero layer.</p>
        </article>
      </div>
    </PageShell>
  )
}
