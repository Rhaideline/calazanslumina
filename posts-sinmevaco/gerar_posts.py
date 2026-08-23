"""
Gerador de posts do SINMEVACO - Sindicato dos Medicos do Vale do Aco.
Formato: 1080x1440 (3:4) - tamanho nativo que nao sofre corte nem no feed nem na grade do perfil
Linha editorial: caso real -> pergunta -> "a resposta esta no documento" -> CTA juridico.

Cada slide e um HTML autonomo (renderiza sem foto). Os blocos .photo aceitam
uma imagem opcional em fotos/<nome>.jpg - se o arquivo nao existir, o degrade
de fundo assume e o slide continua fechado.
"""
from pathlib import Path

ROOT = Path(__file__).parent

# ====== MARCA ======
# TROCAR AQUI pelas cores oficiais do sindicato. Os quatro tokens abaixo
# alimentam todos os 31 slides; nada mais precisa ser editado.
# Tokens oficiais, conforme o README do repositorio do sindicato.
CORES = {
    "navy":   "#16231B",  # bg-dark  - fundo escuro da casa
    "navy2":  "#0A2A17",  # bg-deep  - base do degrade
    "navy3":  "#0F6A3D",  # verde da marca - caixas, botoes, faixa "verdade"
    "steel":  "#0F3D22",  # topo do bg-deep - fundo secundario
    "cream":  "#F5F7F3",  # papel
    "cream2": "#E4EAE1",
    "brass":  "#C6A15B",  # dourado da marca - acento, nunca fundo
    "brass2": "#D7BB84",  # tom claro do mesmo dourado, para numerais e kickers
    "ink":    "#16231B",  # texto sobre papel
}

# Logo: coloque o arquivo oficial em logos/logo.png (ou .svg) e ele entra
# automaticamente no rodape de todos os slides. Sem o arquivo, entra o
# lockup provisorio com a inicial.
LOGO_FILE = "logos/logo.png"

# ====== IDENTIDADE (confirmar antes de publicar) ======
HANDLE = "@sinmevaco"
SITE = "sinmevaco.com.br"
FONE = "(31) 99507-4027"
CIDADE = "Coronel Fabriciano &middot; Vale do A&ccedil;o / MG"

# ====== BASE ======
BASE_CSS = """
:root{__TOKENS__}
*{margin:0;padding:0;box-sizing:border-box;-webkit-font-smoothing:antialiased}
html,body{width:1080px;height:1440px;overflow:hidden;background:#000}
body{font-family:'Poppins',system-ui,sans-serif;color:var(--cream)}
.canvas{width:1080px;height:1440px;position:relative;overflow:hidden;display:flex;flex-direction:column}

/* ---- fundos ---- */
.bg-navy{background:
  radial-gradient(120% 80% at 78% 12%, rgba(46,112,72,.38) 0%, rgba(13,20,15,0) 58%),
  radial-gradient(90% 60% at 12% 96%, rgba(198,172,115,.16) 0%, rgba(13,20,15,0) 60%),
  linear-gradient(168deg,var(--navy) 0%,var(--navy-2) 100%)}
.bg-cream{background:
  radial-gradient(90% 70% at 20% 8%, rgba(255,255,255,.85) 0%, rgba(244,239,230,0) 60%),
  linear-gradient(158deg,#F6F2EA 0%,#EFE8DC 52%,#E4DACA 100%)}
.bg-steel{background:
  radial-gradient(90% 70% at 24% 10%, rgba(126,178,142,.28) 0%, rgba(13,20,15,0) 62%),
  linear-gradient(172deg,var(--steel) 0%,var(--navy) 60%,var(--navy-2) 100%)}
.bg-brass{background:
  radial-gradient(100% 70% at 78% 6%, rgba(255,255,255,.16) 0%, rgba(0,0,0,0) 62%),
  linear-gradient(165deg,var(--navy-3) 0%,#276140 55%,#1C4630 100%)}
.grain::before{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;opacity:.24;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)'/%3E%3C/svg%3E")}
.veins::after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.5;
  background:
    linear-gradient(112deg, transparent 41%, rgba(120,110,96,.14) 42%, transparent 43%),
    linear-gradient(98deg, transparent 66%, rgba(120,110,96,.10) 67%, transparent 68%),
    linear-gradient(126deg, transparent 20%, rgba(120,110,96,.08) 21%, transparent 22%)}

/* ---- campo grafico: o que entra no lugar da foto ---- */
.campo{position:absolute;inset:0;z-index:0;overflow:hidden;
  background:
    radial-gradient(80% 70% at 76% 16%, rgba(46,112,72,.55) 0%, rgba(13,20,15,0) 60%),
    radial-gradient(70% 60% at 10% 88%, rgba(198,172,115,.16) 0%, rgba(13,20,15,0) 58%),
    linear-gradient(158deg,#22422D 0%,#17281C 44%,#101B14 100%)}
.campo::before{content:"";position:absolute;right:-260px;top:-180px;width:1120px;height:1120px;border-radius:50%;
  border:1px solid rgba(213,190,140,.26);
  box-shadow:0 0 0 120px rgba(213,190,140,.045), inset 0 0 0 90px rgba(245,244,239,.035)}
.campo::after{content:"";position:absolute;inset:0;opacity:.9;
  background-image:radial-gradient(rgba(245,244,239,.30) 1.7px, transparent 1.8px);
  background-size:22px 22px;
  -webkit-mask-image:radial-gradient(70% 55% at 14% 22%, rgba(0,0,0,.95) 0%, transparent 68%);
  mask-image:radial-gradient(70% 55% at 14% 22%, rgba(0,0,0,.95) 0%, transparent 68%)}
.campo i{position:absolute;left:-280px;bottom:-300px;width:960px;height:960px;border-radius:50%;
  border:1px solid rgba(46,112,72,.55);box-shadow:inset 0 0 0 70px rgba(46,112,72,.10)}
.campo.claro i{border-color:rgba(46,112,72,.30);box-shadow:inset 0 0 0 70px rgba(46,112,72,.05)}
.campo.claro{background:
    radial-gradient(80% 70% at 74% 14%, rgba(255,255,255,.9) 0%, rgba(231,227,217,0) 60%),
    linear-gradient(158deg,#F7F5F0 0%,#EDEAE1 52%,#E0DCD1 100%)}
.campo.claro::before{border-color:rgba(46,112,72,.22);box-shadow:0 0 0 120px rgba(46,112,72,.035)}
.campo.claro::after{background-image:radial-gradient(rgba(22,33,26,.16) 1.5px, transparent 1.6px)}

/* ---- foto opcional ---- */
.photo{position:absolute;inset:0;z-index:0;background-position:center;background-size:cover;background-repeat:no-repeat;
  filter:saturate(.72) contrast(1.05) brightness(.78)}
.photo::after{content:"";position:absolute;inset:0;
  background:linear-gradient(178deg, rgba(11,21,38,.45) 0%, rgba(11,21,38,.72) 55%, rgba(8,14,26,.94) 100%)}

/* ---- chrome do post ---- */
.wm{position:absolute;z-index:9;top:52px;left:60px;font-size:20px;letter-spacing:.06em;font-weight:500;opacity:.42}
.wm.dark{color:var(--ink)}
.counter{position:absolute;z-index:9;top:46px;right:60px;font-size:22px;font-weight:600;letter-spacing:.04em;
  padding:9px 20px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.16)}
.counter.dark{background:rgba(20,26,36,.10);border-color:rgba(20,26,36,.16);color:var(--ink)}

.logo{display:inline-flex;align-items:center;gap:16px;line-height:1}
.logo img.mark{width:62px;height:62px;border-radius:50%;background:#fff;object-fit:contain;padding:5px;flex:0 0 62px}
.logo .mark{width:62px;height:62px;border-radius:50%;flex:0 0 62px;display:flex;align-items:center;justify-content:center;
  background:#fff;color:var(--navy-3);font-family:'Spectral',serif;font-size:22px;letter-spacing:.02em}
.logo .wm2{display:flex;flex-direction:column;gap:6px}
.logo .name{font-family:'Quicksand',sans-serif;font-weight:600;font-size:26px;letter-spacing:.14em}
.logo .sub{font-size:11.5px;letter-spacing:.34em;text-transform:uppercase;font-weight:600;opacity:.62}
.logo.dark .name{color:var(--ink)}
.logo.dark .sub{color:rgba(20,26,36,.65)}

.foot{position:absolute;z-index:9;left:56px;right:56px;bottom:52px;display:flex;align-items:flex-end;justify-content:space-between;gap:24px}
.foot .tag{font-size:16px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;opacity:.5;text-align:right;line-height:1.6}
.foot .tag.dark{color:rgba(22,33,26,.6)}
.foot .tag.arraste{color:var(--brass);opacity:1;font-size:14px;letter-spacing:.34em}
.foot .tag.arraste.dark{color:#8A7440}

/* ---- capa ---- */
.cover .olho{position:absolute;z-index:6;left:76px;top:150px;display:flex;align-items:center;gap:24px;width:520px}
.cover .olho span{font-size:20px;letter-spacing:.34em;text-transform:uppercase;font-weight:700;color:var(--brass-2);white-space:nowrap}
.cover .olho i{flex:1;height:1px;background:linear-gradient(90deg,rgba(213,190,140,.7),rgba(213,190,140,0))}
.cover .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding:0 76px 372px;gap:30px}
.cover .label{display:flex;flex-direction:column;align-items:flex-start;gap:10px}
.cover .label span{background:var(--navy-3);color:var(--cream);font-size:33px;font-weight:600;letter-spacing:-.01em;
  padding:8px 16px;box-decoration-break:clone}
.cover h1{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:112px;line-height:.96;
  letter-spacing:-.02em;color:var(--cream);max-width:14ch}
.cover h1 em{font-style:italic;font-weight:600;color:var(--brass-2)}
.cover .ask{font-size:34px;font-weight:400;opacity:.72;letter-spacing:-.01em}
.cover .answer{position:absolute;z-index:6;right:0;bottom:270px;background:var(--navy-3);padding:30px 44px 30px 40px;
  max-width:560px;display:flex;align-items:center;gap:22px;font-size:29px;line-height:1.3;color:#FBF6EE}
.cover .answer .arrow{flex:0 0 76px;height:1px;background:var(--brass-2);position:relative}
.cover .answer .arrow::after{content:"";position:absolute;right:0;top:-5px;width:11px;height:11px;
  border-top:1px solid var(--brass-2);border-right:1px solid var(--brass-2);transform:rotate(45deg)}

/* ---- split (2 fotos) ---- */
.split{display:flex;flex-direction:column}
.split .half{position:relative;flex:1;overflow:hidden;display:flex;align-items:center}
.split .half.a{justify-content:flex-end}
.split .half.b{justify-content:flex-start}
.split .half.b .box{background:rgba(46,112,72,.94)}
.split .box{position:relative;z-index:5;background:rgba(23,35,26,.90);backdrop-filter:blur(2px);
  padding:44px 48px;max-width:660px;margin:0 60px;font-size:35px;line-height:1.34;letter-spacing:-.005em;color:var(--cream)}
.split .box b{font-weight:700}
.split .box .serif{display:block;margin-top:14px;font-family:'Spectral',serif;font-style:italic;font-size:52px;line-height:1.08}

/* ---- editorial (fundo claro) ---- */
.editorial{color:var(--ink)}
.editorial .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:46px;padding:0 96px;text-align:center}
.editorial .top{font-size:34px;line-height:1.42;letter-spacing:-.005em;max-width:20ch}
.editorial .top b{font-weight:700}
.editorial .rule{width:1px;height:78px;background:rgba(20,26,36,.35)}
.editorial h2{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:64px;line-height:1.16;
  letter-spacing:-.015em;max-width:17ch}
.editorial h2 em{font-style:italic;font-weight:600;color:var(--navy-3)}
.editorial .bottom{font-size:32px;line-height:1.44;max-width:24ch;color:rgba(20,26,36,.86)}
.editorial .bottom b{font-weight:700}

/* ---- lista ---- */
.list .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 76px;gap:16px}
.list .kicker{font-size:17px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:var(--brass-2);margin-bottom:6px}
.list h2{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:66px;line-height:1.06;
  letter-spacing:-.02em;margin-bottom:30px;max-width:15ch}
.list .item{display:flex;gap:28px;padding:26px 0;border-top:1px solid rgba(244,239,230,.16)}
.list .item:last-child{border-bottom:1px solid rgba(244,239,230,.16)}
.list .n{font-family:'Spectral',serif;font-style:italic;font-size:40px;color:var(--brass-2);flex:0 0 52px;line-height:1}
.list .t{font-size:31px;line-height:1.34;letter-spacing:-.005em}
.list .t b{font-weight:700}

/* ---- declaracao (post unico) ---- */
.statement .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 84px;gap:38px}
.statement .lead{font-size:44px;line-height:1.3;font-weight:500;letter-spacing:-.015em}
.statement .lead b{font-weight:700}
.statement h1{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:82px;line-height:1.04;
  letter-spacing:-.02em}
.statement h1 em{font-style:italic;font-weight:600;color:var(--brass-2)}
.statement .note{font-size:28px;line-height:1.44;opacity:.74;max-width:26ch}

/* ---- balao de whatsapp ---- */
.bubble{display:inline-flex;align-items:center;gap:20px;background:#FCFAF6;color:var(--ink);
  border-radius:22px 22px 22px 6px;padding:26px 34px;box-shadow:0 26px 54px -22px rgba(0,0,0,.6);align-self:flex-start}
.bubble .file{width:52px;height:64px;border-radius:6px;background:#E9E2D5;position:relative;flex:0 0 52px}
.bubble .file::after{content:"";position:absolute;right:0;top:0;border-width:0 16px 16px 0;border-style:solid;
  border-color:#CFC4B0 #FCFAF6}
.bubble .fname{font-size:34px;font-weight:600;color:var(--navy-3)}
.bubble .fsize{font-size:20px;opacity:.55;margin-top:4px}

/* ---- CTA ---- */
.cta .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 84px;gap:34px}
.cta .kicker{font-size:17px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:var(--brass-2)}
.cta h2{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:76px;line-height:1.04;letter-spacing:-.02em;max-width:15ch}
.cta h2 em{font-style:italic;font-weight:600;color:var(--brass-2)}
.cta p{font-size:32px;line-height:1.42;opacity:.8;max-width:24ch}
.cta .contatos{display:flex;flex-direction:column;gap:14px;margin-top:10px}
.cta .contatos div{display:flex;align-items:center;gap:18px;font-size:29px;letter-spacing:-.005em}
.cta .contatos .dot{width:7px;height:7px;border-radius:50%;background:var(--brass-2);flex:0 0 7px}
.cta .btn{align-self:flex-start;margin-top:14px;background:var(--cream);color:var(--navy);border-radius:999px;padding:26px 48px;font-size:30px;
  font-weight:600;letter-spacing:-.01em}
"""

