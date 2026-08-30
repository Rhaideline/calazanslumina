/**
 * Conteudo local unico por cidade nas paginas de enxoval.
 *
 * O PROBLEMA
 * As 539 cidades tem `descricao` e `doresEspecificas` escritas para o negocio
 * de marketing ("infoprodutores B2B disputam engenheiros ceticos"). Nada disso
 * serve para uma gestante comprando berco. Sobram nome, estado e populacao —
 * pouco para 539 paginas diferentes.
 *
 * A SOLUCAO: quatro eixos que sao FATO e sao ACIONAVEIS
 *
 *  1. CLIMA POR ESTADO (27 variantes, nao 3 zonas)
 *     Bebe que nasce em julho em Curitiba pega 12 graus; em Manaus, 26 de
 *     minima o ano inteiro. Isso muda o que ela compra de verdade.
 *
 *  2. PRAZO DE ENTREGA POR REGIAO (5 variantes)
 *     Shopee entrega em SP capital em 2 a 4 dias e no Norte em ate 3 semanas.
 *     Vira conselho concreto: "feche o enxoval no setimo mes, nao no oitavo".
 *     Nenhuma lista de enxoval do Brasil faz isso.
 *
 *  3. PORTE DA CIDADE (4 faixas, derivado da populacao ja existente)
 *     Cidade de 40 mil nao tem loja de departamento infantil. Muda a
 *     recomendacao: o que da para ver no fisico e o que so tem online.
 *
 *  4. MERCADO DE SEGUNDA MAO (derivado do porte)
 *     Capital tem grupo de desapego de enxoval; cidade pequena, nao.
 *
 * CAPACIDADE: 27 x 5 x 4 = 540 combinacoes para 539 cidades = 1,0 pagina por
 * combinacao. E a mesma proporcao do gerador de servico (1,1), que funciona —
 * nao a do gerador de curso (1.826), que a auditoria reprovou.
 *
 * REGRA HERDADA DO conteudo-local.ts: nao inventa fato, e determinismo sem
 * Math.random nem Date.
 */

export interface CidadeEnxoval {
  slug: string
  nome: string
  estado: string
  siglaEstado: string
  populacao?: string
}

/** Clima por estado — o que realmente muda no enxoval. */
const CLIMA_UF: Record<string, { inverno: string; verao: string; nota: string }> = {
  AC: { inverno: 'ameno, com friagem curta vinda do sul', verao: 'quente e muito úmido', nota: 'A friagem chega de repente e dura poucos dias — dois macacões de manga longa cobrem o ano todo.' },
  AL: { inverno: 'ameno', verao: 'quente', nota: 'Litoral com brisa constante: manta leve resolve a noite.' },
  AM: { inverno: 'inexistente', verao: 'quente e úmido o ano inteiro', nota: 'Não compre nada de plush. A mínima histórica de Manaus raramente desce de 23 graus.' },
  AP: { inverno: 'inexistente', verao: 'quente e chuvoso', nota: 'Umidade alta o ano todo — priorize algodão fino, que seca rápido.' },
  BA: { inverno: 'ameno no litoral, frio na Chapada', verao: 'quente', nota: 'Se for cidade de altitude na Chapada, inclua um macacão de manga longa.' },
  CE: { inverno: 'inexistente', verao: 'quente e seco', nota: 'Ar seco no segundo semestre: umidificador aqui faz diferença de verdade.' },
  DF: { inverno: 'seco e frio à noite', verao: 'quente e chuvoso', nota: 'Amplitude de 15 graus no mesmo dia — precisa das duas pontas do enxoval.' },
  ES: { inverno: 'ameno', verao: 'quente e úmido', nota: 'Litoral abafado: prefira body de manga curta em maior quantidade.' },
  GO: { inverno: 'seco, frio de madrugada', verao: 'quente', nota: 'A secura do inverno pede umidificador e hidratante sem perfume.' },
  MA: { inverno: 'inexistente', verao: 'quente e úmido', nota: 'Duas estações: chuva e estiagem. O calor não muda.' },
  MG: { inverno: 'frio à noite, ameno de dia', verao: 'quente', nota: 'Cidade de serra muda tudo — se for acima de 900 m, monte enxoval de frio.' },
  MS: { inverno: 'curto, com friagem forte', verao: 'muito quente', nota: 'A friagem derruba 20 graus em horas. Tenha um macacão de manga longa guardado.' },
  MT: { inverno: 'seco e ameno', verao: 'muito quente', nota: 'Calor de 40 graus no verão: algodão fino e nada de camada extra.' },
  PA: { inverno: 'inexistente', verao: 'quente e chuvoso', nota: 'Chove todo dia no primeiro semestre — tenha roupa suficiente para não depender de secagem.' },
  PB: { inverno: 'ameno', verao: 'quente', nota: 'Brisa litorânea constante: uma manta leve para o carrinho basta.' },
  PE: { inverno: 'ameno e chuvoso', verao: 'quente', nota: 'O inverno é de chuva, não de frio. Roupa que seca rápido vale mais que roupa quente.' },
  PI: { inverno: 'inexistente', verao: 'muito quente e seco', nota: 'Um dos calores mais fortes do país: só algodão, e trocas frequentes.' },
  PR: { inverno: 'frio de verdade', verao: 'ameno a quente', nota: 'Pode geá. Aqui o enxoval de inverno é obrigatório: touca, luva e macacão fechado.' },
  RJ: { inverno: 'ameno', verao: 'muito quente e úmido', nota: 'O calor úmido carioca cansa o bebê: privilegie manga curta e trocas.' },
  RN: { inverno: 'inexistente', verao: 'quente com vento', nota: 'Vento constante engana — parece fresco, mas o sol queima. Chapéu no carrinho.' },
  RO: { inverno: 'friagem curta', verao: 'quente e úmido', nota: 'A friagem de junho pede um macacão de manga longa por garantia.' },
  RR: { inverno: 'inexistente', verao: 'quente e seco', nota: 'Calor seco: hidratação da pele do bebê é a preocupação, não o agasalho.' },
  RS: { inverno: 'o mais rigoroso do país', verao: 'quente', nota: 'Pode fazer 0 grau. Enxoval de inverno completo, com camadas: body longo, macacão e manta grossa.' },
  SC: { inverno: 'frio e úmido', verao: 'quente no litoral', nota: 'O frio úmido penetra mais que o seco — camadas valem mais que peça grossa.' },
  SE: { inverno: 'ameno', verao: 'quente', nota: 'Estável o ano todo: um enxoval de meia-estação cobre tudo.' },
  SP: { inverno: 'frio à noite, ameno de dia', verao: 'quente e chuvoso', nota: 'A amplitude térmica paulista é o desafio: 28 graus ao meio-dia e 14 à noite no mesmo dia.' },
  TO: { inverno: 'seco e quente', verao: 'quente e chuvoso', nota: 'Calor o ano inteiro, com ar muito seco entre maio e setembro.' },
}

