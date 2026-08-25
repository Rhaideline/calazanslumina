/**
 * Gera o PDF do guia "Como criar o Google Meu Negocio do zero".
 *
 *   node gerar-pdf-google-meu-negocio.ts
 *   PAGINA=7 node gerar-pdf-google-meu-negocio.ts   (so a pagina 7, para conferir)
 *
 * O conteudo NAO mora aqui — mora em data/guia-google-meu-negocio.ts, o mesmo
 * arquivo que a pagina do site le. Este script so desenha.
 *
 * POR QUE PAGINA FIXA E NAO FLUXO
 * Deixar o Chromium quebrar as paginas sozinho da um PDF que parece impressao
 * de site: titulo orfao no pe da folha, caixa de dica cortada no meio. Aqui
 * cada folha e um retangulo de 210x297mm montado a mao, entao o passo 7 comeca
 * e termina na mesma folha, sempre. O preco disso e que conteudo demais
 * transborda em silencio — por isso existe a checagem de transbordo no fim,
 * que roda o Chromium, mede cada folha e reclama antes de gerar o arquivo.
 */

import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { partes, preparacao, erros, faq, checklistFinal, totalPassos } from './data/guia-google-meu-negocio.ts'

const RAIZ = dirname(fileURLToPath(import.meta.url))
const SAIDA = join(RAIZ, 'public', 'guia-google-meu-negocio-passo-a-passo.pdf')
const SITE = 'calazanslumina.com.br'
const TITULO_CURTO = 'Google Meu Negócio do Zero'

/* Chromium do Playwright, ja instalado no ambiente. */
const CHROME = process.env.CHROME_BIN || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const fonte = (arq: string) =>
  readFileSync(join(RAIZ, 'templates-assets', 'fontes', arq)).toString('base64')

/* ---------------------------------------------------------------- icones --
   SVG inline: o PDF precisa abrir em qualquer lugar sem baixar nada.        */

const ico = {
  seta: `<svg viewBox="0 0 24 24" class="i"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  dica: `<svg viewBox="0 0 24 24" class="i"><path d="M9 21h6M10 18h4M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.1 1 1.6h5c.1-.5.4-1.1 1-1.6A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  alerta: `<svg viewBox="0 0 24 24" class="i"><path d="M12 3.5 1.8 20.5h20.4L12 3.5z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M12 10v4.2M12 17.3v.1" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>`,
  copiar: `<svg viewBox="0 0 24 24" class="i"><rect x="8.5" y="3.5" width="12" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M15.5 20.5h-11a2 2 0 0 1-2-2v-11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" class="i"><path d="M4 12.5l5.5 5.5L20 6.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  relogio: `<svg viewBox="0 0 24 24" class="i"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 7v5.3l3.4 2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  alvo: `<svg viewBox="0 0 24 24" class="i"><circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/></svg>`,
  x: `<svg viewBox="0 0 24 24" class="i"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>`,
}

/* ------------------------------------------------------------------- css -- */

