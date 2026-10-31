import Image from 'next/image'
import HeroForm from '../HeroForm'
import type { Lang } from './textos'

/**
 * Coluna direita do topo da home: o rosto dela em cima e o formulario do GHL
 * sobreposto na parte de baixo da foto. Sem rosto o site parece fake (pedido
 * dela, 31/out/2026), e o formulario por cima do rosto escondia justamente a
 * prova — por isso a foto fica num cartao proprio, com o rosto livre.
 */
export default function HeroRetratoForm({ lang = 'pt' }: { lang?: Lang }) {
  const t =
    lang === 'en'
      ? { nome: 'Rhaideline Calazans', papel: 'I plan it and I build it', aviso: 'Free quote · reply within one business day', alt: 'Rhaideline Calazans, founder of Calazans Lumina' }
      : { nome: 'Rhaideline Calazans', papel: 'Eu planejo e eu monto', aviso: 'Orçamento grátis · resposta em até 1 dia útil', alt: 'Rhaideline Calazans, fundadora da Calazans Lumina' }
  return (
    <div className="relative">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
        <Image
          src="/foto/rhai-luz-lateral.webp"
          alt={t.alt}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width:1024px) 100vw, 40vw"
          className="object-cover object-[50%_22%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute left-4 top-4 rounded-full bg-black/55 px-4 py-2 backdrop-blur-md">
          <p className="text-sm font-semibold leading-tight text-white">{t.nome}</p>
          <p className="text-xs leading-tight text-white/70">{t.papel}</p>
        </div>
      </div>
      <div className="relative -mt-20 px-2 sm:px-4">
        <p className="mb-2 text-center text-xs text-white/70">{t.aviso}</p>
        <HeroForm />
      </div>
    </div>
  )
}
