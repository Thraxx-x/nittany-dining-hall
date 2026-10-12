export default function MenuItemCard({ item, quantity, onChangeQty }) {
  return (
    <li className="menu-item">
      <div>
        <h3 className="menu-item__name">{item.name}</h3>
        {item.description && <p className="menu-item__description">{item.description}</p>}
        {item.tags.length > 0 && (
          <ul className="tag-list" aria-label={`Dietary tags for ${item.name}`}>
            {item.tags.map((tag) => (
              <li key={tag} className="tag-chip">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <p className="menu-item__nutrition-summary">
          {item.nutrition.calories} cal · {item.nutrition.protein} g protein
        </p>
        <p className="menu-item__allergens">
          <span aria-hidden="true">⚠ </span>
          {item.allergens.length > 0 ? (
            <>
              <strong>Contains:</strong> {item.allergens.join(', ')}
            </>
          ) : (
            'No major allergens'
          )}
        </p>
        <details className="nutrition-details">
          <summary>
            Nutrition facts<span className="visually-hidden"> for {item.name}</span>
          </summary>
          <dl className="nutrition-facts">
            <dt>Calories</dt>
            <dd>{item.nutrition.calories}</dd>
            <dt>Protein</dt>
            <dd>{item.nutrition.protein} g</dd>
            <dt>Carbohydrates</dt>
            <dd>{item.nutrition.carbs} g</dd>
            <dt>Fat</dt>
            <dd>{item.nutrition.fat} g</dd>
            <dt>Sodium</dt>
            <dd>{item.nutrition.sodium} mg</dd>
          </dl>
          {item.nutritionNote && <p className="nutrition-details__note">{item.nutritionNote}</p>}
          <p className="nutrition-details__note">Estimated values per serving, based on typical published nutrition data.</p>
        </details>
      </div>
      <div className="menu-item__footer">
        <p className="menu-item__price">${item.price.toFixed(2)}</p>
        {quantity === 0 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onChangeQty(item.id, 1)}
            aria-label={`Add ${item.name} to your order`}
          >
            Add to order
          </button>
        ) : (
          <div className="qty-stepper" role="group" aria-label={`Quantity of ${item.name} in your order`}>
            <button type="button" onClick={() => onChangeQty(item.id, -1)} aria-label={`Remove one ${item.name}`}>
              −
            </button>
            <span className="qty-stepper__value" aria-live="polite">
              {quantity}
            </span>
            <button type="button" onClick={() => onChangeQty(item.id, 1)} aria-label={`Add one more ${item.name}`}>
              +
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
