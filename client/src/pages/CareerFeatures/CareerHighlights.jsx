import React from "react";
import "./careerHighlights.css";
import careerImg from "../../assets/careerImg.png"; // new image


const CareerHighlights = () => {
  return (
    <section className="featured-section">
      {/* background blob */}
      <div className="fp-blob"></div>

      {/* heading */}
      <div className="fp-header">
        <h2>Featured Career Path</h2>
        <p>
          Explore a high-demand career path with a clear skill roadmap,
          growth insights, and readiness indicators — all in one view.
        </p>
      </div>

      {/* glass card */}
      <div className="fp-glass">

        {/* image */}
        <div className="fp-image">
          <span className="fp-badge">CAREER PATH</span>
          <img src={careerImg} alt="Career Roadmap" />
        </div>

        {/* details */}
        <div className="fp-content">
          <span className="fp-location">📍 Industry: Software & Technology</span>

          <h3>Software Engineer</h3>
          <h4>₹10–25 LPA</h4>

          {/* stats */}
          <div className="fp-stats">
            <div>
              <strong>4</strong>
              <span>Core Skill Phases</span>
            </div>
            <div>
              <strong>12+</strong>
              <span>Required Skills</span>
            </div>
            <div>
              <strong>High</strong>
              <span>Market Demand</span>
            </div>
          </div>

          <p className="fp-desc">
            This career path includes a structured roadmap covering
            programming fundamentals, problem solving, system design,
            and real-world project experience to become industry-ready.
          </p>

          {/* buttons */}
          <div className="fp-actions">
            <button className="fp-btn primary">
              VIEW CAREER ROADMAP <span>➜</span>
            </button>
            <button className="fp-btn secondary">➜</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerHighlights;
