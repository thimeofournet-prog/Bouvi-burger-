# Jeu à deux : brancher le serveur

Le code du jeu à deux est écrit et testé en local (création de partie par code à 4 lettres, deux joueurs dans le même restaurant, actions, stocks, clients et fin de journée synchronisés). Il manque juste un **relais** : un petit serveur gratuit qui met les deux navigateurs en relation. Il ne stocke rien.

## Ce que vous avez à faire (environ 10 minutes, une seule fois)

1. Créez un compte gratuit sur https://dash.cloudflare.com (aucune carte bancaire).
2. Sur votre ordinateur, installez Node.js (https://nodejs.org), puis dans un terminal, à la racine du dépôt :
   ```
   cd server
   npx wrangler login
   npx wrangler deploy
   ```
   `wrangler login` ouvre le navigateur pour autoriser l'accès. À la fin, `wrangler deploy` affiche l'adresse du relais, du type `https://bouviburger-relais.VOTRE-NOM.workers.dev`.
3. Donnez-moi cette adresse (ou collez-la vous-même dans `src/config.js`, à la place des guillemets vides de `relayUrl`, en remplaçant `https://` par `wss://`). Puis publiez : le bouton **Jouer à deux** apparaît dans le menu.

## Tester sur son ordinateur avant

```
npm i ws
node server/local-relay.mjs          # relais local sur le port 8787
```
puis ouvrir le jeu avec `?relay=ws://localhost:8787` à la fin de l'adresse, dans deux onglets.

## Comment ça marche

- Le joueur qui crée la partie (l'hôte) fait tourner le restaurant et envoie l'état du monde environ 10 fois par seconde.
- L'autre joueur envoie sa position et ses actions (prendre, poser, sonner, commander).
- Seul l'hôte sauvegarde la progression (jours, niveaux, argent).
- `server/worker.js` : le relais (un Worker + un Durable Object par salle, 2 joueurs maximum). `src/net.js` : liaison côté jeu et encodage de l'état.
