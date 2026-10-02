// The town: home, plus a strip of shops, the school, the pond and Miller's Hill.
// The yard from places.js sits on the west; the town is a second island joined
// to it on the east, so you can ride from your front gate to the edge of town.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, rng } from '../engine/game.js';
import { buildYard } from './places.js';

export const TOWN_BOUNDS = { minX: -13.6, maxX: 43.6, minZ: -10.6, maxZ: 10.4 };
export const HILL = { x: 37.5, z: -5.4, r: 5.2, h: 1.5 };
export const POND = { x: 38.2, z: 2.6, rx: 3.2, rz: 2.0 };
export const SPOTS = {
  cart: [28.9, 6.75], vendor: [28.9, 6.05], bench: [31.3, 6.5],
  pierEnd: [37.6, 3.0], pierStart: [37.6, 5.9],
  school: [22, -6.6], cement: [19.6, -3.2], hillTop: [HILL.x, HILL.z], hillBase: [35.0, -1.2],
};

// smooth hill profile, shared by the mesh and by anything that rides over it
export function hillHeight(x, z) {
  const d = Math.hypot(x - HILL.x, z - HILL.z) / HILL.r;
  return d >= 1 ? 0 : HILL.h * 0.5 * (1 + Math.cos(Math.PI * d));
}

function signTex(text, bg, fg) {
  return P.canvasTex(256, 64, (g, w, h) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.strokeStyle = fg; g.lineWidth = 4; g.strokeRect(6, 6, w - 12, h - 12);
    g.fillStyle = fg; g.font = 'bold 34px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, w / 2, h / 2 + 2);
  });
}

// a small-town shop front, facing +z
export function shopFront({ w = 3.6, d = 2.6, h = 2.7, wall = C.cream, trim = C.white, awning = C.red, sign = 'SHOP', signBg = '#fbf3e4', signFg = '#5a3a2a', lit = false } = {}) {
  const g = new THREE.Group();
  g.add(P.box(w, h, d, wall));
  const roof = P.box(w + 0.12, 0.12, d + 0.12, P.shade(wall, 0.8)); roof.position.y = h; g.add(roof);
  const par = P.box(w + 0.12, 0.45, 0.14, P.shade(wall, 0.92)); par.position.set(0, h, d / 2 - 0.02); g.add(par);
  const winCol = lit ? 0xffe0a0 : 0xcfe2ee;
  const wn = P.box(w * 0.5, 1.05, 0.06, winCol, lit ? { emissive: 0xffd28a, emissiveIntensity: 1.1 } : { emissive: 0x9fc0d8, emissiveIntensity: 0.25 }); wn.position.set(-w * 0.18, 0.55, d / 2 + 0.02); g.add(wn);
  const sill = P.box(w * 0.5 + 0.16, 0.08, 0.16, trim); sill.position.set(-w * 0.18, 0.5, d / 2 + 0.06); g.add(sill);
  const dr = P.box(0.72, 1.55, 0.07, P.shade(awning, 0.75)); dr.position.set(w * 0.3, 0, d / 2 + 0.02); g.add(dr);
  const kn = P.sphere(0.035, 5, 4, C.yellow); kn.position.set(w * 0.3 - 0.24, 0.8, d / 2 + 0.07); g.add(kn);
  // striped awning over the window
  const n = 6, aw = w * 0.6;
  for (let i = 0; i < n; i++) { const s = P.box(aw / n, 0.05, 0.75, i % 2 ? awning : C.white); s.position.set(-w * 0.18 - aw / 2 + aw / n * (i + 0.5), 1.85, d / 2 + 0.33); s.rotation.x = 0.32; g.add(s); }
  // painted sign
  const sg = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.78, w * 0.78 / 4), new THREE.MeshStandardMaterial({ map: signTex(sign, signBg, signFg), roughness: 0.9 }));
  sg.position.set(0, h - 0.33, d / 2 + 0.05); g.add(sg);
  // flower box
  const fb = P.box(w * 0.42, 0.18, 0.2, C.woodDark); fb.position.set(-w * 0.18, 0.28, d / 2 + 0.12); g.add(fb);
  for (let i = 0; i < 5; i++) { const f = P.ico(0.07, 0, [C.pink, C.red, C.yellow][i % 3]); f.position.set(-w * 0.18 - w * 0.17 + i * w * 0.085, 0.5, d / 2 + 0.12); g.add(f); }
  return P.shadow(g);
}

