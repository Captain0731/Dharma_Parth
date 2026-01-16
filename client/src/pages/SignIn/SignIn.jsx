import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signIn.css";

const SignIn = ({ onSignupClick, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    if (onSignupClick) {
      onSignupClick("home");
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-layout">
        {/* LEFT PANEL (reuse signup style) */}
        <div className="signin-left">
          <div className="animated-circles">
            <div className="animated-ball ball1"></div>
            <div className="animated-ball ball2"></div>
            <div className="animated-ball ball3"></div>
          </div>
            <div className="brand">
              <h2>Hire Logic.</h2>
            </div>
            <h1>Welcome Back To Hire Logic</h1>
            <p>
              Sign in to your account to access Hire Logic tools and continue your career journey with <strong>Hire Logic.</strong> Hire Logic is an intelligent career mapping platform that helps you discover personalized career paths based on your skills, interests, and goals.
              Get AI-powered career recommendations, skill gap analysis, resume insights, and job role matching to make confident career decisions. Continue mapping your path to success.
            </p>
          <div className="back-btn-center">
            <button
              className="back-btn"
              onClick={() => {
                // Prefer router history; fall back to state-based navigation
                if (window.history.length > 1) {
                  navigate(-1);
                } else if (onSignupClick) {
                  onSignupClick("home");
                }
              }}
            >
              ← Back
            </button>
          </div>
        </div>
        {/* RIGHT PANEL */}
        <div className="signin-right">
          <h2>Sign In</h2>
          <p className="subtitle">Access your account</p>
          {error && <div className="signin-error">{error}</div>}
          <div className="field">
            <label>Email Address</label>
            <div className="input-box">
              <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
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
              <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="forgot-password-link" style={{ textAlign: 'right', marginBottom: '1rem' }}>
            <button type="button" className="link-button" style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', padding: 0 }} onClick={() => typeof onForgotPassword === 'function' && onForgotPassword()}>
              Forgot Password?
            </button>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Sign In
          </button>
          <p className="signup-link">
            Don't have an account?{' '}
            <span className="signup-link-action" onClick={() => onSignupClick && onSignupClick("signup")}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
