// Contact Page JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components when DOM is loaded
    initParticleAnimation();
    initScrollToForm();
    initContactMethods();
    initMultiStepForm();
    initFAQ();
    initFormValidation();
});

// Particle Animation Canvas
function initParticleAnimation() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    // Resize canvas
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.life = Math.random() * 100 + 50;
            this.maxLife = this.life;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life--;

            // Fade out as life decreases
            this.opacity = (this.life / this.maxLife) * 0.5;

            // Wrap around screen
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;

            // Respawn particle
            if (this.life <= 0) {
                this.life = this.maxLife;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            // Create gradient for particle
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius
            );
            gradient.addColorStop(0, '#ff6b35');
            gradient.addColorStop(1, '#f7931e');
            
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
    }

    // Initialize particles
    function createParticles() {
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections between nearby particles
        drawConnections();

        animationId = requestAnimationFrame(animate);
    }

    // Draw connections between particles
    function drawConnections() {
        const maxDistance = 120;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.1;
                    ctx.save();
                    ctx.globalAlpha = opacity;
                    ctx.strokeStyle = '#ff6b35';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    }

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', function() {
        resizeCanvas();
        createParticles();
    });

    // Pause animation when page is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        } else {
            animate();
        }
    });
}

// Scroll to Form Button
function initScrollToForm() {
    const scrollBtn = document.querySelector('.scroll-to-form-btn');
    const formSection = document.getElementById('contact-form');

    if (scrollBtn && formSection) {
        scrollBtn.addEventListener('click', function() {
            formSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

// Contact Methods Animation
function initContactMethods() {
    const methodCards = document.querySelectorAll('.method-card');
    
    // Intersection Observer for animation trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.2 });

    methodCards.forEach(card => {
        observer.observe(card);
        
        // Add hover sound effect (visual feedback)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Chat button functionality
    const chatBtn = document.querySelector('.chat-btn');
    if (chatBtn) {
        chatBtn.addEventListener('click', function() {
            // Simulate chat opening
            alert('Chat feature would open here! For now, please use our contact form or email us directly.');
        });
    }
}

// Multi-Step Form Functionality
function initMultiStepForm() {
    const form = document.getElementById('contact-form-element');
    const steps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    let currentStep = 1;
    const totalSteps = steps.length;

    // Update progress bar
    function updateProgress() {
        const progress = (currentStep / totalSteps) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
    }

    // Show specific step
    function showStep(stepNumber) {
        steps.forEach((step, index) => {
            step.classList.remove('active');
            if (index === stepNumber - 1) {
                step.classList.add('active');
            }
        });
        currentStep = stepNumber;
        updateProgress();
    }

    // Validate current step
    function validateCurrentStep() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        const requiredInputs = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            const errorElement = input.parentNode.querySelector('.form-error');
            
            if (!input.value.trim()) {
                showError(input, 'This field is required');
                isValid = false;
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                showError(input, 'Please enter a valid email address');
                isValid = false;
            } else {
                hideError(input);
            }
        });

        return isValid;
    }

    // Next step functionality
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (validateCurrentStep() && currentStep < totalSteps) {
                showStep(currentStep + 1);
            }
        });
    });

    // Previous step functionality
    prevBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateCurrentStep()) {
            submitForm();
        }
    });

    // Initialize first step
    updateProgress();
}

// Form Validation Functions
function initFormValidation() {
    const inputs = document.querySelectorAll('input, select, textarea');
    const descriptionTextarea = document.getElementById('projectDescription');
    const charCount = document.querySelector('.char-count');

    // Real-time validation
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Clear error on input
            hideError(this);
        });
    });

    // Character count for description
    if (descriptionTextarea && charCount) {
        descriptionTextarea.addEventListener('input', function() {
            const length = this.value.length;
            const maxLength = 1000;
            charCount.textContent = `${length} / ${maxLength} characters`;
            
            if (length > maxLength) {
                charCount.style.color = '#e74c3c';
                this.value = this.value.substring(0, maxLength);
            } else if (length > maxLength * 0.9) {
                charCount.style.color = '#f39c12';
            } else {
                charCount.style.color = 'var(--text-secondary)';
            }
        });
    }
}

function validateField(field) {
    const errorElement = field.parentNode.querySelector('.form-error');
    
    if (field.hasAttribute('required') && !field.value.trim()) {
        showError(field, 'This field is required');
        return false;
    }
    
    if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
        showError(field, 'Please enter a valid email address');
        return false;
    }
    
    if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
        showError(field, 'Please enter a valid phone number');
        return false;
    }
    
    hideError(field);
    return true;
}

function showError(field, message) {
    const errorElement = field.parentNode.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    field.style.borderColor = '#e74c3c';
}

function hideError(field) {
    const errorElement = field.parentNode.querySelector('.form-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
    field.style.borderColor = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Form Submission
function submitForm() {
    const form = document.getElementById('contact-form-element');
    const submitBtn = document.querySelector('.btn-submit');
    const successMessage = document.getElementById('success-message');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.classList.add('show');
        
        // Reset loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Log form data (in real app, this would be sent to server)
        const formData = new FormData(form);
        console.log('Form Data Submitted:', Object.fromEntries(formData));
        
    }, 2000);

    // Reset form button
    const newMessageBtn = document.querySelector('.btn-new-message');
    if (newMessageBtn) {
        newMessageBtn.addEventListener('click', function() {
            // Reset form
            form.reset();
            form.style.display = 'block';
            successMessage.classList.remove('show');
            
            // Reset to first step
            const steps = document.querySelectorAll('.form-step');
            steps.forEach((step, index) => {
                step.classList.remove('active');
                if (index === 0) {
                    step.classList.add('active');
                }
            });
            
            // Reset progress
            const progressFill = document.querySelector('.progress-fill');
            const progressText = document.querySelector('.progress-text');
            progressFill.style.width = '33.33%';
            progressText.textContent = 'Step 1 of 3';
        });
    }
}

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add floating effect to orbs on mouse move
document.addEventListener('mousemove', function(e) {
    const orbs = document.querySelectorAll('.orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.method-card, .feature-item, .faq-item').forEach(el => {
    scrollObserver.observe(el);
});

// Add some interactive feedback
document.addEventListener('click', function(e) {
    // Create click ripple effect for buttons
    if (e.target.matches('button, .btn, .method-card')) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = (e.offsetX - 10) + 'px';
        ripple.style.top = (e.offsetY - 10) + 'px';
        ripple.style.width = ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';
        
        e.target.style.position = 'relative';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);