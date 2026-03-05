'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
}

export default function LazyVideo({ src, className }: LazyVideoProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <video
          controls
          preload="metadata"
          playsInline
          className="w-full aspect-video rounded-t-2xl"
        >
          <source src={src} type="video/mp4" />
          Seu navegador nao suporta video HTML5.
        </video>
      ) : (
        <div className="w-full aspect-video rounded-t-2xl bg-white/10 flex items-center justify-center">
          <svg className="w-16 h-16 text-white/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
  )
}
