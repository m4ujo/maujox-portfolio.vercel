import Button from './../../components/Button/Button'

export default function Home () {
  return (
    <div className='Home' id='Home'>
      <h1 className='Home-h1 Home-name'>
        Mauricio Castillo
      </h1>
      <p className='Home-p Home-jobName'>
        <span>Self-taught</span>
        <span>Programmer</span>
      </p>
      <div className='Home-buttons'>
        <Button href='#contact' style='.fill.blue'>Contact</Button>
        <Button href='#' style='.line.red'>Download CV</Button>
      </div>
    </div>
  )
}
