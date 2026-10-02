// Gentle, reusable interactions. None of them can really be "failed" —
// they are ways of being present in a moment.
import { G, wait, every, clamp, lerp } from './game.js';
import { el } from './ui.js';

function box(label) {
  const b = el('div', 'mgbox');
  if (label) b.appendChild(el('div', 'mglabel', label));
  G.ui.mgEl.appendChild(b);
  return b;
}
function closeBox(b) { b.style.transition = 'opacity 0.5s'; b.style.opacity = '0'; setTimeout(() => b.remove(), 520); }
const keyName = () => (G.input.lastDevice === 'touch' ? 'Hold the screen' : 'Hold Space');
const tapName = () => (G.input.lastDevice === 'touch' ? 'Tap' : 'Press Space');

// Hold to fill. onProgress(p) every frame. Releasing drains slowly.
export async function hold({ label = null, seconds = 3, onProgress = null, drain = 0.35 } = {}) {
  if (G.auto) { onProgress && onProgress(1, true, 0.1); await wait(0.3); return; }
  const b = box(label ?? keyName());
  const m = el('div', 'meter'); const fill = el('div'); m.appendChild(fill); b.appendChild(m);
  let p = 0;
  await every((dt) => {
    if (G.input.holding()) p += dt / seconds; else p -= dt * drain / seconds;
    p = clamp(p, 0, 1);
    fill.style.width = (p * 100) + '%';
    onProgress && onProgress(p, G.input.holding(), dt);
    return p >= 1;
  });
  closeBox(b);
}

// Tap repeatedly. onTap(i) after each tap.
export async function tap({ label = null, count = 5, onTap = null, timeout = null } = {}) {
  if (G.auto) { for (let i = 1; i <= count; i++) { onTap && onTap(i); await wait(0.05); } return count; }
  const b = box(label ?? tapName());
  const keys = el('div', 'mgkeys');
  const k = el('div', 'mgkey', G.input.lastDevice === 'touch' ? 'Tap' : 'Space'); keys.appendChild(k); b.appendChild(keys);
  const c = el('div', 'counter', `0 / ${count}`); b.appendChild(c);
  let n = 0, t = 0;
  let clicked = false; k.addEventListener('pointerdown', (e) => { e.stopPropagation(); clicked = true; });
  await every((dt) => {
    t += dt;
    const i = G.input;
    if (i.pressed('act') || i.pressed('pointer') || clicked) {
      clicked = false; i.consume('act'); i.consume('pointer'); n++;
      k.classList.remove('on'); void k.offsetWidth; k.classList.add('on'); setTimeout(() => k.classList.remove('on'), 120);
      c.textContent = `${n} / ${count}`;
      onTap && onTap(n);
    }
    return n >= count || (timeout && t > timeout);
  });
  closeBox(b);
  return n;
}

