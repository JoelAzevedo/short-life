// CHAPTER IV — TOGETHER (22–28)
// A lantern festival by a lake, a stranger who isn't one, a waltz nobody can dance.
// Then a wedding under the tree you planted with Grandpa.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng } from '../engine/game.js';
import { LOOKS, youLook } from '../engine/character.js';
import { narrate, lower, say, think, wait, keep, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, intensity, hop, choose } from '../engine/story.js';
import { stillness, tap, rhythm, hold, timing, walkWith, sequence } from '../engine/minigames.js';
import { buildYard, makePlayer, person, skyDressing } from './places.js';
import { buildLake, stranger, stroll, guitar, uglyPlush, holdInHand, sign } from './lake.js';

const FZOOM = 11;
// lifted a little so faces stay readable once the sun goes down
const EVE = { hemiIntensity: 1.35, sunIntensity: 2.3, exposure: 1.06 };
const NIGHT = { hemiIntensity: 1.5, hemiSky: 0x8c7cd0, hemiGround: 0x5a4a52, sunIntensity: 1.25, exposure: 1.12 };
const base = (ctx, s = 4, extra = null) => mood(ctx.baseMood, s, { ...(ctx.baseMood === 'festivalNight' ? NIGHT : EVE), ...extra });
const flags = () => G.state.flags;

// world-tracked per-frame callback (stops when the scene is torn down)
function onFrame(ctx, fn) { const o = new THREE.Object3D(); o.userData.update = fn; ctx.world.add(o); return o; }
function offFrame(ctx, o) { ctx.world.remove(o); }

// two characters turning slowly around each other, as in a waltz
function waltzPair(a, b, cx, cz, { r = 0.36, speed = 0.7 } = {}) {
  const st = { ang: Math.random() * 6, speed, r };
  st.fn = (dt) => {
    st.ang += dt * st.speed;
    const c = Math.cos(st.ang) * st.r, s = Math.sin(st.ang) * st.r;
    a.position.set(cx + c, a.position.y, cz + s); b.position.set(cx - c, b.position.y, cz - s);
    a.faceNow(b.position.x, b.position.z); b.faceNow(a.position.x, a.position.z);
  };
  return st;
}

// hidden moments (easter eggs) keep their prompt but lose their glow
function hideEggs(ctx) {
  for (const h of ctx.world.hotspots) if (h.m?.hidden) { h.obj.removeFromParent(); h.ring.removeFromParent(); }
}

// Sam remembers the ice-cream cart (only if you shared it at thirteen)
async function recognise(ctx) {
  const s = ctx.sam;
  await wait(0.6);
  await say(s, 'Wait.');
  s.lookAt(ctx.me);
  await say(s, 'Wait… ice cream? The last cone? You split it with me.');
  const i = await choose('You remember. Of course you remember.', ['“You still owe me the bigger half.”', '“That was ten years ago.”', '“You had sprinkles on your nose.”']);
  if (i === 0) { s.setPose('laugh'); await say(s, 'I absolutely do not. I let you have the bigger half. I’ve thought about it since.'); }
  else if (i === 1) await say(s, 'Ten years. You look exactly the same. Taller. But the same.');
  else { s.setPose('laugh'); await say(s, 'I did not. Okay, I did. You didn’t tell me for a whole hour.'); }
  s.setPose('idle');
  await say(s, 'It’s Sam. Still Sam. In case you’d forgotten.');
  await think('You hadn’t.');
}

// Branch A: Theo talked you into coming, and pushes you towards the lantern stall
async function meetAtStall(ctx) {
  const b = ctx.me, s = ctx.sam, L = ctx.lake, t = ctx.theo;
  t.follow(null);
  await camTo(-1.0, 4.4, 6.6, 1.5);
  t.walkTo(-0.2, 4.9).then(() => t.faceChar(s));
  await say(t, 'Lantern stall. Blue scarf. Don’t look! …Okay, now look. Go. Go!');
  await b.walkTo(-2.05, 4.1); b.face(-2.0, 3.0);
  s.face(-1.5, 3.0);
  await camTo(-1.7, 3.7, 6.2, 1.2);
  await say(ctx.keeper, 'Last blue one, my loves. Last blue one of the night.');
  b.setPose('reachForward'); s.setPose('reachForward');
  sfx('tap'); await wait(0.5); sfx('tap', { delay: 0.05 });
  await wait(0.6);
  b.setPose('idle'); s.setPose('idle'); b.faceChar(s); s.faceChar(b);
  await say(s, 'Oh — sorry. Were you going for that one?');
  if (flags().metSamYoung) await recognise(ctx);
  else {
    const i = await choose('A stranger with the warmest laugh you’ve ever heard.', ['“It’s yours. Blue suits you.”', '“We could share it?”', '“Rock, paper, scissors?”']);
    if (i === 0) await say(s, 'Smooth. Very smooth. Does that usually work?');
    else if (i === 1) await say(s, 'Share a lantern. With a stranger. Sure — why not.');
    else { await wait(0.4); sfx('pop'); s.setPose('jump'); await say(s, 'Scissors! Ha! …Two out of three?'); s.setPose('idle'); }
    await say(s, 'I’m Sam, by the way.');
  }
  await say(ctx.keeper, 'Well? Am I wrapping it, or are you two going to stand there all night?');
  L.blueLantern.visible = false;
  ctx.samLantern = holdInHand(s, P.lantern(0x8ab8ff, false), 'R', [0, -0.42, 0], 0.7);
  sfx('soft');
  await say(s, 'We’ll light it later. Over the water. That’s the rule, right?');
  await lower('You talked until the stall-keeper started stacking crates around you.');
}

// Branch B: you came alone and sat by the water, and Sam came to you
async function meetAtBench(ctx) {
  const b = ctx.me, s = ctx.sam, L = ctx.lake;
  const [bx, bz] = L.bench, ry = -Math.PI / 2 - 0.5;
  const ax = Math.cos(ry), az = -Math.sin(ry), fx = Math.sin(ry), fz = Math.cos(ry);
  const seatMe = [bx + ax * 0.4 + fx * 0.08, bz + az * 0.4 + fz * 0.08], seatSam = [bx - ax * 0.4 + fx * 0.08, bz - az * 0.4 + fz * 0.08];
  await b.walkTo(bx + fx * 0.7 + ax * 0.4, bz + fz * 0.7 + az * 0.4);
  b.place(seatMe[0], seatMe[1], ry); b.setPose('sit', { h: 0.45 });
  await camTo(bx - 0.4, bz - 0.1, 5.6, 1.5);
  await lower('The music sounded better from here, softened by the water.');
  L.blueLantern.visible = false;
  ctx.samLantern = holdInHand(s, P.lantern(0x8ab8ff, false), 'R', [0, -0.42, 0], 0.7);
  const orange = holdInHand(s, P.lantern(0xffb36b, false), 'L', [0, -0.42, 0], 0.7);
  await s.walkTo(bx + 1.4, bz + 1.6);
  await s.walkTo(bx - fx * -0.9 - ax * 0.6, bz - fz * -0.9 - az * 0.6);
  s.faceChar(b); b.lookAt(s);
  await say(s, 'Sorry — is this seat taken?');
  if (flags().metSamYoung) await recognise(ctx);
  else {
    const i = await choose('A stranger, holding two paper lanterns and looking slightly embarrassed about it.', ['“It’s all yours.”', '“Depends who’s asking.”', '“Only by my scarf.”']);
    if (i === 0) await say(s, 'Thank you. My feet are made of ice. I’m Sam.');
    else if (i === 1) await say(s, 'Sam. Sam is asking. Sam has been walking for two hours and would like to sit down.');
    else { s.setPose('laugh'); await say(s, 'I’ll negotiate with the scarf, then. Hello, scarf. I’m Sam.'); }
  }
  s.place(seatSam[0], seatSam[1], ry); s.setPose('sit', { h: 0.45 });
  await say(s, 'I bought two lanterns. Don’t ask. The lady at the stall was very persuasive.');
  await say(s, 'Do you want one? You have to light it with me, though. Later. Over the water.');
  const j = await choose('', ['“Deal.”', '“Are those the rules?”']);
  if (j === 1) await say(s, 'They are now.');
  orange.removeFromParent();
  ctx.myLantern = holdInHand(b, P.lantern(0xffb36b, false), 'L', [0, -0.42, 0], 0.7);
  sfx('soft');
  await lower('You talked until your hands were cold, and then a while after that.');
  b.lookAt(null);
  b.setPose('idle'); s.setPose('idle');
  b.place(bx + fx * 0.7 + ax * 0.5, bz + fz * 0.7 + az * 0.5); s.place(bx + fx * 0.7 - ax * 0.5, bz + fz * 0.7 - az * 0.5);
  b.faceChar(s); s.faceChar(b);
}

