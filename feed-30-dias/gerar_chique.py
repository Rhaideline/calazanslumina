# -*- coding: utf-8 -*-
"""Gera e renderiza o carrossel no modelo CHIQUE."""
import subprocess
from pathlib import Path

import chique
from conteudo_chique import CARROSSEL

SAIDA = Path(__file__).parent / "pessoal"
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"


def main():
    c = CARROSSEL
    pasta = SAIDA / c["id"]
    pasta.mkdir(parents=True, exist_ok=True)
    for velho in list(pasta.glob("*.html")) + list(pasta.glob("*.png")):
        velho.unlink()

    for i, (disp, kw) in enumerate(c["slides"], start=1):
        html = getattr(chique, disp)(foto=c["foto"], **kw)
        (pasta / f"{i:02d}_{disp}.html").write_text(html, encoding="utf-8")

    from PIL import Image
    for html in sorted(pasta.glob("*.html")):
        png = html.with_suffix(".png")
        subprocess.run([
            CHROME, "--headless", "--disable-gpu", "--no-sandbox",
            "--hide-scrollbars", "--force-device-scale-factor=1",
            f"--window-size={chique.L},{chique.A + 180}",
            "--virtual-time-budget=8000", f"--screenshot={png}",
            f"file://{html.resolve()}"], check=True, capture_output=True)
        im = Image.open(png)
        if im.size != (chique.L, chique.A):
            im.crop((0, 0, chique.L, chique.A)).save(png)
    print(f'  {c["id"]:<22} {len(c["slides"])} slides')


if __name__ == "__main__":
    main()
