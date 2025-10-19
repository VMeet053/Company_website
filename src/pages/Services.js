import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile AI Development',
      description: 'Intelligent mobile applications powered by machine learning and AI algorithms.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Web AI Solutions',
      description: 'Smart web platforms with AI-driven user experiences and automation.'
    },
    {
      icon: 'fas fa-vr-cardboard',
      title: 'AR/VR Experiences',
      description: 'Immersive reality solutions enhanced with artificial intelligence.'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Automation',
      description: 'Intelligent process automation and workflow optimization.'
    },
    {
      icon: 'fas fa-brain',
      title: 'Machine Learning',
      description: 'Custom ML models and neural networks for complex data analysis.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'AI Consulting',
      description: 'Strategic AI implementation and digital transformation guidance.'
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <section className="section">
          <h1 className="title-xl text-center">AI-Powered Services</h1>
          <p className="subtitle text-center">
            Comprehensive digital solutions enhanced by artificial intelligence
          </p>
          
          <div className="grid grid-3 gap-medium">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-header text-center">
                  <div className="service-icon-large">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="title-sm text-primary">{service.title}</h3>
                </div>
                <div className="card-body">
                  <p className="lead">{service.description}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-secondary">
                    <i className="fas fa-arrow-right"></i>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;