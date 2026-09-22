# -*- coding: utf-8 -*-
"""
Perfil pessoal @rhaicalazans — carrossel de 8 slides, quatro dispositivos.

O que a versão anterior errava, e que a pesquisa em ESTUDO-PESSOAL-2026.md
corrigiu:

  formato   era 1080x1350 (4:5). O Instagram aceita 1080x1440 (3:4) nativo
            desde 2026 e só esse preenche feed e grade de perfil sem corte.
  contagem  eram 10 slides. O ponto ideal medido é 4 a 8.
  ritmo     eram 10 slides com a mesma foto e o mesmo bloco de texto no
            mesmo canto. Cada slide precisa dar motivo pra ver o próximo —
            e depois do slide 2 não havia motivo nenhum. Agora são quatro
            dispositivos alternando: foto, papel, foto, papel, citação.
  fecho     era "salva pra ler num dia difícil". Salvar e mandar no direct
            pesam 3 a 5 vezes a curtida, então os dois pedidos entram
            explicitamente, separados, no último slide.

Tipos: DM Sans carrega o peso, Playfair Display itálico é a serifa de moda
das referências dela, Caveat é o manuscrito. Nada de vermelho de marca.
"""
import re

import casa

L, A = 1080, 1440
SANS = "'DM Sans',sans-serif"
MODA = "'Playfair Display',serif"
MAO = "'Caveat',cursive"

HANDLE = "@rhaicalazans"
PAPEL = "#F4EDE1"
TINTA = "#241610"
# #C2702A media 3,20:1 sobre o papel: passa como texto grande (3:1) e
# reprova como texto normal (4,5:1). O número gigante podia usar, o chapéu
# de 14px não — então o acento escureceu para um tom que serve nos dois.
MEL = "#A2561A"          # 4,65:1 sobre o papel — AA para texto normal
MEL_CLARO = "#F0C384"    # sobre escuro


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
html,body{{width:{L}px;height:{A}px;overflow:hidden;background:{TINTA}}}
body{{font-family:{SANS}}}
.tela{{position:relative;width:{L}px;height:{A}px;overflow:hidden}}
.foto{{position:absolute;inset:0;background-size:cover;background-position:center 16%;
      filter:saturate(1.05) contrast(1.02)}}
/* véu em gradiente: escurece só a faixa atrás do texto, que é o padrão
   recomendado (40 a 60% de preto) e preserva a luz do resto da foto */
.veu{{position:absolute;inset:0;background:linear-gradient(180deg,
     rgba(30,17,11,.2) 0%,rgba(30,17,11,0) 20%,rgba(30,17,11,0) 44%,
     rgba(28,16,10,.5) 62%,rgba(24,13,8,.88) 84%,rgba(22,12,7,.95) 100%)}}
.marca{{position:absolute;left:0;right:0;top:56px;z-index:30;text-align:center;
       font-size:15px;letter-spacing:.42em;text-transform:uppercase;font-weight:600}}
.sombra{{text-shadow:0 2px 20px rgba(26,14,8,.65),0 1px 3px rgba(26,14,8,.5)}}
.passo{{position:absolute;right:52px;bottom:54px;z-index:30;font-family:{SANS};
       font-size:13px;letter-spacing:.28em;font-weight:600}}
{css}
</style></head><body>{corpo}</body></html>"""
    return doc.replace("{FONTES}", casa.fontes(base))


def _passo(i, n, claro=True):
    """Contador discreto no canto. Não é enfeite: mostra que tem mais, que
    é literalmente o motivo de alguém deslizar."""
    if not i:
        return ""
    cor = "rgba(255,255,255,.62)" if claro else "rgba(36,22,16,.62)"
    return f'<div class="passo" style="color:{cor}">{i} / {n}</div>'


# ══════════════════════════════════════════════════════════════ CAPA ═════
def capa(foto, chapeu, hook, base="../../"):
    """Gancho sobre a foto. A régua é dura: precisa ser lido em menos de
    dois segundos, então o título fica entre 5 e 8 palavras e tudo desce
    pro terço de baixo — nesta foto os dois rostos ocupam o meio, e o
    rosto rindo é o interruptor de padrão que segura o scroll."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .marca{{color:rgba(255,255,255,.95)}}
    .bloco{{position:absolute;left:54px;right:54px;bottom:104px;z-index:30}}
    .chapeu{{font-size:19px;letter-spacing:.34em;text-transform:uppercase;
            font-weight:700;color:{MEL_CLARO};margin-bottom:22px}}
    h1{{font-family:{SANS};font-weight:700;color:#fff;
       font-size:{_cabe(hook, 116, 968, .485)}px;line-height:.98;
       letter-spacing:-.035em}}
    .fio{{margin-top:30px;width:120px;height:5px;background:{MEL_CLARO}}}
    """
    return _pagina("capa", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca sombra">{HANDLE}</div>
      <div class="bloco">
        <div class="chapeu sombra">{chapeu}</div>
        <h1 class="sombra">{hook}</h1>
        <div class="fio"></div>
      </div>
      </div>""", base)


