export default function Input ({ type, placeholder, name }) {
  return (
    <input type={type} placeholder={placeholder} id={name} name={name} />
  )
}
