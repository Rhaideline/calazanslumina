# -*- coding: utf-8 -*-
"""Recorta os PNG de slide para 1080x1440 exatos.

Nao toca em logos/ nem fontes/ — ja apaguei a logo desse jeito uma vez.
"""
from pathlib import Path
from PIL import Image

L, A = 1080, 1440
raiz = Path(__file__).parent
n = 0
for p in sorted(raiz.glob("*/[0-9]*.png")):
    if p.parts[-2] in ("logos", "fontes"):
        continue
    im = Image.open(p)
    if im.size == (L, A):
        continue
    im.crop((0, 0, L, A)).save(p)
    n += 1
print(f"  {n} recortados para {L}x{A}")
