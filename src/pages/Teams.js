import React from 'react';
import './Teams.css';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'AI Research Director',
      specialization: 'Machine Learning & Neural Networks',
      image: 'https://via.placeholder.com/300x300/00d2ff/ffffff?text=SC',
      bio: 'Leading AI researcher with 10+ years in deep learning and neural network architectures.',
      skills: ['Deep Learning', 'TensorFlow', 'PyTorch', 'Computer Vision'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Full-Stack AI Developer',
      specialization: 'AI-Powered Web Applications',
      image: 'https://via.placeholder.com/300x300/00f5a0/ffffff?text=MR',
      bio: 'Expert in integrating AI capabilities into modern web applications and cloud platforms.',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Aisha Patel',
      role: 'UX/UI Design Lead',
      specialization: 'AI Interface Design',
      image: 'https://via.placeholder.com/300x300/0077b6/ffffff?text=AP',
      bio: 'Specialized in creating intuitive interfaces for complex AI systems and machine learning tools.',
      skills: ['Figma', 'Adobe Creative', 'Prototyping', 'User Research'],
      social: {
        linkedin: '#',
        dribbble: '#',
        behance: '#'
      }
    },
    {
      id: 4,
      name: 'James Thompson',
      role: 'Mobile AI Architect',
      specialization: 'AI-Enhanced Mobile Apps',
      image: 'https://via.placeholder.com/300x300/003566/ffffff?text=JT',
      bio: 'Mobile development expert focusing on on-device AI and edge computing solutions.',
      skills: ['React Native', 'Flutter', 'TensorFlow Lite', 'Core ML'],
      social: {
        linkedin: '#',
        github: '#',
        medium: '#'
      }
    },
    {
      id: 5,
      name: 'Elena Kowalski',
      role: 'Data Science Lead',
      specialization: 'Big Data & Analytics',
      image: 'https://via.placeholder.com/300x300/001d3d/ffffff?text=EK',
      bio: 'Data scientist specializing in large-scale data processing and predictive analytics.',
      skills: ['Python', 'R', 'Spark', 'Hadoop', 'SQL'],
      social: {
        linkedin: '#',
        github: '#',
        kaggle: '#'
      }
    },
    {
      id: 6,
      name: 'David Kim',
      role: 'AI Solutions Architect',
      specialization: 'Enterprise AI Integration',
      image: 'https://via.placeholder.com/300x300/000814/ffffff?text=DK',
      bio: 'Architect designing scalable AI solutions for enterprise-level digital transformation.',
      skills: ['System Design', 'Microservices', 'Kubernetes', 'Cloud Architecture'],
      social: {
        linkedin: '#',
        github: '#',
        medium: '#'
      }
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      description: 'Cutting-edge research in machine learning, neural networks, and emerging AI technologies.',
      icon: 'fas fa-brain',
      color: '#00d2ff'
    },
    {
      name: 'Product Development',
      description: 'Building intelligent digital products that solve real-world problems with AI.',
      icon: 'fas fa-rocket',
      color: '#00f5a0'
    },
    {
      name: 'Data Science & Analytics',
      description: 'Extracting insights from complex data to drive intelligent decision-making.',
      icon: 'fas fa-chart-line',
      color: '#0077b6'
    },
    {
      name: 'AI Consulting',
      description: 'Strategic guidance for organizations adopting AI and digital transformation.',
      icon: 'fas fa-lightbulb',
      color: '#003566'
    }
  ];

  return (
    <div className="teams-page">
      {/* Neural Network Background */}
      <div className="teams-neural-bg">
        <canvas id="teams-neural-canvas"></canvas>
      </div>

      {/* Hero Section */}
      <section className="teams-hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="title-xl">Meet Our AI Pioneers</h1>
            <p className="subtitle">
              Brilliant minds shaping the future of artificial intelligence and digital innovation
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">AI Experts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">AI Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-members">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Leadership Team</h2>
            <p className="subtitle">Meet the visionaries leading our AI revolution</p>
          </div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="card-front">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                    <div className="image-overlay">
                      <div className="ai-pulse-ring"></div>
                    </div>
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-specialization">{member.specialization}</p>
                  </div>
                </div>
                
                <div className="card-back">
                  <div className="member-details">
                    <h4>About {member.name.split(' ')[0]}</h4>
                    <p className="member-bio">{member.bio}</p>
                    
                    <div className="member-skills">
                      <h5>Expertise</h5>
                      <div className="skills-list">
                        {member.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="member-social">
                      {Object.entries(member.social).map(([platform, link]) => (
                        <a key={platform} href={link} className="social-link">
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="title-lg">Our Departments</h2>
            <p className="subtitle">Specialized teams working together to advance AI technology</p>
          </div>

          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <div className="dept-icon" style={{ color: dept.color }}>
                  <i className={dept.icon}></i>
                </div>
                <h3 className="dept-name">{dept.name}</h3>
                <p className="dept-description">{dept.description}</p>
                <div className="dept-pulse" style={{ backgroundColor: dept.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team">
        <div className="container">
          <div className="join-content text-center">
            <h2 className="title-lg">Join Our AI Mission</h2>
            <p className="subtitle">
              Ready to shape the future of artificial intelligence? We're always looking for brilliant minds.
            </p>
            <div className="join-buttons">
              <button className="btn btn-primary">
                <i className="fas fa-briefcase"></i>
                View Open Positions
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-envelope"></i>
                Send Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;