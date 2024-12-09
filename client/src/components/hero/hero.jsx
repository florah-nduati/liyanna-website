import React from 'react';
import './hero.css';
import video from "../../assets/hero.mp4"; // Make sure the video is correctly imported

const HeroSection = () => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Luxury Redefined, Memories Reimagined</h1>
          <p>Explore the world with Liyanna Luxury Tours. We provide world-class services to make your travel unforgettable.</p>
          <a href="/packages" className="hero-btn">Explore Packages</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
