'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Props {
  cidadeNome: string
  cidadeSlug: string
  pais: 'BR' | 'US'
}

export default function PreviewFormCidade({ cidadeNome, cidadeSlug, pais }: Props) {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/preview-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          whatsapp,
          email,
          source: `ia-preview-cidade-${cidadeSlug}`,
          cidade: cidadeNome,
          cidadeSlug,
          pais,
        }),
      })

      if (!res.ok) throw new Error('Falha ao enviar')

      setStatus('success')
      const link = document.createElement('a')
      link.href = '/pdfs/ia-completo-preview.pdf'
      link.download = 'IA-Completo-Preview-Calazans-Lumina.pdf'
      link.click()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erro desconhecido')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-500/10 border-2 border-green-500/40 rounded-3xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif italic text-2xl mb-3">Preview enviado!</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-5">
          O PDF começou a baixar. Também enviei pro seu WhatsApp <strong className="text-white">{whatsapp}</strong>.
        </p>
        <p className="text-white/55 text-xs">
          Não baixou?{' '}
          <a href="/pdfs/ia-completo-preview.pdf" download className="text-red-400 underline">
            Clica aqui
          </a>
          .
        </p>
        <Link
          href="/ia-completo"
          className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-bold text-sm py-3 px-6 rounded-full transition-colors"
        >
          Ver o livro completo (R$ 9,90)
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-8 space-y-4">
      <div>
        <label className="block text-white/70 text-xs tracking-[0.18em] uppercase font-semibold mb-2">Seu nome</label>
        <input
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Como você gostaria de ser chamado(a)?"
          className="w-full bg-white/5 border border-white/15 focus:border-red-400 focus:bg-white/[0.07] rounded-xl px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-white/70 text-xs tracking-[0.18em] uppercase font-semibold mb-2">WhatsApp</label>
        <input
          type="tel"
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder={pais === 'BR' ? '(11) 99999-9999' : '(508) 555-1234'}
          className="w-full bg-white/5 border border-white/15 focus:border-red-400 focus:bg-white/[0.07] rounded-xl px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-white/70 text-xs tracking-[0.18em] uppercase font-semibold mb-2">Email (opcional)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full bg-white/5 border border-white/15 focus:border-red-400 focus:bg-white/[0.07] rounded-xl px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-700 disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-full transition-all hover:scale-[1.02] shadow-lg shadow-red-500/30 inline-flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            Baixar preview grátis
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </>
        )}
      </button>

      {status === 'error' && <p className="text-red-400 text-sm text-center">Erro: {errorMsg}. Tenta novamente.</p>}
    </form>
  )
}
