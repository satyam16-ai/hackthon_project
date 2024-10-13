import React from 'react';

const Impact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Our Impact</h1>

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">500+</h2>
            <p className="text-gray-700">NGOs Supported</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">10,000+</h2>
            <p className="text-gray-700">Donors</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">25,000+</h2>
            <p className="text-gray-700">People Helped</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600">$1 Million+</h2>
            <p className="text-gray-700">Funds Raised</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
