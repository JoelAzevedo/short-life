// CHAPTER V — LITTLE ONES (30–40)
// The heart of it. The same nursery, the same song — and now you are the one singing.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng, child, they, them, their, They, me, fmt } from '../engine/game.js';
import { LOOKS, childLook, youLook } from '../engine/character.js';
import { narrate, lower, say, think, wait, keep, lose, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, intensity, hop, choose, askText } from '../engine/story.js';
import { stillness, tap, rhythm, balance, sequence, collect, hold, stayNear, timing, walkWith } from '../engine/minigames.js';
import { buildNursery, buildYard, buildLiving, makePlayer, person, skyDressing } from './places.js';
import { LULLABY_WORDS } from './ch1_tiny.js';

// A child's crayon drawing of the family under the tree.
export function familyDrawing() {
  return P.canvasTex(512, 384, (g, w, h) => {
    g.fillStyle = '#fbf7ee'; g.fillRect(0, 0, w, h);
    g.lineCap = 'round'; g.lineJoin = 'round';
    const wob = (x, y) => [x + Math.sin(y * 0.13) * 2, y + Math.cos(x * 0.11) * 2];
    const line = (pts, col, wdt = 6) => { g.strokeStyle = col; g.lineWidth = wdt; g.beginPath(); pts.forEach(([x, y], i) => { const [a, b] = wob(x, y); i ? g.lineTo(a, b) : g.moveTo(a, b); }); g.stroke(); };
    // grass, sun, tree
    line([[10, 330], [120, 325], [260, 335], [400, 322], [500, 330]], '#5aa846', 10);
    g.fillStyle = '#f6c63c'; g.beginPath(); g.arc(440, 70, 34, 0, 7); g.fill();
    for (let i = 0; i < 9; i++) { const a = i * 0.7; line([[440 + Math.cos(a) * 44, 70 + Math.sin(a) * 44], [440 + Math.cos(a) * 62, 70 + Math.sin(a) * 62]], '#f6c63c', 5); }
    line([[380, 330], [385, 200]], '#8a5a3a', 16);
    g.fillStyle = '#6cbf4c'; g.beginPath(); g.arc(385, 170, 70, 0, 7); g.fill();
    line([[402, 200], [402, 262]], '#e2c9a0', 3); line([[430, 200], [430, 262]], '#e2c9a0', 3); line([[396, 262], [436, 262]], '#c0392b', 6);
    // three stick figures holding hands
    const fig = (x, s, col, hair) => {
      g.strokeStyle = '#333'; g.lineWidth = 4; g.beginPath(); g.arc(x, 330 - 120 * s, 18 * s, 0, 7); g.stroke();
      line([[x - 14 * s, 335 - 125 * s], [x + 14 * s, 335 - 125 * s]], hair, 8 * s);
      line([[x, 330 - 100 * s], [x, 330 - 45 * s]], col, 7);
      line([[x, 330 - 45 * s], [x - 16 * s, 330]], '#333', 4); line([[x, 330 - 45 * s], [x + 16 * s, 330]], '#333', 4);
      line([[x - 34 * s, 330 - 70 * s], [x + 34 * s, 330 - 70 * s]], '#333', 4);
      g.fillStyle = '#333'; g.fillRect(x - 7 * s, 330 - 124 * s, 3, 3); g.fillRect(x + 5 * s, 330 - 124 * s, 3, 3);
      g.beginPath(); g.arc(x, 330 - 116 * s, 7 * s, 0.2, Math.PI - 0.2); g.stroke();
    };
    fig(90, 1.3, '#d9584a', '#6b3f2a'); fig(170, 1.35, '#3f9a8a', '#2a1e1a'); fig(240, 0.85, '#f2a3b5', '#7a4a2e');
    g.fillStyle = '#d9584a'; g.font = 'bold 40px "Comic Sans MS", "Chalkboard SE", cursive';
    g.fillText(fmt('{me}'), 40, 60); g.fillText('ME', 210, 110);
    g.fillStyle = '#e04a7a'; g.beginPath(); const hx = 300, hy = 70; g.moveTo(hx, hy + 10); g.bezierCurveTo(hx - 30, hy - 15, hx - 10, hy - 35, hx, hy - 15); g.bezierCurveTo(hx + 10, hy - 35, hx + 30, hy - 15, hx, hy + 10); g.fill();
  });
}

// The work moments: always there, always blinking, never worth it.
function workMoment({ id, label, at, emails = 12, cost = 60, lines }) {
  return {
    id, label, at, kind: 'work', once: false, radius: 1.0,
    async run(ctx, h) {
      const n = (h.uses = (h.uses || 0) + 1);
      sfx('ping');
      await ctx.me.walkTo(at[0] + 0.5, at[1] + 0.4);
      ctx.me.face(at[0], at[1]);
      ctx.me.setPose(ctx.def.workPose ?? 'idle');
      const hl = lines?.[(n - 1) % lines.length] ?? 'Just a few emails.';
      await think(hl);
      for (let i = 0; i < 6; i++) { sfx('tap', { vol: 0.5 }); await wait(0.12); }
      G.state.stats.emails += emails;
      ctx.passTime(cost);
      // something passes while you aren't looking
      const avail = ctx.world.hotspots.filter((x) => x.enabled && !x.done && (x.m?.kind ?? 'little') === 'little');
      if (avail.length) {
        const lost = avail[Math.floor(Math.random() * avail.length)];
        lost.setEnabled(false); lost.done = true;
        if (lost.m?.caption) lose(lost.m.caption.id ?? lost.m.id, typeof lost.m.caption === 'string' ? lost.m.caption : lost.m.caption.text);
        sfx('lost', { vol: 0.5 });
      }
      await lower(ctx.def.workAfter?.[(n - 1) % ctx.def.workAfter.length] ?? 'When you looked up, the light had moved across the floor.');
      ctx.me.setPose('idle');
      h.label = `${label} (${Math.max(3, emails + n * 5)} unread)`;
    },
  };
}

