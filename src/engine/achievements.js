// Achievements: story milestones, alternate paths and easter eggs.
// Stored locally across playthroughs, and mirrored to Steam when the game runs
// inside the desktop wrapper (see electron/ and docs/STEAM.md).
import { G } from './game.js';
import { el } from './ui.js';

// cat: story | path | egg | album.  hidden: description is secret until unlocked.
// steam: the API name used in Steamworks (ACH_ + id in upper case unless given).
export const ACHIEVEMENTS = [
  // ---- story ----
  { id: 'begin', cat: 'story', title: 'So Small', desc: 'Begin a life.' },
  { id: 'first_steps', cat: 'story', title: 'Three Steps', desc: 'Take your first steps.' },
  { id: 'first_word', cat: 'story', title: 'First Word', desc: 'Say your very first word.' },
  { id: 'ch1', cat: 'story', title: 'Tiny', desc: 'Finish Chapter I.' },
  { id: 'ch2', cat: 'story', title: 'Wonder', desc: 'Finish Chapter II.' },
  { id: 'ch3', cat: 'story', title: 'Running', desc: 'Finish Chapter III.' },
  { id: 'ch4', cat: 'story', title: 'Together', desc: 'Finish Chapter IV.' },
  { id: 'ch5', cat: 'story', title: 'Little Ones', desc: 'Finish Chapter V.' },
  { id: 'ch6', cat: 'story', title: 'So Fast', desc: 'Finish Chapter VI.' },
  { id: 'ch7', cat: 'story', title: 'Winter', desc: 'Finish Chapter VII.' },
  { id: 'the_end', cat: 'story', title: 'The Little Moments', desc: 'Live a whole life.' },
  { id: 'your_song', cat: 'story', title: 'Your Mother’s Song', desc: 'Sing the lullaby to your own child.' },
  { id: 'always', cat: 'story', title: 'Will You Always Be Here?', desc: 'Answer the hardest question.' },
  // ---- album ----
  { id: 'keep_1', cat: 'album', title: 'Click', desc: 'Keep your first moment.' },
  { id: 'keep_10', cat: 'album', title: 'A Handful of Moments', desc: 'Keep 10 moments.' },
  { id: 'keep_30', cat: 'album', title: 'A Shoebox of Photographs', desc: 'Keep 30 moments.' },
  { id: 'keep_60', cat: 'album', title: 'A Full Album', desc: 'Keep 60 moments.' },
  { id: 'present', cat: 'album', title: 'Fully Present', desc: 'Keep every moment in a chapter.' },
  { id: 'passed', cat: 'album', title: 'It Happened Anyway', desc: 'Let a moment pass you by.' },
  // ---- alternate paths ----
  { id: 'as_mother', cat: 'path', title: 'A Mother', desc: 'Live a whole life as a mother.' },
  { id: 'as_father', cat: 'path', title: 'A Father', desc: 'Live a whole life as a father.' },
  { id: 'both_lives', cat: 'path', title: 'Two Lives', desc: 'Live a whole life as a mother and as a father.' },
  { id: 'call_mom', cat: 'path', title: 'Mama’s Arms', desc: 'Call for your mother in the nursery.', hidden: true },
  { id: 'call_dad', cat: 'path', title: 'Papa’s Arms', desc: 'Call for your father in the nursery.', hidden: true },
  { id: 'word_woof', cat: 'path', title: 'Woof', desc: 'Make your first word a bark.', hidden: true },
  { id: 'grandma_lap', cat: 'path', title: 'Grandma’s Lap', desc: 'Fall asleep on Grandma’s lap.', hidden: true },
  { id: 'grandpa_lap', cat: 'path', title: 'Grandpa’s Whistle', desc: 'Fall asleep on Grandpa’s lap.', hidden: true },
  { id: 'daughter', cat: 'path', title: 'A Daughter', desc: 'Raise a daughter.' },
  { id: 'son', cat: 'path', title: 'A Son', desc: 'Raise a son.' },
  { id: 'wake_sam', cat: 'path', title: 'Two Tired People', desc: 'Wake Sam for the 3 a.m. feed.', hidden: true },
  { id: 'let_go', cat: 'path', title: 'Let Go', desc: 'Let go of the bike.', hidden: true },
  { id: 'held_on', cat: 'path', title: 'A Little Longer', desc: 'Hold on to the bike a little longer.', hidden: true },
  { id: 'said_no', cat: 'path', title: 'Not Today', desc: 'Say no to working on a Saturday.' },
  { id: 'workaholic', cat: 'path', title: 'Just One More Email', desc: 'Answer work five times in one life.', hidden: true },
  { id: 'unplugged', cat: 'path', title: 'Unplugged', desc: 'Get through Chapter V without answering work once.' },
  { id: 'puppy', cat: 'path', title: 'A New Biscuit', desc: 'Say yes to the puppy.', hidden: true },
  { id: 'every_answer', cat: 'path', title: 'Every Answer Was True', desc: 'Give each answer to “Will you always be here?” across your lives.', hidden: true },
  // ---- easter eggs ----
  { id: 'konami', cat: 'egg', title: 'Party Hats', desc: 'Up, up, down, down…', hidden: true },
  { id: 'title_swing', cat: 'egg', title: 'One More Push', desc: 'Be very impatient on the title screen.', hidden: true },
  { id: 'fridge', cat: 'egg', title: 'Old Friend', desc: 'Find what is stuck to the fridge.', hidden: true },
  { id: 'plant_snack', cat: 'egg', title: 'Taste Test', desc: 'Find out what the plant tastes like.', hidden: true },
  { id: 'hedgehog', cat: 'egg', title: 'A Tiny Friend', desc: 'Find who lives under the hedge.', hidden: true },
  { id: 'diaper', cat: 'egg', title: 'Your Turn', desc: 'Volunteer for diaper duty.', hidden: true },
  { id: 'postcard', cat: 'egg', title: 'Wish You Were Here', desc: 'Check the mailbox.', hidden: true },
  { id: 'wish', cat: 'egg', title: 'Make a Wish', desc: 'Catch the shooting star.', hidden: true },
];

