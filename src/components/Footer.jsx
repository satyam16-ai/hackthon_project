import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="text-lg">&copy; 2024 Donor Vista. All Rights Reserved.</div>
        <div className="space-x-6">
          <Link to="/terms-and-conditions" className="hover:text-gray-200">Terms of Service</Link>
          <Link to="/privacy-policy" className="hover:text-gray-200">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;