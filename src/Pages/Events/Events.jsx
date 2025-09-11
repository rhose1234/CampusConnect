import React, { useEffect, useState } from "react";
import "./events.css";
import { CiBookmark } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";

import Countdown from "../../Components/Countdown.jsx";
import FilterSection from "../../Components/FilterSection.jsx";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [filters, setFilters] = useState({
    date: "",
    eventName: "",
    category: "",
  });

  useEffect(() => {
    fetch("/Data/EventListing.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch events");
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  // Toggle bookmark state
  const toggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  // Apply filters
  const filteredEvents = events.filter((event) => {
    const matchesDate = filters.date ? event.date === filters.date : true;
    const matchesName = filters.eventName
      ? event.title.toLowerCase().includes(filters.eventName.toLowerCase())
      : true;
    const matchesCategory = filters.category
      ? event.category === filters.category
      : true;

    return matchesDate && matchesName && matchesCategory;
  });

  return (
    <>
      {/* Hero section */}
      <div className="events">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
          <h1 className="text-white fw-bold fs-1">Explore Upcoming Events</h1>
          <p className="text-white text-sm w-50">
            A collection of upcoming events you can attend on campus, from
            cultural fests, sports events, workshops, and more.
          </p>
        </div>

        {/* Filter Section */}
        <div>
          <FilterSection onFilter={setFilters} />
        </div>
      </div>

      {/* Events listing */}
      <div className="event-listing container">
        <div className="section-header">
          <div className="left-header">
            <h2>
              Popular Events <span className="underline"></span>
            </h2>
            <p className="result-count">
              {filteredEvents.length} Events Found
            </p>
          </div>
        </div>
      </div>

      {/* Event cards */}
      <div className="events-list container">
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-image">
              <img src={event.image} alt={event.title} />
              <span className="days-tag">
                <Countdown date={event.date} />
              </span>
            </div>

            <div className="event-details">
              <h3>{event.title}</h3>
              <p className="desc">{event.description}</p>
              <p className="location">
                <IoLocationOutline /> {event.venue}
              </p>
              <p className="date-time">
                <LuCalendarDays /> {event.date}, {event.time}
              </p>

              <div className="event-footer">
                <span className="tag">{event.price || "Free"}</span>
                <motion.button
                  className="bookmark"
                  onClick={() => toggleBookmark(event.id)}
                  whileTap={{ scale: 1.3 }}
                >
                  {bookmarks.includes(event.id) ? (
                    <FaBookmark color="#f05537" />
                  ) : (
                    <CiBookmark />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