_VARS = {"--navy": "navy", "--navy-2": "navy2", "--navy-3": "navy3", "--steel": "steel",
         "--cream": "cream", "--cream-2": "cream2", "--brass": "brass",
         "--brass-2": "brass2", "--ink": "ink"}
BASE_CSS = BASE_CSS.replace("__TOKENS__", "".join(f"{css}:{CORES[k]};" for css, k in _VARS.items()))

_TEM_LOGO = (ROOT / LOGO_FILE).exists()
_MARK = (f'<img class="mark" src="{{SUBIDA}}{LOGO_FILE}" alt="SINMEVACO">'
         if _TEM_LOGO else '<div class="mark">MSV</div>')

LOGO_LIGHT = """<div class="logo">""" + _MARK + """<div class="wm2">
  <div class="name">SINMEVA&Ccedil;O</div><div class="sub">Sindicato dos M&eacute;dicos do Vale do A&ccedil;o</div>
</div></div>"""
LOGO_DARK = LOGO_LIGHT.replace('class="logo"', 'class="logo dark"')


def page(title, canvas_class, inner, counter=None, dark_chrome=False, foot_tag=None, photo=None, show_foot=True, show_wm=True):
    """Monta um slide 1080x1350 completo."""
    d = " dark" if dark_chrome else ""
    d_wm = " dark" if dark_chrome else ""
    photo_html = f'<div class="campo{" claro" if dark_chrome else ""}"><i></i></div>'
    if photo:
        photo_html += f'<div class="photo" style="background-image:url(\'{photo}\')"></div>'
    counter_html = f'<div class="counter{" dark" if dark_chrome else ""}">{counter}</div>' if counter else ""
    wm_html = f'<div class="wm{" dark" if dark_chrome else ""}">{HANDLE}</div>' if show_wm else ""
    # slide de carrossel que nao e o ultimo ganha o "arraste", como no feed do sindicato
    if counter and "/" in counter:
        atual, total = counter.split("/")
        if atual != total:
            foot_tag = "Arraste &rarr;"
            d += " arraste" 
    tag_html = f'<div class="tag{d}">{foot_tag}</div>' if foot_tag else "<div></div>"
    logo = LOGO_DARK if dark_chrome else LOGO_LIGHT
    foot_html = f'<div class="foot">{logo}{tag_html}</div>' if show_foot else ""
    return f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{title}</title>
<link rel="stylesheet" href="../fontes/casa.css">
<style>{BASE_CSS}</style></head>
<body><div class="canvas {canvas_class} grain">
{photo_html}
{wm_html}
{counter_html}
{inner}
{foot_html}
</div></body></html>"""


# ====== CSS DOS MODELOS 07-12 ======
BASE_CSS += """
/* ---- 07 citacao ---- */
.citacao{color:var(--ink)}
.citacao .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 84px;gap:34px}
.citacao .aspas{font-family:'Spectral',serif;font-size:220px;line-height:.6;color:var(--navy-3);opacity:.30;height:110px}
.citacao blockquote{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:70px;line-height:1.1;
  letter-spacing:-.02em;max-width:17ch}
.citacao blockquote em{font-style:italic;font-weight:600;color:var(--navy-3)}
.citacao .rule{width:96px;height:1px;background:rgba(20,26,36,.35)}
.citacao .autor{display:flex;flex-direction:column;gap:8px}
.citacao .autor .nome{font-size:29px;font-weight:600;letter-spacing:-.01em}
.citacao .autor .papel{font-size:17px;letter-spacing:.28em;text-transform:uppercase;font-weight:600;color:rgba(20,26,36,.5)}

