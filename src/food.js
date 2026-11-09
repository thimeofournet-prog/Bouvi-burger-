// Aliments en 3D, assemblés à partir des modèles CC0 (KayKit + Kenney).
import * as THREE from 'three';
import { M, tinted, info } from './models.js';

const fit = (o, name, w) => { const i = info(name), s = w / Math.max(i.w, i.d); o.scale.setScalar(s); o.position.y = -i.minY * s; return s; };
const wrap = (o) => { const g = new THREE.Group(); g.add(o); return g; };
const sauceMats = {};
const sauceMat = c => sauceMats[c] || (sauceMats[c] = new THREE.MeshStandardMaterial({ color: c, roughness: 0.2 }));
const blobGeo = new THREE.SphereGeometry(1, 10, 8);

// Couches d'un burger : modèle, largeur, épaisseur de pile
const LAYER = {
  bun: { m: 'food_ingredient_bun_bottom', w: 0.2, h: 0.05 },
  top: { m: 'food_ingredient_bun_top', w: 0.2, h: 0.075 },
  patty: { m: 'food_ingredient_burger_cooked', w: 0.18, h: 0.04 },
  cheese: { m: 'food_ingredient_cheese_slice', w: 0.22, h: 0.012 },
  maroilles: { m: 'food_ingredient_cheese_slice', w: 0.21, h: 0.014, tint: '#ff9a3c' },
  lettuce: { m: 'food_ingredient_lettuce_slice', w: 0.23, h: 0.012 },
  tomato: { m: 'food_ingredient_tomato_slice', w: 0.17, h: 0.014 },
  onion: { m: 'food_ingredient_onion_rings', w: 0.17, h: 0.012 },
};

function layerObj(t, seed) {
  if (t === 'bacon') {
    const g = new THREE.Group();
    [-0.05, 0.0, 0.05].forEach((x, i) => { const b = M('f_bacon'); const s = 0.2 / info('f_bacon').d; b.scale.setScalar(s); b.position.set(x, -info('f_bacon').minY * s, 0); b.rotation.y = (i - 1) * 0.12; g.add(b); });
    g.rotation.y = seed * 1.3; return [g, 0.012];
  }
  if (['ketchup', 'mayo', 'mustard'].includes(t)) {
    const c = { ketchup: '#b5170e', mayo: '#f7efcf', mustard: '#e9b80d' }[t], g = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      const a = i / 6 * Math.PI * 2 + seed, r = 0.02 + ((i * 37 + seed * 11) % 10) / 10 * 0.05;
      const s = new THREE.Mesh(blobGeo, sauceMat(c)); s.scale.set(0.016, 0.005, 0.016); s.position.set(Math.cos(a) * r, 0.003, Math.sin(a) * r); g.add(s);
    }
    return [g, 0.006];
  }
  const L = LAYER[t]; if (!L) return [new THREE.Group(), 0];
  const o = L.tint ? tinted(L.m, L.tint) : M(L.m); fit(o, L.m, L.w);
  const g = wrap(o); g.rotation.y = seed * 1.7;
  return [g, L.h];
}

export function burgerObj(c) {
  const g = new THREE.Group(); let y = 0, k = 0;
  c.forEach(t => {
    const key = t === 'top' ? 'top' : t;
    const [o, h] = layerObj(key, ++k);
    o.position.y += y; g.add(o); y += h;
  });
  return g;
}

function nuggetPile(tint) {
  const g = new THREE.Group();
  [[-0.03, 0, 0.1], [0.03, 0.01, 0.05], [0, -0.03, 0.14], [0.0, 0.025, 0.2], [-0.04, 0.03, 0.2]].forEach(([x, z, y], i) => {
    const n = tint ? tinted('food_ingredient_potato_mashed', tint) : M('food_ingredient_potato_mashed');
    const s = 0.055 / info('food_ingredient_potato_mashed').w; n.scale.setScalar(s); n.position.set(x, 0.09 + (i > 2 ? 0.045 : 0), z); n.rotation.y = i * 1.3; g.add(n);
  });
  return g;
}

