import Button from './../../components/Button/Button'
import './Home.scss'

export default function Home () {
  return (
    <section className='Home xPaddings-special' id='home'>
      <h1 className='Home-h1 Home-name'>
        Mauricio Castillo
      </h1>
      <p className='Home-p Home-jobName'>
        <span>Front-end </span>
        <span>Developer</span>
      </p>
      <div className='Home-buttons'>
        <Button href='#contact' style='fill blue'>Contact</Button>
        <Button href='/resume.pdf' style='fill red' newTab='_blank'>Download CV</Button>
      </div>
    </section>
  )
}
