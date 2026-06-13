# AI Team — Agent Role Guides

This folder expands on the **AI Team** roles defined in
[`CLAUDE.md`](../CLAUDE.md) with project-specific pointers: which files
each role should read/edit, which `docs/` references apply, and how the
role's output should be handed off.

These are guides, not enforcement — a single assistant session typically
plays multiple roles in sequence (e.g. Game Designer → Lead Programmer →
QA Tester → Documentation Agent → Git Agent), as has been the working
pattern in this project so far (see `CHANGELOG.md` v1.6.2–v1.6.5).

## Roles

| Role | File | Touches |
|---|---|---|
| Project Manager | [project-manager.md](project-manager.md) | Plans, coordinates, no direct code edits |
| Game Designer | [game-designer.md](game-designer.md) | `docs/GDD.md`, `docs/Roadmap.md`, design proposals |
| Enemy Designer | [enemy-designer.md](enemy-designer.md) | `docs/EnemyDesign.md`, enemy data in `js/enemy.js` |
| Balance Designer | [balance-designer.md](balance-designer.md) | `docs/BalanceSheet.md`, `DEFAULT_CFG` numeric tuning |
| LiveOps Manager | [liveops-manager.md](liveops-manager.md) | Daily quests/events/login rewards (proposal-stage) |
| System Architect | [system-architect.md](system-architect.md) | `js/`, `css/`, file structure, `PROJECT_MASTER.md` |
| Lead Programmer | [lead-programmer.md](lead-programmer.md) | `js/*.js`, `css/main.css`, the HTML shell |
| QA Tester | [qa-tester.md](qa-tester.md) | Live browser verification, save compatibility |
| UI/UX Designer | [ui-ux-designer.md](ui-ux-designer.md) | `css/main.css`, `js/ui.js`, popups/menus/HUD |
| Art Director | [art-director.md](art-director.md) | Sprite/icon code in `js/tower.js`, `js/enemy.js` |
| Animation Director | [animation-director.md](animation-director.md) | Transitions, particle FX, `js/game.js` render loop |
| Prompt Engineer | [prompt-engineer.md](prompt-engineer.md) | Prompts for bosses/towers/maps/marketing art |
| Documentation Agent | [documentation-agent.md](documentation-agent.md) | `PROJECT_MASTER.md`, `CHANGELOG.md`, `docs/` |
| Git Agent | [git-agent.md](git-agent.md) | Commits, pushes, version bumps |
| Session Manager | [session-manager.md](session-manager.md) | Session length/scope tracking |

## Shared Conventions

- Always follow the **Development Rules** in `CLAUDE.md`: analyze → identify
  files → explain risks → show plan → wait for approval before major
  changes.
- Always follow **Version Management** in `CLAUDE.md` (PATCH/MINOR/MAJOR)
  and recommend a version bump before committing.
- Cross-reference [docs/GDD.md](../docs/GDD.md),
  [docs/TowerDesign.md](../docs/TowerDesign.md),
  [docs/EnemyDesign.md](../docs/EnemyDesign.md),
  [docs/BalanceSheet.md](../docs/BalanceSheet.md), and
  [docs/Roadmap.md](../docs/Roadmap.md) before proposing design/balance
  changes.
- [docs/MetaProgression.md](../docs/MetaProgression.md) — 🟡 proposal-stage
  design for account-level systems (Player Level, Talent Tree, Prestige,
  Relics, Daily Quest). Read before proposing anything in this space.
