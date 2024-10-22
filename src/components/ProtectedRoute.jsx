import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ allowedRoles }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // User is not authenticated
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    // User is authenticated but does not have the required role
    return <Navigate to="/login" />;
  }

  // User is authenticated and has the required role
  return <Outlet />;
};

export default PrivateRoute;