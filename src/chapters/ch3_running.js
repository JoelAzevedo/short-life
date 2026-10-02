// CHAPTER III — RUNNING (12–15)
// A bike, a whole town, a clock that has started to mean it.
// And one afternoon on a porch that you can only spend once.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng } from '../engine/game.js';
import { LOOKS } from '../engine/character.js';
import { narrate, lower, say, think, wait, keep, lose, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, intensity, hop, choose, shake } from '../engine/story.js';
import { stillness, tap, balance, sequence, collect, hold, timing, walkWith } from '../engine/minigames.js';
import { buildYard, makePlayer, person, dog, skyDressing } from './places.js';
import { buildTown, mountBike, parkBike, hillHeight, SPOTS, HILL } from './town.js';

// ---------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------
function loop(fn) {
  const W = G.world;
  const f = (dt) => { if (G.world !== W) { G.updaters.delete(f); return; } fn(dt); };
  G.updaters.add(f);
  return () => G.updaters.delete(f);
}
function holdIn(c, obj, { side = 'R', y = -0.04, x = 0, z = 0.02 } = {}) {
  const end = (side === 'R' ? c.armR : c.armL).end;
  const k = 1 / end.scale.x;
  obj.scale.setScalar(k);
  obj.position.set(x * k, y * k, z * k);
  end.add(obj);
  return obj;
}
function drop(obj) { obj.parent?.remove(obj); obj.scale.setScalar(1); }
function littlesDone(ctx) { return ctx.world.hotspots.filter((h) => h.done && (h.m?.kind ?? 'little') === 'little').length; }
function clockOver(ctx) { return !!ctx.director.clock?.over; }
const BIKE_SPEED = 1.7;
// a hidden moment: no glow, no prompt — it just happens when you wander into it
function secret(ctx, { id, x = 0, z = 0, r = 0.9, when = null, trigger = null, run }) {
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
// a polyline you can sample by distance (with a sideways offset)
function makePath(points) {
  const seg = []; let total = 0;
  for (let i = 0; i < points.length - 1; i++) { const [ax, az] = points[i], [bx, bz] = points[i + 1]; const l = Math.hypot(bx - ax, bz - az); seg.push({ ax, az, bx, bz, l, s0: total }); total += l; }
  const at = (s, off = 0) => {
    s = Math.max(0, Math.min(s, total - 0.001));
    const sg = seg.find((q) => s < q.s0 + q.l) ?? seg[seg.length - 1];
    const k = (s - sg.s0) / sg.l; const dx = (sg.bx - sg.ax) / sg.l, dz = (sg.bz - sg.az) / sg.l;
    return { x: sg.ax + (sg.bx - sg.ax) * k - dz * off, z: sg.az + (sg.bz - sg.az) * k + dx * off, h: Math.atan2(dx, dz) };
  };
  return { at, total };
}

// get off the bike where you are
function getOff(ctx, at = null) {
  if (ctx.me.onBike) ctx.parked = parkBike(ctx.me);
  if (at && ctx.parked) { ctx.parked.position.set(at[0], 0, at[1]); ctx.parked.rotation.y = at[2] ?? ctx.parked.rotation.y; }
  ctx.def.speedMul = 1;
}
// walk back to the bike and ride on
async function getOn(ctx) {
  const b = ctx.me, bike = ctx.parked;
  if (bike && bike.parent) { await b.walkTo(bike.position.x - 0.35, bike.position.z + 0.25); }
  mountBike(b, ctx.bike);
  ctx.parked = null;
  ctx.def.speedMul = BIKE_SPEED;
}
function pocketWatch() {
  const g = new THREE.Group();
  const c = P.cyl(0.07, 0.07, 0.025, 12, 0xd8b45a, { metalness: 0.6, roughness: 0.35 }); c.rotation.x = Math.PI / 2; g.add(c);
  const face = P.cyl(0.058, 0.058, 0.03, 12, 0xfbf6e8); face.rotation.x = Math.PI / 2; g.add(face);
  const ring = P.torus(0.025, 0.008, 4, 8, 0xd8b45a); ring.position.y = 0.09; g.add(ring);
  const gl = P.glowSprite(0xffe6a0, 0.35, 0.5); g.add(gl);
  return g;
}
function ticking(on) {
  if (!on) return () => {};
  let t = 0, n = 0;
  return loop((dt) => { t += dt; if (t > 0.5) { t = 0; sfx(n++ % 2 ? 'tock' : 'tick', { vol: 0.5 }); } });
}

const VENDOR = { skin: C.skin[1], hair: 0x3a2a22, hairStyle: 'short', shirt: 0xf4f0e8, pants: 0x5a6a8a, beard: true };
const KID_A = { skin: C.skin[4], hair: 0x1e1612, hairStyle: 'ponytail', shirt: 0x9a7ad0, pants: 0x3a3a52 };
const KID_B = { skin: C.skin[0], hair: 0xc89a5a, hairStyle: 'short', shirt: 0x5fa36a, pants: 0x6a5a4a };

// ---------------------------------------------------------------------
// III.1 — The town, one long golden afternoon
// ---------------------------------------------------------------------
export const town = {
  id: 'ch3-town', chapter: 3,
  card: { num: 'III', title: 'Running', ages: 'twelve to fifteen', quote: 'You were in such a hurry to grow up. Everybody is.' },
  mood: 'goldenAfternoon', music: 'running', intensity: 0.45,
  ambience: { birds: 0.5, wind: 0.3, city: 0.15 },
  zoom: 13, surface: 'grass',
  ages: [12, 14], clock: { seconds: 360 },
  timeUpText: 'The sun slid down behind Miller’s Hill. The whole town went gold, and then grey.',
  hint: 'You have a bike now, and the whole town is yours. But the day won’t wait for you.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildTown(ctx, { season: 'summer', treeStage: 1 });
    ctx.r.tree.scale.setScalar(0.82); // knee-high once; now about as tall as you
    const F = G.state.flags; F.metSamYoung = false; F.satWithGrandpa = false; F.hasWatch = false;
    ctx.def.speedMul = BIKE_SPEED;
    const b = ctx.me = makePlayer(13, -3.9, 4.4, Math.PI * 0.55);
    ctx.bike = P.bicycle(0x4f8fd0); mountBike(b, ctx.bike);
    ctx.mom = person(LOOKS.mom, 44, 'Mom', 5.3, -1.3, -1.6); ctx.mom.setPose('kneel');
    ctx.dad = person(LOOKS.dad, 46, 'Dad', SPOTS.pierEnd[0] + 0.25, SPOTS.pierEnd[1] - 0.1, 1.9);
    ctx.grandpa = person(LOOKS.grandpa, 78, 'Grandpa', -3.55, -2.05, 0); ctx.grandpa.setPose('sit', { h: 0.45 });
    ctx.theo = person(LOOKS.theo, 13, 'Theo', SPOTS.hillBase[0], SPOTS.hillBase[1], 2.6);
    ctx.theoBike = P.bicycle(0xd9584a); mountBike(ctx.theo, ctx.theoBike);
    ctx.sam = person(LOOKS.sam, 13, 'Sam', SPOTS.cart[0] - 0.7, SPOTS.cart[1] + 0.75, Math.PI * 0.85);
    ctx.vendor = person(VENDOR, 58, 'Mr. Pell', SPOTS.vendor[0], SPOTS.vendor[1], 0);
    ctx.dog = dog(12, -6.6, -1.3); ctx.dog.setPose('lie'); ctx.dog.wag = 0.3; ctx.dog.heading = ctx.dog.targetHeading = 0.6;
    ctx.dog.stop = () => { const m = ctx.dog.moveTarget; ctx.dog.moveTarget = null; m?.resolve?.(); };
    // a couple of kids on the school steps, a baker in a doorway
    const ka = person(KID_A, 12, 'Kid', 21.3, -4.0, 0.3); ka.setPose('sitGround');
    const kb = person(KID_B, 12, 'Kid', 22.3, -3.9, -0.4); kb.setPose('laugh');
    const baker = person({ skin: C.skin[2], hair: 0xd8d4cf, hairStyle: 'bun', shirt: 0xfbf8f2, pants: 0x8a6a5a, dress: true }, 62, 'Baker', 17.9, 5.85, 0.2);
    W.birds(6, 9);
    skyDressing(ctx, { clouds: 9, y: -4, spread: 34, seed: 3 });
    // easter egg: the very top of Miller's Hill, alone
    secret(ctx, {
      id: 'hilltop', x: 39.6, z: -7.2, r: 1.0,
      async run() {
        const b = ctx.me;
        getOff(ctx);
        b.faceNow(30, 2);
        await camTo(27, 0.5, 23, 4);
        await lower('From the top of Miller’s Hill you could see everything. The school. The pond. The shops. Your roof, and Theo’s roof, and the little oak.');
        await lower('It seemed like a lot. It was everything.');
        G.state.flags.foundHilltop = true;
        G.achieve?.('top_of_the_hill', 'Everything', 'Find the spot at the very top of Miller’s Hill');
        await keep('hilltop', 'The whole town, from the top of the hill', { window: 10 });
        await getOn(ctx);
        await camFollow(b, 13);
      },
    });
    // easter egg: ride the whole street, from one end of the world to the other
    let west = false, east = false;
    secret(ctx, {
      id: 'endToEnd',
      trigger: () => {
        const p = G.player.position;
        if (p.z > 7.9 && p.x < -12.6) west = true;
        if (p.z > 7.9 && p.x > 42.6) east = true;
        return west && east;
      },
      async run() {
        const b = ctx.me;
        sfx('bikebell');
        await lower('From one end of the world to the other, without putting a foot down. Theo was never going to believe you.');
        G.state.flags.rodeEndToEnd = true;
        G.achieve?.('end_to_end', 'End to end', 'Ride the whole street, from one edge of town to the other');
      },
    });
    W.particlesOf('motes', { area: { w: 30, h: 4, d: 20 }, count: 40, opacity: 0.35, size: 0.09 });
  },
  async intro(ctx) {
    await fadeIn(3);
    await lower('By thirteen the world reached all the way to the edge of town — and you had a bike.');
    await lower('Somewhere out there, Theo was waiting at the bottom of Miller’s Hill.');
  },
  moments: [
    {
      id: 'bikeRace', label: 'Race Theo down Miller’s Hill', anchor: (ctx) => ctx.theo, offset: [-0.9, 0, 0.5], caption: 'Wind and gravel and Theo yelling',
      async run(ctx) {
        const b = ctx.me, th = ctx.theo;
        if (!b.onBike) await getOn(ctx);
        ctx.def.speedMul = BIKE_SPEED;
        th.faceChar(b);
        await camTo(th.position.x - 0.5, th.position.z, 8, 1.2);
        await say(th, 'Finally! Last one down buys the ice cream.');
        await say(b, 'You always say that.');
        await say(th, 'And you always buy.');
        // push up to the top
        const top = SPOTS.hillTop;
        camFollow(b, 10);
        await Promise.all([b.walkTo(top[0] - 0.4, top[1] + 0.2, { speed: 2.4 }), th.walkTo(top[0] + 0.4, top[1] - 0.2, { speed: 2.4 })]);
        const F = G.state.flags;
        const fair = makePath([[top[0], top[1]], [35.4, -1.8], [33.7, 0.8], [33.6, 5.2], [33.0, 8.6], [25.5, 8.9]]);
        await camTo(top[0] - 1.5, top[1] + 2.4, 7.5, 1);
        const pick = await choose('The track winds down the hill. Straight down is all long grass and bumps.', ['Race fair', 'Take the shortcut through the long grass']);
        F.raceShortcut = pick === 1;
        const mine = F.raceShortcut ? makePath([[top[0], top[1]], [35.2, -0.2], [33.7, 4.6], [33.0, 8.6], [25.5, 8.9]]) : fair;
        const crashAt = F.raceShortcut ? 4.0 : Infinity;
        const riders = [{ c: b, path: mine, s: 0, off: -0.45, v: 0 }, { c: th, path: fair, s: 0.3, off: 0.45, v: 0 }];
        riders.forEach((r) => { const p = r.path.at(r.s, r.off); r.c.place(p.x, p.z, p.h); });
        await say(th, 'Ready…', { hold: 0.7 });
        await say(th, 'GO!', { hold: 0.5 });
        sfx('bikebell'); sfx('whoosh');
        amb({ wind: 0.9, birds: 0.3, city: 0.1 }, 1.5);
        intensity(0.8, 1.5);
        camFollow(b, 9);
        let boost = 0, done = 0, winner = null, crashed = false;
        const stopRider = (r) => { done++; r.v = 0; r.stopped = true; r.c._playerMoving = false; r.c.tilt = 0; r.c.speed = 0; };
        const race = new Promise((resolve) => {
          const stopRace = loop((dt) => {
            boost = Math.max(0, boost - dt * 0.9);
            for (const r of riders) {
              if (r.stopped) continue;
              const limit = winner && winner !== r.c ? r.path.total - 1.4 : r.path.total;
              const p0 = r.path.at(r.s, r.off), p1 = r.path.at(r.s + 0.5, r.off);
              const slope = Math.max(0, hillHeight(p0.x, p0.z) - hillHeight(p1.x, p1.z)) * 6;
              const target = (r.c === th ? 4.6 : 3.9 + boost + (F.raceShortcut ? 1.2 : 0)) + slope;
              r.v += (target - r.v) * Math.min(1, dt * 2);
              r.s += r.v * dt;
              const p = r.path.at(r.s, r.off);
              r.c.position.x = p.x; r.c.position.z = p.z; r.c.targetHeading = p.h;
              r.c.speed = r.v; r.c._playerMoving = true;
              r.c.tilt = Math.sin(G.time * (r.c === b && F.raceShortcut ? 9 : 3) + r.off * 9) * (r.c === b && F.raceShortcut ? 0.14 : 0.05);
              if (r.c === b && r.s >= crashAt) { crashed = true; stopRider(r); riders.forEach((o) => { if (!o.stopped) stopRider(o); }); break; }
              if (r.s >= limit) { winner = winner ?? r.c; stopRider(r); }
            }
            if (Math.random() < 0.04) sfx('rustle', { vol: 0.4 });
            if (done >= 2) { stopRace(); resolve(); }
          });
        });
        say(th, F.raceShortcut ? 'HEY! That’s CHEATING!' : 'WOOOOO!', { passive: true, hold: 1.2 });
        await tap({ count: 12, label: 'Pedal! — tap Space', timeout: 6, onTap: () => { boost = Math.min(3.2, boost + 0.45); } });
        await race;
        intensity(0.45, 3);
        amb({ birds: 0.5, wind: 0.3, city: 0.15 }, 3);
        if (crashed) {
          // a rabbit hole, a handlebar, a very short flight
          sfx('thud'); shake(0.35); sfx('whoosh');
          const bike = parkBike(b, 0.7); bike.rotation.x = 1.45; ctx.parked = bike;
          b.setPose('lieBack');
          await camTo(b.position.x, b.position.z, 5.5, 1);
          await wait(1);
          parkBike(th, 0.6);
          await th.walkTo(b.position.x + 0.8, b.position.z + 0.5, { speed: 3.4 }); th.faceChar(b);
          await say(th, 'Are you dead?');
          await say(b, '…A little.');
          th.setPose('laugh');
          await say(th, 'That’s what you get. That’s what you GET.');
          th.setPose('lieBack'); th.place(b.position.x + 0.7, b.position.z + 0.6, b.heading);
          await lower('He laughed so hard he had to lie down too. The two of you stayed there in the long grass, grass in your hair, watching the clouds go over.');
          await stillness({ seconds: 4, label: 'Watch the clouds.' });
          G.achieve?.('long_grass', 'The long grass', 'Take the shortcut down Miller’s Hill');
          await keep('bikeRace', 'Flat on your back in the long grass');
          b.setPose('idle'); th.setPose('idle');
          b.place(b.position.x, b.position.z + 0.4, b.heading);
          mountBike(th, ctx.theoBike);
          await getOn(ctx);
          F.raceWon = false;
        } else {
          shake(0.15); sfx('thud', { vol: 0.4 });
          const youWon = winner === b;
          F.raceWon = youWon;
          b.faceChar(th); th.faceChar(b);
          await camTo(b.position.x - 0.4, b.position.z, 6.5, 1.2);
          if (youWon) {
            await say(th, 'No way. No WAY. You had a head start.');
            await say(b, 'I’ll have mint chip, thanks.');
            G.achieve?.('race_won', 'Mint chip’s on Theo', 'Beat Theo down Miller’s Hill');
          } else {
            await say(th, 'Ha! Ice cream’s on you. Again.');
            await say(b, 'You cut the corner!');
          }
          th.setPose('laugh'); b.setPose('laugh');
          await lower('Wind and gravel and Theo yelling, all the way down. Your heart going like a drum.');
          await keep('bikeRace', 'Wind and gravel and Theo yelling');
          b.setPose('bike', { h: 0.72 }); th.setPose('bike', { h: 0.72 });
        }
        await say(th, 'Meet me at the school later. I want to show you something.');
        // around the end of the shops and up to the school
        th.walkPath([...(crashed ? [[32.6, 7.9]] : []), [14.4, 8.6], [14.4, 1.5], [20.6, -2.2]], { speed: 5 }).then(() => th.faceNow(SPOTS.cement[0], SPOTS.cement[1]));
        await camFollow(b, 13);
      },
    },
    {
      id: 'samCone', label: 'The ice-cream cart', at: [SPOTS.cart[0] + 0.2, SPOTS.cart[1] + 0.9], caption: 'Half a cone with Sam',
      async run(ctx) {
        const b = ctx.me, sam = ctx.sam, v = ctx.vendor, W = ctx.world;
        getOff(ctx);
        await b.walkTo(SPOTS.cart[0] + 0.35, SPOTS.cart[1] + 0.75); b.faceNow(SPOTS.cart[0], SPOTS.cart[1]);
        sam.faceNow(SPOTS.cart[0], SPOTS.cart[1]);
        await camTo(SPOTS.cart[0], SPOTS.cart[1] + 0.4, 5.2, 1.5);
        await say(v, 'Last one of the day, kids. Mint chocolate chip.');
        b.setPose('reachForward'); sam.setPose('reachForward');
        await wait(0.4);
        b.setPose('idle'); sam.setPose('idle');
        sam.faceChar(b); b.faceChar(sam);
        await say(sam, 'Oh — sorry. You go. Really.');
        const i = await choose('', ['“We could share it?”', '“No, you have it.”']);
        if (i === 0) await say(sam, 'Deal. But I get the bottom of the cone. That’s the best part.');
        else { await say(sam, 'No way. Half each, or nobody gets it.'); await say(sam, 'And I get the bottom of the cone. That’s the best part.'); }
        sfx('ping');
        const cone = new THREE.Group();
        const cc = P.cone(0.05, 0.16, 6, 0xd9a35a); cc.rotation.x = Math.PI; cc.position.y = 0.16; cone.add(cc);
        const sc = P.sphere(0.06, 7, 5, 0xbfe8c8); sc.position.y = 0.19; cone.add(sc);
        holdIn(sam, cone, { y: -0.02 });
        // sit on the bench and pass it back and forth
        const [bx, bz] = SPOTS.bench;
        await Promise.all([sam.walkTo(bx - 0.35, bz + 0.25), b.walkTo(bx + 0.4, bz + 0.25)]);
        sam.place(bx - 0.35, bz + 0.12, 0); b.place(bx + 0.4, bz + 0.12, 0);
        sam.setPose('sit', { h: 0.45 }); b.setPose('sit', { h: 0.45 });
        await camTo(bx, bz + 0.3, 4.6, 1.5);
        let holder = sam;
        await tap({
          count: 6, label: 'Take turns',
          onTap: () => { holder = holder === sam ? b : sam; drop(cone); holdIn(holder, cone, { y: -0.02 }); sfx('soft', { deg: holder === b ? 5 : 3 }); },
        });
        await say(sam, 'I’m Sam, by the way.');
        await say(b, 'I live over there. The house with the little oak tree.');
        await say(sam, 'We’re only here till September. My mom moves around a lot. For work.');
        await say(sam, 'Every summer’s a different town.');
        const j = await choose('', ['“This one’s the best one.”', '“That sounds kind of lonely.”']);
        if (j === 0) { await say(sam, 'Yeah?'); await say(sam, '…Yeah. It might be.'); }
        else { await say(sam, 'Sometimes.'); await say(sam, 'Not today, though.'); }
        drop(cone); holdIn(sam, cone, { y: -0.02 });
        await say(sam, 'Here. Bottom of the cone. I changed my mind — you have it.');
        drop(cone); holdIn(b, cone, { y: -0.02 });
        await wait(0.6);
        sam.setPose('idle'); sam.place(bx - 0.35, bz + 0.4, 0);
        b.setPose('idle'); b.place(bx + 0.4, bz + 0.5, 0); b.faceChar(sam); sam.faceChar(b);
        drop(cone);
        G.state.flags.metSamYoung = true;
        G.achieve?.('met_sam', 'Mint chocolate chip', 'Share the last cone with Sam');
        await say(sam, 'Well. See you around, maybe.');
        const inv = await choose('', ['“Want to see the pond? It’s the best part of town.”', '“Yeah. See you around.”']);
        G.state.flags.samInvited = inv === 0;
        if (inv === 0) {
          await say(sam, 'Okay. Show me.');
          // walk Sam down to the water, the long way round, pushing the bike
          camFollow(b, 7);
          await Promise.all([b.walkTo(34.6, 6.0), sam.walkTo(34.0, 6.3)]);
          await Promise.all([b.walkTo(35.6, 5.3), sam.walkTo(35.0, 5.5)]);
          b.place(35.6, 5.3, 2.6); sam.place(35.05, 5.45, 2.6);
          b.setPose('sitGround'); sam.setPose('sitGround');
          await camTo(36.4, 4.2, 5.0, 2);
          await say(sam, 'Huh. You’re right. It is the best part.');
          await stillness({ seconds: 5, label: 'Sit by the water.' });
          await say(sam, 'I’ll send you a postcard. From wherever we end up next.');
          await say(b, 'You don’t know my address.');
          await say(sam, 'The house with the little oak tree. I’ll figure it out.');
          G.state.flags.samPostcard = true;
          G.achieve?.('postcard', 'The house with the little oak', 'Show Sam the pond');
          sam.setPose('idle'); b.setPose('idle');
          await say(sam, 'Bye, oak-tree kid.');
          sam.walkTo(32.5, 8.5, { speed: 2.6 }).then(() => sam.walkTo(14, 8.7)).then(() => { sam.root.visible = false; });
          await lower('The postcard came in October, from a town you had never heard of. A lighthouse on the front. On the back, just: “Still the best part. — S.”');
          await lower('You wouldn’t see Sam again for ten years.');
          await keep('samCone', 'Half a cone with Sam');
        } else {
          sam.setPose('wave');
          await wait(0.8);
          sam.setPose('idle');
          sam.walkTo(18, 8.4, { speed: 2.6 }).then(() => sam.walkTo(14, 8.6)).then(() => { sam.root.visible = false; });
          await camTo(bx, bz + 0.3, 5.0, 2);
          await lower('You wouldn’t see Sam again for ten years.');
          await keep('samCone', 'Half a cone with Sam');
          await lower('You thought about them every time you tasted mint. You never told anyone that.');
        }
        await getOn(ctx);
        await camFollow(b, 13);
      },
    },
    {
      id: 'stones', label: 'Skip stones with Dad', at: [SPOTS.pierStart[0], SPOTS.pierStart[1] + 0.3], caption: 'Skipping stones with Dad',
      async run(ctx) {
        const b = ctx.me, dad = ctx.dad, W = ctx.world;
        getOff(ctx);
        await b.walkTo(SPOTS.pierEnd[0] - 0.25, SPOTS.pierEnd[1] + 0.2);
        const dir = new THREE.Vector3(1, 0, -0.38).normalize();
        b.faceNow(b.position.x + dir.x, b.position.z + dir.z); dad.faceNow(dad.position.x + dir.x, dad.position.z + dir.z);
        await camTo(SPOTS.pierEnd[0] + 1.1, SPOTS.pierEnd[1] - 0.2, 5.6, 1.5);
        await say(dad, 'There you are. Here — find a flat one.');
        await say(dad, 'Low and flat. Like you’re telling the water a secret.');
        const stone = P.ico(0.05, 0, C.rock); stone.scale.y = 0.5;
        const ripple = (x, z) => {
          const rg = new THREE.Mesh(new THREE.RingGeometry(0.08, 0.13, 16), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, depthWrite: false }));
          rg.rotation.x = -Math.PI / 2; rg.position.set(x, 0.07, z); W.root.add(rg);
          tween(1.4, (t) => { rg.scale.setScalar(1 + t * 4); rg.material.opacity = 0.8 * (1 - t); }, (x2) => x2).then(() => { W.root.remove(rg); rg.geometry.dispose(); rg.material.dispose(); });
          W.burst(new THREE.Vector3(x, 0.1, z), { count: 10, color: 0xdff2ff, speed: 0.9, life: 0.7, size: 0.1 });
        };
        let last = 0;
        const words = ['', 'One.', 'Two!', 'Three!', 'Four!', 'Five!', 'Six!', 'Seven!'];
        for (let i = 0; i < 3; i++) {
          holdIn(b, stone, { y: -0.05 });
          const q = await timing({ label: i === 0 ? 'Throw — press Space in the gold' : 'Again', speed: 1.15 + i * 0.12, sweet: 0.15, tries: 1 });
          const n = Math.max(1, Math.round((q ?? 0.4) * (3 + i * 2)));
          last = n;
          b.setPose('point'); sfx('whoosh', { vol: 0.6 });
          const from = new THREE.Vector3(); stone.getWorldPosition(from);
          drop(stone); W.root.add(stone); stone.position.copy(from);
          let p = from.clone(); let step = 1.0;
          for (let k = 0; k < n; k++) {
            const to = p.clone().addScaledVector(dir, step); to.y = 0.06;
            await tween(0.22 + step * 0.08, (t) => { stone.position.lerpVectors(p, to, t); stone.position.y = p.y + (to.y - p.y) * t + Math.sin(t * Math.PI) * step * 0.18; }, (x) => x);
            ripple(to.x, to.z); sfx('splash', { vol: 0.25 }); sfx('note', { deg: [1, 3, 5, 6, 8, 10, 12][k % 7], inst: 'marimba', vel: 0.4 });
            p = to; step *= 0.78;
          }
          stone.position.y = -1;
          b.setPose('idle');
          await say(dad, words[Math.min(n, 7)], { passive: true, hold: 1.0 });
        }
        W.root.remove(stone);
        if (last >= 7) {
          dad.setPose('jump');
          await say(dad, 'Seven! That’s a record. That is a family record.');
          G.achieve?.('family_record', 'Family record', 'Skip a stone seven times');
          dad.setPose('idle');
        } else {
          await say(dad, 'Not bad at all. Not bad.');
        }
        await say(dad, 'Your grandpa taught me that. Right here, the first summer I came to meet your mom’s family.');
        await say(dad, 'I was terrible. He was very patient about it.');
        await lower('The rings went out and out across the pond, wider and wider, until you couldn’t tell where they stopped.');
        await keep('stones', 'Skipping stones with Dad');
        await getOn(ctx);
        await camFollow(b, 13);
      },
    },
    {
      id: 'cement', label: 'Theo, at the school', at: [SPOTS.cement[0] + 1.4, SPOTS.cement[1] + 0.9], requires: ['bikeRace'], caption: 'Two handprints in the wet cement',
      async run(ctx) {
        const b = ctx.me, th = ctx.theo, W = ctx.world;
        const [cx, cz] = SPOTS.cement;
        getOff(ctx);
        if (th.onBike) { parkBike(th); }
        th.place(cx - 1.05, cz + 0.3, 1.4);
        await b.walkTo(cx + 1.0, cz + 0.35); b.faceNow(cx, cz);
        th.faceNow(cx, cz);
        await camTo(cx, cz + 0.2, 5.0, 1.5);
        await say(th, 'Look. They just poured it this morning. It’s still wet.');
        await say(th, 'Quick, before Mr. Hadley sees.');
        th.setPose('crouch'); b.setPose('crouch');
        const handTex = P.canvasTex(128, 128, (g, w) => {
          g.fillStyle = '#6f6a64';
          g.beginPath(); g.ellipse(64, 82, 26, 30, 0, 0, Math.PI * 2); g.fill();
          for (const [x, y, rx, ry, a] of [[30, 64, 8, 18, -0.7], [44, 34, 7, 22, -0.15], [62, 26, 7, 24, 0], [80, 32, 7, 22, 0.12], [95, 48, 6, 17, 0.4]]) { g.beginPath(); g.ellipse(x, y, rx, ry, a, 0, Math.PI * 2); g.fill(); }
        });
        const print = (x, z, s, ry) => {
          const m = new THREE.Mesh(new THREE.PlaneGeometry(0.42 * s, 0.42 * s), new THREE.MeshBasicMaterial({ map: handTex, transparent: true, opacity: 0, depthWrite: false }));
          m.rotation.x = -Math.PI / 2; m.rotation.z = ry; m.position.set(x, 0.02, z); W.root.add(m);
          tween(0.6, (t) => { m.material.opacity = t * 0.85; });
        };
        await hold({ label: 'Press your hand in', seconds: 2, onProgress: (p) => { b.lean = p * 0.25; } });
        b.lean = 0;
        print(cx + 0.3, cz + 0.1, 1.0, 0.3); print(cx - 0.32, cz - 0.05, 1.05, -0.4);
        sfx('soft', { deg: 5 });
        th.setPose('idle'); b.setPose('idle');
        await say(th, 'There. Now we’re in the sidewalk. Forever.');
        await say(b, 'Forever’s a long time.');
        await say(th, 'Good.');
        await lower('The handprints are still there. They’re smaller than you’d think.');
        await keep('cement', 'Two handprints in the wet cement');
        G.achieve?.('handprints', 'Forever', 'Leave your handprints in the wet cement with Theo');
        await say(th, 'I gotta get home for dinner. See you tomorrow!');
        mountBike(th, ctx.theoBike);
        th.walkPath([[14.4, 1.5], [14.4, 8.6], [-12.5, 8.9]], { speed: 5 }).then(() => { th.root.visible = false; });
        await getOn(ctx);
        await camFollow(b, 13);
      },
    },
    {
      id: 'oldBiscuit', label: 'Take Biscuit for a walk', at: [-6.2, -0.6], caption: 'Walking at Biscuit’s pace',
      async run(ctx) {
        const b = ctx.me, d = ctx.dog;
        getOff(ctx);
        await b.walkTo(-6.1, -0.75); b.faceNow(d.position.x, d.position.z);
        b.setPose('crouch');
        await camTo(-6.3, -1.0, 5, 1.5);
        await say(b, 'Hey, old man. Want to go for a walk?');
        d.wag = 0.9;
        await wait(0.8);
        await lower('His face had gone white around the eyes. It took him a long time to stand up.');
        d.setPose('idle');
        b.setPose('idle');
        await camFollow(b, 9);
        await walkWith({ npc: d, path: [[-5.8, 1.2], [-3.0, 2.9], [0.4, 3.2], [1.8, 1.0], [-1.6, -0.4], [-5.8, -0.9]], maxDist: 2.0, speed: 0.9, label: 'Walk at his pace' });
        d.faceChar(b);
        await lower('He couldn’t run anymore. So you walked.');
        await keep('oldBiscuit', 'Walking at Biscuit’s pace');
        G.achieve?.('old_friend', 'At his pace', 'Walk old Biscuit, as slowly as he needs');
        d.walkTo(-6.6, -1.3).then(() => { d.setPose('lie'); });
        await getOn(ctx);
        await camFollow(b, 13);
      },
    },
    {
      id: 'measure', label: 'Stand next to the tree', at: [4.5, -1.2], caption: 'You and the tree, the same height',
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom;
        getOff(ctx, [6.0, -0.2, 0.4]);
        await b.walkTo(4.5, -2.45); b.faceNow(5.5, -1.45);
        mom.setPose('idle'); mom.walkTo(3.25, -0.7).then(() => mom.faceChar(b));
        await camTo(4.0, -1.75, 4.4, 1.5);
        await say(mom, 'Wait — stay right there. Next to it. Back straight.');
        await stillness({ seconds: 3, label: 'Stand up straight.' });
        await say(mom, 'Well. Would you look at that.');
        await say(mom, 'Neck and neck.');
        await say(b, 'I’m taller.');
        await say(mom, 'You’re on your tiptoes.');
        mom.setPose('laugh');
        await lower('You and the tree, the same height. Just for that one summer. After that, it never looked back.');
        await keep('measure', 'You and the tree, the same height');
        mom.setPose('idle');
        mom.walkTo(5.3, -1.3).then(() => { mom.faceNow(4.5, -2.2); mom.setPose('kneel'); });
        await b.walkTo(5.4, -0.9);
        await getOn(ctx);
        await camFollow(b, 13);
      },
    },
    {
      id: 'grandpaPorch', kind: 'story', label: 'Grandpa, on the porch', anchor: (ctx) => ctx.grandpa, offset: [0.3, 0, 0.9], caption: 'Grandpa’s watch',
      async run(ctx) {
        const b = ctx.me, gp = ctx.grandpa, th = ctx.theo, W = ctx.world;
        const F = G.state.flags;
        getOff(ctx, [-6.4, -0.4, 0.3]);
        await b.walkTo(-4.45, -1.3); b.faceChar(gp);
        gp.lookAt(b);
        await camTo(-3.3, -1.9, 5.2, 1.5);
        await say(gp, 'There’s my favourite grandkid.');
        await say(b, 'I’m your only grandkid.');
        await say(gp, 'Still counts.');
        await say(gp, 'Sit with an old man a while? It’s a nice afternoon for it.');
        // Theo turns up at the gate
        if (th.onBike === null || th.onBike === undefined) mountBike(th, ctx.theoBike);
        th.root.visible = true; th.place(-4.1, 8.5, Math.PI);
        sfx('bikebell');
        await say(th, 'Come ON! Everyone’s already at the pond!', { name: 'Theo' });
        const i = await choose('Grandpa pats the bench beside him.', ['Sit with him', '“Later, Grandpa!”']);
        if (i === 0) {
          F.satWithGrandpa = true; F.hasWatch = true;
          await say(b, 'Go without me! I’ll catch up!');
          await say(th, 'Slowpoke!', { name: 'Theo' });
          th.walkTo(14, 8.8, { speed: 5 });
          await b.walkTo(-2.85, -1.75);
          b.place(-2.85, -2.05, 0); b.setPose('sit', { h: 0.45 });
          await camTo(-3.2, -2.0, 4.2, 2);
          music('whistle', { intensity: 0.35 });
          mood('goldenAfternoon', 6, { warmth: 0.55, bloom: 0.5, dream: 0.12 });
          amb({ birds: 0.35, wind: 0.2, city: 0.05 }, 4);
          await lower('For a while neither of you said anything. A lawnmower, somewhere far away. The tick of the porch roof in the heat.');
          await say(gp, 'Time’s a funny thing, kiddo.');
          await say(gp, 'Slow when you wait for it. Fast when you don’t.');
          await say(gp, 'When I was your age, a summer lasted about a hundred years.');
          await say(gp, 'Now they go by like—', { hold: 1.2 });
          sfx('tap', { vol: 0.8 });
          await wait(0.8);
          await say(gp, 'Here. I want you to have something.');
          const watch = pocketWatch();
          holdIn(gp, watch, { y: -0.04 });
          gp.setPose('reachForward');
          await wait(0.6);
          await say(gp, 'This was my father’s. It’s been waiting for someone.');
          drop(watch); holdIn(b, watch, { y: -0.04 }); b.setPose('read', { h: 0.45 });
          gp.setPose('sit', { h: 0.45 });
          const stopTick = ticking(true);
          await say(gp, 'Wind it every morning. It’ll tell you what time it is.');
          await say(gp, 'It won’t tell you how much you’ve got. Nothing does.');
          await say(gp, 'So don’t waste too much of it sitting on porches with old men.');
          await say(b, 'I’m not wasting it.');
          await wait(1.0);
          await say(gp, '…No. No, you’re not.');
          await stillness({ seconds: 7, label: 'Sit with him.' });
          await keep('grandpaPorch', 'Grandpa’s watch', { window: 10 });
          G.achieve?.('sat_with_grandpa', 'Time well spent', 'Sit with Grandpa on the porch');
          stopTick();
          await lower('You sat until the shadows reached the gate. He whistled. You listened.');
          music('running', { intensity: 0.35 });
          mood('goldenAfternoon', 4);
          b.setPose('idle'); b.place(-2.85, -1.6, 0);
          gp.lookAt(null);
          await getOn(ctx);
        } else {
          F.satWithGrandpa = false; F.hasWatch = false;
          await say(b, 'Later, Grandpa! I promise!');
          gp.setPose('laugh');
          await say(gp, 'Go on, then. Go. I’ll be right here.');
          gp.setPose('sit', { h: 0.45 });
          await getOn(ctx);
          camFollow(b, 9);
          await b.walkTo(-4.7, 6.2, { speed: 5 });
          await b.walkTo(-4.6, 8.4, { speed: 5 });
          sfx('bikebell');
          th.walkTo(3, 8.9, { speed: 5.5 });
          await b.walkTo(-2.0, 8.9, { speed: 5.5 });
          // the camera stays behind for a moment
          await camTo(-3.3, -2.0, 4.6, 2);
          gp.setPose('wave');
          await wait(1.4);
          gp.setPose('sit', { h: 0.45 });
          const watch = pocketWatch();
          holdIn(gp, watch, { y: -0.04 });
          gp.setPose('read', { h: 0.45 });
          await wait(2.2);
          drop(watch);
          gp.setPose('sit', { h: 0.45 });
          await wait(0.8);
          lose('grandpaPorch', 'Grandpa’s watch');
          G.achieve?.('said_later', 'Later', 'Tell Grandpa you’ll sit with him later');
          b.place(4.0, 8.8, Math.PI / 2);
          th.place(14, 8.8); th.root.visible = false;
        }
        await camFollow(b, 13);
      },
    },
    {
      id: 'home', kind: 'story', label: 'Head home for dinner', at: [-5.0, 5.4], radius: 1.6,
      requires: ['grandpaPorch'], when: (ctx) => littlesDone(ctx) >= 4 || clockOver(ctx),
      caption: 'The streetlights coming on',
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom, gp = ctx.grandpa;
        const F = G.state.flags;
        mood('summerDusk', 6, { exposure: 1.25, sunIntensity: 2.4, hemiIntensity: 1.3 });
        intensity(0.25, 4);
        amb({ birds: 0.15, crickets: 0.45, wind: 0.2 }, 5);
        getOff(ctx);
        await b.walkTo(-4.7, 5.6); b.faceNow(-5, -3);
        mom.setPose('idle'); mom.place(-5, -2.9, 0);
        if (!F.satWithGrandpa) { gp.root.visible = false; }
        await camTo(-4.8, 1.8, 9, 2);
        await say(mom, 'Dinner! Wash your hands!');
        await say(b, 'Coming!');
        // turn around: the lights come on down the whole length of town
        b.faceNow(8, 9);
        await camTo(14, 4.2, 14, 3);
        for (const L of ctx.r.lamps) { await wait(0.45); L.off.visible = false; L.on.visible = true; sfx('soft', { deg: 5, vol: 0.5 }); }
        await stillness({ seconds: 4, label: 'Watch them.' });
        await lower('The streetlights came on one by one, all the way to the edge of town. You’d seen them do it a thousand times.');
        await lower('You stopped and watched anyway.');
        await keep('home', 'The streetlights coming on', { window: 10 });
        G.achieve?.('streetlights', 'One by one', 'Watch the streetlights come on');
        await camTo(-4.2, -0.2, 7.5, 2.5);
        if (F.satWithGrandpa) {
          await say(gp, 'Night, kiddo. Wind it in the morning.');
        } else {
          await lower('Grandpa had already gone in. That was alright. You’d sit with him tomorrow.');
        }
        ctx.def.speedMul = 1;
        await fadeOut(3.5, '#1c1a24');
      },
    },
  ],
  final: 'home',
  async outro(ctx) { ctx.def.speedMul = 1; },
};

