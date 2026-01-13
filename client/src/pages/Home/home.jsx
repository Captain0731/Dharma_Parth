import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import hero from "../../assets/herofinal.png";

const Home = () => {
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
    <section className="hero-section">
      <div className="hero-container">

        {/* LEFT IMAGE */}
        <div className="hero-left">
          <img src={hero} alt="Smart Skill to Career Mapper" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">

          <h4>
            Find the Right Career Path <br />
            Based on Your Skills <br />
            Not Guesswork
          </h4>

          <p>
            Smart Skill-to-Career Mapper helps you discover the most suitable
            career paths using your skills, interests, and learning preferences.
            Get clear roadmaps, growth insights, and career clarity — all in one place.
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

          <div className="hero-price">
            <span>CAREER CLARITY RATE</span>
            <h2>100%</h2>
          </div>

        </div>

        {/* DECOR SHAPES */}
        <div className="shape purple"></div>
        <div className="shape blue"></div>

      </div>
    </section>
  );
};

export default Home;
