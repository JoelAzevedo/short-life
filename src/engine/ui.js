// DOM overlays: narration, speech bubbles, choices, prompts, HUD, chapter cards.
import { G, wait, every, clamp, fmt } from './game.js';

const $ = (s) => document.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
const sleepReal = (ms) => new Promise((r) => setTimeout(r, ms));

export class UI {
  constructor() {
    this.fadeEl = $('#fade'); this.flashEl = $('#flash');
    this.narrEl = $('#narr'); this.lowerEl = $('#lower');
    this.bubblesEl = $('#bubbles'); this.choicesEl = $('#choices');
    this.promptEl = $('#prompt'); this.keepEl = $('#keep'); this.mgEl = $('#mg');
    this.cardEl = $('#card'); this.hintEl = $('#hint'); this.flyerEl = $('#flyer');
    this.clockEl = $('#clock'); this.albumBtn = $('#albumBtn'); this.menuBtn = $('#menuBtn');
    this.bubbles = [];
    this.settings = { auto: true, textSpeed: 1 };
    try { Object.assign(this.settings, JSON.parse(localStorage.getItem('lm.settings') || '{}')); } catch (e) { /* ignore */ }
    this.promptTarget = null;
    this.fadeValue = 1;
    this.promptEl.addEventListener('pointerdown', (e) => { e.stopPropagation(); this.promptClicked = true; });
  }
  saveSettings() { try { localStorage.setItem('lm.settings', JSON.stringify(this.settings)); } catch (e) { /* ignore */ } }

  // ---------- fades ----------
  fade(to, seconds = 1.5, color = '#000') {
    const f = this.fadeEl;
    f.style.background = color;
    f.style.transition = `opacity ${seconds}s ease`;
    // force reflow so the transition applies
    void f.offsetWidth;
    f.style.opacity = to;
    this.fadeValue = to;
    return sleepReal(seconds * 1000);
  }
  fadeOut(seconds = 1.5, color = '#000') { return this.fade(1, seconds, color); }
  fadeIn(seconds = 1.5) { return this.fade(0, seconds, this.fadeEl.style.background || '#000'); }
  flash(seconds = 0.8, peak = 0.85) {
    const f = this.flashEl; f.style.transition = 'none'; f.style.opacity = peak; void f.offsetWidth;
    f.style.transition = `opacity ${seconds}s ease`; f.style.opacity = 0;
  }

  // ---------- waiting for the player ----------
  _advance() {
    const i = G.input;
    const p = i.pressed('act') || i.clicks.length > 0 || i.pressed('pointer');
    if (p) { i.consume('act'); i.consume('pointer'); i.clicks.length = 0; }
    return p;
  }
  _readTime(text) { return G.auto ? 0.25 : (2.0 + text.length * 0.055) / this.settings.textSpeed; }

  // centred cinematic narration; lines appear one by one
  async narrate(lines, { stack = false, auto = null, small = false, dark = false, hold = null, minTime = 0.9 } = {}) {
    if (!Array.isArray(lines)) lines = [lines];
    const autoOn = auto ?? this.settings.auto;
    for (let k = 0; k < lines.length; k++) {
      const text = fmt(lines[k]);
      if (!stack) this._clearNarr();
      const line = el('div', 'line' + (small ? ' small' : '') + (dark ? ' dark' : ''));
      line.innerHTML = text + '<span class="advance"></span>';
      this.narrEl.appendChild(line);
      void line.offsetWidth; line.classList.add('show');
      await wait(G.auto ? 0.1 : minTime);
      line.classList.add('ready');
      const limit = hold ?? (autoOn ? this._readTime(text) : Infinity);
      let t = minTime;
      await every((dt) => { t += dt; return this._advance() || t >= limit; });
    }
  }
  _clearNarr() {
    for (const c of [...this.narrEl.children]) { c.classList.remove('show'); c.classList.add('out'); setTimeout(() => c.remove(), 1100); }
  }
  clearNarration() { this._clearNarr(); }

  // narration at the bottom during play (doesn't block unless waited on)
  async lower(text, { auto = null, hold = null, block = true } = {}) {
    text = fmt(text);
    for (const c of [...this.lowerEl.children]) { c.classList.remove('show'); setTimeout(() => c.remove(), 1100); }
    const line = el('div', 'line'); line.innerHTML = text + '<span class="advance"></span>';
    this.lowerEl.appendChild(line); void line.offsetWidth; line.classList.add('show');
    const autoOn = auto ?? this.settings.auto;
    const limit = hold ?? (autoOn ? this._readTime(text) : Infinity);
    if (!block) { wait(limit).then(() => { line.classList.remove('show'); setTimeout(() => line.remove(), 1200); }); return; }
    await wait(0.6); line.classList.add('ready');
    let t = 0.6;
    await every((dt) => { t += dt; return this._advance() || t >= limit; });
    line.classList.remove('show'); setTimeout(() => line.remove(), 1200);
  }