// Press on the beat. Uses the music's real beat when available.
// period: seconds per pulse (null → music beat; onlyBar: pulse on bar downbeats)
export async function rhythm({ label = 'Press Space with the music', hits = 6, period = null, onlyDownbeat = false, onHit = null, onPulse = null, window: win = 0.22, maxPulses = null } = {}) {
  if (G.auto) { for (let i = 1; i <= hits; i++) { onPulse && onPulse(i); onHit && onHit(i, 1); await wait(0.1); } return hits; }
  const b = box(label);
  const pulse = el('div', 'pulse'); const dot = el('div', 'dot'); const ring = el('div', 'ring'); pulse.appendChild(dot); pulse.appendChild(ring); b.appendChild(pulse);
  const hearts = el('div', 'hearts'); b.appendChild(hearts);
  for (let i = 0; i < hits; i++) hearts.appendChild(el('span', '', '○'));
  let got = 0, clicked = false, pulses = 0, lastPulseN = -1, t0 = G.realTime;
  pulse.addEventListener('pointerdown', (e) => { e.stopPropagation(); clicked = true; });
  let hitThisPulse = false;
  await every(() => {
    let phase, near, pulseN;
    if (period) {
      const tt = G.realTime - t0; phase = (tt % period) / period; pulseN = Math.floor(tt / period);
      near = Math.min(phase, 1 - phase) * period;
    } else {
      const bi = G.audio.beatInfo();
      const per = onlyDownbeat ? bi.dur * bi.beats : bi.dur;
      if (onlyDownbeat) {
        const barPhase = (bi.barBeat + bi.phase) / bi.beats; phase = barPhase; pulseN = Math.floor(bi.beat / bi.beats);
      } else { phase = bi.phase; pulseN = bi.beat; }
      near = Math.min(phase, 1 - phase) * per;
    }
    if (pulseN !== lastPulseN) { lastPulseN = pulseN; pulses++; hitThisPulse = false; onPulse && onPulse(pulses); }
    const s = 1 + (1 - phase) * 0.9;
    ring.style.transform = `scale(${s})`; ring.style.opacity = 0.3 + phase * 0.7;
    dot.style.transform = `scale(${0.8 + (near < win ? 0.4 : 0)})`;
    const i = G.input;
    if (i.pressed('act') || i.pressed('pointer') || clicked) {
      clicked = false; i.consume('act'); i.consume('pointer');
      if (near < win && !hitThisPulse) {
        hitThisPulse = true; got++;
        hearts.children[got - 1].textContent = '●';
        pulse.classList.remove('hit'); void pulse.offsetWidth; pulse.classList.add('hit');
        G.audio.sfx('good', { deg: [1, 3, 5, 8, 5, 3, 1, 8][got % 8] });
        onHit && onHit(got, 1 - near / win);
      } else { G.audio.sfx('miss'); onHit && onHit(got, -1); }
    }
    return got >= hits || (maxPulses && pulses >= maxPulses);
  });
  closeBox(b);
  return got;
}

// Keep a wobbling thing centred with left/right. Fills while centred.
export async function balance({ label = 'Keep your balance — ← →', seconds = 4, difficulty = 1, onUpdate = null } = {}) {
  if (G.auto) { onUpdate && onUpdate(0, 1, true); await wait(0.3); return; }
  const b = box(label);
  const bal = el('div', 'balance'); bal.innerHTML = '<div class="bar"></div><div class="zone"></div><div class="ball"></div>';
  b.appendChild(bal);
  const pads = el('div', 'touchpads');
  const L = el('div', 'mgkey', '←'), Rr = el('div', 'mgkey', '→'); pads.appendChild(L); pads.appendChild(Rr); b.appendChild(pads);
  let push = 0; const hold = (v) => (e) => { e.stopPropagation(); push = v; };
  L.addEventListener('pointerdown', hold(-1)); Rr.addEventListener('pointerdown', hold(1));
  const up = () => { push = 0; }; window.addEventListener('pointerup', up);
  const m = el('div', 'meter'); const fill = el('div'); m.appendChild(fill); b.appendChild(m);
  const ball = bal.querySelector('.ball');
  let x = 0.1, v = 0, p = 0, t = 0;
  await every((dt) => {
    t += dt;
    const ax = G.input.axis().x + push;
    const wob = Math.sin(t * 1.7) * 0.6 + Math.sin(t * 3.1 + 1) * 0.4;
    v += (wob * 0.55 * difficulty + x * 0.9 * difficulty + ax * 2.4) * dt;
    v *= Math.pow(0.15, dt);
    x = clamp(x + v * dt * 1.6, -1, 1);
    if (Math.abs(x) >= 1) v *= -0.3;
    const inZone = Math.abs(x) < 0.24;
    p = clamp(p + (inZone ? dt / seconds : -dt / seconds * 0.25), 0, 1);
    ball.style.left = ((x + 1) / 2 * 100) + '%';
    fill.style.width = (p * 100) + '%';
    onUpdate && onUpdate(x, p, inZone);
    return p >= 1;
  });
  window.removeEventListener('pointerup', up);
  closeBox(b);
}

