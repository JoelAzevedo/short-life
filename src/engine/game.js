// Shared game singleton + small utilities used everywhere.
import * as THREE from 'three';

export const G = {
  time: 0,          // scaled game time (seconds)
  realTime: 0,      // unscaled
  dt: 0,
  timeScale: 1,
  paused: false,
  debug: false,
  renderer: null,
  scene: null,
  camera: null,
  world: null,
  player: null,
  ui: null,
  audio: null,
  input: null,
  album: null,
  director: null,
  // persistent story state
  state: {
    identity: 'mother',   // 'mother' | 'father'
    childName: 'Lily',
    childKind: 'daughter', // 'daughter' | 'son'
    flags: {},
    stats: { emails: 0, workCalls: 0 },
  },
  updaters: new Set(),      // scaled-time per-frame callbacks
  realUpdaters: new Set(),  // real-time per-frame callbacks (still frozen while paused)
};

// ---------- string helpers that depend on the player's choices ----------
export function me() { return G.state.identity === 'father' ? 'Dad' : 'Mom'; }
export function meLower() { return me().toLowerCase(); }
export function grandMe() { return G.state.identity === 'father' ? 'Grandpa' : 'Grandma'; }
export function child() { return G.state.childName || 'Lily'; }
export function they() { return G.state.childKind === 'son' ? 'he' : 'she'; }
export function them() { return G.state.childKind === 'son' ? 'him' : 'her'; }
export function their() { return G.state.childKind === 'son' ? 'his' : 'her'; }
export function They() { const t = they(); return t[0].toUpperCase() + t.slice(1); }
export function Their() { const t = their(); return t[0].toUpperCase() + t.slice(1); }
// fill {me} {child} {they} ... templates
export function fmt(s) {
  return s
    .replace(/\{me\}/g, me())
    .replace(/\{grandme\}/g, grandMe())
    .replace(/\{child\}/g, child())
    .replace(/\{they\}/g, they())
    .replace(/\{They\}/g, They())
    .replace(/\{them\}/g, them())
    .replace(/\{their\}/g, their())
    .replace(/\{Their\}/g, Their());
}

// ---------- math ----------
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
export const easeIn = (t) => t * t * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

// deterministic RNG
export function rng(seed = 1) {
  let s = seed >>> 0 || 1;
  const f = () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return (s >>> 0) / 4294967296;
  };
  f.range = (a, b) => a + (b - a) * f();
  f.int = (a, b) => Math.floor(a + (b - a + 1) * f());
  f.pick = (arr) => arr[Math.floor(f() * arr.length)];
  return f;
}
export const R = rng(12345);

// ---------- timing ----------
// Waits in *scaled game time* (respects pause and slow-motion)
export function wait(seconds) {
  return new Promise((resolve) => {
    let t = 0;
    const fn = (dt) => {
      t += dt;
      if (t >= seconds) { G.updaters.delete(fn); resolve(); }
    };
    G.updaters.add(fn);
  });
}
// waits for a predicate to become true
export function until(pred) {
  return new Promise((resolve) => {
    if (pred()) return resolve();
    const fn = () => { if (pred()) { G.updaters.delete(fn); resolve(); } };
    G.updaters.add(fn);
  });
}
// tween a value over time: onUpdate(eased t)
export function tween(seconds, onUpdate, ease = easeInOut) {
  return new Promise((resolve) => {
    let t = 0;
    if (seconds <= 0) { onUpdate(1); return resolve(); }
    const fn = (dt) => {
      t += dt;
      const k = clamp(t / seconds, 0, 1);
      onUpdate(ease(k));
      if (k >= 1) { G.updaters.delete(fn); resolve(); }
    };
    G.updaters.add(fn);
  });
}
// run a function every frame until it returns true
export function every(fn) {
  return new Promise((resolve) => {
    const f = (dt) => { if (fn(dt)) { G.updaters.delete(f); resolve(); } };
    G.updaters.add(f);
  });
}

export const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
export function dist2(ax, az, bx, bz) { const dx = ax - bx, dz = az - bz; return Math.sqrt(dx * dx + dz * dz); }
