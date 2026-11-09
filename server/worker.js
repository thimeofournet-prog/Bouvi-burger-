// Relais « à deux joueurs » pour Bouvi'Burger — Cloudflare Worker + Durable Object.
// Rôle : mettre en relation deux navigateurs qui connaissent le même code à 4 lettres
// et se transmettre leurs messages. Il ne stocke rien et ne comprend pas le jeu.
export class Room {
  constructor(state) { this.socks = []; }
  async fetch(req) {
    if (req.headers.get('Upgrade') !== 'websocket') return new Response('Relais Bouvi\'Burger : OK', { status: 200 });
    if (this.socks.length >= 2) return new Response('Salle pleine', { status: 409 });
    const pair = new WebSocketPair(), [client, server] = [pair[0], pair[1]];
    server.accept(); this.socks.push(server); this.peers();
    server.addEventListener('message', e => { for (const o of this.socks) if (o !== server) { try { o.send(e.data); } catch (err) {} } });
    const drop = () => { this.socks = this.socks.filter(x => x !== server); this.peers(); };
    server.addEventListener('close', drop); server.addEventListener('error', drop);
    return new Response(null, { status: 101, webSocket: client });
  }
  peers() { const m = JSON.stringify({ t: 'peers', n: this.socks.length }); this.socks.forEach(x => { try { x.send(m); } catch (err) {} }); }
}
export default {
  async fetch(req, env) {
    const m = new URL(req.url).pathname.match(/^\/room\/([A-Z]{4})$/);
    if (!m) return new Response('Relais Bouvi\'Burger : OK', { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } });
    return env.ROOMS.get(env.ROOMS.idFromName(m[1])).fetch(req);
  },
};
