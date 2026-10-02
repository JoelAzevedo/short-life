// Little Moments — boot, main loop, title screen.
import * as THREE from 'three';
import { G, rng } from './engine/game.js';
import { Renderer } from './engine/renderer.js';
import { Input } from './engine/input.js';
import { UI, el } from './engine/ui.js';
import { Audio } from './engine/audio.js';
import { Album } from './engine/album.js';
import { Director } from './engine/director.js';
import { World } from './engine/world.js';
import * as P from './engine/props.js';
import { SCENES } from './chapters/index.js';
import { Achievements, watchKonami } from './engine/achievements.js';

function boot() {
  const params = new URLSearchParams(location.search);
  G.debug = params.has('debug');
  G.speed = parseFloat(params.get('speed') || '1');
  G.auto = params.has('auto');
  G.autoSkip = params.has('skiplittle');
  G.autoChoice = parseInt(params.get('choice') || '0', 10);
  G.log = [];
  G.renderer = new Renderer(document.getElementById('game'));
  if (params.has('lowfx')) { G.renderer.r.setPixelRatio(0.5); G.renderer.r.shadowMap.enabled = false; G.renderer.bloom.enabled = false; G.renderer.ao.enabled = false; G.renderer.resize(); }
  G.scene = G.renderer.scene; G.camera = G.renderer.camera;
  G.input = new Input(G.renderer.r.domElement);
  G.ui = new UI();
  G.audio = new Audio();
  G.album = new Album();
  G.director = new Director(SCENES);
  G.ach = new Achievements();
  G.achieve = (id, title, desc, cat) => G.ach.unlock(id, title, desc, cat);
  G.showAchievements = () => G.ach.show();
  watchKonami(() => partyHats());
  G.director.onTitle = () => { G.director.abort(); title(); };
  // register every moment up front so the album knows what could have been
  for (const s of SCENES) for (const m of s.moments ?? []) if (m.caption) G.album.register(m.caption.id ?? m.id, s.chapter, typeof m.caption === 'string' ? m.caption : m.caption.text, s.id, m.alt);
  for (const s of SCENES) (s.extraMoments ?? []).forEach(([id, cap]) => G.album.register(id, s.chapter, cap, s.id));

  document.getElementById('menuBtn').addEventListener('click', () => G.director.toggleMenu());
  document.getElementById('albumBtn').addEventListener('click', () => { if (G.album.open) G.album.hide(); else G.director.openAlbum(); });

  let last = performance.now();
  const frame = (now) => {
    const realDt = Math.min(G.auto ? 0.25 : 0.05, (now - last) / 1000); last = now;
    G.realTime += realDt;
    const inp = G.input;
    if (inp.pressed('pause') && G.director.current) G.director.toggleMenu();
    if (inp.pressed('album') && G.director.current && !G.director.menuOpen) { if (G.album.open) G.album.hide(); else G.director.openAlbum(); }
    if (!G.paused) {
      const dt = realDt * G.timeScale * G.speed;
      G.dt = dt; G.time += dt;
      for (const f of [...G.updaters]) f(dt);
      for (const f of [...G.realUpdaters]) f(realDt * G.speed);
      if (G.world) G.world.update(dt, G.time);
      G.director.update(dt, realDt * G.speed);
      if (titleWorld) titleUpdate(realDt);
    }
    G.ui.update();
    G.renderer.update(realDt);
    G.renderer.render();
    inp.endFrame();
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);

  if (params.has('lineup')) { lineup(params.get('lineup')); return; }
  // debug: jump straight to a scene (?scene=ch5-nursery or ?s=7)
  const sp = params.get('scene') ?? params.get('s');
  if (sp !== null) {
    let idx = SCENES.findIndex((s) => s.id === sp);
    if (idx < 0) idx = parseInt(sp, 10) || 0;
    G.state.identity = params.get('who') === 'father' ? 'father' : 'mother';
    G.state.childName = params.get('child') || G.state.childName;
    G.ui.fade(1, 0.01);
    const go = () => { G.audio.init(); G.director.start(idx); };
    if (params.has('noaudio')) G.director.start(idx);
    else { const b = el('div', ''); b.style.cssText = 'position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;color:#fff;font:20px sans-serif;cursor:pointer;pointer-events:auto'; b.textContent = 'Click to start scene ' + SCENES[idx].id; document.body.appendChild(b); b.addEventListener('click', () => { b.remove(); go(); }); }
    return;
  }
  title();
}

