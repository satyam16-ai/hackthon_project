import React from 'react';
import { motion } from 'framer-motion';

const RegistrationSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          </svg>
        </motion.div>
        <h2 className="text-2xl font-semibold text-green-600">Registration Successful!</h2>
        <p className="mt-2 text-gray-600">Thank you for registering. Your application will be reviewed shortly.</p>
        <a
          href="/"
          className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Go to Dashboard
        </a>
      </motion.div>
    </div>
  );
};

export default RegistrationSuccess;
