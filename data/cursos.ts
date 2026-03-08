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
]
