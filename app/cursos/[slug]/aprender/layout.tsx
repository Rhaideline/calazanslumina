import type { Metadata } from 'next'

/**
 * Esta rota NAO e pagina de conteudo: e o visualizador do curso, um componente
 * de cliente ('use client'). Para o rastreador ela chega praticamente vazia —
 * na auditoria de 20/set/2026 ela media UMA palavra e carregava o titulo
 * generico da home, igual em todos os cursos.
 *
 * Oito paginas quase vazias, linkadas e respondendo 200, com titulo repetido,
 * e um dos sinais mais caros que um site manda: o buscador conclui que o site
 * publica pagina sem conteudo e passa a duvidar do resto.
 *
 * Como e area de aluno, ela nao tem por que estar em indice nenhum. O bloqueio
 * vem em duas camadas, porque uma sozinha nao basta: `noindex` resolve para
 * quem ja rastreou, e o robots.txt evita o rastreio novo.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
}

export default function AprenderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
