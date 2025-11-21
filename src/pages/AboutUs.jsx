import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import aboutUsFooterBg from '../assets/about-us-footer background image.jpg';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <div className="about-us-container">
      {/* Particle Background */}
      <div className="particles-wrapper">
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
      </div>

      {/* Content Starts */}
      <h1 className="about-us-title" data-aos="fade-down">About Us</h1>
      <p className="about-us-description" data-aos="fade-up">
        Exelus Labs Private Limited is where precision meets innovation in the realm of impurity standards and custom organic synthesis. With a global client base and a steadfast commitment to quality, we deliver high-performance solutions tailored to the complex needs of the pharmaceutical, chemical, and research industries.

      </p>

      {/* What We Do */}
      <div className="about-us-section">
        <h2 data-aos="fade-right">What We Do?</h2>
        <div className="about-us-features">
          <div className="feature-card" data-aos="zoom-in">
            <h3>🧪 Impurity Standards</h3>
            <p>We offer a comprehensive range of impurity standards, including nitroso impurities, stable isotope-labeled compounds, and deuterated compounds—all engineered to meet the highest standards of purity and regulatory compliance.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>⚗️ Custom Organic Synthesis</h3>
            <p>From novel compound development to complex multi-step synthesis, our team delivers scalable solutions, ensuring flexibility, efficiency, and precision for your specific needs.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-us-section">
        <h2 data-aos="fade-left">Why Choose Us?</h2>
        <div className="about-us-features">
          <div className="feature-card" data-aos="flip-left">
            <h3>🏆 Leading Expertise</h3>
            <p>We provide an extensive selection of high-purity impurity standards essential for research, testing, and regulatory compliance across a wide range of industries.</p>
          </div>
          <div className="feature-card" data-aos="flip-left" data-aos-delay="100">
            <h3>🎯 Tailored Solutions</h3>
            <p>Our chemists excel in complexity—offering fully customized synthesis and process optimization to meet your unique project goals.</p>
          </div>
          <div className="feature-card" data-aos="flip-left" data-aos-delay="200">
            <h3>🌍 Global Delivery</h3>
            <p>Serving clients across continents, we ensure fast, dependable delivery from our ready-stock inventory—no matter where you're located.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="about-us-footer" data-aos="fade-up">
        <h2>More Than a Supplier — A Strategic Partner</h2>
        <p>At Exelus Labs, we're more than a chemical manufacturer. We collaborate closely with our clients to solve challenges, drive innovation, and support the development of next-generation solutions.</p>
        <p>
          <strong>Let’s Bring Your Requirements to Life

            We’re excited to hear about your ideas and help you turn them into reality. Whether you have a specific project in mind or just want to explore possibilities, we’re here for you.</strong>
        </p>
        <p>
          <strong style={{ color: '#1d3bf1' }}>Exelus Labs — Quality Leads.</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
