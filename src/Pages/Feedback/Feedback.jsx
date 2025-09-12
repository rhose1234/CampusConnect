import React from "react";
import "./Feedback.css";
import { FaBug } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export default function Feedback() {
  const navigate = useNavigate();

const [rating, setRating] = React.useState(0);
 const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    fetch("https://formspree.io/f/xvgbyobw", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        navigate("/feedback-success");
      } else {
        alert("There was a problem submitting your feedback.");
      }
    });
  };

  return (
    <div className="feedback-page">
      {/* Hero Section */}
      <section
        className="hero-feedback"
        style={{ backgroundImage: `url(https://i.postimg.cc/LsQpzytM/unsplash-OEj-A8vk-HSFY.png)` }}
      >
        <div className="hero-content">
          <h1>Help Us Improve</h1>
          <p className="hero-subtext">
            Join us for an exciting experience at campus connect Fill out the form below to secure your spot.
          </p>
          <p className="hero-subtext-small">
            Please take a moment to share your thoughts with us.
          </p>
        </div>
      </section>

      <section className="feedback-intro">
        <div className="intro-content">
          <h2>We Want to Hear From You!</h2>
          <p>Your feedback is crucial in helping us enhance our events and services.</p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="feedback-cards-section">
        <div className="cards-container">
          <div className="feedback-card">
            <FaBug style={{ color: "#f05537", fontSize: "20px" }} />
            <h3>Report Bugs?</h3>
            <p>Found something broken.</p>
          </div>
          <div className="feedback-card">
            <MdFeedback style={{ color: "#f05537", fontSize: "20px" }} />
            <h3>General feedback</h3>
            <p>Share your thoughts how we can make improvements.</p>
          </div>
          <div className="feedback-card">
           <MdFeedback style={{ color: "#f05537", fontSize: "20px" }} />
            <h3>Request Features</h3>
            <p>Have idea for improvements . share your thoughts with us.</p>
          </div>
        </div>
      </section>

    
<section className="feedback-form-section">
  <div className="form-container">
    <h2>Share Your Feedback</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-row flex-row">
        <div className="flex-item">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="flex-item">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>

      {/* Line 2: Event Attended (dropdown) */}
      <div className="form-row">
        <label htmlFor="event">Event Attended*</label>
        <select id="event" name="event" required>
          <option value="">Select Event</option>
          <option value="Cultural Fest">Cultural Fest</option>
          <option value="Technical Fest">Technical Fest</option>
          <option value="Sports Meet">Sports Meet</option>
        </select>
      </div>

      {/* Line 3: Feedback Type (dropdown) */}
      <div className="form-row">
        <label htmlFor="feedbackType">Feedback Type*</label>
        <select id="feedbackType" name="feedbackType" required>
          <option value="">Select Feedback Type</option>
          <option value="Report Bugs">Report Bugs</option>
          <option value="General Feedback">General Feedback</option>
          <option value="Request Features">Request Features</option>
        </select>
      </div>

      {/* Line 4: Rate Experience (Star Rating) */}
      <div className="form-row">
        <label>How would you rate your experience?</label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="star"
              onClick={() => setRating(star)}
            >
              {star <= rating ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>

      {/* Line 5: Message */}
      <div className="form-row">
        <label htmlFor="message">Message*</label>
        <textarea id="message" name="message" placeholder="Please provide detailed information about your feedback......" rows="7" required />
        <h5 style={{ textAlign: "left", color: "#999" , fontSize: "12px" , marginTop: "5px", padding: "0 10px" }}>0/1000 characters</h5>
      </div>

                <button type="submit" className="submit-btn">
            <span className="btn-text-icon">
                Submit Feedback <IoIosSend />
            </span>
</button>

    </form>
  </div>
</section>

    </div>
  );
}
