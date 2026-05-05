
import Navbar from './Navbar'
import Footer from './Footer'

function Noise() {
  return <div className="noise-layer" aria-hidden="true" />
}

export default function Layout({ children }) {
  return (
<>
  <div className="noise-layer" aria-hidden="true" />
  <div className="site-shell">
    <header className="site-header">
      <Navbar />
    </header>
    {children}
    <Footer />
  </div>
</>
  )
}
