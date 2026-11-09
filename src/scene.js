// Construction du restaurant avec les modèles 3D : salle, cuisine, mobilier, éclairage.
import * as THREE from 'three';
import * as BGU from 'three/addons/utils/BufferGeometryUtils.js';
import { R, touch, spriteLayer } from './render.js';
import { M, put, tinted, info, mergeStatic, ownMaterials } from './models.js';
import { loose, burgerObj, bottleObj } from './food.js';
import { drawIcon } from './icons.js';
import { RECIPES, PRICE, euro, REG, PICK, PROD } from './data.js';

export const W = {
  inter: [],            // objets interactifs (raycast)
  grill: [],            // emplacements plancha
  fry: [],              // cuves friteuse
  soda: [], shake: [],  // becs
  boards: [], tray: null, labels: {}, gated: [], custLayer: null, tablet: null, deliveryBox: null, key: null,
  fryerG: null, grillG: null, hood: null,
};
export const reg = (o, id) => { o.userData.id = id; W.inter.push(o); return o; };

/* ---------- textures dessinées (affiches, enseigne) ---------- */
function tex(w, h, draw, rx, ry) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (rx) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry || rx); } return t;
}
function speckle(g, w, h, n, cols, a) { for (let i = 0; i < n; i++) { g.fillStyle = cols[i % cols.length]; g.globalAlpha = Math.random() * a; g.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2); } g.globalAlpha = 1; }
const FONT = 'bold 66px Bungee,Impact,sans-serif';
function texRecipes() {
  return tex(1024, 740, (g, w, h) => {
    g.fillStyle = '#1f2f2a'; g.fillRect(0, 0, w, h); g.strokeStyle = '#8a5530'; g.lineWidth = 28; g.strokeRect(0, 0, w, h); speckle(g, w, h, 3000, ['#fff'], .06);
    g.fillStyle = '#ffc72c'; g.font = 'bold 54px Bungee,Impact,sans-serif'; g.textAlign = 'center'; g.fillText('RECETTES', w / 2, 82);
    g.textAlign = 'left'; const rs = RECIPES.slice(0, 7);
    rs.forEach((r, i) => { const y = 140 + i * 76; g.fillStyle = '#fffaf0'; g.font = 'bold 34px Rubik,Arial,sans-serif'; g.fillText(r.n, 44, y + 12);
      ['bun', ...r.f.map(f => f), 'bun'].forEach((t, j) => drawIcon(g, t, 380 + j * 58, y, 24)); });
    g.fillStyle = 'rgba(255,255,255,.6)'; g.font = '24px Rubik,Arial,sans-serif'; g.fillText('Pain → garnitures → sauces → pain. Frites, nuggets et boissons à part.', 44, h - 30);
  });
}
function texMenu() {
  return tex(1024, 740, (g, w, h) => {
    g.fillStyle = '#141a1a'; g.fillRect(0, 0, w, h); g.fillStyle = '#e2372b'; g.fillRect(0, 0, w, 110);
    g.fillStyle = '#fff'; g.font = 'bold 58px Bungee,Impact,sans-serif'; g.textAlign = 'center'; g.fillText('MENU', w / 2, 78);
    g.textAlign = 'left'; RECIPES.forEach((r, i) => { const y = 170 + i * 64; g.fillStyle = '#fffaf0'; g.font = 'bold 36px Rubik,Arial,sans-serif'; g.fillText(r.n, 60, y); g.textAlign = 'right'; g.fillStyle = '#ffc72c'; g.fillText(euro(r.p), w - 60, y); g.textAlign = 'left'; });
    g.fillStyle = '#bbb'; g.font = '28px Rubik,Arial,sans-serif'; g.fillText('Frites ' + euro(PRICE.fries) + ' · Nuggets ' + euro(PRICE.nuggets), 60, h - 70); g.fillText('Soda ' + euro(PRICE.soda) + ' · Milkshake ' + euro(PRICE.shake), 60, h - 30);
  });
}
function texNeon() {
  return tex(1024, 256, (g, w, h) => { g.clearRect(0, 0, w, h); g.font = 'bold 120px Bungee,Impact,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.shadowColor = '#ff3a2a'; g.shadowBlur = 40; g.fillStyle = '#ff6a55'; g.fillText("BOUVI'BURGER", w / 2, h / 2); g.shadowBlur = 10; g.fillStyle = '#ffe0d8'; g.fillText("BOUVI'BURGER", w / 2, h / 2); });
}
function texOutside() {
  return tex(512, 256, g => { const gr = g.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#a9d8f0'); gr.addColorStop(.6, '#e8f4f2'); gr.addColorStop(.62, '#7aa071'); gr.addColorStop(1, '#5f8458'); g.fillStyle = gr; g.fillRect(0, 0, 512, 256);
    g.fillStyle = 'rgba(255,255,255,.7)'; [[60, 50], [200, 30], [330, 70], [450, 40]].forEach(([x, y]) => { g.beginPath(); g.ellipse(x, y, 40, 12, 0, 0, 7); g.fill(); });
    g.fillStyle = '#4d6e48'; for (let i = 0; i < 14; i++) { g.beginPath(); g.arc(i * 38 + 10, 158, 24, 0, 7); g.fill(); } });
}
export function texScreen(draw) { return tex(256, 192, draw); }

/* ---------- étiquettes ---------- */
function spriteFrom(drawFn, w, h, sx) {
  const t = tex(w, h, drawFn); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false })); s.scale.set(sx, sx * h / w, 1); s.renderOrder = 10; s.layers.set(1); return s;
}
export function lab(parent, txt, sx, x, y, z) {
  const s = spriteFrom((g, w, h) => { g.fillStyle = 'rgba(15,20,20,.82)'; g.beginPath(); g.roundRect(4, 4, w - 8, h - 8, 24); g.fill();
    g.fillStyle = '#fffaf0'; g.font = 'bold 52px Rubik,Arial,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(txt, w / 2, h / 2 + 2); }, 512, 96, (sx || .5) * .62);
  s.position.set(x, y, z); parent.add(s); return s;
}
// étiquette de stock redessinable
export function stockLabel(parent, id, name, x, y, z, sx = .5) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 128; const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, toneMapped: false })); s.scale.set(sx * .8, sx * .2, 1); s.position.set(x, y, z); s.renderOrder = 10; s.layers.set(1);
  s.userData = { c, t, name, last: null }; parent.add(s); W.labels[id] = s; return s;
}
export function setStock(id, n) {
  const s = W.labels[id]; if (!s || s.userData.last === n) return; s.userData.last = n;
  const g = s.userData.c.getContext('2d'), w = 512, h = 128; g.clearRect(0, 0, w, h);
  const low = n <= 0 ? '#e2372b' : n <= 3 ? '#f2a51c' : '#3fb35f';
  g.fillStyle = 'rgba(15,20,20,.85)'; g.beginPath(); g.roundRect(4, 4, w - 8, h - 8, 28); g.fill();
  g.fillStyle = low; g.beginPath(); g.roundRect(w - 150, 14, 132, h - 28, 20); g.fill();
  g.fillStyle = '#fffaf0'; g.font = 'bold 44px Rubik,Arial,sans-serif'; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillText(s.userData.name, 24, h / 2 + 2);
  g.fillStyle = '#10201c'; g.font = 'bold 58px Bungee,Impact,sans-serif'; g.textAlign = 'center'; g.fillText(n <= 0 ? '0' : '×' + n, w - 84, h / 2 + 4);
  s.userData.t.needsUpdate = true;
}
function lockSprite(parent, txt, x, y, z) {
  const s = spriteFrom((g, w, h) => { g.fillStyle = 'rgba(30,20,20,.88)'; g.beginPath(); g.roundRect(4, 4, w - 8, h - 8, 24); g.fill(); g.fillStyle = '#ffc72c'; g.font = 'bold 44px Rubik,Arial,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('🔒 ' + txt, w / 2, h / 2 + 2); }, 512, 96, .5);
  s.position.set(x, y, z); parent.add(s); return s;
}
// objet soumis à un niveau : visible une fois débloqué, sinon cadenas
function gate(lvl, objs, lockTxt, lockAt, parent) {
  const ls = lockSprite(parent || R.scene, lockTxt, lockAt[0], lockAt[1], lockAt[2]);
  W.gated.push({ lvl, objs: [].concat(objs), ls });
}

/* ---------- salle ---------- */
function counter(parent, model, x, z, sx, sz, h, ry) { return put(parent, model, { x, y: 0, z, sx, sy: h, sz, ry: ry || 0, static: true }); }

function buildRoom(S) {
  // sols
  for (let ix = 0; ix < 6; ix++) {
    for (let iz = 0; iz < 3; iz++) put(S, 'floor_kitchen_styleB', { s: .5, x: -5 + ix * 2, y: 0, z: -3.85 + iz * 2, static: true });
    for (let iz = 0; iz < 3; iz++) put(S, 'floor_kitchen', { s: .5, x: -5 + ix * 2, y: 0, z: 2.15 + iz * 2, static: true });
  }
  // murs (face intérieure vers la salle)
  [-4.5, -1.5, 1.5, 4.5].forEach(x => put(S, 'wall', { s: .75, x, y: 0, z: -4.85 - .19, static: true }));
  [-3.35, -.35, 2.65, 5.65].forEach(z => { put(S, 'wall', { s: .75, x: -5.95 - .19, y: 0, z, ry: Math.PI / 2, static: true }); put(S, 'wall', { s: .75, x: 5.95 + .19, y: 0, z, ry: -Math.PI / 2, static: true }); });
  const fz = 7.05 + .19;
  put(S, 'wall_window_closed', { sx: .75, sy: .75, sz: .75, x: -4.5, y: 0, z: fz, ry: Math.PI, static: true });
  put(S, 'wall_window_closed_curtains_red', { sx: 1, sy: .75, sz: .75, x: -1, y: 0, z: fz, ry: Math.PI, static: true });
  put(S, 'wall_doorway', { s: .75, x: 2.5, y: 0, z: fz, ry: Math.PI, static: true });
  put(S, 'wall_window_closed', { sx: .5, sy: .75, sz: .75, x: 5, y: 0, z: fz, ry: Math.PI, static: true });
  // plafond
  const ce = new THREE.Mesh(new THREE.PlaneGeometry(12.4, 12.4), new THREE.MeshStandardMaterial({ color: '#ece6da', roughness: .95 }));
  ce.rotation.x = Math.PI / 2; ce.position.set(0, 3, 1.1); ce.receiveShadow = false; S.add(ce); ce.userData.noMerge = true;
  // dehors (visible par les fenêtres)
  const out = new THREE.Mesh(new THREE.PlaneGeometry(40, 10), new THREE.MeshBasicMaterial({ map: texOutside(), toneMapped: false }));
  out.position.set(0, 3.2, 14); out.rotation.y = Math.PI; out.userData.noMerge = true; R.scene.add(out);
  // plafonniers (émissifs → bloom)
  const lp = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#fff1d8', emissiveIntensity: 1.5 });
  [[-3.2, -2.4], [0, -2.4], [3.2, -2.4], [-3.2, 4], [0, 4], [3.2, 4]].forEach(([x, z]) => { const p = new THREE.Mesh(new THREE.PlaneGeometry(1.3, .5), lp); p.rotation.x = Math.PI / 2; p.position.set(x, 2.99, z); p.userData.noMerge = true; R.scene.add(p); });
  // enseigne néon + menu + recettes
  const neon = new THREE.Mesh(new THREE.PlaneGeometry(4, 1), new THREE.MeshBasicMaterial({ map: texNeon(), transparent: true, toneMapped: false }));
  neon.position.set(-1.6, 2.55, 6.95); neon.rotation.y = Math.PI; neon.material.color.setScalar(1.6); R.scene.add(neon);
  const nl = new THREE.PointLight('#ff4a35', 2.2, 6, 1.6); nl.position.set(-1.6, 2.2, 6.2); R.scene.add(nl);
  const menu = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.73), new THREE.MeshStandardMaterial({ map: texMenu(), emissive: '#fff', emissiveMap: texMenu(), emissiveIntensity: .35, roughness: .4 }));
  menu.position.set(5.74, 1.95, 4.2); menu.rotation.y = -Math.PI / 2; R.scene.add(menu);
  const rec = new THREE.Mesh(new THREE.PlaneGeometry(2.7, 1.95), new THREE.MeshStandardMaterial({ map: texRecipes(), roughness: .8 }));
  rec.position.set(2.2, 1.95, -4.82); R.scene.add(rec);
  // déco murale cuisine
  put(S, 'shelf_papertowel_decorated', { s: .45, x: -4.5, base: 1.7, z: -4.62, static: true });
  put(S, 'dishrack_plates', { s: .5, x: -5.5, base: .92, z: -4.3 });
  // salle : tables, chaises, plantes
  [[-4.6, 5.4], [4.5, 5.6], [-4.6, 3.6]].forEach(([x, z], i) => {
    put(S, i === 1 ? 'table_round_B_tablecloth_green' : 'table_round_B_tablecloth_red', { sx: .3, sy: .75, sz: .3, x, y: 0, z, static: true });
    [[-.75, 0, Math.PI / 2], [.75, 0, -Math.PI / 2]].forEach(([dx, dz, ry]) => put(S, 'chair_A', { s: .62, x: x + dx, y: 0, z: z + dz, ry, static: true }));
  });
  [[-5.5, 6.5], [5.5, 6.5]].forEach(([x, z]) => put(S, 'n_pottedPlant', { s: 2.4, x, y: 0, z, static: true }));
  put(S, 'n_rugDoormat', { s: 2.8, x: 2.5, y: 0, z: 6.6, static: true });
  put(S, 'n_lampRoundFloor', { s: 1.7, x: 5.5, y: 0, z: 3.1, static: true });
}

