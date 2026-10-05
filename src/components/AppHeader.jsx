export default function AppHeader({ tableId, onOpenHelp, onRestart, showBack, onBack, backLabel }) {
  return (
    <header className="app-header">
      <div className="app-header__brand">
        {showBack ? (
          <button
            type="button"
            className="btn-text"
            style={{ color: 'var(--gold-500)', padding: 0 }}
            onClick={onBack}
          >
            ← {backLabel}
          </button>
        ) : (
          <>
            <span className="app-header__brand-name">Nittany Access Dining</span>
            <button type="button" className="btn-text" style={{ color: 'var(--gold-500)', padding: 0 }} onClick={onRestart}>
              Restart demo
            </button>
          </>
        )}
      </div>
      <div className="app-header__actions">
        <span className="app-header__table">Table {tableId}</span>
        <button type="button" className="icon-btn" onClick={onOpenHelp}>
          Help
        </button>
      </div>
    </header>
  );
}
