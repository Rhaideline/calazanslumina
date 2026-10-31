// Portfólio — cases reais da Calazans Lumina, estética editorial (estilo Upthought).
// Imagens hospedadas no CDN GHL (mesmo usado em /cases).

const CDN = 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media'

export interface Metric {
  valor: string
  label: string
}

export interface Projeto {
  slug: string
  nome: string
  categoria: string
  local: string
  pais: 'BR' | 'US'
  url?: string
  ano: string
  servicos: string[]
  resumo: string // uma linha, aparece no índice
  overview: string // parágrafo editorial de abertura
  desafio: string
  solucao: string
  metricas: Metric[]
  heroImagem: string
  galeria: { src: string; label: string }[]
  destaque?: boolean // ocupa largura total no índice
}

export const projetos: Projeto[] = [
  {
    slug: 'rs-development-group',
    nome: 'RS Development Group',
    categoria: 'General Contractor',
    local: 'Massachusetts, EUA',
    pais: 'US',
    url: 'https://rs-developmentgroup.com',
    ano: '2026',
    servicos: ['SEO', 'AEO', 'GEO', 'Programático'],
    resumo: 'De 358 a 88.103 impressões/mês em 4 meses — 100% orgânico.',
    overview:
      'A RS Development Group tinha presença digital quase invisível: 1 página indexada e 3 queries com clique, todas de marca. Reconstruímos o site com arquitetura programática de SEO local — serviço × cidade — cobrindo toda a Grande Boston, com conteúdo real por região e schema completo.',
    desafio:
      'Zero autoridade orgânica. O negócio dependia 100% de indicação e não aparecia para nenhuma busca de intenção comercial ("deck builder", "porch contractor") na sua própria região.',
    solucao:
      'Site Next.js de alta performance com 100+ páginas de serviço-por-cidade, cluster de conteúdo, interlink hub-and-spoke, JSON-LD (LocalBusiness, Service, FAQ) e otimização para AI Overviews. Tudo orgânico, sem um centavo de anúncio.',
    metricas: [
      { valor: '+24.500%', label: 'Impressões/mês' },
      { valor: '+1.092%', label: 'Cliques/mês' },
      { valor: '100+', label: 'Páginas indexadas' },
      { valor: '8', label: 'Leads orgânicos' },
    ],
    heroImagem: `${CDN}/699b3d624c8da2a02097df7b.png`,
    galeria: [
      { src: `${CDN}/699b3d6220c035435705e8cd.png`, label: 'Páginas de serviço por cidade' },
      { src: `${CDN}/699b3d6255d8bc503d457168.png`, label: 'Cluster de blog SEO' },
      { src: `${CDN}/699b3d624c8da285cc97df7c.png`, label: 'Search Console — crescimento' },
      { src: `${CDN}/699b3f1355d8bc676d463b27.png`, label: 'Performance de 3 meses' },
    ],
    destaque: true,
  },
  {
    slug: 'wolfs-siding',
    nome: "Wolf's Siding Inc.",
    categoria: 'Siding Contractor',
    local: 'Northborough, MA',
    pais: 'US',
    url: 'https://wolfs-siding.com',
    ano: '2026',
    servicos: ['SEO', 'GoHighLevel', 'Chatbot IA'],
    resumo: '+706% de cliques e 18 leads orgânicos em 28 dias.',
    overview:
      "A Wolf's Siding estava presa na segunda página do Google e sem nenhum lead pelo site. Em um único ciclo de 28 dias, levamos dez keywords comerciais para a primeira página e ligamos um chatbot de IA que qualifica cada visitante 24 horas por dia.",
    desafio:
      'Posição média 26.8, 16 cliques no mês e zero leads via formulário. O site existia, mas era invisível para quem procurava um instalador de siding na região.',
    solucao:
      'Reestruturação de SEO on-page e local, PageSpeed 100/100, e uma operação completa de GoHighLevel: chatbot GPT-4.1 que qualifica em 6 passos, pipeline de CRM, IVR inteligente e automação de reputação.',
    metricas: [
      { valor: '+706%', label: 'Cliques' },
      { valor: '+230%', label: 'Impressões' },
      { valor: '18', label: 'Leads / 28 dias' },
      { valor: '↑11', label: 'Posições no Google' },
    ],
    heroImagem: `${CDN}/699b3d6255d8bc22d845716a.png`,
    galeria: [
      { src: `${CDN}/699b3f13f714ee618fd93ca5.png`, label: 'PageSpeed 99/100' },
      { src: `${CDN}/699b3f1320c035699706b444.png`, label: 'PageSpeed 100/100' },
      { src: `${CDN}/699b3f1320c035efa006b443.png`, label: 'Search Console — 11.8K impressões' },
      { src: `${CDN}/699b3f1355d8bc19b9463b26.png`, label: 'Crescimento orgânico' },
    ],
    destaque: true,
  },
  {
    slug: 'jh-painting-services',
    nome: 'JH Painting Services',
    categoria: 'Painting Contractor',
    local: 'Marlborough, MA',
    pais: 'US',
    url: 'https://jhpaintingservices.com',
    ano: '2026',
    servicos: ['GoHighLevel', 'Chatbot IA', 'IVR'],
    resumo: 'Secretária virtual de IA que qualifica leads 24/7.',
    overview:
      'A JH Painting queria parar de perder ligação fora do horário comercial. Construímos "Jafet", uma secretária virtual de IA que atende, qualifica e agenda sozinha — mais um IVR inteligente que roteia cada chamada para a pessoa certa.',
    desafio:
      'Leads chegavam por telefone e WhatsApp em horários variados e se perdiam. Sem CRM, sem follow-up, sem controle de reputação.',
    solucao:
      'Chatbot GPT-4.1 em modo Auto Pilot, IVR com 4 ramificações, pipeline de CRM com movimentação automática, workflow de formulário com SMS/email e automação de reviews (reputação 5.0 no Google).',
    metricas: [
      { valor: '24/7', label: 'Atendimento IA' },
      { valor: '6 passos', label: 'Qualificação automática' },
      { valor: '5.0 ★', label: 'Reputação Google' },
      { valor: '4', label: 'Ramificações de IVR' },
    ],
    heroImagem: `${CDN}/699b3d62df9bdfed7506e133.png`,
    galeria: [
      { src: `${CDN}/699b406720c0355e60076365.png`, label: 'Bot IA — qualificação' },
      { src: `${CDN}/699b406720c035d914076364.png`, label: 'Workflow WhatsApp' },
    ],
  },
  {
    slug: 'hbm-solar',
    nome: 'HBM Solar',
    categoria: 'Energia Solar',
    local: 'Brasil',
    pais: 'BR',
    ano: '2026',
    servicos: ['GoHighLevel', 'Chatbot IA', 'WhatsApp'],
    resumo: 'Automação de WhatsApp com 3 fluxos inteligentes.',
    overview:
      'A HBM Solar recebia dezenas de mensagens no WhatsApp misturando clientes atuais, orçamentos novos e outros assuntos. Criamos um fluxo de IA que separa cada intenção e encaminha para o lugar certo, sem atendente perder tempo.',
    desafio:
      'Um único WhatsApp para tudo — cliente, orçamento e suporte — gerava demora, mensagens perdidas e time sobrecarregado.',
    solucao:
      'Workflow com 3 branches: "já sou cliente" → atendente, "quero orçamento" → IA qualifica dados de energia solar, "outros" → humano. Tags automáticas, follow-up e notificação interna.',
    metricas: [
      { valor: '3', label: 'Fluxos inteligentes' },
      { valor: '100%', label: 'Triagem automática' },
      { valor: '24/7', label: 'Coleta de dados' },
    ],
    heroImagem: `${CDN}/699b406720c035d914076364.png`,
    galeria: [],
  },
  {
    slug: 'fisio-movimento',
    nome: 'Fisio & Movimento',
    categoria: 'Clínica de Fisioterapia',
    local: 'Brasil',
    pais: 'BR',
    ano: '2026',
    servicos: ['GoHighLevel', 'Chatbot IA', 'Reputação'],
    resumo: 'Assistente de IA e automação completa de reputação.',
    overview:
      'A Fisio & Movimento queria um atendimento profissional 24 horas e uma reputação online que refletisse a qualidade da clínica. Entregamos uma assistente virtual acolhedora e um ciclo automático de avaliações.',
    desafio:
      'Atendimento manual limitado ao horário e nenhuma estratégia de coleta de avaliações — reputação online estagnada.',
    solucao:
      'Assistente de IA com personalidade educada e objetiva, mais templates de pós-atendimento: coleta de avaliação, recuperação de feedback ruim e pedido de review no Google.',
    metricas: [
      { valor: '24h', label: 'Secretária virtual' },
      { valor: '4', label: 'Templates de reputação' },
      { valor: '★', label: 'Ciclo de reviews' },
    ],
    heroImagem: '/case-fisio-bot.webp',
    galeria: [],
  },
]

