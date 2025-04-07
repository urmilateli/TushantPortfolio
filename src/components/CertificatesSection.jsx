
import React from 'react';
import './CertificatesSection.css'; // We'll create this CSS file next

// --- Sample Data ---
// Replace this with your actual certificate data
// You could also fetch this from an API or pass it down as props
const certificatesData = [
  {
    id: 1,
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    issuer: 'Udemy',
    date: 'June 2023',
    credentialUrl: 'https://www.udemy.com/certificate/UC-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/', // Optional: Link to verify
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'January 2023',
    credentialUrl: 'https://www.freecodecamp.org/certification/your-username/javascript-algorithms-and-data-structures', // Optional
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'November 2022',
    // No credentialUrl for this example
  },
   {
    id: 4,
    title: 'Google IT Support Professional Certificate',
    issuer: 'Coursera / Google',
    date: 'August 2022',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/professional-cert/XXXXXXXXXXXX', // Optional
  },
  // Add more certificates here
];
// ---------------------

const CertificatesSection = () => {
  return (
    <section id="certificate" className="certificates-section">
      <h2>Certificates &  Expertise</h2>
      {certificatesData.length > 0 ? (
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">Issued by: {cert.issuer}</p>
              <p className="certificate-date">Date: {cert.date}</p>
              {cert.credentialUrl && ( // Only show link if URL exists
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer" // Important for security when using target="_blank"
                  className="certificate-link"
                >
                  View Credential
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No certificates to display yet.</p> // Message if data array is empty
      )}
    </section>
  );
};

export default CertificatesSection;
