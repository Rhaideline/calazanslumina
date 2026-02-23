export interface Curso {
  slug: string
  nome: string
  descricaoCurta: string
  descricaoLonga: string
  preco: number
  modulos: { titulo: string; aulas: string[] }[]
  paraQuem: string[]
  oQueVaiAprender: string[]
  imagem: string
  destaque?: boolean
  pdfDisponivel?: boolean
}

export const cursos: Curso[] = [
  {
    slug: 'ia-chatgpt-completo',
    nome: 'IA & ChatGPT — Curso Completo',
    descricaoCurta: 'Domine a Inteligência Artificial do zero ao avançado. Aprenda a usar o ChatGPT para criar conteúdo, automatizar tarefas e impulsionar seu negócio.',
    descricaoLonga: 'Este é o guia definitivo para dominar a Inteligência Artificial e o ChatGPT. Desde os conceitos fundamentais até técnicas avançadas de prompt engineering, automação de tarefas e integração com ferramentas de marketing digital. Ideal para empreendedores que querem usar IA para multiplicar seus resultados.',
    preco: 20,
    destaque: true,
    pdfDisponivel: true,
    imagem: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b9a7c55d8bc1b616621c7.png',
    paraQuem: [
      'Empreendedores que querem usar IA no dia a dia',
      'Profissionais de marketing que querem automatizar tarefas',
      'Iniciantes que nunca usaram ChatGPT',
      'Donos de negócio que querem criar conteúdo com IA',
      'Freelancers que querem aumentar produtividade',
    ],
    oQueVaiAprender: [
      'O que é Inteligência Artificial e como funciona',
      'Como criar uma conta e usar o ChatGPT',
      'Técnicas de Prompt Engineering (do básico ao avançado)',
      'Como gerar conteúdo para redes sociais com IA',
      'Automação de atendimento com IA no WhatsApp',
      'Criação de textos para sites, blogs e anúncios',
      'Análise de dados e relatórios com IA',
      'Ferramentas de IA além do ChatGPT',
      'Como integrar IA com GoHighLevel',
      'Ética e limites do uso de IA',
    ],
    modulos: [
      {
        titulo: 'Módulo 1 — Fundamentos da Inteligência Artificial',
        aulas: [
          'O que é IA e por que importa para o seu negócio',
          'Breve história: de Alan Turing ao ChatGPT',
          'Tipos de IA: Machine Learning, Deep Learning, NLP',
          'Como os modelos de linguagem funcionam (LLMs)',
          'O que o ChatGPT pode (e o que não pode) fazer',
        ],
      },
      {
        titulo: 'Módulo 2 — Primeiros Passos com ChatGPT',
        aulas: [
          'Criando sua conta no ChatGPT (passo a passo)',
          'Navegando pela interface: chat, histórico, configurações',
          'Seu primeiro prompt: como pedir algo ao ChatGPT',
          'Diferença entre GPT-3.5, GPT-4 e GPT-4o',
          'ChatGPT Plus vs gratuito: vale a pena?',
        ],
      },
      {
        titulo: 'Módulo 3 — Prompt Engineering (A Arte de Perguntar)',
        aulas: [
          'O que é um prompt e por que a qualidade importa',
          'Estrutura de um prompt perfeito: Contexto + Tarefa + Formato',
          'Técnica Chain-of-Thought (passo a passo)',
          'Técnica Few-Shot (exemplos que ensinam)',
          'Técnica Role-Play (dê um papel ao ChatGPT)',
          '20 templates de prompts prontos para usar',
        ],
      },
      {
        titulo: 'Módulo 4 — IA para Criação de Conteúdo',
        aulas: [
          'Gerando legendas para Instagram com IA',
          'Criando artigos de blog otimizados para SEO',
          'Roteiros de vídeo para Reels e TikTok',
          'Emails de vendas e newsletters com IA',
          'Descrições de produtos e serviços',
          'Calendário editorial mensal gerado por IA',
        ],
      },
      {
        titulo: 'Módulo 5 — IA para Marketing Digital',
        aulas: [
          'Análise de concorrência com ChatGPT',
          'Pesquisa de palavras-chave com IA',
          'Criação de personas e público-alvo',
          'Otimização de anúncios (Google Ads e Meta Ads)',
          'Geração de ideias para campanhas',
          'Copy para landing pages de alta conversão',
        ],
      },
      {
        titulo: 'Módulo 6 — Automação com IA',
        aulas: [
          'Chatbots de IA no WhatsApp (como configurar)',
          'Automação de respostas de email com IA',
          'Integração de IA com CRM (GoHighLevel)',
          'Qualificação automática de leads com IA',
          'Agendamento inteligente com assistentes de IA',
        ],
      },
      {
        titulo: 'Módulo 7 — Ferramentas de IA Além do ChatGPT',
        aulas: [
          'Claude (Anthropic) — para textos longos e análise',
          'Midjourney e DALL-E — imagens com IA',
          'Canva com IA — design automatizado',
          'Eleven Labs — voz com IA',
          'Make/Zapier + IA — automações visuais',
          'Comparativo: qual ferramenta usar para cada tarefa',
        ],
      },
      {
        titulo: 'Módulo 8 — Ética, Limites e o Futuro da IA',
        aulas: [
          'O que a IA faz bem e o que precisa de humano',
          'Plágio, direitos autorais e conteúdo gerado por IA',
          'Viés e alucinações: como identificar respostas incorretas',
          'Regulamentação de IA no Brasil e no mundo',
          'O futuro da IA nos próximos 5 anos',
          'Como se preparar para a era da IA',
        ],
      },
    ],
  },
  {
    slug: 'marketing-digital-iniciantes',
    nome: 'Marketing Digital para Iniciantes',
    descricaoCurta: 'Aprenda os fundamentos do marketing digital do zero. Ideal para quem está começando e quer entender como atrair clientes pela internet.',
    descricaoLonga: 'Curso completo para quem nunca fez marketing digital. Desde os conceitos básicos até a implementação prática de estratégias que geram resultado. Você vai aprender a criar presença digital, atrair visitantes, gerar leads e converter em vendas.',
    preco: 20,
    imagem: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b9ac95dfd50100d491487.png',
    paraQuem: [
      'Empreendedores que estão começando no digital',
      'Profissionais liberais que querem atrair clientes online',
      'Quem quer mudar de carreira para marketing digital',
      'Donos de negócio sem presença digital',
    ],
    oQueVaiAprender: [
      'O que é marketing digital e por que importa',
      'Como criar uma presença digital profissional',
      'Fundamentos de SEO (aparecer no Google)',
      'Redes sociais: estratégia que gera resultado',
      'Introdução a anúncios online (Google e Meta)',
      'Email marketing básico',
      'Como medir resultados (métricas essenciais)',
      'Ferramentas gratuitas para começar hoje',
    ],
    modulos: [
      {
        titulo: 'Módulo 1 — O que é Marketing Digital',
        aulas: ['Conceitos fundamentais', 'Funil de vendas explicado', 'Canais digitais: quais existem e qual usar', 'Mentalidade de resultado'],
      },
      {
        titulo: 'Módulo 2 — Presença Digital',
        aulas: ['Google Business Profile do zero', 'Seu primeiro site profissional', 'Redes sociais: qual escolher', 'Identidade visual básica'],
      },
      {
        titulo: 'Módulo 3 — SEO para Iniciantes',
        aulas: ['O que é SEO e como funciona', 'Palavras-chave: como escolher', 'SEO on-page básico', 'Google Search Console'],
      },
      {
        titulo: 'Módulo 4 — Redes Sociais',
        aulas: ['Instagram para negócios', 'Conteúdo que engaja', 'Calendário editorial', 'Métricas de redes sociais'],
      },
      {
        titulo: 'Módulo 5 — Anúncios Online Básico',
        aulas: ['Google Ads para iniciantes', 'Meta Ads para iniciantes', 'Orçamento e ROI', 'Primeiro anúncio na prática'],
      },
      {
        titulo: 'Módulo 6 — Conversão e Métricas',
        aulas: ['O que é taxa de conversão', 'Google Analytics básico', 'KPIs que importam', 'Relatórios simples'],
      },
    ],
  },
  {
    slug: 'google-meu-negocio-do-zero',
    nome: 'Google Meu Negócio do Zero',
    descricaoCurta: 'Aprenda a configurar, otimizar e dominar o Google Business Profile para aparecer no Google Maps e atrair clientes locais.',
    descricaoLonga: 'Curso prático e direto para configurar seu Google Business Profile do zero e otimizar para aparecer nas primeiras posições do Google Maps. Com dados reais e técnicas que aplicamos nos clientes da Calazans Lumina.',
    preco: 20,
    imagem: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b9ac95dfd50100d491487.png',
    paraQuem: [
      'Negócios locais que querem mais visibilidade',
      'Empresas que atendem clientes presencialmente',
      'Profissionais que querem aparecer no Google Maps',
      'Quem quer mais avaliações e reviews no Google',
    ],
    oQueVaiAprender: [
      'Criar perfil completo no Google Business Profile',
      'Otimizar para aparecer nas 3 primeiras posições',
      'Estratégia de fotos que aumentam cliques em 42%',
      'Como conseguir mais avaliações 5 estrelas',
      'Google Posts: o que postar e quando',
      'Responder reviews de forma estratégica',
      'Insights e métricas do Google Business',
      'Integração com Google Ads Local',
    ],
    modulos: [
      {
        titulo: 'Módulo 1 — Configuração do Google Business',
        aulas: ['Criar perfil passo a passo', 'Verificação do negócio', 'Categorias e atributos', 'Horários e informações'],
      },
      {
        titulo: 'Módulo 2 — Otimização Avançada',
        aulas: ['Descrição otimizada com SEO', 'Fotos que convertem', 'Produtos e serviços', 'Área de atendimento'],
      },
      {
        titulo: 'Módulo 3 — Reviews e Reputação',
        aulas: ['Como pedir avaliações', 'Respondendo reviews (positivos e negativos)', 'Automação de pedidos de review', 'Widget de reviews no site'],
      },
      {
        titulo: 'Módulo 4 — Google Posts e Métricas',
        aulas: ['Tipos de posts no Google', 'Frequência ideal de postagem', 'Insights: como interpretar', 'Relatórios de performance'],
      },
    ],
  },
  {
    slug: 'redes-sociais-que-vendem',
    nome: 'Redes Sociais que Vendem',
    descricaoCurta: 'Transforme suas redes sociais em máquinas de geração de leads. Aprenda a estratégia Info-First que o algoritmo favorece em 2026.',
    descricaoLonga: 'Curso focado em transformar redes sociais de vitrine para máquina de vendas. Usando a estratégia Info-First que o algoritmo do Instagram e outras plataformas favorecem. Com templates de posts, calendário editorial e métricas que importam.',
    preco: 20,
    imagem: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b9ac94c8da27eb5b8f7fb.png',
    paraQuem: [
      'Empreendedores que postam mas não geram vendas',
      'Quem quer crescer no Instagram de forma orgânica',
      'Profissionais que querem entender o algoritmo',
      'Negócios que querem mais engajamento e leads',
    ],
    oQueVaiAprender: [
      'Estratégia Info-First para 2026',
      'Como o algoritmo funciona (Instagram, TikTok, LinkedIn)',
      'Criação de conteúdo que gera salvamentos e compartilhamentos',
      'Calendário editorial prático',
      'Design de posts (sem ser designer)',
      'Legendas que convertem (com templates)',
      'Hashtags estratégicas por nicho',
      'Métricas e relatórios de redes sociais',
    ],
    modulos: [
      {
        titulo: 'Módulo 1 — Estratégia Info-First',
        aulas: ['O que mudou em 2026', 'Por que conteúdo informativo ganha', 'Autenticidade vs perfeição', 'Salves e shares como KPI principal'],
      },
      {
        titulo: 'Módulo 2 — Criação de Conteúdo',
        aulas: ['Tipos de post que funcionam', 'Templates de legendas', 'Carrosséis que educam', 'Reels curtos com dados'],
      },
      {
        titulo: 'Módulo 3 — Planejamento e Execução',
        aulas: ['Calendário editorial mensal', 'Batch content: produzir em lote', 'Ferramentas gratuitas de design', 'Horários ideais para postar'],
      },
      {
        titulo: 'Módulo 4 — Crescimento e Métricas',
        aulas: ['Hashtags estratégicas', 'Engajamento autêntico', 'Quando impulsionar publicações', 'Relatórios simples que funcionam'],
      },
    ],
  },
  {
    slug: 'funis-de-vendas-simplificado',
    nome: 'Funis de Vendas Simplificado',
    descricaoCurta: 'Entenda como criar funis de vendas que convertem. Do primeiro contato ao fechamento, de forma automatizada e simples.',
    descricaoLonga: 'Curso prático sobre funis de vendas para quem quer parar de perder leads e começar a converter de forma automatizada. Com exemplos reais de funis que implementamos na Calazans Lumina usando GoHighLevel.',
    preco: 20,
    imagem: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b9ac95dfd50100d491487.png',
    paraQuem: [
      'Empreendedores que perdem leads por falta de follow-up',
      'Quem quer automatizar o processo de vendas',
      'Negócios que investem em marketing mas não convertem',
      'Profissionais que querem entender CRM e automação',
    ],
    oQueVaiAprender: [
      'O que é um funil de vendas e como funciona',
      'Tipos de funis: captação, vendas, nurturing',
      'Landing pages que convertem',
      'Automação de follow-up (WhatsApp, email, SMS)',
      'CRM básico: como organizar seus leads',
      'Pipeline de vendas visual',
      'Métricas de funil: taxa de conversão por etapa',
      'GoHighLevel: visão geral da plataforma',
    ],
    modulos: [
      {
        titulo: 'Módulo 1 — Fundamentos de Funil',
        aulas: ['O que é funil de vendas', 'Topo, meio e fundo', 'Jornada do cliente', 'Exemplos reais de funis'],
      },
      {
        titulo: 'Módulo 2 — Landing Pages',
        aulas: ['Elementos de uma landing page', 'Headlines que convertem', 'Formulários otimizados', 'Testes A/B básicos'],
      },
      {
        titulo: 'Módulo 3 — Automação e Follow-up',
        aulas: ['Sequências de email', 'WhatsApp automático', 'SMS de follow-up', 'Timing perfeito de contato'],
      },
      {
        titulo: 'Módulo 4 — CRM e Pipeline',
        aulas: ['Configurando um CRM', 'Pipeline visual de vendas', 'Lead scoring básico', 'Relatórios de conversão'],
      },
    ],
  },
]