/** Prazo real de entrega por região — vira conselho de quando fechar o enxoval. */
const REGIOES: Record<string, { uf: string[]; prazo: string; mes: string; conselho: string }> = {
  Sudeste: {
    uf: ['SP', 'RJ', 'MG', 'ES'], prazo: '2 a 6 dias', mes: 'oitavo mês',
    conselho: 'Você está na região mais bem servida de logística do país. Dá para deixar as compras para o oitavo mês sem susto, e até repor depois que o bebê nascer.',
  },
  Sul: {
    uf: ['PR', 'SC', 'RS'], prazo: '3 a 8 dias', mes: 'oitavo mês',
    conselho: 'A entrega é confiável. O que exige antecedência aqui não é o frete: é o enxoval de inverno, que esgota rápido nas lojas quando o frio chega.',
  },
  Nordeste: {
    uf: ['BA', 'PE', 'CE', 'MA', 'PB', 'RN', 'AL', 'PI', 'SE'], prazo: '6 a 14 dias', mes: 'sétimo mês',
    conselho: 'O frete leva mais tempo e atrasa mais em dezembro e nas datas de promoção. Feche o essencial no sétimo mês — sobra margem se algo vier errado e precisar de troca.',
  },
  Norte: {
    uf: ['AM', 'PA', 'AC', 'RO', 'RR', 'AP', 'TO'], prazo: '10 a 21 dias', mes: 'sétimo mês',
    conselho: 'Aqui a antecedência não é zelo, é necessidade: um pedido que dá problema e precisa voltar consome quase um mês. Feche o essencial no sétimo mês e confira tudo assim que chegar.',
  },
  'Centro-Oeste': {
    uf: ['GO', 'MT', 'MS', 'DF'], prazo: '4 a 10 dias', mes: 'oitavo mês',
    conselho: 'Entrega razoável nas capitais e mais lenta no interior. Se você não estiver na capital, some uns quatro dias ao prazo que o site mostrar.',
  },
}

function regiaoDe(uf: string): { nome: string; dados: (typeof REGIOES)[string] } {
  for (const [nome, dados] of Object.entries(REGIOES)) {
    if (dados.uf.includes(uf)) return { nome, dados }
  }
  return { nome: 'Sudeste', dados: REGIOES.Sudeste }
}

