import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submitted");

  try {
    const { data } = await axios.post(
      "http://localhost:5000/auth/login",
      form,
      { withCredentials: true }
    );

    console.log("Response:", data); // 👈 IMPORTANT

    if (data.success) {
      alert("Login successful!");
      window.location.href = "http://localhost:3000";
    } else {
      alert(data.message); // 👈 THIS WAS MISSING
    }

  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <h2>Log in</h2>

            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button className="login-btn" type="submit">Log In</button>

            <p className="signup-text">
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}