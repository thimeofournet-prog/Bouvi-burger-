// Affichage : synchronise la scène 3D avec l'état du jeu (caméra, cuissons, clients, bulles, visée).
import * as THREE from 'three';
import { R } from './render.js';
import { W, setStock, reg } from './scene.js';
import { loose, burgerObj, sig, ei } from './food.js';
import { makePerson, CHAR_FILES } from './models.js';
import { C } from './controls.js';
import { GRILL_T1, GRILL_T2, FRY_T1, FRY_T2, SODA_T, SHAKE_T, PROD, NAMES } from './data.js';
import { G, gslots, fslots, machineT, orderOf } from './rules.js';

let ray, CENTER, tmpV, hand, tmpCol;
const slots = {};
const custs = {}, avatars = {};
let puffPool = [], puffs = [];
export const V = { promptFor: () => '' };

export function initView() {
  ray = new THREE.Raycaster(); ray.far = 2.6; CENTER = new THREE.Vector2(0, 0); tmpV = new THREE.Vector3(); tmpCol = new THREE.Color();
  hand = new THREE.Group(); R.camera.add(hand);
  for (let i = 0; i < 48; i++) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: puffTex(), transparent: true, depthWrite: false, opacity: 0 })); s.visible = false; s.renderOrder = 5; R.scene.add(s); puffPool.push(s);
  }
  // barres de progression
  const mk = (parent, x, y, z) => { const c = document.createElement('canvas'); c.width = 64; c.height = 10; const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false, depthWrite: false })); s.scale.set(.22, .034, 1); s.position.set(x, y, z); s.renderOrder = 15; s.userData = { c, t, k: '' }; s.visible = false; parent.add(s); return s; };
  W.grill.forEach(s => { s.bar = mk(s.p, 0, .12, 0); });
  W.fry.forEach(f => { f.bar = mk(f.v, 0, .45, 0); });
  W.soda.forEach(s => { s.bar = mk(s.c.parent, s.c.position.x, s.c.position.y + .3, s.c.position.z); });
  W.shake.forEach(s => { s.bar = mk(s.c.parent, s.c.position.x, s.c.position.y + .32, s.c.position.z); });
}
function puffTex() {
  const c = document.createElement('canvas'); c.width = c.height = 32; const g = c.getContext('2d'); const gr = g.createRadialGradient(16, 16, 1, 16, 16, 15); gr.addColorStop(0, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 32, 32);
  const t = new THREE.CanvasTexture(c); return t;
}
function steam(x, y, z, dark) {
  const s = puffPool.find(p => !p.visible); if (!s) return;
  s.visible = true; s.position.set(x, y, z); s.userData.l = 1; s.material.color.set(dark ? '#222' : '#fff'); s.scale.setScalar(.08); puffs.push(s);
}
function setBar(bar, frac, color) {
  const key = Math.round(frac * 32) + color; if (bar.userData.k === key) return; bar.userData.k = key;
  const g = bar.userData.c.getContext('2d'); g.clearRect(0, 0, 64, 10); g.fillStyle = 'rgba(10,14,14,.85)'; g.fillRect(0, 0, 64, 10); g.fillStyle = color; g.fillRect(2, 2, 60 * Math.min(1, frac), 6); bar.userData.t.needsUpdate = true;
}
function syncObj(id, parent, build, s) {
  const o = slots[id] || (slots[id] = { s: null, obj: null }); if (o.s === s) return o;
  if (o.obj) parent.remove(o.obj); o.s = s; o.obj = s ? build() : null; if (o.obj) parent.add(o.obj); return o;
}
export function resetView() { Object.keys(custs).forEach(removeCust); Object.keys(slots).forEach(k => { const o = slots[k]; if (o.obj) o.obj.parent && o.obj.parent.remove(o.obj); delete slots[k]; }); puffs.forEach(p => { p.visible = false; }); puffs = []; }
function removeCust(id) { const a = custs[id]; if (!a) return; W.custLayer.remove(a.g); const k = W.inter.indexOf(a.g); if (k >= 0) W.inter.splice(k, 1); a.bub.material.map.dispose(); delete custs[id]; }

function bubbleSprite() {
  const c = document.createElement('canvas'); c.width = 128; c.height = 160; const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false })); s.renderOrder = 20; s.scale.set(.32, .4, 1); s.position.y = 2.0; s.userData = { c, t, key: '' }; return s;
}
function drawBubble(s, key, fn) { if (s.userData.key === key) return; s.userData.key = key; const g = s.userData.c.getContext('2d'); g.clearRect(0, 0, 128, 160); fn(g); s.userData.t.needsUpdate = true; }
const shown = o => { for (let p = o; p; p = p.parent) if (p.visible === false) return false; return true; };

