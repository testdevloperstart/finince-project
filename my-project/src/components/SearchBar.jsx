// src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full bg-gray-100 p-4 shadow-md">
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white rounded-full shadow-md p-2 max-w-4xl mx-auto"
      >
        <input
          type="text"
          placeholder="Search for members...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow p-2 rounded-l-full text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-black p-2 rounded-full hover:bg-gray-300 text-white focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
