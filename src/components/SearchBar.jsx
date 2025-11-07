import { useState } from "react";
import "../styles/index.css"
import FilterDropdown from "./FilterDropdown";
import Home from "../pages/Home";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <div>
     <h1 className="title">MOVIEHUB</h1>
    <form onSubmit={handleSubmit} className="search-input">
       
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />
      <button className="search-btn">Search</button>
    </form>
    </div>
  );
}