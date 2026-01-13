import React from "react";
import "./contactGlass.css";

const ContactGlass = () => {
  return (
    <section className="cg-section">
      {/* decorative blob */}
      <div className="cg-blob" />

      <div className="cg-wrapper">
        {/* HEADING */}
        <h2>Get Career Guidance & Clarity</h2>

        {/* SUBTITLE */}
        <p className="cg-subtitle">
          Not sure which career path fits you best?
          Share your goals and confusion, and get expert guidance to make
          confident, data-driven career decisions.
        </p>

        {/* FORM */}
        <form className="cg-form">
          <div className="cg-row">
            <div className="cg-field">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="cg-field">
              <label>Email Address</label>
              <input type="email" placeholder="john.doe@example.com" />
            </div>
          </div>

          <div className="cg-field">
            <label>Career Goal / Area of Interest</label>
            <input
              type="text"
              placeholder="e.g. Frontend Development, Data Science, UI/UX Design"
            />
          </div>

          <div className="cg-field">
            <label>Tell us about your skills or confusion</label>
            <textarea
              placeholder="I know basic programming but I am confused between frontend and backend. I want a clear career roadmap..."
            />
          </div>

          <button className="cg-btn">
            GET CAREER GUIDANCE <span>➜</span>
          </button>
        </form>

        {/* FOOTER INFO */}
        <div className="cg-footer">
          <span>123 Main St, Anytown, USA</span>
          <span>+91 90000 00000</span>
          <strong>guidance@careermapper.ai</strong>
        </div>
      </div>
    </section>
  );
};

export default ContactGlass;
