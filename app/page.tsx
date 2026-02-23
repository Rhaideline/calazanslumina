import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import ServiceIcon from '@/components/ServiceIcon'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'
import HeroForm from '@/components/HeroForm'
import HeroBadges from '@/components/HeroBadges'
import PricingTable from '@/components/PricingTable'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Calazans Lumina',
  description: 'Agência de marketing digital especializada em brasileiros nos EUA e Brasil. Sites Next.js, funis GHL, CRM com IA e Google Business Profile.',
  url: 'https://calazanslumina.com',
  telephone: '+5531982948067',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Framingham',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  founder: {
    '@type': 'Person',
    name: 'Rhaideline Calazans',
  },
  areaServed: ['Massachusetts, USA', 'Brasil'],
  priceRange: '$$',
  image: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3c6855d8bc9a8c44fb4d.png',
  sameAs: ['https://www.instagram.com/calazanslumina/'],
}

const portfolioImages = [
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png', alt: 'Site profissional desenvolvido pela Calazans Lumina — layout moderno e responsivo', segmento: 'Site Profissional' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdf1a8f06e132.png', alt: 'Landing page de alta conversão para captação de leads — design premium Calazans Lumina', segmento: 'Landing Page' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc91e4457164.png', alt: 'Site institucional para empresa brasileira nos EUA — Calazans Lumina', segmento: 'Site Institucional' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c0352e5305e8cc.png', alt: 'Página de vendas otimizada para conversão — portfolio Calazans Lumina', segmento: 'Página de Vendas' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdfed7506e133.png', alt: 'Design responsivo para negócios locais em Massachusetts', segmento: 'Negócio Local' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png', alt: 'Site de serviços profissionais para empreendedores brasileiros', segmento: 'Serviços Profissionais' },
]

const performanceImages = [
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da285cc97df7c.png', alt: 'Dashboard de performance de campanhas — métricas reais Calazans Lumina' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f13f714ee618fd93ca5.png', alt: 'Relatório de performance digital — métricas de conversão e ROI' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png', alt: 'Métricas de crescimento orgânico — SEO local para brasileiros' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc19b9463b26.png', alt: 'Performance de landing page — taxa de conversão otimizada' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png', alt: 'Dashboard de leads — funil de vendas automatizado GHL' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035699706b444.png', alt: 'Relatório de redes sociais — crescimento de engajamento' },
]

const automacaoImages = [
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c0355e60076365.png', alt: 'Fluxo de automação GoHighLevel — pipeline de vendas automatizado' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b410c4c8da2445e99c973.png', alt: 'Workflow GHL com disparo automático de WhatsApp, email e SMS' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png', alt: 'Robô de IA conversacional no WhatsApp — atendimento 24h automatizado' },
]

const cidadesMA = [
  'Framingham', 'Marlborough', 'Hudson', 'Worcester', 'Cambridge', 'Newton',
  'Brookline', 'Quincy', 'Somerville', 'Waltham', 'Natick', 'Milford',
  'Shrewsbury', 'Wellesley', 'Lexington', 'Arlington', 'Watertown', 'Medford',
  'Malden', 'Braintree', 'Weymouth', 'Dedham', 'Norwood', 'Franklin',
]

const capitaisBR = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Salvador',
  'Fortaleza', 'Recife', 'Curitiba', 'Porto Alegre', 'Florianópolis',
  'Goiânia', 'Manaus', 'Vitória', 'Natal',
]

