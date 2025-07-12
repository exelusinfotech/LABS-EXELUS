// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Exelus Labs</h3>
          <p>
            Leading provider of high-quality chemical reference standards,
            impurities, and stable isotopes for pharmaceutical research.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contactus">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: info@exeluslabs.com</p>
          <p>Phone: +91-12345-67890</p>
          <p>Location: Hyderabad, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Exelus Labs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
