#!/usr/bin/env bash
# Instala as 12 skills SEO no Claude Code (macOS / Linux / Git Bash)
# Uso: ./install.sh                 -> global em ~/.claude/skills
#      ./install.sh --local         -> no projeto atual em .claude/skills
#      ./install.sh --local /path   -> no projeto em /path

set -e
LOCAL=0
TARGET_PATH="$PWD"
for arg in "$@"; do
  case "$arg" in
    --local) LOCAL=1 ;;
    /*|./*|~*) TARGET_PATH="$arg" ;;
  esac
done

SRC="$(cd "$(dirname "$0")" && pwd)"
if [ "$LOCAL" = "1" ]; then
  DST="$TARGET_PATH/.claude/skills"
else
  DST="$HOME/.claude/skills"
fi

mkdir -p "$DST"
echo "Instalando em: $DST"

for skill_dir in "$SRC"/*/; do
  name="$(basename "$skill_dir")"
  if [ -d "$DST/$name" ]; then
    echo "  [skip] $name ja existe"
    continue
  fi
  cp -r "$skill_dir" "$DST/$name"
  echo "  [ok]   $name"
done

echo
echo "Feito. Reinicie o Claude Code pra carregar as skills."