const problemasSolucoes = [
  { problema: 'Seu site não aparece no Google', solucao: 'SEO técnico + conteúdo otimizado + Google Business Profile' },
  { problema: 'Leads chegam e somem', solucao: 'Funil automatizado com follow-up por WhatsApp, email e SMS' },
  { problema: 'Instagram parado, sem engajamento', solucao: 'Gestão estratégica com conteúdo que gera leads, não só curtidas' },
  { problema: 'Gasta com anúncio sem retorno', solucao: 'Campanhas otimizadas com landing page + tracking completo de ROI' },
  { problema: 'Ninguém responde seus leads a tempo', solucao: 'Robô de IA 24h no WhatsApp + CRM organizado com pipeline' },
  { problema: 'Concorrente domina o Google Maps', solucao: 'Google Business Profile otimizado + estratégia de reviews' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ===== HERO — background image + overlay + form on right ===== */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <Image
          src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"
          alt="Rhaideline Calazans — Especialista em Marketing Digital para Brasileiros nos EUA e Brasil"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-brand-dark/85" />

        <div className="container-main section-padding relative z-10 text-white">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            {/* Left Content — 3 cols */}
            <div className="lg:col-span-3">
              <HeroBadges cidade="Massachusetts, EUA & Brasil" />

              <h1 className="heading-1 mb-6">
                Marketing Digital Premium para{' '}
                <span className="text-brand-mint">Brasileiros</span> nos EUA e Brasil
              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Sites de alta performance, funis automatizados, CRM com IA, gestão de redes sociais
                e Google Maps — tudo em português, com resultados mensuráveis.
              </p>

              <ul className="space-y-3 mb-8">
                {['8+ anos transformando negócios', '100+ projetos entregues', 'Especialista em GoHighLevel', 'Atendimento em português'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5531982948067?text=Olá, vim pelo site e quero saber mais sobre os serviços da Calazans Lumina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Fale Comigo no WhatsApp
                </a>
                <Link href="/servicos" className="btn-secondary-light text-base">
                  Conheça Nossos Serviços
                </Link>
              </div>
            </div>

            {/* Right Form — 2 cols */}
            <div className="lg:col-span-2">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== NÚMEROS ===== */}
      <section className="bg-brand-bg py-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { numero: '8+', label: 'Anos de experiência' },
              { numero: '100+', label: 'Projetos entregues' },
              { numero: '2', label: 'Países atendidos' },
              { numero: '6', label: 'Serviços especializados' },
            ].map((stat) => (
              <ScrollReveal key={stat.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-2">
                  {stat.numero}
                </p>
                <p className="text-brand-dark/60 text-sm">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEMA/SOLUÇÃO ===== */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 text-brand-dark mb-4">
              Você se identifica com algum desses{' '}
              <span className="text-brand-mint">problemas?</span>
            </h2>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              A maioria dos empreendedores brasileiros enfrenta os mesmos desafios. A boa notícia: todos têm solução.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemasSolucoes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-5 h-5 text-red-500/80 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <h3 className="text-lg font-bold text-red-500/80">{item.problema}</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-brand-mint font-medium text-sm">Solução: {item.solucao}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section className="section-padding bg-brand-bg" id="servicos">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 text-brand-dark mb-4">
              Nossos <span className="text-brand-mint">Serviços</span>
            </h2>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Soluções completas de marketing digital, do primeiro clique ao fechamento.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.slug} delay={i * 100}>
                <Link href={`/servicos/${servico.slug}`} className="card-premium block h-full group">
                  <ServiceIcon name={servico.icone} className="w-10 h-10 text-brand-mint mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-mint transition-colors">
                    {servico.nome}
                  </h3>
                  <p className="text-brand-dark/60 text-sm mb-6 leading-relaxed">{servico.descricaoCurta}</p>
                  <span className="inline-flex items-center gap-2 text-brand-mint text-sm font-medium group-hover:gap-3 transition-all">
                    {servico.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTEUDO EM VIDEO ===== */}
      <section className="section-padding bg-brand-dark text-white" id="videos">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">Assista e aprenda</p>
            <h2 className="heading-2 mb-4">
              Conteudo em <span className="text-brand-mint">Video</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Dicas praticas de marketing digital, ferramentas e estrategias para fazer seu negocio crescer.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f81590acb2f32c57fde.mp4',
                label: 'Marketing Digital na Prática',
              },
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f811001a525e2e45e93.mp4',
                label: 'Como Atrair Clientes Online',
              },
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f813eba04ab9649d652.mp4',
                label: 'Avaliações no Google: Por Que Importam',
              },
              {
                src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f8110bc9c7c8a6841ea.mp4',
                label: 'Como Conseguir Mais Avaliações 5 Estrelas',
              },
            ].map((video, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full aspect-video rounded-t-2xl"
                  >
                    <source src={video.src} type="video/mp4" />
                    Seu navegador nao suporta video HTML5.
                  </video>
                  <div className="p-4">
                    <p className="text-brand-mint font-bold text-sm uppercase tracking-wider mb-1">
                      Video {i + 1}
                    </p>
                    <h3 className="text-white font-serif text-lg font-bold">
                      {video.label}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOBRE RHAIDELINE ===== */}
      <section className="section-padding bg-brand-bg" id="sobre">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-mint/20 to-brand-light/10 rounded-3xl blur-2xl" />
                <Image
                  src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
                  alt="Rhaideline Calazans — 8 anos de experiência em marketing digital, fundadora da Calazans Lumina"
                  width={600}
                  height={700}
                  className="rounded-3xl relative z-10 w-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">Quem está por trás</p>
              <h2 className="heading-2 text-brand-dark mb-6">Rhaideline Calazans</h2>
              <div className="space-y-4 text-brand-dark/70 leading-relaxed">
                <p>
                  Depois de 14 anos como secretária médica, Rhaideline decidiu empreender por conta própria
                  em 2018 — com uma filha de 12 anos e muita coragem. Começou importando produtos dos EUA
                  e vendendo em marketplaces brasileiros, onde aprendeu na prática o que é ranquear produtos,
                  otimizar anúncios e construir presença digital do zero.
                </p>
                <p>
                  Hoje, com <strong>8 anos de experiência</strong>, atende brasileiros em Massachusetts e no
                  Brasil, transformando negócios do &quot;boca a boca&quot; em máquinas previsíveis de geração de leads.
                </p>
                <p className="font-medium text-brand-dark">
                  Ela não é só especialista em ferramentas — ela viveu o que é ser dona de negócio.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { valor: '8+', desc: 'anos' },
                  { valor: '100+', desc: 'projetos' },
                  { valor: '2', desc: 'países' },
                ].map((s) => (
                  <div key={s.desc} className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <p className="font-serif text-2xl font-bold text-brand-dark">{s.valor}</p>
                    <p className="text-brand-dark/50 text-xs">{s.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/sobre" className="btn-primary mt-8 inline-flex bg-brand-dark text-white hover:bg-brand-dark/90">
                Conheça minha história completa
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PORTFÓLIO ===== */}
      <section className="section-padding bg-brand-dark text-white" id="portfolio">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 mb-4">Projetos que <span className="text-brand-mint">geram resultados</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl aspect-video">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold">{img.segmento}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projetos" className="btn-secondary-light">Ver todos os projetos</Link>
          </div>
        </div>
      </section>

      {/* ===== RESULTADOS ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 text-brand-dark mb-4">Resultados reais, números reais</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {performanceImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                  <Image src={img.src} alt={img.alt} width={600} height={400} className="w-full h-auto" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUTOMAÇÕES GHL ===== */}
      <section className="section-padding bg-brand-dark text-white relative overflow-hidden">
        <div className="container-main relative z-10">
          <ScrollReveal className="text-center mb-6">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">GoHighLevel</p>
            <h2 className="heading-2 mb-4">Automações & <span className="text-brand-mint">IA que trabalham por você</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              CRM, funis, inbox unificada, calendário, automações e IA conversacional — tudo numa plataforma.
              Enquanto você foca no seu negócio, o sistema trabalha 24h captando e nutrindo leads.
            </p>
          </ScrollReveal>

          {/* GHL Feature highlights */}
          <ScrollReveal className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {[
                { label: 'Inbox Unificada', sub: 'WhatsApp + SMS + Email + DMs' },
                { label: 'Pipelines Visuais', sub: 'Gerencie leads etapa por etapa' },
                { label: 'Workflows Automáticos', sub: 'Follow-up no piloto automático' },
                { label: 'Calendário Integrado', sub: 'Agendamento + lembretes automáticos' },
              ].map((f) => (
                <div key={f.label} className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
                  <p className="text-brand-mint font-bold text-sm">{f.label}</p>
                  <p className="text-white/40 text-xs mt-1">{f.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {automacaoImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="card-dark overflow-hidden p-0">
                  <Image src={img.src} alt={img.alt} width={600} height={400} className="w-full h-auto" />
                  <div className="p-6">
                    <h3 className="text-brand-mint font-bold text-sm mb-2">
                      {i === 0 && 'CRM & Pipeline de Vendas'}
                      {i === 1 && 'Workflows Multicanal'}
                      {i === 2 && 'IA Conversacional 24h'}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {i === 0 && 'Pipeline visual no GoHighLevel — cada lead organizado por etapa, com automações de movimentação, tarefas e notificações. Do primeiro contato ao fechamento.'}
                      {i === 1 && 'Workflows automáticos com disparo de WhatsApp, email e SMS em sequência. Missed call text-back, follow-up de leads e nurturing — tudo visual.'}
                      {i === 2 && 'Robô de IA treinado com dados do seu negócio que atende no WhatsApp 24h, responde perguntas, agenda consultas e qualifica leads antes de chegar a você.'}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PACOTES ===== */}
      <PricingTable />

      {/* ===== REVIEWS ===== */}
      <ReviewsWidget />

      {/* ===== BLOG ===== */}
      <section className="section-padding bg-white" id="blog">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 text-brand-dark mb-4">Conteúdo que <span className="text-brand-mint">educa e converte</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { titulo: 'Como brasileiros em Massachusetts estão perdendo clientes por falta de presença digital', categoria: 'Sites', slug: 'brasileiros-massachusetts-presenca-digital', img: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png' },
              { titulo: 'SEO local para brasileiros nos EUA: como aparecer no Google da sua cidade', categoria: 'Google', slug: 'seo-local-brasileiros-eua', img: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png' },
              { titulo: 'Robô de WhatsApp: como automatizar sem perder o lado humano', categoria: 'Automação', slug: 'robo-whatsapp-automacao-atendimento', img: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png' },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="card-premium overflow-hidden p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image src={post.img} alt={post.titulo} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="33vw" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-mint/90 text-white text-xs font-bold px-3 py-1 rounded-full">{post.categoria}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold group-hover:text-brand-mint transition-colors leading-snug">{post.titulo}</h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">Ver todos os artigos</Link>
          </div>
        </div>
      </section>

      {/* ===== CIDADES ATENDIDAS ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Cidades atendidas</h2>
          </ScrollReveal>
          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-4">
              Massachusetts, EUA
            </h3>
            <div className="flex flex-wrap gap-2">
              {cidadesMA.map((c) => (
                <Link key={c} href={`/cidades/${c.toLowerCase().replace(/ /g, '-')}`} className="bg-white text-brand-dark text-sm px-4 py-2 rounded-full hover:bg-brand-mint hover:text-white transition-colors shadow-sm">{c}, MA</Link>
              ))}
              <Link href="/cidades/framingham" className="bg-brand-dark text-white text-sm px-4 py-2 rounded-full hover:bg-brand-mint hover:text-white transition-colors">+ ver todas</Link>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-4">
              Brasil — Capitais
            </h3>
            <div className="flex flex-wrap gap-2">
              {capitaisBR.map((c) => (
                <Link key={c} href={`/brasil/${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')}`} className="bg-white text-brand-dark text-sm px-4 py-2 rounded-full hover:bg-brand-mint hover:text-white transition-colors shadow-sm">{c}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <CTAForm />
    </>
  )
}
