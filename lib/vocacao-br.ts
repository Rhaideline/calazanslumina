/**
 * O QUE A VOCACAO DA CIDADE MUDA NO MARKETING DELA.
 *
 * ⚠️ DE ONDE VEM
 * A vocacao de cada uma das 209 cidades foi classificada a partir do que a
 * PESQUISA JA TINHA ESCRITO nos campos `descricao` e `referencia` — nao de
 * suposicao. Quixada e "capital do voo livre, monolitos, parapente"; Campinas
 * e "segundo maior polo tecnologico, sede da Unicamp"; Guarulhos e "maior
 * aeroporto do Brasil, vocacao logistica". Esses fatos ja estavam no dado.
 *
 * ⚠️ O QUE ESTA CAMADA FAZ, E O QUE ELA NAO FAZ
 * FAZ: tirar a consequencia de marketing de um fato ja documentado. Cidade de
 * turismo tem cliente que decide de OUTRO estado, antes de viajar — isso muda
 * onde a busca acontece. Cidade universitaria tem publico que se renova todo
 * ano. Cidade de agro decide na feira e na revenda, e o cliente esta no campo
 * com sinal ruim.
 * NAO FAZ: afirmar fato novo sobre cidade nenhuma. Nao ha numero, nao ha nome
 * de empresa, nao ha promessa.
 *
 * ⚠️ POR QUE ISSO RESOLVE A DUPLICATA
 * Sao 9 vocacoes x 4 portes, e cada cidade carrega DUAS vocacoes — 99
 * combinacoes distintas nas 209 cidades. Somado as ~81 palavras proprias de
 * cada uma (descricao, dores, referencia), a pagina para de ser molde com
 * nome trocado. Medicao antes: 81,4% de sobreposicao entre irmas.
 */

