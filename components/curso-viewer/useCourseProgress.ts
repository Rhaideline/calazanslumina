'use client'

import { useState, useEffect, useCallback } from 'react'

interface CourseProgress {
  currentSlideIndex: number
  completedSlides: number[]
  quizAnswers: Record<number, number>
  checklistStates: Record<number, boolean[]>
}

const STORAGE_PREFIX = 'curso-progress-'

function getDefaultProgress(): CourseProgress {
  return {
    currentSlideIndex: 0,
    completedSlides: [],
    quizAnswers: {},
    checklistStates: {},
  }
}

export function useCourseProgress(slug: string) {
  const [progress, setProgress] = useState<CourseProgress>(getDefaultProgress)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_PREFIX + slug)
      if (stored) {
        const parsed = JSON.parse(stored) as CourseProgress
        setProgress(parsed)
      }
    } catch {
      // Ignore parse errors
    }
    setIsLoaded(true)
  }, [slug])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (!isLoaded) return
    try {
      localStorage.setItem(STORAGE_PREFIX + slug, JSON.stringify(progress))
    } catch {
      // Ignore storage errors
    }
  }, [progress, slug, isLoaded])

  const setCurrentSlide = useCallback((index: number) => {
    setProgress((prev) => ({ ...prev, currentSlideIndex: index }))
  }, [])

  const markSlideCompleted = useCallback((index: number) => {
    setProgress((prev) => {
      if (prev.completedSlides.includes(index)) return prev
      return {
        ...prev,
        completedSlides: [...prev.completedSlides, index],
      }
    })
  }, [])

  const setQuizAnswer = useCallback((slideIndex: number, answerIndex: number) => {
    setProgress((prev) => ({
      ...prev,
      quizAnswers: { ...prev.quizAnswers, [slideIndex]: answerIndex },
    }))
  }, [])

  const setChecklistState = useCallback((slideIndex: number, items: boolean[]) => {
    setProgress((prev) => ({
      ...prev,
      checklistStates: { ...prev.checklistStates, [slideIndex]: items },
    }))
  }, [])

  const resetProgress = useCallback(() => {
    setProgress(getDefaultProgress())
    try {
      localStorage.removeItem(STORAGE_PREFIX + slug)
    } catch {
      // Ignore
    }
  }, [slug])

  return {
    progress,
    isLoaded,
    setCurrentSlide,
    markSlideCompleted,
    setQuizAnswer,
    setChecklistState,
    resetProgress,
  }
}
