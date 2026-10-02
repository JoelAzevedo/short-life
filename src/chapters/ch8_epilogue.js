// CHAPTER VIII — THE LITTLE MOMENTS
// A path of light across floating islands, one island for each part of your
// life, lined with the photographs you actually kept. Every step makes you
// younger. At the end you are tiny again, and someone is there to catch you.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng, clamp, lerp, smooth, fmt } from '../engine/game.js';
import { LOOKS, youLook } from '../engine/character.js';
import { narrate, lower, say, wait, keep, mood, music, amb, sfx, camTo, fadeOut, fadeIn, intensity, hop } from '../engine/story.js';
import { balance } from '../engine/minigames.js';
import { makePlayer, person } from './places.js';
import { LULLABY_WORDS } from './ch1_tiny.js';
import { el } from '../engine/ui.js';

// ---------- the shape of a life, walked backwards ----------
const CH_AGES = { 7: [80, 75], 6: [55, 40], 5: [40, 30], 4: [28, 22], 3: [15, 12], 2: [7, 5], 1: [1.25, 0.7] };
const achieve = (id, title, desc) => G.achieve?.(id, title, desc);
const has = (v, max = 70) => typeof v === 'string' && v.trim().length > 0 && v.length <= max;
const unquote = (v) => v.trim().replace(/^[“"']+|[”"']+$/g, '');
// one line per part of your life, coloured by what you chose back then
function lineFor(ch) {
  const f = G.state.flags;
  switch (ch) {
    case 7: {
      const a = f.ch7First === 'talk' ? 'A porch, and a talk that was long overdue.' : 'Two cups of tea. Snow, and a small hand pulling you into it.';
      const b = f.giftNow === false ? ' A small box with Pip’s name on it.' : f.giftNow && f.hasWatch ? ' Grandpa’s watch, on a smaller wrist.' : f.giftNow ? ' Your scarf, round a smaller neck.' : '';
      return a + b + ' A small voice humming an old song.';
    }
    case 6: return f.saidNo ? 'The years that went by like pages in the wind — and the day you said no to something, so you could say yes to them.' : 'The years that went by like pages in the wind.';
    case 5: {
      let t = 'A small hand in yours. “Will you always be here?”';
      if (has(f.alwaysAnswer)) t += ` “${unquote(f.alwaysAnswer)}”`;
      if (has(f.drawing, 40)) t += ` A drawing on the fridge: ${unquote(f.drawing)}.`;
      if ((G.state.stats?.emails ?? 0) > 5) t += ' And a phone that would not stop lighting up.';
      return t;
    }
    case 4: {
      let t = f.danced === false ? 'Lanterns, and a dance you almost had.' : f.danced ? 'Lanterns, and a waltz. You stepped on their feet twice.' : 'Lanterns. A waltz.';
      t += has(f.vow) ? ` A tree, two people under it, and a promise: “${unquote(f.vow)}”` : ' A tree, and two people under it.';
      return t;
    }
    case 3: {
      let t = f.metSamYoung ? 'Bicycles, rain, and an ice cream shared with a kid called Sam. ' : 'Bicycles and rain. ';
      if (f.satWithGrandpa === true) t += 'A porch, and an old man who saved you a seat. You sat.';
      else if (f.satWithGrandpa === false) t += 'A porch, and an empty chair. You said “later”. He understood. He always did.';
      else t += 'A porch, and someone saving you a seat.';
      return t;
    }
    case 2: {
      const st = { dragon: 'a dragon', ocean: 'the ocean', moon: 'the moon' }[f.storyChoice];
      return st ? `Fireflies in a jar. A story about ${st}. “Read it again.”` : 'Fireflies in a jar. “Read it again.”';
    }
    case 1: return has(f.firstWord, 20) ? `Stars going round and round. A song. Three steps. And one word: “${unquote(f.firstWord)}.”` : 'Stars going round and round. A song. Three steps.';
  }
  return '';
}
// the life, in a few lines, for the ending
function lifeLines() {
  const f = G.state.flags, out = [];
  out.push(`You were ${G.state.identity === 'father' ? 'a father' : 'a mother'}. Somebody called you {me}. Somebody still does.`);
  if (f.satWithGrandpa === true) out.push('When Grandpa asked you to sit with him, you sat.');
  else if (f.satWithGrandpa === false) out.push('You told Grandpa “later”, once. He kept your seat anyway.');
  if (f.danced === true) out.push('Under the lanterns, you danced.');
  else if (f.danced === false) out.push('You didn’t dance at the festival. You danced in the kitchen instead, for fifty years.');
  if (f.ch7Advice === 'phone') out.push('You told {child} to put the phone away. {They} did — mostly.');
  else if (f.ch7Advice === 'emails') out.push('You told {child} about the emails. {They} listened.');
  else if (f.ch7First === 'talk') out.push('When Pip came, you sat with {child} first.');
  else if (f.ch7First === 'snow') out.push('When Pip came, you went straight out into the snow.');
  const tale = { grandpa: 'You told Pip about Grandpa, and the watering can, and his wet shoes.', wedding: 'You told Pip about the wedding under the tree.', swing: 'You pushed Pip on the old swing. Higher. Higher.' }[f.toldPip];
  if (tale) out.push(tale);
  if (f.giftNow === false) out.push('You left a small box on the table with Pip’s name on it.');
  else if (f.giftNow && f.hasWatch) out.push('Grandpa’s watch is Pip’s now. It still ticks.');
  else if (f.giftNow) out.push('Your scarf is Pip’s now.');
  return out.slice(0, 7).map(fmt);
}
const CH_TOPS = { 7: 0xc8d2e0, 6: 0xdfbf9a, 5: 0xb4d49a, 4: 0xdfa4ba, 3: 0xe4c68c, 2: 0xa8d48a, 1: 0xf0d2c0 };
const DREAM = { bloom: 0.42, dream: 0.32, exposure: 0.94, saturation: 1.1, contrast: 1.04, fogNear: 6, fogFar: 46, vignette: 0.34, warmth: 0.25 };
const CH_TREE = { 7: [4, 'winter'], 6: [3, 'autumn'], 5: [3, 'summer'], 4: [2, 'spring'], 3: [1, 'summer'], 2: [0, 'summer'] };
const QUOTE = ['We are born so tiny.', 'We get older.', 'And then time passes so fast.', 'So hold the little moments as they pass —', 'the small, ordinary, sweet ones.', 'They are not the pause between the important things.', 'They are the important things.'];

const SPACING = 2.0;  // path length per photograph (they alternate sides)
const GAP = 5.5;      // the bridge of light between two chapters
const LEAD = 7, TAIL = 12, HALF = 0.95;
const DIR = new THREE.Vector3(-1, 0, -1).normalize();   // up the screen
const NRM = new THREE.Vector3(1, 0, -1).normalize();    // screen right
const AMP = 2.6, WAVE = 22;

// ---------- path ----------
function buildPath(L) {
  const raw = (t) => DIR.clone().multiplyScalar(t).addScaledVector(NRM, AMP * Math.sin((t * Math.PI * 2) / WAVE));
  const step = 0.2, pts = [];
  let t = 0, acc = 0, prev = raw(0), next = step;
  pts.push(prev.clone());
  while (acc < L + 2) {
    t += 0.01; const p = raw(t); acc += p.distanceTo(prev); prev = p;
    if (acc >= next) { pts.push(p.clone()); next += step; }
  }
  const tans = pts.map((p, i) => pts[Math.min(pts.length - 1, i + 1)].clone().sub(pts[Math.max(0, i - 1)]).normalize());
  const nrms = tans.map((tn) => new THREE.Vector3(-tn.z, 0, tn.x));
  const idx = (s) => clamp(Math.round(s / step), 0, pts.length - 1);
  return { pts, tans, nrms, step, L, idx, at: (s) => pts[idx(s)], tan: (s) => tans[idx(s)], nrm: (s) => nrms[idx(s)] };
}

// ---------- what you kept, grouped by chapter, latest first ----------
function gatherGroups() {
  const reg = [...G.album.registry.values()];
  const order = new Map(reg.map((r, i) => [r.id, i]));
  const groups = [];
  for (let ch = 7; ch >= 1; ch--) {
    const photos = [...G.album.kept.entries()].filter(([, v]) => v.chapter === ch)
      .map(([id, v]) => ({ id, caption: v.caption, img: v.img, empty: false }))
      .sort((a, b) => (order.get(b.id) ?? 1e6) - (order.get(a.id) ?? 1e6));
    const missed = reg.filter((r) => r.chapter === ch && !G.album.kept.has(r.id));
    const nEmpty = Math.min(3, missed.length);
    const items = [...photos];
    for (let k = 0; k < nEmpty; k++) {
      const at = Math.round(((k + 1) * (photos.length + nEmpty)) / (nEmpty + 1)) - 1;
      items.splice(clamp(at, 0, items.length), 0, { id: 'empty-' + ch + '-' + k, caption: 'a moment that passed', img: null, empty: true });
    }
    groups.push({ ch, items });
  }
  return groups;
}

// ---------- textures ----------
function wrapText(c, text, maxW) {
  const words = text.split(' '); const lines = []; let line = '';
  for (const w of words) { const tryL = line ? line + ' ' + w : w; if (c.measureText(tryL).width > maxW && line) { lines.push(line); line = w; } else line = tryL; }
  if (line) lines.push(line);
  return lines;
}
function frameTex(item) {
  return P.canvasTex(512, 614, (c, w, h) => {
    c.fillStyle = item.empty ? '#f6f1ea' : '#fffdf8'; c.fillRect(0, 0, w, h);
    if (item.empty) {
      c.strokeStyle = '#cdbfae'; c.lineWidth = 6; c.setLineDash([18, 14]); c.strokeRect(10, 10, w - 20, h - 20); c.setLineDash([]);
      c.strokeRect(34, 34, w - 68, 336);
    }
    let size = 58;
    c.font = `${item.empty ? 'italic 500' : '600'} ${size}px ${item.empty ? '"Cormorant Garamond", Georgia, serif' : 'Caveat, "Segoe Print", cursive'}`;
    let lines = wrapText(c, fmt(item.caption), w - 40);
    while (lines.length > 2 && size > 34) { size -= 4; c.font = c.font.replace(/\d+px/, size + 'px'); lines = wrapText(c, fmt(item.caption), w - 40); }
    lines = lines.slice(0, 3);
    c.fillStyle = item.empty ? '#a59889' : '#4a3f48'; c.textAlign = 'center'; c.textBaseline = 'middle';
    const y0 = 380 + (h - 380) / 2 - ((lines.length - 1) * size * 1.05) / 2;
    lines.forEach((l, i) => c.fillText(l, w / 2, y0 + i * size * 1.05));
  });
}
function placeholderTex(seed) {
  const r = rng(seed * 7 + 3);
  return P.canvasTex(160, 120, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#f6dce6'); g.addColorStop(1, '#fff2df'); c.fillStyle = g; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 7; i++) { const rg = c.createRadialGradient(r() * w, r() * h, 0, r() * w, r() * h, r.range(10, 34)); rg.addColorStop(0, 'rgba(255,255,255,0.8)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = rg; c.fillRect(0, 0, w, h); }
  });
}
const loader = new THREE.TextureLoader();
function polaroid(item, i) {
  const g = new THREE.Group();
  const W = 1.55, H = 1.86;
  const fm = new THREE.MeshBasicMaterial({ map: frameTex(item), transparent: item.empty, opacity: item.empty ? 0.42 : 1, depthWrite: !item.empty });
  fm.color.setScalar(item.empty ? 1 : 0.9); // keep the white from blooming away
  const front = new THREE.Mesh(new THREE.PlaneGeometry(W, H), fm); front.position.z = 0.018; g.add(front);
  if (!item.empty) {
    const back = P.boxC(W, H, 0.03, 0xe8e0d4); g.add(back);
    const tex = item.img ? loader.load(item.img, (t) => { t.needsUpdate = true; }) : placeholderTex(i);
    tex.colorSpace = THREE.SRGBColorSpace;
    const pm = new THREE.MeshBasicMaterial({ map: tex }); pm.color.setScalar(0.95);
    const photo = new THREE.Mesh(new THREE.PlaneGeometry(1.36, 1.02), pm);
    photo.position.set(0, H / 2 - 0.09 - 0.51, 0.022); g.add(photo);
  }
  return g;
}

// ---------- glowing people ----------
function lightFigure(look, age, name, x, z, heading, keepScarf = false) {
  const c = person(look, age, name, x, z, heading);
  const m = new THREE.MeshBasicMaterial({ color: 0xffe4b0, transparent: true, opacity: 0.92 });
  c.root.traverse((o) => { if (!o.isMesh || o === c.blob) return; if (keepScarf && o === c.scarfM) return; o.material = m; o.castShadow = false; });
  c.blob.material.color.setHex(0xffd9a0); c.blob.material.opacity = 0.3;
  const halo = P.glowSprite(0xffe2b0, 3.0, 0.35); halo.position.y = 1.0; c.root.add(halo);
  c.glowMat = m; c.halo = halo;
  return c;
}

// ---------- the player's outfit follows their age ----------
const bandOf = (a) => (a >= 62 ? 'old' : a >= 18 ? 'adult' : a >= 9 ? 'teen' : a >= 1.5 ? 'kid' : 'baby');
function lookOf(band) {
  if (band === 'old') return { ...youLook(40), shirt: 0x9d8e84, pants: 0x55505c };
  return youLook({ adult: 30, teen: 13, kid: 6, baby: 0.5 }[band]);
}
function dress(me, band) {
  const l = lookOf(band);
  me.setOutfit({ shirt: l.shirt, pants: l.pants, hair: l.hair, hairStyle: l.hairStyle });
  const shoe = P.mat(l.shoes ?? 0x3a3030); me.legL.end.material = shoe; me.legR.end.material = shoe;
  me.giveCane(band === 'old');
  me.band = band;
}
const speedOf = (band) => ({ old: 1.45, adult: 1.85, teen: 2.0, kid: 1.75, baby: 1.0 }[band]);

// ---------------------------------------------------------------------
export const epilogue = {
  id: 'ch8-epilogue', chapter: 8,
  card: { num: 'VIII', title: 'The Little Moments', ages: 'all of them', quote: 'Everything you held on to is still here.' },
  mood: 'dream', music: 'epilogue', intensity: 0.2,
  ambience: { wind: 0.12 },
  zoom: 8, surface: 'grass',
  hint: 'Walk along the path. Take as long as you like.',
  build(ctx) {
    const W = ctx.world;
    // ----- layout -----
    const groups = ctx.groups = gatherGroups();
    let s = LEAD; const knots = [[0, 80]];
    for (const g of groups) {
      const len = Math.max(8, g.items.length * SPACING + 4);
      g.s0 = s; g.s1 = s + len;
      knots.push([g.s0, CH_AGES[g.ch][0]], [g.s1, CH_AGES[g.ch][1]]);
      g.items.forEach((it, i) => { it.s = g.s0 + 2 + i * SPACING; it.side = i % 2 ? -1 : 1; });
      s = g.s1 + GAP;
    }
    const tail0 = s; const L = ctx.L = s + TAIL;
    knots.push([L, 0.65]);
    ctx.ageAt = (x) => { for (let i = 0; i < knots.length - 1; i++) { const [a, aa] = knots[i], [b, bb] = knots[i + 1]; if (x <= b) return lerp(aa, bb, clamp((x - a) / Math.max(1e-6, b - a), 0, 1)); } return knots[knots.length - 1][1]; };
    const path = ctx.path = buildPath(L);
    const heading = (s0) => { const t = path.tan(s0); return Math.atan2(t.x, t.z); };
    const r = rng(81);

    // ----- islands: one cluster per chapter, a bridge of light between -----
    const isl = (s0, w, d, top, seed) => {
      const p = path.at(s0), n = path.nrm(s0);
      const o = P.island({ w, d, h: 0.8, top, side: 0xd9bfae, under: 0xc8aac4, edge: P.shade(top, 0.9), seed });
      W.add(o, p.x + n.x * r.range(-0.6, 0.6), p.z + n.z * r.range(-0.6, 0.6), { ry: heading(s0) });
      return o;
    };
    isl(LEAD / 2, 9, LEAD + 1.5, CH_TOPS[7], 3);
    for (const g of groups) {
      const len = g.s1 - g.s0; const n = Math.max(1, Math.round(len / 6.5)); const seg = len / n;
      for (let k = 0; k < n; k++) isl(g.s0 + (k + 0.5) * seg, 10.5, seg + 1.5, CH_TOPS[g.ch], 10 + g.ch * 7 + k);
      // a few flowers / snow, and the family tree at the size it was then
      const mid = (g.s0 + g.s1) / 2;
      for (let k = 0; k < 12; k++) {
        const ss = r.range(g.s0, g.s1), lat = (r() < 0.5 ? -1 : 1) * r.range(3.0, 4.6);
        const p = path.at(ss), nn = path.nrm(ss);
        const obj = g.ch === 7 ? P.rock(0.5, k, C.snowShade) : k % 3 ? P.flower(r.pick([C.pink, C.yellow, 0xffffff, 0xb9a6e6]), k) : P.grassTuft(C.grassDark, k);
        W.add(obj, p.x + nn.x * lat, p.z + nn.z * lat);
      }
      if (CH_TREE[g.ch]) {
        const [stage, season] = CH_TREE[g.ch];
        const p = path.at(mid), nn = path.nrm(mid);
        W.add(P.familyTree({ stage, season, swing: g.ch === 5 }), p.x - nn.x * 4.9, p.z - nn.z * 4.9, { s: 0.75 });
      } else {
        const p = path.at(mid), nn = path.nrm(mid);
        W.add(P.tree({ kind: 'blossom', season: 'spring', size: 0.8, seed: 5 }), p.x - nn.x * 4.4, p.z - nn.z * 4.4);
        W.add(P.crib(), p.x + nn.x * 4.0, p.z + nn.z * 4.0, { ry: heading(mid), s: 0.8 });
      }
    }
    const endIsland = isl(tail0 + TAIL / 2 + 0.5, 12, TAIL + 1, 0xe2a2b2, 99);
    ctx.endIsland = endIsland;
    // clouds drifting below
    for (let k = 0; k < 16; k++) {
      const ss = (k / 16) * L, p = path.at(ss), nn = path.nrm(ss), lat = (k % 2 ? 1 : -1) * r.range(6, 11);
      const cl = P.cloud(k + 1, r.range(1.2, 2.0)); W.add(cl, p.x + nn.x * lat, p.z + nn.z * lat, { y: r.range(-6, -2.5) });
    }

    // ----- the path of light -----
    const strip = (hw, y, color, opacity, additive) => {
      const pos = [], ind = [];
      const n = path.pts.length;
      const iEnd = Math.min(n, path.idx(L - 5.4));
      for (let i = 0; i < iEnd; i += 2) {
        const p = path.pts[i], nn = path.nrms[i];
        pos.push(p.x - nn.x * hw, y, p.z - nn.z * hw, p.x + nn.x * hw, y, p.z + nn.z * hw);
      }
      const m = pos.length / 6;
      for (let i = 0; i < m - 1; i++) { const a = i * 2; ind.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(ind);
      const mm = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending });
      const mesh = new THREE.Mesh(geo, mm); mesh.renderOrder = 2; W.root.add(mesh); return mesh;
    };
    strip(1.45, 0.025, 0xffe7c6, 0.35, true);
    strip(0.72, 0.035, 0xfff4e4, 0.95, false);
    for (let x = 0.8; x < L - 5.6; x += 1.4) {
      const p = path.at(x), nn = path.nrm(x);
      for (const sd of [-1, 1]) { const gl = P.glowSprite(0xffe2b4, 0.5, 0.75); gl.position.set(p.x + nn.x * sd * 0.92, 0.14, p.z + nn.z * sd * 0.92); W.root.add(gl); }
    }

    // ----- the photographs -----
    const camDir = new THREE.Vector3(1, 0, 1).normalize();
    let pi = 0;
    for (const g of groups) for (const it of g.items) {
      const p = path.at(it.s), nn = path.nrm(it.s);
      const x = p.x + nn.x * it.side * 2.2, z = p.z + nn.z * it.side * 2.2;
      const stand = new THREE.Group();
      const post = P.box(0.07, 1.0, 0.07, it.empty ? 0xe8dccb : 0xd8c4a8); stand.add(post);
      const pol = polaroid(it, pi++); pol.position.y = 1.0 + 0.93; pol.rotation.x = -0.08; pol.rotation.z = r.range(-0.06, 0.06);
      stand.add(pol);
      // face the camera, turned a little towards the path
      const toPath = new THREE.Vector3(-nn.x * it.side, 0, -nn.z * it.side);
      const f = camDir.clone().multiplyScalar(0.8).addScaledVector(toPath, 0.25).normalize();
      W.add(stand, x, z, { ry: Math.atan2(f.x, f.z) });
      if (!it.empty) { const gl = P.glowSprite(0xfff0d0, 2.8, 0.16); gl.position.set(x, 1.9, z); W.root.add(gl); }
    }

    W.particlesOf('memories', { count: 46, area: { w: 26, h: 9, d: 26 }, y0: -3 });
    W.particlesOf('motes', { count: 40, area: { w: 20, h: 5, d: 20 }, opacity: 0.6 });

    // ----- you -----
    const st = 1.5, sp = path.at(st);
    const me = ctx.me = makePlayer(80, sp.x, sp.z, heading(st), lookOf('old'));
    dress(me, 'old');
    me.walkSpeed = speedOf('old');
    ctx.si = path.idx(st); ctx.maxS = st;
    ctx.speedMul = clamp(L / 85, 1, 1.5);

    // ----- Sam, briefly, by the island where you met -----
    const g4 = groups.find((g) => g.ch === 4);
    ctx.samS = (g4.s0 + g4.s1) / 2;
    { const p = path.at(ctx.samS), nn = path.nrm(ctx.samS); ctx.sam = lightFigure({ ...LOOKS.sam, scarf: 0x6fa3c8 }, 26, 'Sam', p.x - nn.x * 3.0, p.z - nn.z * 3.0, heading(ctx.samS) + Math.PI * 0.6, true); }

    // ----- the ones waiting at the end -----
    const es = L - 2.6, ep = path.at(es), en = path.nrm(es), back = heading(es) + Math.PI;
    ctx.dad = lightFigure(LOOKS.dad, 33, 'Dad', ep.x + en.x * 0.7, ep.z + en.z * 0.7, back);
    ctx.mom = lightFigure(LOOKS.mom, 31, 'Mom', ep.x - en.x * 0.7, ep.z - en.z * 0.7, back);
    ctx.endMarker = new THREE.Object3D(); { const mp = path.at(L - 4.6); ctx.endMarker.position.set(mp.x, 0, mp.z); }
    W.root.add(ctx.endMarker);

    // ----- keep the walker on the path of light -----
    W.resolve = (x, z) => {
      const pts = path.pts; let bi = ctx.si, bd = Infinity;
      for (let i = Math.max(0, ctx.si - 70), hi = Math.min(pts.length - 1, ctx.si + 70); i <= hi; i++) { const d = (pts[i].x - x) ** 2 + (pts[i].z - z) ** 2; if (d < bd) { bd = d; bi = i; } }
      const minI = Math.max(0, Math.floor((ctx.maxS - 4) / path.step)), maxI = Math.floor((L - 0.8) / path.step);
      const i2 = clamp(bi, minI, maxI);
      const p0 = pts[bi], t0 = path.tans[bi];
      const sReq = bi * path.step + (x - p0.x) * t0.x + (z - p0.z) * t0.z;
      if (sReq < Math.max(0, ctx.maxS - 4) - 0.08 && !ctx.triedBack && !G.auto) {
        ctx.backT = (ctx.backT || 0) + G.dt;
        if (ctx.backT > 1.6) {
          ctx.triedBack = true;
          lower('You can’t go back. Nobody can. But you can look, as long as you like.', { block: false, hold: 6 });
          achieve('ch8_no_going_back', 'No Going Back', 'Tried to walk back along the path.');
        }
      }
      const p = pts[bi], t = path.tans[bi], n = path.nrms[bi];
      let along = (x - p.x) * t.x + (z - p.z) * t.z;
      const lat = clamp((x - p.x) * n.x + (z - p.z) * n.z, -HALF, HALF);
      if (i2 > bi) along = Math.max(0, along); else if (i2 < bi) along = Math.min(0, along);
      const q = pts[i2], t2 = path.tans[i2], n2 = path.nrms[i2];
      along = clamp(along, -path.step, path.step);
      ctx.si = i2;
      ctx.maxS = Math.max(ctx.maxS, i2 * path.step + along);
      return { x: q.x + t2.x * along + n2.x * lat, z: q.z + t2.z * along + n2.z * lat };
    };

    // ----- per frame: age, music, camera, the people you pass -----
    const passed = new Set();
    const ctl = new THREE.Object3D(); W.root.add(ctl);
    ctl.userData.update = (dt) => {
      if (ctx.locked) return;
      const D = G.director;
      if (G.auto && D.control && !D.inMoment && !ctx.finaleReady) {
        const ns = Math.min(L - 5, ctx.maxS + dt * 6);
        const q = path.at(ns); me.position.x = q.x; me.position.z = q.z; me.targetHeading = heading(ns); me.speed = 2;
        ctx.si = path.idx(ns); ctx.maxS = ns;
      }
      const s0 = ctx.maxS, k = s0 / L;
      const age = ctx.ageAt(s0);
      if (Math.abs(age - me.age) > 0.015) me.setAge(age);
      const band = bandOf(age);
      if (band !== me.band) {
        dress(me, band);
        sfx('sparkle', { vol: 0.35 });
        W.burst(me.position.clone().add(new THREE.Vector3(0, 0.8, 0)), { count: 26, color: 0xfff0d0, speed: 1.3 });
      }
      me.walkSpeed = speedOf(band) * ctx.speedMul;
      G.audio.setIntensity(0.2 + 0.8 * clamp(k * 1.05, 0, 1), 1.2);
      const zk = smooth(clamp((k - 0.78) / 0.2, 0, 1));
      G.renderer.zoomGoal = lerp(8, 5.2, zk);
      const tn = path.tan(s0); G.renderer.followOffset.set(tn.x * 1.6 * (1 - zk), 0, tn.z * 1.6 * (1 - zk));
      for (const g of groups) if (!passed.has(g.ch) && s0 >= g.s0 - 1) { passed.add(g.ch); lower(lineFor(g.ch), { block: false, hold: 7.5 }); }
      // Sam turns, waves, and is gone
      const sam = ctx.sam;
      if (sam && sam.root.visible) {
        const dS = s0 - ctx.samS;
        if (dS > -6 && !sam.waved) { sam.faceChar(me); if (dS > -3.5) { sam.waved = true; sam.setPose('wave'); } }
        if (!sam.waited && !G.auto && D.control && Math.hypot(me.position.x - sam.position.x, me.position.z - sam.position.z) < 3.5 && !me._playerMoving) {
          sam.waitT = (sam.waitT || 0) + dt;
          if (sam.waitT > 3.5) {
            sam.waited = true; sam.setPose('idle'); sam.faceChar(me);
            say(sam, 'Go on, love. I’ll catch up.', { passive: true, hold: 3.6 });
            achieve('ch8_catch_up', 'I’ll Catch Up', 'Stopped and waited with Sam on the path.');
          }
        } else if (!sam.waited) sam.waitT = 0;
        if (dS > 2.5) { sam.fade = (sam.fade ?? 1) - dt / 3; sam.glowMat.opacity = Math.max(0, 0.92 * sam.fade); sam.halo.material.opacity = Math.max(0, 0.35 * sam.fade); sam.scarfM.material = sam.glowMat; if (sam.fade <= 0) sam.root.visible = false; }
      }
      if (!ctx.finaleReady && s0 >= L - 8) {
        ctx.finaleReady = true;
        mood('dream', 6, { ...DREAM, bloom: 0.6, warmth: 0.4 });
        ctx.dad.setPose('kneelOpen'); ctx.mom.setPose('kneel');
        D.refreshHotspots();
      }
    };
    W.track(ctl);
  },
  async intro(ctx) {
    G.renderer.setMood('dream', 0, DREAM);
    await fadeIn(4);
    await lower('You open your eyes somewhere soft and bright.');
    await lower('There is a path. And all along it, the moments you kept.');
  },
  moments: [
    {
      id: 'lifted', kind: 'story', label: 'Reach for them', anchor: (ctx) => ctx.endMarker, radius: 1.8, height: 0.9,
      when: (ctx) => !!ctx.finaleReady, caption: 'Small again, and held',
      async run(ctx) {
        const me = ctx.me, mom = ctx.mom, dad = ctx.dad, path = ctx.path;
        ctx.locked = true;
        if (me.band !== 'baby') dress(me, 'baby');
        me.setAge(0.8); me.setPose('sitGround', { look: -0.3 });
        const meet = path.at(ctx.L - 3.3);
        await camTo(meet.x, meet.z, 4.8, 3);
        await say(mom, 'There you are.');
        await say(dad, 'Hey, you. Come here. Come on. You can do it.');
        me.setAge(1.35); me.setPose('stand'); me.faceNow(dad.position.x, dad.position.z);
        await balance({ label: 'Find your balance — ← →', seconds: 3, difficulty: 0.7, onUpdate: (x) => { me.tilt = -x * 0.3; } });
        me.tilt = 0;
        let wt = 0; const wobble = (dt) => { wt += dt; me.tilt = Math.sin(wt * 7) * 0.12; };
        G.updaters.add(wobble);
        const a = me.position.clone(), b = dad.position.clone();
        for (let i = 1; i <= 3; i++) {
          const p = a.clone().lerp(b, (i / 3) * 0.78);
          await me.walkTo(p.x, p.z, { speed: 0.55 });
          sfx('step', { surface: 'grass', vol: 0.7 });
        }
        G.updaters.delete(wobble); me.tilt = 0;
        dad.pickUp(me); dad.setPose('carryHigh');
        sfx('giggle'); sfx('yay', { delay: 0.2, vol: 0.6 });
        hop(dad, 2, 0.12);
        intensity(1, 6);
        mood('dream', 8, { ...DREAM, bloom: 0.7, warmth: 0.5, dream: 0.38 });
        await camTo(dad.position.x, dad.position.z, 3.8, 2.5);
        mom.setPose('idle'); mom.faceChar(dad);
        await say(mom, 'Three steps. Did you count?');
        await say(dad, 'Look at you. Look how far you came.');
        await say(mom, LULLABY_WORDS[2], { passive: true, hold: 3.4 });
        await say(mom, LULLABY_WORDS[3], { passive: true, hold: 3.4 });
        await keep('ch8-held', 'Small again, and held', { window: 12 });
        achieve('ch8_held', 'Held', 'Walked the whole path and were carried home.');
        await wait(1);
        await fadeOut(5, '#fff6ee');
      },
    },
  ],
  final: 'lifted',
  showEnding: () => showEnding(), // handy for testing the ending on its own
  async outro() {
    G.ui.showHud(false);
    amb({}, 4);
    intensity(0.5, 8);
    await fadeColor('#17131b', 4);
    await wait(1);
    await narrate(QUOTE.slice(0, 3), { minTime: 1.8 });
    G.ui.clearNarration(); await wait(1.1);
    await narrate(QUOTE.slice(3, 5), { minTime: 1.8, stack: true });
    G.ui.clearNarration(); await wait(1.1);
    await narrate(QUOTE.slice(5), { minTime: 2.0 });
    G.ui.clearNarration();
    await wait(1.6);
    showEnding();
  },
};

