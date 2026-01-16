import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./jobRoleMatching.css";
import { geminiJobRoleMatching } from "../../services/geminiService";

const JobRoleMatching = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [experience, setExperience] = useState("");
  const [matches, setMatches] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const skills = [
    "JavaScript", "Python", "React", "Node.js", "SQL", "UI/UX Design",
    "Data Analysis", "Project Management", "Marketing", "Content Writing"
  ];

  const interests = [
    "Software Development", "Data Science", "Design", "Business",
    "Marketing", "Sales", "Finance"
  ];

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleInterestToggle = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleMatch = async () => {
    if (selectedSkills.length === 0 || selectedInterests.length === 0 || !experience) {
      setError("Please fill all fields");
      return;
    }
    setError("");
    setIsLoading(true);
    setMatches(null);

    try {
      const jobMatches = await geminiJobRoleMatching(selectedSkills, selectedInterests, experience);
      setMatches(jobMatches);
    } catch (err) {
      setError(err.message || "Failed to get job matches. Please try again.");
      console.error("Job matching error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="job-matching-section">
      <div className="job-matching-wrapper">
        <button 
          className="back-btn" 
          onClick={() => {
            window.scrollTo(0, 0);  // Scroll to top first
            navigate(-1);           // Then navigate back
          }}
          style={{ 
            marginBottom: '1rem', 
            padding: '0.5rem 1rem', 
            background: 'rgba(79,124,255,0.1)', 
            border: '1px solid rgba(79,124,255,0.3)', 
            borderRadius: '8px', 
            cursor: 'pointer',
            color: '#4f7cff',
            fontWeight: '600'
          }}
        >
          ← Back
        </button>
        <div className="job-matching-header">
          <span className="job-matching-tag">SMART MATCHING</span>
          <h1>Smart Job Role Matching</h1>
          <p className="job-matching-subtitle">
            Get matched with job roles based on your skills, interests, and experience level
          </p>
        </div>

        <div className="matching-content">
          <div className="matching-card">
            <h3>Your Skills</h3>
            <div className="skill-tags">
              {skills.map((skill, idx) => (
                <button
                  key={idx}
                  className={`skill-tag ${selectedSkills.includes(skill) ? "active" : ""}`}
                  onClick={() => handleSkillToggle(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="matching-card">
            <h3>Your Interests</h3>
            <div className="interest-tags">
              {interests.map((interest, idx) => (
                <button
                  key={idx}
                  className={`interest-tag ${selectedInterests.includes(interest) ? "active" : ""}`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <div className="matching-card">
            <h3>Experience Level</h3>
            <div className="experience-options">
              {["Student", "Fresher (0-2 years)", "Mid-Level (2-5 years)", "Senior (5+ years)"].map((exp, idx) => (
                <button
                  key={idx}
                  className={`exp-option ${experience === exp ? "active" : ""}`}
                  onClick={() => setExperience(exp)}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>

          <div className="matching-cta">
            {error && <div style={{ color: 'red', marginBottom: '1rem', padding: '0.5rem', background: '#ffe6e6', borderRadius: '4px', textAlign: 'center' }}>{error}</div>}
            <button
              className="match-btn"
              onClick={handleMatch}
              disabled={selectedSkills.length === 0 || selectedInterests.length === 0 || !experience || isLoading}
            >
              {isLoading ? "🎯 Finding Matches..." : "🎯 Find My Job Matches"}
            </button>
          </div>

          {matches && (
            <div className="matches-results">
              <h2>Your Job Role Matches</h2>
              <div className="matches-grid">
                {matches.map((match, idx) => (
                  <div key={idx} className={`match-card ${match.ready ? "ready" : "not-ready"}`}>
                    <div className="match-header">
                      <h3>{match.role}</h3>
                      <div className="match-badge">
                        <span className="match-percent">{match.match}%</span>
                        <span className="match-label">Match</span>
                      </div>
                    </div>
                    
                    <div className="match-status">
                      {match.ready ? (
                        <span className="status-ready">✓ Ready</span>
                      ) : (
                        <span className="status-not-ready">⚠ Not Ready</span>
                      )}
                    </div>

                    <div className="match-salary">
                      <strong>Expected Salary:</strong> {match.salary}
                    </div>

                    {match.missingSkills.length > 0 && (
                      <div className="missing-skills">
                        <strong>Missing Skills:</strong>
                        <div className="skills-gap">
                          {match.missingSkills.map((skill, i) => (
                            <span key={i} className="gap-skill">{skill}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <button className="view-details-btn">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobRoleMatching;

