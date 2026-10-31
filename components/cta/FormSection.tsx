import GhlForm from '../GhlForm'
import CtaButton from './CtaButton'
import { T, WHATSAPP, type Lang } from './textos'

/**
 * Bloco de fechamento com o formulario do GHL. E o alvo de todo botao
 * "#orcamento" do site. Titulo e texto ficam FORA do formulario (pedido
 * dela: nada por cima do form do GHL).
 */
export default function FormSection({
  lang = 'pt',
  titulo = T[lang].formTitulo,
  texto = T[lang].formTexto,
}: {
  lang?: Lang
  titulo?: string
  texto?: string
}) {
  return (
    <section id="orcamento" className="relative scroll-mt-24 overflow-hidden bg-brand-dark text-white">
      <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-mint/25 blur-3xl" aria-hidden="true" />
      <div className="container-main relative py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
              {T[lang].eyebrow}
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl font-bold leading-[1.05]">{titulo}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/65">{texto}</p>
            <ul className="mt-8 space-y-3 text-white/75">
              {T[lang].bullets.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-mint" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton href={WHATSAPP[lang]} variante="whatsapp">{T[lang].falarWhats}</CtaButton>
            </div>
          </div>
          <div className="lg:col-span-3">
            {/* casca dupla: bandeja externa + nucleo branco onde o form do GHL vive */}
            <div className="rounded-[2rem] bg-white/5 p-2 ring-1 ring-white/10">
              <div className="rounded-[calc(2rem-0.5rem)] bg-white p-4 md:p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <GhlForm title={T[lang].formIframe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
