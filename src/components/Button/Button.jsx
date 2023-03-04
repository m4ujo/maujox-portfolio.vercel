import './Button.css'

function Button ({ type = 'a', style = '', href = '#', newTab, children }) {
  return (type === 'a')
    ? <a className={'Button ' + style} href={href} target={newTab ? '_blank' : ''} rel='noreferrer'>{children}</a>
    : <button className={'Button ' + style} type='submit'>{children}</button>
}

export default Button
