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
  gratuito?: boolean
  linkPagamento?: string
}

export const cursos: Curso[] = [
  {
    slug: 'chatgpt-para-idosos',
    nome: 'ChatGPT para Idosos — Curso Gratuito',
    descricaoCurta: 'Aprenda a usar o ChatGPT do zero, com linguagem simples e passo a passo visual. Feito especialmente para quem tem mais de 60 anos.',
    descricaoLonga: 'Este curso foi criado com carinho para pessoas da terceira idade que querem aprender a usar o ChatGPT no dia a dia. Com linguagem clara, ilustrações grandes, exemplos práticos e vídeos explicativos, você vai descobrir como essa ferramenta pode facilitar sua vida — desde escrever mensagens até tirar dúvidas de saúde, receitas e muito mais. Totalmente gratuito.',
    preco: 0,
    gratuito: true,
    destaque: true,
    pdfDisponivel: true,
    imagem: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b9a7c55d8bc1b616621c7.png',
    paraQuem: [
      'Pessoas com mais de 60 anos que nunca usaram IA',
      'Avós que querem acompanhar a tecnologia dos netos',
      'Aposentados que querem aprender algo novo e útil',
      'Idosos que usam WhatsApp e querem expandir suas habilidades digitais',
      'Filhos e netos que querem ensinar seus pais/avós a usar ChatGPT',
    ],
    oQueVaiAprender: [
      'O que é o ChatGPT e para que serve (explicação simples)',
      'Como criar uma conta passo a passo (com imagens grandes)',
      'Como fazer perguntas para o ChatGPT entender você',
      'Pedir receitas de culinária com os ingredientes que tem em casa',
      'Tirar dúvidas sobre saúde, remédios e bem-estar',
      'Escrever mensagens bonitas para família e amigos',
      'Pedir ajuda para entender documentos e contas',
      'Usar o ChatGPT como companheiro de conversa',
      'Dicas de segurança: o que NÃO fazer com IA',
    ],
    modulos: [
      {
        titulo: 'Módulo 1 — O Que é Essa Tal de Inteligência Artificial?',
        aulas: [
          'O que é IA? (explicação como se fosse para um amigo)',
          'ChatGPT: seu novo assistente digital gratuito',
          'Isso é seguro? Posso confiar? (dúvidas comuns respondidas)',
          'Exemplos do dia a dia: como outras pessoas da sua idade usam',
        ],
      },
      {
        titulo: 'Módulo 2 — Criando Sua Conta (Passo a Passo com Imagens)',
        aulas: [
          'Abrindo o navegador e acessando o site do ChatGPT',
          'Criando sua conta com email (tela por tela)',
          'Fazendo login pela primeira vez',
          'Conhecendo a tela principal: onde escrever e onde ler',
        ],
      },
      {
        titulo: 'Módulo 3 — Suas Primeiras Conversas com o ChatGPT',
        aulas: [
          'Como escrever uma pergunta clara (dica: fale como se fosse uma pessoa)',
          'Pedindo uma receita com o que tem na geladeira',
          'Perguntando sobre um remédio ou sintoma',
          'Pedindo para explicar uma notícia de forma simples',
          'Escrevendo uma mensagem de aniversário para alguém especial',
        ],
      },
      {
        titulo: 'Módulo 4 — ChatGPT no Dia a Dia',
        aulas: [
          'Ajuda para entender contas e documentos',
          'Planejando uma viagem ou passeio',
          'Encontrando exercícios leves para fazer em casa',
          'Aprendendo palavras em inglês (ou outro idioma)',
          'Organizando sua rotina da semana',
        ],
      },
      {
        titulo: 'Módulo 5 — Dicas de Segurança e Cuidados',
        aulas: [
          'Nunca coloque senhas, CPF ou dados bancários no ChatGPT',
          'O ChatGPT pode errar — sempre confirme informações de saúde com seu médico',
          'Golpes com IA: como identificar e se proteger',
          'Quando usar e quando NÃO usar o ChatGPT',
        ],
      },
      {
        titulo: 'Módulo 6 — Atividades Práticas (Mão na Massa!)',
        aulas: [
          'Atividade 1: Peça uma receita do seu prato favorito',
          'Atividade 2: Escreva uma carta para alguém que você ama',
          'Atividade 3: Peça dicas de filmes ou livros do seu gênero favorito',
          'Atividade 4: Crie sua rotina matinal ideal',
          'Atividade 5: Pergunte curiosidades sobre sua cidade ou país',
        ],
      },
    ],
  },
  {
    slug: 'ia-chatgpt-completo',
    nome: 'IA & ChatGPT — Curso Completo',
    descricaoCurta: 'Domine a Inteligência Artificial do zero ao avançado. Aprenda a usar o ChatGPT para criar conteúdo, automatizar tarefas e impulsionar seu negócio.',
    descricaoLonga: 'Este é o guia definitivo para dominar a Inteligência Artificial e o ChatGPT. Desde os conceitos fundamentais até técnicas avançadas de prompt engineering, automação de tarefas e integração com ferramentas de marketing digital. Ideal para empreendedores que querem usar IA para multiplicar seus resultados.',
    preco: 20,
    destaque: true,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8cc1484b2d7dfdd5e1370',
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
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8e72826494b224ce21c37',
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
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8eabecd45df2539892d27',
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
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8e8f9beb6cd210e71a584',
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
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8eabecd45df2539892d27',
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
  {
    slug: 'ferramentas-digitais-secretarias',
    nome: 'Ferramentas Digitais para Secretárias — Curso Gratuito',
    descricaoCurta: 'Domine as ferramentas digitais essenciais para secretárias modernas. De Google Workspace a automação de tarefas, torne-se indispensável no escritório. Totalmente gratuito.',
    descricaoLonga: 'Curso completo e gratuito para secretárias e assistentes administrativas que querem dominar as ferramentas digitais do dia a dia. Aprenda Google Workspace, gestão de agenda, organização de arquivos, comunicação profissional por email, criação de apresentações e uso básico de IA para aumentar sua produtividade. Tudo com exemplos práticos do cotidiano de escritório.',
    preco: 0,
    gratuito: true,
    pdfDisponivel: true,
    imagem: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b9ac95dfd50100d491487.png',
    paraQuem: [
      'Secretárias que querem se atualizar com ferramentas digitais',
      'Assistentes administrativas buscando produtividade',
      'Recepcionistas que usam computador no trabalho',
      'Profissionais de escritório que querem dominar Google Workspace',
      'Quem quer organizar melhor sua rotina com tecnologia',
    ],
    oQueVaiAprender: [
      'Google Workspace completo (Gmail, Drive, Agenda, Docs, Sheets)',
      'Organização de arquivos e pastas na nuvem',
      'Gestão profissional de agenda e compromissos',
      'Email corporativo: etiqueta e produtividade',
      'Criar planilhas e relatórios básicos',
      'Apresentações profissionais no Google Slides',
      'Automação de tarefas repetitivas',
      'Uso básico de IA (ChatGPT) para escritório',
      'Comunicação profissional por WhatsApp Business',
      'Organização de reuniões online (Google Meet/Zoom)',
    ],
    modulos: [
      {
        titulo: 'Módulo 1 — Google Workspace: Seu Kit de Ferramentas',
        aulas: [
          'Visão geral do Google Workspace',
          'Gmail profissional: organizar, filtrar e responder',
          'Google Drive: organizar arquivos na nuvem',
          'Compartilhamento de arquivos e permissões',
        ],
      },
      {
        titulo: 'Módulo 2 — Agenda e Organização',
        aulas: [
          'Google Agenda: criar e gerenciar compromissos',
          'Agendamento de reuniões para chefes e equipe',
          'Lembretes e notificações inteligentes',
          'Integrando agenda com email e Meet',
        ],
      },
      {
        titulo: 'Módulo 3 — Documentos e Planilhas',
        aulas: [
          'Google Docs: criar documentos profissionais',
          'Modelos de atas, memorandos e ofícios',
          'Google Sheets: planilhas básicas para escritório',
          'Controle de despesas e relatórios simples',
          'Formatação e impressão profissional',
        ],
      },
      {
        titulo: 'Módulo 4 — Apresentações e Comunicação',
        aulas: [
          'Google Slides: apresentações para reuniões',
          'Templates profissionais prontos para usar',
          'Google Meet e Zoom: organizar reuniões online',
          'WhatsApp Business para comunicação do escritório',
        ],
      },
      {
        titulo: 'Módulo 5 — Produtividade e Automação',
        aulas: [
          'Atalhos de teclado que economizam horas',
          'Respostas automáticas e templates de email',
          'Organização digital: método de pastas eficiente',
          'Ferramentas de lista de tarefas (Google Tasks, Keep)',
        ],
      },
      {
        titulo: 'Módulo 6 — IA no Escritório',
        aulas: [
          'ChatGPT para secretárias: o que pode fazer por você',
          'Redigir emails profissionais com IA',
          'Resumir documentos longos com IA',
          'Criar planilhas e fórmulas com ajuda da IA',
          'Cuidados e limites: quando não usar IA',
        ],
      },
    ],
  },
]
