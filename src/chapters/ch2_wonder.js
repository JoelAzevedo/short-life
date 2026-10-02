// CHAPTER II — WONDER (5–7)
// Summer. The yard is a whole country and the days are a hundred years long.
// The clock appears, but gently: it is only the sun, moving.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng } from '../engine/game.js';
import { LOOKS } from '../engine/character.js';
import { narrate, lower, say, think, wait, keep, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, intensity, hop, choose, shake } from '../engine/story.js';
import { stillness, tap, rhythm, balance, sequence, collect, hold, timing } from '../engine/minigames.js';
import { buildYard, makePlayer, person, dog, skyDressing } from './places.js';

// ---------------------------------------------------------------------
// small helpers shared by both scenes
// ---------------------------------------------------------------------
// a per-frame callback that dies with the current diorama
function loop(fn) {
  const W = G.world;
  const f = (dt) => { if (G.world !== W) { G.updaters.delete(f); return; } fn(dt); };
  G.updaters.add(f);
  return () => G.updaters.delete(f);
}
// put a prop in a character's hand
function holdIn(c, obj, { side = 'R', y = -0.04, x = 0, z = 0.02 } = {}) {
  const end = (side === 'R' ? c.armR : c.armL).end;
  const k = 1 / end.scale.x;
  obj.scale.multiplyScalar(k);
  obj.position.set(x * k, y * k, z * k);
  end.add(obj);
  return obj;
}
function drop(obj) { obj.parent?.remove(obj); obj.scale.setScalar(1); }
// a hidden moment: no glow, no prompt — it just happens when you wander into it
function secret(ctx, { id, x, z, r = 0.9, when = null, trigger = null, run }) {
  const W = ctx.world;
  const h = W.hotspot({ id, label: '', kind: 'quiet', x, z, radius: r, enabled: false });
  h.m = { id, when: () => false, run };
  const watch = new THREE.Object3D();
  watch.userData.update = () => {
    const d = ctx.director;
    if (h.done || !d.control || d.inMoment || !G.player || G.world !== W) return;
    if (when && !when()) return;
    const hit = trigger ? trigger() : Math.hypot(G.player.position.x - x, G.player.position.z - z) < r;
    if (hit) d.runMoment(h);
  };
  W.add(watch, 0, 0);
  return h;
}
function littlesDone(ctx) { return ctx.world.hotspots.filter((h) => h.done && (h.m?.kind ?? 'little') === 'little').length; }
function clockOver(ctx) { return !!ctx.director.clock?.over; }
// a simple ball / pebble / marshmallow arc
function arc(obj, from, to, seconds, height = 1.5) {
  return tween(seconds, (t) => {
    obj.position.lerpVectors(from, to, t);
    obj.position.y = from.y + (to.y - from.y) * t + Math.sin(t * Math.PI) * height;
  }, (x) => x);
}

// ---------------------------------------------------------------------
// II.1 — The garden, a summer day
// ---------------------------------------------------------------------
const NEIGHBOURS = [
  { look: { skin: C.skin[3], hair: 0xd8d4cf, hairStyle: 'bun', shirt: 0xc9a0dc, pants: 0x5a5a6a, dress: true, glasses: true }, age: 72, name: 'Mrs. Okafor' },
  { look: { skin: C.skin[1], hair: 0x8a5a3a, hairStyle: 'short', shirt: 0xe46a5a, pants: 0x3a3a48 }, age: 34, name: 'A jogger' },
  { look: { skin: C.skin[2], hair: 0x2a2020, hairStyle: 'short', shirt: 0x7a9ac8, pants: 0x3d4f7a }, age: 45, name: 'The mail carrier' },
];

