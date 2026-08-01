import type { Servico } from '@/data/servicos'

/**
 * Composicao de conteudo local unico por par (cidade, servico).
 *
 * PROBLEMA QUE ISSO RESOLVE
 * Cada cidade gera 17 paginas (1 hub + 5 servicos + 11 cursos) e todas
 * renderizavam os MESMOS campos: `doresEspecificas` aparecia nas 17,
 * `descricao` em 12. Conteudo unico por CIDADE, mas o Google deduplica por
 * PAGINA — o resultado eram 17 paginas competindo entre si pelo mesmo texto.
 *
 * REGRA INEGOCIAVEL: nao inventa fato.
 * Todo dado factual aqui vem do dataset ja pesquisado (populacao, PIB,
 * empresas, dores locais) ou do dataset de servicos. Esta camada so decide
 * QUAIS fatos verdadeiros entram em QUAL pagina e em que ordem. Nenhuma
 * afirmacao nova sobre a cidade e gerada.
 *
 * DETERMINISMO: a selecao vem de um hash do par (slug da cidade + slug do
 * servico). Sem Math.random e sem Date — o mesmo par produz sempre o mesmo
 * texto, entao o conteudo e estavel entre builds. Se mudasse a cada build, o
 * Google leria como conteudo instavel.
 */

export interface FatosCidade {
  slug: string
  nome: string
  estado: string
  siglaEstado?: string
  /** BR: perfil economico pesquisado. MA: usar `comunidade`. */
  descricao?: string
  /** MA: perfil da comunidade brasileira local. */
  comunidade?: string
  /** Uma linha de referencia geografica/economica. */
  referencia: string
  /** Dores especificas do empreendedor naquela cidade. */
  doresEspecificas: string
  /** Ex.: "1,2 milhão de habitantes". Preenchido nas 539 cidades BR. */
  populacao?: string
}

/**
 * Hash determinstico (djb2). Nao e criptografico — so precisa espalhar bem e
 * ser identico em todo build.
 */
function hash(texto: string): number {
  let h = 5381
  for (let i = 0; i < texto.length; i++) {
    h = ((h << 5) + h + texto.charCodeAt(i)) >>> 0
  }
  return h
}

/**
 * Escolhe `n` itens de `arr` de forma estavel, começando em um offset derivado
 * da semente e andando de 1 em 1. Garante que pares diferentes peguem fatias
 * diferentes do mesmo array.
 */
function selecionar<T>(arr: readonly T[], semente: number, n: number): T[] {
  if (arr.length === 0) return []
  // `>>> 0` normaliza para unsigned. Sem isso, uma semente derivada com `>>`
  // vira negativa quando o hash passa de 2^31, `%` devolve indice negativo e
  // arr[i] retorna undefined — o bug que apagava o caso de uso e derrubava o
  // fechamento no fallback em ~60% das paginas.
  const inicio = (semente >>> 0) % arr.length
  const out: T[] = []
  for (let i = 0; i < Math.min(n, arr.length); i++) {
    out.push(arr[(inicio + i) % arr.length])
  }
  return out
}

/** Tira o ponto final para poder encadear a frase sem pontuacao dupla. */
function semPonto(s: string): string {
  return s.trim().replace(/\.+$/, '')
}

/** Primeira letra minuscula, para encaixar a frase no meio de outra. */
function minuscula(s: string): string {
  return s.charAt(0).toLowerCase() + s.slice(1)
}

export interface BlocoLocal {
  /** Paragrafo de contexto economico da cidade. Muda de angulo por servico. */
  contexto: string
  /** Paragrafo que liga a realidade local ao servico especifico. */
  aplicacao: string
  /** Frase de fechamento com o diferencial escolhido para este par. */
  fechamento: string
}

/**
 * Monta o bloco local de uma pagina servico x cidade.
 *
 * Os 4 eixos que variam por par:
 *  1. qual campo da cidade abre o texto (perfil economico / referencia / populacao)
 *  2. quais dores do servico sao citadas (2 de 5, rotacionando)
 *  3. qual caso de uso entra
 *  4. qual diferencial fecha
 *
 * Com 5 servicos por cidade, os offsets diferem entre eles, entao as 5 paginas
 * de uma mesma cidade nao se repetem — e entre cidades o offset tambem muda.
 */
