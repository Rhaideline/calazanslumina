import type { CursoInterativo } from '@/components/curso-viewer/types'

export const cursoIAMarketing: CursoInterativo = {
  slug: 'ia-marketing-digital-iniciantes',
  nome: 'IA Completa para Marketing Digital',
  modulos: [
    {
      titulo: 'Módulo 1: O Novo Marketing Digital',
      slides: [
        {
          type: 'content',
          title: 'Por que a IA mudou tudo em 2026?',
          body: 'Até pouco tempo atrás, fazer marketing digital exigia uma equipe inteira: um redator para os textos, um designer para as artes, um gestor de tráfego para os anúncios e um analista para os dados. Em 2026, a Inteligência Artificial permite que uma única pessoa faça o trabalho de uma agência inteira com 10x mais velocidade. Não se trata de substituir humanos, mas de dar superpoderes a quem sabe usar as ferramentas certas.',
          tip: 'A IA não vai tirar o seu emprego, mas quem sabe usar IA vai tirar o emprego de quem não sabe.',
        },
        {
          type: 'diagram',
          title: 'O Salto de Produtividade com IA',
          diagramType: 'barchart',
          data: {
            items: [
              { label: 'Criação de Texto', value: 90 },
              { label: 'Design de Artes', value: 85 },
              { label: 'Roteiros de Vídeo', value: 80 },
              { label: 'Análise de Dados', value: 75 },
              { label: 'Planejamento', value: 95 },
            ],
          },
          caption: '% de redução de tempo em tarefas de marketing usando IA em 2026',
        },
        {
          type: 'content',
          title: 'O Mindset do Profissional de Marketing com IA',
          body: 'O segredo não está na ferramenta, mas na estratégia. O profissional moderno atua como um "Diretor Criativo": ele define a visão, o público e o tom de voz, enquanto a IA executa o trabalho braçal. Você precisa aprender a ser um bom "curador" — saber identificar o que a IA gerou de bom e o que precisa ser ajustado para conectar de verdade com o seu cliente humano.',
          tip: 'Sempre revise o conteúdo da IA. O toque humano é o que gera confiança e vendas reais.',
        },
        {
          type: 'quiz',
          question: 'Qual é o papel principal do profissional de marketing na era da IA?',
          options: [
            'Escrever cada palavra manualmente',
            'Deixar a IA fazer tudo sozinha sem revisar',
            'Atuar como um Diretor Criativo, guiando e refinando o trabalho da IA',
            'Ignorar a IA e continuar fazendo como em 2010',
          ],
          correctIndex: 2,
          explanation: 'A IA é uma ferramenta de execução. O humano define a estratégia, a criatividade e faz o refinamento final para garantir qualidade.',
        },
        {
          type: 'summary',
          title: 'Resumo do Módulo 1',
          points: [
            'A IA permite que uma pessoa faça o trabalho de uma agência inteira',
            'O ganho de produtividade em tarefas como texto e planejamento passa de 80%',
            'O profissional moderno é um Diretor Criativo que guia a tecnologia',
            'Estratégia e curadoria humana são essenciais para o sucesso',
            'A IA é o seu "estagiário super inteligente" que nunca dorme',
          ],
        },
      ],
    },
    {
      titulo: 'Módulo 2: ChatGPT para Estrategistas',
      slides: [
        {
          type: 'content',
          title: 'A Anatomia do Prompt Perfeito',
          body: 'Um "Prompt" é a instrução que você dá para a IA. Se você pede algo genérico ("escreva um post"), recebe algo genérico. O prompt perfeito segue a estrutura R-C-I: \n1. **Role (Papel):** Diga quem a IA deve ser ("Aja como um especialista em copy"). \n2. **Context (Contexto):** Explique o cenário ("Estou vendendo um curso de IA para iniciantes"). \n3. **Instruction (Instrução):** O que deve ser feito ("Crie 3 ganchos de Reels focados em dor").',
          tip: 'Quanto mais específico você for, melhor será o resultado. Dê exemplos do estilo que você gosta.',
        },
        {
          type: 'diagram',
          title: 'Estrutura de um Prompt de Alta Performance',
          diagramType: 'steps',
          data: {
            steps: [
              'Persona: "Aja como um [Especialista]"',
              'Contexto: "Meu público é [Perfil do Cliente]"',
              'Tarefa: "Crie um [Tipo de Conteúdo]"',
              'Formato: "Entregue em formato de [Tabela/Lista]"',
              'Tom: "Use um tom [Amigável/Autoridade]"',
            ],
          },
          caption: 'Siga este roteiro para nunca mais receber respostas genéricas da IA',
        },
        {
          type: 'content',
          title: 'Criando sua Persona e Público-Alvo',
          body: 'Não tente vender para todo mundo. Use o ChatGPT para mapear as dores, desejos e medos do seu cliente ideal. Peça: "Aja como um pesquisador de mercado. Liste os 5 maiores medos de um pequeno empresário que ainda não usa marketing digital". Com essas informações, seu marketing será muito mais assertivo e persuasivo.',
          tip: 'Peça para a IA criar "Personas" detalhadas com nome, idade, profissão e rotina.',
        },
        {
          type: 'quiz',
          question: 'O que significa a sigla R-C-I na criação de prompts?',
          options: [
            'Rápido, Curto e Inteligente',
            'Role (Papel), Context (Contexto) e Instruction (Instrução)',
            'Revisar, Copiar e Imprimir',
            'Redação, Criação e Imagem',
          ],
          correctIndex: 1,
          explanation: 'Definir o Papel (quem a IA é), o Contexto (o cenário) e a Instrução (o que fazer) é a base para prompts profissionais.',
        },
        {
          type: 'summary',
          title: 'Resumo do Módulo 2',
          points: [
            'Prompts genéricos geram resultados genéricos; especificidade é a chave',
            'Use a estrutura Persona + Contexto + Tarefa + Formato',
            'O ChatGPT é um excelente pesquisador de público-alvo e dores do cliente',
            'Defina o tom de voz para que a IA escreva como você ou sua marca',
            'Sempre peça opções variadas para poder escolher a melhor',
          ],
        },
      ],
    },
    {
      titulo: 'Módulo 3: Design e Imagem com IA',
      slides: [
        {
          type: 'content',
          title: 'Criação de Imagens Profissionais',
          body: 'Você não precisa mais de bancos de imagens genéricos ou de saber usar Photoshop avançado. Ferramentas como Midjourney, DALL-E 3 e Leonardo.ai permitem criar fotos de produtos, ilustrações e artes para redes sociais apenas descrevendo o que você quer. Em 2026, a qualidade dessas imagens é indistinguível de fotos reais, permitindo que pequenos negócios tenham um visual de marca "Premium".',
          tip: 'Use palavras-chave como "fotografia profissional", "iluminação de estúdio" e "alta resolução" nos seus prompts de imagem.',
        },
        {
          type: 'diagram',
          title: 'Onde usar cada ferramenta de Imagem',
          diagramType: 'icons',
          data: {
            items: [
              { icon: 'camera', label: 'Fotos de Produto (DALL-E)' },
              { icon: 'pencil', label: 'Ilustrações (Midjourney)' },
              { icon: 'magic', label: 'Edição Rápida (Canva IA)' },
              { icon: 'user', label: 'Avatares (Leonardo.ai)' },
            ],
          },
          caption: 'As ferramentas essenciais para o seu arsenal visual em 2026',
        },
        {
          type: 'content',
          title: 'Remoção de Fundo e Edição com um Clique',
          body: 'A IA também simplificou a edição. Hoje você remove o fundo de uma foto de produto em 1 segundo, ou usa o "Preenchimento Generativo" para adicionar elementos a uma foto existente (ex: colocar um computador em cima de uma mesa vazia). Isso economiza horas de trabalho manual e permite criar anúncios muito mais atraentes sem custo adicional.',
          tip: 'O Canva possui ferramentas de IA integradas que são perfeitas para iniciantes.',
        },
        {
          type: 'quiz',
          question: 'Qual a principal vantagem de usar IA para imagens no marketing?',
          options: [
            'As imagens são sempre em preto e branco',
            'Economia de tempo e custo com visual profissional e personalizado',
            'Não precisa mais ter um site',
            'A IA tira fotos da sua câmera sozinha',
          ],
          correctIndex: 1,
          explanation: 'A IA democratiza o design de alta qualidade, permitindo que qualquer pessoa crie visuais profissionais sem gastar fortunas ou horas editando.',
        },
        {
          type: 'summary',
          title: 'Resumo do Módulo 3',
          points: [
            'IA gera imagens exclusivas e profissionais a partir de texto',
            'Midjourney e DALL-E 3 são as ferramentas líderes em 2026',
            'Edição de imagens (remover fundo, expandir fotos) agora leva segundos',
            'Pequenos negócios podem ter visual de marca "Premium" com baixo custo',
            'O segredo está em descrever bem a iluminação e o estilo desejado',
          ],
        },
      ],
    },
    {
      titulo: 'Módulo 4: Copywriting e Estratégia de Vendas',
      slides: [
        {
          type: 'content',
          title: 'Escrita que Vende (Copywriting)',
          body: 'Copywriting é a arte de escrever para convencer alguém a tomar uma ação. Com IA, você pode aplicar modelos clássicos de venda como o AIDA (Atenção, Interesse, Desejo, Ação) em segundos. Peça ao ChatGPT: "Aja como um copywriter sênior. Use o modelo AIDA para escrever uma legenda de Instagram vendendo meu serviço de consultoria". O resultado será um texto estruturado para converter, não apenas informar.',
          tip: 'Peça para a IA criar 5 opções de títulos diferentes para o mesmo post.',
        },
        {
          type: 'diagram',
          title: 'O Funil de Vendas com IA',
          diagramType: 'steps',
          data: {
            steps: [
              'Topo (Atrair): Reels e Posts de Dicas (IA gera ideias)',
              'Meio (Engajar): Carrosséis e Stories (IA cria roteiros)',
              'Fundo (Converter): Página de Vendas e Direct (IA faz a Copy)',
              'Pós-Venda: Email de Boas-vindas (IA automatiza)',
            ],
          },
          caption: 'Como a IA atua em cada etapa da jornada do seu cliente',
        },
        {
          type: 'content',
          title: 'Scripts de Vídeo para Reels e TikTok',
          body: 'Vídeos curtos são a melhor forma de crescer hoje. A IA pode criar roteiros que prendem a atenção nos primeiros 3 segundos (o "hook"). Use prompts como: "Crie um roteiro de 30 segundos para um Reels sobre [Assunto]. Comece com um gancho polêmico e termine com uma chamada para me seguir". Isso garante que seus vídeos tenham estrutura de retenção, aumentando suas chances de viralizar.',
          tip: 'Peça roteiros com indicações de "O que mostrar na tela" em cada frase.',
        },
        {
          type: 'quiz',
          question: 'O que é o modelo AIDA muito usado em copywriting?',
          options: [
            'Ajuda, Inteligência, Dados e Análise',
            'Atenção, Interesse, Desejo e Ação',
            'Anúncio, Imagem, Divulgação e Alcance',
            'Algoritmo, Interação, Design e Audiência',
          ],
          correctIndex: 1,
          explanation: 'AIDA é a estrutura clássica: atrair Atenção, gerar Interesse, criar Desejo e convocar para a Ação.',
        },
        {
          type: 'summary',
          title: 'Resumo do Módulo 4',
          points: [
            'Use modelos de copy como AIDA para aumentar suas conversões',
            'IA cria roteiros de vídeo focados em retenção e ganchos fortes',
            'Sempre peça variações de títulos e chamadas para ação (CTAs)',
            'A IA ajuda a manter a consistência no tom de voz da sua marca',
            'Scripts de Reels e TikTok devem ser curtos e diretos ao ponto',
          ],
        },
      ],
    },
  ],
}
