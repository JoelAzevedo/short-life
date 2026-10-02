// Script helpers used by the chapters. Scenes are written as async functions
// that read like a screenplay: await say(mom, '...'); await keep('...');
import * as THREE from 'three';
import { G, wait, every, clamp, lerp, fmt, tween } from './game.js';

export { wait, fmt };
export const narrate = (lines, opts) => G.ui.narrate(lines, opts);
export const lower = (text, opts) => G.ui.lower(text, opts);
export const say = (who, text, opts) => G.ui.say(who, text, opts);
export const think = (text, opts) => G.ui.say(G.player, text, { thought: true, ...opts });
export const choose = (prompt, options) => G.ui.choose(prompt, options);
export const askText = (prompt, def) => G.ui.askText(prompt, def);
export const fadeOut = (s = 1.5, color = '#000') => G.ui.fadeOut(s, color);
export const fadeIn = (s = 1.5) => G.ui.fadeIn(s);
export const card = (def, hold) => G.ui.chapterCard(def, hold);
export const mood = (name, seconds = 2, extra = null) => G.renderer.setMood(name, seconds, extra);
export const music = (name, opts) => G.audio.music(name, opts);
export const intensity = (v, s = 2) => G.audio.setIntensity(v, s);
export const amb = (levels, s = 3) => G.audio.ambience(levels, s);
export const sfx = (name, opts) => G.audio.sfx(name, opts);
export const control = (on) => G.director.setControl(on);
export const hint = (html, s) => G.ui.hint(html, s);

export function camTo(x, z, zoom = null, seconds = 2) { return G.renderer.cameraTo({ x, y: 0, z }, zoom, seconds); }
export function camFollow(obj = G.player, zoom = null, seconds = 1.5) {
  G.renderer.setFollow(obj);
  if (zoom) return G.renderer.zoomTo(zoom, seconds);
  return Promise.resolve();
}
export function camZoom(z, s = 2) { return G.renderer.zoomTo(z, s); }
export function shake(a = 0.3) { if (!G.settings?.v.reduceFlashes) G.renderer.shake = a; }

// run in real (unscaled) time, still frozen while paused
export function everyReal(fn) {
  return new Promise((resolve) => {
    const f = (dt) => { if (fn(dt)) { G.realUpdaters.delete(f); resolve(); } };
    G.realUpdaters.add(f);
  });
}
export function waitReal(s) { let t = 0; return everyReal((dt) => (t += dt) >= s); }

// ---------------------------------------------------------------------
// KEEP A MOMENT — the heart of the game.
// Time slows, colours bloom, and you have a few seconds to hold on.
// ---------------------------------------------------------------------
export async function keep(id, caption, { window: win = null, chapter = null, focus = null, holdTime = 1.5 } = {}) {
  const A = G.album;
  const ch = chapter ?? G.director.current?.chapter ?? 0;
  caption = fmt(caption);
  A.register(id, ch, caption, G.director.current?.id);
  if (A.has(id)) return true;
  const gentle = G.settings?.v.gentleKeep;
  const windowS = (win ?? G.director.keepWindow()) * (gentle ? 1.7 : 1);
  if (gentle) holdTime *= 0.6;
  const ui = G.ui, R = G.renderer;
  const k = ui.keepEl;
  const fill = k.querySelector('.fill'); const bar = k.querySelector('.timer div'); const msg = k.querySelector('.msg');
  msg.innerHTML = G.input.lastDevice === 'touch' ? 'Hold the screen to keep this moment' : 'Hold <b>Space</b> to keep this moment';
  k.classList.remove('hidden', 'lost', 'show'); void k.offsetWidth; k.classList.add('show');
  fill.style.strokeDashoffset = 251.3;
  sfx('chime');
  // slow time, bloom colour
  const ts0 = G.timeScale;
  tween(0.6, (t) => { G.timeScale = lerp(ts0, 0.3, t); });
  R.pulse('saturation', 1.22, 0.8); R.pulse('dream', 0.35, 0.8); R.pulse('vignette', -0.12, 0.8); R.pulse('warmth', 0.15, 0.8);
  const I0 = G.audio.intensityTarget;
  G.audio.setIntensity(Math.min(1, I0 + 0.3), 1.2);
  if (focus) { R.overrides.focusX = focus.x; R.overrides.focusY = focus.y; }

  // wait until the player starts holding, or the window passes
  let p = 0, left = windowS, kept = false;
  G.input.endFrame();
  await everyReal((dt) => {
    if (G.auto) { kept = G.autoKeep !== false; return true; }
    if (G.input.holding()) p += dt / holdTime; else p = Math.max(0, p - dt * 0.6);
    if (p <= 0.001) left -= dt; // the clock only runs while you aren't holding
    fill.style.strokeDashoffset = 251.3 * (1 - clamp(p, 0, 1));
    bar.style.transform = `scaleX(${clamp(left / windowS, 0, 1)})`;
    if (p >= 1) { kept = true; return true; }
    return left <= 0;
  });

  if (kept) {
    // take the photograph: render a clean frame and grab it
    G.director.renderNow();
    const img = R.snapshot(360, 270);
    ui.flash(0.9);
    sfx('shutter'); sfx('keep');
    const pp = G.player ? G.player.position.clone().add(new THREE.Vector3(0, 1, 0)) : R.camTarget.clone();
    G.world?.burst(pp, { count: 50, color: 0xffe4b0 });
    A.keep(id, caption, ch, img);
    const n = A.count();
    if (n >= 1) G.achieve?.('keep_1'); if (n >= 10) G.achieve?.('keep_10'); if (n >= 30) G.achieve?.('keep_30'); if (n >= 60) G.achieve?.('keep_60');
    k.classList.remove('show'); k.classList.add('hidden');
    ui.flyPolaroid(img, caption);
    await waitReal(0.4);
  } else {
    k.classList.add('lost');
    sfx('lost');
    A.lose(id);
    await waitReal(1.6);
    k.classList.remove('show', 'lost'); k.classList.add('hidden');
  }
  // restore
  tween(1.2, (t) => { G.timeScale = lerp(0.3, ts0 === 0.3 ? 1 : ts0, t); });
  R.pulse('saturation', 1, 1.5); R.pulse('dream', 0, 1.5); R.pulse('vignette', 0, 1.5); R.pulse('warmth', 0, 1.5);
  delete R.overrides.focusX; delete R.overrides.focusY;
  G.audio.setIntensity(I0, 3);
  await waitReal(kept ? 1.0 : 0.3);
  return kept;
}

// mark a moment as passed without the player ever seeing it
export function lose(id, caption, chapter = null) {
  const ch = chapter ?? G.director.current?.chapter ?? 0;
  G.album.register(id, ch, fmt(caption), G.director.current?.id);
  G.album.lose(id);
}

// move the player character by script
export async function walkPlayer(x, z, opts) { control(false); await G.player.walkTo(x, z, opts); }

// helper: a character jumps/hops in place a few times
export async function hop(c, n = 2, h = 0.25) {
  for (let i = 0; i < n; i++) await tween(0.35, (t) => { c.extraY = Math.sin(t * Math.PI) * h; }, (x) => x);
  c.extraY = 0;
}
// helper: lerp an object's position
export function slide(obj, to, seconds = 1) {
  const from = obj.position.clone(); const t3 = new THREE.Vector3(...to);
  return tween(seconds, (t) => obj.position.copy(from).lerp(t3, t));
}
