// Règles du jeu : état d'une journée, actions du joueur, simulation (clients, cuissons, livraisons).
import { RECIPES, NAMES, FILL, PRICE, PROD, PRODUCTS, euro, DAY, GRILL_T1, GRILL_T2, FRY_T1, FRY_T2, SODA_T, SHAKE_T, DOOR, REG, PICK, WAITS, SPAWN, DELIVERY_T, levelFor } from './data.js';

export const H = { say: () => {}, feedback: () => {}, broadcast: () => {}, openTablet: () => {}, ended: () => {}, mode: () => 'solo', li: () => 0 };
export let G = null;
export const setG = g => { G = g; };

export const gslots = ups => [4, 6, 8][ups.grill] || 4;
export const fslots = ups => [2, 3][ups.fryer] || 2;
export const machineT = (base, ups) => base * (1 - ([0, .25, .45][ups.machine] || 0));

export function freshDay(save, n) {
  const ups = { ...save.ups };
  return {
    time: DAY, money: save.money, money0: save.money, sales: 0, spent: 0, xpGain: 0, level: levelFor(save.xp), day: save.day, xp: save.xp, ups,
    served: 0, angry: 0, ph: 'play', g: 1, cid: 0, next: 3, paused: false,
    grill: Array(8).fill(null), fry: Array(3).fill(null), soda: [-1, -1], shake: [-1, -1], boards: [[], []], tray: [], cust: [],
    stock: { ...save.stock }, deliveries: (save.pending || []).map(d => ({ ...d, t: Math.min(d.t, 4) })),
    msg2: { n: 0, t: '', p: '', s: '' },
    players: [0, 1].map(i => ({ x: SPAWN[i].x, z: SPAWN[i].z, yaw: 0, pitch: -.25, h: null, on: i === 0 || n === 2, walk: 0 })),
  };
}

export const unlocked = id => { const p = PROD[id]; return !p || p.lvl <= G.level; };
const msig = a => a.slice().sort().join();

export function orderOf(c) {
  const R = RECIPES.find(r => r.id === c.rid) || RECIPES[0];
  return { n: R.n, f: R.f, fr: c.fr, nu: c.nu || 0, dr: c.dr, sh: c.sh || 0, price: R.p + c.fr * PRICE.fries + (c.nu || 0) * PRICE.nuggets + c.dr * PRICE.soda + (c.sh || 0) * PRICE.shake };
}
export function newCustomer() {
  const id = ++G.cid, easy = G.day === 1 && G.served < 2;
  const pool = RECIPES.filter(r => r.lvl <= G.level);
  const r = easy ? pool[Math.floor(Math.random() * 2)] : pool[Math.floor(Math.random() * pool.length)];
  const sh = G.level >= 5 && Math.random() < .35 ? 1 : 0;
  G.cust.push({ id, st: 'in', x: DOOR.x, z: DOOR.z, tx: DOOR.x, tz: DOOR.z, rid: r.id, fr: Math.random() < .55 ? 1 : 0, nu: G.level >= 4 && Math.random() < .35 ? 1 : 0,
    dr: !sh && Math.random() < .6 ? 1 : 0, sh, pat: 0, max: 1, slot: -1 });
}
const burgerOK = (c, f) => c[0] === 'bun' && c[c.length - 1] === 'top' && msig(c.slice(1, -1)) === msig(f);
const cnt = (tr, t) => tr.filter(i => i.t === t).length;
export function trayMatch(tr, c) {
  const o = orderOf(c), b = tr.filter(i => i.t === 'burger');
  return b.length === 1 && burgerOK(b[0].c, o.f) && cnt(tr, 'fries') === o.fr && cnt(tr, 'nuggets') === o.nu && cnt(tr, 'soda') === o.dr && cnt(tr, 'shake') === o.sh && tr.length === 1 + o.fr + o.nu + o.dr + o.sh;
}
export function trayDiff(tr, c) {
  const o = orderOf(c), out = [], b = tr.filter(i => i.t === 'burger');
  if (!b.length) out.push('il manque le burger'); else if (b.length > 1) out.push('un burger de trop'); else if (!burgerOK(b[0].c, o.f)) out.push('le burger n’est pas un « ' + o.n + ' »');
  [['fries', 'fr', 'les frites'], ['nuggets', 'nu', 'les nuggets'], ['soda', 'dr', 'le soda'], ['shake', 'sh', 'le milkshake']].forEach(([t, k, nm]) => {
    const n = cnt(tr, t); if (n < o[k]) out.push('il manque ' + nm); if (n > o[k]) out.push(nm.replace('les ', '').replace('le ', '') + ' en trop');
  });
  if (tr.some(i => !['burger', 'fries', 'soda', 'nuggets', 'shake'].includes(i.t))) out.push('un produit n’a rien à faire là');
  return out;
}

