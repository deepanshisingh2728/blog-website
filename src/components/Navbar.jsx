import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">BlogZilla</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Post</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;