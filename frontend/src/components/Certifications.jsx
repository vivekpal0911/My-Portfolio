import React from "react";
import "./Certifications.css";

const certifications = [
  { name: "Web development & Design", issuingBody: "NSDC" },
  { name: "Internet Of Things", issuingBody: "NPTEL" },
  { name: "Python Programming", issuingBody: "SA" },
];

function Certifications() {
  return (
    <section className="certifications-section">
      <div className="container">
        <h2>Certificates</h2>
        <div className="subtitle">
          A showcase of my verified learning journey – from hands-on workshops
          to structured programs.
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div className="certification-card" key={idx}>
              <div className="cert-title">{cert.name}</div>
              <div className="cert-subtitle">{cert.issuingBody}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