// Press a sequence of directions (shown one at a time).
const ARROWS = { left: '←', right: '→', up: '↑', down: '↓' };
export async function sequence({ label = 'Follow along', keys = ['left', 'right', 'up'], onStep = null } = {}) {
  if (G.auto) { for (let i = 0; i < keys.length; i++) { onStep && onStep(i); await wait(0.1); } return; }
  const b = box(label);
  const row = el('div', 'mgkeys'); b.appendChild(row);
  const ks = keys.map((k) => { const e = el('div', 'mgkey', ARROWS[k] ?? k); row.appendChild(e); return e; });
  let i = 0, clicked = null;
  ks.forEach((e, j) => e.addEventListener('pointerdown', (ev) => { ev.stopPropagation(); clicked = j; }));
  const mark = () => ks.forEach((e, j) => { e.classList.toggle('on', j === i); e.classList.toggle('done', j < i); });
  mark();
  await every(() => {
    const inp = G.input;
    let pressed = null;
    for (const k of ['left', 'right', 'up', 'down']) if (inp.pressed(k)) pressed = k;
    if (clicked !== null) { pressed = clicked === i ? keys[i] : '__wrong'; clicked = null; }
    if (pressed) {
      if (pressed === keys[i]) { G.audio.sfx('good', { deg: [1, 2, 3, 5, 6, 8, 9, 10][i % 8] }); onStep && onStep(i); i++; mark(); }
      else { G.audio.sfx('miss'); ks[i].classList.remove('wrong'); void ks[i].offsetWidth; ks[i].classList.add('wrong'); }
    }
    return i >= keys.length;
  });
  await wait(0.3);
  closeBox(b);
}

// Do nothing. Just be here. Pressing keys gently restarts it.
export async function stillness({ label = 'Just be here. Don\'t press anything.', seconds = 6, onProgress = null } = {}) {
  if (G.auto) { onProgress && onProgress(1, 0.1); await wait(0.3); return; }
  const b = box(label);
  const s = el('div', 'still'); s.innerHTML = '<svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="40"/><circle class="fill" cx="50" cy="50" r="40"/></svg>';
  b.appendChild(s);
  const fill = s.querySelector('.fill');
  let t = 0, warned = 0;
  G.input.endFrame();
  await every((dt) => {
    const i = G.input;
    const moved = i.anyPress || i.isDown('left') || i.isDown('right') || i.isDown('up') || i.isDown('down');
    if (moved && t > 0.3) {
      t = Math.max(0, t - 1.5);
      if (warned++ % 2 === 0) b.querySelector('.mglabel').textContent = 'Shh… there\'s no hurry.';
    }
    t += dt;
    fill.style.strokeDashoffset = 251.3 * (1 - clamp(t / seconds, 0, 1));
    onProgress && onProgress(clamp(t / seconds, 0, 1), dt);
    return t >= seconds;
  });
  closeBox(b);
}

// A needle sweeps; press when it's in the sweet spot. Returns quality 0..1.
export async function timing({ label = 'Press Space at the right moment', speed = 1.2, sweet = 0.16, center = 0.7, tries = 3, onTry = null } = {}) {
  if (G.auto) { onTry && onTry(1, 1); await wait(0.2); return 1; }
  const b = box(label);
  const tm = el('div', 'timing'); tm.innerHTML = `<div class="sweet" style="left:${(center - sweet / 2) * 100}%;width:${sweet * 100}%"></div><div class="needle"></div>`;
  b.appendChild(tm);
  const needle = tm.querySelector('.needle');
  let t = 0, best = 0, n = 0, clicked = false;
  tm.addEventListener('pointerdown', (e) => { e.stopPropagation(); clicked = true; });
  tm.style.pointerEvents = 'auto';
  await every((dt) => {
    t += dt * speed;
    const x = (Math.sin(t * 2.2 - Math.PI / 2) + 1) / 2;
    needle.style.left = (x * 100) + '%';
    const i = G.input;
    if (i.pressed('act') || i.pressed('pointer') || clicked) {
      clicked = false; i.consume('act'); i.consume('pointer');
      const q = clamp(1 - Math.abs(x - center) / (sweet / 2 + 0.2), 0, 1);
      const inSweet = Math.abs(x - center) <= sweet / 2;
      best = Math.max(best, inSweet ? 1 : q * 0.7);
      n++;
      G.audio.sfx(inSweet ? 'good' : 'miss', { deg: 5 });
      onTry && onTry(inSweet ? 1 : q * 0.7, n);
      if (inSweet) return true;
    }
    return n >= tries;
  });
  closeBox(b);
  return best;
}

