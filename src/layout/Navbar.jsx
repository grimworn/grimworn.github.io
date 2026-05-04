
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">
          <svg className="brand-mark" viewBox="0 0 64 64" aria-label="Grimworn logo" fill="none">
            <path d="M12 44L32 10L52 44L32 34L12 44Z" stroke="currentColor" strokeWidth="3"/>
            <path d="M24 36L32 22L40 36" stroke="currentColor" strokeWidth="3"/>
          </svg>
          <div>
            <span className="brand-top mono">Red raven studio</span>
            <strong>GRIMWORN.CREATIVE</strong>
          </div>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link to="/contact" className="header-cta">Start a project</Link>
      </div>
    </header>
  )
}
