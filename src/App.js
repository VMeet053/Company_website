import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Teams from './pages/Teams';
import './styles/App.css';

// Modern Magnetic Cursor with Dynamic Effects
function ModernCursor() {
  const cursorDotRef = React.useRef(null);
  const cursorRingRef = React.useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const mouse = React.useRef({ x: 0, y: 0 });
  const dot = React.useRef({ x: 0, y: 0 });
  const ring = React.useRef({ x: 0, y: 0 });
  const animationId = React.useRef(null);
  
  // Animation settings
  const DOT_SPEED = 0.15;
  const RING_SPEED = 0.08;

  const animate = React.useCallback(() => {
    // Smooth dot movement (faster)
    dot.current.x += (mouse.current.x - dot.current.x) * DOT_SPEED;
    dot.current.y += (mouse.current.y - dot.current.y) * DOT_SPEED;
    
    // Smooth ring movement (slower for lag effect)
    ring.current.x += (mouse.current.x - ring.current.x) * RING_SPEED;
    ring.current.y += (mouse.current.y - ring.current.y) * RING_SPEED;

    // Update positions
    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate3d(${dot.current.x - 4}px, ${dot.current.y - 4}px, 0)`;
    }
    
    if (cursorRingRef.current) {
      cursorRingRef.current.style.transform = `translate3d(${ring.current.x - 20}px, ${ring.current.y - 20}px, 0)`;
    }

    animationId.current = requestAnimationFrame(animate);
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const isInteractiveElement = (element) => {
      if (!element || !element.tagName) return false;
      
      const tagName = element.tagName.toLowerCase();
      const interactiveTags = ['a', 'button', 'input', 'textarea', 'select'];
      
      return interactiveTags.includes(tagName) || 
             element.getAttribute('role') === 'button' ||
             element.classList.contains('clickable') ||
             element.closest('a, button, input, textarea, select, [role="button"], .clickable');
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (isInteractiveElement(target)) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      
      if (!isInteractiveElement(target) || 
          (relatedTarget && !isInteractiveElement(relatedTarget))) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleClick = (e) => {
      // Create click burst effect
      for (let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'cursor-spark';
        const angle = (i * 45) * (Math.PI / 180);
        const distance = Math.random() * 80 + 40;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        spark.style.left = `${e.clientX - 2}px`;
        spark.style.top = `${e.clientY - 2}px`;
        spark.style.setProperty('--dx', `${dx}px`);
        spark.style.setProperty('--dy', `${dy}px`);
        
        document.body.appendChild(spark);
        
        setTimeout(() => {
          if (document.body.contains(spark)) {
            document.body.removeChild(spark);
          }
        }, 800);
      }
      
      // Create expanding ring
      const ring = document.createElement('div');
      ring.className = 'cursor-click-ring';
      ring.style.left = `${e.clientX - 25}px`;
      ring.style.top = `${e.clientY - 25}px`;
      document.body.appendChild(ring);
      
      setTimeout(() => {
        if (document.body.contains(ring)) {
          document.body.removeChild(ring);
        }
      }, 600);
    };

    // Start animation
    animationId.current = requestAnimationFrame(animate);
    
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true, capture: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true, capture: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('click', handleClick, { passive: true });

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('click', handleClick);
    };
  }, [animate]);

  return (
    <>
      {/* Cursor Dot */}
      <div 
        ref={cursorDotRef}
        className={`cursor-dot ${isHovering ? 'dot-hover' : ''} ${isClicking ? 'dot-click' : ''}`}
      />
      
      {/* Cursor Ring */}
      <div 
        ref={cursorRingRef}
        className={`cursor-ring ${isHovering ? 'ring-hover' : ''} ${isClicking ? 'ring-click' : ''}`}
      />
    </>
  );
}

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <ModernCursor />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;