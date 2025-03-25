"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

interface ParallaxVideoProps {
  videoSrc: string
  overlayContent?: React.ReactNode
  muted?: boolean
  fallbackImage?: string
}

export function ParallaxVideo({
  videoSrc,
  overlayContent,
  muted: initialMuted = false,
  fallbackImage = "/placeholder.svg?height=1080&width=1920",
}: ParallaxVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [muted, setMuted] = useState(initialMuted)
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect()
        const scrollPos = window.scrollY
        const windowHeight = window.innerHeight

        // Only update when the video is in view
        if (top < windowHeight && top + containerRef.current.offsetHeight > 0) {
          setScrollPosition(scrollPos)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current && containerRef.current && !videoError) {
      const { top, height } = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate parallax effect
      if (top < windowHeight && top + height > 0) {
        const parallaxOffset = (scrollPosition * 0.3).toFixed(2)
        videoRef.current.style.transform = `translateY(${parallaxOffset}px)`
      }
    }
  }, [scrollPosition, videoError])

  const toggleMute = () => {
    setMuted(!muted)
  }

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gray-900">
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          loop
          playsInline
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoLoaded(true)}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content overlay */}
      {overlayContent && <div className="absolute inset-0 z-20 flex items-center justify-center">{overlayContent}</div>}

      {/* Mute/Unmute button - only show if video is loaded */}
      {videoLoaded && !videoError && (
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
    </div>
  )
}

