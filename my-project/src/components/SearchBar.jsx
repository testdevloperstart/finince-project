// src/components/SearchBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="w-full bg-gray-100 p-4 shadow-md  " >
      <div className="flex items-center max-w-4xl  mx-auto space-x-20">
        {/* Search bar form */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-full shadow-md p-2 flex-grow"
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
            className="bg-yellow-500 text-black  p-2 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            Search
          </button>
        </form>

        {/* New button next to the search bar */}
        <NavLink
          to="/daily-pigmy" // Replace this with the actual path of the new page
          className="ml-4 bg-yellow-500 text-black p-3 text-lg font-semibold  rounded-full hover:bg-gray-300 focus:outline-none"
        >
          Daily Pigmy
        </NavLink>
      </div>
    </div>
  );
};

export default SearchBar;
