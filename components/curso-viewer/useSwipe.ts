'use client'

import { useRef, useCallback } from 'react'

interface SwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void
  onTouchMove: (e: React.TouchEvent) => void
  onTouchEnd: () => void
}

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50
): SwipeHandlers {
  const startX = useRef<number>(0)
  const startY = useRef<number>(0)
  const deltaX = useRef<number>(0)
  const isScrolling = useRef<boolean | null>(null)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    startX.current = touch.clientX
    startY.current = touch.clientY
    deltaX.current = 0
    isScrolling.current = null
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    const dx = touch.clientX - startX.current
    const dy = touch.clientY - startY.current

    // Determine scroll direction on first move
    if (isScrolling.current === null) {
      isScrolling.current = Math.abs(dy) > Math.abs(dx)
    }

    if (!isScrolling.current) {
      deltaX.current = dx
    }
  }, [])

  const onTouchEnd = useCallback(() => {
    if (isScrolling.current) return

    if (deltaX.current < -threshold) {
      onSwipeLeft()
    } else if (deltaX.current > threshold) {
      onSwipeRight()
    }

    deltaX.current = 0
    isScrolling.current = null
  }, [onSwipeLeft, onSwipeRight, threshold])

  return { onTouchStart, onTouchMove, onTouchEnd }
}
