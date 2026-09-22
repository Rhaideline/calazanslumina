# -*- coding: utf-8 -*-
"""
Perfil pessoal @rhaicalazans — linguagem clara, quente e de tipo misto.

Veio das referências que ela mandou (modelos de Canva): foto real com luz
quente, tipografia grande misturando sem-serifa gorda com serifa itálica
ou manuscrito, e caixa-alta espaçada fininha emoldurando em cima e
embaixo. É o oposto do feed da agência — lá o preto e o vermelho fecham a
peça, aqui tudo é aberto e nada grita.

Formato 1080x1350 (4:5), que é o das referências e o retrato que o
Instagram mostra maior no feed. O feed da agência é 3:4 e continua assim.

Fontes: DM Sans (peso), Playfair Display itálico (a serifa de moda das
referências) e Caveat (o manuscrito). Nada de vermelho de marca: perfil
pessoal de maternidade com paleta de agência em cima vira anúncio.
"""
import re

import casa

L, A = 1080, 1350
SANS = "'DM Sans',sans-serif"
MODA = "'Playfair Display',serif"
MAO = "'Caveat',cursive"

HANDLE = "@rhaicalazans"
CREME = "#F7E7C4"


def _cabe(texto, base, largura=940, avanco=.5):
    """Corpo que faz a linha mais longa caber. Frase de conversa tem
    comprimento irregular — fixar um número e torcer é como eu já estourei
    margem em meia dúzia de peças antes."""
    linhas = [re.sub(r"<[^>]+>", "", l) for l in str(texto).split("<br>")]
    maior = max((len(l) for l in linhas), default=1) or 1
    return int(min(base, largura / (avanco * maior)))


def _pagina(nome, css, corpo, base="../../"):
    doc = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{nome}</title>
