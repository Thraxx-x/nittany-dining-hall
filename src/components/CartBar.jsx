export default function CartBar({ count, total, onView }) {
  return (
    <div className="cart-bar" role="region" aria-label="Order summary">
      <div className="cart-bar__info">
        {count === 0 ? (
          <p>Your order is empty</p>
        ) : (
          <p>
            {count} item{count !== 1 ? 's' : ''} • ${total.toFixed(2)}
          </p>
        )}
      </div>
      <button type="button" className="btn btn-primary" onClick={onView} disabled={count === 0}>
        Review order
      </button>
    </div>
  );
}
