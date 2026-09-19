# -*- coding: utf-8 -*-
"""
12 modelos — segunda geração.

A crítica que gerou este arquivo: o primeiro sistema (modelos.py) tinha um
único esqueleto (logo no topo, bloco de texto no meio, rodapé embaixo) e só
trocava cor e fonte de número. Isso não é variedade, é o mesmo post com roupa
diferente — e dá pra sentir isso rolando o feed, mesmo sem saber nomear.

Aqui cada função desenha a página inteira, do zero, sem esqueleto comum.
Fotografia real entra em 6 delas (fotos/, arquivos já no repo — não depende
de banco de imagem, que está bloqueado nesta rede). As outras 6 são só
tipografia e forma, alternando entre minimalismo central (uma coisa só, muito
espaço) e composição maximalista (várias camadas, tensão, ruído controlado).

    1  HERO-FOTO   foto   elaborado    full-bleed, texto na base
    2  MURO        —      minimalista  uma palavra, um plano de cor
    3  DIAGONAL    foto   elaborado    corte diagonal foto/tinta
    4  FICHA       —      elaborado    dossiê, carimbo, campos
    5  MEDALHAO    foto   médio        retrato circular flutuando
    6  CENTRAL     —      minimalista  um número, dead center
    7  POLAROID    foto   elaborado    retrato inclinado, moldura branca
    8  RECIBO      —      elaborado    nota fiscal, lista com pontilhado
    9  JANELA      foto   médio        foto emoldurada, passe-partout
   10  CARTAZ      —      maximalista  tipografia de cartaz, pesos empilhados
   11  METADE      foto   limpo        split vertical 50/50
   12  SELO        —      minimalista  selo circular, quase tudo vazio
"""
from pathlib import Path

import casa

FOTOS = Path(__file__).parent / "fotos"


def _fontes(base):
    return casa.fontes(base)


def _cabecalho(html, css):
    """Bloco <head> padrão: fontes, tokens de cor, reset. Sem o layout de casa.py —
    cada modelo define o próprio grid a partir daqui."""
    return f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{html}</title>
<style>
{{FONTES}}
:root{{__TOKENS__}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{casa.L}px;height:{casa.A}px;overflow:hidden;background:#000}}
body{{font-family:'DM Sans',system-ui,sans-serif}}
.tela{{position:relative;width:{casa.L}px;height:{casa.A}px;overflow:hidden}}
em{{font-style:italic}}
.grao{{position:absolute;inset:0;z-index:40;pointer-events:none;opacity:.4;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .13 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}
.marca{{display:inline-flex;align-items:center;gap:13px;line-height:1}}
.marca img{{width:38px;height:38px;object-fit:contain;flex-shrink:0}}
.marca b{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:22px}}
.marca span{{display:block;font-size:9px;letter-spacing:.44em;text-transform:uppercase;font-weight:600;color:var(--vermelho);margin-top:4px}}

/* ---- Sinais de mão humana (Canva, "Imperfect by Design", 2026) ----------
   Nada aqui é sujeira: é imperfeicao deliberada, no lugar certo. Fita
   adesiva em foto, sublinhado de marcador em vez de itálico o tempo todo,
   leve rotação em selos/etiquetas. O contramovimento ao polimento de IA. */
.fita{{position:absolute;width:86px;height:30px;background:rgba(245,241,234,.82);
      box-shadow:0 2px 6px rgba(0,0,0,.25);z-index:6}}
.fita::before{{content:"";position:absolute;inset:0;
      background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.04) 0 2px,transparent 2px 6px)}}
.marcador{{position:relative;white-space:nowrap}}
.marcador::after{{content:"";position:absolute;left:-4%;right:-4%;bottom:.06em;height:.34em;
      background:var(--vermelho);opacity:.32;z-index:-1;
      clip-path:polygon(0 18%,12% 0,29% 22%,47% 2%,63% 24%,81% 4%,100% 20%,100% 100%,0 100%)}}
