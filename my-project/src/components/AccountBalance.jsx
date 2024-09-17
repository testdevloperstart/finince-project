import React, { useState } from 'react';

const AccountBalance = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mock data for members who haven't paid the balance
  const members = [
    { name: 'John Doe', accountNumber: '1234567890', balanceDue: 100 },
    { name: 'Jane Smith', accountNumber: '9876543210', balanceDue: 150 },
    { name: 'Sam Green', accountNumber: '1122334455', balanceDue: 200 },
  ];

  // Calculate total balance from members
  const totalBalance = members.reduce((total, member) => total + member.balanceDue, 0);

  return (
    <div>
      {/* Account Balance Button */}
      <button
        className="px-4 py-2 bg-yellow-500 text-black rounded-lg mt-10"
        onClick={() => setIsOpen(true)}
      >
        View Account Balance
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Account Balance</h2>

            {/* Total Balance */}
            <div className="mb-4">
              <p className="text-lg font-semibold">Total Balance Due: ₹{totalBalance}</p>
            </div>

            {/* List of members who haven't paid */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Members with Pending Payments:</h3>
              <ul className="list-disc pl-5 mt-2">
                {members.map((member, index) => (
                  <li key={index} className="mb-2">
                    <p>
                      <span className="font-semibold">Name:</span> {member.name}
                    </p>
                    <p>
                      <span className="font-semibold">Account Number:</span> {member.accountNumber}
                    </p>
                    <p>
                      <span className="font-semibold">Balance Due:</span> ₹{member.balanceDue}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Close Modal Button */}
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountBalance;
