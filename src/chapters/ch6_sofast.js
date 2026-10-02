// CHAPTER VI — SO FAST (40–55)
// One yard. The seasons spin faster and faster; your child grows a little
// every second; moments flicker up and vanish before you can reach them all.
// Then the car is packed, and everything stops.
import * as THREE from 'three';
import * as P from '../engine/props.js';
import { C } from '../engine/props.js';
import { G, tween, rng, lerp, clamp, until, child, me, fmt } from '../engine/game.js';
import { LOOKS, youLook, childLook } from '../engine/character.js';
import { narrate, lower, say, think, wait, keep, lose, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, intensity, hop, choose, shake } from '../engine/story.js';
import { stillness, tap, hold, balance, sequence } from '../engine/minigames.js';
import { buildYard, buildNursery, makePlayer, person, skyDressing } from './places.js';

const ZOOM = 15;
const LAPSE = 250;               // seconds of life at full speed (slows to 30% while you're in a moment)
const TREE = [4, -2.2];
const GREY = new THREE.Color(0xd9d6d2);
const FF = { tilt: 0.95, vignette: 0.48, contrast: 1.06 };
const SEASONS = [
  { name: 'spring', mood: 'springMorning', ground: C.grassSpring, field: 0, extra: { ...FF, saturation: 0.9 } },
  { name: 'summer', mood: 'summerDay', ground: C.grass, field: -1, extra: { ...FF, saturation: 0.95 } },
  { name: 'autumn', mood: 'goldenAfternoon', ground: C.grassAutumn, field: 1, extra: { ...FF, saturation: 0.95, warmth: 0.45 } },
  { name: 'winter', mood: 'winterMorning', ground: C.snow, field: 2, extra: { ...FF, saturation: 0.55 } },
];
const SEASON_NAMES = ['spring', 'summer', 'autumn', 'winter'];

function hideEggs(ctx) { for (const h of ctx.world.hotspots) if (h.m?.hidden) { h.obj.removeFromParent(); h.ring.removeFromParent(); } }
function onFrame(ctx, fn) { const o = new THREE.Object3D(); o.userData.update = fn; ctx.world.add(o); return o; }
function offFrame(ctx, o) { ctx.world.remove(o); }

// a montage cut: a soft white flash and a breath of air
function cut() { G.ui.flash(0.5, 0.35); sfx('whoosh', { vol: 0.25 }); }
// stop whatever the family was doing so a moment can use them
function prep(ctx) {
  ctx.swinging = false;
  for (const c of [ctx.kid, ctx.sam]) { c.stop(); c.follow(null); c.setPose('idle'); c.extraY = 0; c.tilt = 0; c.root.visible = true; c.lookAt(null); }
  ctx.me.setPose('idle'); ctx.me.tilt = 0;
}
async function back(ctx) {
  prep(ctx);
  await camFollow(ctx.me, ZOOM);
}
function kidAge(ctx) { return 10 + 8 * (ctx.lt / LAPSE); }

// ---------------------------------------------------------------------
// The child's drawing, still pinned on the wall years later.
// ---------------------------------------------------------------------
function drawingTexture() {
  return P.canvasTex(512, 384, (c, W, H) => {
    c.fillStyle = '#fbf6ea'; c.fillRect(0, 0, W, H);
    c.lineCap = 'round'; c.lineJoin = 'round';
    const r = rng(19);
    const wob = (pts, col, w = 7) => { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); pts.forEach(([x, y], i) => { const jx = x + r.range(-2.5, 2.5), jy = y + r.range(-2.5, 2.5); if (i) c.lineTo(jx, jy); else c.moveTo(jx, jy); }); c.stroke(); };
    const circle = (x, y, rad, col, w = 6, fill = null) => { c.beginPath(); for (let i = 0; i <= 14; i++) { const a = (i / 14) * Math.PI * 2; const rr = rad + r.range(-2, 2); const px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr; if (i) c.lineTo(px, py); else c.moveTo(px, py); } if (fill) { c.fillStyle = fill; c.fill(); } c.strokeStyle = col; c.lineWidth = w; c.stroke(); };
    // grass and sky
    wob([[0, 330], [80, 326], [170, 334], [260, 324], [360, 332], [512, 326]], '#6fae4a', 10);
    for (let x = 10; x < 512; x += 22) wob([[x, 332], [x + 4, 316]], '#6fae4a', 4);
    // the sun, with a face
    circle(440, 64, 34, '#f0b020', 7, '#f8d64a');
    for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 2; wob([[440 + Math.cos(a) * 44, 64 + Math.sin(a) * 44], [440 + Math.cos(a) * 64, 64 + Math.sin(a) * 64]], '#f0b020', 6); }
    c.fillStyle = '#5a3b2a'; c.beginPath(); c.arc(430, 58, 4, 0, 7); c.arc(452, 58, 4, 0, 7); c.fill();
    wob([[428, 74], [440, 82], [454, 74]], '#5a3b2a', 4);
    // the house
    wob([[40, 330], [40, 200], [150, 200], [150, 330]], '#c9694c', 7);
    wob([[30, 204], [95, 140], [160, 204]], '#8a3a2a', 8);
    wob([[82, 330], [82, 280], [110, 280], [110, 330]], '#3d4f7a', 6);
    // the tree with a swing
    wob([[300, 330], [304, 200]], '#7d5a43', 14);
    circle(302, 160, 62, '#4f8f3a', 7, '#7fbf5a');
    wob([[330, 196], [332, 262]], '#7d5a43', 3); wob([[360, 194], [362, 262]], '#7d5a43', 3); wob([[326, 264], [366, 264]], '#c9694c', 7);
    // three people holding hands: tall, small, tall
    const person = (x, h, col, hair) => {
      circle(x, 330 - h - 16, 15, '#5a3b2a', 4, '#f6d3b8');
      if (hair) wob(hair.map(([dx, dy]) => [x + dx, 330 - h - 16 + dy]), '#3a2a22', 5);
      wob([[x, 330 - h], [x, 330 - h * 0.45]], col, 7);
      wob([[x, 330 - h * 0.45], [x - 12, 330]], col, 6); wob([[x, 330 - h * 0.45], [x + 12, 330]], col, 6);
      c.fillStyle = '#2a2224'; c.beginPath(); c.arc(x - 5, 330 - h - 18, 2.5, 0, 7); c.arc(x + 5, 330 - h - 18, 2.5, 0, 7); c.fill();
      wob([[x - 6, 330 - h - 10], [x, 330 - h - 6], [x + 6, 330 - h - 10]], '#b84a3a', 3);
      return [x, 330 - h * 0.85];
    };
    const a = person(190, 112, G.state.identity === 'father' ? '#6f9fd0' : '#e58f7a', G.state.identity === 'father' ? [[-12, -12], [0, -17], [12, -12]] : [[-14, -10], [-16, 14], [14, 14], [14, -10]]);
    const k = person(240, 66, '#f2a3b5', [[-10, -12], [10, -12]]);
    const s = person(282, 108, '#5fa38a', [[-14, -8], [-6, -16], [6, -16], [14, -8]]);
    wob([a, [240, 330 - 66 * 0.8]], '#5a3b2a', 4); wob([[240, 330 - 66 * 0.8], s], '#5a3b2a', 4);
    // a heart, and the words
    c.fillStyle = '#e04a5a'; c.beginPath(); c.moveTo(240, 196); c.bezierCurveTo(222, 178, 214, 198, 240, 214); c.bezierCurveTo(266, 198, 258, 178, 240, 196); c.fill();
    c.fillStyle = '#3d4f7a'; c.font = 'bold 40px "Comic Sans MS", "Chalkboard SE", cursive';
    c.save(); c.translate(36, 70); c.rotate(-0.05); c.fillText('MY FAMILY', 0, 0); c.restore();
    c.font = 'bold 22px "Comic Sans MS", "Chalkboard SE", cursive'; c.fillStyle = '#c9694c';
    c.fillText(`${child().toUpperCase()}, AGE 6`, 330, 372);
    c.font = 'bold 20px "Comic Sans MS", cursive'; c.fillStyle = '#5a3b2a'; c.fillText('ME', 228, 150);
  });
}

