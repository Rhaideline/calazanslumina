# -*- coding: utf-8 -*-
"""
Modelo REVISTA — a gramática do último modelo de Canva que a cliente mandou.

O diagnóstico que gerou este arquivo é dela: "o carrossel após a capa tem
muita cara de IA". Está certo, e dá pra nomear o porquê. As peças
anteriores tinham três marcas que produzem exatamente essa sensação:

  1. degradê preto pesado cobrindo o terço de baixo da foto, em todo slide
  2. parágrafo de apoio de três a quatro linhas em toda peça
  3. nenhuma estrutura repetida — cada slide era um pôster solto

O modelo que ela mandou resolve os três, e é o que está implementado aqui:

  barra de topo   categoria à esquerda, arroba à direita, filete embaixo.
                  Repete nas seis peças. É o que faz o conjunto parecer
                  template desenhado em vez de imagem gerada.
  foto limpa      sem degradê cobrindo a peça. Onde precisa de fundo, entra
                  bloco chapado — que é o que a referência faz com a pílula.
  pilha de tipo   caixa-alta fininha, palavra gigante em serifa, caixa-alta
                  fininha. O contraste de corpo é o desenho inteiro.
  pouca palavra   a referência tem sete palavras na peça toda. Aqui o teto
                  é uma frase curta e uma linha de apoio. Nunca parágrafo.

Formato 1080×1440 (3:4) — o modelo dela é quadrado, mas 3:4 é o único que
preenche feed e grade de perfil sem corte, e a gramática sobe sem perda.
"""
import re

import casa

L, A = 1080, 1440

SANS = "'DM Sans',sans-serif"
MODA = "'Playfair Display',serif"

HANDLE = "@rhaicalazans"
BARRA = 118          # altura da barra de topo
ESCURO = "#141010"


def _cabe(texto, base, largura=940, avanco=.5):
    linhas = [re.sub(r"<[^>]+>", "", l) for l in str(texto).split("<br>")]
    maior = max((len(l) for l in linhas), default=1) or 1
    return int(min(base, largura / (avanco * maior)))


def _pagina(nome, css, corpo, base="../../"):
    doc = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{nome}</title>
<style>
{{FONTES}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:{ESCURO}}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
.foto{{position:absolute;left:0;right:0;top:{BARRA}px;bottom:0;
      background-repeat:no-repeat;background-size:cover}}

/* barra de topo — a estrutura que se repete nas seis peças */
.barra{{position:absolute;left:0;right:0;top:0;height:{BARRA}px;z-index:30;
       background:rgba(20,16,16,.9);display:flex;align-items:center;
       justify-content:space-between;padding:0 46px;
       border-bottom:1px solid rgba(255,255,255,.5)}}
.barra span{{font-size:17px;letter-spacing:.28em;text-transform:uppercase;
            font-weight:500;color:rgba(255,255,255,.94)}}
.barra .dir{{letter-spacing:.14em;text-transform:none;font-weight:400;
            color:rgba(255,255,255,.82)}}

/* pilha de tipo: fina em caixa-alta, gigante em serifa, fina em caixa-alta */
.pilha{{position:absolute;left:24px;right:24px;z-index:26;text-align:center;
       padding:58px 34px 64px;
       background:radial-gradient(74% 62% at 50% 50%,rgba(16,11,9,.66) 0%,
       rgba(16,11,9,.44) 52%,rgba(16,11,9,0) 100%)}}
