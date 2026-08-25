/**
 * Gera o PDF do guia "Como criar o Google Meu Negocio do zero".
 *
 *   node gerar-pdf-google-meu-negocio.ts
 *   PNG=fora.png PAGINA=7 node gerar-pdf-google-meu-negocio.ts   (confere 1 folha)
 *
 * O conteudo NAO mora aqui — mora em data/guia-google-meu-negocio.ts, o mesmo
 * arquivo que a pagina do site le. Este script so diagrama.
 *
 * POR QUE EXISTE UMA PAGINACAO PROPRIA AQUI
 * A primeira versao montava cada folha a mao, com altura fixa. Funcionava
 * enquanto o corpo do texto era pequeno; ao aumentar a letra para 12,4pt —
 * que e o tamanho em que uma pessoa de 60 anos le sem apertar os olhos — cada
 * passo passou a ocupar mais de uma folha e o modelo quebrou.
 *
 * Deixar o Chromium quebrar sozinho tambem nao serve: da titulo orfao no pe da
 * folha, tabela cortada no meio e nenhum jeito de imprimir numero de pagina
 * (o Chromium nao implementa as margin boxes do CSS).
 *
 * Entao o script faz o que um programa de diagramacao faz:
 *   1. mede, no proprio Chromium, a altura real de cada bloco de conteudo;
 *   2. distribui os blocos em folhas de altura conhecida, respeitando o que
 *      nao pode se separar (rotulo gruda no que vem depois);
 *   3. so entao imprime, ja com cabecalho, folio e numeros do sumario certos.
 *
 * O sumario e diagramado duas vezes de proposito: na primeira passagem os
 * numeros de pagina ainda nao existem, entao ele e medido com "00" — que ocupa
 * a mesma largura do numero real, porque fica numa caixa de largura fixa. Sem
 * isso, escrever o numero mudaria a altura do sumario e, com ela, a pagina de
 * todo o resto.
 */

import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  partes, preparacao, erros, faq, checklistFinal, cola, fontes, totalPassos,
  diagnostico, plano30, exemploCompleto, modelosPorRamo, calendarioPublicacoes,
  type Passo, type Tabela,
} from './data/guia-google-meu-negocio.ts'
import { ilustracoes } from './data/ilustracoes-google-meu-negocio.ts'

const RAIZ = dirname(fileURLToPath(import.meta.url))
const SAIDA = join(RAIZ, 'public', 'guia-google-meu-negocio-passo-a-passo.pdf')
const SITE = 'calazanslumina.com.br'
const EDICAO = 'Edição de agosto de 2026'
const CHROME = process.env.CHROME_BIN || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'

/* Geometria da folha, em milimetros. */
const FOLHA_L = 210
const FOLHA_A = 297
const MARGEM = { topo: 20, lado: 19, pe: 20 }
const LARGURA = FOLHA_L - MARGEM.lado * 2          // 172mm
const ALTURA_UTIL = FOLHA_A - MARGEM.topo - MARGEM.pe // 257mm
const ALTURA_CABECALHO = 13                         // cabecalho corrido + fio
const ALTURA_FLUXO = ALTURA_UTIL - ALTURA_CABECALHO  // 244mm por folha de texto

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const fonte64 = (arq: string) =>
  readFileSync(join(RAIZ, 'templates-assets', 'fontes', arq)).toString('base64')

const dois = (n: number) => String(n).padStart(2, '0')

/* ------------------------------------------------------------------- css --
   Sem canto arredondado, sem sombra, sem caixa colorida em cada paragrafo.
   A hierarquia vem do tamanho, do peso e do fio — que e como livro se faz.   */

