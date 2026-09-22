# -*- coding: utf-8 -*-
"""
Modelo CHIQUE — a gramática do modelo "Coisas que eu acho chique".

O que este modelo é, depois de olhar a referência de perto em vez de
imitá-la de longe:

  a placa      Nome centralizado com filete embaixo, repetido em cima E
               embaixo da peça. Não é enfeite: é o que emoldura a foto e
               transforma um post em página. O mesmo lockup nas duas
               pontas, não espelhado.
  a pilha      Palavras empilhadas, centralizadas, entrelinha apertada
               (0.88) e tracking negativo. A pesquisa de tipografia diz
               -0.01 a -0.02em para display; em corpo muito grande e numa
               fonte redonda como a Figtree, -0.025em fecha melhor.
  sem véu      A referência não tem degradê nenhum. O tipo pousa onde a
               foto já é escura. Quando não dá, escurece-se um retângulo
               com borda — não a peça inteira.

A coisa que eu quase não vi
---------------------------
As quatro linhas da referência — "Coisas / que eu / acho / chique" — têm
quase a mesma largura. Isso não é acaso da gramática: é quebra escolhida
para o bloco virar um retângulo. É o que faz a pilha ler como uma forma e
não como uma frase que vazou de linha.

`_quebrar()` faz isso por conta: testa todas as quebras possíveis da frase
em N linhas e escolhe a que deixa as larguras mais parecidas, medindo em
largura real de glifo da Figtree, não em número de letras.

Tipografia
----------
Figtree, 900 na pilha e 300/500 nas placas. Identificada renderizando a
mesma frase em cinco candidatas ao lado da referência: Figtree é a única
com o mesmo "a" de dois andares de bojo pequeno, o mesmo "o" circular e o
mesmo peso. DM Sans, que eu vinha usando em tudo, é visivelmente mais leve
e mais aberta.
"""
import re
from itertools import combinations

import casa

L, A = 1080, 1440

DISPLAY = "'Figtree',system-ui,sans-serif"
MODA = "'Playfair Display',serif"

ESCURO = "#17120F"
OSSO = "rgba(255,255,255,.72)"      # filetes e texto de placa
NOME = "Rhai"
SOBRENOME = "Calazans"

# largura relativa de cada glifo na Figtree 900, medida na fonte. Serve pra
# quebrar a frase por largura real — contar letra trata "i" e "m" igual e
# foi exatamente assim que a minha primeira pilha saiu torta.
_LARG = {}


def _larguras():
    global _LARG
    if _LARG:
        return _LARG
    from fontTools.ttLib import TTFont
    f = TTFont(casa.__file__.replace("casa.py", "fontes/figtree-variable.woff2"))
    cmap, hmtx = f.getBestCmap(), f["hmtx"]
    upm = f["head"].unitsPerEm
    for cod, nome in cmap.items():
        if nome in hmtx.metrics:
            _LARG[chr(cod)] = hmtx.metrics[nome][0] / upm
    return _LARG


def _medir(texto):
    w = _larguras()
    return sum(w.get(c, .55) for c in texto)


def _quebrar(frase, linhas):
    """Quebra a frase em N linhas de largura o mais parecida possível.

    É a regra escondida da referência: as quatro linhas dela têm quase a
    mesma largura, e é isso que faz o bloco virar retângulo. Testa todas as
    combinações de pontos de quebra — a frase tem sete ou oito palavras, o
    custo é irrelevante e o resultado é exato em vez de aproximado."""
    palavras = frase.split()
    if linhas <= 1 or len(palavras) <= linhas:
        return palavras if len(palavras) == linhas else [frase]
    melhor, nota_melhor = None, None
    for cortes in combinations(range(1, len(palavras)), linhas - 1):
        pontos = (0,) + cortes + (len(palavras),)
        partes = [" ".join(palavras[a:b]) for a, b in zip(pontos, pontos[1:])]
        larg = [_medir(p) for p in partes]
        # penaliza a variação e, de leve, o comprimento máximo: um bloco
        # regular mas gigante estoura a margem
        nota = (max(larg) - min(larg)) + max(larg) * .12
        if nota_melhor is None or nota < nota_melhor:
            melhor, nota_melhor = partes, nota
    return melhor


