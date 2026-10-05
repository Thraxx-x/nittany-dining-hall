# Nittany Access Dining (Demo Prototype)

A local, frontend-only prototype of an accessible dining-hall ordering flow
for wheelchair users: scan a table QR code, enter a demo access code,
browse the menu, order food, and watch a DoorDash-style status tracker
while staff bring the order to that same table.

**This is a classroom prototype.** It is not an official Penn State
product, has no backend, processes no real payments, and its "access
code" gate is intentionally insecure (see below). See
[PROMPT.md](PROMPT.md) for the full project brief and
[CLAUDE.md](CLAUDE.md) for engineering notes if you're extending it.

## Running the demo

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install
npm run dev
```

Then open the URL Vite prints — by default:

```
http://localhost:3000/?table=A-12
```

The `?table=A-12` part simulates scanning a table's QR code. If you open
the site without a `?table=` param, it falls back to a default demo table
and shows a small notice on the access screen.

Other scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Start the local dev server (with hot reload) |
| `npm run build` | Build an optimized static build into `dist/` |
| `npm run preview` | Serve the production build locally to sanity-check it |
| `npm run lint` | Run the linter |
| `npm run generate-qr` | Regenerate a table QR code PNG (see below) |

## Demo access code

The access screen asks for a **demo access code**:

```
tjg6055
```

It's stored in plain text in [`src/constants.js`](src/constants.js) as
`DEMO_ACCESS_CODE`, clearly commented as intentionally insecure. To change
it, edit that one constant and reload the page — there's nothing else to
update.

This is a UI gate for the demo narrative only. It provides no real
security: anyone with the source code (or browser dev tools) can read the
code.

## Changing the table ID

The table shown throughout the app comes entirely from the URL's `table`
query parameter, read in [`src/hooks/useTableId.js`](src/hooks/useTableId.js):

```
http://localhost:3000/?table=B-07
```

- Change the table for a single visit by editing the URL directly.
- Change the **fallback** table (used when no `?table=` is present) by
  editing `DEFAULT_TABLE_ID` in `src/constants.js`.

## QR codes

Real dining-hall tables would each have a printed QR code encoding this
app's URL with that table's ID baked in, e.g.
`http://localhost:3000/?table=A-12`.

- **[`demo-table-qr.png`](demo-table-qr.png)** at the repo root is a
  ready-made sample QR code for table `A-12`, pointing at
  `http://localhost:3000/?table=A-12`. Scan it with a phone camera on the
  same machine/network as the dev server (or open the encoded URL
  directly) to jump straight into the demo at that table.
- To generate a QR code for a different table or a different dev URL
  (e.g. if you deploy this somewhere, or run it on a different port), run:

  ```bash
  npm run generate-qr -- B-07 "http://localhost:3000/"
  ```

  This writes a new PNG to `public/table-qr-B-07.png` and prints the exact
  URL it encodes.
- You can also open the **"Staff / presenter: view sample table QR
  codes"** disclosure on the access screen itself, which generates a few
  sample QR codes live in the browser (no network request — it uses the
  bundled `qrcode` library) so you can show what a table's QR code would
  look like without leaving the app.

## What's in the demo flow

1. **Access screen** — shows the current table, asks for the demo code.
2. **Menu** — sample dining-hall categories (Grill, Comfort Kitchen, Salad
   & Greens Bar, International Kitchen, Bakery & Desserts, Beverages) with
   ~20 sample items, each with a price and dietary tags (Vegetarian,
   Vegan, Gluten-Free, Contains Dairy, etc.). Filter by category, add/remove
   quantities with large +/− steppers.
3. **Checkout** — review line items, adjust or remove them, add an
   optional order note (e.g. allergies), and see a confirmation that food
   will be delivered to your table. No real payment is processed.
4. **Order tracker** — a fake order number and a DoorDash-style vertical
   status list (Order received → Preparing your order → Ready for
   delivery → Delivered). A clearly labeled **"Presenter demo control"**
   button advances the status by one step each click, so you can narrate
   the whole flow live without waiting.

A **Help** button is available on every screen after the access gate,
opening a "Need assistance?" panel with a fake "Call staff to my table"
button and a short FAQ.

## Accessibility notes

Built for a wheelchair user ordering one-handed from a seated position on
a phone:

- Large tap targets (buttons are at least ~48–56px tall).
- High-contrast navy/gold/cream palette; status is always shown with text
  and icons, never color alone.
- Visible, high-contrast focus outlines on every interactive element
  (`:focus-visible` styles in `src/index.css`).
- Everything is operable by keyboard alone, including the help dialog
  (Escape closes it and returns focus to where you opened it from).
- Plain-language labels and headings throughout; minimal, non-essential
  animation.

## Project structure

See [CLAUDE.md](CLAUDE.md) for a fuller tour of the code, conventions, and
what's deliberately out of scope for this version.
