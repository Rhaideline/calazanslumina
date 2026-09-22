# -*- coding: utf-8 -*-
"""
Modelo do perfil pessoal @rhaicalazans — carrossel de retrato.

É a estrutura da referência que ela mandou (@dradunniabaldissera): a mesma
foto da pessoa nos dez slides, capa em caixa-baixa pesada e sem serifa, e
o miolo numerado em serifa fina. O que sustenta a peça não é recurso
gráfico nenhum — é o rosto. Por isso aqui só existem dois modelos, e o
trabalho de design é sumir.

Diferença em relação ao feed da agência: a assinatura é @rhaicalazans e o
vermelho quase não entra. Perfil pessoal falando de maternidade com a
paleta de agência em cima vira anúncio.
"""
import re

import casa

L, A = 1080, 1440
SERIF = "'DM Serif Display',serif"     # sobre foto, não Bodoni
BODONI = "'Bodoni Moda',serif"
SANS = "'DM Sans',sans-serif"

HANDLE = "@rhaicalazans"


def _pagina(nome, css, corpo, base="../../"):
    doc = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{nome}</title>
<style>
{{FONTES}}
:root{{__TOKENS__}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:#000}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
.foto{{position:absolute;inset:0;background-size:cover;background-position:center 30%;
      filter:contrast(1.04) brightness(1.04)}}
.grao{{position:absolute;inset:0;z-index:60;pointer-events:none;opacity:.26;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .13 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}
.selo{{position:absolute;left:62px;bottom:52px;z-index:50;font-size:12px;
      letter-spacing:.3em;text-transform:uppercase;font-weight:600;
      color:rgba(255,255,255,.62)}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes(base)).replace("__TOKENS__", casa._TOKENS)


def _corpo_fs(texto, base, largura=920, avanco=.5):
    """Corpo que faz a linha mais longa caber. Texto de conselho tem tamanho
    irregular por natureza — não dá para fixar um número e rezar."""
    linhas = [re.sub(r"<[^>]+>", "", l) for l in str(texto).split("<br>")]
    maior = max((len(l) for l in linhas), default=1) or 1
    return int(min(base, largura / (avanco * maior)))


# ════════════════════════════════════════════════════════════════ CAPA ═══
def capa(foto, titulo, base="../../"):
    """Retrato cheio, frase pesada embaixo e o arroba na vertical na borda.

    A referência usa caixa-baixa em sem-serifa gorda na capa e serifa só no
    miolo. Funciona: a capa precisa ser lida rolando o feed, o miolo precisa
    ser lido parado."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:linear-gradient(180deg,
         rgba(8,8,10,.2) 0%,rgba(8,8,10,0) 24%,rgba(8,8,10,.2) 58%,
         rgba(8,8,10,.8) 100%)}}
    h1{{position:absolute;left:62px;right:150px;bottom:224px;z-index:6;
       font-family:{SANS};font-weight:700;font-size:{_corpo_fs(titulo, 86, 860, .5)}px;
       line-height:1.06;letter-spacing:-.025em;color:#fff;
       text-shadow:0 2px 30px rgba(0,0,0,.4)}}
    .lombada{{position:absolute;right:38px;top:0;bottom:0;z-index:6;
             display:flex;align-items:center;writing-mode:vertical-rl;
             font-size:15px;letter-spacing:.16em;font-weight:500;
             color:rgba(255,255,255,.8)}}
    """
    return _pagina("capa", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="lombada">{HANDLE}</div>
      <h1>{titulo}</h1>
      <div class="grao"></div></div>""", base)


# ═══════════════════════════════════════════════════════════════ ITEM ════
def item(foto, numero, texto, base="../../"):
    """Slide numerado: algarismo em serifa, conselho em serifa embaixo.

    A serifa fina em cima de foto só se sustenta com véu e sombra — sem
    isso a haste desaparece nos claros do rosto. O eixo óptico do Bodoni
    variável engrossa o filete sozinho neste corpo, o que ajuda."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:linear-gradient(180deg,
         rgba(8,8,10,.16) 0%,rgba(8,8,10,0) 20%,rgba(8,8,10,.26) 46%,
         rgba(8,8,10,.72) 74%,rgba(8,8,10,.86) 100%)}}
    .bloco{{position:absolute;left:62px;right:96px;top:50%;z-index:6;
           text-shadow:0 2px 22px rgba(0,0,0,.7),0 1px 4px rgba(0,0,0,.5)}}
    .n{{font-family:{SERIF};font-size:56px;line-height:1;color:#fff;
       margin-bottom:14px}}
    p{{font-family:{SERIF};font-size:{_corpo_fs(texto, 56, 900, .485)}px;
      line-height:1.26;letter-spacing:-.004em;color:#fff}}
    """
    return _pagina(f"item-{numero}", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="bloco"><div class="n">{numero}.</div><p>{texto}</p></div>
      <div class="selo">{HANDLE}</div>
      <div class="grao"></div></div>""", base)


# ══════════════════════════════════════════════════════════════ FECHO ════
def fecho(foto, linha, nota=None, base="../../"):
    """Último slide. A referência pede aqui — salvar, mandar pra uma amiga.
    Pedido em serifa, na mesma voz dos outros slides, sem botão nem selo."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:linear-gradient(180deg,
         rgba(8,8,10,.24) 0%,rgba(8,8,10,.02) 22%,rgba(8,8,10,.4) 54%,
         rgba(8,8,10,.88) 100%)}}
    .bloco{{position:absolute;left:62px;right:96px;bottom:200px;z-index:6;
           text-shadow:0 2px 26px rgba(0,0,0,.55)}}
    p{{font-family:{SERIF};font-style:italic;
      font-size:{_corpo_fs(linha, 76, 900, .5)}px;line-height:1.14;
      letter-spacing:-.015em;color:#fff}}
    .nota{{margin-top:26px;font-family:{SANS};font-size:19px;font-weight:500;
          letter-spacing:.02em;color:rgba(255,255,255,.78);max-width:780px;
          line-height:1.4}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("fecho", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="bloco"><p>{linha}</p>{nt}</div>
      <div class="selo">{HANDLE}</div>
      <div class="grao"></div></div>""", base)
