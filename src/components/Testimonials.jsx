import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-12">What Our Donors Say</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700">"This platform has made it easier for me to donate and track the impact of my donations in real-time. I love the transparency."</p>
          <div className="mt-4 text-green-600">- John Doe</div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <p className="text-gray-700">"I always struggled to trust online donations, but this platform has restored my faith with its transparency and real-time reporting."</p>
          <div className="mt-4 text-green-600">- Jane Smith</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