const css = `
@font-face{font-family:'DM Sans';src:url(data:font/woff2;base64,${fonte64('dmsans-var.woff2')}) format('woff2');font-weight:100 1000;font-style:normal;}
@font-face{font-family:'DM Serif Display';src:url(data:font/woff2;base64,${fonte64('dmserif-400.woff2')}) format('woff2');font-weight:400;font-style:normal;}

:root{
  --tinta:#16161A;
  --tinta-fraca:#55555C;
  --vermelho:#C8102E;
  --papel:#FFFFFF;
  --fio:#D8D8DC;
  --fio-forte:#16161A;
  --areia:#F5F1EC;
}
*{box-sizing:border-box;margin:0;padding:0;}
html,body{background:#8C8C90;}
body{font-family:'DM Sans',system-ui,sans-serif;color:var(--tinta);
  font-size:12.4pt;line-height:1.62;-webkit-font-smoothing:antialiased;
  font-variant-numeric:lining-nums tabular-nums;}

.folha{width:${FOLHA_L}mm;height:${FOLHA_A}mm;background:var(--papel);position:relative;
  overflow:hidden;page-break-after:always;break-after:page;margin:0 auto;}
.folha:last-of-type{page-break-after:auto;break-after:auto;}
.util{position:absolute;left:${MARGEM.lado}mm;right:${MARGEM.lado}mm;
  top:${MARGEM.topo}mm;height:${ALTURA_UTIL}mm;display:flex;flex-direction:column;}
.util > *{flex:0 0 auto;}
/* Fio grosso entre um passo e o seguinte dentro da mesma parte. */
.b.separa{padding-top:9mm;}

/* ---- cabecalho corrido e folio ---- */
.corrido{height:${ALTURA_CABECALHO}mm;display:flex;justify-content:space-between;
  align-items:flex-start;border-bottom:.4pt solid var(--fio);}
.corrido span{font-size:8.6pt;line-height:1.2;letter-spacing:.15em;text-transform:uppercase;
  color:var(--tinta-fraca);font-weight:500;}
.corrido .esq{color:var(--vermelho);font-weight:700;}
.folio{position:absolute;left:${MARGEM.lado}mm;right:${MARGEM.lado}mm;bottom:${MARGEM.pe / 2}mm;
  display:flex;justify-content:space-between;align-items:baseline;}
.folio .marca{font-size:8.2pt;letter-spacing:.1em;color:#9A9AA0;}
.folio .n{font-family:'DM Serif Display',serif;font-size:12pt;color:var(--tinta);}

/* ---- blocos de texto ---- */
.b{padding-top:6mm;}
.b:first-child{padding-top:0;}
p{font-size:12.4pt;line-height:1.62;}
.lead{font-size:14pt;line-height:1.5;color:var(--tinta-fraca);}

.rotulo{font-size:9pt;font-weight:700;letter-spacing:.17em;text-transform:uppercase;
  color:var(--vermelho);}

h1,h2,h3,h4,.serif{font-family:'DM Serif Display',Georgia,serif;font-weight:400;letter-spacing:-.005em;}

/* ---- abertura de passo ---- */
.passo-abre .olho{font-size:9pt;font-weight:700;letter-spacing:.17em;text-transform:uppercase;
  color:var(--vermelho);display:flex;justify-content:space-between;align-items:baseline;}
.passo-abre .olho .t{color:var(--tinta-fraca);font-weight:500;}
.passo-abre h2{font-size:28pt;line-height:1.1;margin-top:4mm;}
.passo-abre .numeral{font-family:'DM Serif Display',serif;font-size:15pt;color:var(--vermelho);}

/* ---- caminho de clique ---- */
.clique{display:flex;gap:6mm;align-items:baseline;padding-top:3.4mm;padding-bottom:3.4mm;
  border-bottom:.4pt solid var(--fio);}
.clique:first-of-type{border-top:.4pt solid var(--fio);}
.clique .n{font-family:'DM Serif Display',serif;font-size:13pt;color:var(--vermelho);
  flex:0 0 7mm;line-height:1.35;}
.clique p{font-size:12.2pt;line-height:1.5;}

/* ---- notas ---- */
.nota{padding-left:7mm;border-left:2pt solid var(--vermelho);}
.nota .rotulo{color:var(--vermelho);}
.nota p{margin-top:2mm;font-size:12pt;line-height:1.56;}
.nota.grave{border-left-color:var(--tinta);background:var(--areia);
  padding:5mm 6mm 5.5mm 7mm;margin-left:-1mm;}
.nota.grave .rotulo{color:var(--tinta);}

/* ---- modelo para copiar ---- */
.modelo{padding-left:7mm;border-left:.4pt solid var(--fio);}
.modelo .rotulo{color:var(--tinta-fraca);}
.modelo pre{margin-top:2.5mm;white-space:pre-wrap;font-family:'DM Sans',sans-serif;
  font-size:11.6pt;line-height:1.55;color:var(--tinta);}

/* ---- tabelas ---- */
.tab .cap{font-size:9pt;font-weight:700;letter-spacing:.17em;text-transform:uppercase;
  color:var(--vermelho);margin-bottom:3mm;}
table{width:100%;border-collapse:collapse;}
th{font-size:8.8pt;font-weight:700;letter-spacing:.13em;text-transform:uppercase;
  color:var(--tinta-fraca);text-align:left;padding:0 5mm 2.5mm 0;
  border-bottom:1.2pt solid var(--tinta);}
th:last-child,td:last-child{padding-right:0;}
td{font-size:11.6pt;line-height:1.48;padding:3.4mm 5mm 3.4mm 0;vertical-align:top;
  border-bottom:.4pt solid var(--fio);}
td:first-child{font-weight:700;}
.tab.simples td:first-child{font-weight:500;color:var(--tinta-fraca);width:52mm;}
.tab.simples td:last-child{font-weight:500;}

/* ---- figura ----
   O desenho ocupa a largura inteira da mancha e a legenda vem embaixo, menor.
   Sem moldura em volta: o proprio desenho ja tem contorno, e caixa dentro de
   caixa e o que faz material parecer apostila. */
.fig svg{width:100%;height:auto;display:block;}
.fig .legenda{margin-top:3mm;padding-top:2.5mm;border-top:.4pt solid var(--fio);
  font-size:10.4pt;line-height:1.45;color:var(--tinta-fraca);}

/* ---- faixas do diagnostico ---- */
.faixa{display:flex;gap:6mm;align-items:flex-start;}
.faixa .pontos{flex:0 0 22mm;font-family:'DM Serif Display',serif;font-size:19pt;
  color:var(--vermelho);line-height:1;padding-top:1mm;}
.faixa h4{font-size:15pt;line-height:1.25;}
.faixa p{font-size:11.6pt;line-height:1.55;color:var(--tinta-fraca);margin-top:1.5mm;}

/* ---- etapas do plano de 30 dias ---- */
.etapa .quando{display:flex;align-items:baseline;gap:4mm;border-bottom:1.2pt solid var(--tinta);
  padding-bottom:2mm;}
.etapa .quando b{font-size:11pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
  color:var(--vermelho);}
.etapa .quando span{margin-left:auto;font-size:10pt;color:var(--tinta-fraca);
  letter-spacing:.08em;text-transform:uppercase;}
.etapa h4{font-size:19pt;margin-top:3mm;font-family:'DM Serif Display',serif;font-weight:400;}
.etapa-corpo{padding-top:2.5mm;}
.etapa-corpo ul{list-style:none;}
.etapa-corpo li{position:relative;padding-left:7mm;padding-bottom:2.2mm;font-size:11.8pt;line-height:1.5;}
.etapa-corpo li::before{content:"";position:absolute;left:0;top:2.6mm;width:3mm;height:3mm;
  background:var(--vermelho);}
.etapa-corpo .resultado{margin-top:2mm;font-size:11.4pt;line-height:1.5;color:var(--tinta-fraca);}
.etapa-corpo .resultado b{color:var(--tinta);}

/* ---- modelos por ramo ---- */
.ramo h4{font-size:17pt;font-family:'DM Serif Display',serif;font-weight:400;}
.ramo .sub{font-size:11.4pt;color:var(--tinta-fraca);margin-top:1mm;line-height:1.45;}
.modelo-solto{padding-top:3mm;}

/* ---- fonte citada ---- */
.fonte{font-size:9.6pt;line-height:1.45;color:var(--tinta-fraca);
  padding-top:3mm;border-top:.4pt solid var(--fio);}
.fonte b{font-weight:700;color:var(--tinta);}

/* ---- barra de conclusao ---- */
.feito{display:flex;align-items:center;gap:4mm;border-top:1.2pt solid var(--tinta);padding-top:3.5mm;}
.feito .cx{flex:0 0 5mm;height:5mm;border:1pt solid var(--tinta);}
.feito b{font-size:11pt;font-weight:700;}
.feito .prox{margin-left:auto;text-align:right;font-size:10pt;color:var(--tinta-fraca);
  max-width:105mm;line-height:1.35;}
.feito .prox i{font-style:normal;color:var(--vermelho);font-weight:700;}

/* ---- listas gerais ---- */
.item{padding-top:5mm;}
.item h4{font-size:15pt;line-height:1.25;}
.item p{font-size:11.8pt;line-height:1.55;color:var(--tinta-fraca);margin-top:1.5mm;}
.item .nn{font-family:'DM Serif Display',serif;font-size:13pt;color:var(--vermelho);}

.erro{display:flex;gap:6mm;padding-top:5mm;}
.erro .nn{font-family:'DM Serif Display',serif;font-size:17pt;color:var(--vermelho);
  flex:0 0 9mm;line-height:1.05;}
.erro h4{font-size:14.5pt;line-height:1.25;}
.erro .pq{font-size:11.6pt;line-height:1.5;color:var(--tinta-fraca);margin-top:1.5mm;}
.erro .sol{font-size:11.6pt;line-height:1.5;margin-top:2mm;}
.erro .sol b{color:var(--vermelho);font-weight:700;}

.q h4{font-size:15pt;line-height:1.3;}
.q p{font-size:11.9pt;line-height:1.58;color:var(--tinta-fraca);margin-top:2mm;}

.check li{list-style:none;display:flex;gap:5mm;align-items:flex-start;
  padding:3.4mm 0;border-bottom:.4pt solid var(--fio);font-size:12pt;line-height:1.45;}
.check .cx{flex:0 0 5mm;height:5mm;border:1pt solid var(--tinta);margin-top:1mm;}
.grupo-cab{display:flex;align-items:baseline;gap:4mm;border-bottom:1.2pt solid var(--tinta);
  padding-bottom:2.5mm;}
.grupo-cab h3{font-size:19pt;}
.grupo-cab span{margin-left:auto;font-size:9pt;font-weight:700;letter-spacing:.15em;
  text-transform:uppercase;color:var(--vermelho);}

.fonte-item{padding-top:3.6mm;}
.fonte-item .o{font-size:11.8pt;line-height:1.45;font-weight:700;}
.fonte-item .onde{font-size:11pt;line-height:1.45;color:var(--tinta-fraca);margin-top:1mm;}
.fonte-item .url{font-size:10pt;color:var(--vermelho);margin-top:.8mm;}

/* ---- titulo de secao (abre capitulo de conteudo) ---- */
.secao-titulo{padding-top:9mm;}
.secao-titulo h2{font-size:31pt;line-height:1.08;margin-top:2mm;}
.secao-titulo .lead{margin-top:4mm;}

/* ---- sumario ---- */
.sum-parte{padding-top:6mm;font-size:9pt;font-weight:700;letter-spacing:.17em;
  text-transform:uppercase;color:var(--vermelho);}
.sum-linha{display:flex;align-items:baseline;gap:3mm;padding:2.6mm 0;
  border-bottom:.4pt solid var(--fio);}
.sum-linha .nn{font-family:'DM Serif Display',serif;font-size:12pt;color:var(--vermelho);
  flex:0 0 9mm;}
.sum-linha .tx{font-size:12pt;}
.sum-linha .pt{flex:1;}
.sum-linha .pg{font-family:'DM Serif Display',serif;font-size:12pt;
  display:inline-block;width:11mm;text-align:right;flex:0 0 11mm;}

/* ---- folhas inteiras ---- */
.capa{background:var(--tinta);color:#fff;}
.capa .util{display:flex;flex-direction:column;}
.capa .marca{font-size:9pt;letter-spacing:.26em;text-transform:uppercase;
  color:rgba(255,255,255,.7);display:flex;align-items:center;gap:3mm;}
.capa .marca i{width:3.6mm;height:3.6mm;background:var(--vermelho);display:inline-block;}
.capa .tipo{margin-top:auto;font-size:9.5pt;letter-spacing:.24em;text-transform:uppercase;
  color:#E8637A;font-weight:700;}
.capa h1{font-size:47pt;line-height:1.02;margin-top:6mm;}
.capa h1 em{font-style:normal;color:#E8637A;}
.capa .regua{width:42mm;height:1.6mm;background:var(--vermelho);margin:9mm 0 7mm;}
.capa .sub{font-size:14.5pt;line-height:1.5;color:rgba(255,255,255,.82);max-width:140mm;}
.capa .pe{margin-top:11mm;padding-top:6mm;border-top:.6pt solid rgba(255,255,255,.22);
  display:flex;justify-content:space-between;align-items:flex-end;
  font-size:10pt;color:rgba(255,255,255,.62);}
.capa .pe b{color:#fff;font-weight:500;}

.abre{background:var(--papel);}
.abre .util{display:flex;flex-direction:column;}
.abre .rot{font-size:9pt;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--vermelho);}
.abre .numerao{font-family:'DM Serif Display',serif;font-size:150pt;line-height:.74;
  color:var(--papel);-webkit-text-stroke:1.3mm var(--vermelho);margin-top:6mm;}
.abre h2{font-size:40pt;line-height:1.05;margin-top:8mm;max-width:150mm;}
.abre .resumo{font-size:14.5pt;line-height:1.5;color:var(--tinta-fraca);max-width:142mm;margin-top:6mm;}
.abre ol{list-style:none;margin-top:auto;border-top:1.6pt solid var(--tinta);padding-top:4mm;}
.abre ol li{display:flex;gap:5mm;align-items:baseline;padding:2.8mm 0;
  border-bottom:.4pt solid var(--fio);font-size:12pt;}
.abre ol li b{font-family:'DM Serif Display',serif;color:var(--vermelho);font-size:13pt;
  font-weight:400;flex:0 0 9mm;}
.abre ol li .t{margin-left:auto;color:var(--tinta-fraca);font-size:10pt;
  letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;padding-left:6mm;}

.fim{background:var(--tinta);color:#fff;}
.fim .util{display:flex;flex-direction:column;}
.fim .marca{font-size:9pt;letter-spacing:.26em;text-transform:uppercase;
  color:rgba(255,255,255,.7);display:flex;align-items:center;gap:3mm;}
.fim .marca i{width:3.6mm;height:3.6mm;background:var(--vermelho);display:inline-block;}
.fim h2{font-size:34pt;line-height:1.08;margin-top:auto;}
.fim p{font-size:13.5pt;line-height:1.55;color:rgba(255,255,255,.78);max-width:145mm;margin-top:6mm;}
.fim .assina{margin-top:auto;padding-top:6mm;border-top:.6pt solid rgba(255,255,255,.22);
  display:flex;justify-content:space-between;align-items:flex-end;}
.fim .assina .nome{font-family:'DM Serif Display',serif;font-size:19pt;}
.fim .assina .lin{font-size:10.5pt;color:rgba(255,255,255,.62);margin-top:2mm;}

#relatorio{display:none;}
@page{size:A4;margin:0;}
@media print{html,body{background:#fff;}.folha{margin:0;}}
`

