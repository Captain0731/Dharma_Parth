import React from "react";
import "./servicesDetail.css";

const services = [
  {
    title: "Skill & Interest Assessment",
    desc: "Select your skills, interests, and learning preferences to understand where you currently stand.",
    icon: "🧠",
    color: "blue",
  },
  {
    title: "Career Match Analysis",
    desc: "Get best-fit career options based on skill compatibility, interest alignment, and growth potential.",
    icon: "🎯",
    color: "orange",
  },
  {
    title: "Personalized Roadmap",
    desc: "Receive a clear, step-by-step learning roadmap from foundation to industry readiness.",
    icon: "🗺️",
    color: "green",
  },
  {
    title: "Skill Building Phase",
    desc: "Learn the right skills in the correct order with time estimates and outcome clarity.",
    icon: "📚",
    color: "purple",
  },
  {
    title: "Career Readiness Check",
    desc: "Track progress, identify gaps, and understand how close you are to being job-ready.",
    icon: "📊",
    color: "pink",
  },
  {
    title: "Career Launch & Growth",
    desc: "Move forward with confidence using clear direction, mentorship options, and market insights.",
    icon: "🚀",
    color: "teal",
  },
];

const ServicesDetail = () => {
  return (
    <section className="ss-section">
      <div className="ss-wrapper">

        {/* LEFT TEXT */}
        <div className="ss-left">
          <h2>Career Planning Made Simple</h2>
          <p>
            Smart Skill-to-Career Mapper simplifies career decision-making by
            guiding you step by step — from understanding your skills to
            becoming career-ready with clarity and confidence.
          </p>
        </div>

        {/* RIGHT SERVICES */}
        <div className="ss-right">
          {services.map((item, index) => (
            <div className="ss-item" key={index}>
              <div className={`ss-icon ${item.color}`}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesDetail;
