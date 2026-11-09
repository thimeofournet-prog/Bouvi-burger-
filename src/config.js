// Réglages techniques du projet.
const param = new URLSearchParams(location.search).get('relay');
export const MULTI = {
  // Adresse du relais « deux joueurs » (Cloudflare Worker), voir docs/DEUX-JOUEURS.md.
  // Exemple : 'wss://bouviburger-relais.MONCOMPTE.workers.dev'. Vide = jeu à deux désactivé.
  relayUrl: param || '',
  get enabled() { return !!this.relayUrl; },
};
export const VERSION = '1.0.0';
