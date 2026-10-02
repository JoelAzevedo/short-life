// CHAPTER VII — WINTER (75+)
// A quiet house, two cups of tea. Then your child comes home with Pip, and the
// colour comes with them. It ends the night after the visit, at the kitchen
// table, with the album — the same night the prologue began.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng, damp, child, grandMe } from '../engine/game.js';
import { LOOKS, youLook, childLook } from '../engine/character.js';
import { narrate, lower, say, think, wait, keep, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, intensity, choose } from '../engine/story.js';
import { stillness, tap, rhythm, hold, sequence, timing } from '../engine/minigames.js';
import { buildKitchen, buildYard, makePlayer, person } from './places.js';

const AGE = 79;                 // the same winter as the prologue's night
const SCARF_BLUE = 0x6fa3c8;    // Sam's scarf (matches the prologue)
const pipParent = () => (G.state.childKind === 'son' ? 'Dad' : 'Mom');
const achieve = (id, title, desc) => G.achieve?.(id, title, desc);
const SNOW_PLAY = ['snowman', 'angels', 'treeTale', 'snowball'];
// little hidden things: run fn once when the player lingers somewhere while free to move
function secret(world, test, fn) {
  const o = new THREE.Object3D(); world.root.add(o);
  let fired = false;
  o.userData.update = (dt) => { if (fired) return; const D = G.director; if (!D.control || D.inMoment || G.auto) return; if (test(dt)) { fired = true; fn(); } };
  world.track(o);
}

// cross-fade the fade overlay's colour (it is already opaque) so the next
// chapter card doesn't snap from white to dark
function fadeColor(color, seconds = 2) {
  const f = G.ui.fadeEl;
  f.style.transition = `opacity 0.01s, background ${seconds}s ease`;
  void f.offsetWidth;
  f.style.background = color;
  return new Promise((r) => setTimeout(r, seconds * 1000));
}

function oldLook(extra = {}) { return { ...youLook(AGE), shirt: 0x9d8e84, pants: 0x55505c, ...extra }; }

// ---------------------------------------------------------------------
// small painted textures: the view from the window, the frames, Pip's drawing
// ---------------------------------------------------------------------
function branch(c, r, x, y, len, ang, depth, w) {
  const x2 = x + Math.cos(ang) * len, y2 = y - Math.sin(ang) * len;
  c.strokeStyle = '#5e4c42'; c.lineWidth = w; c.lineCap = 'round';
  c.beginPath(); c.moveTo(x, y); c.lineTo(x2, y2); c.stroke();
  if (depth > 1 && w > 1.4) { c.strokeStyle = 'rgba(255,255,255,0.85)'; c.lineWidth = w * 0.45; c.beginPath(); c.moveTo(x, y - w * 0.35); c.lineTo(x2, y2 - w * 0.35); c.stroke(); }
  if (depth > 0) {
    branch(c, r, x2, y2, len * r.range(0.66, 0.78), ang + r.range(0.3, 0.6), depth - 1, w * 0.68);
    branch(c, r, x2, y2, len * r.range(0.66, 0.78), ang - r.range(0.25, 0.55), depth - 1, w * 0.68);
  }
}
function windowViewTex() {
  return P.canvasTex(256, 200, (c, w, h) => {
    const g = c.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#c9d3de'); g.addColorStop(1, '#eef1f4');
    c.fillStyle = g; c.fillRect(0, 0, w, h);
    c.fillStyle = '#f6f8fb'; c.fillRect(0, h * 0.72, w, h);
    c.fillStyle = '#dfe5ec'; for (let i = 0; i < 12; i++) c.fillRect(i * 22, h * 0.68, 3, 18); c.fillRect(0, h * 0.7, w, 3);
    const r = rng(17);
    branch(c, r, w * 0.56, h * 0.8, h * 0.3, Math.PI / 2, 6, 12);
    // the old swing rope, frayed and frosted
    c.strokeStyle = '#d8d2c8'; c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(w * 0.66, h * 0.42); c.lineTo(w * 0.66, h * 0.66); c.moveTo(w * 0.74, h * 0.4); c.lineTo(w * 0.74, h * 0.62); c.stroke();
    c.fillStyle = '#8a7060'; c.fillRect(w * 0.645, h * 0.655, w * 0.06, 3);
    c.fillStyle = 'rgba(255,255,255,0.9)'; for (let i = 0; i < 70; i++) { c.beginPath(); c.arc(r() * w, r() * h, r.range(0.6, 1.6), 0, 7); c.fill(); }
  });
}
function frostTex() {
  return P.canvasTex(128, 100, (c, w, h) => {
    const r = rng(5);
    c.fillStyle = 'rgba(244,248,252,0.82)'; c.fillRect(0, 0, w, h);
    for (let i = 0; i < 260; i++) { c.fillStyle = `rgba(255,255,255,${r.range(0.2, 0.7)})`; c.fillRect(r() * w, r() * h, r.range(1, 4), r.range(1, 3)); }
  });
}
function memoryTex(kind) {
  return P.canvasTex(160, 128, (c, w, h) => {
    const sky = { wedding: ['#bcd9f0', '#fbefe2'], cake: ['#f3d9c4', '#f8ead8'], coat: ['#d6dde6', '#eef0f2'] }[kind];
    const g = c.createLinearGradient(0, 0, 0, h); g.addColorStop(0, sky[0]); g.addColorStop(1, sky[1]); c.fillStyle = g; c.fillRect(0, 0, w, h);
    if (kind === 'wedding') {
      c.fillStyle = '#9fcf7a'; c.fillRect(0, h * 0.75, w, h);
      c.fillStyle = '#7d5a43'; c.fillRect(w * 0.47, h * 0.3, 8, h * 0.46);
      c.fillStyle = '#86c06a'; [[0.5, 0.25, 30], [0.36, 0.33, 22], [0.64, 0.33, 22]].forEach(([x, y, rr]) => { c.beginPath(); c.arc(w * x, h * y, rr, 0, 7); c.fill(); });
      [[0.38, '#5fa38a'], [0.58, '#f6f2ea']].forEach(([x, col]) => { c.fillStyle = col; c.fillRect(w * x - 6, h * 0.55, 12, 26); c.fillStyle = '#e9b894'; c.beginPath(); c.arc(w * x, h * 0.5, 6, 0, 7); c.fill(); });
    } else if (kind === 'cake') {
      c.fillStyle = '#d6b48c'; c.fillRect(0, h * 0.72, w, h);
      c.fillStyle = '#f7c6d0'; c.fillRect(w * 0.28, h * 0.48, w * 0.44, h * 0.26);
      c.fillStyle = '#fff6f0'; c.fillRect(w * 0.28, h * 0.46, w * 0.44, 6);
      for (let i = 0; i < 5; i++) { const x = w * 0.33 + i * w * 0.085; c.fillStyle = '#9ac8f0'; c.fillRect(x, h * 0.36, 4, 12); c.fillStyle = '#ffd36b'; c.beginPath(); c.arc(x + 2, h * 0.33, 3.5, 0, 7); c.fill(); }
    } else {
      c.fillStyle = '#f6f8fb'; c.fillRect(0, h * 0.74, w, h);
      c.fillStyle = '#6a7a8a'; c.beginPath(); c.moveTo(w * 0.5, h * 0.36); c.lineTo(w * 0.66, h * 0.86); c.lineTo(w * 0.34, h * 0.86); c.closePath(); c.fill();
      c.fillStyle = '#e9b894'; c.beginPath(); c.arc(w * 0.5, h * 0.32, 11, 0, 7); c.fill();
      c.fillStyle = '#2a2224'; c.beginPath(); c.arc(w * 0.5, h * 0.34, 4, 0, Math.PI); c.fill();
      c.fillStyle = '#6a7a8a'; c.fillRect(w * 0.3, h * 0.48, w * 0.4, 8);
    }
  });
}
function drawingTex() {
  return P.canvasTex(200, 150, (c, w, h) => {
    c.fillStyle = '#fbfaf6'; c.fillRect(0, 0, w, h);
    c.lineWidth = 3; c.lineCap = 'round';
    c.strokeStyle = '#f3b62a'; c.beginPath(); c.arc(w * 0.82, h * 0.2, 16, 0, 7); c.stroke();
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; c.beginPath(); c.moveTo(w * 0.82 + Math.cos(a) * 21, h * 0.2 + Math.sin(a) * 21); c.lineTo(w * 0.82 + Math.cos(a) * 28, h * 0.2 + Math.sin(a) * 28); c.stroke(); }
    c.fillStyle = '#3a3030'; c.fillRect(w * 0.79, h * 0.17, 2, 2); c.fillRect(w * 0.845, h * 0.17, 2, 2);
    c.beginPath(); c.arc(w * 0.82, h * 0.21, 6, 0.2, Math.PI - 0.2); c.stroke();
    c.strokeStyle = '#6a8ac8';
    [[0.3, 0.68, 22], [0.3, 0.42, 15], [0.3, 0.24, 10], [0.56, 0.74, 14], [0.56, 0.58, 9]].forEach(([x, y, rr]) => { c.beginPath(); c.arc(w * x, h * y, rr, 0, 7); c.stroke(); });
    c.strokeStyle = '#d9584a'; c.beginPath(); c.moveTo(w * 0.27, h * 0.32); c.lineTo(w * 0.36, h * 0.33); c.stroke();
    c.fillStyle = '#d9584a'; c.font = 'bold 15px sans-serif'; c.fillText(`ME + ${grandMe().toUpperCase()}`, 12, h - 10);
  });
}

