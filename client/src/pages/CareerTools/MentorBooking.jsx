import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mentorBooking.css";

const MentorBooking = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const mentors = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Senior Frontend Architect",
      company: "Google",
      experience: "12+ years",
      rating: 4.9,
      reviews: 234,
      price: "₹2,500",
      category: "frontend",
      specialties: ["React", "Next.js", "TypeScript"],
      availability: "Available",
      image: "👨‍💻"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "UX Design Lead",
      company: "Microsoft",
      experience: "10+ years",
      rating: 4.8,
      reviews: 189,
      price: "₹2,000",
      category: "design",
      specialties: ["UI/UX", "Figma", "Design Systems"],
      availability: "Available",
      image: "👩‍🎨"
    },
    {
      id: 3,
      name: "Amit Patel",
      title: "Data Science Manager",
      company: "Amazon",
      experience: "8+ years",
      rating: 4.9,
      reviews: 156,
      price: "₹3,000",
      category: "data",
      specialties: ["Python", "ML", "Data Analysis"],
      availability: "Available",
      image: "👨‍🔬"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      title: "Product Manager",
      company: "Flipkart",
      experience: "9+ years",
      rating: 4.7,
      reviews: 201,
      price: "₹2,500",
      category: "product",
      specialties: ["Product Strategy", "Roadmapping"],
      availability: "Available",
      image: "👩‍💼"
    },
    {
      id: 5,
      name: "Vikram Singh",
      title: "Full Stack Engineer",
      company: "Netflix",
      experience: "11+ years",
      rating: 4.8,
      reviews: 178,
      price: "₹2,800",
      category: "fullstack",
      specialties: ["Node.js", "React", "AWS"],
      availability: "Available",
      image: "👨‍💻"
    },
    {
      id: 6,
      name: "Anjali Mehta",
      title: "Career Coach",
      company: "Independent",
      experience: "15+ years",
      rating: 4.9,
      reviews: 312,
      price: "₹1,500",
      category: "career",
      specialties: ["Resume Review", "Interview Prep"],
      availability: "Available",
      image: "👩‍🏫"
    }
  ];

  const categories = [
    { id: "all", name: "All Mentors" },
    { id: "frontend", name: "Frontend" },
    { id: "design", name: "Design" },
    { id: "data", name: "Data Science" },
    { id: "product", name: "Product" },
    { id: "fullstack", name: "Full Stack" },
    { id: "career", name: "Career Guidance" }
  ];

  const filteredMentors = selectedCategory === "all"
    ? mentors
    : mentors.filter(m => m.category === selectedCategory);

  const handleBookSession = (mentor) => {
    setSelectedMentor(mentor);
    setShowBookingForm(true);
  };

  return (
    <section className="mentor-booking-section">
      <div className="mentor-booking-wrapper">
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
        <div className="mentor-booking-header">
          <span className="mentor-booking-tag">1-TO-1 SESSIONS</span>
          <h1>Mentor Booking System</h1>
          <p className="mentor-booking-subtitle">
            Browse verified mentors and book personalized 1-to-1 sessions for resume review and career guidance
          </p>
        </div>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mentors-grid">
          {filteredMentors.map(mentor => (
            <div key={mentor.id} className="mentor-card">
              <div className="mentor-header">
                <div className="mentor-avatar">{mentor.image}</div>
                <div className="mentor-info">
                  <h3>{mentor.name}</h3>
                  <p className="mentor-title">{mentor.title}</p>
                  <p className="mentor-company">{mentor.company}</p>
                </div>
              </div>

              <div className="mentor-stats">
                <div className="stat-item">
                  <span className="stat-value">{mentor.experience}</span>
                  <span className="stat-label">Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">⭐ {mentor.rating}</span>
                  <span className="stat-label">{mentor.reviews} Reviews</span>
                </div>
              </div>

              <div className="mentor-specialties">
                <strong>Specializes in:</strong>
                <div className="specialties-list">
                  {mentor.specialties.map((spec, idx) => (
                    <span key={idx} className="specialty-tag">{spec}</span>
                  ))}
                </div>
              </div>

              <div className="mentor-footer">
                <div className="mentor-price">
                  <span className="price-amount">{mentor.price}</span>
                  <span className="price-label">/session</span>
                </div>
                <button
                  className="book-btn"
                  onClick={() => handleBookSession(mentor)}
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {showBookingForm && selectedMentor && (
          <div className="booking-modal">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setShowBookingForm(false)}>×</button>
              <h2>Book Session with {selectedMentor.name}</h2>
              <form className="booking-form">
                <div className="form-group">
                  <label>Select Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Select Time</label>
                  <select required>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Session Type</label>
                  <select required>
                    <option>Resume Review</option>
                    <option>Career Direction</option>
                    <option>Technical Guidance</option>
                    <option>Interview Prep</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Your Message (Optional)</label>
                  <textarea rows="4" placeholder="Tell your mentor what you'd like to discuss..."></textarea>
                </div>
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={() => setShowBookingForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="confirm-btn">
                    Confirm Booking - {selectedMentor.price}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MentorBooking;

