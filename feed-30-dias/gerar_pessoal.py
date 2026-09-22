# -*- coding: utf-8 -*-
"""Monta o carrossel do perfil pessoal: 8 slides, quatro dispositivos
alternando. A ordem não é decoração — é o que dá motivo pra deslizar."""
import subprocess
from pathlib import Path

import pessoal
from conteudo_pessoal import CARROSSEL

SAIDA = Path(__file__).parent / "pessoal"
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
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


def renderiza(pasta):
    """Renderiza os HTML da pasta. Fica aqui de propósito: o main apaga os
    PNG antigos antes de escrever, então gerar sem renderizar deixa a pasta
    com um slide só — já aconteceu e eu só percebi depois de publicar."""
    from PIL import Image
    for html in sorted(pasta.glob("[0-9]*.html")):
        png = html.with_suffix(".png")
        subprocess.run([
            CHROME, "--headless", "--disable-gpu", "--no-sandbox",
            "--hide-scrollbars", "--force-device-scale-factor=1",
            f"--window-size={pessoal.L},{pessoal.A + 180}",
            "--virtual-time-budget=7000", f"--screenshot={png}",
            f"file://{html.resolve()}"], check=True, capture_output=True)
        im = Image.open(png)
        if im.size != (pessoal.L, pessoal.A):
            im.crop((0, 0, pessoal.L, pessoal.A)).save(png)


def main():
    c = CARROSSEL
    pasta = SAIDA / c["id"]
    pasta.mkdir(parents=True, exist_ok=True)
    for velho in list(pasta.glob("*.html")) + list(pasta.glob("*.png")):
        velho.unlink()
    pecas = monta(c)
    for nome, html in pecas:
        (pasta / f"{nome}.html").write_text(html, encoding="utf-8")
    renderiza(pasta)
    print(f'  {c["id"]:<24} {len(pecas)} slides')


if __name__ == "__main__":
    main()