// ---------------------------------------------------------------------
// V.1 — Tiny again
// ---------------------------------------------------------------------
export const newborn = {
  id: 'ch5-newborn', chapter: 5,
  card: { num: 'V', title: 'Little Ones', ages: 'thirty to forty', quote: 'And then, one spring night, the house was full again.' },
  mood: 'nurseryNight', music: 'little', intensity: 0.3,
  ambience: { room: 0.35, crickets: 0.25 },
  zoom: 8, surface: 'wood',
  bounds: { minX: -3.75, maxX: 3.75, minZ: -3.2, maxZ: 3.3 },
  ages: [31, 31], clock: { seconds: 330 },
  timeUpText: 'The first weeks went by in one long, sleepless, golden blur.',
  workAfter: ['When you looked up, they had already fallen asleep — without you.', 'Sam had done the night feed alone again.'],
  hint: 'Blue lights are work. They will always be there.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildNursery(ctx, { era: 'present', night: true });
    ctx.r.mobile.visible = false;
    ctx.me = makePlayer(31, 0.6, 1.4, Math.PI);
    ctx.sam = person(LOOKS.sam, 31, 'Sam', -0.4, 1.2, Math.PI * 0.9);
    ctx.baby = person(childLook(0.05), 0.05, 'Baby', -0.4, 1.2);
    ctx.sam.pickUp(ctx.baby); ctx.sam.setPose('carry');
    const desk = P.table({ w: 1.0, d: 0.6, color: C.woodLight }); W.add(desk, 3.3, 0.6, { ry: -Math.PI / 2, collide: { w: 1.0, d: 0.6 } });
    const lap = P.laptop(); W.add(lap, 3.3, 0.6, { y: 0.75, ry: -Math.PI / 2 });
    W.add(P.cardboardBox(0.6), 2.9, 2.6, { collide: 0.4 }); ctx.atticBox = [2.9, 2.6];
    W.add(P.cardboardBox(0.5), 3.4, 2.0, { collide: 0.35 });
    skyDressing(ctx, { clouds: 3, y: -6, spread: 14 });
  },
  async intro(ctx) {
    await narrate(['Your parents moved to a little house by the sea.', 'The big house was yours now — the creaky stairs, the garden, the tree.', 'And the small pink room at the top of the stairs.'], { minTime: 1.2 });
    G.ui.clearNarration();
    const k = await choose('One spring night, someone new arrived. You had…', ['a daughter', 'a son']);
    G.state.childKind = k === 0 ? 'daughter' : 'son';
    const def = k === 0 ? 'Lily' : 'Leo';
    G.state.childName = await askText(`What did you name ${k === 0 ? 'her' : 'him'}?`, def);
    ctx.baby.name = child();
    await fadeIn(3);
    await lower('{child}. The word felt strange for a day, and then it was the only word.');
    await say(ctx.sam, 'Look at {them}. Look at what we made.');
  },
  moments: [
    {
      id: 'holdNewborn', kind: 'story', label: 'Hold {child}', anchor: (ctx) => ctx.sam, offset: [0.4, 0, 0.6], caption: 'So small',
      async run(ctx) {
        const me = ctx.me, sam = ctx.sam, baby = ctx.baby;
        await me.walkToChar(sam, 0.7);
        sam.faceChar(me);
        await say(sam, 'Here. Support the head. You’ve got {them}.');
        sam.putDown(me.position.x, me.position.z); me.pickUp(baby); me.setPose('carry');
        sfx('coo', { pitch: 1.3 });
        await camTo(me.position.x, me.position.z, 4.4, 2);
        intensity(0.6, 3);
        await hold({ label: 'Hold {them} close', seconds: 5 });
        await lower('So small. Smaller than you remembered anyone could be.');
        await lower('Once, you were this small. Someone held you exactly like this.');
        await keep('holdNewborn', 'So small');
        intensity(0.35, 4);
        sam.walkTo(-1.4, 2.7).then(() => { sam.setPose('sitGround'); sam.faceNow(0.5, 0); });
        await camFollow(me, 8);
      },
    },
    {
      id: 'mobile', label: 'Open the box from the attic', at: [2.6, 2.1], requires: ['holdNewborn'], caption: 'The same five stars',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(2.5, 2.0); me.face(2.9, 2.6);
        me.setPose('crouch');
        await lower('A box from the attic, labelled in your mother’s handwriting: NURSERY.');
        await wait(0.6);
        await lower('Inside, wrapped in tissue paper: five little stars on strings.');
        me.setPose('carry');
        await me.walkTo(-2.0, -1.7); me.face(-2.5, -2.55);
        await camTo(-2.5, -2.2, 5, 1.5);
        await sequence({ label: 'Hang the mobile', keys: ['up', 'left', 'right', 'up'] });
        const mob = ctx.r.mobile; mob.visible = true; mob.position.set(-2.5, 0.55, -2.55); mob.userData.speed = 0.4;
        sfx('sparkle');
        await stillness({ seconds: 4, label: 'Watch them turn.' });
        await lower('The same five stars. Going round and round, for somebody new.');
        await keep('mobile', 'The same five stars');
        await camFollow(me, 8);
      },
    },
    {
      id: 'finger', label: 'Let {child} hold your finger', at: [0.4, -0.6], requires: ['holdNewborn'], caption: '{Their} whole hand around one finger',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(0.4, -0.5);
        me.setPose('sit', { h: 0.0 }); me.setPose('sitGround');
        await camTo(0.4, -0.4, 4.0, 1.5);
        await hold({ label: 'Offer one finger', seconds: 3.5 });
        sfx('coo', { pitch: 1.4 });
        await lower('{Their} whole hand closed around one of your fingers, and held on.');
        await lower('As if {they} already knew you. As if {they} had been waiting.');
        await keep('finger', '{Their} whole hand around one finger');
        me.setPose('carry');
        await camFollow(me, 8);
      },
    },
    {
      id: 'blanket', label: 'Cover Sam with a blanket', anchor: (ctx) => ctx.sam, offset: [0.5, 0, 0.5], requires: ['holdNewborn'], caption: 'Both of you, so tired',
      async run(ctx) {
        const me = ctx.me, sam = ctx.sam;
        await me.walkTo(sam.position.x + 0.6, sam.position.z + 0.6); me.faceChar(sam);
        const bl = P.box(0.7, 0.05, 0.6, 0xb8d8c8); ctx.world.add(bl, sam.position.x, sam.position.z + 0.15, { y: 0.28, ry: 0.3 });
        sfx('rustle');
        await stillness({ seconds: 4, label: 'Let them sleep.' });
        await lower('You had never been so tired. You had never been so happy. It turned out those could be the same thing.');
        await keep('blanket', 'Both of you, so tired');
      },
    },
    {
      id: 'watchSleep', label: 'Watch {them} breathe', at: [-1.9, -1.5], requires: ['nightRocking'], caption: 'Watching {them} breathe',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(-1.9, -1.55); me.face(-2.5, -2.55);
        await camTo(-2.4, -2.3, 4.2, 2);
        await stillness({ seconds: 8, label: 'Just watch.' });
        await lower('In. Out. In. Out. You could have watched for a hundred years.');
        await keep('watchSleep', 'Watching {them} breathe');
        await camFollow(me, 8);
      },
    },
    workMoment({ id: 'laptop', label: 'Answer emails', at: [3.3, 0.6], emails: 14, cost: 70, lines: ['Just ten minutes. Just the urgent ones.', 'They said it couldn’t wait.', 'One more. Then bed.'] }),
    {
      id: 'nightRocking', kind: 'story', label: 'It’s 3 a.m. — {child} is crying', at: [2.0, -1.5], requires: ['holdNewborn'], caption: 'Your mother’s song, now yours',
      async run(ctx) {
        const me = ctx.me, sam = ctx.sam, baby = ctx.baby;
        sfx('cry');
        mood('nurseryNight', 3, { saturation: 0.85, vignette: 0.65 });
        if (!me.carried) { await me.walkToChar(sam, 0.7); sam.putDown(me.position.x, me.position.z); me.pickUp(baby); }
        me.setPose('carry');
        sfx('cry', { delay: 1.5 });
        await me.walkTo(2.2, -1.6);
        me.place(2.4, -2.15, -0.7); me.setPose('rock');
        await camTo(2.3, -1.8, 4.6, 2);
        await think('What did Mom do? What did she sing?');
        await wait(0.6);
        await lower('And then, from somewhere very deep, the song came back to you.');
        music('littleHum', { intensity: 0.5 });
        const chair = ctx.r.chair.userData.rock;
        let t = 0; const rocker = (dt) => { t += dt; const s = Math.sin(t * 2.0) * 0.09; chair.rotation.x = s; me.lean = s * 0.8; };
        G.updaters.add(rocker);
        await wait(1.2);
        const singing = (async () => { for (const l of LULLABY_WORDS) await say(me, l, { passive: true, hold: 3.4, name: 'You' }); })();
        await rhythm({ label: 'Rock with the song — press on the first beat', hits: 4, onlyDownbeat: true, window: 0.3 });
        await singing;
        baby.setPose('sleep');
        await keep('nightRocking', 'Your mother’s song, now yours');
        G.updaters.delete(rocker); chair.rotation.x = 0; me.lean = 0;
        await lower('You phoned your mother the next morning, just to tell her. She cried a little. So did you.');
        music('little', { intensity: 0.4 });
        mood('nurseryNight', 3);
        me.setPose('idle'); me.position.set(2.0, 0, -1.5);
        await me.walkTo(-1.9, -1.9);
        me.putDown(-2.5, -2.55); baby.setPose('sleep'); baby.extraY = 0.5;
        await camFollow(me, 8);
      },
    },
    {
      id: 'dawn', kind: 'story', label: 'Look out of the window', at: [1.2, -2.6], requires: ['nightRocking'], caption: 'The first sunrise with {child}',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(1.2, -2.5); me.face(1.2, -4);
        mood('dawnNursery', 8);
        amb({ birds: 0.6, room: 0.3 }, 6);
        await camZoom(6.5, 4);
        await stillness({ seconds: 5, label: 'The sun is coming up.' });
        await lower('You hadn’t slept at all. You had never felt less tired.');
        await keep('dawn', 'The first sunrise with {child}');
        await lower('Everyone tells you the days are long and the years are short. Nobody tells you how fast they mean.');
        await fadeOut(3, '#fff6ee');
      },
    },
  ],
  final: 'dawn',
};

