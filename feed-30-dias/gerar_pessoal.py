# -*- coding: utf-8 -*-
"""Monta o carrossel do perfil pessoal: 8 slides, quatro dispositivos
alternando. A ordem não é decoração — é o que dá motivo pra deslizar."""
from pathlib import Path

import pessoal
from conteudo_pessoal import CARROSSEL

SAIDA = Path(__file__).parent / "pessoal"
N = 8


def monta(c):
    foto, t = c["foto"], c["tensao"]
    pecas = [
        ("01_capa", pessoal.capa(foto, c["chapeu"], c["hook"])),
        ("02_tensao", pessoal.papel(t["frase"], t["apoio"], chapeu=t["chapeu"],
                                    i=2, n=N)),
    ]
    for k, (disp, frase, apoio) in enumerate(c["itens"], start=1):
        i = k + 2
        fn = pessoal.sobre_foto if disp == "sobre_foto" else pessoal.papel
        kw = dict(frase=frase, apoio=apoio, numero=k, i=i, n=N)
        if disp == "sobre_foto":
            kw["foto"] = foto
        pecas.append((f"{i:02d}_{disp}{k}", fn(**kw)))
    pecas.append((f"{N-1:02d}_citacao",
                  pessoal.citacao(c["citacao"], c["citacao_apoio"], i=N-1, n=N)))
    pecas.append((f"{N:02d}_fecho",
                  pessoal.fecho(foto, c["fecho"], c["fecho_salvar"], c["fecho_mandar"])))
    return pecas


def main():
    c = CARROSSEL
    pasta = SAIDA / c["id"]
    pasta.mkdir(parents=True, exist_ok=True)
    for velho in list(pasta.glob("*.html")) + list(pasta.glob("*.png")):
        velho.unlink()
    pecas = monta(c)
    for nome, html in pecas:
        (pasta / f"{nome}.html").write_text(html, encoding="utf-8")
    print(f'  {c["id"]:<24} {len(pecas)} slides')


if __name__ == "__main__":
    main()
