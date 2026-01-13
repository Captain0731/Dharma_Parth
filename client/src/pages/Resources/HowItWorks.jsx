import React from "react";
import { useNavigate } from "react-router-dom";
import "./howItWorks.css";

const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <section className="howitworks-section">
      <div className="howitworks-wrapper">
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

        {/* HEADER */}
        <div className="howitworks-header">
          <span className="howitworks-tag">DHARMAPATH</span>
          <h1>How It Works For DharmaPath</h1>
          <p className="howitworks-subtitle">
            A simple, structured process to turn confusion into career clarity
          </p>
        </div>

        {/* STEPS */}
        <div className="howitworks-steps">

          {/* STEP 1 */}
          <div className="step-card">
            <div className="step-number">01</div>
            <h3>Share Your Skills & Interests</h3>
            <p>
              Start by selecting your skills, interests, and career preferences.
              This helps DharmaPath understand your background, strengths, and goals
              instead of guessing your future.
            </p>
            <div className="step-icon">🧠</div>
          </div>

          {/* STEP 2 */}
          <div className="step-card">
            <div className="step-number">02</div>
            <h3>Get Career Matches</h3>
            <p>
              Our intelligent system analyzes your inputs and shows you the best-fit
              career paths based on skill compatibility, interest alignment, and
              long-term growth potential.
            </p>
            <div className="step-icon">📊</div>
          </div>

          {/* STEP 3 */}
          <div className="step-card">
            <div className="step-number">03</div>
            <h3>Follow a Clear Roadmap</h3>
            <p>
              For each suggested career, you receive a step-by-step learning roadmap
              explaining what to learn, why it matters, and how it moves you closer
              to real-world readiness.
            </p>
            <div className="step-icon">🗺️</div>
          </div>

          {/* STEP 4 */}
          <div className="step-card">
            <div className="step-number">04</div>
            <h3>Become Job-Ready</h3>
            <p>
              Track your progress, understand skill gaps, improve your resume, and
              move forward with confidence — knowing exactly what your next step
              should be.
            </p>
            <div className="step-icon">🚀</div>
          </div>

        </div>

        {/* CTA */}
        <div className="howitworks-cta">
          <div className="cta-glass-card">
            <h2>Ready to Get Career Clarity?</h2>
            <p>
              Stop guessing your future. Discover the right career path, required
              skills, and a clear action plan — all in one place with DharmaPath.
            </p>
            <button className="cta-btn">
              Start Career Mapping →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
