export interface Curso {
  slug: string
  nome: string
  descricaoCurta: string
  descricaoLonga: string
  preco: number
  precoOriginal?: number                  // pra ancoragem de desconto (ex: 297)
  modulos: { titulo: string; aulas: string[] }[]
  paraQuem: string[]
  oQueVaiAprender: string[]
  imagem: string
  destaque?: boolean
  pdfDisponivel?: boolean
  gratuito?: boolean
  linkPagamento?: string
  tipo?: 'pdf' | 'video' | 'pdf+video'   // formato de entrega (default: pdf)
  duracaoTotal?: string                   // ex: "12 horas" — usado em cursos video
  tier?: 'free' | 'standard' | 'premium' // tier do produto — premium = carro-chefe
  numeroPaginas?: number                  // pra mostrar tamanho do PDF
  bonus?: string[]                        // bônus inclusos (apenas premium)
  totalAulas?: number                     // pra mostrar tamanho do curso
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
    descricaoLonga: 'Este curso foi criado com carinho para pessoas da terceira idade que querem aprender a usar o ChatGPT no dia a dia. Com linguagem clara, ilustrações grandes, exemplos práticos e passo a passo visual ilustrado em PDF, você vai descobrir como essa ferramenta pode facilitar sua vida — desde escrever mensagens até tirar dúvidas de saúde, receitas e muito mais. Totalmente gratuito.',
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
      garantia: 'Curso 100% gratuito. Conteudo em PDF. Sem suporte individual.',
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
    nome: 'IA & ChatGPT — Curso Completo',
    descricaoCurta: 'O guia definitivo para quem está começando. Aprenda a usar Inteligência Artificial para criar conteúdo, vender mais e automatizar seu marketing do zero.',
    descricaoLonga: 'Este curso foi desenhado especificamente para quem está iniciando no marketing digital e quer usar o poder da IA para acelerar seus resultados. Você vai aprender a usar as principais ferramentas do mercado para criar artes, textos, vídeos e estratégias completas, mesmo que nunca tenha trabalhado com marketing antes.',
    preco: 9.9,
    destaque: true,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/69a8cc1484b2d7dfdd5e1370',
    imagem: '/cursos/capa-ia-chatgpt-completo.svg',
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
      garantia: 'Conteudo em PDF. Acesso imediato apos pagamento. Sem suporte individual.',
      valorReal: 'R$ 497,00',
      urgencia: 'Acesso imediato apos pagamento.',
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
    // IA & ChatGPT — EDIÇÃO COMPLETA (carro-chefe)
    nome: 'IA do Zero ao Avançado — Edição Completa',
    descricaoCurta: 'A bíblia da IA pra brasileiros. 95 páginas. 10 IAs detalhadas. 50 templates de prompt. 9 planos por profissão. Tudo que você precisa pra dominar IA — sem ser técnico. Apenas R$ 9,90.',
    descricaoLonga: 'A edição mais completa de IA para empreendedor brasileiro lançada em 2026. 95 páginas no formato A4 com design editorial premium. Cobre 10 IAs em detalhe (ChatGPT, Claude, Gemini, DALL-E, Midjourney, Canva AI, ElevenLabs, Suno, Runway, Cursor/Copilot), com 4 páginas dedicadas a cada uma, explicando passo a passo como criar conta, usar e aplicar no seu negócio. Inclui ainda o framework CRIA de Prompt Engineering, 50 templates de prompt copiáveis numerados por nicho, e 9 planos práticos por profissão (autônomo, vendedor, professor, dona de casa empreendedora, profissional liberal, criador de conteúdo, atendente, gestor, aposentado 60+). De R$ 297 por R$ 9,90 (preço de lançamento).',
    preco: 9.9,
    precoOriginal: 297,
    destaque: true,
    tier: 'premium',
    numeroPaginas: 95,
    totalAulas: 33,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/6a08f6ef1d5a394a682e4ee1',
    imagem: '/cursos/capa-ia-do-zero-ao-avancado.svg',
    bonus: [
      'BÔNUS 1 · 50 templates de prompt copiáveis por nicho (R$ 97)',
      'BÔNUS 2 · 9 planos de implementação por profissão (R$ 47)',
      'BÔNUS 3 · Glossário com 18 termos pra leigos (R$ 27)',
      'BÔNUS 4 · Plano de 30 dias com rotina semanal (R$ 47)',
      'BÔNUS 5 · Comparativo das 10 IAs do mercado (R$ 47)',
    ],
    paraQuem: [
      'Brasileiro empreendedor que NUNCA usou IA mas vê todo mundo falando',
      'Dono de pequeno negócio (até R$ 50k/mês) que quer multiplicar produtividade',
      'Profissional liberal (advogado, médico, dentista, contador, arquiteto)',
      'Vendedor, atendente, gestor que vive de comunicação',
      'Dona de casa empreendedora que vende pelo Insta/WhatsApp',
      'Aposentado(a) com mais de 60 que quer começar negócio próprio',
      'Autônomo (motorista, entregador, freelancer) buscando se diferenciar',
      'Criador de conteúdo que quer dobrar volume sem perder qualidade',
    ],
    oQueVaiAprender: [
      'Fundamentos da IA — o que é, os 3 tipos, generativa vs preditiva, mitos',
      'Setup pra leigos — criar conta nas 3 principais IAs passo a passo',
      'ChatGPT, Claude e Gemini — qual usar para cada situação',
      'DALL-E e Midjourney — gerar imagens profissionais com IA',
      'Canva AI — design pra quem não é designer',
      'ElevenLabs — narração com voz humana sintética',
      'Suno — música original em 1 minuto, sem copyright',
      'Runway — vídeo curto com IA (Reels, anúncios)',
      'Cursor & Copilot — programar sem saber programar',
      'Framework CRIA de Prompt Engineering (do básico ao avançado)',
      '50 templates de prompt prontos para copiar e adaptar',
      '9 planos de implementação por profissão',
      'Plano de 30 dias com rotina semanal de IA',
    ],
    vsl: {
      hook: 'A bíblia da IA pra brasileiro. 95 páginas. 10 IAs. 50 templates. R$ 9,90.',
      subhook: 'A edição mais completa de IA já feita pra brasileiro. 95 páginas no formato A4 com design editorial premium, cobrindo as 10 principais IAs do mercado em profundidade. De R$ 297 por R$ 9,90 (preço de lançamento).',
      problemas: [
        'Vê todo mundo falando de IA e se sente atrasado(a)',
        'Não sabe a diferença entre ChatGPT, Claude e Gemini — e qual usar pra quê',
        'Já tentou usar IA e achou que "não serve" — porque ninguém te ensinou o framework certo',
        'Perde horas todo dia em tarefas que IA faria em minutos',
        'Quer ensinar seus funcionários ou família a usar IA, mas não sabe por onde começar',
        'Está pagando agência R$ 3-5k/mês pra coisas que poderia fazer sozinho(a) com IA',
      ],
      transformacao: 'Em 30 dias seguindo o plano semanal do livro, você vai dominar as 10 IAs mais importantes do mercado em 2026. Vai responder cliente em minutos (não horas), criar 10 posts por semana sem agência, analisar contrato de 40 páginas em 1 minuto, e ter sua biblioteca pessoal de 50 templates de prompt copiáveis pra qualquer situação.',
      antesDepois: [
        { antes: 'Não sabia nem o que é prompt', depois: 'Domina framework CRIA com 50 templates copiáveis' },
        { antes: 'Usava só ChatGPT, sem saber das outras', depois: 'Conhece e usa as 10 IAs essenciais do mercado' },
        { antes: 'Pagava R$ 3-5k/mês de agência', depois: 'Faz sozinho(a) com IA o que agência cobrava' },
        { antes: '"IA não serve pro meu negócio"', depois: 'Tem plano específico pra sua profissão (1 dos 9)' },
        { antes: 'Horas pra responder email difícil', depois: 'Resposta pronta em 30 segundos' },
      ],
      depoimentos: [
        { nome: 'Carlos Eduardo, 42 anos', cidade: 'São Paulo · pintor', texto: 'Sou pintor há 18 anos, nunca tinha mexido com IA. Em 1 semana já automatizei toda resposta de orçamento no WhatsApp. Triplicou meu fechamento.' },
        { nome: 'Fernanda Lima, 35 anos', cidade: 'Belo Horizonte · advogada', texto: 'Os 50 templates de prompt valem 100x o preço do livro. Uso o de "análise de contrato" todo dia. Cliente acha que tenho equipe inteira por trás.' },
        { nome: 'Roberto Santos, 67 anos', cidade: 'Recife · aposentado', texto: 'Achei que era tarde pra aprender, com 67 anos. O capítulo pra "60+" mostrou que não. Hoje uso ChatGPT melhor que meu neto de 25.' },
        { nome: 'Patrícia Almeida, 29 anos', cidade: 'Framingham, MA · empreendedora', texto: 'Brasileira nos EUA aqui. O livro fala minha língua, com exemplos do meu mercado. Vale cada centavo dos R$ 9,90.' },
      ],
      objecoes: [
        { pergunta: 'Preciso saber programar ou ser técnico?', resposta: 'Não. O livro foi feito explicitamente pra leigos. Tem glossário, passo a passo de criar conta, e até capítulo dedicado a quem nunca usou computador.' },
        { pergunta: 'É muito conteúdo. Vou dar conta?', resposta: 'São 95 páginas, mas organizadas em 33 capítulos curtos. Você não precisa ler tudo de uma vez. O plano de 30 dias indica o que ler em cada semana.' },
        { pergunta: 'Funciona pra qualquer profissão?', resposta: 'Sim. A Parte 5 tem 9 planos diferentes por profissão: autônomo, vendedor, professor, dona de casa empreendedora, profissional liberal, criador, atendente, gestor e aposentado 60+. Você acha o seu.' },
        { pergunta: 'É vídeo ou PDF?', resposta: 'PDF de 95 páginas, design editorial premium. Você baixa no celular ou computador, acessa pra sempre, pode imprimir. Sem mensalidade, sem login, sem expiração.' },
        { pergunta: 'Por que tão barato (R$ 9,90)?', resposta: 'Preço de lançamento. Vai subir gradualmente até R$ 47. Quem compra agora trava o preço pra sempre.' },
        { pergunta: 'Vai ficar desatualizado?', resposta: 'IA evolui rápido, mas os FUNDAMENTOS aqui (CRIA, framework de prompt, lógica de uso) são perenes. Atualizações de modelo (GPT-5, Claude 5) são contempladas em edição 2.0 com desconto pra quem já comprou.' },
      ],
      garantia: 'PDF de 95 páginas entregue por email imediatamente após pagamento. Sem letrinha miúda. Sem mensalidade. Acesso pra sempre.',
      valorReal: 'R$ 297,00 (equivalente a 6 cursos em 1)',
      urgencia: 'Preço de lançamento R$ 9,90. Sobe pra R$ 27 dia 1º de junho. Trava o preço agora.',
    },
    modulos: [
      { titulo: 'Parte 1 — Fundamentos da IA (8 páginas)', aulas: ['O que é Inteligência Artificial — definição sem jargão', 'Os 3 tipos · Estreita, Geral, Super', 'IA Generativa vs IA Preditiva', '6 mitos e verdades sobre IA', 'Quiz de revisão'] },
      { titulo: 'Parte 2 — Setup pra Leigos (8 páginas)', aulas: ['Antes de tudo · o básico do computador', 'Como criar conta · ChatGPT, Claude e Gemini', 'Celular ou computador? · qual usar quando', 'Glossário com 18 termos', '5 prompts pra testar HOJE', 'Checklist de validação'] },
      { titulo: 'Parte 3 — As 10 IAs essenciais (40 páginas)', aulas: ['Cap. 9 · ChatGPT (4 pgs) — interface, free vs plus, 5 usos práticos', 'Cap. 10 · Claude (4 pgs) — 3 modelos, Projects, Artifacts', 'Cap. 11 · Gemini (3 pgs) — integração com Gmail e Docs', 'Cap. 12 · DALL-E (3 pgs) — 5 prompts pra imagem', 'Cap. 13 · Midjourney (3 pgs) — comandos e parâmetros', 'Cap. 14 · Canva AI (3 pgs) — 7 recursos AI', 'Cap. 15 · ElevenLabs (3 pgs) — voz humana e clonagem', 'Cap. 16 · Suno (3 pgs) — música em 1 minuto', 'Cap. 17 · Runway (3 pgs) — vídeo curto com IA', 'Cap. 18 · Cursor & Copilot (3 pgs) — código sem programar'] },
      { titulo: 'Parte 4 — Prompt Engineering CRIA (10 páginas)', aulas: ['A receita do prompt perfeito · framework CRIA', '5 técnicas avançadas · Few-shot, Chain-of-Thought, Persona, Restrições, Auto-avaliação', '50 templates copiáveis numerados por nicho (Conteúdo, Vendas, Atendimento, Marketing, Análise, Pessoal)'] },
      { titulo: 'Parte 5 — Aplicações por Profissão (10 páginas)', aulas: ['Autônomo (motorista, entregador, freelancer)', 'Vendedor / comercial', 'Professor / educador', 'Dona de casa empreendedora', 'Profissional liberal (advogado, médico, dentista)', 'Criador de conteúdo', 'Atendente / vendedora de loja', 'Gestor / dono de negócio', 'Aposentado / 60+'] },
      { titulo: 'Parte 6 — Plano de 30 Dias (5 páginas)', aulas: ['Auditoria das suas tarefas em 5 minutos', 'Sua rotina semanal com IA · semana modelo', 'Como medir resultado em 30 dias', 'Próximos cursos · catálogo Calazans Lumina'] },
    ],
  },
  {
    slug: 'marketing-digital-definitivo',
    nome: 'Marketing Digital — O Curso Definitivo',
    descricaoCurta: '146 paginas. 13 modulos. 4 niveis. Do absoluto zero ao operador estrategico. Engenharia de marketing para 2026 — com 13 frameworks proprios e 11 diagramas vetoriais.',
    descricaoLonga: 'A edicao mais completa de marketing digital pra brasileiro lancada em 2026. 146 paginas no formato A4 com design editorial premium. Cobre os 13 modulos completos em 4 niveis progressivos: Iniciante Absoluto (M0-M3), Operacional (M4-M6), Intermediario (M7-M9) e Avancado (M10-M12). Cada modulo escrito como capitulo de livro tecnico: texto editorial extenso, exemplos brasileiros reais, frameworks proprios desenhados em diagramas vetoriais, exercicios obrigatorios com entregavel. 13 frameworks proprietarios nomeados (CRIA, RANK CRIA, BANTAR, WELL, AREA, e mais), 11 diagramas vetoriais editoriais, e dados verificaveis (Cialdini, Schwartz 1966, Christensen HBS, Kahneman/Tversky, Sinek, dados Meta/Google/Akamai). De R$ 297 por R$ 9,90 (preco de lancamento).',
    preco: 9.9,
    precoOriginal: 297,
    destaque: true,
    tier: 'premium',
    numeroPaginas: 146,
    totalAulas: 78,
    pdfDisponivel: true,
    linkPagamento: 'https://link.fastpaydirect.com/payment-link/6a0f4ed9ee2395af2c17f99d',
    imagem: '/cursos/capa-marketing-digital-definitivo.svg',
    bonus: [
      'BONUS 1 · 13 frameworks proprios nomeados (R$ 97)',
      'BONUS 2 · 11 diagramas vetoriais editoriais (R$ 47)',
      'BONUS 3 · 13 entregaveis com template (R$ 47)',
      'BONUS 4 · Glossario com 30 termos de marketing (R$ 27)',
      'BONUS 5 · Stack 2026 por budget (R$ 0 / R$ 500 / R$ 5k / R$ 50k) (R$ 47)',
    ],
    paraQuem: [
      'Empreendedor brasileiro que nunca operou marketing digital com metodo',
      'Profissional de marketing junior que quer subir pra senior em 12 meses',
      'Dono de pequeno negocio que paga agencia e quer entender o que esta sendo feito',
      'Freelancer/consultor que quer estruturar oferta premium baseada em frameworks',
      'Brasileira nos EUA empreendedora que precisa marketing especifico pro mercado',
      'Pessoa em transicao de carreira pra marketing digital (do zero ao avancado em 1 curso)',
      'Estudante de marketing/publicidade que quer estado da arte 2026',
      'CMO/Head of Marketing que quer atualizar playbook (E-E-A-T, AEO, GEO, IA stack)',
    ],
    oQueVaiAprender: [
      'Os 13 frameworks proprios - CRIA, RANK CRIA, BANTAR, WELL, AREA e mais',
      'Como o algoritmo do Google pensa em 2026 (E-E-A-T, HCU, AEO, GEO)',
      'Schwartz 5+1 estagios de consciencia + Cialdini 7 com caveat 2026',
      'JTBD framework de Christensen (Harvard) - como entrevistar cliente em 4 perguntas',
      'Switch Equation - Push + Pull > Habit + Anxiety',
      'Brand Pyramid Sinek + Naming Science 7 tipos + Tone of Voice 4 dimensoes',
      'SEO 2026 completo - Google + AEO (ChatGPT/Perplexity) + GEO + Local + Programmatic',
      'Paid Media 2026 - Meta Advantage+, Google PMax, Atribuicao multi-toque',
      'Pillar + Cluster + Pipeline 1->12->48 (re-uso de conteudo)',
      'Welcome Sequence W.E.L.L. - 7 emails que convertem 12-25% de leads frios',
      'CRM com GoHighLevel + Lead Scoring BANTAR + WhatsApp como CRM',
      'CRO honesto - Heatmaps, A/B test estatistico, Page Speed = Revenue',
      'Stack IA por funcao - 12 jobs com 12 ferramentas certas',
      'GA4 mastery + Looker Studio + Dashboard 5-W (data acionavel)',
      'OKR para marketing + T-shaped marketer + CMO 90-Day Plan',
    ],
    vsl: {
      hook: 'Marketing Digital. O Curso Definitivo. Do absoluto zero ao operador estrategico em 13 modulos.',
      subhook: '146 paginas no formato A4 com design editorial premium. 13 frameworks proprios. 11 diagramas vetoriais. 13 entregaveis com template. Dados verificaveis (Cialdini, Schwartz, Christensen HBS, Kahneman, Sinek). De R$ 297 por R$ 9,90.',
      problemas: [
        'Ja fez varios cursos de marketing digital mas sente que ainda nao tem METODO',
        'Pula entre Reels, Meta Ads e SEO sem entender como conectar tudo',
        'Investe em anuncio sem saber se ROI e real ou ultimo-clique enganando voce',
        'Sabe que IA importa mas nao sabe qual usar pra cada tipo de trabalho',
        'Quer subir de salario / cobrar mais como freelancer mas falta o vocabulario de estrategista',
        'Esta gastando R$ 3-15k/mes em agencia e quer entender o que esta sendo feito',
      ],
      transformacao: 'Em 13 modulos progressivos, voce sai do absoluto zero (Modulo 0 - "o que e internet") ate estrategista de marketing (Modulo 12 - CMO 90-Day Plan). Nao e curso de informacao - e curso de OPERACAO. Voce sai com 13 entregaveis prontos pro portfolio e um plano estrategico de 12 meses do seu proprio negocio.',
      antesDepois: [
        { antes: 'Sabia fazer Reels, nao sabia conectar com funil', depois: 'Opera sistema integrado organico + paid + email + CRM' },
        { antes: 'Investia em paid sem saber atribuicao real', depois: 'Sabe MMM, incrementalidade e Budget 70/20/10' },
        { antes: 'Achava SEO complicado demais', depois: 'Domina E-E-A-T, AEO, GEO, RANK CRIA e Programmatic' },
        { antes: 'Usava ChatGPT pra tudo', depois: 'Tem Stack IA por funcao com 12 jobs definidos' },
        { antes: 'Media likes e seguidores', depois: 'Mede North Star, LTV:CAC, ROAS, Dashboard 5-W' },
        { antes: 'Era executor que recebia ordem', depois: 'E estrategista que escreve CMO 90-Day Plan' },
      ],
      depoimentos: [
        { nome: 'Carolina Mendes, 34 anos', cidade: 'Sao Paulo · empreendedora', texto: 'Fiz 3 cursos antes de marketing digital. Esse e o unico que ensina METODO. Cada framework tem nome, exercicio, entregavel. Saio operando, nao so sabendo.' },
        { nome: 'Roberto Tavares, 28 anos', cidade: 'Florianopolis · freelancer', texto: 'O modulo 4 sozinho vale o preco. RANK CRIA + AEO + GEO mudaram meu jogo. Em 60 dias subi de R$ 4k pra R$ 12k cobrando como senior.' },
        { nome: 'Patricia Silva, 41 anos', cidade: 'Boston, MA · brasileira nos EUA', texto: 'Marketing pro publico brasileiro nos EUA e nicho complicado. O curso tem exemplo pra essa realidade especifica. Vale 100x os R$ 9,90.' },
        { nome: 'Diego Lopes, 39 anos', cidade: 'Belo Horizonte · CMO', texto: 'Sou CMO ha 8 anos. Achei que sabia. O modulo 12 me deu o vocabulario que faltava - OKR pra marketing, CMO 90-Day Plan. Vou aplicar no proximo trimestre.' },
      ],
      objecoes: [
        { pergunta: 'Funciona pra quem nunca operou marketing digital?', resposta: 'Sim. O Modulo 0 comeca do absoluto zero - "o que e internet de verdade", glossario de 30 termos. Voce nao precisa saber NADA antes de comecar.' },
        { pergunta: 'Funciona pra profissional ja experiente?', resposta: 'Sim. Os Niveis 3 e 4 (M7-M12) entregam estado da arte 2026 - AEO, GEO, Stack IA, OKR, CMO 90-Day Plan. Mesmo CMO senior vai aprender.' },
        { pergunta: 'E vidio ou PDF?', resposta: 'PDF de 146 paginas com design editorial premium. Voce baixa no celular ou computador, acessa pra sempre, pode imprimir. Sem mensalidade, sem login, sem expiracao.' },
        { pergunta: 'Por que tao barato (R$ 9,90)?', resposta: 'Preco de lancamento. Vai subir gradualmente. Quem compra agora trava o preco e tem acesso vitalicio.' },
        { pergunta: 'Vai ficar desatualizado?', resposta: 'IA e plataformas evoluem rapido, mas os FUNDAMENTOS aqui (Schwartz, Cialdini, JTBD, Sinek, OKR) sao perenes. Frameworks proprios (CRIA, RANK CRIA) sao atemporais. Atualizacoes anuais inclusas.' },
        { pergunta: 'Quanto tempo pra terminar?', resposta: '4-6 horas/semana por 12 semanas. Cada modulo tem entregavel obrigatorio - voce so passa pro proximo quando entregar. E desenho intencional - quem pula entregavel nao aprende de verdade.' },
      ],
      garantia: 'PDF de 146 paginas entregue por email imediatamente apos pagamento. Sem letrinha miuda. Sem mensalidade. Acesso pra sempre.',
      valorReal: 'R$ 297,00 (equivalente a 13 cursos especializados em 1)',
      urgencia: 'Preco de lancamento R$ 9,90. Trava o preco agora.',
    },
    modulos: [
      { titulo: 'Modulo 0 — O Mundo Digital Pra Quem Nunca Entrou Direito', aulas: ['O que e internet de verdade (sem mistificacao)', 'Site, rede social, app, plataforma, IA - 5 lugares diferentes', 'Glossario com 30 termos basicos (SEO, CTR, CPC, CAC, LTV, ROI...)', 'As 4 contas profissionais obrigatorias (Gmail, Drive, WhatsApp Biz, GBP)', 'Arquivos na nuvem - nunca perca trabalho', 'Seguranca em 3 regras + 3 golpes brasileiros pra reconhecer', 'Framework Mapa Digital 1a Vista'] },
      { titulo: 'Modulo 1 — Foundations 2026', aulas: ['Marketing, Vendas, Propaganda, Branding - 4 coisas diferentes', 'Schwartz 5+1 estagios de consciencia + Algorithm Aware', 'Quem e o cliente brasileiro em 2026 (dados verificaveis)', 'Organico + pago + email + comunidade = UM funil', 'Framework CRIA - Contexto, Resistencia, Intencao, Acao'] },
      { titulo: 'Modulo 2 — Psicologia do Comprador', aulas: ['Cialdini 7 principios com caveat 2026', 'JTBD de Christensen - 4 perguntas que substituem questionario de 50', 'Loss aversion 2:1 (Kahneman/Tversky)', 'Switch Equation - Push + Pull > Habit + Anxiety', 'Framework Entrevista JTBD'] },
      { titulo: 'Modulo 3 — Brand Architecture', aulas: ['Brand = promessa repetivel (nao logo, nao cor)', 'Piramide Sinek - Why, How, What, Proof', 'Naming Science - 7 tipos de nome com casos BR', 'Tone of Voice em 4 dimensoes', 'Framework Brand Brief 1-Page'] },
      { titulo: 'Modulo 4 — SEO 2026 (Google + AI Engines)', aulas: ['Google Search - E-E-A-T, HCU, Core Web Vitals, Schema', 'AEO - Answer Engine Optimization (ChatGPT, Perplexity, Gemini)', 'GEO - Generative Engine Optimization (ser CITADO por IAs)', 'Local SEO + Google Business Profile + Programmatic SEO', 'Sistema RANK CRIA - substitui os 200 fatores'] },
      { titulo: 'Modulo 5 — Paid Media Mastery', aulas: ['Meta Ads 2026 - Advantage+ assumiu', 'Google Ads - Search, PMax, Demand Gen', 'TikTok + LinkedIn avancado', 'Atribuicao - saber qual canal vendeu de verdade', 'Framework Budget 70/20/10'] },
      { titulo: 'Modulo 6 — Content Strategy & Distribution', aulas: ['Distribuicao > Criacao (regra que muda jogo)', 'Pillar + Cluster topic model', 'Repurpose Pipeline 1 -> 12 -> 48', 'Framework Pipeline 1-12-48 com calendario'] },
      { titulo: 'Modulo 7 — Email & Lifecycle Marketing', aulas: ['Welcome Sequence - 7 emails em 14 dias', 'Cart Abandonment - recupera 18-25% das vendas perdidas', 'RFM Segmentation - 5 segmentos em vez de blast', 'Deliverability Tech - SPF, DKIM, DMARC, BIMI', 'Framework Sequencia W.E.L.L.'] },
      { titulo: 'Modulo 8 — CRM & Sales Funnels', aulas: ['Funnel Hacking - engenharia reversa de funis', 'GoHighLevel (GHL) masterclass', 'Lead Scoring BANTAR - 6 criterios adaptados pro BR', 'WhatsApp como CRM serio', 'Framework Funil BANTAR 6 estagios'] },
      { titulo: 'Modulo 9 — Conversion Rate Optimization', aulas: ['Heatmaps e Session Recordings (Microsoft Clarity gratuito)', 'A/B Testing estatisticamente honesto', 'Page Speed = Revenue (Core Web Vitals 2026)', 'Framework A.R.E.A. - ciclo de 14 dias'] },
      { titulo: 'Modulo 10 — IA para Marketing', aulas: ['IA Textual - ChatGPT, Claude, Gemini, Perplexity, Grok', 'IA de Imagem - DALL-E, Midjourney, Flux, Stable Diffusion', 'IA de Video e Voz - Runway, Sora, HeyGen, ElevenLabs', 'Automacao sem codigo - Make, Zapier, n8n + IA', 'Framework Stack IA por funcao (12 jobs)'] },
      { titulo: 'Modulo 11 — Analytics & Mensuracao', aulas: ['GA4 mastery - eventos custom, conversoes, audiences', 'Looker Studio - dashboard executivo em 2 horas', 'North Star + Cohort + Funnel Analytics', 'Framework Dashboard 5-W (W1-W5 por KPI)'] },
      { titulo: 'Modulo 12 — Strategy, Operations & Career', aulas: ['OKRs para Marketing - metas que movem', 'T-shaped marketer - generalista com profundidade', 'Agency vs in-house - calculadora por estagio', 'Framework CMO 90-Day Plan (Listen / Quick Wins / Strategy)', 'Plano estrategico 12 meses (entregavel final)'] },
    ],
  },
  {
    slug: 'marketing-digital-iniciantes',
    nome: 'Marketing Digital para Iniciantes',
    descricaoCurta: 'Aprenda os fundamentos do marketing digital do zero. Ideal para quem está começando e quer entender como atrair clientes pela internet.',
    descricaoLonga: 'Curso completo para quem nunca fez marketing digital. Desde os conceitos básicos até a implementação prática de estratégias que geram resultado. Você vai aprender a criar presença digital, atrair visitantes, gerar leads e converter em vendas.',
    preco: 9.9,
    precoOriginal: 197,
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
      depoimentos: [{ nome: 'Mariana Costa', cidade: 'Campinas', texto: 'Finalmente entendi como funciona o marketing digital. O curso é prático e vai direto ao ponto.' }, { nome: 'João Pedro', cidade: 'Porto Alegre', texto: 'Melhor custo-benefício impossível. R$10 por um curso que vale muito mais.' }],
      objecoes: [{ pergunta: 'Já existem milhares de cursos. Por que este?', resposta: 'Este é focado em prática e resultados. Sem enrolação. Feito por quem implementa marketing digital todos os dias.' }, { pergunta: 'R$10 é muito barato. É sério?', resposta: 'Sim! Acreditamos que conhecimento deve ser acessível. O preço baixo é intencional.' }],
      garantia: 'Conteudo em PDF. Acesso imediato. Sem suporte individual.',
      valorReal: 'R$ 297,00',
      urgencia: 'Acesso imediato apos pagamento.',
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
    preco: 0,
    gratuito: true,
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
      garantia: 'Conteudo em PDF. Acesso imediato. Sem suporte individual.',
      valorReal: 'R$ 197,00',
      urgencia: 'Acesso imediato apos pagamento.',
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
    preco: 0,
    gratuito: true,
    pdfDisponivel: true,
    linkPagamento: '',
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
      garantia: 'Conteudo em PDF. Acesso imediato. Sem suporte individual.',
      valorReal: 'R$ 297,00',
      urgencia: 'Acesso imediato apos pagamento.',
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
    preco: 9.9,
    precoOriginal: 297,
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
      garantia: 'Conteudo em PDF. Acesso imediato. Sem suporte individual.',
      valorReal: 'R$ 297,00',
      urgencia: 'Acesso imediato apos pagamento.',
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
      garantia: 'Curso 100% gratuito. Conteudo em PDF.',
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
  {
    slug: 'ebook-ia-marketing-sites',
    nome: 'Ebook: IA para Marketing Digital — Como Criar Sites com Claude',
    descricaoCurta: 'Guia completo de 44 páginas: aprenda a criar sites profissionais usando Inteligência Artificial, sem saber programar. Inclui prompts prontos e cases reais.',
    descricaoLonga: 'Este ebook ensina passo a passo como usar o Claude (IA) para criar sites profissionais do zero. Você não precisa saber programar — se sabe digitar, consegue. Inclui 7 módulos completos, 10 prompts prontos para copiar e usar, 3 cases reais com dados do Google Search Console, tabela de preços para cobrar clientes e checklist completo.',
    preco: 9.9,
    precoOriginal: 197,
    destaque: true,
    pdfDisponivel: true,
    linkPagamento: 'https://lp.beeprohub.com/payment-link/69c4a64bfb727d9c905d2823',
    imagem: '/cursos/capa-ebook-ia-marketing-sites.svg',
    paraQuem: ['Empreendedores que querem criar sites sem depender de programadores', 'Freelancers que querem vender sites usando IA', 'Agências que querem escalar a criação de sites', 'Iniciantes que nunca programaram na vida', 'Profissionais de marketing que querem adicionar sites ao portfólio'],
    oQueVaiAprender: ['Criar sites profissionais usando IA (sem programar)', 'Publicar sites gratuitamente na internet', 'Fazer sites aparecerem no Google (SEO)', 'Fazer sites aparecerem nas IAs como ChatGPT e Gemini (AEO)', 'Adicionar formulários, WhatsApp, chatbot IA', 'Integrar com GoHighLevel (CRM e automações)', 'Cobrar clientes R$3.000 a R$15.000 por site'],
    vsl: {
      hook: 'Crie sites profissionais em horas usando IA. Sem saber programar.',
      subhook: 'O mesmo método que gerou +24.500% de impressões e +706% de cliques para meus clientes.',
      problemas: ['Quer criar sites mas não sabe programar', 'Paga caro para desenvolvedores e demora semanas', 'Não sabe como fazer o site aparecer no Google', 'Quer ganhar dinheiro vendendo sites mas não sabe como começar'],
      transformacao: 'Em 44 páginas você vai aprender a criar, publicar e ranquear sites profissionais usando IA. Com prompts prontos para copiar e colar.',
      antesDepois: [{ antes: 'Dependente de programadores caros', depois: 'Criando sites sozinho em horas' }, { antes: 'Sites invisíveis no Google', depois: 'Página 1 do Google com SEO + AEO' }, { antes: 'Sem saber cobrar', depois: 'Vendendo sites por R$3.000-15.000' }],
      depoimentos: [{ nome: 'Case Real', cidade: 'Massachusetts, EUA', texto: 'O site RS Development saiu de 358 para 88.103 impressões em 4 meses. +24.500% de crescimento. 100% orgânico.' }],
      objecoes: [{ pergunta: 'Preciso saber programar?', resposta: 'NÃO! Se você sabe digitar no WhatsApp, consegue seguir o curso.' }, { pergunta: 'Funciona mesmo?', resposta: 'Os cases do ebook são reais, com dados do Google Search Console. Sem edição.' }],
      garantia: 'Conteudo em PDF. Acesso imediato apos pagamento. Sem suporte individual.',
      valorReal: 'Este ebook custa menos que 1 hora de trabalho de um programador.',
      urgencia: 'Comece a criar sites com IA hoje mesmo.',
    },
    modulos: [
      { titulo: 'Módulo 1 — O que é IA e por que muda tudo', aulas: ['O que mudou em 2026', 'Por que o Claude é a melhor IA para sites', 'O que você vai conseguir fazer'] },
      { titulo: 'Módulo 2 — Instalando tudo no computador', aulas: ['Node.js (motor do site)', 'VS Code (editor)', 'Git (backup)', 'Claude Code (a IA)', 'Vercel (publicação grátis)'] },
      { titulo: 'Módulo 3 — Criando seu primeiro site', aulas: ['Como pedir um site para a IA', 'Os 7 ingredientes do pedido perfeito', 'Passo a passo completo', 'Refinando e publicando'] },
      { titulo: 'Módulo 4 — SEO com IA', aulas: ['O que é SEO (explicação simples)', 'Pedindo SEO para o Claude', 'Páginas por cidade (o segredo)', 'Aparecendo nas IAs (AEO)'] },
      { titulo: 'Módulo 5 — Funções avançadas', aulas: ['Formulário com notificação', 'Chatbot IA no WhatsApp', 'Sistema de pagamento', 'Cursos online'] },
      { titulo: 'Módulo 6 — Cases reais', aulas: ["Wolf's Siding +706% cliques", 'RS Development +24.500% impressões', 'JH Painting chatbot IA 24/7', 'Quanto cobrar'] },
      { titulo: 'Módulo 7 — Prompts prontos', aulas: ['10 prompts para copiar e usar', 'Sites, landing pages, SEO, blog, AEO', 'Formulários e publicação'] },
    ],
  },
]

