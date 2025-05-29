import React from 'react';
import './Certifications.css';

function Certifications() {
  const certifications = [
    { name: "Web development & Design", issuingBody: "NSDC", link: "#" },
    { name: "Internet Of Things", issuingBody: "NPTEL", link: "#" },
    { name: "Python Programming", issuingBody: "SA", link: "#" }
  ];

  return (
    <section className="certifications-section">
      <div className="container">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-item" key={index}>
              <p className="cert-name">{cert.name}</p>
              <p className="cert-body">Issued by: {cert.issuingBody}</p>
              {cert.link !== "#" && <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Certificate</a>}
              {cert.link === "#" && <span className="cert-link-placeholder">Certificate Link (Placeholder)</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications; 