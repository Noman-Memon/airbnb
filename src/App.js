import './style.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Contact from './components/Contact'
// import logo from './image/mr-whiskerson.png'
import Joke from './components/Joke'
import jokesData from './components/jokeData'

function App() {
  const jokeElements = jokesData.map((joke, i) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  return (
    <div className="App">
      {/* <Navbar />
      <Hero />
      <Card /> */}
      <Contact
        img="./image/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={{ author: 'Haroon', body: 'He is auther', title: 'None' }}
      />
      {jokeElements}
    </div>
  )
}

export default App
