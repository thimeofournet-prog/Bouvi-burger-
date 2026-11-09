// Moteur de rendu : three.js récent, ombres douces, occlusion ambiante (GTAO), bloom, qualité adaptative.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const touch = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
export const R = { renderer: null, scene: null, camera: null, composer: null, tier: 'medium', key: null, gtao: null, bloom: null, stage: null };
const TIERS = ['high', 'medium', 'low'];
let settings = { quality: 'auto', bloom: true };
let acc = 0, frames = 0, locked = false;

export function initRenderer(stage, s) {
  settings = s; R.stage = stage;
  const r = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', stencil: false });
  r.shadowMap.enabled = true;
  r.shadowMap.type = THREE.PCFShadowMap;
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 0.95;
  r.outputColorSpace = THREE.SRGBColorSpace;
  stage.prepend(r.domElement);
  R.renderer = r;
  R.scene = new THREE.Scene();
  R.scene.background = new THREE.Color('#1a1a1a');
  R.camera = new THREE.PerspectiveCamera(70, 1.6, 0.05, 60);
  R.camera.layers.enable(1);
  R.scene.add(R.camera);
  const pm = new THREE.PMREMGenerator(r);
  R.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  R.scene.environmentIntensity = 0.3;
  pm.dispose();
  const saved = (() => { try { return localStorage.getItem('bb6_tier'); } catch (e) { return null; } })();
  setTier(settings.quality !== 'auto' ? settings.quality : (saved && TIERS.includes(saved) ? saved : (touch ? 'medium' : 'high')));
  resize();
  addEventListener('resize', resize);
  return R;
}

export function applySettings(s) { settings = s; setTier(s.quality !== 'auto' ? s.quality : R.tier); }

export function setTier(tier) {
  R.tier = tier; locked = settings.quality !== 'auto'; acc = 0; frames = 0;
  const r = R.renderer;
  if (R.composer) { R.composer.dispose(); R.composer = null; R.gtao = null; R.bloom = null; }
  r.shadowMap.enabled = true;
  if (R.key) { const sm = tier === 'high' ? 2048 : 1024; if (R.key.shadow.mapSize.x !== sm) { R.key.shadow.mapSize.set(sm, sm); if (R.key.shadow.map) { R.key.shadow.map.dispose(); R.key.shadow.map = null; } } }
  r.setPixelRatio(pixelRatio());
  const hdr = r.extensions.has('EXT_color_buffer_float') || r.extensions.has('EXT_color_buffer_half_float');
  if (tier !== 'low' && !hdr) tier = R.tier = 'low';
  if (tier !== 'low') {
    try {
      const w = R.stage.clientWidth || 800, h = R.stage.clientHeight || 500;
      const pr = r.getPixelRatio();
      const rt = new THREE.WebGLRenderTarget(w * pr, h * pr, { type: THREE.HalfFloatType, samples: tier === 'high' ? 4 : 2 });
      const c = new EffectComposer(r, rt);
      c.setPixelRatio(pr); c.setSize(w, h);
      c.addPass(new RenderPass(R.scene, R.camera));
      if (tier === 'high') {
        const g = new GTAOPass(R.scene, R.camera, w, h);
        g.output = GTAOPass.OUTPUT.Default;
        g.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.2, thickness: 1, scale: 1.0, samples: 12, distanceFallOff: 1, screenSpaceRadius: false });
        g.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 4, radiusExponent: 1, rings: 2, samples: 12 });
        g.blendIntensity = 0.9;
        // l'occlusion ambiante ne doit pas voir les étiquettes (sprites, calque 1)
        const orig = g.render.bind(g);
        g.render = (...a) => { R.camera.layers.disable(1); orig(...a); R.camera.layers.enable(1); };
        c.addPass(g); R.gtao = g;
      }
      if (settings.bloom !== false) {
        const b = new UnrealBloomPass(new THREE.Vector2(Math.round(w / 2), Math.round(h / 2)), 0.32, 0.55, 0.88);
        c.addPass(b); R.bloom = b;
      }
      c.addPass(new OutputPass());
      R.composer = c;
    } catch (e) { console.warn('post-traitement indisponible', e); R.composer = null; R.tier = 'low'; }
  }
  r.toneMapping = R.composer ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping; // OutputPass applique le rendu tonal
  resize();
}

function pixelRatio() {
  const d = devicePixelRatio || 1;
  if (R.tier === 'high') return Math.min(d, 2);
  if (R.tier === 'medium') return Math.min(d, touch ? 1.5 : 1.75);
  return Math.min(d, 1.25);
}

export function resize() {
  const s = R.stage; if (!s || !R.renderer) return;
  const w = s.clientWidth, h = s.clientHeight; if (!w || !h) return;
  R.renderer.setPixelRatio(pixelRatio());
  R.renderer.setSize(w, h);
  if (R.composer) { R.composer.setPixelRatio(R.renderer.getPixelRatio()); R.composer.setSize(w, h); }
  R.camera.aspect = w / h; R.camera.fov = w < h ? 80 : 68; R.camera.updateProjectionMatrix();
}

export function renderFrame(dt) {
  if (R.composer) R.composer.render(dt); else R.renderer.render(R.scene, R.camera);
  // qualité adaptative : si l'image est trop lente on baisse d'un cran
  if (!locked && dt < 0.5) {
    acc += dt; frames++;
    if (frames >= 150) {
      const avg = acc / frames; acc = 0; frames = 0;
      if (avg > 1 / 36) { const i = TIERS.indexOf(R.tier); if (i < TIERS.length - 1) { setTier(TIERS[i + 1]); try { localStorage.setItem('bb6_tier', R.tier); } catch (e) {} } }
    }
  }
}

// Les sprites (étiquettes, bulles, vapeur) vivent sur le calque 1.
export function spriteLayer(o) { o.traverse(n => { if (n.isSprite) n.layers.set(1); }); return o; }
