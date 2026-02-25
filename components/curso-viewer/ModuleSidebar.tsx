'use client'

import { useState } from 'react'
import type { CursoModule } from './types'

interface ModuleSidebarProps {
  modules: CursoModule[]
  currentIndex: number
  completedSlides: number[]
  isOpen: boolean
  onClose: () => void
  onNavigate: (globalIndex: number) => void
  courseName: string
  courseSlug: string
}

export default function ModuleSidebar({
  modules,
  currentIndex,
  completedSlides,
  isOpen,
  onClose,
  onNavigate,
  courseName,
  courseSlug,
}: ModuleSidebarProps) {
  // Track which modules are expanded
  const [expandedModules, setExpandedModules] = useState<Set<number>>(() => {
    // Expand the module that contains the current slide
    let slideCount = 0
    for (let i = 0; i < modules.length; i++) {
      if (currentIndex >= slideCount && currentIndex < slideCount + modules[i].slides.length) {
        return new Set([i])
      }
      slideCount += modules[i].slides.length
    }
    return new Set([0])
  })

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  // Calculate global slide index for each module
  let globalOffset = 0

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 h-full w-80 bg-white border-r border-gray-100 z-50 transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <a
              href={`/cursos/${courseSlug}`}
              className="text-xs text-brand-mint hover:underline flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </a>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded hover:bg-gray-100"
              aria-label="Fechar menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h2 className="font-serif font-bold text-brand-dark text-sm leading-tight">
            {courseName}
          </h2>
        </div>

        {/* Module list */}
        <nav className="flex-1 overflow-y-auto p-2">
          {modules.map((mod, modIndex) => {
            const moduleStart = globalOffset
            const slideCount = mod.slides.length
            globalOffset += slideCount

            // Check how many slides in this module are completed
            const moduleCompleted = Array.from({ length: slideCount }, (_, i) => moduleStart + i)
              .filter((idx) => completedSlides.includes(idx)).length

            return (
              <div key={modIndex} className="mb-1">
                {/* Module header */}
                <button
                  onClick={() => toggleModule(modIndex)}
                  className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-left hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    moduleCompleted === slideCount
                      ? 'bg-green-500 text-white'
                      : 'bg-brand-bg text-brand-dark/60'
                  }`}>
                    {moduleCompleted === slideCount ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      modIndex + 1
                    )}
                  </div>
                  <span className="text-xs font-medium text-brand-dark flex-1 truncate">
                    {mod.titulo}
                  </span>
                  <svg
                    className={`w-4 h-4 text-brand-dark/30 transition-transform ${
                      expandedModules.has(modIndex) ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slides list */}
                {expandedModules.has(modIndex) && (
                  <div className="ml-5 mt-1 space-y-0.5">
                    {mod.slides.map((slide, slideIndex) => {
                      const globalIndex = moduleStart + slideIndex
                      const isCurrent = globalIndex === currentIndex
                      const isCompleted = completedSlides.includes(globalIndex)

                      const slideLabel =
                        slide.type === 'quiz'
                          ? 'Quiz'
                          : slide.type === 'checklist'
                          ? 'Checklist'
                          : slide.type === 'summary'
                          ? 'Resumo'
                          : slide.title

                      return (
                        <button
                          key={slideIndex}
                          onClick={() => {
                            onNavigate(globalIndex)
                            onClose()
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-xs transition-colors ${
                            isCurrent
                              ? 'bg-brand-mint/10 text-brand-mint font-medium'
                              : 'text-brand-dark/60 hover:bg-gray-50'
                          }`}
                        >
                          {isCompleted ? (
                            <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className={`w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
                              isCurrent ? 'border-brand-mint bg-brand-mint' : 'border-gray-300'
                            }`} />
                          )}
                          <span className="truncate">{slideLabel}</span>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
