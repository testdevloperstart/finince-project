// src/components/EDISearchPage.jsx
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const EDISearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState(null);

  // Mock Database for demonstration
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
        { loanType: "Car", amountDue: 5000, monthlyPayment: 500 },
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
        { loanType: "Home", amountDue: 10000, monthlyPayment: 1000 },
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

  return (
    <div className="p-4">
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Display user details if found */}
      {userData ? (
        <div className="mt-4 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{userData.name}'s Account Details</h2>

          <p><strong>Account Number:</strong> {userData.accountNumber}</p>

          <h3 className="text-xl font-semibold mt-4">Daily Payments:</h3>
          <ul className="list-disc list-inside">
            {userData.dailyPayments.map((payment, index) => (
              <li key={index}>
                {payment.date}: Paid ₹{payment.amount}
              </li>
            ))}
          </ul>

          <p className="mt-4"><strong>Current Balance:</strong> ₹{userData.balance}</p>

          <h3 className="text-xl font-semibold mt-4">Loans:</h3>
          <ul className="list-disc list-inside">
            {userData.loans.map((loan, index) => (
              <li key={index}>
                {loan.loanType} Loan: Amount Due ₹{loan.amountDue}, Monthly Payment ₹{loan.monthlyPayment}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        searchQuery && <p className="mt-4 text-red-500">No user found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default EDISearchPage;