// ---------------------------------------------------------------------
// The moments that flicker up during the time-lapse. k = when (0..1 of the lapse).
// Some arrive together, far apart: you can't be in two places at once.
// ---------------------------------------------------------------------
const FLICKER = [
  {
    id: 'lunchNote', k: 0.02, at: [-3.2, -1.35], label: 'A note in your lunchbox', caption: 'The note in your lunchbox',
    async run(ctx) {
      const b = ctx.me;
      b.place(-3.2, -2.15, 0); b.setPose('sit', { h: 0.45 });
      await camTo(-3.2, -1.9, 6, 1.2);
      sfx('rustle');
      await lower('A note, folded four times, under your sandwich.');
      await lower('“Good luck at work. I love you more than pizza. (Not more than pizza with pineapple.) — {child}”');
      await keep('lunchNote', 'The note in your lunchbox');
    },
  },
  {
    id: 'jokes', k: 0.08, at: [0.5, 2.6], label: 'Tell {child} a terrible joke', caption: 'They still laughed at your jokes, once',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut(); kid.place(b.position.x + 0.7, b.position.z - 0.7); kid.faceChar(b); b.faceChar(kid);
      await camTo(b.position.x + 0.4, b.position.z + 0.2, 6, 1);
      const i = await choose('', ['“What do you call a sleeping dinosaur? A dino-snore.”', '“Why did the scarecrow win a prize? He was outstanding in his field.”']);
      await say(b, i === 0 ? 'A dino-snore.' : 'He was outstanding… in his field.');
      kid.setPose('laugh'); sfx('giggle'); sfx('giggle', { delay: 0.4 });
      await say(kid, 'That’s so bad. That’s SO bad. Tell it again.');
      await lower('They laughed until they snorted, and then laughed at the snort.');
      await keep('jokes', 'They still laughed at your jokes, once');
    },
  },
  {
    id: 'soupRecipe', k: 0.15, at: [-7.4, 1.6], label: 'Cook with {child}', caption: 'Teaching them Mom’s soup recipe',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      b.place(-8.35, 0.4); kid.place(-7.6, -0.35); b.face(-7.4, 0.6); kid.face(-7.4, 0.6);
      await camTo(-7.6, 0.4, 5.6, 1);
      await say(b, 'Your grandma’s soup. Her mother taught her. She taught me. Now it’s your turn.');
      await say(kid, 'Do I have to write it down?');
      await say(b, 'Just remember it.');
      await sequence({ label: 'Chop, stir, taste', keys: ['left', 'right', 'up', 'down'], onStep: () => sfx('tap') });
      kid.setPose('laugh');
      await say(kid, 'It tastes like Grandma’s kitchen.');
      await keep('soupRecipe', 'Teaching them Mom’s soup recipe');
    },
  },
  {
    id: 'schoolDance', k: 0.22, at: [-5.0, 5.9], label: '{child} is ready for the school dance', caption: 'Their first school dance',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      kid.setOutfit({ shirt: G.state.childKind === 'son' ? 0x2f3a5a : 0xb8a0e0 });
      kid.place(-5.0, 6.3); b.place(-4.6, 5.2); kid.faceChar(b); b.faceChar(kid);
      await camTo(-4.9, 5.7, 5.6, 1);
      await say(kid, 'Do I look stupid? Be honest. No — don’t be honest.');
      const i = await choose('', ['“You look perfect.”', '“You look like a grown-up. Stop it at once.”']);
      if (i === 1) { kid.setPose('laugh'); await wait(0.8); kid.setPose('idle'); }
      await say(kid, 'Don’t take a picture. {me}. Do NOT take a picture.');
      await keep('schoolDance', 'Their first school dance');
      await kid.walkTo(-5.0, 8.4);
      ctx.restyle(true);
    },
  },
  {
    id: 'slammedDoor', k: 0.29, at: [-5.0, -2.45], label: 'Raised voices by the front door', caption: 'The slammed door',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      const doorVoice = { headWorld: () => new THREE.Vector3(-5, 2.3, -3.6) };
      kid.root.visible = false;
      await camTo(-5.0, -2.6, 6, 0.8);
      await say(doorVoice, 'You don’t understand ANYTHING!', { name: child() });
      sfx('door', { vol: 2.5 }); shake(0.35);
      await wait(1);
      const i = await choose('The door is shut. Behind it, music, turned up loud.', ['Knock.', 'Sit down outside and wait.']);
      G.state.flags.ch6Door = i === 0 ? 'knocked' : 'waited';
      if (i === 0) {
        b.place(-5.0, -2.55, Math.PI);
        sfx('tap'); await wait(0.25); sfx('tap'); await wait(0.25); sfx('tap');
        await say(doorVoice, 'GO AWAY.', { name: child() });
        const j = await choose('', ['“I’m sorry. I was wrong.”', '“I’m not going anywhere.”']);
        if (j === 0) {
          await wait(1.2); sfx('door');
          kid.root.visible = true; kid.place(-5.0, -3.15); kid.faceChar(b); b.faceChar(kid);
          await say(kid, 'You were a bit wrong. Not completely.');
          await say(b, 'I’ll take a bit.');
          kid.setPose('hug'); b.setPose('hug'); await wait(1.2);
        } else {
          b.setPose('sitGround');
          await lower('You sat down with your back against the door. After a while, the music got quieter.');
          await stillness({ seconds: 4, label: 'Stay.' });
          await say(doorVoice, '…Are you still there?', { name: child(), small: true });
          await say(b, 'Always.');
        }
        G.achieve?.('c6_door_knock', 'Knock Knock', 'Knocked on the slammed door.');
      } else {
        b.place(-5.0, -2.25, Math.PI); b.setPose('sitGround');
        await stillness({ seconds: 5, label: 'Wait. Don’t knock.' });
        await lower('Ten minutes later: a small knock, from the other side.');
        sfx('tap'); await wait(0.3); sfx('tap');
        await say(doorVoice, 'Sorry.', { name: child(), small: true });
        await say(b, 'Me too.');
        G.achieve?.('c6_door_wait', 'From the Other Side', 'Waited outside the slammed door until they knocked first.');
      }
      await keep('slammedDoor', 'The slammed door');
      kid.root.visible = true; kid.place(-4.4, -2.6);
    },
  },
  {
    id: 'dadBirthday', k: 0.36, at: [1.0, 2.2], label: 'Dad’s birthday', caption: 'Your father’s last birthday',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid, sam = ctx.sam, dad = ctx.dad, mom = ctx.mom;
      cut();
      ctx.party.visible = true;
      dad.root.visible = true; mom.root.visible = true;
      dad.place(1.8, 0.45, 0); mom.place(1.0, 0.6, 0.6); kid.place(2.6, 0.9); sam.place(2.4, 1.9);
      b.place(1.1, 1.9); [b, kid, sam, mom].forEach((c) => c.face(1.8, 1.2));
      dad.setPose('sit', { h: 0.45 });
      await camTo(1.8, 1.1, 5.6, 1);
      await say(dad, 'Seventy-four. When did that happen? I was forty last week.');
      await say(kid, 'Make a wish, Grandpa!');
      await hold({ label: 'Hold Space while he makes his wish', seconds: 2.5 });
      sfx('blow');
      ctx.party.userData.flames.forEach((f) => { f.visible = false; });
      sfx('applause', { vol: 0.4 });
      dad.lookAt(kid);
      await say(dad, 'Look at you. Taller than your {me} was at your age. Much better-looking, too.');
      await lower('He looked at {child} for a long time, the way you look at the sea.');
      await lower('It was his last birthday. Nobody knew. That was the kindness of it.');
      await keep('dadBirthday', 'Your father’s last birthday');
      cut();
      ctx.party.visible = false; ctx.party.userData.flames.forEach((f) => { f.visible = true; });
      dad.root.visible = false; mom.root.visible = false; dad.lookAt(null);
    },
  },
  {
    id: 'drivingLesson', k: 0.44, at: [1.6, 8.3], label: '{child} wants a driving lesson', caption: 'The driving lesson (you screamed)',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid, sam = ctx.sam, car = ctx.car;
      cut();
      b.root.visible = false; kid.root.visible = false;
      sam.place(-4.0, -1.6); sam.face(0, 9);
      const home = car.position.clone();
      const inCar = { headWorld: () => car.position.clone().setY(1.6) };
      await camFollow(car, 7.5);
      sfx('engine');
      let lane = 0;
      const roll = onFrame(ctx, (dt) => { if (car.position.x < 10) car.position.x += dt * 1.3; car.position.z = home.z + lane * 0.6; car.rotation.y = -lane * 0.15; });
      say(inCar, 'Mirror. Signal. Mirror. MIRROR.', { name: 'You', passive: true, hold: 2.2 });
      await balance({ label: 'Keep it in the lane — ← →', seconds: 4, difficulty: 1.1, onUpdate: (x) => { lane = x; } });
      lane = 0;
      await say(inCar, 'BRAKE. BRAKE. BRAKE!', { name: 'You' });
      await say(inCar, 'I AM BRAKING!', { name: child() });
      sam.setPose('laugh');
      await wait(0.6);
      await lower('Sam laughed so hard on the porch they had to sit down.');
      offFrame(ctx, roll);
      await keep('drivingLesson', 'The driving lesson (you screamed)');
      cut();
      car.position.copy(home); car.rotation.y = 0;
      b.root.visible = true; kid.root.visible = true;
      b.place(home.x + 0.6, 8.2); kid.place(home.x - 0.6, 8.2);
    },
  },
  {
    id: 'porchTalk', k: 0.52, group: 'ch6NightChoice', at: [-3.2, -1.35], label: 'A late-night talk on the porch', caption: 'A late-night talk on the porch',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      ctx.moodHeld = true; mood('summerNight', 1.5, { ...FF, hemiIntensity: 1.7, hemiSky: 0x7a86c8, sunIntensity: 1.5, exposure: 1.15 });
      ctx.stars.setOpacity(1);
      b.place(-3.6, -2.15, 0); kid.place(-2.8, -2.15, 0);
      b.setPose('sit', { h: 0.45 }); kid.setPose('sit', { h: 0.45 });
      amb({ crickets: 0.7, wind: 0.1 }, 2);
      await camTo(-3.2, -1.9, 5.4, 1);
      await say(kid, 'Can I ask you something? Were you ever scared? Of, like… getting it all wrong?');
      const i = await choose('', ['“Every single day.”', '“I still am.”', '“Yes. And you get some of it wrong anyway. And it’s alright.”']);
      if (i === 0) await say(kid, 'Even now? You’re like… forty-five.');
      else if (i === 1) await say(kid, 'Huh. I thought you’d say no.');
      else await say(kid, 'That’s… actually really helpful. Weirdly.');
      await stillness({ seconds: 4, label: 'Stay up a little longer.' });
      await keep('porchTalk', 'A late-night talk on the porch');
      ctx.stars.setOpacity(0); amb({ birds: 0.3, wind: 0.2 }, 2);
      ctx.moodHeld = false; ctx.applySeason(1.5);
    },
  },
  {
    id: 'shoulderSleep', k: 0.52, group: 'ch6NightChoice', at: [9.2, 3.0], label: '{child} is dozing on the garden bench', caption: 'They fell asleep on your shoulder — the last time',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      kid.place(9.45, 1.95, 0); b.place(8.95, 1.95, 0);
      kid.setPose('sit', { h: 0.45 }); b.setPose('sit', { h: 0.45 });
      kid.tilt = 0.32;
      await camTo(9.2, 2.3, 5.2, 1);
      await lower('A film neither of you was really watching. Their head got heavier and heavier.');
      await stillness({ seconds: 6, label: 'Don’t move. Don’t move.' });
      await lower('You didn’t know it was the last time. You never do.');
      await keep('shoulderSleep', 'They fell asleep on your shoulder — the last time');
      kid.tilt = 0;
    },
  },
  {
    id: 'heightMark', k: 0.6, at: [-4.2, -2.6], label: 'One more line on the door frame', caption: 'The last pencil line on the door frame',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      kid.place(-4.3, -3.45, 0); b.place(-3.55, -3.0); b.faceChar(kid);
      await camTo(-4.2, -3.0, 5, 1);
      await say(kid, 'Am I taller than you yet? Be honest.');
      await tap({ count: 1, label: 'Mark the line' });
      const line = P.box(0.22, 0.02, 0.02, 0x3a3440); ctx.world.add(line, -4.3, -3.66, { y: kid.height - 0.05 });
      sfx('tap');
      await say(b, 'Not yet.');
      await say(kid, 'Next year. You watch.');
      await lower('Next year, they were. You stopped marking the door after that.');
      await keep('heightMark', 'The last pencil line on the door frame');
    },
  },
  {
    id: 'heartbreak', k: 0.68, group: 'ch6EveningChoice', at: [2.0, 5.8], label: '{child} is sitting by the fence', caption: 'The first heartbreak',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      kid.place(2.0, 6.4, Math.PI * 0.85); kid.setPose('sitGround', { look: 0.45 });
      b.place(1.4, 6.3, Math.PI * 0.85); b.setPose('sitGround');
      await camTo(1.8, 6.0, 5, 1);
      await say(kid, 'It’s stupid. It’s so stupid. It doesn’t even matter.');
      const i = await choose('', ['Say nothing. Just sit with them.', '“It matters.”']);
      if (i === 0) await lower('You said nothing at all. It turned out to be exactly the right thing.');
      else { await say(kid, '…Yeah.'); await say(kid, 'Yeah. It does.'); }
      kid.tilt = 0.25;
      await stillness({ seconds: 4, label: 'Just sit.' });
      await keep('heartbreak', 'The first heartbreak');
    },
  },
  {
    id: 'sunsetCall', k: 0.68, group: 'ch6EveningChoice', at: [11.0, -0.8], label: '{child} is shouting for you to come and look', caption: 'Come and look at the sky',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      kid.place(11.2, -1.2); b.place(10.5, -0.6); kid.setPose('point'); kid.face(5, -8); b.face(5, -8);
      ctx.moodHeld = true; mood('summerDusk', 2, { ...FF, saturation: 1.1, bloom: 0.6 });
      await camTo(10.6, -1.2, 6, 1);
      await say(kid, 'Look! Quick, before it goes!');
      kid.setPose('idle');
      await stillness({ seconds: 4, label: 'Look.' });
      await lower('It went. It always does. But you looked.');
      await keep('sunsetCall', 'Come and look at the sky');
      ctx.moodHeld = false; ctx.applySeason(1.5);
    },
  },
  {
    id: 'letter', k: 0.77, at: [-6.0, 5.7], label: 'A letter in the mailbox', caption: 'The letter came',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid, sam = ctx.sam;
      cut();
      kid.place(-6.2, 5.9); b.place(-5.4, 5.3); kid.faceChar(b); b.faceChar(kid);
      sam.place(-4.6, 3.0);
      await camTo(-5.8, 5.4, 5.4, 1);
      sfx('rustle');
      await say(kid, 'It’s here. It’s — okay. Okay. I can’t open it. You open it.');
      await tap({ count: 1, label: 'Open the envelope' });
      sfx('rustle');
      kid.setPose('jump');
      await say(kid, 'I got in. I GOT IN!');
      sfx('yay'); sam.walkTo(-5.0, 4.9).then(() => sam.setPose('jump'));
      kid.setPose('hug'); b.setPose('hug'); kid.place(-5.75, 5.6); kid.faceChar(b);
      await think('Four hours away. Four hours is nothing.');
      await lower('Four hours is nothing, you told yourself. You told yourself that a lot, that year.');
      await keep('letter', 'The letter came');
    },
  },
  {
    id: 'gradCap', k: 0.9, group: 'ch6LastChoice', at: [0.5, 3.4], label: 'Graduation day', caption: 'Graduation cap in the air',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid, sam = ctx.sam;
      cut();
      kid.setOutfit({ shirt: 0x2a2a3a, pants: 0x2a2a3a });
      kid.place(0.5, 3.0); b.place(1.25, 2.35); sam.place(-0.2, 3.75);
      [b, sam].forEach((c) => c.faceChar(kid)); kid.face(1.5, 4);
      const cap = new THREE.Group(); const top = P.boxC(0.42, 0.03, 0.42, 0x1a1a22); cap.add(top); const band = P.cyl(0.16, 0.16, 0.1, 6, 0x1a1a22); band.position.y = -0.1; cap.add(band);
      const tassel = P.box(0.02, 0.14, 0.02, 0xf3d36b); tassel.position.set(0.18, -0.12, 0.18); cap.add(tassel);
      ctx.world.root.add(cap);
      const pos = () => kid.headWorld().add(new THREE.Vector3(0, -0.12, 0));
      cap.position.copy(pos());
      const stick = onFrame(ctx, () => cap.position.copy(pos()));
      await camTo(0.6, 3.4, 5.6, 1);
      await say(sam, 'Look at them. Look. When did that happen?');
      await say(kid, 'I did it! I actually did it!');
      await tap({ count: 1, label: 'Throw it!' });
      offFrame(ctx, stick);
      kid.setPose('jump'); sfx('fwip'); sfx('applause', { vol: 0.5 });
      const p0 = cap.position.clone();
      tween(2.4, (t) => { cap.position.set(p0.x + t * 0.4, p0.y + Math.sin(t * Math.PI) * 3.2, p0.z + t * 0.3); cap.rotation.y = t * 9; cap.rotation.x = Math.sin(t * 6) * 0.4; });
      await camZoom(7, 1.2);
      await keep('gradCap', 'Graduation cap in the air');
      ctx.world.root.remove(cap);
      ctx.restyle(true);
    },
  },
  {
    id: 'lastSwing', k: 0.9, group: 'ch6LastChoice', at: [5.7, -1.0], label: 'One last go on the swing', caption: 'One last go on the swing',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      ctx.swinging = true; ctx.swingAmp = 0.15;
      b.place(5.7, -0.4); b.face(5.7, -2.0);
      await camTo(5.7, -1.4, 5.6, 1);
      await say(kid, 'I’m way too big for this. I’m going to break it.');
      await say(kid, 'Push me anyway.');
      b.setPose('push');
      await tap({ count: 4, label: 'Push', onTap: (n) => { ctx.swingAmp = 0.15 + n * 0.08; sfx('creak'); } });
      await lower('The branch creaked. It held. It had always held.');
      await keep('lastSwing', 'One last go on the swing');
      ctx.swinging = false; ctx.swingAmp = 0.45;
    },
  },
  {
    id: 'readAgain', k: 0.9, group: 'ch6LastChoice', at: [-3.2, -1.35], label: '{child} wants a bedtime story — as a joke', caption: '“Read it again,” one last time',
    async run(ctx) {
      const b = ctx.me, kid = ctx.kid;
      cut();
      b.place(-3.6, -2.15, 0); kid.place(-2.8, -2.15, 0);
      b.setPose('read', { h: 0.45 }); kid.setPose('sit', { h: 0.45 }); kid.lookAt(b);
      await camTo(-3.2, -1.9, 5.4, 1);
      await say(kid, 'Read me a story. For old times’ sake. The one you always did.');
      const story = { dragon: 'the little dragon who was afraid of the dark', ocean: 'the whale who sang to the ocean', moon: 'the moon who came down to visit' }[G.state.flags.storyChoice] ?? 'the little bear who wouldn’t go to sleep';
      await say(b, `Once upon a time, there was ${story}…`);
      await lower('You did all the voices. They pretended to roll their eyes.');
      await say(kid, '…Read it again.');
      G.achieve?.('c6_read_it_again', 'Read It Again', 'Read your teenager one last bedtime story.');
      await keep('readAgain', '“Read it again,” one last time');
    },
  },
];

