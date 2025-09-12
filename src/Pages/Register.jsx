import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    navigate("/"); 
  };

  return (
    <div className="register-page">
      {/* Hero Section */}
      <section className="register-hero">
        <div className="overlay">
          <h1 className="fw-bold">Get Registered ahead of time</h1>
          <p>
            Join us for an exciting experience at Campus Connect!  
            Fill out the form below to secure your spot.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="register-form-section">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="fw-bold">Register</h2>
          <p className="form-note">Please provide the requirements*</p>

          <input type="text" name="name" placeholder="Name*" required />
          <input type="text" name="department" placeholder="Department*" required />

          
          
          <input type="date" id="date" name="date" required />

          <input type="email" name="email" placeholder="E-mail Address*" required />

          <select name="category" required>
            <option value="">Select Category*</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="visitor">Visitor</option>
          </select>

          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>
      </section>

     
    </div>
  );
};

export default Register;
