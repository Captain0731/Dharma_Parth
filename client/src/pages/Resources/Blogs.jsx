import React from "react";
import { useNavigate } from "react-router-dom";
import "./blogs.css";

import news1 from "../../assets/news1.jpg";
import news2 from "../../assets/news2.jpg";
import news3 from "../../assets/news3.jpg";

const blogPosts = [
  {
    image: news1,
    date: "January 15, 2024",
    title: "How to achieve financial independence through Hire Logic",
    desc:
      "Hire Logic is a platform that connects job seekers with employers and helps them grow faster.",
  },
  {
    image: news2,
    date: "January 10, 2024",
    title: "The most popular cities for homebuyers",
    desc:
      "Discover top cities offering the best job opportunities and lifestyle balance.",
  },
  {
    image: news3,
    date: "January 5, 2024",
    title: "Learn how Hire Logic really shapes our future",
    desc:
      "See how smart career decisions can shape your professional journey.",
  },
  {
    image: news1,
    date: "December 28, 2023",
    title: "How to get a job using Hire Logic",
    desc:
      "Step-by-step guide to land your dream job faster using Hire Logic tools.",
  },
  {
    image: news2,
    date: "December 20, 2023",
    title: "Career planning made simple",
    desc:
      "Learn how to plan long-term career growth with clarity and confidence.",
  },
  {
    image: news3,
    date: "December 15, 2023",
    title: "Why skill-based hiring is the future",
    desc:
      "Understand how skills matter more than degrees in modern hiring.",
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  
  return (
    <section className="blogs-section">
      <div className="blogs-wrapper">
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
        {/* HEADER */}
        <div className="blogs-header">
          <span className="blogs-tag">HIRE LOGIC</span>
          <h1>Blogs & Insights</h1>
          <p className="blogs-subtitle">
            Stay updated with the latest trends, tips, and insights from Hire Logic
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="blogs-grid">
          {blogPosts.map((blog, index) => (
            <article className="blog-card" key={index}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <span className="blog-category">HIRE LOGIC</span>
              </div>

              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <a href="#" className="blog-link">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="blogs-cta">
          <div className="cta-glass-card">
            <h2>Want More Career Insights?</h2>
            <p>
              Subscribe to our newsletter and receive weekly job tips, trends,
              and career advice.
            </p>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Subscribe →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
