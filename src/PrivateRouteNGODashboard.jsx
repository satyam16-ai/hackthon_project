import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const PrivateRouteNGODashboard = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // User is not authenticated
    return <Navigate to="/ngo/login" />;
  }

  if (currentUser.role !== 'ngo') {
    // User is authenticated but not an NGO
    return <Navigate to="/ngo/login" />;
  }

  // User is authenticated and is an NGO
  return <Outlet />;
};

export default PrivateRouteNGODashboard;