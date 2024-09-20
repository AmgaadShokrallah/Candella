import React from 'react';
import '../../App.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any inquiries or need support, please reach out to us via the following:</p>
      
      <div className="contact-details">
        <h3>Contact Information:</h3>
        <p><strong>Email:</strong> support@candella.com</p>
        <p><strong>Phone:</strong> +20 123 456 7890</p>
        
        <h3>Contact Form:</h3>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" name="name" required />
          
          <label>Email:</label>
          <input type="email" name="email" required />
          
          <label>Message:</label>
          <textarea name="message" rows="5" required></textarea>
          
          <button type="submit" className="btn-submit">Submit</button>
        </form>
        
        <h3>Business Hours:</h3>
        <p>Every Time</p>
      </div>
    </div>
  );
}

export default ContactUs;