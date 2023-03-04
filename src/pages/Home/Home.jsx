import Button from './../../components/Button/Button'
import './Home.css'

export default function Home () {
  return (
    <div className='Home' id='home'>
      <h1 className='Home-h1 Home-name'>
        Mauricio Castillo
      </h1>
      <p className='Home-p Home-jobName'>
        <span>Front-end </span>
        <span>Developer</span>
      </p>
      <div className='Home-buttons'>
        <Button href='#contact' style='fill blue'>Contact</Button>
        <Button href='#' style='fill red'>Download CV</Button>
      </div>
    </div>
  )
}
