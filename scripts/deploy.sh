#!/usr/bin/env bash
set -euo pipefail

: "${DEPLOY_HOST:=lemonpi}" "${DEPLOY_DIR:=pitbox-web}"

npm run build
rsync -a --delete dist/ "$DEPLOY_HOST:$DEPLOY_DIR/"
echo "Deployed dist/ to $DEPLOY_HOST:$DEPLOY_DIR"
