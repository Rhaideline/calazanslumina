#!/bin/bash
# Renderiza todos os HTMLs dos 12 modelos da Calazans Lumina em PNG 1080x1080
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
ROOT="C:/Users/RHAIDELINE/Downloads/CALAZANS LUMINA/posts-12modelos"
ROOTU="/c/Users/RHAIDELINE/Downloads/CALAZANS LUMINA/posts-12modelos"

count=0
ok=0
fail=0
for html in "$ROOTU"/*/*.html; do
  count=$((count+1))
  rel="${html#$ROOTU/}"
  png="${html%.html}.png"
  url="file:///$ROOT/${rel}"
  "$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --window-size=1080,1500 --default-background-color=00000000 \
    --virtual-time-budget=8000 --screenshot="$png" "$url" > /dev/null 2>&1
  if [ -f "$png" ]; then
    ok=$((ok+1))
    printf "[%2d] OK   %s\n" "$count" "$rel"
  else
    fail=$((fail+1))
    printf "[%2d] FAIL %s\n" "$count" "$rel"
  fi
done

echo ""
echo "=== Resumo ==="
echo "Total: $count slides"
echo "OK:    $ok"
echo "Fail:  $fail"
