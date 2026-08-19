import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'
import CoursesSection from '@/components/CoursesSection'
import PortfolioSites from '@/components/PortfolioSites'

export const metadata: Metadata = {
  title: 'Sobre Rhaideline Calazans | 8+ Anos em Marketing Digital',
  description:
    'De secretaria medica a especialista em marketing digital com cases publicados. Fundadora da Calazans Lumina, atendendo brasileiros nos EUA e Brasil.',
  alternates: { canonical: 'https://calazanslumina.com.br/sobre' },
  openGraph: {
    title: 'Sobre Rhaideline Calazans | Calazans Lumina',
    description: 'De secretaria medica a especialista em marketing digital.',
    url: 'https://calazanslumina.com.br/sobre',
    type: 'profile',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://calazanslumina.com.br/sobre#person',
  name: 'Rhaideline Calazans',
  jobTitle: 'Especialista em Marketing Digital & Fundadora da Calazans Lumina',
  url: 'https://calazanslumina.com.br/sobre',
  image: '/rhai-retrato-1.webp',
  description:
    'Especialista em marketing digital com método próprio e cases publicados. Fundadora da Calazans Lumina, agência focada em brasileiros nos EUA e Brasil.',
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://calazanslumina.com.br/#organization',
    name: 'Calazans Lumina',
  },
  nationality: { '@type': 'Country', name: 'Brazil' },
  knowsAbout: [
    'Marketing Digital',
    'Web Development',
    'GoHighLevel',
    'SEO',
    'Google Business Profile',
    'Inteligência Artificial',
    'ChatGPT',
    'Funis de Vendas',
    'CRM',
    'Automação de Marketing',
    'Gestão de Redes Sociais',
    'Google Ads',
    'Meta Ads',
  ],
  sameAs: ['https://www.instagram.com/calazanslumina'],
}

