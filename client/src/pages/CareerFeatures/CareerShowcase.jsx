import React from "react";
import "./careerShowcase.css";
import careerImg from "../../assets/jhg.png"; // career image

const CareerShowcase = () => {
  return (
    <section className="ps-section">
      <div className="ps-wrapper">

        {/* LEFT CONTENT */}
        <div className="ps-content">
          <span className="ps-location">
            📍 Industry: Software & Technology
          </span>

          <h2>Software Engineer Career Path</h2>
          <h3>₹10 – 25 LPA</h3>

          {/* STATS */}
          <div className="ps-stats">
            <div className="ps-stat">
              <strong>4</strong>
              <span>Skill Phases</span>
            </div>

            <div className="ps-stat">
              <strong>12+</strong>
              <span>Core Skills</span>
            </div>

            <div className="ps-stat">
              <strong>High</strong>
              <span>Market Demand</span>
            </div>
          </div>

          <p className="ps-desc">
            This career path provides a structured roadmap covering
            programming fundamentals, data structures, system design,
            and real-world projects to help you become industry-ready
            with confidence and clarity.
          </p>

          {/* ACTIONS */}
          <div className="ps-actions">
            <button className="ps-btn primary">
              VIEW CAREER ROADMAP <span>➜</span>
            </button>

            <button className="ps-btn secondary">➜</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="ps-image">
          <span className="ps-badge">CAREER PATH</span>
          <img src={careerImg} alt="Software Engineer Career Roadmap" />
        </div>

      </div>
    </section>
  );
};

export default CareerShowcase;
