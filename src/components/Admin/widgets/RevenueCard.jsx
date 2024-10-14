import React from 'react';

const RevenueCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">Revenue Summary</h2>
      <p className="mt-2 text-gray-600">Total Revenue: $25,000</p>
      <p className="mt-2 text-gray-600">This Month: $5,000</p>
    </div>
  );
};

export default RevenueCard;
