/**
 * Os vídeos dela, servidos do próprio domínio.
 *
 * DE ONDE VEM. Reels do @calazanslumina, baixados e recodificados para a web:
 * 608x1080, H.264 CRF 35 com remoção de granulado. O original de cada um fica
 * fora de `public/`, em `_midia-fonte/`, para não subir junto no deploy.
 *
 * ⚠️ O RESUMO NÃO É TRANSCRIÇÃO AUTOMÁTICA.
 * O reconhecimento de fala erra feio no português falado rápido — trocou
 * "prestador de serviço" por "pensador de serviço", "reels" por "rios",
 * "ranqueamento" por "arranqueamento". Publicar isso seria pôr palavra errada
 * na boca dela. Então o resumo é escrito a partir da legenda que ela mesma
 * publicou no Instagram, que é texto dela, limpo e conferido. O único com
 * transcrição literal é o primeiro, conferido contra a legenda queimada na
 * imagem do próprio vídeo.
 *
 * ⚠️ UM NÚMERO FICOU DE FORA DE PROPÓSITO.
 * No vídeo de CRM ela diz "é comprovado que 70% dos leads que não recebem
 * atendimento imediato não convertem". O vídeo é dela e fica como está, mas
 * o número não é repetido em título, resumo nem schema: a regra da casa é que
 * todo número publicado tem a origem declarada do lado.
 */

export type VideoRhai = {
  slug: string
  /** título curto, de cartão */
  titulo: string
  /** o que a pessoa vai ver, nas palavras dela */
  resumo: string
  /** segundos */
  duracao: number
  /** AAAA-MM-DD da publicação original */
  publicado: string
  /** o serviço a que este vídeo pertence, quando pertence a um */
  servico?: string
}

export const INSTAGRAM = 'https://www.instagram.com/calazanslumina'

export const videos: VideoRhai[] = [
  {
    slug: 'google-meu-negocio-rhai',
    titulo: 'O perfil no Google é de graça',
    resumo:
      'O Google Meu Negócio é uma ferramenta gratuita, e qualquer pessoa cria o próprio perfil: prestador de serviço, médico, fisioterapeuta, advogado, dono de comércio. Quem está começando e ainda não tem dinheiro para investir começa exatamente por aí.',
    duracao: 37,
    publicado: '2026-08-23',
    servico: 'google-meu-negocio',
  },
  {
    slug: 'seu-negocio-no-google',
    titulo: 'O passo a passo, sem levar meia hora',
    resumo:
      'Marcar que o atendimento é online quando não existe endereço para o cliente visitar, fazer a verificação por código, subir a logo e fotos reais do trabalho, completar telefone e site, publicar pelo menos uma vez por semana e pedir avaliação escrita para quem já conhece o serviço.',
    duracao: 67,
    publicado: '2026-08-25',
    servico: 'google-meu-negocio',
  },
  {
    slug: 'perfil-sem-pagar-parte-1',
    titulo: 'Não quer pagar ninguém? Faça pelo menos isto',
    resumo:
      'Link na bio que leva para um site ou um WhatsApp que não existem mais. Bio que não diz em que cidade você atende. Destaques sem serviço, sem trabalho feito e sem avaliação. São detalhes simples, e são justamente os que fazem o cliente desistir de falar com você.',
    duracao: 80,
    publicado: '2026-08-26',
    servico: 'gestao-redes-sociais',
  },
  {
    slug: 'perfil-sem-pagar-parte-2',
    titulo: 'Parte 2: identidade, e o que a visualização não paga',
    resumo:
      'Identidade visual é cor e fonte decididas antes do post, não a cor que o nicho costuma usar. Carrossel, single e reel fazem trabalhos diferentes. E visualização não é o que paga: um milhão de views do público errado não contrata você.',
    duracao: 57,
    publicado: '2026-08-26',
    servico: 'gestao-redes-sociais',
  },
  {
    slug: 'o-que-e-crm-gohighlevel',
    titulo: 'O que é CRM, em português',
    resumo:
      'CRM é o lugar onde a empresa organiza cliente e possível cliente: quem entrou em contato, o que pediu, se o orçamento saiu, quem está esperando resposta, quem já comprou. O GoHighLevel junta isso com funil, automação e o agente que responde quando já passou do seu horário.',
    duracao: 67,
    publicado: '2026-08-28',
    servico: 'crm-ia-whatsapp',
  },
]

/** transcrição literal — só existe para o vídeo que foi conferido palavra a
 *  palavra contra a legenda queimada na imagem. */
export const transcricoes: Record<string, string[]> = {
  'google-meu-negocio-rhai': [
    'Gente, vocês sabiam que o Google Meu Negócio é uma ferramenta gratuita do Google que qualquer um consegue ir lá e criar o seu próprio perfil no Google? Seja prestador de serviço, seja você que tem uma empresa.',
    'Eu falo prestador de serviço, eu falo você que é brasileiro, eu falo você médico, eu falo você fisioterapeuta, eu falo você advogado, qualquer um, dono de supermercado, e falo mais.',
    'Muitas vezes o cliente chega e fala: olha, hoje eu não tenho condições de investir muito dinheiro porque eu estou começando.',
    'Então, se você está começando, a melhor coisa que você tem a fazer: chega no seu profissional de marketing, gente, com o seu Google.',
  ],
}

export const arquivoVideo = (slug: string) => '/video/' + slug + '.mp4'
export const arquivoPoster = (slug: string) => '/video/' + slug + '.webp'

/** PT1M07S a partir de 67 */
export const duracaoISO = (s: number) =>
  'PT' + (s >= 60 ? Math.floor(s / 60) + 'M' : '') + (s % 60) + 'S'

/** 1:07 */
export const duracaoRelogio = (s: number) =>
  Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0')

export const getVideo = (slug: string) => videos.find((v) => v.slug === slug)
export const videosDoServico = (servico: string) =>
  videos.filter((v) => v.servico === servico)
