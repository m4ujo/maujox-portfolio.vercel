import './App.css'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import AboutMe from './pages/AboutMe/AboutMe'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'

function App () {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Header />
      <main className='App-content'>
        <Home />
        <Portfolio />
        <AboutMe />
        <Contact />
      </main>
    </div>
  )
}

export default App
