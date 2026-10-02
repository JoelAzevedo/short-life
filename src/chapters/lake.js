// The lake: an autumn lantern festival on a floating island with a real lake
// cut into it — a pier, a rowboat, market stalls, string lights, a dance floor.
// Used by Chapter IV ("Together").
import * as THREE from 'three';
import { G, rng } from '../engine/game.js';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { person } from './places.js';

// lake ellipse (world units). Camera looks from +x+z, so the lake sits up and to the left.
export const LAKE = { cx: -7.5, cz: -5.0, rx: 5.5, rz: 4.0 };
export function inLake(x, z, pad = 0) {
  const dx = (x - LAKE.cx) / (LAKE.rx + pad), dz = (z - LAKE.cz) / (LAKE.rz + pad);
  return dx * dx + dz * dz < 1;
}

// a painted wooden sign with a word on it
export function sign(text, { bg = '#f4e8d6', fg = '#5a3b2a', w = 1.4, h = 0.36 } = {}) {
  const tex = P.canvasTex(256, 64, (c, W, H) => {
    c.fillStyle = bg; c.fillRect(0, 0, W, H);
    c.strokeStyle = fg; c.lineWidth = 4; c.strokeRect(4, 4, W - 8, H - 8);
    c.fillStyle = fg; c.font = 'bold 34px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(text, W / 2, H / 2 + 2);
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: tex, roughness: 1, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.25 }));
  return m;
}

// random festival-goer looks
const HAIRS = [0x2a1e1a, 0x5a3b2a, 0x8b4a2b, 0xc89a5a, 0x1e1612, 0x9a5a3a, 0x3a2a22, 0xd8d4cf];
const STYLES = ['short', 'long', 'bob', 'curly', 'ponytail', 'bun', 'short'];
const SHIRTS = [0xc9603e, 0xe3a03b, 0x6f7d8c, 0x8a6aa8, 0x4f8f8a, 0xd98aa0, 0x7fae8a, 0xe8d4bc, 0xb8523a, 0x5a7ab8, 0xf0b84a];
const PANTS = [0x3d4f7a, 0x4a4a58, 0x5a4a3a, 0x2e2e3a, 0x6a5a4a, 0x46506e];
export function randomLook(r, age = 30) {
  const look = {
    skin: r.pick(C.skin), hair: age > 62 ? 0xd8d4cf : r.pick(HAIRS), hairStyle: age > 62 && r() < 0.4 ? 'bald' : r.pick(STYLES),
    shirt: r.pick(SHIRTS), pants: r.pick(PANTS), dress: r() < 0.25, glasses: r() < 0.18, beard: age > 20 && r() < 0.15,
  };
  if (r() < 0.3) look.scarf = r.pick([0xd9584a, 0xf3d36b, 0x6fb3d9, 0xf2f2f2, 0x7fae8a]);
  if (r() < 0.12) look.hat = r.pick([0xd9584a, 0x3d4f7a, 0xe8d4bc]);
  return look;
}
export function stranger(r, x, z, heading = 0, age = null, name = '') {
  const a = age ?? r.pick([8, 11, 17, 21, 24, 28, 33, 38, 45, 52, 60, 68, 74]);
  return person(randomLook(r, a), a, name, x, z, heading);
}
// an NPC that strolls slowly around a loop of points, forever (until the world changes)
export async function stroll(c, pts, { speed = 0.8, pause = [0.5, 3] } = {}) {
  const W = G.world; let i = 0; const r = rng(Math.floor(Math.random() * 1e6));
  c.walkSpeed = speed;
  while (G.world === W && !c._stopStroll) {
    await c.walkTo(pts[i][0], pts[i][1]);
    if (G.world !== W || c._stopStroll) return;
    await new Promise((res) => { let t = 0; const lim = r.range(pause[0], pause[1]); const f = (dt) => { t += dt; if (t >= lim) { G.updaters.delete(f); res(); } }; G.updaters.add(f); });
    i = (i + 1) % pts.length;
  }
}

// a little guitar for the busker
export function guitar() {
  const g = new THREE.Group();
  const body = P.ico(0.17, 0, 0xb5733e); body.scale.set(1, 1.25, 0.45); g.add(body);
  const hole = P.cyl(0.05, 0.05, 0.01, 8, 0x2a1a10); hole.rotation.x = Math.PI / 2; hole.position.z = 0.08; g.add(hole);
  const neck = P.box(0.05, 0.42, 0.03, 0x5a3b2a); neck.position.y = 0.12; g.add(neck);
  return g;
}

