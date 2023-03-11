import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeContextProvider ({ children }) {
  let initialValueTheme = ''
  if (window.localStorage.getItem('theme-data')) { initialValueTheme = window.localStorage.getItem('theme-data') }

  const [theme, setTheme] = useState(initialValueTheme)

  useEffect(() => {
    window.localStorage.setItem('theme-data', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === '' ? 'light' : '')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
