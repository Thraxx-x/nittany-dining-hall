// -----------------------------------------------------------------------
// DEMO ACCESS CODE — INTENTIONALLY INSECURE
// -----------------------------------------------------------------------
// This is a classroom / hackathon prototype, not a production system.
// The "access code" below exists only to simulate a gate in front of the
// ordering flow during a live demo. It is stored in plain text, on purpose,
// directly in the frontend source. Anyone who opens this file (or the
// browser dev tools) can read it. Do NOT reuse this pattern for anything
// that needs real security — a real deployment would check credentials on
// a server, never in client-side JavaScript.
// -----------------------------------------------------------------------
export const DEMO_ACCESS_CODE = 'tjg6055';

// Fallback table ID used when the app is opened without a `?table=` query
// string in the URL (e.g. someone navigates to the bare localhost URL
// instead of scanning a table QR code).
export const DEFAULT_TABLE_ID = 'A-12';

// How long (ms) a "food is on its way" estimate is shown for at each order
// status. Purely cosmetic text for the demo — no real timers are running
// against it besides what's shown to the presenter.
export const ESTIMATED_WAIT_TEXT = {
  received: '10–15 minutes',
  preparing: '8–12 minutes',
  ready: '2–5 minutes',
  delivered: 'Delivered',
};