// stations: what the family does while you're not looking
function kidStation(ctx, r) {
  const a = kidAge(ctx);
  const opts = [];
  if (a < 14) opts.push('swing', 'swing', 'run', 'lie');
  if (a < 16) opts.push('read');
  if (a >= 13) opts.push('tree', 'gate', 'phone');
  if (a >= 16) opts.push('car', 'gate');
  const pick = opts[Math.floor(r() * opts.length)];
  const sw = ctx.swingSeat();
  switch (pick) {
    case 'swing': return { x: sw.x, z: sw.z + 0.6, dur: 7, enter: () => { ctx.swinging = true; }, exit: () => { ctx.swinging = false; } };
    case 'run': return { x: r.range(-2, 9), z: r.range(0, 6), speed: 3.6, dur: 0.3 };
    case 'lie': return { x: r.range(-1, 8), z: r.range(1, 5.5), dur: 5, enter: (c) => c.setPose('lieBack') };
    case 'read': return { x: -2.8, z: -1.6, dur: 6, enter: (c) => { c.place(-2.8, -2.15, 0); c.setPose('read', { h: 0.45 }); } };
    case 'tree': return { x: 5.3, z: -0.9, dur: 6, enter: (c) => { c.face(9, 3); c.setPose('sitGround'); } };
    case 'phone': return { x: r.range(6, 10), z: 6.2, dur: 5, enter: (c) => { c.face(c.position.x - 1, 5); c.setPose('think'); } };
    case 'car': return { x: -0.4, z: 8.3, dur: 6, enter: (c) => { c.face(-1.0, 9.3); c.setPose('crouch'); } };
    case 'gate': default: return { x: -5.0, z: 8.4, dur: 4, enter: async (c) => { await c.walkTo(13.0, 9.2); if (!G.director.inMoment && ctx.lapseOn) c.root.visible = false; }, exit: (c) => { c.root.visible = true; c.place(-5.0, 8.4); } };
  }
}
function samStation(ctx, r) {
  const kidOnBench = ctx.kid.pose === 'read';
  const opts = ['garden', 'water', 'mailbox', 'stand'];
  if (!kidOnBench) opts.push('bench', 'bench');
  const pick = opts[Math.floor(r() * opts.length)];
  switch (pick) {
    case 'garden': return { x: -9.0 + r.range(-1, 1), z: -2.6, dur: 6, enter: (c) => { c.face(c.position.x, -3.4); c.setPose('crouch'); } };
    case 'water': return { x: 3.2, z: -1.2, dur: 5, enter: (c) => { c.face(TREE[0], TREE[1]); c.setPose('crouch'); } };
    case 'mailbox': return { x: -6.0, z: 5.8, dur: 3, enter: (c) => c.face(-6.4, 6.4) };
    case 'bench': return { x: -3.6, z: -1.6, dur: 7, enter: (c) => { c.place(-3.6, -2.15, 0); c.setPose('read', { h: 0.45 }); } };
    case 'stand': default: return { x: r.range(-3, 3), z: r.range(0, 4), dur: 4, enter: (c) => c.faceChar(ctx.kid) };
  }
}
async function lifeLoop(ctx, c, station, seed) {
  const W = ctx.world; const r = rng(seed);
  while (G.world === W && !ctx.lapseDone) {
    if (G.director.inMoment || !ctx.lapseOn) { await wait(0.4); continue; }
    const st = station(ctx, r);
    c.setPose('idle'); c.root.visible = true;
    await c.walkTo(st.x, st.z, { speed: st.speed });
    if (G.world !== W || G.director.inMoment || ctx.lapseDone) continue;
    if (st.enter) await st.enter(c);
    if (G.world !== W || G.director.inMoment || ctx.lapseDone) continue;
    await wait(st.dur);
    if (st.exit && !G.director.inMoment && !ctx.lapseDone) st.exit(c);
    if (G.world !== W || G.director.inMoment || ctx.lapseDone) continue;
    c.setPose('idle');
  }
}

