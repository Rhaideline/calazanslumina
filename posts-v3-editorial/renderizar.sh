#!/bin/bash
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
ROOT="C:/Users/RHAIDELINE/Downloads/CALAZANS LUMINA/posts-v3-editorial"
ROOTU="/c/Users/RHAIDELINE/Downloads/CALAZANS LUMINA/posts-v3-editorial"

count=0
ok=0
for html in "$ROOTU"/*/*.html; do
  count=$((count+1))
  rel="${html#$ROOTU/}"
  png="${html%.html}.png"
  url="file:///$ROOT/${rel}"
  "$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --window-size=1080,1500 --default-background-color=00000000 \
    --virtual-time-budget=10000 --screenshot="$png" "$url" > /dev/null 2>&1
  if [ -f "$png" ]; then
    ok=$((ok+1))
    printf "[%2d] OK   %s\n" "$count" "$rel"
  else
    printf "[%2d] FAIL %s\n" "$count" "$rel"
  fi
done

# Crop 1500 → 1350
python -c "
from PIL import Image
from pathlib import Path
root = Path('$ROOTU')
for png in root.glob('*/*.png'):
    img = Image.open(png)
    if img.size == (1080, 1500):
        img.crop((0,0,1080,1350)).save(png)
"
echo ""
echo "Total renderizados: $ok / $count"
