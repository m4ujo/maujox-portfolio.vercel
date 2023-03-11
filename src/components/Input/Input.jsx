import './Input.scss'

export default function Input ({ type, placeholder, name }) {
  return (
    <input
      className='Input'
      type={type}
      placeholder={placeholder}
      id={name}
      name={name}
    />
  )
}