// ---------------------------------------------------------------------
// V.2 — First steps (the mirror)
// ---------------------------------------------------------------------
export const firstSteps = {
  id: 'ch5-steps', chapter: 5,
  mood: 'homeMorning', music: 'little', intensity: 0.45,
  ambience: { room: 0.35, birds: 0.35, fire: 0.25 },
  zoom: 8.5, surface: 'wood',
  ages: [32, 33], clock: { seconds: 330 },
  timeUpText: 'One morning you noticed {they} didn’t crawl anymore. You couldn’t remember the last time {they} had.',
  workAfter: ['By the time you hung up, {they} had learned a new word. Sam heard it first.', 'The call took an hour. It felt like five minutes. It was {their} whole morning.'],
  hint: 'Spend the morning however you like.',
  build(ctx) {
    ctx.r = buildLiving(ctx, { night: false, fire: true, toys: true });
    ctx.me = makePlayer(32, 1.6, 1.4, -2.4);
    ctx.sam = person(LOOKS.sam, 32, 'Sam', -1.5, 2.2, 2.5); ctx.sam.setPose('sitGround');
    ctx.kid = person(childLook(1.1), 1.1, child(), -0.6, 1.8, 0.3); ctx.kid.setPose('sitGround');
    const phoneO = P.phone(); ctx.world.add(phoneO, 0.6, -1.2, { y: 0.42 }); ctx.phoneObj = phoneO;
    ctx.bubbleField = null;
  },
  async intro(ctx) {
    await fadeIn(3);
    await lower('{child} could crawl now. Fast. Everything in the house had to move up a shelf.');
    ctx.kid.walkSpeed = 1.0;
    ctx.kid.walkTo(0.6, 0.6).then(() => ctx.kid.setPose('sitGround'));
  },
  moments: [
    {
      id: 'peekaboo', label: 'Play peekaboo', anchor: (ctx) => ctx.kid, offset: [0.5, 0, 0.5], caption: 'Peekaboo, four hundred times',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid;
        await me.walkToChar(kid, 0.9); kid.faceChar(me);
        me.setPose('kneel');
        await camTo(kid.position.x, kid.position.z, 4.8, 1.5);
        await rhythm({
          label: 'Hide… and appear! (press with the pulse)', hits: 5, period: 1.3, window: 0.3,
          onPulse: () => me.setPose('cry'),
          onHit: (n, q) => { if (q > 0) { me.setPose('armsOpen'); sfx('giggle', { pitch: 1.3 }); hop(kid, 1, 0.06); } },
        });
        me.setPose('kneel');
        await lower('Every single time, {they} were astonished that you came back.');
        await keep('peekaboo', 'Peekaboo, four hundred times');
        me.setPose('idle');
        await camFollow(me, 8.5);
      },
    },
    {
      id: 'tower', label: 'Build a tower together', at: [-1.2, 1.1], caption: '{They} knocked it down. You built it again.',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, W = ctx.world;
        await me.walkTo(-0.7, 0.9); me.face(-1.2, 1.4); me.setPose('sitGround');
        kid.walkTo(-1.4, 0.7).then(() => { kid.setPose('sitGround'); kid.faceChar(me); });
        await camTo(-1.1, 1.2, 4.6, 1.5);
        const blocks = [C.red, C.yellow, C.blue, C.green].map((c, i) => { const b = P.box(0.24, 0.24, 0.24, c); W.add(b, -1.0 + i * 0.3, 1.8, {}); return b; });
        await sequence({ label: 'Stack them up', keys: ['up', 'up', 'up', 'up'], onStep: (i) => { const bl = blocks[i]; const from = bl.position.clone(); const to = new THREE.Vector3(-1.15, i * 0.24, 1.35); tween(0.45, (t) => { bl.position.lerpVectors(from, to, t); bl.position.y += Math.sin(t * Math.PI) * 0.3; }); sfx('tap'); } });
        await wait(0.6);
        kid.setPose('reachForward'); sfx('thud');
        blocks.forEach((bl, i) => { const from = bl.position.clone(); const to = new THREE.Vector3(-1.15 + (i - 1.5) * 0.45, 0, 1.6 + i * 0.15); tween(0.6, (t) => { bl.position.lerpVectors(from, to, t); bl.rotation.x = t * 2; }); });
        sfx('giggle', { pitch: 1.3, delay: 0.3 });
        await wait(0.8); kid.setPose('sitGround');
        await lower('Your first tower fell like this, a long time ago. You laughed then too.');
        await keep('tower', '{They} knocked it down. You built it again.');
        me.setPose('idle');
        await camFollow(me, 8.5);
      },
    },
    {
      id: 'bubbles', label: 'Blow bubbles', at: [2.2, 0.2], caption: '{Their} first word was you',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, W = ctx.world;
        await me.walkTo(2.0, 0.4); me.face(0.6, 0.6);
        await camTo(1.3, 0.6, 5.2, 1.5);
        const f = W.particlesOf('bubbles', { center: new THREE.Vector3(1.0, 0, 0.6), area: { w: 3, h: 2.5, d: 3 }, count: 1, opacity: 0 });
        await hold({ label: 'Hold Space to blow', seconds: 3, onProgress: (p) => { if (f.n < 30 && p > 0) { /* grow */ } f.setOpacity(p * 1.6); if (Math.random() < 0.05) sfx('bloop', { vol: 0.4 }); } });
        W.removeParticles(f);
        const f2 = W.particlesOf('bubbles', { center: new THREE.Vector3(1.0, 0, 0.6), area: { w: 3, h: 2.5, d: 3 }, count: 24, opacity: 1 });
        kid.setPose('reach'); kid.lookAt(me);
        await tap({ count: 5, label: 'Pop them for {them}', onTap: () => { sfx('pop'); sfx('giggle', { pitch: 1.3, vol: 0.6 }); } });
        kid.setPose('sitGround');
        await wait(0.4);
        sfx('coo', { pitch: 1.3 });
        await say(kid, '{me}!', { name: '{child}' });
        await say(ctx.sam, 'Did — did {they} just —', { passive: true, hold: 1.6 });
        await lower('{Their} first word. It was you.');
        await keep('bubbles', '{Their} first word was you');
        f2.setOpacity(0);
        await camFollow(me, 8.5);
      },
    },
    {
      id: 'picturebook', label: 'Read a picture book', at: [0.6, -2.1], caption: '“Moo,” said the cow. Every night.',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid;
        await me.walkTo(0.6, -2.05); me.faceNow(0.6, 0); me.setPose('read', { h: 0.45 }); me.position.z = -2.35;
        await kid.walkTo(1.1, -1.8); kid.setPose('sitGround'); kid.faceChar(me);
        await camTo(0.8, -2.0, 4.6, 1.5);
        await say(me, 'And what does the cow say?');
        const i = await choose('What does the cow say?', ['“Moooo.”', '“Woof!”', '“Quack?”']);
        if (i === 0) { sfx('giggle', { pitch: 1.3 }); await say(kid, 'Mooo!', { name: '{child}' }); }
        else { sfx('giggle', { pitch: 1.3 }); await say(kid, 'Nooo! Mooo!', { name: '{child}' }); await lower('{They} corrected you, very seriously, every night for a year.'); }
        await stillness({ seconds: 4, label: 'Turn the pages slowly.' });
        await keep('picturebook', '“Moo,” said the cow. Every night.');
        me.setPose('idle'); me.position.z = -2.05;
        await camFollow(me, 8.5);
      },
    },
    workMoment({ id: 'phone', label: 'Answer the work call', at: [0.6, -1.2], emails: 6, cost: 80, lines: ['It’s the office. It’s probably important.', 'They keep calling.', 'Five minutes, I promise.'] }),
    {
      id: 'firstSteps', kind: 'story', label: 'Kneel down and open your arms', at: [2.6, 1.6], caption: 'Three steps. You cried.',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, sam = ctx.sam;
        await me.walkTo(2.6, 1.6);
        kid.place(-0.9, 1.2); kid.setPose('sitGround');
        me.faceChar(kid); me.setPose('kneelOpen');
        sam.setPose('idle'); sam.walkTo(-1.6, 0.6).then(() => sam.faceChar(kid));
        await camTo(0.8, 1.4, 6.0, 1.5);
        await say(me, 'Come on, {child}. Come here. You can do it.');
        kid.setAge(1.35); kid.setPose('stand'); kid.faceChar(me);
        await say(sam, 'Oh. Oh, look. Look at {them}.', { passive: true, hold: 2 });
        await balance({ label: 'Steady, steady — ← →', seconds: 3.5, difficulty: 0.8, onUpdate: (x) => { kid.tilt = -x * 0.3; } });
        kid.tilt = 0;
        let wt = 0; const wob = (dt) => { wt += dt; kid.tilt = Math.sin(wt * 7) * 0.12; };
        G.updaters.add(wob);
        kid.walkSpeed = 0.6;
        await kid.walkTo(me.position.x - 0.55, me.position.z - 0.1);
        G.updaters.delete(wob); kid.tilt = 0;
        me.setPose('carryHigh'); me.pickUp(kid);
        sfx('giggle', { pitch: 1.3 }); sfx('yay', { delay: 0.2, pitch: 1.3 });
        hop(me, 2, 0.12);
        await camTo(me.position.x, me.position.z, 4.8, 1.2);
        await say(sam, 'Three steps! Did you count?');
        me.setPose('carry');
        await think('My mother cried, when I did this. Now I understand.');
        await keep('firstSteps', 'Three steps. You cried.');
        await lower('After that, {they} never stopped walking. Away from you, mostly. That was the point. That was the hard part.');
        await fadeOut(2.5, '#fff6ee');
      },
    },
  ],
  final: 'firstSteps',
};

