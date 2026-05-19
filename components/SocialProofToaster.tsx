'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// 30 nomes BR + cidade (rotaciona aleatorio). Sem fetch, sem backend.
const NAMES = [
  'Maria Silva', 'João Pedro', 'Ana Carolina', 'Lucas Souza', 'Beatriz Alves',
  'Rafael Lima', 'Fernanda Costa', 'Carlos Eduardo', 'Juliana Rocha', 'Bruno Santos',
  'Patrícia Mendes', 'Diego Ferreira', 'Camila Oliveira', 'Thiago Almeida', 'Larissa Dias',
  'Eduardo Martins', 'Isabela Cardoso', 'Felipe Ribeiro', 'Aline Barbosa', 'Marcos Pereira',
  'Renata Castro', 'Gustavo Nascimento', 'Letícia Moreira', 'Vinícius Pinto', 'Carolina Vieira',
  'Henrique Araújo', 'Sabrina Lopes', 'André Carvalho', 'Priscila Gomes', 'Daniel Cunha',
]

const CITIES = [
  'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Brasília, DF',
  'Salvador, BA', 'Fortaleza, CE', 'Curitiba, PR', 'Recife, PE', 'Porto Alegre, RS',
  'Manaus, AM', 'Goiânia, GO', 'Campinas, SP', 'Florianópolis, SC', 'Belém, PA',
  'Vitória, ES', 'Natal, RN', 'João Pessoa, PB', 'Ribeirão Preto, SP', 'Uberlândia, MG',
  'Sorocaba, SP', 'Juiz de Fora, MG', 'Londrina, PR', 'Niterói, RJ', 'Maringá, PR',
  'Framingham, MA', 'Marlborough, MA', 'Hudson, MA', 'Worcester, MA',
]

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function timeAgo() {
  const minutes = Math.floor(Math.random() * 14) + 1
  return minutes === 1 ? 'há 1 minuto' : `há ${minutes} minutos`
}

export default function SocialProofToaster() {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({ name: '', city: '', when: '' })

  useEffect(() => {
    // Aparece a primeira vez depois de 8s, depois rotaciona
    let cycleTimer: ReturnType<typeof setTimeout>
    let hideTimer: ReturnType<typeof setTimeout>

    const cycle = () => {
      setData({ name: pick(NAMES), city: pick(CITIES), when: timeAgo() })
      setVisible(true)
      hideTimer = setTimeout(() => setVisible(false), 6000)
      cycleTimer = setTimeout(cycle, 14000) // mostra 6s + escondido 8s = 14s ciclo
    }

    const startTimer = setTimeout(cycle, 8000)

    return () => {
      clearTimeout(startTimer)
      clearTimeout(cycleTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <Link
      href="/ia-completo"
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-40 max-w-[320px] bg-white text-brand-dark rounded-2xl shadow-2xl border border-gray-200 px-4 py-3 transition-all duration-500 hover:scale-105 cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {data.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-brand-dark leading-tight">
            <strong>{data.name}</strong> de <span className="text-brand-dark/70">{data.city}</span>
          </p>
          <p className="text-[11px] text-brand-dark/55 mt-0.5">
            comprou <strong className="text-red-500">IA do Zero ao Avançado</strong> {data.when}
          </p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-500 text-xs">●</span>
            <span className="text-[10px] text-brand-dark/40">Confirmado · pagamento aprovado</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
