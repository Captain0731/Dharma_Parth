import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="notfound-wrapper">
        <div className="notfound-content">
          
          <div className="notfound-icon">💼</div>
          
          <h1 className="notfound-title">404</h1>
          
          <h2 className="notfound-subtitle">Page Not Found</h2>
          
          <p className="notfound-text">
            Hire Logic is a platform that connects job seekers with employers.
            It is a platform that helps job seekers find jobs and employers find
            employees.
          </p>

          <div className="notfound-actions">
            <button className="notfound-btn primary" onClick={() => window.location.href = '/'}>
                Go to Homepage
            </button>
            <button className="notfound-btn secondary" onClick={() => window.history.back()}>
              Go Back
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NotFound;

