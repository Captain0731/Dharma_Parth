import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./auth.css";

const OtpVerify = ({ onBackSignIn, email: propEmail }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState(propEmail || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.detail?.email) {
        setEmail(e.detail.email);
      }
    };
    window.addEventListener('navigate-otp', handler);
    return () => window.removeEventListener('navigate-otp', handler);
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter 6-digit OTP");
      return;
    }
    if (!email) {
      setError("Email not found. Please sign up again.");
      return;
    }
    
    setError("");
    setSuccess(true);
    setTimeout(() => {
      if (onBackSignIn) {
        onBackSignIn();
      } else {
        window.dispatchEvent(new CustomEvent('navigate-signin'));
      }
    }, 1500);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-layout">

        <div className="auth-left"> 
          <h1>Verify OTP</h1>
          <p>Enter the 6-digit code sent to your email: <strong>{email || "your email"}</strong></p>
          
          {error && <div style={{ color: 'red', marginBottom: '1rem', padding: '0.5rem', background: '#ffe6e6', borderRadius: '4px' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: '1rem', padding: '0.5rem', background: '#e6ffe6', borderRadius: '4px' }}>Email verified successfully! Redirecting...</div>}
          
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                style={{
                  width: '50px',
                  height: '50px',
                  textAlign: 'center',
                  fontSize: '24px',
                  border: '2px solid #ddd',
                  borderRadius: '8px'
                }}
              />
            ))}
          </div>
          
          <button className="submit-btn" onClick={handleVerify}>
            Verify OTP
          </button>

          <p className="resend">Didn't receive OTP? <span onClick={() => {
            setError("");
            // OTP resend functionality would go here
          }}>Resend</span></p>
        </div>

      </div>
    </div>
  );
};

export default OtpVerify;
