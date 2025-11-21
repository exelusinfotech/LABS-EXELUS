import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Contact Section */}
      <div className="contact-section">
        {/* Left Panel */}
        <div className="contact-left fade-in-left">
          <h2>
            Reach out <span className="bold">&</span><br />
            <span className="highlight">Connect with Us</span>
          </h2>
          <p>
            Let's bring your requirements to life! We're excited to hear about your ideas and help you turn them into reality.
            Whether you have a specific project or just want to explore possibilities, we're here for you.
          </p>

          <div className="contact-details">
            <div className="contact-row">
              <div className="icon-box purple"><FaPhoneAlt /></div>
              <p>+91 78995 40212 , +91 97096 66777</p>
            </div>
            <div className="contact-row">
              <div className="icon-box purple"><FaEnvelope /></div>
              <p>info@exeluslabs.com</p>
            </div>
            <div className="contact-row">
              <div className="icon-box purple"><FaMapMarkerAlt /></div>
              <a
                href="https://www.google.com/maps/place/Gaddapotharam,+Kistaipally,+Telangana+502319/data=!4m6!3m5!1s0x3bcb8c1803327c51:0xf3902e10b54d4216!7e2!8m2!3d17.5850758!4d78.37308399999999"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                Location
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="contact-right fade-in-right">
          <h3>Get In Touch With Us And Enjoy</h3>
          <p className="subheading">Top-Notch Support</p>
          <form className="contact-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <input type="text" placeholder="Your phone no" />
            <textarea placeholder="Write message" rows="4" required></textarea>
            <button type="submit"><FaPaperPlane /> Send Message</button>
          </form>
        </div>
      </div>

      {/* Location Map */}
      <section className="location-section zoom-in">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Location"
            src="https://maps.google.com/maps?q=Gaddapotharam,+Kistaipally,+Telangana+502319&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
