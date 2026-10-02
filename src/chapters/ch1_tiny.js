// CHAPTER I — TINY (0–1)
// The world is one room, then one garden. Everything is enormous. Nothing is in a hurry.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng } from '../engine/game.js';
import { LOOKS } from '../engine/character.js';
import { narrate, lower, say, think, wait, keep, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, intensity, hop, choose, everyReal } from '../engine/story.js';
import { stillness, tap, rhythm, balance, sequence, collect, hold, stayNear } from '../engine/minigames.js';
import { buildNursery, buildYard, makePlayer, person, dog, skyDressing } from './places.js';
import { ParticleField } from '../engine/particles.js';

const LULLABY_WORDS = [
  '♪ Little one, little one, close your eyes…',
  '♪ the stars are out, the moon will rise…',
  '♪ and when you wake, I’ll still be here —',
  '♪ little one, my little dear.',
];
export { LULLABY_WORDS };

// ---------------------------------------------------------------------
export const nursery = {
  id: 'ch1-nursery', chapter: 1,
  card: { num: 'I', title: 'Tiny', ages: 'zero to one', quote: 'You were so small once. Small enough to fit in two hands.' },
  mood: 'dawnNursery', music: 'tiny', intensity: 0.3,
  ambience: { room: 0.4, birds: 0.35 },
  zoom: 6.2, surface: 'wood',
  bounds: { minX: -3.75, maxX: 3.75, minZ: -3.2, maxZ: 3.3 },
  hint: 'You can only crawl. That’s alright — nothing here is in a hurry. Find the glowing lights.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildNursery(ctx, { era: 'past' });
    ctx.me = makePlayer(0.7, 0.3, 0.7, Math.PI * 0.8);
    ctx.me.setPose('sitGround');
    ctx.mom = person(LOOKS.mom, 31, 'Mom', -3.5, 1.8, Math.PI / 2); ctx.mom.root.visible = false;
    ctx.dad = person(LOOKS.dad, 33, 'Dad', -3.5, 1.8, Math.PI / 2); ctx.dad.root.visible = false;
    W.add(P.disc(0.55, 0x9a7a6a, 10, 0.02), -2.7, 1.6);
    ctx.dog = dog(1, -2.7, 1.6); ctx.dog.setPose('lie'); ctx.dog.wag = 0.3; ctx.dog.heading = ctx.dog.targetHeading = 0.6;
    W.addCollider({ x: -2.7, z: 1.6, r: 0.4 });
    // three loose blocks on the floor
    ctx.blocks = [C.red, C.yellow, C.blue].map((c, i) => { const b = P.box(0.26, 0.26, 0.26, c); W.add(b, 1.4 + i * 0.38, 1.6 + (i % 2) * 0.25, { ry: i * 0.5 }); return b; });
    ctx.motes = W.particlesOf('motes', { center: new THREE.Vector3(1.4, 0, -1.6), area: { w: 2.2, h: 2.6, d: 2.2 }, count: 45, opacity: 0.35 });
    skyDressing(ctx, { clouds: 4, y: -6, spread: 14 });
  },
  async intro(ctx) {
    amb({ heartbeat: 0.8, room: 0.2 }, 0.5);
    await narrate(['Before you knew any words,', 'before you knew your own name,', 'there was a heartbeat. And then, there was light.'], { minTime: 1.3 });
    amb({ room: 0.4, birds: 0.35 }, 4);
    G.ui.clearNarration();
    await fadeIn(4);
    sfx('coo');
    await lower('This was the whole world: one room, soft and pink and very, very big.');
  },
  moments: [
    {
      id: 'mobile', label: 'Look up at the stars', at: [-2.5, -1.75], caption: 'The stars above your crib',
      async run(ctx) {
        const b = ctx.me;
        await b.walkTo(-2.5, -1.75); b.faceNow(-2.5, -2.6);
        b.setPose('sitGround', { look: -0.55, reach: true });
        ctx.r.mobile.userData.speed = 0.7;
        await camTo(-2.5, -2.3, 4.6, 2.5);
        sfx('sparkle');
        await stillness({ seconds: 5, label: 'Watch them turn.' });
        await lower('Five little stars, going round and round.');
        await lower('The whole sky, as far as you knew.');
        await keep('mobile', 'The stars above your crib');
        b.setPose('idle'); ctx.r.mobile.userData.speed = 0.25;
        await camFollow(b, 6.2);
      },
    },
    {
      id: 'sunbeam', label: 'Crawl into the sunlight', at: [1.4, -1.5], caption: 'Warm light on the floor',
      async run(ctx) {
        const b = ctx.me;
        await b.walkTo(1.4, -1.5);
        b.setPose('sitGround', { look: -0.2 });
        ctx.motes.setOpacity(2.6);
        mood('dawnNursery', 3, { warmth: 0.6, dream: 0.45, bloom: 0.6 });
        await camZoom(4.8, 3);
        await stillness({ seconds: 6, label: 'Feel the warm light.' });
        await lower('Morning came in through the window and lay down on the floor beside you.');
        await keep('sunbeam', 'Warm light on the floor');
        ctx.motes.setOpacity(1);
        mood('dawnNursery', 3);
        b.setPose('idle');
        await camZoom(6.2, 2);
      },
    },
    {
      id: 'biscuit', label: 'Say hello to Biscuit', at: [-1.9, 1.75], caption: 'Biscuit, who was patient with you',
      async run(ctx) {
        const b = ctx.me, d = ctx.dog;
        await b.walkTo(-1.95, 1.7); b.face(-2.7, 1.6);
        b.setPose('sitGround');
        d.faceChar(b); d.wag = 0.8;
        await camTo(-2.3, 1.6, 4.5, 1.5);
        await tap({ count: 5, label: 'Pat Biscuit', onTap: (n) => { d.wag = 0.8 + n * 0.3; sfx(n % 2 ? 'giggle' : 'coo'); if (n === 3) d.setPose('sit'); } });
        sfx('woof', { vol: 0.5 });
        await hop(b, 1, 0.08);
        await lower('Biscuit was only a puppy too. The two of you were learning the world together.');
        await keep('biscuit', 'Biscuit, who was patient with you');
        d.setPose('lie'); d.wag = 0.4;
        b.setPose('idle');
        await camFollow(b, 6.2);
      },
    },
    {
      id: 'blocks', label: 'Build a tower', at: [1.8, 1.25], caption: 'Your first tower — and your first ruin',
      async run(ctx) {
        const b = ctx.me;
        await b.walkTo(1.75, 1.0); b.face(1.8, 1.7);
        b.setPose('sitGround');
        await camTo(1.8, 1.5, 4.4, 1.5);
        const base = new THREE.Vector3(1.8, 0, 1.75);
        await sequence({
          label: 'Stack the blocks', keys: ['up', 'up', 'up'],
          onStep: (i) => {
            const bl = ctx.blocks[i]; const from = bl.position.clone(); const to = base.clone().setY(i * 0.26);
            tween(0.5, (t) => { bl.position.lerpVectors(from, to, t); bl.position.y += Math.sin(t * Math.PI) * 0.35; bl.rotation.y = (1 - t) * i * 0.5; });
            sfx('tap');
          },
        });
        await wait(0.6);
        await tap({ count: 1, label: 'Now… knock it down!' });
        sfx('thud');
        ctx.blocks.forEach((bl, i) => { const from = bl.position.clone(); const to = new THREE.Vector3(base.x + (i - 1) * 0.5 + 0.2, 0, base.z + 0.3 + i * 0.2); tween(0.6, (t) => { bl.position.lerpVectors(from, to, t); bl.position.y = Math.max(0, from.y * (1 - t) + Math.sin(t * Math.PI) * 0.2); bl.rotation.x = t * (1 + i); }); });
        await wait(0.5);
        sfx('giggle');
        await hop(b, 2, 0.08);
        await lower('Your first tower. Your first ruin. Both were wonderful.');
        await keep('blocks', 'Your first tower — and your first ruin');
        b.setPose('idle');
        await camFollow(b, 6.2);
      },
    },
    {
      id: 'lullaby', kind: 'story', label: 'Call for someone', at: [0.3, 0.6], radius: 1.3, caption: 'The song she sang',
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom;
        b.setPose('sitGround', { look: -0.3 });
        sfx('cry');
        await wait(2);
        sfx('door');
        mom.root.visible = true; mom.place(-3.4, 1.8, Math.PI / 2);
        await camTo(-1.2, 1.2, 6.5, 1.5);
        await mom.walkTo(b.position.x - 0.8, b.position.z + 0.2);
        mom.faceChar(b);
        say(mom, 'Oh, oh, oh. I know. I know.');
        mom.setPose('crouch');
        await wait(0.8);
        mom.pickUp(b); mom.setPose('carry');
        sfx('coo');
        await say(mom, 'There you are, little one. Did you think I’d gone?');
        await mom.walkTo(2.3, -1.55);
        mom.place(2.4, -2.15, -0.7); mom.setPose('rock');
        await camTo(2.3, -1.8, 4.8, 2);
        music('tinyHum', { intensity: 0.45 });
        const chair = ctx.r.chair.userData.rock;
        let rockT = 0;
        const rocker = (dt) => { rockT += dt; const s = Math.sin(rockT * 2.0) * 0.09; chair.rotation.x = s; mom.lean = s * 0.8; };
        G.updaters.add(rocker);
        await wait(1.5);
        const singing = (async () => { for (const l of LULLABY_WORDS) await say(mom, l, { passive: true, hold: 3.4, name: 'Mom' }); })();
        await rhythm({ label: 'Rock with her — press Space on the first beat of each bar', hits: 4, onlyDownbeat: true, window: 0.3 });
        await singing;
        await keep('lullaby', 'The song she sang');
        await lower('She sang it every night. One day you would sing it too — though you didn’t know that yet.');
        G.updaters.delete(rocker); chair.rotation.x = 0; mom.lean = 0;
        mom.setPose('idle');
        mom.position.set(2.0, 0, -1.5);
        await mom.walkTo(0.6, 0.9);
        mom.putDown(0.3, 0.6);
        b.setPose('sitGround');
        await say(mom, 'Play for a little while. I’m right here.');
        await mom.walkTo(2.0, -1.4);
        mom.place(2.4, -2.15, -0.7); mom.setPose('rock'); mom.lookAt(b);
        music('tiny', { intensity: 0.4 });
        await camFollow(b, 6.2);
      },
    },
    {
      id: 'firstSteps', kind: 'story', label: 'Pull yourself up on the crib', at: [-1.6, -1.8], requires: ['lullaby'], caption: 'Three steps. They cried.',
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom, dad = ctx.dad;
        await b.walkTo(-1.6, -1.85); b.faceNow(-1.6, -2.6);
        sfx('door');
        dad.root.visible = true; dad.place(-3.4, 1.8, Math.PI / 2);
        await camTo(-0.4, -0.3, 6.8, 1.5);
        await dad.walkTo(0.9, 1.0);
        dad.faceChar(b);
        await say(dad, 'Hey, hey — what’s this? What are you up to?');
        mom.setPose('idle'); mom.lookAt(null);
        mom.walkTo(1.7, -0.6).then(() => mom.faceChar(b));
        b.setAge(1.35); b.setPose('stand'); b.faceNow(dad.position.x, dad.position.z);
        sfx('coo');
        await say(mom, 'Oh. Oh my goodness. Look.', { passive: true, hold: 2 });
        dad.setPose('kneelOpen');
        await balance({ label: 'Find your balance — ← →', seconds: 3.5, difficulty: 0.8, onUpdate: (x) => { b.tilt = -x * 0.3; } });
        b.tilt = 0;
        await say(dad, 'Come on. Come to me. You can do it.');
        G.director.current.speedMul = 0.55;
        let wt = 0; const wobble = (dt) => { wt += dt; b.tilt = Math.sin(wt * 7) * 0.12; };
        G.updaters.add(wobble);
        await collect({ label: 'Walk to Dad', items: [{ x: dad.position.x, z: dad.position.z, r: 0.45 }], showCount: false });
        G.updaters.delete(wobble); b.tilt = 0;
        G.director.current.speedMul = 1;
        dad.pickUp(b); dad.setPose('carryHigh');
        sfx('giggle'); sfx('yay', { delay: 0.2 });
        hop(dad, 2, 0.15);
        await camTo(dad.position.x, dad.position.z, 5.2, 1.2);
        await say(dad, 'Look at you! Look at you go!');
        mom.setPose('cry');
        await say(mom, 'Three steps! Did you count? Three!');
        await say(mom, 'I’m not crying. You’re crying.');
        await keep('firstSteps', 'Three steps. They cried.');
        mom.setPose('idle');
        await lower('That spring, they carried you outside for the very first time.');
        await fadeOut(2.5, '#fff6ee');
      },
    },
  ],
  final: 'firstSteps',
};

