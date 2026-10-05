# CLAUDE.md

Project instructions for Claude Code (or any AI assistant) working in this
repository.

## What this project is

**Nittany Access Dining** is a local, frontend-only prototype of an
accessible dining-hall ordering flow for wheelchair users: scan a table QR
code → enter a demo access code → browse the menu → order → watch a
DoorDash-style status tracker while food is delivered to that same table.

It is a **classroom / demo prototype**, not a production system and not an
official Penn State product. Keep it labeled that way everywhere it's
user-visible (banner, access screen, footer).

See [PROMPT.md](PROMPT.md) for the original project brief this app was
built from, and [README.md](README.md) for how to run it.

## Hard constraints — do not change without being asked

- **No backend, no server, no database.** All state lives in React
  component state in the browser tab; it resets on reload. Do not add an
  API server, persistence layer, or network calls for core functionality.
- **No external API dependency for core functionality.** The QR codes are
  generated client-side with the bundled `qrcode` npm package — never swap
  that for a hosted QR-generation API.
- **The demo access code is intentionally insecure.** It lives in plain
  text in `src/constants.js` as `DEMO_ACCESS_CODE`. This is by design for a
  classroom demo. Do not "fix" this into a real auth system unless
  explicitly asked — and if asked, treat it as a scope change worth
  flagging, not a quick patch.
- **Table ID comes from the URL** (`?table=A-12`) via `src/hooks/useTableId.js`.
  Keep that the single source of truth for which table is active; don't
  introduce a separate table-selection UI that could get out of sync with
  the QR-encoded value.
- **Accessibility-first is a feature, not a nice-to-have.** This app is
  designed for a wheelchair user ordering one-handed from a seated
  position on a phone. Any UI change should preserve: large tap targets
  (~56px min height), high contrast text, visible focus rings
  (`:focus-visible` in `src/index.css`), keyboard operability, and status
  communicated with text/icons, never color alone. Avoid adding animation
  beyond simple, necessary transitions.

## Project structure

```
src/
  constants.js         Demo access code, default table ID, wait-time text
  data/menuData.js      Sample menu items, categories, order status list
  hooks/useTableId.js   Reads ?table= from the URL
  components/           One component per screen/UI piece (see below)
  App.jsx                Screen state machine + cart/order state
  index.css              Whole design system (navy/gold palette, focus
                          styles, layout) — one global stylesheet, no
                          CSS-in-JS or modules, to keep it easy to scan
scripts/generate-qr.mjs  Regenerates the sample table QR PNG in public/
public/table-qr-*.png    Generated QR code(s) encoding the demo URL
```

`App.jsx` drives a simple four-screen flow via a `screen` state value:
`access → menu → checkout → tracking`. Cart is a plain `{ itemId: qty }`
object. There's no router and no global state library — deliberately, to
keep the code approachable for a student to read top to bottom.

## Conventions to follow when editing

- Plain CSS in `src/index.css`, BEM-ish class names (`.menu-item__price`).
  Add new styles there rather than introducing a second styling system.
- Menu data, categories, and order statuses are all data-driven from
  `src/data/menuData.js` — adding a menu item or category should not
  require touching component logic.
- Keep screens as top-level components under `src/components/`, each
  taking simple props (no context/reducer needed at this scale).
- When adding any new interactive control, give it: a visible label, a
  minimum ~48–56px tap target, and confirm it's reachable and operable by
  keyboard alone.
- When adding any new status/state indicator, pair color with text or an
  icon — never rely on color alone (this was an explicit product
  requirement).

## Possible future work (not required for this version)

A staff-facing "demo queue" view (a separate route showing all active fake
orders) was suggested as a nice-to-have but intentionally left out of this
version to keep scope tight. If asked to add it, treat it as new scope:
it would need its own route/screen and a shared in-memory order list
rather than the single-order state `App.jsx` currently holds.
