import { useState } from 'react'
import Nav from './../Nav/Nav'
import { Squash as Hamburger } from 'hamburger-react'

import './Header.css'

export default function Header () {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className='Header'>
      <a href='/'>
        <img src='/maujox.svg' alt='Maujox' className='Header-logo' />
      </a>
      <div className='Header-nav'>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <Hamburger toggled={navOpen} toggle={setNavOpen} onToggle={(toggled) => setNavOpen(toggled)} size={20} rounded />
      </div>
    </header>
  )
}
