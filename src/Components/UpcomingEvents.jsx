import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "./UpcomingEvents.css";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn, CiBookmark } from "react-icons/ci";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

const UpcomingEvents = ({ filters }) => {
  const [events, setEvents] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("/Data/EventListing.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch events");
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  const toggleBookmark = (id) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const filteredEvents = events.filter((event) => {
    const matchDate = filters.date ? event.date === filters.date : true;
    const matchName = filters.eventName
      ? event.title.toLowerCase().includes(filters.eventName.toLowerCase())
      : true;
    const matchCategory = filters.category
      ? event.category === filters.category
      : true;
    return matchDate && matchName && matchCategory;
  });

  const sliderSettings = {
    dots: true,
    infinite: filteredEvents.length > 3,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const daysToGo = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    const diffTime = eventDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="upcoming-events">
      {/* HEADER */}
      <div className="section-header">
        <div className="left-header">
          <h2>
            Upcoming Events
            <span className="underline"></span>
          </h2>
          <span className="result-count">
            {filteredEvents.length} items found
          </span>
        </div>

        <div className="arrow-controls">
          <button
            className="arrow prev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <MdArrowBackIosNew />
          </button>
          <button
            className="arrow next"
            onClick={() => sliderRef.current.slickNext()}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      {filteredEvents.length > 0 ? (
        <Slider ref={sliderRef} {...sliderSettings}>
          {filteredEvents.map((event, i) => (
            <motion.div
              className="event-card"
              key={event.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
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
                  <CiLocationOn /> {event.venue}
                </p>
                <p className="date-time">
                  <SlCalender /> {event.date}, {event.time}
                </p>
                <div className="event-footer">
                  <span className="tag">Free</span>
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
            </motion.div>
          ))}
        </Slider>
      ) : (
        <p className="no-events">No events match your filters.</p>
      )}

      {/* SEE MORE */}
      <div className="see-more">
        <button>See More</button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
