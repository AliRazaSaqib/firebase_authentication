/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/common.css";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr />

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg">
            Login
          </button>
          <GoogleButton className="google_btn" onClick={handleGoogleSignIn} />
        </div>
      </form>
      <div className="hint-text">
        Already have an account? <Link to="/Signup">SignUp</Link>
      </div>
    </div>
  );
}
