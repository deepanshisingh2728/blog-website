import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaInfoCircle, FaEnvelope, FaBars, FaMoon, FaSun } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ toggleTheme, isLight }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""} ${isLight ? "light" : "dark"}`}>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isLight ? <FaMoon /> : <FaSun />}
        </button>
        <Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link>
        <Link to="/add" onClick={toggleSidebar}><FaPlus /> Add Post</Link>
        <Link to="/about" onClick={toggleSidebar}><FaInfoCircle /> About</Link>
        <Link to="/contact" onClick={toggleSidebar}><FaEnvelope /> Contact</Link>
      </div>
    </>
  );
};

export default Sidebar;
