// Sauvegarde de la progression et des réglages (localStorage, avec repli si indisponible).
import { START_STOCK, levelFor } from './data.js';

const KEY = 'bb6_save', SKEY = 'bb6_settings';
let mem = {};
const read = k => { try { return localStorage.getItem(k); } catch (e) { return mem[k] || null; } };
const write = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { mem[k] = v; } };
const del = k => { try { localStorage.removeItem(k); } catch (e) { delete mem[k]; } };

export function freshSave() {
  return { v: 1, day: 1, xp: 0, money: 40, stock: { ...START_STOCK }, ups: { grill: 0, fryer: 0, machine: 0, deco: 0, ad: 0 }, best: 0, pending: [], played: 0 };
}
export function loadSave() {
  try {
    const s = JSON.parse(read(KEY));
    if (s && s.v === 1) { const f = freshSave(); return { ...f, ...s, stock: { ...f.stock, ...s.stock }, ups: { ...f.ups, ...s.ups } }; }
  } catch (e) {}
  return freshSave();
}
export const hasSave = () => { const s = loadSave(); return s.played > 0; };
export function writeSave(s) { write(KEY, JSON.stringify(s)); }
export function resetSave() { del(KEY); }
export const levelOf = s => levelFor(s.xp);

export const DEFAULT_SETTINGS = { sens: 1, vol: 0.7, quality: 'auto', bloom: true };
export function loadSettings() {
  try { return { ...DEFAULT_SETTINGS, ...JSON.parse(read(SKEY)) }; } catch (e) { return { ...DEFAULT_SETTINGS }; }
}
export function saveSettings(s) { write(SKEY, JSON.stringify(s)); }
