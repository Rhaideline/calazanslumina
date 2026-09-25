# -*- coding: utf-8 -*-
"""Mede o contraste real do PNG renderizado, não das cores da folha de estilo.

O número que importa é o do pixel final: texto branco perfeitamente legível
sobre a parte escura de uma foto vira invisível sobre a parte clara, e o CSS
não sabe disso. Régua WCAG AA: 4,5:1 para texto normal, 3:1 para texto grande.

O método: erode a imagem antes de medir e só então pega os percentis 2 e 98
de luminância. A erosão importa — sem ela, num cartão com pouca tinta o
percentil baixo cai em pixel de borda serrilhada em vez de tinta cheia, e o
cartão de papel aparecia reprovando em 3,8:1 quando cada elemento dele,
calculado na mão, passa de 4,65:1. Serve pra pegar desastre, não pra auditar.
"""
import sys
from pathlib import Path

from PIL import Image, ImageFilter

MINIMO = 4.5


def _lum(rgb):
    def canal(v):
        v /= 255
        return v / 12.92 if v <= .03928 else ((v + .055) / 1.055) ** 2.4
    r, g, b = rgb
    return .2126 * canal(r) + .7152 * canal(g) + .0722 * canal(b)


def razao(a, b):
    a, b = sorted((_lum(a), _lum(b)), reverse=True)
    return (a + .05) / (b + .05)


def medir(png):
    im = Image.open(png).convert("RGB").resize((360, 480), Image.LANCZOS)
    # MinFilter come a borda clara do tipo escuro; MaxFilter come a borda
    # escura do tipo claro. Medir os dois e ficar com o pior é o honesto.
    escuros = im.filter(ImageFilter.MinFilter(3))
    claros = im.filter(ImageFilter.MaxFilter(3))
    px = sorted(list(escuros.getdata()) + list(claros.getdata()), key=_lum)
    return razao(px[int(len(px) * .98)], px[int(len(px) * .02)])


def main(pasta):
    pior = 99
    for arq in sorted(Path(pasta).glob("*.png")):
        r = medir(arq)
        pior = min(pior, r)
        marca = "ok " if r >= MINIMO else "RUIM"
        print(f"  {marca} {arq.name:<22} {r:5.1f}:1")
    print(f"\n  pior da série: {pior:.1f}:1 (mínimo AA = {MINIMO}:1)")
    return 0 if pior >= MINIMO else 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else "."))
