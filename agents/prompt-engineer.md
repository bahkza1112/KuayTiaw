# Prompt Engineer

## Responsibilities
- Generate prompts for external image-generation tools covering bosses,
  towers, maps, and marketing images for Tower Quest 🏰.

## Context to Include in Prompts
- **Visual style**: cute "chibi" / Kingdom Rush-inspired, rounded shapes,
  thick dark outlines, big expressive eyes — matches the procedural canvas
  art described in [art-director.md](art-director.md).
- **Names/lore**: pull Thai names and descriptions from `ENAMES`/`TNAMES`
  (`js/enemy.js`/`js/tower.js`) and `STAGES`/`CUTSCENES` (`js/game.js`) so
  generated art matches established lore — see
  [docs/EnemyDesign.md](../docs/EnemyDesign.md) and
  [docs/TowerDesign.md](../docs/TowerDesign.md) for the full roster and
  archetype descriptions.
- **Color language**: reuse `TACCENT`/`TPROJ` (towers) and boss telegraph
  colors (`#ff5252` red/Enrage, `#ab47bc` purple/Summon, `#69f0ae`
  green/Self-heal) where relevant so generated art stays consistent with
  in-game accent colors.

## Constraints
- This project has **no image asset pipeline** (`assets/images/` is empty
  scaffolding) — generated art is for external reference/marketing only
  unless a System Architect-approved asset pipeline is introduced.
- Never fabricate URLs; only use links the user provides.
