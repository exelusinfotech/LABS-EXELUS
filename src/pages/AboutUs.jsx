import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = async (main) => {
    await loadSlim(main); // ✅ lightweight version
  };

  return (
    <div className="about-us-container">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#ffffff00" },
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#3f8efc" },
            links: { enable: true, color: "#3f8efc", opacity: 0.4, distance: 120 },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
            opacity: { value: 0.6 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
      />

      {/* Content Starts */}
      <h1 className="about-us-title" data-aos="fade-down">About Us</h1>
      <p className="about-us-description" data-aos="fade-up">
        Exelus Labs Private Limited is where precision meets innovation in the realm
        of impurity standards and custom organic synthesis...
      </p>

      {/* What We Do */}
      <div className="about-us-section">
        <h2 data-aos="fade-right">What We Do?</h2>
        <div className="about-us-features">
          <div className="feature-card" data-aos="zoom-in">
            <h3>🧪 Impurity Standards</h3>
            <p>We offer a comprehensive range of impurity standards...</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>⚗️ Custom Organic Synthesis</h3>
            <p>From novel compound development to complex multi-step synthesis...</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-us-section">
        <h2 data-aos="fade-left">Why Choose Us?</h2>
        <div className="about-us-features">
          <div className="feature-card" data-aos="flip-left">
            <h3>🏆 Leading Expertise</h3>
            <p>We provide high-purity impurity standards essential for research...</p>
          </div>
          <div className="feature-card" data-aos="flip-left" data-aos-delay="100">
            <h3>🎯 Tailored Solutions</h3>
            <p>Our chemists excel in complexity—offering fully customized synthesis...</p>
          </div>
          <div className="feature-card" data-aos="flip-left" data-aos-delay="200">
            <h3>🌍 Global Delivery</h3>
            <p>Serving clients across continents with fast, dependable delivery...</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="about-us-footer" data-aos="fade-up">
        <h2>More Than a Supplier — A Strategic Partner</h2>
        <p>At Exelus Labs, we're more than a chemical manufacturer...</p>
        <p>
          <strong>Let’s bring your next idea to life—with quality, precision, and excellence.</strong>
        </p>
        <p>
          <strong style={{ color: '#1d3bf1' }}>Exelus Labs — Quality Leads.</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