// Sites desenvolvidos (grid secundário, sem página dedicada)
export const maisSites = [
  // As duas primeiras estavam TROCADAS entre si. Conferido abrindo as capturas:
  //   699b3d62df9bdf1a8f06e132 -> cabecalho "MASS PAINTERS", e-mail
  //     info@masspainterspro.com, "Serving Marlborough" = Mass Painter Pro
  //   699b3d6255d8bc3b6f457169 -> logo "A&M Painter Licensed Contractor",
  //     e-mail ampainter3766@gmail.com, "Serving Hudson" = AM Painter Inc
  { src: `${CDN}/699b3d6255d8bc3b6f457169.png`, nome: 'AM Painter Inc', tipo: 'Painting · MA' },
  { src: `${CDN}/699b3d62df9bdf1a8f06e132.png`, nome: 'Mass Painter Pro', tipo: 'Painting · MA' },
  { src: `${CDN}/699b3d6255d8bc756045716b.png`, nome: 'Mass HVAC', tipo: 'HVAC · MA' },
  { src: `${CDN}/699b3d6220c0352e5305e8cc.png`, nome: 'Sinmevaço', tipo: 'Sindicato · Brasil' },
]

export function getProjetoBySlug(slug: string) {
  return projetos.find((p) => p.slug === slug)
}
