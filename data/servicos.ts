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
    metaTitle: 'Sites & Landing Pages de Alta Conversão | Calazans Lumina',
    metaDescription: 'Criamos sites e landing pages em Next.js com PageSpeed 95+, SEO técnico e design premium. Mais de 8 anos transformando negócios brasileiros nos EUA e no Brasil.',
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
    resultados: [
      { numero: '95', label: 'PageSpeed Score', sufixo: '+' },
      { numero: '3', label: 'Tempo médio de entrega', sufixo: ' semanas' },
      { numero: '68', label: 'Aumento médio em conversões', sufixo: '%' },
      { numero: '150', label: 'Sites entregues', sufixo: '+' },
    ],
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
    conteudoSEO: 'Ter um site profissional não é mais diferencial — é requisito mínimo para qualquer negócio que deseja crescer nos Estados Unidos ou no Brasil. Na Calazans Lumina, desenvolvemos sites e landing pages utilizando Next.js, a mesma tecnologia empregada por gigantes como Netflix, Nike e TikTok, garantindo performance de carregamento, SEO técnico avançado e design que transmite credibilidade desde o primeiro segundo.\n\nPara empreendedores brasileiros em Massachusetts e em todo o território americano, um site lento ou com aparência amadora pode significar perder clientes para concorrentes locais todos os dias. Nossos sites alcançam PageSpeed 95+ de forma consistente, carregam em menos de 2 segundos e são construídos com arquitetura de conversão — cada seção, botão e formulário é pensado para transformar visitantes em leads qualificados.\n\nRhaideline Calazans, fundadora da agência, traz mais de 8 anos de experiência em marketing digital e tecnologia, tendo ajudado centenas de empreendedores brasileiros a estabelecer sua presença digital nos EUA. Entendemos os desafios únicos de quem empreende longe de casa: a necessidade de sites bilíngues, a importância de aparecer nas buscas locais e a urgência de converter cada visitante em oportunidade de negócio.\n\nNosso processo inclui briefing estratégico, wireframe detalhado, design premium, desenvolvimento em código limpo e otimizado, integração com CRM e acompanhamento pós-lançamento. Não usamos templates genéricos — cada site é criado do zero para refletir a identidade e os objetivos do seu negócio. Se você quer parar de perder clientes por causa de um site que não converte, a Calazans Lumina é o parceiro certo para transformar sua presença digital.',
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
      'GoHighLevel — a plataforma all-in-one que substitui 10+ ferramentas',
      'Inbox unificada — WhatsApp, SMS, email e DMs numa só tela',
      'Pipelines visuais — arraste leads entre etapas de vendas',
      'Workflows automáticos — follow-up por email, SMS e WhatsApp no piloto automático',
      'Calendário integrado — agendamento online com lembretes automáticos por WhatsApp',
      'Missed call text-back — liga e não atendeu? O sistema manda mensagem automática',
    ],
    cta: 'Quero automatizar meu processo de vendas',
    ctaTexto: 'Olá, quero saber mais sobre funis de vendas e automação GHL',
    metaTitle: 'Funis de Vendas & Automação GHL | Calazans Lumina',
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
    resultados: [
      { numero: '47', label: 'Aumento médio na taxa de conversão', sufixo: '%' },
      { numero: '85', label: 'Taxa de follow-up automático', sufixo: '%' },
      { numero: '3x', label: 'Mais leads qualificados por mês' },
      { numero: '12', label: 'Horas economizadas por semana', sufixo: 'h' },
    ],
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
        resposta: 'O setup completo leva de 2 a 3 semanas. Após a ativação, os primeiros leads costumam chegar nos primeiros dias, especialmente quando combinado com tráfego pago. A otimização completa do funil com dados reais geralmente leva de 30 a 60 dias para atingir performance máxima.',
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
    conteudoSEO: 'Quantos clientes você perde por mês simplesmente porque não respondeu a tempo ou não fez follow-up? Para a maioria dos empreendedores brasileiros nos Estados Unidos, a resposta é assustadora. Sem um funil de vendas automatizado, cada lead que entra pelo WhatsApp, Instagram ou site depende exclusivamente do seu tempo e da sua memória — e isso é uma receita para perder dinheiro.\n\nNa Calazans Lumina, construímos funis de vendas completos dentro do GoHighLevel, a plataforma all-in-one mais utilizada por agências de marketing digital de alto nível nos EUA. Nossos funis captam leads automaticamente através de landing pages otimizadas, nutrem esses leads com sequências personalizadas de email, SMS e WhatsApp, e os conduzem até o agendamento ou a compra — tudo sem que você precise levantar um dedo.\n\nCom mais de 8 anos de experiência em automação de marketing, Rhaideline Calazans desenvolveu uma metodologia própria que já ajudou dezenas de negócios brasileiros em Massachusetts a triplicar seu volume de leads qualificados. Nosso diferencial está na integração completa: cada funil é conectado ao CRM, ao sistema de agendamento, aos canais de comunicação e aos relatórios de performance, criando um ecossistema de vendas que funciona 24 horas por dia.\n\nO resultado prático é transformador: empreendedores que antes dependiam 100% de indicações e do boca a boca passam a ter um fluxo previsível e escalável de novos clientes. Se você está cansado de trabalhar no operacional e quer que seu processo de vendas funcione enquanto você foca no que realmente importa, um funil automatizado é o investimento mais inteligente que você pode fazer no seu negócio.',
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
    metaTitle: 'CRM com IA Conversacional para WhatsApp | Calazans Lumina',
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
    resultados: [
      { numero: '30', label: 'Tempo de resposta ao lead', sufixo: 's' },
      { numero: '92', label: 'Taxa de satisfação no atendimento', sufixo: '%' },
      { numero: '40', label: 'Redução em tempo gasto com atendimento', sufixo: '%' },
      { numero: '2.5x', label: 'Mais agendamentos por mês' },
    ],
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
    conteudoSEO: 'No mercado americano, a velocidade de resposta pode ser a diferença entre fechar um cliente ou perdê-lo para o concorrente. Estudos mostram que leads respondidos nos primeiros 5 minutos têm 21 vezes mais chance de conversão — e a maioria dos empreendedores brasileiros nos EUA demora horas ou até dias para responder mensagens no WhatsApp. É aí que entra o CRM com IA conversacional da Calazans Lumina.\n\nNossa solução combina o poder do GoHighLevel como CRM completo com inteligência artificial treinada especificamente para o seu negócio. O resultado é um sistema que responde leads em menos de 30 segundos, 24 horas por dia, 7 dias por semana. A IA entende o contexto da conversa, responde perguntas sobre seus serviços e preços, qualifica o lead e agenda consultas automaticamente na sua agenda — tudo isso enquanto você está atendendo outros clientes ou dormindo.\n\nPara a comunidade brasileira em Massachusetts e nos Estados Unidos, o WhatsApp é o canal número um de comunicação. Por isso, nossa IA é configurada para operar nativamente no WhatsApp Business API, além de Instagram Direct, Facebook Messenger e email. Todas as conversas ficam centralizadas em um único painel, com pipeline visual que mostra exatamente onde cada lead está no processo de vendas.\n\nRhaideline Calazans, com mais de 8 anos de experiência em automação e CRM, desenvolveu um processo de implementação que garante que a IA represente fielmente seu negócio. O treinamento inclui todas as informações sobre seus serviços, preços, diferenciais, horários e tom de voz. O resultado é um atendimento automatizado que parece humano, é eficiente e nunca perde um lead por falta de resposta.',
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
    metaTitle: 'Tráfego Pago Google & Meta Ads | Calazans Lumina',
    metaDescription: 'Campanhas de Google Ads e Meta Ads focadas em ROI real. Tracking completo, otimização semanal e relatórios transparentes. Especialistas em negócios brasileiros.',
    h1: 'Tráfego Pago Que Gera Leads Qualificados e Vendas de Verdade',
    beneficios: [
      {
        titulo: 'ROI Transparente',
        descricao: 'Cada real investido é rastreado do clique à venda final, para que você saiba exatamente quanto retorno cada campanha gera.',
        icone: 'chart',
      },
      {
        titulo: 'Segmentação Precisa',
        descricao: 'Alcançamos seu público ideal com segmentação por localização, interesse, comportamento e dados demográficos específicos.',
        icone: 'mappin',
      },
      {
        titulo: 'Landing Pages Dedicadas',
        descricao: 'Cada campanha recebe uma landing page de alta conversão alinhada com o anúncio, maximizando a taxa de conversão.',
        icone: 'globe',
      },
      {
        titulo: 'Otimização Semanal',
        descricao: 'Analisamos e ajustamos suas campanhas toda semana com base em dados reais, reduzindo custo por lead progressivamente.',
        icone: 'funnel',
      },
      {
        titulo: 'Retargeting Inteligente',
        descricao: 'Impactamos novamente visitantes que não converteram na primeira vez, mantendo sua marca presente até o momento da decisão.',
        icone: 'share',
      },
      {
        titulo: 'Relatórios Semanais Claros',
        descricao: 'Relatórios com linguagem simples mostrando CPL, taxa de conversão, ROI e ações tomadas — sem jargões nem métricas de vaidade.',
        icone: 'bot',
      },
    ],
    comoFunciona: [
      {
        passo: 1,
        titulo: 'Diagnóstico e Estratégia',
        descricao: 'Analisamos seu mercado, concorrentes e histórico de campanhas para definir a estratégia ideal de investimento em Google e Meta Ads.',
      },
      {
        passo: 2,
        titulo: 'Configuração de Tracking',
        descricao: 'Instalamos pixels, conversões API, Google Tag Manager e UTMs para rastrear cada interação do clique à venda com precisão.',
      },
      {
        passo: 3,
        titulo: 'Criação das Campanhas',
        descricao: 'Desenvolvemos criativos, copies persuasivas, landing pages e estrutura de campanhas segmentadas para cada objetivo de negócio.',
      },
      {
        passo: 4,
        titulo: 'Monitoramento e Otimização',
        descricao: 'Acompanhamos métricas diariamente e realizamos otimizações semanais de lances, públicos, criativos e palavras-chave.',
      },
      {
        passo: 5,
        titulo: 'Relatórios e Escala',
        descricao: 'Enviamos relatórios semanais com resultados claros e, conforme identificamos campanhas vencedoras, escalamos o investimento de forma controlada.',
      },
    ],
    resultados: [
      { numero: '35', label: 'Redução média no custo por lead', sufixo: '%' },
      { numero: '4.2', label: 'ROAS médio das campanhas', sufixo: 'x' },
      { numero: '250', label: 'Campanhas gerenciadas', sufixo: '+' },
      { numero: '500', label: 'Mil reais gerenciados em mídia', sufixo: 'K+' },
    ],
    faqs: [
      {
        pergunta: 'Qual o investimento mínimo recomendado em anúncios?',
        resposta: 'Recomendamos um investimento mínimo de $500 a $1.000 por mês em mídia para campanhas locais em Massachusetts. Para campanhas nacionais ou com múltiplos serviços, o ideal é a partir de $2.000. Esse valor é o investimento na plataforma (Google/Meta), separado da taxa de gestão da Calazans Lumina.',
      },
      {
        pergunta: 'Google Ads ou Meta Ads — qual funciona melhor?',
        resposta: 'Depende do seu tipo de negócio. Google Ads é ideal para captar quem já está buscando seu serviço ativamente (intenção de compra). Meta Ads funciona melhor para gerar demanda, awareness e atingir públicos que ainda não conhecem você. Na maioria dos casos, recomendamos uma combinação das duas plataformas para resultados máximos.',
      },
      {
        pergunta: 'Em quanto tempo vou ver resultados?',
        resposta: 'Os primeiros leads costumam aparecer na primeira semana de campanha ativa. Porém, a otimização completa leva de 30 a 60 dias, período em que os algoritmos aprendem sobre seu público ideal e as campanhas atingem performance estável. Por isso trabalhamos com contratos trimestrais para garantir tempo suficiente de otimização.',
      },
      {
        pergunta: 'Vocês criam as artes e textos dos anúncios?',
        resposta: 'Sim, nossa equipe cria todos os criativos (imagens e vídeos curtos) e textos persuasivos dos anúncios. Realizamos testes A/B constantes entre diferentes versões de criativos e copies para identificar as combinações com melhor desempenho e escalar o que funciona.',
      },
      {
        pergunta: 'Como vocês medem o sucesso das campanhas?',
        resposta: 'Medimos por métricas de negócio reais: custo por lead (CPL), custo por aquisição (CPA), retorno sobre investimento em anúncios (ROAS) e número de vendas atribuídas. Nunca usamos métricas de vaidade como curtidas ou alcance como indicadores de sucesso. Você recebe relatórios semanais com esses números de forma clara.',
      },
    ],
    casosDeUso: [
      'Prestadores de serviço brasileiros em Massachusetts que querem atrair clientes americanos e brasileiros da região via Google',
      'Negócios locais (restaurantes, salões, clínicas) que precisam aparecer nas buscas locais com anúncios geolocalizados',
      'Profissionais que vendem serviços online (coaches, consultores, mentores) e precisam de funis de captação com tráfego pago',
      'Empresas no Brasil que querem expandir para o mercado americano utilizando campanhas em inglês e português',
      'E-commerces e lojas online que precisam de campanhas de remarketing para recuperar visitantes e aumentar vendas',
    ],
    conteudoSEO: 'Investir em tráfego pago sem estratégia é como jogar dinheiro fora — e infelizmente, é exatamente o que acontece com a maioria dos empreendedores brasileiros que tentam fazer anúncios por conta própria ou com agências que não entendem seu mercado. Na Calazans Lumina, gerenciamos campanhas de Google Ads e Meta Ads com metodologia orientada a dados e foco obsessivo em ROI real.\n\nNossa abordagem começa antes mesmo de subir o primeiro anúncio. Instalamos tracking completo com pixels de conversão, Google Tag Manager e UTMs para garantir que cada clique, lead e venda seja rastreado com precisão. Sem essa base, é impossível otimizar campanhas de verdade — e é por isso que tantos empreendedores têm a sensação de que anúncios não funcionam.\n\nPara negócios brasileiros em Massachusetts e nos EUA, trabalhamos com segmentação hiper-local combinando Google Ads para capturar demanda ativa (pessoas buscando seu serviço agora) e Meta Ads para gerar awareness e demanda nova em públicos qualificados. Cada campanha recebe landing pages dedicadas, criativos profissionais e copies persuasivas — tudo em português ou inglês, dependendo do público-alvo.\n\nRhaideline Calazans e sua equipe já gerenciaram mais de $500 mil em investimento de mídia, com resultados consistentes de ROAS acima de 4x. Nosso diferencial é a otimização semanal: não configuramos e esquecemos. Toda semana ajustamos lances, testamos novos criativos, refinamos públicos e eliminamos o que não está performando. Relatórios transparentes são enviados semanalmente para que você acompanhe cada centavo investido e cada resultado gerado.',
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
    metaTitle: 'Gestão de Redes Sociais para Brasileiros | Calazans Lumina',
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
    resultados: [
      { numero: '3x', label: 'Aumento médio no engajamento' },
      { numero: '45', label: 'Crescimento médio de seguidores qualificados', sufixo: '%/mês' },
      { numero: '20', label: 'Posts estratégicos por mês', sufixo: '+' },
      { numero: '85', label: 'Taxa de satisfação dos clientes', sufixo: '%' },
    ],
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
    conteudoSEO: 'Para empreendedores brasileiros nos Estados Unidos, o Instagram e o Facebook não são apenas redes sociais — são as principais vitrines do negócio. A comunidade brasileira nos EUA é extremamente ativa nessas plataformas, e a falta de uma presença profissional e estratégica significa perder visibilidade para concorrentes que investem em conteúdo de qualidade todos os dias.\n\nNa Calazans Lumina, fazemos gestão de redes sociais com foco em resultado, não em vaidade. Cada post publicado tem um objetivo claro de negócio: educar seu público sobre seus serviços, construir autoridade no seu nicho, gerar engajamento que amplia alcance ou converter seguidores em leads e clientes. Nosso calendário editorial é estruturado com mix estratégico de conteúdos de valor, bastidores, depoimentos de clientes, ofertas e tendências do momento.\n\nO diferencial da Calazans Lumina está na compreensão profunda do público brasileiro nos EUA. Rhaideline Calazans vive em Massachusetts e entende as nuances culturais, o sotaque bilíngue das redes sociais e as necessidades reais de quem empreende longe de casa. Nosso conteúdo é produzido em português com a possibilidade de adaptação para inglês, atingindo tanto a comunidade brasileira quanto o mercado americano local.\n\nCom mais de 8 anos de experiência em marketing digital, nossa equipe desenvolve design profissional com identidade visual consistente, edita reels com tendências atuais, escreve legendas persuasivas com técnicas de copywriting e utiliza estratégias de hashtags e SEO do Instagram para maximizar o alcance orgânico. Entregamos relatórios mensais detalhados com métricas reais de engajamento, crescimento e leads gerados para que você acompanhe o retorno do investimento de forma clara e objetiva.',
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
    metaTitle: 'Google Business Profile para Brasileiros | Calazans Lumina',
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
        descricao: 'Sistema estratégico para captar avaliações genuínas de clientes satisfeitos, construindo uma reputação online sólida e confiável.',
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
        descricao: 'Perfil com fotos de qualidade que transmitem profissionalismo e aumentam em até 42% as solicitações de rota no Google Maps.',
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
        descricao: 'Implementamos um sistema para solicitar avaliações de clientes satisfeitos com link direto, templates de mensagem e acompanhamento.',
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
    resultados: [
      { numero: '3x', label: 'Aumento em visualizações no Maps' },
      { numero: '70', label: 'Aumento em ligações pelo Google', sufixo: '%' },
      { numero: '4.8', label: 'Avaliação média dos nossos clientes', sufixo: '★' },
      { numero: '15', label: 'Posições ganhas em buscas locais', sufixo: '+' },
    ],
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
        resposta: 'Implementamos um sistema automatizado que envia link direto de avaliação para clientes satisfeitos no momento certo, via WhatsApp ou SMS. Também fornecemos QR codes para o estabelecimento e templates de mensagem. O importante é que todas as avaliações são genuínas — nunca usamos avaliações falsas, pois isso pode resultar em penalização do Google.',
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
    conteudoSEO: 'Nos Estados Unidos, 46% de todas as buscas no Google têm intenção local. Isso significa que quase metade das pessoas que pesquisam algo no Google estão procurando um negócio perto delas — e o Google Business Profile é a ferramenta que determina se o seu negócio aparece nessas buscas ou se o cliente vai para o concorrente. Para empreendedores brasileiros em Massachusetts, ter um perfil otimizado no Google não é opcional — é essencial para sobreviver.\n\nNa Calazans Lumina, oferecemos criação e otimização completa do Google Business Profile com foco em resultados mensuráveis. Configuramos categorias estratégicas que alinham seu negócio com os termos de busca mais relevantes, escrevemos descrições otimizadas com palavras-chave locais, adicionamos fotos profissionais que aumentam cliques e implementamos um sistema consistente de captação de avaliações genuínas.\n\nO diferencial para brasileiros nos EUA é ainda mais crítico. A comunidade brasileira busca ativamente serviços de outros brasileiros no Google Maps: "dentista brasileiro em Framingham", "restaurante brasileiro em Boston", "house cleaner brasileira em Marlborough". Se seu perfil não está configurado e otimizado para aparecer nessas buscas, você está literalmente perdendo clientes que estão procurando exatamente o que você oferece.\n\nRhaideline Calazans, fundadora da Calazans Lumina, vive em Massachusetts e entende profundamente o comportamento de busca da comunidade brasileira na região. Com mais de 8 anos de experiência, nossa equipe já otimizou perfis de dezenas de negócios brasileiros nos EUA, gerando aumentos de até 3x em visualizações no Maps e 70% mais ligações pelo Google. Além da configuração inicial, mantemos seu perfil ativo com postagens semanais, monitoramento de reviews e relatórios mensais de insights para que você acompanhe o impacto real no seu negócio.',
  },
]

export function getServicoBySlug(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug)
}
