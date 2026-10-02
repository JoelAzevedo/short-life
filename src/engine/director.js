// Runs scenes: builds the diorama, hands control to the player, watches the
// life clock, triggers moments, and moves the story forward.
import * as THREE from 'three';
import { G, clamp, lerp, wait, fmt, dist2 } from './game.js';
import { World } from './world.js';
import { el } from './ui.js';
import { CHAPTER_NAMES } from './album.js';

const KEEP_WINDOWS = [8, 9, 8, 7, 7, 6.5, 3.5, 6.5, 9];

export class Director {
  constructor(scenes) {
    this.scenes = scenes;
    this.index = 0;
    this.current = null;
    this.ctx = null;
    this.control = false;
    this.inMoment = false;
    this.moveTarget = null;
    this.pendingHotspot = null;
    this.stepT = 0;
    this.clock = null;
    this.menuOpen = false;
    this.reachedChapter = 1;
  }

  keepWindow() { return this.current?.keepWindow ?? KEEP_WINDOWS[this.current?.chapter ?? 0] ?? 7; }
  setControl(on) {
    this.control = on;
    if (!on) { this.moveTarget = null; this.vel = { x: 0, z: 0 }; G.ui.setPrompt(null); if (G.player) G.player._playerMoving = false; }
  }
  renderNow() { G.renderer.render(); }

  async start(index = 0) {
    this.index = index;
    this.runToken = (this.runToken || 0) + 1;
    const token = this.runToken;
    while (this.index < this.scenes.length && token === this.runToken) {
      const def = this.scenes[this.index];
      this.reachedChapter = Math.max(this.reachedChapter, def.chapter);
      G.album.forgetFrom(this.scenes.slice(this.index).map((s) => s.id));
      G.album.save(this.index);
      try { localStorage.setItem('lm.reached', String(this.reachedChapter)); } catch (e) { /* ignore */ }
      await this.runScene(def, token);
      if (token !== this.runToken) return;
      this.index++;
      const next = this.scenes[this.index];
      if (!next || next.chapter !== def.chapter) this.chapterDone(def.chapter, !next);
    }
  }

  chapterDone(ch, last) {
    if (ch >= 1 && ch <= 7) G.achieve?.('ch' + ch);
    if (ch >= 1 && G.album.chapterComplete(ch)) G.achieve?.('present');
    if (ch === 5) {
      G.achieve?.(G.state.childKind === 'son' ? 'son' : 'daughter');
      if ((G.state.stats.workTimes || 0) === (G.state.stats.workAtCh5 || 0)) G.achieve?.('unplugged');
    }
    if (last) {
      G.album.save(0); // the life is complete: the title offers a new one
      G.achieve?.('the_end');
      G.achieve?.(G.state.identity === 'father' ? 'as_father' : 'as_mother');
      if (G.ach?.remember('identity', G.state.identity) >= 2) G.achieve?.('both_lives');
    }
  }

  async runScene(def, token) {
    const ui = G.ui;
    this.setControl(false);
    // tear down the previous diorama
    if (G.world) { G.world.dispose(); }
    G.renderer.overrides = {};
    G.timeScale = 1;
    const world = new World({ bounds: def.bounds ?? { minX: -9, maxX: 9, minZ: -9, maxZ: 9 }, name: def.id });
    G.world = world;
    G.player = null;
    this.current = def;
    const ctx = { def, world, flags: G.state.flags, director: this };
    this.ctx = ctx;
    ctx.passTime = (s) => this.passTime(s);
    ctx.hotspot = (id) => world.getHotspot(id);
    ctx.done = (id) => !!world.getHotspot(id)?.done;
    ctx.end = () => { this.sceneOver = true; };
    this.sceneOver = false;
    def.build(ctx);
    // camera
    const R = G.renderer;
    R.camBounds = def.camBounds ?? null;
    R.zoomGoal = def.zoom ?? 14;
    if (G.player) R.setFollow(G.player); else R.setFollow(null);
    if (def.camAt) { R.follow = null; R.camGoal.set(def.camAt[0], 0, def.camAt[1]); }
    R.snapCamera();
    if (def.mood) R.setMood(def.mood, 0);
    // moments
    for (const m of def.moments ?? []) {
      if (m.caption) G.album.register(m.caption.id ?? m.id, def.chapter, fmt(m.caption.text ?? m.caption), def.id, m.alt);
      const anchor = m.anchor ? m.anchor(ctx) : null;
      const h = world.hotspot({ id: m.id, label: m.label, kind: m.kind ?? 'little', x: m.at?.[0], z: m.at?.[1], radius: m.radius ?? 1.2, anchor, height: m.height, offset: m.offset, enabled: false });
      h.m = m;
    }
    this.refreshHotspots();
    // clock
    this.clock = def.clock ? { seconds: def.clock.seconds, t: 0, over: false, ages: def.ages ?? [0, 1] } : null;
    ui.clock(!!this.clock);
    if (def.ages) ui.setClock(0, Math.floor(def.ages[0]));
    ui.showHud(true);
    if (def.music) G.audio.music(def.music, { intensity: def.intensity ?? 0.4 });
    if (def.ambience) G.audio.ambience(def.ambience);

    // intro
    if (def.card) { await ui.fade(1, 1.2, '#16121a'); await ui.chapterCard(def.card); }
    if (def.intro) await this.safe(() => def.intro(ctx));
    else await ui.fadeIn(1.5);
    if (token !== this.runToken) return;

    // free roam until the scene says it's over
    if (def.moments?.length || def.freeRoam) {
      this.setControl(true);
      if (def.hint && !this.hintShown?.[def.id]) { ui.hint(def.hint, 9); }
      await new Promise((resolve) => { this.sceneResolve = resolve; });
      if (token !== this.runToken) return;
    }
    this.setControl(false);
    // anything you didn't get to has passed
    for (const h of world.hotspots) if (h.done && h.m) { (G.album.lived ??= new Set()).add(h.m.caption?.id ?? h.m.id); }
    for (const h of world.hotspots) if (!h.done && !h.otherLife && h.m?.caption) G.album.lose(h.m.caption.id ?? h.m.id);
    if (def.outro) await this.safe(() => def.outro(ctx));
    if (token !== this.runToken) return;
    ui.clock(false);
  }

