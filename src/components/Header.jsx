import React from 'react';
import './Header.css';
function Header() {
  return (
    <header> 
      <div className="container"> 
        <div className="logo">
         
        </div>
        <nav>
        
          <ul>
          <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#certificate">Certificate</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#Startup">Startup</a></li>
            <li><a href="#blog">Blog</a></li> 
            <li><a href="#contact">Contact</a></li>   
                  </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 