const css = `
@font-face{font-family:'DM Sans';src:url(data:font/woff2;base64,${fonte('dmsans-var.woff2')}) format('woff2');font-weight:100 1000;font-style:normal;}
@font-face{font-family:'DM Serif Display';src:url(data:font/woff2;base64,${fonte('dmserif-400.woff2')}) format('woff2');font-weight:400;font-style:normal;}

:root{
  --tinta:#111111;
  --vermelho:#C8102E;
  --vermelho-claro:#E23148;
  --bg:#F5F5F5;
  --cinza:#57575E;
  --linha:#E4E4E7;
  --tinta-suave:#F7EDEF;
}
*{box-sizing:border-box;margin:0;padding:0;}
html,body{background:#8a8a8a;}
body{font-family:'DM Sans',system-ui,sans-serif;color:var(--tinta);
  -webkit-font-smoothing:antialiased;font-size:10.4pt;line-height:1.55;}

.folha{width:210mm;height:297mm;background:#fff;position:relative;overflow:hidden;
  page-break-after:always;break-after:page;margin:0 auto;}
.folha:last-of-type{page-break-after:auto;break-after:auto;}
.miolo{position:absolute;inset:15mm 16mm 20mm 16mm;display:flex;flex-direction:column;}

h1,h2,h3,.serif{font-family:'DM Serif Display',Georgia,serif;font-weight:400;letter-spacing:-.01em;}

/* ---- topo e rodape das folhas de conteudo ---- */
.topo{display:flex;justify-content:space-between;align-items:baseline;
  border-bottom:1px solid var(--linha);padding-bottom:3.2mm;margin-bottom:6.5mm;flex:0 0 auto;}
.topo .parte{font-size:7.4pt;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--vermelho);}
.topo .secao{font-size:7.4pt;letter-spacing:.14em;text-transform:uppercase;color:#9A9AA2;}
.rodape{position:absolute;left:16mm;right:16mm;bottom:8mm;display:flex;justify-content:space-between;
  align-items:center;font-size:7.2pt;color:#9A9AA2;letter-spacing:.05em;border-top:1px solid var(--linha);padding-top:2.6mm;}
.rodape .marca{display:flex;align-items:center;gap:2mm;}
.rodape .quad{width:2.6mm;height:2.6mm;background:var(--vermelho);display:inline-block;}
.rodape .num{font-family:'DM Serif Display',serif;font-size:10pt;color:var(--tinta);}

.i{width:1em;height:1em;display:inline-block;vertical-align:-.13em;}

/* ---- capa ---- */
.capa{background:var(--tinta);color:#fff;}
.capa .miolo{inset:16mm 16mm 14mm 16mm;}
.capa .marca{display:flex;align-items:center;gap:2.6mm;font-size:8pt;letter-spacing:.24em;
  text-transform:uppercase;color:rgba(255,255,255,.72);}
.capa .marca .quad{width:3.4mm;height:3.4mm;background:var(--vermelho);}
.capa .selo{margin-top:auto;font-size:8.2pt;letter-spacing:.22em;text-transform:uppercase;color:var(--vermelho-claro);font-weight:700;}
.capa h1{font-size:40pt;line-height:1.03;margin:5mm 0 0;max-width:150mm;}
.capa h1 em{font-style:normal;color:var(--vermelho-claro);}
.capa .regua{width:38mm;height:1.4mm;background:var(--vermelho);margin:7mm 0 6mm;}
.capa .sub{font-size:12pt;line-height:1.55;color:rgba(255,255,255,.78);max-width:132mm;}
.capa .fichas{display:flex;gap:3mm;margin-top:9mm;}
.capa .ficha{flex:1;border:1px solid rgba(255,255,255,.18);border-radius:3mm;padding:5mm 4mm;background:rgba(255,255,255,.04);}
.capa .ficha b{display:block;font-family:'DM Serif Display',serif;font-size:19pt;color:#fff;line-height:1;}
.capa .ficha span{display:block;margin-top:2.2mm;font-size:7.6pt;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.55);}
.capa .pe{margin-top:9mm;display:flex;justify-content:space-between;align-items:flex-end;
  border-top:1px solid rgba(255,255,255,.16);padding-top:5mm;font-size:8.6pt;color:rgba(255,255,255,.6);}
.capa .pe strong{color:#fff;font-weight:500;}

/* ---- abertura de parte ---- */
.abre{background:var(--bg);}
.abre .numerao{font-family:'DM Serif Display',serif;font-size:128pt;line-height:.78;color:var(--bg);
  -webkit-text-stroke:1.2mm var(--vermelho);margin-top:2mm;}
.abre .rot{font-size:8pt;letter-spacing:.24em;text-transform:uppercase;color:var(--vermelho);font-weight:700;margin-bottom:4mm;}
.abre h2{font-size:32pt;line-height:1.06;margin:6mm 0 4mm;max-width:140mm;}
.abre .resumo{font-size:11.4pt;color:var(--cinza);line-height:1.6;max-width:132mm;}
.abre ol{list-style:none;margin-top:11mm;border-top:1px solid #DCDCE0;padding-top:6mm;}
.abre ol li{display:flex;gap:4mm;align-items:baseline;padding:2.6mm 0;border-bottom:1px solid #E7E7EA;font-size:10.2pt;}
.abre ol li b{font-family:'DM Serif Display',serif;color:var(--vermelho);font-size:12pt;width:9mm;flex:0 0 9mm;}
.abre ol li .nome{flex:1;color:var(--tinta);}
.abre ol li .tempo{color:var(--cinza);margin-left:auto;padding-left:5mm;text-align:right;font-size:8.2pt;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;}

/* ---- passo ---- */
.passo .cabeca{display:flex;gap:5mm;align-items:flex-start;flex:0 0 auto;}
.passo .bolha{flex:0 0 16mm;height:16mm;background:var(--vermelho);color:#fff;border-radius:3mm;
  display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1;}
.passo .bolha small{font-size:6.4pt;letter-spacing:.14em;text-transform:uppercase;opacity:.85;margin-bottom:.8mm;}
.passo .bolha b{font-family:'DM Serif Display',serif;font-size:21pt;font-weight:400;}
.passo h2{font-size:22pt;line-height:1.12;}
.passo .tempo{display:inline-flex;align-items:center;gap:1.6mm;margin-top:2.4mm;font-size:8pt;
  color:var(--cinza);letter-spacing:.06em;text-transform:uppercase;}
.passo .objetivo{margin-top:5mm;background:var(--tinta);color:#fff;border-radius:2.5mm;padding:3.4mm 4.6mm;
  display:flex;gap:3.4mm;align-items:flex-start;flex:0 0 auto;}
.passo .objetivo .i{color:var(--vermelho-claro);flex:0 0 auto;font-size:12pt;margin-top:.4mm;}
.passo .objetivo p{font-size:10pt;line-height:1.5;}
.passo .objetivo b{display:block;font-size:7.2pt;letter-spacing:.18em;text-transform:uppercase;
  color:rgba(255,255,255,.5);font-weight:700;margin-bottom:1.4mm;}

.bloco{margin-top:5.4mm;}
.rotulo{font-size:7.6pt;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--vermelho);
  display:flex;align-items:center;gap:2mm;margin-bottom:2.6mm;}
.rotulo::after{content:"";flex:1;height:1px;background:var(--linha);}

.cliques{background:var(--bg);border-left:1.2mm solid var(--vermelho);border-radius:0 2.5mm 2.5mm 0;padding:3.8mm 4.6mm;}
.cliques li{list-style:none;display:flex;gap:3mm;align-items:flex-start;font-size:9.8pt;line-height:1.48;padding:1.2mm 0;}
.cliques li + li{border-top:1px solid #E7E7E9;}
.cliques li .i{color:var(--vermelho);flex:0 0 auto;font-size:9pt;margin-top:.9mm;}
.cliques li b{font-weight:700;}

.texto p{font-size:10.3pt;line-height:1.62;color:#26262B;}

.nota{margin-top:4.2mm;border-radius:2.5mm;padding:3.4mm 4.6mm;display:flex;gap:3.4mm;align-items:flex-start;}
.nota .i{flex:0 0 auto;font-size:12.5pt;margin-top:.3mm;}
.nota b{display:block;font-size:7.2pt;letter-spacing:.18em;text-transform:uppercase;font-weight:700;margin-bottom:1.4mm;}
.nota p{font-size:9.6pt;line-height:1.5;}
.nota.dica{background:var(--tinta-suave);color:#3A1F25;}
.nota.dica .i,.nota.dica b{color:var(--vermelho);}
.nota.alerta{background:var(--tinta);color:rgba(255,255,255,.86);}
.nota.alerta .i,.nota.alerta b{color:var(--vermelho-claro);}

.copiar{margin-top:4.2mm;border:1px dashed #C9C9CF;border-radius:2.5mm;background:#FCFCFD;padding:3.5mm 4.6mm;}
.copiar .top{display:flex;align-items:center;gap:2mm;font-size:7.2pt;letter-spacing:.16em;
  text-transform:uppercase;font-weight:700;color:var(--cinza);margin-bottom:2.6mm;}
.copiar .top .i{color:var(--vermelho);font-size:9.5pt;}
.passo .concluir{margin-top:auto;display:flex;align-items:center;gap:3mm;border-top:1px dashed #D5D5DA;
  padding-top:4mm;font-size:8.6pt;color:var(--cinza);}
.passo .concluir .caixa{flex:0 0 4.4mm;height:4.4mm;border:1.5px solid var(--tinta);border-radius:.8mm;}
.passo .concluir b{color:var(--tinta);font-weight:700;}
.passo .concluir .prox{margin-left:auto;text-align:right;max-width:105mm;}
.passo .concluir .prox i{font-style:normal;color:var(--vermelho);font-weight:700;}

.copiar pre{white-space:pre-wrap;font-family:'DM Sans',sans-serif;font-size:9.1pt;line-height:1.52;color:#26262B;}

/* ---- listas genericas ---- */
.cartoes{display:flex;flex-direction:column;gap:3mm;}
.cartao{border:1px solid var(--linha);border-radius:2.5mm;padding:3.6mm 4.6mm;}
.cartao h3{font-size:12.6pt;line-height:1.25;margin-bottom:1.8mm;}
.cartao p{font-size:9.5pt;line-height:1.5;color:var(--cinza);}
.cartao p + p{margin-top:1.6mm;}
.cartao .marcador{font-size:7.2pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--vermelho);}

.erro{display:flex;gap:4mm;border:1px solid var(--linha);border-radius:2.5mm;padding:4mm 4.6mm;}
.erro .sinal{flex:0 0 7.5mm;height:7.5mm;border-radius:50%;background:var(--tinta);color:#fff;
  display:flex;align-items:center;justify-content:center;font-size:8.4pt;}
.erro h3{font-size:11.8pt;line-height:1.25;margin-bottom:1.4mm;}
.erro .pq{font-size:9.2pt;color:var(--cinza);line-height:1.48;}
.erro .sol{margin-top:1.8mm;font-size:9.2pt;line-height:1.48;display:flex;gap:2.2mm;color:#26262B;}
.erro .sol .i{color:var(--vermelho);flex:0 0 auto;font-size:9.5pt;margin-top:.7mm;}
.erro .sol b{font-weight:700;}

.pergunta + .pergunta{margin-top:4.6mm;padding-top:4.6mm;border-top:1px solid var(--linha);}
.pergunta h3{font-size:12.2pt;line-height:1.28;margin-bottom:1.8mm;}
.pergunta p{font-size:9.7pt;line-height:1.55;color:var(--cinza);}

.grupo-check + .grupo-check{margin-top:6.5mm;}
.grupo-check .cab{display:flex;align-items:center;gap:2.6mm;margin-bottom:3.4mm;}
.grupo-check .cab h3{font-size:14pt;}
.grupo-check .cab .tag{font-size:7pt;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
  color:#fff;background:var(--vermelho);border-radius:1mm;padding:.9mm 2.2mm;}
.grupo-check li{list-style:none;display:flex;gap:3.4mm;align-items:flex-start;font-size:10pt;line-height:1.45;padding:2.4mm 0;}
.grupo-check li + li{border-top:1px solid #EEEEF1;}
.grupo-check .caixa{flex:0 0 4.4mm;height:4.4mm;border:1.5px solid var(--tinta);border-radius:.8mm;margin-top:.5mm;}

.intro h2{font-size:28pt;line-height:1.1;margin-bottom:5mm;}
.intro .chamada{font-size:11.6pt;line-height:1.6;color:var(--cinza);}
.intro .chamada strong{color:var(--tinta);font-weight:700;}

.sumario .linha{display:flex;align-items:baseline;gap:3mm;padding:1.05mm 0;border-bottom:1px solid #EEEEF1;font-size:9.4pt;}
.sumario .linha .p{font-family:'DM Serif Display',serif;color:var(--vermelho);font-size:11.5pt;width:8mm;flex:0 0 8mm;}
.sumario .linha .pontos{flex:1;border-bottom:1px dotted #C9C9CF;transform:translateY(-1mm);}
.sumario .linha .pg{font-family:'DM Serif Display',serif;font-size:11pt;width:8mm;text-align:right;flex:0 0 8mm;}
.sumario .titulo-parte{margin-top:2.8mm;font-size:8pt;font-weight:700;letter-spacing:.18em;
  text-transform:uppercase;color:var(--vermelho);}
.sumario .titulo-parte:first-child{margin-top:0;}

/* ---- folha final ---- */
.fim{background:var(--tinta);color:#fff;}
.fim h2{font-size:30pt;line-height:1.1;margin-bottom:5mm;}
.fim p{font-size:11pt;line-height:1.6;color:rgba(255,255,255,.75);max-width:140mm;}
.fim .caixas{display:flex;gap:3.4mm;margin-top:8mm;}
.fim .cx{flex:1;border:1px solid rgba(255,255,255,.18);border-radius:3mm;padding:5mm;background:rgba(255,255,255,.04);}
.fim .cx b{display:block;font-family:'DM Serif Display',serif;font-size:14pt;margin-bottom:2mm;}
.fim .cx span{font-size:9pt;color:rgba(255,255,255,.66);line-height:1.5;display:block;}
.fim .assina{margin-top:auto;border-top:1px solid rgba(255,255,255,.16);padding-top:6mm;
  display:flex;justify-content:space-between;align-items:flex-end;}
.fim .assina .nome{font-family:'DM Serif Display',serif;font-size:16pt;}
.fim .assina .site{font-size:9pt;color:rgba(255,255,255,.6);}

#relatorio{display:none;}
@page{size:A4;margin:0;}
@media print{body{background:#fff;}.folha{margin:0;}}
`

