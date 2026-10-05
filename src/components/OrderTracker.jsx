import { useEffect, useRef } from 'react';
import { ORDER_STATUSES } from '../data/menuData.js';
import { ESTIMATED_WAIT_TEXT } from '../constants.js';

export default function OrderTracker({ tableId, order, onAdvance, onNewOrder }) {
  const headingRef = useRef(null);
  const liveRegionRef = useRef(null);
  const currentStatus = ORDER_STATUSES[order.statusIndex];
  const isFinalStatus = order.statusIndex >= ORDER_STATUSES.length - 1;

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="screen">
      <h1 ref={headingRef} tabIndex={-1}>
        Order Status
      </h1>
      <p className="order-number">
        Order number: <strong>{order.number}</strong>
        <br />
        Delivering to Table <strong>{tableId}</strong>
      </p>

      <div className="current-status-banner">
        <p className="current-status-banner__label">Current status</p>
        <p className="current-status-banner__value" aria-live="polite" ref={liveRegionRef}>
          {currentStatus.label}
        </p>
      </div>

      <ol className="status-steps">
        {ORDER_STATUSES.map((status, index) => {
          const state = index < order.statusIndex ? 'done' : index === order.statusIndex ? 'current' : 'upcoming';
          return (
            <li key={status.id} className={`status-step status-step--${state}`}>
              <span className="status-step__marker" aria-hidden="true">
                {state === 'done' ? '✓' : index + 1}
              </span>
              <span>
                <span className="status-step__label">
                  {status.label}
                  {state === 'current' && <span className="status-step__current-tag">Current step</span>}
                  {state === 'done' && <span className="status-step__done-tag">Complete</span>}
                </span>
                <span className="status-step__detail">{status.detail}</span>
              </span>
            </li>
          );
        })}
      </ol>

      <p className="wait-time">
        {isFinalStatus ? (
          <>
            Delivered — <strong>enjoy your meal!</strong>
          </>
        ) : (
          <>
            Estimated time remaining: <strong>{ESTIMATED_WAIT_TEXT[currentStatus.id]}</strong>
          </>
        )}
      </p>

      <div className="delivery-note">
        <span aria-hidden="true">🛎</span>
        <span>
          Your food will be delivered directly to <strong>Table {tableId}</strong> — no need to get up.
        </span>
      </div>

      <div className="demo-controls" style={{ marginTop: '24px' }}>
        <p className="demo-controls__label">Presenter demo control</p>
        <p className="help-text" style={{ margin: 0 }}>
          Use this button to advance the order through each status during a live demo.
        </p>
        <button type="button" className="btn btn-primary btn-large" onClick={onAdvance} disabled={isFinalStatus}>
          {isFinalStatus ? 'Order delivered' : `Advance to "${ORDER_STATUSES[order.statusIndex + 1].label}"`}
        </button>
        <button type="button" className="btn btn-secondary btn-large" onClick={onNewOrder}>
          Start a new demo order
        </button>
      </div>
    </div>
  );
}
