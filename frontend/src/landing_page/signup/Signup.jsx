import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/signup",
        form,
        { withCredentials: true }
      );

      console.log(data);

      if (data.success) {
        alert("Signup successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-box">
            <h2>Sign up</h2>

            <input
              type="email"
              placeholder="Enter Email"
              className="signup-input"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="signup-input"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Enter Username"
              className="signup-input"
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <button className="signup-btn">Sign Up</button>

            <p className="login-text">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}