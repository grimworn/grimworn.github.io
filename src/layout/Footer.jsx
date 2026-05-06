export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="eyebrow mono">Grimworn Creative</p>
            <p>Motion design, 3D animation, and product visualization.</p>
          </div>

          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#studio">Process</a>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@grimworn.com">hello@grimworn.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>(c) {year} Grimworn</span>
          <span>Make the frame worth remembering.</span>
        </div>
      </div>
    </footer>
  )
}
