import React, { useState } from 'react';

const Pay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState(''); // New state for account number
  const [amount, setAmount] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the database (for demonstration purposes, logging in the console)
    console.log({
      name,
      accountNumber, // Include account number in the logged data
      amount,
      paymentMode,
    });

    // Reset form fields and close the modal
    setName('');
    setAccountNumber(''); // Reset account number
    setAmount('');
    setPaymentMode('');
    setIsOpen(false);

    // You can use a real API call here to send the data to your database.
    // e.g., axios.post('/api/payments', { name, accountNumber, amount, paymentMode });
  };

  return (
    <div>
      {/* Pay Button */}
      <button
        className="px-4 py-2 bg-yellow-500 text-black rounded-lg w-40"
        onClick={() => setIsOpen(true)}
      >
        Pay
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
            
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

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

              {/* Amount Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Amount:
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  required
                />
              </div>

              {/* Payment Mode Field */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Payment Mode:
                </label>
                <select
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  required
                >
                  <option value="">Select Mode</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="GooglePay">Google Pay</option>
                  <option value="Cash">Cash</option>
                </select>
              </div>

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
          </div>
        </div>
      )}
    </div>
  );
};

export default Pay;
