// Shared locations. The same rooms and the same garden come back across a
// lifetime — older, repainted, emptier, fuller. That continuity is the point.
import * as THREE from 'three';
import { G, rng } from '../engine/game.js';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { Character, Dog, LOOKS, youLook } from '../engine/character.js';

export function makePlayer(age, x = 0, z = 0, heading = 0, look = null) {
  const c = new Character({ ...(look ?? youLook(age)), age, name: 'You' });
  c.place(x, z, heading);
  G.player = c;
  return c;
}
export function person(look, age, name, x = 0, z = 0, heading = 0) {
  const c = new Character({ ...look, age, name });
  c.place(x, z, heading);
  return c;
}
export function dog(age = 2, x = 0, z = 0) { const d = new Dog({ age }); d.name = 'Biscuit'; d.place(x, z); return d; }

function scatter(world, n, area, fn, seed = 1, avoid = []) {
  const r = rng(seed);
  for (let i = 0; i < n; i++) {
    const x = r.range(area[0], area[1]), z = r.range(area[2], area[3]);
    if (avoid.some(([ax, az, ar]) => Math.hypot(x - ax, z - az) < ar)) continue;
    world.add(fn(r, i), x, z, { ry: r.range(0, 6.28) });
  }
}

// ---------------------------------------------------------------------
// The nursery. Your room as a baby; your child's room thirty years later.
// ---------------------------------------------------------------------
export function buildNursery(ctx, { era = 'past', night = false, w = 8, d = 7 } = {}) {
  const W = ctx.world;
  const walls = { past: [0xf3d3cc, 0xf6e6d6], present: [0xd5e8dc, 0xf3eadc], kid: [0xcfdcf0, 0xf2ead8], teen: [0xb8c4d8, 0xe8e0d0], empty: [0xd8d4ce, 0xe6e2dc] }[era];
  const glow = night ? 0x7d8fd8 : 0xffe2c4;
  const room = P.roomShell({ w, d, h: 3.4, wall: walls[0], wall2: walls[1], floor: C.woodLight, windows: [{ wall: 'back', at: 1.2, y: 1.1, w: 1.6, h: 1.4, glow, roomW: w, roomD: d }] });
  W.add(room, 0, 0);
  // the door on the left wall
  const door = P.box(0.08, 2.1, 1.0, era === 'past' ? 0xf8f2ea : 0xece4d8); W.add(door, -w / 2 + 0.05, 0, { y: 0 }); door.position.z = 1.8;
  const knob = P.sphere(0.05, 6, 4, C.yellow); W.add(knob, -w / 2 + 0.12, 2.15, { y: 1.0 });
  // wallpaper dots on the back wall (past) / stars (present)
  const r = rng(era === 'past' ? 3 : 9);
  for (let i = 0; i < 26; i++) {
    const dot = P.boxC(0.08, 0.08, 0.02, era === 'past' ? 0xf8e8e2 : era === 'present' ? 0xf2f6ee : 0xffffff);
    W.add(dot, r.range(-w / 2 + 0.4, w / 2 - 0.4), -d / 2 + 0.02, { y: r.range(1.6, 3.0) });
    if (Math.abs(dot.position.x - 1.2) < 1.1 && dot.position.y < 2.7) dot.visible = false;
  }
  const refs = { room, door, doorPos: [-w / 2 + 0.6, 1.8] };
  // sunbeam (morning) or moonbeam (night)
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 1.6), new THREE.MeshBasicMaterial({ color: night ? 0x9fb0ff : 0xfff0c8, transparent: true, opacity: night ? 0.18 : 0.42, depthWrite: false, blending: THREE.AdditiveBlending }));
  beam.rotation.x = -Math.PI / 2; beam.rotation.z = 0.35; W.add(beam, 1.4, -1.6, { y: 0.02 });
  refs.beam = beam;
  // a cone of light from the window
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 1.0, 3.0, 4, 1, true), new THREE.MeshBasicMaterial({ color: night ? 0x9fb0ff : 0xffefcf, transparent: true, opacity: night ? 0.05 : 0.09, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, fog: false }));
  shaft.rotation.x = 0.55; shaft.rotation.y = Math.PI / 4; W.add(shaft, 1.3, -2.4, { y: 1.3 });
  refs.shaft = shaft;

  if (era === 'past' || era === 'present') {
    const crib = P.crib(); W.add(crib, -2.5, -2.55, { collide: { w: 1.6, d: 0.95 } }); refs.crib = crib;
    const mob = P.mobile(); W.add(mob, -2.5, -2.55, { y: 0.55 }); refs.mobile = mob;
  } else {
    const bed = P.bed({ color: era === 'teen' ? 0x5a6a8a : era === 'empty' ? 0xc8c0b8 : 0xf2a3b5 }); W.add(bed, -2.9, -1.8, { collide: { w: 1.2, d: 2.1 } }); refs.bed = bed;
    const mob = P.mobile(); W.add(mob, -3.6, -3.1, { y: 1.6, s: 0.8 }); refs.mobile = mob; mob.userData.speed = 0.05;
  }
  const chair = P.rockingChair(); W.add(chair, 2.4, -2.2, { ry: -0.7, collide: 0.5 }); refs.chair = chair;
  const rug = P.rug(2.6, 2.6, era === 'past' ? 0xf3b9b9 : era === 'present' ? 0xb8d8c8 : 0xc0cce8, C.cream, true); W.add(rug, 0.3, 0.6);
  const shelf = P.bookshelf(1.3, 1.3); W.add(shelf, -0.6, -3.25, { collide: { w: 1.3, d: 0.4 } });
  const ted = P.teddy(); W.add(ted, -0.9, -3.2, { y: 1.3 }); refs.teddy = ted;
  const lampO = P.lamp({ lit: night || era === 'present', h: 1.6 }); W.add(lampO, 3.3, -3.0, { collide: 0.25 }); refs.lamp = lampO;
  if (night) { const pl = new THREE.PointLight(0xffc98a, 6, 7, 1.6); pl.position.set(3.2, 1.7, -2.8); W.root.add(pl); refs.lampLight = pl; }
  const plantO = P.plant(1.2); W.add(plantO, 3.4, 2.6, { collide: 0.3 });
  const frameO = P.frame(C.wood); W.add(frameO, -w / 2 + 0.06, -1.0, { y: 1.9, ry: Math.PI / 2 });
  refs.frame = frameO;
  return refs;
}

