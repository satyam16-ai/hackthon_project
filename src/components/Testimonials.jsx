import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      message: 'This platform has made donating easy and transparent. I’m happy to contribute!',
      image: 'https://via.placeholder.com/150' // Placeholder image URL
    },
    {
      name: 'Jane Smith',
      message: 'I love how the donations are tracked. It feels good to see where my contributions are going!',
      image: 'https://via.placeholder.com/150' // Placeholder image URL
    },
    {
      name: 'Michael Brown',
      message: 'Helping people has never been this easy. Kudos to the platform for being transparent.',
      image: 'https://via.placeholder.com/150' // Placeholder image URL
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-10">What Our Donors Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600 mt-2">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
