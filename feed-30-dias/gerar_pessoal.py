# -*- coding: utf-8 -*-
"""Escreve os HTML do carrossel do perfil pessoal."""
from pathlib import Path

import pessoal
from conteudo_pessoal import CARROSSEL

SAIDA = Path(__file__).parent / "pessoal"


def main():
    c = CARROSSEL
    pasta = SAIDA / c["id"]
    pasta.mkdir(parents=True, exist_ok=True)
    for antigo in pasta.glob("*.html"):
        antigo.unlink()

    pecas = [("01_capa", pessoal.capa(c["foto"], c["capa"]))]
    for i, txt in enumerate(c["itens"], start=1):
        pecas.append((f"{i+1:02d}_item{i}", pessoal.item(c["foto"], i, txt)))
    pecas.append((f"{len(pecas)+1:02d}_fecho",
                  pessoal.fecho(c["foto"], c["fecho"], c["fecho_nota"])))

    for nome, html in pecas:
        (pasta / f"{nome}.html").write_text(html, encoding="utf-8")
    print(f'  {c["id"]:<24} {len(pecas)} slides')
    return pasta


if __name__ == "__main__":
    main()
