export interface ContentSlide {
  type: 'content'
  title: string
  body: string
  tip?: string
  image?: string
}

export interface QuizSlide {
  type: 'quiz'
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface ChecklistSlide {
  type: 'checklist'
  title: string
  description?: string
  items: string[]
}

export interface SummarySlide {
  type: 'summary'
  title: string
  points: string[]
}

export interface DiagramSlide {
  type: 'diagram'
  title: string
  diagramType: 'flowchart' | 'mindmap' | 'funnel' | 'comparison' | 'steps' | 'mockup' | 'stats' | 'barchart' | 'icons' | 'phone' | 'calendar'
  data: Record<string, unknown>
  caption?: string
}

export type Slide = ContentSlide | QuizSlide | ChecklistSlide | SummarySlide | DiagramSlide

export interface CursoModule {
  titulo: string
  slides: Slide[]
}

export interface CursoInterativo {
  slug: string
  nome: string
  modulos: CursoModule[]
}
