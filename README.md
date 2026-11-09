# Bouvi'Burger

Un fast-food en 3D à la première personne, jouable sur ordinateur et sur téléphone, installable comme une appli et utilisable hors ligne.

**Jouer :** https://thimeofournet-prog.github.io/Bouvi-burger-/ (après activation de GitHub Pages, voir plus bas)

## Le jeu

- Prenez les commandes à la caisse, faites cuire les steaks (et le bacon) sur la plancha, les frites (et les nuggets) à la friteuse, remplissez les sodas et les milkshakes, montez les burgers sur les planches, posez le tout sur le plateau et sonnez.
- **Stocks :** chaque produit est en quantité limitée. La **tablette** au fond de la cuisine commande des lots avec l'argent de la caisse ; la livraison arrive quelques secondes plus tard.
- **Jours et niveaux :** chaque service rapporte de l'expérience. Les niveaux débloquent : oignons et mayo (2), bacon (3), nuggets (4), milkshake (5), burger au Maroilles (6), puis une difficulté croissante.
- **Boutique** entre deux jours : plancha plus grande, troisième panier de friteuse, machines plus rapides, déco (clients plus patients), publicité.
- **Réglages :** sensibilité de la caméra, son, qualité graphique, remise à zéro de la progression. Tout est sauvegardé dans le navigateur.
- **Deux joueurs** (chacun sur son écran) : le code est prêt, il reste à brancher le serveur : voir `docs/DEUX-JOUEURS.md`.

Commandes : Z Q S D (ou flèches) pour marcher, souris pour regarder (cliquez dans le restaurant), clic ou E pour agir, P pour les réglages. Sur téléphone : manette à gauche, glisser à droite pour regarder, bouton Action.

## Organisation du code

| Dossier / fichier | Rôle |
|---|---|
| `index.html`, `css/` | Page, interface |
| `src/main.js` | Démarrage, boucle de jeu, jours, jeu à deux |
| `src/rules.js` | Règles : état d'une journée, actions, clients, cuissons, livraisons |
| `src/data.js` | Recettes, produits, niveaux, améliorations, constantes |
| `src/scene.js`, `src/food.js`, `src/view.js` | Construction du restaurant, aliments, affichage |
| `src/render.js` | Rendu : ombres douces, occlusion ambiante (GTAO), bloom, qualité adaptative |
| `src/models.js` | Chargement des modèles 3D |
| `src/ui.js`, `src/controls.js`, `src/audio.js`, `src/save.js` | Écrans, commandes, sons, sauvegarde |
| `src/net.js`, `server/` | Jeu à deux (relais Cloudflare Worker) |
| `assets/models/` | Modèles 3D (CC0), voir `assets/CREDITS.md` |
| `vendor/three/` | three.js r187 (copie locale, pour le hors ligne) |
| `manifest.webmanifest`, `sw.js`, `sw-manifest.js`, `icons/` | Appli installable et hors ligne |
| `tools/` | Outils de préparation (modèles, cache hors ligne) |

## Mise à jour du cache hors ligne

Après toute modification de fichier du jeu : `sh tools/build.sh` (recompile `dist/game.js` puis recalcule la liste et la version du cache ; les joueurs reçoivent la nouvelle version au prochain lancement).

## Mise en ligne (GitHub Pages)

Réglages du dépôt → **Pages** → *Build and deployment* → Source : **Deploy from a branch** → choisir la branche et le dossier `/ (root)` → Save. L'adresse apparaît en haut de la page quelques minutes plus tard.

## Crédits

Modèles 3D : KayKit (Kay Lousberg) et Kenney, tous CC0. Moteur : three.js (MIT). Polices : Bungee et Rubik (OFL). Détails dans `assets/CREDITS.md`.
