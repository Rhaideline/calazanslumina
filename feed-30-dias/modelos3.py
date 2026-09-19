# -*- coding: utf-8 -*-
"""
16 modelos — do zero.

O diagnóstico que gerou este arquivo: os 12 modelos anteriores eram todos
a MESMA peça — um bloco de texto sobre um fundo — mudando só a posição do
bloco e se tinha foto atrás. Isso não é um sistema de 12 modelos, é um
modelo com 12 paddings. Rolando o feed, tudo parecia igual, e estava certa
quem disse isso.

Aqui cada modelo tem um DISPOSITIVO GRÁFICO próprio — uma ideia de
construção que nenhum outro usa:

    01 MASCARA     a foto aparece DENTRO das letras (background-clip)
    02 GRADE       grade editorial de 12 colunas, fios visíveis, índice
    03 FANTASMA    algarismo gigante vazado ao fundo, conteúdo por cima
    04 VAZADO      tipo só de contorno, sem preenchimento
    05 DUOTONE     foto em duas cores (vermelho/tinta), contraste de cartaz
    06 RETICULA    foto convertida em pontos de meia-tinta, textura de impressão
    07 LOMBADA     texto girado 90° correndo na lateral, como lombada de livro
    08 RECORTE     a foto fatiada em faixas deslocadas
    09 TRAMA       a mesma palavra repetida como textura, uma destacada
    10 MOSAICO     grade de 4 fotos, uma legenda só
    11 PLANTA      moldura técnica com marcas de régua, como desenho técnico
    12 TRAVESSA    bloco de cor atravessando a borda da foto, texto nos dois
    13 LINHA       linha do tempo horizontal com pontos marcados
    14 COLUNAS     comparativo de duas colunas com fios
    15 ASPAS       aspa tipográfica gigante como elemento gráfico
    16 VELADURA    camada de cor translúcida sobre foto, mix-blend-mode

Regra que continua valendo (veio dos exemplos dela): nada de logo repetido,
nada de chapéu em pílula. O dispositivo gráfico É o interesse visual — não
precisa de enfeite em cima.
"""
from pathlib import Path

import casa

FOTOS = Path(__file__).parent / "fotos"

SERIF = "'Bodoni Moda',serif"
SANS = "'DM Sans',sans-serif"
MONO = "'Space Mono',monospace"


def _pagina(titulo, css, corpo):
    doc = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{titulo}</title>
