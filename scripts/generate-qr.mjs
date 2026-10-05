// Generates a printable QR code PNG that encodes the local demo URL for a
// sample table. Run with:
//
//   npm run generate-qr
//
// To make a QR code for a different table or a different dev URL, edit the
// TABLE_ID / BASE_URL constants below (or pass them as CLI args — see
// bottom of file) and re-run the script.
import QRCode from 'qrcode';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TABLE_ID = process.argv[2] ?? 'A-12';
const BASE_URL = process.argv[3] ?? 'http://localhost:3000/';

const url = `${BASE_URL}${BASE_URL.includes('?') ? '&' : '?'}table=${encodeURIComponent(TABLE_ID)}`;
const outPath = path.join(__dirname, '..', 'public', `table-qr-${TABLE_ID}.png`);

await QRCode.toFile(outPath, url, {
  width: 600,
  margin: 2,
  color: { dark: '#041E42', light: '#FFFFFF' },
});

console.log(`QR code encoding:\n  ${url}\nsaved to:\n  ${outPath}`);
