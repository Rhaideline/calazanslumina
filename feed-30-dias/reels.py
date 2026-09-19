# -*- coding: utf-8 -*-
"""
Motor de reel: mesma linguagem visual dos posts (caixa-alta negrito + acento
itálico fino, foto real, sinais de mão humana), 1080x1920, uma cena por frame.

Limite que preciso deixar declarado: isto é o melhor placeholder possível
com o que existe no repositório — foto de banco parada com movimento de
câmera (Ken Burns), não filmagem real. A pesquisa de B2B é clara que vídeo
de celular da própria Rhaideline bate qualquer coisa montada assim (ver
ESTUDO-CRAFT-2026.md, item 11). Isso aqui é para publicar enquanto ela não
regrava — não é o teto do que o reel pode ser.
"""
from pathlib import Path

import casa

L, A = 1080, 1920
FOTOS = Path(__file__).parent / "fotos"


def _cabecalho(titulo, css):
    return f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{titulo}</title>
<style>
{{FONTES}}
:root{{__TOKENS__}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:#000}}
body{{font-family:'DM Sans',system-ui,sans-serif}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
em{{font-style:italic}}
.grao{{position:absolute;inset:0;z-index:40;pointer-events:none;opacity:.38;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .13 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}
.marca{{position:absolute;top:64px;left:0;right:0;display:flex;justify-content:center;
       align-items:center;gap:12px;z-index:6}}
.marca img{{width:34px;height:34px;object-fit:contain}}
.marca b{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:19px;color:#fff}}
.pontos{{position:absolute;top:118px;left:0;right:0;display:flex;justify-content:center;gap:8px;z-index:6}}
.pontos i{{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.3)}}
.pontos i.atual{{background:var(--vermelho2);width:18px;border-radius:3px}}
{css}
</style></head><body>"""


def _fechar():
    return "</body></html>"


def _finaliza(nome, corpo, css):
    doc = _cabecalho(nome, css) + corpo + _fechar()
    return doc.replace("{FONTES}", casa.fontes("../../")).replace(
        "__TOKENS__", casa._TOKENS)


def _marcadores(n, atual):
    return "".join(f'<i class="{"atual" if i == atual else ""}"></i>' for i in range(n))


def cena(foto, tipo, txt, indice, total, kicker=None, num=None, suf=None,
         crop="center", zoom_dir="in"):
    """
    tipo: "hook" | "linha" | "cta"  -> caixa-alta negrito, tamanhos diferentes
          "stat"                    -> número grande em itálico serifado
    crop: posição do background-position (varia o enquadramento entre cenas
          da mesma foto, então reaproveitar a mesma imagem não repete o plano)
    zoom_dir: "in" ou "out" — para o ffmpeg escolher a direção do Ken Burns
    """
    tamanhos = {"hook": 108, "linha": 84, "cta": 90}
    fs = tamanhos.get(tipo, 84)
    css = f"""
    .cn-foto{{position:absolute;inset:-40px;background-image:url('../../fotos/{foto}');
             background-size:cover;background-position:{crop};
             filter:saturate(.85) contrast(1.1) brightness(.78)}}
    .cn-scrim{{position:absolute;inset:0;
      background:linear-gradient(180deg,rgba(8,8,10,.55) 0%,rgba(8,8,10,.12) 30%,rgba(8,8,10,.2) 62%,rgba(8,8,10,.86) 100%)}}
    .cn-kicker{{position:absolute;left:64px;right:64px;top:230px;text-align:center;z-index:5;
               font-size:14px;letter-spacing:.4em;text-transform:uppercase;font-weight:700;color:var(--vermelho2)}}
    .cn-corpo{{position:absolute;left:64px;right:64px;top:50%;transform:translateY(-50%);z-index:5;text-align:center}}
    .cn-corpo h1{{font-family:'DM Sans',sans-serif;font-weight:700;text-transform:uppercase;color:#fff;
                 font-size:{fs}px;line-height:.96;letter-spacing:-.01em}}
    .cn-corpo h1 em{{font-style:italic;font-family:'DM Serif Display',serif;text-transform:none;
                    font-weight:400;color:var(--vermelho2)}}
    .cn-stat{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;color:#fff;
             font-size:240px;line-height:.8;letter-spacing:-.03em}}
    .cn-stat sup{{font-size:100px;color:var(--vermelho2)}}
    .cn-legenda{{margin-top:20px;font-size:22px;color:rgba(255,255,255,.82);font-weight:500;
                max-width:760px;margin-left:auto;margin-right:auto;line-height:1.4}}
    .cn-pe{{position:absolute;left:0;right:0;bottom:150px;text-align:center;z-index:5;
           font-size:13px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:rgba(255,255,255,.7)}}
    """
    if tipo == "stat":
        corpo_html = (f'<div class="cn-corpo"><div class="cn-stat">{num}'
                       f'<sup>{suf or ""}</sup></div><p class="cn-legenda">{txt}</p></div>')
    else:
        corpo_html = f'<div class="cn-corpo"><h1>{txt}</h1></div>'
    kicker_html = f'<div class="cn-kicker">{kicker}</div>' if kicker else ""
    pe_html = '<div class="cn-pe">@calazanslumina</div>' if indice == total - 1 else ""
    body = f"""<div class="tela">
      <div class="cn-foto" data-zoom="{zoom_dir}"></div>
      <div class="cn-scrim"></div>
      <div class="marca"><img src="../../logos/marca.png"><b>Calazans Lumina</b></div>
      <div class="pontos">{_marcadores(total, indice)}</div>
      {kicker_html}
      {corpo_html}
      {pe_html}
      <div class="grao"></div>
    </div>"""
    return _finaliza(f"cena-{indice}", body, css)