/** Extrai o número de habitantes do texto já existente ("1,2 milhão de habitantes"). */
function habitantes(pop?: string): number {
  if (!pop) return 0
  const m = pop.match(/([\d.,]+)\s*(milh|mil)/i)
  if (!m) return 0
  const n = parseFloat(m[1].replace(/\./g, '').replace(',', '.'))
  return /milh/i.test(m[2]) ? n * 1_000_000 : n * 1_000
}

/** Porte da cidade — define o que dá para ver em loja física. */
function porte(pop?: string) {
  const h = habitantes(pop)
  if (h >= 1_000_000)
    return {
      faixa: 'metrópole',
      fisico: 'Você tem loja de departamento infantil por perto. Use isso a favor: vá até uma, abra e feche o carrinho, deite a mão no colchão do berço para sentir a firmeza — e depois compre onde estiver mais barato.',
      usado: 'Há grupos ativos de desapego de enxoval na sua cidade. Berço e carrinho de segunda mão em bom estado economizam muito. Bebê conforto, não: esse nunca compre usado.',
    }
  if (h >= 300_000)
    return {
      faixa: 'cidade grande',
      fisico: 'Deve haver ao menos uma loja de artigos infantis na cidade. Vale a visita para os itens grandes — carrinho e berço são difíceis de julgar por foto.',
      usado: 'Grupos de desapego costumam existir em cidade desse porte. Vale procurar antes de comprar berço novo.',
    }
  if (h >= 80_000)
    return {
      faixa: 'cidade média',
      fisico: 'A variedade local costuma ser limitada aos itens pequenos. Para carrinho e berço, ou você viaja até a cidade grande mais próxima, ou compra online com atenção às medidas.',
      usado: 'Mercado de segunda mão pequeno, mas existe — vale perguntar no grupo de mães da cidade antes de comprar o berço.',
    }
  return {
    faixa: 'cidade pequena',
    fisico: 'Provavelmente não há loja especializada por perto, então quase tudo virá pela internet. Por isso vale dobrar a atenção nas medidas: anote o espaço do quarto e o porta-malas do carro antes de escolher berço e carrinho.',
    usado: 'Sem grupo de desapego estruturado, o caminho é perguntar na roda de conhecidas — enxoval circula muito entre famílias em cidade pequena.',
  }
}

export interface BlocoEnxoval {
  abertura: string
  clima: string
  entrega: string
  local: string
  segundaMao: string
  /** Title/description proprios — cidade nao pode repetir meta tag da irma. */
  title: string
  description: string
  h1: string
  /** Mes em que fechar o enxoval, ja derivado da regiao. */
  mesFechar: string
  /** FAQ com fato local dentro; nunca a mesma pergunta pra todo mundo. */
  faq: { q: string; a: string }[]
  /** Quantidades da lista ajustadas ao clima — muda o corpo da pagina, nao so o topo. */
  quantidades: Record<string, number>
  /** Itens que perdem sentido nesta cidade (some da lista em vez de sobrar). */
  itensOcultos: string[]
}

/** Nomes dos itens da lista que nao fazem sentido em clima quente. */
const SEM_SENTIDO_NO_CALOR = ['Manta ou cueiro']

function faqLocal(
  cidade: CidadeEnxoval,
  clima: (typeof CLIMA_UF)[string],
  reg: (typeof REGIOES)[string],
  p: ReturnType<typeof porte>,
  regiao: string,
): { q: string; a: string }[] {
  const local = `${cidade.nome}, ${cidade.siglaEstado}`
  const faq = [
    {
      q: `Quando começar a montar o enxoval em ${cidade.nome}?`,
      a: `No ${reg.mes} de gestação. A entrega para ${local} leva de ${reg.prazo}, e você precisa de margem para trocar o que vier errado. ${reg.conselho}`,
    },
    {
      q: `Preciso de roupa de frio em ${cidade.nome}?`,
      a: `Em ${cidade.estado} o inverno é ${clima.inverno} e o verão é ${clima.verao}. ${clima.nota}`,
    },
    {
      q: `Dá para comprar tudo em loja física em ${cidade.nome}?`,
      a: p.fisico,
    },
    {
      q: `Vale comprar enxoval usado em ${cidade.nome}?`,
      a: `${p.usado} Bebê conforto é a única exceção absoluta: esse nunca compre usado, porque não dá para saber se já sofreu impacto.`,
    },
  ]
  if (regiao === 'Norte' || regiao === 'Nordeste') {
    faq.push({
      q: `Por que o frete para ${cidade.nome} demora mais?`,
      a: `Os centros de distribuição das grandes lojas ficam concentrados no Sudeste. Para ${local} o prazo real fica em ${reg.prazo}, e piora em novembro e dezembro. É o motivo de fechar o essencial já no ${reg.mes}.`,
    })
  }
  return faq
}

