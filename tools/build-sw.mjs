// Génère sw-manifest.js : liste des fichiers à mettre en cache + numéro de version (empreinte du contenu).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const include = ['index.html', 'manifest.webmanifest', 'css', 'src', 'vendor', 'assets/models', 'fonts', 'icons'];
const files = [];
const walk = p => { const s = statSync(join(root, p)); if (s.isDirectory()) readdirSync(join(root, p)).sort().forEach(f => walk(join(p, f))); else files.push(p); };
include.forEach(walk);
const h = createHash('sha1');
files.forEach(f => { h.update(f); h.update(readFileSync(join(root, f))); });
const version = h.digest('hex').slice(0, 10);
const list = ['./', ...files.map(f => './' + f)];
writeFileSync(join(root, 'sw-manifest.js'), `// Fichier généré par tools/build-sw.mjs — ne pas modifier à la main.\nself.BB_VERSION = '${version}';\nself.BB_ASSETS = ${JSON.stringify(list, null, 1)};\n`);
console.log('sw-manifest.js :', files.length, 'fichiers, version', version);
