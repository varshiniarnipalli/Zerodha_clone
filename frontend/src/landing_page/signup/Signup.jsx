import NavBar from "../Navbar";
import "./Signup.css";

export default function Signup() {
  return (
    <>
      <NavBar />

      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-box">
            <h2>Sign up</h2>

            <input
              type="text"
              placeholder="Enter Username"
              className="signup-input"
            />

            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter Email"
                className="signup-input"
              />
            </div>

            <input
              type="password"
              placeholder="Enter Password"
              className="signup-input"
            />

            <button className="signup-btn">Sign Up</button>

            <p className="login-text">
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}