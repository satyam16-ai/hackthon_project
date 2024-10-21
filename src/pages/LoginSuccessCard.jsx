import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const LoginSuccessCard = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
      <div className="bg-white rounded-lg p-4 flex flex-col items-center">
        <FaCheckCircle size={40} color="#34C759" />
        <h2 className="text-lg font-bold text-green-600 mb-2">Login Successful!</h2>
        <p className="text-sm text-gray-600">Welcome back! You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default LoginSuccessCard;