// a little kettle
function kettle() {
  const g = new THREE.Group();
  g.add(P.cyl(0.11, 0.14, 0.2, 8, 0xd9584a));
  const lid = P.cyl(0.07, 0.1, 0.04, 8, 0xc04a3e); lid.position.y = 0.2; g.add(lid);
  const knob = P.sphere(0.025, 5, 4, 0x333333); knob.position.y = 0.25; g.add(knob);
  const sp = P.cyl(0.02, 0.035, 0.16, 5, 0xd9584a); sp.rotation.z = -0.9; sp.position.set(0.12, 0.08, 0); g.add(sp);
  const h = P.torus(0.09, 0.015, 4, 8, 0x333333, Math.PI); h.position.y = 0.22; g.add(h);
  return P.shadow(g);
}
function radio() {
  const g = new THREE.Group();
  g.add(P.box(0.38, 0.22, 0.16, 0x8a5a3a));
  const grille = P.box(0.17, 0.15, 0.01, 0xd8c8a8); grille.position.set(-0.08, 0.035, 0.08); g.add(grille);
  const dial = P.cyl(0.035, 0.035, 0.02, 8, 0xe8dcc8); dial.rotation.x = Math.PI / 2; dial.position.set(0.1, 0.11, 0.085); g.add(dial);
  const ant = P.box(0.01, 0.3, 0.01, 0x777777); ant.position.set(0.15, 0.22, -0.04); ant.rotation.z = -0.4; g.add(ant);
  return P.shadow(g);
}
// soft steam rising from a cup
function steam(world, x, y, z) {
  const sprites = [];
  for (let i = 0; i < 3; i++) { const s = P.glowSprite(0xffffff, 0.22, 0.0); world.root.add(s); sprites.push(s); }
  const o = new THREE.Object3D(); world.root.add(o);
  o.userData.update = (dt, t) => sprites.forEach((s, i) => { const k = (t * 0.35 + i / 3) % 1; s.position.set(x + Math.sin(t * 1.3 + i) * 0.03, y + k * 0.45, z); s.material.opacity = Math.sin(k * Math.PI) * 0.35; });
  world.track(o);
  return o;
}

// ---------------------------------------------------------------------
// 1. The quiet house
// ---------------------------------------------------------------------
const HOUSE_LITTLE = ['twoCups', 'samChair', 'window', 'radio', 'photos', 'plant'];

