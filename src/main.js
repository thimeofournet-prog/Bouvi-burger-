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
import * as rules from './rules.js';
import { Link, code4, encWorld, applyWorld } from './net.js';

const $ = id => document.getElementById(id);
let SAVE = loadSave(), SET = loadSettings(), mode = 'solo', li = 0, last = performance.now(), booted = false;

/* ---------- liaisons des règles avec l'interface ---------- */
H.say = (i, m, p, snd) => { if (i === li) { if (m) toast(m); if (p) pop(p); sfx(snd || (p ? 'serve' : 'bad')); } else if (mode === 'host') G.msg2 = { n: G.msg2.n + 1, t: m || '', p: p || '', s: snd || '' }; };
H.feedback = (i, s) => { if (i === li) sfx(s); };
H.broadcast = (m, s) => { toast(m); sfx(s); if (mode === 'host') G.msg2 = { n: G.msg2.n + 1, t: m, p: '', s }; };
H.mode = () => mode;
H.li = () => li;
H.openTablet = i => { if (i === li) openTablet(); };
H.ended = () => onDayEnd();
let actN = 0;
C.onAction = id => {
  if (mode === 'guest') { if (id === 'tablet') return openTablet(); actN++; link && link.send({ t: 'act', n: actN, id }); sfx('pick'); return; }
  interact(li, id);
};
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
    <details class="how" ${innerHeight > 640 ? 'open' : ''}><summary>Comment jouer ?</summary><ol>
      <li>Au <b>comptoir</b>, prenez la commande du client qui attend avec un « ! ».</li>
      <li>Steak cru sur la <b>plancha</b>, frites surgelées dans la <b>friteuse</b>, gobelet sous la <b>machine à soda</b>.</li>
      <li>Sur une <b>planche</b> : pain, garnitures, sauces, puis pain du dessus (voir le tableau des recettes).</li>
      <li>Posez tout sur le <b>plateau</b> et appuyez sur la <b>sonnette</b>.</li>
      <li>Plus de stock ? La <b>tablette</b> au fond de la cuisine commande les produits avec l’argent de la caisse.</li>
    </ol></details>
    <div class="ctl">${touch ? 'Manette à gauche pour marcher, glissez à droite pour regarder. Visez un objet avec le point au centre, puis touchez Action.' : 'Z Q S D pour marcher, souris pour regarder (cliquez dans le restaurant). Visez un objet avec le point central et cliquez, ou appuyez sur E.'}</div>
    ${SAVE.best ? `<p class="note">Meilleure journée : ${euro(SAVE.best)}</p>` : ''}`,
    [[played ? 'Continuer — jour ' + SAVE.day : 'Jouer', startDay, 'a'], ['Réglages', () => openSettings(false), 'c'], ...(MULTI.enabled ? [['Jouer à deux', multiMenu, 'b']] : [])]);
}

function openSettings(fromGame) {
  if (fromGame && mode === 'solo' && G) G.paused = true;
  settingsScreen({ ...SET }, {
    save: persistSet,
    back: () => { if (fromGame) { if (G) G.paused = false; hide(); } else menu(); },
    quit: fromGame ? () => { leaveToMenu(); } : null,
    reset: () => { resetSave(); SAVE = freshSave(); sfx('bad'); setG(null); menu(); toast('Progression remise à zéro'); },
  });
}

function openTablet() {
  if (mode === 'solo') G.paused = true;
  const close = () => { if (G) G.paused = false; hide(); };
  let render;
  const onOrder = (id, rr) => {
    if (mode === 'guest') { link && link.send({ t: 'order', n: ++ordN, id }); sfx('buy'); setTimeout(() => { if (!$('overlay').hidden && $('pend')) rr(); }, 700); return; }
    const r = orderStock(id, 1); sfx(r.ok ? 'buy' : 'bad'); rr(); const n = $('pend'); if (n) n.innerHTML = (r.ok ? '✅ ' : '⚠️ ') + r.msg + '<br>' + n.innerHTML;
  };
  render = tabletScreen(onOrder, close); render();
}

/* ---------- jours ---------- */
function startDay() {
  if (SAVE.money < 15) { const top = 20 - SAVE.money; SAVE.money = 20; writeSave(SAVE); setTimeout(() => toast('Prêt du boulanger : +' + euro(top) + ' pour redémarrer'), 600); }
  if (link && mode !== 'solo') { if (mode === 'host') return startHost(); }
  mode = 'solo'; li = 0; C.li = 0; leaveLink();
  resetView(); setG(freshDay(SAVE, 1)); applyProgress(G.level, G.ups); resetTickets();
  hide(); $('gear').hidden = false; setNet('');
  if (G.level > 1) setTimeout(() => { if (G && G.ph === 'play') toast('Jour ' + G.day + ' · Niveau ' + G.level); }, 400);
}
let lastRes = null;
function onDayEnd() {
  $('gear').hidden = true;
  if (mode === 'guest') return;
  lastRes = dayResult(SAVE); SAVE = lastRes.next; writeSave(SAVE);
  sfx(lastRes.st ? 'serve' : 'bad');
  if (mode === 'host' && link) link.send({ t: 'end', res: { ...lastRes, next: undefined }, sv: { day: SAVE.day, xp: SAVE.xp, money: SAVE.money } });
  showEnd();
}
function showEnd() {
  endScreen(lastRes, SAVE, { shop: () => shopScreen(SAVE, { next: startDay, menu: leaveToMenu, bought: () => writeSave(SAVE) }), next: startDay, menu: leaveToMenu });
}


/* ---------- jeu à deux (relais WebSocket) ---------- */
let endShownG = -1, link = null, code = '', remote = false, ordN = 0, lastAct = 0, lastOrd = 0, lastMsgN = 0, sendPosT = 0, sendWorldT = 0, lobbyOn = false;
const setNet = (txt, on) => { const n = $('net'); n.hidden = !txt; n.textContent = txt || ''; n.classList.toggle('on', !!on); };
function leaveLink() { if (link) { link.onclose = () => {}; link.close(); link = null; } remote = false; lobbyOn = false; setNet(''); }
function leaveToMenu() { leaveLink(); mode = 'solo'; setG(null); menu(); }
function multiMenu() {
  overlay(`<h2>Jouer à deux</h2><p>Chacun sur son écran, dans le même restaurant. L’un crée la partie et donne le code, l’autre le saisit.</p>`,
    [['Créer une partie', createRoom, 'a'], ['Rejoindre', joinMenu, 'b'], ['Retour', menu, 'c']]);
}
async function connect(c, role) {
  leaveLink(); code = c; link = new Link(c);
  link.onpeers = n => onPeers(n, role); link.onmsg = m => onMsg(m, role);
  link.onclose = () => { if (!link) return; setNet('Connexion perdue'); if (G && G.ph === 'play') { G.ph = 'end'; overlay('<h2>Partie interrompue</h2><p>La connexion avec l’autre joueur est perdue.</p>', [['Retour au menu', leaveToMenu, 'c']]); } };
  await link.open();
}
async function createRoom() {
  try { await connect(code4(), 'host'); } catch (e) { return overlay('<h2>Connexion impossible</h2><p>Le serveur de jeu à deux ne répond pas. Réessayez dans un instant.</p>', [['Retour', multiMenu, 'c']]); }
  mode = 'host'; setG(null); lobby();
}
function joinMenu() {
  overlay(`<h2>Rejoindre une partie</h2><p>Entrez le code à 4 lettres affiché chez l’autre joueur.</p><input id="codeIn" maxlength="4" autocomplete="off" placeholder="ABCD">`,
    [['Rejoindre', async () => {
      const c = ($('codeIn').value || '').toUpperCase().replace(/[^A-Z]/g, ''); if (c.length !== 4) return toast('Le code fait 4 lettres');
      try { await connect(c, 'guest'); } catch (e) { return overlay('<h2>Connexion impossible</h2><p>Vérifiez le code et réessayez.</p>', [['Retour', joinMenu, 'c']]); }
      mode = 'guest'; setG(null); li = 1; C.li = 1; lobby(); link.send({ t: 'hello' });
    }, 'b'], ['Retour', multiMenu, 'c']],
    o => { const i = o.querySelector('#codeIn'); i.focus(); i.addEventListener('keydown', e => { if (e.key === 'Enter') o.querySelector('.btn.b').click(); }); });
}
function lobby() {
  lobbyOn = true;
  if (mode === 'host') overlay(`<h2>Partie à deux</h2><p>Donnez ce code à l’autre joueur :</p><div class="code">${code}</div><p>${remote ? 'Le 2e joueur est là ! Ouvrez le restaurant.' : 'En attente du 2e joueur…'}</p>`,
    [['Ouvrir le restaurant', startHost, 'b', !remote], ['Annuler', leaveToMenu, 'c']]);
  else overlay(`<h2>Partie ${code}</h2><p>${remote ? 'Connecté ! En attente que l’hôte ouvre le restaurant…' : 'Personne n’a encore créé de partie avec ce code.'}</p>`, [['Quitter', leaveToMenu, 'c']]);
  lobbyOn = true;
}
function startHost() {
  if (SAVE.money < 15) { SAVE.money = 20; writeSave(SAVE); }
  const g = G ? G.g : 0; mode = 'host'; li = 0; C.li = 0;
  resetView(); setG(freshDay(SAVE, 2)); G.g = g + 1; G.players[1].on = remote; applyProgress(G.level, G.ups); resetTickets(); lastAct = 0; lastOrd = 0;
  hide(); lobbyOn = false; $('gear').hidden = false;
}
function startGuest(w) {
  mode = 'guest'; li = 1; C.li = 1; resetView(); setG(freshDay(SAVE, 2)); G.g = w.g; G.players[0].on = true; lastMsgN = w.m ? w.m[0] : 0; resetTickets();
  applyWorld(G, w); applyProgress(G.level, G.ups); hide(); lobbyOn = false; $('gear').hidden = false;
}
function onPeers(n, role) {
  remote = n >= 2; setNet(remote ? '2 joueurs' : (role === 'host' ? 'Seul en ligne' : 'Hôte introuvable'), remote);
  if (G && mode === 'host') G.players[1].on = remote;
  if (lobbyOn) lobby();
  if (role === 'guest' && !remote && G && G.ph === 'play') { G.ph = 'end'; overlay('<h2>Partie interrompue</h2><p>L’hôte a quitté la partie.</p>', [['Retour au menu', leaveToMenu, 'c']]); }
}
function onMsg(m, role) {
  if (role === 'host') {
    if (m.t === 'pos' && G && G.players[1]) Object.assign(G.players[1], { tx: m.x, tz: m.z, yaw: m.y, pitch: m.p });
    else if (m.t === 'act' && G && m.n > lastAct) { lastAct = m.n; interact(1, m.id); }
    else if (m.t === 'order' && G && m.n > lastOrd) { lastOrd = m.n; const r = orderStock(m.id, 1); G.msg2 = { n: G.msg2.n + 1, t: r.msg, p: '', s: r.ok ? 'buy' : 'bad' }; }
    else if (m.t === 'hello' && lobbyOn) lobby();
  } else {
    if (m.t === 'world') {
      const w = m.w;
      if (w.ph === 'play' && (mode !== 'guest' || !G || G.g !== w.g)) startGuest(w);
      else if (mode === 'guest' && G && w.g === G.g && G.ph !== 'end') { applyWorld(G, w, mm => { if (mm[0] > lastMsgN) { lastMsgN = mm[0]; if (mm[1]) toast(mm[1]); if (mm[2]) pop(mm[2]); sfx(mm[3] || (mm[2] ? 'serve' : 'bad')); } }); }
    } else if (m.t === 'pos' && G && G.players[0]) Object.assign(G.players[0], { tx: m.x, tz: m.z, yaw: m.y, pitch: m.p });
    else if (m.t === 'end' && G && endShownG !== G.g) { endShownG = G.g; G.ph = 'end'; $('gear').hidden = true; endScreen(m.res, m.sv, { shop: null, next: null, menu: leaveToMenu }); }
  }
}
function netTick(now) {
  if (!link || !G || mode === 'solo') return;
  const p = G.players[li];
  if (now - sendPosT > 50) { sendPosT = now; link.send({ t: 'pos', x: +p.x.toFixed(2), z: +p.z.toFixed(2), y: +p.yaw.toFixed(2), p: +p.pitch.toFixed(2) }); }
  if (mode === 'host' && now - sendWorldT > 100) { sendWorldT = now; link.send({ t: 'world', w: encWorld(G) }); }
}

/* ---------- boucle ---------- */
function loop(now) {
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  try {
    if (G) { if (G.ph === 'play' && C.canPlay()) moveLocal(dt); if (G.ph === 'play') simulate(dt); renderHUD(); }
    netTick(now);
    draw(now, dt, li, mode); renderFrame(dt);
  } catch (e) { console.error(e); }
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
  if (new URLSearchParams(location.search).has('debug')) window.__bb = { menu, act: id => C.onAction(id), get mode() { return mode; }, get G() { return G; }, SAVE: () => SAVE, startDay, interact, R, rules, openSettings };
}
boot();