/* =========================================================== conteudo ===== */

type Bloco = { html: string; junto?: boolean; ancora?: string; marcador?: string; flutua?: boolean }
type Secao =
  | { tipo: 'inteira'; html: string; folio: boolean; ancora?: string }
  | { tipo: 'fluxo'; esq: string; dir: string; dirCont?: string; blocos: Bloco[]; ancora?: string }

const secoes: Secao[] = []

const bloco = (html: string, junto = false, ancora?: string, marcador?: string): Bloco =>
  ({ html, junto, ancora, marcador })

const tabelaHtml = (t: Tabela, classe = '') => `
<div class="b tab ${classe}">
  <div class="cap">${esc(t.titulo)}</div>
  <table>
    <thead><tr>${t.colunas.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>${t.linhas
      .map((l) => `<tr>${l.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`)
      .join('')}</tbody>
  </table>
</div>`

/* ---------- capa ---------- */
secoes.push({
  tipo: 'inteira', folio: false, html: `
  <div class="util">
    <div class="marca"><i></i> Calazans Lumina</div>
    <div class="tipo">Guia prático · ${esc(EDICAO)}</div>
    <h1>Como criar seu <em>Google Meu Negócio</em> do zero</h1>
    <div class="regua"></div>
    <p class="sub">Do cadastro à verificação por vídeo, com as palavras que aparecem
    na tela. Escrito para quem nunca fez, tem medo de clicar errado e vai fazer sozinho.</p>
    <div class="pe">
      <span><b>${totalPassos} passos · ${Object.keys(ilustracoes).length} telas ilustradas · plano de 30 dias</b><br>Cada regra deste guia tem a fonte citada no fim.</span>
      <span>${SITE}</span>
    </div>
  </div>`,
})

/* ---------- como usar ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Comece por aqui', dir: 'Antes de começar',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>Antes de começar</h2>
      <p class="lead">Este guia foi escrito para uma pessoa específica: a que precisa colocar
      o próprio negócio no Google, não tem quem faça por ela, e trava na primeira tela porque
      todo tutorial diz “acesse as configurações” sem dizer onde fica.</p></div>`, true),
    bloco(`<div class="b"><p>São ${totalPassos} passos, divididos em quatro partes. Cada passo diz o que
      você vai conseguir, onde clicar com as palavras exatas da tela, por que aquilo importa
      e o erro que costuma acontecer ali. Onde houver caixa recuada, é texto pronto: copie e
      troque o que está em maiúscula pelos seus dados.</p></div>`),
    bloco(`<div class="b"><p>A Parte 1 é a única que depende de alguém do outro lado aprovar, e é
      onde a maioria desiste. Faça ela inteira de uma vez, com o celular carregado e o negócio
      aberto. As Partes 2, 3 e 4 podem esperar a semana seguinte.</p></div>`),
    bloco(`<div class="b"><p>No fim do guia há uma cola com todos os limites e prazos, um checklist
      para imprimir e marcar à caneta, e a lista de onde cada regra foi conferida. Se você
      discordar de alguma coisa que está aqui, essa última página diz exatamente onde ir
      checar.</p></div>`),
    bloco(`<div class="b"><div class="rotulo">Como o Google monta a lista do mapa</div></div>`, true),
    bloco(`<div class="b"><p>Vale saber disto antes de começar, porque explica por que o guia
      insiste em algumas coisas e ignora outras. Segundo o próprio Google, o resultado local
      nasce de três fatores: relevância — o quanto o seu perfil combina com o que foi
      pesquisado; distância — onde está quem pesquisou; e destaque — o quanto o negócio é
      conhecido, dentro e fora do Google.</p></div>`),
    bloco(`<div class="b"><p>Você não controla a distância. Controla a relevância, preenchendo o
      perfil com precisão, e o destaque, acumulando avaliações e presença. É disso que trata o
      resto deste guia.</p></div>`),
    bloco(`<div class="b nota grave"><div class="rotulo">O aviso que vale dinheiro</div>
      <p>Criar, verificar e manter o perfil é gratuito, do começo ao fim, para sempre. O Google
      não liga cobrando taxa de ativação. Logo depois que o seu telefone fica público, é comum
      receber ligação de gente se passando pelo Google e pedindo pagamento ou código de
      verificação. É golpe. Não pague, não repasse código por telefone e não dê acesso ao perfil
      para quem ligou sem você ter procurado.</p></div>`),
  ],
})

/* ---------- sumario (numeros entram na 2a passagem) ---------- */
type LinhaSumario = { nn: string; tx: string; ancora: string }
const linhasSumario: { parte?: string; linha?: LinhaSumario }[] = []
linhasSumario.push({ parte: 'Antes de tudo' })
linhasSumario.push({ linha: { nn: '', tx: 'Em que pé está o seu perfil hoje?', ancora: 'diagnostico' } })
linhasSumario.push({ linha: { nn: '', tx: 'O que ter em mãos antes de começar', ancora: 'prep' } })
linhasSumario.push({ linha: { nn: '', tx: 'O plano de 30 dias', ancora: 'plano' } })
for (const p of partes) {
  linhasSumario.push({ parte: `Parte ${p.numero} · ${p.titulo}` })
  for (const s of p.passos)
    linhasSumario.push({ linha: { nn: dois(s.n), tx: s.titulo, ancora: `passo-${s.n}` } })
}
linhasSumario.push({ parte: 'Pronto para copiar' })
linhasSumario.push({ linha: { nn: '', tx: 'Um perfil inteiro, preenchido na sua frente', ancora: 'exemplo' } })
linhasSumario.push({ linha: { nn: '', tx: 'Descrição pronta para o seu ramo', ancora: 'modelos' } })
linhasSumario.push({ linha: { nn: '', tx: 'Um mês de publicações já escritas', ancora: 'calendario' } })
linhasSumario.push({ parte: 'Para consultar depois' })
linhasSumario.push({ linha: { nn: '', tx: 'Os dez erros que derrubam um perfil', ancora: 'erros' } })
linhasSumario.push({ linha: { nn: '', tx: 'Perguntas que todo mundo faz', ancora: 'faq' } })
linhasSumario.push({ linha: { nn: '', tx: 'A cola: todos os números num lugar só', ancora: 'cola' } })
linhasSumario.push({ linha: { nn: '', tx: 'Checklist para imprimir e marcar', ancora: 'check' } })
linhasSumario.push({ linha: { nn: '', tx: 'Onde cada regra foi conferida', ancora: 'fontes' } })

const sumarioBlocos = (pg: (a: string) => string): Bloco[] => {
  const b: Bloco[] = [
    bloco(`<div class="b secao-titulo"><h2>O que tem aqui dentro</h2></div>`, true),
  ]
  for (const l of linhasSumario) {
    if (l.parte) b.push(bloco(`<div class="sum-parte">${esc(l.parte)}</div>`, true))
    else if (l.linha)
      b.push(bloco(`<div class="sum-linha"><span class="nn">${l.linha.nn}</span>
        <span class="tx">${esc(l.linha.tx)}</span><span class="pt"></span>
        <span class="pg">${pg(l.linha.ancora)}</span></div>`))
  }
  return b
}
const iSumario = secoes.length
secoes.push({ tipo: 'fluxo', esq: 'Comece por aqui', dir: 'Sumário', blocos: sumarioBlocos(() => '00') })

/* ---------- diagnostico ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Antes de tudo', dir: 'Diagnóstico', ancora: 'diagnostico',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>${esc(diagnostico.titulo)}</h2>
      <p class="lead">${esc(diagnostico.instrucao)}</p></div>`, true),
    ...diagnostico.itens.map((i) =>
      bloco(`<ul class="check"><li><span class="cx"></span><span>${esc(i)}</span></li></ul>`)),
    bloco(`<div class="b"><div class="rotulo">Agora some e leia a sua faixa</div></div>`, true),
    ...diagnostico.faixas.map((f) =>
      bloco(`<div class="b faixa"><div class="pontos">${f.de}–${f.ate}</div>
        <div><h4>${esc(f.titulo)}</h4><p>${esc(f.texto)}</p></div></div>`)),
  ],
})

/* ---------- preparacao ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Antes de tudo', dir: 'Preparação', ancora: 'prep',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>O que ter em mãos<br>antes de começar</h2>
      <p class="lead">Separe estas seis coisas agora. Quem começa sem elas trava no meio do
      cadastro, sai para procurar, e volta com a sessão expirada.</p></div>`, true),
    ...preparacao.map((p, i) =>
      bloco(`<div class="b item"><h4><span class="nn">${dois(i + 1)}</span>&nbsp;&nbsp;${esc(p.item)}</h4>
        <p>${esc(p.porque)}</p></div>`)),
  ],
})

/* ---------- plano de 30 dias ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Antes de tudo', dir: 'Plano de 30 dias', ancora: 'plano',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>O plano de 30 dias</h2>
      <p class="lead">O resto do guia diz o que fazer. Esta página diz quando. Siga na ordem e,
      em um mês, o perfil está no ar, completo e com as primeiras avaliações.</p></div>`, true),
    ...plano30.flatMap((e) => [
      bloco(`<div class="b etapa"><div class="quando"><b>${esc(e.quando)}</b><span>${esc(e.tempo)}</span></div>
        <h4>${esc(e.titulo)}</h4></div>`, true),
      bloco(`<div class="etapa-corpo"><ul>${e.tarefas.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <p class="resultado"><b>No fim:</b> ${esc(e.resultado)}</p></div>`),
    ]),
  ],
})

/* ---------- partes e passos ---------- */
const todosPassos = partes.flatMap((p) => p.passos)

const blocosPasso = (passo: Passo): Bloco[] => {
  const b: Bloco[] = []
  b.push(bloco(`<div class="b passo-abre">
      <div class="olho"><span>Passo ${dois(passo.n)} de ${totalPassos}</span><span class="t">${esc(passo.tempo)}</span></div>
      <h2>${esc(passo.titulo)}</h2>
    </div>`, true, `passo-${passo.n}`, `Passo ${dois(passo.n)}`))
  /* objetivo e rotulo grudam na abertura: titulo sozinho no pe da folha e o
     defeito de diagramacao que mais salta aos olhos. */
  b.push(bloco(`<div class="b"><p class="lead">${esc(passo.objetivo)}</p></div>`, true))
  b.push(bloco(`<div class="b"><div class="rotulo">Onde clicar</div></div>`, true))
  /* Cada item do caminho de clique e um bloco solto: a lista pode quebrar entre
     folhas. O que NAO pode e o rotulo "Onde clicar" ficar sem nenhum item
     embaixo — disso cuida o `junto` do rotulo, que gruda no item 1. Marcar os
     itens como `junto` tornaria a lista inteira indivisivel e jogaria passos
     inteiros para a folha seguinte. */
  passo.ondeClicar.forEach((c, i) =>
    b.push(bloco(`<div class="clique"><span class="n">${i + 1}</span><p>${esc(c)}</p></div>`)))
  b.push(bloco(`<div class="b"><div class="rotulo">Por que isso importa</div></div>`, true))
  passo.detalhe.forEach((d) =>
    b.push(bloco(`<div class="b"><p>${esc(d)}</p></div>`)))
  for (const chave of passo.ilustracoes || []) {
    const il = ilustracoes[chave]
    if (!il) throw new Error(`ilustração desconhecida: ${chave}`)
    /* Figura flutua: se nao couber no que sobrou da folha, ela espera a
       proxima e o texto segue. Prender a figura ao ponto exato do texto
       deixaria meia folha em branco toda vez que uma nao coubesse. */
    const f = bloco(`<div class="b fig">${il.svg}<p class="legenda">${esc(il.legenda)}</p></div>`)
    f.flutua = true
    b.push(f)
  }
  if (passo.tabela) b.push(bloco(tabelaHtml(passo.tabela)))
  if (passo.copiar)
    b.push(bloco(`<div class="b modelo"><div class="rotulo">${esc(passo.copiar.titulo)}</div>
      <pre>${esc(passo.copiar.texto)}</pre></div>`))
  if (passo.dica)
    b.push(bloco(`<div class="b nota"><div class="rotulo">Dica</div><p>${esc(passo.dica)}</p></div>`))
  if (passo.atencao)
    b.push(bloco(`<div class="b"><div class="nota grave"><div class="rotulo">Atenção</div>
      <p>${esc(passo.atencao)}</p></div></div>`))
  if (passo.fonte)
    b.push(bloco(`<div class="b fonte"><b>Fonte.</b> ${esc(passo.fonte)}</div>`))
  const prox = todosPassos[todosPassos.findIndex((x) => x.n === passo.n) + 1]
  b.push(bloco(`<div class="b feito"><span class="cx"></span><b>Passo ${dois(passo.n)} concluído</b>
    <span class="prox">${prox ? `<i>A seguir:</i> ${esc(prox.titulo)}` : '<i>Último passo.</i> Siga para o checklist.'}</span></div>`))
  return b
}

for (const parte of partes) {
  secoes.push({
    tipo: 'inteira', folio: false, html: `
    <div class="util">
      <div class="rot">Parte ${parte.numero} de ${partes.length}</div>
      <div class="numerao">${parte.numero}</div>
      <h2>${esc(parte.titulo)}</h2>
      <p class="resumo">${esc(parte.resumo)}</p>
      <ol>${parte.passos.map((p) => `<li><b>${dois(p.n)}</b><span>${esc(p.titulo)}</span>
        <span class="t">${esc(p.tempo)}</span></li>`).join('')}</ol>
    </div>`,
  })
  /* Uma secao por parte, com os passos correndo dentro dela — como as secoes
     de um capitulo. Um passo por folha desperdicava meia pagina em cada um
     depois que o corpo do texto cresceu. */
  secoes.push({
    tipo: 'fluxo',
    esq: `Parte ${parte.numero} · ${parte.titulo}`,
    dir: '',
    blocos: parte.passos.flatMap((passo, i) => [
      ...(i > 0 ? [bloco('<div class="b separa"></div>', true)] : []),
      ...blocosPasso(passo),
    ]),
  })
}

/* ---------- exemplo preenchido ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Pronto para copiar', dir: 'Exemplo', ancora: 'exemplo',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>${esc(exemploCompleto.titulo)}</h2>
      <p class="lead">${esc(exemploCompleto.intro)}</p></div>`, true),
    bloco(tabelaHtml({
      titulo: 'Identidade e localização',
      colunas: ['Campo', 'O que foi escrito', 'Por quê'],
      linhas: exemploCompleto.camposIdentidade,
    })),
    bloco(tabelaHtml({
      titulo: 'O que a padaria oferece',
      colunas: ['Campo', 'O que foi escrito', 'Por quê'],
      linhas: exemploCompleto.camposOferta,
    })),
    bloco(`<div class="b modelo"><div class="rotulo">E a descrição, escrita por inteiro</div>
      <pre>${esc(exemploCompleto.descricao)}</pre></div>`),
  ],
})

/* ---------- modelos por ramo ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Pronto para copiar', dir: 'Modelos', ancora: 'modelos',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>Descrição pronta<br>para o seu ramo</h2>
      <p class="lead">Ache o seu, copie, troque o que está em maiúscula. Cada um já respeita as
      regras do Passo 11: nada de preço com prazo, telefone repetido ou link.</p></div>`, true),
    ...modelosPorRamo.flatMap((m) => [
      bloco(`<div class="b ramo"><h4>${esc(m.ramo)}</h4></div>`, true),
      bloco(`<div class="modelo modelo-solto"><pre>${esc(m.texto)}</pre></div>`),
    ]),
  ],
})

/* ---------- calendario de publicacoes ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Pronto para copiar', dir: 'Publicações', ancora: 'calendario',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>Um mês de publicações<br>já escritas</h2>
      <p class="lead">Uma por semana, sempre no mesmo dia. Quando o mês acabar, recomece do
      começo com assunto novo — o formato continua funcionando.</p></div>`, true),
    ...calendarioPublicacoes.flatMap((c) => [
      bloco(`<div class="b ramo"><h4>${esc(c.semana)} · ${esc(c.tema)}</h4>
        <p class="sub">${esc(c.oQue)}</p></div>`, true),
      bloco(`<div class="modelo modelo-solto"><pre>${esc(c.modelo)}</pre></div>`),
    ]),
  ],
})

/* ---------- erros ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Para consultar depois', dir: 'Dez erros', ancora: 'erros',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>Os dez erros que<br>derrubam um perfil</h2>
      <p class="lead">Nenhum destes é teoria. São os motivos pelos quais um perfil some da busca,
      é suspenso, ou fica no ar sem trazer ninguém.</p></div>`, true),
    ...erros.map((e, i) =>
      bloco(`<div class="erro"><span class="nn">${dois(i + 1)}</span><div>
        <h4>${esc(e.erro)}</h4>
        <p class="pq">${esc(e.porque)}</p>
        <p class="sol"><b>O que fazer:</b> ${esc(e.solucao)}</p></div></div>`)),
  ],
})

/* ---------- faq ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Para consultar depois', dir: 'Perguntas', ancora: 'faq',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>Perguntas que<br>todo mundo faz</h2></div>`, true),
    ...faq.map((f) =>
      bloco(`<div class="b q"><h4>${esc(f.q)}</h4><p>${esc(f.a)}</p></div>`)),
  ],
})

/* ---------- cola ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Para consultar depois', dir: 'A cola', ancora: 'cola',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>A cola</h2>
      <p class="lead">Todos os limites e prazos citados no guia, num lugar só. É a página para
      deixar aberta enquanto preenche.</p></div>`, true),
    bloco(tabelaHtml(
      { titulo: 'Limites e prazos', colunas: ['O quê', 'Quanto'], linhas: cola.linhas },
      'simples')),
  ],
})

/* ---------- checklist ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Para consultar depois', dir: 'Checklist', ancora: 'check',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>Checklist para imprimir<br>e ir marcando</h2>
      <p class="lead">Marque conforme fizer. O que sobrar sem marcar é exatamente o que está
      segurando o seu perfil.</p></div>`, true),
    ...checklistFinal.flatMap((g) => [
      bloco(`<div class="b grupo-cab"><h3>${esc(g.grupo)}</h3><span>${esc(g.quando)}</span></div>`, true),
      ...g.itens.map((i) =>
        bloco(`<ul class="check"><li><span class="cx"></span><span>${esc(i)}</span></li></ul>`)),
    ]),
  ],
})

/* ---------- fontes ---------- */
secoes.push({
  tipo: 'fluxo', esq: 'Para consultar depois', dir: 'Fontes', ancora: 'fontes',
  blocos: [
    bloco(`<div class="b secao-titulo"><h2>Onde conferir</h2>
      <p class="lead">Guia sem fonte é opinião com cara de manual. Estas são as páginas
      consultadas em agosto de 2026. Prazos, limites e nomes de botão mudam: se a tela que você
      encontrar for diferente da descrita aqui, confie na tela e volte a estes endereços.</p></div>`, true),
    ...fontes.map((f) =>
      bloco(`<div class="fonte-item"><div class="o">${esc(f.o)}</div>
        <div class="onde">${esc(f.onde)}</div><div class="url">${esc(f.url)}</div></div>`)),
  ],
})

/* ---------- contracapa ---------- */
secoes.push({
  tipo: 'inteira', folio: false, html: `
  <div class="util">
    <div class="marca"><i></i> Calazans Lumina</div>
    <h2>Você chegou ao fim.<br>Agora é rotina.</h2>
    <p>Se você fez os ${totalPassos} passos, seu negócio está no Google com endereço, horário,
    foto, serviço e um jeito de o cliente falar com você. O que separa um perfil que traz cliente
    de um perfil parado são quinze minutos por semana — uma publicação, as avaliações
    respondidas, e a informação sempre certa.</p>
    <p>Não existe truque. Existe continuar fazendo depois que o entusiasmo passa, que é
    exatamente onde a maior parte dos seus concorrentes vai parar.</p>
    <div class="assina">
      <div><div class="nome">Calazans Lumina</div>
        <div class="lin">Marketing digital e sites que aparecem no Google</div></div>
      <div style="text-align:right"><div class="lin">${SITE}</div>
        <div class="lin">Guia gratuito · ${esc(EDICAO)}</div></div>
    </div>
  </div>`,
})

/* ============================================== medicao e paginacao ====== */

const tmp = mkdtempSync(join(tmpdir(), 'guia-gmn-'))

/** Passagem 1: mede a altura real de cada bloco dentro da largura da folha. */
function medir(secs: Secao[]): Map<string, number> {
  const partesHtml: string[] = []
  secs.forEach((s, si) => {
    if (s.tipo !== 'fluxo') return
    partesHtml.push(`<div class="regua-secao" style="width:${LARGURA}mm">${s.blocos
      .map((b, bi) => `<div data-b="${si}:${bi}">${b.html}</div>`)
      .join('')}</div>`)
  })
  const doc = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<style>${css}
body{background:#fff;}
.regua-secao{margin:0 auto 40mm;}
.regua-secao > div > .b:first-child{padding-top:6mm;}
#sonda{height:100mm;}
</style></head><body>
<div id="sonda"></div>
${partesHtml.join('\n')}
<script>
window.addEventListener('load', function () {
  var r = { mm: document.getElementById('sonda').getBoundingClientRect().height / 100, b: {} };
  document.querySelectorAll('[data-b]').forEach(function (el) {
    r.b[el.getAttribute('data-b')] = el.getBoundingClientRect().height;
  });
  var d = document.createElement('div');
  d.id = 'relatorio';
  d.textContent = JSON.stringify(r);
  document.body.appendChild(d);
});
</script></body></html>`
  const arq = join(tmp, 'medir.html')
  writeFileSync(arq, doc)
  const dom = execFileSync(CHROME, [
    '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
    `--user-data-dir=${join(tmp, 'perfil-medir')}`, '--virtual-time-budget=8000',
    '--dump-dom', `file://${arq}`,
  ], { encoding: 'utf8', maxBuffer: 128 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] })
  const bruto = /<div id="relatorio">([\s\S]*?)<\/div>/.exec(dom)?.[1]
  if (!bruto) throw new Error('a passagem de medição não devolveu relatório')
  const dados = JSON.parse(bruto.replace(/&quot;/g, '"').replace(/&amp;/g, '&'))
  PX_POR_MM = dados.mm
  return new Map(Object.entries(dados.b as Record<string, number>))
}