const holdName = h => h.t === 'sauce' ? NAMES[h.k] : NAMES[h.t];
const OUT_OF = id => 'Rupture de stock : ' + PROD[id].n.toLowerCase() + '. Commandez à la tablette';

/* --- commandes de stock (tablette) --- */
export function orderStock(id, qty = 1) {
  const p = PROD[id]; if (!p || !unlocked(id)) return { ok: false, msg: 'Produit indisponible' };
  const cost = p.cost * qty; if (G.money < cost - 1e-9) return { ok: false, msg: 'Pas assez d’argent en caisse' };
  G.money -= cost; G.spent += cost;
  G.deliveries.push({ id: ++G.cid + 1000, t: DELIVERY_T, items: { [id]: p.pack * qty } });
  return { ok: true, msg: p.pack * qty + ' × ' + p.n + ' en route…' };
}

/* --- actions --- */
export function interact(i, id) {
  if (!G || G.ph !== 'play' || !id) return;
  const { say, feedback } = H;
  const p = G.players[i], h = p.h, [kind, arg] = id.split(':');
  if (kind === 'crate') {
    if (!unlocked(arg)) return say(i, 'Pas encore débloqué (niveau ' + PROD[arg].lvl + ')');
    if (!h) { if ((G.stock[arg] || 0) <= 0) return say(i, OUT_OF(arg)); G.stock[arg]--; p.h = { t: arg }; return feedback(i, 'pick'); }
    if (h.t === arg) { G.stock[arg]++; p.h = null; return feedback(i, 'drop'); }
    return say(i, 'Vous avez déjà les mains prises');
  }
  if (kind === 'sauce') {
    if (!unlocked(arg)) return say(i, 'Pas encore débloqué (niveau ' + PROD[arg].lvl + ')');
    if (!h) { p.h = { t: 'sauce', k: arg }; return feedback(i, 'pick'); }
    if (h.t === 'sauce') { p.h = null; return feedback(i, 'drop'); }
    return say(i, 'Vous avez déjà les mains prises');
  }
  if (kind === 'board') {
    const n = +arg, b = G.boards[n], closed = b[b.length - 1] === 'top';
    if (!h) { if (!b.length) return say(i, 'La planche est vide'); p.h = { t: 'burger', c: b.slice() }; G.boards[n] = []; return feedback(i, 'pick'); }
    if (h.t === 'burger') { if (b.length) return say(i, 'La planche est occupée'); G.boards[n] = h.c; p.h = null; return feedback(i, 'drop'); }
    if (h.t === 'bun') {
      if (!b.length) { b.push('bun'); p.h = null; return feedback(i, 'drop'); }
      if (closed) return say(i, 'Ce burger est déjà fermé'); if (b.length < 2) return say(i, 'Ajoutez d’abord une garniture'); b.push('top'); p.h = null; return feedback(i, 'cook');
    }
    if (FILL.includes(h.t)) { if (!b.length) return say(i, 'Commencez par poser un pain'); if (closed) return say(i, 'Ce burger est déjà fermé'); if (b.length >= 11) return say(i, 'Le burger est trop haut'); b.push(h.t); p.h = null; return feedback(i, 'drop'); }
    if (h.t === 'sauce') {
      if (!b.length) return say(i, 'Commencez par poser un pain'); if (closed) return say(i, 'Ce burger est déjà fermé'); if (b.includes(h.k)) return say(i, 'Il y a déjà de la sauce ' + NAMES[h.k].toLowerCase());
      if ((G.stock[h.k] || 0) <= 0) return say(i, OUT_OF(h.k)); G.stock[h.k]--; b.push(h.k); return feedback(i, 'squirt');
    }
    if (h.t === 'raw' || h.t === 'rawbacon') return say(i, 'C’est cru : passez-le sur la plancha');
    return say(i, 'Ça ne va pas dans un burger');
  }
  if (kind === 'grill') {
    const n = gslots(G.ups);
    if (h && (h.t === 'raw' || h.t === 'rawbacon')) { let k = -1; for (let j = 0; j < n; j++) if (!G.grill[j]) { k = j; break; } if (k < 0) return say(i, 'La plancha est pleine'); G.grill[k] = { k: h.t, a: 0 }; p.h = null; return feedback(i, 'squirt'); }
    if (!h) {
      let k = -1, bt = -1; for (let j = 0; j < n; j++) { const c = G.grill[j]; if (c && c.a >= GRILL_T1 && c.a > bt) { bt = c.a; k = j; } }
      if (k < 0) return say(i, G.grill.slice(0, n).some(c => c) ? 'Pas encore cuit…' : 'La plancha est vide');
      const c = G.grill[k], burnt = c.a >= GRILL_T2; p.h = { t: c.k === 'raw' ? (burnt ? 'burnt' : 'patty') : (burnt ? 'burntbacon' : 'bacon') }; G.grill[k] = null; return feedback(i, 'pick');
    }
    return say(i, 'Posez des steaks ou du bacon crus sur la plancha');
  }
  if (kind === 'fryer') {
    const n = fslots(G.ups);
    if (h && (h.t === 'frozen' || h.t === 'nugfrozen')) { let k = -1; for (let j = 0; j < n; j++) if (!G.fry[j]) { k = j; break; } if (k < 0) return say(i, 'Les paniers sont pris'); G.fry[k] = { k: h.t, a: 0 }; p.h = null; return feedback(i, 'squirt'); }
    if (!h) {
      let k = -1, bt = -1; for (let j = 0; j < n; j++) { const c = G.fry[j]; if (c && c.a >= FRY_T1 && c.a > bt) { bt = c.a; k = j; } }
      if (k < 0) return say(i, G.fry.slice(0, n).some(c => c) ? 'Ça cuit encore…' : 'La friteuse est vide');
      const c = G.fry[k], burnt = c.a >= FRY_T2; p.h = { t: c.k === 'frozen' ? (burnt ? 'charred' : 'fries') : (burnt ? 'charnug' : 'nuggets') }; G.fry[k] = null; return feedback(i, 'pick');
    }
    return say(i, 'Mettez des frites ou des nuggets surgelés dans la friteuse');
  }
  if (kind === 'cups') {
    if (!h) { if ((G.stock.cup || 0) <= 0) return say(i, OUT_OF('cup')); G.stock.cup--; p.h = { t: 'cup' }; return feedback(i, 'pick'); }
    if (h.t === 'cup') { G.stock.cup++; p.h = null; return feedback(i, 'drop'); }
    return say(i, 'Vous avez déjà les mains prises');
  }
  if (kind === 'soda') {
    const T = machineT(SODA_T, G.ups);
    if (h && h.t === 'cup') { const k = G.soda.indexOf(-1); if (k < 0) return say(i, 'Les deux becs sont pris'); G.soda[k] = 0; p.h = null; return feedback(i, 'drop'); }
    if (!h) { const k = G.soda.findIndex(c => c >= T); if (k < 0) return say(i, G.soda.some(c => c >= 0) ? 'Ça se remplit…' : 'Posez d’abord un gobelet'); p.h = { t: 'soda' }; G.soda[k] = -1; return feedback(i, 'pick'); }
    return say(i, 'Il faut un gobelet vide');
  }
  if (kind === 'shake') {
    if (G.level < 5) return say(i, 'Pas encore débloqué (niveau 5)');
    const T = machineT(SHAKE_T, G.ups);
    if (h && h.t === 'cup') { const k = G.shake.indexOf(-1); if (k < 0) return say(i, 'Les deux becs sont pris'); if ((G.stock.shakemix || 0) <= 0) return say(i, OUT_OF('shakemix')); G.stock.shakemix--; G.shake[k] = 0; p.h = null; return feedback(i, 'drop'); }
    if (!h) { const k = G.shake.findIndex(c => c >= T); if (k < 0) return say(i, G.shake.some(c => c >= 0) ? 'Ça mixe…' : 'Posez d’abord un gobelet'); p.h = { t: 'shake' }; G.shake[k] = -1; return feedback(i, 'pick'); }
    return say(i, 'Il faut un gobelet vide');
  }
  if (kind === 'tray') {
    if (!h) { if (!G.tray.length) return say(i, 'Le plateau est vide'); p.h = G.tray.pop(); return feedback(i, 'pick'); }
    if (h.t === 'burger' && h.c[h.c.length - 1] !== 'top') return say(i, 'Fermez le burger avec un pain avant de le servir');
    if (!['burger', 'fries', 'soda', 'nuggets', 'shake'].includes(h.t)) return say(i, 'Seuls burgers, frites, nuggets et boissons vont sur le plateau');
    if (G.tray.length >= 6) return say(i, 'Le plateau est plein'); G.tray.push(h); p.h = null; return feedback(i, 'drop');
  }
  if (kind === 'bell') {
    feedback(i, 'bell');
    const waiting = G.cust.filter(c => c.st === 'wait').sort((a, b) => a.id - b.id);
    if (!G.tray.length) return say(i, 'Le plateau est vide');
    if (!waiting.length) return say(i, 'Aucune commande en attente : prenez d’abord la commande à la caisse');
    const c = waiting.find(c => trayMatch(G.tray, c));
    if (!c) return say(i, 'Ça ne correspond pas : ' + trayDiff(G.tray, waiting[0]).join(', '));
    const o = orderOf(c), tip = Math.round(c.pat / c.max * 30 * (1 + (G.level >= 9 ? .25 : 0))) / 10, gain = o.price + tip;
    G.money += gain; G.sales += gain; G.served++; G.tray = []; c.st = 'pick'; c.slot = -1;
    G.xpGain += Math.round(gain * 2.2 + (c.pat / c.max > .6 ? 6 : 0));
    return say(i, tip >= 2 ? 'Client ravi, pourboire de ' + euro(tip) + ' !' : 'Commande n°' + c.id + ' servie', '+' + euro(gain));
  }
  if (kind === 'trash') { if (!h) return; if (h.t === 'sauce') return say(i, 'Reposez la sauce sur son support'); p.h = null; return feedback(i, 'drop'); }
  if (kind === 'tablet') { return H.openTablet(i); }
  if (kind === 'cust') {
    const c = G.cust.find(c => c.id === +arg); if (!c) return;
    if (c.st === 'order') {
      const used = G.cust.filter(o => o.st === 'wait').map(o => o.slot), s = WAITS.findIndex((_, j) => !used.includes(j));
      const patience = (H.mode() === 'solo' ? 150 : 130) * (1 + .12 * G.ups.deco) * Math.max(.7, 1 - (G.day - 1) * .02);
      c.st = 'wait'; c.slot = s < 0 ? 0 : s; c.max = c.pat = patience;
      const o = orderOf(c);
      return say(i, 'Commande n°' + c.id + ' : ' + o.n + (c.fr ? ' + frites' : '') + (c.nu ? ' + nuggets' : '') + (c.dr ? ' + soda' : '') + (c.sh ? ' + milkshake' : ''), '', 'order');
    }
    if (c.st === 'wait') return say(i, 'Ce client attend sa commande n°' + c.id);
    if (c.st === 'in') return say(i, 'Ce client fait la queue');
  }
}

