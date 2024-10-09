import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Why Choose Our Platform?</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <img src="/icons/transparency.svg" alt="Transparency" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Transparency</h3>
          <p className="text-gray-700">Real-time updates on where your donations are being used.</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <img src="/icons/verified.svg" alt="Verified NGOs" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Verified NGOs</h3>
          <p className="text-gray-700">All NGOs are thoroughly vetted for legitimacy and impact.</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <img src="/icons/impact.svg" alt="Impact Reporting" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Impact Reporting</h3>
          <p className="text-gray-700">Detailed reports on how your donations are making a difference.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
