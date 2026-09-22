# -*- coding: utf-8 -*-
"""
Perfil pessoal @rhaicalazans — carrossel de retrato, foto em todos os slides.

A cliente viu as duas versões e escolheu esta: foto em cada slide, nada de
cartão de papel no miolo. Isso reabre o problema que o papel resolvia —
carrossel precisa dar motivo pra deslizar, e dez slides com a mesma imagem
não dão nenhum. A solução aqui é outra e é melhor: **o enquadramento muda
a cada slide**. Plano aberto, fechado no rosto dela, fechado no bebê, os
dois juntos, e um desfocado servindo de fundo pra frase. É uma foto só
lida como se fosse um ensaio — que é exatamente o que revista faz.

Por isso a foto é guardada em 1620×2160, 1,5× o formato final: os planos
fechados usam background-size acima de 100% e em 1080 de largura ficariam
moles.

Luxo aqui não é enfeite, é contenção: fio de cabelo em champanhe, caixa-alta
espaçada, serifa de moda, granulado de filme, margem generosa e mais nada.
O manuscrito saiu — letra de mão lê como recado de geladeira, não como
editorial.
"""
import re

import casa

L, A = 1080, 1440
SANS = "'DM Sans',sans-serif"
MODA = "'Playfair Display',serif"

HANDLE = "@rhaicalazans"
CHAMPANHE = "#E7CFA6"
OURO = "#D4AF6A"


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
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:#15100C}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
.foto{{position:absolute;inset:0;background-repeat:no-repeat}}
/* véu em gradiente escurece só a faixa atrás do texto e preserva a luz do
   resto — é o padrão recomendado pra tipo sobre foto */
