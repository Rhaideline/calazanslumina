# -*- coding: utf-8 -*-
"""
Cenas de reel na linguagem de modelos3 — 1080x1920.

O motor antigo (reels.py) vestia toda cena igual: logo no topo, chapéu em
pílula, bolinhas de progresso e caixa-alta centralizada. Era o mesmo vício
dos posts antigos, só que em vídeo. Aqui a cena não tem enfeite: o que
muda entre uma e outra é o dispositivo — foto cheia, tipo sozinho, faixa
vermelha atravessada, algarismo gigante.

Limite declarado: continua sendo foto parada com movimento de câmera, não
filmagem. Vídeo de celular da própria Rhaideline bate isto (ESTUDO-CRAFT
-2026.md, item 11). Isto é para publicar enquanto ela não grava.
"""
import re

import casa

L, A = 1080, 1920
SERIF = "'Bodoni Moda',serif"
SANS = "'DM Sans',sans-serif"
MONO = "'Space Mono',monospace"


def _cabe(texto, base, largura=900, avanco=.475):
    """Tamanho de fonte que faz a linha mais longa caber na largura útil.

    Bodoni Moda itálico anda perto de .475em por caractere. Sem isto eu
    teria de acertar o corpo de 68 cenas na mão — e erraria em algumas,
    que foi exatamente o que aconteceu na primeira leva de posts."""
    linhas = [re.sub(r"<[^>]+>", "", l) for l in str(texto).split("<br>")]
    maior = max((len(l) for l in linhas), default=1) or 1
    return int(min(base, largura / (avanco * maior)))


def _pagina(nome, css, corpo):
    doc = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{nome}</title>
