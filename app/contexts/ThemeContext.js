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
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize theme on mount
  useEffect(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      // Use saved preference
      setIsDark(savedTheme === 'dark')
    } else {
      // Use system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(systemPrefersDark)
    }
    
    setIsInitialized(true)
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    if (!isInitialized) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemThemeChange = (e) => {
      // Only update if no manual preference is saved
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setIsDark(e.matches)
      }
    }

    mediaQuery.addListener(handleSystemThemeChange)
    
    return () => {
      mediaQuery.removeListener(handleSystemThemeChange)
    }
  }, [isInitialized])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    // Save preference to localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  // Apply background color to body based on theme
  useEffect(() => {
    if (!isInitialized) return

    if (isDark) {
      document.body.style.backgroundColor = '#000000'
      document.body.style.color = '#ffffff'
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.body.style.backgroundColor = '#ffffff'
      document.body.style.color = '#000000'
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [isDark, isInitialized])

  // Prevent hydration mismatch by not rendering until initialized
  if (!isInitialized) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isInitialized }}>
      {children}
    </ThemeContext.Provider>
  )
}
