import React, { useState } from "react";
import "./Homepage.css";
import FilterSection from "../Components/FilterSection";
import UpcomingEvents from "../Components/UpcomingEvents";

export default function Homepage() {
  const [filters, setFilters] = useState({
    date: "",
    eventName: "",
    category: "",
  });

  return (
    <div className="home-page position-relative">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>CAMPUS EVENTS</h1>
          <button className="explore-btn">Stay updated, Stay involved</button>
        </div>
          <FilterSection onFilter={setFilters} />
      </section>

      {/* FILTER SECTION - only one here */}
    

      {/* UPCOMING EVENTS - filters passed down */}
      <UpcomingEvents filters={filters} />
    </div>
  );
}
