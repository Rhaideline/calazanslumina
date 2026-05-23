'use client'

import { useEffect, useRef, useState } from 'react'

interface ReelEmbedProps {
  src: string
  poster: string
  className?: string
  label?: string
}

/**
 * Lazy reel player 9:16 com poster image.
 * Nao baixa o MP4 ate o user clicar play - preserva PageSpeed.
 */
export default function ReelEmbed({ src, poster, className = '', label }: ReelEmbedProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          obs.unobserve(el)
        }
      },
      { rootMargin: '300px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[9/16] w-full max-w-[360px] mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl ${className}`}
    >
      {isVisible ? (
        <>
          <video
            ref={videoRef}
            poster={poster}
            controls={isPlaying}
            preload="none"
            playsInline
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/55 via-transparent to-black/15 cursor-pointer group"
              aria-label={`Play${label ? `: ${label}` : ' Reel Mercado Livre'}`}
            >
              <span className="w-20 h-20 md:w-24 md:h-24 bg-brand-mint/95 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <svg className="w-9 h-9 md:w-11 md:h-11 text-brand-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              {label && (
                <span className="mt-4 text-white text-sm md:text-base font-semibold tracking-wide drop-shadow-lg px-3 text-center">
                  {label}
                </span>
              )}
            </button>
          )}
        </>
      ) : (
        // Skeleton com poster image preview enquanto IntersectionObserver nao disparou
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
          aria-hidden
        />
      )}
    </div>
  )
}
