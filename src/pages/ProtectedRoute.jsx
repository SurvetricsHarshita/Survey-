import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const email = localStorage.getItem('email'); // Check for email in localStorage

  if (!email) {
    // If email is not present, redirect to the login page
    return <Navigate to="/" replace />;
  }

  // If email exists, render the child component
  return children;
};

export default ProtectedRoute;
