import Button from '../../components/Button/Button'
import Input from './../../components/Input/Input'

function Contact () {
  return (
    <div className='Contact'>
      <div className='Contact-content'>
        <h2 className='Contact-title'>Let<span>'</span>s talk about working together<span>...</span></h2>
        <div className='Contact-formContainer'>
          <form action='https://formsubmit.co/your@email.com' className='Contact-form' method='POST'>
            <Input type='text' placeholder='Full name' name='fullname' />
            <Input type='email' placeholder='Email address' name='email' />
            <Input type='text' placeholder='Subject' name='subject' />
            <textarea name='Message' placeholder='Message' id='Message' />
            <Button type='btn' style='.fill.blue'>
              Send <i className='bi bi-send-fill' />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
