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
    slug: 'ia-chatgpt-completo',
    nome: 'IA & ChatGPT — Curso Completo',
    descricaoCurta: 'Domine a Inteligência Artificial do zero ao avançado. Aprenda a usar o ChatGPT para criar conteúdo, automatizar tarefas e impulsionar seu negócio.',
    descricaoLonga: 'Este é o guia definitivo para dominar a Inteligência Artificial e o ChatGPT. Desde os conceitos fundamentais até técnicas avançadas de prompt engineering, automação de tarefas e integração com ferramentas de marketing digital. Ideal para empreendedores que querem usar IA para multiplicar seus resultados.',
    preco: 20,
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
      hook: 'Em 2026, quem não domina IA está sendo substituído. Você vai ficar parado assistindo?',
      subhook: 'Do zero ao avançado em Inteligência Artificial e ChatGPT. Crie conteúdo, automatize tarefas e multiplique resultados — enquanto seus concorrentes ainda estão copiando e colando.',
      problemas: [
        'Passa horas criando conteúdo que poderia fazer em 15 minutos com IA',
        'Seus concorrentes já estão usando ChatGPT e você está ficando para trás',
        'Tentou usar o ChatGPT mas só recebeu respostas genéricas e inúteis',
        'Não sabe como transformar IA em resultado real para o seu negócio',
        'Paga caro em freelancers para tarefas que a IA faria em segundos',
        'Tem medo de ser substituído por quem domina IA',
      ],
      transformacao: 'Imagine abrir o ChatGPT e em 10 minutos ter pronto o conteúdo de uma semana inteira. Legendas, artigos, emails de venda, análise de concorrência — tudo feito com qualidade profissional. É isso que você vai aprender aqui.',
      antesDepois: [
        { antes: '3 horas para escrever um post', depois: '15 minutos com prompt perfeito' },
        { antes: 'Respostas genéricas do ChatGPT', depois: 'Resultados profissionais com prompt engineering' },
        { antes: 'Pagando R$ 500/mês em copywriter', depois: 'Criando tudo sozinho com IA' },
        { antes: 'Medo de ser substituído pela IA', depois: 'Usando IA como seu maior diferencial' },
        { antes: 'Sem ideia do que postar', depois: 'Calendário editorial gerado por IA em minutos' },
      ],
      depoimentos: [
        { nome: 'Rafael Mendes', cidade: 'São Paulo', texto: 'Antes gastava 4 horas por dia criando conteúdo. Depois do curso, faço tudo em 40 minutos. Os prompts que aprendi são absurdos de bons. Melhor investimento de R$ 20 que já fiz.' },
        { nome: 'Camila Rocha', cidade: 'Belo Horizonte', texto: 'Eu achava que sabia usar ChatGPT até fazer esse curso. A diferença entre um prompt amador e um profissional é brutal. Meus textos de venda melhoraram 300%.' },
        { nome: 'Diego Oliveira', cidade: 'Curitiba', texto: 'O módulo de automação com IA no WhatsApp mudou meu negócio. Configurei um chatbot que atende meus leads 24h e minha taxa de resposta foi de 12% para 89%.' },
      ],
      objecoes: [
        { pergunta: 'Preciso saber programar?', resposta: 'Zero programação. O curso é 100% prático, focado em usar as ferramentas prontas que já existem.' },
        { pergunta: 'Já uso ChatGPT, vale a pena?', resposta: 'Se você ainda recebe respostas genéricas, sim. Prompt engineering é o que separa amadores de profissionais. Você vai aprender técnicas que 95% dos usuários não conhecem.' },
        { pergunta: 'R$ 20 é o preço real?', resposta: 'Sim. Sem upsell, sem mensalidade. Pagamento único de R$ 20 com acesso vitalício. Cursos similares custam R$ 297 a R$ 997.' },
        { pergunta: 'E se eu não gostar?', resposta: 'São R$ 20 — menos que um café com bolo. Mas o retorno potencial é de milhares por mês em produtividade e resultados.' },
      ],
      garantia: 'Satisfação garantida. Se em 7 dias você não sentir que valeu cada centavo, entre em contato que devolvemos seu investimento.',
      valorReal: 'Cursos de IA com esse nível de conteúdo custam entre R$ 297 e R$ 997. Você leva tudo por apenas R$ 20 — pagamento único, acesso vitalício.',
      urgencia: 'O preço de R$ 20 é promocional e pode mudar a qualquer momento. Quem domina IA agora sai na frente. Cada dia sem esse conhecimento é dinheiro perdido.',
    },
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
    imagem: '/cursos/capa-marketing-digital-iniciantes.svg',
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
    vsl: {
      hook: 'Seu negócio é invisível na internet. Enquanto isso, seus concorrentes estão roubando seus clientes — todos os dias.',
      subhook: 'Aprenda os fundamentos que 90% dos empreendedores ignoram. Em 6 módulos práticos, você vai de zero a gerando leads pela internet.',
      problemas: [
        'Ninguém encontra seu negócio quando pesquisa no Google',
        'Posta nas redes sociais mas ninguém liga, curte ou compra',
        'Não sabe a diferença entre tráfego pago e orgânico',
        'Já gastou dinheiro com "marketing" e não viu resultado nenhum',
        'Sabe que precisa estar na internet mas não sabe por onde começar',
        'Vê concorrentes crescendo online enquanto você depende do boca a boca',
      ],
      transformacao: 'Em 24 aulas diretas ao ponto, você vai entender exatamente como funciona o marketing digital e vai sair com um plano de ação prático para o SEU negócio. Sem enrolação, sem teoria desnecessária.',
      antesDepois: [
        { antes: 'Invisível no Google', depois: 'Aparecendo para quem procura seus serviços' },
        { antes: 'Posts sem engajamento', depois: 'Conteúdo estratégico que atrai leads' },
        { antes: 'Dinheiro jogado em anúncios', depois: 'ROI mensurável em cada centavo' },
        { antes: 'Dependendo só de indicação', depois: 'Máquina de geração de leads online' },
      ],
      depoimentos: [
        { nome: 'Ana Paula Santos', cidade: 'Salvador', texto: 'Eu não entendia NADA de marketing digital. Depois do curso, montei meu Google Business, comecei a postar com estratégia e em 30 dias já recebi 12 novos clientes pela internet. R$ 20 mais bem gastos da minha vida.' },
        { nome: 'Marcos Vinícius', cidade: 'Recife', texto: 'Tentei aprender sozinho por YouTube e fiquei mais confuso. Esse curso é organizado, direto e prático. Em uma semana eu já estava aplicando tudo no meu negócio.' },
        { nome: 'Juliana Ferreira', cidade: 'Porto Alegre', texto: 'O módulo de SEO abriu minha mente. Eu não sabia que podia aparecer no Google sem pagar por anúncios. Meu site já está na primeira página para a minha cidade.' },
      ],
      objecoes: [
        { pergunta: 'Funciona para qualquer tipo de negócio?', resposta: 'Sim. Os fundamentos de marketing digital são universais. Funciona para serviços, produtos, e-commerce, prestadores autônomos — qualquer negócio que queira clientes pela internet.' },
        { pergunta: 'Preciso ter site para começar?', resposta: 'Não. O curso ensina desde o básico, incluindo como criar sua presença digital do zero. Você sai sabendo montar tudo.' },
        { pergunta: 'Não tenho tempo para estudar', resposta: 'São aulas curtas e diretas. 15-20 minutos por dia é suficiente. Em uma semana você termina o curso e já sai aplicando.' },
        { pergunta: 'Por que tão barato?', resposta: 'Porque acreditamos que todo empreendedor merece acesso a esse conhecimento. R$ 20 é o preço de um lanche. O retorno pode ser de milhares por mês.' },
      ],
      garantia: 'Satisfação garantida. Se não sentir que valeu o investimento em 7 dias, devolvemos seu dinheiro.',
      valorReal: 'Mentorias de marketing digital custam R$ 2.000 a R$ 10.000. Aqui você leva o essencial por R$ 20 — pagamento único.',
      urgencia: 'Cada dia sem marketing digital é um dia entregando clientes para o concorrente. Por R$ 20 você começa HOJE.',
    },
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
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8ea7284b2d750dd5e3a71',
    imagem: '/cursos/capa-google-meu-negocio-do-zero.svg',
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
    vsl: {
      hook: 'Seus clientes estão procurando você no Google Maps agora. E encontrando seu concorrente.',
      subhook: '93% das buscas locais passam pelo Google Maps. Se seu negócio não aparece lá — ou aparece mal configurado — você está perdendo dinheiro todos os dias.',
      problemas: [
        'Seu negócio não aparece quando clientes procuram no Google Maps',
        'Seu perfil existe mas está incompleto, sem fotos e sem avaliações',
        'Concorrentes com serviço pior aparecem antes de você',
        'Não sabe como conseguir mais avaliações 5 estrelas',
        'Recebe avaliações negativas e não sabe como responder',
        'Nunca postou nada no Google Business e nem sabia que isso existia',
      ],
      transformacao: 'Em 4 módulos práticos, seu perfil vai estar completo, otimizado e aparecendo para quem procura seus serviços. Com fotos estratégicas, posts regulares e uma máquina de avaliações 5 estrelas funcionando no automático.',
      antesDepois: [
        { antes: 'Invisível no Google Maps', depois: 'Top 3 para suas palavras-chave' },
        { antes: 'Zero avaliações', depois: 'Dezenas de reviews 5 estrelas' },
        { antes: 'Perfil abandonado', depois: 'Posts semanais atraindo clientes' },
        { antes: 'Perdendo para concorrentes piores', depois: 'Dominando as buscas locais' },
      ],
      depoimentos: [
        { nome: 'Roberto Almeida', cidade: 'Campinas', texto: 'Em 2 semanas depois de aplicar as técnicas do curso, meu perfil foi de 0 para 23 avaliações 5 estrelas. As ligações do Google triplicaram. Curso absurdamente prático.' },
        { nome: 'Fernanda Lima', cidade: 'Goiânia', texto: 'Eu nem sabia que existia Google Posts. Comecei a postar como o curso ensina e meu perfil começou a aparecer para buscas que antes nem sonhava. Resultado real por R$ 20.' },
        { nome: 'Carlos Eduardo', cidade: 'Fortaleza', texto: 'Tinha meu perfil há 3 anos e nunca tinha otimizado direito. As dicas de fotos e categorias fizeram meu perfil ir da página 2 para o top 3 em menos de um mês.' },
      ],
      objecoes: [
        { pergunta: 'Funciona para qualquer cidade?', resposta: 'Sim. As técnicas funcionam para qualquer negócio local em qualquer cidade do Brasil. Quanto menor a concorrência, mais rápido você domina.' },
        { pergunta: 'Meu negócio é home-based, funciona?', resposta: 'Sim! O Google Business tem opção de área de atendimento para quem não tem loja física. O curso cobre isso em detalhes.' },
        { pergunta: 'Já tenho perfil no Google, preciso do curso?', resposta: 'Se você não está no top 3 para seus serviços, então seu perfil não está otimizado. O curso ensina técnicas que 90% dos donos de negócio não conhecem.' },
        { pergunta: 'Quanto tempo até ver resultado?', resposta: 'Resultados iniciais em 7-14 dias. Ranking completo em 30-60 dias. Depende da concorrência na sua região.' },
      ],
      garantia: 'Se em 30 dias seu perfil não melhorar, devolvemos seu investimento. Simples assim.',
      valorReal: 'Agências cobram R$ 500 a R$ 2.000 por mês para gerenciar Google Business. Aqui você aprende a fazer sozinho por R$ 20.',
      urgencia: 'Enquanto você pensa, seus concorrentes estão roubando os clientes que buscam no Google. Configure hoje e comece a aparecer amanhã.',
    },
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
    imagem: '/cursos/capa-redes-sociais-que-vendem.svg',
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
    vsl: {
      hook: 'Você posta todos os dias e ninguém compra. O problema não é a frequência — é a estratégia.',
      subhook: 'Descubra a estratégia Info-First que o algoritmo do Instagram está favorecendo em 2026 e transforme seguidores em clientes pagantes.',
      problemas: [
        'Posta todo dia e o engajamento só cai',
        'Tem milhares de seguidores mas ninguém compra',
        'Não sabe o que postar e fica paralisado(a)',
        'Copia o que os concorrentes fazem e não funciona',
        'Gasta horas criando conteúdo bonito que ninguém vê',
        'O algoritmo parece estar contra você',
      ],
      transformacao: 'Você vai aprender a estratégia que está fazendo perfis pequenos venderem mais que perfis com 100K seguidores. Conteúdo que informa, não que vende — e ironicamente é o que mais vende. Em 4 módulos, suas redes sociais viram máquina de leads.',
      antesDepois: [
        { antes: 'Posts com 15 curtidas', depois: 'Conteúdo salvo e compartilhado centenas de vezes' },
        { antes: 'Sem ideia do que postar', depois: 'Calendário de 30 dias pronto em 1 hora' },
        { antes: 'Seguidores fantasmas', depois: 'Comunidade engajada que compra' },
        { antes: 'Horas criando conteúdo', depois: 'Batch content: 1 semana em 2 horas' },
      ],
      depoimentos: [
        { nome: 'Patrícia Souza', cidade: 'Florianópolis', texto: 'Meu Instagram tinha 2.000 seguidores e nenhuma venda. Apliquei a estratégia Info-First e em 30 dias fechei 8 clientes novos. Sem pagar por anúncio. R$ 20 que mudaram meu negócio.' },
        { nome: 'Lucas Barbosa', cidade: 'Manaus', texto: 'O calendário editorial do curso é genial. Nunca mais fiquei sem saber o que postar. E o mais louco: posts simples com informação útil geraram mais vendas que meus posts "bonitos".' },
        { nome: 'Vanessa Costa', cidade: 'Vitória', texto: 'Largei a perfeição e comecei a postar conteúdo útil como o curso ensina. Meu alcance triplicou em 2 semanas. Os salvamentos explodiram. E as DMs de clientes não param.' },
      ],
      objecoes: [
        { pergunta: 'Funciona para qualquer nicho?', resposta: 'A estratégia Info-First funciona para qualquer nicho que resolva problemas: serviços, saúde, educação, beleza, gastronomia, tech — qualquer um.' },
        { pergunta: 'Preciso ter muitos seguidores?', resposta: 'Não. A estratégia funciona melhor com audiências pequenas e nichadas. Perfis com 500 seguidores vendem mais que perfis com 50K quando a estratégia é certa.' },
        { pergunta: 'E se eu não sei fazer design?', resposta: 'O curso ensina ferramentas gratuitas como Canva. E a verdade? Posts simples e informativos performam melhor que posts "bonitos" sem conteúdo.' },
        { pergunta: 'Quanto tempo por dia preciso dedicar?', resposta: 'Com batch content, você cria uma semana de conteúdo em 2 horas. Depois é só agendar e interagir.' },
      ],
      garantia: 'Se em 30 dias suas redes sociais não melhorarem, devolvemos os R$ 20. Zero risco.',
      valorReal: 'Social media managers cobram R$ 1.500 a R$ 5.000 por mês. Aqui você aprende a estratégia por R$ 20.',
      urgencia: 'O algoritmo de 2026 favorece quem age agora. Cada post sem estratégia é uma oportunidade desperdiçada.',
    },
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
    imagem: '/cursos/capa-funis-de-vendas-simplificado.svg',
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
    vsl: {
      hook: 'Você gera leads. Eles entram. E somem. Ninguém faz follow-up. Ninguém fecha. O problema é que você não tem funil.',
      subhook: 'Aprenda a montar funis de vendas que trabalham por você 24 horas — do primeiro clique até o pagamento no WhatsApp.',
      problemas: [
        'Gera leads mas ninguém retorna as mensagens',
        'Não tem sistema de follow-up — cada lead morre em 24h',
        'Gasta dinheiro em anúncios mas não sabe qual canal converte',
        'Perde vendas porque demora para responder',
        'Não sabe a diferença entre landing page, site e funil',
        'Concorrentes automatizaram tudo enquanto você responde lead por lead',
      ],
      transformacao: 'Imagine um sistema onde cada lead que entra recebe automaticamente uma mensagem no WhatsApp em 30 segundos, um email de apresentação em 1 hora, e um follow-up em 24h. Sem você fazer nada. É isso que um funil faz.',
      antesDepois: [
        { antes: 'Leads sumindo sem resposta', depois: 'Follow-up automático em 30 segundos' },
        { antes: 'Planilha desorganizada de contatos', depois: 'CRM visual com pipeline de vendas' },
        { antes: 'Sem saber o que funciona', depois: 'Métricas claras por etapa do funil' },
        { antes: 'Respondendo leads manualmente', depois: 'Automação WhatsApp + Email + SMS' },
      ],
      depoimentos: [
        { nome: 'Anderson Silva', cidade: 'Ribeirão Preto', texto: 'Antes eu perdia 80% dos leads por demora no retorno. Montei o funil como o curso ensina e minha taxa de conversão foi de 3% para 18%. Em 1 mês o investimento de R$ 20 já retornou R$ 4.000.' },
        { nome: 'Priscila Nunes', cidade: 'Brasília', texto: 'Eu achava que funil de vendas era coisa complicada. O curso simplifica tudo. Em 3 dias montei minha primeira landing page e sequência de emails. Já estou recebendo leads qualificados.' },
        { nome: 'Thiago Martins', cidade: 'Cuiabá', texto: 'A parte de GoHighLevel abriu minha mente. Nunca imaginei que dava para automatizar tanto o processo comercial. Hoje meu funil gera 30+ leads por semana no automático.' },
      ],
      objecoes: [
        { pergunta: 'Preciso de ferramentas caras?', resposta: 'Não. O curso ensina conceitos que funcionam em qualquer plataforma. Você pode começar com ferramentas gratuitas e escalar depois.' },
        { pergunta: 'Funciona para negócios de serviço?', resposta: 'Especialmente para serviços! O funil resolve o principal problema: transformar interessados em clientes de forma automatizada.' },
        { pergunta: 'É difícil configurar?', resposta: 'O curso é passo a passo. Se você sabe usar WhatsApp, consegue montar um funil. As ferramentas de hoje são visuais e intuitivas.' },
        { pergunta: 'Quanto tempo para ver resultado?', resposta: 'Funis bem configurados geram resultados em 7-14 dias. O primeiro lead pode chegar no mesmo dia que você ativa.' },
      ],
      garantia: 'Se em 7 dias você não sentir que valeu os R$ 20, devolvemos sem perguntas.',
      valorReal: 'Consultores de funil cobram R$ 3.000 a R$ 15.000 para configurar. Aqui você aprende a fazer sozinho por R$ 20.',
      urgencia: 'Cada dia sem funil é dinheiro jogado fora em marketing. Os leads que você gera hoje estão morrendo sem follow-up.',
    },
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
    imagem: '/cursos/capa-ferramentas-digitais-secretarias.svg',
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
    vsl: {
      hook: 'Sua chefe pediu uma planilha "para ontem". Você ainda não sabe usar Google Sheets. Isso precisa mudar.',
      subhook: 'Domine as ferramentas digitais que toda secretária moderna precisa. De Google Workspace a IA — torne-se a profissional que nenhuma empresa quer perder. Totalmente gratuito.',
      problemas: [
        'Não domina Google Workspace e perde tempo com tarefas simples',
        'Medo de perder o emprego para alguém mais atualizada',
        'Formatação de documentos demora o triplo do necessário',
        'Não sabe organizar agenda e reuniões online de forma profissional',
        'Precisa criar planilhas e não sabe por onde começar',
        'Todo mundo fala de IA no escritório e você se sente por fora',
      ],
      transformacao: 'Em 6 módulos, você vai dominar todas as ferramentas que uma secretária de alto nível precisa. Google Workspace completo, organização digital, apresentações profissionais e até uso de IA para acelerar seu trabalho. Você vai se tornar indispensável.',
      antesDepois: [
        { antes: 'Formatando documento por 2 horas', depois: 'Template pronto em 5 minutos' },
        { antes: 'Sem saber usar Google Sheets', depois: 'Criando planilhas e relatórios profissionais' },
        { antes: 'Reuniões desorganizadas', depois: 'Agenda integrada com Google Meet' },
        { antes: 'Emails longos e confusos', depois: 'Comunicação profissional com templates' },
        { antes: 'Medo de IA', depois: 'Usando ChatGPT para redigir emails e resumir docs' },
      ],
      depoimentos: [
        { nome: 'Sandra Oliveira', cidade: 'Belo Horizonte', texto: 'Trabalho como secretária há 15 anos e achava que sabia de tudo. Depois do curso descobri atalhos e ferramentas que me economizam 2 horas por dia. Minha chefe notou a diferença.' },
        { nome: 'Márcia Santos', cidade: 'São Paulo', texto: 'O módulo de IA no escritório mudou minha vida. Agora uso o ChatGPT para redigir emails, resumir atas de reunião e criar planilhas. Passei a ser a referência de tecnologia no escritório.' },
        { nome: 'Cláudia Ferreira', cidade: 'Rio de Janeiro', texto: 'Estava com medo de perder meu emprego para alguém mais jovem e atualizada. Fiz o curso num fim de semana e agora sou eu que ensino as novas ferramentas para as colegas.' },
      ],
      objecoes: [
        { pergunta: 'Preciso ter computador?', resposta: 'Ideal sim, mas muitas ferramentas funcionam no celular também. O importante é começar a aprender.' },
        { pergunta: 'Já trabalho com Word/Excel, vale a pena?', resposta: 'Google Workspace é o futuro do escritório. Cada vez mais empresas migram para a nuvem. Aprender agora é se preparar para o mercado.' },
        { pergunta: 'É realmente gratuito?', resposta: '100% gratuito. Sem cobrança, sem pegadinha. Acesso online e PDF para download.' },
        { pergunta: 'Não tenho tempo para estudar', resposta: 'Aulas de 10-15 minutos. Estude no intervalo do almoço ou antes de dormir. Em uma semana você termina.' },
      ],
      garantia: '100% gratuito — zero risco. Comece agora e transforme sua carreira.',
      valorReal: 'Cursos de Google Workspace custam R$ 97 a R$ 297 no mercado. Este é totalmente gratuito para empoderar secretárias e assistentes.',
      urgencia: 'Empresas estão migrando para ferramentas digitais agora. Quem não se atualiza fica para trás. Comece hoje — é gratuito.',
    },
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
