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
  // ---- Chapter II · Wonder ----
  { id: 'planted_tree', cat: 'story', title: 'The Little Tree', desc: 'Plant the family tree with Grandpa.' },
  { id: 'again_again', cat: 'story', title: 'Again. Again. Again.', desc: 'Ask for the bedtime story one more time.' },
  { id: 'lemonade_candy', cat: 'path', title: 'Sugar Rush', desc: 'Spend all your lemonade money on candy.', hidden: true },
  { id: 'lemonade_jar', cat: 'path', title: 'Saving Up', desc: 'Put your lemonade money in the jar.', hidden: true },
  { id: 'lemonade_theo', cat: 'path', title: 'Business Partners', desc: 'Spend your lemonade money on Theo.', hidden: true },
  { id: 'kissed_better', cat: 'path', title: 'Kissed Better', desc: 'Call for Mom when you scrape your knee.', hidden: true },
  { id: 'dinosaur_bandage', cat: 'path', title: 'The T. Rex', desc: 'Call for Dad when you scrape your knee.', hidden: true },
  { id: 'five_more_minutes', cat: 'path', title: 'Five More Minutes', desc: 'Stay out until the very end of a summer day.' },
  { id: 'shooting_star', cat: 'path', title: 'Count the Stars', desc: 'Count the stars with Dad.', hidden: true },
  { id: 'golden_marshmallow', cat: 'path', title: 'Patience', desc: 'Toast a perfect golden marshmallow.', hidden: true },
  { id: 'crunchy_marshmallow', cat: 'path', title: 'Crunchy on the Outside', desc: 'Set your marshmallow on fire.', hidden: true },
  { id: 'night_light', cat: 'path', title: 'Night Light', desc: 'Keep the fireflies in a jar overnight.', hidden: true },
  { id: 'places_to_be', cat: 'path', title: 'Places to Be', desc: 'Let the fireflies go.', hidden: true },
  { id: 'fairy_door', cat: 'egg', title: 'Who Lives Here?', desc: 'Find the tiny door at the foot of the cherry tree.', hidden: true },
  { id: 'firefly_king', cat: 'egg', title: 'Long Live the King', desc: 'Find who moved into your sandcastle.', hidden: true },
  // ---- Chapter III · Running ----
  { id: 'met_sam', cat: 'story', title: 'Mint Chocolate Chip', desc: 'Share the last cone with Sam.' },
  { id: 'old_friend', cat: 'story', title: 'At His Pace', desc: 'Walk old Biscuit, as slowly as he needs.' },
  { id: 'one_umbrella', cat: 'story', title: 'Under One Umbrella', desc: 'Hold your parents’ hands in the rain.' },
  { id: 'for_grandpa', cat: 'story', title: 'For Grandpa', desc: 'Let a paper lantern go.' },
  { id: 'sat_with_grandpa', cat: 'path', title: 'Time Well Spent', desc: 'Sit with Grandpa on the porch.', hidden: true },
  { id: 'said_later', cat: 'path', title: 'Later', desc: 'Tell Grandpa you’ll sit with him later.', hidden: true },
  { id: 'long_grass', cat: 'path', title: 'The Long Grass', desc: 'Take the shortcut down Miller’s Hill.', hidden: true },
  { id: 'race_won', cat: 'path', title: 'Mint Chip’s on Theo', desc: 'Beat Theo down Miller’s Hill.', hidden: true },
  { id: 'sam_pond', cat: 'path', title: 'The House with the Little Oak', desc: 'Show Sam the pond.', hidden: true },
  { id: 'handprints', cat: 'path', title: 'Forever', desc: 'Leave your handprints in the wet cement with Theo.', hidden: true },
  { id: 'family_record', cat: 'egg', title: 'Family Record', desc: 'Skip a stone seven times.', hidden: true },
  { id: 'streetlights', cat: 'egg', title: 'One by One', desc: 'Watch the streetlights come on.', hidden: true },
  { id: 'top_of_the_hill', cat: 'egg', title: 'Everything', desc: 'Find the spot at the very top of Miller’s Hill.', hidden: true },
  { id: 'end_to_end', cat: 'egg', title: 'End to End', desc: 'Ride the whole street, from one edge of town to the other.', hidden: true },
  // ---- Chapter IV · Together ----
  { id: 'c4_married', cat: 'story', title: 'I Do', desc: 'Say your vows under the family tree.' },
  { id: 'c4_first_dance', cat: 'story', title: 'Badly, Together', desc: 'Share a first dance with Sam.' },
  { id: 'c4_lantern', cat: 'story', title: 'Same Time Next Year', desc: 'Release a lantern over the lake with Sam.' },
  { id: 'c4_group_photo', cat: 'story', title: 'Everyone, All at Once', desc: 'Get everyone you love into one photograph.' },
  { id: 'c4_small_feet', cat: 'story', title: 'Small Feet', desc: 'Be given the keys to the house you grew up in.' },
  { id: 'c4_wingman', cat: 'path', title: 'Wingman', desc: 'Go to the lantern festival with Theo.', hidden: true },
  { id: 'c4_alone', cat: 'path', title: 'Is This Seat Taken?', desc: 'Go to the festival alone — and be found.', hidden: true },
  { id: 'c4_hello_again', cat: 'path', title: 'Hello Again', desc: 'Recognise Sam from the ice-cream cart, ten years later.', hidden: true },
  { id: 'c4_hello_stranger', cat: 'path', title: 'Hello, Stranger', desc: 'Meet Sam at the lantern festival.', hidden: true },
  { id: 'c4_ring_toss', cat: 'path', title: 'Nobody Ever Wins', desc: 'Actually win the ring toss.', hidden: true },
  { id: 'c4_ugly_frog', cat: 'path', title: 'Kept for Forty Years', desc: 'Take home the ugliest prize at the festival.', hidden: true },
  { id: 'c4_dance_sam', cat: 'path', title: 'Still Can’t Dance', desc: 'Give Sam the first dance at the wedding.', hidden: true },
  { id: 'c4_dance_parent', cat: 'path', title: 'Standing on Their Feet', desc: 'Give your parent the first dance at the wedding.', hidden: true },
  { id: 'c4_dance_grandma', cat: 'path', title: 'One for Grandpa', desc: 'Give Grandma the first dance at the wedding.', hidden: true },
  { id: 'c4_eleven_pages', cat: 'path', title: 'All Eleven Pages', desc: 'Let Theo read his entire wedding speech.', hidden: true },
  { id: 'c4_hedgehog', cat: 'egg', title: 'Small and Prickly', desc: 'Find the hedgehog hiding under the trees.', hidden: true },
  { id: 'c4_tambourine', cat: 'egg', title: 'Uninvited Percussion', desc: 'Join the band. Nobody asked you to.', hidden: true },
  { id: 'c4_biscuit_ball', cat: 'egg', title: 'Good Dog', desc: 'Find Biscuit’s old ball under the hedge.', hidden: true },
  { id: 'c4_cake_thief', cat: 'egg', title: 'Cake Thief', desc: 'Taste the wedding cake before anyone else.', hidden: true },
  // ---- Chapter VI · So Fast ----
  { id: 'c6_empty_room', cat: 'story', title: 'You Wished for Quiet', desc: 'Stand in the empty room.' },
  { id: 'c6_paying_attention', cat: 'album', title: 'Paying Attention', desc: 'Keep eight or more moments while the years fly by.' },
  { id: 'c6_door_knock', cat: 'path', title: 'Knock Knock', desc: 'Knock on the slammed door.', hidden: true },
  { id: 'c6_door_wait', cat: 'path', title: 'From the Other Side', desc: 'Wait outside the slammed door until they knock first.', hidden: true },
  { id: 'c6_read_it_again', cat: 'path', title: 'Read It Again', desc: 'Read your teenager one last bedtime story.', hidden: true },
  { id: 'c6_drove', cat: 'path', title: 'Four Hours Each Way', desc: 'Drive your child to college yourself.', hidden: true },
  { id: 'c6_curb', cat: 'path', title: 'Call Me When You Get There', desc: 'Say goodbye at the curb and watch them drive away.', hidden: true },
  { id: 'c6_biscuit_stone', cat: 'egg', title: 'Good Dog, Always', desc: 'Visit Biscuit’s stone under the cherry tree.', hidden: true },
  { id: 'c6_ceiling_stars', cat: 'egg', title: 'Their Ceiling', desc: 'Lie on their bed and see what they saw every night.', hidden: true },
  // ---- Chapter VII · Winter ----
  { id: 'ch7_coming_home', cat: 'story', title: 'Coming Home', desc: 'Answer the phone on a quiet winter morning.' },
  { id: 'ch7_three_generations', cat: 'story', title: 'Three Generations', desc: 'Hear Pip hum the lullaby.' },
  { id: 'ch7_snow_first', cat: 'path', title: 'Snow First', desc: 'Go straight out into the snow with Pip.', hidden: true },
  { id: 'ch7_talk_first', cat: 'path', title: 'Grown-up Talk', desc: 'Sit with your child on the porch before going out to play.', hidden: true },
  { id: 'ch7_pass_it_on', cat: 'path', title: 'Pass It On', desc: 'Tell your child to put the phone away.', hidden: true },
  { id: 'ch7_confession', cat: 'path', title: 'What I Learned', desc: 'Tell your child about the emails you answered.', hidden: true },
  { id: 'ch7_swing_again', cat: 'path', title: 'Higher, Higher', desc: 'Push Pip on the old swing.', hidden: true },
  { id: 'ch7_watch', cat: 'path', title: 'Time’s a Funny Thing', desc: 'Give Grandpa’s watch to Pip.', hidden: true },
  { id: 'ch7_scarf', cat: 'path', title: 'Already There', desc: 'Give Pip your scarf, and the words you never heard.', hidden: true },
  { id: 'ch7_gift_later', cat: 'path', title: 'A Little Longer Still', desc: 'Keep the gift a little longer, then leave it with a note.', hidden: true },
  { id: 'ch7_egg_table', cat: 'egg', title: 'Round and Round', desc: 'Walk all the way around the kitchen table, like a three-year-old.', hidden: true },
  { id: 'ch7_egg_theo', cat: 'egg', title: 'Still Neighbours', desc: 'Find Theo’s card in the mailbox.', hidden: true },
  { id: 'ch7_egg_fox', cat: 'egg', title: 'The Night Visitor', desc: 'Stand at the window long enough to see who visits at night.', hidden: true },
  // ---- Chapter VIII ----
  { id: 'ch8_held', cat: 'story', title: 'Held', desc: 'Walk the whole path and be carried home.' },
  { id: 'ch8_every_moment', cat: 'album', title: 'Every Little Moment', desc: 'Keep every moment there was to keep.', hidden: true },
  { id: 'ch8_present', cat: 'album', title: 'Present', desc: 'Finish with an empty album. You were there for all of it.', hidden: true },
  { id: 'ch8_no_going_back', cat: 'egg', title: 'No Going Back', desc: 'Try to walk back along the path.', hidden: true },
  { id: 'ch8_catch_up', cat: 'egg', title: 'I’ll Catch Up', desc: 'Stop and wait with Sam on the path.', hidden: true },
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
