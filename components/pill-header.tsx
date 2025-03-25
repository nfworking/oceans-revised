"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Fish } from "lucide-react"

export function PillHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-300">
      <div
        className={`
        rounded-full backdrop-blur-md transition-all duration-300
        ${scrolled ? "bg-black/70 shadow-lg" : "bg-black/40"}
      `}
      >
        <div className="flex h-14 items-center px-6 justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Fish className="h-5 w-5 text-white" />
              <span className="inline-block font-bold text-white text-sm">CoralGuard</span>
            </Link>
            <nav className="hidden gap-4 md:flex">
              <Link href="#mission" className="flex items-center text-xs font-medium text-white/90 hover:text-white">
                Our Mission
              </Link>
              <Link
                href="/initiatives"
                className="flex items-center text-xs font-medium text-white/90 hover:text-white"
              >
                Initiatives
              </Link>
              <Link href="/impact" className="flex items-center text-xs font-medium text-white/90 hover:text-white">
                Impact
              </Link>
              <Link href="/support-us" className="flex items-center text-xs font-medium text-white/90 hover:text-white">
                Support Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-white/90 hover:text-white hover:bg-white/10 text-xs">
              Download App
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
              View your dashboard
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

