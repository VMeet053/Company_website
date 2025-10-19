// Services Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeServicesPage();
});

function initializeServicesPage() {
    initializeServiceFilters();
    initializeCounters();
    initializeInteractiveElements();
    initializeScrollAnimations();
    initializeTechIcons();
    
    console.log('🚀 Services page initialized with advanced interactions!');
}

// Service Filter Functionality
function initializeServiceFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterCategory = button.dataset.filter;
            
            // Filter service cards with animation
            filterServiceCards(serviceCards, filterCategory);
        });
    });
}

function filterServiceCards(cards, category) {
    cards.forEach((card, index) => {
        const isVisible = category === 'all' || card.classList.contains(category);
        
        if (isVisible) {
            // Show card with staggered animation
            setTimeout(() => {
                card.classList.remove('hidden');
                card.style.animationDelay = `${index * 0.1}s`;
                card.style.animation = 'serviceCardRise 0.8s ease-out forwards';
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        } else {
            // Hide card with fade out
            card.style.animation = 'fadeOut 0.5s ease-out forwards';
            setTimeout(() => {
                card.classList.add('hidden');
            }, 500);
        }
    });
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + (target === 98 ? '%' : '+');
            clearInterval(timer);
            
            // Add completion effect
            element.parentElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.parentElement.style.transform = '';
            }, 300);
        } else {
            element.textContent = Math.floor(current) + (target === 98 ? '%' : '');
        }
    }, 16);
}

// Interactive Elements
function initializeInteractiveElements() {
    // Service card interactions
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createServiceParticles(card);
            addCardTiltEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removeCardTiltEffect(card);
        });
    });
    
    // Process step interactions
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            addProcessStepEffect(step, index);
        });
        
        step.addEventListener('mouseleave', () => {
            removeProcessStepEffect(step);
        });
    });
    
    // Tech item interactions
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('click', () => {
            createTechItemEffect(item);
        });
    });
}

function createServiceParticles(card) {
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'service-particle';
            
            const x = Math.random() * card.offsetWidth;
            const y = Math.random() * card.offsetHeight;
            
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: var(--primary-color);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 10;
                animation: particleFloat 2s ease-out forwards;
            `;
            
            card.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }, i * 200);
    }
}

function addCardTiltEffect(card) {
    card.addEventListener('mousemove', handleCardTilt);
}

function removeCardTiltEffect(card) {
    card.removeEventListener('mousemove', handleCardTilt);
    card.style.transform = '';
}

function handleCardTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
}

function addProcessStepEffect(step, index) {
    const stepContent = step.querySelector('.step-content');
    const stepNumber = step.querySelector('.step-number');
    
    if (stepContent) {
        stepContent.style.transform = 'scale(1.05) rotateY(5deg)';
        stepContent.style.background = `rgba(0, 212, 255, 0.1)`;
    }
    
    if (stepNumber) {
        stepNumber.style.transform = 'translateX(-50%) scale(1.2) rotateZ(360deg)';
        stepNumber.style.background = 'var(--gradient-secondary)';
    }
    
    // Add connecting line animation
    const connector = step.querySelector('.step-connector');
    if (connector) {
        connector.style.background = 'var(--gradient-secondary)';
        connector.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
    }
}

function removeProcessStepEffect(step) {
    const stepContent = step.querySelector('.step-content');
    const stepNumber = step.querySelector('.step-number');
    const connector = step.querySelector('.step-connector');
    
    if (stepContent) {
        stepContent.style.transform = '';
        stepContent.style.background = '';
    }
    
    if (stepNumber) {
        stepNumber.style.transform = '';
        stepNumber.style.background = '';
    }
    
    if (connector) {
        connector.style.background = '';
        connector.style.boxShadow = '';
    }
}

function createTechItemEffect(item) {
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: rgba(123, 104, 238, 0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: techRipple 0.6s ease-out;
        pointer-events: none;
        z-index: 5;
    `;
    
    item.style.position = 'relative';
    item.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
    
    // Add temporary glow
    item.style.boxShadow = '0 0 20px rgba(123, 104, 238, 0.6)';
    setTimeout(() => {
        item.style.boxShadow = '';
    }, 1000);
}