function fadeColor(color, seconds = 2) {
  const f = G.ui.fadeEl;
  f.style.transition = `opacity 0.01s, background ${seconds}s ease`;
  void f.offsetWidth;
  f.style.background = color;
  return new Promise((r) => setTimeout(r, seconds * 1000));
}

// ---------------------------------------------------------------------
// The ending: the album, the count, the credits, and one request.
// ---------------------------------------------------------------------
const END_CSS = `
#lmEnd{position:absolute;inset:0;background:#17131b;color:#fff8ef;pointer-events:auto;overflow:hidden;opacity:0;transition:opacity 2s ease;font-family:var(--serif)}
#lmEnd.show{opacity:1}
#lmEnd .page{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 6vw;opacity:0;transition:opacity 1.6s ease;pointer-events:none}
#lmEnd .page.on{opacity:1;pointer-events:auto}
#lmEnd .strip{width:100vw;overflow:hidden;padding:20px 0 14px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
#lmEnd .track{display:flex;gap:28px;width:max-content;padding:0 14px}
#lmEnd .track.roll{animation:lmScroll var(--dur) linear infinite}
#lmEnd .track.still{margin:0 auto}
@keyframes lmScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
#lmEnd .pol{position:relative;flex:0 0 auto;width:clamp(130px,17vw,220px);background:#fffdf8;padding:8px 8px 36px;box-shadow:0 10px 30px rgba(0,0,0,.45);transform:rotate(var(--r));border-radius:2px}
#lmEnd .pol img,#lmEnd .pol .ph{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#e0d6ca}
#lmEnd .pol.empty{background:rgba(255,253,248,.12);box-shadow:none;border:2px dashed rgba(255,248,239,.35)}
#lmEnd .pol.empty .ph{background:transparent}
#lmEnd .pol .cap{position:absolute;left:0;right:0;bottom:7px;font-family:var(--hand);font-size:clamp(14px,1.45vw,19px);color:#4a3f48;padding:0 6px;line-height:1;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#lmEnd .pol.empty .cap{color:rgba(255,248,239,.6);font-family:var(--serif);font-style:italic}
#lmEnd .count{font-size:clamp(24px,3vw,38px);margin-top:18px;font-weight:500}
#lmEnd .sub{font-style:italic;font-size:clamp(16px,1.9vw,23px);opacity:.85;margin-top:10px;max-width:760px;line-height:1.4}
#lmEnd .muted{font-family:var(--sans);font-size:clamp(12px,1.2vw,14px);letter-spacing:.04em;opacity:.55;margin-top:14px;max-width:640px;line-height:1.5}
#lmEnd h1{font-weight:500;font-size:clamp(44px,7vw,84px);margin:0;letter-spacing:.01em}
#lmEnd .last{font-size:clamp(26px,3.6vw,46px);max-width:900px;line-height:1.3;font-weight:500}
#lmEnd button{margin-top:44px;font-family:var(--sans);font-size:16px;font-weight:700;border:0;border-radius:30px;padding:13px 34px;background:rgba(255,250,242,.92);color:#3a3036;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.3);transition:transform .2s}
#lmEnd button:hover{transform:scale(1.04)}
#lmEnd .row{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
#lmEnd button.ghost{background:transparent;color:#fff8ef;box-shadow:none;border:1px solid rgba(255,248,239,.4)}
#lmEnd .lines{margin-top:12px;display:flex;flex-direction:column;gap:4px}
#lmEnd .lines .sub{margin-top:4px}
#lmEnd .tap{position:absolute;bottom:4vh;left:0;right:0;font-family:var(--sans);font-size:11px;letter-spacing:.22em;text-transform:uppercase;opacity:.35;text-align:center;transition:opacity 1s}
`;

