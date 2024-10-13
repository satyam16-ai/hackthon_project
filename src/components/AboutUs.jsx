import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">About Us</h1>

      {/* Mission Section */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to connect donors and NGOs to promote transparency and efficiency in fund and item donations.
          We strive to empower both sides by providing a platform that facilitates easy and secure transactions,
          ensuring that every contribution makes a difference.
        </p>
        <p className="text-lg text-gray-700">
          By leveraging technology, we aim to create a community where donors can see the impact of their contributions
          and NGOs can access the resources they need to operate effectively.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-4">
          We envision a world where technology bridges the gap between those who want to give and those in need,
          ensuring maximum impact and transparency. Our platform seeks to foster trust and collaboration among
          all stakeholders in the charitable ecosystem.
        </p>
        <p className="text-lg text-gray-700">
          Through our innovative approach, we aim to inspire more people to participate in philanthropy and
          create a lasting impact in the communities we serve.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Satyam Tiwari</h3>
            <p className="text-gray-600">Founder & Developer</p>
            <p className="text-gray-500 mt-2">
              Passionate about leveraging technology for social good. Satyam leads the development of our platform,
              ensuring a seamless user experience.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Mahima Tripathi</h3>
            <p className="text-gray-600">UI/UX Designer</p>
            <p className="text-gray-500 mt-2">
              With a keen eye for design, Mahima crafts intuitive interfaces that make donating and accessing NGO 
              resources easy and enjoyable.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Sajal Sharma</h3>
            <p className="text-gray-600">UI/UX Designer</p>
            <p className="text-gray-500 mt-2">
              Sajal focuses on creating engaging user experiences, ensuring that our platform meets the needs of
              both donors and NGOs.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us in Making a Difference</h2>
        <p className="text-lg text-gray-700 mb-6">
          Together, we can create a more transparent and efficient donation system. Whether you're a donor or an NGO,
          we invite you to join us on this journey.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300">
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
