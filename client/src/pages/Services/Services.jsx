import React from "react";
import "./services.css";

const services = [
  {
    title: "Skill-Based Career Mapping",
    desc: "Analyze your current skills and interests to discover the most suitable career paths with clear match scores.",
    icon: "🧭",
  },
  {
    title: "Personalized Career Roadmaps",
    desc: "Get step-by-step learning roadmaps from beginner to job-ready for your selected career path.",
    icon: "🗺️",
  },
  {
    title: "Learning Resource Guidance",
    desc: "Access curated free and paid learning resources mapped directly to the skills you need to grow.",
    icon: "📚",
  },
  {
    title: "Resume & Profile Intelligence",
    desc: "Build and analyze your resume to understand career readiness and identify missing skill gaps.",
    icon: "📄",
  },
  {
    title: "Career Readiness Insights",
    desc: "Track your progress, skill completion, and readiness level for different career roles.",
    icon: "📊",
  },
  {
    title: "Career Mentorship & Guidance",
    desc: "Get expert guidance, career advice, and mentorship to make confident career decisions.",
    icon: "💡",
  },
];


const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
  <h2>Our Career Clarity Services</h2>
  <p>
    Smart Skill-to-Career Mapper helps students and professionals make
    data-driven career decisions by providing clear paths, structured
    roadmaps, and growth insights — all in one platform.
  </p>
</div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
