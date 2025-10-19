import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="title-xl text-center">About Deep Ocean Technology</h1>
            <p className="subtitle text-center">
              Navigating the vast digital ocean to deliver transformative technological solutions
            </p>
            <div className="ocean-waves-visual">
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="wave wave-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="grid grid-2 gap-large align-items-center">
            <div className="content-section">
              <h2 className="title-lg text-gradient mb-large">Our Story</h2>
              <p className="text-lg mb-medium">
                Founded in the depths of innovation, Deep Ocean Technology emerged from a vision to explore 
                the uncharted territories of digital transformation. Like skilled ocean navigators, we chart 
                new courses through the complex digital landscape.
              </p>
              <p className="mb-medium">
                Our journey began with a simple belief: that technology should flow as naturally as ocean currents, 
                connecting businesses with their customers through seamless, intuitive experiences. Today, we stand 
                as pioneers in the digital realm, guiding organizations through their technological evolution.
              </p>
              <p>
                With over a decade of experience navigating digital waters, we've helped hundreds of companies 
                discover new depths of possibility, transforming their operations and amplifying their impact 
                across industries.
              </p>
            </div>
            <div className="visual-section">
              <div className="company-visual">
                <div className="ocean-depth-meter">
                  <div className="depth-marker" style={{top: '20%'}}>Surface Innovation</div>
                  <div className="depth-marker" style={{top: '40%'}}>Mid-Level Solutions</div>
                  <div className="depth-marker" style={{top: '60%'}}>Deep Tech Integration</div>
                  <div className="depth-marker" style={{top: '80%'}}>Abyssal Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="grid grid-2 gap-large">
            <div className="card mission-card">
              <div className="card-icon">
                <i className="fas fa-compass"></i>
              </div>
              <h2 className="title-md text-primary mb-medium">Our Mission</h2>
              <p className="mb-medium">
                To navigate the digital ocean with precision and purpose, delivering transformative 
                technology solutions that propel businesses toward unprecedented success.
              </p>
              <p className="mb-medium">
                We believe in diving deep beneath the surface of conventional approaches, exploring 
                innovative methodologies that create lasting value for our clients and their communities.
              </p>
              <p>
                Our mission extends beyond mere service delivery – we're committed to fostering 
                digital literacy, sustainable practices, and inclusive growth across all our partnerships.
              </p>
            </div>
            
            <div className="card vision-card">
              <div className="card-icon">
                <i className="fas fa-lighthouse"></i>
              </div>
              <h2 className="title-md text-primary mb-medium">Our Vision</h2>
              <p className="mb-medium">
                To be the lighthouse guiding businesses through the digital transformation journey, 
                illuminating pathways to innovation and sustainable growth.
              </p>
              <p className="mb-medium">
                We envision a future where technology flows as seamlessly as ocean currents, where 
                businesses of all sizes can harness the power of digital innovation to create 
                meaningful impact in their industries.
              </p>
              <p>
                Our vision encompasses a world where digital solutions are not just functional, 
                but beautiful, accessible, and environmentally conscious – creating waves of positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Our Core Values</h2>
            <p className="subtitle">The depths of principles that guide our every action</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-anchor"></i>
              </div>
              <h3>Stability & Reliability</h3>
              <p>Like a steadfast anchor, we provide unwavering support and dependable solutions that weather any digital storm.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-wave-square"></i>
              </div>
              <h3>Innovation Flow</h3>
              <p>We ride the waves of technological advancement, constantly evolving and adapting to bring cutting-edge solutions.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-diving-mask"></i>
              </div>
              <h3>Deep Expertise</h3>
              <p>Our team dives deep into every project, exploring the depths of possibility to deliver exceptional results.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-ship"></i>
              </div>
              <h3>Collaborative Navigation</h3>
              <p>We sail together with our clients, charting courses that align with their vision and business objectives.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-fish"></i>
              </div>
              <h3>Sustainable Solutions</h3>
              <p>Like a healthy ocean ecosystem, we create solutions that are environmentally conscious and built to last.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-life-ring"></i>
              </div>
              <h3>Continuous Support</h3>
              <p>We provide ongoing guidance and support, ensuring our clients stay afloat in the ever-changing digital seas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Meet Our Crew</h2>
            <p className="subtitle">Expert navigators steering your digital transformation</p>
          </div>
          
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Captain Sarah Chen</h3>
              <p className="role">Chief Technology Officer</p>
              <p>With 15+ years navigating complex digital transformations, Sarah leads our technical vision and ensures every project reaches its destination safely.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user-cog"></i>
              </div>
              <h3>Commander Alex Rivera</h3>
              <p className="role">Lead Solutions Architect</p>
              <p>Alex charts the technical course for our most ambitious projects, diving deep into system architecture and emerging technologies.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <h3>Navigator Maya Patel</h3>
              <p className="role">UX/UI Design Director</p>
              <p>Maya ensures every digital journey is intuitive and beautiful, creating user experiences that flow as naturally as ocean currents.</p>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3>Admiral Jordan Kim</h3>
              <p className="role">Security & Compliance Lead</p>
              <p>Jordan protects our digital vessels from storms and threats, ensuring all solutions meet the highest security and compliance standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="technology-stack">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Our Technology Ocean</h2>
            <p className="subtitle">Cutting-edge tools and frameworks that power our solutions</p>
          </div>
          
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend Currents</h3>
              <div className="tech-items">
                <div className="tech-item">React</div>
                <div className="tech-item">Vue.js</div>
                <div className="tech-item">Angular</div>
                <div className="tech-item">TypeScript</div>
                <div className="tech-item">Next.js</div>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Backend Depths</h3>
              <div className="tech-items">
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Python</div>
                <div className="tech-item">Java</div>
                <div className="tech-item">C#</div>
                <div className="tech-item">Go</div>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Cloud Platforms</h3>
              <div className="tech-items">
                <div className="tech-item">AWS</div>
                <div className="tech-item">Azure</div>
                <div className="tech-item">Google Cloud</div>
                <div className="tech-item">Docker</div>
                <div className="tech-item">Kubernetes</div>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>Database Streams</h3>
              <div className="tech-items">
                <div className="tech-item">PostgreSQL</div>
                <div className="tech-item">MongoDB</div>
                <div className="tech-item">Redis</div>
                <div className="tech-item">Elasticsearch</div>
                <div className="tech-item">GraphQL</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Charted Achievements</h2>
            <p className="subtitle">Milestones in our digital voyage</p>
          </div>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Industry Recognition</h3>
              <p>Awarded "Digital Innovation Leader 2023" by Tech Ocean Summit</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-medal"></i>
              </div>
              <h3>Client Excellence</h3>
              <p>Maintained 99.5% client satisfaction rate across 500+ projects</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Technical Mastery</h3>
              <p>Certified partners with major cloud providers and technology platforms</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Reach</h3>
              <p>Successfully delivered solutions across 25+ countries and 6 continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="journey-timeline">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Our Digital Voyage Through Time</h2>
            <p className="subtitle">Milestones in our ocean technology evolution</p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Setting Sail</h3>
                <p>Founded with a vision to navigate the digital transformation landscape, starting with our first mobile app development project for a local maritime company.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2013</div>
              <div className="timeline-content">
                <h3>Expanding Horizons</h3>
                <p>Launched our cloud infrastructure services, helping 50+ businesses migrate to scalable, secure cloud environments. Established partnerships with major cloud providers.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2016</div>
              <div className="timeline-content">
                <h3>Deep Tech Dive</h3>
                <p>Pioneered AI and machine learning solutions for maritime industries, developing predictive analytics platforms that revolutionized cargo management and route optimization.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>Global Navigation</h3>
                <p>Expanded internationally with offices in 5 countries, serving Fortune 500 companies and completing 200+ successful digital transformation projects.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Sustainable Waters</h3>
                <p>Launched our Green Tech Initiative, focusing on sustainable technology solutions and carbon-neutral cloud infrastructure, reducing client environmental impact by 40%.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Ocean Innovation Hub</h3>
                <p>Established our Deep Ocean Technology Innovation Lab, researching next-generation quantum computing applications and advanced AI models for enterprise solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="industry-expertise">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Industries We Navigate</h2>
            <p className="subtitle">Deep expertise across diverse business oceans</p>
          </div>
          
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Healthcare & Life Sciences</h3>
              <p>Transforming patient care through secure, compliant digital solutions. From telemedicine platforms to AI-powered diagnostic tools, we help healthcare organizations navigate regulatory waters while improving patient outcomes.</p>
              <div className="industry-stats">
                <span>120+ Projects</span>
                <span>HIPAA Compliant</span>
              </div>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-university"></i>
              </div>
              <h3>Financial Services</h3>
              <p>Building robust fintech solutions that weather market storms. Our expertise spans digital banking, blockchain applications, trading platforms, and risk management systems with bank-grade security.</p>
              <div className="industry-stats">
                <span>85+ Projects</span>
                <span>SOX Compliant</span>
              </div>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>E-commerce & Retail</h3>
              <p>Creating seamless shopping experiences across all channels. From omnichannel platforms to inventory management systems, we help retailers sail smoothly through digital transformation.</p>
              <div className="industry-stats">
                <span>200+ Projects</span>
                <span>PCI DSS Certified</span>
              </div>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Manufacturing & IoT</h3>
              <p>Powering Industry 4.0 with smart manufacturing solutions. Our IoT platforms, predictive maintenance systems, and supply chain optimization tools help manufacturers navigate efficiency currents.</p>
              <div className="industry-stats">
                <span>150+ Projects</span>
                <span>ISO 27001 Certified</span>
              </div>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Education Technology</h3>
              <p>Revolutionizing learning through innovative educational platforms. From learning management systems to virtual classrooms, we help educational institutions chart new learning pathways.</p>
              <div className="industry-stats">
                <span>90+ Projects</span>
                <span>FERPA Compliant</span>
              </div>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Sustainability & Clean Tech</h3>
              <p>Developing green technology solutions for a sustainable future. Our environmental monitoring systems, energy management platforms, and carbon tracking tools help organizations reduce their ecological footprint.</p>
              <div className="industry-stats">
                <span>75+ Projects</span>
                <span>Carbon Neutral</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Trusted Partnerships & Certifications</h2>
            <p className="subtitle">Anchored by industry-leading credentials and strategic alliances</p>
          </div>
          
          <div className="certifications-grid">
            <div className="cert-category">
              <h3>Cloud Partnerships</h3>
              <div className="cert-items">
                <div className="cert-item">
                  <i className="fab fa-aws"></i>
                  <span>AWS Advanced Partner</span>
                </div>
                <div className="cert-item">
                  <i className="fab fa-microsoft"></i>
                  <span>Microsoft Gold Partner</span>
                </div>
                <div className="cert-item">
                  <i className="fab fa-google"></i>
                  <span>Google Cloud Premier Partner</span>
                </div>
              </div>
            </div>
            
            <div className="cert-category">
              <h3>Security Certifications</h3>
              <div className="cert-items">
                <div className="cert-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="cert-item">
                  <i className="fas fa-lock"></i>
                  <span>SOC 2 Type II Compliant</span>
                </div>
                <div className="cert-item">
                  <i className="fas fa-user-shield"></i>
                  <span>GDPR Certified</span>
                </div>
              </div>
            </div>
            
            <div className="cert-category">
              <h3>Industry Standards</h3>
              <div className="cert-items">
                <div className="cert-item">
                  <i className="fas fa-check-circle"></i>
                  <span>HIPAA Compliant</span>
                </div>
                <div className="cert-item">
                  <i className="fas fa-credit-card"></i>
                  <span>PCI DSS Level 1</span>
                </div>
                <div className="cert-item">
                  <i className="fas fa-balance-scale"></i>
                  <span>SOX Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-presence">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Navigating Global Waters</h2>
            <p className="subtitle">Our worldwide presence ensures 24/7 support across all time zones</p>
          </div>
          
          <div className="global-stats">
            <div className="global-stat">
              <div className="stat-number">8</div>
              <div className="stat-label">Global Offices</div>
            </div>
            <div className="global-stat">
              <div className="stat-number">25+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="global-stat">
              <div className="stat-number">15</div>
              <div className="stat-label">Time Zones Covered</div>
            </div>
            <div className="global-stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Coverage</div>
            </div>
          </div>
          
          <div className="offices-grid">
            <div className="office-card">
              <h4>North America</h4>
              <ul>
                <li>San Francisco, CA (HQ)</li>
                <li>New York, NY</li>
                <li>Toronto, Canada</li>
              </ul>
            </div>
            
            <div className="office-card">
              <h4>Europe</h4>
              <ul>
                <li>London, United Kingdom</li>
                <li>Amsterdam, Netherlands</li>
                <li>Berlin, Germany</li>
              </ul>
            </div>
            
            <div className="office-card">
              <h4>Asia Pacific</h4>
              <ul>
                <li>Singapore</li>
                <li>Sydney, Australia</li>
                <li>Tokyo, Japan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="innovation-lab">
        <div className="container">
          <div className="section-header text-center mb-large">
            <h2 className="title-lg">Deep Ocean Innovation Lab</h2>
            <p className="subtitle">Exploring tomorrow's technology today</p>
          </div>
          
          <div className="lab-content">
            <div className="lab-description">
              <p className="text-lg mb-medium">
                Our state-of-the-art research facility is where the future of digital technology takes shape. 
                Like deep-sea explorers discovering new species, our innovation team pushes the boundaries 
                of what's possible in the digital realm.
              </p>
              <p className="mb-large">
                From quantum computing experiments to advanced AI model development, the Innovation Lab 
                serves as our lighthouse for emerging technologies, ensuring our clients stay ahead of 
                the technological wave.
              </p>
            </div>
            
            <div className="research-areas">
              <div className="research-area">
                <div className="research-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <h4>Artificial Intelligence</h4>
                <p>Next-generation AI models, machine learning algorithms, and neural network architectures</p>
              </div>
              
              <div className="research-area">
                <div className="research-icon">
                  <i className="fas fa-atom"></i>
                </div>
                <h4>Quantum Computing</h4>
                <p>Exploring quantum algorithms and their applications in cryptography and optimization</p>
              </div>
              
              <div className="research-area">
                <div className="research-icon">
                  <i className="fas fa-cube"></i>
                </div>
                <h4>Blockchain & Web3</h4>
                <p>Decentralized technologies, smart contracts, and distributed ledger innovations</p>
              </div>
              
              <div className="research-area">
                <div className="research-icon">
                  <i className="fas fa-vr-cardboard"></i>
                </div>
                <h4>Extended Reality</h4>
                <p>Immersive AR/VR experiences and mixed reality applications for enterprise solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <div className="cta-visual">
              <div className="cta-compass">
                <div className="compass-ring"></div>
                <div className="compass-needle"></div>
                <div className="compass-center"></div>
              </div>
            </div>
            <h2 className="title-lg mb-medium">Ready to Navigate New Digital Waters?</h2>
            <p className="subtitle mb-large">
              Join the hundreds of companies who have successfully charted their digital transformation 
              journey with Deep Ocean Technology. Let's explore what's possible together.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg">
                <i className="fas fa-paper-plane"></i>
                Start Your Journey
              </button>
              <button className="btn btn-secondary btn-lg">
                <i className="fas fa-phone"></i>
                Schedule Consultation
              </button>
            </div>
            <div className="cta-contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>contact@deepoceantech.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-OCEAN</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;