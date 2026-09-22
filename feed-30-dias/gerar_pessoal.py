# -*- coding: utf-8 -*-
"""Monta o carrossel do perfil pessoal e renderiza os PNG.

Renderizar mora aqui de propósito: o gerador apaga os PNG antigos antes de
escrever os HTML, então gerar num passo e renderizar noutro já deixou a
pasta com um slide só — e eu só percebi depois de publicar.
"""
import subprocess
from pathlib import Path

import pessoal
from conteudo_pessoal import CARROSSEL

SAIDA = Path(__file__).parent / "pessoal"
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
N = 9


def monta(c):
    foto, t = c["foto"], c["tensao"]
    pecas = [
        ("01_capa", pessoal.capa(foto, c["rotulo"], c["hook"])),
        ("02_aviso", pessoal.placa(foto, t["frase"], t["apoio"],
                                   rotulo=t["rotulo"], plano=t["plano"],
                                   i=2, n=N)),
    ]
    # a ordem dos dispositivos é a peça: sangria, placa, sangria monocromática,
    # placa, sangria. É o que dá motivo pra ver o slide seguinte quando a
    # foto é sempre a mesma.
    for k, (num, frase, apoio, plano, disp) in enumerate(c["itens"], start=3):
        if disp == "placa":
            html = pessoal.placa(foto, frase, apoio, numero=num, plano=plano,
                                 i=k, n=N)
        else:
            html = pessoal.baixo(foto, num, frase, apoio, plano,
                                 mono=(disp == "mono"), i=k, n=N)
        pecas.append((f"{k:02d}_{disp}{num}", html))
    pecas.append((f"{N-1:02d}_frase",
                  pessoal.desfoque(foto, c["citacao"], c["citacao_arremate"],
                                   i=N - 1, n=N)))
    pecas.append((f"{N:02d}_fecho",
                  pessoal.fecho(foto, c["fecho"], c["fecho_salvar"],
                                c["fecho_mandar"])))
    return pecas


def renderiza(pasta):
    from PIL import Image
    for html in sorted(pasta.glob("[0-9]*.html")):
        png = html.with_suffix(".png")
        subprocess.run([
            CHROME, "--headless", "--disable-gpu", "--no-sandbox",
            "--hide-scrollbars", "--force-device-scale-factor=1",
            f"--window-size={pessoal.L},{pessoal.A + 180}",
            "--virtual-time-budget=8000", f"--screenshot={png}",
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