/* ------------------------------------------------------------ montagem --- */

type Folha = { id: string; render: (n: number) => string }

const folhas: Folha[] = []
const add = (id: string, render: (n: number) => string) => folhas.push({ id, render })

const rodape = (n: number) => `
  <div class="rodape">
    <span class="marca"><i class="quad"></i> ${esc(TITULO_CURTO)} · ${SITE}</span>
    <span class="num">${n}</span>
  </div>`

const conteudo = (o: {
  parte: string
  secao: string
  classe?: string
  corpo: string
  n: number
}) => `
<section class="folha ${o.classe || ''}">
  <div class="miolo">
    <div class="topo"><span class="parte">${esc(o.parte)}</span><span class="secao">${esc(o.secao)}</span></div>
    ${o.corpo}
  </div>
  ${rodape(o.n)}
</section>`

/* ---------- 1. capa ---------- */
add('capa', () => `
<section class="folha capa">
  <div class="miolo">
    <div class="marca"><i class="quad"></i> Calazans Lumina</div>
    <div class="selo">Guia passo a passo · edição 2026</div>
    <h1>Como criar seu <em>Google Meu Negócio</em> do zero</h1>
    <div class="regua"></div>
    <p class="sub">Do cadastro à verificação, com as palavras que aparecem na tela.
      Feito para quem nunca fez, tem medo de clicar errado e vai fazer sozinho.</p>
    <div class="fichas">
      <div class="ficha"><b>${totalPassos}</b><span>passos numerados</span></div>
      <div class="ficha"><b>1h30</b><span>do zero ao ar</span></div>
      <div class="ficha"><b>R$ 0</b><span>é grátis, sempre</span></div>
    </div>
    <div class="pe">
      <span>Sem termo técnico. Sem atalho falso.<br><strong>Só o caminho que funciona.</strong></span>
      <span>${SITE}</span>
    </div>
  </div>
</section>`)

