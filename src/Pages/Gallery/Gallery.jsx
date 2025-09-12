import React, { useState, useEffect } from "react";
import firstCarousel from "../../assets/images/firstcarousel.png";
import secCarousel from "../../assets/images/seccarousel.png";
import thirdCarousel from "../../assets/images/thirdcarousel.png";
import "./Gallery.css";

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    fetch("../public/Data/Gallery.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load Gallery.json");
        }
        return response.json();
      })
      .then((data) => {
        setGalleryData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const carouselImages = [firstCarousel, secCarousel, thirdCarousel];

 
  const filteredData = galleryData.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchYear =
      selectedYear === "All" || item.year.toString() === selectedYear;
    return matchCategory && matchYear;
  });

  return (
    <div className="gallery-page">
      
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Campus Moments</h1>
          <p className="hero-subtitle">
            A collection of unforgettable memories from cultural fests, sports
            events, workshops, and more.
          </p>
        </div>
      </section>

      
      <section className="carousel-section" style={{ overflow: "hidden" }}>
        <div
          className="carousel-track"
          style={{
            display: "flex",
            width: `${carouselImages.length * 2 * 320}px`,
            animation: "scroll 10s linear infinite",
          }}
        >
          {[...carouselImages, ...carouselImages].map((img, idx) => (
            <div
              className="carousel-card"
              key={idx}
              style={{
                minWidth: "300px",
                marginRight: "20px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                height: "200px",
                flexShrink: 0,
              }}
            >
              <img
                src={img}
                alt={`Campus Moment ${idx + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </section>

      
      <section className="filter-sec">
        <h2 className="filter-title">
          <i className="fas fa-filter"></i> Search by:
        </h2>
        <div className="filter-controls">
          <div className="filter-items">
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Departmental">Departmental</option>
            </select>
          </div>

          <div className="filter-items">
            <label>Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="All">All Years</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
        </div>
      </section>

      
      <section className="grid-gallery">
        {isLoading ? (
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Loading moments...</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="no-results">
            <i className="fas fa-inbox"></i>
            <h3>No events found</h3>
            <p>Try changing your category</p>
          </div>
        ) : (
          filteredData.map((event, idx) => (
            <div className="gallery-card" key={idx}>
              <img
                src={event.image}
                alt={event.title}
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="event-category">{event.category}</span>
                <h3>{event.title}</h3>
                <p className="event-date">{event.year}</p>
              </div>
            </div>
          ))
        )}
      </section>
      
      {filteredData.length > 0 && (
        <div className="view-more-container">
          <button className="view-more-btn">Load More</button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
