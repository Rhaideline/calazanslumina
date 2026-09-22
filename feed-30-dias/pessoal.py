# -*- coding: utf-8 -*-
"""
Biblioteca de layouts do perfil pessoal @rhaicalazans — dez peças, um sistema.

Histórico curto, porque explica a forma do arquivo: a cliente mandou quatro
modelos de Canva. Eu construí os quatro, depois refiz tudo numa linguagem
minha e **joguei os quatro fora**. Ela cobrou, com razão. Este arquivo é a
união: as quatro capas que ela escolheu, mais as que eu propus, todas no
mesmo sistema de tokens, mesmo formato e mesma régua tipográfica — para
serem intercambiáveis de verdade, não coincidirem por sorte.

    CAPAS     C1 empilhada · C2 mista · C3 pergunta · C4 diário · C5 editorial
    MIOLO     M1 sangria   · M2 placa · M3 monocromia
    PAUSA     P1 desfoque
    FECHO     F1 fecho

Regras do sistema, iguais em todas as dez:

  formato     1080×1440 (3:4) — único que preenche feed e grade sem corte
  foto        guardada em 1620×2160 porque os planos passam de 100%
  ancoragem   texto no terço de baixo; nesta foto os dois rostos ocupam o
              meio e texto centralizado tapa o bebê
  véu         gradiente, escurece só a faixa atrás do texto
  contraste   medido no PNG renderizado (verificar_contraste.py), nunca no CSS
  corpo       calculado pela linha mais longa, nunca fixo
"""
import re

import casa

L, A = 1080, 1440

# ── tokens ───────────────────────────────────────────────────────────────
SANS = "'DM Sans',sans-serif"          # peso, títulos e corpo
MODA = "'Playfair Display',serif"      # serifa de moda: números e frases
MAO = "'Caveat',cursive"               # manuscrito: só nas capas C3 e C4

TINTA = "#15100C"
CHAMPANHE = "#E7CFA6"
OURO = "#D4AF6A"
CREME = "#F7E7C4"

HANDLE = "@rhaicalazans"

# planos de enquadramento. Testei planos fechados (rosto dela, rosto do
# bebê, as mãos) e não servem nesta foto: ela ri de boca bem aberta e todo
# plano fechado cai na boca. Os planos andam pouco e a variação vem do
# layout e do tratamento.
PLANOS = {
    "aberto": ("100%", "center 16%"),
    "alto":   ("108%", "center 8%"),
    "baixo":  ("110%", "center 30%"),
    "leve":   ("114%", "46% 18%"),
}
# a chapa da M2 é faixa deitada e a foto é retrato: com `cover` cabe só 57%
# da altura da imagem. 23% é onde a faixa segura os dois rostos.
CHAPA_POS = "center 23%"


def _cabe(texto, base, largura=940, avanco=.5):
    """Corpo que faz a linha mais longa caber na largura útil."""
    linhas = [re.sub(r"<[^>]+>", "", l) for l in str(texto).split("<br>")]
    maior = max((len(l) for l in linhas), default=1) or 1
    return int(min(base, largura / (avanco * maior)))


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


def _passo(i, n, cor=None):
    if not i:
        return ""
    c = cor or "rgba(231,207,166,.72)"
    return f'<div class="passo" style="color:{c}">{i:02d} — {n:02d}</div>'


def _pagina(nome, css, corpo, base="../../"):
    doc = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{nome}</title>
<style>
{{FONTES}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:{TINTA}}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
.foto{{position:absolute;inset:0;background-repeat:no-repeat}}
.veu{{position:absolute;inset:0}}
/* granulado de filme: é o que separa "foto com texto por cima" de peça
   impressa. Fica em todas as dez — é o que costura o sistema. */
.grao{{position:absolute;inset:0;z-index:40;pointer-events:none;opacity:.3;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .14 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}}
/* fio de cabelo a 34px da borda: o gesto mais barato que existe pra uma
   peça parecer impressa em vez de postada */
