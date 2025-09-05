'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">CONTACT WITH ME</h2>

      <div className="contact-container">
        {/* Left Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="contact-desc">
            Feel free to reach out if you have any questions or would like to discuss potential opportunities that match my skills and interests.
          </p>

          <label htmlFor="name">Your Name:</label>
          <input id="name" type="text" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input id="email" type="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit" className="send-btn">
            SEND MESSAGE <Send size={18} />
          </button>

          {sent && (
            <p className="success-msg">Thanks! Message sent successfully.</p>
          )}
        </form>

        {/* Right Info */}
        <div className="contact-info">
          <ul>
            <li>
              <span className="icon"><Mail size={24} /></span>
              <a href="mailto:anujparihar.tech@gmail.com">
                satyamjain216@gmail.com
              </a>
            </li>
            <li>
              <span className="icon"><Phone size={24} /></span>
              <a href="tel:+917976746973">+91-8979769045</a>
            </li>
            <li>
              <span className="icon"><MapPin size={24} /></span>
              <span>Bijnor, Uttar Pradesh, India (246701)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
