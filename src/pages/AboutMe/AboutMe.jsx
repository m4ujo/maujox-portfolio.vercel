import Me from './../../assets/img/me-transparent.png'
import './AboutMe.css'

export default function AboutMe () {
  return (
    <div className='AboutMe' id='about-me'>
      <h2 className='AboutMe-title'>
        <span>About-</span>
        <span>Me</span>
      </h2>
      <div className='AboutMe-content'>
        <div className='AboutMe-left'>
          <img className='AboutMe-image' src={Me} alt='Me' />
        </div>
        <div className='AboutMe-right'>
          <div className='AboutMe-textContainer'>
            <p className='AboutMe-p AboutMe-desc'>
              <span>
                Hi! I'm Mauricio Joaquin (maujo), I'm 21 years old and I'm a lover of programming, design and web development.
              </span>
              <span>
                I have strong background in desktop application development with the .NET Framework.
              </span>
              <span>
                Recently I've been learning about databases and front-end technologies on my own, which shows that I'm organized and very productive.
              </span>
              <span>
                My current goal is to be a good full stack developer 🔥.
              </span>
            </p>
            <p className='AboutMe-techTitle'>Technologies that I use currently:</p>
            <div className='AboutMe-devIcons'>
              <i className='devicon-react-original' />
              <i className='devicon-sass-original' />
              <i className='devicon-python-plain' />
              <i className='devicon-csharp-plain' />
              <i className='devicon-dot-net-plain' />
              <i className='devicon-mysql-plain' />
              <i className='devicon-mongodb-plain' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
