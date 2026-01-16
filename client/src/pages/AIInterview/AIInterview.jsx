import React from "react";
import { useNavigate } from "react-router-dom";
import "./aiInterview.css";

const AIInterview = () => {
  const navigate = useNavigate();

  return (
    <section className="ai-interview-section">
      <div className="ai-interview-wrapper">
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

        <div className="ai-interview-header">
          <span className="ai-interview-tag">AI INTERVIEW</span>
          <h1>AI-Powered Interview Practice</h1>
          <p className="ai-interview-subtitle">
            Practice interviews with AI and get instant feedback to improve your interview skills
          </p>
        </div>

        <div className="ai-interview-content">
          <div className="ai-interview-placeholder">
            <div className="placeholder-icon">🤖</div>
            <h2>AI Interview Practice Coming Soon</h2>
            <p>
              Prepare for your job interviews with our AI-powered interview simulator.
              Get real-time feedback on your answers and improve your interview performance.
            </p>
            <div className="placeholder-features">
              <div className="feature-item">
                <span className="feature-icon">🎤</span>
                <span>Voice & Video Practice</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <span>Real-Time Feedback</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span>Performance Analytics</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <span>Role-Specific Questions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInterview;

