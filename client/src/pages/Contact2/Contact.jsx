import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <section className="cb-section">
      <div className="cb-wrapper">
        <button 
          className="back-btn" 
          onClick={() => navigate(-1)}
          style={{ 
            marginBottom: '1rem', 
            padding: '0.5rem 1rem', 
            background: 'rgba(79,124,255,0.1)', 
            border: '1px solid rgba(79,124,255,0.3)', 
            borderRadius: '8px', 
            cursor: 'pointer',
            color: '#4f7cff',
            fontWeight: '600'
          }}
        >
          ← Back
        </button>

        {/* LEFT CONTENT */}
        <div className="cb-left">
          <h1>We are here to guide your career journey</h1>

          <p>
            Confused about which career path to choose?
            Share your goals, skills, and doubts — our intelligent career
            guidance system helps you gain clarity and direction for your future.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="cb-right">
          <form className="cb-form">

            <input
              type="text"
              placeholder="Your Full Name"
            />

            <input
              type="email"
              placeholder="Your Email Address"
            />

            <input
              type="text"
              placeholder="Career Goal / Area of Interest (e.g. Data Science)"
            />

            <textarea
              placeholder="Tell us about your skills, background, or career confusion..."
              rows="5"
            />

            <button type="submit">
              GET CAREER GUIDANCE
            </button>

            <small>
              We respect your privacy. Your information is used only to provide
              personalized career guidance and clarity.
            </small>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
