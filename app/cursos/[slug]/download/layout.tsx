import type { Metadata } from 'next'

/**
 * Como a rota /aprender, esta aqui e aplicativo e nao conteudo: ela dispara o
 * download do PDF do curso. Chega ao rastreador com 60 a 66 palavras e o
 * titulo generico da home. Nao deve ser indexada.
 * Ver o comentario em ../aprender/layout.tsx para o motivo completo.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
}

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