# ═════════════════════════════════════════════════════════════ PAPEL ═════
def papel(frase, apoio=None, numero=None, chapeu=None, i=None, n=None,
          base="../../"):
    """Cartão de papel, sem foto. É o interruptor de padrão do miolo: sair
    da foto para o papel é o que faz o slide seguinte parecer novo. Texto
    escuro sobre claro, que é a combinação de melhor leitura."""
    css = f"""
    .pp{{position:absolute;inset:0;background:{PAPEL};color:{TINTA};
        padding:66px 62px 100px;display:flex;flex-direction:column}}
    .pp .topo{{display:flex;justify-content:space-between;align-items:center;
              font-size:14px;letter-spacing:.3em;text-transform:uppercase;
              font-weight:700;color:{MEL}}}
    .pp .n{{font-family:{MAO};font-weight:700;font-size:150px;line-height:.7;
           color:{MEL};margin:auto 0 18px}}
    .pp .semn{{margin-top:auto}}
    .pp h2{{font-family:{SANS};font-weight:700;letter-spacing:-.035em;
           font-size:{_cabe(frase, 92, 950, .47)}px;line-height:1.0}}
    .pp p{{margin-top:26px;font-size:31px;line-height:1.36;
          color:rgba(36,22,16,.74);max-width:880px}}
    .pp .rodape{{font-size:13px;letter-spacing:.3em;text-transform:uppercase;
                font-weight:600;color:rgba(36,22,16,.62)}}
    """
    num = f'<div class="n">{numero}</div>' if numero else '<div class="semn"></div>'
    ap = f"<p>{apoio}</p>" if apoio else ""
    ch = f"<span>{chapeu}</span>" if chapeu else "<span></span>"
    return _pagina("papel", css, f"""<div class="tela"><div class="pp">
      <div class="topo">{ch}<span>{HANDLE}</span></div>
      {num}<h2>{frase}</h2>{ap}
      </div>{_passo(i, n, claro=False)}</div>""", base)


