import React from "react";
import { useNavigate } from "react-router-dom";
import "./careerBenefits.css";

const CareerBenefits = () => {
  const navigate = useNavigate();
  return (
    <section className="whyinvest-section">
      <div className="whyinvest-wrapper">
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

        {/* HEADER */}
        <div className="whyinvest-header">
          <span className="whyinvest-tag">INVESTMENT</span>
          <h1>Why Invest in Hire Logic?</h1>
          <p className="whyinvest-subtitle">
            Hire Logic is a next-generation career intelligence platform that
            connects skills with real job outcomes. Built for scale, trust,
            and long-term impact in the global hiring ecosystem.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="whyinvest-benefits">

          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>High-Growth Job-Tech Market</h3>
            <p>
              The global hiring and upskilling market is rapidly growing with
              increasing demand for skill-based career platforms.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🤖</div>
            <h3>AI-Powered Career Intelligence</h3>
            <p>
              Hire Logic leverages AI-driven insights for career mapping,
              job matching, and skill prediction.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🌍</div>
            <h3>Massive User Base Potential</h3>
            <p>
              Designed for students, freshers, professionals, and recruiters
              across multiple countries and industries.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">💼</div>
            <h3>Multiple Revenue Streams</h3>
            <p>
              Monetization through subscriptions, recruiter access,
              premium insights, mentorship, and enterprise solutions.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🔐</div>
            <h3>Trust & Transparency</h3>
            <p>
              Clear job status tracking, verified listings, and ethical hiring
              improve platform credibility.
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">📊</div>
            <h3>Scalable SaaS Model</h3>
            <p>
              Cloud-based architecture enables fast scaling with low operational
              overhead and high margins.
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="whyinvest-stats">
          <div className="stat-item">
            <div className="stat-value">3x</div>
            <div className="stat-label">Faster Career Decisions</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10M+</div>
            <div className="stat-label">Target Users (Students & Professionals)</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">90%</div>
            <div className="stat-label">Decision Accuracy with AI</div>
          </div>
        </div>

        {/* CTA */}
        <div className="whyinvest-cta">
          <div className="cta-glass-card">
            <h2>Be Part of the Future of Hiring</h2>
            <p>
              Partner with Hire Logic and invest in a platform shaping the future
              of careers and recruitment.
            </p>
            <button className="cta-btn">
              Connect With Us →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerBenefits;
