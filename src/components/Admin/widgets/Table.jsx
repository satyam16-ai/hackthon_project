import React from 'react';

const Table = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Donations</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Donor Name</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">John Doe</td>
            <td className="py-2">$500</td>
            <td className="py-2">Oct 1, 2024</td>
            <td className="py-2">
              <button className="bg-green-600 text-white px-3 py-1 rounded-md">View</button>
            </td>
          </tr>
          {/* Repeat rows as necessary */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