// ---------------------------------------------------------------------
// Home: the house, the garden, the tree, the street. Every chapter returns here.
// ---------------------------------------------------------------------
export function buildYard(ctx, { season = 'summer', treeStage = 1, swing = false, lit = false, picnic = false, sandbox = false, theoHouse = true, flowers = true, cherry = true, lemonade = false, snowman = 0, sign = null } = {}) {
  const W = ctx.world;
  const top = { spring: C.grassSpring, summer: C.grass, autumn: C.grassAutumn, winter: C.snow }[season];
  const edge = season === 'winter' ? C.snowShade : C.grassDark;
  const isl = P.island({ w: 28, d: 22, top, edge, seed: 4 });
  W.add(isl, 0, 0);
  const refs = { season };
  // street
  const road = P.road(28, 2.6); W.add(road, 0, 9.3);
  const curb = P.patch(28, 0.5, season === 'winter' ? 0xe6eaf0 : C.sidewalk, 0.012); W.add(curb, 0, 7.8);
  // house
  const house = P.house({ w: 6, d: 4.6, h: 2.9, wall: 0xf4e3cf, roof: season === 'winter' ? 0xe9eef4 : C.terracotta, door: 0x5a7aa8, porch: true, lit });
  W.add(house, -5, -6, { collide: { w: 6.6, d: 5.0 } });
  W.addCollider({ minX: -7.6, maxX: -2.4, minZ: -3.6, maxZ: -2.0, porch: true, disabled: true }); // porch is walkable
  refs.house = house; refs.door = [-5, -3.2]; refs.porch = [-5, -2.4];
  if (season === 'winter') { const sr = P.box(6.8, 0.2, 5.4, C.snow); W.add(sr, -5, -6, { y: 2.92 }); sr.visible = false; }
  // path from porch to gate
  for (let i = 0; i < 9; i++) { const s = P.disc(0.38, season === 'winter' ? 0xd6dce6 : C.stone, 7, 0.02); W.add(s, -5 + (i % 2 ? 0.15 : -0.15), -1.6 + i * 1.05); }
  // fences with a gate gap at x=-5
  const fcol = C.white;
  const f1 = P.fence(7.6, fcol); W.add(f1, -9.6, 7.0); W.addCollider({ minX: -13.4, maxX: -5.9, minZ: 6.85, maxZ: 7.15 });
  const f2 = P.fence(17.6, fcol); W.add(f2, 4.9, 7.0); W.addCollider({ minX: -4.1, maxX: 13.7, minZ: 6.85, maxZ: 7.15 });
  const f3 = P.fence(9, fcol); W.add(f3, 13.6, 2.4, { ry: Math.PI / 2 });
  // family tree
  const tree = P.familyTree({ stage: treeStage, season, swing });
  W.add(tree, 4, -2.2, { collide: treeStage === 0 ? 0.15 : 0.25 + treeStage * 0.12 });
  refs.tree = tree; refs.treePos = [4, -2.2];
  // cherry tree at the side
  if (cherry) { const ct = P.tree({ kind: 'blossom', season, size: 1.35, seed: 5 }); W.add(ct, -10.5, -0.5, { collide: 0.35 }); refs.cherry = ct; refs.cherryPos = [-10.5, -0.5]; }
  // other trees around the edges
  const trees = [[-12, -8, 'round', 1.2], [11.5, -8.5, 'pine', 1.3], [12, -3, 'round', 1.1], [-12.5, 4.5, 'pine', 1.0], [9.5, 4.8, 'round', 0.9]];
  trees.forEach(([x, z, k, s], i) => W.add(P.tree({ kind: k, season, size: s, seed: 20 + i }), x, z, { collide: 0.3 * s }));
  // bushes along the house
  for (const x of [-7.6, -6.6, -3.4, -2.4]) W.add(P.bush(season === 'autumn' ? 0xb0a050 : season === 'winter' ? 0xe8ecf2 : 0x78b456, 0.9, x * 3), x, -3.2, { collide: 0.35 });
  // flower bed
  if (flowers && season !== 'winter') {
    const bed = P.patch(3.2, 1.1, C.dirt, 0.015); W.add(bed, -9, -3.4);
    const cols = season === 'autumn' ? [0xe3a03b, 0xc9603e] : [C.pink, C.yellow, 0xf2f2f2, 0xb9a6e6, C.red];
    for (let i = 0; i < 14; i++) W.add(P.flower(cols[i % cols.length], i), -10.4 + (i % 7) * 0.45, -3.75 + Math.floor(i / 7) * 0.5);
  }
  scatter(W, season === 'winter' ? 0 : 80, [-13, 13, -10, 6.5], (r, i) => P.grassTuft(season === 'autumn' ? 0xb8a050 : C.grassDark, i), 11, [[-5, -6, 4], [4, -2.2, 1.2], [-5, 2, 1]]);
  if (season !== 'winter') scatter(W, 25, [-13, 13, -2, 6.5], (r, i) => P.flower(r.pick([C.pink, C.yellow, 0xffffff, 0xb9a6e6]), i), 12, [[-5, 2, 1], [4, -2.2, 1.2]]);
  if (season === 'winter') scatter(W, 18, [-13, 13, -10, 6.5], (r, i) => P.rock(0.6, i, C.snowShade), 13, [[-5, -6, 4], [4, -2.2, 1.5], [-5, 2, 1]]);
  scatter(W, 8, [-13, 13, -10, 6], (r, i) => P.rock(r.range(0.5, 1), i, season === 'winter' ? C.snowShade : C.rock), 14, [[-5, -6, 4], [4, -2.2, 1.5], [-5, 2, 1.5]]);
  // mailbox
  const mb = P.mailbox(); W.add(mb, -6.4, 6.4, { collide: 0.2 }); refs.mailbox = mb;
  // the porch bench
  const bench = P.bench(); W.add(bench, -3.2, -2.3, { ry: 0, collide: { w: 1.6, d: 0.5 } }); refs.bench = [-3.2, -2.0];
  // neighbour's house
  if (theoHouse) { const th = P.house({ w: 4.5, d: 4, h: 2.5, wall: 0xcfe0ee, roof: 0x6f7d8c, door: C.red, chimney: false, lit }); W.add(th, 8.5, -6.5, { collide: { w: 5, d: 4.4 } }); refs.theoHouse = th; refs.theoDoor = [8.5, -4.2]; }
  if (sandbox) { const sb = P.sandbox(); W.add(sb, -8.5, 2.2, { collide: false }); refs.sandbox = [-8.5, 2.2]; }
  if (picnic) { const pb = P.picnicBlanket(C.red); W.add(pb, 1.2, 1.2); refs.picnic = [1.2, 1.2]; }
  if (lemonade) { const ls = P.lemonadeStand(); W.add(ls, 2.5, 6.0, { collide: { w: 1.5, d: 0.7 } }); refs.lemonade = [2.5, 5.2]; }
  if (snowman) { const sm = P.snowman(snowman); W.add(sm, 0, 1, { collide: 0.45 }); refs.snowman = sm; }
  W.bounds = { minX: -13.6, maxX: 13.6, minZ: -10.8, maxZ: 10.4 };
  return refs;
}

