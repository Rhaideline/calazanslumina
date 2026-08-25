/**
 * Ilustracoes das telas do Google, em SVG, para o guia do Google Meu Negocio.
 *
 * POR QUE DESENHADAS, E NAO PRINTS
 * Print de tela do Google envelhece em semanas e reproduzi-lo em material que
 * a gente distribui e um risco desnecessario. Desenho esquematico envelhece
 * devagar, imprime bem em preto e branco, pesa alguns kilobytes e pode ser
 * anotado com numero e seta — que e justamente o que a pessoa leiga precisa.
 *
 * ONDE ISSO APARECE
 * O mesmo SVG serve o PDF (embutido no HTML que vira o arquivo) e a pagina
 * /como-criar-google-meu-negocio. Sao strings, nao componentes, exatamente
 * para caberem nos dois — o React injeta com dangerouslySetInnerHTML.
 *
 * COMO DESENHAR MAIS UMA
 * Use os ajudantes abaixo em vez de escrever <rect> na mao: eles mantem raio,
 * espessura de fio e paleta iguais em todas. Ilustracao que varia de peso
 * entre uma pagina e outra e o que faz material parecer remendado.
 *
 * A moldura sempre tem 640 de largura; a altura varia. Quem consome define a
 * largura real e a altura sai pela proporcao.
 */

export const COR = {
  tinta: '#16161A',
  vermelho: '#C8102E',
  areia: '#F5F1EC',
  linha: '#DAD6D0',
  fraco: '#8A8A92',
  azul: '#2C5F7C',
  verde: '#1E7A4D',
  papel: '#FFFFFF',
}

const FONTE = "'DM Sans', system-ui, sans-serif"

/* --------------------------------------------------------------- ajudantes */

interface OpcoesTexto {
  tam?: number
  cor?: string
  peso?: number
  anc?: 'start' | 'middle' | 'end'
  esp?: number
}

/** Uma linha de texto. y e a linha de base. */
function txt(x: number, y: number, s: string, o: OpcoesTexto = {}) {
  const { tam = 15, cor = COR.tinta, peso = 400, anc = 'start', esp = 0 } = o
  return `<text x="${x}" y="${y}" font-family="${FONTE}" font-size="${tam}" font-weight="${peso}" fill="${cor}" text-anchor="${anc}"${esp ? ` letter-spacing="${esp}"` : ''}>${s}</text>`
}

interface OpcoesCaixa {
  preenche?: string
  fio?: string
  esp?: number
  tracejado?: string
}

function caixa(x: number, y: number, l: number, a: number, r = 10, o: OpcoesCaixa = {}) {
  const { preenche = COR.papel, fio = COR.linha, esp = 1.6, tracejado } = o
  return `<rect x="${x}" y="${y}" width="${l}" height="${a}" rx="${r}" fill="${preenche}" stroke="${fio}" stroke-width="${esp}"${tracejado ? ` stroke-dasharray="${tracejado}"` : ''}/>`
}

/** Barra cinza que representa uma linha de texto qualquer da interface. */
function linhaFalsa(x: number, y: number, l: number, a = 7, cor = '#E4E0DA') {
  return `<rect x="${x}" y="${y}" width="${l}" height="${a}" rx="${a / 2}" fill="${cor}"/>`
}

/** Numero de chamada, para amarrar a ilustracao ao texto do passo. */
function chamada(x: number, y: number, n: number | string) {
  return `<circle cx="${x}" cy="${y}" r="14" fill="${COR.vermelho}"/>` +
    txt(x, y + 5.5, String(n), { tam: 14, cor: '#fff', peso: 700, anc: 'middle' })
}

/** Seta fina apontando para um ponto da interface. */
function seta(x1: number, y1: number, x2: number, y2: number, cor = COR.vermelho) {
  const ang = Math.atan2(y2 - y1, x2 - x1)
  const p = 9
  const a1x = x2 - p * Math.cos(ang - 0.42), a1y = y2 - p * Math.sin(ang - 0.42)
  const a2x = x2 - p * Math.cos(ang + 0.42), a2y = y2 - p * Math.sin(ang + 0.42)
  return `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${cor}" stroke-width="2" fill="none" stroke-linecap="round"/>` +
    `<path d="M${x2} ${y2} L${a1x} ${a1y} M${x2} ${y2} L${a2x} ${a2y}" stroke="${cor}" stroke-width="2" fill="none" stroke-linecap="round"/>`
}

