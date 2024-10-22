import React from 'react';
import Lottie from 'react-lottie';
import failAnimation from './animations/error.json'; // Import your error/failure animation JSON

const PaymentFail = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: failAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
      <Lottie options={defaultOptions} height={300} width={300} />
      <p className="text-xl text-gray-700 mt-4">Something went wrong with your transaction. Please try again.</p>
      <button className="bg-red-500 text-white px-6 py-2 mt-6 rounded-md hover:bg-red-600 transition-colors">
        Retry Payment
      </button>
    </div>
  );
};

export default PaymentFail;
