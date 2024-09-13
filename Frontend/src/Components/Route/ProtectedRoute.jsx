import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const ProtectedRoute = ({ element }) => {
  const { authToken } = useContext(UserContext);

  // If no authToken, redirect to login page
  return authToken ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
