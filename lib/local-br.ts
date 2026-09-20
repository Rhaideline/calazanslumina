/**
 * CONTEUDO LOCAL UNICO POR CIDADE BRASILEIRA.
 *
 * ⚠️ O PROBLEMA MEDIDO EM 20/SET/2026
 * A pagina de enxoval por cidade tinha 756 palavras e ZERO variava de verdade:
 * checklist (154), dicas (202) e FAQ (164) eram o mesmo conselho com o nome da
 * cidade trocado. Sobreposicao entre irmas: 73,9%.
 * A de curso por cidade tinha 696 palavras e so 109 variavam. 78,5%.
 *
 * ⚠️ A CAUSA, DITA SEM ENFEITE
 * Enxoval de bebe NAO muda por cidade. Ementa de curso NAO muda por cidade.
 * Repetir 520 palavras universais em 209 paginas nao cria 209 paginas: cria
 * uma pagina publicada 209 vezes, e o Google trata assim ("Rastreada, mas nao
 * indexada no momento").
 *
 * ⚠️ REGRA INEGOCIAVEL: NAO INVENTA FATO.
 * O que muda de cidade para cidade aqui e o CLIMA, que e geografia e nao
 * opiniao, mais o que a pesquisa ja escreveu sobre aquela cidade
 * (`descricao`, `doresEspecificas`, `referencia`, `populacao`). Esta camada so
 * decide QUAIS fatos verdadeiros entram em QUAL pagina e em que ordem.
 * Nenhuma afirmacao nova sobre a cidade e criada.
 *
 * ⚠️ DETERMINISMO
 * A selecao vem de um hash do slug. Sem Math.random e sem Date: o mesmo slug
 * produz sempre o mesmo texto. Conteudo que muda a cada build e lido como
 * conteudo instavel.
 *
 * Mesmo metodo de `lib/conteudo-local.ts` no repositorio do `.com`, que
 * derrubou a sobreposicao de 55% para 34% naquela malha.
 */

/** hash djb2 — nao e criptografico, so precisa espalhar e ser estavel */
function hash(t: string): number {
  let h = 5381
  for (let i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) >>> 0
  return h
}
const escolhe = <T,>(lista: T[], semente: string, giro = 0): T =>
  lista[(hash(semente) + giro * 7919) % lista.length]

// ───────────────────────────────────────────────────────────────────────────
// CLIMA POR ESTADO — geografia, nao achismo
// ───────────────────────────────────────────────────────────────────────────

export type ClimaBR = 'equatorial' | 'litoral-ne' | 'cerrado' | 'sudeste' | 'sul'

const CLIMA: Record<string, ClimaBR> = {
  AC: 'equatorial', AM: 'equatorial', AP: 'equatorial', PA: 'equatorial',
  RO: 'equatorial', RR: 'equatorial', TO: 'equatorial',
  AL: 'litoral-ne', BA: 'litoral-ne', CE: 'litoral-ne', MA: 'litoral-ne',
  PB: 'litoral-ne', PE: 'litoral-ne', PI: 'litoral-ne', RN: 'litoral-ne',
  SE: 'litoral-ne',
  DF: 'cerrado', GO: 'cerrado', MT: 'cerrado', MS: 'cerrado',
  SP: 'sudeste', RJ: 'sudeste', MG: 'sudeste', ES: 'sudeste',
  PR: 'sul', SC: 'sul', RS: 'sul',
}

export const climaDa = (uf: string): ClimaBR => CLIMA[uf] ?? 'sudeste'

/**
 * O que o clima muda no enxoval. Tudo aqui e consequencia direta da
 * geografia — nao ha promessa nem numero sem origem.
 */
const ENXOVAL_CLIMA: Record<
  ClimaBR,
  { titulo: string; texto: (c: string) => string; entra: string[]; sai: string[] }