// the ugly plush prize: a lumpy green frog that has been told bad news
export function uglyPlush() {
  const g = new THREE.Group();
  const col = 0x9cc25a;
  const b = P.ico(0.15, 0, col, 0.04, 7); b.position.y = 0.14; b.scale.set(1.2, 0.9, 1); g.add(b);
  const h = P.ico(0.11, 0, col, 0.03, 9); h.position.y = 0.3; g.add(h);
  for (const [sx, s] of [[-0.06, 0.05], [0.07, 0.035]]) { const e = P.sphere(s, 6, 4, 0xffffff); e.position.set(sx, 0.38, 0.06); g.add(e); const p = P.sphere(s * 0.45, 5, 4, 0x222222); p.position.set(sx + 0.01, 0.38, 0.06 + s * 0.8); g.add(p); }
  const mouth = P.box(0.08, 0.012, 0.01, 0x6a3a3a); mouth.position.set(0, 0.25, 0.1); mouth.rotation.z = 0.25; g.add(mouth);
  const bow = P.box(0.09, 0.04, 0.03, 0xe58fb0); bow.position.set(0.04, 0.42, 0); bow.rotation.z = -0.4; g.add(bow);
  return g;
}

// attach a prop to a character's hand (hand meshes are scaled; compensate)
export function holdInHand(c, obj, side = 'R', off = [0, -0.05, 0], s = 1) {
  const e = (side === 'R' ? c.armR : c.armL).end;
  const k = 1 / e.scale.x;
  obj.scale.setScalar(s * k);
  obj.position.set(off[0] * k, off[1] * k, off[2] * k);
  e.add(obj);
  return obj;
}

