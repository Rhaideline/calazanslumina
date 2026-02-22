import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import ConstellationBg from '@/components/ConstellationBg'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'
import ReviewsWidget from '@/components/ReviewsWidget'

const portfolioImages = [
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png', alt: 'Site profissional desenvolvido pela Calazans Lumina — layout moderno e responsivo', segmento: 'Site Profissional' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdf1a8f06e132.png', alt: 'Landing page de alta conversão para captação de leads — design premium Calazans Lumina', segmento: 'Landing Page' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc91e4457164.png', alt: 'Site institucional para empresa brasileira nos EUA — Calazans Lumina', segmento: 'Site Institucional' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c0352e5305e8cc.png', alt: 'Página de vendas otimizada para conversão — portfolio Calazans Lumina', segmento: 'Página de Vendas' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdfed7506e133.png', alt: 'Design responsivo para negócios locais em Massachusetts', segmento: 'Negócio Local' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png', alt: 'Site de serviços profissionais para empreendedores brasileiros', segmento: 'Serviços Profissionais' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc3b6f457169.png', alt: 'Layout premium para agência de marketing digital — Calazans Lumina', segmento: 'Agência Digital' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c035435705e8cd.png', alt: 'Site com funil integrado para geração de leads qualificados', segmento: 'Funil de Vendas' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc503d457168.png', alt: 'Design mobile-first para negócios brasileiros nos EUA', segmento: 'Mobile-First' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc756045716b.png', alt: 'Site de alta performance com PageSpeed 95+ — Calazans Lumina', segmento: 'Alta Performance' },
]

const performanceImages = [
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da285cc97df7c.png', alt: 'Dashboard de performance de campanhas — métricas reais de resultados Calazans Lumina' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f13f714ee618fd93ca5.png', alt: 'Relatório de tráfego pago — ROI positivo em campanhas Google Ads' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png', alt: 'Métricas de crescimento orgânico — resultados de SEO local para brasileiros nos EUA' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc19b9463b26.png', alt: 'Análise de performance de landing page — taxa de conversão otimizada' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png', alt: 'Dashboard de leads gerados — funil de vendas automatizado GHL' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035699706b444.png', alt: 'Relatório de redes sociais — crescimento de engajamento e alcance' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c035d914076364.png', alt: 'Resultados de Google Business Profile — aumento de visualizações no Maps' },
]

const automacaoImages = [
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c0355e60076365.png', alt: 'Fluxo de automação GoHighLevel — pipeline de vendas automatizado para brasileiros' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b410c4c8da2445e99c973.png', alt: 'Workflow GHL com disparo automático de WhatsApp, email e SMS' },
  { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png', alt: 'Robô de IA conversacional no WhatsApp — atendimento 24 horas automatizado' },
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
  { problema: 'Seu site não aparece no Google', solucao: 'SEO técnico + conteúdo otimizado + Google Business Profile', icone: '🔍' },
  { problema: 'Leads chegam e somem', solucao: 'Funil automatizado com follow-up por WhatsApp, email e SMS', icone: '📩' },
  { problema: 'Instagram parado, sem engajamento', solucao: 'Gestão estratégica com conteúdo que gera leads, não só curtidas', icone: '📱' },
  { problema: 'Gasta com anúncio sem retorno', solucao: 'Campanhas otimizadas com landing page + tracking completo de ROI', icone: '💸' },
  { problema: 'Ninguém responde seus leads a tempo', solucao: 'Robô de IA 24h no WhatsApp + CRM organizado com pipeline', icone: '🤖' },
  { problema: 'Concorrente domina o Google Maps', solucao: 'Google Business Profile otimizado + estratégia de reviews', icone: '📍' },
]

