// src/pages/Home.jsx
import React, { useState } from "react";
// import SearchBar from "../components/SearchBar";
import EDISearchPage from "./EDISearchPage"; // Import the EDI component directly for display
import Card from "../components/Card"; // Assuming you have this Card component

const Home = () => {
  const [userData, setUserData] = useState(null); // State to hold EDI data
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate a database or API lookup
  const mockDatabase = {
    john: {
      name: "John Doe",
      accountNumber: "123456",
      dailyPayments: [
        { date: "2023-09-01", amount: 500 },
        { date: "2023-09-02", amount: 700 },
      ],
      balance: 1000,
      loans: [
        { loanType: "Personal", amountDue: 2000, monthlyPayment: 200 },
      ],
    },
    jane: {
      name: "Jane Smith",
      accountNumber: "789123",
      dailyPayments: [
        { date: "2023-09-01", amount: 1000 },
        { date: "2023-09-03", amount: 1500 },
      ],
      balance: 2500,
      loans: [
        { loanType: "Home", amountDue: 10000, monthlyPayment: 500 },
      ],
    },
  };

  // Handle search query submission
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());

    // Lookup user data based on the search query
    const user = mockDatabase[query.toLowerCase()];
    if (user) {
      setUserData(user);
    } else {
      setUserData(null);
    }
  };

  // Sample cards data
  const cardsData = [
    {
      title: "Business Loan",
      description: "Minimum: 10,000  Maximum: 3 lakh (T&C) Apply",
      link: "/business-loan",
      Image: "https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Property Loan",
      description: "Minimum: 1 lakh  Maximum: 15 lakh (T&C) Apply",
      link: "/property-loan",
      Image: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg?auto=compress&cs=tinysrgb&w=600", // Added image
    },
    {
      title: "Bike Loan",
      description: "Minimum: 10,000   Maximum: 2 lakh (T&C) Apply",
      link: "/bike-loan",
      Image: "https://images.pexels.com/photos/144435/pexels-photo-144435.jpeg?auto=compress&cs=tinysrgb&w=600", // Added image
    },
    {
      title: "Three Wheeler Loan",
      description: "Minimum: 10,000  Maximum: 3 lakh (T&C) Apply",
      link: "/three-wheeler-loan",
      Image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600", // Added image
    },
    {
      title: "Car Loan",
      description: "Minimum: 10,000  Maximum: 4.5 lakh (T&C) Apply",
      link: "/car-loan",
      Image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600", // Added image
    },
    {
      title: "Land Mortgage Loan",
      description: "Minimum: 3 lakh  Maximum: 18 lakh (T&C) Apply",
      link: "/land-mortgage-loan",
      Image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600", // Added image
    },
  ];
  

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-28">
      <EDISearchPage onSearch={handleSearch} />
      
      {userData ? (
        // Display EDI component if user data is found
        <div className="mt-4">
          <EDISearchPage
            name={userData.name}
            accountNumber={userData.accountNumber}
            dailyPayments={userData.dailyPayments}
            balance={userData.balance}
            loans={userData.loans}
          />
        </div>
      ) : (
        // Display cards if no user is found or on initial load
        <div className="block">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              Image={card.Image}
            />
          ))}
        </div>
      )}

      {/* Display a message if no user found */}
      {searchQuery && !userData && (
        <p className="mt-4 text-red-500">No user found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default Home;
