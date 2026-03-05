'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyIframeProps {
  src: string
  title: string
  className?: string
  height?: string
  dataProps?: Record<string, string>
  id?: string
}

export default function LazyIframe({ src, title, className, height, dataProps, id }: LazyIframeProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load iframe after user interacts with page OR after idle time
    let loaded = false
    const load = () => {
      if (!loaded) {
        loaded = true
        setShouldLoad(true)
      }
    }

    // Use requestIdleCallback if available (load when browser is idle)
    const idleId = 'requestIdleCallback' in window
      ? (window as Window).requestIdleCallback(() => load(), { timeout: 3000 })
      : undefined

    // Fallback: load after 3s regardless
    const timer = setTimeout(load, 3000)

    // Also load on any user interaction
    const events = ['scroll', 'touchstart', 'click', 'mousemove', 'keydown'] as const
    const handler = () => load()
    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true }))

    return () => {
      clearTimeout(timer)
      if (idleId !== undefined && 'cancelIdleCallback' in window) {
        (window as Window).cancelIdleCallback(idleId)
      }
      events.forEach((e) => window.removeEventListener(e, handler))
    }
  }, [])

  if (!shouldLoad) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ minHeight: height || '480px' }}
      >
        <div className="flex items-center justify-center h-full text-white/40 text-sm">
          Carregando formulário...
        </div>
      </div>
    )
  }

  return (
    <iframe
      src={src}
      title={title}
      id={id}
      className={className}
      style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
      loading="lazy"
      {...(dataProps || {})}
    />
  )
}
