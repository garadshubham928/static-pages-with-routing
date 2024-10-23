import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Your Message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required 
      />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