/* ---------- cuisine ---------- */
function buildKitchen(S) {
  const K = R.scene;
  const H = .92;
  // ligne du fond : meubles (1 m) sauf là où il y a des frigos
  const gaps = [-2.75, -1.85];
  for (let i = 0; i < 12; i++) { const x = -5.5 + i; if (gaps.some(g => Math.abs(g - x) < .6)) continue; counter(S, 'kitchencounter_straight_A', x, -4.25, .5, .49, H); }
  // îlot
  for (let i = 0; i < 7; i++) counter(S, 'kitchencounter_straight_B', -2.6 + i, -2.2, .5, .44, H);
  // comptoir clients
  for (let i = 0; i < 11; i++) counter(S, 'kitchencounter_straight_B', -5.46 + i * 1.08, 1.6, .54, .375, 1.0);
  // station boissons (droite)
  counter(S, 'kitchencounter_straight_A', 5.5, -.8, .55, .45, H, -Math.PI / 2); counter(S, 'kitchencounter_straight_A', 5.5, .3, .55, .45, H, -Math.PI / 2);

  /* --- friteuse (3 cuves) --- */
  const fr = new THREE.Group(); fr.position.set(-4.45, H, -4.25); K.add(fr); W.fryerG = fr;
  [-.75, 0, .75].forEach((dx, i) => {
    const v = new THREE.Group(); v.position.set(dx, 0, 0); fr.add(v);
    put(v, 'pot_B', { s: .5, x: 0, y: 0, z: 0 });
    const oil = new THREE.Mesh(new THREE.CylinderGeometry(.205, .205, .006, 24), new THREE.MeshStandardMaterial({ color: '#d99a2b', roughness: .08, metalness: .2, emissive: '#5a3300', emissiveIntensity: .45 }));
    oil.position.set(0, .2, 0); v.add(oil);
    const basket = new THREE.Group(); basket.position.set(0, .2, 0); basket.visible = false; v.add(basket);
    const fries = new THREE.Group();
    const fm = new THREE.MeshStandardMaterial({ color: '#f2e2b0', roughness: .55 });
    for (let k = 0; k < 24; k++) { const s = new THREE.Mesh(new THREE.BoxGeometry(.014, .1, .014), fm); s.position.set((Math.random() - .5) * .26, .02, (Math.random() - .5) * .22); s.rotation.set(Math.random() * 1.4, Math.random() * 3, 0); s.castShadow = true; fries.add(s); }
    const nug = new THREE.Group(); const nugMats = [];
    for (let k = 0; k < 7; k++) { const n = M('food_ingredient_potato_mashed'); const s = .075 / info('food_ingredient_potato_mashed').w; n.scale.setScalar(s); n.position.set((Math.random() - .5) * .25, .01 + (k > 3 ? .04 : 0), (Math.random() - .5) * .2); n.rotation.y = k * 1.3; nug.add(n); }
    const nm = ownMaterials(nug);
    basket.add(fries, nug);
    W.fry.push({ v, basket, fries, nug, fm, nm, i });
  });
  reg(fr, 'fryer'); lab(fr, 'Friteuse', .5, 0, .55, .3);
  gate(99, [W.fry[2].v], '3e panier : boutique', [-3.7, 1.35, -4.0]);

  /* --- congélateurs --- */
  const f1 = new THREE.Group(); f1.position.set(-2.75, 0, -4.25); K.add(f1); put(f1, 'fridge_B', { s: .42 }); reg(f1, 'crate:frozen'); stockLabel(f1, 'frozen', 'Frites', 0, 1.4, .1);
  const f2 = new THREE.Group(); f2.position.set(-1.85, 0, -4.25); K.add(f2); put(f2, 'fridge_A', { s: .42 }); reg(f2, 'crate:nugfrozen'); stockLabel(f2, 'nugfrozen', 'Nuggets', 0, 1.4, .1);
  gate(4, f2, 'Nuggets : niv. 4', [-1.85, 1.2, -3.9]);

  /* --- plancha (jusqu'à 8 emplacements) --- */
  const gr = new THREE.Group(); gr.position.set(-.15, H, -4.25); K.add(gr); W.grillG = gr;
  [-.5, .5].forEach(dx => put(gr, 'stove_multi_countertop', { s: .58, x: dx, base: -.02, z: 0 }));
  const cols = [-.75, -.25, .25, .75];
  const order = [[0, 1], [1, 1], [2, 1], [3, 1], [1, 0], [2, 0], [0, 0], [3, 0]]; // front row puis arrière
  order.forEach(([c, r], idx) => {
    const p = new THREE.Group(); p.position.set(cols[c], .17, r ? -.2 : .2); gr.add(p);
    const mk = (name, tint) => { const o = tint ? tinted(name, tint) : M(name); return o; };
    const fitW = (o, name, w) => { const s = w / Math.max(info(name).w, info(name).d); o.scale.setScalar(s); o.position.y = -info(name).minY * s; return o; };
    const variants = {
      raw: fitW(mk('food_ingredient_burger_uncooked'), 'food_ingredient_burger_uncooked', .17),
      patty: fitW(mk('food_ingredient_burger_cooked'), 'food_ingredient_burger_cooked', .17),
      burnt: fitW(mk('food_ingredient_burger_trash'), 'food_ingredient_burger_trash', .17),
    };
    const bacon = (name, tint) => { const g = new THREE.Group(); [-.04, 0, .04].forEach(x => { const b = tint ? tinted(name, tint) : M(name); const s = .17 / info(name).d; b.scale.setScalar(s); b.position.set(x, -info(name).minY * s, 0); g.add(b); }); return g; };
    variants.rawbacon = bacon('f_bacon-raw'); variants.bacon = bacon('f_bacon'); variants.burntbacon = bacon('f_bacon', '#2a1c16');
    Object.values(variants).forEach(v => { v.visible = false; p.add(v); });
    p.visible = false; W.grill.push({ p, variants, idx, cur: null });
  });
  reg(gr, 'grill'); lab(gr, 'Plancha', .45, 0, .6, .35);
  put(gr, 'f_cooking-spatula', { s: .5, x: 1.15, base: -.02, z: .15, ry: .3 });
  // hotte
  const hood = M('extractorhood'); hood.scale.set(1.0, .3, .5); hood.position.set(-.15, 2.0 - 2.0 * .3 + .1, -4.45); hood.userData.static = true; S.add(hood);

  /* --- caisses de la ligne du fond --- */
  const crate = (id, model, x, z, nm, s, y = H, tint) => {
    const g = new THREE.Group(); g.position.set(x, y, z); K.add(g);
    const o = tint ? tinted(model, tint) : M(model); o.scale.setScalar(s); g.add(o); reg(g, 'crate:' + id); stockLabel(g, id, nm, 0, .5, .12); return g;
  };
  crate('raw', 'crate_steak', 1.45, -4.25, 'Steaks', .38);
  crate('bun', 'crate_buns', 2.35, -4.25, 'Pains', .38);
  const cb = crate('rawbacon', 'crate_ham', 3.25, -4.25, 'Bacon', .38);
  gate(3, cb, 'Bacon : niv. 3', [3.25, 1.2, -4.0]);

  /* --- machine à milkshake --- */
  const sh = new THREE.Group(); sh.position.set(4.2, H, -4.3); K.add(sh); put(sh, 'icecream_machine', { s: .36 }); reg(sh, 'shake'); lab(sh, 'Milkshake', .5, 0, 1.2, .3);
  [-.17, .17].forEach(dx => { const c = M('f_frappe'); const s = .22 / info('f_frappe').h; c.scale.setScalar(s); c.position.set(dx, -.02, .3); c.visible = false; sh.add(c);
    W.shake.push({ c }); });
  gate(5, sh, 'Milkshake : niv. 5', [4.2, 1.4, -4.0]);

  /* --- tablette de commande --- */
  const tb = new THREE.Group(); tb.position.set(5.1, H, -4.3); K.add(tb);
  put(tb, 'menu', { s: .85, x: 0, y: 0, z: 0 });
  const scr = new THREE.Mesh(new THREE.PlaneGeometry(.31, .4), new THREE.MeshStandardMaterial({ map: tabletTex(0), emissive: '#fff', emissiveIntensity: 1.1 }));
  scr.material.emissiveMap = scr.material.map; scr.position.set(0, .4, .075); scr.rotation.x = -.08; tb.add(scr); W.tablet = scr;
  reg(tb, 'tablet'); lab(tb, 'Commandes', .5, 0, .95, .15);
  // livraisons
  const db = new THREE.Group(); db.position.set(5.65, H, -4.3); K.add(db); put(db, 'pizzabox_stacked', { s: .22 }); db.visible = false; W.deliveryBox = db;

  /* --- îlot de préparation --- */
  [['ketchup', -2.8], ['mayo', -2.5], ['mustard', -2.2]].forEach(([k, x]) => {
    const s = new THREE.Group(); s.position.set(x, H, -2.2); K.add(s); const b = bottleObj(k); s.add(b); reg(s, 'sauce:' + k); stockLabel(s, k, { ketchup: 'Ketchup', mayo: 'Mayo', mustard: 'Moutarde' }[k], 0, .5, 0, .42);
    if (k === 'mayo') gate(2, s, 'Mayo : niv. 2', [x, .75 + H, -2.2]);
  });
  [-1.4, -.35].forEach((x, i) => {
    const b = new THREE.Group(); b.position.set(x, H, -2.2); K.add(b); const cb = M('cuttingboard'); cb.scale.set(.3, .3, .3); b.add(cb);
    const st = new THREE.Group(); st.position.y = .05; b.add(st); W.boards.push(st); reg(b, 'board:' + i); lab(b, 'Planche ' + (i + 1), .45, 0, .5, .15);
  });
  [['lettuce', 'crate_lettuce', .75, 'Salade'], ['tomato', 'crate_tomatoes', 1.37, 'Tomates'], ['cheese', 'crate_cheese', 1.99, 'Cheddar'], ['onion', 'crate_onions', 2.61, 'Oignons'], ['maroilles', 'crate_cheese', 3.23, 'Maroilles']].forEach(([id, model, x, nm]) => {
    const g = crate(id, model, x, -2.2, nm, .3, H, id === 'maroilles' ? '#ff8f3a' : null);
    g.children.forEach(c => { if (c.isSprite) c.position.y = .42; });
    if (id === 'onion') gate(2, g, 'Oignons : niv. 2', [x, 1.2, -2.2]);
    if (id === 'maroilles') gate(6, g, 'Maroilles : niv. 6', [x, 1.2, -2.2]);
  });
  // poubelle
  const tr = new THREE.Group(); tr.position.set(-3.65, 0, -1.15); K.add(tr); put(tr, 'n_trashcan', { s: 2.0 }); reg(tr, 'trash'); lab(tr, 'Poubelle', .42, 0, 1.15, 0);

  /* --- station boissons --- */
  const sd = new THREE.Group(); sd.position.set(5.62, H, -.55); K.add(sd);
  const mach = tinted('n_kitchenFridgeSmall', '#ff5a48'); mach.scale.setScalar(1.7); mach.rotation.y = -Math.PI / 2; mach.position.set(.08, -.01, 0); sd.add(mach);
  [-.18, .18].forEach(dz => { const c = M('f_soda'); const s = .2 / info('f_soda').h; c.scale.setScalar(s); c.position.set(-.3, -.02, dz); c.visible = false; sd.add(c); W.soda.push({ c }); });
  reg(sd, 'soda'); lab(sd, 'Machine à soda', .6, -.3, .85, 0);
  const cs = new THREE.Group(); cs.position.set(5.45, H, .55); K.add(cs);
  for (let i = 0; i < 6; i++) { const c = M('f_cup'); const s = .14 / info('f_cup').h; c.scale.setScalar(s); c.position.y = i * .03; cs.add(c); }
  reg(cs, 'cups'); stockLabel(cs, 'cup', 'Gobelets', 0, .55, 0, .5);

  /* --- comptoir clients : caisse, plateau, sonnette --- */
  const pos = new THREE.Group(); pos.position.set(REG.x, 1.0, 1.55); K.add(pos);
  const till = M('n_kitchenMicrowave'); till.scale.setScalar(1.0); till.position.y = 0; pos.add(till);
  const ps = new THREE.Mesh(new THREE.PlaneGeometry(.2, .12), new THREE.MeshStandardMaterial({ map: texScreen((g, w, h) => { g.fillStyle = '#0f2a3a'; g.fillRect(0, 0, w, h); g.fillStyle = '#18a58f'; g.fillRect(8, 8, w - 16, 34); g.fillStyle = '#fff'; g.font = 'bold 22px Rubik,Arial'; g.fillText('CAISSE', 18, 34); for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) { g.fillStyle = ['#e2372b', '#ffc72c', '#3fb35f', '#6a7bd1'][j]; g.fillRect(12 + j * 58, 56 + i * 40, 50, 32); } }), emissive: '#fff', emissiveIntensity: .8 }));
  ps.material.emissiveMap = ps.material.map; ps.position.set(0, .22, .18); ps.rotation.x = -.35; pos.add(ps); lab(pos, 'Caisse', .4, 0, .55, 0);
  const tray = new THREE.Group(); tray.position.set(PICK.x, 1.0, 1.55); K.add(tray);
  const tb2 = M('cuttingboard'); tb2.scale.set(.33, .12, .33); tray.add(tb2);
  const ti = new THREE.Group(); ti.position.y = .03; tray.add(ti); tray.userData.items = ti; W.tray = ti; reg(tray, 'tray'); lab(tray, 'Plateau', .4, 0, .5, 0);
  const bell = new THREE.Group(); bell.position.set(PICK.x + .55, 1.0, 1.55); K.add(bell);
  const gold = new THREE.MeshStandardMaterial({ color: '#e8b84a', metalness: 1, roughness: .2 }), dk = new THREE.MeshStandardMaterial({ color: '#3a3f43', metalness: .8, roughness: .35 });
  const b1 = new THREE.Mesh(new THREE.CylinderGeometry(.045, .05, .012, 20), dk); b1.position.y = .006; const b2 = new THREE.Mesh(new THREE.SphereGeometry(.045, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), gold); b2.position.y = .012; const b3 = new THREE.Mesh(new THREE.SphereGeometry(.008, 8, 6), dk); b3.position.y = .06;
  [b1, b2, b3].forEach(m => { m.castShadow = true; bell.add(m); }); reg(bell, 'bell'); lab(bell, 'Sonnette : servir', .6, 0, .35, 0);
}

