'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import type { CursoInterativo, Slide } from './types'
import { useCourseProgress } from './useCourseProgress'
import { useSwipe } from './useSwipe'
import ProgressBar from './ProgressBar'
import ModuleSidebar from './ModuleSidebar'
import SlideRenderer from './SlideRenderer'
import SlideNavigation from './SlideNavigation'

interface CourseViewerProps {
  curso: CursoInterativo
}

export default function CourseViewer({ curso }: CourseViewerProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const {
    progress,
    isLoaded,
    setCurrentSlide,
    markSlideCompleted,
    setChecklistState,
  } = useCourseProgress(curso.slug)

  // Flatten all slides with module info
  const allSlides = useMemo(() => {
    const slides: { slide: Slide; moduleIndex: number; moduleTitle: string }[] = []
    curso.modulos.forEach((mod, modIndex) => {
      mod.slides.forEach((slide) => {
        slides.push({
          slide,
          moduleIndex: modIndex,
          moduleTitle: mod.titulo,
        })
      })
    })
    return slides
  }, [curso.modulos])

  const totalSlides = allSlides.length
  const currentIndex = progress.currentSlideIndex
  const currentSlideData = allSlides[currentIndex]

  // Navigation
  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return
      setDirection(index > currentIndex ? 'right' : 'left')
      // Mark current slide as completed when leaving
      markSlideCompleted(currentIndex)
      setCurrentSlide(index)
    },
    [currentIndex, totalSlides, setCurrentSlide, markSlideCompleted]
  )

  const goNext = useCallback(() => goToSlide(currentIndex + 1), [goToSlide, currentIndex])
  const goPrev = useCallback(() => goToSlide(currentIndex - 1), [goToSlide, currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrev])

  // Swipe navigation
  const swipeHandlers = useSwipe(goNext, goPrev)

  // Auto-mark content slides as completed after viewing for 2 seconds
  useEffect(() => {
    if (!currentSlideData) return
    const slide = currentSlideData.slide
    if (slide.type === 'content' || slide.type === 'summary') {
      const timer = setTimeout(() => {
        markSlideCompleted(currentIndex)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, currentSlideData, markSlideCompleted])

  const handleSlideComplete = useCallback(() => {
    markSlideCompleted(currentIndex)
  }, [currentIndex, markSlideCompleted])

  const handleChecklistChange = useCallback(
    (items: boolean[]) => {
      setChecklistState(currentIndex, items)
    },
    [currentIndex, setChecklistState]
  )

  // Show loading state while hydrating
  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-brand-dark/50 text-sm">Carregando...</div>
      </div>
    )
  }

  if (!currentSlideData) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-brand-dark/50 text-sm mb-4">Slide nao encontrado</p>
          <button
            onClick={() => setCurrentSlide(0)}
            className="btn-primary text-sm"
          >
            Voltar ao inicio
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Top progress bar */}
      <ProgressBar
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        moduleTitle={currentSlideData.moduleTitle}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <ModuleSidebar
          modules={curso.modulos}
          currentIndex={currentIndex}
          completedSlides={progress.completedSlides}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onNavigate={goToSlide}
          courseName={curso.nome}
          courseSlug={curso.slug}
        />

        {/* Main content area */}
        <div
          className="flex-1 flex flex-col overflow-hidden"
          {...swipeHandlers}
        >
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-10 md:px-12 lg:px-20 lg:py-14">
              <div
                key={currentIndex}
                className={direction === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}
              >
                <SlideRenderer
                  slide={currentSlideData.slide}
                  slideIndex={currentIndex}
                  onComplete={handleSlideComplete}
                  checklistState={progress.checklistStates[currentIndex]}
                  onChecklistChange={handleChecklistChange}
                />
              </div>
            </div>
          </div>

          {/* Bottom navigation */}
          <SlideNavigation
            currentIndex={currentIndex}
            totalSlides={totalSlides}
            onPrev={goPrev}
            onNext={goNext}
          />
        </div>
      </div>
    </div>
  )
}