/** gerado por _classifica.py a partir de `descricao` e `referencia` */
const MAPA: Record<string, { e: string[]; p: string }> = {
  'abaetetuba': { e: ['tecnologia', 'comercio'], p: 'media' },
  'acailandia': { e: ['logistica', 'mineracao'], p: 'media' },
  'aguas-lindas-de-goias': { e: ['saude', 'comercio'], p: 'media' },
  'alta-floresta': { e: ['turismo', 'agro'], p: 'pequena' },
  'altamira': { e: ['mineracao', 'agro'], p: 'media' },
  'altos': { e: ['turismo'], p: 'pequena' },
  'ananindeua': { e: ['comercio'], p: 'grande' },
  'anapolis': { e: ['logistica'], p: 'grande' },
  'angra-dos-reis': { e: ['turismo', 'industrial'], p: 'media' },
  'aparecida-de-goiania': { e: ['logistica', 'industrial'], p: 'grande' },
  'aquidauana': { e: ['turismo', 'universitaria'], p: 'pequena' },
  'aquiraz': { e: ['turismo'], p: 'pequena' },
  'aracaju': { e: ['mineracao', 'comercio'], p: 'capital' },
  'aracruz': { e: ['industrial', 'turismo'], p: 'media' },
  'arapiraca': { e: ['comercio', 'universitaria'], p: 'media' },
  'bacabal': { e: ['comercio'], p: 'media' },
  'balneario-camboriu': { e: ['turismo'], p: 'media' },
  'balsas': { e: ['agro', 'tecnologia'], p: 'pequena' },
  'barra-do-garcas': { e: ['turismo'], p: 'pequena' },
  'barras': { e: ['comercio', 'agro'], p: 'pequena' },
  'barreiras': { e: ['agro', 'tecnologia'], p: 'media' },
  'belem': { e: ['turismo', 'tecnologia'], p: 'capital' },
  'belo-horizonte': { e: ['tecnologia', 'mineracao'], p: 'capital' },
  'betim': { e: ['industrial', 'comercio'], p: 'grande' },
  'blumenau': { e: ['tecnologia', 'industrial'], p: 'grande' },
  'boa-vista': { e: ['comercio'], p: 'capital' },
  'braganca-pa': { e: ['turismo'], p: 'media' },
  'brasilia': { e: ['comercio'], p: 'capital' },
  'cabo-de-santo-agostinho': { e: ['turismo', 'industrial'], p: 'media' },
  'cabo-frio': { e: ['turismo', 'comercio'], p: 'media' },
  'caceres': { e: ['turismo', 'comercio'], p: 'pequena' },
  'cachoeiro-de-itapemirim': { e: ['mineracao', 'comercio'], p: 'media' },
  'camacari': { e: ['industrial'], p: 'grande' },
  'camaragibe': { e: ['comercio'], p: 'media' },
  'cameta': { e: ['comercio'], p: 'media' },
  'campinas': { e: ['tecnologia', 'universitaria'], p: 'grande' },
  'campo-alegre': { e: ['agro', 'comercio'], p: 'pequena' },
  'campo-grande': { e: ['agro'], p: 'capital' },
  'campo-maior': { e: ['agro'], p: 'pequena' },
  'campos-dos-goytacazes': { e: ['mineracao', 'agro'], p: 'grande' },
  'canoas': { e: ['logistica', 'industrial'], p: 'grande' },
  'capela-se': { e: ['agro'], p: 'pequena' },
  'cariacica': { e: ['logistica', 'comercio'], p: 'grande' },
  'caruaru': { e: ['comercio', 'industrial'], p: 'grande' },
  'cascavel': { e: ['agro', 'tecnologia'], p: 'grande' },
  'castanhal': { e: ['logistica', 'comercio'], p: 'media' },
  'caucaia': { e: ['turismo', 'industrial'], p: 'grande' },
  'caxias-do-sul': { e: ['industrial'], p: 'grande' },
  'caxias-ma': { e: ['comercio'], p: 'media' },
  'chapadinha': { e: ['universitaria', 'comercio'], p: 'pequena' },
  'chapeco': { e: ['industrial'], p: 'media' },
  'codo': { e: ['universitaria', 'comercio'], p: 'media' },
  'colatina': { e: ['industrial', 'comercio'], p: 'media' },
  'colombo': { e: ['industrial', 'comercio'], p: 'media' },
  'contagem': { e: ['industrial', 'mineracao'], p: 'grande' },
  'coronel-fabriciano': { e: ['comercio', 'universitaria'], p: 'media' },
  'corumba': { e: ['turismo', 'mineracao'], p: 'media' },
  'coruripe': { e: ['turismo', 'agro'], p: 'pequena' },
  'crato': { e: ['universitaria'], p: 'media' },
  'criciuma': { e: ['industrial'], p: 'media' },
  'cuiaba': { e: ['agro'], p: 'capital' },
  'curitiba': { e: ['tecnologia', 'industrial'], p: 'capital' },
  'delmiro-gouveia': { e: ['turismo', 'comercio'], p: 'pequena' },
  'divinopolis': { e: ['industrial', 'comercio'], p: 'media' },
  'dourados': { e: ['universitaria', 'agro'], p: 'media' },
  'duque-de-caxias': { e: ['comercio'], p: 'grande' },
  'estancia': { e: ['turismo', 'industrial'], p: 'pequena' },
  'feira-de-santana': { e: ['logistica', 'comercio'], p: 'grande' },
  'floriano': { e: ['saude', 'universitaria'], p: 'pequena' },
  'florianopolis': { e: ['tecnologia'], p: 'capital' },
  'formosa': { e: ['turismo', 'comercio'], p: 'media' },
  'fortaleza': { e: ['industrial', 'turismo'], p: 'capital' },
  'foz-do-iguacu': { e: ['turismo'], p: 'media' },
  'garanhuns': { e: ['universitaria', 'agro'], p: 'media' },
  'goiania': { e: ['agro', 'industrial'], p: 'capital' },
  'governador-valadares': { e: ['comercio'], p: 'media' },
  'gravatai': { e: ['logistica', 'industrial'], p: 'media' },
  'guarapari': { e: ['turismo', 'saude'], p: 'media' },
  'guarapuava': { e: ['agro', 'universitaria'], p: 'media' },
  'guarulhos': { e: ['logistica', 'comercio'], p: 'grande' },
  'iguatu': { e: ['logistica', 'comercio'], p: 'media' },
  'ilheus': { e: ['turismo'], p: 'media' },
  'imperatriz': { e: ['saude', 'logistica'], p: 'media' },
  'ipatinga': { e: ['mineracao', 'industrial'], p: 'media' },
  'itabaiana-se': { e: ['comercio'], p: 'pequena' },
  'itabuna': { e: ['comercio', 'turismo'], p: 'media' },
  'itajai': { e: ['logistica', 'comercio'], p: 'media' },
  'itapipoca': { e: ['turismo', 'comercio'], p: 'media' },
  'jaboatao-dos-guararapes': { e: ['industrial', 'comercio'], p: 'grande' },
  'jaragua-do-sul': { e: ['industrial'], p: 'media' },
  'joao-pessoa': { e: ['turismo'], p: 'capital' },
  'joinville': { e: ['industrial'], p: 'grande' },
  'jose-de-freitas': { e: ['industrial', 'comercio'], p: 'pequena' },
  'juazeiro-ba': { e: ['agro'], p: 'media' },
  'juazeiro-do-norte': { e: ['turismo', 'comercio'], p: 'media' },
  'juiz-de-fora': { e: ['universitaria', 'tecnologia'], p: 'grande' },
  'jundiai': { e: ['industrial'], p: 'grande' },
  'lagarto': { e: ['comercio', 'agro'], p: 'media' },
  'lages': { e: ['turismo', 'agro'], p: 'media' },
  'laranjeiras': { e: ['comercio'], p: 'pequena' },
  'lauro-de-freitas': { e: ['turismo', 'logistica'], p: 'media' },
  'linhares': { e: ['agro'], p: 'media' },
  'londrina': { e: ['agro', 'universitaria'], p: 'grande' },
  'lucas-do-rio-verde': { e: ['agro'], p: 'pequena' },
  'luziania': { e: ['industrial', 'comercio'], p: 'media' },
  'macae': { e: ['mineracao'], p: 'media' },
  'macapa': { e: ['comercio'], p: 'capital' },
  'maceio': { e: ['turismo', 'saude'], p: 'capital' },
  'manaus': { e: ['industrial', 'turismo'], p: 'capital' },
  'maraba': { e: ['mineracao', 'comercio'], p: 'media' },
  'maracaju': { e: ['turismo', 'agro'], p: 'pequena' },
  'maracanau': { e: ['industrial', 'comercio'], p: 'media' },
  'maranguape': { e: ['industrial'], p: 'media' },
  'marechal-deodoro': { e: ['turismo'], p: 'pequena' },
  'maringa': { e: ['tecnologia', 'agro'], p: 'grande' },
  'marituba': { e: ['comercio'], p: 'media' },
  'montes-claros': { e: ['saude', 'comercio'], p: 'grande' },
  'natal': { e: ['comercio'], p: 'capital' },
  'navirai': { e: ['agro'], p: 'pequena' },
  'niteroi': { e: ['tecnologia'], p: 'grande' },
  'nossa-senhora-do-socorro': { e: ['comercio'], p: 'media' },
  'nova-andradina': { e: ['agro'], p: 'pequena' },
  'nova-iguacu': { e: ['comercio'], p: 'grande' },
  'novo-gama': { e: ['comercio'], p: 'media' },
  'novo-hamburgo': { e: ['industrial', 'tecnologia'], p: 'media' },
  'oeiras': { e: ['comercio'], p: 'pequena' },
  'olinda': { e: ['turismo'], p: 'grande' },
  'osasco': { e: ['tecnologia'], p: 'grande' },
  'paco-do-lumiar': { e: ['turismo'], p: 'media' },
  'palhoca': { e: ['tecnologia'], p: 'media' },
  'palmas': { e: ['comercio', 'agro'], p: 'capital' },
  'palmeira-dos-indios': { e: ['comercio'], p: 'pequena' },
  'paranagua': { e: ['logistica', 'turismo'], p: 'media' },
  'paranaiba': { e: ['comercio', 'agro'], p: 'pequena' },
  'parauapebas': { e: ['comercio'], p: 'media' },
  'parnaiba': { e: ['turismo'], p: 'media' },
  'passo-fundo': { e: ['saude', 'universitaria'], p: 'media' },
  'paulista-pe': { e: ['turismo', 'industrial'], p: 'grande' },
  'pedro-ii': { e: ['turismo'], p: 'pequena' },
  'pelotas': { e: ['universitaria', 'tecnologia'], p: 'grande' },
  'penedo': { e: ['turismo'], p: 'pequena' },
  'petrolina': { e: ['comercio'], p: 'grande' },
  'petropolis': { e: ['tecnologia', 'turismo'], p: 'grande' },
  'picos': { e: ['logistica', 'comercio'], p: 'pequena' },
  'piripiri': { e: ['comercio'], p: 'pequena' },
  'ponta-grossa': { e: ['industrial', 'logistica'], p: 'grande' },
  'ponta-pora': { e: ['comercio', 'turismo'], p: 'pequena' },
  'porto-alegre': { e: ['industrial', 'universitaria'], p: 'capital' },
  'porto-seguro': { e: ['turismo', 'saude'], p: 'media' },
  'porto-velho': { e: ['comercio', 'agro'], p: 'capital' },
  'primavera-do-leste': { e: ['agro'], p: 'pequena' },
  'propria': { e: ['turismo', 'comercio'], p: 'pequena' },
  'quixada': { e: ['turismo', 'comercio'], p: 'pequena' },
  'recife': { e: ['tecnologia', 'logistica'], p: 'capital' },
  'ribeirao-preto': { e: ['saude', 'agro'], p: 'grande' },
  'rio-branco': { e: ['comercio'], p: 'capital' },
  'rio-de-janeiro': { e: ['turismo', 'industrial'], p: 'capital' },
  'rio-grande': { e: ['logistica', 'industrial'], p: 'media' },
  'rio-largo': { e: ['industrial', 'comercio'], p: 'pequena' },
  'rio-verde': { e: ['agro'], p: 'media' },
  'rondonopolis': { e: ['agro'], p: 'media' },
  'salvador': { e: ['turismo'], p: 'capital' },
  'santa-maria': { e: ['universitaria', 'saude'], p: 'media' },
  'santarem': { e: ['turismo', 'logistica'], p: 'grande' },
  'santo-andre': { e: ['comercio', 'universitaria'], p: 'grande' },
  'santos': { e: ['turismo', 'logistica'], p: 'grande' },
  'sao-bernardo-do-campo': { e: ['industrial', 'tecnologia'], p: 'grande' },
  'sao-cristovao': { e: ['universitaria', 'turismo'], p: 'pequena' },
  'sao-goncalo': { e: ['comercio'], p: 'grande' },
  'sao-jose-de-ribamar': { e: ['turismo'], p: 'media' },
  'sao-jose-dos-campos': { e: ['tecnologia'], p: 'grande' },
  'sao-jose-dos-pinhais': { e: ['logistica', 'industrial'], p: 'grande' },
  'sao-jose-sc': { e: ['comercio'], p: 'media' },
  'sao-leopoldo': { e: ['tecnologia'], p: 'media' },
  'sao-luis': { e: ['tecnologia'], p: 'capital' },
  'sao-mateus': { e: ['mineracao', 'turismo'], p: 'media' },
  'sao-miguel-dos-campos': { e: ['agro'], p: 'pequena' },
  'sao-paulo': { e: ['tecnologia'], p: 'capital' },
  'senador-canedo': { e: ['industrial', 'logistica'], p: 'media' },
  'serra-es': { e: ['industrial', 'mineracao'], p: 'grande' },
  'serra-talhada': { e: ['comercio'], p: 'pequena' },
  'sete-lagoas': { e: ['industrial', 'comercio'], p: 'media' },
  'sidrolandia': { e: ['agro'], p: 'pequena' },
  'simao-dias': { e: ['agro', 'comercio'], p: 'pequena' },
  'sinop': { e: ['agro'], p: 'media' },
  'sobral': { e: ['industrial'], p: 'media' },
  'sorocaba': { e: ['industrial'], p: 'grande' },
  'sorriso': { e: ['agro'], p: 'pequena' },
  'tangara-da-serra': { e: ['comercio'], p: 'media' },
  'teixeira-de-freitas': { e: ['comercio', 'turismo'], p: 'media' },
  'teresina': { e: ['saude', 'comercio'], p: 'capital' },
  'timon': { e: ['comercio'], p: 'media' },
  'timoteo': { e: ['comercio'], p: 'pequena' },
  'tobias-barreto': { e: ['industrial', 'comercio'], p: 'pequena' },
  'toledo': { e: ['industrial'], p: 'media' },
  'tres-lagoas': { e: ['industrial'], p: 'media' },
  'trindade': { e: ['turismo', 'comercio'], p: 'media' },
  'uberaba': { e: ['agro', 'industrial'], p: 'grande' },
  'uberlandia': { e: ['comercio', 'logistica'], p: 'grande' },
  'uniao-dos-palmares': { e: ['turismo'], p: 'pequena' },
  'valparaiso-de-goias': { e: ['comercio'], p: 'media' },
  'varzea-grande': { e: ['logistica', 'industrial'], p: 'grande' },
  'viamao': { e: ['logistica', 'comercio'], p: 'media' },
  'viana-es': { e: ['industrial', 'comercio'], p: 'pequena' },
  'vila-velha': { e: ['turismo', 'comercio'], p: 'grande' },
  'vitoria': { e: ['logistica', 'mineracao'], p: 'capital' },
  'vitoria-da-conquista': { e: ['saude', 'agro'], p: 'grande' },
  'vitoria-de-santo-antao': { e: ['industrial', 'universitaria'], p: 'media' },
  'volta-redonda': { e: ['mineracao', 'comercio'], p: 'media' },
}