// ---------------------------------------------------------------------
// Title: a tiny floating garden turning slowly in a pink dawn.
// ---------------------------------------------------------------------
let titleWorld = null, titleT = 0;
function buildTitleWorld() {
  if (G.world) G.world.dispose();
  const W = new World({ name: 'title' });
  G.world = W; titleWorld = W;
  W.add(P.island({ w: 9, d: 9, h: 1, top: P.C.grassSpring, seed: 8 }), 0, 0);
  const ft = P.familyTree({ stage: 3, season: 'spring', swing: true }); W.add(ft, 0.6, -0.8); titleSwing = ft.userData.swing; titleSwingPush = 0;
  W.add(P.bench(), -1.6, 1.4, { ry: 0.6 });
  const r = rng(4);
  for (let i = 0; i < 30; i++) W.add(P.grassTuft(P.C.grassDark, i), r.range(-4, 4), r.range(-4, 4));
  for (let i = 0; i < 14; i++) W.add(P.flower(r.pick([P.C.pink, P.C.yellow, 0xffffff]), i), r.range(-4, 4), r.range(-4, 4));
  W.add(P.tree({ kind: 'blossom', season: 'spring', size: 0.9, seed: 3 }), -3, -2.6);
  W.add(P.rock(0.8, 2), 3, 2.6);
  W.particlesOf('petals', { area: { w: 14, h: 8, d: 14 }, count: 60 });
  W.particlesOf('motes', { area: { w: 12, h: 6, d: 12 }, count: 30, opacity: 0.6 });
  for (let i = 0; i < 5; i++) { const c = P.cloud(i + 1, 1.2); const a = i * 1.3; W.add(c, Math.cos(a) * 11, Math.sin(a) * 11, { y: -2 + i * 0.6 }); }
  const R = G.renderer;
  R.setFollow(null); R.camGoal.set(0, 0.6, 0); R.zoomGoal = 11.5; R.camBounds = null; R.snapCamera();
  R.setMood('dawnNursery', 0, { dream: 0.35, tilt: 0.8 });
}
let titleSwing = null, titleSwingPush = 0;
function titleUpdate(dt) {
  titleT += dt; G.renderer.camAz = 45 + Math.sin(titleT * 0.05) * 25;
  if (titleSwing && titleSwingPush > 0) { titleSwing.rotation.x = Math.sin(titleT * 2.6) * 0.6 * titleSwingPush; }
}

// ↑↑↓↓←→←→BA — everybody gets a party hat
function partyHats() {
  if (!G.world) return;
  for (const c of G.world.characters) {
    if (!c.head || c._partyHat) continue;
    const hat = P.cone(0.55, 1.2, 8, [0xf26b8a, 0x6fc3df, 0xf3c64a, 0x8ad08a][Math.floor(Math.random() * 4)]);
    hat.position.y = 0.75; hat.rotation.z = 0.15; c.head.add(hat); c._partyHat = hat;
    const pom = P.sphere(0.18, 6, 4, 0xffffff); pom.position.y = 1.2; hat.add(pom);
  }
  if (G.player) G.world.burst(G.player.position.clone().setY(1.5), { count: 80, color: 0xffd0e0, speed: 3 });
  G.audio.sfx('sparkle'); G.audio.sfx('yay');
  G.achieve('konami');
}