  // ---------- speech bubbles ----------
  async say(speaker, text, { thought = false, auto = null, hold = null, small = false, name = null, passive = false } = {}) {
    text = fmt(text);
    const b = el('div', 'bubble' + (thought ? ' thought' : '') + (small ? ' small' : ''));
    const who = name ?? speaker?.name ?? '';
    b.innerHTML = (who && !thought ? `<span class="who">${fmt(who)}</span>` : '') + '<span class="t"></span><span class="advance"></span>';
    this.bubblesEl.appendChild(b);
    const rec = { el: b, speaker }; this.bubbles.push(rec);
    this._positionBubble(rec);
    void b.offsetWidth; b.classList.add('show');
    const tEl = b.querySelector('.t');
    // typewriter
    let shown = 0; let typing = true; const speed = 48 * this.settings.textSpeed;
    let acc = 0, blip = 0;
    const adv = passive ? () => false : () => this._advance();
    await every((dt) => {
      if (adv()) { typing = false; return true; }
      acc += dt * speed; const n = Math.min(text.length, Math.floor(acc));
      if (n > shown) { shown = n; tEl.textContent = text.slice(0, n); blip++; if (blip % 3 === 0 && !thought) G.audio?.sfx('tap', { vol: 0.25 }); }
      return n >= text.length;
    });
    tEl.textContent = text;
    b.classList.add('ready');
    const autoOn = auto ?? this.settings.auto;
    const limit = hold ?? (autoOn || passive ? this._readTime(text) * 0.85 : Infinity);
    let t = 0;
    await wait(0.25);
    await every((dt) => { t += dt; return adv() || t >= limit; });
    b.classList.remove('show');
    setTimeout(() => { b.remove(); this.bubbles = this.bubbles.filter((r) => r !== rec); }, 350);
  }
  _positionBubble(rec) {
    const s = rec.speaker;
    let x = window.innerWidth / 2, y = window.innerHeight * 0.7;
    if (s && (s.headWorld || s.isVector3 || s.position)) {
      const v = s.headWorld ? s.headWorld() : (s.isVector3 ? s.clone() : s.position.clone());
      const p = G.renderer.project(v);
      x = clamp(p.x, 140, window.innerWidth - 140); y = clamp(p.y - 14, 90, window.innerHeight - 40);
    }
    rec.el.style.left = x + 'px'; rec.el.style.top = y + 'px';
  }

