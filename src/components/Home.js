import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="imagehold">
        <div className="overlay-content">
          <h1>Welcome to Pet Haven</h1>
          <p>Your one-stop solution for adopting and caring for pets!</p>
        </div>
      </div>

      <div className="hometext">
        <section>
          <h2>Our Mission</h2>
          <p>
            At Pet Haven, we are dedicated to connecting loving families with adorable pets in need.
            Whether you're looking to adopt a furry friend or learn about responsible pet care, we are here to guide you every step of the way.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li><p>Wide selection of cats and dogs available for adoption.</p></li>
            <li><p>Trusted advice on pet care, nutrition, and training.</p></li>
            <li><p>Community of pet lovers to share your journey with.</p></li>
          </ul>
        </section>

        <section>
          <h2>Get Involved</h2>
          <p>
            Join our mission to create a better world for pets. Become a volunteer, donate, or foster a pet today.
            Together, we can make a difference.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
