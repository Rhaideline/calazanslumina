"""
Calazans Lumina — sistema de design do feed.

Identidade tirada do site (tailwind.config.ts) e dos templates editoriais que
ja existiam no repositorio: DM Serif Display em italico para o acento, DM Sans
para o suporte, tinta #111111, papel #F5F1EA, vermelho #FF0005.

Formato 1080x1440 (3:4) porque a grade do perfil e 3:4 — ver ESTUDO-CRAFT-2026.md.

Regra tipografica da casa: exatamente UM italico vermelho por peca. Dois acentos
competem entre si e a peca perde o ponto de fuga.
"""
from pathlib import Path

RAIZ = Path(__file__).parent

L = 1080   # largura
A = 1440   # altura (3:4)

CORES = {
    "tinta":     "#111111",
    "tinta2":    "#1A1A1A",
    "tinta3":    "#08080A",
    "papel":     "#F5F1EA",
    "papel2":    "#EDE6D6",
    "vermelho":  "#FF0005",
    "vermelho2": "#FF3B3B",
    "vermelho3": "#A00306",
    "brasa":     "#1A0D0D",
}

HANDLE = "@calazanslumina"
WHATS = "31 98294-8067"
SITE = "calazanslumina.com.br"
ASSINATURA = "Calazans Lumina"
SOB = "Agência · MG"

_TOKENS = "".join(f"--{k}:{v};" for k, v in CORES.items())

# --------------------------------------------------------------------------
# BASE
# --------------------------------------------------------------------------

BASE = """
{FONTES}
:root{__TOKENS__}
*{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}
html,body{width:__L__px;height:__A__px;overflow:hidden;background:#000}
body{font-family:'DM Sans',system-ui,sans-serif}

.canvas{
  position:relative;width:__L__px;height:__A__px;overflow:hidden;
  display:flex;flex-direction:column;
  --acento:var(--vermelho);
}

/* ---- Temas. Um post vira outro trocando so esta classe. ---- */
.t-tinta{background:var(--tinta);color:#fff;--corpo:rgba(255,255,255,.74);--fraco:rgba(255,255,255,.46);--fio:rgba(255,255,255,.16)}
.t-papel{background:var(--papel);color:var(--tinta);--corpo:rgba(17,17,17,.76);--fraco:rgba(17,17,17,.48);--fio:rgba(17,17,17,.16)}
.t-brasa{background:linear-gradient(158deg,var(--brasa) 0%,var(--tinta) 58%,#000 100%);color:#fff;--corpo:rgba(255,255,255,.76);--fraco:rgba(255,255,255,.5);--fio:rgba(255,255,255,.18);--acento:var(--vermelho2)}
.t-brasa::after{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:radial-gradient(58% 46% at 88% 8%, rgba(255,0,5,.40), transparent 62%)}

/* ---- Grao. Tira o aspecto de vetor chapado. ---- */
.canvas::before{
  content:"";position:absolute;inset:0;z-index:40;pointer-events:none;opacity:.42;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .13 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}
.t-tinta::before,.t-brasa::before{opacity:.30;filter:invert(1)}

/* ---- Regioes ---- */
.topo{flex:0 0 auto;padding:62px 82px 0;display:flex;justify-content:space-between;align-items:center;gap:24px;position:relative;z-index:10}
.meio{flex:1 1 auto;padding:44px 82px;display:flex;flex-direction:column;justify-content:center;gap:34px;position:relative;z-index:10;min-height:0}
.pe{flex:0 0 auto;padding:0 82px 56px;display:flex;justify-content:space-between;align-items:center;gap:20px;position:relative;z-index:10;
    font-size:14px;letter-spacing:.26em;text-transform:uppercase;font-weight:500;color:var(--fraco)}
.pe .marca{color:var(--acento);font-weight:700;letter-spacing:.3em}

/* ---- Lockup ---- */
.logo{display:inline-flex;align-items:center;gap:15px;line-height:1}
.logo img{width:46px;height:46px;object-fit:contain;display:block;flex-shrink:0}
.logo .wm{display:flex;flex-direction:column;gap:6px;line-height:1}
.logo .nome{font-family:'DM Serif Display',serif;font-style:italic;font-size:28px;letter-spacing:-.005em}
.logo .sub{font-size:11px;letter-spacing:.46em;text-transform:uppercase;font-weight:600;color:var(--acento)}

/* ---- Etiquetas ---- */
.tag{display:inline-flex;align-items:center;gap:11px;font-size:13px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:var(--acento)}
.tag::before{content:"";width:26px;height:2px;background:var(--acento);display:block}
.pilula{display:inline-flex;align-items:center;gap:10px;padding:13px 22px;border-radius:999px;
        font-size:13px;letter-spacing:.24em;text-transform:uppercase;font-weight:600;line-height:1;
        border:1px solid var(--fio);color:var(--corpo)}
.pilula.cheia{background:var(--acento);border-color:var(--acento);color:#fff}
.pilula.clara{background:#fff;border-color:#fff;color:var(--tinta);font-weight:700}

/* ---- Tipografia ---- */
h1,h2{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;letter-spacing:-.03em;line-height:.94}
em{font-style:italic;color:var(--acento)}
.xl{font-size:132px}
.g{font-size:104px}
.m{font-size:82px}
.corpo{font-size:27px;line-height:1.52;font-weight:400;color:var(--corpo);max-width:800px}
.corpo b{font-weight:600;color:inherit}
.miudo{font-size:15px;letter-spacing:.22em;text-transform:uppercase;font-weight:600;color:var(--fraco)}
.fonte{font-size:14px;letter-spacing:.1em;color:var(--fraco);font-weight:500;padding-top:18px;border-top:1px solid var(--fio)}

/* ---- EMENDA: o gatilho de swipe. ---------------------------------------
   Uma barra vermelha encostada na borda direita do slide N reaparece na borda
   esquerda do slide N+1, na mesma altura. Quando a pessoa desliza, a barra
   parece atravessar o corte — e o dedo continua. Carrossel panoramico tem 2x
   mais swipe que carrossel de slides soltos (ver estudo, item 5).
   Fica nas bordas de proposito: nunca encosta em texto. */
.emenda{position:absolute;width:14px;background:var(--acento);z-index:8}
.emenda.dir{right:0}
.emenda.esq{left:0}

/* Regua de progresso no pe. Diz quanto falta sem poluir. */
.progresso{position:absolute;left:0;bottom:0;height:5px;background:var(--acento);z-index:8}
.trilho{position:absolute;left:0;right:0;bottom:0;height:5px;background:var(--fio);z-index:7}
"""


