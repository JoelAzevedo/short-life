// Low-poly prop factory. Everything is flat-shaded, built from primitives,
// with a little vertex jitter so nothing looks too perfect.
import * as THREE from 'three';
import { rng, G } from './game.js';

export const C = {
  grass: 0xa3cf72, grassSpring: 0xb1d98a, grassDark: 0x83b35a, grassAutumn: 0xc8b462, grassDry: 0xcdbb7a,
  snow: 0xf3f6fa, snowShade: 0xdfe6ef, ice: 0xcfe4f2,
  dirt: 0x9c7457, dirtDark: 0x705240, rock: 0x928d90, rockDark: 0x6f6a70, sand: 0xedd8a8,
  wood: 0xbb8b5f, woodDark: 0x87603f, woodLight: 0xdcb88c, trunk: 0x7d5a43, birch: 0xeee8de,
  cream: 0xf4e8d6, white: 0xfbf8f2, pink: 0xf2c9c4, peach: 0xf7c6a3, blue: 0xa9c6e6, navy: 0x3d4f7a,
  red: 0xd9584a, terracotta: 0xc9694c, yellow: 0xf3d36b, green: 0x6fae6a, teal: 0x5fb3a8, lilac: 0xbba6dd,
  slate: 0x6f7d8c, stone: 0xcfc6bb, asphalt: 0x6c6f78, sidewalk: 0xd8d2c8, water: 0x6fb7d9,
  leafSummer: 0x7fbf5a, leafSpring: 0x9fd46e, blossom: 0xf6b8c8, blossomLight: 0xfbd3de,
  leafAutumn: 0xe39a3b, leafAutumn2: 0xd2603e, leafAutumn3: 0xeec04a, pine: 0x4f8f62,
  skin: [0xf6d3b8, 0xe9b894, 0xc98e66, 0x9a6744, 0x6e4a34],
};

// ---------- caches ----------
const matCache = new Map();
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color, flatShading: true, roughness: opts.roughness ?? 0.92, metalness: opts.metalness ?? 0,
    emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.emissiveIntensity ?? 1,
    transparent: !!opts.transparent, opacity: opts.opacity ?? 1, side: opts.side ?? THREE.FrontSide,
    depthWrite: opts.depthWrite ?? true,
  });
  matCache.set(key, m);
  return m;
}
// unique (uncached) material when it will be animated
export function umat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color, flatShading: true, roughness: opts.roughness ?? 0.92, metalness: 0,
    emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.emissiveIntensity ?? 1,
    transparent: !!opts.transparent, opacity: opts.opacity ?? 1, side: opts.side ?? THREE.FrontSide,
    depthWrite: opts.depthWrite ?? true,
  });
}
export function glowMat(color, intensity = 2) {
  return mat(color, { emissive: color, emissiveIntensity: intensity, roughness: 1 });
}

const geoCache = new Map();
function cached(key, make) { if (!geoCache.has(key)) geoCache.set(key, make()); return geoCache.get(key); }

// position-hashed jitter: shared corners move together, so no cracks
export function jitter(geo, amt = 0.05, seed = 1, keepBottom = true) {
  const p = geo.attributes.position;
  let minY = Infinity; for (let i = 0; i < p.count; i++) minY = Math.min(minY, p.getY(i));
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    if (keepBottom && Math.abs(y - minY) < 1e-4) continue;
    const h = Math.sin((Math.round(x * 100) * 12.9898 + Math.round(y * 100) * 78.233 + Math.round(z * 100) * 37.719 + seed * 11.13)) * 43758.5453;
    const r1 = (h - Math.floor(h)) - 0.5;
    const h2 = Math.sin(h * 1.37 + 3.1) * 9631.17; const r2 = (h2 - Math.floor(h2)) - 0.5;
    const h3 = Math.sin(h * 0.71 + 7.7) * 7211.31; const r3 = (h3 - Math.floor(h3)) - 0.5;
    p.setXYZ(i, x + r1 * amt, y + r2 * amt, z + r3 * amt);
  }
  p.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