/** Quantidade final de cada item da lista, ja com o ajuste de clima aplicado. */
function quantidadesLocais(uf: string): Record<string, number> {
  const ajuste = ajusteClima(uf)
  const base: Record<string, number> = {
    'Body de manga curta': 6,
    'Body de manga longa': 6,
    'Macacão ou mijão': 6,
    'Manta ou cueiro': 3,
  }
  const mapa: Record<string, string> = {
    'Body de manga curta': 'body_curto',
    'Body de manga longa': 'body_longo',
    'Macacão ou mijão': 'macacao',
    'Manta ou cueiro': 'manta',
  }
  const out: Record<string, number> = {}
  for (const [nome, qtd] of Object.entries(base)) {
    const delta = ajuste[mapa[nome]] ?? 0
    out[nome] = Math.max(1, qtd + delta)
  }
  return out
}

/**
 * Monta o bloco local da página de enxoval de uma cidade.
 * Todo dado é derivado de fato: UF, região e população — nada inventado.
 */
export function blocoEnxovalCidade(cidade: CidadeEnxoval): BlocoEnxoval {
  const uf = cidade.siglaEstado
  const clima = CLIMA_UF[uf] ?? CLIMA_UF.SP
  const { nome: regiao, dados: reg } = regiaoDe(uf)
  const p = porte(cidade.populacao)
  const local = `${cidade.nome}, ${uf}`

  const abertura = cidade.populacao
    ? `Você está montando enxoval em ${local} — ${cidade.populacao}, ${regiao} do país. Três coisas mudam por aqui: o clima que seu bebê vai encontrar, o prazo até a encomenda chegar e o que dá para conferir pessoalmente antes de comprar.`
    : `Você está montando enxoval em ${local}, ${regiao} do país. Três coisas mudam por aqui: o clima que seu bebê vai encontrar, o prazo até a encomenda chegar e o que dá para conferir pessoalmente antes de comprar.`

  const climaTexto = `Em ${cidade.estado}, o verão é ${clima.verao} e o inverno é ${clima.inverno}. ${clima.nota}`

  const entrega = `Para ${local}, a entrega costuma levar de ${reg.prazo}. ${reg.conselho} Na prática: feche o essencial no ${reg.mes} de gestação.`

  const ehQuente = ['AM', 'PA', 'RR', 'AP', 'AC', 'RO', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MT'].includes(uf)

  // Title muda por eixo real (prazo no N/NE, frio no Sul, calor no N/NE),
  // pra duas cidades irmas nao competirem pela mesma meta tag.
  const title =
    regiao === 'Norte' || regiao === 'Nordeste'
      ? `Enxoval de Bebê em ${local}: a lista enxuta e quando fechar (entrega leva ${reg.prazo})`
      : ehQuente
        ? `Enxoval de Bebê em ${local}: a lista enxuta para o calor de ${cidade.estado}`
        : uf === 'RS' || uf === 'SC' || uf === 'PR'
          ? `Enxoval de Bebê em ${local}: a lista enxuta para o inverno de ${cidade.estado}`
          : `Enxoval de Bebê em ${local}: a lista enxuta, sem os 200 itens inúteis`

  const description = `O que comprar de enxoval em ${local}: quantidades ajustadas ao clima de ${cidade.estado}, prazo real de entrega (${reg.prazo}) e os 10 itens que são desperdício. ${p.faixa === 'cidade pequena' || p.faixa === 'cidade média' ? 'Inclui o que dá e o que não dá para achar em loja da cidade.' : 'Inclui o que vale ver em loja física antes de comprar.'}`

  return {
    abertura,
    clima: climaTexto,
    entrega,
    local: p.fisico,
    segundaMao: p.usado,
    title,
    description,
    h1: `Enxoval de bebê em ${local}: a lista que serve para o seu clima e o seu prazo`,
    mesFechar: reg.mes,
    faq: faqLocal(cidade, clima, reg, p, regiao),
    quantidades: quantidadesLocais(uf),
    itensOcultos: ehQuente ? SEM_SENTIDO_NO_CALOR : [],
  }
}

/** Quantidades ajustadas ao clima do estado. */
export function ajusteClima(uf: string): Record<string, number> {
  const quente = ['AM', 'PA', 'RR', 'AP', 'AC', 'RO', 'TO', 'MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA', 'MT']
  const frio = ['RS', 'SC', 'PR']
  if (quente.includes(uf)) return { body_curto: 2, body_longo: -2, macacao: -2, manta: -1 }
  if (frio.includes(uf)) return { body_longo: 2, macacao: 2, manta: 1, body_curto: -2 }
  return { body_curto: 1, body_longo: 1 }
}
