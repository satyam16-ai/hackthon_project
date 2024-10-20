import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/Authcontext'; // Import useAuth hook
import { FaHome, FaDonate, FaHandsHelping, FaChartLine, FaInfoCircle, FaPhone, FaHeart, FaSignInAlt, FaUserPlus, FaUser, FaUsers } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth(); // Use the AuthContext

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = (button) => {
    if (activeButton === button && isOpen) {
      setIsOpen(false);
      setActiveButton("");
    } else {
      setActiveButton(button);
      setIsOpen(true);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !dropdownRef.current.querySelector(`:focus`) === event.target
      ) {
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
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <FaHeart className="text-white" />
          <span className="font-pacifico">DONOR VISTA</span>
        </div>

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
            className="hover:text-gray-200 flex items-center space-x-2 group"
          >
            <FaHome />
            <span className="group-hover:animate-fadeIn">Home</span>
          </button>
          <button
            onClick={() => handleNavigation("/donate")}
            className="hover:text-gray-200 flex items-center space-x-2 group"
          >
            <FaDonate />
            <span className="group-hover:animate-fadeIn">Donate</span>
          </button>
          <button
            onClick={() => handleNavigation("/ngos")}
            className=" hover:text-gray-200 flex items-center space-x-2 group"
          >
            <FaHandsHelping />
            <span className="group-hover:animate-fadeIn">NGOs</span>
          </button>
          <button
            onClick={() => handleScrollTo("impact")}
            className="hover:text-gray-200 flex items-center space-x-2 group"
          >
            <FaChartLine />
            <span className="group-hover:animate-fadeIn">Impact</span>
          </button>
          <button
            onClick={() => handleScrollTo("about")}
            className="hover:text-gray-200 flex items-center space-x-2 group"
          >
            <FaInfoCircle />
            <span className="group-hover:animate-fadeIn">About Us</span>
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="hover:text-gray-200 flex items-center space-x-2 group"
          >
            <FaPhone />
            <span className="group-hover:animate-fadeIn">Contact</span>
          </button>
        </nav>

        <div className="hidden md:flex space-x-4">
          {currentUser ? (
            <>
              <div className="relative">
                <img
                  src={currentUser.profilePictureUrl || '/default-avatar.png'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <button
                onClick={() => handleNavigation("/donor/dashboard")}
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Dashboard
              </button>
              <button
                onClick={handleLogout}
                className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("login")}
                  className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </button>
                {isOpen && activeButton === "login" && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation("/donor/login");
                      }}
                      className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FaUser />
                      <span>Donor</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation("/ngo/login");
                      }}
                      className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FaUsers />
                      <span>NGO</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("register")}
                  className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                >
                  <FaUserPlus />
                  <span>Register</span>
                </button>
                {isOpen && activeButton === "register" && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-lg"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation("/donor/register");
                      }}
                      className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FaUser />
                      <span>Donor</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigation("/ngo/register");
                      }}
                      className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <FaUsers />
                      <span>NGO</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="space-y-4 text-center">
          <li>
            <button
              onClick={() => handleNavigation("/")}
              className=" hover:text-gray-200 flex items-center justify-center space-x-2"
            >
              <FaHome />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/donate")}
              className=" hover:text-gray-200 flex items-center justify-center space-x-2"
            >
              <FaDonate />
              <span>Donate</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("/ngos")}
              className=" hover:text-gray-200 flex items-center justify-center space-x-2"
            >
              <FaHandsHelping />
              <span>NGOs</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("impact")}
              className=" hover:text-gray-200 flex items-center justify-center space-x-2"
            >
              <FaChartLine />
              <span>Impact</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("about")}
              className=" hover:text-gray-200 flex items-center justify-center space-x-2"
            >
              <FaInfoCircle />
              <span>About Us</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("contact")}
              className=" hover:text-gray-200 flex items-center justify-center space-x-2"
            >
              <FaPhone />
              <span>Contact</span>
            </button>
          </li>
          {currentUser ? (
            <>
              <li>
                <button
                  onClick={() => handleNavigation("/donor/dashboard")}
                  className=" hover:text-gray-200 flex items-center justify-center space-x-2"
                >
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-white text-green-600 w-full px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("login")}
                    className="bg-white text-green-600 w-full px-4 py-2 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <FaSignInAlt />
                    <span>Login</span>
                  </button>
                  {isOpen && activeButton === "login" && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation("/donor/login");
                        }}
                        className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <FaUser />
                        <span>Donor</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation("/ngo/login");
                        }}
                        className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <FaUsers />
                        <span>NGO</span>
                      </button>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("register")}
                    className="bg-white text-green-600 w-full px-4 py-2 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <FaUserPlus />
                    <span>Register</span>
                  </button>
                  {isOpen && activeButton === "register" && (
                    <div
                      ref={dropdownRef}
                      className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation("/donor/register");
                        }}
                        className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <FaUser />
                        <span>Donor</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation("/ngo/register");
                        }}
                        className=" w-full text-left px-4 py-2 text-green-600 rounded-md hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <FaUsers />
                        <span>NGO</span>
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;