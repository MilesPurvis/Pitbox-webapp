#!/usr/bin/env bash
# Build the frontend and publish it to the server, where the pitbox container serves it.
# DEPLOY_HOST is an SSH host (an alias from ~/.ssh/config works); DEPLOY_DIR is the backend's WEB_DIR.
set -euo pipefail

: "${DEPLOY_HOST:=lemonpi}" "${DEPLOY_DIR:=pitbox-web}"

npm run build
rsync -a --delete dist/ "$DEPLOY_HOST:$DEPLOY_DIR/"
echo "Deployed dist/ to $DEPLOY_HOST:$DEPLOY_DIR"
