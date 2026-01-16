import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./resumeAnalysis.css";
import { geminiResumeAnalysis, checkGeminiConfig } from "../../services/geminiService";

const ResumeAnalysis = () => {
  const navigate = useNavigate();
  const [resumeFile, setResumeFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState("");

  // Check API configuration on component mount
  useEffect(() => {
    const config = checkGeminiConfig();
    if (!config.configured) {
      console.warn('⚠️ Gemini API not configured:', config.message);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.type.includes("word"))) {
      setResumeFile(file);
      setError("");
    } else {
      setError("Please upload a PDF or DOC file");
      setResumeFile(null);
    }
  };

  const handleAnalyze = async () => {
    if (!resumeFile) {
      setError("Please upload a resume first");
      return;
    }
    setError("");
    setIsAnalyzing(true);
    setAnalysisResult(null);
    
    try {
      // Read file content
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const resumeText = e.target.result;
          
          // For PDF files, we can only extract text if it's text-based PDF
          // For DOC files, we'd need a library to parse them
          // For now, we'll send a simplified version or use the filename
          const textToAnalyze = resumeFile.type === "application/pdf" 
            ? `Resume file: ${resumeFile.name}. Content preview: ${resumeText.substring(0, 1000)}`
            : resumeText.substring(0, 5000); // Limit text length
          
          const result = await geminiResumeAnalysis(textToAnalyze);
          setAnalysisResult(result);
        } catch (err) {
          // Enhanced error message for API key issues
          let errorMessage = err.message || "Failed to analyze resume. Please try again.";
          
          if (err.message && err.message.includes("API key")) {
            errorMessage = `⚠️ Gemini API Key Issue

${err.message}

🔧 Quick Fix:
1. Make sure .env file exists in the 'client' folder
2. Restart your development server:
   - Stop server (Ctrl+C)
   - Run: npm start

The API key is configured but React needs a restart to load it.`;
          }
          
          setError(errorMessage);
          console.error("Analysis error:", err);
        } finally {
          setIsAnalyzing(false);
        }
      };
      
      if (resumeFile.type === "application/pdf") {
        // For PDF, read as text (works for text-based PDFs)
        reader.readAsText(resumeFile);
      } else {
        // For DOC/DOCX, read as text
        reader.readAsText(resumeFile);
      }
    } catch (err) {
      setError("Failed to read resume file. Please try again.");
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="resume-analysis-section">
      <div className="resume-analysis-wrapper">
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
        <div className="resume-analysis-header">
          <span className="resume-analysis-tag">AUTO ANALYSIS</span>
          <h1>Resume Upload → Auto Analysis</h1>
          <p className="resume-analysis-subtitle">
            Upload your resume and get instant analysis of your skills, experience, and career readiness
          </p>
        </div>

        <div className="upload-section">
          <div className="upload-card">
            {error && <div style={{ color: 'red', marginBottom: '1rem', padding: '0.5rem', background: '#ffe6e6', borderRadius: '4px', textAlign: 'center' }}>{error}</div>}
            <div className="upload-area">
              <div className="upload-icon">📄</div>
              <h3>Upload Your Resume</h3>
              <p>Supports PDF and DOC files</p>
              <input
                type="file"
                id="resume-upload"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <label htmlFor="resume-upload" className="upload-button">
                Choose File
              </label>
              {resumeFile && (
                <p className="file-name">✓ {resumeFile.name}</p>
              )}
            </div>

            <button
              className="analyze-btn"
              onClick={handleAnalyze}
              disabled={!resumeFile || isAnalyzing}
            >
              {isAnalyzing ? "Analyzing..." : "🔍 Analyze Resume"}
            </button>
          </div>
        </div>

        {analysisResult && (
          <div className="analysis-results">
            <div className="result-header">
              <h2>Analysis Results</h2>
              <div className="strength-score">
                <span className="score-value">{analysisResult.strengthScore}</span>
                <span className="score-label">Resume Strength</span>
              </div>
            </div>

            <div className="results-grid">
              <div className="result-card">
                <h3>📋 Extracted Skills</h3>
                <div className="skills-list">
                  {analysisResult.extractedSkills.map((skill, idx) => (
                    <span key={idx} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="result-card">
                <h3>💼 Experience Level</h3>
                <div className="experience-badge">{analysisResult.experience}</div>
                <p>Based on your resume content</p>
              </div>

              <div className="result-card">
                <h3>🎯 Career Matches</h3>
                <div className="career-matches">
                  {analysisResult.careerMatches.map((match, idx) => (
                    <div key={idx} className="match-item">
                      <span className="match-role">{match.role}</span>
                      <div className="match-bar">
                        <div 
                          className="match-fill" 
                          style={{ width: `${match.match}%` }}
                        ></div>
                        <span className="match-percent">{match.match}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="result-card warning">
                <h3>⚠️ Skill Gaps Detected</h3>
                <div className="gaps-list">
                  {analysisResult.gaps.map((gap, idx) => (
                    <span key={idx} className="gap-chip">{gap}</span>
                  ))}
                </div>
              </div>

              <div className="result-card recommendations">
                <h3>💡 Recommendations</h3>
                <ul className="recommendations-list">
                  {analysisResult.recommendations.map((rec, idx) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeAnalysis;

