import { projects } from '../../data/projects'
import Card from './../../components/Card/Card'
import './Portfolio.scss'

export default function Portfolio () {
  return (
    <section className='Portfolio xPaddings-special yPaddings' id='portfolio'>
      <h2 className='Portfolio-title'>Portfolio</h2>
      <div className='Portfolio-container'>
        <div className='Portfolio-content'>
          {
          projects.map(({ id, name, homepage, htmlUrl }) => {
            return <Card key={id} name={name} homepage={homepage} htmlUrl={htmlUrl} />
          })
        }
        </div>
      </div>
    </section>
  )
}
