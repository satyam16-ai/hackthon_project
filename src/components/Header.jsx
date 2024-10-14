import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../Auth/firebaseConfig';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [userProfilePicture, setUserProfilePicture] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
    setIsOpen(false); // Close the dropdown after navigation
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = (button) => {
    console.log(`Toggling dropdown for ${button}`);
    if (activeButton === button && isOpen) {
      setIsOpen(false);
      setActiveButton("");
    } else {
      setActiveButton(button);
      setIsOpen(true);
    }
  };

  const handleUserProfilePicture = () => {
    const user = auth.currentUser;
    if (user) {
      const profilePictureUrl = user.photoURL;
      setUserProfilePicture(profilePictureUrl);
    }
  };

  useEffect(() => {
    handleUserProfilePicture();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !dropdownRef.current.querySelector(`:focus`) === event.target
      ) {
        console.log("Clicked outside dropdown");
        setIsOpen(false);
        setActiveButton("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <button
            onClick={() => handleNavigation("/")}
            className="hover:text-gray-200"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/donate")}
            className="hover:text-gray-200"
          >
            Donate
          </button>
          <button
            onClick={() => handleNavigation("/ngos")}
            className="hover:text-gray-200"
          >
            NGOs
          </button>
          <button
            onClick={() => handleScrollTo("impact")}
            className="hover:text-gray-200"
          >
            Impact
          </button>
          <button
            onClick={() => handleScrollTo("about")}
            className="hover:text-gray-200"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="hover:text-gray-200"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:flex space-x-4">
          {userProfilePicture ? (
            <div className="relative">
              <img
                src={userProfilePicture}
                alt=""
                className="w-8 h-8 rounded-full"
              />
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => toggleDropdown("login")}
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Login
              </button>
              {isOpen && activeButton === "login" && (
                <div
                  ref={dropdownRef}
                  className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Navigating to /donor/login");
                      handleNavigation("/donor/login");
                    }}
                    className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100"
                  >
                    Donor
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Navigating to /ngo/login");
                      handleNavigation("/ngo/login");
                    }}
                    className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100"
                  >
                    NGO
                  </button>
                </div>
              )}
            </div>
          )}
          {userProfilePicture ? (
            <div className="relative">
              <button
                onClick={() => handleNavigation("/donor/profile")}
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Profile
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => toggleDropdown("register")}
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Register
              </button>
              {isOpen && activeButton === "register" && (
                <div
                  ref={dropdownRef}
                  className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Navigating to /donor/register");
                      handleNavigation("/donor/register");
                    }}
                    className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100"
                  >
                    Donor
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Navigating to /ngo/register");
                      handleNavigation("/ngo/register");
                    }}
                    className="block w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100"
                  >
                    NGO
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
          <ul className="space-y-4 text-center">
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className="block hover:text-gray-200"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/donate")}
                className="block hover:text-gray-200"
              >
                Donate
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/ngos")}
                className="block hover:text-gray-200"
              >
                NGOs
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("impact")}
                className="block hover:text-gray-200"
              >
                Impact
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("about")}
                className="block hover:text-gray-200"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("contact")}
                className="block hover:text-gray-200"
              >
                Contact
              </button>
            </li>
            <li>
              {userProfilePicture ? (
                <button
                  onClick={() => handleNavigation("/donor/profile")}
                  className="block hover:text-gray-200"
                >
                  Profile
                </button>
              ) : (
                <button
                  onClick={() => toggleDropdown("login")}
                  className="block hover:text-gray-200"
                >
                  Login
                </button>
              )}
            </li>
            <li>
              {userProfilePicture ? (
                <button
                  onClick={() => handleNavigation("/donor/profile")}
                  className="block hover:text-gray-200"
                >
                  Profile
                </button>
              ) : (
                <button
                  onClick={() => toggleDropdown("register")}
                  className="block hover:text-gray-200"
                >
                  Register
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;