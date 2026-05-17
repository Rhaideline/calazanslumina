export interface VideoReel {
  slug: string
  titulo: string
  descricao: string
  duracao: string
  url: string
  thumbnail?: string
  cursoRelacionado?: string
  categoria: 'reel' | 'curso' | 'viral'
  destaque?: boolean
}

export const videos: VideoReel[] = [
  // ───────── Curso Completo de IA (10 minutos) ─────────
  {
    slug: 'curso-completo-ia',
    titulo: 'Aula Completa: IA do Zero ao Avançado',
    descricao:
      'A aula completa em 10 minutos: as 3 IAs essenciais (ChatGPT, Claude, Gemini), a receita do prompt perfeito, exemplos práticos de uso e os 5 erros que destroem qualquer resultado. Esse vídeo é o resumo do livro de 95 páginas.',
    duracao: '10:00',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/e06bbb73-1475-42c5-b17d-6ff4a7fcf249.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'curso',
    destaque: true,
  },
  {
    slug: 'curso-ia-10min',
    titulo: 'Curso IA em 10 minutos (versão direta)',
    descricao:
      'A versão sem rodeios: tudo o que você precisa saber pra usar IA hoje, sem perder tempo. Ideal pra quem nunca usou ChatGPT e quer começar agora.',
    duracao: '10:00',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/40988515-465d-4232-8556-fe4556c1cd56.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'curso',
  },

  // ───────── Reels do Curso (cortes verticais) ─────────
  {
    slug: 'reel-1-abertura',
    titulo: 'Reel 1 · Por que você precisa aprender IA hoje',
    descricao:
      'Abertura do curso. A IA já está mudando profissões inteiras — quem aprende agora sai na frente. Quem espera fica pra trás.',
    duracao: '0:45',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/f0d15ebe-d54d-429e-b079-d8bcebab7ba5.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'reel',
  },
  {
    slug: 'reel-2-3-ias-essenciais',
    titulo: 'Reel 2 · As 3 IAs essenciais (e pra que serve cada uma)',
    descricao:
      'ChatGPT pra texto, Claude pra análise profunda, Gemini pra imagem e Google. Cada uma tem uma força. Eu te mostro qual usar pra cada situação.',
    duracao: '0:50',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/921c9222-8865-4e85-abf6-b101a37795cf.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'reel',
  },
  {
    slug: 'reel-3-receita-prompt',
    titulo: 'Reel 3 · A receita do prompt perfeito',
    descricao:
      'Contexto + Tarefa + Formato + Exemplo. Essa é a fórmula. Te mostro na prática: prompt vago vs. prompt seguindo a receita — resultado completamente diferente.',
    duracao: '0:55',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/f3bd2c8a-63d2-4dfc-828d-fcce9c0cdadc.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'reel',
  },
  {
    slug: 'reel-4-ruim-vs-bom',
    titulo: 'Reel 4 · Prompt ruim vs. prompt bom — comparação real',
    descricao:
      'Mesma pergunta, dois prompts diferentes. Um traz uma resposta genérica, outro traz exatamente o que você precisa. A diferença é absurda.',
    duracao: '0:50',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/99cdc501-65c6-48d6-97c4-316758f0f8d9.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'reel',
  },
  {
    slug: 'reel-5-usos-praticos-1-2',
    titulo: 'Reel 5 · Casos práticos: trabalho e estudo',
    descricao:
      'Como usar IA no dia a dia do trabalho (emails, relatórios, planilhas) e nos estudos (resumos, fichamentos, simulações de prova).',
    duracao: '0:55',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/3f84cb2f-feab-43ca-b6a8-c58580fbee4b.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'reel',
  },
  {
    slug: 'reel-6-uso-negocios',
    titulo: 'Reel 6 · Usando IA pra escalar o próprio negócio',
    descricao:
      'IA criando posts, respondendo cliente no WhatsApp, gerando ideias de campanha. Ferramenta de R$ 0 que substitui um time inteiro de marketing.',
    duracao: '0:50',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/6554eac9-aafe-44cf-b03d-d0ad7fe60ed2.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'reel',
  },
  {
    slug: 'reel-7-erros-cta',
    titulo: 'Reel 7 · Os 5 erros que destroem suas respostas',
    descricao:
      'Os erros que quase todo iniciante comete: prompts curtos demais, sem contexto, sem exemplos, sem revisão. Evite esses 5 e seu uso de IA muda.',
    duracao: '0:55',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/f80e1513-2539-4830-9543-82de931aa9fb.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'reel',
  },

  // ───────── Reels virais standalone ─────────
  {
    slug: 'reel-3x-resultados',
    titulo: 'Como triplicar seus resultados usando IA',
    descricao:
      'O reel viral: três mudanças simples que multiplicam por 3 a qualidade de qualquer resposta de IA. Salva esse pra usar todo dia.',
    duracao: '1:11',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/8503fd75-86e5-4ba2-aed3-c311d5067357.mp4',
    cursoRelacionado: 'ia-chatgpt-completo',
    categoria: 'viral',
    destaque: true,
  },
  {
    slug: 'reel-marketing-com-ia',
    titulo: 'Marketing com IA: o que ninguém te conta',
    descricao:
      'A verdade sobre marketing com IA em 2026: o que funciona, o que é hype e como agências reais estão usando ChatGPT pra escalar criação de conteúdo.',
    duracao: '0:45',
    url: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/abc31c33-1c5c-4279-88d8-1ffaf2c03a56.mp4',
    cursoRelacionado: 'ia-marketing-digital-iniciantes',
    categoria: 'viral',
  },
]

export const videosDestaque = videos.filter((v) => v.destaque)
export const videosPorCategoria = {
  curso: videos.filter((v) => v.categoria === 'curso'),
  reel: videos.filter((v) => v.categoria === 'reel'),
  viral: videos.filter((v) => v.categoria === 'viral'),
}

export function getVideoBySlug(slug: string) {
  return videos.find((v) => v.slug === slug)
}
