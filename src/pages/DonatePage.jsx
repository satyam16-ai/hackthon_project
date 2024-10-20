import React, { useState } from "react";
import { motion } from "framer-motion";

const DonatePage = () => {
  const [amount, setAmount] = useState(10);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <h1 className="text-5xl font-bold text-center mb-10">Make a Donation</h1>
      <motion.div 
        className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">Select an Amount</label>
            <select 
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              <option value={10}>$10</option>
              <option value={50}>$50</option>
              <option value={100}>$100</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">Your Name</label>
            <input 
              type="text" 
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
              placeholder="John Doe" 
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">Email</label>
            <input 
              type="email" 
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
              placeholder="example@mail.com" 
            />
          </div>

          <motion.button 
            className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition"
            whileTap={{ scale: 0.95 }}
          >
            Donate ${amount}
          </motion.button>
        </form>
      </motion.div>

      {/* Donation progress */}
      <div className="mt-12 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Total Donations: $5000</h2>
        <div className="w-full bg-gray-300 rounded-full h-6">
          <motion.div 
            className="bg-blue-500 h-6 rounded-full" 
            style={{ width: "50%" }}
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1.5 }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
