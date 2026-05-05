
import PageShell from '../components/PageShell'

export default function About() {
  return (
    <PageShell eyebrow="About" title="Cinematic motion with a sharper point of view." text="Grimworn creates motion-led visuals, CGI moments, and brand films for ideas that need stronger presence on screen.">
      <div className="about-layout">
        <article className="about-card wide">
          <h3>What we care about</h3>
          <p>Work should have atmosphere, but it still needs to carry the idea. The best result is sharp enough to be remembered and clear enough to make the product or brand land.</p>
        </article>
        <article className="about-card">
          <h3>Studio character</h3>
          <p>Run by two brothers, but built like a focused creative partner: cinematic, high-contrast, disciplined, and never trapped inside one niche.</p>
        </article>
        <article className="about-card">
          <h3>How we work</h3>
          <p>Direction first, then production. AI is used lightly for exploration, while final frames stay driven by human taste, timing, and control.</p>
        </article>
      </div>
    </PageShell>
  )
}
