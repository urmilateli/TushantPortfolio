// src/components/TestimonialsCarousel.jsx
import React, { useState } from 'react';
import './TestimonialsCarousel.css'; // Import the CSS

// --- Testimonial Data ---
const testimonialsData = [
  {
    id: 1,
    quote: "A truly seamless experience. Highly professional and delivered beyond expectations!",
    name: "Sarah Jennings",
    title: "Marketing Head, Creative Solutions",
    image: "https://via.placeholder.com/80/ Caddd9/333?text=SJ", // Placeholder image
  },
  {
    id: 2,
    quote: "The technical skill and communication were top-notch. Made a complex project feel easy.",
    name: "Michael P. Robertson",
    title: "Founder, Tech Startup Inc.",
    image: "https://via.placeholder.com/80/fec44f/333?text=MR", // Placeholder image
  },
  {
    id: 3,
    quote: "Very responsive and quick to adapt to feedback. The final result was fantastic.",
    name: "Elena Garcia",
    title: "Product Manager, Innovate Co.",
    // image: null, // Example without image
  },
  {
    id: 4,
    quote: "Deep understanding of modern web technologies. Delivered clean, efficient code.",
    name: "David Chen",
    title: "Lead Engineer, Data Systems",
    image: "https://via.placeholder.com/80/99d8c9/333?text=DC", // Placeholder image
  },
];

// --- Testimonial Card (Internal Component) ---
// (Slightly adapted for carousel use if needed, but often the same card works)
function TestimonialCard({ quote, name, title, image }) {
  return (
    <div className="carousel-testimonial-card">
      {image && (
        <img
          src={image}
          alt={`Portrait of ${name}`}
          className="carousel-testimonial-image"
        />
      )}
      <blockquote className="carousel-testimonial-quote">
        "{quote}"
      </blockquote>
      <div className="carousel-author-info">
         <p className="carousel-testimonial-author">{name}</p>
         {title && <p className="carousel-testimonial-title">{title}</p>}
      </div>
    </div>
  );
}


// --- Main Carousel Component ---
function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
    // Alternative using modulo (handles negative numbers correctly in JS)
    // setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
    // Alternative using modulo
    // setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  // Get the current testimonial based on activeIndex
  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section className="testimonials-carousel-section" id="testimonials">
      <h2 className="testimonials-carousel-heading">Testimonials</h2>
      <div className="carousel-container">
        <button onClick={goToPrev} className="carousel-button prev" aria-label="Previous testimonial">
          ❮ {/* Left arrow */}
        </button>

        <div className="testimonial-card-wrapper">
            {/* Render only the active testimonial card */}
            <TestimonialCard
                key={currentTestimonial.id}
                quote={currentTestimonial.quote}
                name={currentTestimonial.name}
                title={currentTestimonial.title}
                image={currentTestimonial.image}
            />
        </div>

        <button onClick={goToNext} className="carousel-button next" aria-label="Next testimonial">
           ❯ {/* Right arrow */}
        </button>
      </div>
       {/* Optional: Navigation Dots */}
       <div className="carousel-dots">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
