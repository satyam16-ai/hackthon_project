import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          Donation Platform
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#donate" className="hover:text-gray-200">Donate</a>
          <a href="#ngos" className="hover:text-gray-200">NGOs</a>
          <a href="#impact" className="hover:text-gray-200">Impact</a>
          <a href="#about" className="hover:text-gray-200">About Us</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>

        {/* Login/ Register Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100">Login</button>
          <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100">Register</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <ul className="space-y-4 text-center">
          <li><a href="#home" className="block hover:text-gray-200">Home</a></li>
          <li><a href="#donate" className="block hover:text-gray-200">Donate</a></li>
          <li><a href="#ngos" className="block hover:text-gray-200">NGOs</a></li>
          <li><a href="#impact" className="block hover:text-gray-200">Impact</a></li>
          <li><a href="#about" className="block hover:text-gray-200">About Us</a></li>
          <li><a href="#contact" className="block hover:text-gray-200">Contact</a></li>
          <li>
            <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100 w-full">Login</button>
          </li>
          <li>
            <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100 w-full">Register</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
