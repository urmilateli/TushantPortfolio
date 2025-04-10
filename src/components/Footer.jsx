// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaGithub,
  FaMediumM
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/tushant2109/',
    facebook: 'https://www.facebook.com/tushantkumar.official',
    instagram: 'https://www.instagram.com/tushant2109/profilecard/?igsh=MTRiZjFnenc4NjZ4eQ==',
    youtube: 'https://www.youtube.com/@tushantkumar',
    spotify: 'https://open.spotify.com/show/53AhFAZZKNJ9Gc3hPblDJv?si=f358b86d766849a6',
    github: 'https://github.com/tushantkumar2109',
    medium: 'https://medium.com/@tushant2109',
    googleScholar: 'https://scholar.google.com/citations?hl=en&user=Lp89A7EAAAAJ',
  };

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Certificate', path: '#certificate' },
    { name: 'Projects', path: '#projects' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' },
  ];
  

  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        
        {/* Left - Navbar Links */}
        <ul className={styles.quickLinksList}>
          {quickLinks.map((link) => (
            <li key={link.name}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Right - Social Media Icons */}
        <div className={styles.socialIcons}>
          {socialLinks.linkedin && <a href={socialLinks.linkedin}><FaLinkedinIn /></a>}
          {socialLinks.facebook && <a href={socialLinks.facebook}><FaFacebookF /></a>}
          {socialLinks.instagram && <a href={socialLinks.instagram}><FaInstagram /></a>}
          {socialLinks.youtube && <a href={socialLinks.youtube}><FaYoutube /></a>}
          {socialLinks.spotify && <a href={socialLinks.spotify}><FaSpotify /></a>}
          {socialLinks.github && <a href={socialLinks.github}><FaGithub /></a>}
          {socialLinks.medium && <a href={socialLinks.medium}><FaMediumM /></a>}
          {socialLinks.googleScholar && <a href={socialLinks.googleScholar}><SiGooglescholar /></a>}
        </div>
      </div>

      {/* Bottom Center - Copyright */}
      <div className={styles.bottomRow}>
        <p>© Copyright 2010-{currentYear} Kansoft Solutions Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
