import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./jobApply.css";

const JobApply = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Pre-store job data function for instant navigation
  const handleViewDetails = (job) => {
    // Show loading state
    setIsNavigating(true);
    
    // Store job data immediately (synchronous, no delay)
    localStorage.setItem("selectedJob", JSON.stringify(job));
    
    // Use React Router navigate (instant)
    navigate("/job-details", { state: { job }, replace: false });
    
    // Also trigger App.js navigation system for instant page switch
    window.history.pushState({}, "", "/job-details");
    window.dispatchEvent(new PopStateEvent("popstate"));
    
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Reset loading state after a brief moment (in case navigation is delayed)
    setTimeout(() => setIsNavigating(false), 100);
  };

  // Generate Application ID
  const generateApplicationId = () => {
    return `APP-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
  };

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Categories
  const categories = ["All", "Frontend", "Backend", "Full Stack", "Design", "Data Science", "DevOps", "Mobile", "Product", "Security", "QA"];

  // Sample job data - 12 different jobs with categories
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      salary: "₹12L - ₹18L",
      type: "Full-time",
      remote: false,
      category: "Frontend",
      description: "Build modern web applications using React, TypeScript, and modern frontend tools."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Design Studio Pro",
      location: "Mumbai, India",
      salary: "₹8L - ₹12L",
      type: "Full-time",
      remote: true,
      category: "Design",
      description: "Create beautiful and intuitive user interfaces for web and mobile applications."
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Hub",
      location: "Hyderabad, India",
      salary: "₹15L - ₹22L",
      type: "Full-time",
      remote: false,
      category: "Data Science",
      description: "Analyze complex data sets and build machine learning models for business insights."
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "CloudTech Inc",
      location: "Pune, India",
      salary: "₹10L - ₹16L",
      type: "Full-time",
      remote: true,
      category: "Backend",
      description: "Develop scalable backend systems using Node.js, Python, and cloud technologies."
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "Infrastructure Labs",
      location: "Chennai, India",
      salary: "₹14L - ₹20L",
      type: "Full-time",
      remote: false,
      category: "DevOps",
      description: "Manage CI/CD pipelines, cloud infrastructure, and deployment automation."
    },
    {
      id: 6,
      title: "Product Manager",
      company: "InnovateNow",
      location: "Delhi, India",
      salary: "₹18L - ₹25L",
      type: "Full-time",
      remote: true,
      category: "Product",
      description: "Lead product strategy, work with cross-functional teams, and drive product vision."
    },
    {
      id: 7,
      title: "Mobile App Developer",
      company: "AppCraft Studios",
      location: "Gurgaon, India",
      salary: "₹9L - ₹14L",
      type: "Full-time",
      remote: false,
      category: "Mobile",
      description: "Build native and cross-platform mobile applications for iOS and Android."
    },
    {
      id: 8,
      title: "Full Stack Developer",
      company: "WebSolutions Co",
      location: "Kolkata, India",
      salary: "₹11L - ₹17L",
      type: "Full-time",
      remote: true,
      category: "Full Stack",
      description: "Develop end-to-end web applications from frontend to backend and database."
    },
    {
      id: 9,
      title: "Cybersecurity Analyst",
      company: "SecureNet Systems",
      location: "Bengaluru, India",
      salary: "₹13L - ₹19L",
      type: "Full-time",
      remote: false,
      category: "Security",
      description: "Protect systems and networks from security threats and vulnerabilities."
    },
    {
      id: 10,
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      location: "Noida, India",
      salary: "₹16L - ₹24L",
      type: "Full-time",
      remote: true,
      category: "Data Science",
      description: "Design and implement ML models for production systems and applications."
    },
    {
      id: 11,
      title: "Cloud Architect",
      company: "CloudScale Technologies",
      location: "Ahmedabad, India",
      salary: "₹20L - ₹28L",
      type: "Full-time",
      remote: false,
      category: "DevOps",
      description: "Design and implement cloud infrastructure solutions on AWS, Azure, or GCP."
    },
    {
      id: 12,
      title: "QA Automation Engineer",
      company: "Quality Assurance Pro",
      location: "Jaipur, India",
      salary: "₹7L - ₹11L",
      type: "Part-time",
      remote: true,
      category: "QA",
      description: "Create and maintain automated test suites for web and mobile applications."
    },
    // Additional Frontend jobs
    {
      id: 13,
      title: "React Developer",
      company: "Frontend Masters",
      location: "Bangalore, India",
      salary: "₹9L - ₹14L",
      type: "Full-time",
      remote: true,
      category: "Frontend",
      description: "Develop responsive and interactive user interfaces using React.js and modern JavaScript frameworks."
    },
    {
      id: 14,
      title: "Vue.js Developer",
      company: "Modern Web Co",
      location: "Pune, India",
      salary: "₹8L - ₹13L",
      type: "Full-time",
      remote: false,
      category: "Frontend",
      description: "Build scalable frontend applications with Vue.js, Vuex, and modern web technologies."
    },
    // Additional Design jobs
    {
      id: 15,
      title: "Product Designer",
      company: "Creative Labs",
      location: "Mumbai, India",
      salary: "₹10L - ₹15L",
      type: "Full-time",
      remote: true,
      category: "Design",
      description: "Design user-centered products and experiences that solve real user problems."
    },
    {
      id: 16,
      title: "Graphic Designer",
      company: "Visual Studio",
      location: "Delhi, India",
      salary: "₹6L - ₹10L",
      type: "Full-time",
      remote: false,
      category: "Design",
      description: "Create compelling visual designs for digital and print media across various platforms."
    },
    // Additional Data Science jobs
    {
      id: 17,
      title: "Data Analyst",
      company: "Data Insights Pro",
      location: "Hyderabad, India",
      salary: "₹12L - ₹18L",
      type: "Full-time",
      remote: true,
      category: "Data Science",
      description: "Analyze business data, create reports, and provide actionable insights to stakeholders."
    },
    // Additional Backend jobs
    {
      id: 18,
      title: "Python Developer",
      company: "CodeCraft Solutions",
      location: "Bangalore, India",
      salary: "₹11L - ₹17L",
      type: "Full-time",
      remote: false,
      category: "Backend",
      description: "Develop robust backend APIs and services using Python, Django, and Flask frameworks."
    },
    {
      id: 19,
      title: "Java Developer",
      company: "Enterprise Tech",
      location: "Chennai, India",
      salary: "₹13L - ₹19L",
      type: "Full-time",
      remote: true,
      category: "Backend",
      description: "Build enterprise-level applications using Java, Spring Boot, and microservices architecture."
    },
    // Additional DevOps jobs
    {
      id: 20,
      title: "Site Reliability Engineer",
      company: "Reliability Systems",
      location: "Pune, India",
      salary: "₹16L - ₹23L",
      type: "Full-time",
      remote: false,
      category: "DevOps",
      description: "Ensure system reliability, monitor performance, and automate infrastructure operations."
    },
    // Additional Product jobs
    {
      id: 21,
      title: "Senior Product Manager",
      company: "Product Leaders",
      location: "Gurgaon, India",
      salary: "₹22L - ₹30L",
      type: "Full-time",
      remote: true,
      category: "Product",
      description: "Lead product roadmap, collaborate with engineering, and drive product success metrics."
    },
    {
      id: 22,
      title: "Product Owner",
      company: "Agile Products Inc",
      location: "Noida, India",
      salary: "₹15L - ₹22L",
      type: "Full-time",
      remote: false,
      category: "Product",
      description: "Define product requirements, manage backlog, and work closely with development teams."
    },
    // Additional Mobile jobs
    {
      id: 23,
      title: "iOS Developer",
      company: "Apple Solutions",
      location: "Bangalore, India",
      salary: "₹12L - ₹18L",
      type: "Full-time",
      remote: true,
      category: "Mobile",
      description: "Develop native iOS applications using Swift and SwiftUI for iPhone and iPad platforms."
    },
    {
      id: 24,
      title: "Android Developer",
      company: "Android Experts",
      location: "Mumbai, India",
      salary: "₹11L - ₹17L",
      type: "Full-time",
      remote: false,
      category: "Mobile",
      description: "Build native Android applications using Kotlin, Jetpack Compose, and modern Android tools."
    },
    // Additional Full Stack jobs
    {
      id: 25,
      title: "MERN Stack Developer",
      company: "Full Stack Pro",
      location: "Hyderabad, India",
      salary: "₹13L - ₹19L",
      type: "Full-time",
      remote: true,
      category: "Full Stack",
      description: "Develop full-stack applications using MongoDB, Express, React, and Node.js technologies."
    },
    {
      id: 26,
      title: "MEAN Stack Developer",
      company: "WebTech Solutions",
      location: "Pune, India",
      salary: "₹12L - ₹18L",
      type: "Full-time",
      remote: false,
      category: "Full Stack",
      description: "Build scalable web applications using MongoDB, Express, Angular, and Node.js stack."
    },
    // Additional Security jobs
    {
      id: 27,
      title: "Security Engineer",
      company: "SecureTech Solutions",
      location: "Delhi, India",
      salary: "₹15L - ₹22L",
      type: "Full-time",
      remote: true,
      category: "Security",
      description: "Design and implement security measures to protect systems and data from threats."
    },
    {
      id: 28,
      title: "Penetration Tester",
      company: "Security Auditors",
      location: "Bangalore, India",
      salary: "₹14L - ₹21L",
      type: "Full-time",
      remote: false,
      category: "Security",
      description: "Perform security assessments, vulnerability testing, and penetration testing of systems."
    },
    // Additional QA jobs
    {
      id: 29,
      title: "Manual QA Tester",
      company: "Quality First",
      location: "Chennai, India",
      salary: "₹6L - ₹10L",
      type: "Full-time",
      remote: true,
      category: "QA",
      description: "Perform manual testing, create test cases, and ensure software quality standards."
    },
    {
      id: 30,
      title: "Performance Test Engineer",
      company: "Performance Labs",
      location: "Gurgaon, India",
      salary: "₹10L - ₹15L",
      type: "Full-time",
      remote: false,
      category: "QA",
      description: "Test application performance, load testing, and optimize system performance metrics."
    }
  ];

  // Filter jobs by category
  const filteredJobs = selectedCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.category === selectedCategory);

  // Group jobs by category for display
  const jobsByCategory = categories.reduce((acc, category) => {
    if (category === "All") return acc;
    acc[category] = jobs.filter(job => job.category === category);
    return acc;
  }, {});

  const handleApply = (job) => {
    setSelectedJob({
      ...job,
      applicationId: generateApplicationId(),
      appliedOn: getCurrentDateTime(),
      status: "Applied"
    });
    // Scroll to top to show the summary card
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="job-apply-section">
      <div className="job-apply-wrapper">
        <button
          className="back-btn"
          onClick={() => {
            window.scrollTo(0, 0);  // Scroll to top first
            navigate(-1);           // Then navigate back
          }}
        >
          ← Back
        </button>

        <div className="job-apply-header">
          <span className="job-apply-tag">JOB APPLY</span>
          <h1>Apply for Jobs</h1>
          <p className="job-apply-subtitle">
            Find and apply for job opportunities that match your skills and career goals
          </p>
        </div>

        {/* Job Summary Card */}
        {selectedJob && (
          <div className="job-summary-card">
            <div className="summary-header">
              <h2>Job Summary Card</h2>
              <span className="summary-badge">Application Submitted</span>
            </div>
            <div className="summary-content">
              <div className="summary-row">
                <div className="summary-item">
                  <span className="summary-label">Job Title</span>
                  <span className="summary-value">{selectedJob.title}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Company Name</span>
                  <span className="summary-value">{selectedJob.company}</span>
                </div>
              </div>
              <div className="summary-row">
                <div className="summary-item">
                  <span className="summary-label">Location</span>
                  <span className="summary-value">{selectedJob.location}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Salary Range</span>
                  <span className="summary-value">{selectedJob.salary}</span>
                </div>
              </div>
              <div className="summary-row">
                <div className="summary-item">
                  <span className="summary-label">Job Type</span>
                  <span className="summary-value">
                    {selectedJob.type} {selectedJob.remote ? "• Remote" : "• On-site"}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Status</span>
                  <span className={`summary-value status-${selectedJob.status.toLowerCase().replace(' ', '-')}`}>
                    {selectedJob.status}
                  </span>
                </div>
              </div>
              <div className="summary-row">
                <div className="summary-item">
                  <span className="summary-label">Applied On</span>
                  <span className="summary-value">{selectedJob.appliedOn}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Application ID</span>
                  <span className="summary-value application-id">{selectedJob.applicationId}</span>
                </div>
              </div>
            </div>
            <button 
              className="clear-summary-btn"
              onClick={() => setSelectedJob(null)}
            >
              Clear Summary
            </button>
          </div>
        )}

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category !== "All" && (
                <span className="category-count">({jobsByCategory[category]?.length || 0})</span>
              )}
            </button>
          ))}
        </div>

        {/* Jobs by Category */}
        {selectedCategory === "All" ? (
          // Show all jobs grouped by category
          Object.entries(jobsByCategory).map(([category, categoryJobs]) => (
            categoryJobs.length > 0 && (
              <div key={category} className="category-section">
                <h2 className="category-title">
                  <span className="category-icon">📁</span>
                  {category}
                  <span className="category-jobs-count">({categoryJobs.length} jobs)</span>
                </h2>
                <div className="jobs-grid">
                  {categoryJobs.map((job) => (
                    <div key={job.id} className="job-card">
                      <div className="job-card-header">
                        <div className="job-title-section">
                          <h3 className="job-title">{job.title}</h3>
                          <p className="job-company">{job.company}</p>
                        </div>
                        <div className={`job-type-badge ${job.remote ? 'remote' : 'onsite'}`}>
                          {job.remote ? '🌐 Remote' : '🏢 On-site'}
                        </div>
                      </div>
                      
                      <div className="job-card-body">
                        <div className="job-info-item">
                          <span className="info-icon">📍</span>
                          <span className="info-text">{job.location}</span>
                        </div>
                        <div className="job-info-item">
                          <span className="info-icon">💰</span>
                          <span className="info-text">{job.salary}</span>
                        </div>
                        <div className="job-info-item">
                          <span className="info-icon">⏰</span>
                          <span className="info-text">{job.type}</span>
                        </div>
                        <p className="job-description">{job.description}</p>
                      </div>

                      <div className="job-card-footer">
                        <button 
                          className="apply-btn"
                          onClick={() => handleApply(job)}
                        >
                          Apply Now
                        </button>
                        <button 
                          className={`view-details-btn ${isNavigating ? 'loading' : ''}`}
                          onClick={() => handleViewDetails(job)}
                          disabled={isNavigating}
                        >
                          {isNavigating ? (
                            <>
                              <span className="btn-spinner"></span>
                              Loading...
                            </>
                          ) : (
                            'View Details'
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))
        ) : (
          // Show filtered jobs for selected category
          <div className="category-section">
            <h2 className="category-title">
              <span className="category-icon">📁</span>
              {selectedCategory}
              <span className="category-jobs-count">({filteredJobs.length} jobs)</span>
            </h2>
            <div className="jobs-grid">
              {filteredJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-card-header">
                    <div className="job-title-section">
                      <h3 className="job-title">{job.title}</h3>
                      <p className="job-company">{job.company}</p>
                    </div>
                    <div className={`job-type-badge ${job.remote ? 'remote' : 'onsite'}`}>
                      {job.remote ? '🌐 Remote' : '🏢 On-site'}
                    </div>
                  </div>
                  
                  <div className="job-card-body">
                    <div className="job-info-item">
                      <span className="info-icon">📍</span>
                      <span className="info-text">{job.location}</span>
                    </div>
                    <div className="job-info-item">
                      <span className="info-icon">💰</span>
                      <span className="info-text">{job.salary}</span>
                    </div>
                    <div className="job-info-item">
                      <span className="info-icon">⏰</span>
                      <span className="info-text">{job.type}</span>
                    </div>
                    <p className="job-description">{job.description}</p>
                  </div>

                  <div className="job-card-footer">
                    <button 
                      className="apply-btn"
                      onClick={() => handleApply(job)}
                    >
                      Apply Now
                    </button>
                    <button 
                      className={`view-details-btn ${isNavigating ? 'loading' : ''}`}
                      onClick={() => handleViewDetails(job)}
                      disabled={isNavigating}
                    >
                      {isNavigating ? (
                        <>
                          <span className="btn-spinner"></span>
                          Loading...
                        </>
                      ) : (
                        'View Details'
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobApply;
