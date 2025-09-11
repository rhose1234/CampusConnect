import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Events from "./Pages/Events/Events";
import Bookmarks from "./Pages/Bookmark/Bookmark";

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
        <Route
          path="/events"
          element={<Events events={events} bookmarks={bookmarks} setBookmarks={setBookmarks} />}
        />
        <Route
          path="/bookmarks"
          element={<Bookmarks events={events} bookmarks={bookmarks} />}
        />
      </Routes>
    </>
  );
}
