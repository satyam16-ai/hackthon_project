import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = () => {
    // Replace with your actual admin authentication logic
    const adminEmail = 'admin@example.com';
    return localStorage.getItem('adminEmail') === adminEmail;
  };

  // If the user is authenticated, render the children (which would be the route components)
  // Otherwise, redirect to the login page
  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