/* ---------- 2. leia primeiro ---------- */
add('leia', (n) => conteudo({
  parte: 'Comece por aqui', secao: 'Leia antes de clicar', n,
  corpo: `
  <div class="intro">
    <h2>Leia estas 10 linhas antes<br>de começar</h2>
    <p class="chamada">Este guia foi escrito para uma pessoa específica: a que precisa colocar o
    próprio negócio no Google, <strong>não tem quem faça por ela</strong> e trava na primeira tela
    porque todo tutorial diz "acesse as configurações" sem dizer onde fica.</p>
  </div>
  <div class="bloco">
    <div class="rotulo">Como este guia funciona</div>
    <div class="cartoes">
      <div class="cartao">
        <span class="marcador">1 · Uma folha por passo</span>
        <h3>Faça um passo, vire a página</h3>
        <p>São ${totalPassos} passos em 4 partes. Cada passo cabe numa folha só: o que você vai
        conseguir, onde clicar (com as palavras da tela), por que aquilo importa, e o erro
        que costuma acontecer ali.</p>
      </div>
      <div class="cartao">
        <span class="marcador">2 · Não pule a Parte 1</span>
        <h3>A verificação é o único passo com prazo</h3>
        <p>Perfil não verificado quase não aparece nas buscas. Se você fizer só a Parte 1 hoje
        e o resto na semana que vem, tudo bem — mas faça a Parte 1 inteira de uma vez.</p>
      </div>
      <div class="cartao">
        <span class="marcador">3 · Textos prontos</span>
        <h3>Onde tiver caixa pontilhada, é para copiar</h3>
        <p>Descrição do negócio, mensagem para pedir avaliação, resposta para nota 1 estrela.
        Copie, troque o que está em MAIÚSCULA pelos seus dados e use.</p>
      </div>
      <div class="cartao">
        <span class="marcador">4 · No fim, um checklist</span>
        <h3>Imprima as duas últimas folhas</h3>
        <p>Elas têm a lista completa com quadradinho para marcar. É por ali que você confere
        se ficou faltando alguma coisa.</p>
      </div>
    </div>
  </div>
  <div class="nota alerta" style="margin-top:6mm">
    ${ico.alerta}
    <div><b>Um aviso que vale dinheiro</b>
    <p>Criar, verificar e manter o perfil é <strong>gratuito, para sempre</strong>. O Google nunca
    liga cobrando taxa de ativação. Logo depois que você publicar o telefone, é comum receber
    ligação de gente se passando pelo Google e pedindo pagamento ou código. É golpe: não pague
    e não passe código a ninguém por telefone.</p></div>
  </div>`,
}))

