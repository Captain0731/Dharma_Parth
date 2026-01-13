import React from "react";
import "./careerFeatures.css";
import careerImg from "../../assets/dsp.png"; // career-focused image

const CareerFeatures = () => {
  return (
    <section className="pg-section">
      <div className="pg-card">

        {/* IMAGE SIDE */}
        <div className="pg-image">
          <span className="pg-badge">CAREER PATH</span>
          <img
            src={careerImg}
            alt="Software Engineer Career Roadmap"
          />
        </div>

        {/* CONTENT SIDE */}
        <div className="pg-content">
          <span className="pg-location">
            📍 Industry: Software & Technology
          </span>

          <h2>Software Engineer Career Path</h2>
          <h3>₹10 – 25 LPA</h3>

          {/* STATS */}
          <div className="pg-stats">
            <div className="pg-stat">
              <strong>4</strong>
              <span>Skill Phases</span>
            </div>

            <div className="pg-stat">
              <strong>12+</strong>
              <span>Core Skills</span>
            </div>

            <div className="pg-stat">
              <strong>High</strong>
              <span>Market Demand</span>
            </div>
          </div>

          <p className="pg-desc">
            This career path provides a clear, step-by-step roadmap covering
            programming fundamentals, data structures, system design, and
            real-world projects. It helps learners move from beginner to
            industry-ready with clarity and confidence.
          </p>

          {/* ACTIONS */}
          <div className="pg-actions">
            <button className="pg-btn primary">
              VIEW CAREER ROADMAP <span>➜</span>
            </button>

            <button className="pg-btn secondary">➜</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerFeatures;