function title() {
  G.director.current = null;
  G.ui.showHud(false); G.ui.clock(false);
  buildTitleWorld();
  G.ui.fade(0, 3);
  const t = document.getElementById('title');
  t.innerHTML = ''; t.classList.remove('hidden');
  t.appendChild(el('h1', '', 'Little Moments'));
  t.appendChild(el('div', 'sub', 'We are born so tiny. And then — so fast.'));
  const btns = el('div', 'btns'); t.appendChild(btns);
  const save = Album.readSave();
  const begin = el('button', '', save ? 'Begin a new life' : 'Begin');
  btns.appendChild(begin);
  if (save && save.sceneIndex > 0) {
    const cont = el('button', 'ghost', 'Continue');
    cont.addEventListener('click', () => { G.audio.init(); G.album.load(save); start(save.sceneIndex); });
    btns.insertBefore(cont, begin);
  }
  const achB = el('button', 'ghost', 'Achievements'); achB.addEventListener('click', () => G.ach.show()); btns.appendChild(achB);
  let titleClicks = 0;
  t.querySelector('h1').style.pointerEvents = 'auto'; t.querySelector('h1').style.cursor = 'pointer';
  t.querySelector('h1').addEventListener('click', () => {
    if (++titleClicks === 5 && titleSwing) { titleSwingPush = 1; G.audio.sfx('giggle'); G.achieve('title_swing'); }
  });
  t.appendChild(el('div', 'foot', 'Best with headphones · about two to three hours, in chapters · progress saves itself<br>WASD / arrows / click to move · Space to interact · hold Space to keep a moment · Esc to pause'));
  const onFirst = () => { G.audio.init(); G.audio.music('title', { intensity: 0.3 }); G.audio.ambience({ birds: 0.4, wind: 0.2 }); };
  window.addEventListener('pointerdown', onFirst, { once: true });
  window.addEventListener('keydown', onFirst, { once: true });
  begin.addEventListener('click', () => {
    G.audio.init(); G.audio.music('title', { intensity: 0.5 });
    btns.innerHTML = '';
    t.querySelector('.sub').textContent = 'In this story, you will grow up to become…';
    const who = el('div', 'who'); btns.appendChild(who);
    const m = el('button', '', 'a mother'); const f = el('button', '', 'a father');
    who.appendChild(m); who.appendChild(f);
    const pick = (id) => {
      G.album.wipe();
      G.state.identity = id; G.state.flags = {}; G.state.stats = { emails: 0, workCalls: 0, workTimes: 0 };
      G.achieve('begin');
      start(0);
    };
    m.addEventListener('click', () => pick('mother')); f.addEventListener('click', () => pick('father'));
  });
}

async function start(index) {
  const t = document.getElementById('title');
  await G.ui.fade(1, 2.2, '#000');
  t.classList.add('hidden'); t.innerHTML = '';
  if (titleWorld) { titleWorld.dispose(); titleWorld = null; G.world = null; }
  G.renderer.camAz = 45;
  G.director.start(index);
}

// debug: a row of characters to inspect the models
async function lineup(mode) {
  const { Character, LOOKS, youLook, childLook, Dog } = await import('./engine/character.js');
  G.ui.fade(0, 0.1);
  const W = new World({ name: 'lineup' }); G.world = W;
  W.add(P.island({ w: 14, d: 8, top: P.C.grassSpring }), 0, 0);
  const list = [
    [LOOKS.baby, 0.7, mode === 'pose' ? 'crawl' : 'sitGround'], [childLook(1.5), 1.5, 'idle'], [LOOKS.pip, 5, 'idle'], [LOOKS.childDaughter, 8, 'idle'],
    [LOOKS.theo, 13, 'idle'], [LOOKS.youMother, 28, 'idle'], [LOOKS.youFather, 30, 'idle'], [LOOKS.sam, 30, 'idle'],
    [LOOKS.mom, 34, 'idle'], [LOOKS.dad, 36, 'idle'], [LOOKS.grandma, 70, 'idle'], [LOOKS.grandpa, 75, 'idle'],
  ];
  list.forEach(([look, age, pose], i) => {
    const c = new Character({ ...look, age });
    c.place(-5.5 + i * 1.0, 0.5, 0.35);
    c.setPose(mode === 'walk' ? 'idle' : pose);
    if (mode === 'walk') { c.speed = c.walkSpeed; c._playerMoving = true; }
    if (mode === 'pose') c.setPose(['crawl', 'walk', 'jump', 'wave', 'kneelOpen', 'carry', 'hug', 'sit', 'cry', 'laugh', 'think', 'crouch'][i], { h: 0.45 });
    if (mode === 'pose' && i < 2) { c.speed = c.walkSpeed; c._playerMoving = true; }
  });
  const d = new Dog(); d.place(5.6, 1.6);
  const R = G.renderer; R.setFollow(null); const cx = parseFloat(new URLSearchParams(location.search).get('cx') || '0'); R.camGoal.set(cx, 0.9, 0.5 + cx * 0.35); R.zoomGoal = parseFloat(new URLSearchParams(location.search).get('zoom') || '6'); R.snapCamera();
  R.setMood('springMorning', 0);
}

window.addEventListener('DOMContentLoaded', boot);
window.G = G;
