import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About Pet Haven</h1>
        <p>Creating a world where every pet finds a loving home.</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Pet Haven is a dedicated platform that connects people with their future furry companions.
          Our mission is to simplify the adoption process and ensure pets find the loving homes they deserve.
          We believe every pet has a story to tell, and we aim to help them share it.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li><p>Comprehensive pet profiles with details about personality, care requirements, and history.</p></li>
          <li><p>Resources for new pet owners, including training tips and nutritional advice.</p></li>
          <li><p>Community support for fostering and adoption programs.</p></li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          At Pet Haven, we envision a future where every pet finds a caring family and where pet care becomes a shared responsibility.
          By collaborating with shelters, veterinarians, and animal lovers, we strive to create a compassionate and informed community.
        </p>
      </section>

      <section className="about-section">
        <h2>Join Our Mission</h2>
        <p>
          Whether you’re looking to adopt a pet, volunteer your time, or contribute to our efforts,
          we welcome you to join us in making a difference. Together, we can create a haven for all pets.
        </p>
      </section>
    </div>
  );
};

export default About;
