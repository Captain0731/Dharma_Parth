import React, { useState } from "react";
import "./signup.css";

const Signup = ({ onBackHome }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="signup-wrapper">
      <div className="signup-layout">

        {/* LEFT BRAND PANEL */}
        <div className="signup-left">

          {/* Animated Circles */}
          <div className="animated-circles">
            <div className="animated-ball ball1"></div>
            <div className="animated-ball ball2"></div>
            <div className="animated-ball ball3"></div>
          </div>

          <div className="brand">
            <h2>DharmaPath.</h2>
          </div>

          <h1>Welcome To DharmaPath</h1>
          <p>
            Create your account to access DharmaPath tools and start your career journey with <strong>DharmaPath.</strong> DharmaPath is an intelligent career mapping platform that helps you discover personalized career paths based on your skills, interests, and goals.
            Get AI-powered career recommendations, skill gap analysis, resume insights, and job role matching to make confident career decisions. Start mapping your path to success today.
          </p>

          <div className="back-btn-center">
            <button className="back-btn" onClick={onBackHome}>← Back to Home</button>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="signup-right">
          <h2>Create Account</h2>
          <p className="subtitle">Join our DharmaPath platform</p>

          {error && <div className="signup-error" style={{ color: 'red', marginBottom: '1rem', padding: '0.5rem', background: '#ffe6e6', borderRadius: '4px' }}>{error}</div>}

          <div className="field">
            <label>Full Name</label>
            <div className="input-box">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label>Email Address</label>
            <div className="input-box">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label>Password</label>
            <div className="input-box">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input 
                type="password" 
                placeholder="Create password (min 6 characters)" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            className="submit-btn" 
            onClick={() => {
              if (!name || !email || !password) {
                setError("Please fill all fields");
                return;
              }
              if (password.length < 6) {
                setError("Password must be at least 6 characters");
                return;
              }
              setError("");
              if (onBackHome) {
                onBackHome();
              }
            }}
          >
            Create Account
          </button>

          <p className="login-link">
            Already have an account?{' '}
            <span className="login-link-action" onClick={() => window.dispatchEvent(new CustomEvent('navigate-signin'))}>Sign In</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
