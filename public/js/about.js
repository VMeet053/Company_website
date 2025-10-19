// About Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeAboutPage();
});

function initializeAboutPage() {
    initializeTeamFilter();
    initializeScrollAnimations();
    initializeTimelineAnimations();
    initializeCounters();
    initializeParticleEffects();
    
    console.log('🎯 About page initialized with enhanced animations!');
}

// Team Filter Functionality
function initializeTeamFilter() {
    const filterButtons = document.querySelectorAll('.team-filter');
    const teamCards = document.querySelectorAll('.team-member-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterCategory = button.dataset.category;
            
            // Filter team cards with animation
            filterTeamCards(teamCards, filterCategory);
        });
    });
}

function filterTeamCards(cards, category) {
    cards.forEach((card, index) => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === 'all' || cardCategory === category;
        
        if (shouldShow) {
            // Show card with staggered animation
            setTimeout(() => {
                card.classList.remove('hidden');
                card.style.animationDelay = `${index * 0.1}s`;
                card.style.animation = 'memberCardSlide 0.8s ease-out forwards';
            }, index * 50);
        } else {
            // Hide card with fade out
            card.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                card.classList.add('hidden');
            }, 300);
        }
    });
}

// Enhanced Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.timeline-item, .value-card, .team-member-card, .culture-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                // Add special effects for different element types
                if (entry.target.classList.contains('value-card')) {
                    addValueCardEffects(entry.target);
                } else if (entry.target.classList.contains('timeline-item')) {
                    addTimelineEffects(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Timeline specific animations
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        // Add hover effects
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.timeline-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotateY(180deg)';
                icon.style.background = 'var(--gradient-secondary)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.timeline-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.background = '';
            }
        });
    });
}

// Counter Animation for Statistics
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number, .highlight-number');
    
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
            element.textContent = target + (element.classList.contains('highlight-number') ? '' : '+');
            clearInterval(timer);
            
            // Add completion effect
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = '';
            }, 200);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Particle Effects for Value Cards
function initializeParticleEffects() {
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createParticleEffect(card);
        });
    });
}

function createParticleEffect(card) {
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'dynamic-particle';
            
            // Random position within card
            const x = Math.random() * card.offsetWidth;
            const y = Math.random() * card.offsetHeight;
            
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary-color);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 10;
                animation: particleBurst 1s ease-out forwards;
            `;
            
            card.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }, i * 100);
    }
}

// Add special effects for value cards
function addValueCardEffects(card) {
    // Add ripple effect on hover
    card.addEventListener('mouseenter', () => {
        const ripple = document.createElement('div');
        ripple.className = 'card-ripple';
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 107, 53, 0.1);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
            z-index: 1;
        `;
        
        card.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    });
}

// Add timeline effects
function addTimelineEffects(item) {
    const content = item.querySelector('.timeline-content');
    if (content) {
        // Add glow effect when in view
        content.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.2)';
        
        setTimeout(() => {
            content.style.boxShadow = '';
        }, 2000);
    }
}

// Enhanced Mission Circle Animation
function initializeMissionCircle() {
    const missionCircle = document.querySelector('.mission-circle');
    if (missionCircle) {
        // Add interactive hover effect
        missionCircle.addEventListener('mouseenter', () => {
            missionCircle.style.animationPlayState = 'paused';
            missionCircle.style.transform = 'scale(1.1)';
            
            // Rotate rings faster on hover
            const rings = document.querySelectorAll('.ring');
            rings.forEach((ring, index) => {
                ring.style.animationDuration = '2s';
            });
        });
        
        missionCircle.addEventListener('mouseleave', () => {
            missionCircle.style.animationPlayState = 'running';
            missionCircle.style.transform = '';
            
            // Reset ring animation speed
            const rings = document.querySelectorAll('.ring');
            rings.forEach(ring => {
                ring.style.animationDuration = '';
            });
        });
    }
}

// Dynamic background orbs
function initializeDynamicOrbs() {
    const orbs = document.querySelectorAll('.orb');
    
    // Add mouse tracking effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            
            orb.style.transform = `translate(${x}px, ${y}px) scale(${1 + mouseX * 0.2})`;
        });
    });
}

// Add CSS animations for dynamic elements
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes particleBurst {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(3) translateY(-50px);
            opacity: 0;
        }
    }
    
    @keyframes rippleEffect {
        0% {
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            width: 300px;
            height: 300px;
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
            transform: translateY(-20px);
        }
    }
    
    .dynamic-particle {
        animation: particleBurst 1s ease-out forwards;
    }
    
    .card-ripple {
        animation: rippleEffect 0.6s ease-out forwards;
    }
    
    /* Enhanced hover states */
    .team-member-card:hover .member-avatar {
        transform: scale(1.1) rotateY(10deg) !important;
    }
    
    .value-card:hover .value-icon {
        transform: scale(1.2) rotateZ(180deg) !important;
        filter: brightness(1.2);
    }
    
    .timeline-item:hover .timeline-icon {
        animation-play-state: paused;
        transform: scale(1.2) rotateY(180deg);
    }
    
    /* Smooth transitions for all interactive elements */
    .team-member-card, .value-card, .timeline-item, .culture-item {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

document.head.appendChild(dynamicStyles);

// Initialize additional features
setTimeout(() => {
    initializeMissionCircle();
    initializeDynamicOrbs();
}, 1000);

// Page transition effect
function initializePageTransition() {
    const transition = document.getElementById('pageTransition');
    if (transition) {
        // Hide transition after page load
        setTimeout(() => {
            transition.classList.remove('active');
        }, 500);
    }
}

// Call page transition on load
window.addEventListener('load', initializePageTransition);

// Export functions for potential use
window.AboutPage = {
    filterTeamCards,
    createParticleEffect,
    animateCounter
};

console.log('✨ About page enhanced with advanced animations and interactions!');