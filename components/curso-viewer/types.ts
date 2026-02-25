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

export type Slide = ContentSlide | QuizSlide | ChecklistSlide | SummarySlide

export interface CursoModule {
  titulo: string
  slides: Slide[]
}

export interface CursoInterativo {
  slug: string
  nome: string
  modulos: CursoModule[]
}
