import './style.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Contact from './components/Contact'
import logo from './image/mr-whiskerson.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <Contact
        img={logo}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
    </div>
  )
}

export default App
