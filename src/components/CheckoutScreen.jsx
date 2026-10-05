import { useEffect, useMemo, useRef } from 'react';
import { MENU_ITEMS } from '../data/menuData.js';

export default function CheckoutScreen({
  tableId,
  cart,
  onChangeQty,
  onRemove,
  notes,
  onNotesChange,
  onBackToMenu,
  onPlaceOrder,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  const lineItems = useMemo(
    () =>
      MENU_ITEMS.filter((item) => (cart[item.id] ?? 0) > 0).map((item) => ({
        item,
        quantity: cart[item.id],
        lineTotal: item.price * cart[item.id],
      })),
    [cart],
  );

  const subtotal = lineItems.reduce((sum, line) => sum + line.lineTotal, 0);
  const isEmpty = lineItems.length === 0;

  return (
    <div className="screen">
      <h1 ref={headingRef} tabIndex={-1}>
        Review Your Order
      </h1>
      <p>
        Delivering to <strong>Table {tableId}</strong>
      </p>

      {isEmpty ? (
        <div className="empty-state">
          <p>Your order is empty. Head back to the menu to add some items.</p>
        </div>
      ) : (
        <>
          <ul className="checkout-list">
            {lineItems.map(({ item, quantity, lineTotal }) => (
              <li className="checkout-item" key={item.id}>
                <div>
                  <p className="checkout-item__name">{item.name}</p>
                  <div className="qty-stepper" role="group" aria-label={`Quantity of ${item.name}`}>
                    <button
                      type="button"
                      onClick={() => onChangeQty(item.id, -1)}
                      aria-label={`Remove one ${item.name}`}
                    >
                      −
                    </button>
                    <span className="qty-stepper__value" aria-live="polite">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onChangeQty(item.id, 1)}
                      aria-label={`Add one more ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="checkout-item__line-total">${lineTotal.toFixed(2)}</p>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name} from order`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="summary-card">
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <label htmlFor="order-notes">Order notes (optional)</label>
          <textarea
            id="order-notes"
            name="order-notes"
            value={notes}
            onChange={(event) => onNotesChange(event.target.value)}
            placeholder="Let staff know about allergies or special requests, e.g. no nuts."
          />

          <div className="delivery-note" style={{ marginTop: '16px' }}>
            <span aria-hidden="true">🛎</span>
            <span>
              Staff will bring your order directly to <strong>Table {tableId}</strong>. No real payment is
              processed in this demo.
            </span>
          </div>
        </>
      )}

      <div className="checkout-actions">
        <button type="button" className="btn btn-secondary btn-large" onClick={onBackToMenu}>
          Back to menu
        </button>
        <button
          type="button"
          className="btn btn-primary btn-large"
          onClick={onPlaceOrder}
          disabled={isEmpty}
        >
          Place order (demo)
        </button>
      </div>
    </div>
  );
}
