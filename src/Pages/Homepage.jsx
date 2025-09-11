import React, { useState, useEffect } from "react";
import FilterSection from "../Components/FilterSection";
import UpcomingEvents from "../Components/UpcomingEvents";
import "./Homepage.css";

export default function Homepage({ bookmarks, setBookmarks }) {
  const [filters, setFilters] = useState({ date: "", eventName: "", category: "" });
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/Data/EventListing.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  // Toggle bookmark and store in localStorage
  const toggleBookmark = (id) => {
    const updated = bookmarks.includes(id)
      ? bookmarks.filter((b) => b !== id)
      : [...bookmarks, id];
    setBookmarks(updated);
    localStorage.setItem("bookmarkedEvents", JSON.stringify(updated));
  };

  return (
    <div className="home-page position-relative">
      <section className="hero">
        <div className="hero-overlay">
          <h1>CAMPUS EVENTS</h1>
          <button className="explore-btn">Stay updated, Stay involved</button>
        </div>
        <FilterSection onFilter={setFilters} />
      </section>

      <UpcomingEvents
        events={events}
        filters={filters}
        bookmarks={bookmarks}
        toggleBookmark={toggleBookmark}
      />
    </div>
  );
}
