#!/usr/bin/env bash
# Renderiza todo HTML de slide em PNG 1080x1440.
#
# A janela do headless desconta ~110px de altura util, entao a tela de 1440
# era cortada e o rodape sumia. Renderiza-se numa janela alta e recorta-se
# depois, que e mais seguro do que calibrar o desconto.
set -u
CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome
cd "$(dirname "$0")"
find . -name "*.png" -not -path "./logos/*" -not -path "./fontes/*" -delete
n=0
for f in */[0-9]*.html; do
  out="${f%.html}.png"
  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 --window-size=1080,1620 \
    --virtual-time-budget=5000 --screenshot="$out" "file://$PWD/$f" 2>/dev/null
  n=$((n+1))
done
python3 recortar.py
echo "$n PNG renderizados"
