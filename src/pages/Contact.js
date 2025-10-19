import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! Our AI team will respond shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <section className="section">
          <h1 className="title-xl text-center">Contact Our AI Team</h1>
          <p className="subtitle text-center">
            Let's discuss how AI can transform your digital experience
          </p>
          
          <div className="grid grid-2 gap-large">
            {/* Contact Form */}
            <div className="card">
              <h2 className="title-md text-primary">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Project inquiry, consultation, etc."
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    rows="5"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="contact-info">
              <div className="card">
                <h3 className="title-sm text-primary">Get in Touch</h3>
                <div className="contact-methods">
                  <div className="contact-method">
                    <i className="fas fa-envelope text-secondary"></i>
                    <div>
                      <h4>Email</h4>
                      <p>hello@companydigital.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <i className="fas fa-phone text-secondary"></i>
                    <div>
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <i className="fas fa-map-marker-alt text-secondary"></i>
                    <div>
                      <h4>Location</h4>
                      <p>Silicon Valley, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="title-sm text-primary">AI Chat Assistant</h3>
                <p>Need immediate help? Chat with our AI assistant for instant support.</p>
                <button className="btn btn-secondary">
                  <i className="fas fa-robot"></i>
                  Start AI Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;