def _corpo(linhas, largura=904, altura=1020, entrelinha=.88):
    """Corpo que cabe na largura E na altura disponível.

    Só por largura, a capa de quatro linhas estourava 48px abaixo da borda:
    cada linha cabia e o bloco não cabia. A quebra já igualou as larguras,
    então a maior define o corpo de todas — é isso que dá o retângulo."""
    por_largura = largura / max(_medir(l) for l in linhas)
    por_altura = altura / (len(linhas) * entrelinha)
    return int(min(por_largura, por_altura))


def _pagina(nome, css, corpo, base="../../"):
    doc = f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{nome}</title>
<style>
{{FONTES}}
*{{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased}}
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:{ESCURO}}}
body{{font-family:{DISPLAY}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
.foto{{position:absolute;inset:0;background-repeat:no-repeat;background-size:cover}}

/* a placa: nome centralizado, filete embaixo. Mesma peça em cima e
   embaixo — é o que emoldura a foto e faz o post virar página */
.placa{{position:absolute;left:50%;transform:translateX(-50%);z-index:30;
       width:412px;text-align:center}}
.placa .nome{{font-family:{DISPLAY};font-size:19px;letter-spacing:.3em;
             text-transform:uppercase;color:#fff;white-space:nowrap}}
.placa .nome b{{font-weight:600}}
.placa .nome span{{font-weight:300;color:{OSSO}}}
.placa .fio{{margin-top:15px;height:1px;background:{OSSO}}}
.placa.topo{{top:78px}}
.placa.base{{bottom:78px}}

/* a pilha: entrelinha apertada e tracking negativo, como manda display */
/* campo entre as placas. Tudo que é conteúdo mora aqui, em fluxo — somar
   altura na mão foi como o apoio acabou em cima da última linha da pilha */
.campo{{position:absolute;left:52px;right:52px;top:172px;bottom:172px;
       z-index:26;display:flex;flex-direction:column;justify-content:center;
       align-items:center;text-align:center}}
.pilha{{font-family:{DISPLAY};font-weight:900;color:#fff;
       line-height:.88;letter-spacing:-.025em}}
.apoio{{margin-top:32px;max-width:760px;font-family:{DISPLAY};font-weight:400;
       font-size:27px;line-height:1.42;color:rgba(255,255,255,.9)}}
.sombra{{text-shadow:0 3px 28px rgba(14,9,7,.5),0 1px 4px rgba(14,9,7,.34)}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes(base))


def _placas(sub=None):
    """Placa de cima com o nome; a de baixo com o nome ou com o qualificador
    da peça, que é onde entra “numa mãe que trabalha”."""
    def uma(pos, conteudo):
        return (f'<div class="placa {pos}"><div class="nome">{conteudo}</div>'
                f'<div class="fio"></div></div>')
    topo = f"<b>{NOME}</b> <span>{SOBRENOME}</span>"
    base = f"<span>{sub}</span>" if sub else topo
    return uma("topo", topo) + uma("base", base)


def _foto(base, foto, pos="center 20%", extra=""):
    return (f".foto{{background-image:url('{base}fotos/{foto}');"
            f"background-position:{pos};filter:saturate(1.03) contrast(1.03)"
            f"{extra}}}")


# ═══════════════════════════════════════════════════════════════ CAPA ════
def capa(foto, frase, sub, n_linhas=4, pos="center 20%", base="../../"):
    """A peça da referência. A frase é quebrada por largura, não por
    gramática — é o que faz a pilha virar retângulo."""
    linhas = _quebrar(frase, n_linhas)
    css = f"""
    {_foto(base, foto, pos)}
    .pilha{{font-size:{_corpo(linhas, 900, 980)}px}}
    """
    return _pagina("capa", css, f"""<div class="tela">
      <div class="foto"></div>{_placas(sub)}
      <div class="campo"><div class="pilha sombra">{"<br>".join(linhas)}</div></div>
      </div>""", base)


# ════════════════════════════════════════════════════════════ RETRATO ════
def retrato(foto, numero, frase, apoio=None, n_linhas=3, pos="center 20%",
            base="../../"):
    """Foto cheia, número na placa de baixo, pilha menor no meio. É a capa
    em voz mais baixa — o leitor reconhece a peça e entende a sequência."""
    linhas = _quebrar(frase, n_linhas)
    css = f"""
    {_foto(base, foto, pos, extra=" brightness(.78)")}
    .pilha{{font-size:{_corpo(linhas, 830, 620)}px}}
    .apoio{{max-width:660px}}
    """
    ap = f'<div class="apoio sombra">{apoio}</div>' if apoio else ""
    return _pagina(f"retrato-{numero}", css, f"""<div class="tela">
      <div class="foto"></div>{_placas(f"n&ordm; {numero:02d}")}
      <div class="campo">
        <div class="pilha sombra">{"<br>".join(linhas)}</div>{ap}
      </div>
      </div>""", base)


# ═════════════════════════════════════════════════════════════ JANELA ════
def janela(foto, numero, frase, apoio=None, n_linhas=2, pos="center 18%",
           base="../../"):
    """A foto recua para uma janela emoldurada e o texto ocupa o campo
    escuro embaixo, dentro das mesmas placas.

    É a variação que evita o problema que a cliente nomeou: oito slides com
    foto sangrando e texto por cima viram oito pôsteres. Janela e retrato
    alternados viram uma revista."""
    linhas = _quebrar(frase, n_linhas)
    css = f"""
    .fundo{{position:absolute;inset:0;background:{ESCURO}}}
    .janela{{width:560px;height:690px;overflow:hidden;border:1px solid {OSSO};
            position:relative;flex:0 0 auto}}
    {_foto(base, foto, pos)}
    .foto{{position:absolute;inset:0}}
    .campo{{justify-content:center}}
    .pilha{{font-size:{_corpo(linhas, 880, 200)}px}}
    """
    ap = f'<div class="apoio">{apoio}</div>' if apoio else ""
    return _pagina(f"janela-{numero}", css, f"""<div class="tela">
      <div class="fundo"></div>{_placas(f"n&ordm; {numero:02d}")}
      <div class="campo">
        <div class="janela"><div class="foto"></div></div>
        <div class="pilha" style="margin-top:46px">{"<br>".join(linhas)}</div>{ap}
      </div>
      </div>""", base)


# ═════════════════════════════════════════════════════════════ CITAÇÃO ═══
def citacao(foto, frase, n_linhas=3, pos="center 20%", base="../../"):
    """A frase pra printar. Serifa itálica no lugar da Figtree, e a foto
    escurecida de vez — é o único slide em que a imagem sai de cena, e é o
    que dá ao leitor motivo pra parar antes do fecho."""
    linhas = _quebrar(frase, n_linhas)
    cp = min(int(880 / max(_medir(l) for l in linhas)), 84)
    css = f"""
    {_foto(base, foto, pos, extra=" brightness(.3) saturate(.62)")}
    .aspa{{font-family:{MODA};font-style:italic;font-size:92px;line-height:.4;
          color:{OSSO};margin-bottom:46px}}
    .cita{{font-family:{MODA};font-style:italic;font-weight:500;color:#fff;
          font-size:{cp}px;line-height:1.16;letter-spacing:-.015em}}
    """
    return _pagina("citacao", css, f"""<div class="tela">
      <div class="foto"></div>{_placas()}
      <div class="campo">
        <div class="aspa">&ldquo;</div>
        <div class="cita">{"<br>".join(linhas)}</div>
      </div>
      </div>""", base)


# ═══════════════════════════════════════════════════════════════ FECHO ═══
def fecho(foto, frase, pedidos, n_linhas=2, pos="center 20%", base="../../"):
    """Pilha em cima, pedidos embaixo em linhas com filete. Salvar e mandar
    no direct pesam de três a cinco vezes a curtida, então entram escritos
    e separados, nunca subentendidos numa frase bonita."""
    linhas = _quebrar(frase, n_linhas)
    itens = "".join(
        f'<div class="pedido"><i>{s_}</i><span>{t}</span></div>'
        for s_, t in pedidos)
    css = f"""
    {_foto(base, foto, pos, extra=" brightness(.52) saturate(.86)")}
    .campo{{justify-content:space-between;padding:26px 0 8px}}
    .pilha{{font-size:{_corpo(linhas, 860, 420)}px}}
    .pedidos{{width:100%;display:flex;flex-direction:column;gap:18px;
             padding:0 42px}}
    .pedido{{display:flex;align-items:baseline;gap:20px;
            border-top:1px solid rgba(255,255,255,.3);padding-top:18px}}
    .pedido i{{flex:0 0 auto;font-style:normal;font-family:{MODA};
              font-size:24px;color:{OSSO};width:34px;text-align:left}}
    .pedido span{{font-family:{DISPLAY};font-weight:400;font-size:26px;
                 color:#fff;line-height:1.3;text-align:left}}
    """
    return _pagina("fecho", css, f"""<div class="tela">
      <div class="foto"></div>{_placas()}
      <div class="campo">
        <div class="pilha sombra">{"<br>".join(linhas)}</div>
        <div class="pedidos">{itens}</div>
      </div>
      </div>""", base)


# ══════════════════════════════════════════════════════════════ TEXTO ════
TEXTO = "'Lora',Georgia,serif"


def texto(foto, numero, corpo, pos="center 20%", base="../../"):
    """Página de texto: número e parágrafo em serifa de leitura, à esquerda.

    É o vaso certo para o texto longo da referência dela — três ou quatro
    frases com caveat, não slogan de cinco palavras. A pilha gigante da
    capa não segura esse comprimento: display é pra afirmar, não pra
    argumentar.

    Serifa é Lora, não a Playfair da capa. Playfair é serifa de moda, de
    alto contraste: linda em corpo 90, some em corpo 46 sobre foto. Lora
    foi desenhada pra texto corrido e tem haste grossa — sobrevive à
    redução e à imagem por baixo."""
    css = f"""
    {_foto(base, foto, pos, extra=" brightness(.5) saturate(.9)")}
    .campo{{justify-content:flex-end;align-items:flex-start;text-align:left;
           padding-bottom:36px}}
    .num{{font-family:{TEXTO};font-weight:500;font-size:50px;color:#fff;
         line-height:1;margin-bottom:10px}}
    .texto{{font-family:{TEXTO};font-weight:500;font-size:50px;line-height:1.34;
           color:#fff;max-width:900px;letter-spacing:-.004em}}
    .texto em{{font-style:italic}}
    """
    return _pagina(f"texto-{numero}", css, f"""<div class="tela">
      <div class="foto"></div>{_placas()}
      <div class="campo">
        <div class="num sombra">{numero}.</div>
        <div class="texto sombra">{corpo}</div>
      </div>
      </div>""", base)


def capa_texto(foto, frase, sub=None, n_linhas=4, pos="center 20%",
               base="../../"):
    """Capa no gabarito da referência da Dra Dunnia: sem-serifa gorda em
    corpo moderado, alinhada à esquerda, no terço de baixo.

    A pilha gigante da `capa()` vem de outra referência e não serve aqui:
    esta frase tem nove palavras e, em corpo de display, cobre os dois
    rostos. Grande não é o mesmo que forte — aqui o que segura é a frase,
    e ela precisa caber sem tapar quem está na foto."""
    linhas = _quebrar(frase, n_linhas)
    css = f"""
    {_foto(base, foto, pos, extra=" brightness(.62)")}
    .campo{{justify-content:flex-end;align-items:flex-start;text-align:left;
           padding-bottom:30px}}
    .frase{{font-family:{DISPLAY};font-weight:800;color:#fff;
           font-size:{_corpo(linhas, 880, 420, 1.06)}px;line-height:1.06;
           letter-spacing:-.03em}}
    .sub{{margin-top:26px;font-family:{TEXTO};font-style:italic;font-size:34px;
         color:rgba(255,255,255,.9)}}
    """
    sb = f'<div class="sub sombra">{sub}</div>' if sub else ""
    return _pagina("capa-texto", css, f"""<div class="tela">
      <div class="foto"></div>{_placas()}
      <div class="campo">
        <div class="frase sombra">{"<br>".join(linhas)}</div>{sb}
      </div>
      </div>""", base)