// Free-roam collection: the player walks into items. items: [{obj, x, z, r?}] (obj moves allowed)
export async function collect({ label = null, items, radius = 0.6, onCollect = null, timeLimit = null, needed = null, showCount = true } = {}) {
  const need = needed ?? items.length;
  if (G.auto) { let n = 0; for (const it of items) { if (n >= need) break; const pos = it.obj ? it.obj.position : it; G.player.position.x = pos.x; G.player.position.z = pos.z; it.got = true; n++; onCollect && onCollect(it, n); await wait(0.05); } return n; }
  const b = box(label);
  const c = el('div', 'counter', `0 / ${need}`); if (showCount) b.appendChild(c);
  G.director.setControl(true);
  let got = 0, t = 0;
  await every((dt) => {
    t += dt;
    const p = G.player.position;
    for (const it of items) {
      if (it.got) continue;
      const pos = it.obj ? it.obj.position : it;
      const r = it.r ?? radius;
      if (Math.hypot(pos.x - p.x, pos.z - p.z) < r + G.player.radius) {
        it.got = true; got++;
        c.textContent = `${got} / ${need}`;
        G.audio.sfx('good', { deg: [1, 3, 5, 6, 8, 10, 12][got % 7] });
        onCollect && onCollect(it, got);
      }
    }
    return got >= need || (timeLimit && t > timeLimit);
  });
  G.director.setControl(false);
  closeBox(b);
  return got;
}

// Walk with someone: they move along a path; if you fall behind, they wait for you.
export async function walkWith({ npc, path, maxDist = 2.2, label = null, speed = null } = {}) {
  if (G.auto) { for (const [x, z] of path) { await npc.walkTo(x, z, { speed: 8 }); G.player.position.x = x + 0.6; G.player.position.z = z + 0.6; } return; }
  const b = label ? box(label) : null;
  G.director.setControl(true);
  for (const [x, z] of path) {
    await new Promise((resolve) => {
      let moving = false;
      const f = () => {
        const d = Math.hypot(npc.position.x - G.player.position.x, npc.position.z - G.player.position.z);
        if (d > maxDist) { if (moving) { npc.stop(); moving = false; } npc.faceChar(G.player); }
        else if (!moving) {
          moving = true;
          npc.walkTo(x, z, { speed: speed ?? npc.walkSpeed }).then(() => { if (moving) { G.updaters.delete(f); resolve(); } });
        }
      };
      G.updaters.add(f);
    });
  }
  G.director.setControl(false);
  if (b) closeBox(b);
}

// Stay close to something that moves (a butterfly, a slow old dog, a child on a bike).
export async function stayNear({ target, dist = 1.6, seconds = 8, label = 'Stay close', onProgress = null } = {}) {
  if (G.auto) { onProgress && onProgress(1, true, 0.1); await wait(0.5); return; }
  const b = box(label);
  const m = el('div', 'meter'); const fill = el('div'); m.appendChild(fill); b.appendChild(m);
  G.director.setControl(true);
  let p = 0;
  await every((dt) => {
    const t = target.position ?? target;
    const d = Math.hypot(t.x - G.player.position.x, t.z - G.player.position.z);
    const near = d < dist;
    p = clamp(p + (near ? dt / seconds : -dt / seconds * 0.15), 0, 1);
    fill.style.width = (p * 100) + '%';
    onProgress && onProgress(p, near, dt);
    return p >= 1;
  });
  G.director.setControl(false);
  closeBox(b);
}
