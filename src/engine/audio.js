// Procedural audio: synthesized instruments, an adaptive music sequencer,
// ambient soundscapes and sound effects. No audio files — everything is generated.
import { G, clamp, rng } from './game.js';
import { PROFILES, KEYS, SCALES, parseChord, degreeToSemi } from './music.js';

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

export class Audio {
  constructor() {
    this.ready = false;
    this.vol = { master: 0.85, music: 0.8, sfx: 0.85, amb: 0.7 };
    this.voices = [];
    this.intensity = 0.4; this.intensityTarget = 0.4;
    this.amb = {};
    this.beatLog = []; // [{time, beat, bar, dur}]
    this.tempoMul = 1;
    this.listeners = new Set();
    try { const v = JSON.parse(localStorage.getItem('lm.vol') || 'null'); if (v) Object.assign(this.vol, v); } catch (e) { /* ignore */ }
  }

  init() {
    if (this.ready) { this.ctx.resume?.(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain(); this.master.gain.value = this.vol.master;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3; comp.attack.value = 0.01; comp.release.value = 0.3;
    this.master.connect(comp); comp.connect(ctx.destination);
    this.musicBus = ctx.createGain(); this.musicBus.gain.value = this.vol.music;
    this.musicFilter = ctx.createBiquadFilter(); this.musicFilter.type = 'lowpass'; this.musicFilter.frequency.value = 18000;
    this.musicBus.connect(this.musicFilter); this.musicFilter.connect(this.master);
    this.sfxBus = ctx.createGain(); this.sfxBus.gain.value = this.vol.sfx; this.sfxBus.connect(this.master);
    this.ambBus = ctx.createGain(); this.ambBus.gain.value = this.vol.amb; this.ambBus.connect(this.master);
    // reverb
    this.reverb = ctx.createConvolver(); this.reverb.buffer = this._impulse(3.2, 2.6);
    this.revIn = ctx.createGain(); this.revIn.gain.value = 1;
    const revOut = ctx.createGain(); revOut.gain.value = 0.55;
    this.revIn.connect(this.reverb); this.reverb.connect(revOut); revOut.connect(this.musicFilter);
    this.sfxRev = ctx.createGain(); this.sfxRev.gain.value = 0.6; this.sfxRev.connect(this.revIn);
    // shared buffers
    this.noise = this._noiseBuffer(2, 'white');
    this.pink = this._noiseBuffer(4, 'pink');
    this.brown = this._noiseBuffer(4, 'brown');
    this.ready = true;
    this.nextBeatClock = ctx.currentTime + 0.1;
    this.timer = setInterval(() => this._schedule(), 25);
    this._ambInit();
  }

  setVolume(kind, v) {
    this.vol[kind] = v;
    try { localStorage.setItem('lm.vol', JSON.stringify(this.vol)); } catch (e) { /* ignore */ }
    if (!this.ready) return;
    const bus = { master: this.master, music: this.musicBus, sfx: this.sfxBus, amb: this.ambBus }[kind];
    bus.gain.setTargetAtTime(v, this.ctx.currentTime, 0.1);
  }
  get now() { return this.ready ? this.ctx.currentTime : performance.now() / 1000; }

  _impulse(seconds, decay) {
    const ctx = this.ctx, rate = ctx.sampleRate, len = Math.floor(rate * seconds);
    const b = ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay) * (i < rate * 0.01 ? i / (rate * 0.01) : 1);
    }
    return b;
  }
  _noiseBuffer(seconds, kind) {
    const ctx = this.ctx, len = Math.floor(ctx.sampleRate * seconds);
    const b = ctx.createBuffer(1, len, ctx.sampleRate); const d = b.getChannelData(0);
    let l = 0, b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      if (kind === 'white') d[i] = w;
      else if (kind === 'brown') { l = (l + 0.02 * w) / 1.02; d[i] = l * 3.5; }
      else { b0 = 0.99765 * b0 + w * 0.099046; b1 = 0.963 * b1 + w * 0.2965164; b2 = 0.57 * b2 + w * 1.0526913; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.18; }
    }
    return b;
  }

  // ============ instruments ============
  // play one note; dest is a node; returns nothing
  note(inst, midi, t, dur, vel = 0.8, dest = null) {
    if (!this.ready) return;
    const ctx = this.ctx; const out = dest ?? this.musicBus;
    const f = mtof(midi);
    const env = (g, a, peak, d, sus, rel, end) => {
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(peak, t + a);
      g.gain.setTargetAtTime(sus, t + a, d);
      g.gain.setTargetAtTime(0.0001, end, rel);
    };
    const osc = (type, freq, detune = 0) => { const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq; o.detune.value = detune; return o; };
    const stopAt = (nodes, when) => nodes.forEach((n) => { n.start(t); n.stop(when); });
    switch (inst) {
      case 'musicbox': {
        const g = ctx.createGain(); g.connect(out);
        const end = t + Math.max(1.6, dur + 1.2);
        const o1 = osc('sine', f), o2 = osc('sine', f * 4.01), o3 = osc('sine', f * 2.0);
        const g1 = ctx.createGain(), g2 = ctx.createGain(), g3 = ctx.createGain();
        g1.gain.setValueAtTime(0.0001, t); g1.gain.exponentialRampToValueAtTime(0.45 * vel, t + 0.004); g1.gain.exponentialRampToValueAtTime(0.0001, end);
        g2.gain.setValueAtTime(0.0001, t); g2.gain.exponentialRampToValueAtTime(0.09 * vel, t + 0.002); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        g3.gain.setValueAtTime(0.0001, t); g3.gain.exponentialRampToValueAtTime(0.1 * vel, t + 0.003); g3.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
        o1.connect(g1); o2.connect(g2); o3.connect(g3); g1.connect(g); g2.connect(g); g3.connect(g);
        stopAt([o1, o2, o3], end + 0.05);
        break;
      }
      case 'bell': {
        const end = t + 3.5;
        [[1, 0.35, 3.2], [2.76, 0.16, 1.8], [5.4, 0.08, 0.9], [8.93, 0.04, 0.45]].forEach(([m, a, d]) => {
          const o = osc('sine', f * m); const g = ctx.createGain();
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(a * vel, t + 0.003); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
          o.connect(g); g.connect(out); stopAt([o], end);
        });
        break;
      }
      case 'piano': {
        const end = t + dur + 1.6;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass';
        lp.frequency.setValueAtTime(900 + vel * 3800, t); lp.frequency.setTargetAtTime(500 + f * 1.2, t + 0.01, 0.5);
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.32 * vel, t + 0.005);
        g.gain.setTargetAtTime(0.12 * vel, t + 0.005, 0.35); g.gain.setTargetAtTime(0.0001, t + dur, 0.35);
        const o1 = osc('triangle', f), o2 = osc('sine', f * 2, 3), o3 = osc('triangle', f, -6);
        const g2 = ctx.createGain(); g2.gain.value = 0.25;
        o1.connect(lp); o3.connect(lp); o2.connect(g2); g2.connect(lp); lp.connect(g); g.connect(out);
        stopAt([o1, o2, o3], end);
        break;
      }
      case 'pad': {
        const end = t + dur + 2.5;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 650 + vel * 500; lp.Q.value = 0.5;
        const g = ctx.createGain(); env(g, Math.min(1.2, dur * 0.4), 0.09 * vel, 0.8, 0.07 * vel, 0.9, t + dur);
        const os = [osc('sawtooth', f, -9), osc('sawtooth', f, 9), osc('triangle', f / 2)];
        os.forEach((o) => o.connect(lp)); lp.connect(g); g.connect(out);
        stopAt(os, end);
        break;
      }
      case 'strings': {
        const end = t + dur + 1.8;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400 + vel * 800; lp.Q.value = 0.4;
        const g = ctx.createGain(); env(g, Math.min(0.45, dur * 0.4), 0.075 * vel, 0.5, 0.06 * vel, 0.5, t + dur);
        const lfo = osc('sine', 5.2); const lg = ctx.createGain(); lg.gain.value = 7; lfo.connect(lg);
        const os = [osc('sawtooth', f, -7), osc('sawtooth', f, 6), osc('sawtooth', f * 2, 2)];
        os.forEach((o) => { lg.connect(o.detune); o.connect(lp); });
        lp.connect(g); g.connect(out);
        stopAt([...os, lfo], end);
        break;
      }
      case 'marimba': {
        const end = t + 1.0;
        [[1, 0.42, 0.55], [4, 0.1, 0.08], [9.9, 0.03, 0.03]].forEach(([m, a, d]) => {
          const o = osc('sine', f * m); const g = ctx.createGain();
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(a * vel, t + 0.003); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
          o.connect(g); g.connect(out); stopAt([o], end);
        });
        break;
      }
      case 'pluck':
      case 'guitar': {
        const end = t + 1.6;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = inst === 'guitar' ? 2 : 1;
        lp.frequency.setValueAtTime(inst === 'guitar' ? 3200 : 2400, t); lp.frequency.exponentialRampToValueAtTime(400, t + 0.35);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.26 * vel, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + (inst === 'guitar' ? 1.4 : 0.7));
        const os = [osc('sawtooth', f), osc('triangle', f * 2, 4)];
        os.forEach((o) => o.connect(lp)); lp.connect(g); g.connect(out);
        stopAt(os, end);
        break;
      }
      case 'softbass': {
        const end = t + dur + 0.6;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380;
        const g = ctx.createGain(); env(g, 0.02, 0.45 * vel, 0.3, 0.25 * vel, 0.15, t + dur * 0.9);
        const os = [osc('sine', f), osc('triangle', f, 4)];
        os.forEach((o) => o.connect(lp)); lp.connect(g); g.connect(out);
        stopAt(os, end);
        break;
      }
      case 'flute': {
        const end = t + dur + 0.6;
        const g = ctx.createGain(); env(g, 0.06, 0.16 * vel, 0.2, 0.12 * vel, 0.12, t + dur * 0.95);
        const o = osc('sine', f); const o2 = osc('triangle', f * 2); const g2 = ctx.createGain(); g2.gain.value = 0.08;
        const lfo = osc('sine', 5); const lg = ctx.createGain(); lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(9, t + 0.4); lfo.connect(lg); lg.connect(o.detune); lg.connect(o2.detune);
        o.connect(g); o2.connect(g2); g2.connect(g); g.connect(out);
        stopAt([o, o2, lfo], end);
        break;
      }
      case 'whistle': {
        const end = t + dur + 0.5;
        const g = ctx.createGain(); env(g, 0.05, 0.14 * vel, 0.2, 0.11 * vel, 0.1, t + dur * 0.9);
        const o = osc('sine', f * 2);
        o.frequency.setValueAtTime(f * 2 * 0.97, t); o.frequency.exponentialRampToValueAtTime(f * 2, t + 0.06);
        const lfo = osc('sine', 6); const lg = ctx.createGain(); lg.gain.value = 14; lfo.connect(lg); lg.connect(o.detune);
        const n = ctx.createBufferSource(); n.buffer = this.noise; const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f * 2; bp.Q.value = 12; const ng = ctx.createGain(); ng.gain.value = 0.25 * vel;
        n.connect(bp); bp.connect(ng); ng.connect(g);
        o.connect(g); g.connect(out);
        stopAt([o, lfo, n], end);
        break;
      }
      case 'hum': { // soft "mmm/ooh" voice
        const end = t + dur + 0.9;
        const src = [osc('sawtooth', f, -4), osc('sawtooth', f, 5)];
        const lfo = osc('sine', 4.8); const lg = ctx.createGain(); lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(12, t + 0.5); lfo.connect(lg);
        const mix = ctx.createGain(); mix.gain.value = 0.5;
        src.forEach((o) => { lg.connect(o.detune); o.connect(mix); });
        const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 320; f1.Q.value = 3;
        const f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 800; f2.Q.value = 5;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400;
        const g2 = ctx.createGain(); g2.gain.value = 0.35;
        mix.connect(f1); mix.connect(f2); f2.connect(g2);
        const g = ctx.createGain(); env(g, 0.18, 0.55 * vel, 0.4, 0.45 * vel, 0.25, t + dur * 0.95);
        f1.connect(lp); g2.connect(lp); lp.connect(g); g.connect(out);
        stopAt([...src, lfo], end);
        break;
      }
      default: break;
    }
  }

  drum(kind, t, vel = 1, dest = null) {
    if (!this.ready) return;
    const ctx = this.ctx; const out = dest ?? this.musicBus;
    const noise = (filterType, freq, q, a, d, gain) => {
      const n = ctx.createBufferSource(); n.buffer = this.noise;
      const fl = ctx.createBiquadFilter(); fl.type = filterType; fl.frequency.value = freq; fl.Q.value = q;
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain * vel, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
      n.connect(fl); fl.connect(g); g.connect(out); n.start(t, Math.random() * 1.5); n.stop(t + a + d + 0.05);
    };
    switch (kind) {
      case 'kick': {
        const o = ctx.createOscillator(); o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.7 * vel, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
        o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.35); break;
      }
      case 'hat': noise('highpass', 7500, 0.7, 0.002, 0.045, 0.18); break;
      case 'shaker': noise('bandpass', 5200, 1.2, 0.012, 0.07, 0.22); break;
      case 'brush': noise('bandpass', 2400, 0.6, 0.006, 0.16, 0.16); break;
      case 'clap': for (let i = 0; i < 3; i++) noise('bandpass', 1500, 0.8, 0.002, 0.05, 0.25 * (1 - i * 0.2)); break;
      case 'tick': {
        const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 2600;
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3000; bp.Q.value = 4;
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12 * vel, t + 0.001); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);
        o.connect(bp); bp.connect(g); g.connect(out); o.start(t); o.stop(t + 0.04); break;
      }
      case 'tock': {
        const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 1700;
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1900; bp.Q.value = 4;
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12 * vel, t + 0.001); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
        o.connect(bp); bp.connect(g); g.connect(out); o.start(t); o.stop(t + 0.05); break;
      }
      default: break;
    }
  }

  // ============ music sequencer ============
  // switch to a new profile; it starts on the next bar of the current music
  music(name, { fade = 3, intensity = null, immediate = false } = {}) {
    if (intensity !== null) this.setIntensity(intensity, 0.01);
    if (!this.ready) { this.pendingProfile = name; return; }
    const cur = this.voices[this.voices.length - 1];
    if (cur && cur.name === name && !cur.stopping) return;
    const p = PROFILES[name];
    if (!p) { console.warn('no profile', name); return; }
    const now = this.ctx.currentTime;
    let start = now + 0.08;
    if (cur && !cur.stopping && !immediate) start = Math.min(cur.nextBarTime(), now + 2.5);
    for (const v of this.voices) if (!v.stopping) v.stop(start, fade);
    const v = new Voice(this, name, p, start);
    this.voices.push(v);
  }
  stopMusic(fade = 3) { if (!this.ready) return; const t = this.ctx.currentTime; for (const v of this.voices) if (!v.stopping) v.stop(t, fade); }
  setIntensity(v, seconds = 2) { this.intensityTarget = clamp(v, 0, 1); this.intensityRate = 1 / Math.max(0.01, seconds); }
  setTempo(mul, seconds = 2) { this.tempoTarget = mul; this.tempoRate = 1 / Math.max(0.01, seconds); }
  muffle(amount = 1, seconds = 1.5) { // 0 = clear, 1 = underwater
    if (!this.ready) return;
    const f = 18000 * Math.pow(400 / 18000, clamp(amount, 0, 1));
    this.musicFilter.frequency.setTargetAtTime(f, this.ctx.currentTime, seconds / 3);
  }
  duck(amount = 0.5, seconds = 0.5) { if (!this.ready) return; this.musicBus.gain.setTargetAtTime(this.vol.music * amount, this.ctx.currentTime, seconds / 3); }
  currentVoice() { return this.voices.filter((v) => !v.stopping).slice(-1)[0] ?? null; }
  currentKey() { const v = this.currentVoice(); return v ? { tonic: v.tonic, scale: v.scale } : { tonic: KEYS.F, scale: SCALES.major }; }

  // beat information for rhythm games
  beatInfo() {
    const now = this.now;
    const v = this.currentVoice();
    if (!this.ready || !v) {
      const dur = 60 / 70; const b = now / dur;
      return { dur, phase: b % 1, beat: Math.floor(b), barBeat: Math.floor(b) % 3, beats: 3, nextTime: (Math.floor(b) + 1) * dur, lastTime: Math.floor(b) * dur, now };
    }
    const log = v.beatLog;
    let last = null, next = null;
    for (let i = log.length - 1; i >= 0; i--) { if (log[i].time <= now) { last = log[i]; next = log[i + 1] ?? null; break; } }
    if (!last) { const dur = v.beatDur(); return { dur, phase: 0, beat: 0, barBeat: 0, beats: v.p.beats, nextTime: log[0]?.time ?? now + dur, lastTime: now - dur, now }; }
    const dur = next ? next.time - last.time : v.beatDur();
    return { dur, phase: clamp((now - last.time) / dur, 0, 1), beat: last.n, barBeat: last.beat, beats: v.p.beats, nextTime: next ? next.time : last.time + dur, lastTime: last.time, now };
  }
  onBeat(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }

  _schedule() {
    if (!this.ready) return;
    const ctx = this.ctx, now = ctx.currentTime, ahead = 0.15;
    // smooth global params
    const dt = 0.025;
    if (this.intensity !== this.intensityTarget) {
      const d = this.intensityTarget - this.intensity; const s = (this.intensityRate ?? 0.5) * dt;
      this.intensity = Math.abs(d) < s ? this.intensityTarget : this.intensity + Math.sign(d) * s;
    }
    if (this.tempoTarget !== undefined && this.tempoMul !== this.tempoTarget) {
      const d = this.tempoTarget - this.tempoMul; const s = (this.tempoRate ?? 0.5) * dt;
      this.tempoMul = Math.abs(d) < s ? this.tempoTarget : this.tempoMul + Math.sign(d) * s;
    }
    for (const v of this.voices) v.schedule(now, ahead);
    this.voices = this.voices.filter((v) => !(v.stopping && now > v.stopEnd + 0.5));
    // beat listeners
    const v = this.currentVoice();
    if (v) {
      while (v.beatLog.length && v.beatLog[0].time < now - 8) v.beatLog.shift();
      for (const b of v.beatLog) if (!b.fired && b.time <= now) { b.fired = true; this.listeners.forEach((fn) => fn(b)); }
    }
    this._ambTick(now);
  }

  // ============ ambience ============
  _ambInit() {
    const ctx = this.ctx;
    const loop = (buf, type, freq, q) => {
      const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true;
      const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
      const g = ctx.createGain(); g.gain.value = 0;
      s.connect(f); f.connect(g); g.connect(this.ambBus); s.start();
      return { s, f, g };
    };
    this.ambNodes = {
      wind: loop(this.brown, 'bandpass', 500, 0.6),
      rain: loop(this.pink, 'highpass', 900, 0.3),
      waves: loop(this.brown, 'lowpass', 700, 0.5),
      room: loop(this.brown, 'lowpass', 220, 0.5),
      fire: loop(this.brown, 'lowpass', 400, 0.7),
      city: loop(this.brown, 'lowpass', 300, 0.4),
    };
    this.ambLevels = { wind: 0, rain: 0, waves: 0, room: 0, fire: 0, city: 0, birds: 0, crickets: 0, heartbeat: 0, crowd: 0, clock: 0 };
    this.nextBird = 0; this.nextCrackle = 0; this.nextHeart = 0; this.nextCricket = 0; this.nextCrowd = 0; this.nextClock = 0;
  }
  // set ambience levels: {birds:0.6, wind:0.3, …}; unspecified go to 0
  ambience(levels = {}, seconds = 3) {
    this.ambTarget = { wind: 0, rain: 0, waves: 0, room: 0, fire: 0, city: 0, birds: 0, crickets: 0, heartbeat: 0, crowd: 0, clock: 0, ...levels };
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    for (const k in this.ambNodes) {
      const scale = { wind: 0.35, rain: 0.22, waves: 0.4, room: 0.25, fire: 0.3, city: 0.25 }[k];
      this.ambNodes[k].g.gain.setTargetAtTime((this.ambTarget[k] || 0) * scale, t, seconds / 3);
    }
    Object.assign(this.ambLevels, this.ambTarget);
  }
  _ambTick(now) {
    if (!this.ambLevels) return;
    const L = this.ambLevels;
    if (this.ambTarget && !this._ambApplied) { this._ambApplied = true; this.ambience(this.ambTarget, 2); }
    // wind gusts
    if (L.wind > 0) this.ambNodes.wind.f.frequency.setTargetAtTime(400 + Math.sin(now * 0.3) * 200 + Math.sin(now * 0.71) * 120, now, 0.5);
    if (L.waves > 0) this.ambNodes.waves.g.gain.setTargetAtTime(L.waves * 0.4 * (0.55 + 0.45 * Math.sin(now * 0.55)), now, 0.4);
    if (L.birds > 0 && now > this.nextBird) { this._bird(now + 0.05, L.birds); this.nextBird = now + 0.6 + Math.random() * 3.5 / L.birds; }
    if (L.fire > 0 && now > this.nextCrackle) { this._crackle(now + 0.02, L.fire); this.nextCrackle = now + 0.05 + Math.random() * 0.4; }
    if (L.crickets > 0 && now > this.nextCricket) { this._cricket(now + 0.05, L.crickets); this.nextCricket = now + 0.35 + Math.random() * 0.9; }
    if (L.heartbeat > 0 && now > this.nextHeart) { this._heart(now + 0.05, L.heartbeat); this.nextHeart = now + 0.95; }
    if (L.crowd > 0 && now > this.nextCrowd) { this._murmur(now + 0.05, L.crowd); this.nextCrowd = now + 0.15 + Math.random() * 0.4; }
    if (L.clock > 0 && now > this.nextClock) { this.drum(this._tk = !this._tk ? 'tick' : 'tock', now + 0.05, L.clock, this.ambBus); this.nextClock = now + 1; }
  }
  _bird(t, lv) {
    const ctx = this.ctx; const n = 2 + Math.floor(Math.random() * 4); const base = 2200 + Math.random() * 1800;
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null; if (pan) { pan.pan.value = Math.random() * 1.6 - 0.8; pan.connect(this.ambBus); }
    for (let i = 0; i < n; i++) {
      const o = ctx.createOscillator(); o.type = 'sine'; const g = ctx.createGain();
      const tt = t + i * (0.09 + Math.random() * 0.06);
      o.frequency.setValueAtTime(base * (0.9 + Math.random() * 0.3), tt); o.frequency.exponentialRampToValueAtTime(base * (1.1 + Math.random() * 0.5), tt + 0.06);
      g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(0.03 * lv, tt + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.08);
      o.connect(g); g.connect(pan ?? this.ambBus); o.start(tt); o.stop(tt + 0.1);
    }
  }
  _crackle(t, lv) {
    const ctx = this.ctx; const n = ctx.createBufferSource(); n.buffer = this.noise;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1500 + Math.random() * 2500; f.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12 * lv * Math.random(), t + 0.002); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.02);
    n.connect(f); f.connect(g); g.connect(this.ambBus); n.start(t, Math.random()); n.stop(t + 0.03);
  }
  _cricket(t, lv) {
    const ctx = this.ctx; const f0 = 4300 + Math.random() * 600;
    for (let i = 0; i < 3; i++) {
      const o = ctx.createOscillator(); o.frequency.value = f0; const g = ctx.createGain(); const tt = t + i * 0.045;
      g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(0.012 * lv, tt + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.03);
      o.connect(g); g.connect(this.ambBus); o.start(tt); o.stop(tt + 0.04);
    }
  }
  _heart(t, lv) {
    const ctx = this.ctx;
    for (const [dt, a] of [[0, 1], [0.24, 0.7]]) {
      const o = ctx.createOscillator(); o.frequency.setValueAtTime(70, t + dt); o.frequency.exponentialRampToValueAtTime(38, t + dt + 0.12);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t + dt); g.gain.exponentialRampToValueAtTime(0.35 * lv * a, t + dt + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.2);
      o.connect(g); g.connect(this.ambBus); o.start(t + dt); o.stop(t + dt + 0.25);
    }
  }
  _murmur(t, lv) {
    const ctx = this.ctx; const o = ctx.createOscillator(); o.type = 'sawtooth'; const f0 = 140 + Math.random() * 120;
    o.frequency.setValueAtTime(f0, t); o.frequency.linearRampToValueAtTime(f0 * (0.85 + Math.random() * 0.3), t + 0.25);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 500 + Math.random() * 600; bp.Q.value = 3;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.01 * lv, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(bp); bp.connect(g); g.connect(this.ambBus); o.start(t); o.stop(t + 0.35);
  }

  // ============ sound effects ============
  sfx(name, opts = {}) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime + (opts.delay ?? 0), out = this.sfxBus, vol = opts.vol ?? 1;
    const noise = (type, f0, f1, q, a, d, gain, dest = out) => {
      const n = ctx.createBufferSource(); n.buffer = this.noise;
      const fl = ctx.createBiquadFilter(); fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f0, t); if (f1) fl.frequency.exponentialRampToValueAtTime(f1, t + a + d);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain * vol, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
      n.connect(fl); fl.connect(g); g.connect(dest); n.start(t, Math.random()); n.stop(t + a + d + 0.05);
      return g;
    };
    const tone = (type, f0, f1, a, d, gain, tt = t, dest = out) => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, tt); if (f1) o.frequency.exponentialRampToValueAtTime(f1, tt + a + d);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(gain * vol, tt + a); g.gain.exponentialRampToValueAtTime(0.0001, tt + a + d);
      o.connect(g); g.connect(dest); o.start(tt); o.stop(tt + a + d + 0.05);
    };
    const key = this.currentKey();
    const kn = (deg, oct = 0) => key.tonic + degreeToSemi(deg, key.scale) + oct * 12;
    switch (name) {
      case 'step': {
        const s = opts.surface ?? 'grass';
        if (s === 'wood') noise('bandpass', 900, null, 1.5, 0.003, 0.05, 0.05);
        else if (s === 'snow') noise('highpass', 2500, null, 0.5, 0.01, 0.09, 0.05);
        else if (s === 'stone') noise('bandpass', 2200, null, 1, 0.002, 0.03, 0.04);
        else noise('lowpass', 1400, null, 0.7, 0.008, 0.07, 0.035);
        break;
      }
      case 'chime': // a moment appears
        [1, 3, 5].forEach((d, i) => this.note('bell', kn(d, 2), t + i * 0.09, 0.5, 0.5 * vol, this.sfxBus)); break;
      case 'keep': // a moment is kept
        [1, 3, 5, 8, 10].forEach((d, i) => this.note('musicbox', kn(d, 1), t + i * 0.11, 0.6, 0.7 * vol, this.sfxRev));
        this.note('bell', kn(1, 1), t, 1, 0.4 * vol, this.sfxRev); break;
      case 'lost':
        [5, 3, 2].forEach((d, i) => this.note('musicbox', kn(d, 1), t + i * 0.25, 0.8, 0.35 * vol, this.sfxRev)); break;
      case 'shutter': noise('highpass', 3000, null, 0.5, 0.001, 0.02, 0.3); noise('bandpass', 1200, null, 1, 0.001, 0.04, 0.2); break;
      case 'pop': tone('sine', 500, 1100, 0.005, 0.08, 0.15); break;
      case 'tap': tone('sine', 900 + Math.random() * 200, null, 0.003, 0.06, 0.08); break;
      case 'good': this.note('musicbox', kn(opts.deg ?? 5, 1), t, 0.4, 0.6 * vol, this.sfxBus); break;
      case 'soft': this.note('bell', kn(opts.deg ?? 1, 1), t, 0.6, 0.35 * vol, this.sfxRev); break;
      case 'miss': tone('sine', 300, 240, 0.01, 0.12, 0.05); break;
      case 'giggle': {
        const n = 4 + Math.floor(Math.random() * 3), b = (opts.pitch ?? 1) * (520 + Math.random() * 120);
        for (let i = 0; i < n; i++) { const tt = t + i * 0.11; tone('triangle', b * (1.3 - i * 0.05), b * (1.1 - i * 0.05), 0.01, 0.07, 0.08, tt); tone('sine', b * 2.6, b * 2.2, 0.01, 0.05, 0.03, tt); }
        break;
      }
      case 'coo': case 'babble': {
        const n = name === 'coo' ? 2 : 3 + Math.floor(Math.random() * 3);
        for (let i = 0; i < n; i++) {
          const tt = t + i * 0.2; const f0 = (opts.pitch ?? 1) * (380 + Math.random() * 140);
          const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(f0, tt); o.frequency.linearRampToValueAtTime(f0 * (name === 'coo' ? 1.25 : 0.9), tt + 0.16);
          const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = name === 'coo' ? 450 : 800; f1.Q.value = 4;
          const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(0.12 * vol, tt + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.18);
          o.connect(f1); f1.connect(g); g.connect(out); o.start(tt); o.stop(tt + 0.2);
        }
        break;
      }
      case 'cry': {
        for (let i = 0; i < 3; i++) {
          const tt = t + i * 0.55; const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(420, tt); o.frequency.linearRampToValueAtTime(520, tt + 0.15); o.frequency.linearRampToValueAtTime(380, tt + 0.45);
          const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 1100; f1.Q.value = 3;
          const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(0.09 * vol, tt + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.48);
          o.connect(f1); f1.connect(g); g.connect(out); o.start(tt); o.stop(tt + 0.5);
        }
        break;
      }
      case 'woof': {
        for (let i = 0; i < (opts.n ?? 1); i++) { const tt = t + i * 0.25; tone('sawtooth', 320, 170, 0.01, 0.13, 0.12, tt); }
        noise('bandpass', 700, 400, 2, 0.01, 0.12, 0.1); break;
      }
      case 'splash': noise('lowpass', 3500, 400, 0.6, 0.02, 0.5, 0.35); break;
      case 'whoosh': noise('bandpass', 300, 1800, 1.2, 0.25, 0.5, 0.2); break;
      case 'blow': noise('lowpass', 1500, 600, 0.5, 0.15, 0.6, 0.15); break;
      case 'rustle': noise('bandpass', 3000, 1500, 0.8, 0.05, 0.25, 0.08); break;
      case 'thud': tone('sine', 120, 50, 0.005, 0.2, 0.3); noise('lowpass', 500, null, 1, 0.003, 0.1, 0.15); break;
      case 'door': tone('sine', 90, 60, 0.01, 0.25, 0.25); noise('lowpass', 800, null, 1, 0.01, 0.15, 0.08); break;
      case 'ping': tone('sine', 1320, null, 0.005, 0.12, 0.12); tone('sine', 1760, null, 0.005, 0.2, 0.1, t + 0.1); break;
      case 'phone': for (let i = 0; i < 2; i++) { const tt = t + i * 0.5; tone('sine', 440, null, 0.01, 0.38, 0.06, tt); tone('sine', 480, null, 0.01, 0.38, 0.06, tt); } break;
      case 'bikebell': for (let i = 0; i < 2; i++) { const tt = t + i * 0.16; tone('sine', 3100, null, 0.002, 0.4, 0.08, tt); tone('sine', 4250, null, 0.002, 0.25, 0.05, tt); } break;
      case 'heart': this._heart(t, vol); break;
      case 'kiss': tone('sine', 1600, 800, 0.003, 0.05, 0.05); break;
      case 'creak': { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(110, t); o.frequency.linearRampToValueAtTime(140, t + 0.35); const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 8; const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.03 * vol, t + 0.1); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4); o.connect(bp); bp.connect(g); g.connect(out); o.start(t); o.stop(t + 0.45); break; }
      case 'applause': for (let i = 0; i < 40; i++) { const g = ctx.createGain(); const tt = t + Math.random() * 2.5; const n = ctx.createBufferSource(); n.buffer = this.noise; const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1200 + Math.random() * 1500; f.Q.value = 1; g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(0.06 * vol, tt + 0.003); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.05); n.connect(f); f.connect(g); g.connect(out); n.start(tt, Math.random()); n.stop(tt + 0.06); } break;
      case 'engine': { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(45, t); o.frequency.linearRampToValueAtTime(70, t + 1.5); o.frequency.linearRampToValueAtTime(55, t + 3.5); const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 300; const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12 * vol, t + 0.3); g.gain.setTargetAtTime(0.0001, t + 2.5, 0.8); o.connect(lp); lp.connect(g); g.connect(out); o.start(t); o.stop(t + 5); break; }
      case 'yay': { const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(380 * (opts.pitch ?? 1), t); o.frequency.linearRampToValueAtTime(620 * (opts.pitch ?? 1), t + 0.25); const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 900; f1.Q.value = 3; const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.1 * vol, t + 0.04); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45); o.connect(f1); f1.connect(g); g.connect(out); o.start(t); o.stop(t + 0.5); break; }
      case 'sparkle': for (let i = 0; i < 6; i++) this.note('musicbox', kn([1, 3, 5, 8, 10, 12][Math.floor(Math.random() * 6)], 2), t + i * 0.07 + Math.random() * 0.05, 0.3, 0.3 * vol, this.sfxRev); break;
      case 'tick': this.drum('tick', t, vol, out); break;
      case 'tock': this.drum('tock', t, vol, out); break;
      case 'bloop': tone('sine', 300, 600, 0.01, 0.12, 0.08); break;
      case 'fwip': noise('bandpass', 2000, 4000, 2, 0.01, 0.08, 0.1); break;
      case 'lantern': noise('bandpass', 400, 900, 1, 0.3, 1.2, 0.08); this.note('bell', kn(5, 1), t + 0.2, 1, 0.25 * vol, this.sfxRev); break;
      case 'note': this.note(opts.inst ?? 'musicbox', kn(opts.deg ?? 1, opts.oct ?? 1), t, opts.dur ?? 0.5, (opts.vel ?? 0.7) * vol, this.sfxRev); break;
      case 'thunder': noise('lowpass', 300, 60, 0.6, 0.1, 2.5, 0.4); break;
      default: break;
    }
  }
}

