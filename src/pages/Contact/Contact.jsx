import Button from '../../components/Button/Button'
import Input from './../../components/Input/Input'

function Contact () {
  return (
    <div className='Contact' id='contact'>
      <div className='Contact-content'>
        <h2 className='Contact-title'>Let<span>'</span>s talk about working together<span>...</span></h2>
        <div className='Contact-formContainer'>
          <form action='https://formsubmit.co/your@email.com' className='Contact-form' method='POST'>
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
            <div className='Contact-formRow'>
              <div className='Contact-socialIcons'>
                <i className='bi bi-whatsapp' />
                <i className='bi bi-instagram' />
                <i className='bi bi-twitter' />
                <i className='bi bi-linkedin' />
              </div>
              <Button type='btn' style='.fill.blue'>
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