<style>
{{FONTES}}
:root{{__TOKENS__}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{casa.L}px;height:{casa.A}px;overflow:hidden;background:#000}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{casa.L}px;height:{casa.A}px;overflow:hidden}}
em{{font-style:italic;color:var(--vermelho)}}
.grao{{position:absolute;inset:0;z-index:60;pointer-events:none;opacity:.32;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .13 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}
.rodape{{position:absolute;left:62px;bottom:52px;z-index:50;font-size:11px;
        letter-spacing:.34em;text-transform:uppercase;font-weight:600}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes("../")).replace(
        "__TOKENS__", casa._TOKENS)


# ══════════════════════════════════════════════════════════ 01 MASCARA ═══
def mascara(foto, palavra, nota=None):
    """A foto aparece dentro das letras. O tipo vira janela, não etiqueta.
    Precisa de palavra curta e pesada — contraforma pequena não deixa ver."""
    css = f"""
    .ms{{position:absolute;inset:0;background:var(--tinta);display:flex;
        flex-direction:column;justify-content:center;padding:0 56px}}
    .ms h1{{font-family:{SERIF};font-style:italic;font-weight:860;
           font-size:150px;line-height:1.02;letter-spacing:-.045em;
           padding:.06em 0;
           background-image:url('../fotos/{foto}');background-size:cover;
           background-position:center 45%;
           -webkit-background-clip:text;background-clip:text;color:transparent;
           filter:contrast(1.9) saturate(1.7) brightness(1.06)}}
    .ms .nota{{margin-top:44px;font-size:19px;letter-spacing:.22em;
              text-transform:uppercase;font-weight:600;color:var(--vermelho)}}
    .ms .rodape{{color:rgba(255,255,255,.34)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("mascara", css, f"""<div class="tela"><div class="ms">
      <h1>{palavra}</h1>{nt}
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ════════════════════════════════════════════════════════════ 02 GRADE ═══
def grade(indice, titulo, colunas, nota=None):
    """Grade editorial de verdade: 12 colunas, fios visíveis, número de
    índice. `colunas` = [(rotulo, texto), ...] até 3."""
    css = f"""
    .gr{{position:absolute;inset:0;background:var(--papel);color:var(--tinta);
        padding:62px 56px 0;display:flex;flex-direction:column}}
    .gr .fios{{position:absolute;inset:62px 56px 52px;display:grid;
              grid-template-columns:repeat(12,1fr);pointer-events:none}}
    .gr .fios span{{border-left:1px solid rgba(17,17,17,.09)}}
    .gr .topo{{display:flex;justify-content:space-between;align-items:baseline;
              border-bottom:2px solid var(--tinta);padding-bottom:14px;z-index:2}}
    .gr .topo .ix{{font-family:{MONO};font-size:13px;font-weight:700;letter-spacing:.1em}}
    .gr .topo .dt{{font-family:{MONO};font-size:13px;letter-spacing:.1em;opacity:.5}}
    .gr h1{{font-family:{SERIF};font-style:italic;font-weight:700;font-size:104px;
           line-height:.96;letter-spacing:-.025em;margin:60px 0 0;z-index:2;max-width:880px}}
    .gr .cols{{margin-top:auto;margin-bottom:0;display:grid;
              grid-template-columns:repeat(3,1fr);gap:30px;z-index:2}}
    .gr .col{{border-top:1px solid var(--tinta);padding-top:16px}}
    .gr .col b{{display:block;font-family:{MONO};font-size:11px;letter-spacing:.16em;
               text-transform:uppercase;margin-bottom:10px;color:var(--vermelho)}}
    .gr .col p{{font-size:18px;line-height:1.45}}
    .gr .nota{{margin:34px 0 86px;font-family:{MONO};font-size:12px;letter-spacing:.2em;
              text-transform:uppercase;color:var(--vermelho);z-index:2}}
    .gr .rodape{{color:rgba(17,17,17,.4)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else '<div style="height:86px"></div>'
    fios = "".join("<span></span>" for _ in range(12))
    cols = "".join(f'<div class="col"><b>{r}</b><p>{t}</p></div>' for r, t in colunas)
    return _pagina("grade", css, f"""<div class="tela"><div class="gr">
      <div class="fios">{fios}</div>
      <div class="topo"><span class="ix">{indice}</span><span class="dt">CALAZANS LUMINA</span></div>
      <h1>{titulo}</h1>
      <div class="cols">{cols}</div>{nt}
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ═════════════════════════════════════════════════════════ 03 FANTASMA ═══
def fantasma(numero, titulo, corpo, nota=None):
    """Algarismo gigante vazado ocupando a tela inteira, conteúdo por cima.
    O número não é informação aqui — é arquitetura."""
    css = f"""
    .ft{{position:absolute;inset:0;background:var(--tinta);color:#fff;
        padding:62px 56px;display:flex;flex-direction:column;justify-content:flex-end}}
    .ft .num{{position:absolute;right:-60px;top:-90px;font-family:{SERIF};
             font-style:italic;font-weight:900;font-size:900px;line-height:.72;
             color:transparent;-webkit-text-stroke:2px rgba(255,255,255,.13);
             pointer-events:none}}
    .ft h1{{font-family:{SERIF};font-style:italic;font-weight:660;font-size:112px;
           line-height:.98;letter-spacing:-.025em;z-index:2;max-width:880px}}
    .ft p{{margin-top:26px;font-size:21px;line-height:1.5;color:rgba(255,255,255,.62);
          max-width:620px;z-index:2}}
    .ft .nota{{margin-top:38px;font-family:{MONO};font-size:12px;letter-spacing:.2em;
              text-transform:uppercase;color:var(--vermelho);z-index:2}}
    .ft .rodape{{color:rgba(255,255,255,.3)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("fantasma", css, f"""<div class="tela"><div class="ft">
      <div class="num">{numero}</div>
      <h1>{titulo}</h1><p>{corpo}</p>{nt}
      <div class="rodape" style="bottom:52px">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ═══════════════════════════════════════════════════════════ 04 VAZADO ═══
def vazado(linha_cheia, linha_vazada, nota=None, fundo="vermelho"):
    """Metade do título preenchido, metade só contorno. Tensão entre
    presença e ausência — funciona para pares de oposição."""
    cores = {"vermelho": "#FF0005", "tinta": "#111111"}
    bg = cores[fundo]
    css = f"""
    .vz{{position:absolute;inset:0;background:{bg};color:#fff;
        padding:0 56px;display:flex;flex-direction:column;justify-content:center;gap:4px}}
    .vz .cheia{{font-family:{SERIF};font-style:italic;font-weight:760;
               font-size:104px;line-height:1.04;letter-spacing:-.02em;padding-left:6px}}
    .vz .vazada{{font-family:{SERIF};font-style:italic;font-weight:820;
                font-size:104px;line-height:1.04;letter-spacing:-.02em;padding-left:6px;
                color:transparent;-webkit-text-stroke:3px #fff}}
    .vz .nota{{margin-top:46px;font-family:{MONO};font-size:13px;letter-spacing:.24em;
              text-transform:uppercase;color:rgba(255,255,255,.72)}}
    .vz .rodape{{color:rgba(255,255,255,.55)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("vazado", css, f"""<div class="tela"><div class="vz">
      <div class="cheia">{linha_cheia}</div>
      <div class="vazada">{linha_vazada}</div>{nt}
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ══════════════════════════════════════════════════════════ 05 DUOTONE ═══
def duotone(foto, titulo, nota=None):
    """Foto reduzida a duas cores — vermelho e tinta. Trata a fotografia
    como impressão de cartaz, não como registro."""
    css = f"""
    .dt{{position:absolute;inset:0;background:var(--tinta);overflow:hidden}}
    .dt .base{{position:absolute;inset:0;background-image:url('../fotos/{foto}');
              background-size:cover;background-position:center;
              filter:grayscale(1) contrast(1.55) brightness(.95)}}
    .dt .cor{{position:absolute;inset:0;background:var(--vermelho);
             mix-blend-mode:lighten;opacity:.92}}
    .dt .escuro{{position:absolute;inset:0;background:#120608;mix-blend-mode:multiply;opacity:.55}}
    .dt .txt{{position:absolute;left:56px;right:56px;bottom:88px;z-index:5}}
    .dt h1{{font-family:{SERIF};font-style:italic;font-weight:700;color:#fff;
           font-size:120px;line-height:.94;letter-spacing:-.03em}}
    .dt .nota{{margin-top:22px;font-family:{MONO};font-size:12px;letter-spacing:.22em;
              text-transform:uppercase;color:rgba(255,255,255,.8)}}
    .dt .rodape{{color:rgba(255,255,255,.55)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("duotone", css, f"""<div class="tela"><div class="dt">
      <div class="base"></div><div class="cor"></div><div class="escuro"></div>
      <div class="txt"><h1>{titulo}</h1>{nt}</div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ══════════════════════════════════════════════════════════ 06 RETICULA ══
def reticula(foto, titulo, nota=None):
    """Foto virando retícula de meia-tinta: pontos de impressão. A imagem
    perde o detalhe e ganha matéria — parece jornal ampliado."""
    css = f"""
    .rt{{position:absolute;inset:0;background:var(--papel)}}
    .rt .img{{position:absolute;left:0;right:0;top:0;height:64%;
             background-image:url('../fotos/{foto}');background-size:cover;
             background-position:center;filter:grayscale(1) contrast(1.9) brightness(1.05)}}
    .rt .pontos{{position:absolute;left:0;right:0;top:0;height:64%;
                background-image:radial-gradient(circle at center,
                  var(--papel) 0 38%, transparent 39%);
                background-size:7px 7px;mix-blend-mode:screen}}
    .rt .veu{{position:absolute;left:0;right:0;top:0;height:64%;
             background:var(--papel);mix-blend-mode:lighten;opacity:.12}}
    .rt .txt{{position:absolute;left:56px;right:56px;bottom:92px;z-index:5;color:var(--tinta)}}
    .rt h1{{font-family:{SERIF};font-style:italic;font-weight:700;font-size:104px;
           line-height:.96;letter-spacing:-.025em}}
    .rt .nota{{margin-top:20px;font-family:{MONO};font-size:12px;letter-spacing:.2em;
              text-transform:uppercase;color:var(--vermelho)}}
    .rt .rodape{{color:rgba(17,17,17,.42)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("reticula", css, f"""<div class="tela"><div class="rt">
      <div class="img"></div><div class="pontos"></div><div class="veu"></div>
      <div class="txt"><h1>{titulo}</h1>{nt}</div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ══════════════════════════════════════════════════════════ 07 LOMBADA ═══
def lombada(foto, vertical, titulo, nota=None):
    """Texto girado 90° correndo na lateral, como lombada de livro. O olho
    precisa inclinar — e isso segura o dedo por um segundo a mais."""
    css = f"""
    .lb{{position:absolute;inset:0;background:var(--tinta);display:flex}}
    .lb .faixa{{width:168px;flex-shrink:0;border-right:1px solid rgba(255,255,255,.16);
               display:flex;align-items:center;justify-content:center}}
    .lb .faixa span{{writing-mode:vertical-rl;transform:rotate(180deg);
                    font-family:{SANS};font-size:26px;letter-spacing:.42em;
                    text-transform:uppercase;font-weight:700;color:var(--vermelho);
                    white-space:nowrap}}
    .lb .dir{{flex:1;position:relative}}
    .lb .foto{{position:absolute;inset:0;background-image:url('../fotos/{foto}');
              background-size:cover;background-position:center;
              filter:saturate(.9) contrast(1.2) brightness(.62)}}
    .lb .txt{{position:absolute;left:44px;right:44px;bottom:90px;z-index:4}}
    .lb h1{{font-family:{SERIF};font-style:italic;font-weight:700;color:#fff;
           font-size:96px;line-height:.96;letter-spacing:-.025em}}
    .lb .nota{{margin-top:20px;font-size:16px;color:rgba(255,255,255,.66)}}
    .lb .rodape{{left:auto;right:44px;color:rgba(255,255,255,.45)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("lombada", css, f"""<div class="tela"><div class="lb">
      <div class="faixa"><span>{vertical}</span></div>
      <div class="dir"><div class="foto"></div>
        <div class="txt"><h1>{titulo}</h1>{nt}</div>
        <div class="rodape">@calazanslumina</div></div>
      </div><div class="grao"></div></div>""")


# ══════════════════════════════════════════════════════════ 08 RECORTE ═══
def recorte(foto, titulo, nota=None):
    """A foto fatiada em quatro faixas horizontais, cada uma deslocada.
    Sugere corte, edição, interrupção — a imagem não está inteira."""
    faixas = ""
    desloc = [0, 42, -30, 22]
    for i, dx in enumerate(desloc):
        topo = i * 25
        faixas += (f'<div class="faixa" style="top:{topo}%;'
                   f'transform:translateX({dx}px);'
                   f'background-position:center {topo}%"></div>')
    css = f"""
    .rc{{position:absolute;inset:0;background:var(--tinta);overflow:hidden}}
    .rc .faixa{{position:absolute;left:-50px;right:-50px;height:23%;
               background-image:url('../fotos/{foto}');background-size:cover;
               filter:saturate(1) contrast(1.12) brightness(1.02);
               box-shadow:0 0 0 2px var(--tinta)}}
    .rc .veu{{position:absolute;left:0;right:0;bottom:0;height:46%;
             background:linear-gradient(180deg,rgba(8,8,10,0) 0%,
             rgba(8,8,10,.86) 42%,#08080a 74%)}}
    .rc .txt{{position:absolute;left:56px;right:56px;bottom:92px;z-index:5}}
    .rc h1{{font-family:{SERIF};font-style:italic;font-weight:720;color:#fff;
           font-size:116px;line-height:.94;letter-spacing:-.03em}}
    .rc .nota{{margin-top:22px;font-family:{MONO};font-size:12px;letter-spacing:.22em;
              text-transform:uppercase;color:var(--vermelho)}}
    .rc .rodape{{color:rgba(255,255,255,.45)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("recorte", css, f"""<div class="tela"><div class="rc">
      {faixas}<div class="veu"></div>
      <div class="txt"><h1>{titulo}</h1>{nt}</div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ════════════════════════════════════════════════════════════ 09 TRAMA ═══
def trama(palavra, destaque_linha, nota=None):
    """A mesma palavra repetida até virar textura; uma ocorrência em
    vermelho. O ruído é o assunto — e o vermelho é a exceção que se lê."""
    linhas = ""
    for i in range(11):
        cls = " viva" if i == destaque_linha else ""
        linhas += f'<div class="ln{cls}">{" ".join([palavra] * 2)}</div>'
    css = f"""
    .tr{{position:absolute;inset:0;background:var(--tinta);overflow:hidden;
        display:flex;flex-direction:column;justify-content:center}}
    .tr .ln{{font-family:{SERIF};font-style:italic;font-weight:600;font-size:62px;
            line-height:1.22;letter-spacing:-.015em;white-space:nowrap;
            overflow:hidden;text-overflow:clip;
            color:rgba(255,255,255,.075);padding-left:56px}}
    .tr .ln.viva{{color:var(--vermelho);opacity:1}}
    .tr .nota{{position:absolute;left:56px;bottom:112px;font-family:{MONO};
              font-size:13px;letter-spacing:.22em;text-transform:uppercase;
              color:rgba(255,255,255,.8);z-index:4}}
    .tr .rodape{{color:rgba(255,255,255,.4)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("trama", css, f"""<div class="tela"><div class="tr">
      {linhas}{nt}<div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ══════════════════════════════════════════════════════════ 10 MOSAICO ═══
def mosaico(fotos, titulo, nota=None):
    """Quatro fotos numa grade apertada, uma legenda só. Serve para mostrar
    repertório — vários clientes, várias frentes — sem virar catálogo."""
    celulas = "".join(
        f'<div class="cel" style="background-image:url(\'../fotos/{f}\')"></div>'
        for f in fotos[:4])
    css = f"""
    .mo{{position:absolute;inset:0;background:var(--tinta)}}
    .mo .grade{{position:absolute;left:0;right:0;top:0;height:68%;
               display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:3px}}
    .mo .cel{{background-size:cover;background-position:center;
             filter:saturate(.8) contrast(1.2) brightness(.72)}}
    .mo .txt{{position:absolute;left:56px;right:56px;bottom:96px;z-index:4}}
    .mo h1{{font-family:{SERIF};font-style:italic;font-weight:700;color:#fff;
           font-size:92px;line-height:.98;letter-spacing:-.025em}}
    .mo .nota{{margin-top:18px;font-size:17px;color:rgba(255,255,255,.6)}}
    .mo .rodape{{color:rgba(255,255,255,.4)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("mosaico", css, f"""<div class="tela"><div class="mo">
      <div class="grade">{celulas}</div>
      <div class="txt"><h1>{titulo}</h1>{nt}</div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ═══════════════════════════════════════════════════════════ 11 PLANTA ═══
def planta(codigo, titulo, medidas, nota=None):
    """Moldura técnica: marcas de régua nas bordas, coordenada no canto.
    Registro de engenharia — serve quando a peça fala de método e precisão.
    `medidas` = [(rotulo, valor), ...]"""
    ticks_h = "".join(f'<i style="left:{x}%"></i>' for x in range(0, 101, 5))
    ticks_v = "".join(f'<i style="top:{y}%"></i>' for y in range(0, 101, 5))
    linhas = "".join(
        f'<div class="md"><span>{r}</span><b>{v}</b></div>' for r, v in medidas)
    css = f"""
    .pl{{position:absolute;inset:0;background:var(--papel);color:var(--tinta);
        padding:74px 68px}}
    .pl .moldura{{position:absolute;inset:44px;border:1px solid rgba(17,17,17,.35)}}
    .pl .rh{{position:absolute;left:44px;right:44px;height:0}}
    .pl .rh.a{{top:44px}} .pl .rh.b{{bottom:44px}}
    .pl .rh i{{position:absolute;width:1px;height:9px;background:rgba(17,17,17,.35)}}
    .pl .rh.b i{{transform:translateY(-9px)}}
    .pl .rv{{position:absolute;top:44px;bottom:44px;width:0}}
    .pl .rv.a{{left:44px}} .pl .rv.b{{right:44px}}
    .pl .rv i{{position:absolute;height:1px;width:9px;background:rgba(17,17,17,.35)}}
    .pl .rv.b i{{transform:translateX(-9px)}}
    .pl .cod{{position:absolute;top:58px;right:62px;font-family:{MONO};font-size:12px;
             letter-spacing:.14em;color:var(--vermelho);z-index:3}}
    .pl .miolo{{position:relative;z-index:3;height:100%;display:flex;
               flex-direction:column;justify-content:center;padding:0 34px}}
    .pl h1{{font-family:{SERIF};font-style:italic;font-weight:700;font-size:104px;
           line-height:.98;letter-spacing:-.025em;max-width:800px}}
    .pl .medidas{{margin-top:56px;display:grid;grid-template-columns:1fr 1fr;
                 gap:0 40px;max-width:720px}}
    .pl .md{{display:flex;justify-content:space-between;align-items:baseline;
            border-bottom:1px dotted rgba(17,17,17,.4);padding:13px 0;
            font-family:{MONO};font-size:14px}}
    .pl .md span{{letter-spacing:.1em;text-transform:uppercase;opacity:.6;font-size:11px}}
    .pl .md b{{font-weight:700}}
    .pl .nota{{margin-top:32px;font-size:16px;color:rgba(17,17,17,.6);max-width:600px}}
    .pl .rodape{{color:rgba(17,17,17,.4);left:78px;bottom:62px}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("planta", css, f"""<div class="tela"><div class="pl">
      <div class="moldura"></div>
      <div class="rh a">{ticks_h}</div><div class="rh b">{ticks_h}</div>
      <div class="rv a">{ticks_v}</div><div class="rv b">{ticks_v}</div>
      <div class="cod">{codigo}</div>
      <div class="miolo"><h1>{titulo}</h1>
        <div class="medidas">{linhas}</div>{nt}</div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ═════════════════════════════════════════════════════════ 12 TRAVESSA ═══
def travessa(foto, titulo_claro, titulo_escuro, nota=None):
    """Bloco de cor atravessa a borda da foto; o título começa em cima da
    imagem e termina dentro do bloco. Uma frase, dois territórios."""
    css = f"""
    .tv{{position:absolute;inset:0;background:var(--papel)}}
    .tv .foto{{position:absolute;left:0;right:0;top:0;height:74%;
              background-image:url('../fotos/{foto}');background-size:cover;
              background-position:center 35%;filter:saturate(.9) contrast(1.15) brightness(.78)}}
    .tv .bloco{{position:absolute;left:0;right:0;top:64%;bottom:0;background:var(--vermelho)}}
    .tv .txt{{position:absolute;left:56px;right:56px;top:54%;z-index:5}}
    .tv h1{{font-family:{SERIF};font-style:italic;font-weight:740;font-size:104px;
           line-height:.94;letter-spacing:-.03em;color:#fff}}
    .tv h1 em{{color:var(--tinta)}}
    .tv .nota{{position:absolute;left:56px;right:56px;bottom:100px;z-index:5;
              font-family:{MONO};font-size:13px;letter-spacing:.2em;
              text-transform:uppercase;color:rgba(255,255,255,.85)}}
    .tv .rodape{{color:rgba(255,255,255,.7)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("travessa", css, f"""<div class="tela"><div class="tv">
      <div class="foto"></div><div class="bloco"></div>
      <div class="txt"><h1>{titulo_claro}<br>{titulo_escuro}</h1></div>{nt}
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ═══════════════════════════════════════════════════════════ 13 LINHA ════
def linha(titulo, pontos, nota=None):
    """Linha do tempo horizontal com marcos. `pontos` = [(rotulo, texto), ...]
    até 4. Serve para processo, prazo, sequência — coisa que tem ordem."""
    n = len(pontos)
    marcos = ""
    for i, (rot, txt) in enumerate(pontos):
        marcos += f"""<div class="mk">
          <div class="bola"></div>
          <div class="rot">{rot}</div>
          <div class="txt">{txt}</div></div>"""
    css = f"""
    .ln{{position:absolute;inset:0;background:var(--tinta);color:#fff;
        padding:74px 56px;display:flex;flex-direction:column}}
    .ln h1{{font-family:{SERIF};font-style:italic;font-weight:700;font-size:82px;
           line-height:1.0;letter-spacing:-.025em;max-width:900px}}
    .ln .trilho{{position:relative;margin-top:auto;margin-bottom:auto;padding-top:60px}}
    .ln .trilho::before{{content:"";position:absolute;left:0;right:0;top:60px;
                        height:1px;background:rgba(255,255,255,.28)}}
    .ln .marcos{{display:grid;grid-template-columns:repeat({n},1fr);gap:18px}}
    .ln .mk{{position:relative;padding-top:0}}
    .ln .bola{{width:13px;height:13px;border-radius:50%;background:var(--vermelho);
              margin-top:-6px;margin-bottom:26px}}
    .ln .rot{{font-family:{MONO};font-size:11px;letter-spacing:.18em;
             text-transform:uppercase;color:var(--vermelho);margin-bottom:10px}}
    .ln .txt{{font-size:22px;line-height:1.38;color:rgba(255,255,255,.82)}}
    .ln .nota{{font-size:17px;color:rgba(255,255,255,.5);max-width:700px;margin-bottom:34px}}
    .ln .rodape{{color:rgba(255,255,255,.4)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("linha", css, f"""<div class="tela"><div class="ln">
      <h1>{titulo}</h1>
      <div class="trilho"><div class="marcos">{marcos}</div></div>
      {nt}<div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ═════════════════════════════════════════════════════════ 14 COLUNAS ════
def colunas(rot_a, itens_a, rot_b, itens_b, titulo=None):
    """Duas colunas confrontadas com fio no meio. Comparação direta — o
    formato mais honesto quando a peça é sobre escolha."""
    la = "".join(f"<li>{i}</li>" for i in itens_a)
    lb = "".join(f"<li>{i}</li>" for i in itens_b)
    tt = f"<h1>{titulo}</h1>" if titulo else ""
    css = f"""
    .cl{{position:absolute;inset:0;background:var(--papel);color:var(--tinta);
        padding:74px 56px;display:flex;flex-direction:column}}
    .cl h1{{font-family:{SERIF};font-style:italic;font-weight:700;font-size:82px;
           line-height:.98;letter-spacing:-.025em;margin-bottom:54px;max-width:780px}}
    .cl .par{{flex:1 1 auto;min-height:0;margin-bottom:58px;
             display:grid;grid-template-columns:1fr 1px 1fr;gap:40px}}
    .cl .fio{{background:rgba(17,17,17,.25)}}
    .cl .lado{{display:flex;flex-direction:column;min-height:0}}
    .cl .lado b{{display:block;font-family:{MONO};font-size:12px;letter-spacing:.2em;
                text-transform:uppercase;padding-bottom:16px;
                border-bottom:2px solid var(--tinta);margin-bottom:8px;flex:0 0 auto}}
    .cl .lado.b b{{color:var(--vermelho);border-bottom-color:var(--vermelho)}}
    .cl ul{{list-style:none;flex:1 1 auto;min-height:0;display:flex;flex-direction:column}}
    .cl li{{flex:1 1 0;min-height:0;display:flex;align-items:center;
           font-size:27px;line-height:1.25;
           border-bottom:1px solid rgba(17,17,17,.12)}}
    .cl .lado.a li{{color:rgba(17,17,17,.45)}}
    .cl .rodape{{color:rgba(17,17,17,.4)}}
    """
    return _pagina("colunas", css, f"""<div class="tela"><div class="cl">
      {tt}
      <div class="par">
        <div class="lado a"><b>{rot_a}</b><ul>{la}</ul></div>
        <div class="fio"></div>
        <div class="lado b"><b>{rot_b}</b><ul>{lb}</ul></div>
      </div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ═══════════════════════════════════════════════════════════ 15 ASPAS ════
def aspas(texto, autor, fundo="tinta"):
    """Aspa tipográfica gigante como elemento de construção, não enfeite —
    ela sangra pela borda e o texto se encaixa nela."""
    cores = {"tinta": ("#111111", "#fff"), "papel": ("#F5F1EA", "#111111"),
             "vermelho": ("#FF0005", "#fff")}
    bg, fg = cores[fundo]
    # aspa vermelha sobre vermelho some: no fundo vermelho ela vira vazada
    aspa = "rgba(255,255,255,.34)" if fundo == "vermelho" else "var(--vermelho)"
    css = f"""
    .as{{position:absolute;inset:0;background:{bg};color:{fg};
        padding:0 56px;display:flex;flex-direction:column;justify-content:center}}
    .as .marca{{position:absolute;left:52px;top:132px;width:200px;height:150px;
               pointer-events:none}}
    .as .marca svg{{width:100%;height:100%;display:block}}
    .as blockquote{{position:relative;z-index:3;font-family:{SERIF};font-style:italic;
                   font-weight:620;font-size:78px;line-height:1.14;letter-spacing:-.02em;
                   max-width:880px;margin-top:190px}}
    .as .autor{{position:relative;z-index:3;margin-top:44px;display:flex;
               align-items:center;gap:16px;font-family:{MONO};font-size:13px;
               letter-spacing:.2em;text-transform:uppercase;opacity:.62}}
    .as .autor::before{{content:"";width:46px;height:1px;background:currentColor}}
    .as .rodape{{color:currentColor;opacity:.4}}
    """
    return _pagina("aspas", css, f"""<div class="tela"><div class="as">
      <div class="marca"><svg viewBox="0 0 200 150" aria-hidden="true">
        <path d="M14 150 C14 84 34 26 84 0 L96 22 C66 42 52 70 52 96 L88 96 L88 150 Z"
              fill="{aspa}"/>
        <path d="M112 150 C112 84 132 26 182 0 L194 22 C164 42 150 70 150 96 L186 96 L186 150 Z"
              fill="{aspa}"/>
      </svg></div>
      <blockquote>{texto}</blockquote>
      <div class="autor">{autor}</div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")


# ════════════════════════════════════════════════════════ 16 VELADURA ════
def veladura(foto, titulo, nota=None):
    """Camada de cor translúcida com mistura sobre a foto: a imagem continua
    lá, mas tingida — nem foto crua, nem bloco chapado."""
    css = f"""
    .vl{{position:absolute;inset:0;background:var(--tinta);overflow:hidden}}
    .vl .foto{{position:absolute;inset:0;background-image:url('../fotos/{foto}');
              background-size:cover;background-position:center;
              filter:saturate(1.05) contrast(1.1)}}
    .vl .tinge{{position:absolute;inset:0;background:
               linear-gradient(200deg,rgba(255,0,5,.5) 0%,rgba(17,17,17,.88) 70%);
               mix-blend-mode:hard-light}}
    .vl .fundo{{position:absolute;inset:0;background:rgba(10,8,10,.34)}}
    .vl .txt{{position:absolute;left:56px;right:56px;top:50%;transform:translateY(-50%);z-index:5}}
    .vl h1{{font-family:{SERIF};font-style:italic;font-weight:740;color:#fff;
           font-size:132px;line-height:.92;letter-spacing:-.03em}}
    .vl .nota{{margin-top:26px;font-family:{MONO};font-size:13px;letter-spacing:.22em;
              text-transform:uppercase;color:rgba(255,255,255,.88)}}
    .vl .rodape{{color:rgba(255,255,255,.5)}}
    """
    nt = f'<div class="nota">{nota}</div>' if nota else ""
    return _pagina("veladura", css, f"""<div class="tela"><div class="vl">
      <div class="foto"></div><div class="tinge"></div><div class="fundo"></div>
      <div class="txt"><h1>{titulo}</h1>{nt}</div>
      <div class="rodape">@calazanslumina</div>
      </div><div class="grao"></div></div>""")
