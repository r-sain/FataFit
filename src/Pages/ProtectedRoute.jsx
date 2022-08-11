import React from "react";
// import { Children } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { UserContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  if (user) {
    return <Navigate to="/water" />;
    console.log(user.email);
  }
  return children;
};

export default ProtectedRoute;