.mono{{font-family:'Space Mono',monospace}}
{css}
</style></head><body>"""


def _fechar():
    return "</body></html>"


def _finaliza(nome, corpo, css, escuro_topo=True):
    doc = _cabecalho(nome, css) + corpo + _fechar()
    return doc.replace("{FONTES}", _fontes("../")).replace(
        "__TOKENS__", casa._TOKENS)


# ═══════════════════════════════════════════════════════ 1. HERO-FOTO ════
def hero_foto(foto, kicker, palavra, nota=None):
    """Foto de chão a teto. Lockup centralizado na base: uma frase curta em
    caixa-alta e negrito — como cartaz de cinema, não como slide de texto.
    O acento fino embaixo é a régua itálica da casa fazendo o contraponto."""
    css = """
    .hf-foto{position:absolute;inset:0;background-size:cover;background-position:center;
             filter:saturate(.86) contrast(1.08) brightness(.8)}
    .hf-scrim{position:absolute;inset:0;
      background:linear-gradient(180deg,rgba(8,8,10,.08) 0%,rgba(8,8,10,.18) 46%,rgba(8,8,10,.92) 80%,#08080a 100%)}
    .hf-topo{position:absolute;top:56px;left:64px;right:64px;display:flex;justify-content:center;align-items:center;z-index:5}
    .hf-topo .marca b, .hf-topo .marca span{color:#fff}
    .hf-kicker{position:absolute;left:0;right:0;bottom:326px;z-index:5;text-align:center;
               font-size:13px;letter-spacing:.42em;text-transform:uppercase;font-weight:700;color:var(--vermelho2);
               transform:rotate(-1.4deg)}
    .hf-base{position:absolute;left:64px;right:64px;bottom:96px;z-index:5;text-align:center}
    .hf-base h1{font-family:'DM Sans',sans-serif;font-weight:700;text-transform:uppercase;color:#fff;
                font-size:98px;line-height:.9;letter-spacing:-.01em}
    .hf-base h1 em{font-style:italic;font-family:'DM Serif Display',serif;text-transform:none;
                   font-weight:400;color:var(--vermelho2)}
    .hf-base .nota{display:block;margin-top:24px;font-family:'DM Serif Display',serif;font-style:italic;
                   font-weight:400;font-size:24px;color:rgba(255,255,255,.82);letter-spacing:.01em}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela">
      <div class="hf-foto" style="background-image:url('../fotos/{foto}')"></div>
      <div class="hf-scrim"></div>
      <div class="hf-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span></div>
      <div class="hf-kicker">{kicker}</div>
      <div class="hf-base"><h1>{palavra}</h1>{nota_html}</div>
      <div class="grao"></div>
    </div>"""
    return _finaliza("hero-foto", body, css)


# ═══════════════════════════════════════════════════════════ 2. MURO ═════
def muro(palavra, sub=None, fundo="tinta"):
    """O oposto do hero: uma parede de cor, uma palavra, nada mais. Isso é
    o que faz o olho descansar quando o feed inteiro é intenso."""
    cores = {"tinta": ("#111111", "#fff"), "papel": ("#F5F1EA", "#111111"),
             "vermelho": ("#FF0005", "#fff")}
    bg, fg = cores[fundo]
    css = f"""
    .mr{{position:absolute;inset:0;background:{bg};color:{fg};
        display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px}}
    .mr h1{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
           font-size:150px;line-height:.92;letter-spacing:-.03em;text-align:center;max-width:880px}}
    .mr .sub{{font-size:16px;letter-spacing:.34em;text-transform:uppercase;font-weight:600;
             opacity:.5;text-align:center}}
    .mr .marca{{position:absolute;bottom:56px;left:0;right:0;justify-content:center;opacity:.85}}
    .mr .marca b, .mr .marca span{{color:{fg}}}
    """
    sub_html = f'<div class="sub">{sub}</div>' if sub else ""
    body = f"""<div class="tela"><div class="mr">
      <h1>{palavra}</h1>{sub_html}
      <span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span>
      </div><div class="grao"></div></div>"""
    return _finaliza("muro", body, css)


# ═══════════════════════════════════════════════════════ 3. DIAGONAL ═════
def diagonal(foto, kicker, palavra, nota=None, invertido=False):
    """Corte diagonal separando foto e tinta. A geometria faz o que um
    scrim não faz: dá ao texto um plano próprio, sem competir com a imagem.
    Lockup centralizado na faixa de tinta — não mais parágrafo encostado."""
    clip_a = "polygon(0 0,100% 0,100% 42%,0 62%)" if not invertido else "polygon(0 0,100% 0,100% 62%,0 42%)"
    css = f"""
    .dg{{position:absolute;inset:0;background:var(--tinta)}}
    .dg-foto{{position:absolute;inset:0;background-size:cover;background-position:center;
             clip-path:{clip_a};filter:saturate(.82) contrast(1.1) brightness(.92)}}
    .dg-topo{{position:absolute;top:56px;left:64px;right:64px;display:flex;justify-content:space-between;z-index:5}}
    .dg-topo .marca b, .dg-topo .marca span{{color:#fff}}
    .dg-kicker{{font-size:12px;letter-spacing:.32em;text-transform:uppercase;font-weight:700;color:var(--vermelho2)}}
    .dg-corpo{{position:absolute;left:64px;right:64px;bottom:88px;z-index:5;text-align:center}}
    .dg-corpo h1{{font-family:'DM Sans',sans-serif;font-weight:700;text-transform:uppercase;color:#fff;
                 font-size:70px;line-height:.96;letter-spacing:-.01em}}
    .dg-corpo h1 em{{font-style:italic;font-family:'DM Serif Display',serif;text-transform:none;
                    font-weight:400;color:var(--vermelho2)}}
    .dg-corpo .nota{{display:block;margin-top:20px;font-family:'DM Serif Display',serif;font-style:italic;
                    font-weight:400;font-size:21px;color:rgba(255,255,255,.72)}}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela"><div class="dg">
      <div class="dg-foto" style="background-image:url('../fotos/{foto}')"></div>
      <div class="dg-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span>
        <span class="dg-kicker">{kicker}</span></div>
      <div class="dg-corpo"><h1>{palavra}</h1>{nota_html}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("diagonal", body, css)


# ═══════════════════════════════════════════════════════════ 4. FICHA ════
def ficha(numero, titulo, campos, nota=None):
    """Dossiê. Um carimbo, campos com rótulo e valor, régua fininha. É o
    modelo que faz o feed parecer arquivo confiável, não anúncio."""
    css = """
    .fc{position:absolute;inset:0;background:var(--papel);color:var(--tinta);padding:64px}
    .fc-topo{display:flex;justify-content:space-between;align-items:flex-start}
    .fc-topo .marca b{color:var(--tinta)}
    .fc-carimbo{border:3px solid var(--vermelho);color:var(--vermelho);padding:10px 18px;
               font-family:'DM Serif Display',serif;font-style:italic;font-size:22px;
               transform:rotate(-4deg);line-height:1}
    .fc-carimbo small{display:block;font-family:'Space Mono',monospace;font-style:normal;font-size:9px;
                      letter-spacing:.3em;text-transform:uppercase;font-weight:700;margin-top:4px}
    .fc h1{margin-top:64px;font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
          font-size:78px;line-height:1.0;letter-spacing:-.02em;max-width:880px}
    .fc h1 em{color:var(--vermelho)}
    .fc-campos{margin-top:56px;border-top:2px solid var(--tinta)}
    .fc-campo{display:flex;justify-content:space-between;align-items:baseline;gap:24px;
              padding:22px 0;border-bottom:1px solid rgba(17,17,17,.18);font-family:'Space Mono',monospace}
    .fc-campo .r{font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:rgba(17,17,17,.52)}
    .fc-campo .v{font-size:22px;font-weight:700;text-align:right}
    .fc-nota{margin-top:28px;font-size:16px;color:rgba(17,17,17,.55);line-height:1.5}
    """
    linhas = "".join(f'<div class="fc-campo"><span class="r">{r}</span><span class="v">{v}</span></div>'
                      for r, v in campos)
    nt = f'<p class="fc-nota">{nota}</p>' if nota else ""
    body = f"""<div class="tela"><div class="fc">
      <div class="fc-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span>
        <div class="fc-carimbo">{numero}<small>dossiê</small></div></div>
      <h1>{titulo}</h1>
      <div class="fc-campos">{linhas}</div>{nt}
      </div><div class="grao"></div></div>"""
    return _finaliza("ficha", body, css)


# ═══════════════════════════════════════════════════════ 5. MEDALHÃO ═════
def medalhao(foto, kicker, palavra, nota=None):
    """Retrato circular flutuando sobre plano de cor. Nem full-bleed nem
    minimalista puro — o meio-termo que dá respiro à foto sem apagá-la."""
    css = """
    .md{position:absolute;inset:0;background:var(--tinta);color:#fff;padding:64px;
        display:flex;flex-direction:column}
    .md-topo{display:flex;justify-content:space-between;align-items:center}
    .md-topo .marca b, .md-topo .marca span{color:#fff}
    .md-kicker{font-size:12px;letter-spacing:.32em;text-transform:uppercase;font-weight:700;color:var(--vermelho2);
               display:inline-block;transform:rotate(1.6deg)}
    .md-corpo{flex:1;display:flex;align-items:center;gap:56px;margin-top:20px}
    .md-foto{width:420px;height:420px;border-radius:50%;background-size:cover;background-position:center;
             flex-shrink:0;box-shadow:0 0 0 3px var(--vermelho),0 30px 70px -20px rgba(0,0,0,.7)}
    .md-txt h1{font-family:'DM Sans',sans-serif;font-weight:700;text-transform:uppercase;
               font-size:60px;line-height:.96;letter-spacing:-.01em}
    .md-txt h1 em{font-style:italic;font-family:'DM Serif Display',serif;text-transform:none;
                  font-weight:400;color:var(--vermelho2)}
    .md-txt .nota{display:block;margin-top:20px;font-family:'DM Serif Display',serif;font-style:italic;
                  font-weight:400;font-size:21px;color:rgba(255,255,255,.72)}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela"><div class="md">
      <div class="md-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span>
        <span class="md-kicker">{kicker}</span></div>
      <div class="md-corpo">
        <div class="md-foto" style="background-image:url('../fotos/{foto}')"></div>
        <div class="md-txt"><h1>{palavra}</h1>{nota_html}</div>
      </div></div><div class="grao"></div></div>"""
    return _finaliza("medalhao", body, css)


# ═══════════════════════════════════════════════════════════ 6. CENTRAL ══
def central(numero, sufixo, legenda, fundo="vermelho"):
    """Minimalismo puro, versão número: uma cifra do tamanho da tela,
    dead center, sem lista nem gráfico embaixo. É a prova reduzida ao osso."""
    cores = {"vermelho": ("#FF0005", "#fff"), "tinta": ("#111111", "#fff"),
             "papel": ("#F5F1EA", "#111111")}
    bg, fg = cores[fundo]
    num_cor = "#fff" if fundo != "papel" else "var(--vermelho)"
    css = f"""
    .ct{{position:absolute;inset:0;background:{bg};color:{fg};
        display:flex;flex-direction:column;align-items:center;justify-content:center}}
    .ct .cifra{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;color:{num_cor};
               font-size:400px;line-height:.78;letter-spacing:-.04em;display:flex;align-items:baseline}}
    .ct .cifra sup{{font-size:160px}}
    .ct .legenda{{margin-top:20px;font-size:22px;letter-spacing:.06em;text-align:center;max-width:640px;
                 font-weight:500;opacity:.85}}
    .ct .marca{{position:absolute;bottom:56px;left:0;right:0;justify-content:center;opacity:.85}}
    .ct .marca b, .ct .marca span{{color:{fg}}}
    """
    body = f"""<div class="tela"><div class="ct">
      <div class="cifra">{numero}<sup>{sufixo}</sup></div>
      <div class="legenda">{legenda}</div>
      <span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span>
      </div><div class="grao"></div></div>"""
    return _finaliza("central", body, css)


# ═══════════════════════════════════════════════════════════ 7. POLAROID ═
def polaroid(foto, legenda, palavra):
    """Retrato inclinado com moldura branca sobre fundo escuro texturizado.
    O único modelo do sistema que se permite um objeto flutuante e sombra dura."""
    css = """
    .pl{position:absolute;inset:0;background:linear-gradient(160deg,#1a0d0d 0%,#111 55%,#000 100%);
        color:#fff;padding:64px;display:flex;flex-direction:column}
    .pl-topo{display:flex;justify-content:space-between;align-items:center}
    .pl-topo .marca b, .pl-topo .marca span{color:#fff}
    .pl-corpo{flex:1;display:flex;align-items:center;gap:64px;margin-top:10px}
    .pl-foto{width:420px;background:#fff;padding:18px 18px 70px;transform:rotate(-5deg);
             box-shadow:0 35px 80px -20px rgba(0,0,0,.7);flex-shrink:0;position:relative}
    .pl-foto .img{width:100%;height:420px;background-size:cover;background-position:center}
    .pl-foto .legenda{position:absolute;left:18px;bottom:18px;font-family:'DM Serif Display',serif;
                      font-style:italic;font-size:19px;color:#222}
    .pl-foto .fita{top:-16px;left:50%;margin-left:-43px;transform:rotate(-3deg)}
    .pl-txt h1{font-family:'DM Sans',sans-serif;font-weight:700;text-transform:uppercase;
              font-size:66px;line-height:.94;letter-spacing:-.01em}
    .pl-txt h1 em{font-style:italic;font-family:'DM Serif Display',serif;text-transform:none;
                  font-weight:400;color:var(--vermelho2)}
    """
    body = f"""<div class="tela"><div class="pl">
      <div class="pl-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span></div>
      <div class="pl-corpo">
        <div class="pl-foto"><div class="fita"></div>
          <div class="img" style="background-image:url('../fotos/{foto}')"></div>
          <div class="legenda">{legenda}</div></div>
        <div class="pl-txt"><h1>{palavra}</h1></div>
      </div></div><div class="grao"></div></div>"""
    return _finaliza("polaroid", body, css)


# ═══════════════════════════════════════════════════════════ 8. RECIBO ═══
def recibo(titulo, itens, total_r, total_v):
    """Nota fiscal. Lista com pontilhado até o valor, como recibo de loja.
    Novidade formal que ainda serve para checklist e comparação de preço."""
    css = """
    .rc{position:absolute;inset:0;background:var(--papel);color:var(--tinta);
        padding:64px;display:flex;flex-direction:column}
    .rc-topo{text-align:center}
    .rc-topo .marca{justify-content:center}
    .rc-topo .marca b{color:var(--tinta)}
    .rc h1{margin-top:36px;text-align:center;font-family:'DM Serif Display',serif;font-style:italic;
          font-weight:400;font-size:52px;line-height:1.08;letter-spacing:-.01em}
    .rc h1 em{color:var(--vermelho)}
    .rc-trilha{border-top:2px dashed rgba(17,17,17,.35);margin-top:44px;padding-top:8px;flex:1;
              font-family:'Space Mono',monospace}
    .rc-item{display:flex;align-items:baseline;gap:14px;padding:18px 0;
             border-bottom:1px dashed rgba(17,17,17,.28);font-size:18px}
    .rc-item .pontos{flex:1;border-bottom:1px dotted rgba(17,17,17,.4);height:0;transform:translateY(-6px)}
    .rc-item .v{font-weight:700;white-space:nowrap}
    .rc-total{display:flex;justify-content:space-between;align-items:baseline;
              border-top:2px dashed rgba(17,17,17,.35);padding-top:22px;margin-top:12px;
              font-family:'Space Mono',monospace}
    .rc-total .r{font-size:13px;letter-spacing:.14em;text-transform:uppercase;font-weight:700}
    .rc-total .v{font-size:44px;font-weight:700;color:var(--vermelho)}
    """
    linhas = "".join(
        f'<div class="rc-item"><span>{t}</span><span class="pontos"></span><span class="v">{v}</span></div>'
        for t, v in itens)
    body = f"""<div class="tela"><div class="rc">
      <div class="rc-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span></div>
      <h1>{titulo}</h1>
      <div class="rc-trilha">{linhas}
        <div class="rc-total"><span class="r">{total_r}</span><span class="v">{total_v}</span></div>
      </div></div><div class="grao"></div></div>"""
    return _finaliza("recibo", body, css)


# ═══════════════════════════════════════════════════════════ 9. JANELA ═══
def janela(foto, palavra, nota=None):
    """Foto emoldurada com passe-partout largo, como quadro de galeria.
    Contraste com o hero: aqui a foto é contida, não invasiva."""
    css = """
    .jn{position:absolute;inset:0;background:var(--tinta);color:#fff;
        display:flex;flex-direction:column;align-items:center;padding:70px 90px 60px}
    .jn-topo{width:100%;display:flex;justify-content:space-between;align-items:center}
    .jn-topo .marca b, .jn-topo .marca span{color:#fff}
    .jn-moldura{margin-top:52px;padding:22px;border:1px solid rgba(255,255,255,.25);flex:1;width:100%;
               display:flex;align-items:center;justify-content:center;position:relative;
               transform:rotate(-1.1deg)}
    .jn-moldura .fita{transform:rotate(4deg)}
    .jn-moldura .fita.a{top:-14px;left:36px}
    .jn-moldura .fita.b{bottom:-14px;right:36px;transform:rotate(-6deg)}
    .jn-foto{width:100%;height:100%;background-size:cover;background-position:center;
             filter:saturate(.9) contrast(1.05)}
    .jn-legenda{margin-top:34px;text-align:center}
    .jn-legenda h1{font-family:'DM Sans',sans-serif;font-weight:700;text-transform:uppercase;
                  font-size:50px;line-height:.98;letter-spacing:-.01em}
    .jn-legenda h1 em{font-style:italic;font-family:'DM Serif Display',serif;text-transform:none;
                      font-weight:400;color:var(--vermelho2)}
    .jn-legenda .nota{display:block;margin-top:16px;font-family:'DM Serif Display',serif;font-style:italic;
                      font-weight:400;font-size:19px;color:rgba(255,255,255,.6)}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela"><div class="jn">
      <div class="jn-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span></div>
      <div class="jn-moldura"><div class="fita a"></div><div class="fita b"></div>
        <div class="jn-foto" style="background-image:url('../fotos/{foto}')"></div></div>
      <div class="jn-legenda"><h1>{palavra}</h1>{nota_html}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("janela", body, css)


# ═══════════════════════════════════════════════════════════ 10. CARTAZ ══
def cartaz(linha1, linha2_em, linha3, rodape):
    """Maximalismo tipográfico: três tamanhos de peso empilhados, ocupando
    a tela de ponta a ponta, como cartaz de rua. Nenhuma imagem, pura tensão
    de escala — o contraponto do MURO, que é a mesma ideia em silêncio."""
    css = """
    .cz{position:absolute;inset:0;background:var(--tinta);color:#fff;padding:56px 60px;
        display:flex;flex-direction:column;justify-content:space-between}
    .cz-topo{display:flex;justify-content:space-between;align-items:center}
    .cz-topo .marca b, .cz-topo .marca span{color:#fff}
    .cz-pilha{display:flex;flex-direction:column;gap:0}
    .cz-pilha .a{font-family:'DM Sans',sans-serif;font-weight:700;font-size:44px;
                letter-spacing:-.01em;text-transform:uppercase;color:rgba(255,255,255,.5)}
    .cz-pilha .b{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
                font-size:156px;line-height:.86;letter-spacing:-.03em;color:var(--vermelho2);margin:6px 0 10px}
    .cz-pilha .c{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
                font-size:88px;line-height:.96;letter-spacing:-.02em}
    .cz-rodape{border-top:1px solid rgba(255,255,255,.22);padding-top:22px;
              font-size:14px;letter-spacing:.24em;text-transform:uppercase;font-weight:600;
              color:rgba(255,255,255,.6)}
    """
    body = f"""<div class="tela"><div class="cz">
      <div class="cz-topo"><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span></div>
      <div class="cz-pilha"><span class="a">{linha1}</span><span class="b">{linha2_em}</span><span class="c">{linha3}</span></div>
      <div class="cz-rodape">{rodape}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("cartaz", body, css)


# ═══════════════════════════════════════════════════════════ 11. METADE ══
def metade(foto, kicker, palavra, nota=None, botao=None, foto_esquerda=False):
    """Split 50/50 limpo. Metade cor sólida com texto, metade foto até a
    borda — sem scrim, porque o texto não pisa na imagem."""
    ordem = "row-reverse" if foto_esquerda else "row"
    css = f"""
    .mt{{position:absolute;inset:0;display:flex;flex-direction:{ordem}}}
    .mt-foto{{width:50%;height:100%;background-size:cover;background-position:center;
             filter:saturate(.88) contrast(1.05)}}
    .mt-txt{{width:50%;height:100%;background:var(--tinta);color:#fff;padding:60px 52px;
            display:flex;flex-direction:column;justify-content:space-between}}
    .mt-txt .marca b, .mt-txt .marca span{{color:#fff}}
    .mt-kicker{{font-size:12px;letter-spacing:.28em;text-transform:uppercase;font-weight:700;color:var(--vermelho2)}}
    .mt-meio h1{{font-family:'DM Sans',sans-serif;font-weight:700;text-transform:uppercase;
               font-size:56px;line-height:.98;letter-spacing:-.01em;margin-bottom:20px}}
    .mt-meio h1 em{{font-style:italic;font-family:'DM Serif Display',serif;text-transform:none;
                   font-weight:400;color:var(--vermelho2)}}
    .mt-meio .nota{{display:block;font-family:'DM Serif Display',serif;font-style:italic;
                   font-weight:400;font-size:19px;color:rgba(255,255,255,.68)}}
    .mt-botao{{display:inline-flex;align-self:flex-start;padding:15px 24px;background:#fff;color:var(--tinta);
              border-radius:999px;font-size:13px;letter-spacing:.2em;text-transform:uppercase;font-weight:700}}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    btn = f'<span class="mt-botao">{botao}</span>' if botao else '<span></span>'
    body = f"""<div class="tela"><div class="mt">
      <div class="mt-foto" style="background-image:url('../fotos/{foto}')"></div>
      <div class="mt-txt">
        <div><span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span></div>
        <div class="mt-meio"><span class="mt-kicker">{kicker}</span><h1 style="margin-top:18px">{palavra}</h1>{nota_html}</div>
        {btn}
      </div></div><div class="grao"></div></div>"""
    return _finaliza("metade", body, css)


# ═══════════════════════════════════════════════════════════ 12. SELO ════
def selo(texto_anel, palavra, fundo="papel"):
    """Selo circular — anéis concêntricos em CSS, texto correndo na borda
    imaginária como um carimbo oficial. Quase tudo vazio ao redor: o segundo
    ponto minimalista do sistema, em chave gráfica em vez de tipográfica."""
    cores = {"papel": ("#F5F1EA", "#111111"), "tinta": ("#111111", "#fff")}
    bg, fg = cores[fundo]
    css = f"""
    .sl{{position:absolute;inset:0;background:{bg};color:{fg};
        display:flex;flex-direction:column;align-items:center;justify-content:center}}
    .sl-anel{{width:460px;height:460px;border-radius:50%;border:2px solid var(--vermelho);
             display:flex;align-items:center;justify-content:center;position:relative}}
    .sl-anel::before{{content:"";position:absolute;inset:26px;border-radius:50%;border:1px solid var(--vermelho);opacity:.5}}
    .sl-palavra{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
                font-size:70px;text-align:center;letter-spacing:-.02em;max-width:320px;line-height:.98}}
    .sl-palavra em{{color:var(--vermelho)}}
    .sl-anelTexto{{position:absolute;inset:0;animation:none}}
    .sl-legenda{{margin-top:34px;font-size:13px;letter-spacing:.4em;text-transform:uppercase;
               font-weight:700;color:var(--vermelho)}}
    .sl .marca{{position:absolute;bottom:56px;left:0;right:0;justify-content:center;opacity:.85}}
    .sl .marca b, .sl .marca span{{color:{fg}}}
    """
    body = f"""<div class="tela"><div class="sl">
      <div class="sl-anel"><div class="sl-palavra">{palavra}</div></div>
      <div class="sl-legenda">{texto_anel}</div>
      <span class="marca"><img src="../logos/marca.png"><b>Calazans Lumina</b></span>
      </div><div class="grao"></div></div>"""
    return _finaliza("selo", body, css)