let PX_POR_MM = 3.7795275

type Pagina = { html: string; folio: boolean }

/** Passagem 2: distribui os blocos medidos em folhas de altura conhecida. */
function paginar(secs: Secao[], alturas: Map<string, number>) {
  const paginas: Pagina[] = []
  const ondeComeca = new Map<string, number>()
  const limite = ALTURA_FLUXO * PX_POR_MM

  const marca = (ancora: string | undefined) => {
    if (ancora && !ondeComeca.has(ancora)) ondeComeca.set(ancora, paginas.length + 1)
  }

  for (let si = 0; si < secs.length; si++) {
    const s = secs[si]
    if (s.tipo === 'inteira') {
      marca(s.ancora)
      paginas.push({ html: s.html, folio: s.folio })
      continue
    }

    /* Agrupa: um bloco marcado `junto` nao se separa do proximo. E o que
       impede rotulo orfao no pe da folha e cabecalho de tabela sozinho. */
    type Grupo = { blocos: number[]; altura: number; flutua?: boolean }
    const grupos: Grupo[] = []
    for (let i = 0; i < s.blocos.length; i++) {
      const h = alturas.get(`${si}:${i}`) ?? 0
      const ultimo = grupos[grupos.length - 1]
      if (ultimo && s.blocos[ultimo.blocos[ultimo.blocos.length - 1]].junto) {
        ultimo.blocos.push(i)
        ultimo.altura += h
      } else {
        grupos.push({ blocos: [i], altura: h, flutua: s.blocos[i].flutua })
      }
    }

    /* Um grupo indivisivel maior que a mancha nao tem como caber: falhar aqui,
       nomeando a secao, e melhor do que deixar o texto ser cortado no PDF. */
    for (const g of grupos) {
      if (g.altura > limite) {
        const trecho = s.blocos[g.blocos[0]].html.replace(/<[^>]+>/g, ' ').trim().slice(0, 70)
        throw new Error(
          `bloco indivisível de ${(g.altura / PX_POR_MM).toFixed(0)}mm na seção ` +
          `"${s.esq} / ${s.dir}" — a mancha tem ${ALTURA_FLUXO}mm. Divida o conteúdo. ` +
          `Começa em: "${trecho}…"`)
      }
    }

    /* Enche folha por folha, com figuras flutuantes.
       Uma figura que nao cabe no resto da folha nao forca a quebra: ela vai
       para a fila e entra no alto da folha seguinte, enquanto o texto continua
       preenchendo a atual. E o comportamento de qualquer livro ilustrado, e o
       que evita meia pagina em branco antes de cada desenho. */
    const folhas: Grupo[][] = [[]]
    let altura = 0
    let fila: Grupo[] = []
    const abreFolha = () => {
      folhas.push([])
      altura = 0
      for (const p of fila) {
        folhas[folhas.length - 1].push(p)
        altura += p.altura
      }
      fila = []
    }
    for (const g of grupos) {
      const cabe = altura + g.altura <= limite
      if (!cabe && folhas[folhas.length - 1].length) {
        if (g.flutua && fila.length === 0) { fila.push(g); continue }
        abreFolha()
      }
      folhas[folhas.length - 1].push(g)
      altura += g.altura
    }
    if (fila.length) abreFolha()

    /* Equilibra as duas ultimas folhas.
       Sem isto, um passo que termina com pouco espaco sobrando joga dica,
       atencao e fecho sozinhos para a folha seguinte, que fica dois tercos
       vazia — e nada denuncia mais uma diagramacao automatica do que isso.
       Aqui os grupos migram de volta enquanto o desnivel entre as duas folhas
       diminuir, o que faz a divisao parar sozinha no ponto mais parelho
       possivel, sem nunca estourar nenhuma das duas. */
    const soma = (f: Grupo[]) => f.reduce((t, g) => t + g.altura, 0)
    if (folhas.length > 1) {
      const ultima = folhas[folhas.length - 1]
      const penultima = folhas[folhas.length - 2]
      while (penultima.length > 1) {
        const move = penultima[penultima.length - 1]
        if (soma(ultima) + move.altura > limite) break
        const desnivelAgora = Math.abs(soma(penultima) - soma(ultima))
        const desnivelDepois = Math.abs(
          soma(penultima) - move.altura - (soma(ultima) + move.altura))
        if (desnivelDepois >= desnivelAgora) break
        penultima.pop()
        ultima.unshift(move)
      }
    }

    if (process.env.DEBUG_PAG) {
      const total = grupos.reduce((t, g) => t + g.altura, 0)
      console.error(`secao ${si} "${s.esq} / ${s.dir}" total=${(total / PX_POR_MM).toFixed(0)}mm ` +
        `limite=${ALTURA_FLUXO}mm folhas=${folhas.map((f) => (soma(f) / PX_POR_MM).toFixed(0) + 'mm').join(' ')}`)
    }
    marca(s.ancora)
    /* O cabecalho da direita segue a regra classica de livro: se um passo
       comeca nesta folha, e o nome dele que aparece; se a folha e continuacao
       do passo anterior, o nome vem com "continuacao". */
    let corrente = s.dir
    folhas.forEach((f, fi) => {
      const indices = f.flatMap((g) => g.blocos)
      const comeca = indices.map((i) => s.blocos[i].marcador).find(Boolean)
      const direita = comeca
        || (fi === 0 ? s.dir : corrente ? `${corrente} · continuação` : s.dir)
      if (comeca) corrente = comeca
      for (const i of indices) marca(s.blocos[i].ancora)
      // marca() usa paginas.length + 1, entao roda antes do push desta folha
      paginas.push({
        html: `<div class="util">
          <div class="corrido"><span class="esq">${esc(s.esq)}</span><span>${esc(direita)}</span></div>
          ${indices.map((i) => s.blocos[i].html).join('\n')}
        </div>`,
        folio: true,
      })
    })
  }

  return { paginas, ondeComeca }
}

