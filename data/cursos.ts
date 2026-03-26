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
  // VSL (Video Sales Letter) data
  vsl: {
    hook: string
    subhook: string
    problemas: string[]
    transformacao: string
    antesDepois: { antes: string; depois: string }[]
    depoimentos: { nome: string; cidade: string; texto: string }[]
    objecoes: { pergunta: string; resposta: string }[]
    garantia: string
    valorReal: string
    urgencia: string
  }
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
    imagem: '/cursos/capa-chatgpt-para-idosos.svg',
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
    vsl: {
      hook: 'Seus netos já usam inteligência artificial. E se você também pudesse?',
      subhook: 'Curso feito com carinho para quem tem 60+ anos. Sem termos técnicos. Sem complicação. Só passo a passo com imagens grandes.',
      problemas: [
        'Sente que a tecnologia está passando por cima de você',
        'Tem medo de "estragar" alguma coisa no celular ou computador',
        'Seus netos falam de ChatGPT e você não entende nada',
        'Gostaria de pedir ajuda para escrever mensagens, receitas ou tirar dúvidas — mas não sabe como',
        'Já tentou aprender algo de tecnologia e achou tudo muito complicado',
      ],
      transformacao: 'Em poucos dias, você vai estar conversando com o ChatGPT como se fosse um amigo. Pedindo receitas, tirando dúvidas, escrevendo mensagens bonitas e até planejando viagens. Tudo no seu ritmo, sem pressa, sem medo.',
      antesDepois: [
        { antes: 'Medo de usar o computador', depois: 'Conversando com IA com confiança' },
        { antes: 'Dependendo dos netos para tudo', depois: 'Resolvendo sozinho(a) com o ChatGPT' },
        { antes: 'Achando que IA não é para sua idade', depois: 'Ensinando amigos a usar também' },
        { antes: 'Sentindo-se excluído(a) da tecnologia', depois: 'Atualizado(a) e conectado(a)' },
      ],
      depoimentos: [
        { nome: 'Dona Maria, 72 anos', cidade: 'Belo Horizonte', texto: 'Nunca pensei que ia usar inteligência artificial na minha idade. Agora peço receitas, escrevo mensagens de aniversário e até planejo minhas viagens com o ChatGPT. Meus netos ficaram impressionados!' },
        { nome: 'Seu José, 68 anos', cidade: 'São Paulo', texto: 'O curso é muito bem explicado, com imagens grandes e linguagem simples. Em dois dias eu já estava usando sozinho. Recomendo para todos os meus amigos da terceira idade.' },
        { nome: 'Dona Lúcia, 75 anos', cidade: 'Curitiba', texto: 'Minha neta me mostrou e eu fiz o curso inteiro num fim de semana. Agora uso o ChatGPT para me ajudar com receitas e até para entender aquelas contas complicadas que chegam.' },
      ],
      objecoes: [
        { pergunta: 'Preciso saber usar computador para fazer o curso?', resposta: 'Se você sabe abrir o WhatsApp e navegar na internet, já sabe o suficiente. O curso começa do absoluto zero com imagens grandes.' },
        { pergunta: 'É realmente gratuito? Não vai cobrar depois?', resposta: 'Totalmente gratuito. Sem pegadinha. Sem cadastro. Acesso livre online e PDF para download.' },
        { pergunta: 'Tem alguém para me ajudar se eu travar?', resposta: 'O curso foi feito para ser autoexplicativo. Cada passo tem imagem e explicação clara. Mas você pode mandar mensagem no WhatsApp se precisar.' },
        { pergunta: 'Funciona no celular?', resposta: 'Sim! Funciona no celular, tablet e computador. Você escolhe onde estudar.' },
      ],
      garantia: 'Curso 100% gratuito — zero risco. Se não gostar, simplesmente pare. Mas apostamos que você vai adorar.',
      valorReal: 'Cursos similares cobram R$ 197 a R$ 497. Este é totalmente gratuito porque acreditamos que tecnologia é para todos.',
      urgencia: 'Acesso gratuito disponível agora. Comece hoje e surpreenda sua família amanhã.',
    },
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
    slug: 'ia-marketing-digital-iniciantes',
    nome: 'IA Completa para Marketing Digital',
    descricaoCurta: 'O guia definitivo para quem está começando. Aprenda a usar Inteligência Artificial para criar conteúdo, vender mais e automatizar seu marketing do zero.',
    descricaoLonga: 'Este curso foi desenhado especificamente para quem está iniciando no marketing digital e quer usar o poder da IA para acelerar seus resultados. Você vai aprender a usar as principais ferramentas do mercado para criar artes, textos, vídeos e estratégias completas, mesmo que nunca tenha trabalhado com marketing antes.',
    preco: 20,
    destaque: true,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8cc1484b2d7dfdd5e1370',
    imagem: '/cursos/capa-marketing-digital-iniciantes.svg',
    paraQuem: [
      'Iniciantes no marketing digital que querem vantagem competitiva',
      'Empreendedores que precisam fazer seu próprio marketing',
      'Pessoas que querem transicionar de carreira para o digital',
      'Criadores de conteúdo que buscam escala com IA',
      'Quem tem pouco tempo e precisa de produtividade máxima',
    ],
    oQueVaiAprender: [
      'Fundamentos do Marketing Digital na era da IA',
      'ChatGPT: De perguntas simples a estratégias de vendas',
      'Criação de imagens profissionais com IA (Midjourney/DALL-E)',
      'Escrita de Copys que vendem usando inteligência artificial',
      'Criação de vídeos e avatares com IA para redes sociais',
      'Planejamento de conteúdo para 30 dias em minutos',
      'Automação básica de atendimento e leads',
      'Ferramentas gratuitas vs pagas: Onde investir seu dinheiro',
    ],
    vsl: {
      hook: 'Não comece no Marketing Digital da forma antiga. Use IA e pule etapas.',
      subhook: 'Aprenda a dominar as ferramentas que fazem o trabalho de uma agência inteira por você. Do zero ao primeiro anúncio com Inteligência Artificial.',
      problemas: [
        'Acha marketing digital muito complexo e demorado',
        'Não sabe por onde começar entre tantas ferramentas',
        'Trava na hora de escrever textos ou criar artes para o Instagram',
        'Sente que está atrasado em relação a quem já usa IA',
        'Tem pouco orçamento para contratar designers ou redatores',
      ],
      transformacao: 'Você vai sair do zero para um marketing profissional e automatizado. Em vez de passar o dia todo em um post, você terá uma estratégia completa rodando com a ajuda da IA, sobrando tempo para o que realmente importa: vender.',
      antesDepois: [
        { antes: 'Horas tentando criar uma legenda', depois: 'Copy profissional em 30 segundos' },
        { antes: 'Artes amadoras no Canva', depois: 'Imagens de nível profissional com IA' },
        { antes: 'Confusão e sobrecarga de informação', depois: 'Clareza e execução rápida com IA' },
        { antes: 'Marketing que não gera leads', depois: 'Estratégia focada em conversão' },
      ],
      depoimentos: [
        { nome: 'Ana Paula', cidade: 'Lisboa', texto: 'Eu estava perdida com tanta coisa de marketing. O curso me mostrou como a IA simplifica tudo. Hoje faço meus posts e anúncios em minutos.' },
        { nome: 'Ricardo M.', cidade: 'Miami', texto: 'Melhor investimento para quem está começando. A parte de prompts para vendas mudou meu jogo no Instagram.' },
        { nome: 'Juliana Silva', cidade: 'São Paulo', texto: 'Didática excelente! Eu não sabia nada de IA e agora já uso até para criar meus roteiros de vídeo.' },
      ],
      objecoes: [
        { pergunta: 'Preciso saber programar?', resposta: 'De jeito nenhum. O curso foca em ferramentas fáceis de usar onde você só precisa saber escrever.' },
        { pergunta: 'As ferramentas são pagas?', resposta: 'Eu mostro as melhores opções gratuitas e quando vale a pena investir nas pagas.' },
        { pergunta: 'Quanto tempo preciso para ver resultados?', resposta: 'Se você aplicar o que ensino no Módulo 2, já terá seu primeiro conteúdo profissional hoje mesmo.' },
      ],
      garantia: '7 dias de garantia incondicional. Se não aprender nada novo, devolvemos seu dinheiro.',
      valorReal: 'R$ 497,00',
      urgencia: 'Preço promocional de lançamento por tempo limitado.',
    },
    modulos: [
      {
        titulo: 'Módulo 1: O Novo Marketing Digital',
        aulas: [
          'Bem-vindo: Por que a IA mudou tudo?',
          'O Mindset do Profissional de Marketing com IA',
          'Configurando seu ecossistema de ferramentas gratuitas',
        ],
      },
      {
        titulo: 'Módulo 2: ChatGPT para Estrategistas',
        aulas: [
          'A anatomia do Prompt Perfeito',
          'Criando sua Persona e Público-Alvo com IA',
          'Linha Editorial: O que postar para atrair clientes',
          'Calendário de Conteúdo para 30 dias em 10 minutos',
        ],
      },
      {
        titulo: 'Módulo 3: Design e Imagem com IA',
        aulas: [
          'IA para Imagens: DALL-E e alternativas gratuitas',
          'Criando fotos de produtos e lifestyle sem câmera profissional',
          'Removendo fundos e editando imagens com um clique',
        ],
      },
      {
        titulo: 'Módulo 4: Copywriting e Escrita Persuasiva',
        aulas: [
          'Legendas para Instagram que geram comentários',
          'Scripts de Vídeo para Reels e TikTok',
          'Emails de Vendas que ninguém ignora',
        ],
      },
      {
        titulo: 'Módulo 5: Vídeos e Avatares de IA',
        aulas: [
          'Criando vídeos sem aparecer (Avatares de IA)',
          'Dublagem e Tradução automática de vídeos',
          'Edição acelerada com ferramentas inteligentes',
        ],
      },
      {
        titulo: 'Módulo 6: Colocando em Prática',
        aulas: [
          'Seu primeiro anúncio feito 100% com IA',
          'Analisando resultados e otimizando com IA',
          'Próximos passos na sua jornada digital',
        ],
      },
    ],
  },
  {
    slug: 'ia-chatgpt-completo',
    // IA & ChatGPT Completo
    nome: 'IA & ChatGPT — Curso Completo',
    descricaoCurta: 'Domine a Inteligência Artificial do zero ao avançado. Aprenda a usar o ChatGPT para criar conteúdo, automatizar tarefas e impulsionar seu negócio.',
    descricaoLonga: 'Este é o guia definitivo para dominar a Inteligência Artificial e o ChatGPT. Desde os conceitos fundamentais até técnicas avançadas de prompt engineering, automação de tarefas e integração com ferramentas de marketing digital. Ideal para empreendedores que querem usar IA para multiplicar seus resultados.',
    preco: 10,
    destaque: true,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8cc1484b2d7dfdd5e1370',
    imagem: '/cursos/capa-ia-chatgpt-completo.svg',
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
    vsl: {
      hook: 'A IA já está mudando o mercado. Quem não dominar, ficará para trás.',
      subhook: 'Do zero ao avançado: aprenda a usar ChatGPT, automação e prompt engineering para transformar seu negócio.',
      problemas: [
        'Perde horas em tarefas que a IA faria em minutos',
        'Não sabe como usar ChatGPT além de perguntas simples',
        'Vê concorrentes usando IA e não sabe como competir',
        'Precisa criar conteúdo mas não tem equipe',
        'Quer automatizar atendimento mas não sabe por onde começar',
      ],
      transformacao: 'Em poucas semanas, você vai dominar as ferramentas de IA mais poderosas do mercado. Vai criar conteúdo profissional, automatizar processos e tomar decisões baseadas em dados — tudo com inteligência artificial.',
      antesDepois: [
        { antes: 'Horas criando conteúdo manualmente', depois: 'Conteúdo profissional em minutos com IA' },
        { antes: 'Perdendo leads por falta de follow-up', depois: 'Automação inteligente 24h por dia' },
        { antes: 'Confuso com tantas ferramentas de IA', depois: 'Dominando as melhores para seu negócio' },
        { antes: 'Marketing genérico sem resultados', depois: 'Estratégias personalizadas com dados de IA' },
      ],
      depoimentos: [
        { nome: 'Carlos Eduardo', cidade: 'São Paulo', texto: 'O melhor investimento que fiz. O módulo de prompt engineering sozinho já vale 100x o preço do curso.' },
        { nome: 'Fernanda Lima', cidade: 'Belo Horizonte', texto: 'Consegui automatizar 80% do meu atendimento no WhatsApp usando o que aprendi aqui.' },
        { nome: 'Roberto Santos', cidade: 'Recife', texto: 'Do zero total para criar conteúdo profissional com IA. Recomendo demais para quem está começando.' },
      ],
      objecoes: [
        { pergunta: 'Preciso saber programar?', resposta: 'Não! O curso é focado em ferramentas visuais e práticas. Zero código.' },
        { pergunta: 'Funciona para qualquer nicho?', resposta: 'Sim. As técnicas de IA são universais e se aplicam a qualquer tipo de negócio.' },
        { pergunta: 'Quanto tempo leva para ver resultados?', resposta: 'No Módulo 3 você já vai estar criando conteúdo profissional com IA. Resultados imediatos.' },
      ],
      garantia: '7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor.',
      valorReal: 'R$ 497,00',
      urgencia: 'Preço promocional de R$ 20 por tempo limitado.',
    },
    modulos: [
      { titulo: 'Módulo 1 — Fundamentos da Inteligência Artificial', aulas: ['O que é IA e por que importa para o seu negócio', 'Breve história: de Alan Turing ao ChatGPT', 'Tipos de IA: Machine Learning, Deep Learning, NLP', 'Como os modelos de linguagem funcionam (LLMs)', 'O que o ChatGPT pode (e o que não pode) fazer'] },
      { titulo: 'Módulo 2 — Primeiros Passos com ChatGPT', aulas: ['Criando sua conta no ChatGPT (passo a passo)', 'Navegando pela interface: chat, histórico, configurações', 'Seu primeiro prompt: como pedir algo ao ChatGPT', 'Diferença entre GPT-3.5, GPT-4 e GPT-4o', 'ChatGPT Plus vs gratuito: vale a pena?'] },
      { titulo: 'Módulo 3 — Prompt Engineering (A Arte de Perguntar)', aulas: ['O que é um prompt e por que a qualidade importa', 'Estrutura de um prompt perfeito: Contexto + Tarefa + Formato', 'Técnica Chain-of-Thought (passo a passo)', 'Técnica Few-Shot (exemplos que ensinam)', 'Técnica Role-Play (dê um papel ao ChatGPT)', '20 templates de prompts prontos para usar'] },
      { titulo: 'Módulo 4 — IA para Criação de Conteúdo', aulas: ['Gerando legendas para Instagram com IA', 'Criando artigos de blog otimizados para SEO', 'Roteiros de vídeo para Reels e TikTok', 'Emails de vendas e newsletters com IA', 'Descrições de produtos e serviços', 'Calendário editorial mensal gerado por IA'] },
      { titulo: 'Módulo 5 — IA para Marketing Digital', aulas: ['Análise de concorrência com ChatGPT', 'Pesquisa de palavras-chave com IA', 'Criação de personas e público-alvo', 'Otimização de anúncios (Google Ads e Meta Ads)', 'Geração de ideias para campanhas', 'Copy para landing pages de alta conversão'] },
      { titulo: 'Módulo 6 — Automação com IA', aulas: ['Chatbots de IA no WhatsApp (como configurar)', 'Automação de respostas de email com IA', 'Integração de IA com CRM (GoHighLevel)', 'Qualificação automática de leads com IA', 'Agendamento inteligente com assistentes de IA'] },
      { titulo: 'Módulo 7 — Ferramentas de IA Além do ChatGPT', aulas: ['Claude (Anthropic) — para textos longos e análise', 'Midjourney e DALL-E — imagens com IA', 'Canva com IA — design automatizado', 'Eleven Labs — voz com IA', 'Make/Zapier + IA — automações visuais', 'Comparativo: qual ferramenta usar para cada tarefa'] },
      { titulo: 'Módulo 8 — Ética, Limites e o Futuro da IA', aulas: ['O que a IA faz bem e o que precisa de humano', 'Plágio, direitos autorais e conteúdo gerado por IA', 'Viés e alucinações: como identificar respostas incorretas', 'Regulamentação de IA no Brasil e no mundo', 'O futuro da IA nos próximos 5 anos', 'Como se preparar para a era da IA'] },
    ],
  },
  {
    slug: 'marketing-digital-iniciantes',
    nome: 'Marketing Digital para Iniciantes',
    descricaoCurta: 'Aprenda os fundamentos do marketing digital do zero. Ideal para quem está começando e quer entender como atrair clientes pela internet.',
    descricaoLonga: 'Curso completo para quem nunca fez marketing digital. Desde os conceitos básicos até a implementação prática de estratégias que geram resultado. Você vai aprender a criar presença digital, atrair visitantes, gerar leads e converter em vendas.',
    preco: 10,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8e72826494b224ce21c37',
    imagem: '/cursos/capa-marketing-digital-iniciantes.svg',
    paraQuem: ['Empreendedores que estão começando no digital', 'Profissionais liberais que querem atrair clientes online', 'Quem quer mudar de carreira para marketing digital', 'Donos de negócio sem presença digital'],
    oQueVaiAprender: ['O que é marketing digital e por que importa', 'Como criar uma presença digital profissional', 'Fundamentos de SEO (aparecer no Google)', 'Redes sociais: estratégia que gera resultado', 'Introdução a anúncios online (Google e Meta)', 'Email marketing básico', 'Como medir resultados (métricas essenciais)', 'Ferramentas gratuitas para começar hoje'],
    vsl: {
      hook: 'Marketing Digital não precisa ser complicado. Precisa ser bem feito.',
      subhook: 'Aprenda os fundamentos que 90% dos iniciantes ignoram e comece a gerar resultados reais.',
      problemas: ['Não sabe por onde começar no marketing digital', 'Posta nas redes mas não gera vendas', 'Investe em anúncios sem retorno', 'Concorrentes aparecem no Google e você não', 'Sente que está perdendo oportunidades por falta de presença digital'],
      transformacao: 'Você vai sair do zero para uma presença digital profissional com estratégias que atraem clientes. Sem complicação, sem termos difíceis.',
      antesDepois: [{ antes: 'Sem presença digital', depois: 'Site + redes + Google configurados' }, { antes: 'Posts que ninguém vê', depois: 'Conteúdo estratégico que gera leads' }, { antes: 'Confuso com termos de marketing', depois: 'Dominando os fundamentos com clareza' }],
      depoimentos: [{ nome: 'Mariana Costa', cidade: 'Campinas', texto: 'Finalmente entendi como funciona o marketing digital. O curso é prático e vai direto ao ponto.' }, { nome: 'João Pedro', cidade: 'Porto Alegre', texto: 'Melhor custo-benefício impossível. R$20 por um curso que vale muito mais.' }],
      objecoes: [{ pergunta: 'Já existem milhares de cursos. Por que este?', resposta: 'Este é focado em prática e resultados. Sem enrolação. Feito por quem implementa marketing digital todos os dias.' }, { pergunta: 'R$20 é muito barato. É sério?', resposta: 'Sim! Acreditamos que conhecimento deve ser acessível. O preço baixo é intencional.' }],
      garantia: '7 dias de garantia incondicional.',
      valorReal: 'R$ 297,00',
      urgencia: 'Preço de lançamento por tempo limitado.',
    },
    modulos: [
      { titulo: 'Módulo 1 — O que é Marketing Digital', aulas: ['Conceitos fundamentais', 'Funil de vendas explicado', 'Canais digitais: quais existem e qual usar', 'Mentalidade de resultado'] },
      { titulo: 'Módulo 2 — Presença Digital', aulas: ['Google Business Profile do zero', 'Seu primeiro site profissional', 'Redes sociais: qual escolher', 'Identidade visual básica'] },
      { titulo: 'Módulo 3 — SEO para Iniciantes', aulas: ['O que é SEO e como funciona', 'Palavras-chave: como escolher', 'SEO on-page básico', 'Google Search Console'] },
      { titulo: 'Módulo 4 — Redes Sociais', aulas: ['Instagram para negócios', 'Conteúdo que engaja', 'Calendário editorial', 'Métricas de redes sociais'] },
      { titulo: 'Módulo 5 — Anúncios Online Básico', aulas: ['Google Ads para iniciantes', 'Meta Ads para iniciantes', 'Orçamento e ROI', 'Primeiro anúncio na prática'] },
      { titulo: 'Módulo 6 — Conversão e Métricas', aulas: ['O que é taxa de conversão', 'Google Analytics básico', 'KPIs que importam', 'Relatórios simples'] },
    ],
  },
  {
    slug: 'google-meu-negocio-do-zero',
    nome: 'Google Meu Negócio do Zero',
    descricaoCurta: 'Aprenda a configurar, otimizar e dominar o Google Business Profile para aparecer no Google Maps e atrair clientes locais.',
    descricaoLonga: 'Curso prático e direto para configurar seu Google Business Profile do zero e otimizar para aparecer nas primeiras posições do Google Maps.',
    preco: 20,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8eabecd45df2539892d27',
    imagem: '/cursos/capa-google-meu-negocio-do-zero.svg',
    paraQuem: ['Negócios locais que querem mais visibilidade', 'Empresas que atendem clientes presencialmente', 'Profissionais que querem aparecer no Google Maps', 'Quem quer mais avaliações e reviews no Google'],
    oQueVaiAprender: ['Criar perfil completo no Google Business Profile', 'Otimizar para aparecer nas 3 primeiras posições', 'Estratégia de fotos que aumentam cliques em 42%', 'Como conseguir mais avaliações 5 estrelas', 'Google Posts: o que postar e quando', 'Responder reviews de forma estratégica', 'Insights e métricas do Google Business', 'Integração com Google Ads Local'],
    vsl: {
      hook: '46% das buscas no Google são locais. Seu negócio aparece?',
      subhook: 'Aprenda a dominar o Google Maps e atraia clientes que estão procurando exatamente o que você oferece.',
      problemas: ['Seu negócio não aparece quando pesquisam no Google', 'Concorrentes têm mais avaliações e aparecem primeiro', 'Não sabe como usar o Google Business Profile', 'Perde clientes para concorrentes com presença digital'],
      transformacao: 'Seu negócio vai aparecer no Google Maps quando clientes procurarem seus serviços. Mais ligações, mais visitas, mais vendas.',
      antesDepois: [{ antes: 'Invisível no Google Maps', depois: 'Top 3 nas buscas locais' }, { antes: 'Zero avaliações', depois: 'Dezenas de reviews 5 estrelas' }],
      depoimentos: [{ nome: 'Dr. Marcos', cidade: 'BH', texto: 'Triplicou as ligações do meu consultório em 2 meses seguindo o curso.' }],
      objecoes: [{ pergunta: 'Funciona para qualquer tipo de negócio?', resposta: 'Sim! Qualquer negócio com atendimento local ou presencial se beneficia.' }],
      garantia: '7 dias de garantia incondicional.',
      valorReal: 'R$ 197,00',
      urgencia: 'Preço promocional por tempo limitado.',
    },
    modulos: [
      { titulo: 'Módulo 1 — Configuração do Google Business', aulas: ['Criar perfil passo a passo', 'Verificação do negócio', 'Categorias e atributos', 'Horários e informações'] },
      { titulo: 'Módulo 2 — Otimização Avançada', aulas: ['Descrição otimizada com SEO', 'Fotos que convertem', 'Produtos e serviços', 'Área de atendimento'] },
      { titulo: 'Módulo 3 — Reviews e Reputação', aulas: ['Como pedir avaliações', 'Respondendo reviews (positivos e negativos)', 'Automação de pedidos de review', 'Widget de reviews no site'] },
      { titulo: 'Módulo 4 — Google Posts e Métricas', aulas: ['Tipos de posts no Google', 'Frequência ideal de postagem', 'Insights: como interpretar', 'Relatórios de performance'] },
    ],
  },
  {
    slug: 'redes-sociais-que-vendem',
    nome: 'Redes Sociais que Vendem',
    descricaoCurta: 'Transforme suas redes sociais em máquinas de geração de leads. Aprenda a estratégia Info-First que o algoritmo favorece em 2026.',
    descricaoLonga: 'Curso focado em transformar redes sociais de vitrine para máquina de vendas. Usando a estratégia Info-First que o algoritmo do Instagram e outras plataformas favorecem.',
    preco: 10,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8e8f9beb6cd210e71a584',
    imagem: '/cursos/capa-redes-sociais-que-vendem.svg',
    paraQuem: ['Empreendedores que postam mas não geram vendas', 'Quem quer crescer no Instagram de forma orgânica', 'Profissionais que querem entender o algoritmo', 'Negócios que querem mais engajamento e leads'],
    oQueVaiAprender: ['Estratégia Info-First para 2026', 'Como o algoritmo funciona (Instagram, TikTok, LinkedIn)', 'Criação de conteúdo que gera salvamentos e compartilhamentos', 'Calendário editorial prático', 'Design de posts (sem ser designer)', 'Legendas que convertem (com templates)', 'Hashtags estratégicas por nicho', 'Métricas e relatórios de redes sociais'],
    vsl: {
      hook: 'Você posta todos os dias e não vende nada? O problema não é a frequência.',
      subhook: 'Aprenda a estratégia que o algoritmo favorece em 2026 e transforme seguidores em clientes.',
      problemas: ['Posts com poucos likes e zero vendas', 'Não entende por que o algoritmo não entrega seu conteúdo', 'Gasta horas criando conteúdo sem retorno', 'Concorrentes crescem e você não'],
      transformacao: 'Suas redes vão se tornar uma máquina de gerar leads e vendas. Com conteúdo estratégico que o algoritmo ama distribuir.',
      antesDepois: [{ antes: 'Posts que ninguém vê', depois: 'Conteúdo viral com engajamento real' }, { antes: 'Zero vendas pelas redes', depois: 'Leads chegando pelo DM e WhatsApp' }],
      depoimentos: [{ nome: 'Patricia Oliveira', cidade: 'Curitiba', texto: 'Em 30 dias aplicando o Info-First, meu engajamento triplicou e comecei a receber DMs de clientes.' }],
      objecoes: [{ pergunta: 'Funciona para qualquer nicho?', resposta: 'Sim! A estratégia Info-First funciona para serviços, produtos e qualquer segmento.' }],
      garantia: '7 dias de garantia incondicional.',
      valorReal: 'R$ 297,00',
      urgencia: 'Preço promocional por tempo limitado.',
    },
    modulos: [
      { titulo: 'Módulo 1 — Estratégia Info-First', aulas: ['O que mudou em 2026', 'Por que conteúdo informativo ganha', 'Autenticidade vs perfeição', 'Salves e shares como KPI principal'] },
      { titulo: 'Módulo 2 — Criação de Conteúdo', aulas: ['Tipos de post que funcionam', 'Templates de legendas', 'Carrosséis que educam', 'Reels curtos com dados'] },
      { titulo: 'Módulo 3 — Planejamento e Execução', aulas: ['Calendário editorial mensal', 'Batch content: produzir em lote', 'Ferramentas gratuitas de design', 'Horários ideais para postar'] },
      { titulo: 'Módulo 4 — Crescimento e Métricas', aulas: ['Hashtags estratégicas', 'Engajamento autêntico', 'Quando impulsionar publicações', 'Relatórios simples que funcionam'] },
    ],
  },
  {
    slug: 'funis-de-vendas-simplificado',
    nome: 'Funis de Vendas Simplificado',
    descricaoCurta: 'Entenda como criar funis de vendas que convertem. Do primeiro contato ao fechamento, de forma automatizada e simples.',
    descricaoLonga: 'Curso prático sobre funis de vendas para quem quer parar de perder leads e começar a converter de forma automatizada. Com exemplos reais usando GoHighLevel.',
    preco: 20,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8eabecd45df2539892d27',
    imagem: '/cursos/capa-funis-de-vendas-simplificado.svg',
    paraQuem: ['Empreendedores que perdem leads por falta de follow-up', 'Quem quer automatizar o processo de vendas', 'Negócios que investem em marketing mas não convertem', 'Profissionais que querem entender CRM e automação'],
    oQueVaiAprender: ['O que é um funil de vendas e como funciona', 'Tipos de funis: captação, vendas, nurturing', 'Landing pages que convertem', 'Automação de follow-up (WhatsApp, email, SMS)', 'CRM básico: como organizar seus leads', 'Pipeline de vendas visual', 'Métricas de funil: taxa de conversão por etapa', 'GoHighLevel: visão geral da plataforma'],
    vsl: {
      hook: 'Você gera leads mas não converte? O problema está no seu funil.',
      subhook: 'Aprenda a criar funis que convertem automaticamente — do primeiro contato ao fechamento.',
      problemas: ['Leads entram mas ninguém faz follow-up', 'Sem processo de vendas organizado', 'Perdendo dinheiro em anúncios sem conversão', 'Equipe sobrecarregada com tarefas manuais'],
      transformacao: 'Seu processo de vendas vai rodar no piloto automático. Cada lead será nutrido e convertido sem esforço manual.',
      antesDepois: [{ antes: 'Leads esquecidos sem follow-up', depois: 'Automação 24h convertendo para você' }, { antes: 'Processo de vendas caótico', depois: 'Pipeline visual organizado' }],
      depoimentos: [{ nome: 'Anderson Silva', cidade: 'Florianópolis', texto: 'Montei meu primeiro funil seguindo o curso e dobrei minhas conversões em 30 dias.' }],
      objecoes: [{ pergunta: 'Preciso do GoHighLevel?', resposta: 'Não obrigatoriamente. As técnicas funcionam com qualquer ferramenta. Mas mostramos o GHL como referência.' }],
      garantia: '7 dias de garantia incondicional.',
      valorReal: 'R$ 297,00',
      urgencia: 'Preço promocional por tempo limitado.',
    },
    modulos: [
      { titulo: 'Módulo 1 — Fundamentos de Funil', aulas: ['O que é funil de vendas', 'Topo, meio e fundo', 'Jornada do cliente', 'Exemplos reais de funis'] },
      { titulo: 'Módulo 2 — Landing Pages', aulas: ['Elementos de uma landing page', 'Headlines que convertem', 'Formulários otimizados', 'Testes A/B básicos'] },
      { titulo: 'Módulo 3 — Automação e Follow-up', aulas: ['Sequências de email', 'WhatsApp automático', 'SMS de follow-up', 'Timing perfeito de contato'] },
      { titulo: 'Módulo 4 — CRM e Pipeline', aulas: ['Configurando um CRM', 'Pipeline visual de vendas', 'Lead scoring básico', 'Relatórios de conversão'] },
    ],
  },
  {
    slug: 'ferramentas-digitais-secretarias',
    nome: 'Ferramentas Digitais para Secretárias — Curso Gratuito',
    descricaoCurta: 'Domine as ferramentas digitais essenciais para secretárias modernas. De Google Workspace a automação de tarefas. Totalmente gratuito.',
    descricaoLonga: 'Curso completo e gratuito para secretárias e assistentes administrativas que querem dominar as ferramentas digitais do dia a dia. Google Workspace, gestão de agenda, organização de arquivos, comunicação profissional e uso básico de IA.',
    preco: 0,
    gratuito: true,
    pdfDisponivel: true,
    imagem: '/cursos/capa-ferramentas-digitais-secretarias.svg',
    paraQuem: ['Secretárias que querem se atualizar com ferramentas digitais', 'Assistentes administrativas buscando produtividade', 'Recepcionistas que usam computador no trabalho', 'Profissionais de escritório que querem dominar Google Workspace', 'Quem quer organizar melhor sua rotina com tecnologia'],
    oQueVaiAprender: ['Google Workspace completo (Gmail, Drive, Agenda, Docs, Sheets)', 'Organização de arquivos e pastas na nuvem', 'Gestão profissional de agenda e compromissos', 'Email corporativo: etiqueta e produtividade', 'Criar planilhas e relatórios básicos', 'Apresentações profissionais no Google Slides', 'Automação de tarefas repetitivas', 'Uso básico de IA (ChatGPT) para escritório'],
    vsl: {
      hook: 'A secretária do futuro já chegou. Ela usa IA, automação e Google Workspace.',
      subhook: 'Curso gratuito para se tornar indispensável no escritório com as ferramentas certas.',
      problemas: ['Sente que as ferramentas digitais mudam rápido demais', 'Perde tempo com tarefas repetitivas', 'Não sabe usar todo o potencial do Google Workspace', 'Quer aprender IA mas acha que é muito complicado'],
      transformacao: 'Você vai dominar todas as ferramentas digitais que um escritório moderno precisa. De Gmail a IA, com exemplos práticos do dia a dia.',
      antesDepois: [{ antes: 'Tarefas manuais e demoradas', depois: 'Processos automatizados e rápidos' }, { antes: 'Confusa com ferramentas digitais', depois: 'Dominando Google Workspace e IA' }],
      depoimentos: [{ nome: 'Sandra Machado', cidade: 'Belo Horizonte', texto: 'Fiz o curso inteiro num fim de semana. Agora uso IA para redigir emails e organizo tudo no Google Drive. Meu chefe ficou impressionado!' }],
      objecoes: [{ pergunta: 'É realmente gratuito?', resposta: 'Sim, 100% gratuito. Sem pegadinha, sem cobrança depois.' }, { pergunta: 'Preciso saber usar computador?', resposta: 'Se você usa email e WhatsApp, já sabe o suficiente para começar.' }],
      garantia: 'Curso 100% gratuito — zero risco.',
      valorReal: 'Cursos similares custam R$ 197 a R$ 397. Este é totalmente gratuito.',
      urgencia: 'Acesso gratuito disponível agora. Comece hoje mesmo.',
    },
    modulos: [
      { titulo: 'Módulo 1 — Google Workspace: Seu Kit de Ferramentas', aulas: ['Visão geral do Google Workspace', 'Gmail profissional: organizar, filtrar e responder', 'Google Drive: organizar arquivos na nuvem', 'Compartilhamento de arquivos e permissões'] },
      { titulo: 'Módulo 2 — Agenda e Organização', aulas: ['Google Agenda: criar e gerenciar compromissos', 'Agendamento de reuniões para chefes e equipe', 'Lembretes e notificações inteligentes', 'Integrando agenda com email e Meet'] },
      { titulo: 'Módulo 3 — Documentos e Planilhas', aulas: ['Google Docs: criar documentos profissionais', 'Modelos de atas, memorandos e ofícios', 'Google Sheets: planilhas básicas para escritório', 'Controle de despesas e relatórios simples', 'Formatação e impressão profissional'] },
      { titulo: 'Módulo 4 — Apresentações e Comunicação', aulas: ['Google Slides: apresentações para reuniões', 'Templates profissionais prontos para usar', 'Google Meet e Zoom: organizar reuniões online', 'WhatsApp Business para comunicação do escritório'] },
      { titulo: 'Módulo 5 — Produtividade e Automação', aulas: ['Atalhos de teclado que economizam horas', 'Respostas automáticas e templates de email', 'Organização digital: método de pastas eficiente', 'Ferramentas de lista de tarefas (Google Tasks, Keep)'] },
      { titulo: 'Módulo 6 — IA no Escritório', aulas: ['ChatGPT para secretárias: o que pode fazer por você', 'Redigir emails profissionais com IA', 'Resumir documentos longos com IA', 'Criar planilhas e fórmulas com ajuda da IA', 'Cuidados e limites: quando não usar IA'] },
    ],
  },
]
