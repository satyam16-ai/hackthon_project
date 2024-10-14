import React, { useState } from 'react';
import Sidebar from './Sidebardonor';
import Navbar from './Navbar';
import UserStats from './widgets/UserStats';
import DonationHistory from './widgets/DonationHistory';
import FundraisingCampaigns from './widgets/FundraisingCampaigns';
import ProfileCard from './widgets/ProfileCard';

const DonorDashboard = ({ donorName, profilePicture }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar */}
        <Navbar />

        <main className="p-6">
          {/* Welcome Section */}
          <div className="flex items-center mb-6">
            {profilePicture && (
              <img
                src={profilePicture}
                alt="Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <h1 className="text-3xl font-semibold">
              Welcome, {donorName}!
            </h1>
          </div>

          {/* Widgets Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <UserStats />
            <ProfileCard />
          </div>

          {/* Donation History Section */}
          <h2 className="text-xl font-semibold text-green-500 mb-4">
            Your Donation History
          </h2>
          <DonationHistory />

          {/* Fundraising Campaigns Section */}
          <h2 className="text-xl font-semibold text-green-500 mt-8 mb-4">
            Current Fundraising Campaigns
          </h2>
          <FundraisingCampaigns />
        </main>
      </div>
    </div>
  );
};

export default DonorDashboard;