<style>
{{FONTES}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:#000}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
.foto{{position:absolute;inset:0;background-size:cover;background-position:center 18%;
      filter:saturate(1.06) contrast(1.03) brightness(1.02)}}
.calor{{position:absolute;inset:0;background:rgba(120,72,40,.1);mix-blend-mode:multiply}}
.marca{{position:absolute;left:0;right:0;z-index:20;text-align:center;
       font-size:15px;letter-spacing:.42em;text-transform:uppercase;font-weight:600;
       color:rgba(255,255,255,.94);text-shadow:0 1px 14px rgba(40,24,12,.6)}}
.sombra{{text-shadow:0 2px 18px rgba(38,22,12,.55),0 1px 3px rgba(38,22,12,.4)}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes(base))


def _veu(topo=.2, base=.74, inicio=52):
    """Véu quente, não cinza, e só onde tem texto. A primeira versão
    escurecia a peça inteira até .96 embaixo e matava exatamente o que as
    referências dela têm de melhor: foto clara, com luz de casa."""
    return (f"linear-gradient(180deg,rgba(46,28,16,{topo}) 0%,"
            f"rgba(46,28,16,0) 22%,rgba(46,28,16,0) {inicio}%,"
            f"rgba(40,24,13,{base*.62:.2f}) {inicio+26}%,"
            f"rgba(34,20,11,{base}) 100%)")


# ═══════════════════════════════════════════════ CAPA A · EMPILHADA ══════
def capa_empilhada(foto, linhas, chapeu=None, assinatura=None, base="../../"):
    """Sem-serifa gorda empilhada no centro, nome em caixa-alta espaçada
    com filete em cima e embaixo. É a referência 'Coisas que eu acho
    chique' — a mais limpa das quatro e a que aguenta frase longa.

    O título fica ancorado embaixo, não no centro: nesta foto os dois
    rostos ocupam o meio da peça e texto centralizado tapava o bebê."""
    ass = assinatura or HANDLE
    texto = "<br>".join(linhas)
    cp = f'<div class="chapeu sombra">{chapeu}</div>' if chapeu else ""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:{_veu(.22, .8, 46)}}}
    .selo{{position:absolute;left:50%;transform:translateX(-50%);top:58px;
          z-index:20;width:420px;text-align:center}}
    .selo span{{display:block;font-size:15px;letter-spacing:.34em;font-weight:600;
               text-transform:uppercase;color:#fff;padding-bottom:15px;
               text-shadow:0 1px 14px rgba(40,24,12,.6)}}
    .selo i{{display:block;height:1px;background:rgba(255,255,255,.6)}}
    .bloco{{position:absolute;left:52px;right:52px;bottom:92px;z-index:20;
           text-align:center}}
    .chapeu{{font-size:18px;letter-spacing:.38em;font-weight:700;
            text-transform:uppercase;color:#fff;margin-bottom:24px}}
    h1{{font-family:{SANS};font-weight:700;
       font-size:{_cabe(texto, 124, 960, .49)}px;line-height:.98;
       letter-spacing:-.035em;color:#fff}}
    """
    return _pagina("capa-empilhada", css, f"""<div class="tela">
      <div class="foto"></div><div class="calor"></div><div class="veu"></div>
      <div class="selo"><span>{ass}</span><i></i></div>
      <div class="bloco">{cp}<h1 class="sombra">{texto}</h1></div>
      </div>""", base)


# ══════════════════════════════════════════════════ CAPA B · MISTA ═══════
def capa_mista(foto, serif, sans, sob=None, cta="leia a legenda", base="../../"):
    """Palavra em serifa itálica encavalando a palavra em sem-serifa gorda.
    É a referência 'Conteúdo não serve' — a que tem mais personalidade e a
    que exige frase curta: duas palavras, uma em cada peso."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:{_veu(.24, .8, 44)}}}
    .marca.topo{{top:74px}}
    .meio{{position:absolute;left:44px;right:44px;bottom:150px;
          z-index:20;text-align:center}}
    .serif{{font-family:{MODA};font-style:italic;font-weight:500;
           font-size:{_cabe(serif, 150, 960, .42)}px;line-height:.9;
           letter-spacing:-.015em;color:#fff;position:relative;z-index:2}}
    /* o encavalamento era -.19em e comia o acento: o agudo do "é" caía
       dentro da barriga branca da serifa de cima e sumia. -.05em mantém o
       efeito e deixa o acento respirar. */
    .sans{{font-family:{SANS};font-weight:700;margin-top:-.05em;
          font-size:{_cabe(sans, 128, 960, .49)}px;line-height:.92;
          letter-spacing:-.035em;color:#fff;position:relative;z-index:1}}
    .sob{{margin-top:26px;font-size:21px;letter-spacing:.44em;font-weight:600;
         text-transform:uppercase;color:rgba(255,255,255,.95)}}
    .cta{{position:absolute;left:0;right:0;bottom:70px;z-index:20;text-align:center;
         font-size:14px;letter-spacing:.42em;text-transform:uppercase;font-weight:600;
         color:rgba(255,255,255,.9)}}
    """
    sb = f'<div class="sob sombra">{sob}</div>' if sob else ""
    return _pagina("capa-mista", css, f"""<div class="tela">
      <div class="foto"></div><div class="calor"></div><div class="veu"></div>
      <div class="marca topo">{HANDLE}</div>
      <div class="meio">
        <div class="serif sombra">{serif}</div>
        <div class="sans sombra">{sans}</div>{sb}
      </div>
      <div class="cta sombra">{cta}</div>
      </div>""", base)


# ═══════════════════════════════════════════════ CAPA C · PERGUNTA ═══════
def capa_pergunta(foto, chamada, manuscrito, base="../../"):
    """Sem-serifa gorda em creme à esquerda, pergunta manuscrita embaixo
    com um filete de grifo. É a referência 'Me conta,' — a que mais puxa
    comentário, porque termina em pergunta de verdade."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:{_veu(.22, .84, 40)}}}
    .marca.topo{{top:66px}}
    .bloco{{position:absolute;left:58px;right:120px;bottom:130px;z-index:20}}
    h1{{font-family:{SANS};font-weight:700;color:{CREME};
       font-size:{_cabe(chamada, 136, 900, .5)}px;line-height:.94;
       letter-spacing:-.035em}}
    .mao{{margin-top:22px;font-family:{MAO};font-weight:600;color:#fff;
         font-size:{_cabe(manuscrito, 82, 880, .34)}px;line-height:1.12;
         display:inline-block;padding-bottom:10px;
         border-bottom:4px solid rgba(247,231,196,.85)}}
    """
    return _pagina("capa-pergunta", css, f"""<div class="tela">
      <div class="foto"></div><div class="calor"></div><div class="veu"></div>
      <div class="marca topo">{HANDLE}</div>
      <div class="bloco">
        <h1 class="sombra">{chamada}</h1>
        <div class="mao sombra">{manuscrito}</div>
      </div>
      </div>""", base)


# ═════════════════════════════════════════════════ CAPA D · DIÁRIO ═══════
def capa_diario(foto, manuscrito, episodio=None, base="../../"):
    """Só manuscrito sobre a foto, como se ela tivesse escrito por cima.
    É a referência 'Meu dia em um post' — a mais informal das quatro, boa
    pra série recorrente."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:{_veu(.3, .62, 58)}}}
    .mao{{position:absolute;left:62px;right:300px;top:82px;z-index:20;
         font-family:{MAO};font-weight:600;color:#fff;
         font-size:{_cabe(manuscrito, 96, 700, .33)}px;line-height:1.06}}
    .ep{{position:absolute;right:62px;top:330px;z-index:20;text-align:right;
        font-family:{MAO};font-weight:600;color:{CREME};
        font-size:62px;line-height:1.08}}
    .marca.base{{bottom:78px}}
    """
    ep = f'<div class="ep sombra">{episodio}</div>' if episodio else ""
    return _pagina("capa-diario", css, f"""<div class="tela">
      <div class="foto"></div><div class="calor"></div><div class="veu"></div>
      <div class="mao sombra">{manuscrito}</div>{ep}
      <div class="marca base">{HANDLE}</div>
      </div>""", base)


# ═══════════════════════════════════════════════════════════ MIOLO ═══════
def item(foto, numero, frase, apoio=None, base="../../"):
    """Slide do miolo: número manuscrito em creme, frase em sem-serifa
    ancorada embaixo. O texto desce até a base porque os dois rostos ficam
    no terço de cima — cobrir eles é jogar fora o que segura o post."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:{_veu(.2, .9, 42)}}}
    .marca.topo{{top:58px}}
    .bloco{{position:absolute;left:54px;right:60px;bottom:86px;z-index:20}}
    .n{{font-family:{MAO};font-weight:700;color:{CREME};font-size:108px;
       line-height:.7;margin-bottom:18px}}
    p{{font-family:{SANS};font-weight:700;color:#fff;
      font-size:{_cabe(frase, 74, 966, .485)}px;line-height:1.02;
      letter-spacing:-.035em}}
    .apoio{{margin-top:22px;font-family:{SANS};font-weight:400;
           font-size:29px;line-height:1.32;color:rgba(255,255,255,.92);
           max-width:880px}}
    """
    ap = f'<div class="apoio sombra">{apoio}</div>' if apoio else ""
    return _pagina(f"item-{numero}", css, f"""<div class="tela">
      <div class="foto"></div><div class="calor"></div><div class="veu"></div>
      <div class="marca topo">{HANDLE}</div>
      <div class="bloco"><div class="n sombra">{numero}</div>
        <p class="sombra">{frase}</p>{ap}</div>
      </div>""", base)


# ═══════════════════════════════════════════════════════════ FECHO ═══════
def fecho(foto, linha, pedido=None, base="../../"):
    """Último slide. Pedido escrito à mão, na mesma voz do resto — sem
    botão, sem selo, sem telefone. É perfil pessoal."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{position:absolute;inset:0;background:{_veu(.22, .84, 44)}}}
    .marca.topo{{top:58px}}
    .bloco{{position:absolute;left:54px;right:60px;bottom:104px;z-index:20}}
    h1{{font-family:{MODA};font-style:italic;font-weight:600;color:#fff;
       font-size:{_cabe(linha, 104, 960, .435)}px;line-height:1.02;
       letter-spacing:-.02em}}
    .mao{{margin-top:24px;font-family:{MAO};font-weight:600;color:{CREME};
         font-size:{_cabe(pedido or "", 62, 900, .33)}px;line-height:1.12}}
    """
    pd = f'<div class="mao sombra">{pedido}</div>' if pedido else ""
    return _pagina("fecho", css, f"""<div class="tela">
      <div class="foto"></div><div class="calor"></div><div class="veu"></div>
      <div class="marca topo">{HANDLE}</div>
      <div class="bloco"><h1 class="sombra">{linha}</h1>{pd}</div>
      </div>""", base)
