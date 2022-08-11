import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/homepage");
    } catch (e) {
      setError(e.message);
      alert("Wrong Email or Password");
      console.log(e.message);
    }
  };

  return (
    <div className="signin">
      <h1 className="loginh1">Welcome Back to FataFit</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email address"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" className="signinbtn">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
