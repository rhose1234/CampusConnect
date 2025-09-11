// src/Pages/Bookmarks/Bookmarks.jsx
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { BiSolidCategory } from "react-icons/bi";
import Countdown from "../../Components/Countdown";
import "./bookmarks.css"; // Create a new CSS file for Bookmarks styling

export default function Bookmarks({ events = [], bookmarks = [] }) {
  // Filter only bookmarked events
  const bookmarkedEvents = events.filter((event) =>
    bookmarks.includes(event.id)
  );

  return (
    <div className="bookmarks-page">
      {/* Hero Section */}
      <div className="bookmarks-hero">
        <div className="hero-content text-center">
          <h1>My Bookmarked Events</h1>
          <p>
            Here are all the events you’ve bookmarked. Keep track of them and
            never miss out!
          </p>
        </div>
      </div>

      {/* Bookmarks Listing */}
      <div className="bookmarks-container">
        {bookmarkedEvents.length === 0 ? (
          <p className="no-bookmarks">No bookmarked events yet!</p>
        ) : (
          <div className="bookmarks-list">
            {bookmarkedEvents.map((event) => (
              <div className="bookmark-card" key={event.id}>
                <div className="bookmark-image">
                  <img src={event.image} alt={event.title} />
                  <span className="countdown">
                    <Countdown date={event.date} />
                  </span>
                </div>

                <div className="bookmark-details">
                  <h3>{event.title}</h3>
                  <p className="bookmark-desc">{event.description}</p>

                  <div className="bookmark-info">
                    <span className="category">
                      <BiSolidCategory /> {event.category}
                    </span>
                    <span>
                      <IoLocationOutline /> {event.venue}
                    </span>
                    <span>
                      <LuCalendarDays /> {event.date}, {event.time}
                    </span>
                  </div>

                  <span className="price-tag">{event.price || "Free"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