function lupa(cx: number, cy: number, r = 8, cor = COR.fraco) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${cor}" stroke-width="2"/>` +
    `<path d="M${cx + r * 0.72} ${cy + r * 0.72} l${r * 0.7} ${r * 0.7}" stroke="${cor}" stroke-width="2" stroke-linecap="round"/>`
}

function estrelas(x: number, y: number, n = 5, tam = 9, cor = '#E8A33D', cheias = n) {
  let s = ''
  for (let i = 0; i < n; i++) {
    const cx = x + i * (tam * 2.4)
    const pts = Array.from({ length: 10 }, (_, k) => {
      const raio = k % 2 === 0 ? tam : tam * 0.45
      const a = -Math.PI / 2 + (k * Math.PI) / 5
      return `${(cx + raio * Math.cos(a)).toFixed(1)},${(y + raio * Math.sin(a)).toFixed(1)}`
    }).join(' ')
    s += `<polygon points="${pts}" fill="${i < cheias ? cor : '#DFDAD3'}"/>`
  }
  return s
}

function botaoPill(x: number, y: number, l: number, a: number, rotulo: string, ativo = false) {
  const preenche = ativo ? COR.tinta : COR.papel
  const cor = ativo ? '#fff' : COR.tinta
  return caixa(x, y, l, a, a / 2, { preenche, fio: ativo ? COR.tinta : COR.linha }) +
    txt(x + l / 2, y + a / 2 + 5, rotulo, { tam: 13, cor, peso: 600, anc: 'middle' })
}

/** Moldura: fundo de papel, canto arredondado, sem sombra. */
function moldura(altura: number, conteudo: string, titulo?: string) {
  const topo = titulo ? 34 : 0
  const cab = titulo
    ? txt(0, 14, titulo.toUpperCase(), { tam: 12, cor: COR.vermelho, peso: 700, esp: 1.6 })
    : ''
  return `<svg viewBox="0 0 640 ${altura + topo}" xmlns="http://www.w3.org/2000/svg" role="img">
${cab}<g transform="translate(0 ${topo})">${conteudo}</g></svg>`
}

export interface Ilustracao {
  titulo: string
  legenda: string
  svg: string
}

/* ============================================================ ilustracoes = */

const buscaGoogle = () => {
  const c =
    caixa(0, 10, 640, 96, 14, { preenche: COR.areia, fio: COR.linha }) +
    caixa(28, 34, 470, 48, 24) +
    lupa(58, 58, 9) +
    txt(84, 63, 'Padaria do Sol Contagem', { tam: 17 }) +
    botaoPill(516, 34, 96, 48, 'Pesquisar') +
    seta(300, 136, 220, 96) +
    txt(310, 142, 'o nome do negócio e a cidade, nada mais', { tam: 14, cor: COR.fraco })
  return moldura(160, c, 'A busca que você faz primeiro')
}

const cartaoPerfil = () => {
  const c =
    caixa(0, 0, 640, 268, 14) +
    txt(32, 44, 'Padaria do Sol', { tam: 24, peso: 700 }) +
    estrelas(36, 66, 5, 8) +
    txt(150, 71, '4,8  ·  126 avaliações', { tam: 14, cor: COR.fraco }) +
    txt(32, 100, 'Padaria  ·  R. das Flores, 240 — Contagem', { tam: 14, cor: COR.fraco }) +
    txt(32, 124, 'Aberto agora', { tam: 14, cor: COR.verde, peso: 700 }) +
    txt(142, 124, '· fecha às 19h', { tam: 14, cor: COR.fraco }) +
    botaoPill(32, 146, 92, 38, 'Ligar', true) +
    botaoPill(134, 146, 92, 38, 'Rotas') +
    botaoPill(236, 146, 92, 38, 'Site') +
    botaoPill(338, 146, 92, 38, 'Salvar') +
    `<line x1="32" y1="204" x2="608" y2="204" stroke="${COR.linha}" stroke-width="1.4"/>` +
    txt(32, 234, 'É o proprietário desta empresa?', { tam: 16, cor: COR.azul, peso: 700 }) +
    `<line x1="32" y1="242" x2="278" y2="242" stroke="${COR.azul}" stroke-width="1.4"/>` +
    seta(160, 306, 120, 254) +
    txt(176, 300, 'É por aqui que você reivindica um perfil', { tam: 14, cor: COR.vermelho, peso: 700 }) +
    txt(176, 322, 'que já existe. Nunca crie um segundo.', { tam: 14, cor: COR.fraco })
  return moldura(340, c, 'O cartão que aparece no resultado')
}

