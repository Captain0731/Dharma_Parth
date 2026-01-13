import React from "react";
import "./careerNews.css";

import img1 from "../../assets/news1.jpg";
import img2 from "../../assets/news2.jpg";
import img3 from "../../assets/news3.jpg";
import avatar from "../../assets/avatar.jpg";

const news = [
  {
    image: img1,
    tag: "CAREER INSIGHTS",
    tagClass: "joblytic",
    title: "How to choose the right career path based on your skills",
    desc:
      "Learn how skill assessment and interest mapping can help you make confident, data-driven career decisions instead of relying on guesswork.",
    author: "Career Mapper Team",
    date: "25 January 2024",
  },
  {
    image: img2,
    tag: "SKILL ROADMAP",
    tagClass: "listing",
    title: "Why a structured learning roadmap matters in 2024",
    desc:
      "Discover how following a clear skill roadmap saves time, reduces confusion, and accelerates career readiness in competitive industries.",
    author: "Career Mapper Team",
    date: "12 February 2024",
  },
  {
    image: img3,
    tag: "FUTURE CAREERS",
    tagClass: "joblytic",
    title: "Top in-demand career paths for the next 5 years",
    desc:
      "Explore high-growth career options, required skills, and future opportunities to plan your career with long-term clarity.",
    author: "Career Mapper Team",
    date: "13 March 2024",
  },
];

const CareerNews = () => {
  return (
    <section className="rng-section">
      <div className="rng-header">
        <h2>Latest Career Insights</h2>
        <p>
          Stay informed with expert insights, career planning guides, and
          roadmap strategies designed to help you make smarter career decisions.
        </p>
      </div>

      <div className="rng-grid">
        {news.map((item, index) => (
          <div className="rng-card" key={index}>
            <div className="rng-image">
              <img src={item.image} alt={item.title} />
            </div>

            <span className={`rng-tag ${item.tagClass}`}>
              {item.tag}
            </span>

            <h3>{item.title}</h3>
            <p className="rng-desc">{item.desc}</p>

            <div className="rng-author">
              <img src={avatar} alt="author" />
              <div>
                <strong>by {item.author}</strong>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerNews;
