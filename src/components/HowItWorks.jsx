import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-green-50 py-16">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-12">How It Works</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center">
          <div className="text-5xl mb-4">1</div>
          <h3 className="text-xl font-semibold">Register</h3>
          <p className="text-gray-700">Sign up as a donor or NGO and start making a difference.</p>
        </div>
        <div className="text-center">
          <div className="text-5xl mb-4">2</div>
          <h3 className="text-xl font-semibold">Donate</h3>
          <p className="text-gray-700">Choose an NGO and make a transparent donation.</p>
        </div>
        <div className="text-center">
          <div className="text-5xl mb-4">3</div>
          <h3 className="text-xl font-semibold">Track Impact</h3>
          <p className="text-gray-700">Get real-time updates and reports on your donation's impact.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
