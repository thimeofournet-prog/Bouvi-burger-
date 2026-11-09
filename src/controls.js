// Contrôles : clavier + souris (pointer lock), tactile (joystick, glisser pour regarder).
import { R, touch } from './render.js';
import { G } from './rules.js';

export const C = { sens: 1, li: 0, target: null, onAction: () => {}, onPause: () => {}, canPlay: () => true, locked: false, moving: false };
const keys = new Set();
const joy = { x: 0, y: 0, id: null };
let triedLock = false, drag = null;
const hintEl = () => document.getElementById('lockHint');

function look(dx, dy, k) {
  if (!G || G.ph !== 'play' || !C.canPlay()) return;
  const p = G.players[C.li], f = k * C.sens;
  p.yaw -= dx * f; p.pitch = Math.max(-1.25, Math.min(1.0, p.pitch - dy * f));
}
export function doAction() { if (!G || G.ph !== 'play' || !C.canPlay() || !C.target) return; C.onAction(C.target); }

export function initControls() {
  addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code.startsWith('Arrow') || e.code === 'Space') e.preventDefault();
    if (e.repeat) return; keys.add(e.code);
    if (['Space', 'KeyE', 'Enter'].includes(e.code)) doAction();
    if (e.code === 'KeyP') C.onPause();
  });
  addEventListener('keyup', e => keys.delete(e.code)); addEventListener('blur', () => keys.clear());
  document.addEventListener('pointerlockchange', () => { C.locked = !!R.renderer && document.pointerLockElement === R.renderer.domElement; if (!C.locked) triedLock = false; updateHint(); });
  document.addEventListener('mousemove', e => { if (C.locked) look(e.movementX, e.movementY, .0022); });
  const cv = R.renderer.domElement;
  cv.addEventListener('pointerdown', e => {
    if (e.pointerType === 'touch') return;
    if (C.locked) { if (e.button === 0) doAction(); return; }
    drag = { x: e.clientX, y: e.clientY, moved: 0, id: e.pointerId }; try { cv.setPointerCapture(e.pointerId); } catch (err) {}
  });
  cv.addEventListener('pointermove', e => { if (!drag || e.pointerId !== drag.id) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.moved += Math.abs(dx) + Math.abs(dy); drag.x = e.clientX; drag.y = e.clientY; look(dx, dy, .005); });
  cv.addEventListener('pointerup', e => {
    if (!drag || e.pointerId !== drag.id) return; const m = drag.moved; drag = null;
    if (m < 6 && G && G.ph === 'play' && C.canPlay()) { if (!triedLock) { triedLock = true; try { const r = cv.requestPointerLock && cv.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch (err) {} } else doAction(); }
  });
  // tactile
  const el = document.getElementById('joy'), knob = el.querySelector('i');
  const upd = e => { const r = el.getBoundingClientRect(); let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2); const m = r.width / 2 - 10, d = Math.hypot(dx, dy); if (d > m) { dx *= m / d; dy *= m / d; } joy.x = dx / m; joy.y = dy / m; knob.style.transform = `translate(${dx}px,${dy}px)`; };
  el.addEventListener('pointerdown', e => { joy.id = e.pointerId; el.setPointerCapture(e.pointerId); upd(e); e.preventDefault(); });
  el.addEventListener('pointermove', e => { if (e.pointerId === joy.id) upd(e); });
  const end = e => { if (e.pointerId !== joy.id) return; joy.id = null; joy.x = joy.y = 0; knob.style.transform = ''; };
  el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
  document.getElementById('act').addEventListener('pointerdown', e => { e.preventDefault(); doAction(); });
  const lz = document.getElementById('look'); let lp = null;
  lz.addEventListener('pointerdown', e => { lp = { id: e.pointerId, x: e.clientX, y: e.clientY, m: 0, t: performance.now() }; lz.setPointerCapture(e.pointerId); });
  lz.addEventListener('pointermove', e => { if (!lp || e.pointerId !== lp.id) return; const dx = e.clientX - lp.x, dy = e.clientY - lp.y; lp.m += Math.abs(dx) + Math.abs(dy); lp.x = e.clientX; lp.y = e.clientY; look(dx, dy, .0055); });
  const lend = e => { if (!lp || e.pointerId !== lp.id) return; if (lp.m < 8 && performance.now() - lp.t < 300) doAction(); lp = null; };
  lz.addEventListener('pointerup', lend); lz.addEventListener('pointercancel', lend);
}

const RECTS = [[-6, -4.75, 6, -3.72], [-3.12, -2.67, 3.92, -1.73], [-6, 1.22, 6, 2.0], [5.05, -1.37, 6, .87], [-3.95, -1.45, -3.35, -.85]];
const PR = .28;
export function free(x, z) { if (x < -5.9 + PR || x > 5.9 - PR || z < -4.7 || z > 1.25) return false; return !RECTS.some(([a, b, c, d]) => x > a - PR && x < c + PR && z > b - PR && z < d + PR); }
export function moveLocal(dt) {
  const p = G.players[C.li], k = c => keys.has(c) ? 1 : 0;
  let f = k('KeyW') + k('ArrowUp') - k('KeyS') - k('ArrowDown'), s = k('KeyD') + k('ArrowRight') - k('KeyA') - k('ArrowLeft');
  f -= joy.y; s += joy.x; const m = Math.hypot(f, s); if (m > 1) { f /= m; s /= m; }
  const sp = 3.0 * dt, sy = Math.sin(p.yaw), cy = Math.cos(p.yaw), dx = (-sy * f + cy * s) * sp, dz = (-cy * f - sy * s) * sp;
  if (free(p.x + dx, p.z)) p.x += dx; if (free(p.x, p.z + dz)) p.z += dz;
  p.moving = m > .1; if (p.moving) p.walk += dt * 9;
}
export function updateHint(playing) {
  const el = hintEl(); if (!el) return;
  const ov = document.getElementById('overlay');
  el.hidden = touch || !G || G.ph !== 'play' || !ov.hidden;
  el.textContent = C.locked ? 'Clic : action · Z Q S D : marcher · P : réglages · Échap : libérer la souris' : 'Cliquez pour viser à la souris (ou glissez pour regarder) · Z Q S D pour marcher · E pour agir · P : réglages';
}
export function releaseLock() { try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) {} }