// A playing music profile
class Voice {
  constructor(engine, name, p, start) {
    this.e = engine; this.name = name; this.p = p;
    const ctx = engine.ctx;
    this.out = ctx.createGain(); this.out.gain.setValueAtTime(0.0001, ctx.currentTime);
    this.out.gain.setTargetAtTime(1, start, 0.4);
    this.out.connect(engine.musicBus);
    this.send = ctx.createGain(); this.send.gain.value = 0.55; this.out.connect(this.send); this.send.connect(engine.revIn);
    this.tonic = KEYS[p.key] ?? 65;
    this.minor = p.scale === 'minor' || p.scale === 'harmonic';
    this.scale = SCALES[p.scale ?? 'major'];
    this.prog = p.song ? p.song.map((b) => [b.c, p.beats]) : p.prog;
    this.stepTime = start; this.step = 0; // 16th steps
    this.bar = 0; this.beatLog = []; this.beatN = 0;
    this.layers = p.layers.map((l, i) => {
      const g = ctx.createGain(); g.gain.value = this._layerLevel(l); g.connect(this.out);
      return { ...l, g, rng: rng((l.seed ?? 3) + i * 17), cur: [] };
    });
    this.stopping = false;
  }
  beatDur() { return 60 / (this.p.bpm * this.e.tempoMul); }
  stepDur() { return this.beatDur() / 4; }
  nextBarTime() {
    const stepsPerBar = this.p.beats * 4;
    const s = this.step % stepsPerBar;
    return this.stepTime + (stepsPerBar - s) % stepsPerBar * this.stepDur();
  }
  stop(at, fade) { this.stopping = true; this.stopEnd = at + fade; const g = this.out.gain; g.cancelScheduledValues(at); g.setTargetAtTime(0.0001, at, fade / 3); }
  _layerLevel(l) {
    const I = this.e.intensity;
    const lo = l.min ?? 0, hi = l.max ?? 1.01;
    const k = clamp((I - lo) / 0.15 + 0.0, 0, 1) * clamp((hi - I) / 0.15, 0, 1);
    return (l.gain ?? 0.2) * k;
  }
  // chord at a given bar
  chordAt(bar) {
    // prog entries may be longer than a bar; flatten to beats
    let total = 0; for (const [, b] of this.prog) total += b;
    const beat = (bar * this.p.beats) % total;
    let acc = 0;
    for (const [c, b] of this.prog) { if (beat < acc + b) return parseChord(c, this.minor); acc += b; }
    return parseChord(this.prog[0][0], this.minor);
  }
  chordTones(ch, oct, n = 4) {
    const base = this.tonic + ch.root + oct * 12;
    const tones = [];
    for (let i = 0; tones.length < n; i++) tones.push(base + ch.iv[i % ch.iv.length] + Math.floor(i / ch.iv.length) * 12);
    return tones;
  }
  schedule(now, ahead) {
    if (this.stopping && now > this.stopEnd) return;
    for (const l of this.layers) l.g.gain.setTargetAtTime(this._layerLevel(l), now, 0.4);
    while (this.stepTime < now + ahead) {
      this._playStep(this.stepTime);
      this.stepTime += this.stepDur();
      this.step++;
    }
  }
  _playStep(t) {
    const p = this.p, spb = p.beats * 4;
    const s = this.step % spb, bar = Math.floor(this.step / spb);
    if (s % 4 === 0) this.beatLog.push({ time: t, beat: s / 4, bar, n: this.beatN++ });
    const ch = this.chordAt(bar);
    const bd = this.beatDur();
    for (const l of this.layers) {
      if (l.g.gain.value < 0.0005 && this._layerLevel(l) < 0.0005) continue;
      const oct = l.oct ?? 0;
      switch (l.t) {
        case 'song': {
          const song = p.song ?? l.song; if (!song) break;
          const b = song[bar % song.length];
          let acc = 0;
          for (const [deg, beats] of b.n) {
            if (Math.round(acc * 4) === s) {
              const midi = this.tonic + degreeToSemi(deg, this.scale) + 12 * oct;
              this.e.note(l.inst, midi, t, beats * bd * 0.95, 0.75 + 0.15 * Math.random(), l.g);
            }
            acc += beats;
          }
          break;
        }
        case 'chord': {
          const every = (l.every ?? p.beats) * 4;
          if ((this.step % every) === 0) this.chordTones(ch, oct, ch.iv.length).forEach((m) => this.e.note(l.inst, m, t, every / 4 * bd, 0.7, l.g));
          break;
        }
        case 'arp': {
          const div = l.div ?? 2; const stepEvery = 4 / div;
          if (s % stepEvery === 0) {
            const idx = Math.floor(s / stepEvery) % l.pattern.length;
            const tones = this.chordTones(ch, oct, 6);
            this.e.note(l.inst, tones[l.pattern[idx]], t, bd / div * 1.5, 0.55 + (idx === 0 ? 0.2 : 0), l.g);
          }
          break;
        }
        case 'bass': {
          const root = this.tonic + ch.root + 12 * oct;
          if (s === 0) this.e.note(l.inst, root, t, bd * (l.fifth ? p.beats / 2 : p.beats) * 0.9, 0.8, l.g);
          if (l.fifth && s === spb / 2) this.e.note(l.inst, root + 7, t, bd * p.beats / 2 * 0.9, 0.65, l.g);
          break;
        }
        case 'waltz': {
          const root = this.tonic + ch.root + 12 * oct;
          if (s === 0) this.e.note(l.inst, root - 12, t, bd * 0.9, 0.75, l.g);
          if (s === 4 || s === 8) this.chordTones(ch, oct + 1, 3).forEach((m) => this.e.note(l.inst, m, t, bd * 0.5, 0.45, l.g));
          break;
        }
        case 'strum': {
          if (l.rhythm.includes(s)) {
            const tones = this.chordTones(ch, oct, 5);
            const down = (s / 2) % 2 === 0;
            tones.forEach((m, i) => this.e.note(l.inst, m, t + (down ? i : tones.length - i) * 0.012, bd * 0.6, (s === 0 ? 0.8 : 0.5) * (0.85 + 0.15 * Math.random()), l.g));
          }
          break;
        }
        case 'gen': {
          if (s === 0) l.cur = this._genBar(l, bar, ch);
          for (const n of l.cur) if (n.s === s) this.e.note(l.inst, n.m, t, n.d * bd / 4, n.v, l.g);
          break;
        }
        case 'perc': {
          const pat = l.pat; const s16 = this.step % 16;
          for (const k in pat) if (pat[k][s16 % pat[k].length] === 'x') this.e.drum(k, t, (l.gain ?? 0.15) * 5, l.g);
          break;
        }
        case 'tick': if (s % 4 === 0) this.e.drum((s / 4) % 2 ? 'tock' : 'tick', t, 1, l.g); break;
        case 'sparkle': {
          if (s % 2 === 0 && l.rng() < (l.density ?? 0.2) * 0.5) {
            const tones = this.chordTones(ch, oct, 6);
            this.e.note(l.inst, tones[Math.floor(l.rng() * tones.length)], t, bd, 0.4 + l.rng() * 0.3, l.g);
          }
          break;
        }
        default: break;
      }
    }
  }
  // generative melody for one bar; phrases repeat so it feels composed
  _genBar(l, bar, ch) {
    const p = this.p, spb = p.beats * 4;
    const cycle = Math.floor(bar / 4), inCycle = bar % 4;
    const seedBar = inCycle === 3 ? bar : inCycle + (cycle % 2) * 4; // last bar of each phrase varies
    const r = rng((l.seed ?? 1) * 1000 + seedBar * 31 + 7);
    const rhythms4 = l.long ? [[4, 4, 8], [8, 8], [6, 2, 8], [4, 4, 4, 4], [12, 4]] : [[4, 4, 4, 4], [6, 2, 4, 4], [8, 4, 4], [4, 4, 8], [2, 2, 4, 8], [12, 4], [4, 2, 2, 8]];
    const rhythms3 = l.long ? [[8, 4], [12], [4, 8], [6, 6]] : [[4, 4, 4], [8, 4], [4, 8], [6, 2, 4], [12]];
    let rh = r.pick(p.beats === 3 ? rhythms3 : rhythms4);
    if (l.sparse && r() < 0.35) rh = [spb];
    const notes = []; let s = 0;
    const base = this.tonic + 12 * (l.oct ?? 0);
    const chordPcs = ch.iv.map((i) => (ch.root + i) % 12);
    let deg = 3 + Math.floor(r() * 4);
    for (let i = 0; i < rh.length; i++) {
      if (l.sparse && i > 0 && r() < 0.4) { s += rh[i]; continue; }
      if (i === 0 || r() < 0.4) {
        // land on a chord tone near current
        let best = deg, bd = 99;
        for (let d = deg - 3; d <= deg + 3; d++) { const pc = ((degreeToSemi(d, this.scale) % 12) + 12) % 12; if (chordPcs.includes(pc) && Math.abs(d - deg) < bd) { bd = Math.abs(d - deg); best = d; } }
        deg = best;
      } else deg += r.pick([-1, 1, -1, 1, 2, -2]);
      deg = clamp(deg, 1, 10);
      notes.push({ s, m: base + degreeToSemi(deg, this.scale), d: rh[i] * 0.95, v: 0.6 + r() * 0.25 });
      s += rh[i];
    }
    return notes;
  }
}