export type Vocacao =
  | 'turismo' | 'comercio' | 'industrial' | 'agro' | 'logistica'
  | 'tecnologia' | 'universitaria' | 'mineracao' | 'saude'

export type Porte = 'capital' | 'grande' | 'media' | 'pequena'

const TEXTO: Record<Vocacao, { titulo: string; texto: (c: string) => string }> = {
  turismo: {
    titulo: 'Aqui a decisão acontece antes de a pessoa chegar',
    texto: (c) =>
      `Boa parte de quem vai gastar em ${c} pesquisa de casa, semanas antes de viajar, e de outro estado. Isso muda tudo: a busca que importa não é feita no bairro, e sim em outra cidade por alguém que nunca esteve aqui. Quem tem foto boa, avaliação recente e informação completa é escolhido; quem depende de ser visto na rua perde para quem foi encontrado no celular.`,
  },
  comercio: {
    titulo: 'A disputa é com quem está a dois quarteirões',
    texto: (c) =>
      `Comércio e serviço em ${c} competem por uma busca muito específica: o serviço mais o nome do bairro, feita por alguém que já decidiu comprar e só quer saber de quem. Nessa busca não ganha quem tem o melhor preço — ganha quem aparece com horário certo, telefone que atende e avaliação recente.`,
  },
  industrial: {
    titulo: 'Venda para empresa não fecha no impulso',
    texto: (c) =>
      `O cliente de quem atende indústria em ${c} é outra empresa, e empresa demora: alguém pesquisa, salva, compara e só depois leva para decidir com mais gente. Nesse caminho o site não é vitrine, é credencial — é o que responde "dá para confiar nesse fornecedor?" quando ninguém da sua equipe está por perto para explicar.`,
  },
  agro: {
    titulo: 'A safra manda no calendário, e o cliente está no campo',
    texto: (c) =>
      `Quem vende para o agro em ${c} vive um ano que não é igual ao das outras cidades: tem época em que ninguém compra e época em que tudo é para ontem. E o cliente costuma estar no campo, com sinal fraco, resolvendo pelo WhatsApp. Site pesado não abre, e mensagem sem resposta rápida vira negócio perdido para a revenda que respondeu.`,
  },
  logistica: {
    titulo: 'Seu cliente pode nunca ter pisado na cidade',
    texto: (c) =>
      `A posição de ${c} faz com que boa parte da demanda venha de fora — empresa de outro estado procurando quem resolve aqui. Isso quer dizer que a busca que traz dinheiro não inclui o nome do bairro, inclui o serviço e a região. Quem só aparece para quem já conhece a cidade fica de fora dessa conta.`,
  },
  tecnologia: {
    titulo: 'Público que compara antes de falar com você',
    texto: (c) =>
      `Em ${c} o cliente pesquisa fundo antes do primeiro contato, e chega sabendo. Promessa genérica não funciona com esse público — funciona mostrar como o trabalho é feito. Site lento ou material raso derruba a conversa antes de ela começar, porque essa é exatamente a pessoa que percebe.`,
  },
  universitaria: {
    titulo: 'Metade do seu público troca de gente todo ano',
    texto: (c) =>
      `${c} tem um público que se renova em ciclo: chega gente nova todo começo de ano letivo, sem conhecer ninguém, procurando tudo do zero pelo celular. Indicação não alcança quem acabou de chegar. Para esse público, aparecer na busca não é um canal a mais — é o único.`,
  },
  mineracao: {
    titulo: 'Poucos clientes, cada um pesando muito',
    texto: (c) =>
      `Quem atende a cadeia pesada em ${c} não vive de volume: vive de poucos contratos grandes, com decisão lenta e muita gente olhando. Aqui a presença digital tem outra função — não é gerar enxurrada de lead, é sustentar reputação para quando alguém for conferir quem você é antes de assinar.`,
  },
  saude: {
    titulo: 'Divulgação de saúde tem regra, e ela é levada a sério',
    texto: (c) =>
      `Quem atua em saúde em ${c} não pode comunicar como qualquer outro negócio: a publicidade médica e odontológica tem restrições de conselho profissional sobre promessa de resultado, foto de antes e depois e oferta de preço. O que sobra — e funciona — é informação clara, facilidade de agendar e avaliação de paciente. Fazer certo aqui é também não se expor.`,
  },
}

