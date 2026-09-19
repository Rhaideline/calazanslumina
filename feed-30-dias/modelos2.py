# -*- coding: utf-8 -*-
"""
12 modelos — terceira geração. Corte de tudo que não está nos exemplos dela.

O que os exemplos dela (@rhaicalazans, prints reais) realmente são:
    fundo preto · um tracinho vermelho · uma frase serifada em itálico,
    branco com UM acento vermelho · ponto final · nada mais.
Sem logo, sem selo, sem chapéu em pílula, sem barrinha de progresso, sem
fita adesiva. A versão anterior tinha 4-5 elementos de chrome brigando
com o texto — isso não é riqueza, é ruído, e foi isso que ela apontou.

Os prints do CapCut que ela também gostou (NARU, VOA, OUTFIT OF THE DAY,
DETALHES) são igualmente enxutos: foto + UMA palavra grande + legenda
minúscula. Nenhum tem logo watermark, nenhum tem badge, nenhum tem barra
de progresso — a marca ali É a palavra grande, não um selo por cima dela.

Regra desta versão: cada peça tem NO MÁXIMO dois elementos gráficos além
do texto principal (a foto, quando houver, conta como um). Nada de chapéu
em pílula, nada de logo repetido em todo frame, nada de ornamento que não
carregue informação.

    1  HERO-FOTO   foto   full-bleed, palavra na base, legenda mínima
    2  MURO        —      réplica direta do formato dela: preto, tracinho, frase
    3  DIAGONAL    foto   corte foto/tinta, palavra centralizada na faixa
    4  FICHA       —      carimbo + campos — o único registro "documento"
    5  MEDALHAO    foto   retrato circular + palavra ao lado
    6  CENTRAL     —      um número gigante, dead center
    7  POLAROID    foto   retrato inclinado com moldura branca
    8  RECIBO      —      lista com pontilhado até o valor
    9  JANELA      foto   foto emoldurada, legenda embaixo
   10  CARTAZ      —      três linhas de peso empilhado, tipografia pura
   11  METADE      foto   split vertical 50/50
   12  SELO        —      anel + palavra, quase tudo vazio
"""
from pathlib import Path

import casa

FOTOS = Path(__file__).parent / "fotos"


def _cabecalho(titulo, css):
    return f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{titulo}</title>
