import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const scrollToTop = (event) => {
    event.preventDefault()
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <header className="site-header">
      <div className="announce-bar" aria-label="Studio announcements">
        <div className="announce-track">
          <div className="announce-group" aria-hidden="true">
            <span>Motion design</span>
            <span>3D animation</span>
            <span>Product visuals</span>
            <span>Creative direction</span>
            <span>Against the flow</span>
          </div>
          <div className="announce-group" aria-hidden="true">
            <span>Motion design</span>
            <span>3D animation</span>
            <span>Product visuals</span>
            <span>Creative direction</span>
            <span>Against the flow</span>
          </div>
        </div>
      </div>

      <div className="container nav-wrap">
        <a href="/" className="brand" onClick={scrollToTop}>
          <span className="brand-mark" aria-hidden="true">
            <img src="/img/grimworn_logo.png" alt="" />
          </span>

          <div className="brand-copy">
            <strong>GRIMWORN</strong>
            <span className="brand-top mono">CREATIVE</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <p className="eyebrow mono">|</p>
          <a href="#studio">Process </a>
          <p className="eyebrow mono">|</p>

          <a href="#contact">Contact</a>

        </nav>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'is-active' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#studio" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
