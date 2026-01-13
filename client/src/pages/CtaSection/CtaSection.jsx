import React from "react";
import "./ctaSection.css";

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-glass">

        {/* LEFT CTA */}
        <div className="cta-box">
          <div className="cta-icon">🧭</div>

          <div className="cta-content">
            <h3>Not sure which career fits you?</h3>
            <p>Discover the right path based on your skills.</p>
          </div>

          <button className="cta-btn">→</button>
        </div>

        {/* RIGHT CTA */}
        <div className="cta-box">
          <div className="cta-icon">🗺️</div>

          <div className="cta-content">
            <h3>Need a clear career roadmap?</h3>
            <p>Get step-by-step guidance to grow with confidence.</p>
          </div>

          <button className="cta-btn">→</button>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
