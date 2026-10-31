export interface Servico {
  // existing
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
  // NEW
  metaTitle: string
  metaDescription: string
  h1: string
  beneficios: { titulo: string; descricao: string; icone: string }[]
  comoFunciona: { passo: number; titulo: string; descricao: string }[]
  resultados: { numero: string; label: string; sufixo?: string }[]
  faqs: { pergunta: string; resposta: string }[]
  casosDeUso: string[]
  conteudoSEO: string
}

export const servicos: Servico[] = [
  {
    slug: 'sites-landing-pages',
    nome: 'Sites & Landing Pages',
    descricaoCurta: 'Sites profissionais de alta performance que convertem visitantes em clientes',
    descricaoLonga: 'Desenvolvemos sites e landing pages com tecnologia Next.js, com carregamento rápido medido, design premium e arquitetura focada em conversão. Cada pixel é pensado para transformar visitantes em leads qualificados, com SEO técnico integrado desde a primeira linha de código.',
    icone: 'globe',
    dores: [
      'Seu site é lento e perde visitantes antes de carregar',
      'Não aparece no Google mesmo depois de meses online',
      'Design amador que não transmite profissionalismo',
      'Feito no Wix ou Canva, sem performance real',
      'Vergonha de enviar o link para clientes potenciais',
    ],
    solucao: 'Sites Next.js que abrem rápido, SEO técnico integrado, design premium responsivo e arquitetura focada em conversão — do hero à última seção.',
    diferenciais: [
      'Tecnologia Next.js — a mesma usada por Netflix, Nike e TikTok',
      'Tempo de carregamento medido e publicado no portfólio, com o site do cliente para conferir',
      'SEO técnico desde o código — schema markup, meta tags dinâmicas, sitemap automático',
      'Design premium responsivo — perfeito no celular, tablet e desktop',
      'Formulários integrados com CRM — cada lead vai direto pro seu pipeline',
    ],
    cta: 'Quero meu site profissional',
    ctaTexto: 'Olá, quero saber mais sobre criação de sites profissionais',
    metaTitle: 'Sites & Landing Pages de Alta Conversão',
    metaDescription: 'Sites e landing pages em Next.js que abrem rápido, com SEO técnico e design sob medida, para negócios brasileiros nos EUA e no Brasil.',
    h1: 'Sites e Landing Pages Que Transformam Visitantes em Clientes Reais',
    beneficios: [
      {
        titulo: 'Carregamento Ultra-Rápido',
        descricao: 'Seu site carrega em menos de 2 segundos, mantendo visitantes engajados e reduzindo a taxa de rejeição drasticamente.',
        icone: 'chart',
      },
      {
        titulo: 'SEO Técnico Nativo',
        descricao: 'Schema markup, meta tags dinâmicas, sitemap automático e URLs amigáveis já vêm integrados desde a primeira linha de código.',
        icone: 'globe',
      },
      {
        titulo: 'Design Responsivo Premium',
        descricao: 'Layout adaptado para celular, tablet e desktop com identidade visual profissional que transmite credibilidade instantânea.',
        icone: 'share',
      },
      {
        titulo: 'Arquitetura de Conversão',
        descricao: 'Cada seção do site é projetada com gatilhos de persuasão, CTAs estratégicos e fluxo de navegação focado em gerar leads.',
        icone: 'funnel',
      },
      {
        titulo: 'Integração com CRM',
        descricao: 'Formulários conectados diretamente ao GoHighLevel para que cada lead entre automaticamente no seu pipeline de vendas.',
        icone: 'bot',
      },
      {
        titulo: 'Rastreamento Completo',
        descricao: 'Google Analytics 4, pixels de conversão e eventos personalizados para você saber exatamente de onde vêm seus resultados.',
        icone: 'mappin',
      },
    ],
    comoFunciona: [
      {
        passo: 1,
        titulo: 'Briefing Estratégico',
        descricao: 'Reunião inicial para entender seu negócio, público-alvo, concorrentes e objetivos de conversão. Mapeamos a jornada do cliente ideal.',
      },
      {
        passo: 2,
        titulo: 'Wireframe e Arquitetura',
        descricao: 'Criamos o wireframe com a estrutura de páginas, hierarquia de informações e pontos de conversão antes de iniciar o design.',
      },
      {
        passo: 3,
        titulo: 'Design e Prototipação',
        descricao: 'Desenvolvimento do layout completo com identidade visual, tipografia, paleta de cores e elementos gráficos para sua aprovação.',
      },
      {
        passo: 4,
        titulo: 'Desenvolvimento Next.js',
        descricao: 'Codificação do site em Next.js com SEO técnico, otimização de imagens, formulários integrados ao CRM e testes de performance.',
      },
      {
        passo: 5,
        titulo: 'Publicação e Monitoramento',
        descricao: 'Deploy em servidor de alta performance, configuração de domínio, SSL, analytics e acompanhamento pós-lançamento por 30 dias.',
      },
    ],
    // zerado em 31/out/2026: eram medias inventadas sem dado por tras
    resultados: [],
    faqs: [
      {
        pergunta: 'Qual a diferença entre um site Next.js e um site feito no Wix ou WordPress?',
        resposta: 'Next.js é uma tecnologia de código utilizada por empresas como Netflix e Nike. Enquanto plataformas como Wix geram código genérico e pesado, o Next.js permite controle total sobre performance, SEO e personalização. O resultado é um site até 5x mais rápido, melhor posicionado no Google e com taxa de conversão significativamente maior.',
      },
      {
        pergunta: 'Quanto tempo leva para ficar pronto?',
        resposta: 'O prazo médio é de 2 a 4 semanas dependendo da complexidade do projeto. Sites institucionais simples ficam prontos em cerca de 15 dias, enquanto landing pages de alta conversão com funil integrado podem levar até 4 semanas. Trabalhamos com cronograma claro desde o primeiro dia.',
      },
      {
        pergunta: 'O site já vem otimizado para o Google?',
        resposta: 'Sim, todos os nossos sites incluem SEO técnico completo: meta tags dinâmicas, schema markup estruturado, sitemap XML automático, URLs amigáveis, otimização de imagens e velocidade de carregamento. Isso garante que seu site esteja pronto para ranquear no Google desde o lançamento.',
      },
      {
        pergunta: 'Posso editar o conteúdo depois de pronto?',
        resposta: 'Sim, entregamos um painel administrativo intuitivo onde você pode atualizar textos, imagens e informações de contato sem precisar de conhecimento técnico. Além disso, oferecemos suporte contínuo para alterações mais complexas que envolvam estrutura ou funcionalidades.',
      },
      {
        pergunta: 'Vocês criam sites tanto em português quanto em inglês?',
        resposta: 'Sim, atendemos empreendedores brasileiros nos EUA que precisam de sites bilíngues. Criamos versões em português e inglês com estrutura SEO otimizada para cada idioma, garantindo que você alcance tanto a comunidade brasileira quanto o público americano local.',
      },
    ],
    casosDeUso: [
      'Empreendedores brasileiros em Massachusetts que precisam de presença digital profissional para competir com negócios americanos',
      'Prestadores de serviço (dentistas, advogados, personal trainers) que querem um site que gere agendamentos automaticamente',
      'Donos de restaurantes e food trucks brasileiros nos EUA que precisam de cardápio online e pedidos integrados',
      'Profissionais liberais no Brasil que querem lançar seu negócio digital com um site de alta conversão',
      'Empresas que já têm site mas estão insatisfeitas com a velocidade, design ou resultados de conversão',
    ],
    conteudoSEO: 'Ter um site profissional não é mais diferencial — é requisito mínimo para qualquer negócio que deseja crescer nos Estados Unidos ou no Brasil. Na Calazans Lumina, desenvolvemos sites e landing pages utilizando Next.js, a mesma base usada por grandes empresas, com performance de carregamento, SEO técnico avançado e design que transmite credibilidade desde o primeiro segundo.\n\nPara empreendedores brasileiros em Massachusetts e em todo o território americano, um site lento ou com aparência amadora pode significar perder clientes para concorrentes locais todos os dias. Nossos sites abrem rápido (o tempo de cada um está medido e publicado no portfólio) e são construídos com arquitetura de conversão — cada seção, botão e formulário é pensado para transformar visitantes em leads qualificados.\n\nEntendemos os desafios únicos de quem empreende longe de casa: a necessidade de sites bilíngues, a importância de aparecer nas buscas locais e a urgência de converter cada visitante em oportunidade de negócio.\n\nNosso processo inclui briefing estratégico, wireframe detalhado, design premium, desenvolvimento em código limpo e otimizado, integração com CRM e acompanhamento pós-lançamento. Não usamos templates genéricos — cada site é criado do zero para refletir a identidade e os objetivos do seu negócio. Se você quer parar de perder clientes por causa de um site que não converte, a Calazans Lumina é o parceiro certo para transformar sua presença digital.',
  },
  {
    slug: 'funis-automacao-ghl',
    nome: 'Funis de Vendas & Automação GHL',
    descricaoCurta: 'Funis inteligentes no GoHighLevel que captam, nutrem e convertem leads no automático',
    descricaoLonga: 'Criamos funis de vendas completos dentro do GoHighLevel: landing pages de captura, pipelines visuais, inbox unificada (WhatsApp + SMS + email + DMs numa tela só), workflows automáticos de follow-up, calendário de agendamento e dashboards de performance. Seu processo de vendas funciona 24h enquanto você foca no que importa.',
    icone: 'funnel',
    dores: [
      'Lead chega pelo WhatsApp e some porque ninguém respondeu a tempo',
      'Processo de vendas 100% manual e dependente de você',
      'Não sabe quantos leads entram por mês nem de onde vêm',
      'Mensagens espalhadas entre WhatsApp, email, Instagram — impossível acompanhar',
      'Já tentou CRM mas era complicado demais e abandonou',
    ],
    solucao: 'Pipelines visuais no GoHighLevel com inbox unificada (WhatsApp, SMS, email, DMs), workflows automáticos de follow-up, calendário integrado com lembretes, formulários de captura e dashboards de performance em tempo real.',
    diferenciais: [
      'GoHighLevel — CRM, funil, agenda e automação numa plataforma só',
      'Inbox unificada — WhatsApp, SMS, email e DMs numa só tela',
      'Pipelines visuais — arraste leads entre etapas de vendas',
      'Workflows automáticos — follow-up por email, SMS e WhatsApp no piloto automático',
      'Calendário integrado — agendamento online com lembretes automáticos por WhatsApp',
      'Missed call text-back — liga e não atendeu? O sistema manda mensagem automática',
    ],
    cta: 'Quero automatizar meu processo de vendas',
    ctaTexto: 'Olá, quero saber mais sobre funis de vendas e automação GHL',
    metaTitle: 'Funis de Vendas & Automação GHL',
    metaDescription: 'Funis de vendas automatizados no GoHighLevel com email, SMS e WhatsApp. Capte, nutra e converta leads 24h por dia. Resultados reais para brasileiros nos EUA.',
    h1: 'Funis de Vendas Automatizados Que Vendem Enquanto Você Dorme',
    beneficios: [
      {
        titulo: 'Vendas no Piloto Automático',
        descricao: 'Seu funil trabalha 24 horas por dia captando leads, enviando sequências de nutrição e agendando reuniões sem intervenção manual.',
        icone: 'bot',
      },
      {
        titulo: 'Nutrição Multicanal',
        descricao: 'Sequências automatizadas por email, SMS e WhatsApp que mantêm o lead engajado até o momento da compra.',
        icone: 'share',
      },
      {
        titulo: 'Lead Scoring Inteligente',
        descricao: 'Sistema de pontuação que identifica automaticamente quais leads estão prontos para comprar, priorizando seu tempo de vendas.',
        icone: 'chart',
      },
      {
        titulo: 'Pipeline Visual Completo',
        descricao: 'Visualize cada lead no estágio exato do funil e saiba quantos estão em cada etapa do processo de compra.',
        icone: 'funnel',
      },
      {
        titulo: 'Agendamento Automático',
        descricao: 'Leads qualificados agendam direto na sua agenda sem troca de mensagens, eliminando idas e vindas desnecessárias.',
        icone: 'globe',
      },
      {
        titulo: 'Dashboards de Performance',
        descricao: 'Relatórios em tempo real com ROI, custo por lead, taxa de conversão e receita gerada por cada etapa do funil.',
        icone: 'mappin',
      },
    ],
    comoFunciona: [
      {
        passo: 1,
        titulo: 'Mapeamento do Funil',
        descricao: 'Analisamos seu processo de vendas atual, identificamos gargalos e desenhamos o funil ideal com todas as etapas de conversão.',
      },
      {
        passo: 2,
        titulo: 'Configuração no GoHighLevel',
        descricao: 'Criamos pipelines, automações, formulários, landing pages e integrações dentro da plataforma GHL com sua identidade visual.',
      },
      {
        passo: 3,
        titulo: 'Criação das Sequências',
        descricao: 'Desenvolvemos todas as sequências de email, SMS e WhatsApp com copywriting persuasivo e gatilhos de ação específicos.',
      },
      {
        passo: 4,
        titulo: 'Testes e Ativação',
        descricao: 'Testamos cada automação ponta a ponta simulando a jornada do lead, corrigimos ajustes finos e ativamos o funil completo.',
      },
      {
        passo: 5,
        titulo: 'Otimização Contínua',
        descricao: 'Monitoramos as métricas semanalmente, realizamos testes A/B nas sequências e otimizamos taxas de abertura, clique e conversão.',
      },
    ],
    // zerado em 31/out/2026: eram medias inventadas sem dado por tras
    resultados: [],
    faqs: [
      {
        pergunta: 'O que é GoHighLevel e por que vocês usam essa plataforma?',
        resposta: 'GoHighLevel é uma plataforma all-in-one que reúne CRM, automação de marketing, funis de venda, agendamento e comunicação multicanal em um só lugar. Escolhemos o GHL porque elimina a necessidade de contratar diversas ferramentas separadas, reduzindo custos e complexidade. É a mesma plataforma usada por agências de marketing de elite nos Estados Unidos.',
      },
      {
        pergunta: 'Preciso de conhecimento técnico para usar o funil depois de pronto?',
        resposta: 'Não. Entregamos o funil totalmente configurado e funcionando, com treinamento em vídeo personalizado para que você e sua equipe saibam acompanhar os resultados. O painel do GoHighLevel é intuitivo e você consegue visualizar leads, agendar e acompanhar o pipeline sem conhecimento técnico.',
      },
      {
        pergunta: 'Quanto tempo leva para o funil começar a gerar resultados?',
        resposta: 'O setup completo leva de 2 a 3 semanas. Após a ativação, os primeiros leads costumam chegar nos primeiros dias, especialmente quando combinado com estratégias de marketing digital. A otimização completa do funil com dados reais geralmente leva de 30 a 60 dias para atingir performance máxima.',
      },
      {
        pergunta: 'O funil funciona com WhatsApp Business nos EUA?',
        resposta: 'Sim, configuramos a integração com WhatsApp Business API, que funciona perfeitamente nos Estados Unidos. Isso é fundamental para empreendedores brasileiros que atendem a comunidade brasileira nos EUA, onde o WhatsApp é o canal de comunicação principal e preferido.',
      },
      {
        pergunta: 'Vocês também criam o conteúdo das sequências de email e SMS?',
        resposta: 'Sim, toda a copy das sequências é criada por nós com técnicas de persuasão e copywriting validadas. Desenvolvemos emails, mensagens de SMS e templates de WhatsApp personalizados para cada etapa do funil, respeitando o tom de voz da sua marca e as particularidades do seu público.',
      },
    ],
    casosDeUso: [
      'Clínicas de estética e salões de beleza brasileiros nos EUA que precisam automatizar agendamentos e follow-up de clientes',
      'Consultores e coaches que vendem programas de mentoria e precisam de um funil de lançamento estruturado',
      'Empresas de serviços (limpeza, construção, landscaping) que recebem muitos leads mas perdem vendas por falta de resposta rápida',
      'E-commerces que querem recuperar carrinho abandonado e nutrir leads com sequências automatizadas',
    ],
    conteudoSEO: 'Quantos clientes você perde por mês simplesmente porque não respondeu a tempo ou não fez follow-up? Para a maioria dos empreendedores brasileiros nos Estados Unidos, a resposta é assustadora. Sem um funil de vendas automatizado, cada lead que entra pelo WhatsApp, Instagram ou site depende exclusivamente do seu tempo e da sua memória — e isso é uma receita para perder dinheiro.\n\nNa Calazans Lumina, construímos funis de vendas completos dentro do GoHighLevel, a plataforma all-in-one mais utilizada por agências de marketing digital de alto nível nos EUA. Nossos funis captam leads automaticamente através de landing pages otimizadas, nutrem esses leads com sequências personalizadas de email, SMS e WhatsApp, e os conduzem até o agendamento ou a compra — tudo sem que você precise levantar um dedo.\n\nNosso diferencial está na integração completa: cada funil é conectado ao CRM, ao sistema de agendamento, aos canais de comunicação e aos relatórios de performance, criando um ecossistema de vendas que funciona 24 horas por dia.\n\nO resultado prático é transformador: empreendedores que antes dependiam 100% de indicações e do boca a boca passam a ter um fluxo previsível e escalável de novos clientes. Se você está cansado de trabalhar no operacional e quer que seu processo de vendas funcione enquanto você foca no que realmente importa, um funil automatizado é o investimento mais inteligente que você pode fazer no seu negócio.',
  },
  {
    slug: 'crm-ia-whatsapp',
    nome: 'CRM & IA Conversacional',
    descricaoCurta: 'CRM com pipeline visual, inbox unificada e robô de IA que atende seus clientes 24h',
    descricaoLonga: 'Implementamos um CRM completo no GoHighLevel com pipeline visual de vendas, inbox unificada (WhatsApp + SMS + email + Instagram DMs tudo numa tela), IA conversacional treinada com dados do seu negócio, calendário de agendamento com lembretes automáticos e gestão de reputação. Seu negócio nunca mais perde um cliente por demora no atendimento.',
    icone: 'bot',
    dores: [
      'Perde leads no WhatsApp porque demora para responder',
      'Mensagens espalhadas entre WhatsApp, email, Instagram — caos total',
      'Agenda bagunçada com horários conflitantes e no-shows',
      'Não sabe quantos clientes tem nem em que estágio estão',
      'Gasta horas respondendo as mesmas perguntas todo dia',
    ],
    solucao: 'CRM GoHighLevel com IA conversacional 24h treinada com dados do seu negócio, inbox unificada (WhatsApp + SMS + email + DMs numa tela só), pipeline visual de vendas, calendário integrado com lembretes por WhatsApp e gestão de reputação automática.',
    diferenciais: [
      'IA conversacional 24h — treinada com FAQs, preços e serviços do seu negócio',
      'Inbox unificada — WhatsApp, SMS, email, Instagram DMs e Facebook numa só tela',
      'Pipeline visual — arraste leads entre etapas com automações de movimentação',
      'Calendário integrado — agendamento online com lembretes por WhatsApp e SMS',
      'Missed call text-back — ligou e não atendeu? O sistema manda mensagem automática',
      'Gestão de reputação — solicite reviews no Google automaticamente após cada serviço',
    ],
    cta: 'Quero um robô respondendo por mim',
    ctaTexto: 'Olá, quero saber mais sobre CRM e IA conversacional',
    metaTitle: 'CRM com IA Conversacional para WhatsApp',
    metaDescription: 'CRM com inteligência artificial que responde seus clientes 24h no WhatsApp. Agendamento automático, follow-up e pipeline visual. Para brasileiros nos EUA.',
    h1: 'CRM Inteligente com IA Que Atende Seus Clientes 24 Horas por Dia',
    beneficios: [
      {
        titulo: 'Atendimento Instantâneo 24h',
        descricao: 'Seu robô de IA responde leads em menos de 30 segundos, qualquer hora do dia ou da noite, inclusive fins de semana e feriados.',
        icone: 'bot',
      },
      {
        titulo: 'Centralização de Canais',
        descricao: 'WhatsApp, Instagram Direct, Facebook Messenger e email reunidos em uma única caixa de entrada para gestão simplificada.',
        icone: 'share',
      },
      {
        titulo: 'Pipeline Visual de Vendas',
        descricao: 'Veja cada lead em qual etapa do processo está, do primeiro contato ao fechamento, com arrastar e soltar intuitivo.',
        icone: 'funnel',
      },
      {
        titulo: 'Follow-Up Automático',
        descricao: 'Sequências programadas garantem que nenhum lead fique sem resposta, reativando contatos que pararam de interagir.',
        icone: 'chart',
      },
      {
        titulo: 'Agendamento Inteligente',
        descricao: 'A IA verifica disponibilidade na sua agenda e marca consultas automaticamente, eliminando conflitos de horários.',
        icone: 'globe',
      },
      {
        titulo: 'Respostas Contextuais',
        descricao: 'A IA entende o contexto da conversa e personaliza respostas com base nos serviços, preços e informações do seu negócio.',
        icone: 'mappin',
      },
    ],
    comoFunciona: [
      {
        passo: 1,
        titulo: 'Levantamento de Informações',
        descricao: 'Coletamos todas as informações do seu negócio: serviços, preços, horários, perguntas frequentes e tom de voz para treinar a IA.',
      },
      {
        passo: 2,
        titulo: 'Configuração do CRM',
        descricao: 'Estruturamos seu pipeline de vendas no GoHighLevel com etapas personalizadas, tags, automações e campos customizados.',
      },
      {
        passo: 3,
        titulo: 'Treinamento da IA',
        descricao: 'Alimentamos o robô de IA com a base de conhecimento do seu negócio e configuramos fluxos conversacionais para cada cenário de atendimento.',
      },
      {
        passo: 4,
        titulo: 'Integração de Canais',
        descricao: 'Conectamos WhatsApp Business, Instagram, Facebook e email ao CRM para que todas as conversas fiquem centralizadas.',
      },
      {
        passo: 5,
        titulo: 'Ativação e Ajuste Fino',
        descricao: 'Ativamos a IA em ambiente real, monitoramos as primeiras conversas e refinamos as respostas para garantir naturalidade e precisão.',
      },
    ],
    // zerado em 31/out/2026: eram medias inventadas sem dado por tras
    resultados: [],
    faqs: [
      {
        pergunta: 'A IA consegue responder perguntas específicas sobre meu negócio?',
        resposta: 'Sim, treinamos a IA com todas as informações do seu negócio: serviços oferecidos, preços, horários de funcionamento, localização, formas de pagamento e perguntas frequentes. Ela responde de forma personalizada e contextual, como se fosse um atendente bem treinado da sua equipe.',
      },
      {
        pergunta: 'O robô substitui completamente o atendimento humano?',
        resposta: 'Não, a IA é projetada para lidar com o atendimento inicial, responder dúvidas comuns, qualificar leads e agendar consultas. Quando a conversa exige intervenção humana, como negociações complexas ou reclamações, o sistema transfere automaticamente para você ou sua equipe com todo o histórico da conversa.',
      },
      {
        pergunta: 'Funciona com WhatsApp Business nos Estados Unidos?',
        resposta: 'Sim, utilizamos a API oficial do WhatsApp Business que funciona perfeitamente nos EUA. Isso é essencial para empreendedores brasileiros em Massachusetts e outros estados, já que o WhatsApp é o principal canal de comunicação da comunidade brasileira nos Estados Unidos.',
      },
      {
        pergunta: 'Quanto custa manter a IA funcionando por mês?',
        resposta: 'O custo mensal depende do volume de conversas e das integrações necessárias. Apresentamos os valores detalhados durante a consulta inicial. O investimento se paga rapidamente, considerando que você para de perder leads por demora no atendimento e economiza dezenas de horas por mês em trabalho manual.',
      },
      {
        pergunta: 'Posso ver o histórico de todas as conversas da IA?',
        resposta: 'Sim, todas as conversas ficam registradas no CRM com histórico completo. Você pode acompanhar cada interação, ver métricas de atendimento, identificar padrões nas perguntas dos clientes e usar esses dados para melhorar seus serviços e comunicação continuamente.',
      },
    ],
    casosDeUso: [
      'Clínicas odontológicas e médicas brasileiras nos EUA que recebem alto volume de mensagens e precisam agendar consultas automaticamente',
      'Salões de beleza e barbearias que perdem clientes porque demoram para responder no WhatsApp durante o horário de atendimento',
      'Imobiliárias e corretores brasileiros nos EUA que precisam qualificar leads automaticamente antes do atendimento humano',
      'Escritórios de contabilidade e advocacia que recebem as mesmas perguntas repetidamente e querem automatizar o primeiro contato',
      'Lojas e restaurantes brasileiros que querem oferecer atendimento 24h sem aumentar a equipe',
    ],
    conteudoSEO: 'No mercado americano, a velocidade de resposta pode ser a diferença entre fechar um cliente ou perdê-lo para o concorrente. Estudos mostram que leads respondidos nos primeiros 5 minutos têm 21 vezes mais chance de conversão — e a maioria dos empreendedores brasileiros nos EUA demora horas ou até dias para responder mensagens no WhatsApp. É aí que entra o CRM com IA conversacional da Calazans Lumina.\n\nNossa solução combina o poder do GoHighLevel como CRM completo com inteligência artificial treinada especificamente para o seu negócio. O resultado é um sistema que responde leads em menos de 30 segundos, 24 horas por dia, 7 dias por semana. A IA entende o contexto da conversa, responde perguntas sobre seus serviços e preços, qualifica o lead e agenda consultas automaticamente na sua agenda — tudo isso enquanto você está atendendo outros clientes ou dormindo.\n\nPara a comunidade brasileira em Massachusetts e nos Estados Unidos, o WhatsApp é o canal número um de comunicação. Por isso, nossa IA é configurada para operar nativamente no WhatsApp Business API, além de Instagram Direct, Facebook Messenger e email. Todas as conversas ficam centralizadas em um único painel, com pipeline visual que mostra exatamente onde cada lead está no processo de vendas.\n\nO treinamento inclui todas as informações sobre seus serviços, preços, diferenciais, horários e tom de voz. O resultado é um atendimento automatizado que parece humano, é eficiente e nunca perde um lead por falta de resposta.',
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
    metaTitle: 'Gestão de Redes Sociais para Brasileiros',
    metaDescription: 'Gestão estratégica de Instagram e Facebook em português. Conteúdo profissional, reels, stories e crescimento orgânico para empreendedores brasileiros nos EUA.',
    h1: 'Gestão de Redes Sociais Que Transforma Seguidores em Clientes Reais',
    beneficios: [
      {
        titulo: 'Conteúdo Estratégico',
        descricao: 'Cada post é planejado com objetivo de negócio claro: educar, engajar, gerar autoridade ou converter seguidores em clientes.',
        icone: 'chart',
      },
      {
        titulo: 'Identidade Visual Consistente',
        descricao: 'Design profissional com paleta de cores, tipografia e elementos visuais padronizados que fortalecem o reconhecimento da sua marca.',
        icone: 'globe',
      },
      {
        titulo: 'Reels e Stories Profissionais',
        descricao: 'Produção e edição de reels e stories com tendências atuais, legendas otimizadas e formatos que o algoritmo prioriza na entrega.',
        icone: 'share',
      },
      {
        titulo: 'Calendário Editorial Completo',
        descricao: 'Planejamento mensal de conteúdo com mix estratégico de posts de valor, autoridade, bastidores, depoimentos e ofertas.',
        icone: 'funnel',
      },
      {
        titulo: 'Crescimento Orgânico Real',
        descricao: 'Estratégias de hashtags, colaborações, interação com comunidade e SEO de Instagram para atrair seguidores qualificados.',
        icone: 'mappin',
      },
      {
        titulo: 'Bilíngue Português e Inglês',
        descricao: 'Conteúdo adaptado para alcançar tanto a comunidade brasileira nos EUA quanto o público americano local.',
        icone: 'bot',
      },
    ],
    comoFunciona: [
      {
        passo: 1,
        titulo: 'Imersão na Marca',
        descricao: 'Conhecemos profundamente seu negócio, público-alvo, concorrentes e diferenciais para construir uma estratégia de conteúdo personalizada.',
      },
      {
        passo: 2,
        titulo: 'Planejamento Mensal',
        descricao: 'Criamos o calendário editorial do mês com temas, formatos (carrossel, reel, story, post estático), copies e datas de publicação.',
      },
      {
        passo: 3,
        titulo: 'Criação de Conteúdo',
        descricao: 'Desenvolvemos os designs, editamos vídeos, escrevemos legendas persuasivas e preparamos hashtags otimizadas para cada publicação.',
      },
      {
        passo: 4,
        titulo: 'Publicação e Interação',
        descricao: 'Publicamos nos melhores horários do seu público, respondemos comentários estratégicos e gerenciamos interações para aumentar o engajamento.',
      },
      {
        passo: 5,
        titulo: 'Análise e Otimização',
        descricao: 'Relatório mensal com métricas de alcance, engajamento, crescimento e leads gerados, ajustando a estratégia para o mês seguinte.',
      },
    ],
    // zerado em 31/out/2026: eram medias inventadas sem dado por tras
    resultados: [],
    faqs: [
      {
        pergunta: 'Quantos posts por mês estão inclusos na gestão?',
        resposta: 'Nossos planos incluem de 12 a 20 posts por mês, dependendo do pacote escolhido. Isso inclui feed posts (carrosséis, imagens estáticas, reels) e stories. Cada publicação vem com design profissional, legenda estratégica e hashtags otimizadas. O volume exato é definido na reunião de planejamento inicial.',
      },
      {
        pergunta: 'Vocês criam conteúdo em português e inglês?',
        resposta: 'Sim, produzimos conteúdo bilíngue para empreendedores brasileiros nos EUA que atendem tanto a comunidade brasileira quanto o público americano. Adaptamos tom de voz, referências culturais e estratégia para cada idioma, garantindo autenticidade e relevância nos dois públicos.',
      },
      {
        pergunta: 'Preciso fornecer fotos e vídeos?',
        resposta: 'Recomendamos que você forneça fotos e vídeos do dia a dia do negócio (bastidores, atendimentos, produtos) para tornar o conteúdo mais autêntico. Porém, também trabalhamos com banco de imagens profissionais, design gráfico e edição de vídeo para complementar quando necessário.',
      },
      {
        pergunta: 'Vocês também gerenciam a interação com seguidores?',
        resposta: 'Sim, fazemos gestão de interação que inclui resposta a comentários estratégicos, interação com perfis do público-alvo e monitoramento de menções à marca. Para mensagens diretas que envolvem vendas ou atendimento, direcionamos para o seu CRM ou equipe de atendimento.',
      },
      {
        pergunta: 'Em quanto tempo vejo resultados no Instagram?',
        resposta: 'O crescimento orgânico é um trabalho de médio prazo. Nos primeiros 30 dias você já nota melhoria visual e de organização. Entre 60 e 90 dias o engajamento e alcance aumentam significativamente. Resultados consistentes de geração de leads via orgânico geralmente aparecem a partir do terceiro mês de gestão.',
      },
    ],
    casosDeUso: [
      'Empreendedoras brasileiras nos EUA que são a cara do negócio e precisam construir marca pessoal forte no Instagram',
      'Restaurantes e food trucks brasileiros que precisam de conteúdo visual atrativo e constante para atrair novos clientes',
      'Profissionais de beleza (nail designers, cabeleireiras, esteticistas) que dependem do Instagram como vitrine de trabalho',
      'Consultórios e clínicas que querem se posicionar como autoridade no segmento através de conteúdo educativo',
    ],
    conteudoSEO: 'Para empreendedores brasileiros nos Estados Unidos, o Instagram e o Facebook não são apenas redes sociais — são as principais vitrines do negócio. A comunidade brasileira nos EUA é extremamente ativa nessas plataformas, e a falta de uma presença profissional e estratégica significa perder visibilidade para concorrentes que investem em conteúdo de qualidade todos os dias.\n\nNa Calazans Lumina, fazemos gestão de redes sociais com foco em resultado, não em vaidade. Cada post publicado tem um objetivo claro de negócio: educar seu público sobre seus serviços, construir autoridade no seu nicho, gerar engajamento que amplia alcance ou converter seguidores em leads e clientes. Nosso calendário editorial é estruturado com mix estratégico de conteúdos de valor, bastidores, depoimentos de clientes, ofertas e tendências do momento.\n\nO diferencial da Calazans Lumina está na compreensão profunda do público brasileiro nos EUA. Rhaideline Calazans é brasileira e atende clientes em Massachusetts e em todo o Brasil, entendendo as nuances culturais, o sotaque bilíngue das redes sociais e as necessidades reais de quem empreende longe de casa. Nosso conteúdo é produzido em português com a possibilidade de adaptação para inglês, atingindo tanto a comunidade brasileira quanto o mercado americano local.\n\nEntregamos relatórios mensais detalhados com métricas reais de engajamento, crescimento e leads gerados para que você acompanhe o retorno do investimento de forma clara e objetiva.',
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
    metaTitle: 'Google Business Profile para Brasileiros',
    metaDescription: 'Criação e otimização do Google Business Profile para brasileiros nos EUA. Apareça no Google Maps, conquiste avaliações 5 estrelas e domine as buscas locais.',
    h1: 'Google Business Profile: Apareça no Topo das Buscas Locais e no Google Maps',
    beneficios: [
      {
        titulo: 'Visibilidade no Google Maps',
        descricao: 'Seu negócio aparece para clientes que estão buscando seus serviços agora mesmo na sua região, com informações completas e atualizadas.',
        icone: 'mappin',
      },
      {
        titulo: 'Reputação com Avaliações 5 Estrelas',
        descricao: 'Sistema estratégico para pedir avaliação a todo cliente atendido, construindo uma reputação online sólida e confiável.',
        icone: 'chart',
      },
      {
        titulo: 'Postagens Semanais no GBP',
        descricao: 'Publicações regulares mantêm seu perfil ativo e relevante para o algoritmo do Google, aumentando sua posição nas buscas locais.',
        icone: 'globe',
      },
      {
        titulo: 'Categorias e Atributos Otimizados',
        descricao: 'Seleção estratégica de categorias primárias e secundárias que maximizam a visibilidade para as buscas mais relevantes do seu negócio.',
        icone: 'funnel',
      },
      {
        titulo: 'Fotos Profissionais do Negócio',
        descricao: 'Perfil com fotos reais do trabalho, que mostram quem você é antes da primeira ligação.',
        icone: 'share',
      },
      {
        titulo: 'Insights e Monitoramento',
        descricao: 'Acompanhamento mensal de quantas pessoas encontram, visualizam, ligam e pedem rota para seu negócio pelo Google.',
        icone: 'bot',
      },
    ],
    comoFunciona: [
      {
        passo: 1,
        titulo: 'Auditoria do Perfil Atual',
        descricao: 'Analisamos seu perfil existente no Google (ou verificamos se já existe um reivindicável) e identificamos todas as oportunidades de otimização.',
      },
      {
        passo: 2,
        titulo: 'Criação ou Otimização Completa',
        descricao: 'Preenchemos todas as informações: nome, endereço, telefone, categorias, atributos, descrição otimizada, horários, área de cobertura e fotos.',
      },
      {
        passo: 3,
        titulo: 'Estratégia de Reviews',
        descricao: 'Implementamos um sistema para pedir avaliação a cada cliente atendido, com link direto, templates de mensagem e acompanhamento.',
      },
      {
        passo: 4,
        titulo: 'Postagens e Conteúdo',
        descricao: 'Criamos e publicamos posts semanais no Google Business Profile com novidades, ofertas, eventos e conteúdo relevante do seu negócio.',
      },
      {
        passo: 5,
        titulo: 'Monitoramento e Relatórios',
        descricao: 'Acompanhamos insights mensais de visualizações, cliques, ligações, rotas e posicionamento, ajustando a estratégia conforme necessário.',
      },
    ],
    // zerado em 31/out/2026: eram medias inventadas sem dado por tras
    resultados: [],
    faqs: [
      {
        pergunta: 'Preciso ter endereço físico para ter um Google Business Profile?',
        resposta: 'Não necessariamente. Se você atende clientes no local (loja, clínica, restaurante), o endereço aparece no perfil. Mas se você presta serviço na casa do cliente ou online, é possível configurar uma "área de cobertura" sem mostrar o endereço. Analisamos seu caso específico para definir a melhor configuração.',
      },
      {
        pergunta: 'Já tenho um perfil mas nunca otimizei. Vocês ajudam?',
        resposta: 'Sim, fazemos auditoria completa do perfil existente e otimizamos todas as informações: categorias estratégicas, descrição com palavras-chave, fotos profissionais, atributos, horários e muito mais. Muitos negócios têm perfis incompletos que estão perdendo oportunidades de aparecer nas buscas locais todos os dias.',
      },
      {
        pergunta: 'Como vocês ajudam a conseguir mais avaliações?',
        resposta: 'Implementamos um sistema automatizado que envia link direto de avaliação para cada cliente atendido, no momento certo, via WhatsApp ou SMS. Também fornecemos QR codes para o estabelecimento e templates de mensagem. O importante é que todas as avaliações são genuínas — nunca usamos avaliações falsas, pois isso pode resultar em penalização do Google.',
      },
      {
        pergunta: 'Em quanto tempo meu negócio aparece no Google Maps?',
        resposta: 'Após a verificação do perfil pelo Google (que leva de 3 a 14 dias via cartão postal ou telefone), seu negócio já aparece no Maps. A otimização para ganhar posições nas buscas locais é um processo contínuo que mostra resultados progressivos nas primeiras 4 a 8 semanas.',
      },
      {
        pergunta: 'Por que o Google Business Profile é tão importante para brasileiros nos EUA?',
        resposta: 'Porque o Google Maps é a principal ferramenta de busca local nos Estados Unidos. Quando um brasileiro em Massachusetts procura "restaurante brasileiro perto de mim" ou "nail salon near me", o Google mostra os resultados do Maps primeiro. Se seu negócio não está lá ou está mal otimizado, você está invisível para milhares de clientes potenciais.',
      },
    ],
    casosDeUso: [
      'Restaurantes e padarias brasileiras nos EUA que dependem de clientes locais encontrando o negócio no Google Maps',
      'Prestadores de serviço (encanadores, eletricistas, house cleaners) que atendem por área de cobertura e precisam aparecer nas buscas "perto de mim"',
      'Clínicas, consultórios e escritórios que recebem clientes no local e querem mais ligações e visitas pelo Google',
      'Negócios recém-abertos nos EUA que ainda não têm presença digital e precisam ser encontrados rapidamente',
      'Empreendedores com perfil existente mas mal otimizado que estão perdendo posições para concorrentes na mesma região',
    ],
    conteudoSEO: 'Nos Estados Unidos, 46% de todas as buscas no Google têm intenção local. Isso significa que quase metade das pessoas que pesquisam algo no Google estão procurando um negócio perto delas — e o Google Business Profile é a ferramenta que determina se o seu negócio aparece nessas buscas ou se o cliente vai para o concorrente. Para empreendedores brasileiros em Massachusetts, ter um perfil otimizado no Google não é opcional — é essencial para sobreviver.\n\nNa Calazans Lumina, oferecemos criação e otimização completa do Google Business Profile com foco em resultados mensuráveis. Configuramos categorias estratégicas que alinham seu negócio com os termos de busca mais relevantes, escrevemos descrições otimizadas com palavras-chave locais, adicionamos fotos profissionais que aumentam cliques e implementamos um sistema consistente de captação de avaliações genuínas.\n\nO diferencial para brasileiros nos EUA é ainda mais crítico. A comunidade brasileira busca ativamente serviços de outros brasileiros no Google Maps: "dentista brasileiro em Framingham", "restaurante brasileiro em Boston", "house cleaner brasileira em Marlborough". Se seu perfil não está configurado e otimizado para aparecer nessas buscas, você está literalmente perdendo clientes que estão procurando exatamente o que você oferece.\n\nRhaideline Calazans, fundadora da Calazans Lumina, é brasileira e atende clientes em Massachusetts e em todo o Brasil, entendendo profundamente o comportamento de busca da comunidade brasileira. Além da configuração inicial, mantemos seu perfil ativo com postagens semanais, monitoramento de reviews e relatórios mensais de insights para que você acompanhe o impacto real no seu negócio.',
  },
  {
    slug: 'gohighlevel',
    nome: 'GoHighLevel',
    descricaoCurta: 'Sub-conta GoHighLevel montada do zero, e operação white-label para agências que já usam a plataforma',
    descricaoLonga: 'Monto a sub-conta GoHighLevel inteira para a sua empresa: CRM com pipeline, chatbot com inteligência artificial no WhatsApp, calendário de agendamento com lembretes, follow-up automático e campanhas de e-mail e SMS. E atendo também agências que já têm a conta e precisam de quem execute: automação, treinamento de robô, setup de sub-account, funil e integração, tudo em white-label, com a marca da agência na frente.',
    icone: 'layers',
    dores: [
      'Assinou o GoHighLevel e a conta continua vazia meses depois',
      'Automação montada pela metade que dispara na hora errada',
      'Chatbot que responde qualquer coisa porque nunca foi treinado no negócio',
      'Agência com cliente esperando o setup e ninguém disponível para executar',
      'Cada cliente com uma estrutura diferente, impossível de manter e de repassar',
    ],
    solucao: 'Sub-conta configurada do zero e entregue funcionando, ou execução white-label do operacional de GoHighLevel para agências, com pagamento em taxa de configuração mais mensalidade de manutenção.',
    diferenciais: [
      'Sub-conta pronta — CRM, pipeline, chatbot com IA, calendário, follow-up e campanhas configurados',
      'Robô treinado no seu negócio — FAQ, serviços e preços, não resposta genérica de bot',
      'Qualquer nicho — clínica, construction, energia solar, pintura, limpeza, serviço em geral',
      'White-label para agências — quem aparece para o cliente final é a agência, nunca eu',
      'Entrega em 5 a 7 dias úteis para a sub-conta completa, 1 a 2 dias para tarefa pontual',
    ],
    cta: 'Quero minha sub-conta GoHighLevel',
    ctaTexto: 'Olá, quero saber mais sobre a sub-conta GoHighLevel',
    metaTitle: 'GoHighLevel: Sub-conta Pronta e Freelancer GHL | Calazans Lumina',
    metaDescription: 'Sub-conta GoHighLevel montada do zero com CRM, chatbot de IA no WhatsApp, agendamento e follow-up. E operação white-label para agências que já usam a plataforma.',
    h1: 'GoHighLevel: a sub-conta montada do zero, e o operacional da sua agência resolvido',
    beneficios: [
      {
        titulo: 'CRM com pipeline de verdade',
        descricao: 'Contato, negócio e tarefa em um lugar só, com o estágio de cada oportunidade visível. Você para de descobrir pelo WhatsApp que o lead esfriou.',
        icone: 'chart',
      },
      {
        titulo: 'Chatbot com IA treinado no seu negócio',
        descricao: 'O robô responde em segundos, em português, com a informação do seu serviço e do seu preço, e passa para humano com o histórico junto quando o assunto exige.',
        icone: 'bot',
      },
      {
        titulo: 'Agendamento com lembrete automático',
        descricao: 'Calendário conectado ao CRM, com confirmação e lembrete disparados sozinhos. Menos horário vago por esquecimento do cliente.',
        icone: 'funnel',
      },
      {
        titulo: 'Follow-up que não depende de você',
        descricao: 'Sequência por WhatsApp, e-mail e SMS que continua atrás do lead até virar conversa ou até a pessoa dizer não.',
        icone: 'share',
      },
      {
        titulo: 'Inbox unificada',
        descricao: 'WhatsApp, SMS, e-mail e mensagem de rede social chegando na mesma tela, com histórico por contato. Nada se perde entre aplicativos.',
        icone: 'globe',
      },
      {
        titulo: 'White-label para agências',
        descricao: 'Eu executo, a agência entrega. O cliente final vê a marca da agência do começo ao fim, e a agência ganha capacidade sem contratar.',
        icone: 'layers',
      },
    ],
    comoFunciona: [
      {
        passo: 1,
        titulo: 'Conversa de diagnóstico',
        descricao: 'Entendo o negócio, o funil que existe hoje, de onde vem o lead, quem atende e onde ele está sumindo. É essa conversa que define o que a sub-conta precisa ter.',
      },
      {
        passo: 2,
        titulo: 'Estrutura do CRM',
        descricao: 'Monto pipeline, estágios, campos personalizados, tags e a organização dos contatos, no formato que o seu processo de venda realmente usa.',
      },
      {
        passo: 3,
        titulo: 'Automação e robô',
        descricao: 'Configuro os workflows de follow-up, as campanhas de e-mail e SMS, e treino o chatbot com o FAQ, os serviços e as regras de atendimento do negócio.',
      },
      {
        passo: 4,
        titulo: 'Agendamento e integrações',
        descricao: 'Ligo o calendário, os lembretes, o formulário do site e o que mais precisar conversar com a conta, como Google Business Profile e Meta.',
      },
      {
        passo: 5,
        titulo: 'Entrega e manutenção',
        descricao: 'Entrego funcionando, com passagem de conhecimento. A mensalidade cobre manutenção, ajuste e atualização conforme o negócio muda.',
      },
    ],
    resultados: [
      { numero: '5–7', label: 'Dias úteis para a sub-conta completa' },
      { numero: '1–2', label: 'Dias para uma tarefa pontual de workflow' },
      { numero: '24', label: 'Horas por dia com o robô atendendo', sufixo: 'h' },
      { numero: '100', label: 'White-label: a agência aparece, eu não', sufixo: '%' },
    ],
    faqs: [
      {
        pergunta: 'O que vem dentro da sub-conta GoHighLevel?',
        resposta: 'Chatbot com inteligência artificial no WhatsApp, follow-up automático, CRM com pipeline de vendas, calendário de agendamento com lembretes, campanhas de e-mail e SMS e dashboard de métricas. Funil e landing page são opcionais e entram a critério do cliente.',
      },
      {
        pergunta: 'Como funciona o pagamento?',
        resposta: 'Em duas partes: uma taxa única de configuração, que cobre o setup inicial com todas as automações, e uma mensalidade de manutenção, suporte e atualização. Os valores dependem do escopo e saem em proposta.',
      },
      {
        pergunta: 'Quanto tempo leva o setup?',
        resposta: 'Uma sub-conta completa, com CRM, automações, chatbot e agendamento, leva em média de 5 a 7 dias úteis. Tarefa pontual, como criar um workflow ou um template, leva de 1 a 2 dias.',
      },
      {
        pergunta: 'Trabalha para agências que já têm GoHighLevel?',
        resposta: 'Sim. Faço o operacional em white-label: configuração de automações, treinamento de chatbot com IA, setup de sub-accounts, funis, CRM e integrações. Quem aparece para o cliente final é a agência.',
      },
      {
        pergunta: 'Serve para o meu nicho?',
        resposta: 'Serve para qualquer negócio que dependa de responder lead rápido e não perder o follow-up. Já montei para clínica, construction, energia solar, pintura, limpeza e serviço em geral. O que muda é o treinamento do robô e o desenho do pipeline, não a estrutura.',
      },
    ],
    casosDeUso: [
      'Empresa que assinou o GoHighLevel, não conseguiu configurar e está pagando por uma conta parada',
      'Prestador de serviço que perde cliente porque demora horas para responder o WhatsApp',
      'Clínica ou consultório com agenda furada por falta de confirmação e lembrete automático',
      'Agência de marketing com cliente esperando setup e sem alguém interno para executar',
      'Agência que quer oferecer GoHighLevel sem montar equipe própria de operação',
    ],
    conteudoSEO: 'GoHighLevel junta CRM, funil, automação, agendamento, inbox e campanha num lugar só. O problema quase nunca é a ferramenta: é que ela chega vazia. Quem assina descobre que precisa desenhar pipeline, escrever workflow, treinar robô, ligar calendário e integrar formulário antes de qualquer coisa começar a funcionar, e a conta fica meses parada gerando mensalidade sem gerar cliente.\n\nO trabalho aqui é justamente esse. Monto a sub-conta inteira: pipeline no formato do seu processo de venda, campos e tags que fazem sentido para o seu negócio, follow-up automático por WhatsApp, e-mail e SMS, calendário com confirmação e lembrete, campanhas prontas e um chatbot com inteligência artificial treinado no seu FAQ, nos seus serviços e nas suas regras de atendimento. A entrega é a conta funcionando, não um manual.\n\nPara quem vende serviço, isso resolve uma dor bem específica. O lead chega pelo celular, no meio do trabalho, e quem responde em minutos fecha. Quem responde à noite encontra o cliente já fechado com outro. Um robô que atende em português 24 horas por dia, qualifica e agenda, transforma o horário em que você está trabalhando em horário de venda.\n\nPara agências, o serviço é outro. Muita agência vende GoHighLevel e trava na execução, porque montar sub-account é trabalho técnico e repetitivo que consome a equipe. Atuo em white-label: executo automação, treinamento de chatbot, setup de sub-account, funil, CRM e integração, e quem aparece para o cliente final é sempre a agência. Isso dá capacidade de entrega sem contratar, e prazo curto, porque tarefa pontual sai em um a dois dias.\n\nO modelo comercial está declarado de propósito: taxa única de configuração mais mensalidade de manutenção. A taxa cobre o setup completo, a mensalidade cobre suporte, ajuste e a atualização que o negócio vai precisando conforme cresce. Escopo, prazo e valor saem em proposta, porque conta de clínica não é conta de contractor.',
  },
]

export function getServicoBySlug(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug)
}
