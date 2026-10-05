import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

// Sample table IDs shown to staff/presenters so they can see what a real
// table QR code would look like. Edit this list to match your demo tables.
const SAMPLE_TABLES = ['A-12', 'B-04', 'C-07'];

// Generates QR codes entirely in the browser (via the bundled `qrcode`
// package) — no network request, no external QR-generation API.
export default function DemoQrPanel() {
  const [codes, setCodes] = useState({});

  useEffect(() => {
    let cancelled = false;
    const origin = window.location.origin + window.location.pathname;

    SAMPLE_TABLES.forEach((tableId) => {
      const url = `${origin}?table=${encodeURIComponent(tableId)}`;
      QRCode.toDataURL(url, { margin: 1, width: 220, color: { dark: '#041E42', light: '#FFFFFF' } })
        .then((dataUrl) => {
          if (!cancelled) {
            setCodes((prev) => ({ ...prev, [tableId]: { dataUrl, url } }));
          }
        })
        .catch(() => {
          /* If generation fails, the sample just doesn't render — non-critical demo aid. */
        });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <p className="help-text">
        Print one of these and set it on a table, or scan it with a phone camera to open the demo at
        that table. Generated locally in your browser — nothing is sent to an external service.
      </p>
      <div className="qr-sample-grid">
        {SAMPLE_TABLES.map((tableId) => (
          <div className="qr-sample" key={tableId}>
            {codes[tableId] ? (
              <img src={codes[tableId].dataUrl} alt={`QR code linking to the demo for table ${tableId}`} />
            ) : (
              <p className="help-text">Generating…</p>
            )}
            <p>
              <strong>Table {tableId}</strong>
            </p>
            <p className="qr-sample__url">{codes[tableId]?.url ?? ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
