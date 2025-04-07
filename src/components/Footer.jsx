// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  // FaTwitter, // Remove if not used
  FaYoutube,   // <-- Add
  FaSpotify,   // <-- Add
  FaGithub,    // <-- Add
  FaMediumM    // <-- Add (Using M variant)
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si'; // <-- Add Google Scholar Icon

// If using React Router for internal links:
// import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  // --- Configuration ---
  // Updated with all your provided social media links
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/tushant2109/',
    facebook: 'https://www.facebook.com/tushantkumar.official',
    instagram: 'https://www.instagram.com/tushant2109/profilecard/?igsh=MTRiZjFnenc4NjZ4eQ==',
    youtube: 'https://www.youtube.com/@tushantkumar',
    spotify: 'https://open.spotify.com/show/53AhFAZZKNJ9Gc3hPblDJv?si=f358b86d766849a6',
    github: 'https://github.com/tushantkumar2109',
    medium: 'https://medium.com/@tushant2109',
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=Lp89A7EAAAAJ',
    // twitter: null, // Set to null or remove if you don't have a link
  };

  // Quick Links (Keep as is or update as needed)
  const quickLinks = [
    { name: 'Home', path: '/Home' },
    { name: 'About', path: '/About' },
    { name: 'Cretificate', path: '/Cretificate' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Startup', path: '/Startup' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Contact', path: '/Contact' },

  ];

  // Link Component (Keep as is)
  const LinkComponent = ({ href, children, ...props }) => (
     <a href={href} {...props}>{children}</a>
  );


  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Bar: Logo and Social Icons */}
        <div className={styles.topBar}>
          <img
            // !!! IMPORTANT: Verify this logo path is correct !!!
            src="/images/kansoft-logo.png" // Assumes logo is in public/images
            alt="Kansoft Logo"
            className={styles.logo}
          />
          {/* --- Updated Social Icons Section --- */}
          <div className={styles.socialIcons}>
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            )}
             {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            )}
             {socialLinks.youtube && ( // Add YouTube
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube />
                </a>
             )}
             {socialLinks.spotify && ( // Add Spotify
                <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                    <FaSpotify />
                </a>
             )}
             {socialLinks.github && ( // Add GitHub
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
             )}
              {socialLinks.medium && ( // Add Medium
                <a href={socialLinks.medium} target="_blank" rel="noopener noreferrer" aria-label="Medium">
                    <FaMediumM />
                </a>
             )}
             {socialLinks.googleScholar && ( // Add Google Scholar
                <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                    <SiGooglescholar />
                </a>
             )}
             {/* Removed Twitter - Add back if needed */}
             {/* {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
             )} */}
          </div>
          {/* --- End Updated Social Icons Section --- */}
        </div>

        {/* Main Content Grid (Keep as is) */}
        <div className={styles.mainContent}>
          {/* Column 1: Corporate Office */}
          <div className={styles.footerColumn}>
            <h4>Corporate Office</h4>
            <p>
              G1-10, IT Park, MIA Extension,<br />
              Udaipur, Rajasthan, India,<br />
              313001
            </p>
            <p>+91 294 2490111</p>
            <p><a href="mailto:Info@kansoftware.com">Info@kansoftware.com</a></p>
            <p>Sales: <a href="tel:+91-9929560236">+91-9929560236</a></p>
            <p>HR: <a href="tel:+91-7627092336">+91-7627092336</a></p>
          </div>

          {/* Column 2: Overseas Office */}
          <div className={styles.footerColumn}>
            <h4>Overseas Office</h4>
            <p>
              Greyline Station, Top Floor<br />
              Corner of N Limestone & W<br />
              Loudon, 101 W Loudon Ave<br />
              Lexington, KY 40508
            </p>
            <p>+1 502 489 4721</p>
          </div>

          {/* Column 3: Quick Links */}
          <div className={styles.footerColumn}>
            <h4>Quick Link</h4>
            <ul className={styles.quickLinksList}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <LinkComponent href={link.path}>
                      {link.name}
                  </LinkComponent>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Awards */}
          
        </div>

        {/* Divider (Keep as is) */}
        <hr className={styles.footerDivider} />

        {/* Copyright (Keep as is) */}
        <div className={styles.copyright}>
          <p>© Copyright 2010-{currentYear} Kansoft Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;