.pilha .acima{{font-family:{SANS};font-weight:300;letter-spacing:.06em;
              color:#fff;line-height:1.1}}
.pilha .palavra{{font-family:{MODA};font-weight:400;color:#fff;
                line-height:.86;letter-spacing:-.012em;margin:-.04em 0}}
.pilha .abaixo{{font-family:{SANS};font-weight:400;letter-spacing:.34em;
               text-transform:uppercase;color:#fff;line-height:1.2}}

/* pílula: bloco chapado com seta, o único botão do sistema */
.pilula{{position:absolute;left:50%;transform:translateX(-50%);z-index:26;
        background:{ESCURO};color:#fff;display:flex;align-items:center;
        gap:22px;padding:22px 26px 22px 38px}}
.pilula b{{font-size:22px;letter-spacing:.2em;text-transform:uppercase;
          font-weight:700}}
.pilula i{{font-style:italic;font-family:{MODA};font-weight:500;
          text-transform:none;letter-spacing:.01em;font-size:25px}}
.pilula .seta{{width:46px;height:46px;border-radius:50%;background:#fff;
              color:{ESCURO};display:flex;align-items:center;
              justify-content:center;font-size:24px;line-height:1}}
.sombra{{text-shadow:0 2px 22px rgba(18,12,10,.5),0 1px 3px rgba(18,12,10,.34)}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes(base))


def _barra(categoria):
    return (f'<div class="barra"><span>{categoria}</span>'
            f'<span class="dir">{HANDLE}</span></div>')


def _foto(base, foto, pos="center 22%", extra=""):
    return (f".foto{{background-image:url('{base}fotos/{foto}');"
            f"background-position:{pos};filter:saturate(1.03) contrast(1.02)"
            f"{extra}}}")


def _pilha(acima, palavra, abaixo, topo, corpo_palavra):
    """A pilha da referência. Os corpos das duas linhas finas saem do corpo
    da palavra grande, não de números soltos — é a proporção que faz o
    contraste ler como desenho e não como três textos empilhados."""
    fino = max(26, int(corpo_palavra * .27))
    return f"""
    .pilha{{top:{topo}px}}
    .pilha .acima{{font-size:{fino}px;margin-bottom:{int(fino*.34)}px}}
    .pilha .palavra{{font-size:{corpo_palavra}px}}
    .pilha .abaixo{{font-size:{int(fino*.86)}px;margin-top:{int(fino*.5)}px}}
    """


# ═══════════════════════════════════════════════════════════════ CAPA ════
def capa(foto, acima, palavra, abaixo, categoria="maternidade",
         pilula=("confira na", "legenda"), pos="center 22%", base="../../"):
    """A peça da referência, inteira: barra, foto limpa, pilha e pílula.

    `palavra` é uma palavra só — é o eixo da peça. Frase inteira ali mata
    o contraste de corpo, que é a única coisa que este layout faz."""
    cp = _cabe(palavra, 150, 880, .46)
    css = f"""
    {_foto(base, foto, pos)}
    /* clareia de leve só atrás da pilha, sem degradê cobrindo a peça */
    {_pilha(acima, palavra, abaixo, 238, cp)}
    .pilula{{bottom:104px}}
    """
    a, b = pilula
    return _pagina("capa", css, f"""<div class="tela">
      <div class="foto"></div>
      {_barra(categoria)}
      <div class="pilha sombra">
        <div class="acima">{acima}</div>
        <div class="palavra">{palavra}</div>
        <div class="abaixo">{abaixo}</div>
      </div>
      <div class="pilula"><b>{a} <i>{b}</i></b><span class="seta">↓</span></div>
      </div>""", base)


# ═══════════════════════════════════════════════════════════════ ITEM ════
def item(foto, numero, frase, apoio=None, categoria="maternidade",
         pos="center 22%", base="../../"):
    """Foto limpa em cima, bloco chapado embaixo com número e frase.

    O bloco é chapado de propósito: degradê em cima de foto, repetido slide
    após slide, é a marca visual que a cliente identificou como “cara de
    IA”. Bloco com borda tem autor; degradê não tem."""
    css = f"""
    {_foto(base, foto, pos)}
    .bloco{{position:absolute;left:0;right:0;bottom:0;z-index:26;
           background:{ESCURO};padding:44px 46px 52px;
           border-top:1px solid rgba(255,255,255,.5)}}
    .bloco .n{{font-family:{MODA};font-size:26px;letter-spacing:.2em;
              color:rgba(255,255,255,.62);margin-bottom:16px}}
    .bloco h2{{font-family:{SANS};font-weight:700;color:#fff;
              font-size:{_cabe(frase, 78, 960, .48)}px;line-height:1.02;
              letter-spacing:-.03em}}
    .bloco p{{margin-top:18px;font-size:27px;line-height:1.36;
             color:rgba(255,255,255,.78);max-width:880px}}
    """
    ap = f"<p>{apoio}</p>" if apoio else ""
    return _pagina(f"item-{numero}", css, f"""<div class="tela">
      <div class="foto"></div>
      {_barra(categoria)}
      <div class="bloco"><div class="n">{numero:02d}</div>
        <h2>{frase}</h2>{ap}</div>
      </div>""", base)


# ══════════════════════════════════════════════════════════ DESTAQUE ═════
def destaque(foto, acima, palavra, abaixo, categoria="maternidade",
             pos="center 22%", base="../../"):
    """A pilha da capa, uma vez no meio do carrossel. É a virada: o leitor
    reconhece a peça de abertura e entende que o assunto mudou de marcha."""
    cp = _cabe(palavra, 142, 880, .46)
    css = f"""
    {_foto(base, foto, pos)}
    {_pilha(acima, palavra, abaixo, 252, cp)}
    """
    return _pagina("destaque", css, f"""<div class="tela">
      <div class="foto"></div>
      {_barra(categoria)}
      <div class="pilha sombra">
        <div class="acima">{acima}</div>
        <div class="palavra">{palavra}</div>
        <div class="abaixo">{abaixo}</div>
      </div>
      </div>""", base)


# ══════════════════════════════════════════════════════════════ FRASE ════
def frase(foto, texto, credito=None, categoria="maternidade",
          pos="center 22%", base="../../"):
    """A frase pra printar. A foto continua limpa e o texto vive num bloco
    chapado central com filete em cima e embaixo — a mesma família da
    pílula e do bloco do item, em outra proporção."""
    css = f"""
    {_foto(base, foto, pos, extra=" brightness(.92)")}
    .faixa{{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);
           z-index:26;background:{ESCURO};padding:70px 62px;text-align:center;
           border-top:1px solid rgba(255,255,255,.5);
           border-bottom:1px solid rgba(255,255,255,.5)}}
    .faixa h2{{font-family:{MODA};font-weight:400;color:#fff;
              font-size:{_cabe(texto, 92, 900, .45)}px;line-height:1.1;
              letter-spacing:-.015em}}
    .faixa span{{display:block;margin-top:26px;font-family:{SANS};
                font-size:17px;letter-spacing:.34em;text-transform:uppercase;
                color:rgba(255,255,255,.66)}}
    """
    cr = f"<span>{credito}</span>" if credito else ""
    return _pagina("frase", css, f"""<div class="tela">
      <div class="foto"></div>
      {_barra(categoria)}
      <div class="faixa"><h2>{texto}</h2>{cr}</div>
      </div>""", base)


# ══════════════════════════════════════════════════════════════ FECHO ════
def fecho(foto, acima, palavra, abaixo, pedidos, categoria="maternidade",
          pos="center 22%", base="../../"):
    """Pilha em cima, pedidos embaixo em bloco chapado, cada um com a seta
    da pílula. Salvar e mandar no direct pesam de três a cinco vezes a
    curtida — então eles entram escritos, não subentendidos."""
    cp = _cabe(palavra, 138, 880, .46)
    linhas = "".join(
        f'<div class="pedido"><span class="seta">{s}</span><b>{t}</b></div>'
        for s, t in pedidos)
    css = f"""
    {_foto(base, foto, pos)}
    {_pilha(acima, palavra, abaixo, 196, cp)}
    .rodape{{position:absolute;left:0;right:0;bottom:0;z-index:26;
            background:{ESCURO};padding:40px 46px 46px;
            border-top:1px solid rgba(255,255,255,.5);
            display:flex;flex-direction:column;gap:20px}}
    .pedido{{display:flex;align-items:center;gap:20px}}
    .pedido .seta{{flex:0 0 auto;width:44px;height:44px;border-radius:50%;
                  background:#fff;color:{ESCURO};display:flex;
                  align-items:center;justify-content:center;font-size:21px}}
    .pedido b{{font-size:26px;font-weight:500;color:#fff;line-height:1.24}}
    """
    return _pagina("fecho", css, f"""<div class="tela">
      <div class="foto"></div>
      {_barra(categoria)}
      <div class="pilha sombra">
        <div class="acima">{acima}</div>
        <div class="palavra">{palavra}</div>
        <div class="abaixo">{abaixo}</div>
      </div>
      <div class="rodape">{linhas}</div>
      </div>""", base)
