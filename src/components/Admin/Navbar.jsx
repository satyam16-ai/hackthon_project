import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
