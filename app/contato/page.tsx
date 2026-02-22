import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Contato | Fale com a Calazans Lumina',
  description:
    'Entre em contato com a Calazans Lumina pelo WhatsApp, Instagram ou formulário. Marketing digital para brasileiros nos EUA e Brasil. Resposta em até 24h.',
}

export default function ContatoPage() {
  return (
    <>
      <section className="section-padding bg-brand-dark">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h1 className="heading-1 mb-4">
              Vamos <span className="gradient-text">conversar?</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Escolha o canal que preferir. Estou pronta para entender seu negócio e
              criar a estratégia ideal para você.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {[
              {
                titulo: 'WhatsApp',
                desc: 'Resposta rápida e direta',
                link: 'https://wa.me/5531982948067?text=Olá, vim pelo site e quero saber mais sobre os serviços da Calazans Lumina',
                icone: '💬',
                cta: 'Chamar no WhatsApp',
              },
              {
                titulo: 'Instagram',
                desc: 'Acompanhe nosso conteúdo',
                link: 'https://www.instagram.com/calazanslumina/',
                icone: '📸',
                cta: 'Seguir no Instagram',
              },
              {
                titulo: 'Google Maps',
                desc: 'Veja nossas avaliações',
                link: 'https://maps.app.goo.gl/umLNmLYMyhbVx4HQ6',
                icone: '📍',
                cta: 'Ver no Google Maps',
              },
            ].map((canal, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a
                  href={canal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium block text-center group"
                >
                  <span className="text-4xl mb-4 block">{canal.icone}</span>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-brand-mint transition-colors">
                    {canal.titulo}
                  </h2>
                  <p className="text-white/50 text-sm mb-4">{canal.desc}</p>
                  <span className="text-brand-mint text-sm font-medium">{canal.cta} →</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
