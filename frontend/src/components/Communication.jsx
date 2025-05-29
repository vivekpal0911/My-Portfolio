import React from 'react';
import './Communication.css';

function Communication() {
  const languages = [
    "English",
    "Hindi"
  ];

  return (
    <section className="communication-section">
      <div className="container">
        <h2>Communication</h2>
        <ul className="communication-list">
          {languages.map((lang, index) => (
            <li key={index} className="language-item">{lang}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Communication; 