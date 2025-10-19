import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform) => {
    // Handle social media clicks
    console.log(`Opening ${platform}`);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Newsletter signup:', email);
    // Handle newsletter signup
    alert('Thank you for subscribing to our AI-powered newsletter!');
    e.target.reset();
  };

  return (
    <footer className="footer-modern">
      {/* Neural Network Background */}
      <div className="footer-neural-bg">
        <canvas id="footer-neural-canvas"></canvas>
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="brand-icon">
                <i className="fas fa-cube"></i>
                <div className="brand-pulse"></div>
              </div>
              <span className="brand-text">
                <span className="brand-company">Company</span>
                <span className="brand-digital">Digital</span>
              </span>
            </div>
            <p className="footer-description">
              Pioneering the future of digital experiences through AI-powered innovation. 
              We transform ideas into intelligent, interactive solutions that reshape industries.
            </p>
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Success</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-section">
            <h4 className="footer-title">
              <i className="fas fa-cogs"></i>
              Services
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/services" className="footer-link">
                  <i className="fas fa-mobile-alt"></i>
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <i className="fas fa-globe"></i>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <i className="fas fa-vr-cardboard"></i>
                  AR/VR Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <i className="fas fa-link"></i>
                  Blockchain
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <i className="fas fa-gamepad"></i>
                  Game Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-title">
              <i className="fas fa-building"></i>
              Company
            </h4>
            <ul className="footer-links">
              <li>
                <Link to="/about" className="footer-link">
                  <i className="fas fa-info-circle"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/teams" className="footer-link">
                  <i className="fas fa-users"></i>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <i className="fas fa-envelope"></i>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  <i className="fas fa-briefcase"></i>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  <i className="fas fa-shield-alt"></i>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="footer-section footer-contact">
            <h4 className="footer-title">
              <i className="fas fa-robot"></i>
              Stay Connected
            </h4>
            <p className="footer-subtitle">
              Subscribe to our AI insights newsletter
            </p>
            
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>

            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>hello@companydigital.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="footer-bottom">
          <div className="social-links">
            <button 
              className="social-link"
              onClick={() => handleSocialClick('linkedin')}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button 
              className="social-link"
              onClick={() => handleSocialClick('twitter')}
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button 
              className="social-link"
              onClick={() => handleSocialClick('github')}
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </button>
            <button 
              className="social-link"
              onClick={() => handleSocialClick('dribbble')}
              aria-label="Dribbble"
            >
              <i className="fab fa-dribbble"></i>
            </button>
            <button 
              className="social-link"
              onClick={() => handleSocialClick('instagram')}
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </button>
          </div>

          <div className="footer-divider">
            <div className="divider-line"></div>
            <div className="ai-orb">
              <i className="fas fa-brain"></i>
            </div>
            <div className="divider-line"></div>
          </div>

          <div className="footer-copyright">
            <p>
              © {currentYear} Company Digital Platform. All rights reserved. 
              <span className="ai-badge">
                <i className="fas fa-robot"></i>
                Powered by AI
              </span>
            </p>
            <div className="footer-legal">
              <Link to="/terms" className="legal-link">Terms of Service</Link>
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <Link to="/cookies" className="legal-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Assistant */}
      <div className="floating-ai-assistant">
        <button className="ai-chat-bubble" title="Chat with AI Assistant">
          <i className="fas fa-robot"></i>
          <div className="chat-pulse"></div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;