import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FeedbackSuccess from "./Components/FeedbackSucess";
import Homepage from "./Pages/Homepage/Homepage";
import Events from "./Pages/Events/Events";
import Bookmarks from "./Pages/Bookmark/Bookmark";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import Footer from "./Components/Footer";
import Feedback from "./Pages/Feedback/Feedback";
import Register from "./Pages/Register";
import About from "./Pages/About/About";
export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/Data/EventListing.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedEvents")) || [];
    setBookmarks(stored);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          index
          element={
            <Homepage bookmarks={bookmarks} setBookmarks={setBookmarks} />
          }
        />

        <Route
          path="/events"
          element={
            <Events
              events={events}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          }
        />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/bookmarks"
          element={<Bookmarks events={events} bookmarks={bookmarks} />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/feedback-success" element={<FeedbackSuccess />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}
