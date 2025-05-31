import React from 'react';
import './Certifications.css';

const certifications = [
  { name: "Web development & Design", issuingBody: "NSDC", link: "#" },
  { name: "Internet Of Things", issuingBody: "NPTEL", link: "#" },
  { name: "Python Programming", issuingBody: "SA", link: "#" }
];

function Certifications() {
  return (
    <section className="certifications-section">
      <div className="container">
        <h2>Certificates</h2>
        <div className="subtitle">A showcase of my verified learning journey – from hands-on workshops to structured programs.</div>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div className="certification-card" key={idx}>
              <div className="cert-title">{cert.name}</div>
              <div className="cert-subtitle">{cert.issuingBody}</div>
              {cert.link !== "#" && <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">View Certificate <span style={{fontSize: '1em'}}>&#8599;</span></a>}
              {cert.link === "#" && <span className="cert-link" style={{opacity:0.6, cursor:'not-allowed'}}>Certificate Link (Placeholder)</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications; 