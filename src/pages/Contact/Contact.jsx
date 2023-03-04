import Button from '../../components/Button/Button'
import Input from './../../components/Input/Input'

import './Contact.css'

function Contact () {
  return (
    <div className='Contact' id='contact'>
      <div className='Contact-content'>
        <h2 className='Contact-title'>Let<span>'</span>s talk about working together<span>...</span></h2>
        <div className='Contact-formContainer'>
          <form action='https://formsubmit.co/a4594ce76630fb3bbdae80259b280079' className='Contact-form' method='POST'>
            <div className='Contact-formRow'>
              <Input type='text' placeholder='Full name' name='fullname' />
              <Input type='email' placeholder='Email address' name='email' />
            </div>
            <div className='Contact-formRow'>
              <Input type='text' placeholder='Subject' name='subject' />
            </div>
            <div className='Contact-formRow'>
              <textarea name='Message' placeholder='Message' id='Message' />
            </div>
            <input type='hidden' name='_captcha' value='false' />
            <input type='hidden' name='_next' value='http://localhost:5173' />
            <div className='Contact-formRow'>
              <div className='Contact-socialIcons'>
                <a
                  className='Contact-info' href='https://api.whatsapp.com/send?phone=+51951087033&text=Hola,%20estamos%20interesados%20en%20sus%20servicios.' target='_blank' rel='noreferrer'
                >
                  <i className='bi bi-whatsapp' />
                </a>
                <a href='https://www.instagram.com/maujox_/' target='_blank' rel='noreferrer'>
                  <i className='bi bi-instagram' />
                </a>
                <a href='https://twitter.com/maujox_' target='_blank' rel='noreferrer'>
                  <i className='bi bi-twitter' />
                </a>
                <a href='https://www.linkedin.com/in/mauricio-castillo-iman/' target='_blank' rel='noreferrer'>
                  <i className='bi bi-linkedin' />
                </a>
              </div>
              <Button type='btn' style='fill blue'>
                Send <i className='bi bi-send-fill' />
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