.veu{{position:absolute;inset:0}}
/* granulado: é o que separa "foto com texto por cima" de peça impressa */
.grao{{position:absolute;inset:0;z-index:40;pointer-events:none;opacity:.3;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .14 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}
/* fio de cabelo: uma linha de 1px a 34px da borda. É o gesto mais barato
   que existe pra fazer uma peça parecer impressa em vez de postada */
.moldura{{position:absolute;inset:34px;z-index:35;pointer-events:none;
         border:1px solid rgba(231,207,166,.34)}}
.marca{{position:absolute;left:0;right:0;top:62px;z-index:36;text-align:center;
       font-size:13px;letter-spacing:.46em;text-transform:uppercase;
       font-weight:600;color:rgba(255,255,255,.88)}}
.passo{{position:absolute;right:62px;bottom:60px;z-index:36;font-size:12px;
       letter-spacing:.3em;font-weight:600;color:rgba(231,207,166,.72)}}
.rotulo{{font-size:14px;letter-spacing:.42em;text-transform:uppercase;
        font-weight:700;color:{CHAMPANHE}}}
.regua{{width:62px;height:1px;background:{OURO};margin:20px 0 26px}}
.sombra{{text-shadow:0 2px 24px rgba(18,11,7,.72),0 1px 4px rgba(18,11,7,.55)}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes(base))


# ─────────────────────────────────────────────────────────────────────────
# Enquadramentos. Testei variar por plano fechado — rosto dela, rosto do
# bebê, as mãos — e não serve nesta foto: ela está rindo de boca aberta e
# todo plano fechado cai na boca. O que esta imagem tem de melhor é a cena
# inteira, os dois rostos juntos. Então os planos andam pouco, de 100% a
# 114%, e a variação vem de outro lugar: do layout (sangria x placa) e do
# tratamento (cor x monocromia quente x desfoque).
# posição vertical da chapa: 23% é onde a faixa pega a cena de y=.10 a
# y=.67 da foto — rosto dela inteiro e o do bebê até a boca
CHAPA_POS = "center 23%"

PLANOS = {
    "aberto": ("100%", "center 16%"),
    "alto":   ("108%", "center 8%"),
    "baixo":  ("110%", "center 30%"),
    "leve":   ("114%", "46% 18%"),
}


def _foto(base, foto, plano, extra=""):
    tam, pos = PLANOS[plano]
    return (f".foto{{background-image:url('{base}fotos/{foto}');"
            f"background-size:{tam};background-position:{pos};"
            f"filter:saturate(1.04) contrast(1.04){extra}}}")


def _veu(topo=.26, inicio=44, base=.9):
    return (f".veu{{background:linear-gradient(180deg,rgba(21,14,9,{topo}) 0%,"
            f"rgba(21,14,9,.02) 22%,rgba(21,14,9,.06) {inicio}%,"
            f"rgba(19,12,8,{base * .62:.2f}) {inicio + 24}%,"
            f"rgba(17,11,7,{base}) 100%)}}")


def _passo(i, n):
    return f'<div class="passo">{i:02d} — {n:02d}</div>' if i else ""


# ══════════════════════════════════════════════════════════════ CAPA ═════
def capa(foto, rotulo, hook, plano="aberto", base="../../"):
    """Plano aberto: os dois rostos inteiros. O rosto rindo é o interruptor
    de padrão que segura o scroll, então ele não pode estar cortado aqui."""
    css = f"""
    {_foto(base, foto, plano)}
    {_veu(.3, 40, .93)}
    .bloco{{position:absolute;left:78px;right:78px;bottom:122px;z-index:36}}
    h1{{font-family:{SANS};font-weight:700;color:#fff;letter-spacing:-.035em;
       font-size:{_cabe(hook, 112, 910, .485)}px;line-height:.98}}
    .arremate{{margin-top:30px;font-family:{MODA};font-style:italic;
              font-size:31px;color:{CHAMPANHE};letter-spacing:.01em}}
    """
    return _pagina("capa", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">
        <div class="rotulo sombra">{rotulo}</div><div class="regua"></div>
        <h1 class="sombra">{hook}</h1>
        <div class="arremate sombra">deslize →</div>
      </div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)


# ═══════════════════════════════════════════════════════════ PLACA ═══════
def placa(foto, frase, apoio, rotulo=None, numero=None, plano="aberto",
          i=None, n=None, base="../../"):
    """A foto deixa de sangrar e vira chapa emoldurada embaixo, com o texto
    no campo escuro acima. É a variação que revista usa quando tem uma
    imagem só e várias páginas — e aqui ela resolve o ritmo sem precisar
    fechar o enquadramento, que nesta foto não funciona."""
    css = f"""
    .fundo{{position:absolute;inset:0;background:#15100C}}
    .chapa{{position:absolute;left:34px;right:34px;bottom:34px;height:56%;
           overflow:hidden;border:1px solid rgba(231,207,166,.34)}}
    {_foto(base, foto, plano)}
    .foto{{position:absolute;inset:0;background-position:{CHAPA_POS}}}
    .chapa .veu{{background:linear-gradient(180deg,rgba(21,14,9,.28) 0%,
                rgba(21,14,9,0) 34%,rgba(21,14,9,.3) 100%)}}
    .bloco{{position:absolute;left:78px;right:78px;top:122px;z-index:36}}
    .n{{font-family:{MODA};font-style:italic;font-weight:500;font-size:92px;
       line-height:.74;color:{OURO};margin-bottom:10px}}
    h2{{font-family:{SANS};font-weight:700;color:#fff;letter-spacing:-.035em;
       font-size:{_cabe(frase, 82, 900, .48)}px;line-height:1.0}}
    p{{margin-top:22px;font-size:27px;line-height:1.38;
      color:rgba(255,255,255,.84);max-width:840px}}
    .passo{{color:rgba(231,207,166,.55)}}
    """
    topo = (f'<div class="n">{numero:02d}</div>' if numero else
            (f'<div class="rotulo">{rotulo}</div><div class="regua"></div>'
             if rotulo else ""))
    return _pagina("placa", css, f"""<div class="tela">
      <div class="fundo"></div>
      <div class="chapa"><div class="foto"></div><div class="veu"></div></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">{topo}<h2>{frase}</h2><p>{apoio}</p></div>
      {_passo(i, n)}<div class="grao"></div></div>""", base)


# ═══════════════════════════════════════════════════════════ BAIXO ═══════
def baixo(foto, numero, frase, apoio, plano, mono=False, i=None, n=None,
          base="../../"):
    """O item numerado. O algarismo é serifa itálica em ouro, não letra de
    mão: à mão lê como recado, à serifa lê como página de revista."""
    trat = (" grayscale(1) sepia(.6) saturate(1.45) hue-rotate(-14deg)"
            " contrast(1.1) brightness(.82)") if mono else ""
    css = f"""
    {_foto(base, foto, plano, extra=trat)}
    {_veu(.24, 40, .94)}
    .bloco{{position:absolute;left:78px;right:78px;bottom:116px;z-index:36}}
    .n{{font-family:{MODA};font-style:italic;font-weight:500;font-size:104px;
       line-height:.74;color:{OURO};margin-bottom:8px}}
    h2{{font-family:{SANS};font-weight:700;color:#fff;letter-spacing:-.035em;
       font-size:{_cabe(frase, 86, 900, .48)}px;line-height:1.0}}
    p{{margin-top:24px;font-size:29px;line-height:1.38;
      color:rgba(255,255,255,.9);max-width:840px}}
    """
    return _pagina("baixo", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">
        <div class="n sombra">{numero:02d}</div>
        <h2 class="sombra">{frase}</h2>
        <p class="sombra">{apoio}</p>
      </div>
      <div class="moldura"></div>{_passo(i, n)}<div class="grao"></div></div>""", base)


# ════════════════════════════════════════════════════════ DESFOQUE ═══════
def desfoque(foto, texto, arremate=None, plano="leve", i=None, n=None,
             base="../../"):
    """A frase pra printar. A foto continua ali, desfocada e fechada, virando
    textura — o leitor reconhece a peça sem que a imagem dispute com o
    tipo. É o slide que gera envio no direct, que pesa mais que curtida."""
    css = f"""
    {_foto(base, foto, plano, extra=" blur(26px) brightness(.5)")}
    .foto{{transform:scale(1.12)}}
    .veu{{background:radial-gradient(120% 90% at 50% 46%,
         rgba(19,12,8,.42) 0%,rgba(17,11,7,.86) 72%,rgba(15,10,6,.95) 100%)}}
    .bloco{{position:absolute;left:78px;right:78px;top:50%;
           transform:translateY(-50%);z-index:36;text-align:center}}
    .aspa{{font-family:{MODA};font-style:italic;font-size:132px;line-height:.4;
          color:{OURO};opacity:.55;margin-bottom:34px}}
    h2{{font-family:{MODA};font-style:italic;font-weight:600;color:#fff;
       font-size:{_cabe(texto, 104, 900, .43)}px;line-height:1.08;
       letter-spacing:-.02em}}
    .arremate{{margin-top:30px;font-size:16px;letter-spacing:.4em;
              text-transform:uppercase;font-weight:600;color:{CHAMPANHE}}}
    """
    ar = f'<div class="arremate">{arremate}</div>' if arremate else ""
    return _pagina("desfoque", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco"><div class="aspa">“</div><h2>{texto}</h2>{ar}</div>
      <div class="moldura"></div>{_passo(i, n)}<div class="grao"></div></div>""", base)


# ═══════════════════════════════════════════════════════════ FECHO ═══════
def fecho(foto, linha, salvar, mandar, plano="aberto", base="../../"):
    """Salvar e mandar no direct pesam de três a cinco vezes a curtida no
    algoritmo de 2026, então os dois pedidos entram escritos e separados —
    não subentendidos numa frase bonita."""
    css = f"""
    {_foto(base, foto, plano)}
    {_veu(.3, 34, .96)}
    .bloco{{position:absolute;left:78px;right:78px;bottom:112px;z-index:36}}
    h2{{font-family:{MODA};font-style:italic;font-weight:600;color:#fff;
       font-size:{_cabe(linha, 92, 900, .43)}px;line-height:1.06;
       letter-spacing:-.02em}}
    .pedidos{{margin-top:36px;border-top:1px solid rgba(231,207,166,.38);
             padding-top:26px;display:flex;flex-direction:column;gap:18px}}
    .pedido{{display:flex;align-items:baseline;gap:18px;font-size:27px;
            font-weight:500;color:#fff;line-height:1.28}}
    .pedido b{{flex:0 0 auto;font-family:{MODA};font-style:italic;
              font-weight:500;font-size:30px;color:{OURO}}}
    """
    return _pagina("fecho", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">
        <h2 class="sombra">{linha}</h2>
        <div class="pedidos">
          <div class="pedido sombra"><b>i.</b><span>{salvar}</span></div>
          <div class="pedido sombra"><b>ii.</b><span>{mandar}</span></div>
        </div>
      </div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)
