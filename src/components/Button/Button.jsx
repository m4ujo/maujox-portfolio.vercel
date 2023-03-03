export default function Button ({ type = 'a', style = '', href = '#', children }) {
  return (type === 'a')
    ? <a className={'Button' + style} href={href}>{children}</a>
    : <button className={'Button' + style} type='submit'>{children}</button>
}
