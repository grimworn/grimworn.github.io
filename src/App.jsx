import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-darker min-h-screen">
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
