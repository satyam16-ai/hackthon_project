// src/PrivateRoutePass.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/Authcontext';

const PrivateRoutePass = ({ children }) => {
  const { currentUser, userType } = useAuth();
  const location = useLocation();

  // Check if the current route is the password setup page
  if (location.pathname.startsWith('/ngo/set-password/')) {
    return children;
  }

  if (!currentUser || userType !== 'ngo') {
    return <Navigate to="/ngo/login" />;
  }

  return children;
};

export default PrivateRoutePass;