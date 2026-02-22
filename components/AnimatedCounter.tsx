'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  numero: string
  label: string
  sufixo?: string
}

export default function AnimatedCounter({ numero, label, sufixo }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const target = parseInt(numero.replace(/[^0-9]/g, ''), 10) || 0

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered])

  useEffect(() => {
    if (!triggered || target === 0) return

    const duration = 1800
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [triggered, target])

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-4xl md:text-5xl font-bold text-brand-mint mb-2">
        {triggered ? count : 0}
        {sufixo || ''}
      </p>
      <p className="text-white/60 text-sm">{label}</p>
    </div>
  )
}
