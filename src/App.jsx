import './App.css'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import AboutMe from './pages/AboutMe/AboutMe'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'

function App () {
  return (
    <>
      <Header />
      <main className='App'>
        <Home />
        <Portfolio />
        <AboutMe />
        <Contact />
      </main>
    </>
  )
}

export default App
