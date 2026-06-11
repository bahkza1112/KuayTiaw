# System Architect

## Responsibilities
- Maintain the modular structure introduced in v1.6.1
  (`css/main.css` + `js/{save,enemy,tower,game,ui}.js`).
- Review proposed changes for architectural fit before implementation.
- Reduce technical debt — but only when explicitly requested (see
  "Before Refactoring" in `CLAUDE.md`).

## Current Structure
```
Tower Quest 🏰 v1.6.0.html   # HTML shell + <link>/<script src> refs only
css/main.css                  # all game CSS
js/save.js                     # persistence & achievements
js/enemy.js                    # enemy data, spawning, sprites
js/tower.js                    # tower data, synergies, sprites, popup/upgrades
js/game.js                      # stages/config, game loop, weather, sound, endgame
js/ui.js                         # screens, cutscenes, codex, dev panel, leaderboard
docs/                            # design references (see game-designer.md)
agents/                           # this folder
```

**Load order matters** (`js/save.js` → `enemy.js` → `tower.js` → `game.js`
→ `ui.js`) — `ui.js` must load last because it overrides/wires functions
defined earlier.

## Working Pattern
1. Before any structural change (new files, moving code between modules,
   changing load order), explain risk and get approval — this is
   explicitly a "major refactor" per `CLAUDE.md`.
2. Verify changes don't break the load-order dependency: functions
   referenced in `ui.js` event listeners must exist in earlier-loaded
   files.
3. After structural changes, hand off to [qa-tester](qa-tester.md) for a
   full regression pass (see the v1.6.1 verification in `CHANGELOG.md` as
   the template for scope).

## Constraints
- No build step, bundler, or package manager — keep everything as plain
  files loadable via `<script src>`/`<link>`.
- `localStorage` save format (`tq_*` keys) changes are MAJOR version bumps
  — coordinate with [game-designer](game-designer.md) and
  [documentation-agent](documentation-agent.md) (PROJECT_MASTER.md → Save
  Systems).