// ---------------------------------------------------------------------
// The kitchen. Night-time in the prologue; morning pancakes in your thirties.
// ---------------------------------------------------------------------
export function buildKitchen(ctx, { night = true, winter = true, wall = 0xefe2cf, chairs = 2 } = {}) {
  const W = ctx.world;
  const w = 8, d = 7;
  const room = P.roomShell({ w, d, h: 3.4, wall, wall2: 0xf4ead8, floor: 0xd8c2a0, windows: [{ wall: 'back', at: 1.4, y: 1.2, w: 1.7, h: 1.3, glow: night ? 0x6f82c8 : 0xffeacc, roomW: w, roomD: d }, { wall: 'left', at: -0.6, y: 1.2, w: 1.3, h: 1.2, glow: night ? 0x6f82c8 : 0xffeacc, roomW: w, roomD: d }] });
  W.add(room, 0, 0);
  // checker tiles near the counter
  for (let i = 0; i < 8; i++) for (let j = 0; j < 2; j++) { const t = P.patch(0.9, 0.9, (i + j) % 2 ? 0xf2ece2 : 0xc9b8a2, 0.004); W.add(t, -3.55 + i * 0.95, -3.0 + j * 0.9); }
  const cnt = P.counter(3.2); W.add(cnt, -0.6, -3.15, { collide: { w: 3.2, d: 0.7 } });
  const stv = P.stove(); W.add(stv, -2.65, -3.15, { collide: { w: 0.75, d: 0.7 } });
  const fr = P.fridge(); W.add(fr, -3.55, -1.9, { ry: Math.PI / 2, collide: { w: 0.75, d: 0.75 } });
  const tbl = P.table({ w: 1.2, round: true, color: C.wood }); W.add(tbl, 0.9, 0.6, { collide: 0.65 });
  const refs = { room, table: [0.9, 0.6] };
  const chairPos = [[0.9, -0.35, 0], [1.85, 0.6, -Math.PI / 2], [0.9, 1.55, Math.PI], [-0.05, 0.6, Math.PI / 2]];
  refs.chairs = [];
  for (let i = 0; i < chairs; i++) { const [x, z, ry] = chairPos[i]; const c = P.chair(C.woodDark); W.add(c, x, z, { ry }); refs.chairs.push([x, z, ry]); }
  const lmp = P.lamp({ lit: night, table: true }); W.add(lmp, 3.2, -3.1, { y: 0 });
  const sideT = P.table({ w: 0.6, d: 0.5, h: 0.7, color: C.woodLight }); W.add(sideT, 3.2, -3.1, { collide: 0.4 });
  lmp.position.y = 0.7;
  if (night) {
    const pl = new THREE.PointLight(0xffc58a, 9, 8, 1.4); pl.position.set(1.0, 2.2, 0.6); W.root.add(pl); refs.light = pl;
    const pend = P.cone(0.35, 0.3, 8, 0xf2d9b0, { emissive: 0xffd590, emissiveIntensity: 1.2 }); W.add(pend, 0.9, 0.6, { y: 2.3 });
    const cord = P.box(0.02, 1.1, 0.02, 0x555555); W.add(cord, 0.9, 0.6, { y: 2.55 });
    const gl = P.glowSprite(0xffd59a, 3, 0.55); gl.position.set(0.9, 2.3, 0.6); W.root.add(gl);
  }
  const mug1 = P.mug(C.white); W.add(mug1, 0.65, 0.5, { y: 0.75 }); refs.mug = mug1;
  const plantO = P.plant(1.1); W.add(plantO, 3.4, 2.7, { collide: 0.3 });
  const rugO = P.rug(2.8, 2.2, 0xc98f7a, 0xe8d4bc); W.add(rugO, 0.9, 0.6);
  const frames = [[-w / 2 + 0.06, 1.6, 2.0], [-w / 2 + 0.06, 2.6, 2.4], [-w / 2 + 0.06, 1.8, 1.6]];
  frames.forEach(([x, z, y], i) => { const f = P.frame([C.wood, C.woodDark, C.white][i], null, 0.45, 0.35); W.add(f, x, z, { y, ry: Math.PI / 2 }); });
  const coat = P.box(0.06, 1.0, 0.5, 0x6a4a3a); W.add(coat, -w / 2 + 0.1, 3.0, { y: 1.2 }); refs.coatHook = [-3.4, 3.0];
  return refs;
}

