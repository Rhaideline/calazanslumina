'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyIframeProps {
  src: string
  title: string
  className?: string
  height?: string
  id?: string
  /** 'click' = load on click (for above-fold forms), 'viewport' = load when visible */
  trigger?: 'click' | 'viewport'
}

export default function LazyIframe({ src, title, className, height, id, trigger = 'viewport' }: LazyIframeProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldLoad) return

    if (trigger === 'viewport') {
      // Load when the container enters the viewport (with 300px margin)
      const el = containerRef.current
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.unobserve(el)
          }
        },
        { rootMargin: '300px' }
      )

      observer.observe(el)
      return () => observer.disconnect()
    }
    // 'click' trigger: no auto-load — handled by onClick
  }, [shouldLoad, trigger])

  if (!shouldLoad) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ minHeight: height || '480px', cursor: trigger === 'click' ? 'pointer' : undefined }}
        onClick={trigger === 'click' ? () => setShouldLoad(true) : undefined}
        role={trigger === 'click' ? 'button' as const : undefined}
        tabIndex={trigger === 'click' ? 0 : undefined}
        onKeyDown={trigger === 'click' ? (e) => { if (e.key === 'Enter' || e.key === ' ') setShouldLoad(true) } : undefined}
        aria-label={trigger === 'click' ? 'Clique para abrir o formulário' : undefined}
      >
        {trigger === 'click' ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="space-y-3 w-full max-w-sm">
              <div className="bg-white/10 rounded-lg h-11 w-full border border-white/20 flex items-center px-4">
                <span className="text-white/40 text-sm">Nome completo</span>
              </div>
              <div className="bg-white/10 rounded-lg h-11 w-full border border-white/20 flex items-center px-4">
                <span className="text-white/40 text-sm">Email</span>
              </div>
              <div className="bg-white/10 rounded-lg h-11 w-full border border-white/20 flex items-center px-4">
                <span className="text-white/40 text-sm">Telefone</span>
              </div>
              <div className="bg-brand-mint text-brand-dark font-bold text-center py-3 rounded-lg text-sm">
                Toque para abrir o formulário
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="space-y-3 w-full max-w-sm">
              <div className="bg-white/10 rounded-lg h-11 w-full border border-white/20 animate-pulse" />
              <div className="bg-white/10 rounded-lg h-11 w-full border border-white/20 animate-pulse" />
              <div className="bg-white/10 rounded-lg h-11 w-full border border-white/20 animate-pulse" />
              <div className="bg-white/10 rounded-lg h-24 w-full border border-white/20 animate-pulse" />
              <div className="bg-brand-mint/50 rounded-lg h-12 w-full animate-pulse" />
            </div>
          </div>
        )}
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
    />
  )
}
