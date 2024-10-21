import React, { useState } from 'react';
import { FaDonate, FaUserCircle, FaHistory, FaCog, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import './dashboard.css'; // For CSS animations

const DonorDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="bg-blue-600 text-white w-64 min-h-screen flex flex-col shadow-lg">
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold">Donor Dashboard</h2>
          <p className="text-sm mt-2">Welcome, John Doe!</p>
        </div>
        <div className="mt-8 flex flex-col">
          <button
            className={`p-4 hover:bg-blue-700 flex items-center transition-all ${
              activeSection === 'dashboard' ? 'bg-blue-700' : ''
            }`}
            onClick={() => setActiveSection('dashboard')}
          >
            <FaChartBar className="mr-3" />
            Dashboard Overview
          </button>
          <button
            className={`p-4 hover:bg-blue-700 flex items-center transition-all ${
              activeSection === 'donations' ? 'bg-blue-700' : ''
            }`}
            onClick={() => setActiveSection('donations')}
          >
            <FaDonate className="mr-3" />
            Donations
          </button>
          <button
            className={`p-4 hover:bg-blue-700 flex items-center transition-all ${
              activeSection === 'history' ? 'bg-blue-700' : ''
            }`}
            onClick={() => setActiveSection('history')}
          >
            <FaHistory className="mr-3" />
            Transaction History
          </button>
          <button
            className={`p-4 hover:bg-blue-700 flex items-center transition-all ${
              activeSection === 'profile' ? 'bg-blue-700' : ''
            }`}
            onClick={() => setActiveSection('profile')}
          >
            <FaUserCircle className="mr-3" />
            Profile Settings
          </button>
          <button
            className={`p-4 hover:bg-blue-700 flex items-center transition-all ${
              activeSection === 'settings' ? 'bg-blue-700' : ''
            }`}
            onClick={() => setActiveSection('settings')}
          >
            <FaCog className="mr-3" />
            Settings
          </button>
          <button className="p-4 mt-auto hover:bg-red-600 flex items-center transition-all">
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-8 transition-all">
        <CSSTransition in={activeSection === 'dashboard'} timeout={300} classNames="fade" unmountOnExit>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Total Donations</h3>
                <p className="text-4xl font-bold text-blue-600">$2,500</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Impactful Causes</h3>
                <p className="text-4xl font-bold text-blue-600">12</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Donations This Month</h3>
                <p className="text-4xl font-bold text-blue-600">$350</p>
              </div>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition in={activeSection === 'donations'} timeout={300} classNames="fade" unmountOnExit>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Make a Donation</h2>
            {/* Donation Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Select a Cause</h3>
              <select className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 transition-all">
                <option value="education">Support Education</option>
                <option value="health">Healthcare for All</option>
                <option value="environment">Environment Protection</option>
              </select>
              <input
                type="text"
                placeholder="Enter Donation Amount"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 transition-all"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">
                Donate Now
              </button>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition in={activeSection === 'history'} timeout={300} classNames="fade" unmountOnExit>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Transaction History</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ul>
                <li className="py-4 border-b border-gray-300 flex justify-between">
                  <span>Donation to Support Education</span>
                  <span className="text-blue-600">$100</span>
                </li>
                <li className="py-4 border-b border-gray-300 flex justify-between">
                  <span>Donation to Healthcare for All</span>
                  <span className="text-blue-600">$200</span>
                </li>
                <li className="py-4 flex justify-between">
                  <span>Donation to Environment Protection</span>
                  <span className="text-blue-600">$50</span>
                </li>
              </ul>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition in={activeSection === 'profile'} timeout={300} classNames="fade" unmountOnExit>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Profile Settings</h2>
            {/* Profile Settings Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 transition-all"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-600 transition-all"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">
                Save Changes
              </button>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition in={activeSection === 'settings'} timeout={300} classNames="fade" unmountOnExit>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
              <label className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                Receive Email Notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Receive SMS Notifications
              </label>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default DonorDashboard;