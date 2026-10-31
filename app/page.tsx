import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import { projetos } from '@/data/portfolio'
import { sitesVitrine } from '@/data/sites-clientes'
import { blogPosts } from '@/data/blog'
import ServiceIcon from '@/components/ServiceIcon'
import ScrollReveal from '@/components/ScrollReveal'
import HeroRetratoForm from '@/components/cta/HeroRetratoForm'
import VideosCarrossel from '@/components/VideosCarrossel'
import CoursesSection from '@/components/CoursesSection'
import FAQAccordion from '@/components/FAQAccordion'
import CtaButton, { WHATSAPP_URL } from '@/components/cta/CtaButton'
import CtaBand from '@/components/cta/CtaBand'
import FormSection from '@/components/cta/FormSection'

// HOME redesenhada em 31/out/2026. Estrutura de leitura: promessa -> prova ->
// a noite de um lead (o leitor se ve ali) -> o sistema GHL por dentro ->
// servicos -> como funciona -> quem faz -> cursos -> duvidas -> formulario.
// Cada bloco termina num convite. Nada aqui e numero inventado: os numeros de
// cliente vem do Search Console de cada um (data/portfolio.ts) e o tempo de
// carregamento foi medido na pagina do cliente (data/sites-clientes.ts).

const SITE = 'https://calazanslumina.com.br'

export const metadata: Metadata = {
  title: { absolute: 'GoHighLevel, Sites e Google para Brasileiros nos EUA | Calazans Lumina' },
  description:
    'Configuração de GoHighLevel, sites que abrem rápido e Google Meu Negócio para brasileiros com empresa nos EUA: construção, advocacia, clínica, limpeza.',
  keywords: [
    'agência de marketing para brasileiros nos EUA',
    'GoHighLevel em português',
    'configuração de GoHighLevel',
    'marketing para construtora brasileira nos EUA',
    'marketing para advogado brasileiro nos EUA',
    'site para empresa brasileira nos Estados Unidos',
    'Google Meu Negócio para brasileiros',
    'CRM com IA no WhatsApp',
    'cursos de marketing digital e IA',
  ],
  alternates: { canonical: SITE },
  openGraph: {
    title: 'O seu cliente chama. O sistema responde. Você fecha.',
    description: 'GoHighLevel, sites e Google Meu Negócio montados por quem planeja e executa.',
    url: SITE,
    type: 'website',
  },
}

