import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./marketInsights.css";

const MarketInsights = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState("UI/UX Designer");
  const [selectedCity, setSelectedCity] = useState("all");

  const careers = [
    "UI/UX Designer",
    "Frontend Developer",
    "Data Analyst",
    "Product Manager",
    "Digital Marketer",
    "Full Stack Developer"
  ];

  const cities = [
    { id: "all", name: "All Cities" },
    { id: "bangalore", name: "Bangalore" },
    { id: "pune", name: "Pune" },
    { id: "mumbai", name: "Mumbai" },
    { id: "delhi", name: "Delhi NCR" },
    { id: "hyderabad", name: "Hyderabad" },
    { id: "chennai", name: "Chennai" },
    { id: "ahmedabad", name: "Ahmedabad" }
  ];

  const marketData = {
    "UI/UX Designer": {
      bangalore: { demand: "High", salary: "₹6-15 LPA", jobs: 1200, trend: "up" },
      pune: { demand: "Medium", salary: "₹5-12 LPA", jobs: 650, trend: "up" },
      mumbai: { demand: "High", salary: "₹7-16 LPA", jobs: 980, trend: "stable" },
      delhi: { demand: "Medium", salary: "₹5-13 LPA", jobs: 750, trend: "up" },
      hyderabad: { demand: "Growing", salary: "₹4-11 LPA", jobs: 420, trend: "up" },
      chennai: { demand: "Medium", salary: "₹4-10 LPA", jobs: 380, trend: "stable" },
      ahmedabad: { demand: "Growing", salary: "₹3-9 LPA", jobs: 280, trend: "up" }
    },
    "Frontend Developer": {
      bangalore: { demand: "Very High", salary: "₹8-18 LPA", jobs: 2100, trend: "up" },
      pune: { demand: "High", salary: "₹7-15 LPA", jobs: 1200, trend: "up" },
      mumbai: { demand: "High", salary: "₹8-17 LPA", jobs: 1500, trend: "stable" },
      delhi: { demand: "High", salary: "₹7-16 LPA", jobs: 1350, trend: "up" },
      hyderabad: { demand: "Medium", salary: "₹6-13 LPA", jobs: 850, trend: "up" },
      chennai: { demand: "Medium", salary: "₹5-12 LPA", jobs: 720, trend: "stable" },
      ahmedabad: { demand: "Growing", salary: "₹4-10 LPA", jobs: 450, trend: "up" }
    }
  };

  const getDemandColor = (demand) => {
    if (demand === "Very High" || demand === "High") return "#10b981";
    if (demand === "Medium") return "#f59e0b";
    if (demand === "Growing") return "#3b82f6";
    return "#6b7280";
  };

  const getTrendIcon = (trend) => {
    if (trend === "up") return "📈";
    if (trend === "down") return "📉";
    return "➡️";
  };

  const currentData = marketData[selectedCareer] || {};
  const displayCities = selectedCity === "all"
    ? Object.entries(currentData)
    : Object.entries(currentData).filter(([key]) => key === selectedCity);

  return (
    <section className="market-insights-section">
      <div className="market-insights-wrapper">
        <button 
          className="back-btn" 
          onClick={() => navigate(-1)}
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
        <div className="market-insights-header">
          <span className="market-insights-tag">INDIA FOCUSED</span>
          <h1>Local Job Market Insights</h1>
          <p className="market-insights-subtitle">
            Get city-wise job demand, skill heatmaps, and salary comparisons for your career path
          </p>
        </div>

        <div className="insights-controls">
          <div className="control-group">
            <label>Select Career</label>
            <select
              value={selectedCareer}
              onChange={(e) => setSelectedCareer(e.target.value)}
              className="career-select"
            >
              {careers.map(career => (
                <option key={career} value={career}>{career}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Filter by City</label>
            <div className="city-filters">
              {cities.map(city => (
                <button
                  key={city.id}
                  className={`city-filter-btn ${selectedCity === city.id ? "active" : ""}`}
                  onClick={() => setSelectedCity(city.id)}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="insights-content">
          <div className="insights-summary">
            <h2>Market Overview: {selectedCareer}</h2>
            <p>Based on current job market data across India</p>
          </div>

          <div className="city-insights-grid">
            {displayCities.map(([cityKey, data]) => {
              const cityName = cities.find(c => c.id === cityKey)?.name || cityKey;
              return (
                <div key={cityKey} className="city-card">
                  <div className="city-header">
                    <h3>{cityName}</h3>
                    <span className="trend-icon">{getTrendIcon(data.trend)}</span>
                  </div>

                  <div className="city-stats">
                    <div className="stat-card">
                      <div className="stat-label">Demand</div>
                      <div
                        className="stat-value demand"
                        style={{ color: getDemandColor(data.demand) }}
                      >
                        {data.demand}
                      </div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-label">Avg. Salary</div>
                      <div className="stat-value salary">{data.salary}</div>
                    </div>

                    <div className="stat-card">
                      <div className="stat-label">Active Jobs</div>
                      <div className="stat-value jobs">{data.jobs.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="demand-indicator">
                    <div
                      className="demand-bar"
                      style={{
                        width: data.demand === "Very High" ? "100%" :
                               data.demand === "High" ? "80%" :
                               data.demand === "Medium" ? "60%" : "40%",
                        background: getDemandColor(data.demand)
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skill-heatmap">
            <h2>Skill Demand Heatmap</h2>
            <div className="heatmap-grid">
              {["React", "JavaScript", "UI/UX", "Python", "Node.js", "Figma", "TypeScript", "AWS"].map(skill => (
                <div key={skill} className="heatmap-item">
                  <div className="skill-name">{skill}</div>
                  <div className="heatmap-bars">
                    {cities.slice(1).map(city => {
                      const intensity = Math.floor(Math.random() * 100);
                      return (
                        <div
                          key={city.id}
                          className="heatmap-bar"
                          style={{
                            height: `${intensity}%`,
                            background: intensity > 70 ? "#10b981" : intensity > 40 ? "#f59e0b" : "#e5e7eb"
                          }}
                          title={`${city.name}: ${intensity}%`}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="heatmap-legend">
              <span>High</span>
              <span>Medium</span>
              <span>Low</span>
            </div>
          </div>

          <div className="salary-comparison">
            <h2>Salary Comparison by Location</h2>
            <div className="comparison-chart">
              {Object.entries(currentData).map(([cityKey, data]) => {
                const cityName = cities.find(c => c.id === cityKey)?.name || cityKey;
                const salaryRange = data.salary.match(/\d+/g);
                const avgSalary = salaryRange ? (parseInt(salaryRange[0]) + parseInt(salaryRange[1])) / 2 : 0;
                const maxSalary = Math.max(...Object.values(currentData).map(d => {
                  const range = d.salary.match(/\d+/g);
                  return range ? (parseInt(range[0]) + parseInt(range[1])) / 2 : 0;
                }));

                return (
                  <div key={cityKey} className="comparison-item">
                    <div className="city-label">{cityName}</div>
                    <div className="salary-bar-container">
                      <div
                        className="salary-bar"
                        style={{ width: `${(avgSalary / maxSalary) * 100}%` }}
                      ></div>
                      <span className="salary-text">{data.salary}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;

