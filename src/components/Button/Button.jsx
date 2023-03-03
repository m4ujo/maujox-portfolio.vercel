export default function Button ({ type = '', href = '#', children }) {
  return (
    <a className={'Button' + type} href={href}>
      {children}
    </a>
  )
}