export function showEnding() {
  if (!document.getElementById('lmEndCss')) { const st = document.createElement('style'); st.id = 'lmEndCss'; st.textContent = END_CSS; document.head.appendChild(st); }
  G.log?.push('ending: shown');
  G.director.setControl(false);
  G.director.current = null; // nothing left to pause or replay; the overlay owns the screen
  const A = G.album;
  const regIds = new Set([...A.registry.keys()]);
  const all = new Set([...regIds, ...A.kept.keys()]);
  const order = new Map([...A.registry.keys()].map((id, i) => [id, i]));
  const kept = [...A.kept.entries()].sort((a, b) => (a[1].chapter - b[1].chapter) || ((order.get(a[0]) ?? 1e6) - (order.get(b[0]) ?? 1e6)));
  const n = kept.length, m = Math.max(n, all.size);

  const root = el('div'); root.id = 'lmEnd';
  // page 1: the album
  const p1 = el('div', 'page');
  const strip = el('div', 'strip'); const track = el('div', 'track');
  const card = (k, i) => {
    const d = el('div', 'pol' + (k ? '' : ' empty')); d.style.setProperty('--r', (((i * 37) % 9) - 4) * 0.7 + 'deg');
    d.innerHTML = k ? (k.img ? `<img src="${k.img}">` : '<div class="ph"></div>') + `<div class="cap">${fmt(k.caption)}</div>` : '<div class="ph"></div><div class="cap">…</div>';
    return d;
  };
  if (n === 0) { track.appendChild(card(null, 0)); track.classList.add('still'); }
  else if (n <= 3) { kept.forEach(([, k], i) => track.appendChild(card(k, i))); track.classList.add('still'); }
  else { for (let rep = 0; rep < 2; rep++) kept.forEach(([, k], i) => track.appendChild(card(k, i))); track.classList.add('roll'); track.style.setProperty('--dur', Math.max(26, n * 3.6) + 's'); }
  strip.appendChild(track); p1.appendChild(strip);
  p1.appendChild(el('div', 'count', `You kept ${n} of ${m} ${m === 1 ? 'moment' : 'moments'}.`));
  if (n === 0) p1.appendChild(el('div', 'sub', 'The album is empty. The life wasn’t.'));
  const emails = G.state.stats?.emails ?? 0;
  if (emails > 0) p1.appendChild(el('div', 'muted', `Emails answered: ${emails}. They all got answered in the end, one way or another.`));
  p1.appendChild(el('div', 'sub', 'The moments you didn’t keep happened anyway.<br>Someone else may be keeping them for you.'));
  // page 2: the life you chose, in a few lines
  const pl = el('div', 'page');
  pl.appendChild(el('div', 'muted', 'A LIFE, IN A FEW LINES'));
  const lines = el('div', 'lines'); lifeLines().forEach((t) => lines.appendChild(el('div', 'sub', t))); pl.appendChild(lines);
  // page 3: credits
  const p2 = el('div', 'page');
  p2.appendChild(el('h1', '', 'Little Moments'));
  p2.appendChild(el('div', 'sub', 'a game about time'));
  p2.appendChild(el('div', 'muted', 'Made with Three.js and Web Audio'));
  // page 3: the request
  const p3 = el('div', 'page');
  p3.appendChild(el('div', 'last', 'Now close this, and go find your little ones.'));
  const row = el('div', 'row');
  const btn = el('button', '', 'Return to the beginning'); row.appendChild(btn);
  const ach = el('button', 'ghost', 'Achievements'); row.appendChild(ach);
  p3.appendChild(row);
  const tapHint = el('div', 'tap', 'click to continue');
  root.append(p1, pl, p2, p3, tapHint);
  document.getElementById('ui').appendChild(root);
  void root.offsetWidth; root.classList.add('show');
  G.ui.fade(1, 0.01, '#17131b');

  const pages = [p1, pl, p2, p3];
  let page = -1, timer = null, done = false;
  const holdFor = G.auto ? [1.4, 1.2, 1.2] : [16, 12, 8];
  const show = (i) => {
    if (done || i >= pages.length || i === page) return;
    pages.forEach((p, j) => p.classList.toggle('on', j === i));
    page = i;
    clearTimeout(timer);
    if (i < pages.length - 1) timer = setTimeout(() => show(i + 1), holdFor[i] * 1000);
    else { tapHint.style.opacity = '0'; if (G.auto) timer = setTimeout(finish, 2500); }
  };
  const next = () => { if (page < pages.length - 1) show(page + 1); };
  const onKey = (e) => { if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowRight') next(); };
  const onDown = (e) => { if (e.target === btn || e.target === ach) return; next(); };
  function finish() {
    if (done) return; done = true;
    clearTimeout(timer);
    window.removeEventListener('keydown', onKey); root.removeEventListener('pointerdown', onDown);
    if (G.director.menuOpen) G.director.closeMenu();
    G.paused = false;
    G.log?.push('ending: closed');
    root.classList.remove('show');
    setTimeout(() => { root.remove(); G.director.onTitle && G.director.onTitle(); }, 1200);
  }
  window.addEventListener('keydown', onKey);
  root.addEventListener('pointerdown', onDown);
  btn.addEventListener('click', (e) => { e.stopPropagation(); finish(); });
  ach.addEventListener('click', (e) => { e.stopPropagation(); G.showAchievements?.(); });
  if (n > 0 && n >= m) achieve('ch8_every_moment', 'Every Little Moment', 'Kept every moment there was to keep.');
  if (n === 0) achieve('ch8_present', 'Present', 'Finished with an empty album. You were there for all of it.');
  setTimeout(() => show(0), 400);
}
