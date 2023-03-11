import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeContextProvider ({ children }) {
  const [theme, setTheme] = useState('')

  const toggleTheme = () => {
    setTheme(theme === '' ? 'light' : '')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
