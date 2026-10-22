# -*- coding: utf-8 -*-
"""Escreve os HTML de todas as publicações de imagem a partir de feed3.FEED."""
from pathlib import Path

from conteudo import CALENDARIO
from feed3 import FEED

SAIDA = Path(__file__).parent


def main():
    total = 0
    for pub in CALENDARIO:
        if pub["tipo"] == "reel":
            continue
        pecas = FEED.get(pub["id"])
        if not pecas:
            raise KeyError(f'{pub["id"]} não está mapeado em feed3.py')

        pasta = SAIDA / pub["id"]
        pasta.mkdir(exist_ok=True)
        for antigo in pasta.glob("*.html"):
            antigo.unlink()

        for nome, faz in pecas:
            (pasta / f"{nome}.html").write_text(faz(), encoding="utf-8")
        print(f'  {pub["id"]:<26} {len(pecas)} peça(s)')
        total += len(pecas)
    print(f"\n{total} HTML gerados.")


if __name__ == "__main__":
    main()
