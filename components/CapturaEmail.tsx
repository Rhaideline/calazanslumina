'use client'

import { useState } from 'react'

/**
 * Captura de e-mail. O site nao tinha nenhuma.
 *
 * POR QUE ISSO IMPORTA MAIS QUE PARECE
 * Todo o trafego organico dos ultimos meses entrou e saiu sem deixar rastro.
 * Quando o Google derrubou o ranqueamento, a receita foi junto — porque nao
 * havia lista para quem mandar nada. Trafego sem captura e trafego que voce
 * paga duas vezes: uma para conquistar, outra para reconquistar.
 *
 * COMO FUNCIONA
 * Grava no GHL pela rota /api/preview-request, que ja existia. Sem popup:
 * a regra da casa e captura no corpo da pagina, nunca cobrindo a tela.
 *
 * O QUE PROMETE
 * Nada de "receba novidades". A pessoa da o e-mail em troca de algo concreto,
 * e o texto diz exatamente o que ela vai receber e com que frequencia.
 */

interface Props {
  /** De onde veio o cadastro — vira tag no GHL. */
  origem: string
  /** Cidade, quando a pagina tiver. */
  cidade?: string
  /** Nome do arquivo em /public a entregar depois do cadastro.
      Ex.: "checklist-enxoval-bebe-2026.pdf" */
  titulo?: string
  descricao?: string
  isca?: string
  variante?: 'claro' | 'escuro'
}

export default function CapturaEmail({
  origem,
  cidade,
  titulo = 'O que funciona, sem enrolação',
  descricao = 'Um e-mail por semana com uma coisa prática que você aplica no mesmo dia. Sem spam, e você sai quando quiser.',
  isca,
  variante = 'claro',
}: Props) {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [estado, setEstado] = useState<'parado' | 'enviando' | 'ok' | 'erro'>('parado')
  const [erro, setErro] = useState('')

  const escuro = variante === 'escuro'

  async function enviar(e: React.FormEvent) {
    e.preventDefault()
    if (estado === 'enviando') return
    setEstado('enviando')
    setErro('')

    try {
      const r = await fetch('/api/preview-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome.trim(),
          // a rota exige whatsapp; sem telefone aqui, manda vazio e o e-mail
          // e o identificador. O GHL aceita contato so com e-mail.
          whatsapp: '',
          email: email.trim(),
          source: `lista-${origem}`,
          cidade,
        }),
      })
      if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || 'falhou')
      setEstado('ok')
      // entrega a isca na hora. O e-mail tambem sai pelo GHL, mas quem acabou
      // de digitar espera o arquivo AGORA — mandar so por e-mail perde a
      // pessoa que digitou errado ou nao quer sair da pagina.
      if (isca) {
        const a = document.createElement('a')
        a.href = `/${isca}`
        a.download = isca
        document.body.appendChild(a)
        a.click()
        a.remove()
      }
    } catch (err) {
      setEstado('erro')
      setErro(err instanceof Error ? err.message : 'Não consegui cadastrar. Tente de novo.')
    }
  }

  if (estado === 'ok') {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          escuro ? 'bg-white/5 border border-white/10' : 'bg-brand-bg border border-gray-100'
        }`}
      >
        <p className={`font-bold text-lg mb-1 ${escuro ? 'text-white' : 'text-brand-dark'}`}>
          Pronto, {nome.split(' ')[0]}.
        </p>
        <p className={escuro ? 'text-white/60 text-sm' : 'text-brand-dark/60 text-sm'}>
          {isca
            ? 'O download começou. Se não abrir, clique aqui:'
            : 'O primeiro e-mail chega na próxima semana.'}
        </p>
        {isca && (
          <a
            href={`/${isca}`}
            download
            className={`inline-block mt-3 text-sm font-bold underline underline-offset-4 ${
              escuro ? 'text-white' : 'text-brand-mint'
            }`}
          >
            baixar o PDF
          </a>
        )}
      </div>
    )
  }

  return (
    <div
      className={`rounded-2xl p-8 ${
        escuro ? 'bg-white/5 border border-white/10' : 'bg-brand-bg border border-gray-100'
      }`}
    >
      <h3 className={`font-bold text-xl mb-2 ${escuro ? 'text-white' : 'text-brand-dark'}`}>
        {titulo}
      </h3>
      <p className={`text-sm mb-6 ${escuro ? 'text-white/60' : 'text-brand-dark/60'}`}>
        {descricao}
      </p>

      <form onSubmit={enviar} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome"
          aria-label="Seu nome"
          className={`flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
            escuro
              ? 'bg-white/10 border border-white/15 text-white placeholder:text-white/35 focus:border-white/40'
              : 'bg-white border border-gray-200 text-brand-dark placeholder:text-brand-dark/35 focus:border-brand-dark/40'
          }`}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          aria-label="Seu e-mail"
          className={`flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
            escuro
              ? 'bg-white/10 border border-white/15 text-white placeholder:text-white/35 focus:border-white/40'
              : 'bg-white border border-gray-200 text-brand-dark placeholder:text-brand-dark/35 focus:border-brand-dark/40'
          }`}
        />
        <button
          type="submit"
          disabled={estado === 'enviando'}
          className={`rounded-xl px-6 py-3 text-sm font-bold whitespace-nowrap transition-[transform,box-shadow,background-color,color] disabled:opacity-50 ${
            escuro
              ? 'bg-white text-brand-dark hover:bg-white/90'
              : 'bg-brand-dark text-white hover:bg-brand-dark/90'
          }`}
        >
          {estado === 'enviando' ? 'Enviando…' : isca ? 'Quero receber' : 'Entrar na lista'}
        </button>
      </form>

      {estado === 'erro' && (
        <p className="text-red-500 text-xs mt-3">{erro}</p>
      )}
      <p className={`text-[11px] mt-4 ${escuro ? 'text-white/30' : 'text-brand-dark/35'}`}>
        Seus dados ficam só conosco. Um clique cancela a inscrição.
      </p>
    </div>
  )
}
