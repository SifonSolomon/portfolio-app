import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form-label">Name</label>
      <input
        className="contact-form-input"
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <label className="contact-form-label">Email</label>
      <input
        className="contact-form-input"
        type="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label className="contact-form-label">Message</label>
      <textarea
        className="contact-form-textarea"
        name="message"
        value={message}
        onChange={handleMessageChange}
        required
      ></textarea>

      <button className="contact-form-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Contact;