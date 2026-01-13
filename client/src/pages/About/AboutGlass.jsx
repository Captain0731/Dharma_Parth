import React from "react";
import { useNavigate } from "react-router-dom";
import "./aboutGlass.css";

const AboutGlass = () => {
  const navigate = useNavigate();
  
  const handleExploreClick = () => {
    // Update URL using React Router
    navigate('/career-mapper');
    // Also update browser history and trigger popstate for App.js routing
    window.history.pushState({}, '', '/career-mapper');
    window.dispatchEvent(new PopStateEvent('popstate'));
    // Scroll to top
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const handleAIToolsClick = () => {
    // Update URL using React Router
    navigate('/skill-prediction');
    // Also update browser history and trigger popstate for App.js routing
    window.history.pushState({}, '', '/skill-prediction');
    window.dispatchEvent(new PopStateEvent('popstate'));
    // Scroll to top
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* LEFT CONTENT */}
        <div className="about-content">
          <span className="about-tag">About DharmaPath</span>

          <h1>
            Smart Careers. <br />
            Real Guidance. <br />
            Full Clarity for Your Future
          </h1>

          <p className="about-lead">
            DharmaPath is an intelligent career mapping platform designed to
            help students, freshers, and professionals discover personalized career
            paths based on their skills, interests, and market demand.
          </p>

          <p className="about-desc">
            Unlike traditional job portals that focus only on listings,
            DharmaPath provides deep career clarity — including AI-powered skill predictions,
            automated resume analysis, intelligent job role matching, personalized learning roadmaps,
            and local market insights — so you can make confident, long-term career decisions.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <strong>95%</strong>
              <span>Career Match Accuracy</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <strong>10K+</strong>
              <span>Career Paths Analyzed</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🤖</div>
              <strong>24/7</strong>
              <span>AI Career Guidance</span>
            </div>
          </div>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="about-glass-card">
          <div className="glass-card-header">
            <div className="glass-card-icon">✨</div>
            <h3>Why Choose DharmaPath</h3>
          </div>

          <ul className="features-list">
            <li>
              <span className="check-icon">✓</span>
              <span>AI-Powered Career Path Mapping</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Smart Skill Prediction & Gap Analysis</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Automated Resume Analysis</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Intelligent Job Role Matching</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Personalized Learning Roadmaps</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Local Job Market Insights (India-Focused)</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Mentor Booking System</span>
            </li>
            <li>
              <span className="check-icon">✓</span>
              <span>Career Readiness Assessment</span>
            </li>
          </ul>

          <button className="about-btn" onClick={handleExploreClick}>
            <span>Explore Career Paths</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="about-actions-divider">
            <span>or</span>
          </div>

          <button className="about-btn-secondary" onClick={handleAIToolsClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Try AI Tools</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutGlass;