const GR = { raw: '#e2a0a0', cook: '#3fb35f', burn: '#e2372b' };
export function draw(now, dt, li, mode) {
  const { camera } = R;
  if (!G) { camera.position.set(-1.2, 1.7, .9); camera.rotation.set(-.18, -.3 + Math.sin(now / 4000) * .3, 0, 'YXZ'); return; }
  const me = G.players[li];
  const bob = me.moving ? Math.sin(me.walk * 2) * .025 : 0;
  camera.position.set(me.x, 1.62 + bob, me.z); camera.rotation.set(me.pitch, me.yaw, 0, 'YXZ');
  syncObj('hand', hand, () => { const o = loose(me.h.t, me.h); o.scale.setScalar(me.h.t === 'burger' ? 1.35 : me.h.t === 'sauce' ? 1.0 : 1.45); return o; }, sig(me.h));
  hand.position.set(.27, -.3 + (me.moving ? Math.sin(me.walk * 2) * .01 : 0), -.62); hand.rotation.set(.25, -.3, 0);

  // plancha
  const ng = gslots(G.ups);
  W.grill.forEach((s, j) => {
    const c = G.grill[j], on = j < ng && !!c; s.p.visible = on; if (!on) { s.bar.visible = false; return; }
    const burnt = c.a >= GRILL_T2, done = c.a >= GRILL_T1;
    const key = c.k === 'raw' ? (burnt ? 'burnt' : done ? 'patty' : 'raw') : (burnt ? 'burntbacon' : done ? 'bacon' : 'rawbacon');
    if (s.cur !== key) { Object.entries(s.variants).forEach(([k, v]) => { v.visible = k === key; }); s.cur = key; }
    const f = Math.min(1, c.a / GRILL_T1); s.bar.visible = !burnt;
    if (!burnt) setBar(s.bar, done ? 1 : f, done ? (c.a > GRILL_T2 - 8 ? '#f2a51c' : GR.cook) : GR.raw);
    if (Math.random() < dt * (burnt ? 6 : 4)) { s.p.getWorldPosition(tmpV); steam(tmpV.x + (Math.random() - .5) * .1, tmpV.y + .06, tmpV.z, burnt); }
  });
  // friteuse
  const nf = fslots(G.ups);
  W.fry.forEach((f, j) => {
    const c = G.fry[j], on = j < nf && !!c; f.basket.visible = on; if (!on) { f.bar.visible = false; return; }
    const isNug = c.k === 'nugfrozen'; f.fries.visible = !isNug; f.nug.visible = isNug; f.basket.position.y = .17;
    const a = c.a;
    if (a < FRY_T1) tmpCol.set('#f2e2b0').lerp(new THREE.Color('#f0b93a'), a / FRY_T1); else if (a < FRY_T2) tmpCol.set('#f0b93a').lerp(new THREE.Color('#3a2a18'), Math.max(0, (a - FRY_T1 - 15) / (FRY_T2 - FRY_T1 - 15))); else tmpCol.set('#3a2a18');
    f.fm.color.copy(tmpCol);
    f.nm.forEach(m => { if (a < FRY_T1) m.color.set('#ffffff').lerp(new THREE.Color('#ffd28a'), a / FRY_T1); else if (a < FRY_T2) m.color.set('#ffd28a').lerp(new THREE.Color('#3a2a18'), Math.max(0, (a - FRY_T1 - 15) / (FRY_T2 - FRY_T1 - 15))); else m.color.set('#3a2a18'); });
    const done = a >= FRY_T1, burnt = a >= FRY_T2; f.bar.visible = !burnt; if (!burnt) setBar(f.bar, done ? 1 : a / FRY_T1, done ? (a > FRY_T2 - 8 ? '#f2a51c' : GR.cook) : GR.raw);
    if (Math.random() < dt * 5) { f.v.getWorldPosition(tmpV); steam(tmpV.x + (Math.random() - .5) * .25, tmpV.y + .3, tmpV.z + (Math.random() - .5) * .2, burnt); }
  });
  // boissons
  const ST = machineT(SODA_T, G.ups), SH = machineT(SHAKE_T, G.ups);
  W.soda.forEach((s, j) => { const c = G.soda[j]; s.c.visible = c >= 0; s.bar.visible = c >= 0 && c < ST; if (c >= 0 && c < ST) setBar(s.bar, c / ST, '#4aa3ff'); });
  W.shake.forEach((s, j) => { const c = G.shake[j]; s.c.visible = c >= 0 && G.level >= 5; s.bar.visible = c >= 0 && c < SH; if (c >= 0 && c < SH) setBar(s.bar, c / SH, '#e9a8c4'); });
  G.boards.forEach((b, j) => syncObj('board' + j, W.boards[j], () => burgerObj(b), b.join('.')));
  syncObj('tray', W.tray, () => { const g = new THREE.Group(); G.tray.forEach((it, k) => { const o = loose(it.t, it); o.position.set(-.18 + k * .1, 0, (k % 2) * .08 - .04); g.add(o); }); return g; }, G.tray.map(ei).join(','));
  // stocks
  Object.keys(W.labels).forEach(id => setStock(id, G.stock[id] || 0));
  if (W.deliveryBox) W.deliveryBox.visible = G.deliveries.length > 0;

  // autre joueur
  [0, 1].forEach(i => {
    if (i === li) return; const p = G.players[i]; let a = avatars[i];
    if (!p.on) { if (a) a.p.g.visible = false; return; }
    if (!a) { const pp = makePerson(i ? 'female-e' : 'male-e', 1.62); a = avatars[i] = { p: pp, held: { s: null, obj: null } }; R.scene.add(pp.g); }
    a.p.g.visible = true;
    if (p.tx !== undefined) { const ox = p.x, oz = p.z, k = Math.min(1, dt * 12); p.x += (p.tx - p.x) * k; p.z += (p.tz - p.z) * k; p.moving = Math.hypot(p.x - ox, p.z - oz) > .002; }
    a.p.g.position.set(p.x, 0, p.z); a.p.g.rotation.y = p.yaw + Math.PI; a.p.play(p.moving ? 'walk' : 'idle', .2); a.p.mixer.update(dt);
  });
  // clients
  const live = new Set();
  G.cust.forEach(c => {
    live.add(c.id); let a = custs[c.id];
    if (!a) { const p = makePerson(CHAR_FILES[(c.id * 5 + 3 + G.day) % CHAR_FILES.length], 1.55 + ((c.id * 13) % 5) * .04); const bub = bubbleSprite(); bub.position.y = 2.05 / 1; p.g.add(bub); a = custs[c.id] = { p, g: p.g, bub }; reg(p.g, 'cust:' + c.id); W.custLayer.add(p.g); p.g.position.set(c.x, 0, c.z); }
    if (mode === 'guest' && c.tx !== undefined) { const k = Math.min(1, dt * 8); c.x += (c.tx - c.x) * k; c.z += (c.tz - c.z) * k; }
    const ox = a.g.position.x, oz = a.g.position.z; a.g.position.set(c.x, 0, c.z);
    const mv = Math.hypot(c.x - ox, c.z - oz) / Math.max(dt, .001);
    if (mv > .15) { a.g.rotation.y = Math.atan2(c.x - ox, c.z - oz); a.p.play('walk', .15, Math.min(1.6, mv / 1.2)); }
    else { const ty = Math.atan2(me.x - c.x, me.z - c.z); let d = ty - a.g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); a.g.rotation.y += d * Math.min(1, dt * 3); a.p.play(c.st === 'pick' ? 'interact-right' : 'idle', .2); }
    a.p.mixer.update(dt);
    const r = c.max ? c.pat / c.max : 1, colr = r > .5 ? '#3fb35f' : r > .25 ? '#f2a51c' : '#e2372b';
    const ring = (g, inner) => { g.fillStyle = '#fff'; g.strokeStyle = colr; g.lineWidth = 10; g.beginPath(); g.arc(64, 64, 52, 0, 7); g.fill(); g.stroke(); g.beginPath(); g.moveTo(50, 112); g.lineTo(64, 140); g.lineTo(78, 112); g.fill(); inner(); };
    if (c.st === 'order') drawBubble(a.bub, 'o' + colr, g => ring(g, () => { g.fillStyle = '#e2372b'; g.font = 'bold 76px Bungee,Impact'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('!', 64, 66); }));
    else if (c.st === 'wait') drawBubble(a.bub, 'w' + c.id + colr, g => ring(g, () => { g.fillStyle = '#182221'; g.font = 'bold 44px Bungee,Impact'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('#' + c.id, 64, 66); }));
    else if (c.st === 'angry') drawBubble(a.bub, 'a', g => { g.fillStyle = '#e2372b'; g.beginPath(); g.arc(64, 64, 52, 0, 7); g.fill(); g.fillStyle = '#fff'; g.font = 'bold 60px Rubik,Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('>:(', 64, 66); });
    else if (c.st === 'pick' || c.st === 'out') drawBubble(a.bub, 'h', g => { g.fillStyle = '#3fb35f'; g.beginPath(); g.arc(64, 64, 52, 0, 7); g.fill(); g.fillStyle = '#fff'; g.font = 'bold 60px Rubik,Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(':)', 64, 66); });
    a.bub.visible = c.st !== 'in';
  });
  Object.keys(custs).forEach(id => { if (!live.has(+id)) removeCust(id); });
  // vapeur
  for (let i = puffs.length - 1; i >= 0; i--) { const m = puffs[i]; m.userData.l -= dt * .7; m.position.y += dt * .35; m.scale.setScalar(.08 + (1 - m.userData.l) * .32); m.material.opacity = Math.max(0, m.userData.l * .35); if (m.userData.l <= 0) { m.visible = false; puffs.splice(i, 1); } }
  // visée
  let target = null;
  if (G.ph === 'play') {
    ray.setFromCamera(CENTER, camera); ray.camera = camera;
    const hits = ray.intersectObjects(W.inter.filter(shown), true);
    for (const hit of hits) { if (hit.object.isSprite && hit.object.parent && hit.object.material.depthTest === false) continue; let o = hit.object; while (o && !o.userData.id) o = o.parent; if (o && o.userData.id && shown(o)) { target = o.userData.id; break; } }
  }
  C.target = target;
  const pr = document.getElementById('prompt'), cr = document.getElementById('cross');
  const txt = target ? V.promptFor(target, me.h) : ''; pr.innerHTML = txt; pr.classList.toggle('on', !!txt); cr.classList.toggle('on', !!target);
}
