import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Product Manager at TechFlow",
      text: "Vivek is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are top-notch.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, StartUp Inc",
      text: "Working with Vivek was a pleasure. He transformed our rough ideas into a beautiful, functional web application. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Creative Director",
      text: "The portfolio site Vivek built for me is stunning. He has a great eye for design and technical expertise to match.",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What People Say</h2>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => index === activeIndex && (
            <div key={testimonial.name} className="testimonial-card active">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