export const garden = {
  id: 'ch2-garden', chapter: 2,
  card: { num: 'II', title: 'Wonder', ages: 'five to seven', quote: 'Back then, every summer lasted forever.' },
  mood: 'summerDay', music: 'wonder', intensity: 0.4,
  ambience: { birds: 0.7, wind: 0.2 },
  zoom: 9.5, surface: 'grass',
  ages: [5, 6], clock: { seconds: 420 },
  timeUpText: 'The shadows got long. Somewhere, a screen door banged.',
  hint: 'The whole yard is yours today. The sun is moving, but slowly — it’s summer. Find the glowing lights.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildYard(ctx, { season: 'summer', treeStage: 0, sandbox: true, lemonade: true, flowers: true });
    ctx.r.tree.visible = false; W.removeCollidersOf(ctx.r.tree); // not planted yet
    W.bounds = { minX: -12.6, maxX: 12.6, minZ: -4.4, maxZ: 6.7 };
    ctx.baseMood = 'summerDay';
    const F = G.state.flags; F.builtCastle = false;
    const b = ctx.me = makePlayer(5.5, -1.5, 0.8, Math.PI * 0.6);
    ctx.mom = person(LOOKS.mom, 36, 'Mom', -9.2, -2.7, Math.PI); ctx.mom.setPose('kneel');
    ctx.dad = person(LOOKS.dad, 38, 'Dad', 11.2, -1.6, -2.4);
    ctx.grandpa = person(LOOKS.grandpa, 70, 'Grandpa', 5.0, -1.4, -1.2);
    ctx.theo = person({ ...LOOKS.theo, shirt: 0xe0604a }, 5.5, 'Theo', -9.15, 2.8, 2.2); ctx.theo.setPose('sitGround');
    ctx.dog = dog(5, -2.4, 2.4); ctx.dog.follow(b, 1.6); ctx.dog.wag = 1;
    // Grandpa's things: the sapling in its pot, a watering can, a trowel
    const pot = new THREE.Group();
    pot.add(P.cyl(0.16, 0.12, 0.26, 7, C.terracotta));
    const st = P.cyl(0.02, 0.025, 0.4, 4, C.trunk); st.position.y = 0.24; pot.add(st);
    for (let i = 0; i < 3; i++) { const l = P.ico(0.12, 0, [C.leafSummer, 0x6aa84f, 0x90c862][i], 0.02, i); l.position.set(Math.cos(i * 2.1) * 0.08, 0.62 + i * 0.05, Math.sin(i * 2.1) * 0.08); pot.add(l); }
    W.add(pot, 4.6, -1.9); ctx.pot = pot;
    const can = new THREE.Group();
    can.add(P.cyl(0.12, 0.13, 0.22, 7, 0x7fae8a)); const sp = P.cyl(0.02, 0.03, 0.26, 4, 0x7fae8a); sp.rotation.z = -0.9; sp.position.set(0.12, 0.12, 0); can.add(sp);
    W.add(can, 5.3, -2.0, { ry: 0.6 }); ctx.can = can;
    // the hole you'll dig
    ctx.hole = P.disc(0.3, C.dirtDark, 9, 0.012); ctx.hole.scale.setScalar(0.01); W.add(ctx.hole, 4, -2.2);
    ctx.mound = P.ico(0.22, 0, C.dirt, 0.04, 3); ctx.mound.scale.set(1, 0.01, 1); W.add(ctx.mound, 3.45, -2.0);
    // a ball for Biscuit, the kite for Dad
    ctx.ball = P.sphere(0.09, 7, 5, C.red); W.add(ctx.ball, 0.9, 2.1, { y: 0.09 });
    ctx.kite = P.kite(C.red); W.add(ctx.kite, 11.5, -0.8, { y: 0.05, ry: Math.PI / 4 }); ctx.kite.rotation.x = -Math.PI / 2;
    // chalk hopscotch on the lawn by the path
    const chalk = [0xf6f2ea, 0xf2c9d8, 0xcfe0f6, 0xf6e6a8];
    ctx.hopSquares = [];
    const hop0 = [-3.3, 0.5];
    const layout = [[0, 0], [0, 1], [-0.32, 2], [0.32, 2], [0, 3], [-0.32, 4], [0.32, 4], [0, 5]];
    layout.forEach(([dx, row], i) => {
      const sq = new THREE.Group();
      const s = 0.56;
      for (const [w, d, ox, oz] of [[s, 0.04, 0, -s / 2], [s, 0.04, 0, s / 2], [0.04, s, -s / 2, 0], [0.04, s, s / 2, 0]]) { const e = P.patch(w, d, chalk[i % 4], 0.02); e.position.set(ox, 0.02, oz); sq.add(e); }
      const num = P.patch(0.1, 0.16, chalk[(i + 1) % 4], 0.022); sq.add(num);
      W.add(sq, hop0[0] + dx, hop0[1] + row * 0.6);
      ctx.hopSquares.push([hop0[0] + dx, hop0[1] + row * 0.6]);
    });
    const chalkSticks = [C.pink, C.blue, C.yellow].map((c, i) => { const s = P.box(0.05, 0.05, 0.16, c); W.add(s, -2.6 + i * 0.1, 0.2, { ry: i }); return s; });
    // neighbours who will walk by the lemonade stand
    ctx.neighbours = NEIGHBOURS.map((n) => { const c = person(n.look, n.age, n.name, -7.5, 7.9, Math.PI / 2); c.root.visible = false; return c; });
    W.butterflies(3, { x: 0, z: 2, r: 6 }, 7);
    W.birds(5, 3);
    W.particlesOf('motes', { center: new THREE.Vector3(0, 0, 1), area: { w: 26, h: 4, d: 14 }, count: 40, opacity: 0.3, size: 0.09 });
    skyDressing(ctx, { clouds: 7, y: -4, spread: 24 });
    // the afternoon turns golden as the clock moves
    let golden = false;
    const sun = new THREE.Object3D();
    sun.userData.update = () => {
      const c = ctx.director.clock; if (!c || golden) return;
      if (c.t / c.seconds > 0.55) { golden = true; ctx.baseMood = 'goldenAfternoon'; if (!ctx.director.inMoment) mood('goldenAfternoon', 25); }
    };
    W.add(sun, 0, 0);
    // easter egg: a tiny door at the foot of the cherry tree
    const door = new THREE.Group();
    door.add(P.box(0.15, 0.22, 0.03, C.red)); const arch = P.cyl(0.075, 0.075, 0.03, 8, C.red); arch.rotation.x = Math.PI / 2; arch.position.set(0, 0.22, 0); door.add(arch);
    const knob = P.sphere(0.015, 5, 4, C.yellow); knob.position.set(0.04, 0.11, 0.02); door.add(knob);
    W.add(door, -10.24, -0.24, { ry: Math.PI / 4, s: 1.5 });
    secret(ctx, {
      id: 'fairyDoor', x: -9.7, z: 0.35, r: 0.75,
      async run() {
        const b = ctx.me;
        b.faceNow(-10.24, -0.24); b.setPose('crouch');
        await camTo(-10.05, -0.05, 3.0, 1.5);
        await lower('There was a door at the bottom of the cherry tree. A tiny red one, with a brass knob the size of a pea.');
        await tap({ count: 3, label: 'Knock', onTap: () => sfx('tap', { vol: 0.9 }) });
        await wait(1.2);
        sfx('giggle', { vol: 0.25, pitch: 1.8 });
        await lower('Nobody answered. But you were almost completely sure that somebody giggled.');
        G.state.flags.foundFairyDoor = true;
        G.achieve?.('fairy_door', 'Knock knock', 'Find the tiny door at the foot of the cherry tree');
        await keep('fairyDoor', 'The fairy door');
        b.setPose('idle');
        await camFollow(b, 9.5);
      },
    });
  },
  async intro(ctx) {
    await fadeIn(3);
    await lower('Summer. The days were so long you had to measure them in popsicles.');
    ctx.grandpa.faceChar(ctx.me);
    await say(ctx.grandpa, 'There you are. I’ve got something small and green that needs a home.');
    await say(ctx.grandpa, 'Come find me by the fence, kiddo. No rush.');
  },
  moments: [
    {
      id: 'plantTree', kind: 'story', label: 'Help Grandpa plant the tree', at: [4.0, -1.1], radius: 1.4, caption: 'The little tree',
      async run(ctx) {
        const b = ctx.me, gp = ctx.grandpa, W = ctx.world;
        ctx.dog.follow(null); ctx.dog.walkTo(2.6, -0.6).then(() => { ctx.dog.setPose('sit'); ctx.dog.faceChar(b); });
        await b.walkTo(4.0, -1.35); b.faceNow(4.0, -2.2);
        gp.walkTo(4.75, -1.85).then(() => gp.faceChar(b));
        await camTo(4.1, -1.9, 5.2, 2);
        await say(gp, 'This one’s an oak. Or it will be, if we do it right.');
        await say(gp, 'First, a hole. About as deep as your arm.');
        // dig
        const trowel = new THREE.Group();
        const blade = P.cone(0.06, 0.16, 4, 0x9aa0a8); blade.rotation.x = Math.PI; blade.position.y = 0.0; trowel.add(blade);
        const hd = P.cyl(0.02, 0.02, 0.14, 4, C.wood); hd.position.y = 0.0; trowel.add(hd);
        holdIn(b, trowel, { y: -0.06 });
        b.setPose('crouch'); gp.setPose('crouch');
        await tap({
          count: 7, label: 'Dig',
          onTap: (n) => {
            sfx('rustle', { vol: 0.8 }); sfx('thud', { vol: 0.25 });
            const k = n / 7;
            ctx.hole.scale.setScalar(0.3 + k * 0.9); ctx.mound.scale.set(0.6 + k * 0.6, 0.2 + k * 0.9, 0.6 + k * 0.6);
            b.lean = 0.25; setTimeout(() => { b.lean = 0; }, 120);
            if (n === 4) say(gp, 'That’s it. Put your back into it.', { passive: true, hold: 1.6 });
          },
        });
        drop(trowel);
        b.setPose('idle');
        await say(gp, 'Now the tree. Gently — roots are shy.');
        // Grandpa hands over the sapling; you lower it in
        gp.setPose('reachForward');
        await wait(0.4);
        W.remove(ctx.pot);
        const sap = ctx.r.tree;
        sap.visible = true; sap.scale.setScalar(0.55); sap.position.y = 0.35;
        b.setPose('reachForward');
        await sequence({
          label: 'Lower it in', keys: ['down', 'down'],
          onStep: (i) => { const y0 = sap.position.y; tween(0.5, (t) => { sap.position.y = y0 - 0.175 * t; }); sfx('soft', { deg: 3 + i * 2 }); },
        });
        sap.position.y = 0;
        gp.setPose('crouch'); b.setPose('crouch');
        await tap({ count: 4, label: 'Pat the soil down', onTap: (n) => { sfx('thud', { vol: 0.35 }); ctx.mound.scale.y = Math.max(0.05, ctx.mound.scale.y * 0.6); ctx.hole.scale.setScalar(Math.max(0.35, 1.2 - n * 0.22)); } });
        ctx.mound.visible = false; ctx.hole.material = P.mat(C.dirt);
        await tween(0.8, (t) => sap.scale.setScalar(0.55 + 0.45 * t));
        W.addCollider({ x: 4, z: -2.2, r: 0.15, obj: sap });
        b.setPose('idle'); gp.setPose('idle');
        await say(gp, 'Last thing. Everybody gets thirsty.');
        // water it
        W.remove(ctx.can);
        const can = new THREE.Group();
        can.add(P.cyl(0.1, 0.11, 0.18, 7, 0x7fae8a)); const sp = P.cyl(0.015, 0.025, 0.2, 4, 0x7fae8a); sp.rotation.x = 0.9; sp.position.set(0, 0.1, 0.1); can.add(sp);
        holdIn(b, can, { y: -0.08, z: 0.04 });
        b.setPose('reachForward');
        const drops = [];
        let dropT = 0;
        const stopDrops = loop((dt) => {
          for (let i = drops.length - 1; i >= 0; i--) { const d = drops[i]; d.position.y -= dt * 2.2; d.position.x += (4 - d.position.x) * dt * 2; d.position.z += (-2.2 - d.position.z) * dt * 2; if (d.position.y < 0.05) { W.root.remove(d); drops.splice(i, 1); } }
        });
        await hold({
          label: 'Hold to water it', seconds: 3,
          onProgress: (p, h, dt) => {
            if (!h) return;
            dropT -= dt;
            if (dropT <= 0) { dropT = 0.06; const d = P.glowSprite(0x9fd2ff, 0.16, 0.9); const hp = new THREE.Vector3(); can.getWorldPosition(hp); d.position.copy(hp); d.position.y += 0.1; W.root.add(d); drops.push(d); if (Math.random() < 0.3) sfx('bloop', { vol: 0.3 }); }
            ctx.hole.material = P.mat(p > 0.5 ? C.dirtDark : C.dirt);
          },
        });
        sfx('splash', { vol: 0.4 });
        await wait(0.6); stopDrops(); drops.forEach((d) => W.root.remove(d));
        drop(can);
        b.setPose('idle');
        gp.setPose('idle'); gp.faceChar(b);
        mood(ctx.baseMood, 4, { warmth: 0.3, bloom: 0.4 });
        await say(gp, 'There. Now it just has to wait.');
        await say(b, 'Wait for what?');
        await say(gp, 'For you to grow up, I suppose. Trees are patient like that.');
        await say(gp, 'One day this one’ll be taller than you.');
        await say(b, 'Taller than you?');
        gp.setPose('laugh');
        await say(gp, 'Taller than me, even.');
        gp.setPose('crouch');
        await lower('He pressed the earth down around it with his big hands, gently — the way you’d tuck someone in.');
        await keep('plantTree', 'The little tree');
        G.achieve?.('planted_tree', 'The little tree', 'Plant the family tree with Grandpa');
        gp.setPose('idle');
        mood(ctx.baseMood, 3);
        await lower('It came up to your knee. You checked on it eleven times that afternoon.');
        // Grandpa goes to rest on the porch
        gp.walkTo(-3.2, -1.95).then(() => { gp.place(-3.2, -2.05, 0); gp.setPose('sit', { h: 0.45 }); });
        ctx.dog.setPose('idle'); ctx.dog.follow(b, 1.6);
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'sandcastle', label: 'Build a castle with Theo', at: [-7.4, 3.3], caption: 'The best castle in the whole world',
      async run(ctx) {
        const b = ctx.me, th = ctx.theo, W = ctx.world;
        await b.walkTo(-7.6, 2.95); b.face(-8.5, 2.1);
        b.setPose('sitGround');
        th.faceChar(b);
        await camTo(-8.3, 2.5, 5.2, 1.5);
        await say(th, 'It needs towers. Lots of towers.');
        await say(b, 'And a moat.');
        await say(th, 'There’s no water.');
        await say(b, 'A pretend moat.');
        th.lookAt(new THREE.Vector3(-8.5, 0.3, 2.1)); b.lookAt(new THREE.Vector3(-8.5, 0.3, 2.1));
        let castle = null;
        const stages = [1, 2, 2, 3, 4];
        const setStage = (s) => { if (castle) W.remove(castle); castle = P.sandcastle(s); W.add(castle, -8.5, 2.1, { s: 1.2, y: 0.15 }); };
        await sequence({
          label: 'Build it together', keys: ['up', 'left', 'right', 'up', 'down'],
          onStep: (i) => { setStage(stages[i]); sfx('rustle'); if (i % 2) hop(th, 1, 0.05); },
        });
        ctx.castle = castle;
        sfx('giggle'); sfx('yay', { delay: 0.2, pitch: 1.2 });
        th.setPose('laugh');
        await say(th, 'It’s the best castle in the whole world.');
        th.setPose('sitGround');
        await say(th, 'When we’re grown up, let’s live in a real one. Next door to each other. Like now.');
        await say(b, 'Okay.');
        await say(th, 'Shake on it.');
        b.setPose('sitGround', { reach: false }); th.setPose('sitGround');
        await lower('You shook on it with sandy hands. It was a very serious promise.');
        await keep('sandcastle', 'The best castle in the whole world');
        G.state.flags.builtCastle = true;
        th.lookAt(null); b.lookAt(null);
        b.setPose('idle');
        // Theo goes out onto the lawn, looking for trouble
        th.setPose('idle');
        th.walkTo(-1.6, 4.4).then(() => th.faceChar(b));
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'lemonade', label: 'Open the lemonade stand', at: [2.5, 5.0], caption: 'Fifty cents and a sticky table',
      async run(ctx) {
        const b = ctx.me, W = ctx.world;
        await b.walkTo(2.5, 5.1); b.faceNow(2.5, 7);
        await camTo(2.4, 6.2, 6.6, 1.5);
        await lower('Mom made the lemonade. You were in charge of the business.');
        const lines = [
          ['Fifty cents? That’s highway robbery.', 'Oh, go on. Keep the change, sweetheart.'],
          ['Oh, thank goodness.', 'Best lemonade in the world. I mean it.'],
          ['One for the road.', 'Don’t tell anybody I stopped.'],
        ];
        for (let i = 0; i < 3; i++) {
          const n = ctx.neighbours[i];
          n.root.visible = true; n.place(-7.5, 7.9, Math.PI / 2);
          await n.walkTo(3.6, 7.75, { speed: 3.2 });
          n.face(3.6, 6.5);
          await say(n, lines[i][0]);
          // pour, then carry it over the fence
          b.faceNow(2.5, 6.2);
          await collect({ label: 'Pour a cup', items: [{ x: 2.5, z: 5.1, r: 0.35 }], showCount: false });
          sfx('bloop');
          const cup = new THREE.Group(); cup.add(P.cyl(0.05, 0.04, 0.12, 6, C.white)); const lq = P.cyl(0.045, 0.045, 0.02, 6, 0xfff3a0); lq.position.y = 0.1; cup.add(lq);
          holdIn(b, cup, { y: -0.03 });
          await collect({ label: 'Bring it to them', items: [{ x: 3.55, z: 6.55, r: 0.35 }], showCount: false });
          b.faceNow(3.6, 7.75);
          b.setPose('reachForward'); n.setPose('reachForward');
          await wait(0.5);
          drop(cup); holdIn(n, cup, { y: -0.03 });
          b.setPose('idle'); n.setPose('idle');
          sfx('ping');
          await say(n, lines[i][1]);
          n.walkTo(13.2, 7.9, { speed: 3.2 }).then(() => { n.root.visible = false; });
          await wait(0.4);
          await b.walkTo(2.5, 5.1); b.faceNow(2.5, 7);
        }
        sfx('giggle');
        await hop(b, 2, 0.12);
        const F = G.state.flags;
        const m = await choose('A dollar fifty, all yours. What do you do with it?', ['Candy. All of it.', 'Into the jar on your windowsill', 'Buy Theo a popsicle too']);
        F.lemonadeMoney = ['candy', 'jar', 'theo'][m];
        let pops = [];
        if (m === 0) {
          await lower('You spent it all on candy the same afternoon. It was the richest you would ever feel.');
          G.achieve?.('lemonade_candy', 'Sugar rush', 'Spend all your lemonade money on candy');
        } else if (m === 1) {
          await lower('Into the jar on your windowsill. The first money you ever saved. You couldn’t have said what for.');
          G.achieve?.('lemonade_jar', 'Saving up', 'Put your lemonade money in the jar');
        } else {
          const th = ctx.theo, prev = th.position.clone(), prevPose = th.pose;
          th.setPose('idle');
          await th.walkTo(3.3, 4.6, { speed: 4.5 }); th.faceChar(b); b.faceChar(th);
          pops = [[th, 0x9a6ad0], [b, C.red]].map(([c, col]) => { const g = new THREE.Group(); g.add(P.box(0.07, 0.12, 0.03, col)); const st = P.box(0.012, 0.06, 0.01, C.woodLight); st.position.y = -0.06; g.add(st); return holdIn(c, g, { y: -0.04 }); });
          await say(th, 'For me? Grape?! You’re the best person I know.');
          await lower('Grape for him, cherry for you. Your tongues stayed purple and red until dinner.');
          G.achieve?.('lemonade_theo', 'Business partners', 'Spend your lemonade money on Theo');
          th.walkTo(prev.x, prev.z).then(() => { th.setPose(prevPose); th.faceChar(b); });
        }
        await keep('lemonade', 'Fifty cents and a sticky table');
        pops.forEach(drop);
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'knee', label: 'Race Theo', anchor: (ctx) => ctx.theo, offset: [0.7, 0, 0.3], requires: ['sandcastle'], caption: 'Kissed better',
      async run(ctx) {
        const b = ctx.me, th = ctx.theo, mom = ctx.mom;
        await b.walkTo(th.position.x, th.position.z - 0.8);
        b.faceNow(9.5, 4.4); th.faceNow(9.5, 4.4);
        await camTo(1.2, 4.0, 8, 1.5);
        await say(th, 'Race you to the big tree!');
        await say(th, 'Ready… set…');
        sfx('yay', { pitch: 1.3 });
        await say(th, 'GO!', { hold: 0.6 });
        ctx.dog.follow(null);
        th.walkTo(9.0, 4.2, { speed: 4.3 });
        ctx.dog.walkTo(6, 3.5, { speed: 3.4 });
        camFollow(b);
        await Promise.all([
          b.walkTo(2.6, 3.6, { speed: 4.6 }),
          tap({ count: 4, label: 'Run!', timeout: 2, onTap: () => sfx('step', { surface: 'grass' }) }),
        ]);
        // you trip
        sfx('thud'); shake(0.25);
        await tween(0.25, (t) => { b.tilt = 0; b.lean = t * 1.1; });
        b.lean = 0; b.setPose('sitGround', { look: 0.4 });
        await wait(0.6);
        sfx('cry');
        b.setPose('idle'); await wait(0.3);
        b.setPose('cry');
        th.stop(); th.walkTo(b.position.x + 0.9, b.position.z + 0.4, { speed: 4 }).then(() => th.faceChar(b));
        await camTo(2.4, 3.2, 5.2, 1.2);
        await say(th, 'Are you okay? Oh. That’s blood.', { passive: true, hold: 2 });
        sfx('cry', { delay: 0.3 });
        const who = await choose('You need someone. You yell for —', ['“Mom!”', '“Dad!”']);
        G.state.flags.kneeComfort = who === 0 ? 'mom' : 'dad';
        if (who === 0) {
          // Mom comes running from the flower bed
          mom.setPose('idle');
          await say(mom, 'I’m coming, I’m coming —', { passive: true, hold: 1.4 });
          await mom.walkTo(b.position.x - 0.7, b.position.z + 0.2, { speed: 5 });
          mom.faceChar(b); mom.setPose('kneel');
          await say(mom, 'Let me see. Oh, that’s a brave knee. That’s a very brave knee.');
          await say(mom, 'Do you know what fixes knees?');
          sfx('kiss');
          await wait(0.4);
          await say(mom, 'There. All better.');
          mom.setPose('kneelOpen');
          await hold({ label: 'Hold on to her', seconds: 3, onProgress: (p) => { if (p > 0.3) b.setPose('hug'); } });
          b.setPose('hug'); mom.setPose('hug');
          await stillness({ seconds: 3, label: 'Stay a moment.' });
          mom.setPose('kneel'); b.setPose('idle');
          b.faceChar(th);
          await say(th, 'You were winning, though.');
          await lower('It wasn’t really better. But it was, a little. That was the trick of it.');
          G.achieve?.('kissed_better', 'Kissed better', 'Call for Mom when you scrape your knee');
          await keep('knee', 'Kissed better');
          mom.setPose('idle');
          mom.walkTo(-9.2, -2.7).then(() => { mom.faceNow(-9.2, -3.6); mom.setPose('kneel'); });
        } else {
          // Dad drops everything and comes at a run
          const dad = ctx.dad;
          dad.setPose('idle');
          await say(dad, 'Hang on, hang on —', { passive: true, hold: 1.4 });
          await dad.walkTo(b.position.x + 0.3, b.position.z + 0.75, { speed: 5.5 });
          dad.faceChar(b); dad.setPose('kneel');
          await say(dad, 'Whoa. Okay. Let’s have a look at the damage.');
          await say(dad, 'Hmm. Yep. This calls for the good stuff.');
          sfx('fwip');
          await say(dad, 'Dinosaur bandage. Very rare. Only for extremely brave people.');
          b.setPose('idle');
          await say(b, '…Is it the T. rex?');
          await say(dad, 'It is the T. rex.');
          dad.setPose('crouch'); await wait(0.4);
          dad.pickUp(b); dad.setPose('carryHigh');
          sfx('giggle');
          await hold({ label: 'Hold on tight', seconds: 3 });
          const x0 = dad.position.x, z0 = dad.position.z;
          await dad.walkPath([[x0 + 1.0, z0 + 0.5], [x0 + 0.4, z0 + 1.3], [x0 - 0.4, z0 + 0.6], [x0, z0]], { speed: 2.4 });
          sfx('giggle');
          dad.putDown(x0 - 0.1, z0 - 0.6);
          b.faceChar(th);
          await say(th, 'You were winning, though.');
          await lower('It still hurt. But you were the only person in the whole world with the T. rex.');
          G.achieve?.('dinosaur_bandage', 'The T. rex', 'Call for Dad when you scrape your knee');
          await keep('knee', 'The dinosaur bandage');
          dad.setPose('idle');
          dad.walkTo(11.2, -1.6).then(() => dad.faceNow(6.5, -2));
        }
        th.walkTo(-0.6, 5.5).then(() => { th.faceChar(b); th.setPose('sitGround'); });
        ctx.dog.follow(b, 1.6);
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'fetch', label: 'Throw the ball for Biscuit', at: [0.6, 1.6], caption: 'Biscuit always brought it back',
      async run(ctx) {
        const b = ctx.me, d = ctx.dog, ball = ctx.ball, W = ctx.world;
        await b.walkTo(0.6, 1.7); b.faceNow(5, 3.5);
        d.follow(null); await d.walkTo(1.3, 2.4); d.setPose('sit'); d.faceChar(b); d.wag = 2;
        sfx('woof', { vol: 0.6 });
        holdIn(b, ball, { y: -0.08 }); ball.position.y += 0;
        await camTo(3.0, 2.4, 7.5, 1.5);
        await lower('Biscuit had been waiting all day for somebody to notice the ball.');
        for (let i = 0; i < 3; i++) {
          const q = await timing({ label: i === 0 ? 'Throw! — press Space when it’s in the gold' : 'Again!', speed: 1.1 + i * 0.15, sweet: 0.18, tries: 1 });
          b.setPose('reach'); sfx('whoosh');
          const from = new THREE.Vector3(); ball.getWorldPosition(from);
          drop(ball); W.root.add(ball); ball.position.copy(from);
          const dist = 2.5 + (q ?? 0.5) * 3.5;
          const to = new THREE.Vector3(b.position.x + dist * 0.85, 0.09, b.position.z + dist * 0.45 - i * 0.6);
          d.setPose('idle');
          const fly = arc(ball, from, to, 0.9, 1.4 + q);
          await wait(0.15);
          sfx('woof');
          d.walkTo(to.x, to.z, { speed: 4.2 });
          await fly; sfx('tap'); b.setPose('idle');
          await d.walkTo(to.x, to.z, { speed: 4.2 });
          // carry it back in his mouth
          const carry = loop(() => { const hp = d.headWorld(); ball.position.set(hp.x + Math.sin(d.heading) * 0.15, hp.y - 0.35, hp.z + Math.cos(d.heading) * 0.15); });
          await d.walkTo(b.position.x + 0.6, b.position.z + 0.5, { speed: 3.6 });
          carry(); d.faceChar(b); d.setPose('sit');
          ball.position.set(b.position.x + 0.45, 0.09, b.position.z + 0.35);
          sfx('woof', { vol: 0.5 }); d.wag = 2.5;
          if (i < 2) { await wait(0.4); W.remove(ball); holdIn(b, ball, { y: -0.08 }); }
        }
        await lower('He brought it back every single time — as if every time were the first time.');
        await keep('fetch', 'Biscuit always brought it back');
        d.setPose('idle'); d.wag = 1; d.follow(b, 1.6);
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'hopscotch', label: 'Play hopscotch', at: [-3.3, -0.1], caption: 'Chalk squares on the path',
      async run(ctx) {
        const b = ctx.me, sq = ctx.hopSquares;
        await b.walkTo(-3.3, -0.1); b.faceNow(-3.3, 4);
        await camTo(-3.0, 2.0, 6.2, 1.5);
        await lower('Dad drew the squares that morning, in four colours of chalk.');
        let k = 0;
        await rhythm({
          label: 'Hop on the beat — press Space', hits: 8, period: 0.62, window: 0.24,
          onHit: (n, q) => {
            if (q < 0) return;
            const [x, z] = sq[Math.min(k, sq.length - 1)]; k++;
            const x0 = b.position.x, z0 = b.position.z;
            tween(0.3, (t) => { b.position.x = x0 + (x - x0) * t; b.position.z = z0 + (z - z0) * t; b.extraY = Math.sin(t * Math.PI) * 0.28; }).then(() => { b.extraY = 0; sfx('tap'); });
          },
        });
        await wait(0.4);
        b.faceNow(-3.3, -3);
        sfx('giggle');
        await hop(b, 1, 0.3);
        await lower('One, two, three, hop. The next rain would wash it all away. Today it was the most important map in the world.');
        await keep('hopscotch', 'Chalk squares on the path');
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'kite', label: 'Fly the kite with Dad', at: [10.4, -0.6], caption: 'Dad’s hands over yours',
      async run(ctx) {
        const b = ctx.me, dad = ctx.dad, kite = ctx.kite, W = ctx.world;
        await b.walkTo(10.2, -0.4); b.faceNow(7.5, -3);
        dad.walkTo(10.8, 0.0).then(() => dad.faceNow(7.5, -3));
        await camTo(9.4, -0.9, 8, 1.5);
        await say(dad, 'Wind’s perfect. Hold the string. When I say run — run.');
        await say(dad, 'Run!');
        amb({ birds: 0.6, wind: 0.6 }, 2);
        // the string, from your hand to the kite
        const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
        const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xf8f4ec })); line.frustumCulled = false; W.root.add(line);
        const hp = new THREE.Vector3();
        let sway = 0, kx = 0;
        const stopLine = loop(() => {
          b.armR.end.getWorldPosition(hp);
          const p = geo.attributes.position; p.setXYZ(0, hp.x, hp.y, hp.z); p.setXYZ(1, kite.position.x, kite.position.y - 0.5, kite.position.z); p.needsUpdate = true;
          kite.rotation.z = Math.sin(G.time * 2.1) * 0.12 + sway;
        });
        kite.rotation.x = 0;
        const k0 = kite.position.clone();
        b.walkTo(8.7, -1.3, { speed: 3.2 });
        await tween(2.4, (t) => { kite.position.set(k0.x - 4.5 * t, 0.2 + t * 4.4, k0.z - 2.2 * t); });
        b.setPose('reach');
        await camTo(7.0, -2.6, 10.5, 1.5);
        const kc = kite.position.clone();
        await balance({
          label: 'Keep the kite up — ← →', seconds: 5, difficulty: 0.9,
          onUpdate: (x) => { kx = x; sway = -x * 0.6; kite.position.x = kc.x + x * 1.1; kite.position.z = kc.z - x * 1.1; kite.position.y = kc.y - Math.abs(x) * 0.6; },
        });
        sway = 0;
        // Dad steps in behind you
        await dad.walkTo(b.position.x + 0.35, b.position.z + 0.45);
        dad.faceNow(kite.position.x, kite.position.z); dad.setPose('reach');
        await say(dad, 'You’ve got it. You’ve got it! Look — I’m not even holding on.');
        await stillness({ seconds: 4, label: 'Watch it fly.' });
        await lower('He was still holding on. Just a little. You found that out years later.');
        await keep('kite', 'Dad’s hands over yours');
        // reel it in
        const kf = kite.position.clone();
        await tween(2, (t) => { kite.position.lerpVectors(kf, new THREE.Vector3(b.position.x + 0.6, 0.05, b.position.z + 0.3), t); });
        stopLine(); W.root.remove(line); geo.dispose();
        kite.rotation.set(-Math.PI / 2, Math.PI / 4, 0);
        b.setPose('idle'); dad.setPose('idle');
        amb({ birds: 0.7, wind: 0.2 }, 3);
        dad.walkTo(11.2, -1.6);
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'callIn', kind: 'story', label: 'Mom is calling', at: [-5.0, -1.2], radius: 1.5,
      requires: ['plantTree'], when: (ctx) => littlesDone(ctx) >= 4 || clockOver(ctx),
      caption: 'Five more minutes',
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom, gp = ctx.grandpa;
        mood('summerDusk', 6, { exposure: 1.3, sunIntensity: 2.6, hemiIntensity: 1.35 });
        intensity(0.25, 4);
        amb({ birds: 0.25, crickets: 0.4, wind: 0.15 }, 5);
        mom.setPose('idle'); mom.place(-5, -3.0, 0);
        await b.walkTo(-5.0, -1.1); b.faceNow(-5, -3);
        await camTo(-4.4, -2.0, 6.5, 2);
        await say(mom, 'Time to come in! Hands. Bath. Pyjamas.');
        await say(b, 'Five more minutes!');
        await say(mom, 'That’s what you said five minutes ago.');
        gp.lookAt(b);
        await say(gp, 'Let them have five more. I’ll keep an eye on the tree.');
        await say(mom, '…Five. And I’m counting.');
        // spend them on the little tree
        await Promise.all([camTo(3.6, -1.6, 4.6, 3), b.walkTo(3.8, -1.3)]);
        b.faceNow(4, -2.2); b.setPose('sitGround', { look: 0.2 });
        await stillness({ seconds: 5, label: 'Watch it, in case it grows.' });
        await lower('You spent your five more minutes watching the little tree, in case it grew.');
        await keep('callIn', 'Five more minutes', { window: 10 });
        G.achieve?.('five_more_minutes', 'Five more minutes', 'Stay out until the very end of a summer day');
        await lower('Summer days were very long. That was the rule. You thought it would always be the rule.');
        await fadeOut(3.5, '#141a3a');
      },
    },
  ],
  final: 'callIn',
};

// ---------------------------------------------------------------------
// II.2 — The same yard, that night
// ---------------------------------------------------------------------
const STORIES = {
  dragon: {
    title: 'The dragon who was afraid of the dark',
    lines: [
      'Once there was a dragon who was afraid of the dark.',
      'Which is a silly thing for a dragon, because dragons can make their own light.',
      'So every night he lit one tiny flame, just for himself, and held it very close.',
      'And one night he looked up — and saw that the stars were doing exactly the same thing.',
    ],
  },
  ocean: {
    title: 'The whale who sang to the moon',
    lines: [
      'Far out in the ocean there lived a whale who sang to the moon.',
      'The moon never sang back. Not once.',
      'But every single night, it came back to listen.',
      'And the whale decided that was the same thing as singing. And maybe it was.',
    ],
  },
  moon: {
    title: 'The girl who lived on the moon',
    lines: [
      'There was once a girl who lived all by herself on the moon.',
      'Every night she waved down at the Earth, just in case somebody was waving back.',
      'Nobody ever was. She waved anyway.',
      'And far below, in a house by a little tree, a child in pyjamas waved up at the moon.',
    ],
  },
};

export const summerNight = {
  id: 'ch2-night', chapter: 2,
  mood: 'summerNight', music: 'summerNight', intensity: 0.35,
  ambience: { crickets: 0.8, wind: 0.1 },
  zoom: 9, surface: 'grass',
  ages: [6, 7], clock: { seconds: 300 },
  timeUpText: 'The fire burned down to orange. It was very, very late — later than you’d ever been up.',
  hint: 'It’s too hot to sleep, so nobody is trying. Find the glowing lights.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildYard(ctx, { season: 'summer', treeStage: 0, sandbox: true, lit: true, flowers: true });
    W.bounds = { minX: -12.2, maxX: 12.2, minZ: -4.6, maxZ: 6.6 };
    // the castle from this afternoon is still standing (if you built it)
    if (G.state.flags.builtCastle !== false) {
      W.add(P.sandcastle(4), -8.5, 2.1, { s: 1.2, y: 0.15 });
      const king = P.glowSprite(0xf2ff8a, 0.35, 0.9); king.position.set(-8.5, 1.15, 2.1); W.root.add(king);
      king.userData.update = (dt, t) => { king.material.opacity = 0.55 + 0.4 * Math.sin(t * 2.7); king.position.y = 1.1 + Math.sin(t * 1.3) * 0.05; }; W.track(king);
      secret(ctx, {
        id: 'fireflyKing', x: -8.5, z: 3.0, r: 0.7,
        async run() {
          const b = ctx.me;
          b.faceNow(-8.5, 2.1); b.setPose('crouch');
          await camTo(-8.5, 2.3, 3.4, 1.5);
          await lower('One firefly had moved into the tallest tower of your castle, and wouldn’t come out.');
          await lower('You decided he was the king now. It seemed only fair. He’d found it first.');
          G.state.flags.foundFireflyKing = true;
          G.achieve?.('firefly_king', 'Long live the king', 'Find who moved into your sandcastle');
          await keep('fireflyKing', 'The firefly king');
          b.setPose('idle');
          await camFollow(b, 9);
        },
      });
    }
    const b = ctx.me = makePlayer(6, -1.0, 3.2, Math.PI * 0.75);
    ctx.mom = person(LOOKS.mom, 37, 'Mom', -3.6, -2.05, 0); ctx.mom.setPose('sit', { h: 0.45 });
    ctx.dad = person(LOOKS.dad, 39, 'Dad', 6.2, 2.9, 0); ctx.dad.setPose('sitGround');
    ctx.grandpa = person(LOOKS.grandpa, 71, 'Grandpa', -0.2, -0.9, 0.3); ctx.grandpa.setPose('sit', { h: 0.32 });
    ctx.dog = dog(6, -6.4, -2.45); ctx.dog.setPose('lie'); ctx.dog.wag = 0.15; ctx.dog.heading = ctx.dog.targetHeading = -1.9;
    // the fire pit
    const fp = new THREE.Group();
    for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; const rk = P.rock(0.45, i, C.rockDark); rk.position.set(Math.cos(a) * 0.48, 0, Math.sin(a) * 0.48); fp.add(rk); }
    for (let i = 0; i < 3; i++) { const lg = P.cyl(0.06, 0.06, 0.6, 5, C.woodDark); lg.rotation.z = Math.PI / 2; lg.rotation.y = i * 1.05; lg.position.y = 0.08; fp.add(lg); }
    const flames = [];
    for (let i = 0; i < 3; i++) { const f = P.cone(0.16 - i * 0.03, 0.5 - i * 0.08, 5, [0xff8a3a, 0xffb84a, 0xffe08a][i], { emissive: [0xff6a1a, 0xff9a2a, 0xffd06a][i], emissiveIntensity: 2.2 }); f.position.set((i - 1) * 0.06, 0.08, (i % 2) * 0.05); f.castShadow = false; fp.add(f); flames.push(f); }
    const fg = P.glowSprite(0xffa050, 2.6, 0.55); fg.position.y = 0.4; fp.add(fg);
    const fl = new THREE.PointLight(0xff9a50, 9, 8, 1.5); fl.position.y = 0.8; fp.add(fl);
    fp.userData.update = (dt, t) => { flames.forEach((f, i) => { f.scale.set(1, 0.8 + Math.sin(t * (9 + i * 3) + i) * 0.2 + Math.sin(t * 23 + i) * 0.08, 1); }); fl.intensity = 8 + Math.sin(t * 13) * 1.2 + Math.sin(t * 31) * 0.6; fg.material.opacity = 0.5 + Math.sin(t * 11) * 0.06; };
    W.add(fp, 0.6, 0.2, { collide: 0.7 });
    ctx.firePos = [0.6, 0.2];
    // logs to sit on
    for (const [x, z, ry] of [[-0.2, -0.85, 0.3], [1.7, 0.9, -1.2]]) { const lg = P.cyl(0.16, 0.16, 0.9, 6, C.wood); lg.rotation.z = Math.PI / 2; const g = new THREE.Group(); lg.position.y = 0.16; g.add(lg); W.add(g, x, z, { ry }); }
    // a blanket under the stars
    W.add(P.picnicBlanket(0x5a6fb0), 6.6, 3.0);
    // a jar waiting on the porch step
    ctx.jar = new THREE.Group();
    const glass = P.cyl(0.11, 0.11, 0.26, 8, 0xdff0ff, { transparent: true, opacity: 0.35 }); ctx.jar.add(glass);
    const lid = P.cyl(0.115, 0.115, 0.04, 8, 0xc9a24a); lid.position.y = 0.26; ctx.jar.add(lid);
    ctx.jarGlow = P.glowSprite(0xeaff8a, 0.6, 0.0); ctx.jarGlow.position.y = 0.13; ctx.jar.add(ctx.jarGlow);
    W.add(ctx.jar, -7.0, 0.9);
    // Theo, at his window (only his top half shows above the sill)
    const th = ctx.theo = person({ ...LOOKS.theo, shirt: 0x9ac8f0, pants: 0x9ac8f0 }, 6, 'Theo', 7.15, -4.4, 0);
    th.legL.pivot.visible = th.legR.pivot.visible = false; th.hips.visible = false; th.blob.visible = false;
    th.extraY = 0.5; th.root.visible = false;
    const sill = P.box(0.95, 0.1, 0.3, C.white); W.add(sill, 7.15, -4.3, { y: 0.78 });
    // night dressing
    ctx.flies = W.particlesOf('fireflies', { area: { w: 24, h: 2.4, d: 16 }, count: 45, y0: 0.2, size: 0.2 });
    ctx.stars = W.particlesOf('stars', { center: new THREE.Vector3(-9, 0, -9), area: { w: 40, h: 10, d: 40 }, y0: 4, count: 160, size: 0.07 });
    for (const [x, z] of [[-6.2, 6.4], [3.5, 6.4]]) { const sl = P.streetLamp(true); W.add(sl, x, z + 1.4, { ry: Math.PI }); }
    const porchLight = new THREE.PointLight(0xffd59a, 5, 6, 1.6); porchLight.position.set(-5, 1.9, -2.6); W.root.add(porchLight);
    const porchGlow = P.glowSprite(0xffd59a, 1.6, 0.5); porchGlow.position.set(-5, 1.95, -2.6); W.root.add(porchGlow);
    // the bedroom, far away from the yard (a separate little diorama)
    ctx.room = buildBedroom(ctx, 60, 60);
  },
  async intro(ctx) {
    await camTo(0.2, 0.4, 11, 0);
    await fadeIn(3);
    await lower('That night it was too hot to sleep, so nobody even tried.');
    await say(ctx.dad, 'Who wants to stay up past their bedtime?');
    await say(ctx.mom, 'Just this once.');
    await say(ctx.grandpa, 'Marshmallows are ready, if anybody wants one.');
    await say(ctx.dad, 'Or come lie on the blanket with me. The stars are really out tonight.');
    await say(ctx.mom, 'One or the other, little owl. It’s already late.');
    const c = await choose('Stars, or marshmallows?', ['Stars with Dad', 'Marshmallows with Grandpa']);
    G.state.flags.nightChoice = c === 0 ? 'stars' : 'fire';
    await camFollow(ctx.me, 9, 2);
  },
  moments: [
    {
      id: 'fireflies', label: 'Catch fireflies in the jar', at: [-6.6, 1.3], caption: 'A jar full of summer',
      async run(ctx) {
        const b = ctx.me, W = ctx.world;
        await b.walkTo(-6.7, 1.3); b.faceNow(-7.0, 0.9);
        b.setPose('crouch'); await wait(0.4);
        W.remove(ctx.jar); ctx.jar.position.set(0, 0, 0); holdIn(b, ctx.jar, { y: -0.12 });
        b.setPose('idle');
        await camFollow(b, 7);
        await lower('Mom had left you a jar with holes poked in the lid. The holes were very important.');
        // ten slow fireflies drifting in the dark
        const r = rng(21);
        const items = [];
        for (let i = 0; i < 9; i++) {
          const m = P.glowSprite(0xf2ff8a, 0.55, 0.95);
          const cx = -7 + r.range(-2.6, 2.6), cz = 1.6 + r.range(-2.0, 2.4);
          const ph = r.range(0, 6.28);
          m.position.set(cx, 0.9, cz); W.root.add(m);
          items.push({ obj: m, cx, cz, ph });
        }
        let caught = 0;
        const drift = loop(() => {
          for (const it of items) {
            if (it.got) continue;
            const t = G.time * 0.35 + it.ph;
            it.obj.position.set(it.cx + Math.sin(t) * 0.7, 0.7 + Math.sin(t * 2.3) * 0.3, it.cz + Math.cos(t * 0.8) * 0.6);
            it.obj.material.opacity = 0.55 + 0.4 * Math.sin(G.time * 3 + it.ph);
          }
        });
        await collect({
          label: 'Catch the fireflies', items, radius: 0.5,
          onCollect: (it) => {
            caught++;
            const m = it.obj; const from = m.position.clone();
            const to = new THREE.Vector3(); ctx.jar.getWorldPosition(to); to.y += 0.15;
            tween(0.5, (t) => { m.position.lerpVectors(from, to, t); m.scale.setScalar(0.55 * (1 - t) + 0.05); }).then(() => { W.root.remove(m); ctx.jarGlow.material.opacity = Math.min(1, caught * 0.12); ctx.jarGlow.scale.setScalar(0.5 + caught * 0.09); });
            sfx('sparkle', { vol: 0.4 });
          },
        });
        drift();
        await wait(0.6);
        b.setPose('reachForward');
        await camTo(b.position.x, b.position.z, 4.4, 2);
        await lower('A jar full of light. You held it right up to your face. It was like holding a piece of the night.');
        await keep('fireflies', 'A jar full of summer');
        const k = await choose('', ['Let them go', 'Keep them — just for tonight']);
        G.state.flags.firefliesKept = k === 1;
        if (k === 1) {
          await lower('You kept them. Just for tonight. You promised them, out loud, that it was only for tonight.');
          G.achieve?.('night_light', 'Night light', 'Keep the fireflies in a jar overnight');
          b.setPose('idle');
          drop(ctx.jar); W.add(ctx.jar, -5.6, -2.0);
          await camFollow(b, 9);
          return;
        }
        await lower('You let them go. Dad said they had places to be.');
        G.achieve?.('places_to_be', 'Places to be', 'Let the fireflies go');
        // let them out
        b.setPose('reach');
        sfx('sparkle');
        const jp = new THREE.Vector3(); ctx.jar.getWorldPosition(jp);
        const freed = [];
        for (let i = 0; i < 9; i++) { const m = P.glowSprite(0xf2ff8a, 0.4, 0.9); m.position.copy(jp); W.root.add(m); freed.push({ m, a: i / 9 * Math.PI * 2 }); }
        ctx.jarGlow.material.opacity = 0;
        await tween(3, (t) => { for (const f of freed) { f.m.position.set(jp.x + Math.cos(f.a + t * 2) * t * 1.6, jp.y + t * 2.4, jp.z + Math.sin(f.a + t * 2) * t * 1.6); f.m.material.opacity = 0.9 * (1 - t * 0.8); } }, (x) => x);
        freed.forEach((f) => W.root.remove(f.m));
        b.setPose('idle');
        drop(ctx.jar); W.add(ctx.jar, -5.6, -2.0);
        await camFollow(b, 9);
      },
    },
    {
      id: 'stars', label: 'Lie on the blanket with Dad', at: [6.0, 3.6], caption: 'Counting stars with Dad',
      when: () => G.state.flags.nightChoice !== 'fire',
      async run(ctx) {
        const b = ctx.me, dad = ctx.dad, W = ctx.world;
        await b.walkTo(6.6, 3.9);
        await say(dad, 'Come here. Lie down. You have to see this properly.');
        dad.setPose('lieBack'); dad.place(5.95, 3.55, 0.9);
        b.setPose('lieBack'); b.place(6.45, 3.0, 0.9);
        ctx.stars.setOpacity(1.6);
        const R = G.renderer;
        await camTo(6.2, 3.3, 5.2, 2);
        await say(dad, 'Now look up.');
        // pan up off the grass into the sky above you, where there is nothing but stars
        const T = new THREE.Vector3(5.0, 17, 2.1); // high enough that only sky is behind it
        const az = THREE.MathUtils.degToRad(R.camAz), el = THREE.MathUtils.degToRad(R.camEl);
        const right = new THREE.Vector3(Math.cos(az), 0, -Math.sin(az));
        const up = new THREE.Vector3(-Math.sin(el) * Math.sin(az), Math.cos(el), -Math.sin(el) * Math.cos(az));
        const at = (sx, sy) => T.clone().addScaledVector(right, sx).addScaledVector(up, sy);
        const skyG = new THREE.Group(); W.root.add(skyG);
        const sky = W.particlesOf('stars', { center: new THREE.Vector3(T.x, 0, T.z), area: { w: 16, h: 9, d: 16 }, y0: T.y - 4.5, count: 260, size: 0.08 });
        const r = rng(77);
        for (let i = 0; i < 26; i++) { const st = P.glowSprite(r.pick([0xffffff, 0xfff4d0, 0xd8e4ff]), r.range(0.12, 0.28), r.range(0.5, 0.95)); st.position.copy(at(r.range(-6.5, 6.5), r.range(-3.6, 3.6))); skyG.add(st); }
        const wStars = [[-1.7, 1.5], [-0.85, 0.7], [0, 1.25], [0.85, 0.55], [1.7, 1.35]].map(([x, y]) => { const st = P.glowSprite(0xfff8e0, 0.42, 1); st.position.copy(at(x, y)); skyG.add(st); return st; });
        skyG.userData.update = (dt, t) => { skyG.children.forEach((c, i) => { c.material.opacity = Math.min(1, c.material.opacity * 0.98 + 0.02 * (0.55 + 0.45 * Math.sin(t * (1 + (i % 5) * 0.3) + i))); }); };
        W.track(skyG);
        mood('summerNight', 3, { bloom: 0.85, vignette: 0.6 });
        await R.cameraTo(T, 7, 5);
        await say(dad, 'See those five? That’s a W. That’s a queen, sitting on her chair.');
        await tween(1.2, (t) => wStars.forEach((st) => st.scale.setScalar(0.42 + Math.sin(t * Math.PI) * 0.35)));
        await say(b, 'How many are there?');
        await say(dad, 'More than anybody could count.');
        await say(b, 'I could count them.');
        await say(dad, 'Go on, then.');
        await stillness({ seconds: 7, label: 'Count the stars.' });
        await think('…forty-one… forty-two… forty-three…');
        // a shooting star
        const s0 = at(-4.5, 2.6), s1 = at(3.2, 0.4);
        const star = P.glowSprite(0xffffff, 0.7, 1); W.root.add(star);
        const trail = [];
        for (let i = 0; i < 9; i++) { const t2 = P.glowSprite(0xdfe8ff, 0.5 - i * 0.04, 0.6 - i * 0.06); W.root.add(t2); trail.push(t2); }
        sfx('sparkle');
        await tween(1.4, (t) => {
          star.position.lerpVectors(s0, s1, t);
          trail.forEach((tr, i) => tr.position.lerpVectors(s0, s1, Math.max(0, t - (i + 1) * 0.025)));
          star.material.opacity = Math.sin(t * Math.PI);
          trail.forEach((tr, i) => { tr.material.opacity = Math.sin(t * Math.PI) * (0.6 - i * 0.06); });
        }, (x) => x);
        W.root.remove(star); trail.forEach((tr) => W.root.remove(tr));
        await say(dad, 'Did you see that? Quick — make a wish.');
        await stillness({ seconds: 3, label: 'Make a wish.' });
        // back down to the two of you on the blanket
        await R.cameraTo(new THREE.Vector3(6.0, 1.2, 3.1), 5.6, 3.5);
        await lower('You wished for this. Exactly this. You didn’t say it out loud, so it would come true.');
        await keep('stars', 'Counting stars with Dad');
        G.achieve?.('shooting_star', 'Make a wish', 'Count the stars with Dad');
        ctx.stars.setOpacity(1);
        mood('summerNight', 3);
        W.remove(skyG); W.removeParticles(sky);
        await lower('Grandpa saved you a marshmallow. Then he forgot he was saving it, and ate it. He apologised for a week.');
        b.setPose('idle'); b.place(6.6, 4.2, 0.9);
        dad.setPose('sitGround'); dad.place(6.2, 2.9, 0);
        await camFollow(b, 9);
      },
    },
    {
      id: 'marshmallow', label: 'Toast marshmallows with Grandpa', at: [0.0, 1.2], caption: 'Golden, or a little burnt',
      when: () => G.state.flags.nightChoice !== 'stars',
      async run(ctx) {
        const b = ctx.me, gp = ctx.grandpa, W = ctx.world;
        const [fx, fz] = ctx.firePos;
        await b.walkTo(-0.05, 1.15); b.faceNow(fx, fz);
        b.setPose('sitGround'); b.position.y = 0;
        gp.faceNow(fx, fz);
        await camTo(0.3, 0.3, 4.8, 2);
        await say(gp, 'Here. One for you, one for me. Not too close, now.');
        // a stick with a marshmallow
        const stick = new THREE.Group();
        const s = P.cyl(0.012, 0.015, 0.95, 4, C.woodDark); s.rotation.x = Math.PI / 2; s.position.z = 0.45; stick.add(s);
        const mm = P.cyl(0.045, 0.045, 0.08, 7, 0xfbf8f2); const mmMat = P.umat(0xfbf8f2); mm.material = mmMat; mm.rotation.x = Math.PI / 2; mm.position.z = 0.9; stick.add(mm);
        const mmFire = P.glowSprite(0xff8a3a, 0.4, 0); mmFire.position.z = 0.92; stick.add(mmFire);
        stick.position.set(b.position.x, 0.42, b.position.z);
        stick.rotation.y = Math.atan2(fx - b.position.x, fz - b.position.z); stick.rotation.x = -0.25;
        W.root.add(stick);
        b.setPose('sitGround', { reach: false });
        music('whistle', { intensity: 0.35 });
        await lower('Grandpa whistled while you waited. The same old song. He always whistled it at fires.');
        await say(gp, 'Patience. The best ones take the longest.');
        // toast: the colour slides from white to gold to black while you wait
        const white = new THREE.Color(0xfbf8f2), gold = new THREE.Color(0xe0a25a), burnt = new THREE.Color(0x3a2a20);
        let tt = 0;
        const toast = loop((dt) => { tt += dt; const k = (Math.sin(tt * 1.1 * 2.2 - Math.PI / 2) + 1) / 2; if (k < 0.7) mmMat.color.copy(white).lerp(gold, k / 0.7); else mmMat.color.copy(gold).lerp(burnt, (k - 0.7) / 0.3); });
        const q = await timing({ label: 'Pull it out when it’s golden', speed: 1.0, sweet: 0.16, center: 0.7, tries: 1 });
        toast();
        if (q >= 1) {
          mmMat.color.copy(gold);
          sfx('good', { deg: 8 });
          await say(gp, 'Now that is a perfect marshmallow. You’ve got the touch.');
          G.achieve?.('golden_marshmallow', 'Patience', 'Toast a perfect golden marshmallow');
        } else {
          mmMat.color.copy(burnt); mmFire.material.opacity = 0.9;
          await say(b, 'It’s on fire!');
          sfx('blow');
          mmFire.material.opacity = 0;
          await say(gp, 'That’s how I like them, actually. Crunchy on the outside.');
          await lower('He ate it, and said it was the best one he’d ever had.');
          G.achieve?.('crunchy_marshmallow', 'Crunchy on the outside', 'Set your marshmallow on fire');
        }
        await keep('marshmallow', 'Golden, or a little burnt');
        W.root.remove(stick);
        await lower('You never saw the stars that night. There would be other nights. There were.');
        music('summerNight', { intensity: 0.35 });
        b.setPose('idle');
        await camFollow(b, 9);
      },
    },
    {
      id: 'theoWave', label: 'A light in Theo’s window', at: [7.4, -3.4], caption: 'See you tomorrow',
      async run(ctx) {
        const b = ctx.me, th = ctx.theo;
        await b.walkTo(7.6, -3.3); b.faceNow(7.15, -4.4);
        th.root.visible = true; th.setPose('wave');
        await camTo(7.3, -3.9, 5.0, 1.5);
        await say(th, 'Psst! Goodnight!');
        await tap({ count: 3, label: 'Wave back', onTap: () => { b.setPose('wave'); sfx('tap'); } });
        if (G.state.flags.lemonadeMoney === 'theo') await say(th, 'Thanks for the popsicle! My tongue’s still purple. Look!');
        await say(th, 'See you tomorrow!');
        await say(b, 'See you tomorrow!');
        await say(null, 'Theodore! Bed! Now!', { name: 'Theo’s mom' });
        th.setPose('laugh');
        await wait(0.6);
        th.root.visible = false;
        b.setPose('idle');
        await lower('You said it every night, all summer. And every morning, it came true.');
        await keep('theoWave', 'See you tomorrow');
        await camFollow(b, 9);
      },
    },
    {
      id: 'biscuitSleep', label: 'Biscuit, asleep on the porch', at: [-6.3, -1.75], caption: 'Biscuit, running in his dreams',
      async run(ctx) {
        const b = ctx.me, d = ctx.dog;
        await b.walkTo(-6.05, -1.8); b.faceNow(-6.4, -2.45);
        b.setPose('sitGround');
        await camTo(-6.2, -2.2, 4.2, 1.5);
        await lower('Biscuit was asleep on the porch, where the boards were still warm from the sun.');
        // his paws twitch (runs after the dog's own update, so it wins)
        let tw = 0;
        const twitcher = new THREE.Object3D();
        twitcher.userData.update = (dt) => { tw += dt; const k = Math.sin(tw * 9) * 0.3 * (Math.sin(tw * 0.9) > 0 ? 1 : 0); d.legs.forEach((l, i) => { l.rotation.x = 1.4 + (i % 2 ? k : -k); }); };
        ctx.world.add(twitcher, 0, 0);
        const twitch = () => ctx.world.remove(twitcher);
        await hold({ label: 'Hold Space to stroke him', seconds: 3.5, onProgress: (p, h) => { d.wag = h ? 0.6 : 0.15; if (h && Math.random() < 0.02) sfx('rustle', { vol: 0.3 }); } });
        await stillness({ seconds: 4, label: 'Listen to him breathe.' });
        twitch();
        sfx('woof', { vol: 0.15 });
        await lower('His paws were running somewhere in his sleep. You hoped it was somewhere good.');
        await keep('biscuitSleep', 'Biscuit, running in his dreams');
        d.wag = 0.15;
        b.setPose('idle');
        await camFollow(b, 9);
      },
    },
    {
      id: 'bedtime', kind: 'story', label: 'Bedtime', at: [-4.6, -1.3], radius: 1.2,
      when: (ctx) => littlesDone(ctx) >= 3 || clockOver(ctx),
      caption: 'Again. Again. Again.',
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom, rm = ctx.room;
        mom.setPose('idle'); mom.place(-5.0, -2.6, 0);
        await b.walkTo(-4.9, -1.5); b.faceNow(-5, -3);
        await camTo(-5, -2.2, 6, 1.5);
        await say(mom, 'Okay, little owl. Bath, pyjamas, bed. In that order.');
        await say(b, 'Can we have a story?');
        await say(mom, 'One story.');
        await fadeOut(2, '#0c0e1c');
        // --- the bedroom ---
        ctx.flies.setOpacity(0);
        mood('nurseryNight', 0);
        music('bedtime', { intensity: 0.25 });
        amb({ crickets: 0.35, room: 0.3 }, 2);
        b.setOutfit({ shirt: 0xbfd6f2, pants: 0xbfd6f2 });
        b.place(rm.bed.x, rm.bed.z + 0.25, 0); b.extraY = 0.42; b.setPose('sitGround');
        mom.place(rm.chair.x, rm.chair.z, Math.PI / 2); mom.setPose('read', { h: 0.48 });
        mom.lookAt(b);
        ctx.dog.root.visible = false;
        if (G.state.flags.firefliesKept) rm.showJar();
        await camTo(rm.cx - 0.1, rm.cz - 0.5, 4.6, 0);
        await fadeIn(2.5);
        await say(mom, 'Which one tonight?');
        const i = await choose('Which story?', [STORIES.dragon.title, STORIES.ocean.title, STORIES.moon.title]);
        const key = ['dragon', 'ocean', 'moon'][i];
        G.state.flags.storyChoice = key;
        const st = STORIES[key];
        await say(mom, i === 0 ? 'The dragon. Again. Of course.' : i === 1 ? 'The whale. Alright, settle in.' : 'Her again? Okay. Lie back.');
        for (const l of st.lines) await say(mom, l, { name: 'Mom' });
        await say(mom, 'The end.');
        await say(b, 'Again!');
        await say(mom, 'Again? It’s so late.');
        await say(b, 'Again!');
        mom.setPose('laugh'); await wait(0.6); mom.setPose('read', { h: 0.48 });
        // she reads it again, and again; the words blur into the warm dark
        await narrate([st.lines[0]], { small: true, minTime: 1.2 });
        await narrate(['Again.'], { stack: true, minTime: 1.0 });
        await narrate([st.lines[1]], { small: true, minTime: 1.0 });
        await narrate(['Again.'], { stack: true, minTime: 1.0 });
        b.extraY = 0.42; b.setPose('sleep'); b.place(rm.bed.x, rm.bed.z + 0.45, 0);
        mood('nurseryNight', 3, { dream: 0.35, bloom: 0.9 });
        await narrate([st.lines[2]], { small: true, minTime: 1.0 });
        await narrate(['Again.'], { stack: true, minTime: 1.2 });
        G.ui.clearNarration();
        await keep('again', 'Again. Again. Again.', { window: 10 });
        G.achieve?.('again_again', 'Again. Again. Again.', 'Ask for the bedtime story one more time');
        await say(mom, '…' + st.lines[3], { name: 'Mom', hold: 3.2 });
        mom.setPose('idle');
        await mom.walkTo(rm.bed.x - 0.7, rm.bed.z - 0.2);
        mom.faceChar(b); mom.setPose('crouch');
        sfx('kiss');
        await wait(0.6);
        await say(mom, 'Goodnight, little one.', { hold: 2.4 });
        mom.setPose('idle');
        rm.lampOff();
        sfx('tap', { vol: 0.4 });
        await wait(1.2);
        if (G.state.flags.firefliesKept) {
          await lower('In the dark, the jar on your nightstand glowed and glowed.');
          await lower('In the morning it was empty. They’d squeezed out through the holes in the lid. Dad swore he had nothing to do with it.');
        }
        await fadeOut(3.5, '#0c0e1c');
        await narrate([
          'Summers lasted forever, back then.',
          'Every night was the same warm night, and every story ended the same way —',
          'and there was always, always time to hear it again.',
        ], { minTime: 1.4 });
        G.ui.clearNarration();
        await wait(1.2);
      },
    },
  ],
  final: 'bedtime',
};