// ---------------------------------------------------------------------
// Living room: sofa, fireplace, toys. Toddler years; Christmas in old age.
// ---------------------------------------------------------------------
export function buildLiving(ctx, { night = false, fire = true, toys = true, wall = 0xe8dccb, tree = false } = {}) {
  const W = ctx.world;
  const w = 9, d = 7.5;
  const room = P.roomShell({ w, d, h: 3.4, wall, wall2: 0xf1e6d6, floor: C.wood, windows: [{ wall: 'back', at: 2.2, y: 1.0, w: 1.8, h: 1.5, glow: night ? 0x6f82c8 : 0xffe9c8, roomW: w, roomD: d }] });
  W.add(room, 0, 0);
  const refs = { room };
  const fp = P.fireplace(); W.add(fp, -w / 2 + 0.3, -0.8, { ry: Math.PI / 2, collide: { w: 1.6, d: 0.6 } });
  if (!fire) fp.userData.fire.visible = false;
  refs.fireplace = fp;
  if (fire) { const pl = new THREE.PointLight(0xff9a50, 7, 7, 1.5); pl.position.set(-w / 2 + 1, 0.8, -0.8); W.root.add(pl); refs.fireLight = pl; }
  const sofaO = P.sofa(0x8fa8c8); W.add(sofaO, 0.6, -2.7, { collide: { w: 2.1, d: 0.9 } }); refs.sofa = [0.6, -2.2];
  const arm = P.sofa(0xc89a8a); arm.scale.set(0.5, 1, 1); W.add(arm, 3.4, -0.6, { ry: -Math.PI / 2, collide: { w: 1.1, d: 0.9 } });
  const rugO = P.rug(3.4, 2.6, 0xd9a07a, 0xf0dcc0); W.add(rugO, 0.4, 0.2);
  const ct = P.table({ w: 1.2, d: 0.7, h: 0.4, color: C.woodLight }); W.add(ct, 0.6, -1.2, { collide: { w: 1.2, d: 0.7 } });
  const shelf = P.bookshelf(1.6, 1.9); W.add(shelf, -1.8, -3.5, { collide: { w: 1.6, d: 0.4 } });
  const lampO = P.lamp({ lit: night, h: 1.6 }); W.add(lampO, 3.8, -3.2, { collide: 0.25 });
  if (night) { const pl = new THREE.PointLight(0xffc98a, 5, 7, 1.6); pl.position.set(3.8, 1.7, -3.2); W.root.add(pl); }
  if (toys) {
    W.add(P.blocks(5), -1.2, 1.4); W.add(P.duck(), 2.2, 1.6); W.add(P.teddy(0xd8b07e), -2.3, 2.6);
    refs.blocks = [-1.2, 1.4];
  }
  if (tree) {
    const xt = P.tree({ kind: 'pine', season: 'summer', size: 1.15, seed: 77 }); W.add(xt, 3.6, 2.7, { collide: 0.6 });
    const lights = []; const r = rng(5);
    for (let i = 0; i < 14; i++) { const c = [0xffd27a, 0xff8a8a, 0x9ad0ff, 0xb8f2a0][i % 4]; const b = P.sphere(0.06, 5, 4, c, { emissive: c, emissiveIntensity: 2.5 }); const a = i * 1.7, h = 0.9 + (i / 14) * 2.0, rr = 1.05 - (i / 14) * 0.75; W.add(b, 3.6 + Math.cos(a) * rr, 2.7 + Math.sin(a) * rr, { y: h }); lights.push(b); }
    const star = P.ico(0.14, 0, C.yellow, 0, 1, { emissive: C.yellow, emissiveIntensity: 2 }); W.add(star, 3.6, 2.7, { y: 3.55 });
    for (let i = 0; i < 3; i++) W.add(P.giftBox([C.red, C.teal, C.yellow][i], [C.yellow, C.white, C.red][i], 0.35 + i * 0.05), 3.0 + i * 0.5, 1.8 - (i % 2) * 0.3);
    refs.xmasTree = [3.6, 2.7];
  }
  W.add(P.plant(1.2), -3.9, 3.2, { collide: 0.3 });
  const frames = [[-1.8, 2.4], [-0.9, 2.2], [0.0, 2.5]];
  frames.forEach(([x, y], i) => W.add(P.frame([C.wood, C.white, C.woodDark][i], null, 0.5, 0.4), x, -d / 2 + 0.06, { y }));
  W.bounds = { minX: -w / 2 + 0.2, maxX: w / 2 - 0.1, minZ: -d / 2 + 0.2, maxZ: d / 2 - 0.1 };
  return refs;
}

// sky dressing: a few drifting clouds around an island
export function skyDressing(ctx, { clouds = 6, seed = 1, y = -3, spread = 22 } = {}) {
  const r = rng(seed);
  for (let i = 0; i < clouds; i++) {
    const c = P.cloud(seed + i, r.range(1, 1.8));
    const a = (i / clouds) * Math.PI * 2;
    ctx.world.add(c, Math.cos(a) * spread * r.range(0.9, 1.2), Math.sin(a) * spread * r.range(0.9, 1.2), { y: y + r.range(-2, 3) });
    c.userData.update = (dt, t) => { c.position.x += Math.sin(t * 0.05 + i) * 0.004; };
    ctx.world.track(c);
  }
}
