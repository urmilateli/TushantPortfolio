// src/components/BlogSection/BlogSection.jsx
import React from 'react';
import BlogCard from './BlogCard'; // Import the card component
import { FaBookOpen } from 'react-icons/fa'; // Book icon
import './BlogSection.css'; // Import the CSS

// --- Sample Data (Replace with your actual blog data later) ---
const sampleBlogPosts = [
  {
    id: 1,
    title: 'Migrating from ASP.NET MVC to ASP.NET Core: A Step-by-Step Guide',
    date: 'December 23, 2024',
    imageUrl: '/images/blog-aspnet.jpg', // Replace with your actual image path
    link: '/blog/aspnet-migration', // Internal links for cards can remain
  },
  {
    id: 2,
    title: 'Veo 2 vs Sora: A Battle of Video Generation Using AI',
    date: 'December 18, 2024',
    imageUrl: '/images/blog-ai-video.jpg', // Replace with your actual image path
    link: '/blog/veo-vs-sora', // Internal links for cards can remain
  },
  {
    id: 3,
    title: 'The Ultimate Guide to JavaScript Implementation Techniques',
    date: 'December 6, 2024',
    imageUrl: '/images/blog-javascript-guide.jpg', // Replace with your actual image path
    link: '/blog/javascript-implementation', // Internal links for cards can remain
  },
   // Add more blog posts if needed
   {
    id: 4,
    title: 'Understanding React Hooks: useState and useEffect',
    date: 'November 28, 2024',
    imageUrl: '/images/blog-react-hooks.jpg', // Replace with your actual image path
    link: '/blog/react-hooks-intro', // Internal links for cards can remain
  },
];
// --- End Sample Data ---

const BlogSection = () => {
  return (
    <section className="blog-section" id='blog'>
      <div className="blog-section-wrapper">
        {/* Left Side: Intro Text */}
        <div className="blog-intro">
          <FaBookOpen className="blog-intro-icon" />
          <h2 className="blog-intro-title">Blogs</h2>
          {/* <p className="blog-intro-description">
            Get a dosage of hidden side of digital media in simple words
          </p> */}
  
          {/* <a
             href="https://www.blogger.com/about/?bpli=1"
             className="blog-intro-button"
             target="_blank" 
             rel="noopener noreferrer"
          >
            Check our Blogs ›
          </a> */}
          {/* 👇 **** END OF MODIFICATION **** 👇 */}
        </div>

        {/* Right Side: Blog Cards */}
        <div className="blog-cards-container">
          {sampleBlogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              date={post.date}
              imageUrl={post.imageUrl}
              // Note: Links on individual cards can still point internally
              // or externally based on your needs.
              link={post.link}
            />
          ))}
        </div>
      </div>

      {/* Optional: Slider Dots (simple visual, no functionality here) */}
      <div className="blog-slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default BlogSection;