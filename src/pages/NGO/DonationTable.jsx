import React from 'react';

const DonationTable = ({ donations }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Donations Received</h2>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4">Donor</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4">{donation.donorName}</td>
              <td className="py-2 px-4">{donation.amount}</td>
              <td className="py-2 px-4">{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationTable;