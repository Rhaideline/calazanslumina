# -*- coding: utf-8 -*-
"""Escreve os HTML do perfil pessoal: o carrossel completo e as capas
alternativas, que servem pra ela escolher a linguagem das próximas peças."""
from pathlib import Path

import pessoal
from conteudo_pessoal import ALTERNATIVAS, CARROSSEL

SAIDA = Path(__file__).parent / "pessoal"


def _limpa(pasta):
    pasta.mkdir(parents=True, exist_ok=True)
    for antigo in pasta.glob("*.html"):
        antigo.unlink()
    for antigo in pasta.glob("*.png"):
        antigo.unlink()


def main():
    c = CARROSSEL
    pasta = SAIDA / c["id"]
    _limpa(pasta)

    pecas = [("01_capa", pessoal.capa_empilhada(c["foto"], c["capa"], chapeu=c["capa_chapeu"]))]
    for i, (frase, apoio) in enumerate(c["itens"], start=1):
        pecas.append((f"{i+1:02d}_item{i}", pessoal.item(c["foto"], i, frase, apoio)))
    pecas.append((f"{len(pecas)+1:02d}_fecho",
                  pessoal.fecho(c["foto"], c["fecho"], c["fecho_pedido"])))
    for nome, html in pecas:
        (pasta / f"{nome}.html").write_text(html, encoding="utf-8")
    print(f'  {c["id"]:<22} {len(pecas)} slides')

    alt = SAIDA / "00_capas_alternativas"
    _limpa(alt)
    for i, (modelo, kw) in enumerate(ALTERNATIVAS, start=1):
        html = getattr(pessoal, modelo)(**kw)
        (alt / f"{i:02d}_{modelo}.html").write_text(html, encoding="utf-8")
    print(f'  {"00_capas_alternativas":<22} {len(ALTERNATIVAS)} capas')


if __name__ == "__main__":
    main()
