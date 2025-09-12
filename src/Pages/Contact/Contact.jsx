import React, { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    fetch("/Data/Contact.json")
      .then((res) => res.json())
      .then((data) => setOrganizers(data))
      .catch((err) => console.error("Error loading organizers:", err));
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="hero-subtitle">
          Have questions about campus events? <br/>Reach out to our coordinators for
          details, registrations, or support.
        </p>
      </header>

      <section className="organizers container mx-auto">
        <h1 className="fw-bold text-black">Meet the Organizers</h1>
        <div className="organizers-grid">
          {organizers.map((org, index) => (
            <div key={index} className="organizer-card py-3">
              <img src={org.image} alt={org.name} className="organizer-img" />
              <h3 className="fw-bold mt-1">{org.name}</h3>
              <p>{org.role}</p>
              {org.position && <p>{org.position}</p>}
              <p>{org.phone}</p>
              <p>{org.email}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
         <iframe
            title="campus-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.569299613605!2d3.9113760747618453!3d7.402059292607974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039935a78486a93%3A0xbe3af8ac89a888e8!2sAPTECH%20IBADAN%20AGODI!5e0!3m2!1sen!2snl!4v1757593200186!5m2!1sen!2snl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
