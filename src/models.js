// Chargement des modèles 3D (GLB, licence CC0) et utilitaires.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/addons/utils/SkeletonUtils.js';

const loader = new GLTFLoader();
const KIT = {};            // nom -> Object3D de référence
const INFO = {};           // nom -> { w, h, d, minY } (taille d'origine)
export const CHARS = {};   // nom -> { scene, clips }
const tintCache = new Map();

export const CHAR_FILES = ['male-a', 'male-b', 'male-c', 'male-d', 'male-e', 'male-f', 'female-a', 'female-b', 'female-c', 'female-d', 'female-e', 'female-f'];

const load = url => new Promise((res, rej) => loader.load(url, res, undefined, rej));

export async function loadModels(onProgress) {
  const base = new URL('../assets/models/', import.meta.url).href, ext = window.BB_MODEL_EXT || '.glb'; // ext : aperçu hébergé qui ne sert pas les .glb
  const props = await load(base + 'props' + ext);
  props.scene.updateMatrixWorld(true);
  for (const n of [...props.scene.children]) {
    n.removeFromParent();
    n.position.set(0, 0, 0);
    const b = new THREE.Box3().setFromObject(n), s = b.getSize(new THREE.Vector3());
    INFO[n.name] = { w: s.x, h: s.y, d: s.z, minY: b.min.y, cx: (b.min.x + b.max.x) / 2, cz: (b.min.z + b.max.z) / 2 };
    n.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    KIT[n.name] = n;
  }
  if (onProgress) onProgress(0.6);
  let done = 0;
  await Promise.all(CHAR_FILES.map(async f => {
    const g = await load(base + 'char-' + f + ext);
    g.scene.traverse(o => { if (o.isMesh) { o.castShadow = true; o.frustumCulled = false; } });
    CHARS[f] = { scene: g.scene, clips: g.animations };
    done++; if (onProgress) onProgress(0.6 + 0.4 * done / CHAR_FILES.length);
  }));
}

export const has = n => !!KIT[n];
export const info = n => INFO[n];

// Clone d'un modèle du kit (géométries et matières partagées).
export function M(name) {
  const k = KIT[name];
  if (!k) { console.warn('modèle manquant', name); return new THREE.Group(); }
  const o = k.clone();
  o.name = name;
  return o;
}

// Place un modèle : taille cible (largeur w) ou échelle (sx,sy,sz), position, rotation Y.
export function put(parent, name, o = {}) {
  const m = M(name);
  const s = o.s != null ? o.s : o.w ? o.w / Math.max(INFO[name].w, INFO[name].d) : 1;
  m.scale.set((o.sx ?? s), (o.sy ?? s), (o.sz ?? s));
  m.position.set(o.x || 0, o.base !== undefined ? o.base - INFO[name].minY * (o.sy ?? s) : (o.y || 0), o.z || 0);
  if (o.ry) m.rotation.y = o.ry;
  if (o.rx) m.rotation.x = o.rx;
  if (o.static) m.userData.static = true;
  parent.add(m);
  return m;
}

// Copie dont les matières sont teintées (couleur multipliée / mélangée) ; mis en cache par clé.
export function tinted(name, color, key) {
  const k = name + '|' + (key || color);
  let t = tintCache.get(k);
  if (!t) {
    t = KIT[name].clone();
    const c = new THREE.Color(color), mats = new Map();
    t.traverse(o => { if (o.isMesh) { const m = o.material; if (!mats.has(m)) { const n = m.clone(); n.color.multiply(c); mats.set(m, n); } o.material = mats.get(m); } });
    tintCache.set(k, t);
  }
  const o = t.clone(); o.name = name; return o;
}

// Matières propres à l'instance (pour animer une couleur) : renvoie la liste des matières clonées.
export function ownMaterials(obj) {
  const list = [], map = new Map();
  obj.traverse(o => { if (o.isMesh) { const m = o.material; if (!map.has(m)) { const n = m.clone(); map.set(m, n); list.push(n); } o.material = map.get(m); } });
  return list;
}

// Taille d'un objet déjà mis à l'échelle, dans son repère local
export function boxOf(obj) {
  const p = obj.parent; if (p) p.remove(obj);
  obj.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(obj);
  if (p) p.add(obj);
  return b;
}

// Personnage animé : { g, mixer, play(name, fade) }
export function makePerson(variant, height = 1.62) {
  const src = CHARS[variant];
  const g = skClone(src.scene);
  const wrap = new THREE.Group();
  g.scale.setScalar(height / 0.72);
  wrap.add(g);
  const mixer = new THREE.AnimationMixer(g);
  const actions = {};
  for (const c of src.clips) actions[c.name] = mixer.clipAction(c);
  let cur = null;
  const api = {
    g: wrap, mixer, actions,
    play(name, fade = 0.2, speed = 1) {
      const a = actions[name]; if (!a || cur === a) { if (a) a.timeScale = speed; return; }
      a.reset().setEffectiveTimeScale(speed).setEffectiveWeight(1).play();
      if (cur) cur.crossFadeTo(a, fade, false);
      cur = a;
    },
  };
  mixer.update(Math.random() * 2);
  return api;
}

// Fusionne les maillages statiques (même matière) pour limiter les appels de dessin.
export function mergeStatic(root, BGU) {
  const groups = new Map();
  root.updateMatrixWorld(true);
  const dead = [];
  root.traverse(o => {
    if (!o.isMesh || o.userData.noMerge) return;
    let p = o, ok = true;
    while (p && p !== root) { if (p.userData.dynamic || p.userData.id) { ok = false; break; } p = p.parent; }
    if (!ok) return;
    const key = o.material.uuid + (o.castShadow ? 'c' : '') + (o.receiveShadow ? 'r' : '');
    let g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    for (const a of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(a)) g.deleteAttribute(a);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    if (!g.attributes.normal) g.computeVertexNormals();
    g = g.index ? g.toNonIndexed() : g;
    if (!groups.has(key)) groups.set(key, { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, geos: [] });
    groups.get(key).geos.push(g);
    dead.push(o);
  });
  dead.forEach(o => o.removeFromParent());
  const out = new THREE.Group();
  for (const g of groups.values()) {
    const merged = BGU.mergeGeometries(g.geos, false);
    if (!merged) continue;
    const m = new THREE.Mesh(merged, g.mat);
    m.castShadow = g.cast; m.receiveShadow = g.recv; m.matrixAutoUpdate = false;
    out.add(m);
  }
  root.add(out);
  return out;
}
