// Sons synthétisés (aucun fichier) avec volume réglable.
let AC = null, vol = 0.7;
export const setVolume = v => { vol = Math.max(0, Math.min(1, v)); };
export function sfx(k) {
  if (vol <= 0.001) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    const seq = { pick: [[600, .05]], drop: [[360, .06]], serve: [[523, .08], [659, .08], [784, .08], [1046, .16]], bad: [[150, .2]], bell: [[1568, .35]], order: [[880, .07], [1175, .12]], cook: [[740, .05], [990, .07]], squirt: [[220, .08]],
      level: [[523, .1], [659, .1], [784, .1], [1046, .1], [1318, .25]], buy: [[880, .06], [1320, .1]], deliver: [[440, .08], [554, .08], [659, .14]] }[k] || [];
    let t = AC.currentTime;
    seq.forEach(([f, d]) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = k === 'bad' ? 'sawtooth' : k === 'bell' ? 'sine' : 'triangle'; o.frequency.value = f;
      const peak = (k === 'bell' ? .18 : .1) * vol * 1.4;
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(.0002, peak), t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d);
      o.connect(g).connect(AC.destination); o.start(t); o.stop(t + d + .02); t += d * .8;
    });
  } catch (e) {}
}
