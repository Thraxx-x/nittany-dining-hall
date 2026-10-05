export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter menu by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className="category-chip"
          aria-pressed={selected === category}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
