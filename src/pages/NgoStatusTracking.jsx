import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../animation/status-tracking.json'; // Ensure you have a Lottie animation file

const NgoStatusTracking = () => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center">
        <Lottie options={defaultOptions} height={200} width={200} />
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Registration Status</h2>
        <p className="text-gray-700 mb-6">
          Your NGO registration is currently under review. Please check back later for updates.
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NgoStatusTracking;