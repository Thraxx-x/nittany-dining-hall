import { useEffect, useRef, useState } from 'react';

export default function HelpPanel({ open, onClose, tableId, returnFocusRef }) {
  const headingRef = useRef(null);
  const [called, setCalled] = useState(false);

  useEffect(() => {
    if (open) {
      headingRef.current?.focus();
    }
  }, [open]);

  function handleClose() {
    setCalled(false);
    onClose();
    returnFocusRef?.current?.focus();
  }

  useEffect(() => {
    if (!open) return undefined;
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-heading"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={handleClose} aria-label="Close help panel">
          ×
        </button>
        <h2 id="help-heading" ref={headingRef} tabIndex={-1}>
          Need assistance?
        </h2>
        <p>
          You're ordering from <strong>Table {tableId}</strong>. Staff are nearby if you need anything at
          all — you don't need to wait for a delivery to ask.
        </p>
        <button type="button" className="btn btn-primary btn-large" onClick={() => setCalled(true)}>
          Call staff to my table
        </button>
        {called && (
          <p className="success-text" role="status" style={{ marginTop: '12px' }}>
            <span aria-hidden="true">✓</span> A staff member has been notified (demo only — no real
            request was sent).
          </p>
        )}

        <h3>Frequently asked questions</h3>
        <dl>
          <dt>Where will my food be delivered?</dt>
          <dd>Staff bring it directly to the table you scanned — you don't need to get up.</dd>

          <dt>Can I change my order after placing it?</dt>
          <dd>
            Not in this demo. In a real deployment, ask staff for help, or this screen could support
            live edits before food is prepared.
          </dd>

          <dt>Is this a real Penn State system?</dt>
          <dd>No. This is a student-built classroom prototype for demonstration purposes only.</dd>
        </dl>
      </div>
    </div>
  );
}
