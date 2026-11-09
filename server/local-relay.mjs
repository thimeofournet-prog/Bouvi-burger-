// Relais local pour tester le jeu à deux sur votre ordinateur : node server/local-relay.mjs [port]
// (nécessite : npm i ws). Même protocole que worker.js.
import { WebSocketServer } from 'ws';
const port = +process.argv[2] || 8787, rooms = new Map();
const wss = new WebSocketServer({ port });
wss.on('connection', (ws, req) => {
  const m = req.url.match(/^\/room\/([A-Z]{4})$/); if (!m) return ws.close();
  const room = rooms.get(m[1]) || rooms.set(m[1], new Set()).get(m[1]);
  if (room.size >= 2) return ws.close(4001);
  room.add(ws);
  const peers = () => room.forEach(s => s.send(JSON.stringify({ t: 'peers', n: room.size })));
  peers();
  ws.on('message', d => { const t = d.toString(); room.forEach(s => { if (s !== ws) s.send(t); }); });
  ws.on('close', () => { room.delete(ws); peers(); if (!room.size) rooms.delete(m[1]); });
});
console.log('Relais local sur ws://localhost:' + port);
