import './style.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Contact from './components/Contact'
// import logo from './image/mr-whiskerson.png'
import Joke from './components/Joke'
import jokesData from './components/jokeData'
import data from './components/data'

function App() {
  // console.log(data)
  const jokeElements = jokesData.map((joke, i) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  const cards = data.map((item, i) => {
    return (
      <Card
        img={item.coverImg}
        location={item.location}
        rating={item.stats.rating}
        reviewContent={item.stats.reviewCount}
        title={item.title}
        price={item.price}
        key={item.id}
      />
    )
  })
  return (
    <div className="App">
      {/* <Navbar />
      <Hero /> */}
      {/* <Card /> */}
      {/* <Contact
        img="./image/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
        isPun={true}
        upvotes={10}
        downvotes={2}
        comments={{ author: 'Haroon', body: 'He is auther', title: 'None' }}
      />
      {jokeElements} */}
      <section className="cards-list">{cards}</section>
    </div>
  )
}

export default App
