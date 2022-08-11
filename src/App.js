import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Exercise from "./Pages/Exercise";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Nutrition from "./Pages/Nutrition";
import ProtectedRoute from "./Pages/ProtectedRoute";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/homepage"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/water" element={<HomePage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