/* ---- 08 numero ---- */
.numero .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 84px;gap:26px}
.numero .kicker{font-size:17px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:var(--brass-2)}
.numero .n{font-family:'Spectral',serif;font-style:italic;font-size:290px;line-height:.82;color:var(--brass-2);
  letter-spacing:-.04em;display:flex;align-items:baseline;gap:22px}
.numero .n small{font-family:'Poppins',sans-serif;font-style:normal;font-size:52px;font-weight:500;color:var(--cream);letter-spacing:-.01em}
.numero .cap{font-size:46px;line-height:1.24;letter-spacing:-.015em;max-width:19ch;margin-top:6px}
.numero .cap b{font-weight:700}
.numero .fonte{font-size:18px;letter-spacing:.24em;text-transform:uppercase;font-weight:500;opacity:.45;margin-top:14px}

/* ---- 09 mito x verdade ---- */
.mv{display:flex;flex-direction:column}
.mv .faixa{position:relative;flex:1;display:flex;flex-direction:column;justify-content:center;gap:24px;padding:0 76px}
.mv .faixa.mito{background:linear-gradient(168deg,var(--navy) 0%,var(--navy-2) 100%)}
.mv .faixa.verdade{background:linear-gradient(168deg,var(--navy-3) 0%,#276140 60%,#1C4630 100%)}
.mv .pill{align-self:flex-start;font-size:17px;letter-spacing:.32em;text-transform:uppercase;font-weight:700;
  padding:11px 22px;border:1px solid rgba(244,239,230,.42);border-radius:999px}
.mv .mito .pill{color:rgba(244,239,230,.72)}
.mv .verdade .pill{color:#FBF6EE;border-color:rgba(251,246,238,.55)}
.mv .txt{font-size:44px;line-height:1.22;letter-spacing:-.015em;max-width:19ch}
.mv .verdade .txt{font-family:'Spectral',serif;font-style:italic;font-size:56px;line-height:1.12}
.mv .txt b{font-weight:700}

/* ---- 10 agenda ---- */
.agenda .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 76px;gap:44px}
.agenda .kicker{font-size:17px;letter-spacing:.32em;text-transform:uppercase;font-weight:700;color:var(--brass-2)}
.agenda .data{display:flex;align-items:flex-end;gap:26px;border-bottom:1px solid rgba(244,239,230,.18);padding-bottom:34px}
.agenda .dia{font-family:'Spectral',serif;font-style:italic;font-size:200px;line-height:.8;color:var(--cream);letter-spacing:-.03em}
.agenda .mes{display:flex;flex-direction:column;gap:10px;padding-bottom:14px}
.agenda .mes span{font-size:34px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:var(--brass-2)}
.agenda .mes small{font-size:24px;letter-spacing:.12em;opacity:.6}
.agenda h2{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:62px;line-height:1.08;letter-spacing:-.02em;max-width:16ch}
.agenda .info{display:flex;flex-direction:column;gap:16px}
.agenda .info div{display:flex;align-items:center;gap:18px;font-size:30px;letter-spacing:-.005em}
.agenda .info .dot{width:7px;height:7px;border-radius:50%;background:var(--brass-2);flex:0 0 7px}

/* ---- 11 clausula ---- */
.clausula{color:var(--ink)}
.clausula .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 76px;gap:46px}
.clausula .doc{background:#FCFAF6;padding:52px 56px;box-shadow:0 34px 70px -30px rgba(20,26,36,.45);transform:rotate(-.8deg);margin:0 10px;
  display:flex;flex-direction:column;gap:24px}
.clausula .doc .head{font-size:17px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:rgba(20,26,36,.45)}
.clausula .doc .bar{height:13px;border-radius:3px;background:rgba(20,26,36,.10)}
.clausula .doc .bar.s{width:62%}
.clausula .doc .trecho{font-size:36px;line-height:1.36;letter-spacing:-.01em;font-weight:500}
.clausula .doc .trecho mark{background:rgba(198,172,115,.45);padding:2px 6px;color:inherit}
.clausula .leitura{display:flex;flex-direction:column;gap:18px}
.clausula .leitura h2{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:58px;line-height:1.1;letter-spacing:-.02em;max-width:18ch}
.clausula .leitura h2 em{font-style:italic;font-weight:600;color:var(--navy-3)}
.clausula .leitura p{font-size:29px;line-height:1.4;color:rgba(20,26,36,.78);max-width:26ch}

/* ---- 12 pergunta do associado ---- */
.pergunta .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 76px;gap:36px}
.pergunta .kicker{font-size:17px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:var(--brass-2)}
.pergunta .balao{background:#FCFAF6;color:var(--ink);border-radius:26px 26px 26px 8px;padding:38px 42px;font-size:38px;
  line-height:1.28;letter-spacing:-.01em;max-width:800px;box-shadow:0 28px 56px -26px rgba(0,0,0,.65)}
.pergunta h2{font-family:'Spectral',serif;font-style:normal;font-weight:300;font-size:66px;line-height:1.08;
  letter-spacing:-.02em;max-width:16ch}
.pergunta h2 em{font-style:italic;font-weight:600;color:var(--brass-2)}
.pergunta .nota{font-size:29px;line-height:1.42;opacity:.76;max-width:26ch}
"""


# ====== CONSTRUTORES DE SLIDE ======

def cover(labels, titulo, ask, resposta, counter, photo=None, foot_tag=None, olho="Caso real"):
    lab = "".join(f"<span>{l}</span>" for l in labels)
    return page(titulo, "cover bg-navy", f"""
<div class="olho"><span>{olho}</span><i></i></div>
<div class="body">
  <div class="label">{lab}</div>
  <h1>{titulo}</h1>
  <div class="ask">{ask}</div>
</div>
<div class="answer">{resposta}<div class="arrow"></div></div>
""", counter=counter, photo=photo, foot_tag=foot_tag)


def split(bloco_a, bloco_b, counter, photo_a=None, photo_b=None):
    def half(cls, txt, ph):
        bg = f'<div class="photo" style="background-image:url(\'{ph}\')"></div>' if ph else ""
        base = "bg-navy" if cls == "a" else "bg-steel"
        return f'<div class="half {cls} {base}">{bg}<div class="box">{txt}</div></div>'
    return page("split", "split", half("a", bloco_a, photo_a) + half("b", bloco_b, photo_b),
                counter=counter, show_foot=False)


def editorial(topo, frase, rodape, counter):
    return page("editorial", "editorial bg-cream veins", f"""
<div class="body">
  <div class="top">{topo}</div>
  <div class="rule"></div>
  <h2>{frase}</h2>
  <div class="rule"></div>
  <div class="bottom">{rodape}</div>
</div>
""", counter=counter, dark_chrome=True)


def lista(kicker, titulo, itens, counter, foot_tag=None):
    li = "".join(
        f'<div class="item"><div class="n">{i+1}</div><div class="t">{t}</div></div>'
        for i, t in enumerate(itens))
    return page(titulo, "list bg-navy", f"""
<div class="body">
  <div class="kicker">{kicker}</div>
  <h2>{titulo}</h2>
  {li}
</div>
""", counter=counter, foot_tag=foot_tag)


def cta(kicker, titulo, texto, botao, counter=None):
    return page(titulo, "cta bg-navy", f"""
<div class="body">
  <div class="kicker">{kicker}</div>
  <h2>{titulo}</h2>
  <p>{texto}</p>
  <div class="contatos">
    <div><span class="dot"></span>{FONE}</div>
    <div><span class="dot"></span>{SITE}</div>
    <div><span class="dot"></span>{CIDADE}</div>
  </div>
  <div class="btn">{botao}</div>
</div>
""", counter=counter, foot_tag="Jur&iacute;dico<br>pr&oacute;prio")


def statement(lead, titulo, nota, fundo="bg-brass", extra="", foot_tag=None):
    return page(titulo, f"statement {fundo}", f"""
<div class="body">
  <div class="lead">{lead}</div>
  {extra}
  <h1>{titulo}</h1>
  <div class="note">{nota}</div>
</div>
""", foot_tag=foot_tag)


BUBBLE = """<div class="bubble"><div class="file"></div>
<div><div class="fname">Laudo-paciente.pdf</div><div class="fsize">2 p&aacute;ginas &middot; 480 KB</div></div></div>"""


# ====== MODELOS 07-12 ======

def citacao(frase, nome, papel, counter=None, foot_tag=None):
    """07 - depoimento / posicionamento institucional (fundo claro)."""
    return page(nome, "citacao bg-cream veins", f"""
<div class="body">
  <div class="aspas">&ldquo;</div>
  <blockquote>{frase}</blockquote>
  <div class="rule"></div>
  <div class="autor"><div class="nome">{nome}</div><div class="papel">{papel}</div></div>
</div>
""", counter=counter, dark_chrome=True, foot_tag=foot_tag)


def numero(kicker, valor, unidade, legenda, fonte, counter=None, foot_tag=None):
    """08 - dado em destaque, sempre com fonte declarada."""
    un = f"<small>{unidade}</small>" if unidade else ""
    return page(legenda, "numero bg-navy", f"""
<div class="body">
  <div class="kicker">{kicker}</div>
  <div class="n">{valor}{un}</div>
  <div class="cap">{legenda}</div>
  <div class="fonte">{fonte}</div>
</div>
""", counter=counter, foot_tag=foot_tag)


def mito_verdade(mito, verdade, counter=None):
    """09 - duas faixas: mito no azul, verdade no bronze."""
    return page("mito x verdade", "mv", f"""