// ---------------------------------------------------------------------
export const firstSpring = {
  id: 'ch1-spring', chapter: 1,
  mood: 'springMorning', music: 'tiny', intensity: 0.45,
  ambience: { birds: 0.8, wind: 0.25 },
  zoom: 8, surface: 'grass',
  hint: 'Explore the garden. Nobody is in a hurry today.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildYard(ctx, { season: 'spring', treeStage: 0, picnic: true, flowers: true });
    ctx.r.tree.visible = false; W.removeCollidersOf(ctx.r.tree); // not planted yet
    W.bounds = { minX: -9.8, maxX: 6.5, minZ: -3.6, maxZ: 5.8 };
    const b = ctx.me = makePlayer(1.1, 1.2, 1.0, Math.PI * 0.2); b.setPose('sitGround');
    ctx.mom = person(LOOKS.mom, 32, 'Mom', 0.4, 1.9, 2.4); ctx.mom.setPose('sitGround');
    ctx.dad = person(LOOKS.dad, 34, 'Dad', 2.1, 1.6, -2.0); ctx.dad.setPose('sitGround');
    ctx.grandpa = person(LOOKS.grandpa, 66, 'Grandpa', -3.6, -2.05, 0); ctx.grandpa.setPose('sit', { h: 0.45 });
    ctx.grandma = person(LOOKS.grandma, 64, 'Grandma', -2.8, -2.05, 0); ctx.grandma.setPose('sit', { h: 0.45 });
    ctx.dog = dog(1.5, 3.5, 2.5); ctx.dog.follow(b, 1.8); ctx.dog.wag = 1;
    ctx.petals = W.particlesOf('petals', { center: new THREE.Vector3(-8.5, 0, 0), area: { w: 7, h: 5, d: 7 }, count: 70 });
    W.butterflies(3, { x: 0, z: 3, r: 4 }, 3);
    W.birds(6, 2);
    skyDressing(ctx, { clouds: 7, y: -4, spread: 24 });
  },
  async intro(ctx) {
    await fadeIn(3);
    await lower('The world, it turned out, was much bigger than one room.');
    await say(ctx.grandma, 'Look at those eyes. They want to see everything.');
  },
  moments: [
    {
      id: 'petals', label: 'Reach for the falling petals', at: [-7.6, 0.4], caption: 'Blossoms, falling like slow snow',
      async run(ctx) {
        const b = ctx.me, W = ctx.world;
        await b.walkTo(-7.6, 0.4);
        await camTo(-8, 0.4, 6.5, 1.5);
        b.setPose('sitGround', { look: -0.4, reach: true });
        await wait(1);
        b.setPose('idle');
        // five glowing petals drift down around you
        const r = rng(9);
        const items = [];
        for (let i = 0; i < 5; i++) {
          const m = P.glowSprite(0xffc8d8, 0.55, 0.95);
          const x = -8 + r.range(-2.2, 2.2), z = 0.4 + r.range(-2, 2);
          m.position.set(x, 3 + i * 0.6, z); W.root.add(m);
          const it = { obj: m, x, z };
          const fall = (dt) => { if (m.position.y > 0.25) { m.position.y -= dt * 0.45; m.position.x += Math.sin(G.time * 2 + i) * dt * 0.3; } if (it.got) { m.material.opacity -= dt * 2; if (m.material.opacity <= 0) { W.root.remove(m); G.updaters.delete(fall); } } };
          G.updaters.add(fall);
          items.push(it);
        }
        await camFollow(b, 7);
        await collect({ label: 'Catch the petals', items, radius: 0.55, onCollect: () => sfx('giggle') });
        b.setPose('sitGround', { look: -0.3 });
        await say(ctx.grandma, 'The blossoms only last a week, little one.', { name: 'Grandma' });
        await lower('You didn’t know what a week was. You didn’t know they only last a week.');
        await keep('petals', 'Blossoms, falling like slow snow');
        b.setPose('idle');
      },
    },
    {
      id: 'grass', label: 'Touch the grass', at: [3.6, 4.0], caption: 'The first time you touched grass',
      async run(ctx) {
        const b = ctx.me;
        await b.walkTo(3.6, 4.0);
        b.setPose('sitGround', { look: 0.4 });
        await camTo(3.6, 4.0, 4.6, 1.5);
        amb({ birds: 1, wind: 0.4 }, 2);
        await hold({ label: 'Hold Space to feel the grass', seconds: 3, onProgress: (p, h) => { if (h && Math.random() < 0.04) sfx('rustle', { vol: 0.5 }); } });
        sfx('giggle'); await hop(b, 2, 0.06); sfx('giggle', { delay: 0.3 });
        await lower('It was cool, and it tickled. You laughed at the grass for a long, long time.');
        await keep('grass', 'The first time you touched grass');
        amb({ birds: 0.8, wind: 0.25 }, 2);
        b.setPose('idle');
        await camFollow(b, 8);
      },
    },
    {
      id: 'butterfly', label: 'Follow the butterfly', at: [-2.0, 4.2], caption: 'The butterfly that got away',
      async run(ctx) {
        const b = ctx.me, W = ctx.world;
        // a special, slow, white butterfly
        const bf = new THREE.Group();
        const wg = new THREE.PlaneGeometry(0.22, 0.17); wg.translate(0.11, 0, 0);
        const m = P.mat(0xfff6f0, { side: THREE.DoubleSide, emissive: 0xfff0e0, emissiveIntensity: 0.6 });
        const L = new THREE.Mesh(wg, m), Rw = new THREE.Mesh(wg, m); Rw.scale.x = -1; L.rotation.x = Rw.rotation.x = -Math.PI / 2;
        const gl = new THREE.Group(); gl.add(L); const gr = new THREE.Group(); gr.add(Rw); bf.add(gl, gr);
        const glow = P.glowSprite(0xfff4e0, 0.7, 0.6); bf.add(glow);
        W.root.add(bf);
        let t = 0;
        const fly = (dt) => {
          t += dt * 0.32;
          const x = -2 + Math.sin(t) * 2.6 + Math.sin(t * 2.2) * 0.6, z = 3.4 + Math.cos(t * 0.8) * 1.6;
          const nx = x - bf.position.x, nz = z - bf.position.z;
          bf.position.set(x, 0.7 + Math.sin(t * 5) * 0.2, z); bf.rotation.y = Math.atan2(nx, nz) - Math.PI / 2;
          const f = Math.sin(G.time * 14) * 1.1; gl.rotation.z = f; gr.rotation.z = -f;
        };
        G.updaters.add(fly);
        await camFollow(b, 7);
        await stayNear({ target: bf, dist: 1.5, seconds: 9, label: 'Follow it. Don’t lose it.' });
        b.setPose('sitGround', { look: -0.5, reach: true });
        await wait(0.5);
        // it flies away into the sky
        G.updaters.delete(fly);
        const from = bf.position.clone();
        await tween(3, (k) => { bf.position.set(from.x + k * 3, from.y + k * 6, from.z - k * 2); const f = Math.sin(G.time * 14) * 1.1; gl.rotation.z = f; gr.rotation.z = -f; });
        W.root.remove(bf);
        await lower('It never let you catch it. That was alright. Some things are only for watching.');
        await keep('butterfly', 'The butterfly that got away');
        b.setPose('idle');
      },
    },
    {
      id: 'firstWord', kind: 'story', label: 'Crawl back to the blanket', at: [1.2, 1.2], radius: 1.4, caption: { id: 'firstWord', text: 'Your first word' },
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom, dad = ctx.dad;
        await b.walkTo(1.25, 1.05); b.setPose('sitGround'); b.face(1.2, 4);
        await camTo(1.2, 1.4, 5.2, 1.5);
        mom.lookAt(b); dad.lookAt(b);
        await say(mom, 'Can you say “Mama”? Ma-ma?');
        await say(dad, 'Don’t listen to her. Da-da. Daaa-da.');
        ctx.dog.walkTo(2.4, 2.4).then(() => ctx.dog.setPose('sit'));
        const i = await choose('Your very first word…', ['“Mama.”', '“Dada.”', '“Woof!”']);
        const word = ['Mama', 'Dada', 'Woof'][i];
        sfx('coo', { pitch: 1.2 });
        await wait(0.6);
        if (i === 0) {
          mom.setPose('jump'); await say(mom, 'Did you hear that? Did everyone hear that?!'); mom.setPose('sitGround');
          await say(dad, 'That’s not fair. I’ve been practising with them for weeks.');
        } else if (i === 1) {
          dad.setPose('jump'); await say(dad, 'YES! Everyone heard that, right? That counts!'); dad.setPose('sitGround');
          await say(mom, 'Traitor.');
          await lower('She was smiling when she said it.');
        } else {
          sfx('woof', { n: 2 }); ctx.dog.wag = 2;
          await say(ctx.grandpa, 'Well. Now we know who the favourite is.');
          await say(mom, 'Biscuit! You taught them that!');
        }
        sfx('giggle');
        await keep('firstWord', `Your first word: “${word}”`);
        G.state.flags.firstWord = word;
      },
    },
    {
      id: 'grandpaLap', kind: 'story', label: 'Go to Grandpa', anchor: (ctx) => ctx.grandpa, offset: [0, 0, 0.8], requires: ['firstWord'], caption: 'Asleep on Grandpa’s lap',
      async run(ctx) {
        const b = ctx.me, gp = ctx.grandpa, dad = ctx.dad;
        dad.setPose('idle');
        await dad.walkToChar(b, 0.6);
        dad.setPose('crouch'); await wait(0.5);
        dad.pickUp(b); dad.setPose('carry');
        await dad.walkTo(gp.position.x + 0.2, gp.position.z + 0.9);
        dad.faceChar(gp);
        await say(gp, 'Give that little bundle here.');
        dad.putDown(gp.position.x, gp.position.z + 0.3);
        gp.pickUp(b); gp.setPose('carry');
        await dad.walkTo(0.4, 0.3);
        await camTo(gp.position.x, gp.position.z, 4.6, 2.5);
        music('whistle', { intensity: 0.5 });
        mood('goldenAfternoon', 10, { dream: 0.3 });
        await lower('Grandpa whistled the same song your mother sang to you.');
        await lower('He had sung it to her, once, when she was the one who was small.');
        await stillness({ seconds: 7, label: 'Close your eyes.' });
        b.setPose('sleep');
        await keep('grandpaLap', 'Asleep on Grandpa’s lap', { window: 10 });
        await wait(1);
        music('tiny', { intensity: 0.2 });
        await fadeOut(4, '#16121a');
        await narrate(['You won’t remember any of this.', 'Not the stars, not the sunlight, not the song.', 'But they will.', 'They will carry it for you — until you’re big enough to carry it yourself.'], { minTime: 1.4 });
        G.ui.clearNarration();
        await wait(1.2);
      },
    },
  ],
  final: 'grandpaLap',
};