const KEY = 'lm.achievements';

export class Achievements {
  constructor() {
    this.defs = new Map(ACHIEVEMENTS.map((a) => [a.id, { ...a }]));
    this.unlocked = {};
    this.meta = {};
    try { const d = JSON.parse(localStorage.getItem(KEY) || '{}'); this.unlocked = d.unlocked || {}; this.meta = d.meta || {}; for (const x of d.extra || []) if (!this.defs.has(x.id)) this.defs.set(x.id, x); } catch (e) { /* ignore */ }
    this.queue = []; this.showing = false;
    this.el = null;
    // re-sync with Steam on start (activating twice is harmless)
    setTimeout(() => { for (const id in this.unlocked) this._steam(id); }, 2000);
  }
  _save() {
    const extra = [...this.defs.values()].filter((d) => d.extra);
    try { localStorage.setItem(KEY, JSON.stringify({ unlocked: this.unlocked, meta: this.meta, extra })); } catch (e) { /* ignore */ }
  }
  steamName(id) { const d = this.defs.get(id); return d?.steam ?? 'ACH_' + id.toUpperCase().replace(/[^A-Z0-9]/g, '_'); }
  _steam(id) {
    const name = this.steamName(id);
    try {
      if (window.steam?.activateAchievement) window.steam.activateAchievement(name);       // electron preload bridge
      else if (window.greenworks?.activateAchievement) window.greenworks.activateAchievement(name, () => {}, () => {});
    } catch (e) { /* not on Steam */ }
  }
  has(id) { return !!this.unlocked[id]; }
  // unlock(id) for known ids; unknown ids may pass a title/description
  unlock(id, title = null, desc = null, cat = 'path') {
    if (!this.defs.has(id)) this.defs.set(id, { id, title: title ?? id, desc: desc ?? '', cat, extra: true });
    if (this.unlocked[id]) return false;
    this.unlocked[id] = Date.now();
    this._save();
    this._steam(id);
    this.queue.push(this.defs.get(id));
    this._next();
    return true;
  }
  // remember values across playthroughs (e.g. every answer given)
  remember(key, value) {
    const s = new Set(this.meta[key] || []); s.add(value); this.meta[key] = [...s]; this._save(); return s.size;
  }
  count() { return Object.keys(this.unlocked).length; }

  async _next() {
    if (this.showing || !this.queue.length) return;
    this.showing = true;
    const a = this.queue.shift();
    const t = el('div', 'achToast', `<div class="star">✦</div><div><div class="lbl">Achievement</div><div class="ttl">${a.title}</div><div class="dsc">${a.desc}</div></div>`);
    document.getElementById('ui').appendChild(t);
    G.audio?.sfx('sparkle', { vol: 0.6 });
    requestAnimationFrame(() => t.classList.add('show'));
    await new Promise((r) => setTimeout(r, 3800));
    t.classList.remove('show');
    await new Promise((r) => setTimeout(r, 600));
    t.remove();
    this.showing = false;
    this._next();
  }

  show(onClose = null) {
    const wasPaused = G.paused; G.paused = true;
    const wrap = el('div', 'achView');
    const panel = el('div', 'achPanel');
    const total = this.defs.size, got = Object.keys(this.unlocked).filter((k) => this.defs.has(k)).length;
    panel.appendChild(el('div', 'head', `<h2>Achievements</h2><span>${got} / ${total}</span>`));
    const close = el('button', 'close', 'Close ✕'); panel.querySelector('.head').appendChild(close);
    const list = el('div', 'list');
    const cats = [['story', 'The story'], ['album', 'The album'], ['path', 'Other lives'], ['egg', 'Little secrets']];
    for (const [cat, label] of cats) {
      const defs = [...this.defs.values()].filter((d) => (d.cat ?? 'path') === cat);
      if (!defs.length) continue;
      list.appendChild(el('h3', '', label));
      for (const d of defs) {
        const on = !!this.unlocked[d.id];
        list.appendChild(el('div', 'ach' + (on ? ' on' : ''), `<div class="star">${on ? '✦' : '✧'}</div><div><div class="ttl">${on || !d.hidden ? d.title : '???'}</div><div class="dsc">${on || !d.hidden ? d.desc : 'A secret, for another life.'}</div></div>`));
      }
    }
    panel.appendChild(list);
    wrap.appendChild(panel);
    document.getElementById('ui').appendChild(wrap);
    const done = () => { wrap.remove(); G.paused = wasPaused && !!G.director?.menuOpen; if (!G.director?.menuOpen) G.paused = false; onClose && onClose(); };
    close.addEventListener('click', done);
    wrap.addEventListener('pointerdown', (e) => { if (e.target === wrap) done(); });
  }
}

// ---------- the Konami code, because some things are traditions ----------
export function watchKonami(onCode) {
  const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  let i = 0;
  window.addEventListener('keydown', (e) => {
    if (e.code === seq[i]) { i++; if (i === seq.length) { i = 0; onCode(); } } else i = e.code === seq[0] ? 1 : 0;
  });
}