// ---------------------------------------------------------------------
// V.3 — The swing on the tree
// ---------------------------------------------------------------------
export const backyard = {
  id: 'ch5-summer', chapter: 5,
  mood: 'summerDay', music: 'play', intensity: 0.45,
  ambience: { birds: 0.8, wind: 0.2 },
  zoom: 11, surface: 'grass',
  ages: [36, 37], clock: { seconds: 400 },
  timeUpText: 'Somewhere in the middle of that summer, {they} stopped asking you to watch.',
  workAfter: ['The sun had moved all the way across the yard.', '{They} had come to show you something. You said “in a minute.” {They} didn’t come back.'],
  hint: 'A whole Saturday. Spend it well.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildYard(ctx, { season: 'summer', treeStage: 2, swing: true, sandbox: true });
    W.bounds = { minX: -12, maxX: 12, minZ: -4, maxZ: 7.5 };
    ctx.me = makePlayer(36, -4.6, 0.8, 0.5);
    ctx.sam = person(LOOKS.sam, 36, 'Sam', -3.0, -2.05, 0); ctx.sam.setPose('sit', { h: 0.45 });
    ctx.kid = person(childLook(6), 6, child(), 2.2, 0.6, 0.5);
    ctx.kid.walkSpeed = 2.6;
    const ph = P.phone(); W.add(ph, -3.6, -2.05, { y: 0.47 }); ctx.phoneAt = [-3.6, -2.05];
    W.butterflies(3, { x: 0, z: 2, r: 6 }, 7);
    W.birds(5, 3);
    // a child's bicycle leaning on the fence
    ctx.bike = P.bicycle(C.teal, 0.8); W.add(ctx.bike, 7, 6.4);
    skyDressing(ctx, { clouds: 7, y: -4, spread: 24 });
  },
  async intro(ctx) {
    await fadeIn(3);
    await lower('The tree your grandfather planted with you was big enough for a swing now.');
    await say(ctx.kid, '{me}! {me}! Watch me! Are you watching?', { name: '{child}' });
  },
  moments: [
    {
      id: 'swing', kind: 'story', label: 'Push the swing', at: [5.4, -1.2], caption: '“Higher! Higher!”',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, tree = ctx.r.tree;
        const sw = tree.userData.swing; const len = tree.userData.swingLen;
        const pivot = new THREE.Vector3(); sw.getWorldPosition(pivot);
        await kid.walkTo(pivot.x, pivot.z + 0.05);
        kid.setPose('swing', { h: 0.0 }); kid.faceNow(pivot.x, pivot.z + 3);
        await me.walkTo(pivot.x, pivot.z - 1.0); me.faceNow(pivot.x, pivot.z + 2);
        await camTo(pivot.x, pivot.z, 6.5, 1.5);
        let amp = 0.15, t = 0;
        const swinger = (dt) => {
          t += dt; const a = Math.sin(t * Math.PI / 1.2) * amp; sw.rotation.x = a;
          const seatY = pivot.y - Math.cos(a) * len, seatZ = pivot.z + Math.sin(a) * len;
          kid.position.set(pivot.x, 0, seatZ); kid.extraY = seatY + 0.03; kid.lean = -a * 0.5;
          me.setPose('push', { phase: Math.max(0, -Math.sin(t * Math.PI / 1.2)) });
        };
        G.updaters.add(swinger);
        await rhythm({ label: 'Push when the swing comes back to you', hits: 6, period: 2.4, window: 0.35, onHit: (n, q) => { if (q > 0) { amp = Math.min(0.75, amp + 0.1); sfx('giggle', { pitch: 1.1 }); if (n === 2 || n === 4) say(kid, n === 2 ? 'Higher!' : 'HIGHER!', { passive: true, hold: 1.2, name: '{child}' }); } } });
        await say(kid, 'I’m flying! {me}, I can touch the leaves!', { name: '{child}' });
        await keep('swing', '“Higher! Higher!”');
        await tween(2.5, (k) => { amp = 0.75 * (1 - k); });
        G.updaters.delete(swinger); sw.rotation.x = 0; kid.extraY = 0; kid.lean = 0;
        kid.setPose('idle'); kid.place(pivot.x + 0.6, pivot.z + 0.8);
        me.setPose('idle');
        await camFollow(me, 11);
      },
    },
    {
      id: 'bike', label: 'Teach {them} to ride a bike', at: [6.4, 5.6], caption: 'You let go. {They} didn’t notice.',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, W = ctx.world;
        await kid.walkTo(6.6, 5.4);
        await me.walkTo(6.2, 5.0);
        W.remove(ctx.bike);
        const bk = P.bicycle(C.teal, 0.8); kid.root.add(bk); bk.position.set(0, 0, 0); bk.rotation.y = -Math.PI / 2; bk.scale.setScalar(0.8 / kid.root.scale.x);
        kid.setPose('bike', { h: 0.55 });
        await say(kid, 'Don’t let go. Promise you won’t let go.', { name: '{child}' });
        await camFollow(me, 8);
        kid.walkSpeed = 1.6;
        const path = [[-2, 5.6], [-9, 5.6]];
        const riding = kid.walkTo(path[0][0], path[0][1]);
        await stayNear({ target: kid, dist: 1.4, seconds: 6, label: 'Run alongside. Hold on.' });
        const c = await choose('{They} are wobbling less now…', ['Let go', 'Hold on a little longer']);
        if (c === 0) {
          kid.walkSpeed = 3.2; kid.walkTo(-10, 5.6);
          await lower('You let go. {They} didn’t even notice. {They} just kept going, and going.');
          await keep('bike', 'You let go. {They} didn’t notice.');
        } else {
          await riding; kid.walkSpeed = 3.2; kid.walkTo(-10, 5.6);
          await lower('You held on a few more metres. Then {they} pulled ahead on {their} own, and you were just holding air.');
          await keep('bike', 'You held on a little longer');
        }
        await wait(1.5);
        kid.root.remove(bk); kid.setPose('idle'); kid.walkSpeed = 2.6;
        W.add(ctx.bike, 7, 6.4);
        kid.place(-8, 4.8);
        await camFollow(me, 11);
      },
    },
    {
      id: 'puddles', label: 'Jump in the puddles after the rain', at: [-1.0, 4.0], caption: 'Soaked to the knees, both of you',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, W = ctx.world;
        mood('rainyGrey', 2); const rain = W.particlesOf('rain', { area: { w: 26, h: 12, d: 26 } }); amb({ rain: 0.8, birds: 0.1 }, 1.5);
        await lower('A summer shower, out of nowhere. Then — just as fast — sun.');
        await wait(2.5);
        W.removeParticles(rain); mood('summerDay', 3); amb({ birds: 0.8, wind: 0.2 }, 3);
        const items = [[-2.5, 3.2], [0.4, 4.6], [-0.6, 2.2], [1.6, 3.0], [-2.0, 5.2]].map(([x, z]) => { const d = P.disc(0.45, 0x8fb4d0, 10, 0.02); d.material = P.mat(0x9cc4e0, { roughness: 0.2, transparent: true, opacity: 0.85 }); W.add(d, x, z); return { obj: d, x, z }; });
        kid.follow(me, 1.0);
        await camFollow(me, 9);
        await collect({ label: 'Splash!', items, radius: 0.5, onCollect: (it) => { sfx('splash'); W.burst(new THREE.Vector3(it.x, 0.2, it.z), { color: 0xcfe8ff, count: 25, speed: 1.5, size: 0.18 }); sfx('giggle', { pitch: 1.1, delay: 0.3 }); } });
        kid.follow(null);
        await lower('Sam just shook their head from the porch. Then came down and jumped in too.');
        await keep('puddles', 'Soaked to the knees, both of you');
        items.forEach((it) => W.remove(it.obj));
      },
    },
    {
      id: 'dandelions', label: 'Blow dandelions', at: [9.0, 1.0], caption: 'You both wished for the same thing',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, W = ctx.world;
        await me.walkTo(8.6, 1.2); await kid.walkTo(9.4, 1.4); kid.faceChar(me); me.faceChar(kid);
        me.setPose('sitGround'); kid.setPose('sitGround');
        await camTo(9, 1.3, 5, 1.5);
        await say(kid, 'You have to make a wish. But you can’t say it, or it won’t come true.', { name: '{child}' });
        await hold({ label: 'Hold Space to blow', seconds: 2.5 });
        sfx('blow');
        W.burst(new THREE.Vector3(9, 0.6, 1.3), { color: 0xffffff, count: 60, speed: 1.2, life: 3.5, size: 0.14 });
        await wait(1.5);
        await say(kid, 'What did you wish for?', { name: '{child}' });
        await say(me, 'I can’t tell you. Or it won’t come true.');
        await lower('You wished that this would last. You suspect {they} wished for a puppy.');
        await keep('dandelions', 'You both wished for the same thing');
        me.setPose('idle'); kid.setPose('idle');
        await camFollow(me, 11);
      },
    },
    {
      id: 'drawing', label: '{child} has something for you', anchor: (ctx) => ctx.kid, offset: [0.4, 0, 0.4], requires: ['swing'], caption: 'It’s you. And me. And the tree.',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, W = ctx.world;
        await me.walkToChar(kid, 0.9); kid.faceChar(me);
        await say(kid, 'Close your eyes. Okay, open them!', { name: '{child}' });
        const tex = familyDrawing();
        const pap = P.drawingPaper(tex); W.add(pap, kid.position.x, kid.position.z, { y: 1.1 });
        pap.lookAt(G.camera.position); pap.scale.setScalar(1.6);
        await camTo(kid.position.x, kid.position.z, 4, 1.5);
        await say(kid, 'That’s you. And that’s Sam. And that’s me. And that’s the tree. And the swing.', { name: '{child}' });
        await say(me, 'It’s the most beautiful thing I’ve ever seen.');
        await say(kid, 'I know.', { name: '{child}' });
        await keep('drawing', 'It’s you. And me. And the tree.');
        G.state.flags.drawing = true;
        await lower('You put it on the fridge. Later, in a frame. Much later, you would find it again.');
        W.remove(pap);
        await camFollow(me, 11);
      },
    },
    {
      id: 'lemonade', label: '{child}’s lemonade stand', at: [1.0, 6.0], requires: ['swing'], caption: 'Ten cups. You drank every one.',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, W = ctx.world;
        const st = P.lemonadeStand(); W.add(st, 1.0, 6.4, { collide: { w: 1.5, d: 0.7 } });
        await kid.walkTo(1.0, 7.0); kid.faceNow(1.0, 4);
        await me.walkTo(1.0, 5.3); me.faceNow(1.0, 7);
        await camTo(1.0, 6.0, 5.5, 1.5);
        await say(kid, 'Lemonade! Fifty cents! It’s very sour!', { name: '{child}' });
        await tap({ count: 10, label: 'Buy a cup. And another. And another.', onTap: (n) => { sfx('tap'); if (n % 3 === 0) sfx('giggle', { pitch: 1.2 }); } });
        await say(kid, 'You’re my best customer.', { name: '{child}' });
        await lower('Your grandfather once bought ten cups from you, at a sticky table on this same street.');
        await keep('lemonade', 'Ten cups. You drank every one.');
        await camFollow(me, 11);
      },
    },
    {
      id: 'boss', kind: 'work', label: 'Your phone is ringing (the boss)', at: [-3.6, -1.6], radius: 1.0,
      async run(ctx) {
        const me = ctx.me;
        sfx('phone');
        await me.walkTo(-3.6, -1.5);
        await say(null, 'Hi — sorry to call on a Saturday. Any chance you could come in? Just for a few hours.', { name: 'Your boss' });
        const c = await choose('Just for a few hours…', ['“Sure. I’ll be there.”', '“Not today. It’s Saturday.”']);
        if (c === 0) {
          G.state.stats.emails += 25; G.state.stats.workCalls++;
          await fadeOut(1.2);
          ctx.passTime(140);
          const avail = ctx.world.hotspots.filter((x) => x.enabled && !x.done && (x.m?.kind ?? 'little') === 'little');
          for (const h of avail.slice(0, 2)) { h.setEnabled(false); h.done = true; if (h.m?.caption) lose(h.m.id, typeof h.m.caption === 'string' ? h.m.caption : h.m.caption.text); }
          mood('summerDusk', 0.1);
          await fadeIn(1.5);
          await lower('You came home after dark. The swing was still moving, just a little, in the wind.');
          mood('summerDay', 6);
        } else {
          G.state.flags.saidNo = true;
          await say(me, 'Not today. It’s Saturday.');
          await lower('You turned the phone off and put it in a drawer. Nothing terrible happened. Nothing terrible ever did.');
        }
      },
    },
    {
      id: 'picnic', kind: 'story', label: 'Dinner under the tree', at: [2.6, 0.2], requires: ['swing'], caption: 'Dinner under the tree',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid, sam = ctx.sam, W = ctx.world;
        mood('summerDusk', 6); music('little', { intensity: 0.5 }); amb({ crickets: 0.5, birds: 0.2 }, 6);
        W.add(P.picnicBlanket(C.blue), 2.4, 0.8);
        sam.setPose('idle');
        await Promise.all([me.walkTo(1.8, 0.6), kid.walkTo(2.6, 1.3), sam.walkTo(3.0, 0.4)]);
        me.setPose('sitGround'); kid.setPose('lieBack'); sam.setPose('sitGround');
        me.face(2.6, 1.3); sam.face(2.6, 1.3);
        await camTo(2.5, 0.8, 5.5, 2);
        await wait(1);
        kid.setPose('sleep');
        await say(sam, 'Do you think {they}’ll remember this? Any of it?', { name: 'Sam' });
        await say(me, 'No. Probably not.');
        await say(me, 'But we will.');
        await stillness({ seconds: 6, label: 'Stay a little longer.' });
        await keep('picnic', 'Dinner under the tree');
        await fadeOut(3);
      },
    },
  ],
  final: 'picnic',
};