const faqs = [
  {
    pergunta: 'O que exatamente você configura no GoHighLevel?',
    resposta:
      'A conta inteira: dados da empresa, número comercial com o registro A2P (para as mensagens de texto não serem bloqueadas), funil de vendas em etapas, agente de IA que faz a triagem, resposta automática para ligação perdida, lembrete de agendamento, acompanhamento de orçamento e pedido de avaliação no Google. E as integrações: Google Meu Negócio, Gmail, Google Agenda, Facebook e Instagram.',
  },
  {
    pergunta: 'Eu não entendo de tecnologia. Vou conseguir usar?',
    resposta:
      'Vai. O dia a dia acontece no aplicativo do celular: as mensagens de todos os canais chegam numa caixa só e você responde de lá. Na entrega tem treinamento gravado mostrando o uso de verdade, e a conta fica no seu nome.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'A configuração completa leva de 5 a 7 dias úteis depois que eu recebo os acessos. A aprovação do A2P depende das operadoras americanas e costuma levar de alguns dias a 3 semanas; enquanto isso, ligação, e-mail, Facebook, Instagram e Google já funcionam.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta:
      'Cada projeto é orçado pelo escopo: quantos canais, quantas automações e se entra site junto. Você recebe a proposta por escrito, com o que está incluso, o que não está e o prazo, antes de pagar qualquer coisa.',
  },
  {
    pergunta: 'Você garante quantidade de clientes?',
    resposta:
      'Ninguém honesto garante. O que eu mostro é o que aconteceu nos projetos que estão no ar, com o número do Search Console de cada cliente e o site aberto para você conferir.',
  },
  {
    pergunta: 'Atende quem está no Brasil?',
    resposta:
      'Sim. O trabalho é remoto. Para o Brasil o canal principal costuma ser o WhatsApp; para os Estados Unidos, mensagem de texto, ligação e Google.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.pergunta, acceptedAnswer: { '@type': 'Answer', text: f.resposta } })),
}

const noite = [
  { hora: '21:47', sem: 'Um cliente liga. Você está jantando com a família e não atende.', com: 'A ligação perdida dispara uma mensagem na hora: "Oi, aqui é da sua empresa. Como posso ajudar?"' },
  { hora: '21:49', sem: 'Ele não deixa recado. Abre o Google e liga para o próximo da lista.', com: 'O agente de IA pergunta o que ele precisa, a cidade e o prazo, e pede fotos.' },
  { hora: '21:55', sem: 'O concorrente atende. Marca a visita para amanhã de manhã.', com: 'Ele escolhe um horário na sua agenda. O cartão entra no funil como "visita marcada".' },
  { hora: '08:00', sem: 'Você vê a chamada perdida. Liga de volta. "Já resolvi, obrigado."', com: 'Você abre o app, lê o resumo da conversa e chega na visita sabendo o que vai orçar.' },
]

const sistema = [
  { t: 'Agente de IA que faz a triagem', d: 'Responde em segundos, faz as perguntas certas do seu negócio e passa para você quando o cliente pede uma pessoa.', grande: true },
  { t: 'Ligação perdida vira conversa', d: 'Quem liga e não é atendido recebe mensagem na hora, antes de ligar para outro.' },
  { t: 'Funil de vendas em cartões', d: 'Novo, visita marcada, orçamento enviado, fechado. O cartão anda sozinho a cada etapa.' },
  { t: 'Uma caixa para tudo', d: 'SMS, WhatsApp, Facebook, Instagram, Google e e-mail no mesmo aplicativo.' },
  { t: 'Número comercial com A2P', d: 'Número dos EUA registrado nas operadoras, para as mensagens chegarem e não caírem como spam.' },
  { t: 'Avaliação no Google no automático', d: 'Depois do serviço, todo cliente recebe o pedido de avaliação com o link direto.' },
]

const passos = [
  { n: '01', t: 'Diagnóstico', d: 'Antes da proposta, eu olho de onde vem o seu cliente hoje, quem responde, em quanto tempo e onde ele se perde.' },
  { n: '02', t: 'Proposta por escrito', d: 'Escopo, prazo e valor. O que está incluso, o que não está, e o custo das plataformas separado.' },
  { n: '03', t: 'Montagem', d: 'Eu mesma configuro e testo tudo: ligo, mando mensagem e preencho o formulário como se fosse cliente.' },
  { n: '04', t: 'Entrega e treino', d: 'A conta fica no seu nome. Você recebe o treinamento gravado e 15 dias de ajustes.' },
]

const schemaPagina = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE}/#webpage`,
  url: SITE,
  name: 'Calazans Lumina — GoHighLevel, sites e Google Meu Negócio',
  inLanguage: 'pt-BR',
  isPartOf: { '@id': `${SITE}/#website` },
  about: { '@id': `${SITE}/#organization` },
}

