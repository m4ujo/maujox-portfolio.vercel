import Button from '../Button/Button'
import './Card.scss'

export default function Card ({ name, homepage, htmlUrl }) {
  return (
    <div className='Card'>
      <div className='Card-content'>
        <div className='Card-top'>
          <h2 className='Card-projectTitle'>
            <span>📂</span>
            <span>{name}</span>
          </h2>
        </div>
        <div className='Card-bottom'>
          <Button href={homepage} style='line blue' newTab>Preview</Button>
          <Button href={htmlUrl} style='line red' newTab>Github</Button>
        </div>
      </div>
    </div>
  )
}
