import { useRef, useEffect, useState } from 'react'
import Menu from './../Menu/Menu'
import './Nav.scss'

export default function Nav () {
  const [navOpen, setNavOpen] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const navLinks = ref.current.children[0].children

    for (let i = 0; i < navLinks.length; i++) {
      const element = navLinks[i]
      element.addEventListener('click', () => {
        setNavOpen(false)
      })
    }
  }, [])

  return (
    <div className={`Nav${navOpen ? ' is-active' : ''}`}>
      <nav className='Nav-container' ref={ref}>
        <ul className='Nav-content'>
          <li className='Nav-link'>
            <a className='Nav-linkText' href='#home'>
              Home
            </a>
          </li>
          <li className='Nav-link'>
            <a className='Nav-linkText' href='#portfolio'>
              Portfolio
            </a>
          </li>
          <li className='Nav-link'>
            <a className='Nav-linkText' href='#about-me'>
              About-Me
            </a>
          </li>
          <li className='Nav-link'>
            <a className='Nav-linkText' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Menu navOpen={navOpen} setNavOpen={setNavOpen} />
    </div>
  )
}
