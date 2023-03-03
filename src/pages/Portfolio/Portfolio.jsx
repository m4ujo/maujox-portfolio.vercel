import { projects } from '../../data/projects'
import Card from './../../components/Card/Card'

export default function Portfolio () {
  return (
    <div className='Portfolio'>
      <div className='Portfolio-content'>
        {
          projects.map(({ id, name, homepage, htmlUrl }) => {
            return <Card key={id} name={name} homepage={homepage} htmlUrl={htmlUrl} />
          })
        }
      </div>
    </div>
  )
}
