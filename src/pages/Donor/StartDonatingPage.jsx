import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StartDonatingPage = () => {
  // State to toggle between fund and item donation forms
  const [donationType, setDonationType] = useState('fund');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="text-center w-full max-w-2xl">
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Start Donating
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Choose how you want to contribute and help make a difference.
        </motion.p>

        {/* Toggle Donation Type */}
        <div className="flex justify-center space-x-6 mb-12">
          <motion.button
            className={`px-6 py-3 rounded-lg text-white ${
              donationType === 'fund'
                ? 'bg-blue-600'
                : 'bg-gray-400 hover:bg-blue-600'
            }`}
            onClick={() => setDonationType('fund')}
          >
            Donate Funds
          </motion.button>
          <motion.button
            className={`px-6 py-3 rounded-lg text-white ${
              donationType === 'item'
                ? 'bg-green-600'
                : 'bg-gray-400 hover:bg-green-600'
            }`}
            onClick={() => setDonationType('item')}
          >
            Donate Items
          </motion.button>
        </div>

        {/* Donation Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          {donationType === 'fund' ? (
            <motion.div
              key="fund"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Fund Donation</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-left text-gray-600 mb-2">Donation Amount</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter amount"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left text-gray-600 mb-2">Payment Method</label>
                  <select
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Donate Now
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="item"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">General Purpose Item Donation</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-left text-gray-600 mb-2">Type of Items</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="e.g. Clothes, Food, Books"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left text-gray-600 mb-2">Quantity</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter quantity"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-left text-gray-600 mb-2">Contact Information</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:outline-none"
                >
                  Donate Items
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartDonatingPage;
