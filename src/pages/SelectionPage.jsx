import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SelectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get('action');

  const handleSelection = (role) => {
    if (action === 'login') {
      navigate(`/${role}-login`);
    } else if (action === 'register') {
      navigate(`/${role}-register`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-8">Select Your Role</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button
            onClick={() => handleSelection('ngo')}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 w-full">
            NGO
          </button>
          <button
            onClick={() => handleSelection('donor')}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 w-full">
            Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