  async safe(fn) {
    try { await fn(); } catch (e) { console.error('[scene error]', e); }
  }

  refreshHotspots() {
    const world = G.world; if (!world) return;
    for (const h of world.hotspots) {
      if (h.done) continue;
      const m = h.m; if (!m) continue;
      let ok = true;
      if (m.requires) ok = m.requires.every((id) => world.getHotspot(id)?.done);
      if (ok && m.when) ok = !!m.when(this.ctx);
      if (this.clock?.over && (m.kind ?? 'little') === 'little') ok = false;
      if (ok && !h.enabled) { h.setEnabled(true); if (this.control) G.audio.sfx('chime', { vol: 0.35 }); }
      else if (!ok && h.enabled) h.setEnabled(false);
    }
  }

  async runMoment(h) {
    if (this.inMoment) return;
    const def = this.current, ctx = this.ctx;
    this.inMoment = true;
    this.setControl(false);
    G.ui.hideHint();
    h.near = false;
    const m = h.m;
    if (m.once !== false) h.complete();
    // choosing one path closes its alternatives
    if (m.alt) for (const o of ctx.world.hotspots) if (o !== h && o.m?.alt === m.alt && !o.done) { o.setEnabled(false); o.done = true; o.otherLife = true; }
    try { await m.run(ctx, h); } catch (e) { console.error('[moment error]', m.id, e); }
    if (m.once === false) h.setEnabled(true);
    h.done = m.once !== false;
    this.inMoment = false;
    if (G.world !== ctx.world) return;
    this.refreshHotspots();
    const finalDone = def.final ? ctx.world.getHotspot(def.final)?.done : false;
    if (finalDone || this.sceneOver || (def.exitWhen && def.exitWhen(ctx))) { this.finishFreeRoam(); return; }
    this.setControl(true);
  }
  finishFreeRoam() { const r = this.sceneResolve; this.sceneResolve = null; r && r(); }

  passTime(seconds) {
    if (!this.clock) return;
    this.clock.t = Math.min(this.clock.seconds, this.clock.t + seconds);
  }

  async timeUp() {
    const def = this.current, ctx = this.ctx;
    this.clock.over = true;
    this.inMoment = true; this.setControl(false);
    for (const h of G.world.hotspots) {
      if (!h.done && (h.m?.kind ?? 'little') === 'little') {
        h.setEnabled(false); h.done = true;
        if (h.m?.caption) G.album.lose(h.m.caption.id ?? h.m.id);
      }
    }
    G.audio.sfx('lost', { vol: 0.6 });
    try { if (def.onTimeUp) await def.onTimeUp(ctx); else await G.ui.lower(def.timeUpText ?? 'And just like that, the day was gone.'); } catch (e) { console.error(e); }
    this.inMoment = false;
    this.refreshHotspots();
    const remaining = G.world.hotspots.some((h) => !h.done && h.enabled);
    if (!remaining || this.sceneOver) { this.finishFreeRoam(); return; }
    this.setControl(true);
  }

