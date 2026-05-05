import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const scrollToTop = () => {
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const announcement = 'Founding offer: free collaboration spots for selected launch films, CGI visuals, and motion-led brand pieces.'

  return (
    <header className="site-header">
      <div className="announce-bar" aria-label={announcement}>
        <div className="announce-track" aria-hidden="true">
          <div className="announce-group">
            <span>{announcement}</span>
            <span>{announcement}</span>
            <span>{announcement}</span>
          </div>
          <div className="announce-group">
            <span>{announcement}</span>
            <span>{announcement}</span>
            <span>{announcement}</span>
          </div>
        </div>
      </div>
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={scrollToTop}>
          <svg className="brand-mark" viewBox="0 0 64 64" aria-label="Grimworn logo" fill="none">
            <path d="M12 44L32 10L52 44L32 34L12 44Z" stroke="currentColor" strokeWidth="3" />
            <path d="M24 36L32 22L40 36" stroke="currentColor" strokeWidth="3" />
          </svg>

          <div className="brand-copy">
            <strong>GRIMWORN</strong>
            <span className="brand-top mono">CREATIVE</span>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#studio">Studio</a>
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
          <a href="#studio" onClick={closeMenu}>Studio</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
