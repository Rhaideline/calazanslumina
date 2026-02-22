export interface Servico {
  slug: string
  nome: string
  descricaoCurta: string
  descricaoLonga: string
  icone: string
  dores: string[]
  solucao: string
  diferenciais: string[]
  cta: string
  ctaTexto: string
  heroImage?: string
}

export const servicos: Servico[] = [
  {
    slug: 'sites-landing-pages',
    nome: 'Sites & Landing Pages',
    descricaoCurta: 'Sites profissionais de alta performance que convertem visitantes em clientes',
    descricaoLonga: 'Desenvolvemos sites e landing pages com tecnologia Next.js, alcançando PageSpeed 95+, design premium e arquitetura focada em conversão. Cada pixel é pensado para transformar visitantes em leads qualificados, com SEO técnico integrado desde a primeira linha de código.',
    icone: 'globe',
    dores: [
      'Seu site é lento e perde visitantes antes de carregar',
      'Não aparece no Google mesmo depois de meses online',
      'Design amador que não transmite profissionalismo',
      'Feito no Wix ou Canva, sem performance real',
      'Vergonha de enviar o link para clientes potenciais',
    ],
    solucao: 'Sites Next.js ultra-performáticos com PageSpeed 95+, SEO técnico integrado, design premium responsivo e arquitetura focada em conversão — do hero à última seção.',
    diferenciais: [
      'Tecnologia Next.js — a mesma usada por Netflix, Nike e TikTok',
      'PageSpeed 95+ garantido — seu site carrega em menos de 2 segundos',
      'SEO técnico desde o código — schema markup, meta tags dinâmicas, sitemap automático',
      'Design premium responsivo — perfeito no celular, tablet e desktop',
      'Formulários integrados com CRM — cada lead vai direto pro seu pipeline',
    ],
    cta: 'Quero meu site profissional',
    ctaTexto: 'Olá, quero saber mais sobre criação de sites profissionais',
  },
  {
    slug: 'funis-automacao-ghl',
    nome: 'Funis de Vendas & Automação GHL',
    descricaoCurta: 'Funis inteligentes que captam, nutrem e convertem leads no automático',
    descricaoLonga: 'Criamos funis de vendas completos dentro do GoHighLevel: desde a captura do lead até o fechamento, com automações de email, SMS e WhatsApp que trabalham 24 horas por dia. Seu processo de vendas funciona enquanto você dorme.',
    icone: 'funnel',
    dores: [
      'Lead chega pelo WhatsApp e some porque ninguém respondeu a tempo',
      'Processo de vendas 100% manual e dependente de você',
      'Não sabe quantos leads entram por mês nem de onde vêm',
      'Depende de indicação para conseguir novos clientes',
      'Já tentou CRM mas era complicado demais e abandonou',
    ],
    solucao: 'Pipelines automatizados no GoHighLevel com nurture por email, SMS e WhatsApp, scoring de leads, agendamento automático e dashboards de performance em tempo real.',
    diferenciais: [
      'GoHighLevel — a plataforma all-in-one usada por agências de elite',
      'Funil completo do clique ao fechamento — nada fica pelo caminho',
      'Automação multicanal — email + SMS + WhatsApp integrados',
      'Lead scoring inteligente — priorize quem está pronto para comprar',
      'Dashboards em tempo real — saiba exatamente o ROI de cada campanha',
    ],
    cta: 'Quero automatizar meu processo de vendas',
    ctaTexto: 'Olá, quero saber mais sobre funis de vendas e automação GHL',
  },
  {
    slug: 'crm-ia-whatsapp',
    nome: 'CRM & IA Conversacional',
    descricaoCurta: 'CRM estruturado com robô de IA que atende seus clientes 24h por dia',
    descricaoLonga: 'Implementamos um CRM completo no GoHighLevel com inteligência artificial conversacional integrada ao WhatsApp. Seu negócio responde leads em segundos, faz follow-up automático, agenda consultas e nunca mais perde um cliente por demora no atendimento.',
    icone: 'bot',
    dores: [
      'Perde leads no WhatsApp porque demora para responder',
      'Não faz follow-up e o cliente esfria',
      'Agenda bagunçada com horários conflitantes',
      'Não sabe quantos clientes tem nem em que estágio estão',
      'Gasta horas respondendo as mesmas perguntas todo dia',
    ],
    solucao: 'CRM GoHighLevel com IA conversacional 24h, templates de WhatsApp, integração multicanal, agendamento automático e pipeline visual de vendas.',
    diferenciais: [
      'Robô de IA 24h — responde em segundos, qualquer hora do dia',
      'Templates inteligentes de WhatsApp — respostas personalizadas por contexto',
      'Pipeline visual — veja exatamente onde cada lead está no processo',
      'Integração total — WhatsApp, Instagram, Facebook e email em um só lugar',
      'Follow-up automático — nenhum lead fica sem resposta',
    ],
    cta: 'Quero um robô respondendo por mim',
    ctaTexto: 'Olá, quero saber mais sobre CRM e IA conversacional',
  },
  {
    slug: 'trafego-pago-performance',
    nome: 'Tráfego Pago & Performance',
    descricaoCurta: 'Campanhas de Google e Meta Ads otimizadas para gerar leads qualificados',
    descricaoLonga: 'Gerenciamos suas campanhas de Google Ads e Meta Ads com foco total em performance. Cada centavo investido é rastreado, otimizado e direcionado para atrair leads qualificados que realmente compram. Relatórios claros, sem enrolação.',
    icone: 'chart',
    dores: [
      'Gasta em anúncio e não sabe se está vendendo por causa dele',
      'CPL (custo por lead) alto demais para o retorno',
      'Campanhas sem direção, feitas no "achismo"',
      'Não sabe de onde seus clientes realmente vêm',
      'Agência anterior mostrava métricas de vaidade (curtidas) e não vendas',
    ],
    solucao: 'Google Ads + Meta Ads com tracking completo, landing pages integradas, otimização contínua de campanhas, relatórios claros de ROI e redução progressiva de CPL.',
    diferenciais: [
      'Tracking completo — saiba exatamente de onde vem cada lead e cada venda',
      'Landing pages integradas — cada campanha tem sua página de conversão',
      'Otimização semanal — suas campanhas melhoram toda semana, não só no início',
      'Relatórios de verdade — ROI, CPL, taxa de conversão, não métricas de vaidade',
      'Google + Meta + retargeting — presença completa onde seu cliente está',
    ],
    cta: 'Quero anúncios que vendem de verdade',
    ctaTexto: 'Olá, quero saber mais sobre tráfego pago e performance',
  },
  {
    slug: 'gestao-redes-sociais',
    nome: 'Gestão de Redes Sociais',
    descricaoCurta: 'Gestão estratégica de Instagram e Facebook que transforma seguidores em clientes',
    descricaoLonga: 'Criamos e gerenciamos sua presença completa no Instagram e Facebook com estratégia de conteúdo, design profissional, calendário editorial, stories, reels e crescimento orgânico. Não é só postar bonito — é postar para vender.',
    icone: 'share',
    dores: [
      'Instagram parado, sem engajamento e sem estratégia',
      'Posts sem identidade visual, feitos na correria',
      'Seguidores que não compram nada',
      'Concorrente crescendo enquanto você está parado',
      'Não tem tempo para criar conteúdo consistente',
    ],
    solucao: 'Gestão completa de Instagram e Facebook com conteúdo estratégico em português, design profissional, calendário editorial, stories, reels e crescimento orgânico focado em conversão.',
    diferenciais: [
      'Conteúdo em português — para público brasileiro nos EUA e no Brasil',
      'Marca pessoal + marca do negócio — trabalhamos os dois eixos',
      'Calendário editorial estratégico — cada post tem um objetivo de negócio',
      'Design profissional — identidade visual consistente em cada publicação',
      'Relatórios mensais — engajamento, alcance, leads gerados pelo orgânico',
    ],
    cta: 'Quero minha gestão de redes sociais',
    ctaTexto: 'Olá, quero saber mais sobre gestão de redes sociais',
  },
  {
    slug: 'google-meu-negocio',
    nome: 'Google Business Profile',
    descricaoCurta: 'Criação e otimização do seu perfil no Google Maps para dominar buscas locais',
    descricaoLonga: 'Criamos e otimizamos seu Google Business Profile do zero: categorias estratégicas, descrição otimizada, fotos profissionais, estratégia de captação de reviews, postagens semanais e monitoramento de insights. Seu cliente está pesquisando no Google agora — a pergunta é se ele está te encontrando.',
    icone: 'mappin',
    dores: [
      'Empresa não aparece no Google Maps',
      'Perfil incompleto com fotos ruins ou sem fotos',
      'Avaliações sem resposta passando imagem de desleixo',
      'Concorrente aparece primeiro nas buscas locais',
      'Nunca configurou o Google Meu Negócio corretamente',
    ],
    solucao: 'Criação completa do Google Business Profile, preenchimento otimizado, estratégia de reviews, postagens semanais no GBP e monitoramento contínuo de insights e posicionamento.',
    diferenciais: [
      'Configuração completa — categorias, descrição, horários, atributos, fotos',
      'Estratégia de reviews — sistema para captar avaliações genuínas de clientes',
      'Postagens semanais — seu perfil ativo e relevante para o algoritmo',
      'Monitoramento de insights — saiba quantas pessoas viram e clicaram no seu perfil',
      'Para brasileiros nos EUA — crítico porque o Google Maps é a primeira busca',
    ],
    cta: 'Quero aparecer no Google Maps',
    ctaTexto: 'Olá, quero saber mais sobre Google Meu Negócio',
  },
]

export function getServicoBySlug(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug)
}
