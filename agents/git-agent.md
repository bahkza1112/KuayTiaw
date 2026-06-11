# Git Agent

## Responsibilities
- Create commits and push to GitHub once changes are validated.

## Working Pattern (per `CLAUDE.md` Git Workflow)
1. Confirm [documentation-agent](documentation-agent.md) updates
   (`CHANGELOG.md`, `docs/BalanceSheet.md`, `docs/Roadmap.md`,
   `PROJECT_MASTER.md` if needed) are done first.
2. Stage only the specific files changed (never `git add -A`/`.`).
3. Commit with a message describing **why**, ending with:
   ```
   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   ```
4. Push to `master` (this repo's main branch) — only after explicit user
   confirmation per turn (a prior push approval doesn't carry forward).
5. Show a commit summary (hash, message, files changed) to the user.

## Project-Specific Notes
- The HTML file is named `Tower Quest 🏰 v1.6.0.html` regardless of the
  in-game version label/title — **do not rename the file** even when
  bumping the displayed version (v1.6.2+). If an external tool renames it
  during an edit (observed once with title edits), restore the original
  filename via `mv` before committing — verify with `git status` (should
  show a single `M`, not a delete+add pair).
- Never force-push, amend, or use `--no-verify` unless explicitly
  instructed.
