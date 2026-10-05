# Project Prompt — Nittany Access Dining

This is the original project brief this prototype was built from, saved
verbatim for reference.

---

## Claude Prompt — Build Nittany Access Dining

You are building a local prototype called Nittany Access Dining for a Penn
State dining-hall accessibility concept.

### Product concept

Wheelchair users can scan a QR code placed on their dining-hall table. The
QR code identifies the table. The user enters a designated demo access
code, browses the dining-hall menu, orders food, and receives the food from
staff at the same table. After checkout, the user sees a DoorDash-style
order tracker.

### Required demo behavior

- Start with an access-code screen.
- The demo password must be stored directly in source code as: `tjg6055`
  - This is intentionally insecure because it is only a
    classroom/demo prototype. Clearly label it as a demo.
- Read a table ID from the URL query string, for example:
  `http://localhost:3000/?table=A-12`
- Display the current table throughout the flow.
- Include realistic sample dining-hall menu items and categories.
- Let users filter menu categories.
- Let users add/remove quantities from a cart.
- Show a checkout summary.
- Do not implement real payments or a backend.
- After checkout, create a fake order number and show these statuses:
  - Order received
  - Preparing your order
  - Ready for delivery
  - Delivered
- Include a demo control to advance the status so a presenter can
  demonstrate the complete flow.

### Accessibility-first UI

Design for a wheelchair user ordering from a seated position on a phone:

- Large controls and tap targets.
- High contrast.
- Clear headings and labels.
- Visible focus states.
- Keyboard accessibility.
- Never communicate status using color alone.
- Avoid unnecessary animation.
- Use plain language.
- Keep important actions easy to reach.

### Visual style

Use a polished Penn State-inspired navy/gold visual language, but label the
project as a prototype and do not imply official Penn State ownership or
endorsement. The design should feel appropriate for a campus dining
service rather than a generic food-delivery app.

### Technical requirements

- Must run locally.
- No backend.
- No external API dependency for core functionality.
- Keep demo data in the frontend.
- If using React/Vite, provide the exact commands to install dependencies
  and run it.
- Make sure QR links can pass a table identifier via `?table=`.
- Keep the code clean and easy for a student to modify.

### Nice-to-have ideas

- "Need assistance?" help panel.
- Allergy/dietary tags.
- Order notes.
- Estimated wait time.
- Confirmation that food will be delivered to the scanned table.
- A staff-facing demo queue could be added later as a separate route, but
  it is not required for this version.

### Deliverables

- A polished working local website.
- `claude.md` containing project instructions.
- This prompt saved as a project prompt/reference file.
- A QR code that encodes the local demo URL with a sample table
  identifier.
- A short README explaining how to run the demo and how to change the
  table ID/password.