// the hill: a smooth low-poly mound you can ride over
function hillMesh() {
  const pts = [];
  const N = 9;
  for (let i = 0; i <= N; i++) { const d = 1 - i / N; pts.push(new THREE.Vector2(Math.max(0.001, d * HILL.r), HILL.h * 0.5 * (1 + Math.cos(Math.PI * d)))); }
  const geo = new THREE.LatheGeometry(pts, 16);
  P.jitter(geo, 0.06, 5, true);
  const m = new THREE.Mesh(geo, P.mat(0x9cc96c, { side: THREE.DoubleSide }));
  m.receiveShadow = true; m.castShadow = false;
  return m;
}

// the pond: an ellipse of gently moving water inside a muddy rim
function pondMesh() {
  const g = new THREE.Group();
  const rim = P.disc(1, 0xb8a27a, 20, 0.008); rim.scale.set(POND.rx + 0.45, 1, POND.rz + 0.45); g.add(rim);
  const geo = new THREE.CircleGeometry(1, 28, 0, Math.PI * 2); geo.rotateX(-Math.PI / 2);
  const wm = new THREE.Mesh(geo, P.umat(C.water, { transparent: true, opacity: 0.88, roughness: 0.25 }));
  wm.scale.set(POND.rx, 1, POND.rz); wm.position.y = 0.03; wm.receiveShadow = true; g.add(wm);
  const base = geo.attributes.position.array.slice();
  wm.userData.update = (dt, t) => {
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = base[i * 3], z = base[i * 3 + 2]; const edge = 1 - Math.min(1, Math.hypot(x, z)); p.setY(i, (Math.sin(x * 5 + t * 1.3) * 0.02 + Math.cos(z * 4 + t) * 0.02) * edge); }
    p.needsUpdate = true; geo.computeVertexNormals();
  };
  g.userData.water = wm;
  return g;
}

