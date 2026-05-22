# AI Instructions — frazier.com

## What This Is
Personal website — founder, builder, photographer. Includes archived site versions and the travel map project.

## Structure
- `app/` — Next.js main site (writing, building, photography)
- `travel-site/` — Travel map (personal editor + public version)

## Branch Conventions
- `feat/` — new features or pages
- `fix/` — bug fixes
- `update/` — content or config changes
- `design/` — visual/UI changes
- `chore/` — docs, cleanup, repo maintenance
- Always PR to `main` — never push directly

## Commit Format
`type: short description`

| Type | Use |
|------|-----|
| `feat` | New feature, page, or section |
| `fix` | Bug fix |
| `update` | Content, data, or config change |
| `design` | Visual/UI change |
| `chore` | Docs, cleanup, maintenance |

## Rules
1. Branch + PR for all changes — don't push directly to `main`
2. No secrets in code
3. `locations.json` is private data — never expose photo counts or exact home coords publicly
4. Run `python3 build-public.py` in `travel-site/` before deploying public version

## Don't
- Don't commit `photo_locations_raw.csv` (in .gitignore)
- Don't push directly to main
- Don't expose private location data in the public site
