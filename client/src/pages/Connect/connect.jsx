import React from "react";
import { useNavigate } from "react-router-dom";
import "./connect.css";
import heroImg from "../../assets/career-hero2.png"; // new career image

const Hero = () => {
  const navigate = useNavigate();

  const handleStartMapping = () => {
    navigate('/career-mapper');
    window.history.pushState({}, '', '/career-mapper');
    window.dispatchEvent(new PopStateEvent('popstate'));
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const handleViewSample = () => {
    navigate('/career-mapper');
    window.history.pushState({}, '', '/career-mapper');
    window.dispatchEvent(new PopStateEvent('popstate'));
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <section className="hero">
      <div className="hero-glass">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h4>
            Build Your Career Path <br />
            Based on Skills, Not Confusion
          </h4>

          <p>
            Smart Skill-to-Career Mapper helps students and professionals
            discover the right career direction using their skills,
            interests, and learning preferences. Get clear roadmaps,
            growth insights, and career clarity — all in one place.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={handleStartMapping}>
              START CAREER MAPPING
              <span>➜</span>
            </button>

            <button className="btn-secondary" onClick={handleViewSample}>
              VIEW SAMPLE ROADMAP
              <span>➜</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Career Roadmap Illustration" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