export const quietHouse = {
  id: 'ch7-house', chapter: 7,
  card: { num: 'VII', title: 'Winter', ages: 'seventy-five and after', quote: 'You get old the way snow falls: slowly, and then you look up and everything is white.' },
  mood: 'winterMorning', music: 'winter', intensity: 0.2,
  ambience: { room: 0.5, clock: 0.45, wind: 0.35 },
  zoom: 8, surface: 'wood',
  bounds: { minX: -3.75, maxX: 3.75, minZ: -3.2, maxZ: 3.3 },
  hint: 'You are slower now. That’s alright. Nothing here is in a hurry either.',
  build(ctx) {
    const W = ctx.world;
    const r = ctx.r = buildKitchen(ctx, { night: false, winter: true, chairs: 2 });
    r.mug.visible = false; // the cups come later
    const me = ctx.me = makePlayer(AGE, -2.2, 1.7, Math.PI * 0.75, oldLook());
    me.giveCane(true);
    // the blue scarf, folded on the other chair
    const sc = P.box(0.42, 0.06, 0.3, SCARF_BLUE); W.add(sc, 1.85, 0.6, { y: 0.5 }); ctx.scarf = sc;
    // the kettle on the stove, the radio on the counter, the phone by the lamp
    ctx.kettle = W.add(kettle(), -2.6, -3.1, { y: 0.89 });
    ctx.radio = W.add(radio(), 0.35, -3.2, { y: 0.91 });
    ctx.phone = W.add(P.phone(), 3.0, -2.95, { y: 0.71, ry: 0.4 });
    // the yard through the window, under a skin of frost
    const view = new THREE.Mesh(new THREE.PlaneGeometry(1.62, 1.24), new THREE.MeshBasicMaterial({ map: windowViewTex() }));
    W.add(view, 1.4, -3.437, { y: 1.85 });
    ctx.frost = new THREE.Mesh(new THREE.PlaneGeometry(1.62, 1.24), new THREE.MeshBasicMaterial({ map: frostTex(), transparent: true, opacity: 0.85, depthWrite: false }));
    W.add(ctx.frost, 1.4, -3.43, { y: 1.85 });
    // three frames on the wall, a little crooked
    ctx.frames = [['wedding', 1.6, 2.0, 0.09], ['coat', 2.6, 2.4, -0.12], ['cake', 1.8, 1.6, 0.07]].map(([k, z, y, tilt]) => {
      const f = P.frame([C.wood, C.woodDark, C.white][['wedding', 'coat', 'cake'].indexOf(k)], memoryTex(k), 0.5, 0.4);
      W.add(f, -3.885, z, { y, ry: Math.PI / 2 }); f.rotation.z = tilt; return f;
    });
    // cups, waiting in the cupboard
    ctx.cups = [P.mug(C.white), P.mug(0xa9c6e6)];
    ctx.cups.forEach((m) => { m.visible = false; W.add(m, 0, 0, { y: 0.75 }); });
    // the phone rings once enough of the morning has passed
    const ringer = new THREE.Object3D(); W.root.add(ringer);
    let rt = 0;
    ringer.userData.update = (dt) => {
      const h = ctx.hotspot('phone');
      if (!h || !h.enabled || h.done) { ctx.phone.rotation.z = 0; return; }
      rt -= dt;
      if (rt <= 0) { rt = 2.6; sfx('phone', { vol: 0.8 }); if (!ctx.rangOnce) { ctx.rangOnce = true; G.ui.hint('The phone is ringing.', 5); } }
      ctx.phone.rotation.z = rt > 1.9 ? Math.sin(G.time * 60) * 0.08 : 0;
    };
    W.track(ringer);
    // secret: walk all the way round the table, the way {child} used to at three
    let lastA = null, turned = 0;
    secret(W, () => {
      const p = me.position, dx = p.x - 0.9, dz = p.z - 0.6;
      if (Math.hypot(dx, dz) > 2.3) { lastA = null; turned = 0; return false; }
      const a = Math.atan2(dz, dx);
      if (lastA !== null) turned += Math.atan2(Math.sin(a - lastA), Math.cos(a - lastA));
      lastA = a;
      return Math.abs(turned) > Math.PI * 2;
    }, () => {
      lower('Round and round the table — the way {child} used to run, at three, shrieking, with you pretending you couldn’t catch {them}.', { block: false, hold: 7 });
      achieve('ch7_egg_table', 'Round and Round', 'Walked all the way around the kitchen table, like a three-year-old.');
    });
  },
  async intro(ctx) {
    await wait(0.4);
    await fadeIn(4);
    await lower('The house wakes slowly now. So do you.');
    await think('Kettle first. Then the world.');
  },
  moments: [
    {
      id: 'twoCups', label: 'Make tea', at: [-1.7, -2.35], caption: 'Two cups, still',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(-2.0, -2.45); me.face(-2.6, -3.2);
        await camTo(-1.6, -2.4, 5.6, 2);
        const k = ctx.kettle;
        await sequence({
          label: 'Fill the kettle · light the stove · pour', keys: ['up', 'right', 'down'],
          onStep: (i) => {
            if (i === 0) { sfx('splash', { vol: 0.4 }); tween(0.6, (t) => { k.position.y = 0.89 + Math.sin(t * Math.PI) * 0.15; }); }
            if (i === 1) { sfx('fwip', { vol: 0.6 }); steam(ctx.world, -2.48, 1.12, -3.1); }
            if (i === 2) { sfx('blow', { vol: 0.4 }); tween(0.8, (t) => { k.rotation.z = Math.sin(t * Math.PI) * 0.7; }); }
          },
        });
        ctx.cups[0].position.set(-1.0, 0.91, -3.1); ctx.cups[1].position.set(-0.75, 0.91, -3.1);
        ctx.cups.forEach((c) => { c.visible = true; });
        sfx('tap'); await wait(0.3); sfx('tap', { vol: 0.7 });
        await wait(0.8);
        await lower('You take down two cups. You always take down two cups.');
        await lower('Your hands have been doing it for fifty years. Nobody has told them.');
        // carry them to the table
        me.setPose('idle');
        ctx.cups.forEach((c) => { c.visible = false; });
        await me.walkTo(0.9, -0.9); me.face(0.9, 0.6);
        ctx.cups[0].position.set(0.85, 0.75, 0.2); ctx.cups[1].position.set(1.38, 0.75, 0.62);
        ctx.cups.forEach((c) => { c.visible = true; });
        steam(ctx.world, 0.85, 0.9, 0.2); steam(ctx.world, 1.38, 0.9, 0.62);
        sfx('tap', { vol: 0.6 });
        await camTo(1.2, 0.3, 5.0, 1.8);
        await think('Oh.');
        await lower('You leave it where it is. It’s warm, and it’s theirs.');
        await keep('twoCups', 'Two cups, still');
        await camFollow(me, 8);
      },
    },
    {
      id: 'samChair', label: 'Sit at the table', at: [2.55, 1.35], caption: 'The blue scarf on the other chair',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(0.9, -0.95);
        me.giveCane(false);
        me.place(0.9, -0.38, 0); me.setPose('sit', { h: 0.45 });
        me.lookAt(new THREE.Vector3(1.85, 0, 0.6));
        await camTo(1.35, 0.25, 4.6, 2.5);
        await lower('A blue scarf, folded on the other chair.');
        await lower('Every morning, for fifty years, Sam read the paper out loud at this table. Only the good parts.');
        await say({ position: new THREE.Vector3(1.85, 1.2, 0.6) }, '“Listen to this one.”', { name: 'Sam', hold: 2.6 });
        const glow = P.glowSprite(0xcfe2ff, 1.6, 0); ctx.world.add(glow, 1.85, 0.6, { y: 1.0 });
        tween(5, (t) => { glow.material.opacity = Math.sin(t * Math.PI) * 0.35; });
        await stillness({ seconds: 6, label: 'Sit with them a while.' });
        sfx('rustle', { vol: 0.25 });
        await lower('Some mornings you could swear you hear the paper rustle.');
        await keep('samChair', 'The blue scarf on the other chair');
        ctx.world.remove(glow);
        me.lookAt(null); me.setPose('idle'); me.giveCane(true);
        me.position.set(0.9, 0, -0.95);
        await camFollow(me, 8);
      },
    },
    {
      id: 'window', label: 'Look out of the window', at: [1.4, -2.55], caption: 'The tree, enormous and bare',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(0.62, -2.5); me.face(1.4, -3.6);
        await G.renderer.cameraTo({ x: 1.25, y: 1.4, z: -2.9 }, 3.8, 2); // the window, not the back of your head
        const fr = ctx.frost;
        await hold({ label: 'Hold Space to wipe the frost away', seconds: 3, onProgress: (p) => { fr.material.opacity = 0.85 * (1 - p); } });
        fr.material.opacity = 0;
        amb({ room: 0.5, clock: 0.45, wind: 0.6 }, 2);
        await stillness({ seconds: 4, label: 'Look at it.' });
        await lower('Out in the snow, the family tree. Enormous now, and bare.');
        await lower('You planted it with Grandpa when it was a stick with two leaves. You were married under it. A swing hung from it.');
        await lower('The rope is still there, white with frost. Nobody could bear to take it down.');
        await keep('window', 'The tree, enormous and bare');
        amb({ room: 0.5, clock: 0.45, wind: 0.35 }, 2);
        tween(6, (t) => { fr.material.opacity = 0.5 * t; });
        await camFollow(me, 8);
      },
    },
    {
      id: 'radio', label: 'Turn on the radio', at: [0.35, -2.45], caption: 'Dancing with the radio',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(0.35, -2.5); me.face(0.35, -3.3);
        sfx('tap'); await wait(0.4);
        G.audio.muffle(0.62, 1);
        music('together', { intensity: 0.35, immediate: true });
        await camTo(0.4, -2.0, 5.2, 2);
        await lower('A crackle, and then — the waltz. The one from the lantern festival.');
        if (G.state.flags.danced) await lower('Under the lanterns, a lifetime ago, you stepped on their feet twice. They said it was the best dance of their life.');
        else await lower('You never danced that night at the festival. You made up for it in this kitchen, for fifty years.');
        me.giveCane(false);
        await me.walkTo(0.6, -1.6);
        me.setPose('waltz');
        const h0 = me.heading;
        let wt = 0; const sway = (dt) => { wt += dt; me.targetHeading = h0 + Math.sin(wt * 0.9) * 0.6; me.tilt = Math.sin(wt * 1.8) * 0.04; };
        G.updaters.add(sway);
        await rhythm({ label: 'Sway — press Space on the first beat of each bar', hits: 4, onlyDownbeat: true, window: 0.35 });
        await lower('Your left hand still knows exactly where their shoulder was.');
        await keep('radio', 'Dancing with the radio');
        G.updaters.delete(sway); me.tilt = 0;
        me.setPose('idle'); me.giveCane(true);
        music('winter', { intensity: 0.2 });
        G.audio.muffle(0, 3);
        await camFollow(me, 8);
      },
    },
    {
      id: 'photos', label: 'The photographs on the wall', at: [-3.05, 2.05], caption: 'Three frames, straightened',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(-3.1, 2.0); me.face(-4, 2.0);
        await camTo(-3.4, 2.0, 4.0, 2);
        await lower('A wedding under a tree. A birthday cake with five candles. {child}, in a coat three sizes too big, laughing.');
        await tap({ count: 3, label: 'Straighten them', onTap: (n) => { const f = ctx.frames[n - 1]; const z0 = f.rotation.z; tween(0.4, (t) => { f.rotation.z = z0 * (1 - t); }); sfx('tap'); } });
        await lower('{They} had been laughing at the neighbour’s dog. You remember that.');
        await think('I still remember that.');
        await keep('photos', 'Three frames, straightened');
        await camFollow(me, 8);
      },
    },
    {
      id: 'plant', label: 'Water Sam’s plant', at: [2.85, 2.2], caption: 'A new leaf on Sam’s plant',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(2.85, 2.15); me.face(3.4, 2.7);
        me.setPose('reachForward');
        await camTo(2.7, 1.9, 4.6, 2);
        await hold({ label: 'Hold Space to water it, slowly', seconds: 3, onProgress: (p, h) => { if (h && Math.random() < 0.05) sfx('splash', { vol: 0.15 }); } });
        me.setPose('idle');
        await lower('Sam’s plant. Thirty years old, and still putting out new leaves out of pure stubbornness.');
        await say(me, 'Good morning. Look at you. Look at that new leaf.');
        await lower('You talk to it the way they did. It doesn’t answer. You know what they would have said anyway.');
        await keep('plant', 'A new leaf on Sam’s plant');
        await camFollow(me, 8);
      },
    },
    {
      id: 'phone', kind: 'story', label: 'Answer the phone', at: [2.75, -2.45], radius: 1.3, caption: 'The phone call',
      requires: ['twoCups'],
      when: (ctx) => HOUSE_LITTLE.filter((id) => ctx.done(id)).length >= 3,
      async run(ctx) {
        const me = ctx.me, ph = ctx.phone;
        await me.walkTo(2.75, -2.55); me.face(3.0, -2.95);
        me.setPose('think');
        await camTo(2.4, -2.2, 5.0, 1.5);
        const voice = { position: new THREE.Vector3(3.0, 1.1, -2.95) };
        await say(me, 'Hello?');
        await say(voice, '{me}! It’s me. Did I wake you?', { name: '{child}' });
        await say(me, 'Sweetheart, at my age nobody wakes me. I wake the birds.');
        await say(voice, 'Listen — we’re coming for the holidays. All of us.', { name: '{child}' });
        await say(voice, 'Pip can’t stop talking about you. It’s {grandme} this, {grandme} that, all day long.', { name: '{child}' });
        await say(voice, 'HI {grandme}!!', { name: 'Pip', small: true });
        me.setPose('laugh'); sfx('giggle', { pitch: 0.8, vol: 0.5 });
        await wait(1.2);
        me.setPose('think');
        await say(voice, 'We’ll be there Saturday. And don’t shovel the path. I mean it.', { name: '{child}' });
        await say(me, 'I’ll make up the beds.');
        sfx('tap');
        me.setPose('idle');
        music('winterWarm', { intensity: 0.3 });
        mood('winterMorning', 7, { saturation: 0.62, warmth: 0.12, bloom: 0.42 });
        await lower('When you put the phone down, the kitchen looked different. As if someone had opened a window.');
        await keep('phone', 'The phone call');
        achieve('ch7_coming_home', 'Coming Home', 'Answered the phone on a quiet winter morning.');
        await lower('Saturday came slowly. And then, all at once.');
        await fadeOut(3, '#f2f4f8');
      },
    },
  ],
  final: 'phone',
};

