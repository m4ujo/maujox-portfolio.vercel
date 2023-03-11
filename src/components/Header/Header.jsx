import Logo from '../Logo/Logo'
import Nav from './../Nav/Nav'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

import './Header.scss'

export default function Header () {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className='Header xPaddings'>
      <div className='Header-content'>
        <Logo />
        <div className='Header-side'>
          <Nav />
          <button onClick={toggleTheme}>
            {
              theme === '' ? <i className='bi bi-sun-fill' /> : <i className='bi bi-moon-fill' />
            }
          </button>
        </div>
      </div>
    </header>
  )
}
