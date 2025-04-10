import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>

      <div className="content">
      <h2 className="tagline">Empowering the Future</h2>
        <p className="meaning">
          I’m <strong>Tushant Kumar</strong>, an AIML and IoT expert here to unlock your potential.
          <br /><br />
          Having trained over <strong>600+ students</strong>, I’m on a mission to equip you with the skills to
          carve your own path — without limits.
          <br /><br />
          Let’s build your tomorrow, today.
        </p>

        <div className="social-icons">
  <a href="https://www.instagram.com/tushant2109/profilecard/?igsh=MTRiZjFnenc4NjZ4eQ==" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/in/tushant2109/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://www.youtube.com/@tushantkumar" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://open.spotify.com/show/53AhFAZZKNJ9Gc3hPblDJv?si=f358b86d766849a6" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-spotify"></i>
  </a>
  <a href="https://www.facebook.com/tushantkumar.official" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://github.com/tushantkumar2109" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
  <a href="https://medium.com/@tushant2109" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-medium"></i>
  </a>
  <a href="https://scholar.google.com/citations?hl=en&user=Lp89A7EAAAAJ" target="_blank" rel="noopener noreferrer">
    <i className="fas fa-graduation-cap"></i>
  </a>
</div>
<button class="cta-button">Explore My Work</button>

      </div>
    </section>
  );
};

export default Home;
