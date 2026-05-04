
export default function PageShell({ eyebrow, title, text, children }) {
  return (
    <main className="page-shell container">
      <section className="page-hero">
        <p className="eyebrow mono">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead page-lead">{text}</p>
      </section>
      {children}
    </main>
  )
}
