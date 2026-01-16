import React from "react";
import { useNavigate } from "react-router-dom";
import "./jobs.css";

const Jobs = () => {
  const navigate = useNavigate();

  return (
    <section className="jobs-section">
      <div className="jobs-wrapper">
        <button
          className="back-btn"
          onClick={() => {
            window.scrollTo(0, 0);  // Scroll to top first
            navigate(-1);           // Then navigate back
          }}
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

        <div className="jobs-header">
          <span className="jobs-tag">JOBS</span>
          <h1>Find Your Dream Job</h1>
          <p className="jobs-subtitle">
            Discover job opportunities that match your skills and career goals
          </p>
        </div>

        <div className="jobs-content">
          <div className="jobs-placeholder">
            <div className="placeholder-icon">💼</div>
            <h2>Job Listings Coming Soon</h2>
            <p>
              We're building a comprehensive job board to help you find the perfect opportunity.
              Check back soon for thousands of job listings tailored to your profile.
            </p>
            <div className="placeholder-features">
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <span>Smart Job Search</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Skill-Based Matching</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <span>Location-Based Filters</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <span>AI-Powered Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;

