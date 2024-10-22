import React from 'react';
import { FaBell, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

const HeaderNGO = ({ ngoName }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/ngo/login';
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <header className="flex justify-between items-center bg-white p-6 shadow-md">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Welcome, {ngoName}</h1>
        <p className="text-gray-600">Manage your donations, funds, and campaigns.</p>
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-gray-600 text-xl" />
        <FaUserCircle className="text-gray-600 text-2xl" />
        <button onClick={handleLogout} className="flex items-center space-x-1 bg-red-500 text-white px-4 py-2 rounded">
          <FaSignOutAlt /> <span>Logout</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderNGO;