import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = () => {
    const adminEmail = 'admin@example.com';
    return localStorage.getItem('adminEmail') === adminEmail;
  };

  // If the user is authenticated, render the children (Dashboard in this case)
  // Otherwise, redirect to the login page
  return isAuthenticated() ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
