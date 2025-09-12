import React, { useState } from "react";
import "./FilterSection.css";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";



const FilterSection = ({ onFilter }) => {
  const [date, setDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    onFilter({ date, eventName, category });
  };

  const handleReset = () => {
    setDate("");
    setEventName("");
    setCategory("");
    onFilter({ date: "", eventName: "", category: "" }); 
  };

  return (
    <div className="filter-box">
      {/* Date */}
      <div className="filter-items">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Event Name */}
      <div className="filter-items">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="filter-items">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Technical">Technical</option>
          <option value="Cultural">Cultural</option>
          <option value="Sports">Sports</option>
          <option value="Academic">Academic</option>
        </select>
      </div>

      {/* Apply Filter Button */}
      <button className="filter-btn" onClick={handleFilter}>
        <CiFilter className="icon" />
      </button>

      {/* Reset Button */}
      <span className="reset-btn" onClick={handleReset}>
        <GrPowerReset />

      </span>
    </div>
  );
};

export default FilterSection;