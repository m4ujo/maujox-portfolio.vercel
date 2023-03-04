import { useRef, useEffect } from 'react'

export default function Nav ({ navOpen, setNavOpen }) {
  const ref = useRef()

  useEffect(() => {
    const navLinks = ref.current.children[0].children
    console.log(navLinks)

    for (let i = 0; i < navLinks.length; i++) {
      const element = navLinks[i]
      element.addEventListener('click', () => {
        setNavOpen(false)
      })
    }
  }, [])

  return (
    <nav className={`Nav${navOpen ? ' is-active' : ''}`} ref={ref}>
      <ul className='Nav-content'>
        <li className='Link'>
          <a className='Link-text' href='#home'>Home</a>
        </li>
        <li className='Link'>
          <a className='Link-text' href='#portfolio'>Portfolio</a>
        </li>
        <li className='Link'>
          <a className='Link-text' href='#about-me'>About-Me</a>
        </li>
        <li className='Link'>
          <a className='Link-text' href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
