import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FeedbackSuccess from "./Components/FeedbackSucess";


import Events from "./Pages/Events/Events";
import Bookmarks from "./Pages/Bookmark/Bookmark"
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import About from './Pages/about/About'
import Footer from './Components/Footer'
import Feedback from "./Pages/Feedback/Feedback";



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
          element={<Homepage bookmarks={bookmarks} setBookmarks={setBookmarks} />}
        />
        <Route path="/about" element={<About/>}/>
      
      <Route
          path="/events"
          element={<Events events={events} bookmarks={bookmarks} setBookmarks={setBookmarks} />}
        />
        <Route
          path="/feedback"
          element={<Feedback />}
        />
        <Route
          path="/about"
          element={<About events={events} bookmarks={bookmarks} setBookmarks={setBookmarks} />}
        />
        <Route
          path="/bookmarks"
          element={<Bookmarks events={events} bookmarks={bookmarks} />}
        />

         <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<Gallery />} />

        <Route path="/feedback-success" element={<FeedbackSuccess />} />

      </Routes>
    <Footer />
    </>
  );
}
