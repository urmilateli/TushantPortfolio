// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS

function Contact() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for submission status (optional)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(''); // To show success/error

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default page reload
    setIsSubmitting(true);
    setSubmitMessage(''); // Clear previous messages

    console.log('Form Data Submitted:', formData); // Log data for now

    // --- !!! IMPORTANT: Replace this section with your chosen method !!! ---

    // Option 1: Send data to your own backend API
    /*
    try {
      const response = await fetch('/api/contact', { // Your backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Error: ${errorData.message || 'Failed to send message.'}`);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
    */

    // Option 2: For services like Formspree, you often just need to set the 'action'
    // attribute on the <form> element itself and maybe use their specific hooks/libs.
    // The <form action="YOUR_FORMSPREE_ENDPOINT" method="POST"> structure handles it.
    // If you need more control or want to show messages without page reload,
    // you'd use fetch like Option 1, pointing to the Formspree endpoint.

    // Option 3: (Simulated for now) Just log and show a success message
    // Remove this 'setTimeout' when using a real submission method
     setTimeout(() => {
       setSubmitMessage('Message sent successfully! (Simulated)');
       setFormData({ name: '', email: '', message: '' }); // Clear form
       setIsSubmitting(false);
     }, 1000); // Simulate network delay

    // --------------------------------------------------------------------
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact</h2>

      {/* Use the 'action' attribute for simple Formspree integration */}
      {/* <form className="contact-form" onSubmit={handleSubmit} action="YOUR_FORMSPREE_ENDPOINT" method="POST"> */}
      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name" // 'name' attribute is crucial for form data
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email" // 'name' attribute is crucial
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message" // 'name' attribute is crucial
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitMessage && (
          <p className={`submit-message ${submitMessage.includes('Error') || submitMessage.includes('error') ? 'error' : 'success'}`}>
            {submitMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