export default function SobrePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Quem e Rhaideline Calazans?', acceptedAnswer: { '@type': 'Answer', text: 'Rhaideline Calazans e especialista em marketing digital com método próprio e cases publicados. Fundadora da Calazans Lumina, agência que atende brasileiros nos EUA (Massachusetts) e em todo o Brasil. Trabalha com sites profissionais, funis GoHighLevel, CRM com IA no WhatsApp e Google Business Profile.' } },
      { '@type': 'Question', name: 'A Calazans Lumina atende nos EUA e no Brasil?', acceptedAnswer: { '@type': 'Answer', text: 'Sim! A Calazans Lumina atende brasileiros em mais de 100 cidades de Massachusetts (EUA) e 227 cidades do Brasil. O atendimento e 100% remoto e em portugues. Oferecemos sites, funis, CRM, redes sociais e Google Maps.' } },
      { '@type': 'Question', name: 'Quais serviços a Calazans Lumina oferece?', acceptedAnswer: { '@type': 'Answer', text: 'Oferecemos: sites profissionais otimizados para velocidade e conversão, funis de vendas no GoHighLevel, CRM com IA conversacional no WhatsApp, gestao de redes sociais, trafego pago (Google Ads e Meta Ads), Google Business Profile, SEO local e nacional, e sub-contas GoHighLevel prontas para empresas.' } },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Breadcrumbs items={[{ name: 'Sobre' }]} />

      {/* Hero — full-width background image with overlay */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <Image
          src="/rhai-retrato-1.webp"
          alt="Rhaideline Calazans — Fundadora da Calazans Lumina, especialista em marketing digital para brasileiros nos EUA e Brasil"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-dark/80" />

        <div className="container-main section-padding relative z-10 text-white">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
                Sobre a fundadora
              </p>
              <h1 className="heading-1 mb-6">
                Rhaideline <span className="text-brand-mint">Calazans</span>
              </h1>
              <p className="text-white/70 text-lg italic mb-8 border-l-2 border-brand-mint pl-6">
                &quot;Eu não aprendi marketing em sala de aula. Eu aprendi vendendo meus próprios produtos,
                perdendo clientes por falta de sistema e reconstruindo tudo do zero — mais de uma vez.&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="btn-primary text-base"
                >
                  Fale comigo
                </Link>
                <Link href="/servicos" className="btn-secondary-light text-base">
                  Conheça os serviços
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* A Jornada */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal>
            <h2 className="heading-2 text-brand-dark mb-10 text-center">Minha jornada</h2>
          </ScrollReveal>

          <div className="space-y-12">
            <ScrollReveal>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    14a
                  </div>
                  <div className="w-0.5 h-full bg-brand-mint/20 mt-2" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                    14 anos como secretária médica
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Foram 14 anos cuidando da organização de consultórios, lidando com pacientes, agenda
                    e comunicação. Ali aprendi o que nenhum curso ensina: disciplina, empatia e foco
                    absoluto em resultado. Cada paciente era um &quot;cliente&quot; que precisava se sentir ouvido
                    e bem atendido — e eu levei essa mentalidade para tudo que fiz depois.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2018
                  </div>
                  <div className="w-0.5 h-full bg-brand-mint/20 mt-2" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                    A decisão de empreender
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Com uma filha de 12 anos e a certeza de que queria construir algo próprio, tomei a
                    decisão mais difícil e mais transformadora da minha vida: largar a estabilidade e
                    empreender. Comecei importando produtos dos EUA e vendendo no Brasil — Mercado Livre,
                    Shopee, B2W. Para vender, precisei aprender a ranquear produtos no algoritmo dos
                    marketplaces, criar meu próprio site, administrar Instagram e rodar campanhas. Não
                    tinha equipe. Era eu, meu computador e a necessidade de fazer funcionar.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    EUA
                  </div>
                  <div className="w-0.5 h-full bg-brand-mint/20 mt-2" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                    O convite que mudou tudo
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Meu pai, dono de uma agência de marketing nos Estados Unidos, me convidou para trabalhar
                    com ele. Foi ali que mergulhei de cabeça no marketing digital profissional: GoHighLevel
                    CRM, Visual Studio, automações com IA e funis de vendas. Fiz cursos
                    intensivos, implementei sistemas para clientes reais e descobri que tudo que eu havia
                    aprendido sozinha era uma base poderosa para construir algo muito maior.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    Hoje
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                    Calazans Lumina
                  </h3>
                  <p className="text-brand-dark/70 leading-relaxed">
                    Hoje lidero a Calazans Lumina
                    atendendo empreendedores brasileiros em Massachusetts (EUA) e nas principais capitais
                    do Brasil. Meu trabalho transforma negócios que vivem do &quot;boca a boca&quot; em máquinas
                    previsíveis de geração de leads — com sites de alta performance, funis automatizados,
                    CRM com IA, gestão de redes sociais e Google Business Profile otimizado. Meu diferencial
                    é simples: eu não sou só especialista em ferramentas — eu vivi o que é ser dona de
                    negócio. Sei o que dói e sei o que resolve.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: '/rhai-retrato-1.webp',
                alt: 'Rhaideline Calazans em ambiente profissional — marketing digital para brasileiros',
              },
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67f07ddb544d82eaef1ec10e.jpeg',
                alt: 'Rhaideline Calazans — estrategista de marketing digital e empreendedora',
              },
              {
                src: '/rhai-retrato-2.webp',
                alt: 'Rhaideline Calazans — fundadora e CEO da Calazans Lumina',
              },
              {
                src: '/rhai-retrato-1.webp',
                alt: 'Rhaideline Calazans trabalhando em estratégias de marketing digital',
              },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-80 object-cover"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="heading-2 text-brand-dark mb-10">
              Por que a Calazans Lumina?
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: 'Experiência real como empreendedora', desc: 'Não é teoria — eu construí negócios do zero, errei, ajustei e aprendi com cada passo.' },
              { titulo: 'Bilíngue e bicultural', desc: 'Entendo a realidade do brasileiro nos EUA e no Brasil. Comunico nos dois mundos.' },
              { titulo: 'Especialista em GoHighLevel', desc: 'Domino a plataforma all-in-one mais poderosa do mercado para automação e CRM.' },
              { titulo: 'Foco em resultado, não em vaidade', desc: 'Métricas reais: leads gerados, custo por lead, vendas fechadas. Sem enrolação.' },
            ].map((d, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-light h-full text-left">
                  <h3 className="font-serif text-lg font-bold text-brand-dark mb-2">{d.titulo}</h3>
                  <p className="text-brand-dark/60 text-sm">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Freelancer para agências */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
                  Freelancer para agências
                </p>
                <h2 className="heading-2 mb-6">
                  Sua agência precisa de uma <span className="text-brand-mint">parceira confiável?</span>
                </h2>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    Além de atender empreendedores diretamente, também trabalho como freelancer
                    para agências de marketing digital que precisam de apoio especializado em
                    implementação e execução.
                  </p>
                  <p>
                    Se sua agência precisa de uma profissional experiente para projetos de sites,
                    funis no GoHighLevel, automações com IA, gestão de Google Business Profile
                    ou configuração de CRM — eu posso ser a extensão da sua equipe.
                  </p>
                </div>
                <ul className="space-y-3 mt-6 mb-8">
                  {['Entrega pontual e com qualidade', 'Comunicação clara e profissional', 'Experiência com white-label', 'Domínio completo do GoHighLevel'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5531982948067?text=Olá Rhaideline, sou de uma agência e gostaria de conversar sobre uma parceria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base inline-flex"
                >
                  Quero conversar sobre parceria
                </a>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-black/20 to-black/5 rounded-3xl blur-2xl" />
                  <Image
                    src="/rhai-retrato-2.webp"
                    alt="Rhaideline Calazans — freelancer para agências de marketing digital"
                    width={400}
                    height={500}
                    className="rounded-3xl relative z-10 w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <CoursesSection />

      {/* Explore Mais — Cross-Links */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main text-center">
          <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Explore Mais</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/servicos" className="bg-brand-mint text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors text-sm font-medium">Nossos Serviços</Link>
            <Link href="/cursos" className="bg-brand-mint text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors text-sm font-medium">Cursos Online</Link>
            <Link href="/blog" className="bg-brand-mint text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors text-sm font-medium">Blog</Link>
            <Link href="/portfolio" className="bg-brand-mint text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors text-sm font-medium">Portfólio</Link>
            <Link href="/para-agencias" className="bg-brand-mint text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors text-sm font-medium">Para Agências</Link>
            <Link href="/contato" className="bg-brand-mint text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-colors text-sm font-medium">Contato</Link>
          </div>
        </div>
      </section>

      <PortfolioSites compact />
      {/* CTA */}
      <CTAForm />
    </>
  )
}