export function buildTown(ctx, { season = 'summer', treeStage = 1, lit = false } = {}) {
  const W = ctx.world;
  const refs = buildYard(ctx, { season, treeStage, lit, sandbox: false, flowers: true });
  // the yard's east fence would cut the town off — take it away
  for (const o of [...W.root.children]) if (Math.abs(o.position.x - 13.6) < 0.01 && Math.abs(o.rotation.y - Math.PI / 2) < 0.01) W.root.remove(o);
  const top = { summer: C.grass, autumn: C.grassAutumn, spring: C.grassSpring, winter: C.snow }[season];
  W.add(P.island({ w: 30, d: 22, top, edge: C.grassDark, seed: 9 }), 29, 0);
  W.add(P.road(30, 2.6), 29, 9.3);
  W.add(P.patch(30, 0.5, C.sidewalk, 0.012), 29, 7.8);
  W.add(P.patch(17, 2.3, C.sidewalk, 0.01), 22.4, 6.55);
  W.bounds = { ...TOWN_BOUNDS };

  // --- the shops ---
  const shops = [
    { x: 16.8, wall: 0xf2d6b8, awning: C.red, sign: 'BAKERY' },
    { x: 20.6, wall: 0xbfd4e6, awning: C.navy, sign: 'BOOKS' },
    { x: 24.4, wall: 0xd9e6c4, awning: C.green, sign: 'GROCER' },
    { x: 28.2, wall: 0xf0c8c8, awning: C.teal, sign: 'RECORDS' },
  ];
  for (const s of shops) W.add(shopFront({ ...s, lit }), s.x, 4.2, { collide: { w: 3.6, d: 2.6 } });
  refs.shops = shops.map((s) => [s.x, 5.9]);
  // --- the ice-cream cart and a bench ---
  const cart = P.iceCreamCart(); W.add(cart, SPOTS.cart[0], SPOTS.cart[1], { collide: { w: 1.3, d: 0.7 } }); refs.cart = cart;
  W.add(P.bench(), SPOTS.bench[0], SPOTS.bench[1], { collide: { w: 1.6, d: 0.45 } });
  // --- the school ---
  const sch = P.school(); W.add(sch, SPOTS.school[0], SPOTS.school[1], { collide: { w: 7.2, d: 4.2 } });
  W.addCollider({ x: SPOTS.school[0] + 4.2, z: SPOTS.school[1] + 2.4, r: 0.12 });
  W.add(P.patch(10, 3.4, 0xc9c2b6, 0.008), SPOTS.school[0], -2.9);
  // the freshly poured square of sidewalk
  const cem = P.patch(1.5, 1.5, 0xb4b0aa, 0.014); W.add(cem, SPOTS.cement[0], SPOTS.cement[1]); refs.cementPatch = cem;
  for (const [x, z, w, d] of [[0, -0.78, 1.6, 0.06], [0, 0.78, 1.6, 0.06], [-0.78, 0, 0.06, 1.6], [0.78, 0, 0.06, 1.6]]) W.add(P.patch(w, d, 0x8a857e, 0.016), SPOTS.cement[0] + x, SPOTS.cement[1] + z);
  for (const [x, z] of [[18.8, -1.9], [20.4, -1.9]]) { const cone = P.cone(0.12, 0.35, 6, 0xf08a3a); W.add(cone, x, z); }
  // bike rack by the school
  for (let i = 0; i < 4; i++) { const hoop = P.torus(0.25, 0.03, 4, 8, 0x8a8f9a, Math.PI); W.add(hoop, 25.2 + i * 0.4, -3.6, { ry: Math.PI / 2 }); }
  // --- Miller's Hill ---
  W.add(hillMesh(), HILL.x, HILL.z);
  const r = rng(17);
  for (let i = 0; i < 12; i++) { // a worn track down the slope
    const t = i / 11; const x = HILL.x + (35.2 - HILL.x) * t, z = HILL.z + (-1.6 - HILL.z) * t;
    const s = P.disc(0.22 + r.range(0, 0.1), 0xc9b48a, 6, 0.0); W.add(s, x + r.range(-0.15, 0.15), z, { y: hillHeight(x, z) + 0.03 });
  }
  W.add(P.tree({ kind: 'round', season, size: 0.85, seed: 61 }), 40.2, -7.9, { y: hillHeight(40.2, -7.9) - 0.05, collide: 0.25 });
  for (let i = 0; i < 18; i++) { const a = r.range(0, 6.28), d = r.range(0.2, 0.95) * HILL.r; const x = HILL.x + Math.cos(a) * d, z = HILL.z + Math.sin(a) * d; W.add(P.flower(r.pick([C.yellow, 0xffffff, C.pink]), i), x, z, { y: hillHeight(x, z) - 0.02 }); }
  // --- the pond and its pier ---
  const pond = pondMesh(); W.add(pond, POND.x, POND.z); refs.pond = pond;
  const pr = P.pier(3, 1.2); W.add(pr, SPOTS.pierEnd[0], 4.1, { y: -0.1 });
  W.addCollider({ minX: POND.x - POND.rx, maxX: SPOTS.pierEnd[0] - 0.55, minZ: POND.z - POND.rz + 0.2, maxZ: POND.z + POND.rz - 0.2 });
  W.addCollider({ minX: SPOTS.pierEnd[0] + 0.55, maxX: POND.x + POND.rx, minZ: POND.z - POND.rz + 0.2, maxZ: POND.z + POND.rz - 0.2 });
  W.addCollider({ minX: SPOTS.pierEnd[0] - 0.55, maxX: SPOTS.pierEnd[0] + 0.55, minZ: POND.z - POND.rz, maxZ: 2.55 });
  for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2 + 0.3; if (Math.abs(a - Math.PI / 2) < 0.4) continue; W.add(P.reeds(i), POND.x + Math.cos(a) * (POND.rx + 0.35), POND.z + Math.sin(a) * (POND.rz + 0.35)); }
  // --- street lamps along the sidewalk (unlit and lit twins, for dusk) ---
  refs.lamps = [];
  for (const x of [-9.0, -1.0, 7.5, 18.7, 26.3, 34.0, 41.0]) {
    const off = P.streetLamp(false), on = P.streetLamp(true); on.visible = false;
    W.add(off, x, 8.05, { collide: 0.1 }); W.add(on, x, 8.05);
    refs.lamps.push({ off, on, x });
  }
  // --- trees and greenery around town ---
  const trees = [[41.6, -1.6, 'round', 0.95], [42.8, 0.6, 'pine', 1.1], [16.0, -8.6, 'round', 1.0], [29.4, -8.9, 'pine', 1.1], [30.2, -2.4, 'round', 0.85], [15.6, 0.2, 'round', 0.8], [27.6, -5.0, 'birch', 0.8]];
  trees.forEach(([x, z, k, s], i) => W.add(P.tree({ kind: k, season, size: s, seed: 40 + i }), x, z, { collide: 0.3 * s }));
  const avoid = [[22.4, 4.4, 8.5], [22, -5.5, 4.6], [HILL.x, HILL.z, HILL.r + 0.3], [POND.x, POND.z, 3.8], [SPOTS.cement[0], SPOTS.cement[1], 1.2]];
  for (let i = 0; i < 70; i++) {
    const x = r.range(15, 43), z = r.range(-10, 7.2);
    if (avoid.some(([ax, az, ar]) => Math.hypot(x - ax, z - az) < ar)) continue;
    W.add(i % 3 ? P.grassTuft(season === 'autumn' ? 0xb8a050 : C.grassDark, i) : P.flower(r.pick([C.pink, C.yellow, 0xffffff, 0xb9a6e6]), i), x, z, { ry: r.range(0, 6.28) });
  }
  // everyone rides up and down the hill (characters follow its surface)
  const terrain = new THREE.Object3D();
  terrain.userData.update = () => {
    for (const c of W.characters) {
      const h = hillHeight(c.position.x, c.position.z);
      if (c.extraY !== undefined) { if (h > 0) { c.extraY = h; c._onHill = true; } else if (c._onHill) { c.extraY = 0; c._onHill = false; } }
      else if (c.legs) c.position.y = h;
    }
  };
  W.add(terrain, 0, 0);
  return refs;
}

// ---------------------------------------------------------------------
// bikes
// ---------------------------------------------------------------------
export function mountBike(c, bike, h = 0.72) {
  bike.parent?.remove(bike);
  bike.rotation.order = 'XYZ';
  bike.position.set(0, 0, 0.12); bike.rotation.set(0, -Math.PI / 2, 0);
  c.root.add(bike);
  c.onBike = bike;
  c.setPose('bike', { h });
}
// lean the bike on its stand beside the rider, and stand them up
export function parkBike(c, side = 0.6) {
  const bike = c.onBike; if (!bike) return null;
  c.root.remove(bike);
  const h = c.heading;
  bike.rotation.order = 'YXZ';
  bike.position.set(c.position.x + Math.cos(h) * side, 0, c.position.z - Math.sin(h) * side);
  bike.rotation.set(0.18, h - Math.PI / 2, 0);
  G.world.root.add(bike);
  c.onBike = null;
  c.setPose('idle');
  return bike;
}
