import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/Authcontext';

const PrivateRoutePayment = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/donor/login" />;
};

export default PrivateRoutePayment;