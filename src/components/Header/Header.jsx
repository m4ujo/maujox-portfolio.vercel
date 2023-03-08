import { useState } from 'react'
import Nav from './../Nav/Nav'

import './Header.css'

export default function Header () {
  const [navOpen, setNavOpen] = useState(false)

  const handleMenu = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header className={'Header' + (navOpen ? ' open' : '')}>
      <a href='/'>
        <img src='/maujox.svg' alt='Maujox' className='Header-logo' />
      </a>
      <div className='Header-nav'>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className='Header-menu' onClick={handleMenu}>
          <div className='menu-line' />
          <div className='menu-line' />
          <div className='menu-line' />
        </div>
      </div>
    </header>
  )
}