// a small bedroom vignette, built off to the side of the yard
function buildBedroom(ctx, cx, cz) {
  const W = ctx.world;
  const w = 5.2, d = 4.4;
  const room = P.roomShell({ w, d, h: 3.0, wall: 0xcfdcf0, wall2: 0xf2ead8, floor: C.woodLight, windows: [{ wall: 'back', at: 1.1, y: 1.1, w: 1.2, h: 1.0, glow: 0x7d8fd8, roomW: w, roomD: d }] });
  W.add(room, cx, cz);
  // bed against the back wall; Mom's chair on the far side so she never hides you
  const bx = cx + 0.3, bz = cz - 1.15;
  W.add(P.bed({ color: 0xf2c46a }), bx, bz);
  W.add(P.teddy(0xd8b07e), bx + 0.32, bz - 0.6, { y: 0.55, ry: -0.4 });
  const chx = bx - 1.05, chz = bz + 0.1;
  const chair = P.chair(C.woodDark); W.add(chair, chx, chz, { ry: Math.PI / 2 });
  const nt = P.table({ w: 0.45, d: 0.4, h: 0.5, color: C.woodLight }); W.add(nt, bx + 0.95, bz - 0.75);
  const lamp = P.lamp({ lit: true, table: true }); W.add(lamp, bx + 0.95, bz - 0.75, { y: 0.5 });
  const lampOffMat = P.mat(0xfbe7c4);
  const pl = new THREE.PointLight(0xffc98a, 7, 7, 1.6); pl.position.set(bx + 0.95, 1.2, bz - 0.6); W.root.add(pl);
  W.add(P.rug(1.8, 1.4, 0xc0cce8, C.cream, true), cx - 0.5, cz + 0.9);
  W.add(P.bookshelf(1.0, 1.2), cx - 1.7, cz - d / 2 + 0.25);
  W.add(P.duck(), cx + 1.6, cz + 1.2);
  // the savings jar, if that's where the lemonade money went
  if (G.state.flags.lemonadeMoney === 'jar') {
    const cj = new THREE.Group(); cj.add(P.cyl(0.08, 0.08, 0.16, 8, 0xdff0ff, { transparent: true, opacity: 0.4 }));
    for (let i = 0; i < 4; i++) { const c = P.cyl(0.035, 0.035, 0.012, 8, 0xd8b45a, { metalness: 0.5, roughness: 0.4 }); c.position.set((i % 2) * 0.03 - 0.015, 0.01 + i * 0.014, 0); cj.add(c); }
    W.add(cj, cx + 1.25, cz - d / 2 + 0.25, { y: 1.05 });
  }
  const fjar = new THREE.Group(); fjar.add(P.cyl(0.08, 0.08, 0.18, 8, 0xdff0ff, { transparent: true, opacity: 0.35 }));
  const fg = P.glowSprite(0xeaff8a, 0.8, 0.9); fg.position.y = 0.09; fjar.add(fg);
  fjar.userData.update = (dt, t) => { fg.material.opacity = 0.6 + Math.sin(t * 2.2) * 0.25; };
  W.add(fjar, bx + 0.82, bz - 0.62, { y: 0.5 }); fjar.visible = false;
  // paper stars on the wall
  const r = rng(31);
  for (let i = 0; i < 12; i++) { const s = P.ico(0.06, 0, 0xfff2b0, 0, 1, { emissive: 0xfff2b0, emissiveIntensity: 0.6 }); W.add(s, cx + r.range(-w / 2 + 0.3, 0.2), cz - d / 2 + 0.05, { y: r.range(1.6, 2.7) }); }
  const moon = P.glowSprite(0xdfe6ff, 1.2, 0.5); moon.position.set(cx + 1.4, 1.9, cz - d / 2 + 0.1); W.root.add(moon);
  return {
    cx, cz, bed: { x: bx, z: bz }, chair: { x: chx, z: chz },
    showJar() { fjar.visible = true; },
    lampOff() {
      pl.intensity = 0.6;
      lamp.traverse((o) => { if (o.isSprite) o.visible = false; if (o.isMesh && o.material.emissiveIntensity > 0.5 && o.material.emissive?.getHex()) o.material = lampOffMat; });
    },
  };
}