  // ---------- per-frame ----------
  update(dt, realDt) {
    const p = G.player, inp = G.input, R = G.renderer;
    if (!G.world) return;
    // life clock
    if (this.clock && !this.clock.over) {
      if (this.control && !this.inMoment) this.clock.t += realDt;
      const k = clamp(this.clock.t / this.clock.seconds, 0, 1);
      const a = this.clock.ages; const age = lerp(a[0], a[1], k);
      G.ui.setClock(k, Math.floor(age), k > 0.85);
      if (k >= 1 && !this.inMoment && this.control) this.timeUp();
    }
    if (!p) return;
    // nearest hotspot
    let near = null, nd = Infinity;
    if (this.control && !this.inMoment) {
      for (const h of G.world.hotspots) {
        if (!h.enabled || h.done) { h.near = false; continue; }
        const hp = h.position; const d = dist2(hp.x, hp.z, p.position.x, p.position.z);
        h.near = false;
        if (d < h.radius && d < nd) { nd = d; near = h; }
      }
      if (near) near.near = true;
    }
    if (G.ui.promptTarget !== near) G.ui.setPrompt(near);

    if (!this.control) return;
    // automated test playthrough: visit every moment in order
    if (G.auto && !this.inMoment) {
      const h = G.world.hotspots.find((x) => x.enabled && !x.done && (G.autoSkip ? x.kind !== 'little' : true) && x.kind !== 'work');
      const hw = h ?? G.world.hotspots.find((x) => x.enabled && !x.done);
      if (hw) { const hp = hw.position; const r = G.world.resolve(hp.x + 0.3, hp.z + 0.3, p.radius); p.position.x = r.x; p.position.z = r.z; G.log?.push('moment: ' + hw.id); this.runMoment(hw); }
      return;
    }
    // interaction
    if (!this.inMoment && near && (inp.pressed('act') || G.ui.promptClicked)) { inp.consume('act'); G.ui.promptClicked = false; this.runMoment(near); return; }
    G.ui.promptClicked = false;
    if (this.pendingHotspot && this.pendingHotspot === near) { this.pendingHotspot = null; this.moveTarget = null; this.runMoment(near); return; }

    // clicks: on a hotspot → walk there and interact; on ground → walk there
    for (const c of inp.clicks) {
      let hit = null;
      for (const h of G.world.hotspots) {
        if (!h.enabled || h.done) continue;
        const pos = h.position.clone(); pos.y = h.def.height ?? 1;
        const sp = R.project(pos);
        if (Math.hypot(sp.x - c.x, sp.y - c.y) < 46) hit = h;
      }
      if (hit) { this.pendingHotspot = hit; const hp = hit.position; this.moveTarget = new THREE.Vector3(hp.x, 0, hp.z); }
      else { const g = R.unproject(c.x, c.y, 0); if (g) { this.moveTarget = g; this.pendingHotspot = null; } }
    }
    // held pointer → walk towards it (touch-friendly)
    if (inp.pointer.down && inp.pointer.moved) { const g = R.unproject(inp.pointer.x, inp.pointer.y, 0); if (g) { this.moveTarget = g; this.pendingHotspot = null; } }

    // movement
    const ax = inp.axis();
    const sp = p.walkSpeed * (this.current.speedMul ?? 1);
    let vx = 0, vz = 0;
    if (ax.x || ax.y) {
      const { fwd, right } = R.groundBasis();
      vx = right.x * ax.x + fwd.x * ax.y; vz = right.z * ax.x + fwd.z * ax.y;
      const l = Math.hypot(vx, vz); vx /= l; vz /= l;
      this.moveTarget = null; this.pendingHotspot = null;
    } else if (this.moveTarget) {
      const dx = this.moveTarget.x - p.position.x, dz = this.moveTarget.z - p.position.z; const d = Math.hypot(dx, dz);
      const stop = this.pendingHotspot ? Math.max(0.2, this.pendingHotspot.radius * 0.6) : 0.12;
      if (d < stop) { this.moveTarget = null; }
      else { vx = dx / d; vz = dz / d; }
    }
    // smooth acceleration; babies lurch forward in little crawl surges, toddlers wobble
    let surge = 1;
    if (p.age < 1.3) surge = 0.55 + 0.75 * Math.abs(Math.sin(p.walkPhase * 0.8));
    else if (p.age < 2.6) surge = 0.8 + 0.25 * Math.abs(Math.sin(p.walkPhase));
    const tvx = vx * sp * surge, tvz = vz * sp * surge;
    const accel = (vx || vz) ? (p.age < 2.6 ? 6 : 10) : 12;
    this.vel = this.vel || { x: 0, z: 0 };
    this.vel.x += (tvx - this.vel.x) * (1 - Math.exp(-accel * dt));
    this.vel.z += (tvz - this.vel.z) * (1 - Math.exp(-accel * dt));
    const vmag = Math.hypot(this.vel.x, this.vel.z);
    if (vmag > 0.03) {
      const nx = p.position.x + this.vel.x * dt, nz = p.position.z + this.vel.z * dt;
      const r = G.world.resolve(nx, nz, p.radius);
      const moved = Math.hypot(r.x - p.position.x, r.z - p.position.z);
      // stuck against something while click-walking → give up
      if (this.moveTarget && moved < vmag * dt * 0.1) { this.stuck = (this.stuck || 0) + dt; if (this.stuck > 0.4) { this.moveTarget = null; this.stuck = 0; } } else this.stuck = 0;
      if (dt > 0) { this.vel.x = (r.x - p.position.x) / dt; this.vel.z = (r.z - p.position.z) / dt; }
      p.position.x = r.x; p.position.z = r.z;
      if (vx || vz) p.targetHeading = Math.atan2(vx, vz);
      p.speed = Math.max(vmag, (vx || vz) ? sp * 0.6 : 0); p._playerMoving = true;
      this.stepT -= dt * vmag;
      if (this.stepT <= 0) { this.stepT = p.age < 1.3 ? 0.5 : 0.62; G.audio.sfx('step', { surface: this.current.surface ?? 'grass', vol: p.age < 3 ? 0.5 : 1 }); }
    } else { p._playerMoving = false; this.vel.x = this.vel.z = 0; }
  }

