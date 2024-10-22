import React from 'react';
import Lottie from 'react-lottie';
import successAnimation from './animations/handshake.json'; // Import your handshake animation JSON

const PaymentSuccess = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <Lottie options={defaultOptions} height={300} width={300} />
      <p className="text-xl text-gray-700 mt-4">Thank you for your donation.</p>
      <button className="bg-green-500 text-white px-6 py-2 mt-6 rounded-md hover:bg-green-600 transition-colors">
        Go to Dashboard
      </button>
    </div>
  );
};

export default PaymentSuccess;