// Smart upsell — recomenda cursos COMPLEMENTARES (não competidores).
// Cada curso aponta pra outros 3 que naturalmente fazem sentido depois.
// Regra: quem comprou IA, recomenda ferramentas de aplicação. Quem comprou
// ferramenta especifica, recomenda fundamentos. Quem comprou idoso/iniciante,
// recomenda proximo nivel.
const RELATED_RULES: Record<string, string[]> = {
  'marketing-digital-definitivo': ['ia-chatgpt-completo', 'ia-marketing-digital-iniciantes', 'ebook-ia-marketing-sites'],
  'ia-chatgpt-completo': ['marketing-digital-definitivo', 'ia-marketing-digital-iniciantes', 'redes-sociais-que-vendem'],
  'ia-marketing-digital-iniciantes': ['marketing-digital-definitivo', 'ia-chatgpt-completo', 'google-meu-negocio-do-zero'],
  'chatgpt-para-idosos': ['ia-chatgpt-completo', 'marketing-digital-iniciantes', 'ferramentas-digitais-secretarias'],
  'marketing-digital-iniciantes': ['marketing-digital-definitivo', 'ia-marketing-digital-iniciantes', 'google-meu-negocio-do-zero'],
  'google-meu-negocio-do-zero': ['marketing-digital-definitivo', 'ia-marketing-digital-iniciantes', 'redes-sociais-que-vendem'],
  'redes-sociais-que-vendem': ['marketing-digital-definitivo', 'ia-marketing-digital-iniciantes', 'funis-de-vendas-simplificado'],
  'funis-de-vendas-simplificado': ['marketing-digital-definitivo', 'ia-marketing-digital-iniciantes', 'redes-sociais-que-vendem'],
  'ferramentas-digitais-secretarias': ['chatgpt-para-idosos', 'ia-chatgpt-completo', 'marketing-digital-iniciantes'],
  'ebook-ia-marketing-sites': ['marketing-digital-definitivo', 'ia-chatgpt-completo', 'ia-marketing-digital-iniciantes'],
}

export function getRelatedCursos(slug: string, fallback: number = 3): Curso[] {
  const rule = RELATED_RULES[slug]
  if (rule) {
    const related = rule.map((s) => cursos.find((c) => c.slug === s)).filter(Boolean) as Curso[]
    if (related.length >= fallback) return related.slice(0, fallback)
  }
  // Fallback: outros cursos que não o atual
  return cursos.filter((c) => c.slug !== slug).slice(0, fallback)
}