/* ---------- 3. sumario (numeros calculados depois) ---------- */
add('sumario', (n) => {
  const linha = (t: string, pg: number) =>
    `<div class="linha"><span class="p">${pg <= 0 ? '' : ''}</span><span>${esc(t)}</span><span class="pontos"></span><span class="pg">${pg}</span></div>`
  let html = ''
  html += `<div class="titulo-parte">Antes de tudo</div>`
  html += linha('O que ter em mãos antes de começar', pagina('prep'))
  for (const p of partes) {
    html += `<div class="titulo-parte">Parte ${p.numero} · ${esc(p.titulo)}</div>`
    for (const passo of p.passos) html += linha(`${passo.n}. ${passo.titulo}`, pagina(`passo-${passo.n}`))
  }
  html += `<div class="titulo-parte">Para consultar depois</div>`
  html += linha('Os 10 erros que derrubam um perfil', pagina('erros-1'))
  html += linha('Perguntas que todo mundo faz', pagina('faq-1'))
  html += linha('Checklist para imprimir e marcar', pagina('check-1'))
  return conteudo({
    parte: 'Comece por aqui', secao: 'Sumário', n,
    corpo: `<div class="intro"><h2>O que tem aqui dentro</h2></div>
      <div class="bloco sumario">${html}</div>`,
  })
})

