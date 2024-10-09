import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Donation Platform</div>
      <nav className="space-x-6">
        <a href="#home" className="hover:text-gray-200">Home</a>
        <a href="#donate" className="hover:text-gray-200">Donate</a>
        <a href="#ngos" className="hover:text-gray-200">NGOs</a>
        <a href="#impact" className="hover:text-gray-200">Impact</a>
        <a href="#about" className="hover:text-gray-200">About Us</a>
        <a href="#contact" className="hover:text-gray-200">Contact</a>
      </nav>
      <div className="space-x-4">
        <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100">Login</button>
        <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100">Register</button>
      </div>
    </header>
  );
};

export default Header;
