// Icônes 2D (tickets, tablette) dessinées sur canvas.
function circ(c, x, y, r, f, s, lw) { c.beginPath(); c.arc(x, y, r, 0, 7); if (f) { c.fillStyle = f; c.fill(); } if (s) { c.strokeStyle = s; c.lineWidth = lw; c.stroke(); } }
export function drawIcon(c, t, x, y, s) {
  c.save(); c.translate(x, y); c.scale(s / 26, s / 26); c.lineWidth = 2.5; c.strokeStyle = 'rgba(0,0,0,.55)';
  const bottle = col => { c.fillStyle = col; c.beginPath(); c.moveTo(-8, -6); c.lineTo(8, -6); c.lineTo(9, 18); c.lineTo(-9, 18); c.closePath(); c.fill(); c.stroke(); c.beginPath(); c.moveTo(-5, -6); c.lineTo(0, -20); c.lineTo(5, -6); c.closePath(); c.fillStyle = '#f4f4f4'; c.fill(); c.stroke(); };
  const cup = (col, straw) => { c.fillStyle = '#ffffff'; c.beginPath(); c.moveTo(-12, -12); c.lineTo(12, -12); c.lineTo(9, 20); c.lineTo(-9, 20); c.closePath(); c.fill(); c.stroke(); c.fillStyle = col; c.fillRect(-11, 0, 22, 8); c.fillStyle = '#ddd'; c.fillRect(-13, -16, 26, 5); c.strokeRect(-13, -16, 26, 5); c.strokeStyle = col; c.lineWidth = 3; c.beginPath(); c.moveTo(3, -16); c.lineTo(8, -25); c.stroke(); };
  switch (t) {
    case 'bun': c.fillStyle = '#e7a24c'; c.beginPath(); c.ellipse(0, 2, 20, 15, 0, Math.PI, 0); c.fill(); c.stroke(); c.fillRect(-20, 2, 40, 7); c.strokeRect(-20, 2, 40, 7);
      c.fillStyle = '#fff6dc'; [[-9, -5], [0, -9], [8, -4], [-3, -1]].forEach(([a, b]) => { c.beginPath(); c.ellipse(a, b, 1.8, 3, a, 0, 7); c.fill(); }); break;
    case 'patty': circ(c, 0, 0, 18, '#6a3a1f', 'rgba(0,0,0,.55)', 2.5); c.strokeStyle = '#3a1a0a'; c.lineWidth = 3; for (let i = -1; i <= 1; i++) { c.beginPath(); c.moveTo(-11, i * 7 - 3); c.lineTo(11, i * 7 + 3); c.stroke(); } break;
    case 'cheese': c.rotate(.25); c.fillStyle = '#ffb52e'; c.fillRect(-15, -15, 30, 30); c.strokeRect(-15, -15, 30, 30); break;
    case 'maroilles': c.rotate(.15); c.fillStyle = '#e8873a'; c.fillRect(-15, -15, 30, 30); c.strokeRect(-15, -15, 30, 30); c.fillStyle = 'rgba(255,255,255,.3)'; c.fillRect(-15, -15, 30, 8); break;
    case 'lettuce': c.fillStyle = '#6cc24a'; c.beginPath(); for (let i = 0; i <= 24; i++) { const a = i / 24 * Math.PI * 2, r = i % 2 ? 14 : 19; c.lineTo(Math.cos(a) * r, Math.sin(a) * r); } c.fill(); c.stroke(); break;
    case 'tomato': circ(c, 0, 0, 18, '#e23a2a', 'rgba(0,0,0,.55)', 2.5); circ(c, 0, 0, 11, '#ff7b5c'); c.fillStyle = '#ffe2a0'; for (let i = 0; i < 5; i++) { const a = i / 5 * 6.28; c.beginPath(); c.ellipse(Math.cos(a) * 6, Math.sin(a) * 6, 1.8, 3, a, 0, 7); c.fill(); } break;
    case 'onion': c.lineWidth = 4; c.strokeStyle = '#c6a0c9'; c.beginPath(); c.arc(-5, 0, 10, 0, 7); c.stroke(); c.beginPath(); c.arc(6, 2, 8, 0, 7); c.stroke(); break;
    case 'bacon': c.rotate(-.4); c.fillStyle = '#d9603f'; c.beginPath(); c.moveTo(-20, -6); c.quadraticCurveTo(-10, -12, 0, -6); c.quadraticCurveTo(10, 0, 20, -6); c.lineTo(20, 6); c.quadraticCurveTo(10, 12, 0, 6); c.quadraticCurveTo(-10, 0, -20, 6); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#f2b89c'; c.fillRect(-18, -1, 36, 3); break;
    case 'ketchup': bottle('#d62a1e'); break;
    case 'mayo': bottle('#f6ebc2'); break;
    case 'mustard': bottle('#f2c21b'); break;
    case 'fries': c.fillStyle = '#ffd23a'; for (let i = 0; i < 5; i++) { c.fillRect(-11 + i * 4.5, -20, 4, 18); c.strokeRect(-11 + i * 4.5, -20, 4, 18); } c.fillStyle = '#e2372b'; c.beginPath(); c.moveTo(-14, -5); c.lineTo(14, -5); c.lineTo(10, 18); c.lineTo(-10, 18); c.closePath(); c.fill(); c.stroke(); break;
    case 'nuggets': c.fillStyle = '#e2372b'; c.beginPath(); c.moveTo(-14, 2); c.lineTo(14, 2); c.lineTo(10, 18); c.lineTo(-10, 18); c.closePath(); c.fill(); c.stroke();
      [[-7, -4], [5, -6], [-1, -12], [9, 0]].forEach(([a, b]) => { c.fillStyle = '#d9962f'; c.beginPath(); c.ellipse(a, b, 8, 6, a, 0, 7); c.fill(); c.stroke(); }); break;
    case 'soda': cup('#e2372b'); break;
    case 'shake': cup('#8a4a2a'); c.fillStyle = '#fff'; c.beginPath(); c.arc(0, -17, 8, Math.PI, 0); c.fill(); c.strokeStyle = 'rgba(0,0,0,.5)'; c.lineWidth = 2; c.stroke(); break;
  }
  c.restore();
}
export const ICON = {};
['bun', 'patty', 'cheese', 'maroilles', 'lettuce', 'tomato', 'onion', 'bacon', 'ketchup', 'mayo', 'mustard', 'fries', 'nuggets', 'soda', 'shake'].forEach(t => {
  const o = document.createElement('canvas'); o.width = o.height = 52; drawIcon(o.getContext('2d'), t, 26, 26, 22); ICON[t] = o.toDataURL();
});