.moldura{{position:absolute;inset:34px;z-index:35;pointer-events:none;
         border:1px solid rgba(231,207,166,.34)}}
.marca{{position:absolute;left:0;right:0;top:62px;z-index:36;text-align:center;
       font-size:13px;letter-spacing:.46em;text-transform:uppercase;
       font-weight:600;color:rgba(255,255,255,.88)}}
.passo{{position:absolute;right:62px;bottom:60px;z-index:36;font-size:12px;
       letter-spacing:.3em;font-weight:600}}
.rotulo{{font-size:14px;letter-spacing:.42em;text-transform:uppercase;
        font-weight:700;color:{CHAMPANHE}}}
.regua{{width:62px;height:1px;background:{OURO};margin:20px 0 26px}}
.sombra{{text-shadow:0 2px 24px rgba(18,11,7,.72),0 1px 4px rgba(18,11,7,.55)}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes(base))


# ╔═══════════════════════════════════════════════════════════════════════╗
# ║  CAPAS                                                                ║
# ╚═══════════════════════════════════════════════════════════════════════╝

# ───────────────────────────────────────────── C1 · EMPILHADA ────────────
def c1_empilhada(foto, linhas, chapeu=None, plano="aberto", base="../../"):
    """Sem-serifa gorda empilhada, nome em caixa-alta espaçada com filete.
    Referência dela: "Coisas que eu acho chique".

    É a mais limpa das cinco e a que aguenta frase longa — até quatro
    linhas. Use quando o título já é o conteúdo."""
    texto = "<br>".join(linhas)
    cp = f'<div class="chapeu sombra">{chapeu}</div>' if chapeu else ""
    css = f"""
    {_foto(base, foto, plano)}
    {_veu(.24, 42, .88)}
    .selo{{position:absolute;left:50%;transform:translateX(-50%);top:58px;
          z-index:36;width:430px;text-align:center}}
    .selo span{{display:block;font-size:14px;letter-spacing:.4em;font-weight:600;
               text-transform:uppercase;color:#fff;padding-bottom:15px}}
    .selo i{{display:block;height:1px;background:rgba(231,207,166,.62)}}
    .bloco{{position:absolute;left:62px;right:62px;bottom:104px;z-index:36;
           text-align:center}}
    .chapeu{{font-size:17px;letter-spacing:.4em;font-weight:700;
            text-transform:uppercase;color:{CHAMPANHE};margin-bottom:24px}}
    h1{{font-family:{SANS};font-weight:700;color:#fff;letter-spacing:-.035em;
       font-size:{_cabe(texto, 122, 940, .49)}px;line-height:.98}}
    """
    return _pagina("c1-empilhada", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="selo sombra"><span>{HANDLE}</span><i></i></div>
      <div class="bloco">{cp}<h1 class="sombra">{texto}</h1></div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)


# ─────────────────────────────────────────────────── C2 · MISTA ──────────
def c2_mista(foto, serif, sans, sob=None, cta="leia a legenda",
             plano="aberto", base="../../"):
    """Serifa itálica encavalando sem-serifa gorda.
    Referência dela: "Conteúdo não serve".

    É a de mais personalidade e a mais exigente: precisa de duas palavras
    curtas, uma em cada peso. O encavalamento é de .05em — a .19em, que era
    o valor bonito, o agudo do "é" cai dentro da barriga branca da serifa
    de cima e o acento some."""
    css = f"""
    {_foto(base, foto, plano)}
    {_veu(.26, 40, .9)}
    .meio{{position:absolute;left:52px;right:52px;bottom:154px;
          z-index:36;text-align:center}}
    .serif{{font-family:{MODA};font-style:italic;font-weight:500;
           font-size:{_cabe(serif, 148, 940, .42)}px;line-height:.9;
           letter-spacing:-.015em;color:#fff;position:relative;z-index:2}}
    .sans{{font-family:{SANS};font-weight:700;margin-top:-.05em;
          font-size:{_cabe(sans, 126, 940, .49)}px;line-height:.92;
          letter-spacing:-.035em;color:#fff;position:relative;z-index:1}}
    .sob{{margin-top:28px;font-size:19px;letter-spacing:.44em;font-weight:600;
         text-transform:uppercase;color:{CHAMPANHE}}}
    .cta{{position:absolute;left:0;right:0;bottom:76px;z-index:36;
         text-align:center;font-family:{MODA};font-style:italic;font-size:26px;
         color:rgba(255,255,255,.88)}}
    """
    sb = f'<div class="sob sombra">{sob}</div>' if sob else ""
    return _pagina("c2-mista", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="meio">
        <div class="serif sombra">{serif}</div>
        <div class="sans sombra">{sans}</div>{sb}
      </div>
      <div class="cta sombra">{cta}</div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)