  // ---------- choices ----------
  choose(prompt, options) {
    if (G.auto) { G.log?.push('choose: ' + prompt); return wait(0.2).then(() => (G.autoChoice ?? 0) % options.length); }
    return new Promise((resolve) => {
      const c = this.choicesEl; c.innerHTML = ''; c.classList.remove('hidden');
      if (prompt) c.appendChild(el('div', 'q', fmt(prompt)));
      let sel = -1;
      const btns = options.map((o, i) => {
        const b = el('button', '', `<span class="n">${i + 1}</span><span>${fmt(o)}</span>`);
        b.style.animationDelay = (0.15 + i * 0.12) + 's';
        b.addEventListener('pointerdown', (e) => { e.stopPropagation(); finish(i); });
        b.addEventListener('mouseenter', () => { sel = i; mark(); });
        c.appendChild(b); return b;
      });
      const mark = () => btns.forEach((b, i) => b.classList.toggle('sel', i === sel));
      let done = false;
      const finish = (i) => { if (done) return; done = true; G.audio?.sfx('soft', { deg: 5 }); c.classList.add('hidden'); c.innerHTML = ''; G.updaters.delete(loop); resolve(i); };
      const loop = () => {
        const inp = G.input;
        for (let i = 0; i < options.length && i < 4; i++) if (inp.pressed('n' + (i + 1))) return finish(i);
        if (inp.pressed('down') || inp.pressed('right')) { sel = (sel + 1) % options.length; mark(); }
        if (inp.pressed('up') || inp.pressed('left')) { sel = (sel - 1 + options.length) % options.length; mark(); }
        if (inp.pressed('act') && sel >= 0) { inp.consume('act'); finish(sel); }
      };
      G.updaters.add(loop);
    });
  }
  askText(prompt, def = '') {
    if (G.auto) return wait(0.2).then(() => def);
    return new Promise((resolve) => {
      const c = this.choicesEl; c.innerHTML = ''; c.classList.remove('hidden');
      c.appendChild(el('div', 'q', fmt(prompt)));
      const inp = el('input'); inp.type = 'text'; inp.maxLength = 14; inp.value = def; inp.placeholder = def;
      c.appendChild(inp);
      const ok = el('button', '', '<span class="n">✓</span><span>That\'s the one</span>');
      c.appendChild(ok);
      setTimeout(() => { inp.focus(); inp.select(); }, 50);
      const done = () => {
        let v = inp.value.trim().replace(/[<>&"]/g, '');
        if (!v) v = def;
        v = v.charAt(0).toUpperCase() + v.slice(1);
        c.classList.add('hidden'); c.innerHTML = ''; inp.blur(); resolve(v);
      };
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); done(); } e.stopPropagation(); });
      ok.addEventListener('pointerdown', (e) => { e.stopPropagation(); done(); });
    });
  }

  // ---------- hotspot prompt ----------
  setPrompt(h) {
    this.promptTarget = h;
    if (!h) { this.promptEl.classList.add('hidden'); return; }
    this.promptEl.classList.remove('hidden');
    this.promptEl.className = h.kind === 'work' ? 'work' : h.kind === 'story' ? 'story' : h.kind === 'secret' ? 'secret' : '';
    const key = G.input.lastDevice === 'touch' ? 'Tap' : 'Space';
    this.promptEl.querySelector('.key').textContent = key;
    this.promptEl.querySelector('.txt').textContent = (h.kind === 'secret' ? '✦ ' : '') + fmt(h.label);
  }

  // ---------- HUD ----------
  showHud(on = true) {
    this.albumBtn.classList.toggle('hidden', !on);
    this.menuBtn.classList.toggle('hidden', !on);
  }
  clock(on) { this.clockEl.classList.toggle('hidden', !on); }
  setClock(progress, age, urgent = false) {
    const p = clamp(progress, 0, 1);
    this.clockEl.querySelector('.fill').style.strokeDashoffset = 264 * (1 - p);
    this.clockEl.querySelector('.sun').style.transform = `rotate(${p * 360}deg)`;
    this.clockEl.querySelector('.num').textContent = age;
    this.clockEl.classList.toggle('urgent', urgent);
  }
  setAlbumCount(n, bump = false) {
    this.albumBtn.querySelector('.count').textContent = n;
    if (bump) { this.albumBtn.classList.remove('bump'); void this.albumBtn.offsetWidth; this.albumBtn.classList.add('bump'); }
  }
  hint(html, seconds = 6) {
    this.hintEl.innerHTML = html; this.hintEl.classList.add('show');
    clearTimeout(this._hintT);
    if (seconds) this._hintT = setTimeout(() => this.hintEl.classList.remove('show'), seconds * 1000);
  }
  hideHint() { this.hintEl.classList.remove('show'); }

  // ---------- chapter card ----------
  async chapterCard({ num = '', title = '', ages = '', quote = '' }, hold = 4.5) {
    const c = this.cardEl;
    c.querySelector('.num').textContent = num; c.querySelector('.title').textContent = title;
    c.querySelector('.ages').textContent = ages; c.querySelector('.quote').textContent = fmt(quote);
    c.classList.remove('hidden', 'out', 'show'); void c.offsetWidth; c.classList.add('show');
    let t = 0;
    await every((dt) => { t += dt; return (t > 2.5 && this._advance()) || t > hold + 2 || (G.auto && t > 0.5); });
    c.classList.add('out');
    await sleepReal(1200);
    c.classList.add('hidden'); c.classList.remove('show', 'out');
  }

  // fly a polaroid to the album button
  flyPolaroid(img, caption) {
    const p = el('div', 'polaroid');
    const w = Math.min(320, window.innerWidth * 0.35);
    p.style.width = w + 'px';
    p.innerHTML = `<img src="${img || ''}"><div class="cap">${fmt(caption)}</div>`;
    p.style.left = (window.innerWidth / 2 - w / 2) + 'px'; p.style.top = (window.innerHeight / 2 - w * 0.45) + 'px';
    p.style.transform = 'rotate(-3deg) scale(0.9)'; p.style.opacity = '0';
    p.style.transition = 'opacity 0.5s ease, transform 0.6s ease';
    this.flyerEl.appendChild(p);
    requestAnimationFrame(() => { p.style.opacity = '1'; p.style.transform = 'rotate(-2deg) scale(1)'; });
    setTimeout(() => {
      const r = this.albumBtn.getBoundingClientRect();
      const tx = (r.left + r.width / 2) - (window.innerWidth / 2), ty = (r.top + r.height / 2) - (window.innerHeight / 2);
      p.style.transition = 'transform 1.1s cubic-bezier(.6,.0,.3,1), opacity 1.1s ease';
      p.style.transform = `translate(${tx}px, ${ty}px) rotate(12deg) scale(0.08)`;
      p.style.opacity = '0.2';
    }, 2300);
    setTimeout(() => { p.remove(); this.setAlbumCount(G.album.count(), true); }, 3500);
  }

  update() {
    for (const b of this.bubbles) this._positionBubble(b);
    if (this.promptTarget) {
      const h = this.promptTarget;
      const pos = h.position.clone(); pos.y = (h.def.height ?? (h.anchor?.height ? h.anchor.height + 0.25 : 1)) + 0.55;
      const p = G.renderer.project(pos);
      this.promptEl.style.left = p.x + 'px'; this.promptEl.style.top = (p.y - 6) + 'px';
    }
  }
}
export { el, $ };
