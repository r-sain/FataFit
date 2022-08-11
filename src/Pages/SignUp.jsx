import React from "react";
import signupBanner from "../images/signupBanner.jpg";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const { createNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password, name, phone);
    setError("");
    try {
      await createNewUser(email, password, name);
      navigate("/homepage");
    } catch (e) {
      setError(e.message);
      alert(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="signup">
      <h1 className="signuph1">Welcome to FataFit</h1>
      <p>
        Let’s be honest, it’s hard to fit working out and staying hydrated into
        our busy schedule. With FataFit you stay mindful of your health and see
        more results.
      </p>
      <img src={signupBanner} alt="banner" />
      <form onSubmit={handleSubmit}>
        <div className="forminp">
          <div className="leftdivSU">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
            />
          </div>
          <div className="rightdivSU">
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="phone number"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              minlength="8"
              required
              placeholder="password"
            />
          </div>
        </div>
        <button type="submit" className="signupbtn" style={{ color: "white" }}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
