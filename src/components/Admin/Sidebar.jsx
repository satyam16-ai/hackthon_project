import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-green-600 w-64 text-white h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block text-lg hover:text-gray-200">
          Dashboard
        </Link>
        <Link to="/admin/users" className="block text-lg hover:text-gray-200">
          Manage Users
        </Link>
        <Link to="/admin/donations" className="block text-lg hover:text-gray-200">
          Manage Donations
        </Link>
        <Link to="/admin/reports" className="block text-lg hover:text-gray-200">
          Reports
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
