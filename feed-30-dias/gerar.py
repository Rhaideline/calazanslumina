# -*- coding: utf-8 -*-
"""
Gera os HTML do feed (carrosseis e estaticos) a partir de conteudo.CALENDARIO.

Duas camadas de modelo
-----------------------
capas.py (12 modelos novos, modelos2.py) desenha a CAPA de cada carrossel e
o post inteiro de cada estatico — o que a grade do perfil mostra. E ali que
a variedade precisa aparecer, porque e a unica parte que todo mundo ve sem
clicar. Metade dessas pecas usa foto real (fotos/), metade e so forma.

modelos.py (o sistema antigo, mais discreto) segue cuidando do MIOLO dos
carrosseis — os passos, erros e listas depois do slide 1. Ali a repeticao
de esqueleto e correta: e o que faz o carrossel parecer uma familia de
paginas, nao um post por slide.

Motor de variacao do miolo
---------------------------
A regra e tema dominante, com contraste em dois pontos - a virada (meio) e
o fecho. Alternar tema a cada slide e o que faz carrossel parecer gerado
por robo; revista de verdade mantem a familia e usa a troca como
acontecimento.
"""
from pathlib import Path

import casa
import modelos
from capas import CAPAS
from conteudo import CALENDARIO

SAIDA = Path(__file__).parent

CICLO_MIOLO = ["t-tinta", "t-papel", "t-tinta", "t-brasa"]
CONTRASTE = {"t-tinta": "t-papel", "t-papel": "t-tinta", "t-brasa": "t-papel"}


def temas_do_miolo(tema_dom, n):
    """Tema de cada slide do miolo. Dominante + contraste na virada e no fecho."""
    ctr = CONTRASTE[tema_dom]
    temas = [tema_dom] * n
    if n >= 4:
        temas[n // 2] = ctr
    if n >= 3:
        temas[-1] = ctr
    return temas


def emendas(i, n, alt=240):
    """Barras de borda que fazem a peca i emendar na i+1 dentro do miolo."""
    if n < 2:
        return []
    def y(k):
        return 250 + (k * 317) % 860
    out = []
    if i > 0:
        out.append(("esq", y(i - 1), alt))
    if i < n - 1:
        out.append(("dir", y(i), alt))
    return out


def monta(nome_modelo, kwargs):
    fn = getattr(modelos, nome_modelo)
    return fn(**kwargs)


def gerar_publicacao(pub, indice_ciclo):
    """Escreve os HTML de uma publicacao. Devolve a lista de arquivos."""
    if pub["tipo"] == "reel":
        return []

    pasta = SAIDA / pub["id"]
    pasta.mkdir(exist_ok=True)
    arquivos = []

    if pub["id"] not in CAPAS:
        raise KeyError(f'{pub["id"]} nao tem capa mapeada em capas.py')
    capa_html = CAPAS[pub["id"]]()

    if pub["tipo"] == "estatico":
        arq = pasta / "01_capa.html"
        arq.write_text(capa_html, encoding="utf-8")
        return [arq]

    # carrossel: slide 1 e a capa (modelos2); o resto e o miolo (modelos.py)
    arq = pasta / "01_capa.html"
    arq.write_text(capa_html, encoding="utf-8")
    arquivos.append(arq)

    miolo = pub["slides"][1:]  # descarta o ("capa", {...}) de conteudo.py
    n_total = len(pub["slides"])
    n_miolo = len(miolo)
    tema_dom = CICLO_MIOLO[indice_ciclo % len(CICLO_MIOLO)]
    temas = temas_do_miolo(tema_dom, n_miolo)
    subida = "../"

    for i, (nome_modelo, kwargs) in enumerate(miolo):
        classes_extra, topo_dir, meio, css = monta(nome_modelo, kwargs)
        classes = f"{temas[i]} {classes_extra}".strip()
        i_total = i + 1  # posicao real dentro do carrossel (0 = capa)

        rod = casa.pe(arrasta=(i_total < n_total - 1))
        prog = (i_total + 1) / n_total

        html = casa.pagina(
            titulo=f'{pub["titulo"]} — {i_total+1}/{n_total}',
            classes=classes, topo_dir=topo_dir, meio=meio, rodape=rod,
            css_extra=css, emenda=emendas(i, n_miolo), progresso=prog,
            base=subida)

        arq = pasta / f"{i_total+1:02d}_{nome_modelo}.html"
        arq.write_text(html, encoding="utf-8")
        arquivos.append(arq)

    return arquivos


def main():
    for p in SAIDA.glob("*/*.html"):
        p.unlink()

    total = 0
    indice_ciclo = 0
    for pub in CALENDARIO:
        arqs = gerar_publicacao(pub, indice_ciclo)
        if pub["tipo"] == "carrossel":
            indice_ciclo += 1
        if arqs:
            print(f'  {pub["id"]:<26} {len(arqs)} arquivo(s)')
            total += len(arqs)
    print(f"\n{total} HTML gerados.")


if __name__ == "__main__":
    main()
