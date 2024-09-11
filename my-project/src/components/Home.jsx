import React from 'react'
import SearchBar from './SearchBar'

function Home() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Implement your search logic here
  };
  return (
    <div className="min-h-screen bg-gray-100">
    <SearchBar onSearch={handleSearch} />
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mt-8">
        Welcome to the Homepage
      </h1>
      {/* Add more content here */}
    </div>
  </div>
  )
}

export default Home
