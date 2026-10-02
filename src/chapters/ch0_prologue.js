// PROLOGUE — an old kitchen, a winter night, an almost-empty album.
import * as P from '../engine/props.js';
import { G } from '../engine/game.js';
import { narrate, lower, say, think, wait, keep, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, hint, intensity } from '../engine/story.js';
import { stillness } from '../engine/minigames.js';
import { buildKitchen, makePlayer } from './places.js';
import { C } from '../engine/props.js';

export const prologue = {
  id: 'prologue', chapter: 0,
  mood: 'kitchenNight', music: 'winter', intensity: 0.15,
  ambience: { room: 0.6, clock: 0.35, wind: 0.25 },
  zoom: 8.5, surface: 'wood',
  bounds: { minX: -3.8, maxX: 3.8, minZ: -3.3, maxZ: 3.3 },
  hint: 'Move with <b>WASD</b> / <b>arrows</b> or <b>click</b>. Walk to a glowing light and press <b>Space</b>.',
  build(ctx) {
    const r = buildKitchen(ctx, { night: true, chairs: 2 });
    ctx.r = r;
    const me = makePlayer(79, -1.6, 1.6, Math.PI * 0.75);
    me.giveCane(true);
    ctx.me = me;
    // the folded scarf on the other chair
    const sc = P.box(0.42, 0.06, 0.3, 0x6fa3c8); ctx.world.add(sc, 1.85, 0.6, { y: 0.5 });
    const album = P.photoAlbum(); ctx.world.add(album, 1.1, 0.75, { y: 0.75, ry: 0.3 }); ctx.albumObj = album;
  },
  async intro(ctx) {
    await wait(0.5);
    await fadeIn(4);
    await lower('It is late, and the house is very quiet.');
    await think('When did it get so quiet?');
  },
  moments: [
    {
      id: 'window', label: 'Look out at the snow', at: [1.4, -2.4],
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(1.4, -2.2); me.face(1.4, -4);
        await camZoom(7, 2);
        await stillness({ seconds: 4, label: 'Watch the snow fall.' });
        await lower('Snow on the old tree again.');
        await lower('Every winter it looks as if it might not wake up. Every spring, somehow, it does.');
        await camZoom(8.5, 2);
      },
    },
    {
      id: 'scarf', label: 'The other chair', at: [2.3, 1.0],
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(2.5, 1.1); me.face(1.85, 0.6);
        await wait(0.6);
        await lower('A blue scarf, still folded on the other chair.');
        await lower('You never could bring yourself to move it.');
      },
    },
    {
      id: 'frames', label: 'The photographs on the wall', at: [-3.0, 2.0],
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(-3.1, 2.0); me.face(-4, 2.0);
        await wait(0.5);
        await lower('Three frames. A wedding. A birthday cake. A child in a too-big coat, laughing at something you can no longer remember.');
        await think('I should have taken more.');
      },
    },
    {
      id: 'fridge', kind: 'secret', label: 'Something on the fridge', at: [-2.9, -1.5], radius: 0.8,
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(-2.85, -1.4); me.face(-3.55, -1.9);
        await lower('A fridge magnet shaped like a small brown dog. Chipped, faded, older than the fridge.');
        await think('Biscuit. I haven’t thought about Biscuit in years.');
        G.achieve?.('fridge');
      },
    },
    {
      id: 'album', kind: 'story', label: 'Open the album', at: [0.4, 0.2], requires: [],
      async run(ctx) {
        const me = ctx.me;
        await me.walkTo(0.9, -0.55);
        me.giveCane(false);
        me.faceNow(0.9, 0.6);
        me.setPose('read', { h: 0.45 });
        me.position.set(0.9, 0, -0.35);
        await camTo(0.9, 0.3, 5.8, 3);
        music('title', { intensity: 0.2 });
        await lower('The album. A gift, years and years ago.');
        await lower('“For all the little moments,” the card said.');
        await lower('So many pages. So few pictures.');
        await think('Where did it all go?');
        await stillness({ seconds: 4, label: 'Turn the first page.' });
        sfx('rustle');
        intensity(0.6, 4);
        mood('dream', 6);
        await narrate(['Let’s go back.', 'Back to the beginning, when everything was enormous —', '— and you were so very small.'], { minTime: 1.2 });
        await fadeOut(3, '#fff6ee');
        G.ui.clearNarration();
      },
    },
  ],
  final: 'album',
};
