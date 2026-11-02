#!/bin/bash
# Renderiza todos os slides do SINMEVACO em PNG 1080x1440.
# Ajuste CHROME para o seu sistema (Windows: "/c/Program Files/Google/Chrome/Application/chrome.exe").
CHROME="${CHROME:-$(ls /opt/pw-browsers/chromium-*/chrome-linux/chrome 2>/dev/null | head -1)}"
[ -z "$CHROME" ] && CHROME="google-chrome"
cd "$(dirname "$0")" || exit 1
ok=0; fail=0
for html in */*.html */*/*.html; do
  png="${html%.html}.png"
  "$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --window-size=1080,1700 --virtual-time-budget=4000 \
    --screenshot="$png" "file://$PWD/$html" >/dev/null 2>&1
  if [ -f "$png" ]; then ok=$((ok+1)); echo "OK   $png"; else fail=$((fail+1)); echo "FAIL $html"; fi
done
python3 cortar_1440.py
echo "--- $ok gerados, $fail falhas ---"