# ════════════════════════════════════════════════════════ SOBRE FOTO ═════
def sobre_foto(foto, frase, apoio=None, numero=None, i=None, n=None,
               base="../../"):
    """O mesmo item, mas na foto. Alternar com o papel é o que mantém
    ritmo; usar só um dos dois é o erro que eu já cometi duas vezes."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .marca{{color:rgba(255,255,255,.9)}}
    .bloco{{position:absolute;left:54px;right:58px;bottom:100px;z-index:30}}
    .n{{font-family:{MAO};font-weight:700;font-size:126px;line-height:.66;
       color:{MEL_CLARO};margin-bottom:16px}}
    h2{{font-family:{SANS};font-weight:700;color:#fff;letter-spacing:-.035em;
       font-size:{_cabe(frase, 88, 960, .475)}px;line-height:1.0}}
    p{{margin-top:22px;font-size:30px;line-height:1.34;
      color:rgba(255,255,255,.92);max-width:880px}}
    """
    num = f'<div class="n sombra">{numero}</div>' if numero else ""
    ap = f'<p class="sombra">{apoio}</p>' if apoio else ""
    return _pagina("sobre-foto", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca sombra">{HANDLE}</div>
      <div class="bloco">{num}<h2 class="sombra">{frase}</h2>{ap}</div>
      {_passo(i, n)}</div>""", base)


# ═════════════════════════════════════════════════════════ CITAÇÃO ═══════
def citacao(texto, apoio=None, i=None, n=None, base="../../"):
    """Sem foto e sem número: a frase que a pessoa vai querer printar. É o
    slide que gera envio no direct, que pesa mais que curtida."""
    css = f"""
    .ct{{position:absolute;inset:0;background:{TINTA};color:#fff;
        padding:0 66px 118px;display:flex;flex-direction:column;
        justify-content:flex-end}}
    .ct .aspa{{position:relative;z-index:1;font-family:{MODA};
              font-style:italic;font-size:300px;line-height:.42;
              margin:0 0 -6px -14px;color:rgba(240,195,132,.22)}}
    .ct h2{{position:relative;z-index:2;font-family:{MODA};font-style:italic;
           font-weight:600;font-size:{_cabe(texto, 126, 948, .44)}px;
           line-height:1.02;letter-spacing:-.025em}}
    .ct p{{position:relative;z-index:2;margin-top:34px;font-family:{MAO};
          font-weight:600;font-size:52px;line-height:1.1;color:{MEL_CLARO}}}
    .ct .selo{{position:absolute;left:66px;bottom:54px;font-size:13px;
              letter-spacing:.3em;text-transform:uppercase;font-weight:600;
              color:rgba(255,255,255,.4)}}
    """
    ap = f"<p>{apoio}</p>" if apoio else ""
    return _pagina("citacao", css, f"""<div class="tela"><div class="ct">
      <div class="aspa">“</div><h2>{texto}</h2>{ap}
      <div class="selo">{HANDLE}</div>
      </div>{_passo(i, n)}</div>""", base)


# ═══════════════════════════════════════════════════════════ FECHO ═══════
def fecho(foto, linha, salvar, mandar, base="../../"):
    """Último slide. Os dois pedidos que o algoritmo de 2026 mais paga —
    salvar e mandar no direct — entram separados e escritos, não
    subentendidos numa frase bonita."""
    css = f"""
    .foto{{background-image:url('{base}fotos/{foto}')}}
    .veu{{background:linear-gradient(180deg,rgba(30,17,11,.24) 0%,
         rgba(30,17,11,.04) 20%,rgba(28,16,10,.52) 46%,
         rgba(22,12,7,.93) 74%,rgba(20,11,6,.97) 100%)}}
    .marca{{color:rgba(255,255,255,.9)}}
    .bloco{{position:absolute;left:54px;right:58px;bottom:96px;z-index:30}}
    h2{{font-family:{MODA};font-style:italic;font-weight:600;color:#fff;
       font-size:{_cabe(linha, 98, 950, .44)}px;line-height:1.04;
       letter-spacing:-.02em}}
    .pedidos{{margin-top:34px;display:flex;flex-direction:column;gap:16px}}
    .pedido{{display:flex;align-items:center;gap:18px;font-size:29px;
            font-weight:600;color:#fff;line-height:1.24}}
    .pedido b{{flex:0 0 auto;width:52px;height:52px;border-radius:50%;
              background:{MEL_CLARO};color:{TINTA};display:flex;
              align-items:center;justify-content:center;font-size:26px}}
    """
    return _pagina("fecho", css, f"""<div class="tela">
      <div class="foto"></div><div class="veu"></div>
      <div class="marca sombra">{HANDLE}</div>
      <div class="bloco">
        <h2 class="sombra">{linha}</h2>
        <div class="pedidos">
          <div class="pedido sombra"><b>↓</b><span>{salvar}</span></div>
          <div class="pedido sombra"><b>→</b><span>{mandar}</span></div>
        </div>
      </div>
      </div>""", base)
