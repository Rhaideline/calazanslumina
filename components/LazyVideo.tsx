'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  className?: string
  label?: string
}

export default function LazyVideo({ src, className, label }: LazyVideoProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        <div className="relative">
          <video
            ref={videoRef}
            controls={isPlaying}
            preload="metadata"
            playsInline
            className="w-full aspect-video rounded-t-2xl bg-gray-900"
            onPlay={() => setIsPlaying(true)}
          >
            <source src={`${src}#t=0.5`} type="video/mp4" />
            Seu navegador nao suporta video HTML5.
          </video>
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-2xl cursor-pointer group"
              aria-label={`Play vídeo${label ? `: ${label}` : ''}`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors mb-3">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {label && (
                <span className="text-white text-sm font-medium drop-shadow-lg">{label}</span>
              )}
            </button>
          )}
        </div>
      ) : (
        <div className="w-full aspect-video rounded-t-2xl bg-gray-900 flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3">
            <svg className="w-8 h-8 text-white/40 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {label && (
            <span className="text-white/40 text-sm">{label}</span>
          )}
        </div>
      )}
    </div>
  )
}
