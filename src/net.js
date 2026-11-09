// Jeu à deux : liaison WebSocket avec le relais, encodage de l'état du monde.
import { MULTI } from './config.js';
import { ei, di } from './food.js';

export class Link {
  constructor(code) { this.code = code; this.ws = null; this.peers = 0; this.onmsg = () => {}; this.onpeers = () => {}; this.onclose = () => {}; }
  open() {
    return new Promise((res, rej) => {
      let ws; try { ws = new WebSocket(MULTI.relayUrl.replace(/\/$/, '') + '/room/' + this.code); } catch (e) { return rej(e); }
      this.ws = ws; const to = setTimeout(() => { try { ws.close(); } catch (e) {} rej(new Error('délai dépassé')); }, 8000);
      ws.onopen = () => { clearTimeout(to); res(this); };
      ws.onerror = () => { clearTimeout(to); rej(new Error('connexion impossible')); };
      ws.onmessage = e => { let m; try { m = JSON.parse(e.data); } catch (err) { return; } if (m.t === 'peers') { this.peers = m.n; this.onpeers(m.n); } else this.onmsg(m); };
      ws.onclose = () => { this.onclose(); };
    });
  }
  send(o) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(o)); }
  close() { try { this.ws && this.ws.close(); } catch (e) {} this.ws = null; }
}
export const code4 = () => { const L = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; return Array.from({ length: 4 }, () => L[Math.floor(Math.random() * L.length)]).join(''); };

const r1 = v => Math.round(v * 10) / 10;
export function encWorld(G) {
  return {
    g: G.g, ph: G.ph, t: Math.round(G.time), mo: Math.round(G.money * 100), day: G.day, lv: G.level, xp: G.xp, xg: G.xpGain, up: G.ups, sv: G.served, an: G.angry, sa: Math.round(G.sales * 100),
    gr: G.grill.map(c => c ? [c.k === 'raw' ? 0 : 1, r1(c.a)] : 0), fr: G.fry.map(c => c ? [c.k === 'frozen' ? 0 : 1, r1(c.a)] : 0), so: G.soda.map(r1), sh: G.shake.map(r1),
    b: G.boards.map(b => b.join('.')), tr: G.tray.map(ei), h: G.players.map(p => ei(p.h)), st: G.stock, dl: G.deliveries.map(d => [d.id, r1(d.t), d.items]),
    cu: G.cust.map(c => [c.id, c.st, +c.x.toFixed(2), +c.z.toFixed(2), Math.round(c.pat), c.max, c.rid, c.fr, c.nu, c.dr, c.sh, c.slot]), m: [G.msg2.n, G.msg2.t, G.msg2.p, G.msg2.s],
  };
}
export function applyWorld(G, w, onMsg) {
  G.ph = w.ph; G.time = w.t; G.money = w.mo / 100; G.day = w.day; G.level = w.lv; G.xp = w.xp; G.xpGain = w.xg; G.ups = w.up; G.served = w.sv; G.angry = w.an; G.sales = w.sa / 100;
  G.grill = w.gr.map(c => c ? { k: c[0] ? 'rawbacon' : 'raw', a: c[1] } : null); G.fry = w.fr.map(c => c ? { k: c[0] ? 'nugfrozen' : 'frozen', a: c[1] } : null);
  G.soda = w.so; G.shake = w.sh; G.boards = w.b.map(s => s ? s.split('.') : []); G.tray = (w.tr || []).map(di); G.stock = w.st; G.deliveries = w.dl.map(([id, t, items]) => ({ id, t, items }));
  (w.h || []).forEach((s, i) => { if (G.players[i]) G.players[i].h = di(s); });
  const prev = {}; G.cust.forEach(c => prev[c.id] = c);
  G.cust = (w.cu || []).map(([id, st, x, z, pat, max, rid, fr, nu, dr, sh, slot]) => { const o = prev[id]; return { id, st, tx: x, tz: z, x: o ? o.x : x, z: o ? o.z : z, pat, max, rid, fr, nu, dr, sh, slot }; });
  if (w.m && onMsg) onMsg(w.m);
}
