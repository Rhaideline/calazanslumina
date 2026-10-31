import Link from 'next/link'
import { WHATSAPP } from './textos'

export const WHATSAPP_URL = WHATSAPP.pt

/**
 * Botao de CTA da casa: pilula com a seta dentro de um circulo proprio
 * (o "botao dentro do botao"), que se desloca na diagonal no hover.
 * `href` comecando com "#" rola ate o formulario da propria pagina.
 */
export default function CtaButton({
  href = '#orcamento',
  children,
  variante = 'primario',
  className = '',
}: {
  href?: string
  children: React.ReactNode
  variante?: 'primario' | 'claro' | 'contorno' | 'whatsapp'
  className?: string
}) {
  const estilos = {
    primario: 'bg-brand-mint text-white hover:bg-brand-light shadow-[0_10px_30px_-10px_rgba(255,0,5,0.6)]',
    claro: 'bg-white text-brand-dark hover:bg-white/90',
    contorno: 'bg-transparent text-current ring-1 ring-current/30 hover:ring-current/60',
    whatsapp: 'bg-[#25D366] text-[#0b3d1f] hover:bg-[#2fe271]',
  }[variante]
  const circulo = variante === 'primario' ? 'bg-white/20' : variante === 'claro' ? 'bg-brand-dark/10' : 'bg-black/10'
  const classes = `group inline-flex items-center gap-3 rounded-full pl-6 pr-1.5 py-1.5 font-semibold text-[15px] transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${estilos} ${className}`
  const conteudo = (
    <>
      <span className="py-2">{children}</span>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full ${circulo} transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105`}
        aria-hidden="true"
      >
        {variante === 'whatsapp' ? (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm5.8 14.03c-.25.69-1.44 1.32-2 1.41-.51.08-1.16.11-1.87-.12-.43-.13-.99-.32-1.7-.62-2.98-1.29-4.93-4.29-5.08-4.49-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.84 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.06 1.14 1.01 2.1 1.33 2.4 1.48.3.15.47.12.65-.07.17-.2.74-.87.94-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.12.08.72-.17 1.4Z"/></svg>
        ) : (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" /></svg>
        )}
      </span>
    </>
  )
  if (href.startsWith('http')) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{conteudo}</a>
  }
  return <Link href={href} className={classes}>{conteudo}</Link>
}
