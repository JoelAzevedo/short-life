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

function boot() {
  const params = new URLSearchParams(location.search);
  G.debug = params.has('debug');
  G.speed = parseFloat(params.get('speed') || '1');
  G.auto = params.has('auto');
  G.autoSkip = params.has('skiplittle');
  G.log = [];
  G.renderer = new Renderer(document.getElementById('game'));
  if (params.has('lowfx')) { G.renderer.r.setPixelRatio(0.5); G.renderer.r.shadowMap.enabled = false; G.renderer.bloom.enabled = false; G.renderer.resize(); }
  G.scene = G.renderer.scene; G.camera = G.renderer.camera;
  G.input = new Input(G.renderer.r.domElement);
  G.ui = new UI();
  G.audio = new Audio();
  G.album = new Album();
  G.director = new Director(SCENES);
  G.director.onTitle = () => { G.director.abort(); title(); };
  // register every moment up front so the album knows what could have been
  for (const s of SCENES) for (const m of s.moments ?? []) if (m.caption) G.album.register(m.caption.id ?? m.id, s.chapter, typeof m.caption === 'string' ? m.caption : m.caption.text, s.id);
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
  W.add(P.familyTree({ stage: 3, season: 'spring', swing: true }), 0.6, -0.8);
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
function titleUpdate(dt) { titleT += dt; G.renderer.camAz = 45 + Math.sin(titleT * 0.05) * 25; }

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
      G.state.identity = id; G.state.flags = {}; G.state.stats = { emails: 0, workCalls: 0 };
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

window.addEventListener('DOMContentLoaded', boot);
window.G = G;
