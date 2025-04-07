import React from 'react';
import './Home.css'; // ✅ make sure file exists

const Home = () => {
  return (
    <section className="home-section" id="home">
      {/* Overlay (optional, CSS me styling di gayi hai) */}
      {/* <div className="home-overlay"></div> */}

      <div className="content-wrapper">
        <div className="text-column">
          <h1 className="heading">
            Empowering the Future.
          </h1>
          <p className="paragraph">
            I’m Tushant Kumar, an AIML and IoT expert here to unlock your potential. Having trained over 600 students, I’m on a mission to equip you with the skills to carve your own path—without limits. Let’s build your tomorrow, today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
