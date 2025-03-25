"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeScript() {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    // Check if there's a stored theme preference
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      // Check for system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
  }, [setTheme])

  return null
}