// Tech Icons Interaction
function initializeTechIcons() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Rotate and scale animation
            icon.style.transform = 'scale(1.5) rotateZ(720deg)';
            icon.style.background = 'var(--gradient-secondary)';
            
            setTimeout(() => {
                icon.style.transform = '';
                icon.style.background = '';
            }, 800);
            
            // Create expanding circle effect
            createExpandingCircle(icon);
        });
    });
    
    // Add mouse tracking for subtle movement
    document.addEventListener('mousemove', (e) => {
        techIcons.forEach((icon, index) => {
            const speed = (index + 1) * 0.3;
            const x = (e.clientX - window.innerWidth / 2) * speed * 0.01;
            const y = (e.clientY - window.innerHeight / 2) * speed * 0.01;
            
            icon.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
}

function createExpandingCircle(icon) {
    const circle = document.createElement('div');
    const rect = icon.getBoundingClientRect();
    
    circle.style.cssText = `
        position: fixed;
        top: ${rect.top + rect.height/2}px;
        left: ${rect.left + rect.width/2}px;
        width: 10px;
        height: 10px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: expandingCircle 1s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    document.body.appendChild(circle);
    
    setTimeout(() => {
        if (circle.parentNode) {
            circle.parentNode.removeChild(circle);
        }
    }, 1000);
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Animate service cards when they come into view
    const serviceCards = document.querySelectorAll('.service-card');
    const processSteps = document.querySelectorAll('.process-step');
    const techCategories = document.querySelectorAll('.tech-category');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('service-card')) {
                    addServiceCardScrollEffect(entry.target);
                } else if (entry.target.classList.contains('process-step')) {
                    addProcessStepScrollEffect(entry.target);
                } else if (entry.target.classList.contains('tech-category')) {
                    addTechCategoryScrollEffect(entry.target);
                }
                
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    [...serviceCards, ...processSteps, ...techCategories].forEach(element => {
        scrollObserver.observe(element);
    });
}

function addServiceCardScrollEffect(card) {
    // Add a subtle glow when it comes into view
    setTimeout(() => {
        card.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.3)';
        setTimeout(() => {
            card.style.boxShadow = '';
        }, 2000);
    }, 300);
}

function addProcessStepScrollEffect(step) {
    const stepNumber = step.querySelector('.step-number');
    if (stepNumber) {
        stepNumber.style.animation = 'numberPulse 1s ease-in-out';
    }
}

function addTechCategoryScrollEffect(category) {
    const items = category.querySelectorAll('.tech-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateY(-5px)';
            item.style.background = 'rgba(123, 104, 238, 0.2)';
            
            setTimeout(() => {
                item.style.transform = '';
                item.style.background = '';
            }, 500);
        }, index * 100);
    });
}

// Add custom CSS animations
const servicesStyles = document.createElement('style');
servicesStyles.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes techRipple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
    
    @keyframes expandingCircle {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(5);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-30px);
        }
    }
    
    /* Enhanced hover effects */
    .service-card:hover {
        transform: translateY(-20px) rotateX(5deg) scale(1.02) !important;
    }
    
    .tech-item:hover {
        background: var(--gradient-arvr) !important;
        color: var(--text-primary) !important;
        transform: translateY(-8px) scale(1.1) !important;
    }
    
    .process-step:hover .step-icon {
        animation: stepIconSpin 0.8s ease-in-out !important;
    }
    
    @keyframes stepIconSpin {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
    }
    
    /* Grid line enhancements */
    .grid-line:hover {
        opacity: 0.5 !important;
        transform: scaleX(1.1) !important;
        box-shadow: 0 0 10px var(--primary-color) !important;
    }
    
    /* Service overlay improvements */
    .service-overlay {
        backdrop-filter: blur(10px) !important;
    }
    
    .service-card:hover .service-overlay {
        opacity: 0.98 !important;
    }
`;

document.head.appendChild(servicesStyles);

// Advanced interaction: Service card magnetic effect
function initializeMagneticCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / 20;
            const deltaY = (y - centerY) / 20;
            
            card.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Initialize magnetic effect after a delay
setTimeout(() => {
    initializeMagneticCards();
}, 2000);

// Export functions for potential use
window.ServicesPage = {
    filterServiceCards,
    createServiceParticles,
    animateCounter
};

console.log('✨ Services page enhanced with magnetic cards and particle effects!');