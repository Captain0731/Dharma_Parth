import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./aiSkillPrediction.css";
import { geminiSkillPrediction } from "../../services/geminiService";

const AISkillPrediction = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [currentCareer, setCurrentCareer] = useState("");
  const [predictions, setPredictions] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const allSkills = [
    "JavaScript", "Python", "Java", "React", "Node.js", "SQL",
    "Data Analysis", "UI/UX Design", "Project Management", "Marketing",
    "Content Writing", "Digital Marketing", "Machine Learning", "Cloud Computing",
    "HTML", "CSS", "Excel", "Communication", "Creativity", "Leadership",
    "Figma", "Photoshop", "TypeScript", "MongoDB", "AWS"
  ];

  const careers = [
    "Frontend Developer", "Backend Developer", "UI/UX Designer",
    "Data Analyst", "Product Manager", "Digital Marketer"
  ];

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handlePredict = async () => {
    if (selectedSkills.length === 0 || !currentCareer) {
      setError("Please select at least one skill and a career path");
      return;
    }
    setError("");
    setIsLoading(true);
    setPredictions(null);

    try {
      const result = await geminiSkillPrediction(selectedSkills, currentCareer);
      
      // Validate result structure
      if (result && typeof result === 'object') {
        setPredictions(result);
      } else {
        throw new Error("Invalid response from AI service");
      }
    } catch (err) {
      const errorMessage = err?.message || "Failed to get AI predictions. Please try again.";
      setError(errorMessage);
      console.error("Prediction error:", err);
      
      // Set a fallback prediction to ensure UI always shows something
      setPredictions({
        missingSkills: ['React.js', 'TypeScript'],
        nextBestSkill: 'React.js',
        improvement: 25,
        successProbability: 70,
        message: `${currentCareer} ke liye React.js seekhne se career match 25% improve hoga.`
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="skill-prediction-section">
      <div className="skill-prediction-wrapper">
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
        <div className="skill-prediction-header">
          <span className="skill-prediction-tag">AI POWERED</span>
          <h1>AI Skill Prediction</h1>
          <p className="skill-prediction-subtitle">
            Discover missing skills and get personalized recommendations to boost your career match score
          </p>
        </div>

        <div className="prediction-content">
          <div className="prediction-card">
            <h3>Select Your Current Skills</h3>
            <p className="card-subtitle">Choose all skills you currently have</p>
            <div className="skill-tags">
              {allSkills.map((skill, idx) => (
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

          <div className="prediction-card">
            <h3>Target Career Path</h3>
            <p className="card-subtitle">Select the career you want to pursue</p>
            <div className="career-options">
              {careers.map((career, idx) => (
                <button
                  key={idx}
                  className={`career-option ${currentCareer === career ? "active" : ""}`}
                  onClick={() => setCurrentCareer(career)}
                >
                  {career}
                </button>
              ))}
            </div>
          </div>

          <div className="prediction-cta">
            {error && <div style={{ color: 'red', marginBottom: '1rem', padding: '0.5rem', background: '#ffe6e6', borderRadius: '4px', textAlign: 'center' }}>{error}</div>}
            <button 
              className="predict-btn"
              onClick={handlePredict}
              disabled={selectedSkills.length === 0 || !currentCareer || isLoading}
            >
              {isLoading ? "🤖 Analyzing..." : "🤖 Get AI Predictions"}
            </button>
          </div>

          {predictions && (
            <div className="predictions-results">
              <div className="result-card highlight">
                <div className="result-icon">💡</div>
                <div className="result-content">
                  <h4>Next Best Skill</h4>
                  <p className="result-message">{predictions.message}</p>
                  <div className="skill-badge">{predictions.nextBestSkill}</div>
                </div>
              </div>

              <div className="result-card">
                <div className="result-icon">📈</div>
                <div className="result-content">
                  <h4>Career Match Improvement</h4>
                  <div className="improvement-score">+{predictions.improvement}%</div>
                  <p>By learning the recommended skills</p>
                </div>
              </div>

              <div className="result-card">
                <div className="result-icon">🎯</div>
                <div className="result-content">
                  <h4>Success Probability</h4>
                  <div className="probability-score">{predictions.successProbability}%</div>
                  <p>Chance of success in this career path</p>
                </div>
              </div>

              {predictions.missingSkills.length > 0 && (
                <div className="result-card">
                  <div className="result-icon">📚</div>
                  <div className="result-content">
                    <h4>Missing Skills</h4>
                    <div className="missing-skills">
                      {predictions.missingSkills.map((skill, idx) => (
                        <span key={idx} className="missing-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AISkillPrediction;

