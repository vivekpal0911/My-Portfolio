import React from 'react';
import './Hobbies.css';

function Hobbies() {
  const hobbies = [
    "Playing Sports",
    "PhotoGraphy"
  ];

  return (
    <section className="hobbies-section">
      <div className="container">
        <h2>Hobbies</h2>
        <ul className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <li key={index} className="hobby-item">{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hobbies; 