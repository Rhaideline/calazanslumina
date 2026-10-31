import CtaButton from './CtaButton'
import { T, WHATSAPP, type Lang } from './textos'

/**
 * Faixa de CTA para o meio das paginas: aparece num ponto de decisao
 * (depois de um argumento, de uma prova, de uma lista de servicos), e nunca
 * cobre a tela. Tres tons para alternar com as secoes vizinhas.
 */
export default function CtaBand({
  lang = 'pt',
  titulo = T[lang].bandTitulo,
  texto = T[lang].bandTexto,
  botao = T[lang].bandBotao,
  tom = 'escuro',
}: {
  lang?: Lang
  titulo?: string
  texto?: string
  botao?: string
  tom?: 'escuro' | 'vermelho' | 'claro'
}) {
  const fundo = {
    escuro: 'bg-brand-dark text-white',
    vermelho: 'bg-brand-mint text-white',
    claro: 'bg-brand-bg text-brand-dark',
  }[tom]
  const sub = tom === 'claro' ? 'text-brand-dark/60' : 'text-white/70'
  return (
    <section className={`${fundo} relative overflow-hidden`}>
      {tom !== 'claro' && (
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: tom === 'vermelho' ? '#ffffff' : '#FF0005' }}
          aria-hidden="true"
        />
      )}
      <div className="container-main relative py-14 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">{titulo}</h2>
            <p className={`mt-3 text-lg leading-relaxed ${sub}`}>{texto}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row shrink-0">
            <CtaButton variante={tom === 'vermelho' ? 'claro' : 'primario'}>{botao}</CtaButton>
            <CtaButton href={WHATSAPP[lang]} variante="whatsapp">{T[lang].whatsapp}</CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
