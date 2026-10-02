// Music data: the lullaby and one "profile" per emotional state.
// The lullaby is the thread of the whole game: a music box in the nursery,
// your mother's voice, your own voice, and finally your grandchild humming it.

export const KEYS = { C: 60, 'C#': 61, Db: 61, D: 62, Eb: 63, E: 64, F: 65, 'F#': 66, G: 67, Ab: 68, A: 69, Bb: 70, B: 71 };
export const SCALES = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  harmonic: [0, 2, 3, 5, 7, 8, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
};

// Roman numeral → { root (semitones from tonic), intervals }
const ROMAN = { i: 0, ii: 1, iii: 2, iv: 3, v: 4, vi: 5, vii: 6 };
export function parseChord(sym, minor = false) {
  let s = sym; let flat = 0;
  if (s[0] === 'b') { flat = -1; s = s.slice(1); } else if (s[0] === '#') { flat = 1; s = s.slice(1); }
  const m = s.match(/^(VII|VI|IV|V|III|II|I|vii|vi|iv|v|iii|ii|i)(.*)$/);
  if (!m) return { root: 0, iv: [0, 4, 7] };
  const num = m[1], suf = m[2];
  const upper = num === num.toUpperCase();
  const deg = ROMAN[num.toLowerCase()];
  const root = SCALES.major[deg] + flat + (minor && ['iii', 'vi', 'vii'].includes(num.toLowerCase()) ? -1 : 0);
  let iv = upper ? [0, 4, 7] : [0, 3, 7];
  if (suf.includes('°') || suf.includes('dim')) iv = [0, 3, 6];
  if (suf.includes('sus4')) iv = [0, 5, 7];
  if (suf.includes('sus2')) iv = [0, 2, 7];
  if (suf.includes('maj7')) iv = [...iv, 11];
  else if (suf.includes('7')) iv = [...iv, 10];
  if (suf.includes('add9')) iv = [...iv, 14];
  if (suf.includes('6')) iv = [...iv, 9];
  return { root, iv };
}

// degree encoding: 1..7 = scale degrees, 8..14 next octave, 0 = 7 below, -1 = 6 below …
export function degreeToSemi(d, scale) {
  const o = Math.floor((d - 1) / 7);
  const idx = (((d - 1) % 7) + 7) % 7;
  return scale[idx] + o * 12;
}

// ---- the lullaby (3/4) ----
export const LULLABY = [
  { c: 'I', n: [[3, 2], [5, 1]] },
  { c: 'IV', n: [[6, 2], [5, 1]] },
  { c: 'I', n: [[3, 1], [2, 1], [1, 1]] },
  { c: 'V', n: [[2, 3]] },
  { c: 'I', n: [[3, 2], [5, 1]] },
  { c: 'vi', n: [[8, 2], [7, 1]] },
  { c: 'IVmaj7', n: [[6, 1], [5, 1], [3, 1]] },
  { c: 'V', n: [[5, 3]] },
  { c: 'IVadd9', n: [[6, 2], [5, 1]] },
  { c: 'ii', n: [[4, 2], [3, 1]] },
  { c: 'V7', n: [[2, 1], [3, 1], [4, 1]] },
  { c: 'I', n: [[3, 3]] },
  { c: 'vi', n: [[3, 2], [2, 1]] },
  { c: 'IV', n: [[1, 2], [-1, 1]] },
  { c: 'V', n: [[0, 1], [2, 1], [0, 1]] },
  { c: 'I', n: [[1, 3]] },
];
// minor colouring of the same tune (for loss)
export const LULLABY_MINOR = LULLABY.map((b) => ({ ...b, c: ({ I: 'i', IV: 'iv', V: 'V', vi: 'VI', IVmaj7: 'iv7', IVadd9: 'iv', ii: 'ii°', V7: 'V7' })[b.c] ?? b.c }));
// a 4/4 playful variation of the tune for summers
export const LULLABY_PLAY = [
  { c: 'I', n: [[3, 1], [3, 0.5], [5, 0.5], [6, 1], [5, 1]] },
  { c: 'IV', n: [[6, 1], [8, 1], [6, 1], [5, 1]] },
  { c: 'I', n: [[3, 1], [2, 0.5], [1, 0.5], [2, 1], [3, 1]] },
  { c: 'V', n: [[2, 2], [5, 1], [0, 1]] },
  { c: 'I', n: [[3, 1], [3, 0.5], [5, 0.5], [8, 1], [7, 1]] },
  { c: 'vi', n: [[6, 1], [5, 1], [3, 1], [5, 1]] },
  { c: 'IV', n: [[4, 1], [3, 1], [2, 1], [4, 1]] },
  { c: 'V', n: [[2, 1], [3, 1], [1, 2]] },
];

