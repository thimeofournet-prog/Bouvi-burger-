// Point d'entrée : chargement, boucle de jeu, déroulement des jours.
import { initRenderer, applySettings, renderFrame, R, touch } from './render.js';
import { loadModels } from './models.js';
import { buildWorld, applyProgress } from './scene.js';
import { initView, draw, resetView } from './view.js';
import { initControls, C, moveLocal, updateHint } from './controls.js';
import { G, setG, H, freshDay, simulate, interact, orderStock, dayResult } from './rules.js';
import { loadSave, writeSave, resetSave, freshSave, loadSettings, saveSettings, hasSave } from './save.js';
import { setVolume, sfx } from './audio.js';
import { euro, UNLOCKS, levelFor, XP_AT } from './data.js';
import { overlay, hide, toast, pop, renderHUD, resetTickets, settingsScreen, tabletScreen, endScreen, shopScreen } from './ui.js';
import { MULTI } from './config.js';

const $ = id => document.getElementById(id);
let SAVE = loadSave(), SET = loadSettings(), mode = 'solo', li = 0, last = performance.now(), booted = false;

/* ---------- liaisons des règles avec l'interface ---------- */
H.say = (i, m, p, snd) => { if (i === li) { if (m) toast(m); if (p) pop(p); sfx(snd || (p ? 'serve' : 'bad')); } };
H.feedback = (i, s) => { if (i === li) sfx(s); };
H.broadcast = (m, s) => { toast(m); sfx(s); };
H.mode = () => mode;
H.li = () => li;
H.openTablet = () => openTablet();
H.ended = () => onDayEnd();
C.onAction = id => interact(li, id);
C.onPause = () => { if (G && G.ph === 'play' && $('overlay').hidden) openSettings(true); };
C.canPlay = () => $('overlay').hidden;

function applySet() { setVolume(SET.vol); C.sens = SET.sens; applySettings(SET); }
function persistSet(s) { SET = s; saveSettings(SET); applySet(); }

/* ---------- écrans ---------- */
function menu() {
  setG(null); resetView(); $('gear').hidden = true; resetTickets(); renderHUD();
  const lvl = levelFor(SAVE.xp), played = SAVE.played > 0;
  overlay(`<h1>Bouvi'Burger</h1>
    <p>Vous tenez le seul fast-food de Bouvines. Servez les clients, gérez vos stocks, montez en niveau !</p>
    ${played ? `<div class="menuLine"><span>Jour <b>${SAVE.day}</b> · Niveau <b>${lvl}</b></span><span>Caisse <b>${euro(SAVE.money)}</b></span></div>` : ''}
    <ol>
      <li>Au <b>comptoir</b>, prenez la commande du client qui attend avec un « ! ».</li>
      <li>Steak cru sur la <b>plancha</b>, frites surgelées dans la <b>friteuse</b>, gobelet sous la <b>machine à soda</b>.</li>
      <li>Sur une <b>planche</b> : pain, garnitures, sauces, puis pain du dessus (voir le tableau des recettes).</li>
      <li>Posez tout sur le <b>plateau</b> et appuyez sur la <b>sonnette</b>.</li>
      <li>Plus de stock ? La <b>tablette</b> au fond de la cuisine commande les produits avec l’argent de la caisse.</li>
    </ol>
    <div class="ctl">${touch ? 'Manette à gauche pour marcher, glissez à droite pour regarder. Visez un objet avec le point au centre, puis touchez Action.' : 'Z Q S D pour marcher, souris pour regarder (cliquez dans le restaurant). Visez un objet avec le point central et cliquez, ou appuyez sur E.'}</div>
    ${SAVE.best ? `<p class="note">Meilleure journée : ${euro(SAVE.best)}</p>` : ''}`,
    [[played ? 'Continuer — jour ' + SAVE.day : 'Jouer', startDay, 'a'], ['Réglages', () => openSettings(false), 'c'], ...(MULTI.enabled ? [['Jouer à deux', () => toast('Bientôt'), 'b']] : [])]);
}

function openSettings(fromGame) {
  if (fromGame && mode === 'solo' && G) G.paused = true;
  settingsScreen({ ...SET }, {
    save: persistSet,
    back: () => { if (fromGame) { if (G) G.paused = false; hide(); } else menu(); },
    quit: fromGame ? () => { menu(); } : null,
    reset: () => { resetSave(); SAVE = freshSave(); sfx('bad'); setG(null); menu(); toast('Progression remise à zéro'); },
  });
}

function openTablet() {
  if (mode === 'solo') G.paused = true;
  const close = () => { G.paused = false; hide(); };
  let render;
  const onOrder = (id, rr) => { const r = orderStock(id, 1); sfx(r.ok ? 'buy' : 'bad'); rr(); const n = $('pend'); if (n) n.innerHTML = (r.ok ? '✅ ' : '⚠️ ') + r.msg + '<br>' + n.innerHTML; };
  render = tabletScreen(onOrder, close); render();
}

/* ---------- jours ---------- */
function startDay() {
  if (SAVE.money < 15) { const top = 20 - SAVE.money; SAVE.money = 20; writeSave(SAVE); setTimeout(() => toast('Prêt du boulanger : +' + euro(top) + ' pour redémarrer'), 600); }
  mode = 'solo'; li = 0; C.li = 0;
  resetView(); setG(freshDay(SAVE, 1)); applyProgress(G.level, G.ups); resetTickets();
  hide(); $('gear').hidden = false; $('net').hidden = true;
  if (G.level > 1) setTimeout(() => { if (G && G.ph === 'play') toast('Jour ' + G.day + ' · Niveau ' + G.level); }, 400);
}
let lastRes = null;
function onDayEnd() {
  $('gear').hidden = true;
  lastRes = dayResult(SAVE); SAVE = lastRes.next; writeSave(SAVE);
  sfx(lastRes.st ? 'serve' : 'bad');
  showEnd();
}
function showEnd() {
  endScreen(lastRes, SAVE, { shop: () => shopScreen(SAVE, { next: startDay, menu, bought: () => writeSave(SAVE) }), next: startDay, menu });
}

/* ---------- boucle ---------- */
function loop(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  if (G) { if (G.ph === 'play' && C.canPlay()) moveLocal(dt); if (G.ph === 'play') simulate(dt); renderHUD(); }
  try { draw(now, dt, li, mode); renderFrame(dt); } catch (e) { console.error(e); }
  requestAnimationFrame(loop);
}

async function boot() {
  const bar = $('loadbar');
  try { await Promise.all([document.fonts.load('bold 20px Bungee'), document.fonts.load('600 20px Rubik'), document.fonts.load('800 20px Rubik')]); } catch (e) {}
  initRenderer($('stage'), SET); applySet();
  try { await loadModels(p => { bar.style.width = Math.round(p * 100) + '%'; }); }
  catch (e) { console.error(e); $('loading').textContent = 'Impossible de charger les modèles 3D.'; return; }
  buildWorld(); initView(); initControls(); applyProgress(levelFor(SAVE.xp), SAVE.ups);
  $('gear').addEventListener('click', () => { if (G && G.ph === 'play') openSettings(true); });
  $('loading').remove(); booted = true;
  menu(); requestAnimationFrame(loop);
  if ('serviceWorker' in navigator && location.protocol !== 'file:' && !new URLSearchParams(location.search).has('nosw')) navigator.serviceWorker.register('./sw.js').catch(() => {});
  if (new URLSearchParams(location.search).has('debug')) window.__bb = { get G() { return G; }, SAVE: () => SAVE, startDay, interact, R };
}
boot();
