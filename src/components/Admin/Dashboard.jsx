import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import UserStats from './widgets/UserStats';
import RevenueCard from './widgets/RevenueCard';
import Table from './widgets/Table';
import NGOAdminVerification from './NGOAdminVerification';

const Dashboard = () => {
  // State to toggle NGO Verification section
  const [showNGOVerification, setShowNGOVerification] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar */}
        <Navbar />

        <main className="p-6">
          <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>
          
          {/* NGO Verification Toggle Button */}
          <button
            onClick={() => setShowNGOVerification(!showNGOVerification)}
            className="mb-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            {showNGOVerification ? 'Hide NGO Verification' : 'Show NGO Verification'}
          </button>

          {/* Conditional Rendering of NGO Verification */}
          {showNGOVerification && <NGOAdminVerification />}

          {/* Widgets Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UserStats />
            <RevenueCard />
          </div>

          {/* Table Section */}
          <div className="mt-6">
            <Table />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
