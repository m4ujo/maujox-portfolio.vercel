import './Menu.scss'

export default function Menu ({ setNavOpen, navOpen }) {
  const handleMenu = () => {
    setNavOpen(!navOpen)
  }

  return (
    <div className='Menu' onClick={handleMenu}>
      <div className='Menu-line' />
      <div className='Menu-line' />
      <div className='Menu-line' />
    </div>
  )
}
