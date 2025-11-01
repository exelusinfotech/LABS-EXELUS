import React, { useState, useRef, useEffect, useContext } from "react";
import "./Navbar.css";
import logo from '../../assets/chem.png';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const search = searchTerm.toLowerCase().trim();

      if (!search) return;

      const match = products.find(
        (p) =>
          p.name.toLowerCase() === search ||
          (p.cas && p.cas.toLowerCase() === search)
      );

      if (match) {
        navigate(`/products/${match.code}`);
      } else {
        navigate(`/products?q=${encodeURIComponent(searchTerm)}`);
      }
      setSearchTerm('');
      closeMenu(); // Close mobile menu if open
    }
  };

  const handleMenuItemClick = () => {
    closeMenu();
    closeDropdown();
  };

  // Close dropdown when clicked outside
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

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="scrolling-wrapper">
          <div className="scrolling-text">
            🚚 Free shipping for UK, USA, European countries
          </div>
        </div>
        <div className="contact-info">
          <a href="mailto:info@exeluslabs.com?subject=Inquiry&body=Hello%20Exelus%20Labs,">
            info@exeluslabs.com
          </a>
          <a href="tel:+917989540212">☎ +91 79895 40212</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="navbar">
        {/* Top section for mobile - logo and hamburger */}
        <div className="navbar-top">
          <img src={logo} alt="Logo" className="logo" />

          {/* Hamburger menu toggle for mobile */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation menu */}
        <ul className={menuOpen ? 'show' : ''}>
          <li>
            <Link to="/Home" onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Products" onClick={handleMenuItemClick}>
              Products
            </Link>
          </li>
          <li className="dropdown" ref={dropdownRef}>
            <span className="dropdown-toggle" onClick={toggleDropdown}>
              Services
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-content">
                <li>
                  <Link to="/services" onClick={handleMenuItemClick}>
                    Custom Synthesis
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/About Us" onClick={handleMenuItemClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Contact Us" onClick={handleMenuItemClick}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right side - Search and Language */}
        <div className="navbar-right">
          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by name or CAS"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
            <button
              className="search-btn"
              onClick={handleSearch}
              aria-label="Search"
            >
              🔍
            </button>
          </div>

          {/* Language Bar */}
          <div className="language-bar">
            <select
              defaultValue=""
              aria-label="Select language"
            >
              <option value="" disabled>SELECT LANGUAGE</option>
              <option value="en">ENGLISH</option>
              <option value="zh">CHINESE</option>
              <option value="ko">KOREAN</option>
              <option value="pt">PORTUGUESE</option>
              <option value="ru">RUSSIAN</option>
              <option value="es">SPANISH</option>
              <option value="he">HEBREW (ISRAEL)</option>
              <option value="it">ITALIAN</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;