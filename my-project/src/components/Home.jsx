// src/pages/Home.jsx
import React from 'react'
import SearchBar from './SearchBar'
import Card from './Card';

function Home() {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const cardsData = [
    {
      title: "Business Loan",
      description: "This is a description for card 1.",
      link: "/business-loan",
    },
    {
      title: "Property Loan",
      description: "This is a description for card 2.",
      link: "/property-loan",
    },
    {
      title: "Bike Loan",
      description: "This is a description for card 3.",
      link: "/bike-loan",
    },
    {
      title: "Three Wheeler Loan",
      description: "This is a description for card 4.",
      link: "/three-wheeler-loan",
    },
    {
      title: "Car Loan",
      description: "This is a description for card 5.",
      link: "/car-loan",
    },
    {
      title: "Land Mortgage Loan",
      description: "This is a description for card 6.",
      link: "/land-mortgage-loan",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-28">
      <SearchBar onSearch={handleSearch} />
      <div className="block">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;