/* --- simulation --- */
export function simulate(dt) {
  if (G.paused) return;
  const mode = H.mode();
  G.time -= dt;
  const n1 = gslots(G.ups), n2 = fslots(G.ups);
  G.grill.forEach(c => { if (c) c.a += dt; }); G.fry.forEach(c => { if (c) c.a += dt; });
  const ST = machineT(SODA_T, G.ups), SH = machineT(SHAKE_T, G.ups);
  G.soda = G.soda.map(c => c < 0 || c >= ST ? c : c + dt); G.shake = G.shake.map(c => c < 0 || c >= SH ? c : c + dt);
  // livraisons
  for (let i = G.deliveries.length - 1; i >= 0; i--) {
    const d = G.deliveries[i]; d.t -= dt;
    if (d.t <= 0) { Object.entries(d.items).forEach(([k, q]) => { G.stock[k] = (G.stock[k] || 0) + q; }); G.deliveries.splice(i, 1); H.broadcast('Livraison arrivée : ' + Object.entries(d.items).map(([k, q]) => q + ' × ' + PROD[k].n).join(', '), 'deliver'); }
  }
  G.next -= dt;
  if (G.next <= 0) {
    if (G.cust.length < 6 && G.time > 25) newCustomer();
    const base = (mode === 'solo' ? 24 : 17) / (1 + .15 * G.ups.ad) * Math.max(.6, 1 - (G.day - 1) * .03) * (G.level >= 7 ? .88 : 1);
    G.next = base * (.75 + Math.random() * .5) * (G.time < 90 ? .8 : 1);
  }
  const queue = G.cust.filter(c => c.st === 'in' || c.st === 'order').sort((a, b) => a.id - b.id);
  queue.forEach((c, k) => {
    let t = k === 0 ? REG : { x: REG.x, z: REG.z + .85 * k }; if (k > 3) t = { x: DOOR.x - 1, z: DOOR.z - .6 }; c.tx = t.x; c.tz = t.z;
    if (k === 0 && c.st === 'in' && Math.hypot(c.x - REG.x, c.z - REG.z) < .08) { c.st = 'order'; c.max = c.pat = 50; H.broadcast('Un client attend à la caisse', 'order'); }
  });
  G.cust.forEach(c => {
    if (c.st === 'wait') { const w = WAITS[c.slot] || WAITS[0]; c.tx = w.x; c.tz = w.z; }
    if (c.st === 'pick') { c.tx = PICK.x; c.tz = PICK.z; if (Math.hypot(c.x - PICK.x, c.z - PICK.z) < .08) c.st = 'out'; }
    if (c.st === 'out' || c.st === 'angry') { c.tx = DOOR.x; c.tz = DOOR.z + .3; }
    const dx = c.tx - c.x, dz = c.tz - c.z, d = Math.hypot(dx, dz), sp = 1.25 * dt;
    if (d > sp) { c.x += dx / d * sp; c.z += dz / d * sp; } else { c.x = c.tx; c.z = c.tz; }
    if (c.st === 'order' || c.st === 'wait') { c.pat -= dt; if (c.pat <= 0) { c.st = 'angry'; G.angry++; H.broadcast('Le client n°' + c.id + ' est parti, furieux', 'bad'); } }
  });
  G.cust = G.cust.filter(c => !((c.st === 'out' || c.st === 'angry') && Math.hypot(c.x - DOOR.x, c.z - DOOR.z - .3) < .1));
  if (G.time <= 0) { G.time = 0; G.ph = 'end'; H.ended(); }
}

// Bilan de fin de journée : met à jour la sauvegarde (renvoie le résumé)
export function dayResult(save) {
  const goal = [40, 90, 150].map(v => v * (1 + .2 * (G.day - 1))), st = goal.filter(g => G.sales >= g).length;
  const bonus = st * 15 + Math.round(G.served * 2);
  const xp0 = save.xp, lvl0 = levelFor(xp0), xp1 = xp0 + G.xpGain + bonus, lvl1 = levelFor(xp1);
  const stock = { ...G.stock }, pending = [];
  G.deliveries.forEach(d => Object.entries(d.items).forEach(([k, q]) => { stock[k] = (stock[k] || 0) + q; }));
  const next = { ...save, day: save.day + 1, xp: xp1, money: Math.round(G.money * 100) / 100, stock, pending, best: Math.max(save.best || 0, G.sales), played: (save.played || 0) + 1 };
  return { next, st, goal, bonus, xpGain: G.xpGain, lvl0, lvl1, sales: G.sales, spent: G.spent, served: G.served, angry: G.angry, rec: G.sales > (save.best || 0) };
}
