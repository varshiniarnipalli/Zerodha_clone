import "./login.css";

export default function Login() {
  return (
    <>

      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <h2>Log in</h2>

            <input
              type="email"
              placeholder="Email"
              className="login-input"
            />

            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
            </div>

            <button className="login-btn">Log In</button>

            <p className="signup-text">
              Don’t have an account? <a href="/Signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}