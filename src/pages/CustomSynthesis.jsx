import React, { useEffect } from "react";
import "./CustomSynthesis.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Image imports (update paths if needed)
import lab1 from '../assets/lab1.png';
import lab2 from '../assets/lab2.png';
import lab3 from '../assets/lab3.png';
import lab4 from '../assets/lab4.png';

const CustomSynthesis = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

const particlesInit = async (main) => {
  await loadSlim(main);
};


  return (
    <div className="custom-synthesis-container">
      {/* Blue tsParticles Background */}
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

      {/* Header Section */}
      <div className="custom-header">
        <h1>Custom Synthesis</h1>
        <p>Precision chemistry solutions tailored to your research needs</p>
      </div>

      {/* Expertise Cards */}
      <div className="custom-section">
        <div className="custom-card" data-aos="fade-up">
          <i className="fas fa-search"></i>
          <h3>Scouting</h3>
          <p>Identifying the best synthetic routes and starting materials.</p>
        </div>
        <div className="custom-card" data-aos="fade-up" data-aos-delay="100">
          <i className="fas fa-flask"></i>
          <h3>Development</h3>
          <p>Refining synthetic processes for maximum efficiency.</p>
        </div>
        <div className="custom-card" data-aos="fade-up" data-aos-delay="200">
          <i className="fas fa-cogs"></i>
          <h3>Optimization</h3>
          <p>Enhancing yield, purity, and reproducibility for production.</p>
        </div>
        <div className="custom-card" data-aos="fade-up" data-aos-delay="300">
          <i className="fas fa-vials"></i>
          <h3>Small Synthesis</h3>
          <p>Producing lab-scale quantities for testing and trials.</p>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="custom-details" data-aos="fade-up">
        <img src={lab1} alt="Lab" className="lab-image" />
        <div className="details-text">
          <h2>Capabilities and Specialties</h2>
          <p>
            At Exelus Labs, our advanced synthetic chemistry laboratories are
            equipped with cutting-edge tools and highly skilled scientists.
            We specialize in carbohydrate and nucleoside chemistry and offer scalable,
            efficient synthesis tailored to your existing processes.
          </p>
          <p>
            Whether you need pharmaceutical ingredients or complex chemical entities,
            we ensure precision, reliability, and scientific excellence at every step.
          </p>
        </div>
      </div>

      {/* Quality and Analysis */}
      <div className="custom-details reverse" data-aos="fade-up">
        <div className="details-text">
          <h2>Quality and Analysis</h2>
          <p>
            At Exelus Labs, quality isn't just a standard — it's a core principle
            that defines every aspect of our operations. From quality systems to
            expert teams and advanced laboratories, we deliver excellence in every batch.
          </p>
          <p>
            Our synthesis facilities adhere to ISO 9001:2015 standards, ensuring precise
            in-process and final product control through advanced analytical technologies.
          </p>
        </div>
        <img src={lab2} alt="Quality Analysis" className="lab-image" />
      </div>

      {/* Partnership and Project Management */}
      <div className="custom-details" data-aos="fade-up">
        <img src={lab3} alt="Project Management" className="lab-image" />
        <div className="details-text">
          <h2>Partnership and Project Management</h2>
          <p>
            Effective collaboration and transparent communication are key to successful
            project execution. We perform risk assessments and generate detailed proposals
            tailored to your synthetic goals.
          </p>
          <p>
            A dedicated project manager ensures seamless coordination and real-time updates
            throughout the project lifecycle — from route scouting to final delivery.
          </p>
        </div>
      </div>

      {/* Chemistry for All Applications */}
      <div className="custom-details reverse" data-aos="fade-up">
        <div className="details-text">
          <h2>Chemistry for All Applications</h2>
          <p>
            At Exelus Labs, we specialize in designing and synthesizing custom molecules
            to meet diverse R&D requirements across the pharmaceutical and diagnostics industries.
          </p>
          <p>
            We collaborate with pharmaceutical companies, diagnostic firms, and academic
            institutions to provide bespoke chemical solutions for all applications.
          </p>
        </div>
        <img src={lab4} alt="Chemistry Model" className="lab-image" />
      </div>
    </div>
  );
};

export default CustomSynthesis;