// ---------------------------------------------------------------------
export function buildLake(ctx, { seed = 6 } = {}) {
  const W = ctx.world;
  const IW = 28, ID = 22;
  const refs = {};
  const r = rng(seed);
  const grass = 0xa9b866;
  const isl = P.island({ w: IW, d: ID, top: grass, edge: 0x8a9a52, seed: 7 });
  // replace the flat top with one that has the lake cut out of it
  isl.userData.ground.visible = false;
  const shape = new THREE.Shape();
  shape.moveTo(-IW / 2, -ID / 2); shape.lineTo(IW / 2, -ID / 2); shape.lineTo(IW / 2, ID / 2); shape.lineTo(-IW / 2, ID / 2); shape.lineTo(-IW / 2, -ID / 2);
  const hole = new THREE.Path();
  const N = 22; const shore = [];
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    const f = 1 + r.range(-0.04, 0.06);
    const x = LAKE.cx + Math.cos(a) * LAKE.rx * f, z = LAKE.cz + Math.sin(a) * LAKE.rz * f;
    shore.push([x, z]);
    if (i === 0) hole.moveTo(x, -z); else hole.lineTo(x, -z);
  }
  hole.lineTo(shore[0][0], -shore[0][1]);
  shape.holes.push(hole);
  const tg = new THREE.ExtrudeGeometry(shape, { depth: 0.35, bevelEnabled: false });
  tg.rotateX(-Math.PI / 2);
  const top = new THREE.Mesh(tg, P.mat(grass)); top.position.y = -0.35; top.receiveShadow = true;
  isl.add(top);
  W.add(isl, 0, 0);
  refs.island = isl;
  // lake bed and water
  const bed = P.patch(LAKE.rx * 2.4, LAKE.rz * 2.4, 0x2c4656, -0.33); W.add(bed, LAKE.cx, LAKE.cz); bed.position.y = -0.33;
  const water = P.water(LAKE.rx * 2.3, LAKE.rz * 2.3, 0x4f7fae, 0.82); W.add(water, LAKE.cx, LAKE.cz, { y: -0.1 });
  refs.water = water;
  // keep people out of the water (circles inside the ellipse)
  for (let x = LAKE.cx - LAKE.rx; x <= LAKE.cx + LAKE.rx; x += 0.9) {
    for (let z = LAKE.cz - LAKE.rz; z <= LAKE.cz + LAKE.rz; z += 0.9) {
      const dx = (x - LAKE.cx) / (LAKE.rx - 0.75), dz = (z - LAKE.cz) / (LAKE.rz - 0.75);
      if (dx * dx + dz * dz <= 1) W.addCollider({ x, z, r: 0.72, lake: true });
    }
  }
  // reeds and stones around the shore (but not on the near side where people walk)
  shore.forEach(([x, z], i) => {
    const ox = (x - LAKE.cx) * 0.06, oz = (z - LAKE.cz) * 0.06;
    if (z > -1.8 && x > -9 && x < -3.5) return; // the pier side stays open
    if (i % 2 === 0) W.add(P.reeds(i + 3), x + ox, z + oz);
    else if (i % 3 === 0) W.add(P.rock(r.range(0.5, 0.9), i, C.rock), x + ox * 2, z + oz * 2);
  });

  // ---- pier and rowboat ----
  const PX = -5.6;
  const pier = P.pier(4.6, 1.1); W.add(pier, PX, -2.5);
  W.addCollider({ minX: PX - 0.55, maxX: PX + 0.55, minZ: -1.6, maxZ: -0.2 });
  refs.pierBase = [PX, 0.0]; refs.pierEnd = [PX, -4.3]; refs.pierX = PX; refs.pierY = 0.17;
  const boat = P.rowboat(0xf2ece0); W.add(boat, PX + 1.15, -3.9, { ry: Math.PI / 2, y: -0.22 });
  // oars
  for (const s of [-1, 1]) { const o = P.box(0.05, 0.04, 1.1, C.woodDark); o.position.set(0.1, 0.36, s * 0.45); o.rotation.y = s * 0.4; boat.add(o); }
  refs.boat = boat; refs.boatHome = [PX + 1.15, -3.9];
  boat.userData.bob = 0;
  boat.userData.update = (dt, t) => { boat.position.y = -0.22 + Math.sin(t * 1.3) * 0.03; boat.rotation.z = Math.sin(t * 0.9) * 0.03; };
  W.track(boat);
  // a mooring post
  W.add(P.cyl(0.08, 0.08, 0.7, 5, C.woodDark), PX + 0.65, -4.7, { y: -0.3 });
  // floating candle lanterns on the water
  refs.floaters = [];
  for (let i = 0; i < 9; i++) {
    const a = r.range(0, Math.PI * 2), k = r.range(0.25, 0.75);
    const x = LAKE.cx + Math.cos(a) * LAKE.rx * k, z = LAKE.cz + Math.sin(a) * LAKE.rz * k;
    const l = P.lantern([0xffb36b, 0xffd27a, 0xff9a7a][i % 3], true); l.scale.setScalar(0.6);
    const ph = r.range(0, 6);
    l.userData.update = (dt, t) => { l.position.y = -0.1 + Math.sin(t * 1.4 + ph) * 0.03; l.position.x += Math.sin(t * 0.1 + ph) * 0.0015; };
    W.add(l, x, z, { y: -0.1 });
    refs.floaters.push(l);
  }

  // ---- market stalls along the promenade ----
  const SZ = 2.6;
  const stalls = {
    lantern: { x: -1.6, color: 0x3d6fae, stripe: 0xf4e8d6, word: 'LANTERNS' },
    food: { x: 1.7, color: C.red, stripe: C.white, word: 'CHESTNUTS' },
    sweets: { x: 4.9, color: 0xe58fb0, stripe: 0xfbf8f2, word: 'TOFFEE' },
    ring: { x: 8.6, color: 0x5fa38a, stripe: 0xf3d36b, word: 'RING TOSS' },
  };
  for (const [k, s] of Object.entries(stalls)) {
    const st = P.stall({ color: s.color, stripe: s.stripe, w: 2.2, d: 1.3 });
    W.add(st, s.x, SZ, { collide: { w: 2.3, d: 1.2 } });
    const sg = sign(s.word, { w: 1.5, h: 0.32 }); sg.position.set(s.x, 1.55, SZ + 0.68); W.root.add(sg);
    s.pos = [s.x, SZ]; s.front = [s.x, SZ + 1.55];
    // a warm bulb under each awning
    const bulb = P.glowSprite(0xffd59a, 2.0, 0.55); bulb.position.set(s.x, 1.95, SZ + 0.2); W.root.add(bulb);
  }
  refs.stalls = stalls;
  // lantern stall: lanterns hanging and on the counter
  const lcols = [0xffb36b, 0xff8a7a, 0xffd27a, 0x8ab8ff, 0xf2a3d8];
  refs.blueLantern = null;
  for (let i = 0; i < 7; i++) {
    const c = lcols[i % lcols.length];
    const l = P.lantern(c, true); l.scale.setScalar(0.75);
    W.add(l, -2.55 + i * 0.32, SZ + 0.55, { y: 1.5 + (i % 2) * 0.12 });
  }
  for (let i = 0; i < 3; i++) { const l = P.lantern([0xffd27a, 0xff8a7a, 0x8ab8ff][i], i < 2); l.scale.setScalar(0.65); W.add(l, -2.2 + i * 0.55, SZ + 0.35, { y: 0.9 }); if (i === 2) refs.blueLantern = l; }
  // chestnut roaster
  const roaster = P.cyl(0.28, 0.24, 0.2, 8, 0x333338); W.add(roaster, 1.3, SZ + 0.35, { y: 0.9 });
  const coals = P.cyl(0.24, 0.24, 0.02, 8, 0xff7a30, { emissive: 0xff6a20, emissiveIntensity: 2.4 }); W.add(coals, 1.3, SZ + 0.35, { y: 1.1 });
  for (let i = 0; i < 5; i++) { const n = P.sphere(0.05, 5, 4, 0x7a4a2a); W.add(n, 1.2 + (i % 3) * 0.1, SZ + 0.3 + Math.floor(i / 3) * 0.1, { y: 1.12 }); }
  const cones = [0xf4e8d6, 0xe8d4bc]; for (let i = 0; i < 4; i++) W.add(P.cone(0.06, 0.18, 5, cones[i % 2]), 2.0 + i * 0.14, SZ + 0.38, { y: 0.9 });
  // toffee apples
  for (let i = 0; i < 6; i++) { const a = P.sphere(0.07, 6, 4, 0xb8302a); W.add(a, 4.4 + i * 0.2, SZ + 0.35, { y: 0.97 }); W.add(P.box(0.01, 0.12, 0.01, C.woodLight), 4.4 + i * 0.2, SZ + 0.35, { y: 1.02 }); }
  // ring toss: a board of pegs and a row of plush prizes
  const board = P.box(1.9, 1.0, 0.08, 0xf3d36b); W.add(board, 8.6, SZ - 0.25, { y: 0.9 });
  refs.pegs = [];
  for (let i = 0; i < 6; i++) { const pg = P.cyl(0.025, 0.025, 0.25, 5, C.woodDark); pg.rotation.x = Math.PI / 2; const px = 8.0 + (i % 3) * 0.6, py = 1.15 + Math.floor(i / 3) * 0.4; W.add(pg, px, SZ - 0.15, { y: py }); refs.pegs.push(new THREE.Vector3(px, py, SZ - 0.05)); }
  const prizes = [0xe58fb0, 0x8ab8ff, 0xf3d36b, 0xc79a6e];
  prizes.forEach((c, i) => W.add(P.teddy(c), 7.75 + i * 0.42, SZ - 0.2, { y: 1.95 }));
  refs.plushSpot = new THREE.Vector3(9.45, 1.95, SZ - 0.2);
  const plush = uglyPlush(); W.add(plush, 9.45, SZ - 0.2, { y: 1.9 }); refs.plush = plush;

  // ---- dance floor with a little bandstand ----
  const DX = 5.2, DZ = -3.6;
  W.add(P.danceFloor(5, 5), DX, DZ);
  refs.danceFloor = [DX, DZ];
  const poles = [[DX, DZ - 2.75], [DX + 2.75, DZ], [DX, DZ + 2.75], [DX - 2.75, DZ]];
  poles.forEach(([x, z]) => W.add(P.cyl(0.05, 0.06, 3.0, 5, C.woodDark), x, z, { collide: 0.12 }));
  const H = 2.95;
  W.root.add(P.stringLights([[poles[0][0], H, poles[0][1]], [poles[1][0], H, poles[1][1]], [poles[2][0], H, poles[2][1]], [poles[3][0], H, poles[3][1]], [poles[0][0], H, poles[0][1]]], undefined, 0.35));
  W.root.add(P.stringLights([[poles[0][0], H, poles[0][1]], [DX, H + 0.2, DZ], [poles[2][0], H, poles[2][1]]], [0xffc4a0, 0xfff1c8], 0.25));
  W.root.add(P.stringLights([[poles[1][0], H, poles[1][1]], [DX, H + 0.2, DZ], [poles[3][0], H, poles[3][1]]], [0xffe3a3, 0xffc4a0], 0.25));
  // string lights from the dance floor over the promenade to the stalls
  W.root.add(P.stringLights([[poles[2][0], H, poles[2][1]], [-1.6, 2.15, SZ - 0.6]], undefined, 0.6));
  W.root.add(P.stringLights([[poles[1][0], H, poles[1][1]], [8.6, 2.15, SZ - 0.6]], undefined, 0.5));
  const stage = P.box(2.6, 0.3, 1.6, C.woodDark); W.add(stage, DX + 4.3, DZ - 0.3, { collide: { w: 2.6, d: 1.6 } });
  refs.stage = [DX + 4.3, DZ - 0.3];
  // a warm pool of light on the floor and at the stalls
  const pl1 = new THREE.PointLight(0xffc78a, 0, 9, 1.4); pl1.position.set(DX, 2.6, DZ); W.root.add(pl1);
  const pl2 = new THREE.PointLight(0xffc78a, 0, 9, 1.4); pl2.position.set(1.5, 2.2, SZ + 1.6); W.root.add(pl2);
  const pl3 = new THREE.PointLight(0xffb070, 0, 7, 1.4); pl3.position.set(-5.6, 1.6, -0.6); W.root.add(pl3);
  refs.lights = [pl1, pl2, pl3];

  // ---- lantern posts along the promenade and the shore ----
  const posts = [[-3.6, 5.6], [0, 6.2], [3.4, 5.8], [6.0, 6.7], [10.4, 5.6], [-4.4, 1.8], [-8.6, 1.6], [-12.0, -0.2], [-0.9, -0.5], [11.4, 0.4]];
  posts.forEach(([x, z], i) => {
    W.add(P.cyl(0.04, 0.05, 1.5, 5, 0x4a4040), x, z, { collide: 0.1 });
    const l = P.lantern(lcols[i % lcols.length], true); W.add(l, x, z, { y: 1.5 });
  });
  // a bench by the water for quiet moments
  W.add(P.bench(), 0.2, -2.6, { ry: -Math.PI / 2 - 0.5, collide: { w: 1.4, d: 0.6 } });
  refs.bench = [0.2, -2.6];
  // the busker's crate by the path to the pier
  W.add(P.box(0.5, 0.4, 0.4, C.wood), -3.4, 0.9 + 1.0, { collide: 0.3 });
  refs.busker = [-3.4, 1.9];
  // the shore walk home (west, past the pier)
  refs.shorePath = [[-2.4, 0.9], [-5.6, 0.9], [-8.8, 0.5], [-11.4, -0.6], [-12.4, -2.2]];
  refs.releaseSpot = [-12.4, -2.2];

  // ---- trees, autumn, around the edges ----
  const trees = [[-12.5, 7.5, 'round', 1.1], [-9.5, 8.6, 'pine', 1.0], [12.2, -8.8, 'round', 1.2], [12.6, -2.2, 'pine', 1.1], [12.4, 8.6, 'round', 1.0], [0.6, -9.6, 'round', 1.1], [-2.0, -9.0, 'pine', 0.9], [3.8, 8.9, 'round', 0.9], [-13.0, -9.6, 'pine', 1.0], [8.6, -9.2, 'round', 0.95]];
  trees.forEach(([x, z, k, s], i) => W.add(P.tree({ kind: k, season: 'autumn', size: s, seed: 40 + i }), x, z, { collide: 0.3 * s }));
  for (let i = 0; i < 60; i++) {
    const x = r.range(-13.5, 13.5), z = r.range(-10.5, 10.5);
    if (inLake(x, z, 0.6) || (z > 1.4 && z < 3.8 && x > -3 && x < 10) || (Math.abs(x - DX) < 2.8 && Math.abs(z - DZ) < 2.8)) continue;
    W.add(i % 3 ? P.grassTuft(0x8a9a52, i) : P.flower(r.pick([0xe3a03b, 0xc9603e, 0xf3d36b]), i), x, z);
  }
  // fallen leaves on the ground
  for (let i = 0; i < 70; i++) {
    const x = r.range(-13, 13), z = r.range(-10, 10);
    if (inLake(x, z, 0.3)) continue;
    W.add(P.patch(0.14, 0.1, r.pick([C.leafAutumn, C.leafAutumn2, C.leafAutumn3]), 0.012), x, z, { ry: r.range(0, 6), y: 0.012 });
  }
  W.bounds = { minX: -13.6, maxX: 13.6, minZ: -10.6, maxZ: 10.4 };
  return refs;
}
