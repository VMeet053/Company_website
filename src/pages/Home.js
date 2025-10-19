import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const neuralCanvasRef = useRef(null);

  useEffect(() => {
    initNeuralNetwork();
  }, []);

  const initNeuralNetwork = () => {
    const canvas = neuralCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const connections = [];
    
    // Simple neural network animation
    class NeuralNode {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 4 + 2;
        this.activity = Math.random();
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.activity = 0.3 + 0.7 * Math.sin(Date.now() * 0.002 + this.pulsePhase);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 210, 255, ${this.activity})`;
        ctx.fill();
      }
    }

    // Create nodes
    for (let i = 0; i < 50; i++) {
      nodes.push(new NeuralNode(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      nodes.forEach(node => {
        node.update();
        node.draw();
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  return (
    <div className="home-page">
      {/* Neural Network Background */}
      <div className="neural-background">
        <canvas ref={neuralCanvasRef} className="neural-network-canvas"></canvas>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">Deep Ocean</span>
                <span className="title-line text-gradient">Technology</span>
                <span className="title-line">Solutions</span>
              </h1>
              <p className="hero-subtitle">
                Diving into the depths of innovation to surface breakthrough digital solutions. 
                We navigate the vast digital ocean to deliver transformative experiences that flow seamlessly across all platforms.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary">
                  <i className="fas fa-water"></i>
                  Explore Ocean Tech
                </button>
                <button className="btn btn-secondary">
                  <i className="fas fa-compass"></i>
                  Navigate Solutions
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-container">
                {/* 3D Robot Model */}
                <div className="robot-model">
                  <div className="robot-container">
                    {/* Robot Head */}
                    <div className="robot-head">
                      <div className="robot-eye left-eye"></div>
                      <div className="robot-eye right-eye"></div>
                      <div className="robot-antenna"></div>
                    </div>
                    
                    {/* Robot Body */}
                    <div className="robot-body">
                      <div className="robot-chest-panel">
                        <div className="chest-light"></div>
                        <div className="chest-details">
                          <div className="detail-line"></div>
                          <div className="detail-line"></div>
                          <div className="detail-line"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Robot Arms */}
                    <div className="robot-arm left-arm">
                      <div className="arm-segment upper-arm"></div>
                      <div className="arm-segment lower-arm"></div>
                      <div className="robot-hand">
                        <div className="hand-finger"></div>
                        <div className="hand-finger"></div>
                        <div className="hand-finger"></div>
                      </div>
                    </div>
                    
                    <div className="robot-arm right-arm">
                      <div className="arm-segment upper-arm"></div>
                      <div className="arm-segment lower-arm"></div>
                      <div className="robot-hand">
                        <div className="hand-finger"></div>
                        <div className="hand-finger"></div>
                        <div className="hand-finger"></div>
                      </div>
                    </div>
                    
                    {/* Robot Base/Wheels */}
                    <div className="robot-base">
                      <div className="robot-wheel left-wheel"></div>
                      <div className="robot-wheel right-wheel"></div>
                      <div className="base-detail"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="floating-element elem-1">
                    <i className="fas fa-cog"></i>
                  </div>
                  <div className="floating-element elem-2">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <div className="floating-element elem-3">
                    <i className="fas fa-wifi"></i>
                  </div>
                </div>
                
                {/* Enhanced AI Orb */}
                <div className="ai-orb">
                  <div className="orb-core"></div>
                  <div className="orb-ring ring-1"></div>
                  <div className="orb-ring ring-2"></div>
                  <div className="orb-ring ring-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Deep Tech Solutions</h2>
            <p className="subtitle">Navigate our ocean of innovative services</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-anchor"></i>
              </div>
              <h3>Anchored Mobile Apps</h3>
              <p>Stable and reliable mobile solutions that weather any digital storm</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-ship"></i>
              </div>
              <h3>Web Vessel Platforms</h3>
              <p>Navigate the digital seas with our flagship web applications</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-diving-mask"></i>
              </div>
              <h3>Immersive Depths</h3>
              <p>Dive deep into virtual worlds with our AR/VR experiences</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-fish"></i>
              </div>
              <h3>Current Automation</h3>
              <p>Let our intelligent currents carry your processes to new depths</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" data-target="500">0</div>
              <div className="stat-label">Ocean Voyages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="150">0</div>
              <div className="stat-label">Navigation Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="99">0</div>
              <div className="stat-label">Safe Harbors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-target="24">0</div>
              <div className="stat-label">Tide Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Why Navigate With Us?</h2>
            <p className="subtitle">Discover what makes our ocean technology solutions unique</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-compass"></i>
              </div>
              <h3>Expert Navigation</h3>
              <p>Our seasoned captains have charted digital waters for over 15 years, ensuring your project reaches its destination safely and efficiently.</p>
              <div className="feature-stats">
                <span className="stat">98% Success Rate</span>
                <span className="stat">500+ Projects</span>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Storm-Proof Security</h3>
              <p>Advanced security protocols protect your digital assets from the fiercest cyber storms, with military-grade encryption and continuous monitoring.</p>
              <div className="feature-stats">
                <span className="stat">Zero Breaches</span>
                <span className="stat">24/7 Monitoring</span>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Lightning Speed</h3>
              <p>Our optimized workflows and cutting-edge technology stack ensure rapid deployment, getting your solutions to market faster than ocean currents.</p>
              <div className="feature-stats">
                <span className="stat">3x Faster Delivery</span>
                <span className="stat">48hr Response</span>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Scalable Architecture</h3>
              <p>Built to grow with your business, our solutions adapt like tidal forces, expanding and contracting based on your evolving needs.</p>
              <div className="feature-stats">
                <span className="stat">Auto-Scaling</span>
                <span className="stat">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Our Deep Sea Development Process</h2>
            <p className="subtitle">A proven methodology that navigates your project from concept to deployment</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-map"></i>
                </div>
                <h3>Discovery & Mapping</h3>
                <p>We dive deep into your business requirements, mapping out the digital landscape and identifying opportunities for innovation. Our discovery phase includes stakeholder interviews, competitive analysis, and technical audits.</p>
                <ul className="step-features">
                  <li>Comprehensive Requirements Analysis</li>
                  <li>Market Research & Competitor Analysis</li>
                  <li>Technical Architecture Assessment</li>
                  <li>Risk Assessment & Mitigation Planning</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <h3>Strategic Planning</h3>
                <p>Like charting a course through uncharted waters, we create detailed project roadmaps, technology selection, and resource allocation plans that ensure smooth sailing from start to finish.</p>
                <ul className="step-features">
                  <li>Detailed Project Roadmap Creation</li>
                  <li>Technology Stack Selection</li>
                  <li>Resource Allocation & Timeline Planning</li>
                  <li>Budget Optimization & Cost Analysis</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-hammer"></i>
                </div>
                <h3>Development & Construction</h3>
                <p>Our skilled crew builds your digital vessel using agile methodologies, ensuring quality at every stage. We maintain transparent communication throughout the development process.</p>
                <ul className="step-features">
                  <li>Agile Development Methodology</li>
                  <li>Continuous Integration & Deployment</li>
                  <li>Quality Assurance & Testing</li>
                  <li>Regular Progress Updates & Demos</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-anchor"></i>
                </div>
                <h3>Launch & Deployment</h3>
                <p>We ensure your solution launches smoothly into the digital ocean, with comprehensive testing, performance optimization, and seamless migration strategies.</p>
                <ul className="step-features">
                  <li>Production Environment Setup</li>
                  <li>Performance Optimization & Load Testing</li>
                  <li>Security Audits & Penetration Testing</li>
                  <li>Go-Live Support & Monitoring</li>
                </ul>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className="fas fa-life-ring"></i>
                </div>
                <h3>Ongoing Support</h3>
                <p>Like a lighthouse guiding ships safely to shore, our support team provides continuous monitoring, maintenance, and enhancement services to keep your solution performing optimally.</p>
                <ul className="step-features">
                  <li>24/7 System Monitoring & Alerts</li>
                  <li>Regular Updates & Security Patches</li>
                  <li>Performance Optimization & Scaling</li>
                  <li>Feature Enhancements & Evolution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Our Technology Arsenal</h2>
            <p className="subtitle">Powered by the latest and most reliable technologies in the digital ocean</p>
          </div>
          
          <div className="tech-showcase">
            <div className="tech-category-showcase">
              <h3>Frontend Technologies</h3>
              <p>Creating beautiful, responsive interfaces that flow like ocean waves</p>
              <div className="tech-logos">
                <div className="tech-logo">React</div>
                <div className="tech-logo">Vue.js</div>
                <div className="tech-logo">Angular</div>
                <div className="tech-logo">Next.js</div>
                <div className="tech-logo">TypeScript</div>
                <div className="tech-logo">Tailwind CSS</div>
              </div>
            </div>
            
            <div className="tech-category-showcase">
              <h3>Backend & Infrastructure</h3>
              <p>Robust server solutions that withstand any digital storm</p>
              <div className="tech-logos">
                <div className="tech-logo">Node.js</div>
                <div className="tech-logo">Python</div>
                <div className="tech-logo">Java</div>
                <div className="tech-logo">Docker</div>
                <div className="tech-logo">Kubernetes</div>
                <div className="tech-logo">AWS</div>
              </div>
            </div>
            
            <div className="tech-category-showcase">
              <h3>Database & Analytics</h3>
              <p>Deep data solutions that navigate complex information currents</p>
              <div className="tech-logos">
                <div className="tech-logo">PostgreSQL</div>
                <div className="tech-logo">MongoDB</div>
                <div className="tech-logo">Redis</div>
                <div className="tech-logo">Elasticsearch</div>
                <div className="tech-logo">GraphQL</div>
                <div className="tech-logo">Apache Kafka</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Voices from the Harbor</h2>
            <p className="subtitle">Hear from captains who've successfully navigated their digital transformation</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Deep Ocean Technology didn't just build our platform—they architected our entire digital future. Their expertise in navigating complex requirements while maintaining elegant simplicity is unmatched."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="author-info">
                  <h4>Captain Maria Rodriguez</h4>
                  <span>CEO, TechWave Industries</span>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The team's ability to dive deep into our business needs and surface with innovative solutions was remarkable. They transformed our outdated systems into a modern, scalable ecosystem."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-astronaut"></i>
                </div>
                <div className="author-info">
                  <h4>Admiral James Chen</h4>
                  <span>CTO, Digital Currents Corp</span>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Working with Deep Ocean Technology felt like having an experienced navigator guiding our ship through uncharted digital waters. Their support never wavered, even during the stormiest phases."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-cog"></i>
                </div>
                <div className="author-info">
                  <h4>Navigator Sarah Kim</h4>
                  <span>Founder, Tidal Technologies</span>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Navigation Questions?</h2>
            <p className="subtitle">Find answers to common questions about our digital ocean services</p>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h3>How long does a typical digital transformation voyage take?</h3>
                <i className="fas fa-plus"></i>
              </div>
              <div className="faq-answer">
                <p>Project timelines vary based on complexity and scope, much like ocean voyages depend on distance and weather conditions. Simple applications can be delivered in 6-12 weeks, while complex enterprise solutions may take 6-18 months. We provide detailed timeline estimates during our discovery phase.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>What makes your ocean technology approach different?</h3>
                <i className="fas fa-plus"></i>
              </div>
              <div className="faq-answer">
                <p>Our ocean-inspired methodology combines depth of expertise with fluid adaptability. We dive deep into your business needs, navigate challenges with experienced precision, and ensure your solutions can weather any digital storm while scaling like tidal forces.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you provide ongoing support after launch?</h3>
                <i className="fas fa-plus"></i>
              </div>
              <div className="faq-answer">
                <p>Absolutely! Like a lighthouse providing continuous guidance, we offer 24/7 monitoring, regular maintenance, security updates, and enhancement services. Our support ensures your digital vessel continues sailing smoothly long after launch.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>Can you work with our existing technology infrastructure?</h3>
                <i className="fas fa-plus"></i>
              </div>
              <div className="faq-answer">
                <p>Yes! We're experts at integrating with existing systems, like connecting different ocean currents. Whether you need to modernize legacy systems or enhance current platforms, we ensure seamless integration without disrupting your operations.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>How do you ensure project security and data protection?</h3>
                <i className="fas fa-plus"></i>
              </div>
              <div className="faq-answer">
                <p>Security is our anchor principle. We implement military-grade encryption, conduct regular security audits, follow GDPR and industry compliance standards, and maintain strict access controls. Your data is protected like treasure in the deepest ocean vaults.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <div className="cta-visual">
              <div className="cta-waves">
                <div className="cta-wave"></div>
                <div className="cta-wave"></div>
                <div className="cta-wave"></div>
              </div>
            </div>
            <h2 className="title-lg mb-medium">Ready to Set Sail on Your Digital Journey?</h2>
            <p className="subtitle mb-large">
              Let our experienced crew navigate your business through the vast ocean of digital possibilities. 
              From concept to deployment, we'll ensure your voyage reaches new horizons of success.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg">
                <i className="fas fa-paper-plane"></i>
                Start Your Voyage
              </button>
              <button className="btn btn-secondary btn-lg">
                <i className="fas fa-phone"></i>
                Schedule Consultation
              </button>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <i className="fas fa-check-circle"></i>
                <span>Free Initial Consultation</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check-circle"></i>
                <span>No Long-term Contracts Required</span>
              </div>
              <div className="cta-feature">
                <i className="fas fa-check-circle"></i>
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;