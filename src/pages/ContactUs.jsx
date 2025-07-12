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
              <p>+91 78995 40212</p>
            </div>
            <div className="contact-row">
              <div className="icon-box purple"><FaPhoneAlt /></div>
              <p>+91 97096 66777</p>
            </div>
            <div className="contact-row">
              <div className="icon-box purple"><FaEnvelope /></div>
              <p>info@exeluslabs.com</p>
            </div>
            <div className="contact-row">
              <div className="icon-box purple"><FaMapMarkerAlt /></div>
              <a
                href="https://www.google.com/maps?q=Suraram,+Hyderabad,+Telangana+-+500055"
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                Suraram, Hyderabad, Telangana - 500055
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
            title="Suraram Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30433.936984991356!2d78.41817735162935!3d17.543655405585547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fb593e4d65b%3A0x3bc97157a1deb28d!2sSuraram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1751014557992!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