def fontes(base=""):
    css = (RAIZ / "fontes" / "casa.css").read_text(encoding="utf-8")
    return css.replace("{BASE}", base)


def marca_topo(sub=SOB, base=""):
    return (f'<div class="logo"><img src="{base}logos/marca.png" alt="">'
            f'<div class="wm"><span class="nome">{ASSINATURA}</span>'
            f'<span class="sub">{sub}</span></div></div>')


def pe(dir_txt=None, arrasta=False):
    if arrasta:
        dir_txt = 'Arrasta <span style="font-family:\'DM Serif Display\',serif;font-style:italic;text-transform:none;letter-spacing:0;font-size:22px">&rarr;</span>'
    return (f'<div class="pe"><span class="marca">{HANDLE}</span>'
            f'<span>{dir_txt or WHATS}</span></div>')


def pagina(titulo, classes, topo_dir, meio, rodape, css_extra="",
           emenda=None, progresso=None, base=""):
    """Monta uma peca completa.

    emenda   = (lado, topo_px, altura_px) ou None — a barra que atravessa o corte.
    progresso= fracao 0..1 da regua no pe, ou None.
    """
    em = "".join(
        f'<div class="emenda {lado}" style="top:{topo}px;height:{alt}px"></div>'
        for lado, topo, alt in (emenda or []))
    pr = ""
    if progresso is not None:
        pr = (f'<div class="trilho"></div>'
              f'<div class="progresso" style="width:{round(progresso * L)}px"></div>')
    return f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{titulo}</title>
<style>{BASE.replace("{FONTES}", fontes(base))}
{css_extra}</style></head>
<body><div class="canvas {classes}">
  {em}
  <div class="topo">{marca_topo(base=base)}{topo_dir}</div>
  <div class="meio">{meio}</div>
  {rodape}{pr}
</div></body></html>"""


BASE = (BASE.replace("__L__", str(L)).replace("__A__", str(A))
            .replace("__TOKENS__", _TOKENS))
