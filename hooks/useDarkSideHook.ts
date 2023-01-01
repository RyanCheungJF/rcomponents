import { useEffect, useState } from 'react'

export const useDarkSideHook = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.theme : 'dark'
  )
  const colourTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(colourTheme)
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, colourTheme])

  return {
    colourTheme: colourTheme,
    setTheme: setTheme,
  }
}