export function blocoLocalServico(
  cidade: FatosCidade,
  servico: Servico,
  /**
   * Posicao do servico no array `servicos`. Quando informada, GARANTE por
   * construcao que os N servicos de uma mesma cidade recebam variantes de
   * contexto diferentes — em vez de torcer para o hash nao colidir. Com hash
   * puro e 5 variantes, o principio da casa dos pombos ainda produzia paginas
   * com o mesmo paragrafo de abertura.
   */
  indiceServico?: number
): BlocoLocal {
  const semente = hash(`${cidade.slug}::${servico.slug}`)
  const perfil = cidade.descricao || cidade.comunidade || ''
  const local = cidade.siglaEstado ? `${cidade.nome}, ${cidade.siglaEstado}` : cidade.nome

  // ── eixo 1: de onde parte o contexto ────────────────────────────────
  // 5 variantes = numero de servicos. O offset por cidade faz a mesma posicao
  // de servico cair em variantes diferentes de cidade para cidade.
  const VARIANTES = 5
  const base = indiceServico !== undefined ? indiceServico + hash(cidade.slug) : semente
  let contexto: string
  switch ((base >>> 0) % VARIANTES) {
    case 0:
      contexto = cidade.populacao
        ? `${cidade.nome} tem ${semPonto(cidade.populacao)}. ${semPonto(perfil)}.`
        : `${semPonto(perfil)}.`
      break
    case 1:
      contexto = `${semPonto(cidade.referencia)}. ${semPonto(perfil)}.`
      break
    case 2:
      contexto = cidade.populacao
        ? `${semPonto(perfil)}. Com ${minuscula(semPonto(cidade.populacao))}, ${cidade.nome} concentra demanda suficiente para que presença digital deixe de ser diferencial e vire condição de entrada.`
        : `${semPonto(perfil)}.`
      break
    // REGRA: `descricao`/`comunidade` SEMPRE comecam com o nome da cidade
    // ("Campinas tem PIB de..."). Nunca passar por minuscula() — vira
    // "campinas tem PIB". So `dores` e `populacao` podem ser minusculizados.
    case 3:
      // ordem inversa da variante 1 (perfil primeiro, referencia depois).
      // Prefixar "Em {local} —" causava gagueira: o perfil ja abre com o nome
      // da cidade ("Em Campinas, SP — Campinas tem PIB de...").
      contexto = `${semPonto(perfil)}. ${semPonto(cidade.referencia)}.`
      break
    default:
      contexto = cidade.populacao
        ? `${semPonto(cidade.referencia)}. São ${semPonto(cidade.populacao)}. ${semPonto(perfil)}.`
        : `${semPonto(cidade.referencia)}. ${semPonto(perfil)}.`
  }

  // ── eixo 2: quais dores do servico entram ───────────────────────────
  const dores = selecionar(servico.dores, semente, 2)
  const doresTexto = dores.map((d) => minuscula(semPonto(d))).join('; e ')

  // ── eixo 3: caso de uso ─────────────────────────────────────────────
  // `>>>` (unsigned) — ver comentario em selecionar().
  const caso = selecionar(servico.casosDeUso, semente >>> 3, 1)[0]

  const aplicacao = [
    `${semPonto(cidade.doresEspecificas)}.`,
    // servico.nome e nome proprio (CRM com IA no WhatsApp, Google Meu Negocio):
    // NAO minusculizar — vira "cRM" e "google Meu Negocio".
    `Nesse cenário, ${servico.nome} resolve dois gargalos concretos: ${doresTexto}.`,
    caso ? `Aplicação típica em ${local}: ${semPonto(caso)}.` : '',
  ]
    .filter(Boolean)
    .join(' ')

  // ── eixo 4: diferencial que fecha ───────────────────────────────────
  const diferencial = selecionar(servico.diferenciais, semente >>> 7, 1)[0]
  const fechamento = diferencial
    ? `O que entregamos em ${local}: ${semPonto(diferencial)}.`
    : `Atendimento remoto para negócios em ${local}.`

  return { contexto, aplicacao, fechamento }
}

/**
 * Versao para paginas curso x cidade. Usa um eixo diferente do de servico
 * (parte da referencia, nao do perfil economico) para que
 * /cursos/x/brasil/campinas nao repita /brasil/campinas/sites-landing-pages.
 */
export function blocoLocalCurso(
  cidade: FatosCidade,
  cursoSlug: string,
  cursoNome: string
): { contexto: string; aplicacao: string } {
  const semente = hash(`curso::${cidade.slug}::${cursoSlug}`)
  const perfil = cidade.descricao || cidade.comunidade || ''
  const local = cidade.siglaEstado ? `${cidade.nome}, ${cidade.siglaEstado}` : cidade.nome

  // 4 variantes (nao 2): com 11 cursos por cidade, 2 variantes fariam ~6 paginas
  // dividirem o mesmo contexto. Combinado ao nome do curso na `aplicacao`,
  // nenhuma das 11 paginas da cidade repete a outra.
  const contexto = (() => {
    switch (semente % 4) {
      case 0:
        return `${semPonto(cidade.referencia)}.${cidade.populacao ? ` São ${semPonto(cidade.populacao)}.` : ''}`
      case 1:
        return `${cidade.populacao ? `Com ${minuscula(semPonto(cidade.populacao))}, ` : ''}${minuscula(semPonto(cidade.referencia))}.`
      case 2:
        return `${local} — ${semPonto(cidade.referencia)}.`
      default:
        return cidade.populacao
          ? `${semPonto(cidade.populacao)} em ${local}. ${semPonto(cidade.referencia)}.`
          : `${semPonto(cidade.referencia)}.`
    }
  })()

  // O perfil economico entra aqui de forma abreviada — a primeira frase apenas —
  // para nao repetir o paragrafo inteiro que a pagina-hub da cidade ja usa.
  const primeiraFrase = semPonto(perfil.split('. ')[0] || perfil)

  const aplicacao = [
    primeiraFrase ? `${primeiraFrase}.` : '',
    `Quem faz o ${cursoNome} em ${local} aplica o conteúdo nesse contexto — não em exemplo genérico de outro mercado.`,
  ]
    .filter(Boolean)
    .join(' ')

  return { contexto, aplicacao }
}
