import { useRef, useState } from 'react';
import { DEMO_ACCESS_CODE } from '../constants.js';
import DemoQrPanel from './DemoQrPanel.jsx';

export default function AccessGate({ tableId, wasProvided, onUnlock }) {
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState('');
  const headingRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (code.trim() === DEMO_ACCESS_CODE) {
      setError('');
      onUnlock();
    } else {
      setError('That code doesn’t match. Please try again, or check the README for the demo code.');
    }
  }

  return (
    <div className="access-gate">
      <div className="access-gate__card">
        <p className="badge">Prototype • Not an official Penn State product</p>
        <h1 ref={headingRef} tabIndex={-1}>
          Nittany Access Dining
        </h1>
        <p className="access-gate__subtitle">
          Accessible, table-side ordering for Penn State dining halls — a classroom demo built for
          wheelchair users ordering from a seated position.
        </p>

        <p className="table-chip">
          Table: <strong>{tableId}</strong>
        </p>
        {!wasProvided && (
          <p className="notice" role="status">
            No table code was found in this link. Using demo table <strong>{tableId}</strong> instead. A
            real table QR code would link here with <code>?table=your-table-id</code> already filled in.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="access-code">Demo access code</label>
          <div className="input-row">
            <input
              id="access-code"
              name="access-code"
              type={showCode ? 'text' : 'password'}
              autoComplete="off"
              inputMode="text"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              aria-describedby={`access-code-help${error ? ' access-code-error' : ''}`}
              aria-invalid={Boolean(error)}
            />
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowCode((value) => !value)}
              aria-pressed={showCode}
            >
              {showCode ? 'Hide' : 'Show'}
            </button>
          </div>
          <p id="access-code-help" className="help-text">
            This screen is only a demo gate, not real security. The access code is documented in the
            project README.
          </p>
          {error && (
            <p id="access-code-error" role="alert" className="error-text">
              <span aria-hidden="true">⚠</span> {error}
            </p>
          )}
          <button type="submit" className="btn btn-primary btn-large" style={{ marginTop: '16px' }}>
            Enter Dining Hall
          </button>
        </form>

        <p className="demo-code-hint">
          <strong>Presenting this demo?</strong> The access code is stored in plain text in{' '}
          <code>src/constants.js</code> for classroom purposes. It is intentionally not secure.
        </p>

        <details className="qr-disclosure">
          <summary>Staff / presenter: view sample table QR codes</summary>
          <DemoQrPanel />
        </details>
      </div>
    </div>
  );
}