  // ---------- pause menu ----------
  toggleMenu() {
    if (G.album.open) { G.album.hide(); return; }
    if (this.menuOpen) return this.closeMenu();
    if (!this.current) return;
    this.menuOpen = true; G.paused = true;
    G.audio.duck(0.45);
    const m = document.querySelector('#menu'); m.innerHTML = ''; m.classList.remove('hidden');
    const p = el('div', 'panel');
    p.appendChild(el('h2', '', 'Paused'));
    const btn = (label, fn) => { const b = el('button', '', label); b.addEventListener('click', fn); p.appendChild(b); return b; };
    btn('Continue', () => this.closeMenu());
    btn('Album', () => { this.closeMenu(); this.openAlbum(); });
    const slider = (label, kind) => {
      const l = el('label', '', `<span>${label}</span>`); const r = el('input'); r.type = 'range'; r.min = 0; r.max = 1; r.step = 0.05; r.value = G.audio.vol[kind];
      r.addEventListener('input', () => G.audio.setVolume(kind, parseFloat(r.value))); l.appendChild(r); p.appendChild(l);
    };
    slider('Music', 'music'); slider('Sound', 'sfx'); slider('Ambience', 'amb');
    const autoL = el('label', '', '<span>Auto-advance text</span>'); const cb = el('input'); cb.type = 'checkbox'; cb.checked = G.ui.settings.auto;
    cb.addEventListener('change', () => { G.ui.settings.auto = cb.checked; G.ui.saveSettings(); }); autoL.appendChild(cb); p.appendChild(autoL);
    const aoL = el('label', '', '<span>Ambient occlusion (quality)</span>'); const ao = el('input'); ao.type = 'checkbox'; ao.checked = G.renderer.ao.enabled;
    ao.addEventListener('change', () => G.renderer.setAO(ao.checked)); aoL.appendChild(ao); p.appendChild(aoL);
    btn('Achievements', () => { this.closeMenu(); G.showAchievements?.(); });
    btn('Replay this scene', () => { this.closeMenu(); this.restartScene(); });
    btn('Return to title', () => { this.closeMenu(); this.onTitle && this.onTitle(); });
    p.appendChild(el('div', 'small', `${CHAPTER_NAMES[this.current.chapter] ?? ''}<br>Move: WASD / arrows / click · Interact: Space / click · Keep: hold Space`));
    m.appendChild(p);
  }
  closeMenu() { this.menuOpen = false; G.paused = false; G.audio.duck(1); document.querySelector('#menu').classList.add('hidden'); }
  openAlbum() {
    G.paused = true;
    G.album.show(this.current?.chapter ?? 1, { reachedChapter: this.reachedChapter, onClose: () => { if (!this.menuOpen) G.paused = false; } });
  }
  restartScene() { this.abort(); this.start(this.index); }
  abort() {
    this.runToken = (this.runToken || 0) + 1;
    this.sceneResolve = null; this.inMoment = false;
    G.updaters.clear(); G.realUpdaters.clear();
    G.ui.mgEl.innerHTML = ''; G.ui.bubblesEl.innerHTML = ''; G.ui.bubbles = []; G.ui.narrEl.innerHTML = ''; G.ui.lowerEl.innerHTML = '';
    G.ui.choicesEl.classList.add('hidden'); G.ui.keepEl.classList.add('hidden'); G.ui.setPrompt(null);
    document.querySelector('#card').classList.add('hidden');
    G.timeScale = 1;
  }
}
