
import Navbar from './Navbar'
import Footer from './Footer'

function Noise() {
  return <div className="noise-layer" aria-hidden="true" />
}

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <Noise />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