function tabletTex(n) {
  return texScreen((g, w, h) => { g.fillStyle = '#0f2a3a'; g.fillRect(0, 0, w, h); g.fillStyle = '#18a58f'; g.fillRect(8, 8, w - 16, 36); g.fillStyle = '#fff'; g.font = 'bold 22px Rubik,Arial'; g.fillText('COMMANDES', 18, 35);
    for (let i = 0; i < 4; i++) { g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(14, 58 + i * 32, w - 28, 24); } });
}
export function setTabletBadge(n) { /* réservé : nombre de livraisons en cours */ }

/* ---------- lumières ---------- */
function buildLights() {
  const sc = R.scene;
  sc.add(new THREE.HemisphereLight('#fffaf0', '#7a6558', .35));
  const key = new THREE.DirectionalLight('#fff3e0', 1.25);
  key.position.set(2.5, 8, 4); key.target.position.set(0, 0, -1); sc.add(key.target);
  key.castShadow = true; key.shadow.mapSize.set(touch ? 1024 : 2048, touch ? 1024 : 2048);
  Object.assign(key.shadow.camera, { left: -7.5, right: 7.5, top: 8, bottom: -8, near: 1, far: 20 });
  key.shadow.bias = -.0004; key.shadow.normalBias = .03; key.shadow.radius = 3; sc.add(key); R.key = key; W.key = key;
  [[0, 2.7, -2.4, 1.6], [0, 2.7, 4.2, 1.2]].forEach(([x, y, z, i]) => { const p = new THREE.PointLight('#ffe9cc', i, 12, 1.5); p.position.set(x, y, z); sc.add(p); });
}

export function buildWorld() {
  W.inter.length = 0; W.grill.length = 0; W.fry.length = 0; W.soda.length = 0; W.shake.length = 0; W.boards.length = 0; W.gated.length = 0;
  const sc = R.scene;
  buildLights();
  const S = new THREE.Group(); sc.add(S);
  buildRoom(S); buildKitchen(S);
  // fusion des éléments statiques (même matière) : peu d'appels de dessin
  S.traverse(o => { if (o.isMesh) { o.castShadow = o.castShadow !== false; o.receiveShadow = true; } });
  try { mergeStatic(S, BGU); } catch (e) { console.warn('fusion statique impossible', e); }
  W.custLayer = new THREE.Group(); sc.add(W.custLayer);
}

// Applique niveau / améliorations : objets visibles, cadenas
export function applyProgress(level, ups) {
  W.gated.forEach(g => {
    const on = g.lvl <= level;
    g.objs.forEach(o => { o.visible = on; });
    g.ls.visible = !on && g.lvl < 90;
  });
  // 3e cuve : liée à la boutique
  const g3 = W.gated.find(g => g.lvl === 99);
  if (g3) { const on = ups.fryer > 0; g3.objs.forEach(o => { o.visible = on; }); g3.ls.visible = !on; }
}
