# Little Moments

*We are born so tiny. And then — so fast.*

An emotional isometric, low-poly story game for the browser about the shortness of life:
how small we begin, how quickly the years go, and the little moments — especially the
ones with our children — that are worth stopping for.

You live one whole life in eight chapters, from a crib in a pink nursery to a winter
kitchen with an almost-empty photo album. There is no score and no game over. Each chapter
is full of small glowing **moments**. When you engage with one, time slows down and you can
**hold Space to keep it** — the game takes a real snapshot of that instant and puts it in
your album. Moments you ignore, or are too slow to keep, pass. From your teens onward a
**life clock** keeps moving while you wander (it stops while you're present in a moment),
and the window to keep a memory gets shorter when life speeds up.

## Replayability

- **Alternate paths.** Choose to become a mother or a father, raise a daughter or a son,
  and make choices that change what happens: who you call for as a baby, whose lap you
  fall asleep on, whether you sit with Grandpa on the porch or ride off ("later"), who
  you go to the festival with, who gets the first wedding dance, whether you wake your
  partner at 3 a.m., say no to working on a Saturday, let go of the bike, knock on the
  slammed door, drive your child to college… The epilogue and the final album reflect
  the life you actually lived.
- **Easter eggs.** Hidden ✦ spots with no glow (the prompt appears only when you're
  right next to them), and a few traditions (try ↑↑↓↓←→←→BA).
- **Achievements** — 120 of them: story milestones, the album, other lives and little
  secrets. Stored across playthroughs, viewable from the title screen and pause menu,
  and ready for Steam (see [docs/STEAM.md](docs/STEAM.md)).

## Play

The game is a static web page — no install, no server code.

```bash
npm install        # only needed to rebuild
npm run build      # bundles src/ → dist/game.js
npm run serve      # http://localhost:8080
```

`dist/game.js` is committed, so you can also just open `index.html` in a browser
(Chrome, Edge, Firefox or Safari with WebGL). Headphones recommended — all music and
sound is generated live.

**Controls** — move with WASD / arrow keys or click/tap where to walk · interact with
Space / Enter / click on a glowing light · **hold Space** (or hold the screen) to keep a
moment · Esc to pause · J to open the album. Progress saves automatically at the start of
every scene.

## Structure

| Chapter | Ages | |
|---|---|---|
| Prologue — The Album | 79 | a winter night, the kitchen, the album |
| I · Tiny | 0–1 | the nursery, a mobile, a lullaby, first steps, the first spring |
| II · Wonder | 5–7 | planting the tree with Grandpa, summer days, fireflies, “read it again” |
| III · Running | 12–15 | bikes, the town, Sam at the ice-cream cart, Grandpa’s porch, the rain |
| IV · Together | 22–28 | the lantern festival, a waltz, the wedding under the tree |
| V · Little Ones | 30–40 | your child: sleepless nights, first steps, the swing, bedtime questions |
| VI · So Fast | 40–55 | the years spinning faster and faster — and then the car pulls away |
| VII · Winter | 75+ | a quiet house, your grandchild, colour coming back |
| VIII · The Little Moments | | a path lined with the photographs you kept |

See [docs/STORY.md](docs/STORY.md) for the full story bible and the design of how music,
colour and camera follow the emotions.

## Tech

- **Three.js** (bundled) with an orthographic isometric camera, flat-shaded procedural
  low-poly geometry, soft shadows, bloom, and a custom grading pass (saturation, warmth,
  vignette, tilt-shift, film grain, “dream” halation and a selective-colour focus circle).
- **Web Audio**: a small synth (music box, piano, pads, strings, marimba, guitar, flute,
  whistle, a humming voice), a sequencer that plays the game's lullaby and generative
  melodies in layers that fade in and out with emotional intensity, procedural ambience
  (birds, wind, rain, crickets, fire, heartbeat, a ticking clock) and sound effects.
- Characters in the spirit of *Journey* and *A Short Hike*: sculpted heads with
  simple expressive faces, layered hair with secondary motion, jointed limbs, flowing
  scarves, proportions that change continuously with age (a crawling baby, a wobbling
  toddler, a stooped elder with a cane).
- Lighting follows the classic low-poly recipe: a warm key sun with soft shadows, a
  cool complementary fill, hemisphere ambient, GTAO ambient occlusion (toggle in the
  pause menu), atmospheric fog, bloom and a tilt-shift depth-of-field.
- Everything — models, textures, music, sound — is generated in code. No asset files.

### Developer flags

`index.html?s=<scene index or id>` jumps to a scene · `&who=father` · `&child=Name` ·
`&auto` plays itself (for testing) · `&speed=3` · `&lowfx` · `&noaudio`.