const nomeCertoErrado = () => {
  const linha = (y: number, texto: string, certo: boolean) =>
    caixa(0, y, 640, 66, 10, { preenche: certo ? COR.papel : COR.areia }) +
    `<circle cx="38" cy="${y + 33}" r="15" fill="${certo ? COR.verde : COR.vermelho}"/>` +
    (certo
      ? `<path d="M31 ${y + 33} l5 5 l11 -11" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
      : `<path d="M32 ${y + 27} l12 12 M44 ${y + 27} l-12 12" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`) +
    txt(70, y + 39, texto, { tam: 16, peso: certo ? 700 : 400, cor: certo ? COR.tinta : COR.fraco })
  const c =
    linha(0, 'Padaria do Sol', true) +
    txt(70, 88, 'igual à placa da porta', { tam: 13, cor: COR.fraco }) +
    linha(104, 'Padaria do Sol — Melhor Pão de Contagem | 24h', false) +
    txt(70, 192, 'motivo nº 1 de suspensão de perfil', { tam: 13, cor: COR.vermelho, peso: 700 })
  return moldura(206, c, 'O mesmo negócio, escrito certo e errado')
}

const campoCategoria = () => {
  const opcao = (y: number, texto: string, destaque = false) =>
    (destaque ? `<rect x="2" y="${y}" width="396" height="40" fill="${COR.areia}"/>` : '') +
    txt(22, y + 26, texto, { tam: 15, peso: destaque ? 700 : 400, cor: destaque ? COR.tinta : COR.fraco }) +
    `<line x1="0" y1="${y + 40}" x2="400" y2="${y + 40}" stroke="${COR.linha}" stroke-width="1"/>`
  const c =
    txt(0, 16, 'Categoria da empresa', { tam: 13, cor: COR.fraco, peso: 700, esp: 1 }) +
    caixa(0, 28, 400, 46, 8) +
    txt(22, 57, 'padaria', { tam: 16 }) +
    `<path d="M366 48 l10 10 l10 -10" stroke="${COR.fraco}" stroke-width="2" fill="none" stroke-linecap="round"/>` +
    caixa(0, 80, 400, 162, 8) +
    opcao(82, 'Padaria', true) +
    opcao(122, 'Padaria artesanal') +
    opcao(162, 'Confeitaria') +
    opcao(202, 'Café') +
    seta(438, 104, 410, 104) +
    txt(452, 96, 'A lista é fechada:', { tam: 14, cor: COR.tinta, peso: 700 }) +
    txt(452, 118, 'você escolhe uma', { tam: 14, cor: COR.fraco }) +
    txt(452, 140, 'delas, não inventa', { tam: 14, cor: COR.fraco }) +
    txt(452, 162, 'a sua.', { tam: 14, cor: COR.fraco })
  return moldura(266, c, 'O campo que mais decide se você aparece')
}

const enderecoOuArea = () => {
  const painel = (x: number, titulo: string, sub: string) =>
    caixa(x, 0, 300, 210, 12) + txt(x + 22, 34, titulo, { tam: 16, peso: 700 }) +
    txt(x + 22, 56, sub, { tam: 13, cor: COR.fraco })
  const pino = (cx: number, cy: number) =>
    `<path d="M${cx} ${cy + 22} c0 0 -15 -18 -15 -30 a15 15 0 1 1 30 0 c0 12 -15 30 -15 30z" fill="${COR.vermelho}"/>` +
    `<circle cx="${cx}" cy="${cy - 9}" r="5.5" fill="#fff"/>`
  const c =
    painel(0, 'Tem loja ou sala', 'o cliente vai até você') +
    `<rect x="22" y="76" width="256" height="112" rx="8" fill="${COR.areia}"/>` +
    `<path d="M22 140 h256 M120 76 v112" stroke="${COR.linha}" stroke-width="2"/>` +
    pino(150, 122) +
    txt(150, 176, 'endereço visível', { tam: 13, cor: COR.tinta, peso: 700, anc: 'middle' }) +
    painel(340, 'Atende no cliente', 'ou trabalha de casa') +
    `<rect x="362" y="76" width="256" height="112" rx="8" fill="${COR.areia}"/>` +
    `<circle cx="490" cy="128" r="52" fill="${COR.vermelho}" fill-opacity="0.14" stroke="${COR.vermelho}" stroke-width="2" stroke-dasharray="6 5"/>` +
    txt(490, 133, 'sua região', { tam: 13, cor: COR.vermelho, peso: 700, anc: 'middle' }) +
    txt(490, 176, 'endereço escondido', { tam: 13, cor: COR.tinta, peso: 700, anc: 'middle' })
  return moldura(210, c, 'Dois caminhos — escolha o seu')
}

const trajetoVideo = () => {
  /* Quatro quadros em sequencia leem melhor que uma planta baixa: cada parada
     tem espaco proprio para o rotulo, e nenhuma legenda cai em cima da outra. */
  const L = 148, A = 128, VAO = 16
  const x = (i: number) => i * (L + VAO)

  const predio = (px: number, py: number) =>
    `<path d="M${px + 22} ${py + 76} v-34 l24 -18 l24 18 v34z" fill="${COR.papel}" stroke="${COR.tinta}" stroke-width="2" stroke-linejoin="round"/>` +
    `<rect x="${px + 38}" y="${py + 54}" width="16" height="22" fill="${COR.areia}" stroke="${COR.tinta}" stroke-width="1.6"/>` +
    `<rect x="${px + 26}" y="${py + 30}" width="40" height="9" rx="2" fill="${COR.vermelho}"/>` +
    `<line x1="${px + 12}" y1="${py + 76}" x2="${px + 136}" y2="${py + 76}" stroke="${COR.tinta}" stroke-width="2"/>` +
    `<line x1="${px + 12}" y1="${py + 88}" x2="${px + 136}" y2="${py + 88}" stroke="${COR.linha}" stroke-width="2" stroke-dasharray="8 7"/>` +
    `<rect x="${px + 98}" y="${py + 44}" width="22" height="36" rx="4" fill="${COR.papel}" stroke="${COR.vermelho}" stroke-width="2"/>` +
    `<circle cx="${px + 109}" cy="${py + 56}" r="4.4" fill="none" stroke="${COR.vermelho}" stroke-width="1.8"/>` +
    `<circle cx="${px + 109}" cy="${py + 72}" r="2.2" fill="${COR.vermelho}"/>`

  const placa = (px: number, py: number) =>
    `<rect x="${px + 24}" y="${py + 26}" width="100" height="34" rx="4" fill="${COR.papel}" stroke="${COR.tinta}" stroke-width="2"/>` +
    linhaFalsa(px + 36, py + 38, 76, 9, COR.vermelho) +
    `<rect x="${px + 24}" y="${py + 70}" width="46" height="30" rx="4" fill="${COR.areia}" stroke="${COR.tinta}" stroke-width="1.8"/>` +
    txt(px + 47, py + 91, '240', { tam: 15, peso: 700, anc: 'middle' }) +
    `<rect x="${px + 82}" y="${py + 70}" width="42" height="30" rx="4" fill="${COR.papel}" stroke="${COR.linha}" stroke-width="1.8"/>` +
    linhaFalsa(px + 90, py + 80, 26, 5) + linhaFalsa(px + 90, py + 89, 18, 5)

  const entrada = (px: number, py: number) =>
    `<rect x="${px + 30}" y="${py + 24}" width="52" height="76" rx="3" fill="${COR.areia}" stroke="${COR.tinta}" stroke-width="2"/>` +
    `<circle cx="${px + 72}" cy="${py + 64}" r="3.4" fill="${COR.tinta}"/>` +
    seta(px + 96, py + 64, px + 126, py + 64) +
    `<rect x="${px + 96}" y="${py + 82}" width="44" height="18" rx="3" fill="${COR.papel}" stroke="${COR.linha}" stroke-width="1.8"/>`

  const prova = (px: number, py: number) =>
    `<circle cx="${px + 42}" cy="${py + 44}" r="13" fill="none" stroke="${COR.tinta}" stroke-width="2.4"/>` +
    `<path d="M${px + 52} ${py + 50} l26 26 m-9 -9 l8 8 m-16 -16 l8 8" stroke="${COR.tinta}" stroke-width="2.4" fill="none" stroke-linecap="round"/>` +
    `<rect x="${px + 82}" y="${py + 34}" width="42" height="66" rx="6" fill="${COR.papel}" stroke="${COR.tinta}" stroke-width="2"/>` +
    `<rect x="${px + 89}" y="${py + 41}" width="28" height="17" rx="2" fill="${COR.areia}"/>` +
    [0, 1, 2].map((r) => [0, 1, 2].map((cc) =>
      `<circle cx="${px + 94 + cc * 9}" cy="${py + 68 + r * 9}" r="2.6" fill="${COR.fraco}"/>`).join('')).join('')

  const quadro = (i: number, n: number, rotulo: string, sub: string, desenho: string) =>
    caixa(x(i), 0, L, A, 10, { preenche: COR.areia, fio: COR.linha }) + desenho +
    chamada(x(i) + 18, 18, n) +
    txt(x(i) + L / 2, A + 26, rotulo, { tam: 13.5, peso: 700, anc: 'middle' }) +
    txt(x(i) + L / 2, A + 46, sub, { tam: 12, cor: COR.fraco, anc: 'middle' })

  const ponte = (i: number) =>
    `<path d="M${x(i) + L + 3} ${A / 2} h${VAO - 6}" stroke="${COR.vermelho}" stroke-width="2" stroke-dasharray="4 4"/>`

  const c =
    quadro(0, 1, 'Calçada oposta', 'a rua e o vizinho', predio(x(0), 12)) +
    quadro(1, 2, 'Placa e número', 'o nome legível', placa(x(1), 12)) +
    quadro(2, 3, 'Entre e ande', 'ambiente e estoque', entrada(x(2), 12)) +
    quadro(3, 4, 'A prova final', 'chave, maquininha', prova(x(3), 12)) +
    ponte(0) + ponte(1) + ponte(2) +
    txt(0, A + 78, 'Tudo isso numa tomada só, sem soltar o dedo: no mínimo 30 segundos, gravado ao vivo.', { tam: 13.5, cor: COR.tinta })

  return moldura(A + 88, c, 'O caminho a percorrer no vídeo de verificação')
}

const descricaoCorte = () => {
  const c =
    caixa(0, 0, 640, 216, 12) +
    txt(28, 36, 'Sobre', { tam: 13, cor: COR.fraco, peso: 700, esp: 1.4 }) +
    linhaFalsa(28, 54, 584, 8, COR.tinta) +
    linhaFalsa(28, 76, 584, 8, COR.tinta) +
    linhaFalsa(28, 98, 380, 8, COR.tinta) +
    `<line x1="16" y1="122" x2="624" y2="122" stroke="${COR.vermelho}" stroke-width="1.6" stroke-dasharray="6 5"/>` +
    txt(624, 138, 'corta por volta de 250 caracteres', { tam: 12.5, cor: COR.vermelho, peso: 700, anc: 'end' }) +
    linhaFalsa(28, 152, 584) +
    linhaFalsa(28, 170, 500) +
    txt(28, 200, 'Mais', { tam: 15, cor: COR.azul, peso: 700 }) +
    txt(180, 40, 'o que a maioria vai ler', { tam: 12.5, cor: COR.tinta, peso: 700, anc: 'end' })
  return moldura(216, c, 'Onde a descrição é cortada na tela')
}

const publicacao = () => {
  const c =
    caixa(0, 0, 300, 300, 12) +
    `<rect x="1" y="1" width="298" height="132" rx="12" fill="${COR.areia}"/>` +
    `<path d="M60 108 l44 -44 l30 30 l26 -26 l40 40z" fill="#DAD6D0"/>` +
    `<circle cx="86" cy="52" r="12" fill="#DAD6D0"/>` +
    linhaFalsa(24, 156, 252, 8, COR.tinta) +
    linhaFalsa(24, 176, 180, 8, COR.tinta) +
    `<line x1="12" y1="196" x2="288" y2="196" stroke="${COR.vermelho}" stroke-width="1.6" stroke-dasharray="6 5"/>` +
    linhaFalsa(24, 210, 252) +
    linhaFalsa(24, 228, 210) +
    botaoPill(24, 250, 118, 34, 'Saiba mais') +
    txt(316, 118, 'Os primeiros ~100', { tam: 15, peso: 700 }) +
    txt(316, 142, 'caracteres são tudo', { tam: 15, peso: 700 }) +
    txt(316, 172, 'o que aparece antes', { tam: 14, cor: COR.fraco }) +
    txt(316, 194, 'do corte. O resto só', { tam: 14, cor: COR.fraco }) +
    txt(316, 216, 'quem abrir vai ler.', { tam: 14, cor: COR.fraco }) +
    seta(310, 196, 292, 196)
  return moldura(300, c, 'Anatomia de uma publicação')
}

const gradeFotos = () => {
  const cel = (x: number, y: number, l: number, a: number, rotulo: string, qtd: string) =>
    caixa(x, y, l, a, 8, { preenche: COR.areia, fio: COR.linha }) +
    `<path d="M${x + 18} ${y + a - 20} l${(l - 36) * 0.34} ${-a * 0.34} l${(l - 36) * 0.22} ${a * 0.2} l${(l - 36) * 0.2} ${-a * 0.24} l${(l - 36) * 0.24} ${a * 0.38}z" fill="#DDD8D1"/>` +
    `<circle cx="${x + 26}" cy="${y + 24}" r="8" fill="#DDD8D1"/>` +
    txt(x + l / 2, y + a + 20, rotulo, { tam: 12.5, peso: 700, anc: 'middle' }) +
    txt(x + l / 2, y + a + 38, qtd, { tam: 12, cor: COR.vermelho, peso: 700, anc: 'middle' })
  const c =
    cel(0, 0, 116, 96, 'Logo', '1') +
    cel(131, 0, 116, 96, 'Capa', '1') +
    cel(262, 0, 116, 96, 'Fachada', '2 a 3') +
    cel(393, 0, 116, 96, 'Interior', '3 a 4') +
    cel(524, 0, 116, 96, 'Equipe', '2') +
    txt(0, 178, 'Mais 3 ou mais do produto ou do serviço pronto — e 3 fotos novas por mês, sempre.', { tam: 14, cor: COR.fraco })
  return moldura(190, c, 'As dez primeiras fotos, em ordem')
}

const pedidoAvaliacao = () => {
  const c =
    caixa(0, 0, 286, 260, 14, { preenche: COR.areia }) +
    caixa(20, 26, 246, 96, 12, { preenche: COR.papel }) +
    linhaFalsa(38, 48, 190, 7) +
    linhaFalsa(38, 66, 210, 7) +
    linhaFalsa(38, 84, 120, 7) +
    caixa(38, 96, 176, 16, 8, { preenche: '#EAF1F5', fio: '#CFE0E9', esp: 1 }) +
    txt(46, 108, 'g.page/r/…/review', { tam: 11, cor: COR.azul, peso: 700 }) +
    txt(20, 156, 'Mande logo depois de atender,', { tam: 13, cor: COR.tinta }) +
    txt(20, 176, 'com o cliente ainda satisfeito.', { tam: 13, cor: COR.tinta }) +
    txt(20, 210, 'Nunca ofereça nada em troca.', { tam: 13, cor: COR.vermelho, peso: 700 }) +
    seta(300, 130, 350, 130) +
    caixa(368, 26, 272, 208, 14) +
    txt(392, 66, 'Como foi sua experiência?', { tam: 15, peso: 700 }) +
    estrelas(400, 112, 5, 13) +
    caixa(392, 140, 224, 44, 8, { preenche: COR.areia, fio: COR.linha }) +
    linhaFalsa(408, 156, 150) +
    linhaFalsa(408, 170, 110) +
    botaoPill(392, 196, 100, 30, 'Publicar', true)
  return moldura(260, c, 'Do pedido à estrela, em um clique')
}

const painelDesempenho = () => {
  const L = 116, VAO = 15
  const tile = (i: number, rotulo: string, valor: string) => {
    const px = i * (L + VAO)
    return caixa(px, 0, L, 92, 10) +
      txt(px + 16, 42, valor, { tam: 26, peso: 700 }) +
      txt(px + 16, 66, rotulo, { tam: 11.5, cor: COR.fraco })
  }
  const barra = (i: number, alt: number) =>
    `<rect x="${i * 34}" y="${248 - alt}" width="24" height="${alt}" rx="4" fill="${COR.vermelho}" fill-opacity="${(0.3 + alt / 150).toFixed(2)}"/>`
  const c =
    tile(0, 'ligações', '38') + tile(1, 'rotas', '112') + tile(2, 'cliques', '64') +
    tile(3, 'mensagens', '21') + tile(4, 'reservas', '9') +
    txt(0, 132, 'Termos que levaram gente até você', { tam: 12, cor: COR.vermelho, peso: 700, esp: 1.2 }) +
    barra(0, 92) + barra(1, 72) + barra(2, 54) + barra(3, 38) + barra(4, 26) +
    txt(196, 176, '“padaria perto de mim”', { tam: 14.5, peso: 600 }) +
    txt(196, 200, '“pão quente Contagem”', { tam: 14.5, peso: 600 }) +
    txt(196, 224, '“bolo de aniversário Contagem”', { tam: 14.5, peso: 600 }) +
    txt(196, 250, 'serviço que aparece aqui e você ainda não cadastrou', { tam: 12.5, cor: COR.fraco }) +
    txt(196, 268, 'é dinheiro esperando na mesa.', { tam: 12.5, cor: COR.fraco })
  return moldura(280, c, 'O que olhar no Desempenho')
}

const blocoMapa = () => {
  const item = (y: number, nome: string, nota: string, cat: string, cheias: number, destaque = false) =>
    (destaque ? `<rect x="0" y="${y}" width="420" height="76" rx="8" fill="${COR.areia}"/>` : '') +
    txt(22, y + 28, nome, { tam: 16, peso: 700 }) +
    estrelas(24, y + 46, 5, 6, '#E8A33D', cheias) +
    txt(110, y + 50, nota, { tam: 12.5, cor: COR.fraco }) +
    txt(22, y + 68, cat, { tam: 12.5, cor: COR.fraco }) +
    `<line x1="0" y1="${y + 76}" x2="420" y2="${y + 76}" stroke="${COR.linha}" stroke-width="1"/>`
  const c =
    caixa(0, 0, 420, 244, 12) +
    item(2, 'Padaria do Sol', '4,8 · 126', 'Padaria · 400 m · Aberto', 5, true) +
    item(82, 'Pão &amp; Cia', '4,5 · 84', 'Padaria · 900 m · Aberto', 4) +
    item(162, 'Delícias da Vila', '4,2 · 31', 'Padaria · 1,2 km · Fechado', 4) +
    `<rect x="444" y="0" width="196" height="244" rx="12" fill="${COR.areia}" stroke="${COR.linha}" stroke-width="1.6"/>` +
    `<path d="M444 90 h196 M444 168 h196 M520 0 v244 M586 0 v244" stroke="${COR.linha}" stroke-width="1.4"/>` +
    `<circle cx="520" cy="90" r="9" fill="${COR.vermelho}"/>` +
    `<circle cx="586" cy="168" r="7" fill="${COR.fraco}"/>` +
    `<circle cx="470" cy="200" r="7" fill="${COR.fraco}"/>` +
    seta(30, 286, 30, 250) +
    txt(52, 278, 'Quem ocupa estas três linhas leva quase', { tam: 14, peso: 700 }) +
    txt(52, 300, 'todo o clique da busca local.', { tam: 14, cor: COR.fraco })
  return moldura(312, c, 'O bloco de três — o lugar que você quer')
}

const horarioAberto = () => {
  const estado = (x: number, rotulo: string, cor: string, sub: string) =>
    caixa(x, 0, 300, 108, 12) +
    `<circle cx="${x + 34}" cy="54" r="10" fill="${cor}"/>` +
    txt(x + 58, 48, rotulo, { tam: 19, peso: 700, cor }) +
    txt(x + 58, 74, sub, { tam: 13, cor: COR.fraco })
  const c =
    estado(0, 'Aberto agora', COR.verde, 'fecha às 19h') +
    estado(340, 'Fechado', COR.vermelho, 'abre amanhã às 7h') +
    txt(0, 150, 'É a primeira coisa que a pessoa lê — e, segundo o estudo da Whitespark de 2026,', { tam: 13.5, cor: COR.tinta }) +
    txt(0, 172, 'estar aberto na hora da busca está entre os cinco fatores mais fortes do bloco de mapas.', { tam: 13.5, cor: COR.tinta })
  return moldura(180, c, 'Por que o horário não é detalhe')
}

/* ================================================================ catalogo = */

export const ilustracoes: Record<string, Ilustracao> = {
  busca: {
    titulo: 'A busca que você faz primeiro',
    legenda: 'Digite só o nome e a cidade. É assim que você descobre se o perfil já existe.',
    svg: buscaGoogle(),
  },
  cartao: {
    titulo: 'O cartão que aparece no resultado',
    legenda: 'Se esta linha aparecer, o perfil já existe: reivindique em vez de criar outro.',
    svg: cartaoPerfil(),
  },
  nome: {
    titulo: 'O mesmo negócio, escrito certo e errado',
    legenda: 'O de cima fica no ar. O de baixo é o motivo número um de suspensão.',
    svg: nomeCertoErrado(),
  },
  categoria: {
    titulo: 'O campo que mais decide se você aparece',
    legenda: 'A categoria vem de uma lista fechada. Escolha o que o negócio é, não o que ele vende.',
    svg: campoCategoria(),
  },
  endereco: {
    titulo: 'Dois caminhos — escolha o seu',
    legenda: 'Quem atende no cliente esconde o endereço e marca as regiões. O alcance é o mesmo.',
    svg: enderecoOuArea(),
  },
  video: {
    titulo: 'O caminho a percorrer no vídeo',
    legenda: 'Uma tomada só, sem cortes: calçada, placa, entrada, e a prova de que você manda ali.',
    svg: trajetoVideo(),
  },
  descricao: {
    titulo: 'Onde a descrição é cortada',
    legenda: 'Você escreve 750 caracteres, mas só uns 250 aparecem antes do "Mais".',
    svg: descricaoCorte(),
  },
  publicacao: {
    titulo: 'Anatomia de uma publicação',
    legenda: 'Foto boa, os 100 primeiros caracteres afiados, e um botão. O resto é bônus.',
    svg: publicacao(),
  },
  fotos: {
    titulo: 'As dez primeiras fotos, em ordem',
    legenda: 'Cada foto responde a uma dúvida: onde fica, como é por dentro, quem atende.',
    svg: gradeFotos(),
  },
  avaliacao: {
    titulo: 'Do pedido à estrela, em um clique',
    legenda: 'O link curto abre a janela de estrelas direto. Sem ele, quase ninguém completa.',
    svg: pedidoAvaliacao(),
  },
  desempenho: {
    titulo: 'O que olhar no Desempenho',
    legenda: 'Visualização não paga conta. Ligação, rota, clique e mensagem, sim.',
    svg: painelDesempenho(),
  },
  mapa: {
    titulo: 'O bloco de três — o lugar que você quer',
    legenda: 'Nome, nota, categoria, distância e se está aberto. É com isso que a pessoa decide.',
    svg: blocoMapa(),
  },
  horario: {
    titulo: 'Por que o horário não é detalhe',
    legenda: 'Quem lê "Fechado" clica no concorrente — e o Google usa isso no ranqueamento.',
    svg: horarioAberto(),
  },
}
