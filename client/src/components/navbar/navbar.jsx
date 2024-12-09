import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Liyanna Luxury Tours</a>
      </div>
      <ul className="navbar-links">
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
      <button className="navbar-cta">Book Now</button>
    </nav>
  );
};

export default Navbar;
