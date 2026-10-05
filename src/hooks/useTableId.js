import { useMemo } from 'react';
import { DEFAULT_TABLE_ID } from '../constants.js';

// Reads the table identifier from the URL's query string, e.g.
//   http://localhost:3000/?table=A-12
// Falls back to a default demo table if the link doesn't include one, so
// the app still works if someone opens the bare URL instead of scanning a
// table QR code.
export function useTableId() {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('table');
    const wasProvided = Boolean(raw && raw.trim());
    const tableId = wasProvided ? raw.trim() : DEFAULT_TABLE_ID;
    return { tableId, wasProvided };
  }, []);
}
