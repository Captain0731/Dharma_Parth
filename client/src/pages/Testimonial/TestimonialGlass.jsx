import React, { useState } from "react";
import "./testimonialGlass.css";

import peopleImg from "../../assets/testimonial.jpg"; // new image
import avatar from "../../assets/avatar.jpg";

const testimonials = [
  {
    name: "Kamila Anderson",
    location: "Frontend Developer Aspirant",
    text:
      "I was confused about whether I should continue with frontend or move into UI/UX. This platform gave me a clear roadmap and helped me understand what skills I actually need to focus on.",
    image: avatar,
  },
  {
    name: "John Smith",
    location: "Career Switcher (Mechanical → Tech)",
    text:
      "Instead of random advice, I got structured guidance. The skill roadmap made my learning focused and removed a lot of confusion about my next steps.",
    image: avatar,
  },
  {
    name: "Priya Patel",
    location: "Final Year Student",
    text:
      "This platform helped me understand which career paths fit my interests. The clarity I got here saved months of trial and error.",
    image: avatar,
  },
  {
    name: "Alex Lee",
    location: "Self-Taught Developer",
    text:
      "The roadmap and readiness insights showed me where I stand and what to improve. It feels like a personal career mentor.",
    image: avatar,
  },
];

const TestimonialGlass = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((current + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="tg-section">
      <div className="tg-wrapper">

        {/* LEFT CONTENT */}
        <div className="tg-content">
          <h2>What users say</h2>
          <h3>Career Clarity Experience</h3>

          <blockquote>
            “{testimonials[current].text}”
          </blockquote>

          <div className="tg-user">
            <img src={testimonials[current].image} alt="user" />
            <div>
              <strong>{testimonials[current].name}</strong>
              <span>{testimonials[current].location}</span>
            </div>
          </div>

          <div className="tg-dots">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={current === idx ? "active" : ""}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>

          <div className="tg-arrows">
            <button onClick={prevTestimonial} aria-label="Previous testimonial">
              ←
            </button>
            <button onClick={nextTestimonial} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="tg-image">
          <img src={peopleImg} alt="Career guidance" />
        </div>

      </div>
    </section>
  );
};

export default TestimonialGlass;