<style>
{{FONTES}}
:root{{__TOKENS__}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:#000}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
em{{font-style:italic;color:var(--vermelho2)}}
.grao{{position:absolute;inset:0;z-index:60;pointer-events:none;opacity:.34;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .13 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}
.assina{{position:absolute;left:72px;bottom:120px;z-index:50;font-size:12px;
        letter-spacing:.34em;text-transform:uppercase;font-weight:600}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes("../../")).replace(
        "__TOKENS__", casa._TOKENS)


def _assina(mostra, cor):
    return f'<div class="assina" style="color:{cor}">@calazanslumina</div>' if mostra else ""


# ─────────────────────────────────────────────────────────── ABERTURA ───
def abertura(foto, titulo, crop="center", assina=False):
    """Foto cheia sob veladura escura, frase aterrissando embaixo à esquerda.
    É a veladura dos posts virada para o retrato."""
    css = f"""
    .ab{{position:absolute;inset:0;background:var(--tinta);overflow:hidden}}
    .ab .foto{{position:absolute;inset:-30px;background-image:url('../../fotos/{foto}');
             background-size:cover;background-position:{crop};
             filter:saturate(.78) contrast(1.16) brightness(.62)}}
    .ab .veu{{position:absolute;inset:0;background:linear-gradient(180deg,
             rgba(10,6,6,.5) 0%,rgba(10,6,6,.06) 34%,rgba(10,6,6,.55) 74%,rgba(10,6,6,.94) 100%)}}
    .ab h1{{position:absolute;left:72px;right:72px;bottom:300px;z-index:5;
           font-family:{SERIF};font-style:italic;font-weight:720;font-size:{_cabe(titulo,136)}px;
           line-height:.96;letter-spacing:-.03em;color:#fff}}
    """
    return _pagina("abertura", css, f"""<div class="tela"><div class="ab">
      <div class="foto"></div><div class="veu"></div>
      <h1>{titulo}</h1>{_assina(assina, "rgba(255,255,255,.6)")}
      </div><div class="grao"></div></div>""")


# ─────────────────────────────────────────────────────────────── DITO ───
def dito(texto, fundo="tinta", assina=False):
    """Só tipo, sem foto. É o silêncio entre duas imagens — e é o que faz a
    foto seguinte pesar de novo."""
    cores = {"tinta": ("#111111", "#fff"), "papel": ("#F5F1EA", "#111111"),
             "brasa": ("#1A0D0D", "#fff")}
    bg, fg = cores[fundo]
    css = f"""
    .dt{{position:absolute;inset:0;background:{bg};color:{fg};
        padding:0 72px;display:flex;flex-direction:column;justify-content:center}}
    .dt h1{{font-family:{SERIF};font-style:italic;font-weight:700;font-size:{_cabe(texto,152)}px;
           line-height:1.0;letter-spacing:-.03em}}
    """
    cor_a = "rgba(255,255,255,.45)" if fundo != "papel" else "rgba(17,17,17,.4)"
    return _pagina("dito", css, f"""<div class="tela"><div class="dt">
      <h1>{texto}</h1>{_assina(assina, cor_a)}
      </div><div class="grao"></div></div>""")


# ───────────────────────────────────────────────────────────── TRAVESSA ───
def travessa(foto, titulo, crop="center", assina=False):
    """Foto em cima, faixa vermelha embaixo, frase dentro da faixa.

    Na primeira versão a frase atravessava a divisa, como nos posts. Em
    retrato não funciona: metade dela cai sobre a foto escura e o destaque
    em tinta some. Aqui a faixa tem serventia — é onde o texto mora."""
    css = f"""
    .tv{{position:absolute;inset:0;background:var(--vermelho)}}
    .tv .foto{{position:absolute;left:0;right:0;top:0;height:76%;
              background-image:url('../../fotos/{foto}');background-size:cover;
              background-position:{crop};filter:saturate(.85) contrast(1.15) brightness(.74)}}
    .tv .foto::after{{content:"";position:absolute;inset:0;
                     background:linear-gradient(180deg,rgba(10,6,6,.42) 0%,
                     rgba(10,6,6,0) 32%,rgba(10,6,6,.3) 100%)}}
    .tv .faixa{{position:absolute;left:0;right:0;top:76%;bottom:0;
               background:var(--vermelho);display:flex;align-items:center;
               padding:0 72px 40px}}
    .tv h1{{font-family:{SERIF};font-style:italic;font-weight:740;
           font-size:{_cabe(titulo,118)}px;line-height:.98;letter-spacing:-.03em;color:#fff}}
    .tv h1 em{{color:var(--tinta)}}
    """
    return _pagina("travessa", css, f"""<div class="tela"><div class="tv">
      <div class="foto"></div>
      <div class="faixa"><h1>{titulo}</h1></div>
      {_assina(assina, "rgba(255,255,255,.7)")}
      </div><div class="grao"></div></div>""")


# ────────────────────────────────────────────────────────────── CIFRA ───
def cifra(num, sufixo, legenda, assina=False):
    """Algarismo gigante em DM Sans — o itálico do Bodoni faz o 5 parecer
    dois sinais, então número grande sozinho nunca vai de serifa aqui.
    Atrás dele, o mesmo número vazado em serifa fazendo arquitetura."""
    css = f"""
    .cf{{position:absolute;inset:0;background:var(--tinta);color:#fff;
        padding:0 72px;display:flex;flex-direction:column;justify-content:center}}
    .cf .fantasma{{position:absolute;right:-70px;top:60px;font-family:{SERIF};
                  font-style:italic;font-weight:900;font-size:760px;line-height:.72;
                  color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.11);
                  pointer-events:none}}
    .cf .n{{position:relative;z-index:3;font-family:{SANS};font-weight:700;
           font-size:268px;line-height:.86;letter-spacing:-.04em;color:var(--vermelho2)}}
    .cf .n sup{{font-size:96px;vertical-align:super;letter-spacing:0}}
    .cf p{{position:relative;z-index:3;margin-top:30px;font-family:{SERIF};
          font-style:italic;font-weight:620;font-size:{_cabe(legenda,84,900,.44)}px;line-height:1.04;
          letter-spacing:-.02em;color:#fff}}
    """
    sup = f"<sup>{sufixo}</sup>" if sufixo else ""
    return _pagina("cifra", css, f"""<div class="tela"><div class="cf">
      <div class="fantasma">{num}</div>
      <div class="n">{num}{sup}</div><p>{legenda}</p>
      {_assina(assina, "rgba(255,255,255,.4)")}
      </div><div class="grao"></div></div>""")


# ───────────────────────────────────────────────────────────── VAZADO ───
def vazado(linha_cheia, linha_vazada, nota=None, assina=True):
    """O fecho. Vermelho chapado, metade da frase preenchida e metade só
    contorno — é o mesmo cartão que fecha todos os carrosséis."""
    _fs = min(_cabe(linha_cheia, 134), _cabe(linha_vazada, 134))
    css = f"""
    .vz{{position:absolute;inset:0;background:var(--vermelho);color:#fff;
        padding:0 72px;display:flex;flex-direction:column;justify-content:center;gap:6px}}
    .vz .cheia{{font-family:{SERIF};font-style:italic;font-weight:780;font-size:{_fs}px;
               line-height:1.02;letter-spacing:-.025em}}
    .vz .vazada{{font-family:{SERIF};font-style:italic;font-weight:820;font-size:{_fs}px;
                line-height:1.02;letter-spacing:-.025em;
                color:transparent;-webkit-text-stroke:3px #fff}}
    .vz .nota{{margin-top:52px;font-family:{MONO};font-size:15px;letter-spacing:.24em;
              text-transform:uppercase;color:rgba(255,255,255,.8)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("vazado", css, f"""<div class="tela"><div class="vz">
      <div class="cheia">{linha_cheia}</div>
      <div class="vazada">{linha_vazada}</div>{nt}
      {_assina(assina, "rgba(255,255,255,.62)")}
      </div><div class="grao"></div></div>""")
