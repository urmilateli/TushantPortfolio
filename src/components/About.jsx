import React from 'react';
import './About.css';

function About() {
  return (
    <>
      {/* Fixed full-screen background */}
      <div className="background-fixed"></div>

      {/* Scrollable content section */}
      <section id='about' className="about-section">
        <div className="about-content">
        <h2>Hey, I’m Tushant Kumar</h2>
          <p>
          With over 4 years of experience as an AIML and IoT specialist, I’ve worked on countless hands-on projects and trained more than 600 students to master cutting-edge tech. I hold an M.Tech and am currently pursuing a PhD under the Visvesvaraya Scheme, supported by the Ministry of Electronics and Information Technology (MeitY), deepening my expertise in innovative technologies. My passion lies in delivering skillful, practical knowledge that empowers every learner to thrive in their chosen field, free from restrictions. For example, I guided a group of students to create an IoT-based healthcare monitoring system that uses AIML to predict health risks—combining real-time sensor data with machine learning to alert users before issues escalate, showing how tech can save lives. 
          <br />
          When I’m not teaching or building intelligent systems, you’ll likely find me deep in conversation over a cup of roadside chai or exploring local markets, soaking in inspiration from everyday life. My mission is simple yet powerful — to light the spark and confidence in every student, whether they come from a vibrant city or a quiet rural village. So, they can shape their future with boldness and pride. Let’s do this, apne style mein! 
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
