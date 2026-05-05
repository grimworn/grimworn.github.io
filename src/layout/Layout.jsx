
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className="noise-layer" aria-hidden="true" />
      <div className="site-shell">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}