/* ---------- 4. preparacao ---------- */
add('prep', (n) => conteudo({
  parte: 'Antes de tudo', secao: 'Preparação', n,
  corpo: `
  <div class="intro">
    <h2>O que ter em mãos<br>antes de começar</h2>
    <p class="chamada">Separe estas seis coisas agora. Quem começa sem elas trava no meio do
    cadastro, sai para procurar, e volta com o formulário expirado.</p>
  </div>
  <div class="bloco cartoes">
    ${preparacao.map((p, i) => `
      <div class="cartao">
        <span class="marcador">Item ${i + 1}</span>
        <h3>${esc(p.item)}</h3>
        <p>${esc(p.porque)}</p>
      </div>`).join('')}
  </div>`,
}))

/* ---------- partes, aberturas e passos ---------- */
const todosPassos = partes.flatMap((p) => p.passos)

for (const parte of partes) {
  add(`abre-${parte.numero}`, (n) => `
    <section class="folha abre">
      <div class="miolo">
        <div class="rot">Parte ${parte.numero} de ${partes.length}</div>
        <div class="numerao">${parte.numero}</div>
        <h2>${esc(parte.titulo)}</h2>
        <p class="resumo">${esc(parte.resumo)}</p>
        <ol>
          ${parte.passos.map((p) => `
            <li><b>${p.n}</b><span class="nome">${esc(p.titulo)}</span>
            <span class="tempo">${esc(p.tempo)}</span></li>`).join('')}
        </ol>
      </div>
      ${rodape(n)}
    </section>`)

  for (const passo of parte.passos) {
    add(`passo-${passo.n}`, (n) => conteudo({
      parte: `Parte ${parte.numero} · ${parte.titulo}`,
      secao: `Passo ${passo.n} de ${totalPassos}`,
      classe: 'passo', n,
      corpo: `
      <div class="cabeca">
        <div class="bolha"><small>Passo</small><b>${passo.n}</b></div>
        <div>
          <h2>${esc(passo.titulo)}</h2>
          <span class="tempo">${ico.relogio} ${esc(passo.tempo)}</span>
        </div>
      </div>
      <div class="objetivo">
        ${ico.alvo}
        <p><b>Ao final deste passo</b>${esc(passo.objetivo)}</p>
      </div>
      <div class="bloco">
        <div class="rotulo">Onde clicar</div>
        <ul class="cliques">
          ${passo.ondeClicar.map((c) => `<li>${ico.seta}<span>${esc(c)}</span></li>`).join('')}
        </ul>
      </div>
      <div class="bloco texto">
        <div class="rotulo">Por que isso importa</div>
        <p>${esc(passo.detalhe)}</p>
      </div>
      ${passo.copiar ? `
      <div class="copiar">
        <div class="top">${ico.copiar} ${esc(passo.copiar.titulo)}</div>
        <pre>${esc(passo.copiar.texto)}</pre>
      </div>` : ''}
      ${passo.dica ? `
      <div class="nota dica">${ico.dica}<div><b>Dica</b><p>${esc(passo.dica)}</p></div></div>` : ''}
      ${passo.atencao ? `
      <div class="nota alerta">${ico.alerta}<div><b>Atenção</b><p>${esc(passo.atencao)}</p></div></div>` : ''}
      <div class="concluir">
        <span class="caixa"></span><b>Passo ${passo.n} feito</b>
        <span class="prox">${(() => {
          const prox = todosPassos[todosPassos.findIndex((x) => x.n === passo.n) + 1]
          return prox ? `<i>Próximo:</i> ${esc(prox.titulo)}` : '<i>Este era o último passo.</i> Vá para o checklist no fim do guia.'
        })()}</span>
      </div>
      `,
    }))
  }
}

