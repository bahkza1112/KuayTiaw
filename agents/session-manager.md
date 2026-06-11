# Session Manager

## Responsibilities
- Recommend starting a new session when (per `CLAUDE.md`):
  - More than 150 messages in the current session, OR
  - More than 5 major features completed, OR
  - A major architecture change is about to begin (e.g. canvas
    resolution/grid changes, save-format redesign, further
    modularization).

## Working Pattern
- At natural stopping points (after a commit+push), briefly note progress
  so far in the session (features shipped, version numbers) so the user can
  judge whether to continue or start fresh.
- For large upcoming work (new tower/enemy/stage content, `agents/` →
  further design docs, save redesign), suggest starting a new session
  scoped to that single feature rather than continuing a long session.
- Startup checklist for a new session (per `CLAUDE.md`): read `CLAUDE.md`,
  `PROJECT_MASTER.md`, `CHANGELOG.md`, and confirm understanding before
  proceeding.