export default function HomePage() {
  const casos = projetos.filter((p) => p.url).slice(0, 3)
  const ultimos = blogPosts.filter((p) => p.categoria !== 'Maternidade').slice(0, 3)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, schemaPagina]) }} />

      {/* ===== 1. HERO ===== */}
      <section className="relative overflow-hidden bg-[#070707] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-brand-mint/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-mint/10 blur-3xl" aria-hidden="true" />
        <div className="container-main relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-mint" /> GoHighLevel · Sites · Google
            </span>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl font-bold">
              O seu cliente chama.
              <br />
              O sistema responde.
              <br />
              <span className="text-brand-mint">Você fecha.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-white/70">
              Eu configuro o seu GoHighLevel, o seu site e o seu Google para que nenhum cliente fique sem resposta, de dia ou
              de noite. Para quem empreende nos Estados Unidos e no Brasil.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaButton>Quero meu orçamento grátis</CtaButton>
              <CtaButton href={WHATSAPP_URL} variante="whatsapp">Falar no WhatsApp</CtaButton>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div><dt className="text-xs text-white/50">Wolf&apos;s Siding</dt><dd className="mt-1 font-serif text-3xl font-bold">+706%</dd><dd className="text-xs text-white/50">cliques</dd></div>
              <div><dt className="text-xs text-white/50">RS Development</dt><dd className="mt-1 font-serif text-3xl font-bold">88 mil</dd><dd className="text-xs text-white/50">impressões/mês</dd></div>
              <div><dt className="text-xs text-white/50">JH Painting</dt><dd className="mt-1 font-serif text-3xl font-bold">24/7</dd><dd className="text-xs text-white/50">atendimento com IA</dd></div>
            </dl>
          </div>
          <div className="lg:col-span-5" id="formulario-topo">
            <HeroRetratoForm />
          </div>
        </div>
      </section>

      {/* ===== 2. PROVA ===== */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-main">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-bg px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/60">Prova, não promessa</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] text-brand-dark">O que aconteceu depois que o sistema entrou no ar</h2>
            <p className="mt-5 text-lg text-brand-dark/60">Números do Search Console de cada cliente. Os sites estão no ar: abra e confira.</p>
          </ScrollReveal>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {casos.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 90}>
                <Link href={`/projetos`} className="group block h-full rounded-[2rem] bg-brand-bg p-2 ring-1 ring-black/5">
                  <div className="h-full overflow-hidden rounded-[calc(2rem-0.5rem)] bg-white">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={p.heroImagem} alt={`Site ${p.nome}`} fill className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]" sizes="(max-width:1024px) 100vw, 33vw" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-brand-dark/50">{p.categoria} · {p.local}</p>
                      <h3 className="mt-1 font-serif text-2xl font-bold text-brand-dark">{p.nome}</h3>
                      <dl className="mt-5 flex gap-8">
                        {p.metricas.slice(0, 2).map((m) => (
                          <div key={m.label}><dd className="font-serif text-3xl font-bold text-brand-mint">{m.valor}</dd><dt className="text-xs text-brand-dark/50">{m.label}</dt></div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-14 rounded-[2rem] bg-brand-dark p-2">
            <div className="flex flex-col gap-6 rounded-[calc(2rem-0.5rem)] bg-[#0d0d0d] p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <p className="text-sm text-white/50">Tempo de carregamento medido na página de cada cliente, no celular</p>
                <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
                  {sitesVitrine.slice(0, 5).map((s) => (
                    <a key={s.slug} href={s.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-mint">
                      <span className="font-semibold">{(s.lcp / 1000).toFixed(2)}s</span> <span className="text-white/50 text-sm">{s.nome}</span>
                    </a>
                  ))}
                </div>
              </div>
              <CtaButton variante="claro">Quero um site assim</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. A NOITE DE UM LEAD ===== */}
      <section className="bg-brand-bg py-24 md:py-32">
        <div className="container-main">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/60">Imagine uma terça-feira</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] text-brand-dark">
              O lead não esfria.
              <br />
              <span className="text-brand-mint">Ele é esquecido.</span>
            </h2>
            <p className="mt-5 text-lg text-brand-dark/60">A mesma ligação, duas noites diferentes.</p>
          </ScrollReveal>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="hidden grid-cols-[90px_1fr_1fr] gap-6 px-4 pb-4 text-xs font-semibold uppercase tracking-[0.18em] md:grid">
              <span />
              <span className="text-brand-dark/40">Sem sistema</span>
              <span className="text-brand-mint">Com o seu GoHighLevel</span>
            </div>
            <ol className="space-y-4">
              {noite.map((n, i) => (
                <ScrollReveal key={n.hora} delay={i * 80}>
                  <li className="grid gap-4 rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5 md:grid-cols-[90px_1fr_1fr] md:gap-6 md:p-6">
                    <span className="font-serif text-2xl font-bold text-brand-dark">{n.hora}</span>
                    <p className="text-brand-dark/45"><span className="mr-2 text-xs font-semibold uppercase tracking-wider md:hidden">Sem:</span>{n.sem}</p>
                    <p className="font-medium text-brand-dark"><span className="mr-2 text-xs font-semibold uppercase tracking-wider text-brand-mint md:hidden">Com:</span>{n.com}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <p className="max-w-xl text-lg text-brand-dark/70">Quantas dessas noites aconteceram no seu negócio este mês?</p>
              <CtaButton>Quero o meu sistema respondendo</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. O SISTEMA GHL POR DENTRO (carro-chefe) ===== */}
      <section className="relative overflow-hidden bg-[#070707] py-24 text-white md:py-32" id="gohighlevel">
        <div className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-mint/15 blur-3xl" aria-hidden="true" />
        <div className="container-main relative">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">Setup de GoHighLevel</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05]">Uma secretária que não dorme, montada no seu processo de venda</h2>
            <p className="mt-5 text-lg text-white/60">Não é um modelo copiado de outro cliente. É o seu jeito de vender, só que funcionando sozinho.</p>
          </ScrollReveal>
          <div className="mt-16 grid gap-4 md:grid-cols-6">
            {sistema.map((s, i) => (
              <ScrollReveal key={s.t} delay={i * 70} className={s.grande ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}>
                <div className="h-full rounded-[2rem] bg-white/5 p-2 ring-1 ring-white/10">
                  <div className={`flex h-full flex-col justify-between rounded-[calc(2rem-0.5rem)] bg-[#0f0f0f] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${s.grande ? 'md:p-8' : ''}`}>
                    {s.grande && (
                      <div className="relative mb-6 aspect-[16/8] overflow-hidden rounded-2xl ring-1 ring-white/10">
                        <Image src="/prova/workflow.png" alt="Fluxo real de triagem montado no GoHighLevel: cliente atual vai para atendente, orçamento vai para o agente de IA" fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 60vw" />
                      </div>
                    )}
                    <div>
                      <h3 className={`font-bold ${s.grande ? 'text-2xl' : 'text-lg'}`}>{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/40">Acima: fluxo real de triagem por WhatsApp montado para a HBM Solar.</p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <CtaButton>Quero meu GoHighLevel configurado</CtaButton>
            <CtaButton href="/servicos/gohighlevel" variante="contorno">Ver tudo o que entra no setup</CtaButton>
          </div>
        </div>
      </section>

      {/* ===== 5. SERVICOS ===== */}
      <section className="bg-white py-24 md:py-32" id="servicos">
        <div className="container-main">
          <ScrollReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-brand-bg px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/60">Serviços</span>
              <h2 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] text-brand-dark">Da primeira busca ao orçamento assinado</h2>
            </div>
            <Link href="/servicos" className="text-brand-dark/70 underline-offset-4 hover:text-brand-mint hover:underline">Ver todos os serviços</Link>
          </ScrollReveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s, i) => (
              <ScrollReveal key={s.slug} delay={(i % 3) * 80}>
                <Link href={`/servicos/${s.slug}`} className="group block h-full rounded-[2rem] bg-brand-bg p-2 ring-1 ring-black/5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                  <div className="flex h-full flex-col rounded-[calc(2rem-0.5rem)] bg-white p-7">
                    <ServiceIcon name={s.icone} className="h-9 w-9 text-brand-mint" />
                    <h3 className="mt-5 text-xl font-bold text-brand-dark">{s.nome}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark/60">{s.descricaoCurta}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-mint">
                      Saiba mais <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand tom="vermelho" titulo="Não sabe por onde começar?" texto="Me diga o que mais incomoda hoje: cliente que some, Google que não traz ninguém ou site que não converte. Eu digo o que eu faria primeiro." botao="Quero um diagnóstico grátis" />

      {/* ===== 6. COMO FUNCIONA ===== */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-main">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block rounded-full bg-brand-bg px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/60">Como funciona</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] text-brand-dark">Quatro passos, nenhuma surpresa</h2>
          </ScrollReveal>
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 80}>
                <li className="h-full rounded-[2rem] bg-brand-bg p-7">
                  <span className="font-serif text-5xl font-bold text-brand-mint">{p.n}</span>
                  <h3 className="mt-4 text-xl font-bold text-brand-dark">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-dark/60">{p.d}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
          <div className="mt-12"><CtaButton>Começar pelo diagnóstico</CtaButton></div>
        </div>
      </section>

      {/* ===== 7. QUEM FAZ ===== */}
      <section className="bg-brand-bg py-24 md:py-32" id="sobre">
        <div className="container-main grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-[2rem] bg-white p-2 ring-1 ring-black/5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.5rem)]">
                <Image src="/foto/rhai-estudio.jpg" alt="Rhaideline Calazans, fundadora da Calazans Lumina" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <span className="inline-block rounded-full bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/60">Quem faz</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-bold leading-[1.05] text-brand-dark">Quem planeja é quem monta</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-brand-dark/70">
              <p>Eu sou a Rhaideline Calazans. Eu desenho a estratégia e eu mesma configuro: o site, o Google, o funil e a automação do GoHighLevel. Não passo o seu projeto para uma equipe que você nunca vai conhecer.</p>
              <p>Por isso o que está na proposta é o que vai para o ar. E quando algo precisa de ajuste, você fala com quem montou.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton>Quero falar com a Rhaideline</CtaButton>
              <CtaButton href="/sobre" variante="contorno">Como eu trabalho</CtaButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <VideosCarrossel />

      {/* ===== 8. CURSOS ===== */}
      <CoursesSection />

      {/* ===== 9. DUVIDAS ===== */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-main grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full bg-brand-bg px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-dark/60">Dúvidas</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl font-bold leading-[1.05] text-brand-dark">O que todo mundo pergunta antes de começar</h2>
            <div className="mt-8"><CtaButton>Tirar a minha dúvida</CtaButton></div>
          </div>
          <div className="lg:col-span-3"><FAQAccordion faqs={faqs} /></div>
        </div>
      </section>

      {/* ===== 10. BLOG ===== */}
      {ultimos.length > 0 && (
        <section className="bg-brand-bg py-24 md:py-28">
          <div className="container-main">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark">Para ler antes de decidir</h2>
              <Link href="/blog" className="shrink-0 text-brand-dark/70 hover:text-brand-mint">Ver o blog</Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {ultimos.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-[2rem] bg-white p-2 ring-1 ring-black/5">
                  <div className="h-full rounded-[calc(2rem-0.5rem)] p-5">
                    <p className="text-xs uppercase tracking-wider text-brand-mint">{p.categoria}</p>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-brand-dark group-hover:text-brand-mint">{p.titulo}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-brand-dark/60">{p.resumo}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== 11. FORMULARIO ===== */}
      <FormSection />
    </>
  )
}