// a dynamic moment appears somewhere in the yard, and fades if you don't get there
function spawn(ctx, def) {
  const k = ctx.lt / LAPSE;
  const h = ctx.world.hotspot({ id: def.id, label: fmt(def.label), kind: 'little', x: def.at[0], z: def.at[1], radius: 1.3 });
  h.m = { id: def.id, label: def.label, kind: 'little', caption: def.caption, run: async (c) => { if (def.group) G.state.flags[def.group] = def.id; prep(c); await def.run(c); await back(c); } };
  ctx.live.push({ h, def, t: def.life ?? lerp(11, 6.5, k) });
  if (G.director.control) sfx('chime', { vol: 0.45 });
}
function expire(ctx, s) {
  if (s.h.done) return;
  s.h.complete();
  lose(s.def.id, s.def.caption);
  ctx.world.burst(new THREE.Vector3(s.h.position.x, 1.0, s.h.position.z), { color: 0xd8d4ce, count: 18, speed: 0.8, life: 1.2, size: 0.25 });
  sfx('lost', { vol: 0.2 });
}

// ---------------------------------------------------------------------
export const sofast = {
  id: 'ch6-sofast', chapter: 6,
  card: { num: 'VI', title: 'So Fast', ages: 'forty to fifty-five', quote: 'The days are long, everyone told you. The years are short.' },
  mood: 'fastForward', music: 'sofast', intensity: 0.3,
  ambience: { birds: 0.35, wind: 0.2 },
  zoom: ZOOM, surface: 'grass',
  hint: 'Everything moves faster now. Moments appear and fade. Catch what you can.',
  extraMoments: FLICKER.map((f) => [f.id, f.caption]),
  build(ctx) {
    const W = ctx.world;
    const R = ctx.r = buildYard(ctx, { season: 'summer', treeStage: 3, swing: true, flowers: true });
    // seasonal versions of the trees, swapped as the years spin
    R.tree.visible = false;
    ctx.variants = [];
    ctx.famTrees = SEASON_NAMES.map((s) => { const t = P.familyTree({ stage: 3, season: s, swing: true }); W.add(t, TREE[0], TREE[1]); t.visible = false; return t; });
    ctx.variants.push(ctx.famTrees);
    if (R.cherry) { R.cherry.visible = false; ctx.variants.push(SEASON_NAMES.map((s) => { const t = P.tree({ kind: 'blossom', season: s, size: 1.35, seed: 5 }); W.add(t, -10.5, -0.5); t.visible = false; return t; })); }
    const edge = [[-12, -8, 'round', 1.2], [11.5, -8.5, 'pine', 1.3], [12, -3, 'round', 1.1], [-12.5, 4.5, 'pine', 1.0], [9.5, 4.8, 'round', 0.9]];
    for (const o of W.root.children) for (const [x, z] of edge) if (o.position.x === x && o.position.z === z) o.visible = false;
    edge.forEach(([x, z, kd, s], i) => ctx.variants.push(SEASON_NAMES.map((sn) => { const t = P.tree({ kind: kd, season: sn, size: s, seed: 20 + i }); W.add(t, x, z); t.visible = false; return t; })));
    // the ground changes colour with the seasons
    const isl = W.root.children.find((o) => o.userData && o.userData.ground);
    ctx.ground = isl.userData.ground; ctx.ground.material = ctx.ground.material.clone();
    ctx.groundTarget = new THREE.Color(C.grass);
    // garden furniture
    W.add(P.table({ w: 1.1, d: 0.8, color: C.woodLight }), -7.4, 0.6, { collide: { w: 1.1, d: 0.8 } });
    const pot = P.cyl(0.16, 0.14, 0.2, 8, 0xb8b0a8); W.add(pot, -7.6, 0.6, { y: 0.75 });
    W.add(P.box(0.35, 0.03, 0.24, C.wood), -7.1, 0.6, { y: 0.75 });
    W.add(P.bench(), 9.2, 1.8, { collide: { w: 1.6, d: 0.5 } });
    W.add(P.rock(0.45, 3, 0xb8b0a8), -10.05, 0.35);
    // the old pencil lines on the door frame
    [0.85, 1.0, 1.12, 1.24, 1.33].forEach((y) => W.add(P.box(0.18, 0.015, 0.02, 0x7a6a6a), -4.3, -3.66, { y }));
    // a party table for Dad's birthday (hidden until then)
    const party = new THREE.Group();
    party.add(P.table({ w: 1.2, d: 0.8, color: C.white }));
    const cake = P.cake(7); cake.position.y = 0.75; party.add(cake);
    party.userData.flames = cake.userData.flames;
    W.add(party, 1.8, 1.2); party.visible = false; ctx.party = party;
    // the family car, parked on the street
    ctx.car = P.car(0x6f9fd0); W.add(ctx.car, -1.5, 9.3);
    ctx.boxes = [];
    [[-2.4, 8.2, 0.6], [-1.8, 8.25, 0.5], [-0.9, 8.2, 0.55]].forEach(([x, z, s]) => { const bx = P.cardboardBox(s); W.add(bx, x, z); bx.visible = false; ctx.boxes.push(bx); });
    const sc = P.suitcase(C.teal); W.add(sc, -0.2, 8.15); sc.visible = false; ctx.boxes.push(sc);
    // people
    ctx.me = makePlayer(40, -1.0, 2.0, Math.PI * 0.25, youLook(40));
    ctx.sam = person(LOOKS.sam, 40, 'Sam', -3.6, -1.4, 0.4);
    ctx.kid = person(childLook(10), 10, child(), 2.0, 2.4, -0.5);
    ctx.dad = person(LOOKS.dad, 74, 'Grandpa', 0, 0); ctx.dad.root.visible = false;
    ctx.mom = person(LOOKS.mom, 72, 'Grandma', 0, 0); ctx.mom.root.visible = false;
    ctx.restyle = (force) => {
      const a = kidAge(ctx), son = G.state.childKind === 'son';
      const band = a < 13 ? 0 : a < 16 ? 1 : 2;
      if (band === ctx.styleBand && !force) return;
      ctx.styleBand = band;
      const looks = son ? [[0x8ac0e8, 0x5a6a88, 'short'], [0x6a8a6a, 0x3d4f7a, 'short'], [0x3a3a48, 0x46506e, 'short']] : [[0xf2a3b5, 0x6a8ac8, 'ponytail'], [0xb08ac8, 0x3d4f7a, 'ponytail'], [0x4a4a5a, 0x3d4f7a, 'long']];
      const [shirt, pants, hairStyle] = looks[band];
      ctx.kid.setOutfit({ shirt, pants, hairStyle: ctx.kid.opts.hairStyle !== hairStyle ? hairStyle : undefined });
    };
    // particle fields for the seasons
    ctx.fields = [
      W.particlesOf('petals', { area: { w: 34, h: 10, d: 34 }, count: 90, opacity: 0 }),
      W.particlesOf('leaves', { area: { w: 34, h: 10, d: 34 }, count: 90, opacity: 0 }),
      W.particlesOf('snow', { area: { w: 34, h: 10, d: 34 }, count: 220, opacity: 0 }),
    ];
    ctx.stars = W.particlesOf('stars', { area: { w: 46, h: 5, d: 46 }, y0: 9, count: 120, opacity: 0 });
    // ---- the time-lapse ----
    ctx.lt = 0; ctx.sp = 0; ctx.si = -1; ctx.dp = 0.3; ctx.tickT = 1; ctx.tk = false; ctx.nextSpawn = 0; ctx.live = [];
    ctx.swingAmp = 0.45; ctx.swingT = 0;
    ctx.swingSeat = () => { const t = ctx.famTrees[Math.max(0, ctx.si)]; const sw = t.userData.swing; return { x: TREE[0] + sw.position.x, y: sw.position.y, z: TREE[1] + sw.position.z, L: t.userData.swingLen }; };
    ctx.applySeason = (tr) => { const S = SEASONS[Math.max(0, ctx.si)]; mood(S.mood, tr, S.extra); };
    const setSeason = (i, tr) => {
      ctx.si = i; const S = SEASONS[i];
      if (!ctx.moodHeld) mood(S.mood, tr, S.extra);
      ctx.groundTarget.setHex(S.ground);
      for (const v of ctx.variants) v.forEach((o, j) => { o.visible = j === i; });
      ctx.fields.forEach((f, j) => f.setOpacity(S.field === j ? 1 : 0));
    };
    ctx.setSeason = setSeason;
    setSeason(1, 0);
    onFrame(ctx, (dt) => {
      const Rr = G.renderer;
      // the swing keeps swinging whether or not anyone is on it
      ctx.swingT += dt;
      const th = Math.sin(ctx.swingT * 2.2) * (ctx.swinging ? ctx.swingAmp : 0.04);
      ctx.famTrees.forEach((t) => { t.userData.swing.rotation.x = th; });
      if (ctx.swinging) {
        const s = ctx.swingSeat(), kid = ctx.kid;
        kid.position.x = s.x; kid.position.z = s.z - s.L * Math.sin(th);
        kid.heading = kid.targetHeading = 0;
        kid.setPose('swing', { h: s.y - s.L * Math.cos(th) + 0.06, kick: Math.sin(ctx.swingT * 2.2) * 0.4 });
      }
      ctx.ground.material.color.lerp(ctx.groundTarget, Math.min(1, dt * 2.5));
      if (!ctx.lapseOn) return;
      const rate = G.director.inMoment ? 0.3 : 1;
      const ldt = dt * rate;
      ctx.lt = Math.min(LAPSE, ctx.lt + ldt);
      const k = ctx.lt / LAPSE;
      // everyone grows older
      const ka = 10 + 8 * k;
      if (Math.abs(ka - ctx.kid.age) > 0.02) { ctx.kid.setAge(ka); ctx.restyle(); }
      const pa = 40 + 8 * k;
      if (Math.abs(pa - ctx.me.age) > 0.02) {
        ctx.me.setAge(pa); ctx.sam.setAge(pa + 0.5);
        ctx.me.mHair.color.lerp(GREY, 0.35 * k); ctx.sam.mHair.color.lerp(GREY, 0.5 * k);
      }
      // the seasons turn faster and faster
      const N = lerp(34, 4.2, Math.pow(k, 0.8));
      ctx.sp += ldt / N;
      const si = (1 + Math.floor(ctx.sp)) % 4;
      if (si !== ctx.si) setSeason(si, clamp(N * 0.35, 0.6, 3));
      // and the days flicker
      ctx.dp += ldt / (N / 2.5);
      const ph = ctx.dp % 1;
      const az = 95 + ph * 170, el = 8 + Math.sin(ph * Math.PI) * 50;
      for (const m of [Rr.mood, Rr.moodFrom, Rr.moodTo]) { m.sunAz = az; m.sunEl = el; }
      if (!ctx.moodHeld) Rr.overrides.light = 0.6 + 0.4 * Math.sqrt(Math.sin(ph * Math.PI));
      else Rr.overrides.light = 1;
      // the music won't stop speeding up
      G.audio.setTempo(1 + 0.6 * k, 1.5);
      if (!G.director.inMoment) G.audio.setIntensity(0.3 + 0.65 * k, 2);
      ctx.tickT -= dt;
      if (ctx.tickT <= 0) { sfx(ctx.tk ? 'tock' : 'tick', { vol: 0.25 + 0.35 * k }); ctx.tk = !ctx.tk; ctx.tickT = lerp(1.0, 0.2, k); }
      G.ui.setClock(k, Math.floor(pa), k > 0.85);
      // moments flicker up… and away
      while (ctx.nextSpawn < FLICKER.length && k >= FLICKER[ctx.nextSpawn].k) spawn(ctx, FLICKER[ctx.nextSpawn++]);
      for (const s of ctx.live) { if (s.h.done) continue; s.t -= dt; if (s.t <= 0) expire(ctx, s); }
      if (k >= 1 && !ctx.lapseDone) { ctx.lapseDone = true; endLapse(ctx); }
    });
    skyDressing(ctx, { clouds: 6, y: -4, spread: 25, seed: 6 });
    W.birds(5, 8);
  },
  async intro(ctx) {
    G.ui.clock(true); G.ui.setClock(0, 40);
    hideEggs(ctx);
    ctx.applySeason(2);
    await fadeIn(2.5);
    await lower('{child} was ten.');
    await lower('You blinked.');
    ctx.lapseOn = true;
    lifeLoop(ctx, ctx.kid, kidStation, 3);
    lifeLoop(ctx, ctx.sam, samStation, 5);
  },
  moments: [
    // ---- hidden: an easter egg under the cherry tree ----
    {
      id: 'eggBiscuit', hidden: true, label: 'A small stone under the cherry tree', at: [-9.6, 0.6], radius: 0.9,
      async run(ctx) {
        const b = ctx.me;
        prep(ctx);
        await b.walkTo(-9.6, 0.75); b.face(-10.05, 0.35); b.setPose('crouch');
        await camTo(-9.9, 0.4, 4.6, 1.2);
        await lower('A flat stone with a wobbly B scratched into it.');
        await lower('Every spring the blossom covers it, as if the tree remembers too.');
        await stillness({ seconds: 3, label: 'Good dog.' });
        G.achieve?.('c6_biscuit_stone', 'Good Dog, Always', 'Visited Biscuit’s stone under the cherry tree.');
        await back(ctx);
      },
    },
    {
      id: 'goodbye', kind: 'story', label: 'Say goodbye', at: [-1.0, 7.95], radius: 1.4, when: (ctx) => !!ctx.packed, caption: { id: 'goodbye', text: 'The last hug on the curb' },
      async run(ctx) {
        const b = ctx.me, kid = ctx.kid, sam = ctx.sam, car = ctx.car;
        prep(ctx);
        await b.walkTo(-0.6, 7.9);
        kid.place(-1.4, 8.1); kid.faceChar(b); b.faceChar(kid);
        sam.place(0.3, 8.0); sam.faceChar(kid);
        await camTo(-0.8, 8.3, 5.4, 2);
        await say(kid, 'That’s everything. I think that’s everything.');
        await say(kid, 'I’ve got the charger. I’ve got the — yes. I’ve got it.');
        await say(sam, 'Drive slowly. Text from the services. Eat something that isn’t crisps.');
        await say(kid, 'I KNOW.');
        sam.setPose('hug'); kid.faceChar(sam); kid.setPose('hug');
        await wait(1.6);
        sam.setPose('idle'); kid.setPose('idle');
        kid.faceChar(b);
        await say(kid, '{me}.');
        const d = await choose('The car is packed. Four hours of motorway, and then a room you’ve never seen.', ['“Let me drive you there.”', '“Go on. You drive.”']);
        const drove = d === 0;
        G.state.flags.collegeGoodbye = drove ? 'drove' : 'curb';
        if (drove) { await say(kid, 'You’ll sing. You’ll sing the whole way.'); await say(b, 'I will absolutely sing the whole way.'); }
        else { await say(kid, 'You sure? You’re not going to cry?'); await say(b, 'Not out here. I’ll do it inside, like a grown-up.'); }
        music('little', { intensity: 0.25 });
        kid.place(b.position.x - 0.42, b.position.z + 0.12); kid.faceChar(b); b.faceChar(kid);
        b.setPose('hug'); kid.setPose('hug');
        await camTo(b.position.x - 0.2, b.position.z, 3.6, 3);
        await hold({ label: 'Hold on', seconds: 7, drain: 0.12 });
        if (drove) {
          await lower('You hugged on the curb, so you wouldn’t have to do it in front of their new roommate.');
          await say(kid, 'Okay. Okay. Let’s go, before I change my mind.');
        } else {
          await lower('They were taller than you now. When did that happen?');
          await say(kid, 'You’re squeezing all the air out of me.');
          await say(b, 'Call me when you get there.');
          await say(kid, 'I will. I promise.');
        }
        await keep('goodbye', drove ? 'The hug before the long drive' : 'The last hug on the curb', { window: 8 });
        b.setPose('idle'); kid.setPose('idle');
        // the boxes go on the roof, and then the car goes
        await camTo(0.4, 8.6, 7.5, 2);
        const roofBoxes = ctx.boxes.slice(0, 3);
        ctx.boxes.forEach((bx, n) => { if (n < 3) { const f = bx.position.clone(); tween(0.6, (t) => { bx.position.set(f.x + (car.position.x - 0.5 + n * 0.5 - f.x) * t, Math.sin(t * Math.PI) * 0.6 + t * 1.25, f.z + (car.position.z - f.z) * t); }); } else bx.visible = false; });
        await wait(0.8);
        await Promise.all([kid.walkTo(car.position.x + 0.2, car.position.z - 0.8), drove ? b.walkTo(car.position.x - 0.5, car.position.z - 0.8) : Promise.resolve()]);
        kid.root.visible = false; if (drove) b.root.visible = false;
        sfx('door'); if (drove) sfx('door', { delay: 0.3 });
        await wait(0.8);
        if (!drove) b.setPose('wave');
        sam.setPose('wave');
        sfx('engine');
        const x0 = car.position.x;
        const carry = onFrame(ctx, () => { roofBoxes.forEach((bx, n) => { bx.position.x = car.position.x - 0.5 + n * 0.5; bx.scale.copy(car.scale); }); });
        await tween(7, (t) => { car.position.x = x0 + (13.4 - x0) * t; car.scale.setScalar(Math.max(0.001, t > 0.9 ? 1 - (t - 0.9) / 0.1 : 1)); }, (x) => x * x);
        offFrame(ctx, carry);
        car.visible = false; roofBoxes.forEach((bx) => { bx.visible = false; });
        // and everything stops
        G.audio.stopMusic(5); G.audio.setTempo(1, 1);
        amb({ wind: 0.12 }, 5);
        sam.setPose('idle'); b.setPose('idle');
        if (drove) {
          await fadeOut(2.5, '#121214');
          await narrate(['Four hours of motorway. They chose all the music. You let them choose all of it.', 'A small room. A stranger’s poster. A wave from a third-floor window.', 'Four hours back. The passenger seat was very quiet.'], { minTime: 1.4 });
          G.ui.clearNarration();
          mood('emptyHouse', 0, { sunEl: 10, sunAz: 250 });
          car.visible = true; car.scale.setScalar(0.001); car.position.x = 13.4;
          sam.place(-0.4, 7.9); sam.face(13, 9.3);
          await camTo(-0.4, 8.4, 7.5, 0.1);
          await fadeIn(2.5);
          sfx('engine');
          await tween(6, (t) => { car.position.x = 13.4 + (x0 - 13.4) * t; car.scale.setScalar(Math.min(1, Math.max(0.001, t / 0.1))); }, (x) => 1 - (1 - x) * (1 - x));
          sfx('door');
          b.root.visible = true; b.place(car.position.x + 0.3, car.position.z - 0.85); b.face(-0.4, 7.9);
          await b.walkTo(0.2, 7.8); b.faceChar(sam); sam.faceChar(b);
          await camTo(-0.1, 8.0, 5.2, 1.5);
          await say(sam, 'How was it?');
          const k = await choose('', ['“They didn’t look back.”', '“They waved from the window until I turned the corner.”']);
          await say(sam, k === 0 ? 'Good. That means we did it right.' : 'Of course they did.');
          G.achieve?.('c6_drove', 'Four Hours Each Way', 'Drove your child to college yourself.');
        } else {
          mood('emptyHouse', 8);
          await wait(3.5);
          await lower(ctx.sawLesson ? 'They didn’t brake at the corner. You didn’t scream.' : 'And then it was just a street again.');
          sam.walkTo(b.position.x + 0.5, b.position.z - 0.3).then(() => sam.faceChar(b));
          await wait(1.5);
          G.achieve?.('c6_curb', 'Call Me When You Get There', 'Said goodbye at the curb and watched them drive away.');
        }
        await say(sam, 'Come inside. Come on. I’ll put the kettle on.');
        const flags = G.state.flags;
        for (const g of ['ch6NightChoice', 'ch6EveningChoice', 'ch6LastChoice']) if (!flags[g]) flags[g] = 'none';
        if (!flags.ch6Door) flags.ch6Door = 'missed';
        flags.ch6Kept = FLICKER.filter((f) => G.album.has(f.id)).length;
        if (flags.ch6Kept >= 8) G.achieve?.('c6_paying_attention', 'Paying Attention', 'Kept eight or more moments while the years flew by.');
        await fadeOut(4, '#121214');
      },
    },
  ],
  final: 'goodbye',
};

