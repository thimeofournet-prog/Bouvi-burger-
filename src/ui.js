// Interface : HUD, écrans (menu, réglages, tablette, fin de journée, boutique).
import { G, orderOf } from './rules.js';
import { NAMES, PRODUCTS, PROD, UPGRADES, UNLOCKS, XP_AT, MAX_LEVEL, euro, levelFor, DELIVERY_T } from './data.js';
import { ICON } from './icons.js';
import { sfx } from './audio.js';
import { releaseLock, updateHint } from './controls.js';
import { touch } from './render.js';
import { V } from './view.js';
import { C } from './controls.js';

const $ = id => document.getElementById(id);
let toastT, ticketSig = '';
export const resetTickets = () => { ticketSig = ''; };

export function toast(m) { const t = $('toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200); }
export function pop(txt) { const d = document.createElement('div'); d.className = 'pop'; d.textContent = txt; $('stage').appendChild(d); setTimeout(() => d.remove(), 1400); }

const holdLabel = h => h ? (h.t === 'sauce' ? NAMES[h.k] : h.t === 'burger' ? (h.c[h.c.length - 1] === 'top' ? 'Burger fermé' : 'Burger ouvert') : NAMES[h.t]) : '';
V.promptFor = (id, h) => {
  const [k, a] = id.split(':'); const hn = h ? (h.t === 'sauce' ? NAMES[h.k] : h.t === 'burger' ? (h.c[h.c.length - 1] === 'top' ? 'le burger' : 'le burger ouvert') : NAMES[h.t]) : '';
  switch (k) {
    case 'crate': { const n = G.stock[a] || 0; return h && h.t === a ? 'Reposer' : h ? '' : 'Prendre : <b>' + NAMES[a] + '</b> <small>(stock ' + n + ')</small>'; }
    case 'sauce': return h && h.t === 'sauce' ? 'Reposer la sauce' : h ? '' : 'Prendre : <b>' + NAMES[a] + '</b>';
    case 'board': return !h ? 'Prendre ce qu’il y a sur la planche' : h.t === 'sauce' ? 'Ajouter : <b>' + hn + '</b>' : 'Poser : <b>' + hn + '</b>';
    case 'grill': return h && (h.t === 'raw' || h.t === 'rawbacon') ? 'Poser sur la plancha : <b>' + hn + '</b>' : !h ? 'Prendre ce qui est cuit' : '';
    case 'fryer': return h && (h.t === 'frozen' || h.t === 'nugfrozen') ? 'Plonger : <b>' + hn + '</b>' : !h ? 'Prendre ce qui est cuit' : '';
    case 'cups': return !h ? 'Prendre un <b>gobelet</b>' : h.t === 'cup' ? 'Reposer' : '';
    case 'soda': return h && h.t === 'cup' ? 'Remplir le gobelet' : !h ? 'Prendre le soda' : '';
    case 'shake': return h && h.t === 'cup' ? 'Préparer un milkshake' : !h ? 'Prendre le milkshake' : '';
    case 'tray': return h ? 'Poser sur le plateau : <b>' + hn + '</b>' : 'Reprendre du plateau';
    case 'bell': return 'Sonner : <b>servir le plateau</b>';
    case 'trash': return h ? 'Jeter : <b>' + hn + '</b>' : '';
    case 'tablet': return '<b>Commander des produits</b>';
    case 'cust': { const c = G.cust.find(c => c.id === +a); return c && c.st === 'order' ? '<b>Prendre la commande</b>' : c && c.st === 'wait' ? 'Commande n°' + c.id + ' en attente' : 'Client'; }
  } return '';
};

/* ---------- HUD ---------- */
export function renderHUD() {
  const box = $('tickets');
  const list = G ? G.cust.filter(c => c.st === 'wait').sort((a, b) => a.id - b.id) : [];
  const s = list.map(c => c.id).join(',');
  if (s !== ticketSig) {
    ticketSig = s; box.innerHTML = '';
    list.forEach(c => {
      const o = orderOf(c), d = document.createElement('div'); d.className = 'ticket'; d.dataset.id = c.id;
      const items = ['bun', ...o.f].concat(o.fr ? ['fries'] : [], o.nu ? ['nuggets'] : [], o.dr ? ['soda'] : [], o.sh ? ['shake'] : []);
      d.innerHTML = `<div class="tn"><span>#${c.id}</span><span></span></div><div class="icons">${items.map(t => `<img src="${ICON[t]}" alt="${NAMES[t] || t}">`).join('')}</div><div class="pat"><i></i></div>`;
      d.querySelector('.tn span:last-child').textContent = o.n; box.appendChild(d);
    });
  }
  if (!G) return;
  box.querySelectorAll('.ticket').forEach(el => { const c = G.cust.find(c => c.id == el.dataset.id); if (!c) return; const r = Math.max(0, c.pat / c.max), i = el.querySelector('.pat i'); i.style.width = r * 100 + '%'; i.style.background = r > .5 ? 'var(--ok)' : r > .25 ? 'var(--warn)' : 'var(--bad)'; el.classList.toggle('hurry', r < .2); });
  const sec = Math.max(0, Math.ceil(G.time)), tm = $('timer'); tm.textContent = Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0'); tm.classList.toggle('low', sec <= 30 && G.ph === 'play');
  $('money').textContent = euro(G.money);
  const lvl = levelFor(G.xp + G.xpGain), lo = XP_AT[lvl - 1], hi = XP_AT[lvl] ?? lo + 1, frac = lvl >= MAX_LEVEL ? 1 : (G.xp + G.xpGain - lo) / (hi - lo);
  $('lvl').firstElementChild.textContent = 'Jour ' + G.day + ' · Niv. ' + G.level; $('lvl').lastElementChild.firstElementChild.style.width = Math.min(100, frac * 100) + '%';
  const pend = G.deliveries.length; const dl = $('deliv'); dl.hidden = !pend; if (pend) dl.textContent = '📦 Livraison dans ' + Math.ceil(Math.min(...G.deliveries.map(d => d.t))) + ' s';
  const h = G.players[C.li].h; $('held').innerHTML = h ? 'En main : <b>' + holdLabel(h) + '</b>' : 'Mains vides';
}

/* ---------- écrans ---------- */
export function overlay(html, btns, after) {
  releaseLock(); $('pads').hidden = true; $('look').hidden = true;
  const o = $('overlay'); o.hidden = false; o.innerHTML = '<div class="card">' + html + '<div class="row"></div></div>';
  const row = o.querySelector('.row'); (btns || []).forEach(([t, fn, c, dis]) => { const b = document.createElement('button'); b.className = 'btn ' + c; b.textContent = t; b.disabled = !!dis; b.onclick = () => { sfx('drop'); fn(); }; row.appendChild(b); });
  if (after) after(o); updateHint();
}
export function hide() { $('overlay').hidden = true; $('pads').hidden = !touch; $('look').hidden = !touch; updateHint(); }

export function settingsScreen(S, cb) {
  // cb : { save(settings), reset(), back(), quit?() }
  const r = (id, min, max, step, v) => `<input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${v}">`;
  overlay(`<h2>Réglages</h2>
    <label class="set"><span>Sensibilité de la caméra <b id="sensV">${S.sens.toFixed(1)}×</b></span>${r('sens', .3, 3, .1, S.sens)}</label>
    <label class="set"><span>Son <b id="volV">${Math.round(S.vol * 100)} %</b></span>${r('vol', 0, 1, .05, S.vol)}</label>
    <label class="set"><span>Qualité graphique</span><select id="qual"><option value="auto">Automatique (recommandé)</option><option value="high">Élevée (ombres douces, occlusion, éclat)</option><option value="medium">Moyenne (éclat, sans occlusion)</option><option value="low">Basse (téléphones lents)</option></select></label>
    <label class="set chk"><input type="checkbox" id="bloom" ${S.bloom ? 'checked' : ''}><span>Effet d’éclat lumineux (bloom)</span></label>
    <div class="danger"><p class="note">Remise à zéro : efface votre progression (niveau, argent, stocks, améliorations).</p><button class="btn b" id="resetBtn">Remettre la progression à zéro</button></div>`,
    [['Retour', () => cb.back(), 'a'], ...(cb.quit ? [['Quitter la journée', () => cb.quit(), 'c']] : [])],
    o => {
      const q = o.querySelector('#qual'); q.value = S.quality;
      const upd = () => { S.sens = +o.querySelector('#sens').value; S.vol = +o.querySelector('#vol').value; S.quality = q.value; S.bloom = o.querySelector('#bloom').checked; o.querySelector('#sensV').textContent = S.sens.toFixed(1) + '×'; o.querySelector('#volV').textContent = Math.round(S.vol * 100) + ' %'; cb.save(S); };
      o.querySelector('#sens').oninput = upd; o.querySelector('#vol').oninput = () => { upd(); sfx('pick'); }; q.onchange = upd; o.querySelector('#bloom').onchange = upd;
      const rb = o.querySelector('#resetBtn');
      rb.onclick = () => { if (rb.dataset.sure) { cb.reset(); return; } rb.dataset.sure = 1; rb.textContent = 'Confirmer : tout effacer ?'; rb.classList.add('sure'); setTimeout(() => { if (rb.isConnected) { delete rb.dataset.sure; rb.textContent = 'Remettre la progression à zéro'; rb.classList.remove('sure'); } }, 4000); };
    });
}

export function tabletScreen(onOrder, close) {
  const rows = () => PRODUCTS.map(p => {
    const lock = p.lvl > G.level, n = G.stock[p.id] || 0, can = !lock && G.money + 1e-9 >= p.cost;
    return `<div class="prow ${lock ? 'lock' : ''}"><img src="${ICON[p.icon]}" alt=""><div class="pn"><b>${p.n}</b><small>${lock ? '🔒 niveau ' + p.lvl : 'Lot de ' + p.pack + (p.unit ? ' ' + p.unit : '')}</small></div><div class="pst ${n <= 0 ? 'z' : n <= 3 ? 'l' : ''}">${n}</div><button data-id="${p.id}" ${can ? '' : 'disabled'}>${lock ? '—' : euro(p.cost)}</button></div>`;
  }).join('');
  const pend = () => G.deliveries.length ? G.deliveries.map(d => '📦 ' + Object.entries(d.items).map(([k, q]) => q + ' × ' + PROD[k].n).join(', ') + ' — ' + Math.max(0, Math.ceil(d.t)) + ' s').join('<br>') : 'Aucune livraison en cours.';
  const render = () => {
    overlay(`<h2>Commandes fournisseur</h2><div class="bank">En caisse <b>${euro(G.money)}</b></div><div class="plist">${rows()}</div><p class="note" id="pend">${pend()}</p><p class="note">Livraison en ${DELIVERY_T} secondes environ.</p>`,
      [['Fermer', close, 'a']],
      o => { o.querySelectorAll('.prow button').forEach(b => { b.onclick = () => { onOrder(b.dataset.id, render); }; }); });
  };
  return render;
}

export function endScreen(res, save, cb) {
  const lvlUp = res.lvl1 > res.lvl0; let ups = '';
  for (let l = res.lvl0 + 1; l <= res.lvl1; l++) if (UNLOCKS[l]) ups += `<div class="unlock"><b>Niveau ${l} : ${UNLOCKS[l].t}</b><span>${UNLOCKS[l].d}</span></div>`;
  const lvl = res.lvl1, lo = XP_AT[lvl - 1], hi = XP_AT[lvl] ?? lo + 1, frac = lvl >= MAX_LEVEL ? 1 : (save.xp - lo) / (hi - lo);
  overlay(`<h2>Fin du jour ${save.day - 1}</h2><div class="stars">${[0, 1, 2].map(i => `<span class="${i < res.st ? '' : 'off'}">★</span>`).join('')}</div>
    <div class="recap"><span>Ventes</span><b>${euro(res.sales)}${res.rec && res.sales > 0 ? ' (record !)' : ''}</b><span>Dépenses en stock</span><b>${euro(res.spent)}</b><span>Clients servis</span><b>${res.served}</b><span>Clients furieux</span><b>${res.angry}</b><span>En caisse</span><b>${euro(save.money)}</b><span>Étoiles à</span><b>${res.goal.map(g => Math.round(g) + ' €').join(' / ')}</b></div>
    <div class="xpbox"><div class="xpt"><span>Niveau ${lvl}</span><b>+${res.xpGain + res.bonus} XP</b></div><div class="xpbar"><i style="width:${Math.min(100, frac * 100)}%"></i></div></div>
    ${lvlUp ? `<div class="levelup">Niveau ${res.lvl1} atteint !</div>${ups}` : ''}`,
    [['Boutique', cb.shop, 'b'], ['Jour suivant', cb.next, 'a'], ['Menu', cb.menu, 'c']]);
  if (lvlUp) sfx('level');
}

export function shopScreen(save, cb) {
  const render = () => {
    const rows = UPGRADES.map(u => {
      const lv = save.ups[u.id], max = u.costs.length, done = lv >= max, cost = u.costs[lv];
      return `<div class="prow"><img src="${ICON[u.icon]}" alt=""><div class="pn"><b>${u.n}${max > 1 ? ' <small>(' + lv + '/' + max + ')</small>' : ''}</b><small>${done ? 'Au maximum' : u.d(lv)}</small></div><button data-id="${u.id}" ${done || save.money < cost ? 'disabled' : ''}>${done ? '✔' : euro(cost)}</button></div>`;
    }).join('');
    overlay(`<h2>Boutique</h2><div class="bank">En caisse <b>${euro(save.money)}</b></div><div class="plist">${rows}</div><p class="note">Les améliorations sont définitives. L’argent sert aussi à commander du stock.</p>`,
      [['Jour suivant', cb.next, 'a'], ['Menu', cb.menu, 'c']],
      o => o.querySelectorAll('.prow button').forEach(b => { b.onclick = () => { const u = UPGRADES.find(u => u.id === b.dataset.id), cost = u.costs[save.ups[u.id]]; if (save.money < cost) return; save.money = Math.round((save.money - cost) * 100) / 100; save.ups[u.id]++; cb.bought(); sfx('buy'); render(); }; }));
  };
  render();
}