# ──────────────────────────────────────────────── C3 · PERGUNTA ──────────
def c3_pergunta(foto, chamada, manuscrito, plano="aberto", base="../../"):
    """Sem-serifa gorda em creme, pergunta manuscrita grifada embaixo.
    Referência dela: "Me conta,".

    É a que mais puxa comentário, porque termina em pergunta de verdade —
    e comentário é o terceiro pedido que o algoritmo de 2026 paga bem. O
    manuscrito volta aqui de propósito: numa pergunta pessoal ele lê como
    recado, que é exatamente o tom certo."""
    css = f"""
    {_foto(base, foto, plano)}
    {_veu(.24, 38, .92)}
    .bloco{{position:absolute;left:62px;right:110px;bottom:132px;z-index:36}}
    h1{{font-family:{SANS};font-weight:700;color:{CREME};
       font-size:{_cabe(chamada, 134, 890, .5)}px;line-height:.94;
       letter-spacing:-.035em}}
    .mao{{margin-top:24px;font-family:{MAO};font-weight:600;color:#fff;
         font-size:{_cabe(manuscrito, 80, 860, .34)}px;line-height:1.14;
         display:inline-block;padding-bottom:12px;
         border-bottom:4px solid rgba(212,175,106,.9)}}
    """
    return _pagina("c3-pergunta", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">
        <h1 class="sombra">{chamada}</h1>
        <div class="mao sombra">{manuscrito}</div>
      </div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)


# ────────────────────────────────────────────────── C4 · DIÁRIO ──────────
def c4_diario(foto, manuscrito, episodio=None, plano="baixo", base="../../"):
    """Só manuscrito sobre a foto, como se ela tivesse escrito por cima.
    Referência dela: "Meu dia em um post".

    A mais informal das cinco e a única que não usa sem-serifa. Boa pra
    série recorrente numerada por episódio — o leitor volta pelo próximo.
    O véu é mais leve aqui: a peça vive de parecer despretensiosa."""
    css = f"""
    {_foto(base, foto, plano)}
    .veu{{background:linear-gradient(180deg,rgba(21,14,9,.44) 0%,
         rgba(21,14,9,.1) 34%,rgba(21,14,9,.04) 60%,rgba(19,12,8,.6) 100%)}}
    .mao{{position:absolute;left:66px;right:330px;top:96px;z-index:36;
         font-family:{MAO};font-weight:600;color:#fff;
         font-size:{_cabe(manuscrito, 96, 660, .33)}px;line-height:1.06}}
    .ep{{position:absolute;right:66px;top:340px;z-index:36;text-align:right;
        font-family:{MAO};font-weight:600;color:{CREME};
        font-size:60px;line-height:1.1}}
    .marca{{top:auto;bottom:78px}}
    """
    ep = f'<div class="ep sombra">{episodio}</div>' if episodio else ""
    return _pagina("c4-diario", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="mao sombra">{manuscrito}</div>{ep}
      <div class="marca sombra">{HANDLE}</div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)