/* ---------- erros (5 por folha) ---------- */
for (let i = 0; i < erros.length; i += 5) {
  const lote = erros.slice(i, i + 5)
  const parteN = i / 5 + 1
  add(`erros-${parteN}`, (n) => conteudo({
    parte: 'Para consultar depois', secao: `Erros · ${parteN} de ${Math.ceil(erros.length / 5)}`, n,
    corpo: `
    ${parteN === 1 ? `<div class="intro"><h2>Os 10 erros que<br>derrubam um perfil</h2>
      <p class="chamada">Nenhum destes é teoria. São os motivos reais pelos quais um perfil some
      da busca, é suspenso, ou fica no ar sem trazer ninguém.</p></div><div class="bloco"></div>` : ''}
    <div class="cartoes">
      ${lote.map((e, k) => `
        <div class="erro">
          <div class="sinal">${ico.x}</div>
          <div>
            <h3>${i + k + 1}. ${esc(e.erro)}</h3>
            <p class="pq">${esc(e.porque)}</p>
            <p class="sol">${ico.check}<span><b>O que fazer:</b> ${esc(e.solucao)}</span></p>
          </div>
        </div>`).join('')}
    </div>`,
  }))
}

/* ---------- faq (4 por folha) ---------- */
for (let i = 0; i < faq.length; i += 4) {
  const lote = faq.slice(i, i + 4)
  const parteN = i / 4 + 1
  add(`faq-${parteN}`, (n) => conteudo({
    parte: 'Para consultar depois', secao: `Dúvidas · ${parteN} de ${Math.ceil(faq.length / 4)}`, n,
    corpo: `
    ${parteN === 1 ? `<div class="intro"><h2>Perguntas que<br>todo mundo faz</h2></div><div class="bloco"></div>` : ''}
    <div>
      ${lote.map((f) => `
        <div class="pergunta">
          <h3>${esc(f.q)}</h3>
          <p>${esc(f.a)}</p>
        </div>`).join('')}
    </div>`,
  }))
}

/* ---------- checklist ---------- */
add('check-1', (n) => conteudo({
  parte: 'Para consultar depois', secao: 'Checklist · 1 de 2', n,
  corpo: `
  <div class="intro">
    <h2>Checklist para imprimir<br>e ir marcando</h2>
    <p class="chamada">Marque conforme fizer. O que sobrar sem marcar é exatamente o que está
    segurando seu perfil.</p>
  </div>
  <div class="bloco">
    ${[checklistFinal[0]].map((g) => grupoCheck(g)).join('')}
    ${[checklistFinal[1]].map((g) => grupoCheck(g)).join('')}
  </div>`,
}))

add('check-2', (n) => conteudo({
  parte: 'Para consultar depois', secao: 'Checklist · 2 de 2', n,
  corpo: `
  <div class="bloco" style="margin-top:0">
    ${grupoCheck(checklistFinal[2])}
  </div>
  <div class="nota dica" style="margin-top:8mm">
    ${ico.dica}
    <div><b>O segredo é chato de propósito</b>
    <p>Os perfis que ficam nas três primeiras posições do mapa não fazem nada de mágico:
    publicam toda semana, respondem toda avaliação, têm foto recente e informação certa.
    É repetitivo — e é exatamente por isso que a maioria dos concorrentes desiste no segundo
    mês e você fica.</p></div>
  </div>`,
}))

function grupoCheck(g: { grupo: string; itens: string[] }) {
  return `
  <div class="grupo-check">
    <div class="cab"><span class="tag">${esc(g.grupo.split('(')[0].trim())}</span>
      <h3>${esc(g.grupo.includes('(') ? g.grupo.split('(')[1].replace(')', '') : '')}</h3></div>
    <ul>
      ${g.itens.map((i) => `<li><span class="caixa"></span><span>${esc(i)}</span></li>`).join('')}
    </ul>
  </div>`
}