// ---- profiles ----
// layer types: song, chord, arp, bass, gen, perc, sparkle, waltz, strum, drone, tick
// min/max: intensity window where the layer is audible
export const PROFILES = {
  silence: { key: 'F', bpm: 60, beats: 4, prog: [['I', 4]], layers: [] },

  title: {
    key: 'F', bpm: 62, beats: 3, prog: [['I', 3], ['vi', 3], ['IVmaj7', 3], ['Vsus4', 3]],
    layers: [
      { t: 'chord', inst: 'pad', gain: 0.16, oct: -1, every: 6 },
      { t: 'sparkle', inst: 'musicbox', gain: 0.22, oct: 1, density: 0.35 },
      { t: 'song', inst: 'musicbox', gain: 0.3, oct: 1, song: LULLABY, min: 0.5 },
    ],
  },

  // I. Tiny — a music box in a pink morning
  tiny: {
    key: 'F', bpm: 64, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'musicbox', gain: 0.34, oct: 1 },
      { t: 'chord', inst: 'pad', gain: 0.12, oct: -1, every: 3, min: 0.25 },
      { t: 'bass', inst: 'softbass', gain: 0.16, oct: -2, min: 0.5 },
      { t: 'sparkle', inst: 'bell', gain: 0.08, oct: 2, density: 0.15, min: 0.6 },
    ],
  },
  tinyHum: { // a parent humming the lullaby
    key: 'F', bpm: 60, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'hum', gain: 0.22, oct: 0 },
      { t: 'song', inst: 'musicbox', gain: 0.16, oct: 1, min: 0.3 },
      { t: 'chord', inst: 'pad', gain: 0.12, oct: -1, every: 3 },
      { t: 'bass', inst: 'softbass', gain: 0.14, oct: -2 },
    ],
  },
  whistle: { // grandpa whistling the tune in the garden
    key: 'F', bpm: 66, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'whistle', gain: 0.16, oct: 1 },
      { t: 'arp', inst: 'pluck', gain: 0.12, oct: 0, pattern: [0, 1, 2], div: 1 },
      { t: 'bass', inst: 'softbass', gain: 0.14, oct: -2 },
    ],
  },

  // II. Wonder — summer, marimba, everything is new
  wonder: {
    key: 'C', bpm: 104, beats: 4, prog: [['I', 4], ['V', 4], ['vi', 4], ['IV', 4], ['I', 4], ['IV', 4], ['ii7', 4], ['V', 4]],
    layers: [
      { t: 'arp', inst: 'marimba', gain: 0.2, oct: 0, pattern: [0, 2, 1, 2, 0, 2, 1, 3], div: 2 },
      { t: 'bass', inst: 'softbass', gain: 0.2, oct: -2, fifth: true },
      { t: 'gen', inst: 'flute', gain: 0.13, oct: 1, seed: 11, min: 0.35 },
      { t: 'perc', gain: 0.12, pat: { shaker: '..x...x...x...x.', kick: 'x.......x.......' }, min: 0.5 },
      { t: 'sparkle', inst: 'musicbox', gain: 0.1, oct: 2, density: 0.25, min: 0.7 },
    ],
  },
  summerNight: {
    key: 'G', bpm: 72, beats: 3, prog: [['I', 3], ['iii', 3], ['IV', 3], ['I', 3], ['vi', 3], ['ii', 3], ['IV', 3], ['V', 3]],
    layers: [
      { t: 'arp', inst: 'musicbox', gain: 0.16, oct: 1, pattern: [0, 1, 2, 3, 2, 1], div: 2 },
      { t: 'chord', inst: 'pad', gain: 0.13, oct: -1, every: 3 },
      { t: 'gen', inst: 'piano', gain: 0.16, oct: 0, seed: 23, min: 0.4 },
      { t: 'bass', inst: 'softbass', gain: 0.12, oct: -2, min: 0.3 },
    ],
  },
  bedtime: {
    key: 'G', bpm: 60, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'piano', gain: 0.2, oct: 0 },
      { t: 'chord', inst: 'pad', gain: 0.1, oct: -1, every: 3 },
      { t: 'song', inst: 'musicbox', gain: 0.12, oct: 1, min: 0.5 },
    ],
  },

  // III. Running — guitar, bikes, golden afternoons
  running: {
    key: 'D', bpm: 112, beats: 4, prog: [['vi', 4], ['IV', 4], ['I', 4], ['V', 4]],
    layers: [
      { t: 'strum', inst: 'guitar', gain: 0.12, oct: 0, rhythm: [0, 3, 6, 8, 10, 12, 14] },
      { t: 'bass', inst: 'softbass', gain: 0.2, oct: -2, fifth: true },
      { t: 'perc', gain: 0.13, pat: { kick: 'x.......x.x.....', hat: '..x...x...x...x.', brush: '....x.......x...' }, min: 0.3 },
      { t: 'gen', inst: 'piano', gain: 0.14, oct: 1, seed: 37, min: 0.5 },
      { t: 'chord', inst: 'strings', gain: 0.06, oct: 0, every: 8, min: 0.75 },
    ],
  },
  loss: {
    key: 'D', bpm: 56, beats: 3, scale: 'harmonic', song: LULLABY_MINOR,
    layers: [
      { t: 'song', inst: 'piano', gain: 0.2, oct: 0 },
      { t: 'chord', inst: 'strings', gain: 0.1, oct: -1, every: 3 },
      { t: 'bass', inst: 'softbass', gain: 0.12, oct: -2, min: 0.4 },
    ],
  },
  rainHope: {
    key: 'D', bpm: 60, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'piano', gain: 0.18, oct: 0 },
      { t: 'chord', inst: 'strings', gain: 0.1, oct: -1, every: 3 },
      { t: 'song', inst: 'musicbox', gain: 0.12, oct: 1, min: 0.5 },
    ],
  },

  // IV. Together — a waltz under string lights
  together: {
    key: 'A', bpm: 138, beats: 3, prog: [['I', 3], ['I', 3], ['iii', 3], ['iii', 3], ['IV', 3], ['iv', 3], ['I', 3], ['V7', 3]],
    layers: [
      { t: 'waltz', inst: 'piano', gain: 0.16, oct: -1 },
      { t: 'gen', inst: 'piano', gain: 0.15, oct: 1, seed: 51, long: true, min: 0.2 },
      { t: 'chord', inst: 'strings', gain: 0.07, oct: 0, every: 6, min: 0.55 },
      { t: 'sparkle', inst: 'musicbox', gain: 0.08, oct: 2, density: 0.18, min: 0.7 },
    ],
  },
  wedding: {
    key: 'A', bpm: 66, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'piano', gain: 0.2, oct: 0 },
      { t: 'chord', inst: 'strings', gain: 0.1, oct: -1, every: 3 },
      { t: 'bass', inst: 'softbass', gain: 0.12, oct: -2 },
      { t: 'song', inst: 'strings', gain: 0.08, oct: 1, min: 0.6 },
    ],
  },

  // V. Little ones — the lullaby returns, now in your voice
  little: {
    key: 'F', bpm: 66, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'piano', gain: 0.2, oct: 0 },
      { t: 'chord', inst: 'pad', gain: 0.1, oct: -1, every: 3 },
      { t: 'song', inst: 'musicbox', gain: 0.13, oct: 1, min: 0.35 },
      { t: 'chord', inst: 'strings', gain: 0.07, oct: 0, every: 3, min: 0.6 },
      { t: 'bass', inst: 'softbass', gain: 0.12, oct: -2, min: 0.5 },
    ],
  },
  littleHum: {
    key: 'F', bpm: 60, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'hum', gain: 0.2, oct: -1 },
      { t: 'song', inst: 'musicbox', gain: 0.12, oct: 1 },
      { t: 'chord', inst: 'pad', gain: 0.1, oct: -1, every: 3 },
    ],
  },
  play: {
    key: 'F', bpm: 100, beats: 4, song: LULLABY_PLAY,
    layers: [
      { t: 'song', inst: 'marimba', gain: 0.18, oct: 1 },
      { t: 'arp', inst: 'pluck', gain: 0.12, oct: 0, pattern: [0, 1, 2, 1], div: 2 },
      { t: 'bass', inst: 'softbass', gain: 0.18, oct: -2, fifth: true },
      { t: 'perc', gain: 0.1, pat: { shaker: '..x...x...x...x.', kick: 'x.......x.......' }, min: 0.4 },
      { t: 'gen', inst: 'flute', gain: 0.1, oct: 1, seed: 71, min: 0.7 },
    ],
  },

  // VI. So fast — an ostinato that won't stop accelerating
  sofast: {
    key: 'A', bpm: 96, beats: 4, scale: 'minor', prog: [['i', 4], ['VI', 4], ['III', 4], ['VII', 4]],
    layers: [
      { t: 'arp', inst: 'piano', gain: 0.15, oct: 0, pattern: [0, 1, 2, 1, 3, 1, 2, 1], div: 4 },
      { t: 'tick', gain: 0.12 },
      { t: 'bass', inst: 'softbass', gain: 0.18, oct: -2, min: 0.2 },
      { t: 'chord', inst: 'strings', gain: 0.09, oct: 0, every: 4, min: 0.35 },
      { t: 'perc', gain: 0.12, pat: { kick: 'x...x...x...x...', hat: '..x...x...x...x.' }, min: 0.55 },
      { t: 'gen', inst: 'strings', gain: 0.07, oct: 1, seed: 91, long: true, min: 0.75 },
    ],
  },
  quiet: {
    key: 'A', bpm: 50, beats: 4, prog: [['I', 8], ['IVmaj7', 8]],
    layers: [
      { t: 'chord', inst: 'pad', gain: 0.09, oct: -1, every: 8 },
      { t: 'sparkle', inst: 'piano', gain: 0.12, oct: 0, density: 0.12 },
    ],
  },

  // VII. Winter — sparse, then warm again
  winter: {
    key: 'D', bpm: 54, beats: 3, scale: 'minor', prog: [['i', 3], ['iv', 3], ['VI', 3], ['V', 3]],
    layers: [
      { t: 'gen', inst: 'piano', gain: 0.17, oct: 0, seed: 101, long: true, sparse: true },
      { t: 'chord', inst: 'pad', gain: 0.1, oct: -1, every: 6 },
      { t: 'bass', inst: 'softbass', gain: 0.09, oct: -2, min: 0.5 },
    ],
  },
  winterWarm: {
    key: 'D', bpm: 62, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'musicbox', gain: 0.2, oct: 1 },
      { t: 'chord', inst: 'pad', gain: 0.1, oct: -1, every: 3 },
      { t: 'song', inst: 'piano', gain: 0.14, oct: 0, min: 0.35 },
      { t: 'chord', inst: 'strings', gain: 0.07, oct: 0, every: 3, min: 0.6 },
    ],
  },
  pipHum: { // your grandchild humming the lullaby
    key: 'D', bpm: 60, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'hum', gain: 0.18, oct: 1 },
      { t: 'chord', inst: 'pad', gain: 0.1, oct: -1, every: 3 },
      { t: 'song', inst: 'musicbox', gain: 0.1, oct: 1, min: 0.5 },
    ],
  },

  // VIII. The little moments — everything at once
  epilogue: {
    key: 'F', bpm: 64, beats: 3, song: LULLABY,
    layers: [
      { t: 'song', inst: 'piano', gain: 0.2, oct: 0 },
      { t: 'chord', inst: 'pad', gain: 0.1, oct: -1, every: 3 },
      { t: 'song', inst: 'musicbox', gain: 0.13, oct: 1, min: 0.25 },
      { t: 'chord', inst: 'strings', gain: 0.09, oct: 0, every: 3, min: 0.45 },
      { t: 'bass', inst: 'softbass', gain: 0.13, oct: -2, min: 0.55 },
      { t: 'song', inst: 'hum', gain: 0.1, oct: -1, min: 0.7 },
      { t: 'song', inst: 'strings', gain: 0.08, oct: 1, min: 0.85 },
    ],
  },
};