# ─────────────────────────────────────────────── C5 · EDITORIAL ──────────
def c5_editorial(foto, rotulo, hook, plano="aberto", base="../../"):
    """Chapéu em champanhe, filete de ouro, título em sem-serifa, convite
    em serifa itálica. É a minha proposta e a mais sóbria das cinco.

    Use quando o gancho for uma tese e não uma lista: o chapéu prepara, o
    filete separa, o título afirma."""
    css = f"""
    {_foto(base, foto, plano)}
    {_veu(.3, 40, .93)}
    .bloco{{position:absolute;left:78px;right:78px;bottom:122px;z-index:36}}
    h1{{font-family:{SANS};font-weight:700;color:#fff;letter-spacing:-.035em;
       font-size:{_cabe(hook, 112, 910, .485)}px;line-height:.98}}
    .arremate{{margin-top:30px;font-family:{MODA};font-style:italic;
              font-size:31px;color:{CHAMPANHE}}}
    """
    return _pagina("c5-editorial", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">
        <div class="rotulo sombra">{rotulo}</div><div class="regua"></div>
        <h1 class="sombra">{hook}</h1>
        <div class="arremate sombra">deslize →</div>
      </div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)


# ╔═══════════════════════════════════════════════════════════════════════╗
# ║  MIOLO                                                                ║
# ╚═══════════════════════════════════════════════════════════════════════╝

# ───────────────────────────────────────────────── M1 · SANGRIA ──────────
def m1_sangria(foto, numero, frase, apoio, plano="aberto", mono=False,
               i=None, n=None, base="../../"):
    """Foto cheia, algarismo em serifa itálica dourada, texto no rodapé.

    O algarismo é serifa, não manuscrito: à mão lê como recado de
    geladeira, à serifa lê como página de revista. `mono` passa a foto
    para monocromia quente — é a M3, e existe como parâmetro porque só
    muda o tratamento, não o layout."""
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
    return _pagina("m1-sangria", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">
        <div class="n sombra">{numero:02d}</div>
        <h2 class="sombra">{frase}</h2>
        <p class="sombra">{apoio}</p>
      </div>
      <div class="moldura"></div>{_passo(i, n)}<div class="grao"></div></div>""",
                    base)


# ─────────────────────────────────────────────────── M2 · PLACA ──────────
def m2_placa(foto, frase, apoio, rotulo=None, numero=None, plano="aberto",
             i=None, n=None, base="../../"):
    """A foto deixa de sangrar e vira chapa emoldurada embaixo, com o texto
    no campo escuro acima.

    É a variação que revista usa quando tem uma imagem só e várias páginas,
    e é o que resolve o ritmo de um carrossel inteiro na mesma foto sem
    precisar fechar o enquadramento."""
    css = f"""
    .fundo{{position:absolute;inset:0;background:{TINTA}}}
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
    """
    topo = (f'<div class="n">{numero:02d}</div>' if numero else
            (f'<div class="rotulo">{rotulo}</div><div class="regua"></div>'
             if rotulo else ""))
    return _pagina("m2-placa", css, f"""<div class="tela">
      <div class="fundo"></div>
      <div class="chapa"><div class="foto"></div><div class="veu"></div></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">{topo}<h2>{frase}</h2><p>{apoio}</p></div>
      {_passo(i, n, "rgba(231,207,166,.55)")}<div class="grao"></div></div>""",
                    base)


# ╔═══════════════════════════════════════════════════════════════════════╗
# ║  PAUSA E FECHO                                                        ║
# ╚═══════════════════════════════════════════════════════════════════════╝

# ──────────────────────────────────────────────── P1 · DESFOQUE ──────────
def p1_desfoque(foto, texto, arremate=None, plano="leve", i=None, n=None,
                base="../../"):
    """A frase pra printar. A foto continua ali, desfocada, virando textura:
    o leitor reconhece a peça sem que a imagem dispute com o tipo.

    É o slide que gera envio no direct, que pesa de três a cinco vezes a
    curtida — então ele existe em todo carrossel, sempre antes do fecho."""
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
    return _pagina("p1-desfoque", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco"><div class="aspa">“</div><h2>{texto}</h2>{ar}</div>
      <div class="moldura"></div>{_passo(i, n)}<div class="grao"></div></div>""",
                    base)