/** modula pelo porte — muda o que e realista fazer, nao o fato */
const PORTE: Record<Porte, (c: string) => string> = {
  capital: (c) =>
    `Sendo capital, ${c} tem o mercado mais disputado do estado: há concorrente com verba, agência e equipe. Ganhar no genérico é caro; ganhar no específico, no bairro e no nicho, é onde ainda sobra espaço.`,
  grande: (c) =>
    `Do tamanho de ${c}, já existe concorrência organizada e ao mesmo tempo público suficiente para nicho. Dá para ser referência em uma coisa só em vez de disputar tudo com todo mundo.`,
  media: (c) =>
    `Numa cidade do porte de ${c}, quase ninguém faz o básico bem feito — perfil completo, site que abre, resposta rápida. Isso é bom: dá para sair na frente sem gastar com anúncio, só fazendo o que os outros não fazem.`,
  pequena: (c) =>
    `Em ${c} o boca a boca ainda resolve muita coisa, e é por isso que quase ninguém cuida do digital. Só que quem chega novo na cidade, ou quem procura sem conhecer ninguém, usa o celular — e aí encontra quem estiver lá.`,
}

export function vocacaoDa(slug: string): { eixos: Vocacao[]; porte: Porte } | null {
  const v = MAPA[slug]
  return v ? { eixos: v.e as Vocacao[], porte: v.p as Porte } : null
}

export function textoVocacao(slug: string, nome: string) {
  const v = vocacaoDa(slug)
  if (!v) return null
  const principal = TEXTO[v.eixos[0]]
  const segundo = v.eixos[1] && v.eixos[1] !== v.eixos[0] ? TEXTO[v.eixos[1]] : null
  return {
    titulo: principal.titulo,
    texto: principal.texto(nome),
    segundo: segundo ? segundo.texto(nome) : '',
    porte: PORTE[v.porte](nome),
  }
}
