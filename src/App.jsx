import { useMemo, useRef, useState } from 'react';
import { useTableId } from './hooks/useTableId.js';
import { MENU_ITEMS } from './data/menuData.js';
import AccessGate from './components/AccessGate.jsx';
import AppHeader from './components/AppHeader.jsx';
import HelpPanel from './components/HelpPanel.jsx';
import MenuScreen from './components/MenuScreen.jsx';
import CheckoutScreen from './components/CheckoutScreen.jsx';
import OrderTracker from './components/OrderTracker.jsx';

const SCREENS = {
  ACCESS: 'access',
  MENU: 'menu',
  CHECKOUT: 'checkout',
  TRACKING: 'tracking',
};

function generateOrderNumber(tableId) {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `PSU-${tableId}-${randomDigits}`;
}

export default function App() {
  const { tableId, wasProvided } = useTableId();
  const [screen, setScreen] = useState(SCREENS.ACCESS);
  const [cart, setCart] = useState({});
  const [notes, setNotes] = useState('');
  const [order, setOrder] = useState(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const helpTriggerRef = useRef(null);

  const cartCount = useMemo(() => Object.values(cart).reduce((sum, qty) => sum + qty, 0), [cart]);
  const cartTotal = useMemo(
    () =>
      MENU_ITEMS.reduce((sum, item) => sum + item.price * (cart[item.id] ?? 0), 0),
    [cart],
  );

  function handleChangeQty(itemId, delta) {
    setCart((prev) => {
      const nextQty = Math.max(0, (prev[itemId] ?? 0) + delta);
      const next = { ...prev };
      if (nextQty === 0) {
        delete next[itemId];
      } else {
        next[itemId] = nextQty;
      }
      return next;
    });
  }

  function handleRemove(itemId) {
    setCart((prev) => {
      const next = { ...prev };
      delete next[itemId];
      return next;
    });
  }

  function handlePlaceOrder() {
    setOrder({ number: generateOrderNumber(tableId), statusIndex: 0 });
    setScreen(SCREENS.TRACKING);
  }

  function handleAdvanceStatus() {
    setOrder((prev) => (prev ? { ...prev, statusIndex: Math.min(prev.statusIndex + 1, 3) } : prev));
  }

  function handleNewOrder() {
    setCart({});
    setNotes('');
    setOrder(null);
    setScreen(SCREENS.MENU);
  }

  function handleRestartDemo() {
    setCart({});
    setNotes('');
    setOrder(null);
    setHelpOpen(false);
    setScreen(SCREENS.ACCESS);
  }

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="prototype-banner">
        <strong>Prototype demo</strong> — Nittany Access Dining is a classroom project and is not an
        official Penn State service.
      </div>

      {screen !== SCREENS.ACCESS && (
        <AppHeader
          tableId={tableId}
          onOpenHelp={() => setHelpOpen(true)}
          onRestart={handleRestartDemo}
          showBack={screen === SCREENS.CHECKOUT}
          backLabel="Back to menu"
          onBack={() => setScreen(SCREENS.MENU)}
        />
      )}

      <main id="main-content">
        {screen === SCREENS.ACCESS && (
          <AccessGate tableId={tableId} wasProvided={wasProvided} onUnlock={() => setScreen(SCREENS.MENU)} />
        )}

        {screen === SCREENS.MENU && (
          <MenuScreen
            tableId={tableId}
            cart={cart}
            onChangeQty={handleChangeQty}
            cartCount={cartCount}
            cartTotal={cartTotal}
            onGoToCheckout={() => setScreen(SCREENS.CHECKOUT)}
          />
        )}

        {screen === SCREENS.CHECKOUT && (
          <CheckoutScreen
            tableId={tableId}
            cart={cart}
            onChangeQty={handleChangeQty}
            onRemove={handleRemove}
            notes={notes}
            onNotesChange={setNotes}
            onBackToMenu={() => setScreen(SCREENS.MENU)}
            onPlaceOrder={handlePlaceOrder}
          />
        )}

        {screen === SCREENS.TRACKING && order && (
          <OrderTracker tableId={tableId} order={order} onAdvance={handleAdvanceStatus} onNewOrder={handleNewOrder} />
        )}
      </main>

      {screen !== SCREENS.ACCESS && (
        <footer className="app-footer">Nittany Access Dining — classroom prototype, not an official Penn State product.</footer>
      )}

      <HelpPanel open={helpOpen} onClose={() => setHelpOpen(false)} tableId={tableId} returnFocusRef={helpTriggerRef} />
    </div>
  );
}
