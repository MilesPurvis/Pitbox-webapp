#!/usr/bin/env bash
# Build the frontend and publish it to lemonpi, where the pitbox container serves it.
set -euo pipefail

PI="${PI:-lemon-pi@192.168.100.62}"

npm run build
rsync -a --delete dist/ "$PI:pitbox-web/"
echo "Deployed to https://pitbox.milespurvis.me"
