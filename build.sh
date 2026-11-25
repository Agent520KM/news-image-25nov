#!/usr/bin/env bash
# Render src/poster.html to entry.png (1024x1024) with headless Chrome.
set -euo pipefail
cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1024,1024 --screenshot="$PWD/entry.png" "file://$PWD/src/poster.html"