/* ---------- folha final ---------- */
add('fim', () => `
<section class="folha fim">
  <div class="miolo">
    <div class="marca" style="display:flex;align-items:center;gap:2.6mm;font-size:8pt;letter-spacing:.24em;text-transform:uppercase;color:rgba(255,255,255,.72)">
      <i style="width:3.4mm;height:3.4mm;background:var(--vermelho);display:inline-block"></i> Calazans Lumina
    </div>
    <div style="margin-top:auto">
      <h2>Você chegou ao fim.<br>Agora é rotina.</h2>
      <p>Se você fez os ${totalPassos} passos, seu negócio já está no Google com endereço, horário,
      foto, serviço e um jeito do cliente falar com você. O que separa um perfil que traz cliente
      de um perfil parado são 15 minutos por semana — sempre no mesmo dia.</p>
      <div class="caixas">
        <div class="cx"><b>Toda semana</b><span>1 publicação nova e responder as avaliações que chegaram.</span></div>
        <div class="cx"><b>Todo mês</b><span>3 fotos novas, conferir o horário e olhar o Desempenho.</span></div>
        <div class="cx"><b>A cada 3 meses</b><span>Revisar descrição, serviços, preços e feriados que vêm.</span></div>
      </div>
    </div>
    <div class="assina">
      <div>
        <div class="nome">Calazans Lumina</div>
        <div class="site" style="margin-top:1.5mm">Marketing digital e sites que aparecem no Google</div>
      </div>
      <div class="site" style="text-align:right">${SITE}<br>Guia gratuito · edição 2026</div>
    </div>
  </div>
</section>`)

/* -------------------------------------------------------- numeracao ------ */

function pagina(id: string) {
  const i = folhas.findIndex((f) => f.id === id)
  return i < 0 ? 0 : i + 1
}

/* --------------------------------------------------------- render -------- */

const soPagina = process.env.PAGINA ? Number(process.env.PAGINA) : 0
const corpo = folhas
  .map((f, i) => (soPagina && i + 1 !== soPagina ? '' : f.render(i + 1)))
  .join('\n')

/* Mede transbordo: cada .miolo nao pode passar da altura util da folha. */
const medidor = `
<script>
window.addEventListener('load', function () {
  var ruins = [];
  document.querySelectorAll('.folha').forEach(function (f, i) {
    var m = f.querySelector('.miolo');
    if (!m) return;
    var sobra = m.scrollHeight - m.clientHeight;
    if (sobra > 2) ruins.push((i + 1) + ':+' + sobra + 'px');
  });
  var d = document.createElement('div');
  d.id = 'relatorio';
  d.textContent = ruins.length ? 'TRANSBORDO ' + ruins.join(' ') : 'OK';
  document.body.appendChild(d);
});
</script>`

const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Como criar seu Google Meu Negócio do zero — Guia passo a passo | Calazans Lumina</title>
<meta name="author" content="Calazans Lumina">
<meta name="description" content="Guia passo a passo para criar, verificar e otimizar o Perfil da Empresa no Google (Google Meu Negócio), escrito para quem nunca fez.">
<style>${css}</style></head><body>${corpo}${medidor}</body></html>`

const tmp = mkdtempSync(join(tmpdir(), 'guia-gmn-'))
const arqHtml = join(tmp, 'guia.html')
writeFileSync(arqHtml, html)

const flagsBase = [
  '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
  '--font-render-hinting=none', '--force-color-profile=srgb',
  `--user-data-dir=${join(tmp, 'perfil')}`,
]

/* 1) checagem de transbordo */
const dom = execFileSync(CHROME, [...flagsBase, '--virtual-time-budget=6000', '--dump-dom', `file://${arqHtml}`], {
  encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'],
})
const relatorio = /<div id="relatorio">([^<]*)<\/div>/.exec(dom)?.[1] || '(sem relatório)'
console.log(`Folhas: ${folhas.length}  |  Transbordo: ${relatorio}`)
if (relatorio.startsWith('TRANSBORDO') && !process.env.IGNORAR_TRANSBORDO) {
  console.error('\nConteúdo passou da folha nas páginas acima. Corrija antes de publicar o PDF.')
  process.exit(1)
}

/* 2) PDF ou PNG de conferencia */
if (process.env.PNG) {
  const png = resolve(RAIZ, process.env.PNG)
  execFileSync(CHROME, [...flagsBase, '--hide-scrollbars', '--window-size=794,1210',
    '--virtual-time-budget=6000', `--screenshot=${png}`, `file://${arqHtml}`], { stdio: 'ignore' })
  console.log('PNG:', png)
} else {
  execFileSync(CHROME, [...flagsBase, '--virtual-time-budget=6000', '--no-pdf-header-footer',
    `--print-to-pdf=${SAIDA}`, `file://${arqHtml}`], { stdio: 'ignore' })
  console.log('PDF:', SAIDA)
}
