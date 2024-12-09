import React, { useState } from 'react';
import logo from '../../assets/logo.jpeg';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Liyanna Luxury Tours Logo" />
        </a>
        <h1 className="navbar-heading">Liyanna Luxury Tours</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        ☰
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/packages">Tour Packages</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
        <li className="dropdown">
          <a href="/more" className="dropdown-btn">More</a>
          <ul className="dropdown-menu">
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <button className="navbar-cta">Book Now</button>
    </nav>
  );
};

export default Navbar;
