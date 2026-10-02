# Brief for writing a chapter of *Little Moments*

You are writing chapter scene files for an emotional isometric low-poly browser game about
the shortness of life. Read **docs/STORY.md** first (story bible), then read these files to
learn the API — they are the contract, do not change them unless something is genuinely broken:

- `src/chapters/ch1_tiny.js` — **the reference chapter. Match its structure, tone and density.**
- `src/chapters/ch0_prologue.js`, `src/chapters/places.js` (shared locations: `buildYard`, `buildNursery`, `buildKitchen`, `buildLiving`, `makePlayer`, `person`, `dog`, `skyDressing`)
- `src/engine/story.js` (script helpers: narrate, lower, say, think, choose, keep, mood, music, amb, sfx, camTo, camFollow, camZoom, fadeOut, fadeIn, hop, lose, everyReal…)
- `src/engine/minigames.js` (hold, tap, rhythm, balance, sequence, stillness, timing, collect, walkWith, stayNear)
- `src/engine/director.js` (how a scene def is run: build → card → intro → free roam with moments → outro)
- `src/engine/character.js` (Character poses: idle, walk, sit{h}, sitGround{look,reach}, lie, lieBack, kneel, kneelOpen, crouch, reach, reachForward, armsOpen, hug, carry, carryHigh, wave, point, dance, waltz, jump, cry, laugh, think, push{phase}, swing{h,kick}, bike{h}, sleep, rock, read{h}; also setAge(years) — proportions follow age continuously; LOOKS, youLook(age), childLook(age); Dog)
- `src/engine/props.js` (low-poly props), `src/engine/palette.js` (mood presets), `src/engine/music.js` (music profiles), `src/engine/audio.js` (`sfx` names in `Audio.sfx`, ambience keys: wind rain waves room fire city birds crickets heartbeat crowd clock)
- `src/engine/game.js` (G, fmt templates `{me}` `{child}` `{they}` `{them}` `{their}` `{They}` `{grandme}`, helpers `me()`, `child()`, `they()`, `tween`, `wait`, `rng`)

## Scene definition shape

```js
export const myScene = {
  id: 'ch2-garden', chapter: 2,
  card: { num: 'II', title: 'Wonder', ages: 'five to seven', quote: '…' }, // only on a chapter's first scene
  mood: 'summerDay', music: 'wonder', intensity: 0.4, ambience: { birds: 0.7 },
  zoom: 11, surface: 'grass',                       // camera view size; footstep sound
  ages: [5, 6], clock: { seconds: 420 },            // optional life clock (pauses during moments)
  timeUpText: '…',  // or async onTimeUp(ctx)
  hint: '…',
  build(ctx) { /* make world, ctx.me = makePlayer(age,…), characters on ctx */ },
  async intro(ctx) { /* MUST fade in (fadeIn) */ },
  moments: [ { id, label, kind: 'little'|'story'|'work', at: [x,z] | anchor: ctx=>obj, radius, requires: [ids], when: ctx=>bool, caption: 'Album caption', async run(ctx, h) {} } ],
  final: 'idOfLastStoryMoment',                     // scene ends when this completes
  async outro(ctx) {},
};
```
- Every `little` moment should end with `await keep(id, caption)` (same id/caption as the def). Story moments usually keep too.
- Each scene's last moment (or outro) must leave the screen faded out (`fadeOut`) so the next scene can fade in.
- `kind: 'little'` moments disappear when the clock runs out. `story` ones stay and are required.
- Moments that are only offered depending on choices: use `when: (ctx) => G.state.flags.x`.
- Use `G.state.flags` for anything later chapters need (names listed below). Never use `localStorage` directly.
- Characters must be created inside `build` (they attach to the current world automatically).
- Interiors use bounds roughly `{ minX:-3.75,maxX:3.75,minZ:-3.2,maxZ:3.3 }`; the yard is x∈[-13.6,13.6], z∈[-10.8,10.4] (house at (-5,-6) with porch bench at (-3.2,-2.0), door (-5,-3.2), family tree at (4,-2.2), cherry tree (-10.5,-0.5), gate at (-5,7), street z≈9.3). Narrow `ctx.world.bounds` after `buildYard` when you want a smaller play area.
- You may add new low-poly props/places in **your own files** (e.g. `src/chapters/town.js`). Do **not** edit engine files or other chapters. If you hit a real engine bug, you may fix it minimally, but list the exact change in your final report.
- Keep text in second person, short, concrete, warm (see writing rules in STORY.md). Characters speak plainly. Use `{me}` for what your child calls you (Mom/Dad), `{grandme}` for Grandma/Grandpa.
- Aim for **~15–20 minutes of play per chapter**: 2 scenes, each with 6–8 moments, each moment a small scripted scene (walk, a few lines, a minigame, a keep). Vary the minigames. Let music/mood shift inside moments (e.g. `music('loss')`, `mood('rainyGrey', 6)`).

## Flags used across chapters
- `firstWord` (Ch I, string)
- `storyChoice` (Ch II bedtime story: 'dragon' | 'ocean' | 'moon')
- `metSamYoung` (Ch III, bool — shared an ice cream with Sam at 13)
- `satWithGrandpa` (Ch III, bool — chose to sit with Grandpa on the porch), `hasWatch` (bool — he gave you his watch)
- `danced` (Ch IV), `vow` (Ch IV, string)
- Ch V sets `G.state.childName`, `G.state.childKind` ('daughter'|'son'), `G.state.stats.emails` (number answered), `flags.alwaysAnswer` (string)

## Testing
- `npm run build` (esbuild → dist/game.js). Add your scenes to `src/chapters/index.js` in your worktree for testing (the lead will merge index.js).
- Serve: `python3 -m http.server <PORT> >/dev/null 2>&1 &` from the repo root (use the port you were given).
- Automated playthrough (headless Chromium, software GL — slow, use small viewport and low fx):
  `node /tmp/claude-0/-home-user-short-life/22b9c63c-81f9-5885-8e4a-4c92ade62d53/scratchpad/run.js "s=<sceneIndex>&noaudio&lowfx&auto&speed=3" <seconds> <shotEvery> <prefix>` — edit the URL port in a copy of run.js (it uses localhost:8080). It prints scene/moment log and console errors and writes screenshots to `shots/` relative to cwd. `auto` mode visits every moment, auto-wins minigames, picks choice 0 (set `G.autoChoice` to test others). Look at a few screenshots with the Read tool to check composition.
- Fix every PAGEERROR / console error. Make sure each scene reaches its final moment and the director moves to the next scene.
