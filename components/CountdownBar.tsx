'use client'

import { useEffect, useState } from 'react'

// Conta regressiva ate o proximo midnight (local time).
// Reseta automaticamente a cada 24h — classico de infoproduto.
function getTimeUntilMidnight() {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  const diffMs = midnight.getTime() - now.getTime()
  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)
  return { hours, minutes, seconds }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

interface Props {
  variant?: 'compact' | 'hero'
}

export default function CountdownBar({ variant = 'compact' }: Props) {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getTimeUntilMidnight())
    const interval = setInterval(() => setTime(getTimeUntilMidnight()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  if (variant === 'hero') {
    return (
      <div className="inline-flex items-center gap-3 bg-red-500/15 border border-red-500/30 rounded-full px-5 py-2.5">
        <span className="text-red-300 text-[10px] tracking-[0.32em] uppercase font-bold">⏱ Oferta termina em</span>
        <span className="font-mono font-bold text-lg text-white tabular-nums">
          {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
        </span>
      </div>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 font-medium">
      <span className="text-white/70 text-xs">termina em</span>
      <span className="font-mono font-bold text-base tabular-nums">
        {pad(time.hours)}:{pad(time.minutes)}:{pad(time.seconds)}
      </span>
    </span>
  )
}
