import React from "react";
import './FeedbackSucsess.css'

export default function FeedbackSuccess() {
  return (
    <div className="success-page">
      <img src="https://i.postimg.cc/KjvCCQ9c/done-removebg-preview.png" alt="Success" />
      <h1>Thank You!</h1>
      <p>Your feedback has been submitted successfully.</p>
      <button onClick={() => window.location.href = "/"}>
        Go Back
      </button>
    </div>
  );
}