export function bottleObj(k) {
  const g = new THREE.Group();
  if (k === 'mayo') { const o = M('jar_A_small'); fit(o, 'jar_A_small', 0.075); g.add(o); return g; }
  const n = k === 'ketchup' ? 'ketchup' : 'mustard'; const o = M(n); const s = 0.18 / info(n).h; o.scale.setScalar(s); g.add(o);
  return g;
}

export function loose(t, h) {
  const g = new THREE.Group();
  switch (t) {
    case 'bun': { const o = M('food_ingredient_bun'); fit(o, 'food_ingredient_bun', 0.2); g.add(o); break; }
    case 'raw': { const o = M('food_ingredient_burger_uncooked'); fit(o, 'food_ingredient_burger_uncooked', 0.18); g.add(o); break; }
    case 'patty': { const o = M('food_ingredient_burger_cooked'); fit(o, 'food_ingredient_burger_cooked', 0.18); g.add(o); break; }
    case 'burnt': { const o = M('food_ingredient_burger_trash'); fit(o, 'food_ingredient_burger_trash', 0.18); g.add(o); break; }
    case 'rawbacon': case 'bacon': case 'burntbacon': {
      [-0.045, 0.0, 0.045].forEach((x, i) => {
        const b = t === 'rawbacon' ? M('f_bacon-raw') : t === 'bacon' ? M('f_bacon') : tinted('f_bacon', '#3a2a22');
        const s = 0.2 / info('f_bacon').d; b.scale.setScalar(s); b.position.set(x, -info('f_bacon').minY * s, 0); b.rotation.y = (i - 1) * 0.1; g.add(b);
      }); break; }
    case 'lettuce': case 'tomato': case 'cheese': case 'onion': case 'maroilles': { const [o] = layerObj(t, 1); g.add(o); break; }
    case 'frozen': { const o = tinted('f_bag', '#a8cdf5', 'frozen'); const s = 0.22 / info('f_bag').h; o.scale.setScalar(s); g.add(o); break; }
    case 'nugfrozen': { const o = tinted('f_bag', '#ffcf8a', 'nugfrozen'); const s = 0.22 / info('f_bag').h; o.scale.setScalar(s); g.add(o); break; }
    case 'fries': { const o = M('f_fries'); const s = 0.2 / info('f_fries').h; o.scale.setScalar(s); g.add(o); break; }
    case 'charred': { const o = tinted('f_fries', '#4a3a2a', 'charred'); const s = 0.2 / info('f_fries').h; o.scale.setScalar(s); g.add(o); break; }
    case 'nuggets': case 'charnug': {
      const b = M('f_fries-empty'); const s = 0.13 / info('f_fries-empty').h; b.scale.setScalar(s); g.add(b);
      g.add(nuggetPile(t === 'charnug' ? '#5a4030' : null)); break; }
    case 'cup': { const o = M('f_cup'); const s = 0.14 / info('f_cup').h; o.scale.setScalar(s); g.add(o); break; }
    case 'soda': { const o = M('f_soda'); const s = 0.22 / info('f_soda').h; o.scale.setScalar(s); g.add(o); break; }
    case 'shake': { const o = M('f_frappe'); const s = 0.25 / info('f_frappe').h; o.scale.setScalar(s); g.add(o); break; }
    case 'sauce': g.add(bottleObj(h.k)); break;
    case 'burger': g.add(burgerObj(h.c)); break;
  }
  return g;
}

export const sig = h => !h ? '' : h.t === 'burger' ? 'B' + h.c.join('.') : h.t === 'sauce' ? 'S' + h.k : h.t;
export const ei = sig;
export const di = s => !s ? null : s[0] === 'B' ? { t: 'burger', c: s.slice(1).split('.') } : s[0] === 'S' ? { t: 'sauce', k: s.slice(1) } : { t: s };
