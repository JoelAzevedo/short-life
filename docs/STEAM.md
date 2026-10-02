# Steam foundations

The game is a static web page, so a Steam release wraps it in a small Electron shell
that talks to Steamworks. Everything needed is in the repo except the two npm packages
(kept out of the default install so the web build stays tiny).

## Pieces

| File | What it does |
|---|---|
| `src/engine/achievements.js` | The single source of truth: every achievement (`id`, title, description, category, hidden). Unlocks are stored locally and **mirrored to Steam** through `window.steam.activateAchievement(apiName)` when present. On start it re-sends every local unlock (Steam ignores duplicates), so achievements earned offline sync later. |
| `electron/main.js` | Desktop window + Steam init via [steamworks.js](https://github.com/ceifa/steamworks.js); IPC handlers `steam:activate` / `steam:isActivated`; enables the overlay. Runs without Steam if the SDK is missing. |
| `electron/preload.js` | Exposes `window.steam` to the page with context isolation. |
| `scripts/export-achievements.mjs` | `npm run achievements` → `steam/achievements.json` and `.csv` with API names (`ACH_<ID>`), display names, descriptions and hidden flags to enter in Steamworks → *Stats & Achievements*. |

## Running the desktop build

```bash
npm i -D electron steamworks.js
echo 480 > steam_appid.txt      # 480 = Valve's Spacewar test app; use your own App ID
npm run build && npm run desktop
```

## Adding an achievement

1. Add an entry to `ACHIEVEMENTS` in `src/engine/achievements.js`.
2. Call `G.achieve('your_id')` where it happens in a chapter script.
3. `npm run achievements` and paste the new row into Steamworks (API name must match).

Chapters may also call `G.achieve(id, title, description)` with an id that is not in the
list; it still works in-game (stored as an "extra"), but add it to the list before
shipping so it has a Steam API name.

## Categories in the game

- **The story** — chapter completions and key milestones.
- **The album** — keeping moments (and, gently, letting one pass).
- **Other lives** — alternate paths: mother/father, daughter/son, who you call for,
  whose lap you sleep on, letting go of the bike, saying no to work, every answer
  to “Will you always be here?” across playthroughs, and the branches in later chapters.
- **Little secrets** — hidden easter eggs (off-path ✦ spots, the Konami code, …).