export default function HomePage() {
  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <ConstellationBg />
        <div className="container-main section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-mint/10 border border-brand-mint/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">
                  Atendimento em português — EUA e Brasil
                </span>
              </div>
              <h1 className="heading-1 mb-6">
                A melhor versão da sua marca —{' '}
                <span className="gradient-text">revelada.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Marketing digital premium para empreendedores brasileiros nos EUA e Brasil.
                Sites de alta performance, funis automatizados, CRM com IA e presença digital
                que gera resultados reais.
              </p>
              <ul className="space-y-3 mb-8">
                {['8+ anos transformando negócios', '100+ projetos entregues', 'EUA (Massachusetts) e Brasil', 'Especialista em GoHighLevel'].map((item) => (
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
                <Link href="#contato-form" className="btn-secondary text-base">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-mint/20 to-brand-light/10 rounded-3xl blur-2xl" />
                <Image
                  src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"
                  alt="Rhaideline Calazans — Fundadora da Calazans Lumina, especialista em marketing digital para brasileiros nos EUA"
                  fill
                  className="object-cover rounded-3xl relative z-10"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. NÚMEROS/CREDENCIAIS ===== */}
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

      {/* ===== 3. PROBLEMA/SOLUÇÃO ===== */}
      <section className="section-padding bg-brand-dark">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Você se identifica com algum desses{' '}
              <span className="gradient-text">problemas?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A maioria dos empreendedores brasileiros enfrenta os mesmos desafios.
              A boa notícia: todos têm solução.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemasSolucoes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-premium h-full">
                  <span className="text-3xl mb-4 block">{item.icone}</span>
                  <h3 className="text-lg font-bold text-red-400/80 mb-3">
                    {item.problema}
                  </h3>
                  <p className="text-brand-mint font-medium text-sm">
                    Solução → {item.solucao}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. SERVIÇOS ===== */}
      <section className="section-padding bg-brand-dark" id="servicos">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Soluções completas de marketing digital, do primeiro clique ao fechamento.
              Tudo integrado, tudo mensurável.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico, i) => (
              <ScrollReveal key={servico.slug} delay={i * 100}>
                <Link href={`/servicos/${servico.slug}`} className="card-premium block h-full group">
                  <span className="text-4xl mb-4 block">{servico.icone}</span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-mint transition-colors">
                    {servico.nome}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {servico.descricaoCurta}
                  </p>
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

      {/* ===== 5. SOBRE RHAIDELINE ===== */}
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
              <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
                Quem está por trás
              </p>
              <h2 className="heading-2 text-brand-dark mb-6">
                Rhaideline Calazans
              </h2>
              <div className="space-y-4 text-brand-dark/70 leading-relaxed">
                <p>
                  Depois de 14 anos como secretária médica, Rhaideline decidiu empreender por conta própria
                  em 2018 — com uma filha de 12 anos e muita coragem. Começou importando produtos dos EUA
                  e vendendo em marketplaces brasileiros, onde aprendeu na prática o que é ranquear produtos,
                  otimizar anúncios e construir presença digital do zero.
                </p>
                <p>
                  Convidada pelo pai, dono de uma agência nos EUA, mergulhou no mundo do marketing digital:
                  GoHighLevel, automações com IA, funis de vendas, tráfego pago e gestão de redes sociais.
                  Hoje, com <strong>8 anos de experiência</strong>, atende brasileiros em Massachusetts e no
                  Brasil, transformando negócios do &quot;boca a boca&quot; em máquinas previsíveis de geração de leads.
                </p>
                <p className="font-medium text-brand-dark">
                  Ela não é só especialista em ferramentas — ela viveu o que é ser dona de negócio, sentiu
                  na pele o que é perder cliente por não ter sistema, e sabe exatamente o que dói e o que resolve.
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

      {/* ===== 6. PORTFÓLIO DE SITES ===== */}
      <section className="section-padding bg-brand-dark" id="portfolio">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Projetos que <span className="gradient-text">geram resultados</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Sites, landing pages e funis que transformaram a presença digital de nossos clientes.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioImages.slice(0, 6).map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl aspect-video">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold">{img.segmento}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/projetos" className="btn-secondary">
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 7. RESULTADOS / PERFORMANCE ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 text-brand-dark mb-4">
              Resultados reais, números reais
            </h2>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Não trabalhamos com métricas de vaidade. Cada ação é rastreada e otimizada
              para gerar leads qualificados e vendas.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {performanceImages.slice(0, 6).map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. AUTOMAÇÕES & IA ===== */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <ConstellationBg />
        <div className="container-main relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Automações & <span className="gradient-text">IA que trabalham por você</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Funis, robôs de WhatsApp e workflows que captam, nutrem e convertem leads
              enquanto você foca no que realmente importa.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {automacaoImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="card-premium overflow-hidden p-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="p-6">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {i === 0 && 'Pipeline de vendas automatizado no GoHighLevel — do lead ao fechamento sem esforço manual.'}
                      {i === 1 && 'Workflows multicanal com disparo automático de WhatsApp, email e SMS em sequência.'}
                      {i === 2 && 'Robô de IA que atende seus clientes 24h no WhatsApp, agenda consultas e qualifica leads.'}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. REVIEWS WIDGET ===== */}
      <ReviewsWidget />

      {/* ===== 10. BLOG DESTAQUE ===== */}
      <section className="section-padding bg-brand-dark" id="blog">
        <div className="container-main">
          <ScrollReveal className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Conteúdo que <span className="gradient-text">educa e converte</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Dicas práticas, estratégias e insights para empreendedores brasileiros
              que querem dominar o marketing digital.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titulo: 'Como brasileiros em Massachusetts estão perdendo clientes por falta de presença digital',
                categoria: 'Sites',
                slug: 'brasileiros-massachusetts-presenca-digital',
                img: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png',
              },
              {
                titulo: 'SEO local para brasileiros nos EUA: como aparecer no Google da sua cidade',
                categoria: 'Google',
                slug: 'seo-local-brasileiros-eua',
                img: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png',
              },
              {
                titulo: 'Robô de WhatsApp: como automatizar seu atendimento sem perder o lado humano',
                categoria: 'Automação',
                slug: 'robo-whatsapp-automacao-atendimento',
                img: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b418ddf9bdf249608cf87.png',
              },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="card-premium overflow-hidden p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.titulo}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-mint/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                          {post.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold group-hover:text-brand-mint transition-colors leading-snug">
                        {post.titulo}
                      </h3>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 11. CIDADES ATENDIDAS ===== */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">
              Cidades atendidas
            </h2>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Marketing digital para brasileiros em mais de 100 cidades em Massachusetts
              e nas principais capitais do Brasil.
            </p>
          </ScrollReveal>

          <div className="mb-10">
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="text-2xl">🇺🇸</span> Massachusetts, EUA
            </h3>
            <div className="flex flex-wrap gap-2">
              {cidadesMA.map((c) => (
                <Link
                  key={c}
                  href={`/cidades/${c.toLowerCase().replace(/ /g, '-')}`}
                  className="bg-white text-brand-dark text-sm px-4 py-2 rounded-full hover:bg-brand-mint hover:text-brand-dark transition-colors shadow-sm"
                >
                  {c}, MA
                </Link>
              ))}
              <Link
                href="/cidades/framingham"
                className="bg-brand-dark text-white text-sm px-4 py-2 rounded-full hover:bg-brand-mint hover:text-brand-dark transition-colors"
              >
                + ver todas as cidades
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <span className="text-2xl">🇧🇷</span> Brasil — Capitais
            </h3>
            <div className="flex flex-wrap gap-2">
              {capitaisBR.map((c) => (
                <Link
                  key={c}
                  href={`/brasil/${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')}`}
                  className="bg-white text-brand-dark text-sm px-4 py-2 rounded-full hover:bg-brand-mint hover:text-brand-dark transition-colors shadow-sm"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 12. CTA FINAL ===== */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <ConstellationBg />
        <div className="container-main relative z-10 text-center mb-12">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">
              Pronto para transformar seu{' '}
              <span className="gradient-text">marketing digital?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Cada dia sem presença digital profissional é um dia que seu concorrente
              está captando os clientes que poderiam ser seus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://wa.me/5531982948067?text=Olá, vim pelo site e quero saber mais sobre os serviços da Calazans Lumina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale agora pelo WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
        <CTAForm />
      </section>
    </>
  )
}
