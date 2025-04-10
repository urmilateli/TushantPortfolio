// src/components/BlogSection/BlogCard.jsx
import React from 'react';
import { FaRegClock } from 'react-icons/fa'; // Clock icon
import './BlogSection.css'; 
<h1>Blogs</h1>

const BlogCard = ({ imageUrl, title, date, link = '#' }) => {
  return (
    <div className="blog-card">
      <a href={link} className="blog-card-link"> {/* Make the whole card clickable */}
        <img src={imageUrl} alt={title} className="blog-card-image" />
        <div className="blog-card-content">
          <h3 className="blog-card-title">{title}</h3>
          <div className="blog-card-date">
            <FaRegClock className="blog-card-date-icon" />
            <span>{date}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;