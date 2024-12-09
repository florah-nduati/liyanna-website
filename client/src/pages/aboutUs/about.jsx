import React from 'react';
import Testimonials from '../../components/testimonials/testimonials';
import image1 from "../../assets/user1.jpg"
import './about.css';

const About = () => {
  return (
    <div className="about">
      <h1 className="page-title">About Us</h1>

      {/* Mission Section */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Liyanna Luxury Tours, our mission is to redefine luxury travel by creating exceptional, tailor-made experiences 
          that inspire, delight, and create lifelong memories for our clients.
        </p>
      </section>

      {/* Vision Section */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become the world’s most sought-after luxury tour company, recognized for our innovation, superior service, 
          and commitment to delivering transformative travel experiences.
        </p>
      </section>

      {/* Values Section */}
      <section className="about-section">
        <h2>Our Values</h2>
        <ul className="about-values">
          <li>✨ **Excellence**: We strive to exceed expectations at every step of the journey.</li>
          <li>🌍 **Sustainability**: We prioritize eco-friendly practices to protect our planet.</li>
          <li>💼 **Professionalism**: Our team ensures impeccable service with attention to detail.</li>
          <li>❤️ **Customer-Centric**: Every decision revolves around creating the best client experiences.</li>
          <li>🚀 **Innovation**: We embrace creativity and new technologies to elevate luxury travel.</li>
        </ul>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Liyanna Luxury Tours was born out of a passion for exploring the world’s most stunning destinations while offering unparalleled luxury and comfort. 
          Founded in [year], we have grown from a small travel agency to a global leader in luxury tours, trusted by thousands of discerning travelers.
        </p>
      </section>

      {/* Services Section */}
      <section className="about-section">
        <h2>Our Services</h2>
        <ul className="about-services">
          <li>🏝️ **Luxury Beach Vacations**</li>
          <li>🏔️ **Exquisite Mountain Escapes**</li>
          <li>🚢 **Private Yacht Charters**</li>
          <li>🏛️ **Cultural City Tours**</li>
          <li>✈️ **Custom Travel Itineraries**</li>
          <li>🏨 **Luxury Hotel Bookings**</li>
          <li>🎭 **Exclusive Events and Experiences**</li>
          <li>🚙 **Private Chauffeur Services**</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          At Liyanna Luxury Tours, we redefine travel by blending personalized service with unmatched expertise. Here’s why we’re the best choice:
        </p>
        <ul className="about-benefits">
          <li>🌟 **Tailor-Made Experiences**: Every trip is customized to your desires and preferences.</li>
          <li>📞 **24/7 Support**: Our team is available round the clock to assist you.</li>
          <li>🛡️ **Trusted Partners**: We collaborate with world-class hotels, resorts, and service providers.</li>
          <li>💎 **Luxury Redefined**: Attention to detail and exclusivity in every experience.</li>
        </ul>
      </section>

      {/* Meet the Team Section */}
      <section className="about-section">
        <h2>Meet the Team</h2>
        <p>
          Our dedicated team of travel experts and hospitality professionals ensures that every journey is seamless and unforgettable. 
          From travel consultants to on-ground guides, we have an experienced, passionate team ready to make your dreams a reality.
        </p>
        <div className="team">
          <div className="team-member">
            <img src={image1} alt="Team Member 1" />
            <h3>Jane Smith</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={image1} alt="Team Member 2" />
            <h3>John Doe</h3>
            <p>Travel Consultant</p>
          </div>
          <div className="team-member">
            <img src={image1} alt="Team Member 3" />
            <h3>Emily White</h3>
            <p>Hospitality Manager</p>
          </div>
        </div>
      </section>
      < Testimonials />

      {/* Call-to-Action Section */}
      <section className="about-section call-to-action">
        <h2>Let’s Create Your Dream Journey</h2>
        <p>
          Ready to experience the world like never before? Contact us today, and let’s plan your next adventure!
        </p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