async function endLapse(ctx) {
  await until(() => !G.director.inMoment);
  if (G.world !== ctx.world) return;
  ctx.lapseOn = false;
  for (const s of ctx.live) expire(ctx, s);
  prep(ctx);
  ctx.sawLesson = !!ctx.world.getHotspot('drivingLesson')?.done && G.album.has('drivingLesson');
  ctx.kid.setAge(18); ctx.restyle(true);
  G.audio.setTempo(1, 5); intensity(0.15, 5);
  amb({ birds: 0.25, wind: 0.15 }, 4);
  G.ui.setClock(1, 48);
  ctx.setSeason(1, 4);
  mood('goldenAfternoon', 5, { saturation: 0.9, warmth: 0.3 });
  ctx.moodHeld = true;
  tween(3, (t) => { G.renderer.overrides.light = lerp(G.renderer.overrides.light ?? 1, 1, t); });
  await wait(2);
  cut();
  ctx.boxes.forEach((b) => { b.visible = true; });
  ctx.kid.place(-1.4, 8.1); ctx.kid.face(-5, 4);
  ctx.sam.place(0.3, 8.0); ctx.sam.face(-1.4, 8.1);
  await lower('And then, one morning at the end of August, the car was packed.');
  ctx.packed = true;
  G.director.refreshHotspots();
  G.ui.hint('Go out to the car.', 6);
}

