"use client"

import { useEffect } from "react"

export function HeaderScroll() {
  useEffect(() => {
    const header = document.querySelector("header")

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.remove("bg-transparent")
        header?.classList.add("bg-background", "border-b")
      } else {
        header?.classList.add("bg-transparent")
        header?.classList.remove("bg-background", "border-b")
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

