'use client'
import ScrollReveal from '@/components/ScrollReveal'

const sites = [
  { nome: "Wolf's Siding", url: 'https://wolfs-siding.com', nicho: 'Construction / Siding', bandeira: '🇺🇸' },
  { nome: 'JH Painting Services', url: 'https://jhpaintingservices.com', nicho: 'Painting Services', bandeira: '🇺🇸' },
  { nome: 'AM Painter Inc', url: 'https://www.ampainterinc.com', nicho: 'Painting Company', bandeira: '🇺🇸' },
  { nome: 'RS Development Group', url: 'https://rs-developmentgroup.com', nicho: 'Construction / Development', bandeira: '🇺🇸' },
  { nome: 'Mass Painter Pro', url: 'https://masspainter.pro', nicho: 'Painting Services', bandeira: '🇺🇸' },
  { nome: 'Calazans Lumina', url: 'https://www.calazanslumina.com.br', nicho: 'Marketing Digital', bandeira: '🇧🇷' },
]

export default function PortfolioSites({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="py-12 bg-brand-bg border-y border-gray-100">
        <div className="container-main">
          <p className="text-center text-brand-dark/40 text-xs font-bold uppercase tracking-wider mb-6">Sites desenvolvidos e otimizados com SEO por Calazans Lumina</p>
          <div className="flex flex-wrap justify-center gap-4">
            {sites.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-brand-dark/70 hover:text-brand-dark hover:border-brand-mint hover:shadow-md transition-all duration-200"
              >
                <span>{site.bandeira}</span>
                <span className="font-medium">{site.nome}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-12">
          <p className="text-brand-mint text-sm font-bold uppercase tracking-wider mb-3">Portfolio — Sites com SEO</p>
          <h2 className="heading-2 text-brand-dark mb-4">Sites que eu desenvolvi e otimizei</h2>
          <p className="text-brand-dark/50 max-w-2xl mx-auto">
            Cada site foi construido com foco em ranqueamento no Google, performance e conversao. Construction, pintura, marketing — todos os nichos.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sites.map((site, i) => (
            <ScrollReveal key={site.url} delay={i * 80}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-brand-bg rounded-2xl border border-gray-100 p-6 hover:border-brand-mint hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{site.bandeira}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">SEO Otimizado</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-dark group-hover:text-brand-mint transition-colors mb-1">
                  {site.nome}
                </h3>
                <p className="text-brand-dark/40 text-sm mb-4">{site.nicho}</p>
                <div className="flex items-center gap-2 text-brand-mint text-sm font-medium">
                  <span>Visitar site</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