export function shadow(obj, cast = true, receive = true) {
  obj.traverse((o) => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; } });
  return obj;
}
function mesh(geo, color, opts) {
  const m = new THREE.Mesh(geo, typeof color === 'number' ? mat(color, opts) : color);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
export function box(w, h, d, color, opts) {
  const g = cached(`box${w},${h},${d}`, () => { const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0); return g; });
  return mesh(g, color, opts);
}
export function boxC(w, h, d, color, opts) { // centred
  const g = cached(`boxc${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d));
  return mesh(g, color, opts);
}
export function cyl(rt, rb, h, seg, color, opts) {
  const g = cached(`cyl${rt},${rb},${h},${seg}`, () => { const g = new THREE.CylinderGeometry(rt, rb, h, seg); g.translate(0, h / 2, 0); return g; });
  return mesh(g, color, opts);
}
export function cone(r, h, seg, color, opts) {
  const g = cached(`cone${r},${h},${seg}`, () => { const g = new THREE.ConeGeometry(r, h, seg); g.translate(0, h / 2, 0); return g; });
  return mesh(g, color, opts);
}
export function ico(r, detail, color, jit = 0, seed = 1, opts) {
  const g = cached(`ico${r},${detail},${jit},${seed}`, () => jitter(new THREE.IcosahedronGeometry(r, detail), jit, seed, false));
  return mesh(g, color, opts);
}
export function sphere(r, ws, hs, color, opts) {
  const g = cached(`sph${r},${ws},${hs}`, () => new THREE.SphereGeometry(r, ws, hs));
  return mesh(g, color, opts);
}
export function torus(r, t, rs, ts, color, arc = Math.PI * 2, opts) {
  const g = cached(`tor${r},${t},${rs},${ts},${arc}`, () => new THREE.TorusGeometry(r, t, rs, ts, arc));
  return mesh(g, color, opts);
}
export function at(obj, x = 0, y = 0, z = 0, ry = 0, s = 1) {
  obj.position.set(x, y, z); obj.rotation.y = ry; if (s !== 1) obj.scale.setScalar(s); return obj;
}
export function group(...kids) { const g = new THREE.Group(); kids.forEach((k) => k && g.add(k)); return g; }

// ---------- canvas textures ----------
export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
let _glowTex = null;
export function glowTexture() {
  if (_glowTex) return _glowTex;
  _glowTex = canvasTex(128, 128, (ctx, w) => {
    const g = ctx.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.55)');
    g.addColorStop(0.6, 'rgba(255,255,255,0.12)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, w);
  });
  return _glowTex;
}
export function glowSprite(color = 0xffffff, size = 1, opacity = 1) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  s.scale.setScalar(size);
  return s;
}

// ---------- terrain ----------
// A floating island diorama: grassy top, earthy sides, rocky underside.
export function island({ w = 20, d = 20, h = 1.2, top = C.grass, side = C.dirt, under = C.dirtDark, seed = 3, rocks = true, edge = null } = {}) {
  const g = new THREE.Group();
  const topSlab = box(w, 0.35, d, top); topSlab.position.y = -0.35; topSlab.castShadow = false; g.add(topSlab);
  if (edge) { const e = box(w + 0.06, 0.12, d + 0.06, edge); e.position.y = -0.47; e.castShadow = false; g.add(e); }
  const body = box(w - 0.1, h, d - 0.1, side); body.position.y = -0.35 - h; body.castShadow = false; g.add(body);
  if (rocks) {
    const r = rng(seed);
    // jagged underside built from inverted cones
    const n = Math.max(4, Math.round((w * d) / 30));
    for (let i = 0; i < n; i++) {
      const cw = r.range(1.8, 4.2), ch = r.range(2.5, 7.5);
      const geo = jitter(new THREE.ConeGeometry(cw, ch, 5), 0.35, seed + i, false);
      const m = new THREE.Mesh(geo, mat(i % 3 === 0 ? C.rockDark : under));
      m.rotation.x = Math.PI;
      m.position.set(r.range(-w / 2 + cw * 0.8, w / 2 - cw * 0.8), -0.35 - h - ch / 2 + 0.2, r.range(-d / 2 + cw * 0.8, d / 2 - cw * 0.8));
      g.add(m);
    }
    const core = new THREE.Mesh(jitter(new THREE.ConeGeometry(Math.min(w, d) * 0.62, Math.min(w, d) * 0.55, 6), 0.5, seed + 99, false), mat(under));
    core.rotation.x = Math.PI; core.rotation.y = 0.4; core.scale.set(w / Math.min(w, d), 1, d / Math.min(w, d));
    core.position.y = -0.35 - h - Math.min(w, d) * 0.27 + 0.1; g.add(core);
  }
  g.userData.ground = topSlab;
  return g;
}

// flat coloured patch on top of the ground (paths, rugs, roads)
export function patch(w, d, color, y = 0.005, opts) {
  const m = new THREE.Mesh(cached(`patch${w},${d}`, () => { const g = new THREE.PlaneGeometry(w, d); g.rotateX(-Math.PI / 2); return g; }), mat(color, opts));
  m.position.y = y; m.receiveShadow = true; return m;
}
export function disc(r, color, seg = 10, y = 0.006) {
  const m = new THREE.Mesh(cached(`disc${r},${seg}`, () => { const g = new THREE.CircleGeometry(r, seg); g.rotateX(-Math.PI / 2); return g; }), mat(color));
  m.position.y = y; m.receiveShadow = true; return m;
}

// gently animated low-poly water
export function water(w, d, color = C.water, opacity = 0.85) {
  const geo = new THREE.PlaneGeometry(w, d, Math.max(2, Math.round(w)), Math.max(2, Math.round(d)));
  geo.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(geo, umat(color, { transparent: true, opacity, roughness: 0.3 }));
  m.receiveShadow = true;
  const base = geo.attributes.position.array.slice();
  m.userData.update = (dt, t) => {
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = base[i * 3], z = base[i * 3 + 2];
      p.setY(i, Math.sin(x * 1.3 + t * 1.2) * 0.04 + Math.cos(z * 1.1 + t * 0.9) * 0.04);
    }
    p.needsUpdate = true; geo.computeVertexNormals();
  };
  return m;
}

// ---------- nature ----------
const LEAF = {
  spring: [C.leafSpring, 0x8fca63, 0xb5de84],
  summer: [C.leafSummer, 0x6aa84f, 0x90c862],
  autumn: [C.leafAutumn, C.leafAutumn2, C.leafAutumn3],
  winter: [0xe9edf3, 0xdfe5ee, 0xf4f6fa],
  blossom: [C.blossom, C.blossomLight, 0xf1a6bb],
};
export function tree({ kind = 'round', season = 'summer', size = 1, seed = 1 } = {}) {
  const r = rng(seed * 7 + 3);
  const g = new THREE.Group();
  const trunkH = (kind === 'pine' ? 0.9 : 1.4) * size;
  const trunkCol = kind === 'birch' ? C.birch : C.trunk;
  const trunk = cyl(0.12 * size, 0.2 * size, trunkH, 5, trunkCol); g.add(trunk);
  const canopy = new THREE.Group(); canopy.position.y = trunkH; g.add(canopy);
  const pal = LEAF[kind === 'blossom' && season !== 'winter' && season !== 'autumn' ? 'blossom' : season];
  if (kind === 'pine') {
    const cols = season === 'winter' ? [C.pine, 0x5d9a70] : [C.pine, 0x5b9a6b];
    for (let i = 0; i < 3; i++) {
      const c = cone((1.0 - i * 0.25) * size, 1.3 * size, 6, cols[i % 2]); c.position.y = i * 0.65 * size - 0.2; canopy.add(c);
      if (season === 'winter') { const s = cone((0.55 - i * 0.14) * size, 0.5 * size, 6, C.snow); s.position.y = i * 0.65 * size + 0.75 * size; canopy.add(s); }
    }
  } else if (season === 'winter' && kind !== 'pine') {
    // bare branches with snow
    for (let i = 0; i < 5; i++) {
      const b = cyl(0.03 * size, 0.07 * size, 0.9 * size, 4, trunkCol);
      b.rotation.z = r.range(0.5, 0.9) * (i % 2 ? 1 : -1); b.rotation.y = i * 1.3;
      b.position.y = r.range(-0.2, 0.3) * size; canopy.add(b);
    }
    const cap = ico(0.35 * size, 0, C.snow, 0.05, seed); cap.position.y = 0.6 * size; cap.scale.y = 0.5; canopy.add(cap);
  } else {
    const n = kind === 'birch' ? 3 : 4;
    for (let i = 0; i < n; i++) {
      const rad = r.range(0.55, 0.85) * size;
      const blob = ico(rad, 0, pal[i % pal.length], 0.12, seed + i);
      const a = (i / n) * Math.PI * 2 + r.range(0, 1);
      blob.position.set(Math.cos(a) * 0.45 * size, r.range(0.35, 0.9) * size, Math.sin(a) * 0.45 * size);
      canopy.add(blob);
    }
    const topb = ico(0.7 * size, 0, pal[0], 0.12, seed + 9); topb.position.y = 1.15 * size; canopy.add(topb);
  }
  shadow(g);
  g.userData.canopy = canopy;
  g.userData.sway = r.range(0, 6);
  g.userData.update = (dt, t) => { canopy.rotation.z = Math.sin(t * 0.8 + g.userData.sway) * 0.02; canopy.rotation.x = Math.cos(t * 0.6 + g.userData.sway) * 0.015; };
  return g;
}

// The family tree — planted as a sapling, grows over the decades.
export function familyTree({ stage = 1, season = 'summer', swing = false, seed = 42 } = {}) {
  // stage: 0 sapling, 1 young, 2 grown, 3 big, 4 ancient
  const g = new THREE.Group();
  const s = [0.28, 0.6, 1.25, 1.9, 2.4][stage] ?? 1;
  const trunkH = 1.5 * s;
  const trunk = cyl(0.1 * s + 0.03, 0.22 * s + 0.05, trunkH, 6, C.trunk); g.add(trunk);
  const canopy = new THREE.Group(); canopy.position.y = trunkH; g.add(canopy);
  if (stage >= 2) {
    for (let i = 0; i < 3; i++) {
      const b = cyl(0.04 * s, 0.09 * s, 0.9 * s, 5, C.trunk);
      b.rotation.z = (i - 1) * 0.7; b.rotation.y = i * 2.1; b.position.y = -0.2 * s; canopy.add(b);
    }
  }
  const pal = LEAF[season];
  if (season === 'winter') {
    for (let i = 0; i < 7; i++) {
      const b = cyl(0.025 * s, 0.06 * s, 1.1 * s, 4, C.trunk);
      b.rotation.z = 0.6 + (i % 3) * 0.15; b.rotation.y = i * 0.9; b.position.y = 0.1 * s; canopy.add(b);
    }
    const cap = ico(0.5 * s, 0, C.snow, 0.06, seed); cap.scale.y = 0.35; cap.position.y = 0.75 * s; canopy.add(cap);
  } else {
    const r = rng(seed);
    const n = stage === 0 ? 2 : 6;
    for (let i = 0; i < n; i++) {
      const blob = ico(r.range(0.5, 0.75) * s, stage >= 3 ? 1 : 0, pal[i % 3], 0.1 * s, seed + i);
      const a = (i / n) * Math.PI * 2;
      blob.position.set(Math.cos(a) * 0.6 * s, r.range(0.3, 0.8) * s, Math.sin(a) * 0.6 * s);
      canopy.add(blob);
    }
    const top = ico(0.8 * s, stage >= 3 ? 1 : 0, pal[0], 0.1 * s, seed + 77); top.position.y = 1.1 * s; canopy.add(top);
  }
  if (swing && stage >= 2) {
    const sw = new THREE.Group();
    const ropeL = box(0.025, 1.3 * s * 0.75, 0.025, 0xe8dcc8); ropeL.position.set(-0.25, -1.3 * s * 0.75, 0); sw.add(ropeL);
    const ropeR = box(0.025, 1.3 * s * 0.75, 0.025, 0xe8dcc8); ropeR.position.set(0.25, -1.3 * s * 0.75, 0); sw.add(ropeR);
    const seat = box(0.65, 0.06, 0.25, C.woodDark); seat.position.y = -1.3 * s * 0.75; sw.add(seat);
    sw.position.set(0.9 * s, trunkH + 0.15 * s - 0.35, 0.2);
    g.add(sw); g.userData.swing = sw; g.userData.swingLen = 1.3 * s * 0.75;
  }
  shadow(g);
  g.userData.canopy = canopy;
  g.userData.update = (dt, t) => { canopy.rotation.z = Math.sin(t * 0.7) * 0.015; };
  return g;
}

export function bush(color = 0x78b456, size = 1, seed = 1) {
  const g = new THREE.Group();
  const r = rng(seed);
  for (let i = 0; i < 3; i++) {
    const b = ico(r.range(0.28, 0.42) * size, 0, i === 1 ? color : shade(color, 0.92), 0.06, seed + i);
    b.position.set((i - 1) * 0.3 * size, 0.25 * size, r.range(-0.1, 0.1)); g.add(b);
  }
  return shadow(g);
}
export function rock(size = 1, seed = 1, color = C.rock) {
  const m = ico(0.4 * size, 0, color, 0.12 * size, seed); m.scale.y = 0.6; m.position.y = 0.12 * size; return group(m);
}
export function flower(color = C.pink, seed = 1) {
  const g = new THREE.Group();
  const stem = box(0.025, 0.22, 0.025, 0x5c9a46); g.add(stem);
  const head = ico(0.07, 0, color, 0.0); head.position.y = 0.24; g.add(head);
  const c = ico(0.035, 0, C.yellow); c.position.y = 0.27; g.add(c);
  g.rotation.y = seed;
  return shadow(g, false, false);
}
export function grassTuft(color = C.grassDark, seed = 1) {
  const g = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const b = cone(0.04, 0.22 + (i % 2) * 0.08, 3, color);
    b.position.set((i - 1) * 0.05, 0, (i % 2) * 0.04); b.rotation.z = (i - 1) * 0.3; g.add(b);
  }
  g.rotation.y = seed;
  return shadow(g, false, false);
}
export function reeds(seed = 1) {
  const g = new THREE.Group(); const r = rng(seed);
  for (let i = 0; i < 5; i++) { const b = cyl(0.015, 0.025, r.range(0.5, 0.9), 3, 0x6f9b4e); b.position.set(r.range(-0.15, 0.15), 0, r.range(-0.15, 0.15)); b.rotation.z = r.range(-0.15, 0.15); g.add(b); }
  return shadow(g);
}
export function cloud(seed = 1, size = 1) {
  const g = new THREE.Group(); const r = rng(seed);
  for (let i = 0; i < 4; i++) { const b = ico(r.range(0.6, 1.1) * size, 0, 0xffffff, 0.15, seed + i, { emissive: 0xffffff, emissiveIntensity: 0.25 }); b.position.set((i - 1.5) * 0.8 * size, r.range(-0.2, 0.3), r.range(-0.3, 0.3)); b.scale.y = 0.7; g.add(b); }
  g.userData.drift = r.range(0.1, 0.25);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
  return g;
}
export function shade(hex, k) {
  const c = new THREE.Color(hex); c.multiplyScalar(k); return c.getHex();
}

// ---------- architecture ----------
// A cut-away room: floor + two back walls (facing the camera).
export function roomShell({ w = 8, d = 8, h = 3.2, floor = C.woodLight, wall = C.cream, wall2 = null, trim = C.white, base = C.dirtDark, windows = [] } = {}) {
  const g = new THREE.Group();
  const fl = box(w, 0.25, d, floor); fl.position.y = -0.25; fl.castShadow = false; g.add(fl);
  const plinth = box(w + 0.3, 0.6, d + 0.3, base); plinth.position.y = -0.85; plinth.castShadow = false; g.add(plinth);
  // floorboards
  for (let i = 1; i < Math.floor(w / 0.8); i++) { const l = patch(0.02, d, shade(floor, 0.9), 0.003); l.position.x = -w / 2 + i * 0.8; g.add(l); }
  const wa = box(0.25, h, d + 0.25, wall); wa.position.set(-w / 2 - 0.125, -0.25, -0.125); g.add(wa);
  const wb = box(w, h, 0.25, wall2 ?? wall); wb.position.set(0, -0.25, -d / 2 - 0.125); g.add(wb);
  const sk1 = box(0.06, 0.18, d, trim); sk1.position.set(-w / 2 + 0.03, 0, 0); g.add(sk1);
  const sk2 = box(w, 0.18, 0.06, trim); sk2.position.set(0, 0, -d / 2 + 0.03); g.add(sk2);
  for (const win of windows) g.add(windowFrame(win));
  shadow(g);
  g.userData.walls = [wa, wb];
  return g;
}
// window on a back wall: {wall:'left'|'back', at: offset, y, w, h, sky}
export function windowFrame({ wall = 'back', at: off = 0, y = 1.1, w = 1.4, h = 1.3, glow = 0xfff2d8, roomW = 8, roomD = 8 } = {}) {
  const g = new THREE.Group();
  const pane = box(w, h, 0.05, glow, { emissive: glow, emissiveIntensity: 0.9 }); pane.castShadow = false; g.add(pane);
  const f1 = box(w + 0.16, 0.1, 0.14, C.white); f1.position.y = -0.05; g.add(f1);
  const f2 = box(w + 0.16, 0.1, 0.14, C.white); f2.position.y = h; g.add(f2);
  const f3 = box(0.08, h, 0.12, C.white); f3.position.x = 0; g.add(f3);
  const f4 = box(0.1, h, 0.14, C.white); f4.position.x = -w / 2; g.add(f4);
  const f5 = box(0.1, h, 0.14, C.white); f5.position.x = w / 2; g.add(f5);
  const sill = box(w + 0.3, 0.07, 0.3, C.white); sill.position.set(0, -0.08, 0.12); g.add(sill);
  if (wall === 'back') { g.position.set(off, y, -roomD / 2 + 0.03); }
  else { g.position.set(-roomW / 2 + 0.03, y, off); g.rotation.y = Math.PI / 2; }
  g.userData.pane = pane;
  return g;
}

export function house({ w = 5, d = 4, h = 2.6, wall = C.cream, roof = C.terracotta, door = C.navy, trim = C.white, chimney = true, porch = false, lit = false, seed = 1 } = {}) {
  const g = new THREE.Group();
  const body = box(w, h, d, wall); g.add(body);
  // gable roof as an extruded triangle
  const shape = new THREE.Shape();
  const ov = 0.35;
  shape.moveTo(-w / 2 - ov, 0); shape.lineTo(w / 2 + ov, 0); shape.lineTo(0, h * 0.6); shape.lineTo(-w / 2 - ov, 0);
  const rg = new THREE.ExtrudeGeometry(shape, { depth: d + ov * 2, bevelEnabled: false });
  rg.translate(0, 0, -(d + ov * 2) / 2);
  const roofM = new THREE.Mesh(rg, mat(roof)); roofM.position.y = h; roofM.castShadow = true; roofM.receiveShadow = true; g.add(roofM);
  const gable = new THREE.Shape(); gable.moveTo(-w / 2, 0); gable.lineTo(w / 2, 0); gable.lineTo(0, h * 0.52); gable.lineTo(-w / 2, 0);
  const gg = new THREE.ExtrudeGeometry(gable, { depth: d - 0.02, bevelEnabled: false }); gg.translate(0, 0, -(d - 0.02) / 2);
  const gm = new THREE.Mesh(gg, mat(wall)); gm.position.y = h - 0.01; g.add(gm);
  if (chimney) { const ch = box(0.45, 1.2, 0.45, C.terracotta === roof ? 0xa9573f : shade(roof, 0.8)); ch.position.set(w * 0.25, h + 0.3, -d * 0.15); g.add(ch); }
  // front (+z) door and windows
  const dr = box(0.75, 1.45, 0.08, door); dr.position.set(0, 0, d / 2 + 0.02); g.add(dr);
  const knob = sphere(0.04, 6, 4, C.yellow); knob.position.set(0.25, 0.72, d / 2 + 0.08); g.add(knob);
  const winCol = lit ? 0xffe0a0 : 0xcfe2ee;
  const winOpts = lit ? { emissive: 0xffd28a, emissiveIntensity: 1.2 } : {};
  for (const sx of [-1, 1]) {
    const wn = box(0.75, 0.7, 0.06, winCol, winOpts); wn.position.set(sx * w * 0.3, 1.1, d / 2 + 0.02); g.add(wn);
    const fr = box(0.9, 0.08, 0.1, trim); fr.position.set(sx * w * 0.3, 1.06, d / 2 + 0.05); g.add(fr);
    // side windows (+x)
    const sw = box(0.06, 0.7, 0.75, winCol, winOpts); sw.position.set(w / 2 + 0.02, 1.1, sx * d * 0.22); g.add(sw);
  }
  const step = box(1.1, 0.12, 0.5, C.stone); step.position.set(0, 0, d / 2 + 0.25); g.add(step);
  if (porch) {
    const pf = box(w * 0.8, 0.15, 1.4, C.woodLight); pf.position.set(0, 0, d / 2 + 0.7); g.add(pf);
    for (const sx of [-1, 1]) { const p = cyl(0.06, 0.06, 1.9, 5, trim); p.position.set(sx * w * 0.38, 0.15, d / 2 + 1.3); g.add(p); }
    const pr = box(w * 0.85, 0.1, 1.6, roof); pr.position.set(0, 2.05, d / 2 + 0.75); pr.rotation.x = 0.12; g.add(pr);
  }
  return shadow(g);
}

export function fence(len = 4, color = C.white, h = 0.6) {
  const g = new THREE.Group();
  const n = Math.max(2, Math.round(len / 0.5));
  for (let i = 0; i <= n; i++) { const p = box(0.08, h, 0.08, color); p.position.x = -len / 2 + (i / n) * len; g.add(p); }
  for (const y of [h * 0.35, h * 0.75]) { const r = box(len, 0.06, 0.05, color); r.position.y = y; g.add(r); }
  return shadow(g);
}
export function road(len, w = 3, horizontal = true) {
  const g = new THREE.Group();
  const r = patch(horizontal ? len : w, horizontal ? w : len, C.asphalt, 0.01); g.add(r);
  const n = Math.floor(len / 1.4);
  for (let i = 0; i < n; i++) {
    const dsh = patch(horizontal ? 0.6 : 0.1, horizontal ? 0.1 : 0.6, 0xf1efe6, 0.015);
    const o = -len / 2 + 0.7 + i * 1.4; if (horizontal) dsh.position.x = o; else dsh.position.z = o; g.add(dsh);
  }
  return g;
}
export function streetLamp(lit = false) {
  const g = new THREE.Group();
  g.add(cyl(0.05, 0.07, 2.6, 5, 0x4a4f5c));
  const arm = box(0.5, 0.05, 0.05, 0x4a4f5c); arm.position.set(0.2, 2.55, 0); g.add(arm);
  const head = cone(0.18, 0.2, 6, 0x4a4f5c); head.position.set(0.42, 2.38, 0); g.add(head);
  const bulb = sphere(0.09, 6, 4, lit ? 0xfff0c8 : 0xe8e8e0, lit ? { emissive: 0xffe0a0, emissiveIntensity: 3 } : {}); bulb.position.set(0.42, 2.38, 0); g.add(bulb);
  if (lit) { const s = glowSprite(0xffd9a0, 2.2, 0.55); s.position.set(0.42, 2.3, 0); g.add(s); }
  return shadow(g);
}
// string of glowing bulbs between points (array of [x,y,z])
export function stringLights(points, colors = [0xffe3a3, 0xffc4a0, 0xfff1c8], sag = 0.35) {
  const g = new THREE.Group();
  for (let i = 0; i < points.length - 1; i++) {
    const a = new THREE.Vector3(...points[i]), b = new THREE.Vector3(...points[i + 1]);
    const n = Math.max(3, Math.round(a.distanceTo(b) / 0.45));
    const curve = [];
    for (let j = 0; j <= n; j++) {
      const t = j / n; const p = a.clone().lerp(b, t); p.y -= Math.sin(t * Math.PI) * sag; curve.push(p);
      if (j > 0 && j < n) {
        const c = colors[(i + j) % colors.length];
        const bulb = sphere(0.06, 6, 4, c, { emissive: c, emissiveIntensity: 2.6 }); bulb.position.copy(p); bulb.castShadow = false; g.add(bulb);
      }
    }
    const lg = new THREE.BufferGeometry().setFromPoints(curve);
    g.add(new THREE.Line(lg, new THREE.LineBasicMaterial({ color: 0x3a3440 })));
  }
  return g;
}
export function lantern(color = 0xffb36b, lit = true) {
  const g = new THREE.Group();
  const body = cyl(0.17, 0.15, 0.36, 6, color, lit ? { emissive: color, emissiveIntensity: 1.6 } : {}); g.add(body);
  const cap = cyl(0.08, 0.16, 0.06, 6, 0x5a4030); cap.position.y = 0.36; g.add(cap);
  if (lit) { const s = glowSprite(color, 1.4, 0.6); s.position.y = 0.18; g.add(s); }
  g.traverse((o) => { if (o.isMesh) o.castShadow = false; });
  return g;
}
export function bench(color = C.woodDark) {
  const g = new THREE.Group();
  const seat = box(1.6, 0.08, 0.45, color); seat.position.y = 0.42; g.add(seat);
  const back = box(1.6, 0.4, 0.06, color); back.position.set(0, 0.6, -0.2); back.rotation.x = -0.12; g.add(back);
  for (const sx of [-0.7, 0.7]) for (const sz of [-0.18, 0.18]) { const l = box(0.07, 0.42, 0.07, 0x4a4f5c); l.position.set(sx, 0, sz); g.add(l); }
  return shadow(g);
}
export function swingSet() {
  const g = new THREE.Group();
  for (const sx of [-1.1, 1.1]) for (const sz of [-0.5, 0.5]) { const p = cyl(0.05, 0.05, 2.3, 5, C.red); p.position.set(sx, 0, sz * 0.9); p.rotation.x = sz * 0.35; g.add(p); }
  const top = cyl(0.05, 0.05, 2.4, 5, C.red); top.rotation.z = Math.PI / 2; top.position.set(1.2, 2.15, 0); g.add(top);
  const sw = new THREE.Group(); sw.position.set(0, 2.1, 0);
  for (const sx of [-0.25, 0.25]) { const r = box(0.02, 1.6, 0.02, 0xd8d0c0); r.position.set(sx, -1.6, 0); sw.add(r); }
  const seat = box(0.6, 0.05, 0.22, C.navy); seat.position.y = -1.62; sw.add(seat);
  g.add(sw); g.userData.swing = sw; g.userData.swingLen = 1.6;
  return shadow(g);
}
export function sandbox() {
  const g = new THREE.Group();
  for (const [x, z, w, d] of [[0, -1, 2.2, 0.15], [0, 1, 2.2, 0.15], [-1.05, 0, 0.15, 2.0], [1.05, 0, 0.15, 2.0]]) { const b = box(w, 0.25, d, C.wood); b.position.set(x, 0, z); g.add(b); }
  const s = box(2, 0.15, 1.85, C.sand); g.add(s);
  return shadow(g);
}
export function sandcastle(stage = 3) {
  const g = new THREE.Group();
  if (stage >= 1) { const b = box(0.6, 0.25, 0.6, 0xe5c98f); g.add(b); }
  if (stage >= 2) for (const [x, z] of [[-0.25, -0.25], [0.25, -0.25], [-0.25, 0.25], [0.25, 0.25]]) { const t = cyl(0.1, 0.12, 0.45, 6, 0xe8cf98); t.position.set(x, 0, z); g.add(t); }
  if (stage >= 3) { const k = cyl(0.14, 0.16, 0.6, 6, 0xeed6a2); g.add(k); const c = cone(0.17, 0.2, 6, 0xd9b77d); c.position.y = 0.6; g.add(c); }
  if (stage >= 4) { const f = box(0.01, 0.25, 0.01, 0x333333); f.position.y = 0.8; g.add(f); const fl = box(0.15, 0.09, 0.01, C.red); fl.position.set(0.075, 0.95, 0); g.add(fl); }
  return shadow(g);
}
export function mailbox() {
  const g = new THREE.Group();
  g.add(box(0.07, 0.8, 0.07, C.woodDark));
  const b = box(0.25, 0.22, 0.4, C.navy); b.position.y = 0.8; g.add(b);
  const fl = box(0.02, 0.15, 0.06, C.red); fl.position.set(0.14, 0.9, 0.1); g.add(fl);
  return shadow(g);
}
export function picnicBlanket(color = C.red) {
  const g = new THREE.Group();
  g.add(patch(2.2, 1.8, color, 0.02));
  for (let i = 0; i < 5; i++) { const s = patch(0.18, 1.8, C.white, 0.025); s.position.x = -0.88 + i * 0.44; g.add(s); }
  for (let i = 0; i < 4; i++) { const s = patch(2.2, 0.18, C.white, 0.026); s.position.z = -0.66 + i * 0.44; g.add(s); }
  return g;
}
export function umbrella(color = C.red) {
  const g = new THREE.Group();
  g.add(cyl(0.02, 0.02, 1.9, 4, 0x555555));
  const c = cone(1.1, 0.5, 8, color); c.position.y = 1.7; g.add(c);
  return shadow(g);
}
export function stall({ color = C.red, stripe = C.white, w = 2, d = 1.2, counter = C.woodLight } = {}) {
  const g = new THREE.Group();
  const ct = box(w, 0.9, d * 0.6, counter); ct.position.z = d * 0.2; g.add(ct);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const p = cyl(0.04, 0.04, 2.1, 4, C.woodDark); p.position.set(sx * w / 2 * 0.95, 0, sz * d / 2); g.add(p); }
  const n = 6;
  for (let i = 0; i < n; i++) { const s = box(w / n, 0.08, d + 0.4, i % 2 ? color : stripe); s.position.set(-w / 2 + w / n * (i + 0.5), 2.1, 0); s.rotation.x = 0.15; g.add(s); }
  return shadow(g);
}
export function iceCreamCart() {
  const g = new THREE.Group();
  const body = box(1.3, 0.8, 0.7, 0xf6f0e6); body.position.y = 0.3; g.add(body);
  const band = box(1.32, 0.15, 0.72, C.pink); band.position.y = 0.75; g.add(band);
  for (const sx of [-0.45, 0.45]) { const w = cyl(0.22, 0.22, 0.08, 10, 0x444444); w.rotation.x = Math.PI / 2; w.position.set(sx, 0.22, 0.38); g.add(w); }
  const u = umbrella(0xf2a7b6); u.scale.setScalar(0.8); u.position.y = 0.3; g.add(u);
  for (let i = 0; i < 3; i++) { const sc = sphere(0.08, 6, 4, [C.pink, 0xf8f0d8, 0xa5d6a7][i]); sc.position.set(-0.3 + i * 0.3, 1.18, 0); g.add(sc); }
  return shadow(g);
}
export function car(color = C.blue) {
  const g = new THREE.Group();
  const b = box(2.2, 0.55, 1.1, color); b.position.y = 0.25; g.add(b);
  const top = box(1.2, 0.45, 1.0, color); top.position.set(-0.1, 0.8, 0); g.add(top);
  const win = box(1.22, 0.32, 1.02, 0xcfe4f2); win.position.set(-0.1, 0.86, 0); g.add(win);
  for (const sx of [-0.7, 0.7]) for (const sz of [-0.55, 0.55]) { const w = cyl(0.22, 0.22, 0.14, 8, 0x333333); w.rotation.x = Math.PI / 2; w.position.set(sx, 0.22, sz); g.add(w); }
  const hl = box(0.05, 0.12, 0.25, 0xfff4d0, { emissive: 0xfff0c0, emissiveIntensity: 0.6 }); hl.position.set(1.1, 0.45, 0.3); g.add(hl);
  const hl2 = hl.clone(); hl2.position.z = -0.3; g.add(hl2);
  return shadow(g);
}
export function bicycle(color = C.red, size = 1) {
  const g = new THREE.Group();
  for (const sx of [-0.45, 0.45]) { const w = torus(0.3, 0.035, 4, 12, 0x333333); w.position.set(sx, 0.3, 0); g.add(w); }
  const f1 = boxC(0.7, 0.05, 0.05, color); f1.position.set(0, 0.52, 0); g.add(f1);
  const f2 = boxC(0.05, 0.4, 0.05, color); f2.position.set(-0.12, 0.42, 0); f2.rotation.z = 0.3; g.add(f2);
  const seat = boxC(0.2, 0.05, 0.12, 0x333333); seat.position.set(-0.18, 0.68, 0); g.add(seat);
  const bar = boxC(0.05, 0.05, 0.4, 0x666666); bar.position.set(0.4, 0.75, 0); g.add(bar);
  const fork = boxC(0.04, 0.45, 0.04, color); fork.position.set(0.42, 0.52, 0); fork.rotation.z = -0.15; g.add(fork);
  g.scale.setScalar(size);
  return shadow(g);
}
export function kite(color = C.red) {
  const g = new THREE.Group();
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0.5, 0, -0.35, 0, 0, 0, -0.6, 0, 0, 0.5, 0, 0, -0.6, 0, 0.35, 0, 0], 3));
  geo.computeVertexNormals();
  const k = new THREE.Mesh(geo, mat(color, { side: THREE.DoubleSide })); g.add(k);
  const k2 = new THREE.Mesh(geo, mat(C.yellow, { side: THREE.DoubleSide })); k2.scale.setScalar(0.5); k2.position.z = 0.01; g.add(k2);
  for (let i = 0; i < 4; i++) { const b = boxC(0.1, 0.05, 0.01, i % 2 ? C.yellow : C.blue); b.position.y = -0.7 - i * 0.18; b.rotation.z = (i % 2 ? 0.4 : -0.4); g.add(b); }
  return g;
}
export function rowboat(color = C.white) {
  const g = new THREE.Group();
  const hull = box(2.0, 0.35, 0.9, color); g.add(hull);
  const rim = box(2.05, 0.08, 0.95, C.red); rim.position.y = 0.33; g.add(rim);
  const inner = box(1.8, 0.05, 0.7, C.woodLight); inner.position.y = 0.2; g.add(inner);
  const seat = box(0.25, 0.06, 0.8, C.wood); seat.position.y = 0.25; g.add(seat);
  const bow = cone(0.45, 0.6, 4, color); bow.rotation.z = -Math.PI / 2; bow.rotation.x = Math.PI / 4; bow.position.set(1.0, 0.18, 0); bow.scale.set(1, 1, 0.75); g.add(bow);
  return shadow(g);
}
export function pier(len = 4, w = 1.2) {
  const g = new THREE.Group();
  const deck = box(w, 0.12, len, C.wood); deck.position.y = 0.05; g.add(deck);
  for (let i = 0; i <= Math.floor(len / 1.2); i++) for (const sx of [-1, 1]) { const p = cyl(0.07, 0.07, 0.9, 5, C.woodDark); p.position.set(sx * w / 2, -0.75, -len / 2 + i * 1.2); g.add(p); }
  for (let i = 0; i < Math.floor(len / 0.3); i++) { const l = patch(w, 0.02, C.woodDark, 0.175); l.position.z = -len / 2 + i * 0.3; g.add(l); }
  return shadow(g);
}

// ---------- furniture ----------
export function crib() {
  const g = new THREE.Group();
  const base = box(1.5, 0.12, 0.85, C.white); base.position.y = 0.45; g.add(base);
  const mattress = box(1.4, 0.12, 0.75, 0xdfeaf5); mattress.position.y = 0.57; g.add(mattress);
  for (const sx of [-0.72, 0.72]) for (const sz of [-0.4, 0.4]) { const p = box(0.07, 1.1, 0.07, C.white); p.position.set(sx, 0, sz); g.add(p); }
  for (let i = 0; i < 9; i++) for (const sz of [-0.4, 0.4]) { const b = box(0.03, 0.5, 0.03, C.white); b.position.set(-0.6 + i * 0.15, 0.57, sz); g.add(b); }
  for (const sz of [-0.4, 0.4]) { const r = box(1.5, 0.05, 0.05, C.white); r.position.set(0, 1.07, sz); g.add(r); }
  const blanket = box(0.6, 0.06, 0.7, C.pink); blanket.position.set(0.35, 0.65, 0); g.add(blanket);
  return shadow(g);
}
export function mobile() {
  const g = new THREE.Group();
  const rod = box(0.03, 0.9, 0.03, C.white); g.add(rod);
  const arm = box(0.6, 0.02, 0.02, C.white); arm.position.y = 0.9; g.add(arm);
  const spin = new THREE.Group(); spin.position.y = 0.88; g.add(spin);
  const cols = [C.yellow, 0xb8d8f2, C.pink, 0xc8e6c9, 0xf6e1a8];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const str = box(0.008, 0.25, 0.008, 0xdddddd); str.position.set(Math.cos(a) * 0.3, -0.25, Math.sin(a) * 0.3); spin.add(str);
    const star = ico(0.07, 0, cols[i], 0, 1, { emissive: cols[i], emissiveIntensity: 0.6 }); star.position.set(Math.cos(a) * 0.3, -0.3, Math.sin(a) * 0.3); spin.add(star);
  }
  g.userData.spin = spin;
  g.userData.speed = 0.25;
  g.userData.update = (dt) => { spin.rotation.y += dt * g.userData.speed; };
  return g;
}
export function bed({ w = 1.1, d = 2, color = C.blue, frame = C.wood } = {}) {
  const g = new THREE.Group();
  const f = box(w, 0.35, d, frame); g.add(f);
  const m = box(w - 0.1, 0.18, d - 0.1, C.white); m.position.y = 0.35; g.add(m);
  const b = box(w - 0.05, 0.1, d * 0.6, color); b.position.set(0, 0.5, d * 0.18); g.add(b);
  const p = box(w * 0.6, 0.12, 0.35, C.white); p.position.set(0, 0.53, -d / 2 + 0.3); g.add(p);
  const hb = box(w, 0.9, 0.08, frame); hb.position.set(0, 0, -d / 2); g.add(hb);
  return shadow(g);
}
export function table({ w = 1.4, d = 0.9, h = 0.75, color = C.wood, round = false } = {}) {
  const g = new THREE.Group();
  const top = round ? cyl(w / 2, w / 2, 0.08, 10, color) : box(w, 0.08, d, color); top.position.y = h - 0.08; g.add(top);
  if (round) { g.add(cyl(0.06, 0.08, h - 0.08, 5, shade(color, 0.85))); const ft = cyl(0.3, 0.32, 0.04, 8, shade(color, 0.85)); g.add(ft); }
  else for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const l = box(0.07, h - 0.08, 0.07, shade(color, 0.85)); l.position.set(sx * (w / 2 - 0.08), 0, sz * (d / 2 - 0.08)); g.add(l); }
  return shadow(g);
}
export function chair(color = C.wood) {
  const g = new THREE.Group();
  const s = box(0.45, 0.06, 0.45, color); s.position.y = 0.44; g.add(s);
  const b = box(0.45, 0.5, 0.06, color); b.position.set(0, 0.5, -0.2); g.add(b);
  for (const sx of [-0.19, 0.19]) for (const sz of [-0.19, 0.19]) { const l = box(0.05, 0.44, 0.05, shade(color, 0.85)); l.position.set(sx, 0, sz); g.add(l); }
  return shadow(g);
}
export function rockingChair(color = C.woodDark) {
  const g = new THREE.Group();
  const inner = new THREE.Group(); g.add(inner);
  for (const sz of [-0.28, 0.28]) { const r = torus(0.9, 0.035, 3, 12, color, 0.9); r.rotation.z = Math.PI + 1.12; r.position.set(0, 0.92, sz); inner.add(r); }
  const s = box(0.6, 0.07, 0.6, color); s.position.y = 0.45; inner.add(s);
  const cush = box(0.52, 0.08, 0.52, C.pink); cush.position.y = 0.52; inner.add(cush);
  const back = box(0.6, 0.75, 0.06, color); back.position.set(0, 0.55, -0.28); back.rotation.x = -0.18; inner.add(back);
  for (const sx of [-0.27, 0.27]) for (const sz of [-0.25, 0.25]) { const l = box(0.05, 0.38, 0.05, color); l.position.set(sx, 0.08, sz); inner.add(l); }
  g.userData.rock = inner;
  return shadow(g);
}
export function sofa(color = 0x8fa8c8) {
  const g = new THREE.Group();
  const b = box(2.0, 0.45, 0.85, color); b.position.y = 0.05; g.add(b);
  const bk = box(2.0, 0.55, 0.22, shade(color, 0.92)); bk.position.set(0, 0.45, -0.32); g.add(bk);
  for (const sx of [-0.92, 0.92]) { const a = box(0.18, 0.3, 0.85, shade(color, 0.92)); a.position.set(sx, 0.45, 0); g.add(a); }
  for (const sx of [-0.45, 0.45]) { const c = box(0.85, 0.12, 0.6, shade(color, 1.06)); c.position.set(sx, 0.5, 0.08); g.add(c); }
  return shadow(g);
}
export function rug(w = 2.4, d = 1.8, color = C.pink, border = C.cream, round = false) {
  const g = new THREE.Group();
  if (round) { g.add(disc(w / 2, border, 14, 0.008)); const i = disc(w / 2 - 0.15, color, 14, 0.012); g.add(i); }
  else { g.add(patch(w, d, border, 0.008)); g.add(patch(w - 0.25, d - 0.25, color, 0.012)); }
  return g;
}
export function bookshelf(w = 1.2, h = 1.8) {
  const g = new THREE.Group();
  const back = box(w, h, 0.35, C.woodDark); g.add(back);
  const r = rng(Math.round(w * 100 + h * 10));
  const cols = [C.red, C.navy, C.yellow, C.green, C.pink, C.teal, C.cream];
  for (let s = 0; s < 3; s++) {
    const y = 0.15 + s * (h / 3);
    const sh = box(w - 0.06, 0.04, 0.33, C.wood); sh.position.set(0, y - 0.04, 0.02); g.add(sh);
    let x = -w / 2 + 0.08;
    while (x < w / 2 - 0.15) { const bw = r.range(0.06, 0.12), bh = r.range(0.25, 0.42); const b = box(bw, bh, 0.25, r.pick(cols)); b.position.set(x + bw / 2, y, 0.06); b.rotation.z = r() < 0.1 ? 0.15 : 0; g.add(b); x += bw + 0.01; }
  }
  return shadow(g);
}
export function lamp({ h = 1.5, shade: sc = 0xfbe7c4, lit = true, table: tbl = false } = {}) {
  const g = new THREE.Group();
  const hh = tbl ? 0.45 : h;
  g.add(cyl(0.12, 0.15, 0.04, 8, 0x8a7f74));
  g.add(cyl(0.02, 0.02, hh, 4, 0x8a7f74));
  const s = cyl(0.14, 0.24, 0.3, 8, sc, lit ? { emissive: 0xffd9a0, emissiveIntensity: 1.1 } : {}); s.position.y = hh - 0.1; g.add(s);
  if (lit) { const gl = glowSprite(0xffd7a0, tbl ? 1.4 : 2.2, 0.5); gl.position.y = hh; g.add(gl); }
  return shadow(g);
}
export function blocks(n = 3) {
  const g = new THREE.Group();
  const cols = [C.red, C.yellow, C.blue, C.green, C.pink];
  for (let i = 0; i < n; i++) { const b = box(0.22, 0.22, 0.22, cols[i % cols.length]); b.position.set(i * 0.3 - 0.3, 0, (i % 2) * 0.15); b.rotation.y = i * 0.4; g.add(b); }
  return shadow(g);
}
export function teddy(color = 0xc79a6e) {
  const g = new THREE.Group();
  const b = ico(0.15, 0, color, 0.02); b.position.y = 0.15; b.scale.y = 1.1; g.add(b);
  const h = ico(0.11, 0, color, 0.02); h.position.y = 0.36; g.add(h);
  for (const sx of [-0.08, 0.08]) { const e = ico(0.045, 0, color); e.position.set(sx, 0.45, 0); g.add(e); }
  const sn = ico(0.04, 0, 0xe8cfb0); sn.position.set(0, 0.34, 0.1); g.add(sn);
  return shadow(g);
}
export function duck(color = C.yellow) {
  const g = new THREE.Group();
  const b = ico(0.12, 0, color); b.scale.set(1.3, 0.8, 1); b.position.y = 0.08; g.add(b);
  const h = ico(0.07, 0, color); h.position.set(0.1, 0.18, 0); g.add(h);
  const bk = cone(0.03, 0.07, 4, 0xf08c3a); bk.rotation.z = -Math.PI / 2; bk.position.set(0.18, 0.17, 0); g.add(bk);
  return shadow(g);
}
export function cake(candles = 5) {
  const g = new THREE.Group();
  g.add(cyl(0.35, 0.35, 0.25, 12, C.pink));
  const t = cyl(0.36, 0.36, 0.05, 12, C.white); t.position.y = 0.25; g.add(t);
  const flames = [];
  for (let i = 0; i < candles; i++) {
    const a = (i / candles) * Math.PI * 2;
    const c = cyl(0.015, 0.015, 0.15, 4, [C.blue, C.yellow, C.green, C.red][i % 4]); c.position.set(Math.cos(a) * 0.2, 0.3, Math.sin(a) * 0.2); g.add(c);
    const f = sphere(0.025, 5, 4, 0xffd27a, { emissive: 0xffb040, emissiveIntensity: 3 }); f.position.set(Math.cos(a) * 0.2, 0.48, Math.sin(a) * 0.2); f.castShadow = false; g.add(f);
    flames.push(f);
  }
  g.userData.flames = flames;
  return shadow(g);
}
export function laptop(open = true, notif = true) {
  const g = new THREE.Group();
  g.add(box(0.5, 0.025, 0.35, 0x9aa0a8));
  const scr = new THREE.Group(); scr.position.set(0, 0.025, -0.17); g.add(scr);
  const lid = box(0.5, 0.34, 0.02, 0x9aa0a8); scr.add(lid);
  const disp = box(0.45, 0.29, 0.01, 0xcfe6ff, { emissive: 0xbfdcff, emissiveIntensity: 1.4 }); disp.position.set(0, 0.025, 0.012); scr.add(disp);
  scr.rotation.x = open ? -0.25 : -Math.PI / 2;
  return shadow(g);
}
export function phone() {
  const g = new THREE.Group();
  const b = box(0.12, 0.02, 0.22, 0x2b2b33); g.add(b);
  const s = box(0.1, 0.005, 0.19, 0xcfe6ff, { emissive: 0xbfdcff, emissiveIntensity: 1.5 }); s.position.y = 0.02; g.add(s);
  return g;
}
export function desk() {
  const g = table({ w: 1.4, d: 0.7, color: C.woodLight });
  return g;
}
export function fireplace() {
  const g = new THREE.Group();
  const b = box(1.6, 1.3, 0.5, 0xb8a89a); g.add(b);
  const hole = box(0.9, 0.7, 0.1, 0x2a2020); hole.position.set(0, 0.1, 0.22); g.add(hole);
  const mantel = box(1.8, 0.1, 0.6, C.woodDark); mantel.position.y = 1.3; g.add(mantel);
  const fire = new THREE.Group(); fire.position.set(0, 0.12, 0.3);
  for (let i = 0; i < 3; i++) { const f = cone(0.12 - i * 0.02, 0.35 - i * 0.05, 5, [0xff9a3a, 0xffc04a, 0xff7a2a][i], { emissive: [0xff7a20, 0xffb030, 0xff5a10][i], emissiveIntensity: 2.5 }); f.position.x = (i - 1) * 0.15; f.castShadow = false; fire.add(f); }
  const glow = glowSprite(0xff9a50, 2.2, 0.7); glow.position.y = 0.2; fire.add(glow);
  g.add(fire);
  g.userData.fire = fire;
  g.userData.update = (dt, t) => { fire.children.forEach((f, i) => { if (f.isMesh) f.scale.y = 0.85 + Math.sin(t * 9 + i * 2) * 0.15; }); };
  return shadow(g);
}
export function counter(w = 2.4) {
  const g = new THREE.Group();
  const b = box(w, 0.85, 0.6, C.white); g.add(b);
  const t = box(w + 0.05, 0.06, 0.65, 0xd8cfc4); t.position.y = 0.85; g.add(t);
  for (let i = 0; i < Math.floor(w / 0.6); i++) { const k = box(0.1, 0.03, 0.03, 0x999999); k.position.set(-w / 2 + 0.3 + i * 0.6, 0.65, 0.31); g.add(k); }
  return shadow(g);
}
export function stove() {
  const g = new THREE.Group();
  g.add(box(0.7, 0.85, 0.6, 0xe8e4de));
  const t = box(0.72, 0.04, 0.62, 0x444444); t.position.y = 0.85; g.add(t);
  const pan = cyl(0.17, 0.15, 0.05, 10, 0x333333); pan.position.set(0.12, 0.9, 0.05); g.add(pan);
  const h = box(0.25, 0.03, 0.04, 0x333333); h.position.set(0.4, 0.92, 0.05); g.add(h);
  return shadow(g);
}
export function fridge() {
  const g = new THREE.Group();
  g.add(box(0.75, 1.8, 0.65, 0xf2f0ea));
  const l = box(0.73, 0.02, 0.02, 0xbbbbbb); l.position.set(0, 1.15, 0.33); g.add(l);
  const h = box(0.03, 0.4, 0.04, 0xaaaaaa); h.position.set(0.3, 1.35, 0.34); g.add(h);
  return shadow(g);
}
export function plant(size = 1) {
  const g = new THREE.Group();
  g.add(cyl(0.16 * size, 0.12 * size, 0.28 * size, 7, C.terracotta));
  for (let i = 0; i < 5; i++) { const l = cone(0.07 * size, 0.5 * size, 3, C.green); l.position.y = 0.25 * size; l.rotation.z = (i - 2) * 0.35; l.rotation.y = i * 1.2; g.add(l); }
  return shadow(g);
}
export function frame(color = C.wood, img = null, w = 0.5, h = 0.4) {
  const g = new THREE.Group();
  g.add(boxC(w, h, 0.04, color));
  const inner = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.8, h * 0.8), img ? new THREE.MeshBasicMaterial({ map: img }) : mat(0xf0e6d8));
  inner.position.z = 0.025; g.add(inner);
  return g;
}
export function box3(w, h, d, color) { return box(w, h, d, color); }
export function cardboardBox(s = 0.6) {
  const g = new THREE.Group();
  g.add(box(s, s * 0.8, s, 0xc9a273));
  const t = box(s * 0.12, 0.01, s + 0.01, 0xd8c39a); t.position.y = s * 0.8; g.add(t);
  return shadow(g);
}
export function suitcase(color = C.teal) {
  const g = new THREE.Group();
  g.add(box(0.6, 0.45, 0.25, color));
  const h = box(0.2, 0.06, 0.04, 0x333333); h.position.y = 0.47; g.add(h);
  return shadow(g);
}
export function snowman(stage = 3) {
  const g = new THREE.Group();
  if (stage >= 1) { const b = ico(0.42, 1, C.snow, 0.03); b.position.y = 0.36; g.add(b); }
  if (stage >= 2) { const m = ico(0.3, 1, C.snow, 0.03); m.position.y = 0.95; g.add(m); }
  if (stage >= 3) { const h = ico(0.21, 1, C.snow, 0.02); h.position.y = 1.38; g.add(h); }
  if (stage >= 4) {
    const n = cone(0.04, 0.22, 5, 0xf08c3a); n.rotation.x = Math.PI / 2; n.position.set(0, 1.38, 0.2); g.add(n);
    for (const sx of [-0.07, 0.07]) { const e = sphere(0.025, 5, 4, 0x222222); e.position.set(sx, 1.45, 0.18); g.add(e); }
    for (let i = 0; i < 3; i++) { const b = sphere(0.03, 5, 4, 0x222222); b.position.set(0, 0.85 + i * 0.13, 0.29 - Math.abs(i - 1) * 0.02); g.add(b); }
  }
  if (stage >= 5) {
    const sc = torus(0.22, 0.05, 4, 10, C.red); sc.rotation.x = Math.PI / 2; sc.position.y = 1.2; g.add(sc);
    const hat = cyl(0.15, 0.15, 0.22, 8, 0x333333); hat.position.y = 1.55; g.add(hat);
    const brim = cyl(0.24, 0.24, 0.03, 10, 0x333333); brim.position.y = 1.55; g.add(brim);
    for (const sx of [-1, 1]) { const a = cyl(0.015, 0.02, 0.5, 3, C.trunk); a.rotation.z = sx * 1.1; a.position.set(sx * 0.28, 1.0, 0); g.add(a); }
  }
  return shadow(g);
}
export function giftBox(color = C.red, ribbon = C.yellow, s = 0.4) {
  const g = new THREE.Group();
  g.add(box(s, s * 0.8, s, color));
  const r1 = box(s + 0.01, s * 0.8 + 0.01, s * 0.15, ribbon); g.add(r1);
  const r2 = box(s * 0.15, s * 0.8 + 0.01, s + 0.01, ribbon); g.add(r2);
  return shadow(g);
}
export function arch(color = C.white, flowers = [C.pink, C.white, C.blossom]) {
  const g = new THREE.Group();
  for (const sx of [-1, 1]) { const p = cyl(0.06, 0.06, 2.2, 5, color); p.position.x = sx; g.add(p); }
  const top = torus(1, 0.06, 4, 12, color, Math.PI); top.position.y = 2.2; g.add(top);
  for (let i = 0; i < 14; i++) { const a = (i / 13) * Math.PI; const f = ico(0.12, 0, flowers[i % flowers.length]); f.position.set(Math.cos(a), 2.2 + Math.sin(a), 0.05); g.add(f); }
  return shadow(g);
}
export function school() {
  const g = house({ w: 7, d: 4, h: 3.2, wall: 0xe8b796, roof: 0x7a6a8a, door: 0x5a7a9a, chimney: false });
  const bell = box(0.8, 0.9, 0.8, 0xe8b796); bell.position.set(0, 5.1, 0); g.add(bell);
  const br = cone(0.65, 0.6, 4, 0x7a6a8a); br.position.y = 6; br.rotation.y = Math.PI / 4; g.add(br);
  const flagP = box(0.04, 1.8, 0.04, 0xdddddd); flagP.position.set(4.2, 0, 2.4); g.add(flagP);
  const fl = box(0.5, 0.3, 0.02, C.red); fl.position.set(4.45, 1.5, 2.4); g.add(fl);
  return shadow(g);
}
export function headstone() {
  const g = new THREE.Group();
  const s = box(0.6, 0.8, 0.18, 0xb9b4ae); g.add(s);
  const t = cyl(0.3, 0.3, 0.18, 8, 0xb9b4ae, null); t.rotation.x = Math.PI / 2; t.position.y = 0.8; t.position.z = -0.09; g.add(t);
  return shadow(g);
}
export function photoAlbum(color = 0x9a5a4a) {
  const g = new THREE.Group();
  g.add(box(0.5, 0.08, 0.38, color));
  const p = box(0.47, 0.06, 0.35, C.white); p.position.set(0.01, 0.01, 0); g.add(p);
  return shadow(g);
}
export function mug(color = C.white) {
  const g = new THREE.Group();
  g.add(cyl(0.06, 0.055, 0.12, 8, color));
  const h = torus(0.035, 0.012, 4, 8, color); h.position.set(0.065, 0.06, 0); g.add(h);
  return g;
}
export function wardrobe(color = C.woodLight) {
  const g = new THREE.Group();
  g.add(box(1.2, 2.0, 0.55, color));
  const l = box(0.01, 1.9, 0.01, shade(color, 0.7)); l.position.set(0, 0.05, 0.28); g.add(l);
  for (const sx of [-0.07, 0.07]) { const k = sphere(0.03, 5, 4, C.yellow); k.position.set(sx, 1.0, 0.3); g.add(k); }
  return shadow(g);
}
export function tent(color = C.yellow) {
  // blanket fort / tent
  const g = new THREE.Group();
  const shape = new THREE.Shape(); shape.moveTo(-0.8, 0); shape.lineTo(0.8, 0); shape.lineTo(0, 1.1); shape.lineTo(-0.8, 0);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 1.6, bevelEnabled: false }); geo.translate(0, 0, -0.8);
  const m = new THREE.Mesh(geo, mat(color)); m.castShadow = true; g.add(m);
  const door = box(0.5, 0.6, 0.02, 0x3a3030); door.position.set(0, 0, 0.81); g.add(door);
  return shadow(g);
}
export function sled(color = C.red) {
  const g = new THREE.Group();
  const b = box(0.5, 0.06, 1.0, color); b.position.y = 0.12; g.add(b);
  for (const sx of [-0.22, 0.22]) { const r = box(0.04, 0.12, 1.0, 0x555555); r.position.set(sx, 0, 0); g.add(r); }
  return shadow(g);
}
export function lemonadeStand() {
  const g = new THREE.Group();
  const t = box(1.4, 0.75, 0.6, C.woodLight); g.add(t);
  const sign = box(1.2, 0.35, 0.04, C.yellow); sign.position.set(0, 1.5, 0.25); g.add(sign);
  for (const sx of [-0.65, 0.65]) { const p = box(0.06, 1.7, 0.06, C.wood); p.position.set(sx, 0, 0.25); g.add(p); }
  const jug = cyl(0.12, 0.12, 0.3, 8, 0xfff3a0, { transparent: true, opacity: 0.85 }); jug.position.set(-0.3, 0.75, 0); g.add(jug);
  for (let i = 0; i < 3; i++) { const c = cyl(0.05, 0.04, 0.12, 6, C.white); c.position.set(0.1 + i * 0.15, 0.75, 0.05); g.add(c); }
  return shadow(g);
}
export function danceFloor(w = 5, d = 5) {
  const g = new THREE.Group();
  const n = 5;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const t = patch(w / n - 0.02, d / n - 0.02, (i + j) % 2 ? C.woodLight : C.wood, 0.03); t.position.set(-w / 2 + (i + 0.5) * w / n, 0.03, -d / 2 + (j + 0.5) * d / n); g.add(t); }
  return g;
}
export function heart(color = C.red, s = 0.3) {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.5); shape.bezierCurveTo(-0.9, 0.1, -0.5, 0.9, 0, 0.45); shape.bezierCurveTo(0.5, 0.9, 0.9, 0.1, 0, -0.5);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.2, bevelEnabled: false }); geo.center();
  const m = new THREE.Mesh(geo, mat(color, { emissive: color, emissiveIntensity: 0.6 })); m.scale.setScalar(s);
  return m;
}
export function paperBoat(color = C.white) {
  const g = new THREE.Group();
  const b = box(0.3, 0.06, 0.12, color); g.add(b);
  const s = cone(0.1, 0.18, 3, color); s.position.y = 0.06; g.add(s);
  return g;
}
export function drawingPaper(tex) {
  const g = new THREE.Group();
  const p = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.45), new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide }));
  g.add(p);
  return g;
}
