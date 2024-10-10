import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveButton(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (button) => {
    if (activeButton === button) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
      setActiveButton(button);
    }
  };

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Donation Platform</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#donate" className="hover:text-gray-200">Donate</a>
          <a href="#ngos" className="hover:text-gray-200">NGOs</a>
          <a href="#impact" className="hover:text-gray-200">Impact</a>
          <a href="#about" className="hover:text-gray-200">About Us</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </nav>

        <div className="hidden md:flex space-x-4">
          <div className="relative">
            <button
              onClick={() => toggleDropdown('login')}
              className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Login
            </button>
            {isOpen && activeButton === 'login' && (
              <div ref={dropdownRef} className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg">
                <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">Donor</button>
                <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">NGO</button>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown('register')}
              className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Register
            </button>
            {isOpen && activeButton === 'register' && (
              <div ref={dropdownRef} className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg">
                <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">Donor</button>
                <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">NGO</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
        <ul className="space-y-4 text-center">
          <li><a href="#home" className="block hover:text-gray-200">Home</a></li>
          <li><a href="#donate" className="block hover:text-gray-200">Donate</a></li>
          <li><a href="#ngos" className="block hover:text-gray-200">NGOs</a></li>
          <li><a href="#impact" className="block hover:text-gray-200">Impact</a></li>
          <li><a href="#about" className="block hover:text-gray-200">About Us</a></li>
          <li><a href="#contact" className="block hover:text-gray-200">Contact</a></li>
          <li>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('login')}
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100 w-full"
              >
                Login
              </button>
              {isOpen && activeButton === 'login' && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg">
                  <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">Donor</button>
                  <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">NGO</button>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('register')}
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100 w-full"
              >
                Register
              </button>
              {isOpen && activeButton === 'register' && (
                <div ref={dropdownRef} className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg">
                  <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">Donor</button>
                  <button className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100">NGO</button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
