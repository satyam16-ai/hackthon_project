import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="text-lg">&copy; 2024 Donation Platform. All Rights Reserved.</div>
        <div className="space-x-6">
          <a href="#terms" className="hover:text-gray-200">Terms of Service</a>
          <a href="#privacy" className="hover:text-gray-200">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