> = {
  equatorial: {
    titulo: 'Calor e umidade o ano inteiro mudam metade da lista',
    texto: (c) =>
      `Em ${c} não existe estação fria de verdade: a temperatura fica alta o ano todo e a umidade é o que realmente incomoda. Isso derruba do enxoval quase tudo que é peça de frio e coloca no lugar duas preocupações que em outras regiões nem aparecem — roupa que seque rápido, porque tecido úmido em armário fechado mofa, e proteção contra mosquito no berço e no carrinho.`,
    entra: [
      'body de manga curta em quantidade maior que o padrão',
      'uma ou duas peças de manga longa fininha — não para o frio de fora, para o ar-condicionado',
      'mosquiteiro para berço e para carrinho',
      'toalha fina, que seca antes de mofar',
    ],
    sai: ['macacão de plush', 'casaco pesado', 'saco de dormir térmico', 'luva e touca de lã'],
  },
  'litoral-ne': {
    titulo: 'Calor constante, e o vento do litoral pede uma peça a mais',
    texto: (c) =>
      `Em ${c} a temperatura é alta o ano todo, então o enxoval é de tecido leve do começo ao fim. O detalhe que muita lista genérica ignora é o vento: no litoral ele é constante e faz o bebê perder calor rápido no fim da tarde, mesmo em dia quente. Uma peça de manga longa leve e uma manta fina resolvem isso sem transformar a mala num casaco.`,
    entra: [
      'algodão leve, de trama aberta',
      'manta fina para o fim de tarde e para o ar-condicionado',
      'boné ou chapéu de aba para o sol',
      'protetor de carrinho contra sol e vento',
    ],
    sai: ['plush', 'lã', 'agasalho forrado'],
  },
  cerrado: {
    titulo: 'A seca e a variação entre o dia e a noite decidem a lista',
    texto: (c) =>
      `${c} tem duas coisas que mudam o enxoval e quase nenhuma lista pronta considera. A primeira é a estação seca, que vai mais ou menos de maio a setembro e deixa o ar muito abaixo do confortável — pele e nariz de bebê sofrem primeiro. A segunda é a amplitude: o mesmo dia que é quente à tarde esfria de madrugada, então uma camada a mais à noite é necessária mesmo no calor.`,
    entra: [
      'uma camada extra só para a madrugada, mesmo no verão',
      'hidratante e soro fisiológico, por causa do ar seco',
      'umidificador ou bacia de água no quarto na estação seca',
      'body de manga curta e de manga longa, na mesma proporção',
    ],
    sai: ['agasalho pesado de inverno', 'saco de dormir térmico'],
  },
  sudeste: {
    titulo: 'Quatro estações de verdade pedem enxoval em camadas',
    texto: (c) =>
      `Em ${c} as estações são marcadas o suficiente para que um enxoval de peça única não sirva o ano todo. A saída não é comprar dois enxovais: é montar por camadas, com peças finas que funcionam sozinhas no calor e sobrepostas no frio. Assim a mesma roupa atravessa o ano e o gasto cai.`,
    entra: [
      'body de manga curta como base de todas as camadas',
      'macacão de algodão de meia estação',
      'casaco leve, que entra e sai conforme a hora',
      'meia e manta de algodão',
    ],
    sai: ['peça de plush pesado, que serve poucas semanas por ano'],
  },
  sul: {
    titulo: 'Aqui o frio é real, e o enxoval muda de verdade por causa dele',
    texto: (c) =>
      `${c} tem inverno de verdade, com noites de temperatura baixa e amanhecer gelado. Isso é o oposto do que quase toda lista de enxoval da internet assume, porque a maioria é escrita pensando no calor. Aqui entram peças que no resto do país seriam exagero, e a conta do enxoval sobe — vale planejar isso desde o começo.`,
    entra: [
      'macacão fechado de plush, com pé',
      'saco de dormir com a gramatura certa para a estação',
      'touca, luva e meia de verdade, não as decorativas',
      'sobreposição: body, macacão e casaco',
    ],
    sai: ['enxoval só de tecido de trama aberta, que não segura calor'],
  },
}

/**
 * SEGUNDO EIXO: o porte da cidade muda ONDE se compra, e isso e tao real
 * quanto o clima. Em capital existe loja fisica, atacado e entrega no mesmo
 * dia; em cidade do interior a conta muda — frete, prazo e a viagem ate o
 * centro regional entram na decisao.
 * Sem esse eixo, duas cidades do mesmo clima ficavam com 79% de sobreposicao.
 */
function ondeComprar(nome: string, populacao?: string): string {
  const n = (populacao || '').toLowerCase()
  const grande = n.includes('milh')
  const media = /([2-9]\d\d|1\d\d)\s*mil/.test(n)
  if (grande)
    return `Em ${nome} dá para fazer quase tudo sem sair de casa e ainda assim ver o produto antes: há loja física, atacado de enxoval e entrega rápida. Vale dividir a compra — o que precisa ser tocado (colchão, carrinho, bebê conforto) se resolve presencialmente, e o resto, que é volume de algodão, sai mais barato pela internet.`
  if (media)
    return `${nome} tem comércio próprio para o básico, mas item específico costuma depender de entrega ou de uma ida ao centro regional. O que funciona aqui é decidir cedo: peça grande com prazo longo primeiro, roupinha depois, porque roupa chega rápido e ocupa pouco.`
  return `Em cidade do porte de ${nome} o frete e o prazo pesam tanto quanto o preço, e item específico raramente está na prateleira. Juntar a compra num pedido só costuma sair melhor que comprar item por item, e vale começar cedo para não depender de entrega em cima da hora.`
}

export function enxovalLocal(c: {
  slug: string
  nome: string
  siglaEstado: string
  referencia: string
  populacao?: string
}) {
  const clima = ENXOVAL_CLIMA[climaDa(c.siglaEstado)]
  const aberturas = [
    `A lista de itens de um enxoval é praticamente a mesma em qualquer lugar do país. O que muda em ${c.nome} é o clima — e ele muda mais coisa do que parece.`,
    `Quem monta enxoval em ${c.nome} copiando lista pronta da internet acaba comprando peça que não vai usar e esquecendo o que faz falta. A diferença está no clima.`,
    `Antes de sair comprando em ${c.nome}, vale olhar uma variável que nenhuma lista genérica considera: o clima daqui, e o que ele exige do enxoval.`,
  ]
  return {
    abertura: escolhe(aberturas, c.slug),
    titulo: clima.titulo,
    texto: clima.texto(c.nome),
    entra: clima.entra,
    sai: clima.sai,
    contexto: c.referencia,
    onde: ondeComprar(c.nome, c.populacao),
  }
}

// ───────────────────────────────────────────────────────────────────────────
// CURSO x CIDADE
// ───────────────────────────────────────────────────────────────────────────

export function cursoLocal(
  c: { slug: string; nome: string; siglaEstado: string; descricao: string; doresEspecificas: string; referencia: string },
  cursoSlug: string
) {
  const semente = c.slug + '|' + cursoSlug
  const aberturas = [
    `O curso é online e o conteúdo é o mesmo em qualquer lugar. O que muda é o mercado em que você vai aplicar — e o de ${c.nome} tem características próprias.`,
    `Fazer o curso de ${c.nome} não muda a aula. Muda o que você faz com ela, porque o mercado daqui não é o de uma capital do Sudeste.`,
    `O conteúdo não é regional. O uso dele é: o que funciona em ${c.nome} depende de como o cliente daqui procura e decide.`,
  ]
  return {
    abertura: escolhe(aberturas, semente),
    mercado: c.descricao,
    dor: c.doresEspecificas,
    contexto: c.referencia,
  }
}
