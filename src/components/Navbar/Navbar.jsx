import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from '../../assets/chem.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // 👇 Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="scrolling-text">
          🚚 Free shipping for UK, USA, European countries
        </div>
        <span>✉ info@exeluslabs.com</span>
        <span>☎ +91 79895 40212</span>
      </div>

      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><Link to="/Home" onClick={closeDropdown}>Home</Link></li>
          <li><Link to="/Products" onClick={closeDropdown}>Products</Link></li>

          <li className="dropdown" ref={dropdownRef}>
            <span className="dropdown-toggle" onClick={toggleDropdown}>
              Services
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li><Link to="/services" onClick={closeDropdown}>Custom
                Synthesis</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/About Us" onClick={closeDropdown}>About Us</Link></li>
          <li><Link to="/Contact Us" onClick={closeDropdown}>Contact Us</Link></li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search by name or CAS" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
