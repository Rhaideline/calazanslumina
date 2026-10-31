'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import FormSection from './FormSection'
import VideosCarrossel from '../VideosCarrossel'
import CtaButton from './CtaButton'
import { T, WHATSAPP, type Lang } from './textos'

// Paginas de curso ja tem a propria barra de compra (FloatingCTA) e a area de
// aula nao e lugar de orcamento.
const SEM_CTA = [/^\/cursos\/[^/]+\/aprender/, /^\/cursos\/[^/]+$/]

/**
 * Coloca em TODA pagina:
 *  1. o bloco final com o formulario do GHL, quando a pagina ainda nao tem um
 *     (algumas paginas trazem o proprio, com titulo da cidade ou do servico);
 *  2. a barra fixa de CTA — no celular, embaixo, com WhatsApp e orcamento;
 *     no computador, uma pilula no canto. Aparece depois de 400 px de rolagem
 *     e some quando o formulario esta na tela.
 */
export default function GlobalCta({ lang = 'pt' }: { lang?: Lang }) {
  const caminho = usePathname() || '/'
  const [temForm, setTemForm] = useState(true)
  const [temVideos, setTemVideos] = useState(true)
  const [rolou, setRolou] = useState(false)
  const [formNaTela, setFormNaTela] = useState(false)
  const bloqueada = SEM_CTA.some((r) => r.test(caminho))

  useEffect(() => {
    setTemForm(Boolean(document.getElementById('orcamento')))
    setTemVideos(Boolean(document.querySelector('[data-videos]')))
    const onScroll = () => setRolou(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [caminho])

  useEffect(() => {
    const alvo = document.getElementById('orcamento')
    if (!alvo) return
    const io = new IntersectionObserver(([e]) => setFormNaTela(e.isIntersecting), { threshold: 0.15 })
    io.observe(alvo)
    return () => io.disconnect()
  }, [caminho, temForm])

  if (bloqueada) return null
  const mostrarBarra = rolou && !formNaTela

  return (
    <>
      {/* videos dela em toda pagina que ainda nao tem (pedido dela, 31/out) */}
      {!temVideos && <VideosCarrossel titulo={T[lang].videosTitulo} />}
      {!temForm && <FormSection lang={lang} />}

      {/* celular: barra inferior */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          mostrarBarra ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex gap-2">
          <a href={WHATSAPP[lang]} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-bold text-[#0b3d1f]">
            {T[lang].whatsapp}
          </a>
          <a href="#orcamento" className="flex flex-[1.4] items-center justify-center rounded-full bg-brand-mint py-3 text-sm font-bold text-white">
            {T[lang].orcamento}
          </a>
        </div>
      </div>

      {/* computador: pilula no canto esquerdo (o direito e do chat do GHL) */}
      <div
        className={`fixed bottom-6 left-6 z-40 hidden transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:block ${
          mostrarBarra ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <CtaButton>{T[lang].orcamento}</CtaButton>
      </div>
    </>
  )
}
