import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        setStatus('Message sent successfully!');
        form.current.reset();
      } else {
        const data = new FormData(form.current);
        const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('user_name')}`);
        const body = encodeURIComponent(`Name: ${data.get('user_name')}\nEmail: ${data.get('user_email')}\n\n${data.get('message')}`);
        window.location.href = `mailto:vivekpal0911@gmail.com?subject=${subject}&body=${body}`;
        setStatus('Your email app has been opened with your message.');
      }
    } catch {
      setStatus('Unable to send the message. Please email vivekpal0911@gmail.com directly.');
    } finally {
      setLoading(false);
      window.setTimeout(() => setStatus(''), 5000);
    }
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
          {status && <div className={`form-status ${status.includes('Unable') ? 'error' : 'success'}`}>{status}</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
