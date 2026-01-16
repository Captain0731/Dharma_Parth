import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./jobDetails.css";

const JobDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Load job data immediately (synchronously) instead of waiting for useEffect
  const getJobData = () => {
    // Try location state first (fastest)
    if (location.state?.job) {
      return location.state.job;
    }
    
    // Fallback to localStorage (synchronous, no delay)
    try {
      const storedJob = localStorage.getItem("selectedJob");
      if (storedJob) {
        return JSON.parse(storedJob);
      }
    } catch (e) {
      // Ignore parse errors
    }
    
    return null;
  };
  
  const [job, setJob] = useState(() => getJobData());

  useEffect(() => {
    // If job is still null after initial load, try to get it again
    if (!job) {
      const jobData = getJobData();
      if (jobData) {
        setJob(jobData);
      } else {
        // If no job data, redirect back to job apply
        navigate("/job-apply");
      }
    }
  }, [location, navigate, job]);

  const handleApply = () => {
    // Store job in localStorage for application summary
    localStorage.setItem("selectedJob", JSON.stringify(job));
    // Navigate back to job apply to show the summary card
    navigate("/job-apply", { state: { applyJob: job } });
  };

  if (!job) {
    return (
      <div className="job-details-loading">
        <div className="loading-container">
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
          <p className="loading-text">Loading job details...</p>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="job-details-section">
      <div className="job-details-wrapper">
        <button
          className="back-btn"
          onClick={() => {
            window.scrollTo(0, 0);  // Scroll to top first
            navigate(-1);            // Then navigate back
          }}
        >
          ← Back
        </button>

        <div className="job-details-header">
          <div className="job-header-content">
            <div className="job-title-section">
              <h1 className="job-details-title">{job.title}</h1>
              <p className="job-details-company">{job.company}</p>
              <div className="job-meta-info">
                <span className="job-location">📍 {job.location}</span>
                <span className="job-type">{job.type}</span>
                {job.remote && <span className="job-remote">🌐 Remote</span>}
              </div>
            </div>
            <div className="job-salary-section">
              <h2 className="job-salary">{job.salary}</h2>
              <button className="apply-now-btn" onClick={handleApply}>
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="job-details-content">
          <div className="job-details-main">
            <div className="details-card">
              <h3 className="details-card-title">Job Description</h3>
              <p className="job-description-text">{job.description}</p>
            </div>

            <div className="details-card">
              <h3 className="details-card-title">Requirements</h3>
              <ul className="requirements-list">
                <li>Bachelor's degree in Computer Science or related field</li>
                <li>Proven experience in the relevant technology stack</li>
                <li>Strong problem-solving and analytical skills</li>
                <li>Excellent communication and teamwork abilities</li>
                <li>Ability to work in a fast-paced environment</li>
              </ul>
            </div>

            <div className="details-card">
              <h3 className="details-card-title">Responsibilities</h3>
              <ul className="responsibilities-list">
                <li>Design and develop high-quality software solutions</li>
                <li>Collaborate with cross-functional teams</li>
                <li>Participate in code reviews and technical discussions</li>
                <li>Maintain and improve existing systems</li>
                <li>Stay updated with industry best practices</li>
              </ul>
            </div>

            <div className="details-card">
              <h3 className="details-card-title">Benefits</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">💰</span>
                  <span className="benefit-text">Competitive Salary</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🏥</span>
                  <span className="benefit-text">Health Insurance</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📚</span>
                  <span className="benefit-text">Learning & Development</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🏖️</span>
                  <span className="benefit-text">Paid Time Off</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💻</span>
                  <span className="benefit-text">Flexible Work Hours</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎯</span>
                  <span className="benefit-text">Career Growth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="job-details-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-card-title">Job Overview</h3>
              <div className="overview-item">
                <span className="overview-label">Company</span>
                <span className="overview-value">{job.company}</span>
              </div>
              <div className="overview-item">
                <span className="overview-label">Location</span>
                <span className="overview-value">{job.location}</span>
              </div>
              <div className="overview-item">
                <span className="overview-label">Job Type</span>
                <span className="overview-value">{job.type}</span>
              </div>
              <div className="overview-item">
                <span className="overview-label">Work Mode</span>
                <span className="overview-value">{job.remote ? "Remote" : "On-site"}</span>
              </div>
              <div className="overview-item">
                <span className="overview-label">Salary Range</span>
                <span className="overview-value">{job.salary}</span>
              </div>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-card-title">Quick Apply</h3>
              <p className="sidebar-description">
                Ready to apply? Click the button below to submit your application.
              </p>
              <button className="sidebar-apply-btn" onClick={handleApply}>
                Apply for this Position
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;