/* ------------------------------------------------------------- render ---- */

/* As folhas inteiras trazem a propria classe no wrapper — capa, abre, fim. */
function classeDaSecao(s: Secao) {
  if (s.tipo !== 'inteira') return ''
  if (s.html.includes('class="tipo"')) return ' capa'
  if (s.html.includes('class="numerao"')) return ' abre'
  return ' fim'
}

/* Reconstroi marcando a classe correta de cada folha inteira. */
function montarComClasses(secs: Secao[], paginas: Pagina[]) {
  const classes: string[] = []
  let idx = 0
  secs.forEach((s) => {
    if (s.tipo === 'inteira') { classes[idx] = classeDaSecao(s); idx++; return }
    while (idx < paginas.length && !classes[idx] && paginas[idx].folio) { classes[idx] = ''; idx++ }
  })
  return paginas.map((p, i) => {
    const rodape = p.folio
      ? `<div class="folio"><span class="marca">Google Meu Negócio do Zero · ${SITE}</span><span class="n">${i + 1}</span></div>`
      : ''
    return `<section class="folha${classes[i] || ''}">${p.html}${rodape}</section>`
  })
}

const flags = [
  '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
  '--font-render-hinting=none', '--force-color-profile=srgb',
  `--user-data-dir=${join(tmp, 'perfil')}`, '--virtual-time-budget=8000',
]

