import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./auth.css";

const ForgotPassword = ({ onBackSignIn }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-layout">

        <div className="auth-left">
          <h1>Forgot Password</h1>
          <p>Recover access to your account securely. DharmaPath is a platform that connects job seekers with employers.
            It is a platform that helps job seekers find jobs and employers find
            employees.
          </p>
        </div>

        <motion.div
          className="auth-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Reset Password</h2>

          <div className="field">
            <label>Email Address</label>
            <div className="input-box">
              <span>📧</span>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <button className="submit-btn">Send OTP</button>

              <p className="login-link">
                Back to <button type="button" className="link-button" style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', padding: 0 }} onClick={() => typeof onBackSignIn === 'function' && onBackSignIn()}><span>Sign In</span></button>
              </p>
        </motion.div>

      </div>
    </div>
  );
};

export default ForgotPassword;
