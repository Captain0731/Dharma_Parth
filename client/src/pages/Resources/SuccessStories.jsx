import React from "react";
import { useNavigate } from "react-router-dom";
import "./successStories.css";

const SuccessStories = () => {
  const navigate = useNavigate();
  return (
    <section className="successstories-section">
      <div className="successstories-wrapper">
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

        {/* HEADER */}
        <div className="successstories-header">
          <span className="successstories-tag">HIRE LOGIC</span>
          <h1>Success Stories from Real Careers</h1>
          <p className="successstories-subtitle">
            Real people. Real career clarity. Real growth journeys powered by Hire Logic.
          </p>
        </div>

        {/* STORIES GRID */}
        <div className="successstories-grid">

          {/* STORY 1 */}
          <div className="story-card">
            <div className="story-content">
              <div className="story-quote">“</div>
              <p className="story-text">
                I was completely confused after graduation. Hire Logic helped me
                understand which skills I already had and what I needed next.
                Within months, I had a clear roadmap and confidence about my career.
              </p>
              <div className="story-author">
                <div className="author-avatar">JS</div>
                <div className="author-info">
                  <div className="author-name">John Sharma</div>
                  <div className="author-title">Frontend Developer</div>
                </div>
              </div>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* STORY 2 */}
          <div className="story-card">
            <div className="story-content">
              <div className="story-quote">“</div>
              <p className="story-text">
                Instead of random courses, Hire Logic showed me a structured learning
                path. I finally understood *why* I was learning something and how
                it connected to my future role.
              </p>
              <div className="story-author">
                <div className="author-avatar">SP</div>
                <div className="author-info">
                  <div className="author-name">Sneha Patel</div>
                  <div className="author-title">UI/UX Designer</div>
                </div>
              </div>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* STORY 3 */}
          <div className="story-card">
            <div className="story-content">
              <div className="story-quote">“</div>
              <p className="story-text">
                Hire Logic helped me switch careers from mechanical engineering
                to data analytics. The skill-gap analysis and roadmap made the
                transition feel achievable instead of scary.
              </p>
              <div className="story-author">
                <div className="author-avatar">MK</div>
                <div className="author-info">
                  <div className="author-name">Manish Kumar</div>
                  <div className="author-title">Data Analyst</div>
                </div>
              </div>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* STORY 4 */}
          <div className="story-card">
            <div className="story-content">
              <div className="story-quote">“</div>
              <p className="story-text">
                I used to compare myself with others and felt lost. Hire Logic
                showed me my own strengths and a personalized path. That clarity
                changed everything.
              </p>
              <div className="story-author">
                <div className="author-avatar">AR</div>
                <div className="author-info">
                  <div className="author-name">Aditi Rao</div>
                  <div className="author-title">Product Manager</div>
                </div>
              </div>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* STORY 5 */}
          <div className="story-card">
            <div className="story-content">
              <div className="story-quote">“</div>
              <p className="story-text">
                Hire Logic didn't just suggest careers — it explained the logic
                behind them. That transparency helped me trust my decisions
                for the first time.
              </p>
              <div className="story-author">
                <div className="author-avatar">RK</div>
                <div className="author-info">
                  <div className="author-name">Rohit Kulkarni</div>
                  <div className="author-title">Backend Engineer</div>
                </div>
              </div>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          {/* STORY 6 */}
          <div className="story-card">
            <div className="story-content">
              <div className="story-quote">“</div>
              <p className="story-text">
                As a working professional, I needed direction — not motivation.
                Hire Logic gave me a clear next step and realistic expectations.
                That honesty is what sets it apart.
              </p>
              <div className="story-author">
                <div className="author-avatar">LT</div>
                <div className="author-info">
                  <div className="author-name">Lina Thomas</div>
                  <div className="author-title">QA Engineer</div>
                </div>
              </div>
              <div className="story-rating">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="successstories-cta">
          <div className="cta-glass-card">
            <h2>Your Career Story Starts Here</h2>
            <p>
              Stop guessing your future. Get clarity, confidence, and a clear
              roadmap — and become the next Hire Logic success story.
            </p>
            <button className="cta-btn">
              Start Career Mapping →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