const documento = (folhas: string[]) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Como criar seu Google Meu Negócio do zero — guia passo a passo | Calazans Lumina</title>
<meta name="author" content="Calazans Lumina">
<meta name="description" content="Guia passo a passo para criar, verificar e otimizar o Perfil da Empresa no Google, com as regras conferidas na documentação oficial em agosto de 2026.">
<style>${css}</style></head><body>${folhas.join('\n')}</body></html>`

/* ---- passagem 1: mede e pagina com o sumario provisorio ---- */
let alturas = medir(secoes)
let { paginas, ondeComeca } = paginar(secoes, alturas)

/* ---- passagem 2: reescreve o sumario com os numeros reais e repagina ---- */
;(secoes[iSumario] as Extract<Secao, { tipo: 'fluxo' }>).blocos =
  sumarioBlocos((a) => String(ondeComeca.get(a) ?? 0))
alturas = medir(secoes)
;({ paginas, ondeComeca } = paginar(secoes, alturas))

const folhas = montarComClasses(secoes, paginas)
const soPagina = process.env.PAGINA ? Number(process.env.PAGINA) : 0
const html = documento(soPagina ? [folhas[soPagina - 1]] : folhas)

const arqHtml = join(tmp, 'guia.html')
writeFileSync(arqHtml, html)

/* Rede de seguranca. O paginador ja garante que nada estoura, mas ele confia
   nas alturas medidas antes; se um ajuste de CSS mudar a altura real depois da
   medicao, o texto sairia cortado no PDF sem ninguem perceber. Esta passagem
   abre o documento final e mede de novo, folha por folha. */
if (!soPagina) {
  const conferencia = html.replace('</body>', `<script>
