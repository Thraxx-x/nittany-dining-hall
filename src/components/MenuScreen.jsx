import { useEffect, useMemo, useRef, useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData.js';
import CategoryFilter from './CategoryFilter.jsx';
import MenuItemCard from './MenuItemCard.jsx';
import CartBar from './CartBar.jsx';

const ALL_CATEGORIES = ['All', ...CATEGORIES];

export default function MenuScreen({ tableId, cart, onChangeQty, cartCount, cartTotal, onGoToCheckout }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  const visibleItems = useMemo(() => {
    if (selectedCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="screen screen--with-cartbar">
      <h1 ref={headingRef} tabIndex={-1}>
        Today's Menu
      </h1>
      <p>
        Ordering for <strong>Table {tableId}</strong>. Browse by category, add items, then review your
        order when you're ready.
      </p>

      <CategoryFilter categories={ALL_CATEGORIES} selected={selectedCategory} onSelect={setSelectedCategory} />

      <ul className="menu-list" aria-label={`Menu items — ${selectedCategory}`}>
        {visibleItems.map((item) => (
          <MenuItemCard key={item.id} item={item} quantity={cart[item.id] ?? 0} onChangeQty={onChangeQty} />
        ))}
      </ul>

      <CartBar count={cartCount} total={cartTotal} onView={onGoToCheckout} />
    </div>
  );
}
