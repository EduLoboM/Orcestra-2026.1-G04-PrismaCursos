#!/usr/bin/env bash
# Compila scss/styles.scss → ../styles.css
# Uso:
#   ./compilar-scss.sh            (compila uma vez)
#   ./compilar-scss.sh --watch    (recompila a cada mudança)
#
# Instalar o Sass:
#   Linux:   sudo apt install sass   OU   sudo snap install dart-sass
#   Mac:     brew install sass/sass/sass
#   Windows: choco install sass

set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
SCSS_FILE="$DIR/styles.scss"
CSS_FILE="$DIR/../styles.css"

if command -v sass &> /dev/null; then
  COMP="sass"
elif command -v sassc &> /dev/null; then
  COMP="sassc"
else
  echo "❌ Sass não encontrado! Instale com:"
  echo "   Linux:   sudo apt install sass"
  echo "   Mac:     brew install sass/sass/sass"
  echo "   Windows: choco install sass"
  exit 1
fi

if [ "$1" == "--watch" ] && [ "$COMP" == "sass" ]; then
  echo "👀 Observando mudanças..."
  sass --watch "$SCSS_FILE":"$CSS_FILE"
else
  $COMP "$SCSS_FILE" "$CSS_FILE"
  echo "✅ Compilado!"
fi
