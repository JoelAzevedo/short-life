// Settings: graphics quality (presets + individual options, auto-detection,
// adaptive resolution), audio and gameplay/accessibility. Persisted locally.
import { G, clamp } from './game.js';
import { el } from './ui.js';

const KEY = 'lm.settings.v2';

export const PRESETS = {
  low:    { scale: 0.75, dprCap: 1,   shadows: 'off',  ao: false, bloom: false, effects: 'off',    msaa: 0, particles: 0.4, adaptive: true },
  medium: { scale: 0.9,  dprCap: 1,   shadows: 'low',  ao: false, bloom: true,  effects: 'simple', msaa: 0, particles: 0.7, adaptive: true },
  high:   { scale: 1,    dprCap: 1.5, shadows: 'high', ao: false, bloom: true,  effects: 'full',   msaa: 4, particles: 1,   adaptive: false },
  ultra:  { scale: 1,    dprCap: 2,   shadows: 'high', ao: true,  bloom: true,  effects: 'full',   msaa: 4, particles: 1,   adaptive: false },
};
export const PRESET_NAMES = { low: 'Low — integrated graphics / older PCs', medium: 'Medium — most laptops', high: 'High — dedicated graphics', ultra: 'Ultra — everything on' };

const DEFAULTS = {
  preset: 'auto',          // auto | low | medium | high | ultra | custom
  ...PRESETS.high,
  fpsCap: 0,               // 0 = uncapped (display rate), 30, 60
  showFps: false,
  // game / accessibility
  gentleKeep: false,       // longer windows to keep a moment
  reduceFlashes: false,
  muteInBackground: true,
};

// What graphics chip is the browser using? Detects software rendering (no hardware acceleration).
export function detectGPU(renderer) {
  let name = '';
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    name = (ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) || '';
  } catch (e) { /* ignore */ }
  const n = name.toLowerCase();
  let tier = 'unknown';
  if (/swiftshader|llvmpipe|softpipe|software|basic render|microsoft basic|mesa offscreen/.test(n)) tier = 'software';
  else if (/nvidia|geforce|rtx|gtx|quadro|radeon rx|radeon pro|radeon r9|arc a\d|firepro/.test(n)) tier = 'discrete';
  else if (/apple m\d|apple gpu/.test(n)) tier = 'apple';
  else if (/intel|uhd|iris|hd graphics|radeon\(tm\) graphics|radeon graphics|vega \d+|mali|adreno|powervr|apple a\d/.test(n)) tier = 'integrated';
  const mobile = 'ontouchstart' in window && Math.min(screen.width, screen.height) < 900;
  return { name: name || 'unknown', tier, mobile };
}
function presetFor(gpu) {
  if (gpu.tier === 'software') return 'low';
  if (gpu.mobile) return 'low';
  if (gpu.tier === 'integrated') return 'medium';
  if (gpu.tier === 'apple') return 'high';
  if (gpu.tier === 'discrete') return 'ultra';
  return 'medium';
}

