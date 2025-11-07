export default function FilterDropdown({ onSelect }) {
  return (
    <div  className="category">
    <select className="option" onChange={(e) => onSelect(e.target.value)} >
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
    </div>
  );
}