'use client'

import { useEffect } from 'react'
import { trackViewContent } from '@/lib/analytics'

interface Props {
  courseSlug: string
  courseName: string
  preco: number
}

/**
 * Dispara view_item (GA4) + ViewContent (Meta Pixel) ao montar o componente.
 * Use uma vez por curso page — rastreia quem visualiza detalhe do produto.
 */
export default function CourseViewTracker({ courseSlug, courseName, preco }: Props) {
  useEffect(() => {
    trackViewContent({ courseSlug, courseName, preco })
  }, [courseSlug, courseName, preco])

  return null
}
