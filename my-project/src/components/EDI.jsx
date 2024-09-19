import React, { useState } from 'react';

// Sample data for the account details
const accountData = {
  '123456': {
    payments: [
      { date: '2024-09-01', amount: 100 },
      { date: '2024-09-02', amount: 150 },
      { date: '2024-09-03', amount: 120 },
    ],
    balance: 500,
    loans: [
      { loanType: 'Personal Loan', amountPaid: 5000, amountDue: 2000 },
      { loanType: 'Car Loan', amountPaid: 10000, amountDue: 4000 },
    ],
  },
  '654321': {
    payments: [
      { date: '2024-09-01', amount: 200 },
      { date: '2024-09-02', amount: 250 },
      { date: '2024-09-03', amount: 300 },
    ],
    balance: 1000,
    loans: [
      { loanType: 'Home Loan', amountPaid: 15000, amountDue: 8000 },
    ],
  },
  // Add more accounts as needed
};

const EDI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [personDetails, setPersonDetails] = useState(null);
  const [error, setError] = useState('');

  // Function to handle account number submission
  const handleAccountSubmit = (e) => {
    e.preventDefault();

    if (accountData[accountNumber]) {
      setPersonDetails(accountData[accountNumber]);
      setError('');
    } else {
      setPersonDetails(null);
      setError('Account number not found!');
    }
  };

  return (
    <div >
      {/* Button to open the modal */}
      <button
        className="px-4 py-2 bg-yellow-500 text-black rounded-lg w-40 mt-10 mx-20"
        onClick={() => setIsOpen(true)}
      >
        View EDI
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Enter Account Number</h2>

            <form onSubmit={handleAccountSubmit}>
              {/* Account Number Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Account Number:
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 mb-4">{error}</p>}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2"
                >
                  Submit
                </button>

                {/* Close Modal Button */}
                <button
                  type="button"
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>

            {/* Display Person's Account Data */}
            {personDetails && (
              <div className="mt-6">
                {/* Payment Details */}
                <h3 className="text-xl font-semibold mb-2">Payment History</h3>
                <ul className="list-disc pl-6 mb-4">
                  {personDetails.payments.map((payment, index) => (
                    <li key={index}>
                      Date: {payment.date}, Amount: ₹{payment.amount}
                    </li>
                  ))}
                </ul>

                {/* Balance */}
                <h3 className="text-xl font-semibold mb-2">Balance</h3>
                <p className="mb-4">Total Balance: ₹{personDetails.balance}</p>

                {/* Loan Details */}
                <h3 className="text-xl font-semibold mb-2">Loan Details</h3>
                <ul className="list-disc pl-6">
                  {personDetails.loans.map((loan, index) => (
                    <li key={index}>
                      Loan Type: {loan.loanType}, Amount Paid: ₹{loan.amountPaid}, Amount Due: ₹{loan.amountDue}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EDI;