// ---------------------------------------------------------------------
// V.4 — Will you always be here?
// ---------------------------------------------------------------------
export const bedtime = {
  id: 'ch5-bedtime', chapter: 5,
  mood: 'nurseryNight', music: 'bedtime', intensity: 0.35,
  ambience: { room: 0.35, crickets: 0.3 },
  zoom: 7.5, surface: 'wood',
  bounds: { minX: -3.75, maxX: 3.75, minZ: -3.2, maxZ: 3.3 },
  ages: [39, 40], clock: { seconds: 300 },
  timeUpText: 'Bedtime got later and later. One night {they} said {they} could read on {their} own now.',
  workAfter: ['The presentation was finished. {They} were already asleep.', '{They} called for you once. You said “in a minute.”'],
  hint: 'The last bedtime story you remember reading.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildNursery(ctx, { era: 'kid', night: true });
    ctx.me = makePlayer(39, 0.4, 2.2, Math.PI);
    ctx.kid = person(childLook(8.5), 8.5, child(), -2.9, -1.9, 0);
    ctx.kid.setPose('sit', { h: 0.55 }); ctx.kid.place(-2.9, -2.2, 0);
    W.add(P.teddy(0xd8b07e), 1.6, 1.6); ctx.teddyAt = [1.6, 1.6];
    // glow-in-the-dark stars waiting to be stuck up
    ctx.starPack = P.box(0.3, 0.05, 0.2, C.yellow); W.add(ctx.starPack, 3.2, -1.0, { y: 0 });
    const desk = P.table({ w: 1.0, d: 0.6, color: C.woodLight }); W.add(desk, 3.3, 0.8, { ry: -Math.PI / 2, collide: { w: 1.0, d: 0.6 } });
    W.add(P.laptop(), 3.3, 0.8, { y: 0.75, ry: -Math.PI / 2 });
    // the drawing in a frame on the wall
    if (G.state.flags.drawing) { const fr = P.drawingPaper(familyDrawing()); W.add(fr, -3.9, 0.6, { y: 1.8, ry: Math.PI / 2 }); }
  },
  async intro(ctx) {
    await fadeIn(3);
    await lower('{child} was eight. {They} had opinions about everything, and questions about everything else.');
    await say(ctx.kid, '{me}! You said one story. You promised.', { name: '{child}' });
  },
  moments: [
    {
      id: 'stars', label: 'Stick glow-in-the-dark stars on the wall', at: [3.0, -1.0], caption: 'A whole sky, just for {them}',
      async run(ctx) {
        const me = ctx.me, W = ctx.world;
        await me.walkTo(2.8, -1.0);
        ctx.starPack.visible = false;
        await me.walkTo(-1.0, -2.8); me.face(-1.0, -4);
        await camTo(-1.5, -2.8, 5.2, 1.5);
        const spots = [[-2.6, 2.6], [-1.9, 2.9], [-1.2, 2.5], [-0.5, 2.9], [-3.2, 2.2]];
        const stars = [];
        await sequence({ label: 'Press them on, one by one', keys: ['up', 'left', 'up', 'right', 'up'], onStep: (i) => { const [x, y] = spots[i]; const s = P.ico(0.07, 0, 0xeaffb0, 0, 1, { emissive: 0xd8ff9a, emissiveIntensity: 2.5 }); W.add(s, x, -3.45, { y }); stars.push(s); sfx('tap'); } });
        mood('nurseryNight', 2, { bloom: 1.1 });
        await say(ctx.kid, 'Whoa. It’s like sleeping outside.', { name: '{child}' });
        await keep('stars', 'A whole sky, just for {them}');
        mood('nurseryNight', 2);
        await camFollow(me, 7.5);
      },
    },
    {
      id: 'monster', label: 'Check under the bed for monsters', at: [-2.2, -0.4], caption: 'No monsters. Just a sock.',
      async run(ctx) {
        const me = ctx.me;
        await say(ctx.kid, 'Can you check? Just in case.', { name: '{child}' });
        await me.walkTo(-2.2, -0.5); me.face(-2.9, -1.6); me.setPose('crouch');
        await camTo(-2.6, -1.0, 4.5, 1.5);
        await hold({ label: 'Look carefully…', seconds: 3 });
        sfx('rustle');
        await say(me, 'Hmm. One sock. Two crayons. A very old raisin. No monsters.');
        sfx('giggle', { pitch: 1.05 });
        await say(ctx.kid, 'They probably heard you coming.', { name: '{child}' });
        await keep('monster', 'No monsters. Just a sock.');
        me.setPose('idle');
        await camFollow(me, 7.5);
      },
    },
    {
      id: 'teddy', label: 'Find {their} bear', at: [1.6, 1.6], caption: 'The bear with one ear',
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(1.7, 1.4); me.setPose('crouch'); await wait(0.6); me.setPose('idle');
        await me.walkTo(-2.0, -1.6);
        await say(ctx.kid, 'He can’t sleep without me. It’s not for me. It’s for him.', { name: '{child}' });
        await lower('The bear had one ear left. {They} loved him exactly twice as much because of it.');
        await keep('teddy', 'The bear with one ear');
      },
    },
    workMoment({ id: 'laptop', label: 'Finish the presentation', at: [3.3, 0.8], emails: 10, cost: 60, lines: ['It’s due tomorrow. It has to be tonight.', 'Just the last slide.'] }),
    {
      id: 'story', kind: 'story', label: 'Read the bedtime story', at: [-2.0, -1.0], caption: 'One more time. Always one more time.',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid;
        await me.walkTo(-2.0, -1.1); me.faceChar(kid); me.setPose('sit', { h: 0.5 }); me.position.set(-2.1, 0, -1.2);
        kid.setPose('lie'); kid.position.set(-2.9, 0, -2.1); kid.extraY = 0.42; kid.heading = kid.targetHeading = Math.PI;
        await camTo(-2.5, -1.6, 4.4, 2);
        const sc = G.state.flags.storyChoice;
        const titles = { dragon: 'the dragon who was afraid of the dark', ocean: 'the whale who sang to the moon', moon: 'the girl who lived on the moon' };
        if (sc) await lower(`You read ${titles[sc]}. The same story your parents read to you, from the same falling-apart book.`);
        else await lower('You read the same story your parents read to you, from the same falling-apart book.');
        await stillness({ seconds: 5, label: 'Read slowly. Do all the voices.' });
        await say(kid, 'Again?', { name: '{child}' });
        const c = await choose('“Again?”', ['“Of course.”', '“It’s late, sweetheart.”']);
        if (c === 0) {
          await lower('Again. And again. You knew it by heart. So did {they}. That wasn’t the point.');
        } else {
          await say(kid, 'Pleeease. Just the end bit.', { name: '{child}' });
          await lower('You read the end bit. Then the middle bit. Then the whole thing.');
        }
        await keep('story', 'One more time. Always one more time.');
      },
    },
    {
      id: 'questions', kind: 'story', label: 'Turn off the lamp', at: [3.1, -2.6], requires: ['story'], caption: '“Will you always be here?”',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid;
        await me.walkTo(3.0, -2.5);
        mood('nurseryNight', 2, { sunIntensity: 0.3, hemiIntensity: 0.5 });
        if (ctx.r.lampLight) ctx.r.lampLight.intensity = 1.2;
        await say(kid, '{me}?', { name: '{child}' });
        await say(me, 'Mm?');
        await say(kid, 'Will you always be here?', { name: '{child}' });
        await me.walkTo(-2.0, -1.2); me.faceChar(kid);
        const c = await choose('“Will you always be here?”', ['“Always.”', '“As long as I possibly can.”', '“Even when you can’t see me.”']);
        G.state.flags.alwaysAnswer = ['Always.', 'As long as I possibly can.', 'Even when you can’t see me.'][c];
        await say(me, G.state.flags.alwaysAnswer);
        await say(kid, 'Okay.', { name: '{child}' });
        await lower('{They} believed you completely. That was the most frightening thing about it.');
        await keep('questions', '“Will you always be here?”');
      },
    },
    {
      id: 'goodnight', kind: 'story', label: 'Kiss {them} goodnight', anchor: (ctx) => ctx.kid, offset: [0.9, 0, 0.6], requires: ['questions'], caption: 'Standing in the doorway',
      async run(ctx) {
        const me = ctx.me, kid = ctx.kid;
        await me.walkToChar(kid, 0.7); me.setPose('crouch'); sfx('kiss'); await wait(0.8);
        kid.setPose('sleep');
        me.setPose('idle');
        await me.walkTo(-3.2, 1.8); me.faceChar(kid);
        await camTo(-2.6, -0.5, 6.5, 3);
        await stillness({ seconds: 8, label: 'Stand in the doorway.' });
        await lower('You stood in the doorway a long time. Longer than you needed to.');
        await lower('Not long enough.');
        await keep('goodnight', 'Standing in the doorway');
        await fadeOut(4);
        await narrate(['After that night, something changed speed.', 'Nobody warned you. Nobody ever does.'], { minTime: 1.4 });
        G.ui.clearNarration();
      },
    },
  ],
  final: 'goodnight',
};
