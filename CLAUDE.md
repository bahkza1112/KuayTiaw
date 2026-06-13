# CLAUDE.md

Guidance for Claude Code (and other AI assistants) working in this repository.

## Project Summary

**Tower Quest 🏰** is a single-page, browser-based tower defense game written in
Thai, currently at **v1.6.0** (working/development base). The entire game —
markup, styles, and logic — lives in one self-contained HTML file:

- [`Tower Quest 🏰 v1.6.0.html`](Tower%20Quest%20%F0%9F%8F%B0%20v1.6.0.html)

It uses vanilla JavaScript, the HTML5 Canvas 2D API for the main game
rendering, and Three.js (loaded from a CDN) for an optional 3D tower-rendering
layer. There is no build step, bundler, package manager, or test suite —
the file can be opened directly in a browser.

For a full breakdown of game systems, see [PROJECT_MASTER.md](PROJECT_MASTER.md).
For version history, see [CHANGELOG.md](CHANGELOG.md).
For game design, balance numbers, and the work backlog, see
[docs/GDD.md](docs/GDD.md), [docs/BalanceSheet.md](docs/BalanceSheet.md),
and [docs/Roadmap.md](docs/Roadmap.md).
For per-role guidance (Game Designer, Lead Programmer, QA Tester, etc.),
see [agents/](agents/README.md), which expands on the AI Team roles below
with project-specific file pointers.

## Repository Layout

```
Tower Quest 🏰 v1.6.0.html   # The game itself (HTML markup + script/link refs)
CLAUDE.md                     # This file
PROJECT_MASTER.md             # Detailed system-by-system reference
CHANGELOG.md                  # Version history
css/main.css                   # All game CSS
js/                             # save.js, enemy.js, tower.js, game.js, ui.js (load order matters)
docs/                           # Design docs: GDD, TowerDesign, EnemyDesign, BalanceSheet, Roadmap
agents/                          # Per-role guides expanding on the AI Team section below
assets/
  images/                      # Reserved for sprite/image assets (currently empty)
  sounds/                      # Reserved for audio assets (currently empty)
  effects/                     # Reserved for VFX-related assets (currently empty)
```

The `css/`, `js/`, and `assets/*` folders currently exist as scaffolding only.
**No game code has been moved into them yet** — all CSS and JS still live
inline inside the v1.6.0 HTML file. Any future extraction/refactor must be
explicitly requested and planned before being carried out.

## Working Conventions

- **Do not modify game code** unless explicitly asked to. This includes the
  `<style>` block, the `<script>` block, and game markup inside the HTML file.
- The game is in Thai — strings, monster/tower names, and story text
  (`STAGES`, `CUTSCENES`, `ENAMES`, `TNAMES`, etc.) are in Thai. Preserve
  language and tone when editing text content.
- The codebase uses dense, minified-style JS (short variable names, no
  semicolined-out comments, heavy one-liners). Match existing style if editing
  this file — do not reformat or "clean up" unrelated code.
- Versioned snapshots of the game were historically committed as separate
  files (e.g. `Tower Quest 🏰 v1.5.0.html`). As of the latest history, those
  snapshots were removed and v1.6.0 is the single active working file.
- Save data is stored entirely in browser `localStorage` under `tq_*` keys
  (see PROJECT_MASTER.md → Save Systems). There is no backend/server.
- No automated tests exist. Manual verification = open the HTML file in a
  browser and play through the relevant flow.

## Before Refactoring

This documentation pass was created as a foundation for a future refactor
(splitting the monolithic HTML into `css/`, `js/`, and `assets/`). **Wait for
explicit user approval before performing any such refactor** — do not move,
split, or extract code on your own initiative.



# Tower Quest AI Studio

## Startup Rules

At the beginning of every new session:

1. Read CLAUDE.md
2. Read PROJECT_MASTER.md
3. Read CHANGELOG.md

Confirm understanding before proceeding.

---

# AI Team

## Project Manager

* Analyze requests
* Create implementation plans
* Coordinate agents

## Game Designer

* Design gameplay
* Design progression
* Design balance

## Enemy Designer

* Design enemy archetypes and abilities
* Maintain docs/EnemyDesign.md
* Ensure each enemy has clear counterplay

## Balance Designer

* Analyze Tower DPS / Cost Efficiency
* Analyze Enemy HP Scaling / Gold Economy
* Analyze Endless Mode Scaling

## LiveOps Manager

* Design daily quests, events, login rewards (proposal-stage)

## System Architect

* Review architecture
* Reduce technical debt
* Improve file structure

## Lead Programmer

* Implement features
* Fix bugs
* Refactor code

## QA Tester

* Analyze risks
* Check regressions
* Verify save compatibility

## UI/UX Designer

* Improve menus
* Improve usability
* Improve layouts

## Art Director

* Maintain visual consistency
* Define visual style

## Animation Director

* Improve animations
* Improve transitions

## Prompt Engineer

* Generate prompts for:

  * Bosses
  * Towers
  * Maps
  * Marketing Images

## Documentation Agent

* Update PROJECT_MASTER.md
* Update CHANGELOG.md

## Git Agent

* Commit changes
* Push to GitHub

## Session Manager

Recommend new session when:

* More than 150 messages
* More than 5 major features
* Major architecture changes

---

# Development Rules

Before coding:

1. Analyze task
2. Identify files
3. Explain risks
4. Show plan

Wait for approval before major refactors.

---

# Version Management

PATCH

* Bug fixes
* Small improvements

MINOR

* New systems
* New towers
* New enemies
* New bosses
* New maps

MAJOR

* Save redesign
* Architecture redesign
* Major gameplay overhaul

Always recommend version updates before committing.

---

# Token Optimization

* Prefer PROJECT_MASTER.md over scanning the repository
* Open only related files
* Avoid unnecessary analysis

---

# Git Workflow

After successful validation:

1. Update CHANGELOG.md
2. Update PROJECT_MASTER.md if needed
3. Create commit
4. Push to GitHub
5. Show commit summary

---

# Mandatory Per-Update Checklist

These apply to **every** gameplay update/patch, no exceptions:

1. **PATCH_NOTES entry** — add a new first entry to the `PATCH_NOTES` array
   in `js/ui.js` (player-facing Thai text shown in the in-game "What's New"
   screen), with `ver`, `date` (YYYY-MM-DD), `title`, and `notes`. Bump
   `GAME_VERSION` to match.
2. **CHANGELOG.md entry** — add a corresponding developer-facing entry.
3. **Codex sync** — if a monster or tower ability/mechanic was added or
   changed, update the corresponding in-game Codex entry in the same
   change/commit (`MSPECIAL` in `js/enemy.js` for monsters, equivalent
   tower description data for towers) so players see accurate info in-game.
4. **Version string** — update the `<title>` and `#verBtn` text in
   `Tower Quest 🏰.html` to match `GAME_VERSION`.
