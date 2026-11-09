#!/bin/sh
# Compile le jeu en un seul fichier (compatible anciens Safari) puis régénère le cache hors ligne.
# Nécessite esbuild : npm i esbuild (dans le dossier tools)
set -e
cd "$(dirname "$0")/.."
npx esbuild src/main.js --bundle --minify --format=iife --target=es2019 \
  --alias:three=./vendor/three/three.module.js --alias:three/addons=./vendor/three/addons --outfile=dist/game.js
node tools/build-sw.mjs