// ---------------------------------------------------------------------
// III.2 — That autumn: rain, an empty bench, and paper lanterns
// ---------------------------------------------------------------------
const THEO_MOM = { skin: C.skin[3], hair: 0x1e1612, hairStyle: 'curly', shirt: 0x8a6ab0, pants: 0x3a3a48, dress: true };

export const rain = {
  id: 'ch3-rain', chapter: 3,
  mood: 'rainyGrey', music: 'loss', intensity: 0.3,
  ambience: { rain: 0.85, wind: 0.3 },
  zoom: 9.5, surface: 'grass',
  hint: 'Take your time. Nobody is hurrying today.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildYard(ctx, { season: 'autumn', treeStage: 1, sandbox: false, flowers: true });
    ctx.r.tree.scale.setScalar(0.85);
    W.bounds = { minX: -12.6, maxX: 12.6, minZ: -4.4, maxZ: 10.2 };
    const b = ctx.me = makePlayer(13.4, -5.0, 1.5, Math.PI * 0.6);
    // your umbrella
    ctx.umb = P.umbrella(C.navy); ctx.umb.scale.setScalar(0.62); ctx.umb.position.set(0.2, 0.5, 0.12); b.root.add(ctx.umb);
    ctx.mom = person({ ...LOOKS.mom, shirt: 0x6a6a82 }, 44, 'Mom', 3.55, -1.2, 0.4);
    ctx.dad = person({ ...LOOKS.dad, shirt: 0x4a5a6a }, 46, 'Dad', 4.25, -1.05, -0.3);
    ctx.parentsUmb = P.umbrella(0x3a3a48); ctx.parentsUmb.scale.setScalar(0.78); W.add(ctx.parentsUmb, 3.9, -1.05, { y: 0.55 });
    ctx.dog = dog(12, -1.75, -2.0); ctx.dog.setPose('lie'); ctx.dog.wag = 0; ctx.dog.heading = ctx.dog.targetHeading = -0.4;
    ctx.theo = person({ ...LOOKS.theo, shirt: 0xf3d23a }, 13, 'Theo', 7.4, -3.4, 0.4);
    ctx.theoMom = person(THEO_MOM, 42, 'Theo’s mom', 9.0, -3.9, 0); ctx.theoMom.root.visible = false;
    // his hat and his glasses, left on the bench
    const hat = new THREE.Group();
    const crown = P.cyl(0.15, 0.17, 0.08, 9, 0x7a6a58); hat.add(crown);
    const brim = P.box(0.22, 0.02, 0.14, 0x6a5a4a); brim.position.set(0, 0.0, 0.16); hat.add(brim);
    W.add(hat, -3.55, -2.3, { y: 0.47, ry: 0.4 });
    const glasses = new THREE.Group();
    for (const sx of [-0.05, 0.05]) { const l = P.torus(0.035, 0.007, 4, 10, 0x2a2a2a); l.rotation.x = Math.PI / 2; l.position.x = sx; glasses.add(l); }
    W.add(glasses, -2.95, -2.3, { y: 0.47, ry: -0.3 });
    // rain, puddles, fallen leaves
    ctx.rainP = W.particlesOf('rain', { area: { w: 32, h: 12, d: 32 } });
    const r = rng(8);
    for (let i = 0; i < 10; i++) { const p = P.disc(1, 0x6c7a86, 10, 0.012); p.scale.set(r.range(0.3, 0.8), 1, r.range(0.2, 0.5)); W.add(p, r.range(-11, 11), r.range(-1.5, 9.6), { ry: r.range(0, 3) }); }
    for (let i = 0; i < 60; i++) { const l = P.patch(0.12, 0.08, r.pick([C.leafAutumn, C.leafAutumn2, C.leafAutumn3]), 0.014); W.add(l, r.range(-12, 12), r.range(-3.5, 6.5), { ry: r.range(0, 6.28) }); }
    ctx.leaves = W.particlesOf('leaves', { area: { w: 26, h: 6, d: 20 }, count: 30 });
    ctx.leaves.setOpacity(0.4);
    // lanterns waiting by the gate
    ctx.lanternBox = P.cardboardBox(0.5); W.add(ctx.lanternBox, -3.4, 8.3);
    skyDressing(ctx, { clouds: 10, y: -2, spread: 22, seed: 5 });
  },
  async intro(ctx) {
    await wait(0.5);
    await fadeIn(4);
    await lower('That autumn, the rain came early and stayed.');
    await lower('The house had been full of people for days. Casseroles. Quiet voices. Everyone kept touching your hair.');
  },
  moments: [
    {
      id: 'emptyBench', kind: 'story', label: 'Grandpa’s bench', at: [-3.2, -1.35], radius: 1.4, caption: 'His hat, still on the bench',
      async run(ctx) {
        const b = ctx.me;
        await b.walkTo(-4.65, -1.35); b.faceNow(-3.3, -2.3);
        await camTo(-3.5, -2.0, 4.0, 2.5);
        amb({ rain: 1, wind: 0.35 }, 2);
        await stillness({ seconds: 5, label: 'Stay a moment.' });
        await lower('His hat was still on the bench. His glasses, folded beside it, the way he always left them.');
        await lower('Nobody could bring themselves to move them.');
        await keep('emptyBench', 'His hat, still on the bench');
        amb({ rain: 0.85, wind: 0.3 }, 2);
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'biscuitWaits', label: 'Biscuit, by the bench', at: [-1.3, -1.25], when: (ctx) => !ctx.done('rainTree'), caption: 'Biscuit, still waiting',
      async run(ctx) {
        const b = ctx.me, d = ctx.dog;
        await b.walkTo(-1.35, -1.4); b.faceNow(d.position.x, d.position.z);
        b.setPose('crouch');
        await camTo(-1.8, -1.8, 4.2, 1.5);
        await lower('Every afternoon at four, Biscuit still went and lay down by the bench, and watched the gate.');
        await hold({ label: 'Hold Space to sit with him', seconds: 3.5, onProgress: (p, h) => { d.wag = h ? 0.25 : 0; } });
        b.setPose('sitGround');
        await stillness({ seconds: 4, label: 'Wait with him.' });
        await lower('You waited with him. Neither of you said what you were waiting for.');
        await keep('biscuitWaits', 'Biscuit, still waiting');
        b.setPose('idle');
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'theoSorry', label: 'Theo, waiting by his house', anchor: (ctx) => ctx.theo, offset: [-0.6, 0, 0.6], when: (ctx) => !ctx.done('rainTree'), caption: 'Theo, in the rain',
      async run(ctx) {
        const b = ctx.me, th = ctx.theo;
        await b.walkTo(th.position.x - 0.8, th.position.z + 0.5); b.faceChar(th); th.faceChar(b);
        await camTo(th.position.x - 0.4, th.position.z + 0.2, 4.6, 1.5);
        await say(th, 'Hey.');
        await say(b, 'Hey.');
        await say(th, 'My mom said I should leave you alone. But.');
        await say(th, 'I’m sorry. About your grandpa.');
        await say(th, 'He always gave me the butterscotch ones. Even after I said I didn’t like them.');
        await say(th, 'I did like them.');
        await stillness({ seconds: 4, label: 'Stand in the rain together.' });
        await lower('Theo stood in the rain with you for a long time, with his hood up and his hands in his pockets, and didn’t say anything else. It was the right thing to say.');
        await keep('theoSorry', 'Theo, in the rain');
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'rainTree', kind: 'story', label: 'Go to Mom and Dad, by the tree', at: [3.9, -0.3], radius: 1.4, requires: ['emptyBench'], caption: 'Under one umbrella',
      async run(ctx) {
        const b = ctx.me, mom = ctx.mom, dad = ctx.dad, W = ctx.world;
        const F = G.state.flags;
        await b.walkTo(3.9, -0.45); b.faceNow(4, -2.2);
        mom.faceNow(4, -2.2); dad.faceNow(4, -2.2);
        mom.setPose('cry');
        await camTo(3.9, -1.2, 4.6, 2);
        await lower('Mom was crying, very quietly, the way grown-ups do when they think nobody can tell.');
        // close your umbrella; step in under theirs
        b.root.remove(ctx.umb);
        await b.walkTo(3.9, -0.95); b.faceNow(4, -2.2);
        await hold({
          label: 'Hold their hands', seconds: 3.5,
          onProgress: (p) => { if (p > 0.5) { mom.setPose('idle'); } },
        });
        mom.setPose('idle'); mom.faceChar(b); dad.faceChar(b); mom.lookAt(b); dad.lookAt(b);
        await stillness({ seconds: 4, label: 'Stay.' });
        let stopTick = () => {};
        if (F.satWithGrandpa || F.hasWatch) {
          const watch = pocketWatch(); holdIn(b, watch, { y: -0.04 });
          b.setPose('reachForward');
          stopTick = ticking(true);
          await lower('You had his watch in your pocket. It was still ticking.');
          await say(mom, 'He gave you that? Oh…');
          await say(mom, 'Good. That’s good. He’d want it to keep going.');
        } else {
          await lower('You always thought there would be a later.');
        }
        await say(mom, 'You planted this with him. Do you remember?');
        await say(b, 'He said it would be taller than him one day.');
        await say(dad, 'It will be.');
        await keep('rainTree', 'Under one umbrella');
        G.achieve?.('one_umbrella', 'Under one umbrella', 'Hold your parents’ hands in the rain');
        stopTick();
        b.setPose('idle');
        // the rain stops
        mood('autumnEvening', 10);
        ctx.rainP.setOpacity(0);
        ctx.leaves.setOpacity(1);
        amb({ rain: 0, wind: 0.2, birds: 0.25 }, 8);
        music('rainHope', { intensity: 0.3 });
        await wait(3);
        dad.setPose('reach');
        await say(dad, 'Look. It’s stopped.');
        W.remove(ctx.parentsUmb);
        dad.setPose('idle');
        mom.setPose('laugh');
        await say(mom, 'That would be him. Showing off.');
        mom.setPose('idle');
        await say(mom, 'Come on. Theo’s mom brought the lanterns.');
        // everyone gathers at the gate
        ctx.theoMom.root.visible = true; ctx.theoMom.place(-2.4, 8.6, Math.PI);
        ctx.theo.place(-3.0, 8.9, Math.PI);
        mom.walkTo(-4.5, 8.7); dad.walkTo(-5.4, 8.5);
        await camFollow(b, 9.5);
      },
    },
    {
      id: 'lanterns', kind: 'story', label: 'The lanterns', at: [-4.0, 7.9], radius: 1.4, requires: ['rainTree'], caption: 'For Grandpa',
      async run(ctx) {
        const b = ctx.me, W = ctx.world;
        const F = G.state.flags;
        const people = [ctx.mom, ctx.dad, ctx.theo, ctx.theoMom];
        await b.walkTo(-3.9, 8.4);
        people.forEach((p, i) => { p.place([-4.6, -5.5, -2.9, -2.2][i], [8.9, 8.5, 9.0, 8.6][i]); p.faceNow(-3.8, 9.6); });
        b.faceNow(-3.8, 9.6);
        await camTo(-3.7, 7.6, 6.2, 2);
        await say(ctx.theoMom, 'One each. Fold it the way I showed Theo — it’s easy.', { name: 'Theo’s mom' });
        // fold your own lantern
        const mine = P.lantern(0xffb36b, false); mine.scale.setScalar(0.25);
        const front = () => new THREE.Vector3(b.position.x + Math.sin(b.heading) * 0.32, 0.95, b.position.z + Math.cos(b.heading) * 0.32);
        mine.position.copy(front()); W.root.add(mine);
        b.setPose('reachForward');
        await sequence({
          label: 'Fold the paper', keys: ['up', 'left', 'right', 'down'],
          onStep: (i) => { const s0 = mine.scale.x; tween(0.4, (t) => mine.scale.setScalar(s0 + (0.25 + (i + 1) * 0.19 - s0) * t)); sfx('rustle'); },
        });
        const opts = ['“Thank you.”'];
        const keys = ['thanks'];
        if (F.satWithGrandpa || F.hasWatch) { opts.push('“I’ll wind it every morning.”'); keys.push('watch'); }
        else { opts.push('“Sorry I said later.”'); keys.push('sorry'); }
        opts.push('“Say hi to the stars.”'); keys.push('stars');
        const w = await choose('Theo’s mom gives you a marker. What do you write on it?', opts);
        F.lanternWords = keys[w];
        await hold({ label: 'Hold to light it', seconds: 2.5 });
        W.root.remove(mine);
        const colors = [0xffb36b, 0xffc87a, 0xff9a6a, 0xffd59a, 0xffbf80];
        const lit = P.lantern(0xffb36b, true); lit.position.copy(front()); W.root.add(lit);
        sfx('lantern');
        // everyone else lights theirs
        const lanterns = [{ obj: lit, ph: 0, sp: 0.42 }];
        people.forEach((p, i) => { const l = P.lantern(colors[(i + 1) % colors.length], true); l.position.set(p.position.x + Math.sin(p.heading) * 0.35, p.height * 0.6, p.position.z + Math.cos(p.heading) * 0.35); W.root.add(l); lanterns.push({ obj: l, ph: i + 1, sp: 0.36 + i * 0.03 }); p.setPose('reachForward'); });
        // and, further down the street, the neighbours
        const r = rng(12);
        for (let i = 0; i < 9; i++) { const l = P.lantern(r.pick(colors), true); l.position.set(-11 + i * 2.6 + r.range(-0.5, 0.5), 1.0 + r.range(0, 1.5), 9.5 + r.range(-0.6, 0.6)); W.root.add(l); lanterns.push({ obj: l, ph: i * 1.7, sp: r.range(0.3, 0.5), far: true }); }
        await wait(1);
        await tap({ count: 1, label: 'Let it go' });
        b.setPose('reach');
        people.forEach((p) => p.setPose('reach'));
        sfx('lantern', { delay: 0.3 });
        intensity(0.55, 6);
        const base = lanterns.map((l) => l.obj.position.clone());
        let tt = 0;
        const rise = loop((dt) => {
          tt += dt;
          lanterns.forEach((l, i) => {
            const p = base[i];
            l.obj.position.set(p.x + Math.sin(tt * 0.5 + l.ph) * 0.35 + tt * 0.06, p.y + tt * l.sp, p.z + Math.cos(tt * 0.4 + l.ph) * 0.25 - tt * 0.05);
          });
        });
        await wait(2.2);
        people.forEach((p) => p.setPose('idle')); b.setPose('idle');
        // follow them up into the evening
        await G.renderer.cameraTo(new THREE.Vector3(-3.4, 2.6, 7.4), 8, 6);
        await keep('lanterns', 'For Grandpa', { window: 10 });
        G.achieve?.('for_grandpa', 'For Grandpa', 'Let a paper lantern go');
        await G.renderer.cameraTo(new THREE.Vector3(-3.0, 5.5, 7.0), 9, 6);
        await fadeOut(4, '#16121a');
        rise();
        await narrate([
          'That was the year you learned that time runs out.',
          'Not all at once. Quietly. A little every day —',
          F.satWithGrandpa || F.hasWatch ? 'like a watch, ticking in your pocket.' : 'while you’re busy saying later.',
        ], { minTime: 1.5 });
        G.ui.clearNarration();
        await wait(1.5);
      },
    },
  ],
  final: 'lanterns',
};