<div class="faixa mito"><div class="pill">Mito</div><div class="txt">{mito}</div></div>
<div class="faixa verdade"><div class="pill">Verdade</div><div class="txt">{verdade}</div></div>
""", counter=counter, show_foot=False)


def agenda(kicker, dia, mes, semana, titulo, infos, counter=None, foot_tag=None):
    """10 - assembleia, reuniao, curso."""
    li = "".join(f'<div><span class="dot"></span>{i}</div>' for i in infos)
    return page(titulo, "agenda bg-steel", f"""
<div class="body">
  <div class="kicker">{kicker}</div>
  <div class="data"><div class="dia">{dia}</div>
    <div class="mes"><span>{mes}</span><small>{semana}</small></div></div>
  <h2>{titulo}</h2>
  <div class="info">{li}</div>
</div>
""", counter=counter, foot_tag=foot_tag)


def clausula(head, trecho, titulo, texto, counter=None, foot_tag=None):
    """11 - trecho de documento com marca-texto + leitura do que aquilo significa."""
    return page(titulo, "clausula bg-cream veins", f"""
<div class="body">
  <div class="doc">
    <div class="head">{head}</div>
    <div class="bar"></div><div class="bar s"></div>
    <div class="trecho">{trecho}</div>
    <div class="bar"></div><div class="bar s"></div>
  </div>
  <div class="leitura"><h2>{titulo}</h2><p>{texto}</p></div>
</div>
""", counter=counter, dark_chrome=True, foot_tag=foot_tag)


def pergunta(kicker, duvida, resposta, nota, counter=None, foot_tag=None):
    """12 - pergunta recebida no direct + resposta curta."""
    return page(resposta, "pergunta bg-navy", f"""
<div class="body">
  <div class="kicker">{kicker}</div>
  <div class="balao">{duvida}</div>
  <h2>{resposta}</h2>
  <div class="nota">{nota}</div>
</div>
""", counter=counter, foot_tag=foot_tag)


# ====== CSS DOS MODELOS 13-17 ======
BASE_CSS += """
/* ---- 13 cartao com foto e pergunta ---- */
.cardfoto{background:var(--cream-2)}
.cardfoto .card{position:absolute;inset:38px;background:#FFFDFA;border-radius:46px;overflow:hidden;
  display:flex;flex-direction:column;box-shadow:0 40px 90px -40px rgba(13,20,15,.45);z-index:5}
.cardfoto .head{display:flex;justify-content:space-between;align-items:center;padding:44px 54px 30px;
  font-size:25px;color:var(--ink);letter-spacing:-.01em}
.cardfoto .head b{font-weight:700}
.cardfoto .head i{font-style:italic;font-weight:600}
.cardfoto .shot{height:520px;position:relative;margin:0 0 0;overflow:hidden;
  background:
    repeating-linear-gradient(118deg, rgba(255,255,255,.05) 0 2px, rgba(255,255,255,0) 2px 26px),
    radial-gradient(60% 90% at 78% 20%, rgba(213,190,140,.20) 0%, rgba(0,0,0,0) 62%),
    linear-gradient(150deg,var(--navy-3) 0%,var(--steel) 55%,var(--navy) 100%)}
.cardfoto .shot::after{content:"";position:absolute;width:300px;height:300px;border-radius:50%;
  border:1px solid rgba(245,244,239,.20);right:64px;top:86px}
.cardfoto .shot .ph{position:absolute;inset:0;background-position:center;background-size:cover;filter:saturate(.8) contrast(1.03)}
.cardfoto .mid{flex:1;padding:52px 54px 0;display:flex;flex-direction:column;justify-content:center;gap:32px}
.cardfoto h1{font-size:52px;line-height:1.44;letter-spacing:-.015em;color:var(--ink);font-weight:400;max-width:16ch}
.cardfoto h1 b{font-weight:700;font-style:italic}
.cardfoto .seta{align-self:flex-end;width:96px;height:56px;border:1.5px solid var(--ink);border-radius:999px;
  display:flex;align-items:center;justify-content:center;font-size:30px;color:var(--ink);margin-top:-8px}
.cardfoto .hint{font-size:27px;color:rgba(22,33,26,.8);border-top:1.5px solid rgba(22,33,26,.25);padding-top:22px}
.cardfoto .hint b{font-weight:700;font-style:italic}
.cardfoto .pe{display:flex;justify-content:space-between;align-items:center;padding:34px 54px 52px;
  font-size:24px;color:rgba(22,33,26,.45)}

/* ---- 14 caixa branca sobre o verde ---- */
.boxcard .body{position:relative;z-index:5;flex:1;display:flex;align-items:center;justify-content:center;padding:0 74px}
.boxcard .box{background:#FFFDFA;border-radius:38px;padding:74px 62px;display:flex;flex-direction:column;
  gap:30px;align-items:flex-start;width:100%;box-shadow:0 40px 90px -44px rgba(0,0,0,.6)}
.boxcard .box h2{font-size:62px;line-height:1.14;letter-spacing:-.025em;font-weight:700;color:var(--ink);max-width:13ch}
.boxcard .box p{font-size:29px;line-height:1.46;color:rgba(22,33,26,.72);max-width:26ch}
.boxcard .btn{border:1.5px solid var(--ink);color:var(--ink);padding:24px 40px;font-size:22px;
  letter-spacing:.2em;text-transform:uppercase;font-weight:600;margin-top:8px}
.boxcard .pe{position:absolute;z-index:6;left:74px;right:74px;bottom:60px;display:flex;justify-content:space-between;
  font-size:24px;color:rgba(245,244,239,.62);letter-spacing:.01em}

/* ---- 15 foto com moldura vazada ---- */
.fotoframe .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;
  padding:0 76px;gap:26px}
.fotoframe .frame{position:absolute;z-index:4;right:56px;top:330px;bottom:340px;left:330px;
  border:1.5px solid rgba(245,244,239,.55);border-radius:0 200px 0 0;pointer-events:none}
.fotoframe h2{font-size:64px;line-height:1.16;letter-spacing:-.025em;font-weight:700;max-width:15ch}
.fotoframe p{font-size:30px;line-height:1.42;color:rgba(245,244,239,.72);max-width:24ch}
.fotoframe .pill{align-self:flex-start;margin-top:16px;border:1.5px solid rgba(245,244,239,.6);border-radius:999px;
  padding:16px 32px;font-size:24px;letter-spacing:.02em}