# ─────────────────────────────────────────────────── F1 · FECHO ──────────
def f1_fecho(foto, linha, salvar, mandar, comentar=None, plano="aberto",
             base="../../"):
    """Os pedidos que o algoritmo de 2026 mais paga — salvar, mandar no
    direct e comentar — entram escritos, numerados e separados. Nunca
    subentendidos numa frase bonita."""
    pedidos = [("i.", salvar), ("ii.", mandar)]
    if comentar:
        pedidos.append(("iii.", comentar))
    linhas = "".join(
        f'<div class="pedido sombra"><b>{m}</b><span>{t}</span></div>'
        for m, t in pedidos)
    css = f"""
    {_foto(base, foto, plano)}
    {_veu(.3, 32, .96)}
    .bloco{{position:absolute;left:78px;right:78px;bottom:108px;z-index:36}}
    h2{{font-family:{MODA};font-style:italic;font-weight:600;color:#fff;
       font-size:{_cabe(linha, 92, 900, .43)}px;line-height:1.06;
       letter-spacing:-.02em}}
    .pedidos{{margin-top:34px;border-top:1px solid rgba(231,207,166,.38);
             padding-top:24px;display:flex;flex-direction:column;gap:16px}}
    .pedido{{display:flex;align-items:baseline;gap:18px;font-size:26px;
            font-weight:500;color:#fff;line-height:1.28}}
    .pedido b{{flex:0 0 auto;font-family:{MODA};font-style:italic;
              font-weight:500;font-size:28px;color:{OURO}}}
    """
    return _pagina("f1-fecho", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca">{HANDLE}</div>
      <div class="bloco">
        <h2 class="sombra">{linha}</h2>
        <div class="pedidos">{linhas}</div>
      </div>
      <div class="moldura"></div><div class="grao"></div></div>""", base)


# ── índice do sistema, usado pelo lookbook e pelo gerador ────────────────
LAYOUTS = [
    ("c1_empilhada", "C1 · Empilhada", "capa",
     "Sem-serifa gorda empilhada, selo com filete. Aguenta frase longa.",
     "“Coisas que eu acho chique”"),
    ("c2_mista", "C2 · Mista", "capa",
     "Serifa itálica encavalando sem-serifa. Exige duas palavras curtas.",
     "“Conteúdo não serve”"),
    ("c3_pergunta", "C3 · Pergunta", "capa",
     "Creme e manuscrito grifado. A que mais puxa comentário.",
     "“Me conta,”"),
    ("c4_diario", "C4 · Diário", "capa",
     "Só manuscrito. Informal, boa pra série numerada por episódio.",
     "“Meu dia em um post”"),
    ("c5_editorial", "C5 · Editorial", "capa",
     "Chapéu, filete de ouro e tese. A mais sóbria.", "proposta da casa"),
    ("m1_sangria", "M1 · Sangria", "miolo",
     "Foto cheia, algarismo dourado, texto no rodapé.", "proposta da casa"),
    ("m2_placa", "M2 · Placa", "miolo",
     "Chapa emoldurada embaixo, texto no campo escuro.", "proposta da casa"),
    ("m3_mono", "M3 · Monocromia", "miolo",
     "A sangria em monocromia quente. Mesmo layout, outro tratamento.",
     "proposta da casa"),
    ("p1_desfoque", "P1 · Desfoque", "pausa",
     "Foto vira textura, frase em serifa. O slide que gera envio.",
     "proposta da casa"),
    ("f1_fecho", "F1 · Fecho", "fecho",
     "Os três pedidos escritos e numerados.", "proposta da casa"),
]