// ---------------------------------------------------------------------
// 2. The snow day — colour returns only around Pip
// ---------------------------------------------------------------------
export const snowDay = {
  id: 'ch7-snow', chapter: 7,
  mood: 'winterMorning', music: 'winterWarm', intensity: 0.3,
  ambience: { wind: 0.3 },
  zoom: 10.5, surface: 'snow',
  hint: 'They’re here. Go and meet them at the gate.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildYard(ctx, { season: 'winter', treeStage: 4, swing: true, flowers: false });
    W.bounds = { minX: -9.2, maxX: 8.2, minZ: -3.4, maxZ: 6.6 };
    const me = ctx.me = makePlayer(AGE, -4.6, -1.4, Math.PI, oldLook({ shirt: 0x7a6a62, scarf: 0xb8574a }));
    me.giveCane(true);
    const kl = childLook(10);
    ctx.kid = person({ ...kl, hairStyle: G.state.childKind === 'son' ? 'short' : 'bob', shirt: 0x6d82a6, pants: 0x45434f, scarf: 0xe2a24c }, 47, '{child}', -5.6, 8.6, Math.PI);
    ctx.kid.setOutfit({ shirt: 0x6d82a6, pants: 0x45434f }); // a winter coat for a grown-up
    ctx.pip = person(LOOKS.pip, 5, 'Pip', -4.6, 8.6, Math.PI);
    ctx.kid.root.visible = ctx.pip.root.visible = false;
    ctx.car = P.car(0x8f9fb8); W.add(ctx.car, -18, 9.3);
    W.add(P.sled(C.red), -1.7, -2.4, { ry: 0.3 });
    ctx.snowmanAt = [0.7, 1.6];
    ctx.snowman = null; ctx.snowStage = 0;
    ctx.setSnowman = (n) => {
      const [sx, sz] = ctx.snowmanAt;
      if (ctx.snowman) W.remove(ctx.snowman);
      ctx.snowman = P.snowman(n); W.add(ctx.snowman, sx, sz, { ry: 0.6 }); ctx.snowStage = n;
      W.burst(new THREE.Vector3(sx, 0.6 + n * 0.2, sz), { count: 16, color: 0xffffff, speed: 1.2 });
      if (n === 1) W.addCollider({ x: sx, z: sz, r: 0.45 });
    };
    // if you sit with {child} first, Pip gets on with the snowman alone
    const builder = new THREE.Object3D(); W.root.add(builder);
    let bt = 0;
    builder.userData.update = (dt) => {
      if (!ctx.pipBuilding) return;
      bt += dt;
      const want = Math.min(4, 1 + Math.floor(bt / 4));
      if (want > ctx.snowStage) { ctx.setSnowman(want); sfx('thud', { vol: 0.25 }); }
      if (want >= 4) { ctx.pipBuilding = false; ctx.pip.setPose('jump'); }
    };
    W.track(builder);
    // secret: a card from Theo in the mailbox
    secret(W, () => Math.hypot(me.position.x + 6.4, me.position.z - 6.0) < 0.95, () => {
      me.face(-6.4, 6.4); sfx('rustle');
      lower('A card in the mailbox, in Theo’s spidery writing: “Still the better stone-skipper. Tea when the snow stops? — T.”', { block: false, hold: 8 });
      achieve('ch7_egg_theo', 'Still Neighbours', 'Found Theo’s card in the mailbox.');
    });
    W.particlesOf('snow', { count: 200, area: { w: 30, h: 12, d: 30 } });
    // colour only around Pip
    ctx.focusOn = false; ctx.focusR = 0.0; ctx.focusGoal = 0.35; ctx.focusDesat = 0.85;
    const fx = new THREE.Object3D(); W.root.add(fx);
    fx.userData.update = (dt) => {
      if (!ctx.focusOn) return;
      ctx.focusR = damp(ctx.focusR, ctx.focusGoal, 0.9, dt);
      const p = ctx.pip.position.clone(); p.y += 0.55;
      const sp = G.renderer.project(p);
      const o = G.renderer.overrides;
      o.focusX = sp.x / window.innerWidth; o.focusY = 1 - sp.y / window.innerHeight;
      o.focusRadius = ctx.focusR; o.focusDesat = ctx.focusDesat;
    };
    W.track(fx);
    ctx.grow = () => { const n = ['snowman', 'angels', 'treeTale', 'snowball', 'gift', 'porch'].filter((id) => ctx.done(id)).length; ctx.focusGoal = 0.35 + n * 0.11; };
  },
  async intro(ctx) {
    G.renderer.setMood('winterMorning', 0, { saturation: 0.3 });
    await fadeIn(3);
    await lower('Saturday. You shovelled the path anyway.');
    sfx('engine', { vol: 0.6 });
    const car = ctx.car;
    camTo(-6, 4.5, 11, 3);
    await tween(4, (t) => { car.position.x = -18 + t * 11.2; }, (x) => 1 - Math.pow(1 - x, 2));
    await camFollow(ctx.me, 10.5);
  },
  moments: [
    {
      id: 'arrive', kind: 'story', label: 'Meet them at the gate', at: [-5, 5.0], radius: 1.4, caption: 'Pip, running up the path',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip, kid = ctx.kid;
        await me.walkTo(-5, 5.2); me.face(-5, 8);
        sfx('door');
        pip.root.visible = kid.root.visible = true;
        pip.place(-4.6, 8.7, Math.PI); kid.place(-5.8, 8.7, Math.PI);
        await camTo(-5, 6.6, 7.5, 1.5);
        // colour, wherever Pip goes
        ctx.focusOn = true; ctx.focusR = 0.02; ctx.focusGoal = 0.35;
        mood('winterMorning', 3, { saturation: 1.0, warmth: 0.05 });
        say(pip, '{grandme}!', { passive: true, hold: 1.4 });
        await pip.walkTo(-5.0, 7.0, { speed: 3.6 });
        await pip.walkTo(me.position.x + 0.15, me.position.z + 0.5, { speed: 3.6 });
        pip.faceChar(me); me.faceChar(pip);
        me.giveCane(false); me.setPose('hug'); pip.setPose('hug');
        sfx('giggle');
        await lower('And there it was. Colour — wherever Pip went.');
        await say(pip, '{grandme}, it SNOWED.');
        await say(me, 'It did. I ordered it specially.');
        kid.walkTo(-3.9, 4.4).then(() => kid.faceChar(me));
        await keep('arrive', 'Pip, running up the path');
        me.setPose('idle'); pip.setPose('idle'); me.giveCane(true);
        await say(kid, 'You shovelled the path. I told you not to shovel the path.');
        await say(me, 'I had help. The shovel did most of it.');
        await say(kid, 'I’ll take the bags in. Pip — be gentle with {grandme}.');
        await say(pip, 'I’m ALWAYS gentle.');
        kid.walkTo(-3.6, -1.4).then(() => { kid.place(-2.8, -2.05, 0); kid.setPose('sit', { h: 0.45 }); kid.lookAt(pip); });
        pip.setPose('reach'); // tugging at your sleeve
        const first = await choose('Pip is already tugging at your sleeve…', ['Go out into the snow with Pip', 'Sit with {child} on the porch first']);
        pip.setPose('idle');
        if (first === 0) {
          ctx.flags.ch7First = 'snow';
          await say(pip, 'YES! Come ON!');
          achieve('ch7_snow_first', 'Snow First', 'Went straight out into the snow with Pip.');
          pip.follow(me, 1.1);
        } else {
          ctx.flags.ch7First = 'talk';
          await say(me, `Give me ten minutes with your ${pipParent() === 'Mom' ? 'mom' : 'dad'}, Pip. Then I’m all yours.`);
          await say(pip, 'Fine. But I’m starting the snowman WITHOUT you.');
          achieve('ch7_talk_first', 'Grown-up Talk', 'Sat with your child on the porch before going out to play.');
          const h = ctx.hotspot('snowman'); if (h) h.label = 'Finish Pip’s snowman';
          const [sx, sz] = ctx.snowmanAt;
          pip.walkTo(sx + 0.85, sz - 0.45, { speed: 3.2 }).then(() => { pip.face(sx, sz); pip.setPose('push'); ctx.pipBuilding = true; });
        }
        await camFollow(me, 10.5);
      },
    },
    {
      id: 'snowman', label: 'Build a snowman with Pip', at: [0.7, 2.6], requires: ['arrive'], when: (ctx) => ctx.flags.ch7First !== 'talk' || ctx.done('porch'), caption: 'A snowman called Biscuit',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip, W = ctx.world;
        const [sx, sz] = ctx.snowmanAt;
        pip.follow(null);
        // either side of the snowman, as the camera sees it
        pip.walkTo(sx + 0.85, sz - 0.45).then(() => pip.face(sx, sz));
        await me.walkTo(sx - 0.45, sz + 0.85); me.face(sx, sz);
        await camTo(sx + 0.2, sz + 0.2, 6, 1.5);
        const setStage = ctx.setSnowman;
        ctx.pipBuilding = false;
        if (ctx.snowStage >= 3) {
          // Pip built it alone while you talked on the porch
          pip.setPose('idle');
          if (ctx.snowStage < 4) setStage(4);
          await say(pip, 'I made him ALL BY MYSELF. You were too slow.');
          await say(me, 'He’s magnificent. He’s the best one on the street.');
          await say(pip, 'He just needs a hat. And arms. You do those.');
          await tap({ count: 2, label: 'Give him a hat · and arms', onTap: (n) => { sfx(n === 1 ? 'pop' : 'rustle', { vol: 0.5 }); if (n === 2) setStage(5); } });
        } else {
          me.setPose('push'); pip.setPose('push');
          await sequence({
            label: 'Roll the base · the middle · the head · then a face', keys: ['down', 'left', 'up', 'right'],
            onStep: (i) => { setStage(i + 1); sfx(i < 3 ? 'thud' : 'pop', { vol: 0.5 }); if (i === 2) { me.setPose('idle'); pip.setPose('reach'); } },
          });
          pip.setPose('idle');
          await say(pip, 'He needs a hat. And arms. And a NAME.');
          setStage(5);
        }
        sfx('sparkle', { vol: 0.5 });
        await say(me, 'What shall we call him?');
        await say(pip, 'Biscuit. Like the dog in your stories. The one who was patient.');
        await lower('You hadn’t said that name out loud in years. It came out warm.');
        pip.setPose('jump'); sfx('giggle');
        await keep('snowman', 'A snowman called Biscuit');
        pip.setPose('idle'); me.setPose('idle');
        pip.follow(me, 1.1); ctx.grow();
        await camFollow(me, 10.5);
      },
    },
    {
      id: 'angels', label: 'Lie down in the snow', at: [3.0, 4.4], requires: ['arrive'], when: (ctx) => ctx.flags.ch7First !== 'talk' || ctx.done('porch'), caption: 'Two snow angels, one big, one small',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip, W = ctx.world;
        pip.follow(null);
        pip.walkTo(3.7, 4.3);
        await me.walkTo(2.5, 4.3);
        await say(pip, 'Lie down! Like this!');
        me.giveCane(false);
        me.place(2.5, 4.3, Math.PI * 0.75); pip.place(3.6, 4.2, Math.PI * 0.75);
        me.setPose('lieBack'); pip.setPose('lieBack');
        sfx('thud', { vol: 0.4 });
        await camTo(3.0, 4.0, 5.2, 2);
        // flap: arms up, arms down
        let ft = 0, up = true; const flap = (dt) => { ft += dt; if (ft > 0.45) { ft = 0; up = !up; me.setPose(up ? 'lieBack' : 'lie'); pip.setPose(up ? 'lie' : 'lieBack'); if (Math.random() < 0.4) sfx('rustle', { vol: 0.3 }); } };
        G.updaters.add(flap);
        await wait(2.6);
        G.updaters.delete(flap);
        me.setPose('lieBack'); pip.setPose('lieBack');
        await say(pip, 'Yours is bigger than mine.');
        await say(me, 'I’ve had longer to practise.');
        await stillness({ seconds: 5, label: 'Look up at the snow falling.' });
        await lower('The snow kept falling on both of you. It didn’t seem to be in any hurry.');
        await keep('angels', 'Two snow angels, one big, one small');
        // the shapes you left behind
        for (const [x, z, s] of [[2.5, 4.3, 1], [3.6, 4.2, 0.7]]) {
          const a = new THREE.Group();
          a.add(P.disc(0.42 * s, C.snowShade, 10, 0.012));
          const wing = P.disc(0.5 * s, C.snowShade, 3, 0.011); a.add(wing);
          W.add(a, x, z, { ry: 0.8 });
        }
        pip.setPose('idle'); pip.place(3.6, 4.6);
        await lower('Getting up took longer than lying down. Pip helped.');
        me.setPose('idle'); me.place(2.5, 4.8); me.giveCane(true);
        pip.follow(me, 1.1); ctx.grow();
        await camFollow(me, 10.5);
      },
    },
    {
      id: 'treeTale', label: 'Show Pip the tree', at: [3.7, -0.4], requires: ['arrive'], when: (ctx) => ctx.flags.ch7First !== 'talk' || ctx.done('porch'), caption: 'The tree, taller than all of us',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip;
        pip.follow(null);
        pip.walkTo(4.75, -1.45).then(() => pip.face(4, -2.2));
        await me.walkTo(3.55, -1.2); me.face(4, -2.2);
        await G.renderer.cameraTo({ x: 3.6, y: 2.6, z: -1.4 }, 11, 2.5); // look up into the branches
        pip.setPose('reach');
        await say(pip, 'It’s so BIG.');
        await say(me, 'Your great-great-grandpa and I planted this. It was smaller than you are.');
        pip.setPose('idle'); pip.faceChar(me);
        await say(pip, 'Smaller than ME?');
        await say(me, 'Smaller than your boot. It had two leaves. We gave them names.');
        const tale = await choose('Tell Pip about…', ['Planting it with Grandpa', 'The wedding under it', 'The swing that hangs from it']);
        ctx.flags.toldPip = ['grandpa', 'wedding', 'swing'][tale];
        let caption = 'The tree, taller than all of us';
        if (tale === 0) {
          await say(me, 'Grandpa dug the hole. I was in charge of the watering can. I watered his shoes more than the tree.');
          await say(pip, 'Was he nice?');
          if (ctx.flags.satWithGrandpa === false) {
            await say(me, 'Very. He asked me to sit with him once, and I said “later”.');
            await say(me, 'He understood. He always did. But if somebody old ever asks you to sit with them, Pip — sit.');
          } else await say(me, 'The nicest. He always saved me a seat on the porch. And I always took it.');
          me.setPose('reachForward'); pip.setPose('reachForward');
          await hold({ label: 'Hold Space — put your hand on the bark, next to Pip’s', seconds: 3 });
          caption = 'The story of the watering can';
        } else if (tale === 1) {
          await say(me, 'Sam and I were married right here, under these branches. There were lanterns in it, and petals in everybody’s hair.');
          await say(pip, 'Did you dance?');
          if (ctx.flags.danced) await say(me, 'We did. I stepped on their feet. Twice. They said it didn’t count.');
          else await say(me, 'Not that day. We were too nervous. We danced later — in the kitchen, for fifty years.');
          pip.setPose('waltz'); sfx('giggle');
          await say(pip, 'Like THIS?');
          await say(me, 'Exactly like that.');
          caption = 'The wedding under the tree, told again';
        } else {
          await say(me, `Your ${pipParent() === 'Mom' ? 'mom' : 'dad'} used to swing on that, right there. “Higher! Higher!” Every single day.`);
          await say(pip, 'Can I? Please? PLEASE?');
          const kid = ctx.kid, sw = ctx.r.tree.userData.swing, L = ctx.r.tree.userData.swingLen;
          const piv = new THREE.Vector3(); sw.getWorldPosition(piv);
          kid.setPose('idle'); kid.lookAt(null);
          me.walkTo(piv.x - 0.05, piv.z - 1.05).then(() => me.face(piv.x, piv.z));
          await kid.walkTo(piv.x + 0.85, piv.z - 0.6);
          kid.face(piv.x, piv.z);
          await say(kid, 'Up you go. Hold on tight. It’s older than I am.');
          pip.place(piv.x, piv.z, 0); pip.setPose('swing', { h: 0.4 }); pip.extraY = piv.y - L - 0.37;
          sfx('creak', { vol: 0.5 });
          let amp = 0.05, st = 0; const swing = (dt) => { st += dt; const a = Math.sin(st * 2.1) * amp; sw.rotation.x = -a; pip.position.z = piv.z + Math.sin(a) * L; pip.extraY = piv.y - Math.cos(a) * L - 0.37; pip.lean = -a * 0.6; };
          G.updaters.add(swing);
          await camTo(piv.x - 0.6, piv.z + 0.4, 6.5, 1.5);
          me.setPose('push');
          await tap({ count: 4, label: 'Push — gently', onTap: () => { amp = Math.min(0.5, amp + 0.11); sfx('creak', { vol: 0.35 }); sfx('giggle', { delay: 0.3 }); } });
          me.setPose('idle');
          await say(pip, 'HIGHER!');
          await lower('Forty years, and the old swing still knew what to do.');
          achieve('ch7_swing_again', 'Higher, Higher', 'Pushed Pip on the old swing.');
          await tween(2, (t) => { amp = 0.5 * (1 - t); });
          G.updaters.delete(swing); sw.rotation.x = 0; pip.lean = 0; pip.extraY = 0;
          pip.place(piv.x + 0.3, piv.z + 0.9); pip.setPose('idle');
          kid.walkTo(-3.6, -1.4).then(() => { kid.place(-2.8, -2.05, 0); kid.setPose('sit', { h: 0.45 }); kid.lookAt(pip); });
          caption = 'Higher! Higher!';
        }
        await lower('Every year it gets a little bigger, and you get a little smaller. That seems fair.');
        await keep('treeTale', caption);
        me.setPose('idle'); pip.setPose('idle');
        pip.follow(me, 1.1); ctx.grow();
        await camFollow(me, 10.5);
      },
    },
    {
      id: 'snowball', label: 'Make a snowball', at: [-1.4, 4.2], requires: ['arrive'], when: (ctx) => ctx.flags.ch7First !== 'talk' || ctx.done('porch'), caption: 'Snowball fight (Pip won)',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip, W = ctx.world;
        pip.follow(null);
        await me.walkTo(-1.4, 4.0);
        me.setPose('crouch'); sfx('rustle', { vol: 0.4 });
        await wait(0.6); me.setPose('idle');
        await pip.walkTo(0.9, 4.9, { speed: 3.4 }); pip.faceChar(me); me.faceChar(pip);
        await camTo(-0.2, 4.4, 6.5, 1.5);
        await say(pip, 'You can’t get me! You’re too slow!');
        const throwBall = (from, to, hit) => {
          const b = P.ico(0.09, 0, C.snow); W.root.add(b);
          const a = from.clone(), z = to.clone();
          return tween(0.7, (t) => { b.position.lerpVectors(a, z, t); b.position.y += Math.sin(t * Math.PI) * 1.0; }, (x) => x).then(() => { W.root.remove(b); W.burst(z, { count: 14, color: 0xffffff, speed: 1.4 }); sfx('thud', { vol: 0.4 }); hit && hit(); });
        };
        const head = (c) => c.position.clone().add(new THREE.Vector3(0, c.height * 0.8, 0));
        // Pip dodges back and forth
        let dt0 = 0; const dodge = (dt) => { dt0 += dt; pip.position.x = 0.9 + Math.sin(dt0 * 2.2) * 0.8; };
        G.updaters.add(dodge);
        me.setPose('point');
        await timing({ label: 'Throw it — press Space when Pip is in the sweet spot', speed: 1.0, sweet: 0.2, tries: 4 });
        G.updaters.delete(dodge);
        me.setPose('idle');
        await throwBall(head(me), head(pip), () => { pip.setPose('laugh'); sfx('giggle'); });
        await wait(0.6);
        await say(pip, 'My turn!');
        pip.setPose('point');
        for (let i = 0; i < 3; i++) { await throwBall(head(pip), head(me), () => { me.setPose('laugh'); }); sfx('giggle', { delay: 0.1 }); }
        pip.setPose('jump');
        await lower('You got Pip once. Pip got you eleven times. Nobody was keeping score, except Pip.');
        await keep('snowball', 'Snowball fight (Pip won)');
        me.setPose('idle'); pip.setPose('idle');
        pip.follow(me, 1.1); ctx.grow();
        await camFollow(me, 10.5);
      },
    },
    {
      id: 'gift', kind: 'story', label: 'Give Pip something', at: [-2.4, 1.4], requires: ['arrive'], when: (ctx) => ctx.flags.ch7First !== 'talk' || ctx.done('porch'), caption: 'A gift for Pip',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip;
        pip.follow(null);
        await me.walkTo(-2.4, 1.2);
        const watch = !!G.state.flags.hasWatch;
        await camTo(-2.1, 0.9, 4.6, 2);
        await lower(watch ? 'Grandpa’s watch, still ticking on your wrist. It has been waiting for someone.' : 'Your scarf, the warm one. You’ve been meaning to give it to someone.');
        const now = await choose(watch ? 'The watch…' : 'The scarf…', ['Give it to Pip now', 'Keep it a little longer']);
        ctx.flags.giftNow = now === 0;
        if (now === 1) {
          await say(me, 'Pip! Come and tell me which snowflake is your favourite.');
          await pip.walkTo(-1.75, 0.6); pip.faceChar(me); me.faceChar(pip);
          await say(pip, 'That one. No — that one. They keep MOVING.');
          await lower(watch ? 'The watch stays on your wrist a little longer. Tonight, you decide, it can go in a box with a note.' : 'The scarf stays round your neck a little longer. Tonight, you decide, it can go in a box with a note.');
          await keep('gift', watch ? 'Grandpa’s watch, ticking a little longer' : 'Your scarf, a little longer');
          me.setPose('idle');
          pip.follow(me, 1.1); ctx.grow();
          await camFollow(me, 10.5);
          return;
        }
        await say(me, 'Pip. Come here a minute. I want to give you something.');
        await pip.walkTo(-1.75, 0.6); pip.faceChar(me); me.faceChar(pip);
        me.giveCane(false); me.setPose('kneel');
        if (watch) {
          const wch = new THREE.Group();
          wch.add(P.torus(0.06, 0.016, 4, 10, 0xd9b45a));
          const face = P.cyl(0.05, 0.05, 0.015, 10, 0xfff8e8); face.rotation.x = Math.PI / 2; wch.add(face);
          await say(me, 'This was my grandpa’s. He gave it to me on a porch, a lot like that one.');
          pip.armR.end.add(wch); wch.scale.setScalar(1 / pip.armR.end.scale.x);
          sfx('sparkle', { vol: 0.5 });
          pip.setPose('think'); // to the ear
          for (let i = 0; i < 4; i++) { sfx(i % 2 ? 'tock' : 'tick', { vol: 0.5 }); await wait(0.5); }
          await say(pip, 'It ticks.');
          await say(me, 'Time’s a funny thing…', { hold: 3 });
          await wait(0.6);
          await say(me, 'That’s what he told me. I didn’t understand it for about sixty years.');
          pip.setPose('idle');
          await say(pip, 'I don’t understand it either.');
          await say(me, 'Good. You’ve got time.');
          await keep('gift', 'Grandpa’s watch, on a smaller wrist');
          achieve('ch7_watch', 'Time’s a Funny Thing', 'Gave Grandpa’s watch to Pip.');
        } else {
          await say(me, 'Hold still. Your neck looks cold.');
          if (me.scarfM) me.scarfM.visible = false;
          if (pip.scarfM && me.scarfM) pip.scarfM.material = me.scarfM.material;
          sfx('rustle');
          await say(me, 'When I was small I was always in such a hurry to get somewhere. Nobody ever told me I was already there.');
          await say(me, 'So I’m telling you. You’re already there.');
          await say(pip, 'Where?');
          await say(me, 'Here.');
          await keep('gift', 'Your scarf, around a smaller neck');
          achieve('ch7_scarf', 'Already There', 'Gave Pip your scarf, and the words you never heard.');
        }
        me.setPose('idle'); me.giveCane(true);
        pip.follow(me, 1.1); ctx.grow();
        await camFollow(me, 10.5);
      },
    },
    {
      id: 'porch', kind: 'story', label: 'Sit on the porch with {child}', at: [-3.2, -1.3], radius: 1.3, requires: ['arrive'],
      when: (ctx) => ctx.flags.ch7First === 'talk' || SNOW_PLAY.filter((id) => ctx.done(id)).length >= 2, caption: 'They held you the way you once held them',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip, kid = ctx.kid;
        pip.follow(null);
        if (ctx.flags.ch7First !== 'talk') pip.walkTo(ctx.snowmanAt[0] - 0.7, ctx.snowmanAt[1] - 0.6).then(() => { pip.setPose('crouch'); });
        await me.walkTo(-3.6, -1.6);
        me.giveCane(false);
        me.place(-3.6, -2.05, 0); me.setPose('sit', { h: 0.45 });
        kid.lookAt(me);
        await camTo(-3.2, -1.7, 5.2, 2);
        const early = ctx.flags.ch7First === 'talk';
        if (early) {
          await say(kid, 'Sit. Pip will survive ten minutes without you. Probably.');
          await say(me, 'Pip will. I’m not so sure about me.');
          await say(kid, 'Can I tell you something? I’m always on my phone. At dinner. At bedtime. Just one more email, I tell myself.');
          await say(kid, 'Last week Pip asked me to watch a drawing happen. I said “in a minute”. Then I forgot.');
          const adv = await choose('You tell {them}…', ['“Put the phone away. It’ll keep. They won’t.”', '“You’re doing fine. You came home.”', 'About the emails you answered, once']);
          ctx.flags.ch7Advice = ['phone', 'fine', 'emails'][adv];
          if (adv === 0) {
            await say(me, 'Put the phone away. It’ll keep. They won’t.');
            await wait(0.8); await say(kid, '…Okay.');
            achieve('ch7_pass_it_on', 'Pass It On', 'Told your child to put the phone away.');
          } else if (adv === 1) {
            await say(me, 'You’re doing fine. You came home. That’s not nothing.');
            await say(kid, 'It doesn’t feel like enough.');
            await say(me, 'It never does. That’s how you know you’re doing it right.');
          } else {
            const n = G.state.stats?.emails ?? 0;
            if (n > 0) await say(me, `I answered ${n === 1 ? 'an email' : n + ' emails'} once, on days I should have been watching you. I can’t remember a single one of them.`);
            else await say(me, 'I didn’t have so many emails. But I had other ways of not quite being there. Everybody does.');
            await say(me, 'I remember every one of your drawings, though.');
            await say(kid, '…Even the purple horse?');
            await say(me, 'Especially the purple horse.');
            achieve('ch7_confession', 'What I Learned', 'Told your child about the emails you answered.');
          }
          await wait(0.6);
          await say(kid, 'Pip asks about you all the time. What you were like. What I was like.');
          await say(kid, 'I tell them you sang to me. Every night. Even when I said I was too old.');
        } else {
          await say(kid, 'Look at Pip. Counting the days since October.');
          await say(me, 'So was I.');
          await say(kid, 'Pip asks about you all the time. What you were like when you were small. What I was like.');
          await say(me, 'And what do you tell them?');
          await say(kid, 'That you sang to me. Every night. Even when I said I was too old.');
        }
        await wait(0.8);
        await say(kid, 'I never said it properly.');
        kid.setPose('idle'); kid.position.set(-2.8, 0, -1.6);
        me.setPose('idle'); me.position.set(-3.3, 0, -1.6);
        kid.faceChar(me); me.faceChar(kid);
        await wait(0.4);
        await say(kid, 'Thank you, {me}. For everything.');
        // stand them side by side across the screen so neither hides the other
        me.place(-3.42, -1.28); kid.place(-3.0, -1.7);
        kid.faceChar(me); me.faceChar(kid);
        kid.setPose('hug'); me.setPose('hug');
        sfx('heart', { vol: 0.5 });
        await camTo(-3.2, -1.45, 3.8, 2);
        await hold({ label: 'Hold on', seconds: 4 });
        await keep('porch', 'They held you the way you once held them');
        await lower('Once, {they} fit in the crook of your arm. Now {their} arms went all the way around you.');
        kid.setPose('idle'); me.setPose('idle');
        kid.place(-2.8, -2.05, 0); kid.setPose('sit', { h: 0.45 });
        me.place(-3.6, -1.5, 0); me.giveCane(true);
        if (early) { ctx.pipBuilding = false; if (ctx.snowStage < 4) ctx.setSnowman(4); await say(pip, '{grandme}! Come and SEE!'); }
        pip.setPose('idle'); pip.follow(me, 1.1); ctx.grow();
        await camFollow(me, 10.5);
      },
    },
    {
      id: 'pipHum', kind: 'story', label: 'Sit with Pip as the light goes', at: [-3.3, -1.0], radius: 1.4, requires: ['porch', 'gift'], caption: 'The song, three generations later',
      async run(ctx) {
        const me = ctx.me, pip = ctx.pip, kid = ctx.kid;
        mood('winterDusk', 8, { saturation: 1.0 });
        amb({ wind: 0.15 }, 4);
        kid.setPose('idle'); kid.lookAt(null);
        await say(kid, 'I’ll start dinner. Ten minutes, Pip.');
        kid.walkTo(-5, -3.0).then(() => { sfx('door', { vol: 0.6 }); kid.root.visible = false; });
        pip.follow(null);
        await me.walkTo(-3.6, -1.6);
        me.giveCane(false);
        me.place(-3.6, -2.05, 0); me.setPose('sit', { h: 0.45 });
        await pip.walkTo(-2.95, -1.6);
        pip.place(-2.95, -2.05, 0); pip.setPose('sit', { h: 0.45 });
        pip.tilt = 0.14;
        await camTo(-3.3, -1.7, 4.2, 3);
        music('pipHum', { intensity: 0.4 });
        await wait(1.2);
        await say(pip, '♪ Hmm-hm, hmm-hm… hmm hm hm…', { passive: true, hold: 3.5 });
        await say(me, 'Where did you learn that one?');
        await say(pip, `${pipParent()} sings it to me. Every night. Even when I say I’m too big.`);
        // the colour spreads until it fills the world
        ctx.focusGoal = 2.8;
        tween(7, (t) => { ctx.focusDesat = 0.85 * (1 - t); });
        await stillness({ seconds: 7, label: 'Just listen.' });
        await lower('Your mother’s song. Then yours. Then {child}’s.');
        await lower('Now Pip’s.');
        await keep('pipHum', 'The song, three generations later', { window: 10 });
        achieve('ch7_three_generations', 'Three Generations', 'Heard Pip hum the lullaby.');
        await lower('And for a moment, the whole world was in colour again.');
        await wait(1.5);
        pip.tilt = 0;
        await fadeOut(3.5, '#14121c');
      },
    },
  ],
  final: 'pipHum',
  async outro() {
    await narrate(['That night, the house was full of small sounds.', 'Breathing through the walls. A creak on the stairs. Someone small, turning over in their sleep.'], { minTime: 1.3 });
    G.ui.clearNarration();
    await wait(1);
  },
};

