import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import DefenseAerospace from './components/DefenseAerospace'
import IndustrialParts from './components/IndustrialParts'
import LineCard from './components/LineCard'
import Compliance from './components/Compliance'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <DefenseAerospace />
      <IndustrialParts />
      <LineCard />
      <Compliance />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