/* ---- 16 cartao com barra lateral ---- */
.lateral .card{position:absolute;inset:44px;border-radius:34px;overflow:hidden;z-index:5;
  background:linear-gradient(140deg,#1E4A34 0%,#16321F 52%,#0F2117 100%);display:flex}
.lateral .col{flex:1;padding:74px 64px;display:flex;flex-direction:column;justify-content:center;gap:32px}
.lateral .mark{width:66px;height:66px;border-radius:50%;background:rgba(245,244,239,.10);border:1px solid rgba(213,190,140,.5);
  display:flex;align-items:center;justify-content:center;font-family:'Spectral',serif;font-size:24px;color:var(--brass-2)}
.lateral h2{font-size:54px;line-height:1.24;letter-spacing:-.02em;font-weight:400;max-width:15ch}
.lateral h2 b{font-weight:700;color:var(--brass-2)}
.lateral p{font-size:27px;line-height:1.48;color:rgba(245,244,239,.72);max-width:27ch}
.lateral .btn{align-self:flex-start;border:1.5px solid rgba(245,244,239,.7);padding:22px 38px;font-size:24px;
  letter-spacing:.02em;margin-top:6px}
.lateral .bar{width:110px;background:linear-gradient(180deg,var(--cream-2) 0%,#CDBE9C 100%);border-radius:70px 0 0 70px;margin:70px 0 70px 0}
.lateral .pe{position:absolute;z-index:6;left:0;right:0;bottom:0;height:48px;display:flex;align-items:center;
  justify-content:center;gap:26px;font-size:23px;color:rgba(22,33,26,.5)}

/* ---- 17 X vs Y: dois campos e um selo na costura ---- */
.versus{display:flex;flex-direction:column}
.versus .lado{flex:1;position:relative;z-index:5;display:flex;flex-direction:column;justify-content:center;
  padding:0 76px;gap:26px}
.versus .lado.a{background:linear-gradient(150deg,#2E7048 0%,#245839 60%,#1A3F29 100%)}
.versus .lado.b{background:linear-gradient(150deg,#16261B 0%,#101B14 55%,#0A0F0B 100%)}
.versus .lado .t{font-family:'Spectral',serif;font-size:128px;line-height:.9;color:#FFFDFA;letter-spacing:-.01em}
.versus .lado.b .t{color:var(--brass-2)}
.versus .itens{display:flex;flex-wrap:wrap;gap:14px;max-width:820px}
.versus .itens span{border:1px solid rgba(245,244,239,.42);border-radius:999px;padding:13px 26px;font-size:26px;
  color:rgba(245,244,239,.92)}
.versus .costura{position:absolute;z-index:8;left:0;right:0;top:50%;height:1px;background:rgba(213,190,140,.5)}
.versus .selo{position:absolute;z-index:9;left:50%;top:50%;transform:translate(-50%,-50%);width:132px;height:132px;
  border-radius:50%;background:var(--cream);color:var(--ink);display:flex;align-items:center;justify-content:center;
  font-family:'Spectral',serif;font-style:italic;font-size:50px;box-shadow:0 24px 50px -22px rgba(0,0,0,.8)}
.versus .sub{position:absolute;z-index:9;left:0;right:0;bottom:70px;text-align:center;font-size:24px;
  letter-spacing:.26em;text-transform:uppercase;font-weight:600;color:var(--brass-2)}
"""


def cardfoto(esq, dir_, pergunta, hint, data, photo=None, counter=None):
    """13 - cartao branco arredondado com faixa de foto e pergunta."""
    ph = f'<div class="ph" style="background-image:url(\'{photo}\')"></div>' if photo else ""
    return page(pergunta, "cardfoto", f"""
<div class="card">
  <div class="head"><div>{esq}</div><div><b>{dir_}</b></div></div>
  <div class="shot">{ph}</div>
  <div class="mid">
    <h1>{pergunta}</h1>
    <div class="seta">&rarr;</div>
    <div class="hint">{hint}</div>
  </div>
  <div class="pe"><div>{HANDLE}</div><div>{data}</div></div>
</div>
""", counter=counter, dark_chrome=True, show_foot=False, show_wm=False)


def boxcard(titulo, texto, botao, counter=None):
    """14 - caixa branca sobre o verde, com botao vazado."""
    return page(titulo, "boxcard bg-steel", f"""
<div class="body">
  <div class="box"><h2>{titulo}</h2><p>{texto}</p><div class="btn">{botao}</div></div>
</div>
<div class="pe"><div>{HANDLE}</div><div>{SITE}</div><div>{FONE}</div></div>
""", counter=counter, show_foot=False, show_wm=False)


def fotoframe(titulo, texto, photo=None, counter=None):
    """15 - foto com sobreposicao escura e moldura vazada."""
    return page(titulo, "fotoframe bg-navy", f"""
<div class="frame"></div>
<div class="body">
  <h2>{titulo}</h2>
  <p>{texto}</p>
  <div class="pill">{HANDLE}</div>
</div>
""", counter=counter, photo=photo, show_foot=False, show_wm=False)


def lateral(titulo, texto, botao, counter=None):
    """16 - cartao com degrade e barra bege lateral."""
    return page(titulo, "lateral bg-cream", f"""
<div class="card">
  <div class="col">
    <div class="mark">MSV</div>
    <h2>{titulo}</h2>
    <p>{texto}</p>
    <div class="btn">{botao}</div>
  </div>
  <div class="bar"></div>
</div>
<div class="pe"><span>{HANDLE}</span><span>&middot;</span><span>{SITE}</span></div>
""", counter=counter, show_foot=False, show_wm=False)


def versus(a, itens_a, b, itens_b, sub, photo=None, counter=None):
    """17 - comparacao em dois campos, com selo na costura."""
    def pilulas(itens):
        return "".join(f"<span>{i}</span>" for i in itens)
    return page(f"{a} vs {b}", "versus", f"""
<div class="lado a"><div class="t">{a}</div><div class="itens">{pilulas(itens_a)}</div></div>
<div class="lado b"><div class="t">{b}</div><div class="itens">{pilulas(itens_b)}</div></div>
<div class="costura"></div><div class="selo">vs</div>
<div class="sub">{sub}</div>
""", counter=counter, photo=photo, show_foot=False, show_wm=True)


# ====== CSS DOS MODELOS 18-22 ======
BASE_CSS += """
/* ---- 18 capa foto com pergunta centralizada ---- */
.capafoto .topo{position:absolute;z-index:6;top:52px;left:60px;right:60px;display:flex;justify-content:space-between;
  font-size:21px;letter-spacing:.24em;text-transform:uppercase;font-weight:600;color:rgba(245,244,239,.72)}
.capafoto .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;align-items:center;
  justify-content:center;padding:0 76px 40px;text-align:center;gap:16px}
.capafoto .fio{width:150px;height:1px;background:rgba(213,190,140,.65);margin-bottom:30px}
.capafoto .pe{position:absolute;z-index:6;left:0;right:0;bottom:74px;text-align:center;font-size:23px;
  letter-spacing:.2em;color:rgba(245,244,239,.6)}
.capafoto .l1{font-size:40px;letter-spacing:-.01em;color:rgba(245,244,239,.9)}
.capafoto .l2{font-family:'Spectral',serif;font-size:104px;line-height:1;letter-spacing:-.02em;color:#FFFDFA}
.capafoto .l3{font-size:32px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:rgba(245,244,239,.85)}
.capafoto .btn{margin-top:44px;background:var(--navy-2);color:var(--cream);border-radius:999px;padding:26px 46px;
  font-size:23px;letter-spacing:.2em;text-transform:uppercase;font-weight:600;display:flex;align-items:center;gap:18px}

/* ---- 19 fluxo em pills ---- */
.fluxo .body{position:relative;z-index:5;flex:1;padding:140px 70px 0}
.fluxo h2{font-size:74px;line-height:1.08;letter-spacing:-.03em;font-weight:700;max-width:12ch}
.fluxo h2 em{font-style:italic;font-family:'Spectral',serif;font-weight:400;color:var(--brass-2)}
.fluxo .mapa{position:absolute;inset:0;z-index:5}
.fluxo .pill{position:absolute;background:#FFFDFA;color:var(--ink);border-radius:999px;padding:20px 38px;
  font-size:30px;font-weight:600;letter-spacing:-.01em;box-shadow:0 18px 40px -18px rgba(0,0,0,.6)}
.fluxo svg{position:absolute;inset:0;z-index:4}
.fluxo .pe{position:absolute;z-index:6;left:0;right:0;bottom:58px;text-align:center;font-size:23px;
  letter-spacing:.22em;text-transform:uppercase;color:rgba(245,244,239,.55)}

/* ---- 20 capa escura com serifa entre colchetes ---- */
.colchete .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;align-items:center;
  justify-content:center;text-align:center;padding:0 84px;gap:22px}
.colchete .rule{width:180px;height:1px;background:rgba(245,244,239,.5);margin-bottom:16px}
.colchete .kicker{font-size:22px;letter-spacing:.26em;text-transform:uppercase;font-weight:500;color:rgba(245,244,239,.75);max-width:26ch;line-height:1.6}
.colchete h1{font-family:'Spectral',serif;font-size:78px;line-height:1.06;letter-spacing:-.02em;color:#FFFDFA}
.colchete .marca{display:inline-flex;align-items:center;gap:16px;font-family:'Spectral',serif;font-size:78px;
  color:var(--brass-2);line-height:1.06}
.colchete .marca::before,.colchete .marca::after{content:"";width:16px;height:74px;border:1.5px solid var(--brass-2)}
.colchete .marca::before{border-right:none}
.colchete .marca::after{border-left:none}
.colchete .pe{position:absolute;z-index:6;left:70px;right:70px;bottom:70px;display:flex;justify-content:space-between;
  font-size:23px;letter-spacing:.24em;text-transform:uppercase;color:rgba(245,244,239,.6)}

/* ---- 21 card claro texturizado, tipografia mista ---- */
.textura{background:linear-gradient(150deg,#EFEDE6 0%,#E3E0D7 55%,#D8D4C9 100%);color:var(--ink)}
.textura .card{position:absolute;inset:56px;border-radius:40px;border:1px solid rgba(22,33,26,.14);z-index:5;
  display:flex;flex-direction:column;justify-content:center;padding:0 66px;gap:34px;
  background:linear-gradient(160deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,0) 60%)}
.textura .kicker{position:absolute;top:60px;left:66px;font-size:21px;letter-spacing:.3em;text-transform:uppercase;
  font-weight:600;color:rgba(22,33,26,.5)}
.textura h1{font-size:88px;line-height:1.02;letter-spacing:-.04em;font-weight:700;text-transform:uppercase;max-width:12ch}
.textura h1 em{font-family:'Spectral',serif;font-style:normal;font-weight:300;text-transform:none;letter-spacing:-.02em}
.textura .linha{display:flex;align-items:center;gap:18px;font-size:24px;color:rgba(22,33,26,.62)}
.textura .linha i{flex:0 0 120px;height:1px;background:rgba(22,33,26,.4);display:block}
.textura .pe{position:absolute;z-index:6;left:66px;right:66px;bottom:56px;display:flex;justify-content:space-between;align-items:center}
.textura .pe .tag{border:1px solid rgba(22,33,26,.35);border-radius:999px;padding:15px 32px;font-size:24px;color:rgba(22,33,26,.7)}
.textura .pe .mais{font-size:34px;color:rgba(22,33,26,.45)}

/* ---- 22 mock de tela com destaque ---- */
.tela .stats{position:absolute;z-index:6;top:200px;right:64px;display:flex;flex-direction:column;gap:18px;align-items:flex-end}
.tela .stats div{background:rgba(255,253,250,.94);color:var(--ink);border-radius:999px;padding:16px 28px;font-size:24px;
  font-weight:600;display:flex;align-items:center;gap:14px;box-shadow:0 18px 36px -16px rgba(0,0,0,.7)}
.tela .stats .dot{width:26px;height:26px;border-radius:50%;background:var(--navy-3)}
.tela .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:flex-end;
  padding:0 70px 180px;gap:32px}
.tela h2{font-size:70px;line-height:1.12;letter-spacing:-.03em;font-weight:700;max-width:14ch}
.tela h2 mark{background:none;color:#FFFDFA;border:1.5px solid var(--brass-2);padding:2px 14px;margin-left:6px}
.tela .btn{align-self:flex-start;background:rgba(255,253,250,.95);color:var(--ink);border-radius:12px;padding:22px 34px;
  font-size:25px;font-weight:600;display:flex;align-items:center;gap:14px}
.tela .pe{position:absolute;z-index:6;left:70px;bottom:70px;font-size:23px;letter-spacing:.2em;
  text-transform:uppercase;color:rgba(245,244,239,.6)}
"""


def capafoto(l1, l2, l3, botao, photo=None, counter=None):
    """18 - foto inteira com pergunta centralizada e botao pilula."""
    return page(l2, "capafoto bg-navy", f"""
<div class="topo"><div>SINMEVA&Ccedil;O</div><div>{HANDLE}</div></div>
<div class="body">
  <div class="fio"></div>
  <div class="l1">{l1}</div>
  <div class="l2">{l2}</div>
  <div class="l3">{l3}</div>
  <div class="btn">{botao}</div>
</div>
<div class="pe">{HANDLE} &middot; {SITE}</div>
""", counter=counter, photo=photo, show_foot=False, show_wm=False)


def fluxo(titulo, etapas, rodape, photo=None, counter=None):
    """19 - etapas em pilulas ligadas por curvas."""
    pos = [(90, 470), (500, 650), (140, 830), (540, 1010), (190, 1190)]
    centros = [(x + 110, y + 37) for x, y in pos]
    pills = "".join(f'<div class="pill" style="left:{x}px;top:{y}px">{t}</div>'
                    for (x, y), t in zip(pos, etapas))
    curvas = "".join(
        f'<path d="M{x1} {y1} Q {(x1 + x2) // 2 + (150 if x2 > x1 else -150)} {(y1 + y2) // 2} {x2} {y2}" />'
        for (x1, y1), (x2, y2) in zip(centros, centros[1:]))
    return page(titulo, "fluxo bg-navy", f"""
<div class="body"><h2>{titulo}</h2></div>
<div class="mapa">
  <svg viewBox="0 0 1080 1440" fill="none" stroke="rgba(245,244,239,.55)" stroke-width="2" stroke-dasharray="10 10">{curvas}</svg>
  {pills}
</div>
<div class="pe">{rodape}</div>
""", counter=counter, photo=photo, show_foot=False, show_wm=False)


def colchete(kicker, linha1, destaque, esq, dir_, photo=None, counter=None):
    """20 - capa escura, serifa grande e trecho entre colchetes."""
    return page(destaque, "colchete bg-navy", f"""
<div class="body">
  <div class="rule"></div>
  <div class="kicker">{kicker}</div>
  <h1>{linha1}</h1>
  <div class="marca">{destaque}</div>
</div>
<div class="pe"><div>{esq}</div><div>{dir_}</div></div>
""", counter=counter, photo=photo, show_foot=False, show_wm=False)


def textura(kicker, titulo, linha, counter=None):
    """21 - cartao claro texturizado com tipografia mista."""
    return page(titulo, "textura grain", f"""
<div class="card">
  <div class="kicker">{kicker}</div>
  <h1>{titulo}</h1>
  <div class="linha"><i></i>{linha}</div>
</div>
<div class="pe"><div class="tag">{HANDLE}</div><div class="mais">+</div></div>
""", counter=counter, show_foot=False, show_wm=False)


def tela(stats, titulo, botao, rodape, photo=None, counter=None):
    """22 - mock de tela com pilulas de metrica e palavra destacada."""
    st = "".join(f'<div><span class="dot"></span>{t}</div>' for t in stats)
    return page(titulo, "tela bg-navy", f"""
<div class="stats">{st}</div>
<div class="body">
  <h2>{titulo}</h2>
  <div class="btn">{botao}</div>
</div>
<div class="pe">{rodape}</div>
""", counter=counter, photo=photo, show_foot=False, show_wm=False)


# ====== POSTS ======
# Slots de foto: coloque o arquivo em fotos/<nome>.jpg. Sem o arquivo,
# o degrade de fundo assume e o slide continua fechado.
POSTS = [
    ("01_plantao_reduzido", [
        ("01_capa.html", cover(
            ["O hospital reduziu o valor do plant&atilde;o"],
            "e avisou pelo grupo do <em>WhatsApp.</em>",
            "Sou obrigado a aceitar?",
            "A resposta est&aacute; na lei.",
            "1/5", photo="fotos/plantao-capa.jpg", foot_tag="Jur&iacute;dico<br>SINMEVA&Ccedil;O")),
        ("02_caso.html", split(
            "O comunicado chegou em um grupo com dezenas de m&eacute;dicos. <b>Nenhum aditivo assinado.</b>"
            "<span class='serif'>Nenhuma negocia&ccedil;&atilde;o.</span>",
            "Tr&ecirc;s meses depois, a diferen&ccedil;a acumulada j&aacute; passava de <b>um plant&atilde;o inteiro por m&ecirc;s.</b>",
            "2/5", photo_a="fotos/plantao-a.jpg", photo_b="fotos/plantao-b.jpg")),
        ("03_virada.html", editorial(
            "Esse &eacute; um caso real de um m&eacute;dico associado que <b>procurou o sindicato.</b>",
            "Reduzir o valor combinado depende de acordo. Sem acordo, a altera&ccedil;&atilde;o &eacute; <em>nula.</em>",
            "Constitui&ccedil;&atilde;o, <b>art. 7&ordm;, VI</b> (irredutibilidade do sal&aacute;rio) e CLT, <b>art. 468</b> (altera&ccedil;&atilde;o lesiva). Aviso em grupo n&atilde;o &eacute; acordo.",
            "3/5")),
        ("04_checklist.html", lista(
            "Antes de aceitar",
            "O que fazer nos primeiros dias",
            ["<b>Salve o comunicado</b> &mdash; print com data, autor e o grupo em que foi enviado.",
             "<b>Junte 12 meses</b> de escalas, recibos e contracheques para provar o valor praticado.",
             "<b>N&atilde;o assine aditivo</b> nem termo de ci&ecirc;ncia sem leitura jur&iacute;dica.",
             "<b>Leve ao jur&iacute;dico do SINMEVA&Ccedil;O</b> &mdash; sem custo adicional para o associado."],
            "4/5")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; desde 1991",
            "Antes de assinar, <em>fale com o sindicato.</em>",
            "Defesa trabalhista, &eacute;tica e c&iacute;vel para o m&eacute;dico do Vale do A&ccedil;o, com advogados de direito m&eacute;dico.",
            "Falar com o jur&iacute;dico", "5/5")),
    ]),

    ("02_ameaca_de_processo", [
        ("01_capa.html", cover(
            ["O paciente disse que vai abrir representa&ccedil;&atilde;o no CRM"],
            "e o m&eacute;dico respondeu <em>tudo por mensagem.</em>",
            "Devo explicar por escrito?",
            "A resposta come&ccedil;a no prontu&aacute;rio.",
            "1/5", photo="fotos/crm-capa.jpg", foot_tag="Defesa &eacute;tica<br>SINMEVA&Ccedil;O")),
        ("02_caso.html", split(
            "Mensagem enviada no impulso vira prova &mdash; <b>inclusive contra quem escreveu.</b>",
            "<span class='serif'>Prontu&aacute;rio completo,</span> datado e assinado, &eacute; a pe&ccedil;a central de qualquer defesa.",
            "2/5", photo_a="fotos/crm-a.jpg", photo_b="fotos/crm-b.jpg")),
        ("03_virada.html", editorial(
            "Esse &eacute; um tipo de caso comum &mdash; e as <b>primeiras 48 horas</b> decidem o resto.",
            "Processo &eacute;tico n&atilde;o se resolve no impulso. Se resolve com <em>documento.</em>",
            "O que pesa na defesa &eacute; o <b>registro</b>: prontu&aacute;rio, termo de consentimento, exames e a linha do tempo do atendimento.",
            "3/5")),
        ("04_checklist.html", lista(
            "Primeiras 48 horas",
            "O protocolo que protege voc&ecirc;",
            ["<b>N&atilde;o altere o prontu&aacute;rio.</b> Edi&ccedil;&atilde;o posterior &eacute; o que mais compromete a defesa.",
             "<b>Re&uacute;na tudo</b>: TCLE, exames, receitas, agendamentos e registros de contato.",
             "<b>N&atilde;o responda acusa&ccedil;&atilde;o</b> por WhatsApp, direct ou telefone.",
             "<b>Acione o jur&iacute;dico</b> antes de escrever qualquer defesa ao CRM."],
            "4/5")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; jur&iacute;dico",
            "Defesa &eacute;tica <em>n&atilde;o se improvisa.</em>",
            "Acompanhamento em processo &eacute;tico-disciplinar, trabalhista e c&iacute;vel &mdash; sem custo adicional para o associado.",
            "Agendar atendimento", "5/5")),
    ]),

    ("03_contrato_pj", [
        ("01_capa.html", cover(
            ["Assinou como PJ para receber mais"],
            "e adoeceu <em>no meio do ano.</em>",
            "Quem paga o afastamento?",
            "A resposta est&aacute; no contrato.",
            "1/5", photo="fotos/pj-capa.jpg", foot_tag="Contratos<br>SINMEVA&Ccedil;O")),
        ("02_caso.html", split(
            "Sem v&iacute;nculo, <b>n&atilde;o h&aacute; afastamento remunerado</b>, nem 13&ordm;, nem f&eacute;rias, nem FGTS.",
            "<span class='serif'>E se a rotina &eacute; de empregado,</span> o contrato pode n&atilde;o descrever o que realmente acontece.",
            "2/5", photo_a="fotos/pj-a.jpg", photo_b="fotos/pj-b.jpg")),
        ("03_virada.html", editorial(
            "Esse &eacute; um caso comum entre m&eacute;dicos que <b>pejotizaram</b> para aumentar o l&iacute;quido.",
            "O que define o v&iacute;nculo n&atilde;o &eacute; o papel assinado &mdash; &eacute; a <em>rotina de trabalho.</em>",
            "Subordina&ccedil;&atilde;o, pessoalidade, habitualidade e onerosidade s&atilde;o o que a Justi&ccedil;a olha primeiro.",
            "3/5")),
        ("04_checklist.html", lista(
            "Antes de assinar",
            "Cinco cl&aacute;usulas que mudam sua vida",
            ["<b>Reajuste</b>: existe &iacute;ndice e data-base, ou o valor fica congelado?",
             "<b>Afastamento</b>: o que acontece com a remunera&ccedil;&atilde;o em caso de doen&ccedil;a?",
             "<b>Multa e aviso</b>: quanto custa sair &mdash; e quanto custa ser dispensado?",
             "<b>Responsabilidade civil</b>: quem responde e quem paga o seguro?",
             "<b>Escala e exclusividade</b>: o contrato descreve o que voc&ecirc; de fato faz?"],
            "4/5")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; contratos",
            "Leitura de contrato <em>antes</em> da assinatura.",
            "Envie a proposta ao jur&iacute;dico do sindicato e receba a an&aacute;lise cl&aacute;usula por cl&aacute;usula.",
            "Enviar meu contrato", "5/5")),
    ]),

    ("04_lgpd_laudo_whatsapp", [
        ("01_post.html", statement(
            "M&eacute;dico, se o laudo do seu paciente sai do consult&oacute;rio <b>em um print</b>",
            "a responsabilidade <em>&eacute; sua.</em>",
            "Exame e laudo s&atilde;o dado sens&iacute;vel de sa&uacute;de. Quem decide como esse dado circula responde pelo vazamento &mdash; n&atilde;o o aplicativo, n&atilde;o a secret&aacute;ria.",
            fundo="bg-brass", extra=BUBBLE, foot_tag="LGPD<br>Lei 13.709/2018")),
    ]),

    ("05_escala_de_plantao", [
        ("01_post.html", statement(
            "Trocaram sua escala no grupo, <b>na v&eacute;spera do fim de semana.</b>",
            "Escala n&atilde;o &eacute; <em>convite.</em>",
            "A escala 12x36 exige <b>acordo escrito</b> &mdash; individual ou coletivo (CLT, art. 59-A). Mensagem em grupo n&atilde;o &eacute; acordo escrito.",
            fundo="bg-navy", foot_tag="CLT &middot; art. 59-A<br>escala 12x36")),
    ]),

    ("06_beneficios_associado", [
        ("01_post.html", lista(
            "Voc&ecirc; contribui. Voc&ecirc; tem direito.",
            "O que j&aacute; est&aacute; inclu&iacute;do para o associado",
            ["<b>Jur&iacute;dico pr&oacute;prio</b> em processo &eacute;tico, trabalhista e c&iacute;vel.",
             "<b>Leitura de contratos</b> e propostas antes da assinatura.",
             "<b>Negocia&ccedil;&atilde;o coletiva</b> de piso, escala e reajuste.",
             "<b>Orienta&ccedil;&atilde;o</b> em PJ, cooperativa e presta&ccedil;&atilde;o de servi&ccedil;o.",
             "<b>Representa&ccedil;&atilde;o</b> junto a hospitais, prefeituras e operadoras."],
            None, foot_tag="Cel. Fabriciano &middot; Ipatinga<br>Tim&oacute;teo &middot; Santana do Para&iacute;so")),
    ]),

    # ---------- modelos 07 a 12 ----------
    ("07_posicionamento", [
        ("01_post.html", citacao(
            "Nenhum m&eacute;dico deveria negociar <em>sozinho</em> com um hospital.",
            "Diretoria do SINMEVA&Ccedil;O",
            "Posicionamento",
            foot_tag="Posicionamento<br>SINMEVA&Ccedil;O")),
    ]),

    ("08_numero_35_anos", [
        ("01_post.html", numero(
            "Vale do A&ccedil;o",
            "35", "anos",
            "defendendo o m&eacute;dico em <b>contrato, escala e conven&ccedil;&atilde;o coletiva.</b>",
            "SINMEVA&Ccedil;O &middot; fundado em 17 de maio de 1991",
            foot_tag="Desde 1991")),
    ]),

    ("09_mito_verdade_sindicato", [
        ("01_post.html", mito_verdade(
            "O sindicato s&oacute; serve <b>na hora do problema.</b>",
            "A maior parte do trabalho &eacute; evitar o problema: contrato lido antes, escala negociada antes, piso definido em conven&ccedil;&atilde;o.")),
    ]),

    ("10_agenda_assembleia", [
        ("01_post.html", agenda(
            "Assembleia geral",
            "12", "Mar&ccedil;o", "Quinta-feira",
            "Pauta: reajuste, escala e plant&atilde;o nos hospitais da regi&atilde;o",
            ["19h &middot; credenciamento a partir das 18h30",
             "Sede do SINMEVA&Ccedil;O &middot; Coronel Fabriciano",
             "Direito a voz e voto: m&eacute;dico associado"],
            foot_tag="Modelo de agenda<br>editar data e pauta")),
    ]),

    ("11_clausula_reajuste", [
        ("01_post.html", clausula(
            "O que procurar no seu contrato",
            "Reajuste: <mark>qual &iacute;ndice</mark> e <mark>qual data-base</mark> est&atilde;o escritos na cl&aacute;usula?",
            "Contrato sem data-base <em>&eacute; sal&aacute;rio congelado.</em>",
            "Se o seu contrato n&atilde;o diz quando e por qual &iacute;ndice o valor sobe, o reajuste vira favor &mdash; e favor n&atilde;o se cobra na Justi&ccedil;a.",
            foot_tag="Leitura de contrato<br>SINMEVA&Ccedil;O")),
    ]),

    ("12_pergunta_associado", [
        ("01_post.html", pergunta(
            "Pergunta do associado",
            "Posso recusar um plant&atilde;o extra se o anterior ainda n&atilde;o foi pago?",
            "Recusar sem registro te exp&otilde;e. <em>Registrar muda o jogo.</em>",
            "Comunique por escrito, guarde o protocolo e fale com o jur&iacute;dico antes de decidir. Para o associado, essa orienta&ccedil;&atilde;o j&aacute; est&aacute; inclu&iacute;da.",
            foot_tag="Manda a sua<br>pergunta no direct")),
    ]),

    # ---------- semana 01: atraso no pagamento do plantao ----------
    ("semana-01/1_seg_carrossel_atraso", [
        ("01_capa.html", cover(
            ["O plant&atilde;o de dezembro"],
            "caiu na conta <em>em fevereiro.</em>",
            "E ningu&eacute;m explica o motivo.",
            "Isso agora &eacute; regist&aacute;vel no CRM.",
            "1/5", photo="fotos/atraso-capa.jpg", foot_tag="Jur&iacute;dico<br>SINMEVA&Ccedil;O")),
        ("02_caso.html", split(
            "Atrasou em novembro. Atrasou em dezembro. Em janeiro, <b>j&aacute; era rotina.</b>",
            "<span class='serif'>E ningu&eacute;m reclama no grupo</span> porque cada um acha que &eacute; o &uacute;nico.",
            "2/5", photo_a="fotos/atraso-a.jpg", photo_b="fotos/atraso-b.jpg")),
        ("03_clausula.html", clausula(
            "Resolu&ccedil;&atilde;o CFM 2.462/2026",
            "Atrasar honor&aacute;rio m&eacute;dico agora sujeita a pessoa jur&iacute;dica a <mark>advert&ecirc;ncia, multa e suspens&atilde;o do registro</mark>.",
            "Atraso deixou de ser <em>s&oacute; assunto de contrato.</em>",
            "A resolu&ccedil;&atilde;o alcan&ccedil;a hospitais, OSs, cooperativas e intermediadoras. A multa chega a 100 vezes a anuidade em caso de reincid&ecirc;ncia.",
            "3/5")),
        ("04_checklist.html", lista(
            "Como registrar",
            "Quatro passos antes de cobrar",
            ["<b>Anote as datas</b>: prevista e efetiva de cada pagamento, m&ecirc;s a m&ecirc;s.",
             "<b>Guarde escalas</b>, recibos, notas e extratos que provem o plant&atilde;o realizado.",
             "<b>Cobre por escrito</b> &mdash; e-mail ou protocolo, nunca s&oacute; no grupo.",
             "<b>Leve ao sindicato</b>: com a 2.462/2026, o caso pode ir ao CRM, n&atilde;o s&oacute; &agrave; Justi&ccedil;a."],
            "4/5")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; jur&iacute;dico",
            "Atraso na sua escala? <em>Traga os documentos.</em>",
            "O jur&iacute;dico do sindicato analisa o caso e cobra o descumprimento &mdash; sem custo adicional para o associado.",
            "Falar com o jur&iacute;dico", "5/5")),
    ]),

    ("semana-01/2_qua_mito_verdade", [
        ("01_post.html", mito_verdade(
            "Atraso de pagamento &eacute; <b>problema individual</b> &mdash; cada um resolve o seu.",
            "Atraso que se repete atinge a escala inteira. E o que atinge a escala inteira &eacute; assunto de conven&ccedil;&atilde;o coletiva.")),
    ]),

    ("semana-01/3_sex_pergunta", [
        ("01_post.html", pergunta(
            "Pergunta do associado",
            "Posso parar de fazer plant&atilde;o enquanto o hospital n&atilde;o pagar os atrasados?",
            "Antes de parar, <em>protocole.</em>",
            "Cobran&ccedil;a por escrito, prazo registrado e c&oacute;pia guardada. Com isso na m&atilde;o, o sindicato cobra o hospital &mdash; e voc&ecirc; n&atilde;o fica exposto sozinho.",
            foot_tag="Manda a sua<br>pergunta no direct")),
    ]),

    # ---------- modelos 13 a 22 ----------
    ("13_cartao_pergunta", [
        ("01_post.html", cardfoto(
            "Sindicato <i>SINMEVA&Ccedil;O</i>", "Jur&iacute;dico",
            "Voc&ecirc; sabe <b>o que o sindicato faz</b> al&eacute;m de negociar reajuste?",
            "<b>arraste</b> para o lado para conferir",
            "22 de agosto", photo="fotos/cartao-capa.jpg")),
    ]),

    ("14_caixa_contato", [
        ("01_post.html", boxcard(
            "Cada contrato precisa de leitura antes da assinatura.",
            "O jur&iacute;dico do SINMEVA&Ccedil;O analisa proposta, aditivo e contrato de plant&atilde;o &mdash; cl&aacute;usula por cl&aacute;usula, sem custo adicional para o associado.",
            "Entre em contato")),
    ]),

    ("15_foto_moldura", [
        ("01_post.html", fotoframe(
            "N&atilde;o assine hoje o que voc&ecirc; n&atilde;o vai poder mudar depois",
            "Contrato de plant&atilde;o dura muito mais que a conversa que deu origem a ele.",
            photo="fotos/moldura.jpg")),
    ]),

    ("16_cartao_lateral", [
        ("01_post.html", lateral(
            "Como o <b>jur&iacute;dico do sindicato</b> protege o seu <b>plant&atilde;o</b>?",
            "An&aacute;lise de contrato, cobran&ccedil;a de atraso, defesa em processo &eacute;tico e representa&ccedil;&atilde;o junto a hospitais e operadoras.",
            "Saiba mais")),
    ]),

    ("17_clt_vs_pj", [
        ("01_post.html", versus(
            "CLT", ["afastamento remunerado", "13&ordm;", "f&eacute;rias", "FGTS"],
            "PJ", ["s&oacute; o que estiver escrito no contrato"],
            "O que muda quando voc&ecirc; adoece")),
    ]),

    ("18_capa_pergunta", [
        ("01_post.html", capafoto(
            "Voc&ecirc; sabe como", "a conven&ccedil;&atilde;o", "funciona?",
            "Confira na legenda &darr;", photo="fotos/convencao.jpg")),
    ]),

    ("19_fluxo_juridico", [
        ("01_post.html", fluxo(
            "O jur&iacute;dico &eacute; <em>simples</em>",
            ["Relato", "An&aacute;lise", "Documentos", "A&ccedil;&atilde;o", "Resposta"],
            "SINMEVA&Ccedil;O &middot; jur&iacute;dico pr&oacute;prio",
            photo="fotos/fluxo.jpg")),
    ]),

    ("20_capa_colchete", [
        ("01_post.html", colchete(
            "O que o sindicato faz quando o hospital atrasa",
            "para proteger", "o seu plant&atilde;o",
            "SINMEVA&Ccedil;O", "Jur&iacute;dico pr&oacute;prio",
            photo="fotos/colchete.jpg")),
    ]),

    ("21_erros_contrato", [
        ("01_post.html", textura(
            "SINMEVA&Ccedil;O &middot; Vale do A&ccedil;o",
            "Erros comuns no <em>contrato</em> m&eacute;dico",
            "Cinco cl&aacute;usulas que quase ningu&eacute;m l&ecirc;")),
    ]),

    ("22_contrato_nao_protege", [
        ("01_post.html", tela(
            ["0 cl&aacute;usula de reajuste", "0 prazo de pagamento"],
            "Seu contrato n&atilde;o <mark>protege</mark>",
            "&#8600; Leia a legenda",
            "SINMEVA&Ccedil;O &middot; leitura de contrato",
            photo="fotos/tela.jpg")),
    ]),

    # ---------- posts com base no estudo (ESTUDO-SINDICATO-MEDICO.md) ----------
    ("23_pejotizacao_stf", [
        ("01_capa.html", colchete(
            "Tema 1389 &middot; Supremo Tribunal Federal",
            "o que fazer", "enquanto n&atilde;o decidem",
            "SINMEVA&Ccedil;O", "Pejotiza&ccedil;&atilde;o",
            photo="fotos/stf.jpg", counter="1/5")),
        ("02_caso.html", split(
            "O Supremo reconheceu <b>repercuss&atilde;o geral</b> sobre a contrata&ccedil;&atilde;o por pessoa jur&iacute;dica &mdash; e a quem cabe provar a fraude.",
            "<span class='serif'>Em junho de 2026</span> caiu a suspens&atilde;o dos processos na primeira e na segunda inst&acirc;ncia.",
            "2/5")),
        ("02_estado.html", editorial(
            "O STF reconheceu repercuss&atilde;o geral sobre a contrata&ccedil;&atilde;o de trabalhador por <b>pessoa jur&iacute;dica</b> &mdash; m&eacute;dicos inclu&iacute;dos.",
            "O julgamento <em>ainda n&atilde;o terminou.</em> N&atilde;o existe tese fixada.",
            "Quem disser que o Supremo <b>j&aacute; liberou</b> &mdash; ou que <b>j&aacute; proibiu</b> &mdash; est&aacute; contando outra hist&oacute;ria.",
            "3/5")),
        ("03_acao.html", lista(
            "Enquanto isso",
            "Documente a sua rotina",
            ["<b>Quem monta a escala</b> &mdash; e se voc&ecirc; pode recus&aacute;-la sem consequ&ecirc;ncia.",
             "<b>Se h&aacute; substitui&ccedil;&atilde;o</b> por outro m&eacute;dico ou se o atendimento &eacute; pessoal.",
             "<b>Com que frequ&ecirc;ncia</b> voc&ecirc; atende no mesmo servi&ccedil;o, m&ecirc;s a m&ecirc;s.",
             "<b>Guarde tudo por escrito.</b> &Eacute; o registro de hoje que sustenta a discuss&atilde;o de amanh&atilde;."],
            "4/5", foot_tag="Jur&iacute;dico<br>SINMEVA&Ccedil;O")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; contratos",
            "Contrato PJ na m&atilde;o? <em>Manda antes de assinar.</em>",
            "O jur&iacute;dico do sindicato l&ecirc; a proposta cl&aacute;usula por cl&aacute;usula e diz o que precisa mudar.",
            "Enviar meu contrato", "5/5")),
    ]),

    ("24_dois_vinculos", [
        ("01_post.html", pergunta(
            "Pergunta do associado",
            "Posso acumular dois cargos p&uacute;blicos na sa&uacute;de?",
            "Pode &mdash; se os hor&aacute;rios forem <em>compat&iacute;veis.</em>",
            "Constitui&ccedil;&atilde;o, art. 37, XVI, &lsquo;c&rsquo;: dois cargos privativos de profissional de sa&uacute;de com profiss&atilde;o regulamentada. O crit&eacute;rio &eacute; a compatibilidade real de hor&aacute;rios.",
            foot_tag="CF &middot; art. 37, XVI<br>acumula&ccedil;&atilde;o de cargos")),
    ]),

    ("25_mito_quatro_horas", [
        ("01_post.html", mito_verdade(
            "A lei garante ao m&eacute;dico jornada de <b>quatro horas.</b>",
            "A Lei 3.999/61 fixa o piso da categoria <b>para</b> a jornada de quatro horas &mdash; n&atilde;o um teto de jornada. &Eacute; o que diz a S&uacute;mula 370 do TST.")),
    ]),
]


def main():
    total = 0
    for pasta, slides in POSTS:
        d = ROOT / pasta
        d.mkdir(parents=True, exist_ok=True)
        # ajusta o caminho das fontes conforme a profundidade da pasta
        subida = "../" * (len(Path(pasta).parts))
        for nome, conteudo in slides:
            conteudo = conteudo.replace('href="../fontes/', f'href="{subida}fontes/')
            conteudo = conteudo.replace("{SUBIDA}", subida)
            (d / nome).write_text(conteudo, encoding="utf-8")
            total += 1
        print(f"  {pasta}: {len(slides)} slide(s)")
    print(f"\n{total} slides gerados em {ROOT}")


if __name__ == "__main__":
    main()