// ---------------------------------------------------------------------
// 3. The last night — back where the story began
// ---------------------------------------------------------------------
export const lastNight = {
  id: 'ch7-night', chapter: 7,
  mood: 'kitchenNight', music: 'winterWarm', intensity: 0.15,
  ambience: { room: 0.5, clock: 0.35, wind: 0.2 },
  zoom: 8.5, surface: 'wood',
  bounds: { minX: -3.8, maxX: 3.8, minZ: -3.3, maxZ: 3.3 },
  hint: 'Everyone is asleep. Take your time.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildKitchen(ctx, { night: true, chairs: 2 });
    const me = ctx.me = makePlayer(AGE, -1.6, 1.6, Math.PI * 0.75, oldLook());
    me.giveCane(true);
    const sc = P.box(0.42, 0.06, 0.3, SCARF_BLUE); W.add(sc, 1.85, 0.6, { y: 0.5 });
    ctx.albumObj = W.add(P.photoAlbum(), 1.1, 0.75, { y: 0.75, ry: 0.3 });
    // Pip's red hat, left on the table; Pip's drawing on the fridge
    const hat = new THREE.Group();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.12, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2), P.mat(0xd9584a)); hat.add(dome);
    const bob = P.ico(0.04, 0, C.white); bob.position.y = 0.13; hat.add(bob);
    W.add(hat, 0.55, 0.85, { y: 0.75 });
    const dr = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.33), new THREE.MeshBasicMaterial({ map: drawingTex() }));
    W.add(dr, -3.215, -1.85, { y: 1.3, ry: Math.PI / 2 }); dr.rotation.z = 0.05;
    const mag = P.box(0.05, 0.05, 0.02, 0xd9584a); W.add(mag, -3.21, -1.85, { y: 1.47, ry: Math.PI / 2 });
    // secret: stand at the window long enough and someone comes to visit
    let still = 0;
    secret(W, (dt) => { const near = Math.hypot(me.position.x - 1.4, me.position.z + 2.55) < 0.9; still = near && !me._playerMoving ? still + dt : 0; return still > 6; }, () => {
      me.face(1.4, -4);
      lower('A fox picks its way across the snow, stops under the old tree, and looks straight at the window. Then it is gone.', { block: false, hold: 8 });
      achieve('ch7_egg_fox', 'The Night Visitor', 'Stood at the window long enough to see who visits at night.');
    });
  },
  async intro(ctx) {
    await wait(0.5);
    await fadeIn(4);
    await lower('It is late, and the house is quiet again.');
    await think('But it’s a different kind of quiet now.');
  },
  moments: [
    {
      id: 'wrap', label: 'A box for Pip', at: [2.4, 1.7], when: (ctx) => ctx.flags.giftNow === false,
      async run(ctx) {
        const me = ctx.me, W = ctx.world;
        const watch = !!G.state.flags.hasWatch;
        await me.walkTo(2.3, 1.5); me.face(1.85, 0.6);
        await camTo(1.9, 1.0, 4.2, 2);
        const box = P.giftBox(0xd9584a, C.white, 0.22); W.add(box, 1.45, 0.95, { y: 0.75, ry: 0.4 }); box.scale.setScalar(0.01);
        tween(0.6, (t) => box.scale.setScalar(Math.max(0.01, t)));
        await lower(watch ? 'You take off Grandpa’s watch for the last time, and lay it in a little box.' : 'You fold the scarf small enough to fit in a little box.');
        await hold({ label: 'Hold Space to write the note', seconds: 3, onProgress: (p, h) => { if (h && Math.random() < 0.05) sfx('tap', { vol: 0.2 }); } });
        await lower(watch ? '“For Pip. For when time feels funny.”' : '“For Pip. You’re already there.”');
        await lower('You leave it where small hands will find it in the morning.');
        await keep('wrap', 'A small box with Pip’s name on it');
        achieve('ch7_gift_later', 'A Little Longer', 'Kept the gift a little longer, then left it with a note.');
        await camFollow(me, 8.5);
      },
    },
    {
      id: 'drawing', label: 'Pip’s drawing on the fridge', at: [-2.6, -1.4], caption: 'Pip’s drawing on the fridge',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(-2.6, -1.6); me.face(-3.6, -1.85);
        await camTo(-3.0, -1.8, 3.8, 2);
        await lower(`Two snow people — one big, one small — and a sun with a face. Underneath, in careful letters: ME + ${grandMe().toUpperCase()}.`);
        await stillness({ seconds: 4, label: 'Look at it a little longer.' });
        await lower('It is the best thing anyone has ever put on that fridge. You will tell everyone so.');
        await keep('drawing', 'Pip’s drawing on the fridge');
        await camFollow(me, 8.5);
      },
    },
    {
      id: 'listen', label: 'Listen to the house', at: [-2.9, 2.6], caption: 'A house full of sleeping people',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(-2.9, 2.7); me.face(-3.6, 3.2);
        await camZoom(6.5, 2);
        amb({ room: 0.25, clock: 0.2, wind: 0.1 }, 2);
        await stillness({ seconds: 6, label: 'Be very still.', onProgress: (p) => { if (Math.random() < 0.006) sfx('creak', { vol: 0.25 }); } });
        await lower('Upstairs, three people are asleep. If you are very still, you can hear them.');
        await lower('It is the same quiet as before. But now it is full.');
        await keep('listen', 'A house full of sleeping people');
        amb({ room: 0.5, clock: 0.35, wind: 0.2 }, 3);
        await camZoom(8.5, 2);
      },
    },
    {
      id: 'album', kind: 'story', label: 'Open the album', at: [0.4, 0.2], caption: null,
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(0.9, -0.55);
        me.giveCane(false);
        me.faceNow(0.9, 0.6);
        me.setPose('read', { h: 0.45 });
        me.position.set(0.9, 0, -0.35);
        await camTo(0.9, 0.3, 5.8, 3);
        music('title', { intensity: 0.25 });
        await lower('And here you are again. The kitchen, the snow, the album.');
        await lower('“For all the little moments,” the card said.');
        const n = G.album.count();
        const m = Math.max(1, G.album.registry.size);
        if (n === 0) await lower('The pages are empty. You were too busy living to take pictures. That happens.');
        else if (n < m * 0.35) await lower('Not so many pictures. But you can feel the ones that are missing, like a step in the dark.');
        else await lower('So many pages. And look — look how many you kept.');
        await think('Just once more. From the beginning.');
        await stillness({ seconds: 4, label: 'Turn the first page.' });
        sfx('rustle');
        intensity(0.6, 4);
        mood('dream', 6);
        await narrate(['You turn the pages slowly.', 'And somewhere between one page and the next —', '— you close your eyes.'], { minTime: 1.3 });
        await fadeOut(3, '#fff6ee');
        G.ui.clearNarration();
        await fadeColor('#16121a', 2.5);
      },
    },
  ],
  final: 'album',
};