// a hedgehog, for anyone who wanders far enough
function hedgehog() {
  const g = new THREE.Group();
  const body = P.ico(0.16, 0, 0x6a5040, 0.05, 3); body.scale.set(1, 0.7, 1.3); body.position.y = 0.1; g.add(body);
  for (let i = 0; i < 14; i++) { const sp = P.cone(0.03, 0.12, 3, 0x4a3a30); const a = (i / 14) * Math.PI * 2; sp.position.set(Math.cos(a) * 0.1, 0.16 + (i % 2) * 0.04, Math.sin(a) * 0.14 - 0.02); sp.rotation.set(Math.sin(a) * 0.9, 0, -Math.cos(a) * 0.9); g.add(sp); }
  const face = P.cone(0.06, 0.12, 5, 0xc8a080); face.rotation.x = Math.PI / 2; face.position.set(0, 0.08, 0.2); g.add(face);
  const nose = P.sphere(0.02, 5, 4, 0x222222); nose.position.set(0, 0.08, 0.31); g.add(nose);
  return g;
}

// =====================================================================
// IV-1  The lantern festival
// =====================================================================
export const festival = {
  id: 'ch4-festival', chapter: 4,
  card: { num: 'IV', title: 'Together', ages: 'twenty-two to twenty-eight', quote: 'Some people you meet. Some people you find again.' },
  mood: 'autumnEvening', music: 'together', intensity: 0.35,
  ambience: { crowd: 0.55, waves: 0.35, wind: 0.15 },
  zoom: FZOOM, surface: 'grass',
  ages: [22, 25], clock: { seconds: 360 },
  timeUpText: 'One by one, the stalls began to pull their shutters down.',
  hint: 'The festival only lasts one night. Wander. Find the glowing lights.',
  build(ctx) {
    const W = ctx.world;
    const L = ctx.lake = buildLake(ctx);
    ctx.me = makePlayer(24, 7.4, 6.9, -2.4, youLook(24));
    ctx.sam = person(LOOKS.sam, 24, 'Sam', -1.25, 4.15, Math.PI);
    ctx.theo = person({ ...LOOKS.theo, scarf: 0xd9584a }, 24, 'Theo', 0, 0); ctx.theo.root.visible = false;
    ctx.meetSpot = new THREE.Object3D(); ctx.meetSpot.position.set(-1.6, 0, 4.55);
    ctx.hog = hedgehog(); W.add(ctx.hog, 11.9, -8.2, { ry: 2.4 }); ctx.hog.scale.set(1, 0.5, 1);
    const r = rng(31);
    ctx.crowd = [];
    // stall-keepers
    ctx.keeper = person({ ...LOOKS.grandma, shirt: 0x6a7fa8, glasses: true, dress: true, hair: 0xb8b0a8 }, 63, 'Stall-keeper', -1.6, 2.25, 0);
    ctx.ringMan = person({ ...LOOKS.dad, shirt: 0xd9584a, hat: 0x3d4f7a, beard: true }, 50, 'Ring-toss man', 8.6, 2.15, 0);
    stranger(r, 1.7, 2.2, 0, 35); stranger(r, 4.9, 2.2, 0, 19);
    // people browsing the stalls
    [[0.9, 4.3, Math.PI], [2.5, 4.4, Math.PI * 1.1], [4.4, 4.3, Math.PI], [5.6, 4.6, Math.PI * 0.9], [6.4, 4.5, Math.PI], [-2.6, 4.6, Math.PI * 0.85]].forEach(([x, z, h], i) => ctx.crowd.push(stranger(r, x, z, h)));
    // strollers on the promenade and along the shore
    const loops = [
      [[-3.2, 5.4], [11, 5.4], [11, 7.6], [-3.2, 7.6]],
      [[10.5, 7.0], [-2.8, 7.0], [-2.8, 5.0], [10.5, 5.0]],
      [[1.2, 0.4], [9.8, 0.6], [11, -6], [1.6, -7.4]],
      [[-1.8, 9.2], [12, 9.0], [12, 6.4]],
      [[-11.6, 1.4], [-2.6, 1.6], [-1.4, -3.4], [-2.0, -7.8], [-1.4, -3.4], [-2.6, 1.6]],
    ];
    loops.forEach((pts, i) => { const c = stranger(r, pts[0][0], pts[0][1], 0); ctx.crowd.push(c); c._loop = pts; c._loopSpeed = 0.7 + (i % 3) * 0.15; });
    // a child weaving between the lantern posts
    const kid = stranger(r, 0, 6.6, 0, 7); kid._loop = [[-3.4, 6.6], [3.2, 7.4], [6.8, 6.6], [10.2, 7.4], [6.8, 6.6], [3.2, 7.4]]; kid._loopSpeed = 1.9; ctx.crowd.push(kid);
    // couples waltzing on the dance floor; a band on the stage
    const [DX, DZ] = L.danceFloor;
    ctx.waltzers = [];
    [[DX - 1.6, DZ + 0.7], [DX + 1.5, DZ - 0.9], [DX - 0.5, DZ - 1.9]].forEach(([x, z], i) => {
      const a = stranger(r, x, z, 0, [26, 58, 33][i]), b = stranger(r, x, z, 0, [27, 61, 30][i]);
      a.setPose('waltz'); b.setPose('waltz');
      const st = waltzPair(a, b, x, z, { speed: 0.6 + i * 0.15 }); ctx.waltzers.push(st); onFrame(ctx, st.fn);
    });
    const [SX, SZ2] = L.stage;
    ctx.band = [stranger(r, SX - 0.6, SZ2, 0, 44), stranger(r, SX + 0.6, SZ2, 0, 29)];
    ctx.band.forEach((m, i) => { m.extraY = 0.3; m.face(DX, DZ); m.setPose('dance', { speed: 2 + i }); });
    const bg = guitar(); ctx.band[1].root.add(bg); bg.position.set(0, 0.95, 0.26); bg.rotation.z = 0.9;
    // a couple sitting on the far shore watching the water
    const s1 = stranger(r, -11.2, 1.6, Math.PI * 1.15, 70), s2 = stranger(r, -10.6, 1.8, Math.PI * 1.15, 72);
    s1.setPose('sitGround'); s2.setPose('sitGround'); s1.lookAt(s2);
    // the busker on his crate
    const [BX, BZ] = L.busker;
    ctx.busker = person({ skin: C.skin[3], hair: 0xd8d4cf, hairStyle: 'short', shirt: 0x8a6a4a, pants: 0x4a4a58, beard: true, hat: 0x5a4a3a, scarf: 0xd9584a }, 71, 'Busker', BX, BZ, Math.PI * 0.2);
    ctx.busker.setPose('sit', { h: 0.42 });
    const g = guitar(); ctx.busker.root.add(g); g.position.set(0.02, 0.66, 0.26); g.rotation.z = 1.0; ctx.buskerGuitar = g;
    // night: stars that come out, lights that warm up
    ctx.stars = W.particlesOf('stars', { area: { w: 46, h: 5, d: 46 }, y0: 9, count: 140, opacity: 0 });
    ctx.night = 0; ctx.baseMood = 'autumnEvening';
    onFrame(ctx, (dt) => {
      const cl = G.director.clock;
      const k = cl ? cl.t / cl.seconds : 0;
      if (!ctx.nightFell && (k > 0.12 || ctx.world.getHotspot('meetSam')?.done)) { ctx.nightFell = true; ctx.baseMood = 'festivalNight'; if (!ctx.moodHeld) base(ctx, 40); }
      if (ctx.nightFell) ctx.night = Math.min(1, ctx.night + dt / 40);
      L.lights.forEach((l, i) => { l.intensity = (i === 2 ? 4 : 7) * (0.25 + ctx.night * 0.75); });
      ctx.stars.setOpacity(ctx.night * 0.9);
    });
    skyDressing(ctx, { clouds: 5, y: -5, spread: 26, seed: 4 });
    W.birds(5, 3);
  },
  async intro(ctx) {
    ctx.crowd.forEach((c) => { if (c._loop) stroll(c, c._loop, { speed: c._loopSpeed }); });
    hideEggs(ctx);
    mood('autumnEvening', 0, EVE);
    await fadeIn(3);
    await lower('Autumn. The lantern festival by the lake, on the first cold evening of the year.');
    const i = await choose('How did you end up here?', ['Theo talked you into it.', 'You came on your own.']);
    const h = ctx.world.getHotspot('meetSam');
    if (i === 0) {
      flags().festivalWith = 'theo'; flags().metSamHow = 'approached';
      G.achieve?.('c4_wingman', 'Wingman', 'Went to the lantern festival with Theo.');
      const t = ctx.theo, b = ctx.me;
      t.root.visible = true; t.place(b.position.x + 0.8, b.position.z - 0.8); t.faceChar(b); b.faceChar(t);
      await say(t, 'Right. Toffee apples. Then the ring toss. Then I dance badly near someone attractive. That’s the plan.');
      await say(t, 'You could also dance badly near someone attractive. Just saying. It’s a big festival.');
      t.follow(b, 1.7);
      ctx.meetSpot.position.set(-1.6, 0, 4.55);
      h.label = 'The lantern stall';
    } else {
      flags().festivalWith = 'alone'; flags().metSamHow = 'samApproached';
      G.achieve?.('c4_alone', 'Is This Seat Taken?', 'Went to the festival alone — and someone found you.');
      await lower('Just you, a warm scarf, and the whole evening. You’ve decided that’s enough.');
      ctx.meetSpot.position.set(0.95, 0, -1.95);
      h.label = 'Sit on the bench by the water';
    }
  },
  moments: [
    {
      id: 'meetSam', kind: 'story', label: 'The lantern stall', anchor: (ctx) => ctx.meetSpot, radius: 1.5, caption: { id: 'meetSam', text: 'The lantern stall' },
      async run(ctx) {
        const s = ctx.sam;
        if (flags().festivalWith === 'alone') await meetAtBench(ctx); else await meetAtStall(ctx);
        if (flags().metSamYoung) G.achieve?.('c4_hello_again', 'Hello Again', 'Recognised Sam from the ice-cream cart, ten years later.');
        else G.achieve?.('c4_hello_stranger', 'Hello, Stranger', 'Met Sam at the lantern festival.');
        await keep('meetSam', flags().festivalWith === 'alone' ? 'The bench by the water' : 'The lantern stall');
        if (flags().festivalWith !== 'alone') {
          const t = ctx.theo; t.follow(null);
          t.walkTo(4.6, 4.25).then(() => t.face(4.9, 3.0));
          await lower('Over Sam’s shoulder, Theo gave you two thumbs up and melted into the crowd. For Theo, melting meant knocking over a bin.');
          sfx('thud', { vol: 0.5 });
        }
        s.lookAt(null);
        ctx.me.setPose('idle'); s.setPose('idle');
        s.follow(ctx.me, 1.3);
        await camFollow(ctx.me, FZOOM);
      },
    },
    {
      id: 'theoReport', label: 'Theo is waving at you from the toffee stall', anchor: (ctx) => ctx.theo, offset: [0.4, 0, 0.7], requires: ['meetSam'], when: () => flags().festivalWith === 'theo', caption: 'Theo, who saw it first',
      async run(ctx) {
        const b = ctx.me, t = ctx.theo, s = ctx.sam;
        s.follow(null); s.walkTo(t.position.x - 1.6, t.position.z + 0.6).then(() => s.face(t.position.x - 1.6, 3.0));
        await b.walkTo(t.position.x + 0.7, t.position.z + 0.5); b.faceChar(t); t.faceChar(b);
        await camTo(t.position.x + 0.3, t.position.z + 0.3, 5.2, 1.2);
        await say(t, 'Well? WELL? I want a full report. Full report. Leave nothing out.');
        const i = await choose('', ['“They’re… really nice.”', '“Go away, Theo.”', '“I think I’m in trouble.”']);
        if (i === 0) await say(t, 'Nice. NICE. You’ve gone red. You’ve gone completely red.');
        else if (i === 1) await say(t, 'Never. I have toffee and I am invested.');
        else await say(t, 'The best kind of trouble. Go on. Go back. Go!');
        t.setPose('hug'); b.setPose('hug');
        await wait(1.2);
        t.setPose('idle'); b.setPose('idle');
        await say(t, 'I saw them first, though. I want that on record. At the wedding.');
        await keep('theoReport', 'Theo, who saw it first');
        s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    {
      id: 'ringToss', label: 'Win Sam something at the ring toss', at: [8.6, 4.2], requires: ['meetSam'], caption: 'A very ugly prize, kept for forty years',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, L = ctx.lake, man = ctx.ringMan;
        s.follow(null);
        await b.walkTo(8.4, 3.8); b.face(8.4, 2.4);
        s.walkTo(9.5, 4.2).then(() => s.faceChar(b));
        await camTo(8.6, 3.3, 5.6, 1.4);
        await say(man, 'Three rings, one prize. Nobody’s won all night. Nobody ever wins.');
        await say(s, 'That one. The frog. The terrible frog. I need it.');
        let won = false;
        const throwRing = (good, n) => {
          const ring = P.torus(0.12, 0.022, 4, 10, [C.red, C.yellow, C.teal][n % 3]); ring.rotation.x = Math.PI / 2;
          ctx.world.root.add(ring);
          const from = b.position.clone().add(new THREE.Vector3(0, 1.3, 0));
          const peg = L.pegs[(n * 2 + 1) % L.pegs.length];
          const to = good ? peg.clone() : peg.clone().add(new THREE.Vector3((n % 2 ? 0.5 : -0.45), 0.25, 0));
          sfx('fwip');
          tween(0.55, (t) => { ring.position.lerpVectors(from, to, t); ring.position.y += Math.sin(t * Math.PI) * 0.6; ring.rotation.z = t * 8; }).then(async () => {
            if (good) { sfx('ping'); ring.rotation.set(0, 0, 0); return; }
            sfx('tap');
            const f2 = ring.position.clone();
            await tween(0.5, (t) => { ring.position.set(f2.x + t * 0.3, f2.y * (1 - t) + 0.03, f2.z + t * 0.9); }, (x) => x * x);
          });
        };
        await timing({ label: 'Throw — press Space when the needle is in the gold', tries: 3, speed: 1.3, sweet: 0.14, onTry: (q, n) => { const good = q >= 1; throwRing(good, n); if (good) won = true; } });
        await wait(0.8);
        if (won) {
          sfx('yay'); hop(s, 2, 0.2);
          await say(man, 'Well, I’ll be. Twenty years. Twenty years and somebody actually—');
          await say(man, 'Go on, then. Pick.');
        } else {
          await say(man, 'Closest anybody’s come all night. Here — take it. I can’t look at it any more.');
        }
        // the frog leaves the shelf and goes to Sam
        const pl = L.plush; const from = pl.position.clone(); const to = s.position.clone().add(new THREE.Vector3(0, 1.0, 0));
        await tween(0.7, (t) => { pl.position.lerpVectors(from, to, t); pl.position.y += Math.sin(t * Math.PI) * 0.5; });
        pl.parent.remove(pl);
        ctx.plush = holdInHand(s, uglyPlush(), 'L', [0, -0.2, 0.05], 0.9);
        s.setPose('laugh');
        await say(s, 'It’s hideous. Look at its little face. It looks like it’s just been told bad news.');
        s.setPose('idle');
        await say(s, 'I love it. I’m keeping it forever.');
        await lower('Sam did keep it. Through four flats, one house, and a child who tried to feed it peas.');
        flags().uglyPlush = true; flags().ringTossWon = won;
        if (won) G.achieve?.('c4_ring_toss', 'Nobody Ever Wins', 'Actually won the ring toss.');
        G.achieve?.('c4_ugly_frog', 'Kept for Forty Years', 'Took home the ugliest prize at the festival.');
        await keep('ringToss', 'A very ugly prize, kept for forty years');
        s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    {
      id: 'dance', kind: 'story', label: 'The band is playing a waltz', at: [5.2, -1.4], radius: 1.6, requires: ['meetSam'], caption: 'The first dance',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, [cx, cz] = ctx.lake.danceFloor;
        s.follow(null);
        await camTo(cx, cz + 0.4, 7, 1.5);
        await Promise.all([b.walkTo(cx - 0.4, cz + 0.2), s.walkTo(cx + 0.4, cz - 0.1)]);
        b.faceChar(s); s.faceChar(b);
        await say(s, 'I should warn you. I can’t dance. At all. It’s a medical fact.');
        const i = await choose('', ['“Neither can I.”', '“I’ll lead. Badly.”', '“Nobody’s watching.”']);
        if (i === 0) await say(s, 'Good. Then nobody can tell.');
        else if (i === 1) await say(s, 'Badly is perfect. Badly is my level.');
        else await say(s, 'Everybody’s watching. …Okay. Okay. Let’s go.');
        b.setPose('waltz'); s.setPose('waltz');
        music('together', { intensity: 0.8 });
        intensity(0.85, 4);
        ctx.moodHeld = true;
        mood('festivalNight', 3, { ...NIGHT, bloom: 1.0, warmth: 0.35, dream: 0.15 });
        const pair = waltzPair(b, s, cx, cz, { r: 0.34, speed: 0.5 });
        const spin = onFrame(ctx, pair.fn);
        const zoom = camZoom(4.6, 10);
        await rhythm({ label: 'Waltz — press Space on the beat. One, two, three…', hits: 8, onHit: (n, q) => { if (q > 0) pair.speed = 0.5 + n * 0.11; } });
        await zoom;
        say(s, 'You’re standing on my foot.', { passive: true, hold: 2.4 });
        await wait(2.6);
        say(s, 'Don’t stop. Don’t you dare stop.', { passive: true, hold: 2.4 });
        await wait(2.6);
        await lower('Neither of you could dance. It didn’t matter at all.');
        flags().danced = true;
        G.achieve?.('c4_first_dance', 'Badly, Together', 'Shared a first dance with Sam.');
        await keep('dance', 'The first dance');
        offFrame(ctx, spin);
        b.setPose('idle'); s.setPose('idle');
        ctx.moodHeld = false; base(ctx, 4);
        intensity(0.45, 4);
        s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    {
      id: 'rowboat', label: 'Take the rowboat out', at: [-5.6, 0.45], requires: ['meetSam'], caption: 'Floating',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, L = ctx.lake, boat = L.boat, PX = L.pierX;
        s.follow(null);
        await camTo(-6.0, -2.0, 7.5, 1.6);
        // along the pier
        const onPier = () => { b.extraY = L.pierY; s.extraY = L.pierY; };
        await Promise.all([b.walkTo(PX, -0.5), s.walkTo(PX + 0.1, 0.1)]);
        onPier();
        await Promise.all([b.walkTo(PX - 0.1, -3.4), s.walkTo(PX + 0.15, -2.9)]);
        await say(s, 'Is this allowed? I feel like this isn’t allowed.');
        sfx('splash', { vol: 0.4 });
        // into the boat: one at each end, facing each other
        const seat = () => {
          const ry = boat.rotation.y, dx = Math.sin(ry + Math.PI / 2), dz = Math.cos(ry + Math.PI / 2); // boat's long axis
          b.position.set(boat.position.x - dx * 0.5, 0, boat.position.z - dz * 0.5);
          s.position.set(boat.position.x + dx * 0.5, 0, boat.position.z + dz * 0.5);
          b.extraY = s.extraY = boat.position.y + 0.06;
          b.faceNow(s.position.x, s.position.z); s.faceNow(b.position.x, b.position.z);
        };
        b.setPose('sit', { h: 0.28 }); s.setPose('sit', { h: 0.28 });
        const ride = onFrame(ctx, seat);
        // row out to the middle of the lake
        const home = boat.position.clone();
        const mid = new THREE.Vector3(-8.4, home.y, -5.6);
        await Promise.all([tween(6, (t) => { boat.position.x = home.x + (mid.x - home.x) * t; boat.position.z = home.z + (mid.z - home.z) * t; boat.rotation.y = Math.PI / 2 + t * 0.9; }), camTo(-8.2, -5.2, 6.2, 6)]);
        ctx.moodHeld = true;
        mood('festivalNight', 4, { ...NIGHT, bloom: 0.9, saturation: 1.0, warmth: 0.1 });
        amb({ waves: 0.6, crowd: 0.15, wind: 0.2 }, 3);
        intensity(0.25, 3);
        ctx.stars.setOpacity(1.2);
        await stillness({ seconds: 6, label: 'Float. Just float.' });
        await say(s, 'You can hear the music from out here. Like it’s someone else’s party.');
        await say(s, 'I like this. I like… this.');
        await lower('Lanterns on the water. Stars above it. It was hard to tell where one ended and the other began.');
        await keep('rowboat', 'Floating');
        // and back
        await Promise.all([tween(5, (t) => { boat.position.x = mid.x + (home.x - mid.x) * t; boat.position.z = mid.z + (home.z - mid.z) * t; boat.rotation.y = Math.PI / 2 + 0.9 * (1 - t); }), camTo(-6, -2.0, 7.5, 5)]);
        offFrame(ctx, ride);
        b.setPose('idle'); s.setPose('idle');
        b.place(PX - 0.1, -3.2); s.place(PX + 0.15, -2.7); onPier();
        await Promise.all([b.walkTo(PX, -0.3), s.walkTo(PX + 0.2, -0.1)]);
        await Promise.all([b.walkTo(PX - 0.3, 0.6), s.walkTo(PX + 0.7, 0.8)]);
        b.extraY = 0; s.extraY = 0;
        ctx.moodHeld = false; base(ctx, 4);
        amb({ crowd: 0.55, waves: 0.35, wind: 0.15 }, 3);
        intensity(0.45, 3);
        s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    {
      id: 'momCall', label: 'Your phone is buzzing', at: [10.6, 1.0], caption: 'Mom’s voice, far away',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam;
        const samHere = ctx.world.getHotspot('meetSam')?.done;
        sfx('phone'); await wait(0.6); sfx('phone');
        if (samHere) { s.follow(null); s.walkTo(9.2, 1.9).then(() => s.faceChar(b)); }
        await b.walkTo(10.5, 0.7); b.face(13, -1.2);
        b.setPose('think');
        await camTo(10.4, 0.6, 5.2, 1.5);
        const mom = { name: 'Mom' };
        await say(b, 'There you are! I called twice. Are you eating well?', mom);
        const opts = ['“Yes, Mom.”', '“Define ‘well’.”', samHere ? '“I met someone.”' : '“I miss you.”'];
        const i = await choose('Three toffee apples. Half a bag of chestnuts. Nothing green since Tuesday.', opts);
        if (i === 0) {
          await say(b, 'You’re lying. I can hear the toffee. Eat something green.', mom);
        } else if (i === 1) {
          await say(b, 'Don’t you “define” me. I know what three toffee apples sound like.', mom);
        } else if (samHere) {
          flags().toldMomAboutSam = true;
          await say(b, 'You what? Who? Are they nice? Do they eat vegetables?', mom);
          await say(b, 'No, don’t tell me. Tell me everything. No — tell me on Sunday. Come for lunch. Bring them.', mom);
          s.setPose('wave');
          await wait(1);
          s.setPose('idle');
        } else {
          await say(b, '…Oh, sweetheart. We miss you too. The house is so quiet.', mom);
        }
        await say(b, 'Your father says hello. He’s pretending he isn’t listening.', mom);
        await say(b, 'HELLO!', { name: 'Dad', small: true });
        await say(b, 'Wear a jacket. It gets cold by the water. Love you. Call more.', mom);
        await lower('You would call more. Not enough — nobody ever calls enough — but more.');
        await keep('momCall', 'Mom’s voice, far away');
        b.setPose('idle');
        if (samHere) s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    {
      id: 'busker', label: 'Listen to the old busker', at: [-3.0, 2.9], caption: 'An old song, by the water',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, bu = ctx.busker;
        const samHere = ctx.world.getHotspot('meetSam')?.done;
        if (samHere) { s.follow(null); s.walkTo(-1.9, 3.0).then(() => s.faceChar(bu)); }
        await b.walkTo(-2.7, 2.8); b.faceChar(bu); bu.faceChar(b);
        await camTo(-3.0, 2.3, 5.4, 1.4);
        await say(bu, 'Evening. Got a request? I know every song there is. Most of them badly.');
        await choose('', ['“Something slow.”', '“Something old.”', '“Whatever you love most.”']);
        await say(bu, 'Then here’s one my mother used to sing. Older than me. Older than dirt.');
        sfx('note', { deg: 3 });
        music('whistle', { intensity: 0.5 });
        ctx.moodHeld = true; base(ctx, 3, { warmth: 0.5, dream: 0.2 });
        await wait(3);
        await think('You know this tune.');
        await think('Grandpa used to whistle this. On the porch. Every summer.');
        if (samHere) {
          await say(s, 'Hey. You alright?');
          const i = await choose('', ['“Yeah. It’s just an old song.”', '“My grandpa used to whistle it.”']);
          if (i === 1) await say(s, 'Then we’ll stay for the whole thing.');
          else await say(s, 'Okay. We’ll stay anyway.');
          s.walkTo(-2.2, 2.6).then(() => s.faceChar(bu));
        }
        await stillness({ seconds: 6, label: 'Listen.' });
        await tap({ count: 1, label: 'Drop a coin in his case' });
        sfx('ping');
        await say(bu, 'Thank you kindly. Somebody always knows that one. Funny, that.');
        await keep('busker', 'An old song, by the water');
        music('together', { intensity: 0.45 });
        ctx.moodHeld = false; base(ctx, 4);
        if (samHere) s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    // ---- hidden: easter eggs ----
    {
      id: 'eggHedgehog', hidden: true, label: 'Something is rustling in the leaves', at: [11.5, -7.6], radius: 1.0,
      async run(ctx) {
        const b = ctx.me, hg = ctx.hog;
        const s = ctx.sam, samHere = ctx.world.getHotspot('meetSam')?.done;
        if (samHere) s.follow(null);
        await b.walkTo(11.3, -7.5); b.face(hg.position.x, hg.position.z); b.setPose('crouch');
        await camTo(11.6, -7.9, 4.2, 1.5);
        sfx('rustle'); await wait(0.6); sfx('rustle');
        await tap({ count: 3, label: 'Wait for it to uncurl', onTap: (n) => { hg.scale.set(1, 0.5 + n * 0.17, 1); sfx('rustle', { vol: 0.5 }); } });
        await lower('A hedgehog, getting ready for winter under the leaves. It looked at you as if you were very, very late.');
        G.achieve?.('c4_hedgehog', 'Small and Prickly', 'Found the hedgehog hiding under the trees.');
        b.setPose('idle');
        if (samHere) s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    {
      id: 'eggBand', hidden: true, label: 'The band has a spare tambourine', at: [9.5, -2.5], radius: 0.9,
      async run(ctx) {
        const b = ctx.me, [m1] = ctx.band;
        const s = ctx.sam, samHere = ctx.world.getHotspot('meetSam')?.done;
        if (samHere) s.follow(null);
        await b.walkTo(9.5, -2.55); b.face(9.5, -3.9);
        await camTo(9.3, -3.2, 5.2, 1.2);
        await say(m1, 'Oi. Who said you could— …Fine. Keep time. Don’t embarrass me.');
        b.setPose('dance', { speed: 7 });
        if (samHere) s.setPose('laugh');
        await rhythm({ label: 'Shake it on the beat', hits: 6, onHit: () => sfx('fwip', { vol: 0.6 }) });
        b.setPose('idle'); if (samHere) s.setPose('idle');
        sfx('applause', { vol: 0.5 });
        await lower('Nobody had asked you. The band let you finish the song anyway.');
        G.achieve?.('c4_tambourine', 'Uninvited Percussion', 'Joined the band. Nobody asked you to.');
        if (samHere) s.follow(b, 1.3);
        await camFollow(b, FZOOM);
      },
    },
    {
      id: 'lanternRelease', kind: 'story', label: 'Walk Sam home along the shore', at: [-1.9, 1.0], radius: 1.4, requires: ['dance'], caption: { id: 'lanternRelease', text: 'Our lantern, somewhere among all the others' },
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, L = ctx.lake;
        s.follow(null);
        mood('festivalNight', 4, NIGHT); ctx.moodHeld = true;
        await s.walkTo(L.shorePath[0][0] + 0.4, L.shorePath[0][1] + 0.3);
        await say(s, 'I live just past the boathouse. You don’t have to walk me. …You’re going to walk me.');
        await camFollow(b, 8.5);
        amb({ crowd: 0.2, waves: 0.55, wind: 0.2 }, 6);
        const talk = (async () => {
          await wait(1.5);
          await say(s, 'I don’t usually talk this much. To people. To anyone.', { passive: true, hold: 3 });
          await wait(1.2);
          await say(s, 'Is it weird that this feels like the start of something?', { passive: true, hold: 3.4 });
        })();
        await walkWith({ npc: s, path: L.shorePath.slice(1), maxDist: 2.6, label: 'Walk Sam home' });
        await talk;
        const [rx, rz] = L.releaseSpot;
        await b.walkTo(rx + 0.7, rz + 0.5);
        s.faceChar(b); b.faceChar(s);
        await camTo(rx - 0.4, rz - 0.4, 6.0, 2);
        await say(s, 'Wait. We never lit it.');
        // light the blue lantern together
        s.setPose('reachForward'); b.setPose('reachForward');
        const lantern = ctx.samLantern;
        await hold({ label: 'Hold Space to light it', seconds: 2.5, onProgress: (p) => { if (p > 0.95 && lantern && !lantern.userData.lit) { lantern.userData.lit = true; sfx('lantern'); } } });
        // swap the dark lantern in Sam's hand for a lit one, and let it go
        const wp = new THREE.Vector3(); if (lantern) { lantern.getWorldPosition(wp); lantern.parent.remove(lantern); } else wp.set(rx, 1.0, rz);
        const lit = P.lantern(0x8ab8ff, true); lit.position.copy(wp); ctx.world.root.add(lit);
        // if Sam gave you a lantern of your own, it goes up beside theirs
        let lit2 = null;
        if (ctx.myLantern) { const wp2 = new THREE.Vector3(); ctx.myLantern.getWorldPosition(wp2); ctx.myLantern.removeFromParent(); lit2 = P.lantern(0xffb36b, true); lit2.position.copy(wp2); ctx.world.root.add(lit2); }
        s.setPose('reach'); b.setPose('reach');
        sfx('lantern');
        music('together', { intensity: 0.7 });
        intensity(0.75, 6);
        // every lantern at the festival goes up with it
        const r = rng(77);
        const sky = [];
        for (let i = 0; i < 34; i++) {
          const l = P.lantern([0xffb36b, 0xffd27a, 0xff9a7a, 0xf2a3d8, 0x8ab8ff][i % 5], true);
          l.position.set(r.range(-4, 11), 0.4 - r.range(0, 5), r.range(-7, 7)); l.visible = false; ctx.world.root.add(l);
          sky.push({ l, v: r.range(0.45, 0.8), d: r.range(0, 6) });
        }
        const rise = onFrame(ctx, (dt, t) => {
          lit.position.y += dt * 0.55; lit.position.x += dt * 0.3; lit.position.z -= dt * 0.22;
          if (lit2) { lit2.position.y += dt * 0.53; lit2.position.x += dt * 0.31; lit2.position.z -= dt * 0.2; }
          for (const q of sky) { q.l.position.y += dt * q.v; q.l.position.x -= dt * 0.25; q.l.position.z -= dt * 0.18; q.l.position.x += Math.sin(t + q.d) * dt * 0.1; if (q.l.position.y > 0.6) q.l.visible = true; }
        });
        await camTo(-7.0, -2.6, 12.5, 9);
        await wait(1);
        await say(s, 'Make a wish.');
        await think('You didn’t. There didn’t seem to be anything left to wish for.');
        s.setPose('idle'); b.setPose('idle'); s.faceChar(b); b.faceChar(s);
        G.achieve?.('c4_lantern', 'Same Time Next Year', 'Released a lantern over the lake with Sam.');
        await keep('lanternRelease', lit2 ? 'Two lanterns, side by side, until we couldn’t tell which was ours' : 'Our lantern, somewhere among all the others');
        await say(s, 'Same time next year?');
        const i = await choose('', ['“Same time next year.”', '“Sooner than that.”']);
        flags().lanternAnswer = i === 1 ? 'sooner' : 'nextYear';
        if (i === 1) { s.setPose('laugh'); await say(s, 'Sooner. Okay. Sooner is good.'); s.setPose('idle'); }
        await lower('You went back every autumn after that. Every single one you could.');
        await fadeOut(4, '#0d0b1a');
        offFrame(ctx, rise);
      },
    },
  ],
  final: 'lanternRelease',
};

// =====================================================================
// IV-2  The wedding, under the family tree
// =====================================================================
const AISLE_X = 4.0;
const DAY = { exposure: 0.94, hemiIntensity: 1.15, saturation: 1.0, dream: 0.1 };
function weddingLook(age) {
  const m = G.state.identity === 'mother';
  return { ...youLook(age), shirt: 0xfbf8f2, pants: m ? 0xfbf8f2 : 0x3d4f7a, dress: m };
}

export const wedding = {
  id: 'ch4-wedding', chapter: 4,
  mood: 'weddingDay', music: 'wedding', intensity: 0.35,
  ambience: { birds: 0.6, wind: 0.2, crowd: 0.25 },
  zoom: 10.5, surface: 'grass',
  ages: [26, 28], clock: { seconds: 330 },
  timeUpText: 'The afternoon slipped away the way the best ones do — all at once.',
  hint: 'Your wedding day. It goes by faster than any day you’ve ever had.',
  build(ctx) {
    const W = ctx.world;
    const R = ctx.r = buildYard(ctx, { season: 'summer', treeStage: 2, flowers: true });
    W.bounds = { minX: -11.5, maxX: 11.5, minZ: -4.2, maxZ: 7.2 };
    // tidy the lawn where the chairs and the dance floor go; the corner tree would block the photo
    for (const o of W.root.children) {
      const { x, z } = o.position;
      const inArea = (x > -3.4 && x < 0.6 && z > 1.9 && z < 6.1) || (x > 1.0 && x < 7.4 && z > 0.6 && z < 4.8);
      if (inArea || (Math.abs(x - 9.5) < 0.01 && Math.abs(z - 4.8) < 0.01)) { o.visible = false; W.removeCollidersOf(o); }
    }
    W.colliders = W.colliders.filter((c) => !(c.x === 9.5 && c.z === 4.8));
    // the arch in front of the tree, a petal aisle, rows of chairs
    W.add(P.arch(C.white, [C.pink, C.white, C.blossom, 0xf3d36b]), AISLE_X, -0.5);
    W.addCollider({ x: AISLE_X - 1, z: -0.5, r: 0.12 }); W.addCollider({ x: AISLE_X + 1, z: -0.5, r: 0.12 });
    W.add(P.patch(1.0, 4.6, 0xfbf3ee, 0.014), AISLE_X, 2.6);
    for (let i = 0; i < 26; i++) { const pt = P.patch(0.08, 0.06, i % 2 ? C.pink : C.blossomLight, 0.02); W.add(pt, AISLE_X + Math.sin(i * 7.3) * 0.4, 0.5 + i * 0.17, { ry: i, y: 0.02 }); }
    ctx.chairs = [];
    ctx.seats = [];
    for (let row = 0; row < 3; row++) for (const side of [-1, 1]) for (let k = 0; k < 3; k++) {
      const x = AISLE_X + side * (1.0 + k * 0.7), z = 1.5 + row * 0.95;
      const c = P.chair(0xfbf8f2); W.add(c, x, z, { ry: Math.PI }); ctx.chairs.push(c);
      ctx.seats.push([x, z - 0.05]);
    }
    // flowers at the end of each row
    for (let row = 0; row < 3; row++) for (const side of [-1, 1]) {
      const x = AISLE_X + side * 0.62, z = 1.5 + row * 0.95;
      for (let f = 0; f < 3; f++) W.add(P.flower([C.pink, C.white, 0xf3d36b][f], f + row), x + (f - 1) * 0.06, z + 0.3);
    }
    // the reception: a long table, a cake, a little dance floor, string lights
    const tbl = P.table({ w: 3.0, d: 0.9, color: 0xfbf8f2 }); W.add(tbl, -1.6, 0.4, { collide: { w: 3.0, d: 0.9 } });
    const cloth = P.box(3.1, 0.02, 1.0, 0xfbf3ee); W.add(cloth, -1.6, 0.4, { y: 0.74 });
    const cake = P.cake(0); W.add(cake, -1.6, 0.4, { y: 0.76 });
    const tier = P.cyl(0.22, 0.22, 0.22, 10, C.white); W.add(tier, -1.6, 0.4, { y: 1.06 });
    const top = P.heart(C.pink, 0.16); W.add(top, -1.6, 0.4, { y: 1.42 });
    for (let i = 0; i < 6; i++) { const gl = P.cyl(0.035, 0.03, 0.14, 6, 0xdff2ff, { transparent: true, opacity: 0.7 }); W.add(gl, -2.8 + i * 0.45, 0.25 + (i % 2) * 0.3, { y: 0.76 }); }
    for (let i = 0; i < 3; i++) { const vase = P.cyl(0.07, 0.05, 0.18, 6, 0x9ab0c8); W.add(vase, -2.6 + i * 1.0, 0.55, { y: 0.76 }); for (let f = 0; f < 3; f++) W.add(P.flower([C.pink, C.white, C.red][f], f), -2.6 + i * 1.0 + (f - 1) * 0.04, 0.55, { y: 0.9 }); }
    W.add(P.danceFloor(3.6, 3.6), -1.4, 4.0);
    ctx.danceFloor = [-1.4, 4.0];
    const poles = [[-3.6, -0.9], [1.0, -0.9], [-3.6, 6.2], [1.0, 6.2]];
    poles.forEach(([x, z]) => W.add(P.cyl(0.04, 0.05, 2.7, 5, C.white), x, z, { collide: 0.1 }));
    W.root.add(P.stringLights([[-3.6, 2.65, -0.9], [1.0, 2.65, -0.9], [1.0, 2.65, 6.2], [-3.6, 2.65, 6.2], [-3.6, 2.65, -0.9]], undefined, 0.3));
    W.root.add(P.stringLights([[-3.6, 2.65, -0.9], [1.0, 2.65, 6.2]], undefined, 0.4));
    W.root.add(P.stringLights([[1.0, 2.65, -0.9], [AISLE_X - 0.6, 3.3, -2.0], [AISLE_X + 1.6, 3.0, -1.4]], undefined, 0.25));
    W.root.add(P.stringLights([[-3.6, 2.65, -0.9], [-4.5, 2.1, -2.2]], undefined, 0.2));
    const sg = sign('JUST MARRIED', { w: 1.6, h: 0.35, bg: '#fbf3ee', fg: '#b85a6a' }); sg.position.set(-1.6, 0.55, 0.92); W.root.add(sg);
    // a camera on a tripod, for later
    const tri = new THREE.Group();
    for (let i = 0; i < 3; i++) { const l = P.cyl(0.015, 0.02, 1.3, 4, 0x333338); l.rotation.z = 0.25; l.rotation.y = i * 2.1; l.position.y = 0; tri.add(l); }
    const camB = P.box(0.22, 0.16, 0.14, 0x2b2b33); camB.position.y = 1.25; tri.add(camB);
    const lens = P.cyl(0.05, 0.05, 0.1, 8, 0x111111); lens.rotation.x = Math.PI / 2; lens.position.set(0, 1.33, 0.1); tri.add(lens);
    W.add(tri, 7.6, 3.2, { ry: -Math.PI * 0.75 + Math.PI, collide: 0.2 }); ctx.tripod = tri; tri.visible = false;
    // people
    ctx.me = makePlayer(26, -4.6, -1.4, Math.PI * 0.25, weddingLook(26));
    ctx.sam = person({ ...LOOKS.sam, shirt: 0xf3efe6, pants: 0x3d3d52 }, 26, 'Sam', 9.4, 4.6, -Math.PI / 2);
    ctx.mom = person(LOOKS.mom, 54, 'Mom', 0, 0, Math.PI);
    ctx.dad = person({ ...LOOKS.dad, shirt: 0x5a6a8a }, 56, 'Dad', 0, 0, Math.PI);
    ctx.grandma = person(LOOKS.grandma, 84, 'Grandma', -3.2, -2.12, 0); ctx.grandma.setPose('sit', { h: 0.45 }); ctx.grandma.giveCane(true);
    ctx.theo = person({ ...LOOKS.theo, shirt: 0x3d4f7a }, 26, 'Theo', AISLE_X + 1.4, -0.2, -Math.PI / 2 - 0.4);
    ctx.officiant = person({ skin: C.skin[2], hair: 0xb8b0a8, hairStyle: 'bob', shirt: 0x8a6aa8, pants: 0x4a4a58, dress: true, glasses: true }, 62, 'Aunt Rosa', AISLE_X, -1.25, 0);
    const r = rng(52);
    ctx.friends = [0, 1, 2, 3, 4].map((i) => stranger(r, 0, 0, Math.PI, [27, 25, 31, 60, 29][i]));
    ctx.kid = stranger(r, 0, 0, Math.PI, 6, 'Little cousin');
    // everyone seated for the ceremony
    ctx.guests = [ctx.mom, ctx.dad, ...ctx.friends, ctx.kid];
    const seatOrder = [0, 3, 1, 4, 6, 9, 7, 10];
    ctx.guests.forEach((g, i) => { const [x, z] = ctx.seats[seatOrder[i]]; g.place(x, z, Math.PI); g.setPose('sit', { h: 0.46 }); });
    ctx.kid.setPose('sit', { h: 0.46 });
    ctx.petals = W.particlesOf('petals', { center: new THREE.Vector3(AISLE_X, 0, 0.4), area: { w: 6, h: 4, d: 6 }, count: 60, opacity: 0.2 });
    W.butterflies(3, { x: 0, z: 2, r: 5 }, 9);
    W.birds(6, 4);
    skyDressing(ctx, { clouds: 6, y: -4, spread: 24, seed: 3 });
  },
  async intro(ctx) {
    hideEggs(ctx);
    mood('weddingDay', 0, DAY);
    await fadeIn(3);
    await lower('Two years later. The yard you grew up in, full of white chairs.');
    await lower('The tree you planted with Grandpa is taller than the house’s gutter now. Today, it gets a wedding.');
  },
  moments: [
    {
      id: 'grandpaGift', label: 'Grandma is waving you over', at: [-3.2, -1.25], caption: 'Something old',
      async run(ctx) {
        const b = ctx.me, gm = ctx.grandma;
        await b.walkTo(-3.2, -1.3); b.faceChar(gm); gm.lookAt(b);
        await camTo(-3.2, -1.7, 5.0, 1.4);
        await say(gm, 'Come here. Let me look at you. Oh — oh, look at you.');
        if (flags().hasWatch) {
          await say(gm, 'You’re wearing his watch. Of course you are.');
          await say(gm, 'He’d have loved this. He’d have danced with every single person here. Badly.');
        } else {
          await say(gm, 'He always talked about you, you know. Every Sunday.');
          await say(gm, '“When that one gets married,” he’d say, “I’m dancing first.”');
        }
        await say(gm, 'Every wedding needs something old. And I’m not offering myself.');
        b.setPose('reachForward'); gm.setPose('sit', { h: 0.45 });
        await wait(0.5);
        const sq = P.box(0.14, 0.02, 0.14, 0x6fa3c8); holdInHand(b, sq, 'R', [0, -0.02, 0.05], 1);
        sfx('soft');
        await lower('His handkerchief. Pale blue, with a little stitched G in the corner. It still smelled faintly of his pipe.');
        await hold({ label: 'Hold it for a moment', seconds: 2.5 });
        await say(gm, 'Now go on. Before I ruin my face.');
        flags().grandpaHandkerchief = true;
        await keep('grandpaGift', 'Something old');
        sq.parent.remove(sq);
        b.setPose('idle'); gm.lookAt(null);
        await camFollow(b, 10.5);
      },
    },
    {
      id: 'vows', kind: 'story', label: 'Walk to the tree. It’s time.', at: [AISLE_X, 5.3], radius: 1.5, caption: 'Under the family tree',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, of = ctx.officiant, th = ctx.theo;
        intensity(0.55, 3);
        await camTo(AISLE_X, 3.0, 8.5, 1.5);
        await b.walkTo(AISLE_X - 0.35, 5.2); b.face(AISLE_X, -0.5);
        await s.walkTo(AISLE_X + 0.35, 5.2); s.face(AISLE_X, -0.5);
        ctx.guests.forEach((g) => g.lookAt(b));
        await say(s, 'Hi.');
        await say(s, 'You look… I had a whole sentence. It’s gone.');
        b.walkSpeed = 0.9; s.walkSpeed = 0.9;
        camTo(AISLE_X, 0.6, 6.5, 8);
        await Promise.all([b.walkTo(AISLE_X - 0.42, -0.35), s.walkTo(AISLE_X + 0.42, -0.35)]);
        b.walkSpeed = null; s.walkSpeed = null; b._speedOverride = null; s._speedOverride = null;
        b.faceChar(s); s.faceChar(b);
        await say(of, 'Friends. Family. Theo.');
        await say(of, 'We’re here under a tree that, I’m told, was a stick in the ground not so very long ago.');
        await say(of, 'Sam has written their own vows. Sam?');
        await say(s, 'I promise to hold your hand when everything goes too fast.');
        await say(s, 'And to tell you when you’ve got something on your face. Like now. No — it’s fine. It’s gone.');
        sfx('giggle', { vol: 0.4 });
        const vows = ['I promise to notice the little things.', 'I promise to always save you the last bite.', 'I promise to be there. Even on the ordinary days.'];
        const i = await choose('Your vow…', vows.map((v) => `“${v}”`));
        flags().vow = vows[i];
        await say(b, vows[i]);
        if (i === 0) await say(s, 'You already do. You always have.');
        else if (i === 1) await say(s, 'That is the most romantic thing anyone has ever said to me. I’m holding you to it.');
        else await say(s, 'The ordinary days. Yes. Those are the ones.');
        await say(of, 'Then — by the power vested in me by the internet, and by this tree —');
        await say(of, 'go on, then.');
        b.setPose('hug'); s.setPose('hug');
        sfx('kiss'); await wait(0.3);
        sfx('applause'); sfx('yay', { delay: 0.3 });
        ctx.guests.forEach((g) => g.setPose('idle'));
        ctx.petals.setOpacity(1.4);
        ctx.world.burst(new THREE.Vector3(AISLE_X, 1.8, -0.35), { color: 0xffc8d8, count: 70, speed: 2.2, life: 2.4, size: 0.35 });
        music('wedding', { intensity: 0.75 });
        intensity(0.8, 3);
        await camZoom(4.8, 3);
        G.achieve?.('c4_married', 'I Do', 'Said your vows under the family tree.');
        await keep('vows', 'Under the family tree');
        b.setPose('idle'); s.setPose('idle');
        intensity(0.45, 4);
        ctx.petals.setOpacity(0.4);
        // the chairs are cleared, everyone drifts over to the tables
        ctx.chairs.forEach((c) => { c.visible = false; });
        const spots = [[-0.4, 1.6], [0.2, 2.0], [-3.0, 1.6], [-2.6, 2.4], [1.6, 2.6], [2.4, 1.4], [-2.4, 5.2], [0.4, 5.4]];
        ctx.guests.forEach((g, k) => { g.setPose('idle'); g.lookAt(null); const [x, z] = spots[k]; g.walkTo(x, z).then(() => g.face(-1.4, 3.0)); });
        th.walkTo(0.6, -0.4).then(() => th.face(-1.6, 1.0));
        of.walkTo(2.2, 0.4);
        s.follow(b, 1.3);
        await camFollow(b, 10.5);
      },
    },
    {
      id: 'firstDance', label: 'The band is playing your song', at: [-1.4, 3.2], requires: ['vows'], caption: { id: 'firstDance', text: 'The first dance of the evening' },
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, gm = ctx.grandma;
        const parentIsDad = G.state.identity === 'mother';
        const parent = parentIsDad ? ctx.dad : ctx.mom;
        const [cx, cz] = ctx.danceFloor;
        s.follow(null);
        await b.walkTo(cx - 0.3, cz);
        await camTo(cx, cz, 6.2, 1.2);
        const i = await choose('Who gets the first dance?', ['Sam.', parentIsDad ? 'Dad.' : 'Mom.', 'Grandma.']);
        const who = ['sam', 'parent', 'grandma'][i];
        flags().weddingFirstDance = who;
        const p = [s, parent, gm][i];
        if (who === 'grandma') gm.setPose('idle');
        else s.walkTo(cx + 2.1, cz - 1.6).then(() => s.face(cx, cz));
        await p.walkTo(cx + 0.3, cz, { speed: who === 'grandma' ? 1.8 : undefined });
        b.faceChar(p); p.faceChar(b);
        await camTo(cx, cz, 5.2, 1.0);
        let line;
        if (who === 'sam') line = flags().danced ? 'Still can’t dance.' : 'I should warn you. I can’t dance.';
        else if (who === 'grandma') line = 'Me? Oh, you terrible flatterer. Slowly, mind. These knees are older than your father.';
        else line = parentIsDad ? 'Me? First? …I’ve been practising. Your mother says I shouldn’t have.' : 'Me? First? Oh, you’ll set me off. Come here.';
        await say(p, line);
        if (who === 'sam' && flags().danced) await say(b, 'Still don’t care.');
        b.setPose('waltz'); p.setPose('waltz');
        if (who === 'grandma') { gm.giveCane(false); }
        if (who === 'parent' && !parentIsDad) music('tinyHum', { intensity: 0.55 });
        if (who === 'grandma') music('whistle', { intensity: 0.45 });
        const pair = waltzPair(b, p, cx, cz, { r: 0.3, speed: who === 'grandma' ? 0.2 : who === 'sam' ? 0.6 : 0.35 });
        const spin = onFrame(ctx, pair.fn);
        const lines = {
          sam: ['You’re standing on my foot again.', 'Four years, and we still haven’t had a single lesson.', 'Don’t stop. Don’t you dare stop.'],
          parentDad: ['You used to stand on my feet for this. You were three. Very bossy about it.', 'You walked to me once. Three steps, across your room. I thought — that’s it. That’s the best day.', 'I was wrong. It just keeps being the best day.'],
          parentMom: ['I sang this to you every night. Every single night. Do you remember?', '♪ Little one, little one, close your eyes…', 'Don’t you dare make me cry in front of the caterers.'],
          grandma: ['He would have stepped on my feet, you know. Every time. Sixty years of sore feet.', 'You’re doing much better than he did.', 'Thank you, sweetheart. I haven’t danced in a long time.'],
        }[who === 'parent' ? (parentIsDad ? 'parentDad' : 'parentMom') : who];
        const talk = (async () => { for (const l of lines) await say(p, l, { passive: true, hold: 3.6 }); })();
        await rhythm({ label: 'Sway — press Space on the first beat of each bar', hits: 5, onlyDownbeat: true, window: 0.3 });
        await talk;
        const cap = { sam: 'Dancing with Sam, still badly', parent: parentIsDad ? 'The first dance, with Dad' : 'The first dance, with Mom', grandma: 'A slow dance with Grandma' }[who];
        G.achieve?.(...{ sam: ['c4_dance_sam', 'Still Can’t Dance', 'Gave Sam the first dance at the wedding.'], parent: ['c4_dance_parent', parentIsDad ? 'Standing on His Feet' : 'Her Song', 'Gave your parent the first dance at the wedding.'], grandma: ['c4_dance_grandma', 'One for Grandpa', 'Gave Grandma the first dance at the wedding.'] }[who]);
        await keep('firstDance', cap);
        offFrame(ctx, spin);
        b.setPose('idle'); p.setPose('idle');
        music('wedding', { intensity: 0.45 });
        if (who === 'grandma') { gm.giveCane(true); gm.walkTo(-3.2, -1.75, { speed: 1.2 }).then(() => { gm.place(-3.2, -2.12, 0); gm.setPose('sit', { h: 0.45 }); }); }
        else if (who === 'parent') p.walkTo(cx + 1.6, cz + 1.4).then(() => p.face(cx, cz));
        s.follow(b, 1.3);
        await camFollow(b, 10.5);
      },
    },
    {
      id: 'toast', label: 'Theo is tapping a glass', anchor: (ctx) => ctx.theo, offset: [0.5, 0, 0.6], requires: ['vows'], caption: 'Theo’s terrible, perfect toast',
      async run(ctx) {
        const b = ctx.me, th = ctx.theo, s = ctx.sam;
        s.follow(null);
        await b.walkTo(th.position.x + 0.9, th.position.z + 0.9); b.faceChar(th);
        s.walkTo(th.position.x + 1.5, th.position.z + 0.4).then(() => s.faceChar(th));
        th.faceChar(b);
        await camTo(th.position.x + 0.5, th.position.z + 0.5, 5.5, 1.3);
        sfx('ping'); await wait(0.35); sfx('ping'); await wait(0.35); sfx('ping');
        ctx.guests.forEach((g) => g.lookAt(th));
        await say(th, 'Hi. Hello. I’m Theo. I live next door. I have always lived next door.');
        await say(th, 'We met when we were five. This one ate a worm for a dare. I was the dare.');
        await say(th, 'I have prepared eleven pages.');
        await say(ctx.officiant, 'Two minutes, Theo.');
        const j = await choose('Theo looks at you, page one of eleven trembling in his hand.', ['Mouth “page eleven” at him.', 'Let him read all eleven pages.']);
        flags().weddingToast = j === 1 ? 'allPages' : 'pageEleven';
        if (j === 1) {
          await say(th, 'Page one. The worm.');
          await lower('He read all eleven. Page six was a diagram. By page nine, Grandma was asleep and the cousins were building a fort out of napkins.');
          G.achieve?.('c4_eleven_pages', 'All Eleven Pages', 'Let Theo read his entire wedding speech.');
        }
        await say(th, j === 1 ? 'And finally — page eleven.' : 'Right. Page eleven, then.');
        await say(th, 'Sam — you are getting someone who cries at dog-food adverts and cannot parallel park.');
        sfx('giggle', { vol: 0.5 });
        await say(th, 'And who is the best person I know. Don’t tell them I said that. They’re standing right there. Oh no.');
        await say(th, 'To the two of you. Who are braver than the rest of us.');
        await tap({ count: 3, label: 'Raise your glass', onTap: (n) => sfx('ping', { vol: 0.6 + n * 0.1 }) });
        sfx('applause', { vol: 0.8 });
        ctx.guests.forEach((g) => g.lookAt(null));
        await keep('toast', 'Theo’s terrible, perfect toast');
        s.follow(b, 1.3);
        await camFollow(b, 10.5);
      },
    },
    {
      id: 'groupPhoto', kind: 'story', label: '“Everyone! Photo! By the tree!”', at: [6.4, 1.8], requires: ['vows'], caption: 'Everyone, all at once',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, th = ctx.theo, gm = ctx.grandma;
        s.follow(null);
        ctx.tripod.visible = true;
        await camTo(5.4, 1.4, 7.5, 1.6);
        await say(th, 'Everybody! Photo! Squeeze in, squeeze in. Grandma, you’re in the middle. Those are the rules.');
        // a row in front of the arch, facing the camera
        const cx = 5.0, cz = 1.2, dx = 0.39, dz = -0.39;
        const row = [ctx.friends[0], ctx.friends[1], ctx.mom, b, gm, s, ctx.dad, ctx.friends[2], ctx.friends[3], th];
        gm.setPose('idle'); gm.place(-3.2, -1.8);
        const moves = row.map((c, k) => { const o = k - (row.length - 1) / 2; return c.walkTo(cx + o * dx, cz + o * dz, { speed: c === gm ? 3.5 : 4 }); });
        ctx.kid.walkTo(cx + 0.7, cz + 0.7, { speed: 4 });
        ctx.friends[4].walkTo(cx - 0.4 + dx * 1.5, cz - 0.4 - dz * -1.5, { speed: 4 });
        await Promise.all(moves);
        const face = () => [...row, ctx.kid, ctx.friends[4]].forEach((c) => c.face(c.position.x + 1, c.position.z + 1));
        face();
        await say(gm, 'Is it taking it? I can never tell if it’s taking it.');
        await say(th, 'Ten seconds! Nobody blink! Nobody — Rosa, stop blinking—');
        await camTo(cx + 0.3, cz + 0.3, 5.4, 1.5);
        th.setPose('jump'); await wait(0.5); th.setPose('idle'); face();
        for (let k = 0; k < 3; k++) { sfx('tick', { vol: 0.6 }); await wait(0.5); }
        ctx.friends[0].setPose('wave'); ctx.kid.setPose('jump'); ctx.friends[3].setPose('laugh');
        G.achieve?.('c4_group_photo', 'Everyone, All at Once', 'Got everyone you loved into one photograph.');
        await keep('groupPhoto', 'Everyone, all at once', { window: 60 });
        row.forEach((c) => c.setPose('idle')); ctx.kid.setPose('idle');
        await lower('Everyone you loved, in one frame. You didn’t know yet how rare that would be.');
        mood('goldenAfternoon', 30, { warmth: 0.5 });
        intensity(0.5, 3);
        // everyone wanders back
        gm.walkTo(-3.2, -1.75, { speed: 1.2 }).then(() => { gm.place(-3.2, -2.12, 0); gm.setPose('sit', { h: 0.45 }); });
        const back = [[-0.4, 1.6], [0.2, 2.0], [-3.0, 1.6], [-2.6, 2.4], [1.6, 2.6], [2.4, 1.4]];
        [ctx.mom, ctx.dad, ...ctx.friends.slice(0, 4)].forEach((c, k) => c.walkTo(...back[k]).then(() => c.face(-1.4, 3.0)));
        ctx.kid.walkTo(-1.0, 4.2).then(() => ctx.kid.setPose('dance', { speed: 6 }));
        th.walkTo(0.6, -0.4).then(() => th.face(-1.6, 1.0));
        ctx.tripod.visible = false;
        s.follow(b, 1.3);
        await camFollow(b, 10.5);
      },
    },
    {
      id: 'duskTree', kind: 'story', label: 'Steal Sam away for a minute', at: [5.6, -1.7], requires: ['groupPhoto'], caption: 'A minute alone, under our tree',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam;
        s.follow(null);
        mood('summerDusk', 8, { bloom: 0.7, warmth: 0.55 });
        music('wedding', { intensity: 0.25 });
        amb({ birds: 0.15, crickets: 0.5, crowd: 0.15 }, 6);
        await Promise.all([b.walkTo(5.05, -1.85), s.walkTo(4.6, -1.35)]);
        b.face(7, 0); s.face(7, 0.4);
        b.setPose('sitGround'); s.setPose('sitGround');
        await camTo(4.9, -1.5, 4.8, 3);
        await say(s, 'Can we hide here for a minute? Before Theo finds the microphone again.');
        await stillness({ seconds: 6, label: 'Just the two of you.' });
        await say(s, 'Was this really a stick once? It’s enormous.');
        await think('Grandpa and I planted it. It came up to my knee.');
        await say(s, 'It’ll be huge one day. Kids climbing it. Somebody falling out of it.');
        const i = await choose('', ['“Kids?”', '“One day.”']);
        if (i === 0) { s.setPose('laugh'); await say(s, 'One day. Not today. Today I’m keeping you to myself.'); s.setPose('sitGround'); }
        else await say(s, 'One day.');
        await keep('duskTree', 'A minute alone, under our tree');
        b.setPose('idle'); s.setPose('idle');
        s.follow(b, 1.3);
        await camFollow(b, 10.5);
      },
    },
    // ---- hidden: easter eggs ----
    {
      id: 'eggBall', hidden: true, label: 'Something under the hedge', at: [-7.6, -2.5], radius: 0.9,
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, follows = ctx.world.getHotspot('vows')?.done;
        if (follows) s.follow(null);
        await b.walkTo(-7.6, -2.5); b.face(-7.6, -3.2); b.setPose('crouch');
        await camTo(-7.6, -2.9, 4.4, 1.4);
        sfx('rustle');
        const ball = P.sphere(0.07, 7, 5, 0xc8d84a); holdInHand(b, ball, 'R', [0, -0.05, 0.04]);
        await lower('A tennis ball, grey with age, chewed flat on one side.');
        await lower('Biscuit’s. He must have hidden it there years ago and never come back for it.');
        await hold({ label: 'Hold it for a moment', seconds: 2.5 });
        ball.removeFromParent();
        await lower('You put it back where he left it. Some things should stay where they were put.');
        G.achieve?.('c4_biscuit_ball', 'Good Dog', 'Found Biscuit’s old ball under the hedge.');
        b.setPose('idle');
        if (follows) s.follow(b, 1.3);
        await camFollow(b, 10.5);
      },
    },
    {
      id: 'eggCake', hidden: true, label: 'The cake is unguarded', at: [-3.55, 0.4], radius: 0.8,
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom;
        await b.walkTo(-3.4, 0.6); b.face(-1.6, 0.4);
        await camTo(-2.4, 0.5, 4.6, 1.2);
        await tap({ count: 1, label: 'Just a tiny bit. From the back. Nobody will know.' });
        b.setPose('reachForward'); sfx('tap'); await wait(0.6); b.setPose('idle');
        mom.lookAt(b);
        await say(mom, 'I SAW that.', { name: 'Mom' });
        await lower('You were twenty-six years old and you had icing on your finger and your mother had seen.');
        G.achieve?.('c4_cake_thief', 'Cake Thief', 'Tasted the wedding cake before anyone else.');
        mom.lookAt(null);
        await camFollow(b, 10.5);
      },
    },
    {
      id: 'theHouse', kind: 'story', label: 'Your parents want a word', anchor: (ctx) => ctx.mom, offset: [0.6, 0, 0.6], requires: ['duskTree'], caption: 'The keys, still warm from Dad’s pocket',
      async run(ctx) {
        const b = ctx.me, s = ctx.sam, mom = ctx.mom, dad = ctx.dad;
        s.follow(null);
        await Promise.all([mom.walkTo(-4.4, -1.1), dad.walkTo(-5.4, -1.1)]);
        await b.walkTo(-4.9, -0.1); s.walkTo(-4.0, 0.2).then(() => s.faceChar(mom));
        b.face(-4.9, -1.1); mom.faceChar(b); dad.faceChar(b);
        await camTo(-4.8, -1.0, 5.8, 1.6);
        await say(mom, 'We’ve been meaning to tell you something. We weren’t going to do it today, but your father can’t keep a secret.');
        await say(dad, 'We’re selling up. Well. Not selling. Moving. A little place by the sea.');
        await say(mom, 'I want to grow tomatoes and argue with seagulls.');
        await say(dad, 'And we want you to have the house.');
        const i = await choose('', ['“We can’t take your house.”', '“Are you sure?”', '“…The house?”']);
        if (i === 0) await say(dad, 'You can. You will. Your mother’s already labelled the boxes.');
        else if (i === 1) await say(mom, 'We’ve never been surer of anything. Except you two.');
        else await say(dad, 'The house. The tree. The leaky gutter. All of it.');
        dad.setPose('reachForward');
        await wait(0.6);
        const keys = P.torus(0.05, 0.012, 4, 8, 0xd8c070); holdInHand(b, keys, 'R', [0, -0.03, 0.03], 1);
        sfx('ping', { vol: 0.5 });
        dad.setPose('idle');
        await say(dad, 'It’s too big for two old people.');
        await say(mom, 'It needs small feet running around again.');
        s.walkTo(b.position.x + 0.5, b.position.z + 0.3).then(() => s.faceChar(mom));
        flags().inheritedHouse = true;
        G.achieve?.('c4_small_feet', 'Small Feet', 'Were given the keys to the house you grew up in.');
        await keep('theHouse', 'The keys, still warm from Dad’s pocket');
        keys.parent.remove(keys);
        await lower('That night, after the last guest had gone, you sat on the porch steps of your own house.');
        music('wedding', { intensity: 0.2 });
        await fadeOut(4, '#16121a');
        await narrate(['The tree.', 'The yard.', 'The swing it didn’t have yet.', 'Everything, still to come.'], { minTime: 1.3 });
        G.ui.clearNarration();
        await wait(1.2);
      },
    },
  ],
  final: 'theHouse',
};
