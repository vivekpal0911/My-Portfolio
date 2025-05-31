import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
// import emailjs from '@emailjs/browser'; // Uncomment after installing emailjs-com

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // Uncomment and configure after installing emailjs-com and setting up EmailJS
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         setStatus('Message sent successfully!');
  //         setLoading(false);
  //         form.current.reset();
  //     }, (error) => {
  //         setStatus('Failed to send message. Please try again.');
  //         setLoading(false);
  //     });
  // };

  // Demo handler (remove after EmailJS setup)
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus('Message sent successfully! (Demo)');
      setLoading(false);
      form.current.reset();
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section contact-fade-in">
      <div className="container">
        <h2 className="contact-title">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" name="user_name" placeholder="Your Name" required autoComplete="off" />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" name="user_email" placeholder="Your Email" required autoComplete="off" />
          </div>
          <div className="input-group">
            <textarea name="message" placeholder="Your Message" required rows={5}></textarea>
          </div>
          <button type="submit" className="contact-btn" disabled={loading}>
            <FaPaperPlane style={{marginRight: '8px'}} /> {loading ? 'Sending...' : 'Send Message'}
          </button>
          {status && <div className="form-status">{status}</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact; 