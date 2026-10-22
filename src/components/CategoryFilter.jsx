function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        marginBottom: "1rem",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            category === active ? "btn btn-small" : "btn btn-small btn-outline"
          }
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;