// =====================================================================
// VI-2  The empty room
// =====================================================================
export const leaving = {
  id: 'ch6-leaving', chapter: 6,
  mood: 'emptyHouse', music: 'silence', intensity: 0,
  ambience: { room: 0.35, clock: 0.2 },
  zoom: 7.2, surface: 'wood',
  keepWindow: 9, // time has stopped now; there is no hurry any more
  bounds: { minX: -3.75, maxX: 3.75, minZ: -3.2, maxZ: 3.3 },
  hint: 'Take your time. There’s nowhere you need to be.',
  build(ctx) {
    const W = ctx.world;
    ctx.r = buildNursery(ctx, { era: 'empty' });
    ctx.me = makePlayer(48, -3.2, 1.8, Math.PI / 2, youLook(48));
    ctx.me.mHair.color.lerp(GREY, 0.35);
    // the drawing, pinned to the wall
    const d = P.drawingPaper(drawingTexture());
    W.add(d, -3.96, 0.3, { y: 1.5, ry: Math.PI / 2, s: 1.45 });
    const pin = P.sphere(0.035, 6, 4, C.red); W.add(pin, -3.94, 0.3, { y: 1.8 });
    ctx.drawing = d;
    // a few boxes of things they'll come back for, they said
    W.add(P.cardboardBox(0.6), 1.7, 2.1, { ry: 0.2, collide: 0.4 });
    W.add(P.cardboardBox(0.5), 1.75, 2.1, { y: 0.48, ry: -0.3 });
    W.add(P.cardboardBox(0.55), 2.6, 1.6, { ry: 0.6, collide: 0.35 });
    ctx.dust = W.particlesOf('motes', { center: new THREE.Vector3(1.2, 0, -1.4), area: { w: 2.6, h: 2.6, d: 2.6 }, count: 40, opacity: 0.45 });
  },
  async intro(ctx) {
    hideEggs(ctx);
    await fadeIn(4);
    await lower('Later, you went up to their room.');
    await lower('You’re not sure why. There was nothing you needed in there.');
  },
  moments: [
    {
      id: 'starsStill', label: 'The old mobile', at: [-1.9, -2.6], caption: 'Five little stars, still turning',
      async run(ctx) {
        const b = ctx.me, mob = ctx.r.mobile;
        await b.walkTo(-2.05, -2.7); b.face(-3.6, -3.1);
        await camTo(-4.6, -4.1, 4.8, 2);
        mob.userData.speed = 0.3;
        sfx('sparkle', { vol: 0.5 });
        await stillness({ seconds: 5, label: 'Watch them turn.' });
        await lower('Five little stars, going round and round.');
        await lower('You hung them over their crib. Then over their bed, as a joke. They never let you take them down.');
        await keep('starsStill', 'Five little stars, still turning');
        mob.userData.speed = 0.05;
        await camFollow(b, 7.2);
      },
    },
    {
      id: 'rockingChair', label: 'Sit in the rocking chair', at: [1.9, -1.4], caption: 'The chair that creaked on every third rock',
      async run(ctx) {
        const b = ctx.me, chair = ctx.r.chair.userData.rock;
        await b.walkTo(1.9, -1.5);
        b.place(2.4, -2.15, -0.7); b.setPose('rock');
        await camTo(2.2, -1.8, 4.6, 2);
        let t = 0, n = 0, last = 0;
        const rock = onFrame(ctx, (dt) => { t += dt; const s = Math.sin(t * 1.8) * 0.09; chair.rotation.x = s; b.lean = s * 0.8; const c = Math.floor(t * 1.8 / Math.PI); if (c !== last) { last = c; n++; if (n % 3 === 0) sfx('creak'); } });
        await stillness({ seconds: 7, label: 'Rock. Slowly.' });
        await lower('A thousand nights in this chair. A thousand songs, half-asleep.');
        await lower('It still creaked on every third rock. You used to time the last line of the song to it.');
        await keep('rockingChair', 'The chair that creaked on every third rock');
        offFrame(ctx, rock); chair.rotation.x = 0; b.lean = 0;
        b.setPose('idle'); b.place(1.9, -1.4);
        await camFollow(b, 7.2);
      },
    },
    {
      id: 'eggCeiling', hidden: true, label: 'Lie down on their bed', at: [-1.9, -1.4], radius: 0.8,
      async run(ctx) {
        const b = ctx.me;
        await b.walkTo(-2.05, -1.5);
        b.place(-2.9, -1.75, Math.PI); b.extraY = 0.4; b.setPose('lieBack');
        await camTo(-2.6, -1.6, 4.2, 2);
        await lower('From here you can see what they saw every night.');
        await lower('A dozen glow-in-the-dark stars, stuck to the ceiling in the shape of a wobbly heart.');
        await lower('You never knew. In eighteen years, you never once lay down in here.');
        await stillness({ seconds: 4, label: 'Look up.' });
        G.achieve?.('c6_ceiling_stars', 'Their Ceiling', 'Lay on their bed and saw what they saw every night.');
        b.extraY = 0; b.setPose('idle'); b.place(-2.0, -1.4);
        await camFollow(b, 7.2);
      },
    },
    {
      id: 'emptyRoom', kind: 'story', label: 'The drawing on the wall', at: [-3.0, -0.2], radius: 1.3, caption: 'The empty room',
      async run(ctx) {
        const b = ctx.me;
        await b.walkTo(-3.1, -0.5); b.face(-3.96, 0.3);
        await camTo(-5.2, -1.0, 3.2, 3);
        // the only colour left in the room is in the drawing
        const R = G.renderer;
        const sp = R.project(new THREE.Vector3(-3.96, 1.5, 0.3));
        const focus = { x: sp.x / window.innerWidth, y: 1 - sp.y / window.innerHeight };
        R.overrides.focusX = focus.x; R.overrides.focusY = focus.y; R.overrides.focusRadius = 0.34;
        mood('emptyHouse', 3, { saturation: 1.05 });
        R.pulse('focusDesat', 0.92, 3);
        await lower('The drawing. Still there, still held up by the same red pin.');
        await lower('MY FAMILY, it says. Three people holding hands under a tree with a swing. The sun has a face.');
        await think('“Will you always be here?” they asked you once, at bedtime.');
        await think('You said yes. You never thought to ask them.');
        await stillness({ seconds: 6, label: 'Stay a while.' });
        G.achieve?.('c6_empty_room', 'You Wished for Quiet', 'Stood in the empty room.');
        await keep('emptyRoom', 'The empty room', { focus });
        R.overrides.focusX = focus.x; R.overrides.focusY = focus.y;
        R.pulse('focusDesat', 0, 3);
        mood('emptyHouse', 3);
        await camTo(-1.0, 0.0, 7.6, 4);
        await wait(1.5);
        sfx('ping');
        await wait(1.2);
        await lower(G.state.flags.collegeGoodbye === 'drove' ? 'Your phone buzzes. “Did you get home ok? Thank you for driving. Sorry about the music. Love you x”' : 'Your phone buzzes. “Here. Room is tiny. Roommate seems nice. Love you x”');
        await wait(1);
        await fadeOut(5, '#121214');
        await narrate(['The house had never been so quiet.', 'You’d wished for quiet, once.'], { minTime: 1.6 });
        G.ui.clearNarration();
        await wait(1.5);
      },
    },
  ],
  final: 'emptyRoom',
};
