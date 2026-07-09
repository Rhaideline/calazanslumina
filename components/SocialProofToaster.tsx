'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cursos } from '@/data/cursos'

// Pega depoimentos REAIS de todos os cursos (curados em data/cursos.ts).
// Sem fabricar "Maria comprou agora" — usa testimonial autentico com nome + cidade.
type Depoimento = { nome: string; cidade: string; texto: string; curso: string }

const ALL_DEPOIMENTOS: Depoimento[] = cursos.flatMap((c) =>
  c.vsl.depoimentos.map((d) => ({
    nome: d.nome,
    cidade: d.cidade,
    texto: d.texto,
    curso: c.nome.split(' — ')[0],
  }))
)

function pick<T>(arr: T[], not?: T): T {
  if (arr.length === 0) return arr[0]
  let next: T
  do {
    next = arr[Math.floor(Math.random() * arr.length)]
  } while (arr.length > 1 && next === not)
  return next
}

export default function SocialProofToaster() {
  const [visible, setVisible] = useState(false)
  const [d, setD] = useState<Depoimento | null>(null)

  useEffect(() => {
    if (ALL_DEPOIMENTOS.length === 0) return

    let cycleTimer: ReturnType<typeof setTimeout>
    let hideTimer: ReturnType<typeof setTimeout>
    let last: Depoimento | undefined

    const cycle = () => {
      const next = pick(ALL_DEPOIMENTOS, last)
      last = next
      setD(next)
      setVisible(true)
      hideTimer = setTimeout(() => setVisible(false), 9000) // 9s on
      cycleTimer = setTimeout(cycle, 17000) // 9s on + 8s off
    }

    const startTimer = setTimeout(cycle, 10000) // primeira aparece em 10s

    return () => {
      clearTimeout(startTimer)
      clearTimeout(cycleTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!d) return null

  // Pega primeira frase do texto, ou trunca em 90 chars
  const firstSentence = d.texto.split(/[.!?]/)[0]
  const snippet = firstSentence.length > 95 ? firstSentence.slice(0, 92) + '…' : firstSentence

  return (
    <Link
      href="/ia-completo"
      aria-live="polite"
      aria-label={`Depoimento de aluno: ${snippet}`}
      className={`fixed bottom-4 left-4 z-40 max-w-[340px] bg-white text-brand-dark rounded-2xl shadow-2xl border border-gray-200 px-4 py-3 transition-all duration-500 hover:scale-105 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-red-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {d.nome.split(' ').map((p) => p[0]).slice(0, 2).join('')}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-[11px] text-brand-dark/75 leading-snug italic">"{snippet}"</p>
          <p className="text-[10px] text-brand-dark/55 mt-1.5">
            <strong className="text-brand-dark">{d.nome}</strong> · {d.cidade}
          </p>
        </div>
      </div>
    </Link>
  )
}
