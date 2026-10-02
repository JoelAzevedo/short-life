// The album: every moment you kept (a real snapshot of your playthrough),
// plus empty frames for the ones that passed you by. Also handles saving.
import { G, fmt } from './game.js';
import { el } from './ui.js';

const SAVE_KEY = 'lm.save.v1';
const IMG_KEY = 'lm.img.';

export const CHAPTER_NAMES = ['Prologue', 'I · Tiny', 'II · Wonder', 'III · Running', 'IV · Together', 'V · Little Ones', 'VI · So Fast', 'VII · Winter', 'VIII · Little Moments'];

export class Album {
  constructor() {
    this.registry = new Map(); // id → {id, chapter, caption, scene}
    this.kept = new Map();     // id → {caption, chapter, img}
    this.lost = new Set();
    this.el = document.querySelector('#album');
    this.open = false;
    this.tab = 1;
  }
  register(id, chapter, caption, scene) { if (!this.registry.has(id)) this.registry.set(id, { id, chapter, caption, scene }); }
  count() { return this.kept.size; }
  has(id) { return this.kept.has(id); }
  keep(id, caption, chapter, img) {
    this.kept.set(id, { caption, chapter, img });
    this.lost.delete(id);
    try { if (img) localStorage.setItem(IMG_KEY + id, img); } catch (e) { /* storage full: caption survives */ }
  }
  lose(id) { if (!this.kept.has(id)) this.lost.add(id); }
  keptIn(chapter) { return [...this.kept.entries()].filter(([, v]) => v.chapter === chapter); }

  // ---------- save / load ----------
  save(sceneIndex) {
    const data = {
      v: 1, sceneIndex, date: Date.now(),
      state: G.state,
      kept: Object.fromEntries([...this.kept.entries()].map(([k, v]) => [k, { caption: v.caption, chapter: v.chapter }])),
      lost: [...this.lost],
    };
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch (e) { console.warn('save failed', e); }
  }
  static readSave() { try { return JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch (e) { return null; } }
  load(data) {
    this.kept.clear(); this.lost.clear();
    for (const [k, v] of Object.entries(data.kept || {})) {
      let img = null; try { img = localStorage.getItem(IMG_KEY + k); } catch (e) { /* ignore */ }
      this.kept.set(k, { ...v, img });
    }
    (data.lost || []).forEach((id) => this.lost.add(id));
    Object.assign(G.state, data.state || {});
  }
  // forget everything after a scene (when replaying from a checkpoint)
  forgetFrom(sceneIds) {
    for (const [id, r] of this.registry) if (sceneIds.includes(r.scene)) { this.kept.delete(id); this.lost.delete(id); try { localStorage.removeItem(IMG_KEY + id); } catch (e) { /* ignore */ } }
  }
  wipe() {
    try {
      const rm = [];
      for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && (k.startsWith(IMG_KEY) || k === SAVE_KEY)) rm.push(k); }
      rm.forEach((k) => localStorage.removeItem(k));
    } catch (e) { /* ignore */ }
    this.kept.clear(); this.lost.clear();
  }

  // ---------- view ----------
  show(tab = null, { reachedChapter = 8, onClose = null } = {}) {
    this.open = true; this.onClose = onClose;
    if (tab !== null) this.tab = tab;
    this.reached = reachedChapter;
    this.render();
    this.el.classList.remove('hidden');
  }
  hide() { this.open = false; this.el.classList.add('hidden'); this.el.innerHTML = ''; this.onClose && this.onClose(); }
  render() {
    const e = this.el; e.innerHTML = '';
    const book = el('div', 'book');
    const head = el('div', 'head');
    head.appendChild(el('h2', '', 'Little Moments'));
    const close = el('button', 'close', 'Close ✕'); close.addEventListener('click', () => this.hide()); head.appendChild(close);
    book.appendChild(head);
    const tabs = el('div', 'tabs');
    for (let c = 1; c <= Math.min(8, this.reached); c++) {
      const n = this.keptIn(c).length;
      const b = el('button', c === this.tab ? 'on' : '', `${CHAPTER_NAMES[c]} <small>(${n})</small>`);
      b.addEventListener('click', () => { this.tab = c; this.render(); });
      tabs.appendChild(b);
    }
    book.appendChild(tabs);
    const page = el('div', 'page');
    const moments = [...this.registry.values()].filter((r) => r.chapter === this.tab);
    // kept moments not in the registry (dynamic captions) are included too
    const ids = new Set(moments.map((m) => m.id));
    for (const [id, v] of this.kept) if (v.chapter === this.tab && !ids.has(id)) moments.push({ id, chapter: v.chapter, caption: v.caption });
    let i = 0;
    for (const m of moments) {
      const k = this.kept.get(m.id);
      const p = el('div', 'polaroid' + (k ? '' : ' empty'));
      p.style.setProperty('--r', ((i++ * 37) % 9 - 4) * 0.8 + 'deg');
      if (k) p.innerHTML = (k.img ? `<img class="ph" src="${k.img}">` : `<div class="ph"></div>`) + `<div class="cap">${fmt(k.caption)}</div>`;
      else p.innerHTML = `<div class="ph"></div><div class="cap">${this.lost.has(m.id) ? 'a moment that passed' : 'not yet lived'}</div>`;
      page.appendChild(p);
    }
    if (!moments.length) page.appendChild(el('div', 'note', 'Nothing here yet.'));
    book.appendChild(page);
    e.appendChild(book);
  }
}
