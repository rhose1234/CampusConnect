import React, { useState } from "react";
import "./events.css";
import { CiBookmark } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import Countdown from '../../Components/Countdown';
import { FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";
import FilterSection from "../../Components/FilterSection.jsx";
import { BiSolidCategory } from "react-icons/bi";

export default function Events({ events, bookmarks, setBookmarks }) {
  const [filters, setFilters] = useState({
    date: "",
    eventName: "",
    category: "",
  });

  // Toggle bookmark
  const toggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };


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
      
      <div className="events">
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <div className="event-overlay">
          <h1 className="text-white fw-bold fs-1">Explore Upcoming Events</h1>
          <p className="text-white text-center hero-subtitle">
            A collection of upcoming events you can attend on campus, from <br/>
            cultural fests, sports events, workshops, and more.
          </p>
          </div>
        </div>

        <FilterSection onFilter={setFilters} />
      </div>
      
      <div className="event-listing container">
        <div className="section-header">
          <div className="left-header">
            <h2>
              Popular Events <span className="underline"></span>
            </h2>
            <p className="result-count">{filteredEvents.length} Events Found</p>
          </div>
        </div>

        <div className="events-list">
          {filteredEvents.length === 0 ? (
            <p>No events found for the selected filters.</p>
          ) : (
            filteredEvents.map((event) => (
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
                    <BiSolidCategory /> {event.category}
                  </p>
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
            ))
          )}
        </div>
      </div>
    </>
  );
}