<style>
{{FONTES}}
:root{{__TOKENS__}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{casa.L}px;height:{casa.A}px;overflow:hidden;background:#000}}
body{{font-family:'DM Sans',system-ui,sans-serif}}
.tela{{position:relative;width:{casa.L}px;height:{casa.A}px;overflow:hidden}}
em{{font-style:italic}}
.grao{{position:absolute;inset:0;z-index:40;pointer-events:none;opacity:.35;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .13 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}

/* ---- Marca: um traço e um nome, nada mais. Nenhum ícone, nenhuma pílula. */
.tracinho{{width:34px;height:3px;background:var(--vermelho);display:block}}
.assinatura{{position:absolute;left:64px;bottom:56px;z-index:6;
            font-size:12px;letter-spacing:.32em;text-transform:uppercase;
            font-weight:600;color:rgba(255,255,255,.42)}}
.assinatura.escura{{color:rgba(17,17,17,.4)}}
.fita{{position:absolute;width:82px;height:28px;background:rgba(245,241,234,.82);
      box-shadow:0 2px 6px rgba(0,0,0,.25);z-index:6}}
.fita::before{{content:"";position:absolute;inset:0;
      background-image:repeating-linear-gradient(45deg,rgba(0,0,0,.04) 0 2px,transparent 2px 6px)}}
.mono{{font-family:'Space Mono',monospace}}
{css}
</style></head><body>"""


def _fechar():
    return "</body></html>"


def _finaliza(nome, corpo, css):
    doc = _cabecalho(nome, css) + corpo + _fechar()
    return doc.replace("{FONTES}", casa.fontes("../")).replace(
        "__TOKENS__", casa._TOKENS)


# ═══════════════════════════════════════════════════════ 1. HERO-FOTO ════
def hero_foto(foto, palavra, nota=None):
    """Foto de chão a teto. Uma palavra grande na base, legenda minúscula.
    Sem chapéu em pílula, sem logo — a foto e a frase carregam tudo."""
    css = """
    .hf-foto{position:absolute;inset:0;background-size:cover;background-position:center;
             filter:saturate(.86) contrast(1.08) brightness(.8)}
    .hf-scrim{position:absolute;inset:0;
      background:linear-gradient(180deg,rgba(8,8,10,.06) 0%,rgba(8,8,10,.16) 44%,rgba(8,8,10,.9) 80%,#08080a 100%)}
    .hf-base{position:absolute;left:64px;right:64px;bottom:96px;z-index:5}
    .hf-base .tracinho{margin-bottom:26px}
    .hf-base h1{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;color:#fff;
                font-size:88px;line-height:.98;letter-spacing:-.02em}
    .hf-base h1 em{color:var(--vermelho2)}
    .hf-base .nota{display:block;margin-top:22px;font-size:16px;letter-spacing:.05em;
                   color:rgba(255,255,255,.6);font-weight:500}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela">
      <div class="hf-foto" style="background-image:url('../fotos/{foto}')"></div>
      <div class="hf-scrim"></div>
      <div class="hf-base"><span class="tracinho"></span><h1>{palavra}</h1>{nota_html}</div>
      <div class="grao"></div>
    </div>"""
    return _finaliza("hero-foto", body, css)


# ═══════════════════════════════════════════════════════════ 2. MURO ═════
def muro(palavra, sub=None, fundo="tinta"):
    """Réplica direta do formato que ela já usa: preto, tracinho vermelho no
    canto, frase serifada em itálico começando à esquerda, um acento
    vermelho. Sem logo, sem selo, sem centralização — exatamente como é."""
    cores = {"tinta": ("#111111", "#fff"), "papel": ("#F5F1EA", "#111111")}
    bg, fg = cores[fundo]
    css = f"""
    .mr{{position:absolute;inset:0;background:{bg};color:{fg};
        display:flex;flex-direction:column;justify-content:center;padding:0 64px}}
    .mr .tracinho{{margin-bottom:36px}}
    .mr h1{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
           font-size:92px;line-height:1.06;letter-spacing:-.015em;max-width:900px}}
    .mr h1 em{{color:var(--vermelho)}}
    .mr .sub{{margin-top:30px;font-size:14px;letter-spacing:.3em;text-transform:uppercase;
             font-weight:600;opacity:.45}}
    """
    sub_html = f'<div class="sub">{sub}</div>' if sub else ""
    body = f"""<div class="tela"><div class="mr">
      <span class="tracinho"></span><h1>{palavra}</h1>{sub_html}
      </div><div class="grao"></div></div>"""
    return _finaliza("muro", body, css)


# ═══════════════════════════════════════════════════════ 3. DIAGONAL ═════
def diagonal(foto, palavra, nota=None, invertido=False):
    """Corte diagonal separando foto e tinta. A palavra vive na faixa de
    tinta — sem chapéu, sem logo, um tracinho só marca o começo."""
    clip_a = "polygon(0 0,100% 0,100% 42%,0 62%)" if not invertido else "polygon(0 0,100% 0,100% 62%,0 42%)"
    css = f"""
    .dg{{position:absolute;inset:0;background:var(--tinta)}}
    .dg-foto{{position:absolute;inset:0;background-size:cover;background-position:center;
             clip-path:{clip_a};filter:saturate(.82) contrast(1.1) brightness(.92)}}
    .dg-corpo{{position:absolute;left:64px;right:64px;bottom:88px;z-index:5}}
    .dg-corpo .tracinho{{margin-bottom:24px}}
    .dg-corpo h1{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;color:#fff;
                 font-size:68px;line-height:1.02;letter-spacing:-.015em;max-width:860px}}
    .dg-corpo h1 em{{color:var(--vermelho2)}}
    .dg-corpo .nota{{display:block;margin-top:18px;font-size:15px;color:rgba(255,255,255,.55)}}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela"><div class="dg">
      <div class="dg-foto" style="background-image:url('../fotos/{foto}')"></div>
      <div class="dg-corpo"><span class="tracinho"></span><h1>{palavra}</h1>{nota_html}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("diagonal", body, css)


# ═══════════════════════════════════════════════════════════ 4. FICHA ════
def ficha(numero, titulo, campos, nota=None):
    """Dossiê — o único modelo que se permite um carimbo, porque aqui ele
    carrega informação (o número da peça), não decoração."""
    css = """
    .fc{position:absolute;inset:0;background:var(--papel);color:var(--tinta);padding:64px}
    .fc-carimbo{position:absolute;top:60px;right:64px;border:2px solid var(--vermelho);
               color:var(--vermelho);padding:8px 14px;font-family:'Space Mono',monospace;
               font-size:14px;font-weight:700;transform:rotate(-3deg)}
    .fc h1{margin-top:56px;font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
          font-size:70px;line-height:1.04;letter-spacing:-.015em;max-width:880px}
    .fc h1 em{color:var(--vermelho)}
    .fc-campos{margin-top:52px;border-top:2px solid var(--tinta);font-family:'Space Mono',monospace}
    .fc-campo{display:flex;justify-content:space-between;align-items:baseline;gap:24px;
              padding:20px 0;border-bottom:1px solid rgba(17,17,17,.18)}
    .fc-campo .r{font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:rgba(17,17,17,.5)}
    .fc-campo .v{font-size:20px;font-weight:700;text-align:right}
    .fc-nota{margin-top:26px;font-size:15px;color:rgba(17,17,17,.55);line-height:1.5}
    """
    linhas = "".join(f'<div class="fc-campo"><span class="r">{r}</span><span class="v">{v}</span></div>'
                      for r, v in campos)
    nt = f'<p class="fc-nota">{nota}</p>' if nota else ""
    body = f"""<div class="tela"><div class="fc">
      <div class="fc-carimbo">{numero}</div>
      <h1>{titulo}</h1>
      <div class="fc-campos">{linhas}</div>{nt}
      </div><div class="grao"></div></div>"""
    return _finaliza("ficha", body, css)


# ═══════════════════════════════════════════════════════ 5. MEDALHÃO ═════
def medalhao(foto, palavra, nota=None):
    """Retrato circular + palavra ao lado. Sem chapéu, sem borda dupla —
    um anel fino só."""
    css = """
    .md{position:absolute;inset:0;background:var(--tinta);color:#fff;padding:64px;
        display:flex;align-items:center;gap:56px}
    .md-foto{width:400px;height:400px;border-radius:50%;background-size:cover;background-position:center;
             flex-shrink:0;box-shadow:0 0 0 1px var(--vermelho),0 30px 70px -20px rgba(0,0,0,.7)}
    .md-txt .tracinho{margin-bottom:24px}
    .md-txt h1{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
               font-size:64px;line-height:1.02;letter-spacing:-.015em}
    .md-txt h1 em{color:var(--vermelho2)}
    .md-txt .nota{display:block;margin-top:20px;font-size:16px;color:rgba(255,255,255,.6)}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela"><div class="md">
        <div class="md-foto" style="background-image:url('../fotos/{foto}')"></div>
        <div class="md-txt"><span class="tracinho"></span><h1>{palavra}</h1>{nota_html}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("medalhao", body, css)


# ═══════════════════════════════════════════════════════════ 6. CENTRAL ══
def central(numero, sufixo, legenda, fundo="vermelho"):
    """Um número do tamanho da tela, dead center. A prova reduzida ao osso —
    o modelo mais próximo do minimalismo dela, na chave numérica."""
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
    """
    body = f"""<div class="tela"><div class="ct">
      <div class="cifra">{numero}<sup>{sufixo}</sup></div>
      <div class="legenda">{legenda}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("central", body, css)


# ═══════════════════════════════════════════════════════════ 7. POLAROID ═
def polaroid(foto, legenda, palavra):
    """Retrato inclinado com moldura branca e fita — o único modelo que se
    permite um objeto flutuante, porque é o próprio conceito da peça."""
    css = """
    .pl{position:absolute;inset:0;background:linear-gradient(160deg,#1a0d0d 0%,#111 55%,#000 100%);
        color:#fff;padding:64px;display:flex;align-items:center;gap:64px}
    .pl-foto{width:400px;background:#fff;padding:18px 18px 68px;transform:rotate(-5deg);
             box-shadow:0 35px 80px -20px rgba(0,0,0,.7);flex-shrink:0;position:relative}
    .pl-foto .fita{top:-15px;left:50%;margin-left:-41px;transform:rotate(-3deg)}
    .pl-foto .img{width:100%;height:400px;background-size:cover;background-position:center}
    .pl-foto .legenda{position:absolute;left:18px;bottom:18px;font-family:'DM Serif Display',serif;
                      font-style:italic;font-size:18px;color:#222}
    .pl-txt h1{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
              font-size:64px;line-height:1.0;letter-spacing:-.015em}
    .pl-txt h1 em{color:var(--vermelho2)}
    """
    body = f"""<div class="tela"><div class="pl">
        <div class="pl-foto"><div class="fita"></div>
          <div class="img" style="background-image:url('../fotos/{foto}')"></div>
          <div class="legenda">{legenda}</div></div>
        <div class="pl-txt"><h1>{palavra}</h1></div>
      </div><div class="grao"></div></div>"""
    return _finaliza("polaroid", body, css)


# ═══════════════════════════════════════════════════════════ 8. RECIBO ═══
def recibo(titulo, itens, total_r, total_v):
    """Nota fiscal. Lista com pontilhado até o valor — a única peça que usa
    monoespaçada no corpo inteiro, porque aqui isso é o conceito, não enfeite."""
    css = """
    .rc{position:absolute;inset:0;background:var(--papel);color:var(--tinta);
        padding:64px;display:flex;flex-direction:column}
    .rc h1{font-family:'DM Serif Display',serif;font-style:italic;
          font-weight:400;font-size:52px;line-height:1.08;letter-spacing:-.01em;max-width:820px}
    .rc h1 em{color:var(--vermelho)}
    .rc-trilha{border-top:2px dashed rgba(17,17,17,.35);margin-top:40px;padding-top:6px;flex:1;
              font-family:'Space Mono',monospace}
    .rc-item{display:flex;align-items:baseline;gap:14px;padding:17px 0;
             border-bottom:1px dashed rgba(17,17,17,.28);font-size:17px}
    .rc-item .pontos{flex:1;border-bottom:1px dotted rgba(17,17,17,.4);height:0;transform:translateY(-6px)}
    .rc-item .v{font-weight:700;white-space:nowrap}
    .rc-total{display:flex;justify-content:space-between;align-items:baseline;
              border-top:2px dashed rgba(17,17,17,.35);padding-top:20px;margin-top:10px}
    .rc-total .r{font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700}
    .rc-total .v{font-size:42px;font-weight:700;color:var(--vermelho)}
    """
    linhas = "".join(
        f'<div class="rc-item"><span>{t}</span><span class="pontos"></span><span class="v">{v}</span></div>'
        for t, v in itens)
    body = f"""<div class="tela"><div class="rc">
      <h1>{titulo}</h1>
      <div class="rc-trilha">{linhas}
        <div class="rc-total"><span class="r">{total_r}</span><span class="v">{total_v}</span></div>
      </div></div><div class="grao"></div></div>"""
    return _finaliza("recibo", body, css)


# ═══════════════════════════════════════════════════════════ 9. JANELA ═══
def janela(foto, palavra, nota=None):
    """Foto emoldurada com passe-partout largo. Sem logo, sem fita — o
    contraponto contido do hero-foto, que é invasivo de propósito."""
    css = """
    .jn{position:absolute;inset:0;background:var(--tinta);color:#fff;
        display:flex;flex-direction:column;align-items:center;padding:68px 88px 60px}
    .jn-moldura{margin-top:6px;padding:20px;border:1px solid rgba(255,255,255,.22);flex:1;width:100%;
               display:flex;align-items:center;justify-content:center}
    .jn-foto{width:100%;height:100%;background-size:cover;background-position:center;
             filter:saturate(.9) contrast(1.05)}
    .jn-legenda{margin-top:32px;text-align:center}
    .jn-legenda h1{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
                  font-size:44px;line-height:1.1;letter-spacing:-.01em}
    .jn-legenda h1 em{color:var(--vermelho2)}
    .jn-legenda .nota{display:block;margin-top:14px;font-size:15px;color:rgba(255,255,255,.55)}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    body = f"""<div class="tela"><div class="jn">
      <div class="jn-moldura"><div class="jn-foto" style="background-image:url('../fotos/{foto}')"></div></div>
      <div class="jn-legenda"><h1>{palavra}</h1>{nota_html}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("janela", body, css)


# ═══════════════════════════════════════════════════════════ 10. CARTAZ ══
def cartaz(linha1, linha2_em, rodape=None):
    """Duas linhas, dois pesos — mesma ideia do muro, versão dupla escala.
    Tirei o terceiro andar e o rodapé decorativo: uma tensão só."""
    css = """
    .cz{position:absolute;inset:0;background:var(--tinta);color:#fff;padding:64px;
        display:flex;flex-direction:column;justify-content:center}
    .cz .tracinho{margin-bottom:32px}
    .cz-pilha{display:flex;flex-direction:column}
    .cz-pilha .a{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
                font-size:96px;line-height:.96;letter-spacing:-.02em;color:rgba(255,255,255,.55)}
    .cz-pilha .b{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
                font-size:132px;line-height:.9;letter-spacing:-.03em;color:var(--vermelho2);margin-top:4px}
    .cz-rodape{margin-top:40px;font-size:14px;letter-spacing:.16em;color:rgba(255,255,255,.45)}
    """
    rod = f'<div class="cz-rodape">{rodape}</div>' if rodape else ""
    body = f"""<div class="tela"><div class="cz">
      <span class="tracinho"></span>
      <div class="cz-pilha"><span class="a">{linha1}</span><span class="b">{linha2_em}</span></div>
      {rod}
      </div><div class="grao"></div></div>"""
    return _finaliza("cartaz", body, css)


# ═══════════════════════════════════════════════════════════ 11. METADE ══
def metade(foto, palavra, nota=None, botao=None, foto_esquerda=False):
    """Split 50/50. Metade tinta com a frase, metade foto até a borda."""
    ordem = "row-reverse" if foto_esquerda else "row"
    css = f"""
    .mt{{position:absolute;inset:0;display:flex;flex-direction:{ordem}}}
    .mt-foto{{width:50%;height:100%;background-size:cover;background-position:center;
             filter:saturate(.88) contrast(1.05)}}
    .mt-txt{{width:50%;height:100%;background:var(--tinta);color:#fff;padding:64px 52px;
            display:flex;flex-direction:column;justify-content:flex-end}}
    .mt-txt .tracinho{{margin-bottom:24px}}
    .mt-txt h1{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
               font-size:52px;line-height:1.06;letter-spacing:-.015em;margin-bottom:18px}}
    .mt-txt h1 em{{color:var(--vermelho2)}}
    .mt-txt .nota{{display:block;font-size:16px;color:rgba(255,255,255,.6)}}
    .mt-botao{{display:inline-flex;align-self:flex-start;margin-top:28px;padding:14px 22px;
              background:#fff;color:var(--tinta);border-radius:999px;font-size:12px;
              letter-spacing:.18em;text-transform:uppercase;font-weight:700}}
    """
    nota_html = f'<span class="nota">{nota}</span>' if nota else ""
    btn = f'<span class="mt-botao">{botao}</span>' if botao else ""
    body = f"""<div class="tela"><div class="mt">
      <div class="mt-foto" style="background-image:url('../fotos/{foto}')"></div>
      <div class="mt-txt"><span class="tracinho"></span><h1>{palavra}</h1>{nota_html}{btn}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("metade", body, css)


# ═══════════════════════════════════════════════════════════ 12. SELO ════
def selo(texto_anel, palavra, fundo="papel"):
    """Anel fino + palavra. Quase tudo vazio ao redor — o outro polo
    minimalista, em chave gráfica."""
    cores = {"papel": ("#F5F1EA", "#111111"), "tinta": ("#111111", "#fff")}
    bg, fg = cores[fundo]
    css = f"""
    .sl{{position:absolute;inset:0;background:{bg};color:{fg};
        display:flex;flex-direction:column;align-items:center;justify-content:center}}
    .sl-anel{{width:420px;height:420px;border-radius:50%;border:1px solid var(--vermelho);
             display:flex;align-items:center;justify-content:center}}
    .sl-palavra{{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;
                font-size:64px;text-align:center;letter-spacing:-.015em;max-width:300px;line-height:1.0}}
    .sl-palavra em{{color:var(--vermelho)}}
    .sl-legenda{{margin-top:32px;font-size:12px;letter-spacing:.34em;text-transform:uppercase;
               font-weight:700;color:var(--vermelho)}}
    """
    body = f"""<div class="tela"><div class="sl">
      <div class="sl-anel"><div class="sl-palavra">{palavra}</div></div>
      <div class="sl-legenda">{texto_anel}</div>
      </div><div class="grao"></div></div>"""
    return _finaliza("selo", body, css)
