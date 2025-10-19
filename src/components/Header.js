import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const showAIAssistant = () => {
    setShowAIModal(true);
    closeMenu();
  };

  const closeAIModal = () => {
    setShowAIModal(false);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`navbar-modern ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Logo */}
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <div className="brand-icon">
              <i className="fas fa-cube"></i>
              <div className="brand-pulse"></div>
            </div>
            <span className="brand-text">
              <span className="brand-company">Company</span>
              <span className="brand-digital">Digital</span>
            </span>
          </Link>
          
          {/* Navigation Menu */}
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActivePage('/') ? 'nav-active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActivePage('/about') ? 'nav-active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-info-circle"></i>
              <span>About</span>
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${isActivePage('/services') ? 'nav-active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-cogs"></i>
              <span>Services</span>
            </Link>
            <Link 
              to="/teams" 
              className={`nav-link ${isActivePage('/teams') ? 'nav-active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-users"></i>
              <span>Teams</span>
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActivePage('/contact') ? 'nav-active' : ''}`}
              onClick={closeMenu}
            >
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </Link>
            
            {/* AI Assistant Button */}
            <button className="nav-link nav-ai-btn" onClick={showAIAssistant}>
              <i className="fas fa-robot"></i>
              <span>AI Assistant</span>
              <div className="ai-indicator"></div>
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`nav-toggle ${isMenuOpen ? 'nav-toggle-open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Neural Network Background Effect */}
        <div className="nav-neural-bg">
          <div className="neural-particle"></div>
          <div className="neural-particle"></div>
          <div className="neural-particle"></div>
        </div>
      </nav>

      {/* AI Assistant Modal */}
      {showAIModal && (
        <div className="ai-modal-overlay" onClick={closeAIModal}>
          <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="ai-modal-header">
              <div className="ai-avatar">
                <i className="fas fa-robot"></i>
              </div>
              <h3>AI Assistant</h3>
              <button className="ai-modal-close" onClick={closeAIModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="ai-modal-body">
              <p>
                👋 Hi! I'm your intelligent digital assistant. I can help you with:
              </p>
              <ul className="ai-features">
                <li><i className="fas fa-lightbulb"></i> Project recommendations</li>
                <li><i className="fas fa-code"></i> Technical guidance</li>
                <li><i className="fas fa-calendar"></i> Consultation booking</li>
                <li><i className="fas fa-chart-line"></i> Service insights</li>
              </ul>
              
              <div className="ai-actions">
                <button className="btn btn-primary ai-chat-btn">
                  <i className="fas fa-comment"></i>
                  Start Chat
                </button>
                <button className="btn btn-secondary ai-demo-btn">
                  <i className="fas fa-play"></i>
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="ai-modal-footer">
              <span className="ai-status">
                <div className="status-dot"></div>
                AI Online & Ready
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;