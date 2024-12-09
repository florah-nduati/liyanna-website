import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/packages">Tour Packages</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/218286854711513"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/liyanna_luxury_tours/"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: contact@liyannatours.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Liyanna Luxury Tours | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