window.addEventListener('load', function () {
  var ruins = [];
  document.querySelectorAll('.folha').forEach(function (f, i) {
    var u = f.querySelector('.util');
    if (u && u.scrollHeight - u.clientHeight > 2) ruins.push((i + 1) + ':+' + (u.scrollHeight - u.clientHeight) + 'px');
  });
  var d = document.createElement('div');
  d.id = 'conferencia';
  d.textContent = ruins.length ? 'TRANSBORDO ' + ruins.join(' ') : 'OK';
  document.body.appendChild(d);
});
</script></body>`)
  const arqConf = join(tmp, 'conferencia.html')
  writeFileSync(arqConf, conferencia)
  const dom = execFileSync(CHROME, [...flags, '--dump-dom', `file://${arqConf}`], {
    encoding: 'utf8', maxBuffer: 128 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'],
  })
  const veredito = /<div id="conferencia">([^<]*)<\/div>/.exec(dom)?.[1] || '(sem veredito)'
  console.log('Conferência de transbordo:', veredito)
  if (veredito.startsWith('TRANSBORDO')) {
    console.error('\nTexto passou da mancha nas folhas acima. Corrija antes de publicar.')
    process.exit(1)
  }
}

console.log(`Folhas: ${paginas.length}  ·  corpo 12,4pt  ·  ${LARGURA}mm de coluna`)

if (process.env.PNG) {
  const png = resolve(RAIZ, process.env.PNG)
  execFileSync(CHROME, [...flags, '--hide-scrollbars', '--window-size=794,1210',
    `--screenshot=${png}`, `file://${arqHtml}`], { stdio: 'ignore' })
  console.log('PNG:', png)
} else {
  execFileSync(CHROME, [...flags, '--no-pdf-header-footer', `--print-to-pdf=${SAIDA}`,
    `file://${arqHtml}`], { stdio: 'ignore' })
  console.log('PDF:', SAIDA)
}
