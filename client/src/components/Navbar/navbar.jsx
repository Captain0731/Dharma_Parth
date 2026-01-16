import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/title.png";

const Navbar = ({ onNavClick, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (page) => {
    onNavClick && onNavClick(page);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileResources = () => {
    setIsMobileResourcesOpen(!isMobileResourcesOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div
          className="navbar-logo"
          onClick={() => handleNavClick("home")}
        >
          <img src={logo} alt="Smart Skill to Career Mapper" />
          Hire<span>Logic.</span>
        </div>

        {/* HAMBURGER MENU BUTTON */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
          <span className={isMobileMenuOpen ? "open" : ""}></span>
        </button>

        {/* NAV LINKS - DESKTOP */}
        <nav className={`navbar-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>

          {/* SIGN IN BUTTON - MOBILE ONLY (BEFORE HOME) */}
          <button
            className="navbar-btn navbar-signin-link mobile-signin-top"
            onClick={() => handleNavClick("signin")}
          >
            SIGN IN
          </button>

          <a
            href="#"
            className={activePage === "home" ? "active" : ""}
            onClick={e => { e.preventDefault(); handleNavClick("home"); }}
          >
            HOME
          </a>

          <a
            href="#"
            className={activePage === "about" ? "active" : ""}
            onClick={e => { e.preventDefault(); handleNavClick("about"); }}
          >
            ABOUT
          </a>

          {/* SERVICES DROPDOWN - DESKTOP */}
          <div className="navbar-dropdown">
            <span className="navbar-dropdown-trigger">
              SERVICES ▾
            </span>

            <div className="dropdown-content services-dropdown">
              {/* Jobs Dropdown */}
              <div className="nested-dropdown">
                <span className="nested-dropdown-trigger">
                JobSphere
                </span>
                <div className="nested-dropdown-content">
                  <a
                    href="#"
                    className={activePage === "job-apply" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("job-apply"); }}
                  >
                    Job Apply
                  </a>
                  <a
                    href="#"
                    className={activePage === "ai-interview" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("ai-interview"); }}
                  >
                    AI Interview
                  </a>
                  <a
                    href="#"
                    className={activePage === "resume-analysis" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("resume-analysis"); }}
                  >
                    Resume Analysis
                  </a>
                  <a
                    href="#"
                    className={activePage === "job-matching" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("job-matching"); }}
                  >
                    Job Role Matching
                  </a>
                  <a
                    href="#"
                    className={activePage === "market-insights" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("market-insights"); }}
                  >
                    Market Insights
                  </a>
                </div>
              </div>

              {/* Nested dropdown for Career Tools */}
              <div className="nested-dropdown">
                <span className="nested-dropdown-trigger">
                Career Studio
                </span>
                <div className="nested-dropdown-content">
                  <a
                    href="#"
                    className={activePage === "career-mapper" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("career-mapper"); }}
                  >
                    Career Mapper
                  </a>
                  <a
                    href="#"
                    className={activePage === "skill-prediction" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("skill-prediction"); }}
                  >
                    AI Skill Prediction
                  </a>
                  <a
                    href="#"
                    onClick={e => { e.preventDefault(); handleNavClick("mentor-booking"); }}
                  >
                    Mentor Booking
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DROPDOWN - DESKTOP */}
          <div className="navbar-dropdown">
            <span className="navbar-dropdown-trigger">
              RESOURCES ▾
            </span>

            <div className="dropdown-content">
              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("howitworks"); }}
              >
                How It Works
              </a>

              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("whyinvest"); }}
              >
                Career Roadmaps
              </a>

              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("successstories"); }}
              >
                Success Stories
              </a>

              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("blogs"); }}
              >
                Career Insights
              </a>
            </div>
          </div>

          {/* SERVICES - MOBILE (WITH DROPDOWN) */}
          <div className="mobile-services">
            <div 
              className={`mobile-service-header ${isMobileServicesOpen ? "open" : ""}`}
              onClick={toggleMobileServices}
            >
              SERVICES <span className="dropdown-arrow">▾</span>
            </div>
            <div className={`mobile-service-links ${isMobileServicesOpen ? "open" : ""}`}>
              <div className="mobile-nested-section">
                <div className="mobile-nested-header">
                  Jobs
                </div>
                <div className="mobile-nested-links">
                  <a
                    href="#"
                    className={activePage === "job-apply" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("job-apply"); }}
                  >
                    Job Apply
                  </a>
                  <a
                    href="#"
                    className={activePage === "ai-interview" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("ai-interview"); }}
                  >
                    AI Interview
                  </a>
                  <a
                    href="#"
                    className={activePage === "resume-analysis" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("resume-analysis"); }}
                  >
                    Resume Analysis
                  </a>
                  <a
                    href="#"
                    className={activePage === "job-matching" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("job-matching"); }}
                  >
                    Job Role Matching
                  </a>
                  <a
                    href="#"
                    className={activePage === "market-insights" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("market-insights"); }}
                  >
                    Market Insights
                  </a>
                </div>
              </div>
              <div className="mobile-nested-section">
                <div className="mobile-nested-header">
                  Career Tools
                </div>
                <div className="mobile-nested-links">
                  <a
                    href="#"
                    className={activePage === "career-mapper" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("career-mapper"); }}
                  >
                    Career Mapper
                  </a>
                  <a
                    href="#"
                    className={activePage === "skill-prediction" ? "active" : ""}
                    onClick={e => { e.preventDefault(); handleNavClick("skill-prediction"); }}
                  >
                    AI Skill Prediction
                  </a>
                  <a
                    href="#"
                    onClick={e => { e.preventDefault(); handleNavClick("mentor-booking"); }}
                  >
                    Mentor Booking
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RESOURCES - MOBILE (WITH DROPDOWN) */}
          <div className="mobile-resources">
            <div 
              className={`mobile-resource-header ${isMobileResourcesOpen ? "open" : ""}`}
              onClick={toggleMobileResources}
            >
              RESOURCES <span className="dropdown-arrow">▾</span>
            </div>
            <div className={`mobile-resource-links ${isMobileResourcesOpen ? "open" : ""}`}>
              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("howitworks"); }}
              >
                How It Works
              </a>
              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("whyinvest"); }}
              >
                Career Roadmaps
              </a>
              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("successstories"); }}
              >
                Success Stories
              </a>
              <a
                href="#"
                onClick={e => { e.preventDefault(); handleNavClick("blogs"); }}
              >
                Career Insights
              </a>
            </div>
          </div>

          <a
            href="#"
            className={activePage === "contact" ? "active" : ""}
            onClick={e => { e.preventDefault(); handleNavClick("contact"); }}
          >
            CONTACT
          </a>

        </nav>

        {/* SIGN IN BUTTON - DESKTOP/LAPTOP (SEPARATE) */}
        <div className="navbar-signin-container">
          <button
            className="navbar-btn navbar-signin-button"
            onClick={() => handleNavClick("signin")}
          >
            SIGN IN
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
