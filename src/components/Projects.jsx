import React from 'react';
import './Projects.css'; 
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured online store built with React, Redux for state management, and a Node.js/Express backend.",
    image: "https://via.placeholder.com/400x250/007BFF/FFFFFF?text=Project+1+Image", 
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "CSS"],
    liveUrl: "#", // Replace with deployment link or remove if none
    repoUrl: "#", // Replace with GitHub repo link or remove if none
  },
  {
    id: 2,
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, focusing on clean design and animations using vanilla JavaScript and CSS.",
    image: "https://via.placeholder.com/400x250/28A745/FFFFFF?text=Project+2+Image", // Replace
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    liveUrl: "#", // Replace
    repoUrl: "#", // Replace
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A simple and intuitive task manager application built with React Hooks and using LocalStorage for persistence.",
    image: "https://via.placeholder.com/400x250/FFC107/333333?text=Project+3+Image", // Replace
    tags: ["React", "Hooks", "LocalStorage", "CSS Modules"],
    // liveUrl: null, // Example with no live link
    repoUrl: "#", // Replace
  },
  // Add more projects as needed
];


// --- Project Card Component (Internal) ---
function ProjectCard({ title, description, image, tags, liveUrl, repoUrl }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={image} alt={`${title} screenshot`} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button live"
            aria-label={`View live demo of ${title}`}
          >
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button repo"
            aria-label={`View source code of ${title}`}
          >
            View Code
          </a>
        )}
      </div>
    </div>
  );
}


// --- Main Projects Section Component ---
function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      {/* <p className="projects-subheading">
        Here are a few projects I've worked on recently.
      </p> */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          // Spread operator passes all properties of 'project' as individual props
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
