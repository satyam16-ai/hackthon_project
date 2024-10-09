import React from 'react';

const Hero = () => {
  return (
    <section className="bg-green-500 text-white py-20 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Empowering Change Through Transparent Donations</h1>
        <p className="text-lg md:text-2xl">Helping those who need it most, transparently and effectively.</p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-md text-lg hover:bg-gray-100">Start Donating Now</button>
      </div>
    </section>
  );
};

export default Hero;
