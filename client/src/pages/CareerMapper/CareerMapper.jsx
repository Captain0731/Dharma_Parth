import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./careerMapper.css";
import { geminiCareerPathRecommendation } from "../../services/geminiService";

const CareerMapper = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [experience, setExperience] = useState("");
  const [careerResults, setCareerResults] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [currentStep, setCurrentStep] = useState("input"); // input, results, roadmap
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Expanded skills list
  const skills = [
    "JavaScript", "Python", "Java", "React", "Node.js", "SQL",
    "Data Analysis", "UI/UX Design", "Project Management", "Marketing",
    "Content Writing", "Digital Marketing", "Machine Learning", "Cloud Computing",
    "HTML", "CSS", "Excel", "Communication", "Creativity", "Leadership",
    "Figma", "Photoshop", "Illustrator", "TypeScript", "MongoDB", "AWS"
  ];

  const interests = [
    "Software Development", "Data Science", "Design", "Business",
    "Marketing", "Sales", "Finance", "Healthcare", "Education",
    "Engineering", "Creative Arts", "Consulting"
  ];

  // Career dataset with skills mapping and roadmaps
  const careerDatabase = {
    "UI/UX Designer": {
      requiredSkills: ["UI/UX Design", "Figma", "Creativity", "Design"],
      matchingInterests: ["Design", "Creative Arts"],
      matchScore: 0,
      salary: {
        entry: "₹3-6 LPA",
        mid: "₹6-12 LPA",
        senior: "₹12-25 LPA"
      },
      roadmap: {
        beginner: [
          "Design basics & principles",
          "Color theory fundamentals",
          "Typography basics",
          "User psychology introduction"
        ],
        intermediate: [
          "Figma/Adobe XD mastery",
          "UX research methods",
          "Wireframing & prototyping",
          "Design systems creation"
        ],
        advanced: [
          "Portfolio building with real projects",
          "Usability testing & feedback",
          "Design thinking methodology",
          "Industry best practices"
        ]
      },
      resources: {
        free: [
          "YouTube: DesignCourse, Flux",
          "Blogs: UX Planet, Smashing Magazine",
          "Free Figma tutorials"
        ],
        paid: [
          "Udemy: Complete UI/UX Bootcamp",
          "Coursera: Google UX Design Certificate",
          "Interaction Design Foundation"
        ]
      }
    },
    "Frontend Developer": {
      requiredSkills: ["JavaScript", "React", "HTML", "CSS"],
      matchingInterests: ["Software Development", "Engineering"],
      matchScore: 0,
      salary: {
        entry: "₹4-8 LPA",
        mid: "₹8-15 LPA",
        senior: "₹15-30 LPA"
      },
      roadmap: {
        beginner: [
          "HTML5 & CSS3 fundamentals",
          "JavaScript basics",
          "Responsive design principles",
          "Git & version control"
        ],
        intermediate: [
          "React.js framework",
          "State management (Redux)",
          "API integration",
          "Build tools (Webpack, Vite)"
        ],
        advanced: [
          "Advanced React patterns",
          "Performance optimization",
          "Testing (Jest, React Testing Library)",
          "Real-world project building"
        ]
      },
      resources: {
        free: [
          "freeCodeCamp.org",
          "MDN Web Docs",
          "YouTube: Traversy Media, The Net Ninja"
        ],
        paid: [
          "Udemy: React Complete Guide",
          "Frontend Masters",
          "Pluralsight"
        ]
      }
    },
    "Product Designer": {
      requiredSkills: ["UI/UX Design", "Project Management", "Creativity", "Design"],
      matchingInterests: ["Design", "Business", "Engineering"],
      matchScore: 0,
      salary: {
        entry: "₹5-8 LPA",
        mid: "₹8-18 LPA",
        senior: "₹18-35 LPA"
      },
      roadmap: {
        beginner: [
          "Product thinking basics",
          "Design fundamentals",
          "User research introduction",
          "Problem-solving frameworks"
        ],
        intermediate: [
          "Product strategy & vision",
          "Stakeholder management",
          "Design systems & collaboration",
          "Data-driven design decisions"
        ],
        advanced: [
          "Product roadmap planning",
          "Cross-functional leadership",
          "Product metrics & analytics",
          "End-to-end product lifecycle"
        ]
      },
      resources: {
        free: [
          "Medium: Product Design articles",
          "YouTube: AJ&Smart, Product Design",
          "Designer Hangout community"
        ],
        paid: [
          "Product School courses",
          "IDEO U: Design Thinking",
          "General Assembly Bootcamp"
        ]
      }
    },
    "Data Analyst": {
      requiredSkills: ["Data Analysis", "SQL", "Excel", "Python"],
      matchingInterests: ["Data Science", "Business", "Finance"],
      matchScore: 0,
      salary: {
        entry: "₹3-7 LPA",
        mid: "₹7-15 LPA",
        senior: "₹15-28 LPA"
      },
      roadmap: {
        beginner: [
          "Excel advanced functions",
          "SQL basics & queries",
          "Data visualization introduction",
          "Statistical fundamentals"
        ],
        intermediate: [
          "Python for data analysis (Pandas)",
          "Data visualization tools (Tableau, Power BI)",
          "Statistical analysis methods",
          "Database management"
        ],
        advanced: [
          "Advanced analytics & modeling",
          "Machine learning basics",
          "Business intelligence",
          "Real-world analytics projects"
        ]
      },
      resources: {
        free: [
          "Kaggle Learn courses",
          "YouTube: Data analysis tutorials",
          "Google Data Analytics Certificate (audit)"
        ],
        paid: [
          "Coursera: IBM Data Analyst",
          "Udemy: Data Analysis with Python",
          "DataCamp subscription"
        ]
      }
    },
    "Digital Marketing Specialist": {
      requiredSkills: ["Marketing", "Digital Marketing", "Content Writing", "Communication"],
      matchingInterests: ["Marketing", "Business", "Sales"],
      matchScore: 0,
      salary: {
        entry: "₹2-5 LPA",
        mid: "₹5-12 LPA",
        senior: "₹12-25 LPA"
      },
      roadmap: {
        beginner: [
          "Marketing fundamentals",
          "Social media marketing basics",
          "Content creation basics",
          "SEO introduction"
        ],
        intermediate: [
          "Google Ads & Facebook Ads",
          "Content strategy development",
          "Analytics & reporting (Google Analytics)",
          "Email marketing campaigns"
        ],
        advanced: [
          "Marketing automation",
          "Advanced SEO & SEM",
          "Brand strategy & positioning",
          "Campaign optimization & scaling"
        ]
      },
      resources: {
        free: [
          "Google Digital Garage",
          "HubSpot Academy (free courses)",
          "YouTube: Marketing channels"
        ],
        paid: [
          "Google Ads Certification",
          "Facebook Blueprint",
          "Coursera: Digital Marketing Specialization"
        ]
      }
    }
  };

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

  // Career Recommendation Engine with Gemini AI
  const calculateCareerMatches = async () => {
    try {
      // Use Gemini AI to get career recommendations
      const geminiCareers = await geminiCareerPathRecommendation(
        selectedSkills,
        selectedInterests,
        experience
      );

      // Transform Gemini response to match our format
      const transformedCareers = geminiCareers.map(career => {
        // Find matching career in database for roadmap data, or create default structure
        const dbCareer = careerDatabase[career.name] || null;
        
        return {
          name: career.name,
          matchScore: career.matchScore || 75,
          requiredSkills: career.requiredSkills || [],
          matchingInterests: career.matchingInterests || [],
          salary: career.salary || {
            entry: "₹3-6 LPA",
            mid: "₹6-12 LPA",
            senior: "₹12-25 LPA"
          },
          description: career.description || "",
          // Use database roadmap if available, otherwise create basic structure
          roadmap: dbCareer?.roadmap || {
            beginner: [
              "Learn fundamentals of this career path",
              "Build basic skills and knowledge",
              "Start with introductory courses",
              "Practice with small projects"
            ],
            intermediate: [
              "Develop advanced skills",
              "Work on real-world projects",
              "Build a portfolio",
              "Network with professionals"
            ],
            advanced: [
              "Master advanced concepts",
              "Lead projects and teams",
              "Contribute to industry",
              "Mentor others"
            ]
          },
          resources: dbCareer?.resources || {
            free: [
              "Online tutorials and courses",
              "YouTube educational channels",
              "Free certification programs"
            ],
            paid: [
              "Professional certification programs",
              "Premium online courses",
              "Bootcamps and workshops"
            ]
          }
        };
      });

      // Sort by match score and return top 3-5
      return transformedCareers
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 5);
    } catch (error) {
      console.error("Gemini API error, falling back to local matching:", error);
      
      // Fallback to local matching if Gemini fails
      const matches = Object.keys(careerDatabase).map(careerName => {
        const career = careerDatabase[careerName];
        let score = 0;
        let totalPossible = 0;

        // Calculate skill match
        career.requiredSkills.forEach(skill => {
          totalPossible += 10;
          if (selectedSkills.includes(skill)) {
            score += 10;
          }
        });

        // Calculate interest match
        if (selectedInterests.some(interest => career.matchingInterests.includes(interest))) {
          score += 20;
          totalPossible += 20;
        } else {
          totalPossible += 20;
        }

        // Experience level bonus
        if (experience === "fresher" || experience === "student") {
          score += 5;
        }
        totalPossible += 5;

        const matchPercentage = Math.min(100, Math.round((score / totalPossible) * 100));
        
        return {
          name: careerName,
          ...career,
          matchScore: matchPercentage
        };
      });

      return matches
        .sort((a, b) => b.matchScore - a.matchScore)
        .filter(career => career.matchScore >= 30)
        .slice(0, 3);
    }
  };

  const handleMapCareer = async () => {
    if (selectedSkills.length === 0 || selectedInterests.length === 0 || !experience) {
      setError("Please select at least one skill, one interest, and your experience level");
      return;
    }
    
    setError("");
    setIsLoading(true);
    setCareerResults(null);

    try {
      const results = await calculateCareerMatches();
      setCareerResults(results);
      setCurrentStep("results");
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.message || "Failed to generate career matches. Please try again.");
      console.error("Career mapping error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    setCurrentStep("roadmap");
    window.scrollTo(0, 0);
  };

  const handleBackToResults = () => {
    setCurrentStep("results");
    setSelectedCareer(null);
  };

  const handleBackToInput = () => {
    setCurrentStep("input");
    setCareerResults(null);
    setSelectedCareer(null);
  };

  const handleDownloadRoadmap = () => {
    if (!selectedCareer) return;

    const roadmapContent = `
CAREER ROADMAP: ${selectedCareer.name}
Match Score: ${selectedCareer.matchScore}%

YOUR PROFILE:
- Experience Level: ${experience}
- Selected Skills: ${selectedSkills.join(", ")}
- Interests: ${selectedInterests.join(", ")}

SALARY INSIGHTS:
- Entry Level: ${selectedCareer.salary.entry}
- Mid Level: ${selectedCareer.salary.mid}
- Senior Level: ${selectedCareer.salary.senior}

BEGINNER LEVEL SKILLS:
${selectedCareer.roadmap.beginner.map(skill => `- ${skill}`).join("\n")}

INTERMEDIATE LEVEL SKILLS:
${selectedCareer.roadmap.intermediate.map(skill => `- ${skill}`).join("\n")}

ADVANCED LEVEL SKILLS:
${selectedCareer.roadmap.advanced.map(skill => `- ${skill}`).join("\n")}

FREE LEARNING RESOURCES:
${selectedCareer.resources.free.map(resource => `- ${resource}`).join("\n")}

PAID LEARNING RESOURCES:
${selectedCareer.resources.paid.map(resource => `- ${resource}`).join("\n")}

Generated by Hire Logic Career Mapper
`;

    const blob = new Blob([roadmapContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedCareer.name}_Roadmap.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // RENDER INPUT STEP
  if (currentStep === "input") {
    return (
      <section className="careermapper-section">
        <div className="careermapper-wrapper">
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
          <div className="careermapper-header">
            <span className="careermapper-tag">CAREER MAPPER</span>
            <h1>Map Your Career Path</h1>
            <p className="careermapper-subtitle">
              Select your skills and interests to discover personalized career paths
              tailored to your profile and goals.
            </p>
          </div>

          <div className="careermapper-content">
            <div className="mapper-card">
              <h3>Select Your Skills</h3>
              <p className="card-subtitle">Choose all skills that apply to you</p>
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

            <div className="mapper-card">
              <h3>What Are You Interested In?</h3>
              <p className="card-subtitle">Select areas that excite you</p>
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

            <div className="mapper-card">
              <h3>Experience Level</h3>
              <p className="card-subtitle">Tell us where you are in your career journey</p>
              <div className="experience-options">
                <button
                  className={`exp-option ${experience === "student" ? "active" : ""}`}
                  onClick={() => setExperience("student")}
                >
                  <span className="exp-icon">🎓</span>
                  <span className="exp-label">Student</span>
                </button>
                <button
                  className={`exp-option ${experience === "fresher" ? "active" : ""}`}
                  onClick={() => setExperience("fresher")}
                >
                  <span className="exp-icon">🌱</span>
                  <span className="exp-label">Fresher (0-2 years)</span>
                </button>
                <button
                  className={`exp-option ${experience === "mid" ? "active" : ""}`}
                  onClick={() => setExperience("mid")}
                >
                  <span className="exp-icon">🚀</span>
                  <span className="exp-label">Mid-Level (2-5 years)</span>
                </button>
                <button
                  className={`exp-option ${experience === "senior" ? "active" : ""}`}
                  onClick={() => setExperience("senior")}
                >
                  <span className="exp-icon">💼</span>
                  <span className="exp-label">Senior (5+ years)</span>
                </button>
              </div>
            </div>
          </div>

          <div className="careermapper-cta">
            {error && <div style={{ color: 'red', marginBottom: '1rem', padding: '0.5rem', background: '#ffe6e6', borderRadius: '4px', textAlign: 'center' }}>{error}</div>}
            <button 
              className="map-btn"
              onClick={handleMapCareer}
              disabled={selectedSkills.length === 0 || selectedInterests.length === 0 || !experience || isLoading}
            >
              {isLoading ? "🤖 AI is analyzing your profile..." : "🗺️ Map My Career Path"}
            </button>
            <p className="cta-hint">
              {isLoading 
                ? "Using AI to find the best career matches for you..."
                : selectedSkills.length === 0 || selectedInterests.length === 0 || !experience
                ? "Please select at least one skill, one interest, and your experience level"
                : `Ready to map ${selectedSkills.length} skill(s) and ${selectedInterests.length} interest(s)?`
              }
            </p>
          </div>

          <div className="careermapper-info">
            <div className="info-card">
              <div className="info-icon">🎯</div>
              <h4>Personalized Matching</h4>
              <p>Get career recommendations based on your unique skill set and interests</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📊</div>
              <h4>Skill Gap Analysis</h4>
              <p>Understand what skills you need to develop for your target career</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🚀</div>
              <h4>Growth Roadmap</h4>
              <p>Receive a step-by-step path to advance in your chosen career</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // RENDER RESULTS STEP
  if (currentStep === "results" && careerResults) {
    return (
      <section className="careermapper-section">
        <div className="careermapper-wrapper">
          <div className="careermapper-header">
            <button className="back-btn" onClick={handleBackToInput}>
              ← Back to Input
            </button>
            <span className="careermapper-tag">CAREER RECOMMENDATIONS</span>
            <h1>Your Career Matches</h1>
            <p className="careermapper-subtitle">
              Based on your skills and interests, here are the best career paths for you
            </p>
          </div>

          <div className="career-results">
            {careerResults.map((career, idx) => (
              <div key={idx} className="career-match-card">
                <div className="match-header">
                  <h2>{career.name}</h2>
                  <div className="match-score">
                    <span className="score-value">{career.matchScore}%</span>
                    <span className="score-label">Match</span>
                  </div>
                </div>
                
                {career.description && (
                  <div className="career-description" style={{ 
                    marginBottom: '1rem', 
                    padding: '1rem', 
                    background: 'rgba(59, 130, 246, 0.1)', 
                    borderRadius: '8px',
                    color: '#1e40af',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    <strong>🤖 AI Insight:</strong> {career.description}
                  </div>
                )}
                
                <div className="match-details">
                  <div className="salary-preview">
                    <strong>💰 Expected Salary Range:</strong>
                    <div className="salary-ranges">
                      <span>Entry: {career.salary.entry}</span>
                      <span>Mid: {career.salary.mid}</span>
                      <span>Senior: {career.salary.senior}</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="view-roadmap-btn"
                  onClick={() => handleSelectCareer(career)}
                >
                  View Complete Roadmap →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // RENDER ROADMAP STEP
  if (currentStep === "roadmap" && selectedCareer) {
    return (
      <section className="careermapper-section">
        <div className="careermapper-wrapper">
          <div className="careermapper-header">
            <button className="back-btn" onClick={handleBackToResults}>
              ← Back to Results
            </button>
            <span className="careermapper-tag">CAREER ROADMAP</span>
            <h1>{selectedCareer.name}</h1>
            <p className="careermapper-subtitle">
              Your step-by-step guide to becoming a {selectedCareer.name}
            </p>
          </div>

          <div className="roadmap-container">
            {/* SALARY INSIGHTS */}
            <div className="roadmap-section">
              <h2 className="section-title">💰 Expected Salary Insights</h2>
              <p className="salary-disclaimer">
                *Approximate ranges for educational purposes only. Actual salaries may vary.
              </p>
              <div className="salary-cards">
                <div className="salary-card">
                  <div className="salary-level">Entry Level</div>
                  <div className="salary-amount">{selectedCareer.salary.entry}</div>
                </div>
                <div className="salary-card">
                  <div className="salary-level">Mid Level</div>
                  <div className="salary-amount">{selectedCareer.salary.mid}</div>
                </div>
                <div className="salary-card">
                  <div className="salary-level">Senior Level</div>
                  <div className="salary-amount">{selectedCareer.salary.senior}</div>
                </div>
              </div>
            </div>

            {/* SKILL ROADMAP */}
            <div className="roadmap-section">
              <h2 className="section-title">🛣️ Skill Development Roadmap</h2>
              
              <div className="roadmap-levels">
                <div className="roadmap-level">
                  <div className="level-header beginner">
                    <span className="level-number">1</span>
                    <h3>Beginner Level</h3>
                  </div>
                  <ul className="skill-list">
                    {selectedCareer.roadmap.beginner.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="roadmap-level">
                  <div className="level-header intermediate">
                    <span className="level-number">2</span>
                    <h3>Intermediate Level</h3>
                  </div>
                  <ul className="skill-list">
                    {selectedCareer.roadmap.intermediate.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="roadmap-level">
                  <div className="level-header advanced">
                    <span className="level-number">3</span>
                    <h3>Advanced Level</h3>
                  </div>
                  <ul className="skill-list">
                    {selectedCareer.roadmap.advanced.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* LEARNING RESOURCES */}
            <div className="roadmap-section">
              <h2 className="section-title">📚 Learning Resources</h2>
              <p className="resource-note">
                *Website only suggests resources. No courses are sold here.
              </p>
              
              <div className="resources-grid">
                <div className="resource-category">
                  <h3>🆓 Free Resources</h3>
                  <ul className="resource-list">
                    {selectedCareer.resources.free.map((resource, idx) => (
                      <li key={idx}>{resource}</li>
                    ))}
                  </ul>
                </div>

                <div className="resource-category">
                  <h3>💳 Paid Resources (Optional)</h3>
                  <ul className="resource-list">
                    {selectedCareer.resources.paid.map((resource, idx) => (
                      <li key={idx}>{resource}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="roadmap-actions">
              <button className="download-btn" onClick={handleDownloadRoadmap}>
                💾 Download Roadmap as Text
              </button>
              <button className="start-over-btn" onClick={handleBackToInput}>
                🔄 Start Over with New Inputs
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default CareerMapper;
