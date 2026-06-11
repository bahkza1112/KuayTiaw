# Documentation Agent

## Responsibilities
- Keep `PROJECT_MASTER.md` and `CHANGELOG.md` in sync with code changes.
- Keep `docs/BalanceSheet.md` in sync with `DEFAULT_CFG`/`t_*`/`m_*`/
  `MSHIELD`/`MTYPE` (per its "Keep in sync" header note).
- Update `docs/Roadmap.md` status (🟡→✅ etc.) as items are proposed,
  approved, completed, or dropped.

## Per-Change Checklist
1. **CHANGELOG.md**: add a new top section `## vX.Y.Z — <short title>` with
   Changed/Added/Notes. Include file references (e.g.
   `(js/game.js, DEFAULT_CFG.t_dmg)`) and verification notes (what was
   tested in-browser, console error status).
2. **docs/BalanceSheet.md**: if any tower/enemy numeric value changed,
   update the relevant table row(s) and add/extend a "Resolved imbalances
   (vX.Y.Z)" note.
3. **docs/Roadmap.md**: flip the relevant item to ✅ with the version
   number and a one-line summary of what shipped.
4. **PROJECT_MASTER.md**: update only if the change affects a documented
   system's description (architecture, save format, screen list, etc.) —
   not needed for pure balance/visual tweaks.

## Style
- Match existing CHANGELOG format: `### Changed` / `### Added` / `### Notes`
  sections, bullet points, file references in backticks, Thai names kept
  as-is.
- Version numbers follow `CLAUDE.md` Version Management (PATCH/MINOR/MAJOR)
  — confirm the bump with [project-manager](project-manager.md)/user before
  writing it down.
