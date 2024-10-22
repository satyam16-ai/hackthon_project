import React from 'react';
import { FaDonate, FaHandHoldingUsd, FaBullhorn, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">NGO Dashboard</h2>
      </div>
      <nav className="mt-10">
        <a href="#donations" className="flex items-center py-2 px-6 hover:bg-gray-700">
          <FaDonate className="mr-3" /> Donations
        </a>
        <a href="#request-fund" className="flex items-center py-2 px-6 hover:bg-gray-700">
          <FaHandHoldingUsd className="mr-3" /> Request Fund Release
        </a>
        <a href="#campaign" className="flex items-center py-2 px-6 hover:bg-gray-700">
          <FaBullhorn className="mr-3" /> Raise Campaign
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