export class Settings {
  constructor() {
    this.v = { ...DEFAULTS };
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (saved) Object.assign(this.v, saved);
      const old = JSON.parse(localStorage.getItem('lm.settings') || 'null'); // text settings from v1
      if (old) Object.assign(G.ui.settings, old);
    } catch (e) { /* ignore */ }
    this.gpu = detectGPU(G.renderer.r);
    this.autoPreset = presetFor(this.gpu);
    if (this.v.preset === 'auto') Object.assign(this.v, PRESETS[this.autoPreset]);
    else if (PRESETS[this.v.preset]) Object.assign(this.v, PRESETS[this.v.preset]);
    this.fps = 60; this._frames = 0; this._acc = 0; this._dyn = 1; this._dynT = 0; this._bench = null;
    this.fpsEl = el('div', 'fpsMeter hidden'); document.getElementById('ui').appendChild(this.fpsEl);
    this.apply();
    document.addEventListener('visibilitychange', () => {
      if (!G.audio?.ready || !this.v.muteInBackground) return;
      G.audio.master.gain.setTargetAtTime(document.hidden ? 0 : G.audio.vol.master, G.audio.ctx.currentTime, 0.2);
    });
  }
  save() { try { localStorage.setItem(KEY, JSON.stringify(this.v)); } catch (e) { /* ignore */ } }
  setPreset(name) {
    this.v.preset = name;
    Object.assign(this.v, PRESETS[name === 'auto' ? this.autoPreset : name]);
    this._dyn = 1;
    this.apply(); this.save();
  }
  set(key, value) { this.v[key] = value; if (['scale', 'dprCap', 'shadows', 'ao', 'bloom', 'effects', 'msaa', 'particles', 'adaptive'].includes(key)) this.v.preset = 'custom'; this.apply(); this.save(); }
  pixelRatio() { return clamp(Math.min(window.devicePixelRatio || 1, this.v.dprCap) * this.v.scale * this._dyn, 0.35, 2); }
  apply() { G.renderer.applyQuality(this.v, this.pixelRatio()); this.fpsEl.classList.toggle('hidden', !this.v.showFps); }

  // called every frame with the real frame time
  tick(realDt) {
    this._frames++; this._acc += realDt;
    if (this._acc >= 0.5) {
      this.fps = this._frames / this._acc; this._frames = 0; this._acc = 0;
      if (this.v.showFps) this.fpsEl.textContent = `${Math.round(this.fps)} fps · ${G.renderer.r.getPixelRatio().toFixed(2)}×`;
      // adaptive resolution keeps slow machines smooth
      if (this.v.adaptive && !G.paused && document.visibilityState === 'visible') {
        this._dynT += 0.5;
        const target = this.v.fpsCap === 30 ? 28 : 50;
        if (this._dynT >= 2) {
          let d = this._dyn;
          if (this.fps < target && d > 0.5) d = Math.max(0.5, d - 0.1);
          else if (this.fps > target + 8 && d < 1) d = Math.min(1, d + 0.05);
          if (d !== this._dyn) { this._dyn = d; G.renderer.setPixelRatio(this.pixelRatio()); }
          this._dynT = 0;
        }
      }
    }
  }

  // ---------------- the settings panel ----------------
  open(tab = 'graphics', onClose = null) {
    const wasPaused = G.paused; G.paused = true;
    const wrap = el('div', 'setView'); const panel = el('div', 'setPanel');
    wrap.appendChild(panel); document.getElementById('ui').appendChild(wrap);
    const close = () => { wrap.remove(); G.paused = wasPaused; onClose && onClose(); };
    wrap.addEventListener('pointerdown', (e) => { if (e.target === wrap) close(); });
    const render = () => {
      panel.innerHTML = '';
      const head = el('div', 'head', '<h2>Settings</h2>');
      const x = el('button', 'close', 'Done'); x.addEventListener('click', close); head.appendChild(x);
      panel.appendChild(head);
      const tabs = el('div', 'tabs');
      for (const [id, label] of [['graphics', 'Graphics'], ['audio', 'Audio'], ['game', 'Game']]) {
        const b = el('button', id === tab ? 'on' : '', label); b.addEventListener('click', () => { tab = id; render(); }); tabs.appendChild(b);
      }
      panel.appendChild(tabs);
      const body = el('div', 'body'); panel.appendChild(body);
      const row = (label, control, hint = '') => { const r = el('div', 'row'); r.appendChild(el('div', 'lbl', `${label}${hint ? `<small>${hint}</small>` : ''}`)); r.appendChild(control); body.appendChild(r); return r; };
      const select = (value, options, onChange) => { const s = el('select'); for (const [v, l] of options) { const o = el('option', '', l); o.value = v; if (String(v) === String(value)) o.selected = true; s.appendChild(o); } s.addEventListener('change', () => onChange(s.value)); return s; };
      const toggle = (value, onChange) => { const c = el('input'); c.type = 'checkbox'; c.checked = !!value; c.addEventListener('change', () => onChange(c.checked)); return c; };
      const slider = (value, min, max, step, onChange, fmtv = (v) => Math.round(v * 100) + '%') => {
        const w = el('div', 'slider'); const s = el('input'); s.type = 'range'; s.min = min; s.max = max; s.step = step; s.value = value;
        const out = el('span', '', fmtv(value)); s.addEventListener('input', () => { out.textContent = fmtv(parseFloat(s.value)); onChange(parseFloat(s.value)); });
        w.appendChild(s); w.appendChild(out); return w;
      };
      const V = this.v;
      if (tab === 'graphics') {
        const sw = this.gpu.tier === 'software';
        const info = el('div', 'gpu' + (sw ? ' warn' : ''), sw
          ? `<b>Hardware acceleration is off.</b> Your browser is drawing the game without your graphics chip, which makes it slow. To turn it on:<br>
             · <b>Chrome / Edge:</b> Settings → System → “Use graphics acceleration when available” → Relaunch.<br>
             · <b>Firefox:</b> Settings → General → Performance → untick “Use recommended performance settings” → tick “Use hardware acceleration when available”.<br>
             · On Windows laptops, also set your browser to “High performance” in Settings → System → Display → Graphics.`
          : `Graphics chip: <b>${this.gpu.name.replace(/[<>&]/g, '')}</b><br>Recommended: <b>${this.autoPreset}</b>. Hardware acceleration is on.`);
        body.appendChild(info);
        row('Quality preset', select(V.preset, [['auto', `Automatic (${this.autoPreset})`], ['low', PRESET_NAMES.low], ['medium', PRESET_NAMES.medium], ['high', PRESET_NAMES.high], ['ultra', PRESET_NAMES.ultra], ['custom', 'Custom']], (v) => { if (v !== 'custom') this.setPreset(v); render(); }));
        row('Resolution', slider(V.scale, 0.5, 1, 0.05, (v) => this.set('scale', v)), 'Lower is faster');
        row('Sharpness on high-DPI screens', select(V.dprCap, [[1, 'Standard (1×)'], [1.5, 'Sharp (1.5×)'], [2, 'Retina (2×)']], (v) => { this.set('dprCap', parseFloat(v)); render(); }));
        row('Adaptive resolution', toggle(V.adaptive, (v) => this.set('adaptive', v)), 'Drops resolution when the game slows down');
        row('Shadows', select(V.shadows, [['off', 'Off'], ['low', 'Hard'], ['high', 'Soft']], (v) => this.set('shadows', v)));
        row('Ambient occlusion', toggle(V.ao, (v) => this.set('ao', v)), 'Soft contact shading · expensive');
        row('Glow (bloom)', toggle(V.bloom, (v) => this.set('bloom', v)));
        row('Dreamy blur & tilt-shift', select(V.effects, [['off', 'Off'], ['simple', 'Simple'], ['full', 'Full']], (v) => this.set('effects', v)));
        row('Anti-aliasing', select(V.msaa, [[0, 'Off'], [4, '4× MSAA']], (v) => this.set('msaa', parseInt(v, 10))));
        row('Particles', select(V.particles, [[0.4, 'Few'], [0.7, 'Some'], [1, 'All']], (v) => this.set('particles', parseFloat(v))), 'Applies from the next scene');
        row('Frame rate limit', select(V.fpsCap, [[0, 'Unlimited'], [60, '60 fps'], [30, '30 fps (battery saver)']], (v) => { V.fpsCap = parseInt(v, 10); this.save(); }));
        row('Show frame rate', toggle(V.showFps, (v) => { V.showFps = v; this.apply(); this.save(); }));
      } else if (tab === 'audio') {
        const A = G.audio;
        for (const [k, l] of [['master', 'Master volume'], ['music', 'Music'], ['sfx', 'Sound effects'], ['amb', 'Ambience']]) row(l, slider(A.vol[k], 0, 1, 0.05, (v) => A.setVolume(k, v)));
        row('Mute when the game is in the background', toggle(V.muteInBackground, (v) => { V.muteInBackground = v; this.save(); }));
        body.appendChild(el('div', 'note', 'All music and sound is generated live. Headphones recommended.'));
      } else {
        const U = G.ui.settings;
        row('Auto-advance text', toggle(U.auto, (v) => { U.auto = v; G.ui.saveSettings(); }), 'Otherwise press Space / click to continue');
        row('Text speed', slider(U.textSpeed, 0.6, 1.8, 0.1, (v) => { U.textSpeed = v; G.ui.saveSettings(); }, (v) => v.toFixed(1) + '×'));
        row('Gentler moment keeping', toggle(V.gentleKeep, (v) => { V.gentleKeep = v; this.save(); }), 'More time to hold, and a shorter hold');
        row('Reduce flashes & camera shake', toggle(V.reduceFlashes, (v) => { V.reduceFlashes = v; this.save(); }));
        body.appendChild(el('div', 'note', 'Move: WASD / arrows / click · Interact: Space / click · Keep a moment: hold Space or hold the screen · Album: J · Pause: Esc'));
      }
    };
    render();
  }
}
