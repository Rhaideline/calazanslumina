import Link from 'next/link'

/**
 * Shell das paginas legais (/privacidade, /termos, /cookies).
 *
 * Sem client-side JS e sem embed: sao paginas de texto. Mantem o mesmo
 * vocabulario de classes das paginas institucionais (section-padding,
 * container-main, heading-*), entao nao introduz CSS novo.
 */
export default function LegalDoc({
  titulo,
  resumo,
  atualizadoEm,
  children,
}: {
  titulo: string
  resumo: string
  /** Data da ultima revisao do texto, formato "31 de julho de 2026" */
  atualizadoEm: string
  children: React.ReactNode
}) {
  return (
    <main className="bg-brand-bg">
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Você está aqui" className="text-sm text-brand-dark/50 mb-6">
              <Link href="/" className="hover:text-brand-mint transition-colors">Início</Link>
              {' / '}
              <span className="text-brand-dark/70">{titulo}</span>
            </nav>

            <h1 className="heading-1 text-brand-dark mb-4">{titulo}</h1>
            <p className="text-brand-dark/60 text-lg mb-2">{resumo}</p>
            <p className="text-brand-dark/40 text-sm mb-10">
              Última atualização: {atualizadoEm}
            </p>

            <div className="space-y-6 text-brand-dark/80 leading-relaxed">
              {children}
            </div>

            <div className="mt-12 pt-6 border-t border-brand-dark/10 text-sm text-brand-dark/60">
              <p className="font-medium text-brand-dark mb-1">Responsável pelo tratamento de dados</p>
              <p>Rhaideline Calazans — Calazans Lumina</p>
              <p>Framingham, Massachusetts, EUA</p>
              <p>
                <a href="mailto:contato@lc.calazanslumina.com.br" className="text-brand-mint hover:text-brand-dark transition-colors">
                  contato@lc.calazanslumina.com.br
                </a>
              </p>
              <p className="mt-4 text-brand-dark/40 text-xs">
                Documentos relacionados:{' '}
                <Link href="/privacidade" className="hover:text-brand-mint transition-colors">Privacidade</Link>{' · '}
                <Link href="/termos" className="hover:text-brand-mint transition-colors">Termos de Uso</Link>{' · '}
                <Link href="/cookies" className="hover:text-brand-mint transition-colors">Cookies</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/** Titulo de secao dentro de um documento legal. */
export function LegalSection({ n, titulo, children }: { n: number; titulo: string; children: React.ReactNode }) {
  return (
    <section className="pt-4">
      <h2 className="font-serif text-xl font-bold text-brand-dark mb-3">
        <span className="text-brand-mint mr-2">{n}.</span>
        {titulo}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}
