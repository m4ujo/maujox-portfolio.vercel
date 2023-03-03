import Button from '../Button/Button'

export default function Card ({ name, homepage, htmlUrl }) {
  return (
    <div className='Card'>
      <div className='Card-content'>
        <div className='Card-top'>
          <h2 className='Card-h2 Card-projectTitle'>{name}</h2>
          <i className='bi bi-arrows-angle-expand' />
        </div>
        <div className='Card-bottom'>
          <Button href={homepage} style='.line.blue'>Preview</Button>
          <Button href={htmlUrl} style='.line.red'>Github</Button>
        </div>
      </div>
    </div>
  )
}
