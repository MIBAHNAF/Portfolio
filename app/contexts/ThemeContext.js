'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  // Apply background color to body based on theme
  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = '#000000'
      document.body.style.color = '#ffffff'
    } else {
      document.body.style.backgroundColor = '#ffffff'
      document.body.style.color = '#000000'
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
