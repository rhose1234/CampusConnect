import React, { useState, useEffect } from "react";
import FilterSection from "../Components/FilterSection";
import UpcomingEvents from "../Components/UpcomingEvents";
import { TfiLocationPin } from "react-icons/tfi";
import { FaHandshake } from "react-icons/fa6";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiGlassCelebration } from "react-icons/gi";




import "./Homepage.css";
import LatestNews from "../Components/LatestNews/LatestNews";
import { Link } from "react-router-dom";

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
    <>
    <div className="home-page position-relative">
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="">Don’t Miss Out on Campus Life!</h1>
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

    <div className="featureSection py-5"> 
    <div className="container">
       <div className="row  mx-auto g-4 align-items-center">
        <div className="col-12 col-md-6 mt-5">
          <h1 className="fw-bold text-black">No.1 in college Events Management</h1>
        <p className="mt-4">Campus connect has been in existence ever since the it was observeed that campus students have issues attending event cause thay are not informed
          </p>
          <Link to="/about">
          <button className="mt-2">Learn More</button>
          </Link>
        </div>

          <div class="row col-12 col-md-6 bg-white m-0 p-0 mt-5">
          <div class="feature col-6 flex-column align-items-center text-center justify-content-center py-4">
            <TfiLocationPin className="icon"/>
            <p className="">Perfect Venue</p>
          </div>
          <div class="feature col-6 flex-column align-items-center text-center justify-content-center py-4">
          <FaHandshake className="icon" />
            <p>Unforgettable Time</p>
          </div>
          <div class="feature col-6 flex-column align-items-center text-center justify-content-center py-4">
          <RiLightbulbFlashLine  className="icon"/>
            <p>Brilliant Idea</p>
          </div>
          <div class="feature col-6 flex-column align-items-center text-center justify-content-center py-4">
            <GiGlassCelebration className="icon"/>
            <p>Fun & Enjoyment</p>
          </div>
        </div>

       </div>

    </div>
    </div>
    
    <LatestNews />
    </>
  );
}