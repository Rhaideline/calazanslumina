"""Corta todos os PNGs de 1080x1500 (overrendered) para 1080x1350 (formato Instagram retrato 4:5)."""
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).parent
count = 0
for png in ROOT.glob('*/*.png'):
    if png.name.startswith('_'):
        continue
    img = Image.open(png)
    if img.size == (1080, 1500):
        cropped = img.crop((0, 0, 1080, 1350))
        cropped.save(png)
        count += 1
        print(f'cropped {png.relative_to(ROOT)}')
    elif img.size == (1080, 1350):
        pass  # already correct
    else:
        print(f'  ?? {png.relative_to(ROOT)}: {img.size}')
print(f'\nTotal recortados: {count}')
