// Contact Page - AI Neural Network Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all AI-powered components
    initNeuralNetworkContact();
    initAIContactMethods();
    initContactStats();
    initMultiStepForm();
    initFAQ();
    initFormValidation();
});

// Neural Network Canvas Animation for Contact Page
function initNeuralNetworkContact() {
    const canvas = document.getElementById('neural-network-contact');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let nodes = [];
    let connections = [];
    let animationId;

    // Resize canvas
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        initializeNetwork();
    }

    // Contact Neural Node Class (smaller, more contacts)
    class ContactNeuralNode {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = Math.random() * 3 + 1.5;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.activity = Math.random();
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.maxConnections = 4;
            this.connections = [];
            this.isHighlighted = false;
        }

        update() {
            // Move node
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Keep in bounds
            this.x = Math.max(0, Math.min(canvas.width, this.x));
            this.y = Math.max(0, Math.min(canvas.height, this.y));

            // Update activity with contact-like pulsing
            this.activity = 0.4 + 0.6 * Math.sin(Date.now() * 0.002 + this.pulsePhase);
            
            // Decay highlight
            if (this.isHighlighted) {
                this.isHighlighted = Math.max(0, this.isHighlighted - 0.05);
            }
        }

        draw() {
            ctx.save();
            
            // Main node
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            // Create contact gradient
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius * 4
            );
            
            const baseAlpha = this.activity * 0.7 + 0.3;
            const highlightBoost = this.isHighlighted ? 0.5 : 0;
            const alpha = Math.min(1, baseAlpha + highlightBoost);
            
            gradient.addColorStop(0, `rgba(0, 210, 255, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(0, 245, 160, ${alpha * 0.8})`);
            gradient.addColorStop(1, 'rgba(0, 210, 255, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fill();

            // Core contact node
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 245, 160, ${this.activity + highlightBoost})`;
            ctx.fill();

            ctx.restore();
        }

        highlight() {
            this.isHighlighted = 1;
        }
    }

    // Initialize contact network
    function initializeNetwork() {
        nodes = [];
        connections = [];
        
        const nodeCount = Math.floor((canvas.width * canvas.height) / 20000);
        
        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new ContactNeuralNode(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
        
        createConnections();
    }

    // Create neural connections for contact theme
    function createConnections() {
        connections = [];
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = getDistance(nodes[i], nodes[j]);
                const maxDistance = 120;
                
                if (distance < maxDistance && 
                    nodes[i].connections.length < nodes[i].maxConnections &&
                    nodes[j].connections.length < nodes[j].maxConnections) {
                    
                    const connection = {
                        nodeA: nodes[i],
                        nodeB: nodes[j],
                        distance: distance,
                        strength: (maxDistance - distance) / maxDistance,
                        pulsePhase: Math.random() * Math.PI * 2,
                        messageFlow: Math.random()
                    };
                    
                    connections.push(connection);
                    nodes[i].connections.push(connection);
                    nodes[j].connections.push(connection);
                }
            }
        }
    }

    // Calculate distance between nodes
    function getDistance(nodeA, nodeB) {
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Draw contact message connections
    function drawConnections() {
        connections.forEach(connection => {
            const { nodeA, nodeB, strength } = connection;
            
            // Calculate message flow
            const messageValue = Math.sin(Date.now() * 0.003 + connection.pulsePhase);
            const messageStrength = (messageValue + 1) * 0.5;
            
            // Draw connection line (communication channel)
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            
            const baseAlpha = strength * 0.2 * (nodeA.activity + nodeB.activity) * 0.5;
            const highlightAlpha = (nodeA.isHighlighted || nodeB.isHighlighted) ? 0.3 : 0;
            const alpha = baseAlpha + highlightAlpha;
            
            ctx.strokeStyle = `rgba(0, 245, 160, ${alpha})`;
            ctx.lineWidth = strength * 1.5;
            ctx.stroke();
            
            // Draw message pulse (data transmission)
            if (messageStrength > 0.6) {
                const messageX = nodeA.x + (nodeB.x - nodeA.x) * messageStrength;
                const messageY = nodeA.y + (nodeB.y - nodeA.y) * messageStrength;
                
                ctx.beginPath();
                ctx.arc(messageX, messageY, 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 210, 255, ${alpha * 3})`;
                ctx.fill();
                
                // Message trail
                ctx.beginPath();
                ctx.arc(messageX, messageY, 8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 210, 255, ${alpha * 0.3})`;
                ctx.fill();
            }
            
            ctx.restore();
        });
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw();
        });
        
        // Draw connections
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }

    // Initialize and start
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener('resize', resizeCanvas);
    
    // Pause animation when page is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (animationId) cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });

    // Interactive contact activation on mouse move
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        nodes.forEach(node => {
            const distance = Math.sqrt(
                Math.pow(mouseX - node.x, 2) + Math.pow(mouseY - node.y, 2)
            );
            
            if (distance < 80) {
                node.highlight();
                
                // Highlight connected nodes (contact spread)
                node.connections.forEach(connection => {
                    const otherNode = connection.nodeA === node ? connection.nodeB : connection.nodeA;
                    otherNode.highlight();
                });
            }
        });
    });
}

// AI Contact Methods Interaction
function initAIContactMethods() {
    const methodCards = document.querySelectorAll('.method-card');
    
    methodCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            const pulseRing = this.querySelector('.ai-pulse-ring');
            if (pulseRing) {
                pulseRing.style.animation = 'pulseRing 1s ease-out';
            }
        });
        
        // Handle AI method buttons
        const aiBtn = card.querySelector('.ai-method-btn');
        if (aiBtn) {
            aiBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (this.textContent.includes('Chat with AI')) {
                    showAIContactDialog();
                } else if (this.textContent.includes('Book AI Meeting')) {
                    showMeetingScheduler();
                } else {
                    // Regular contact method
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('mailto:')) {
                        window.location.href = href;
                    } else if (href && href.startsWith('tel:')) {
                        window.location.href = href;
                    }
                }
            });
        }
    });
}

// AI Contact Dialog
function showAIContactDialog() {
    const backdrop = document.createElement('div');
    backdrop.className = 'ai-modal-backdrop';
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(15px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    `;

    const dialog = document.createElement('div');
    dialog.className = 'ai-contact-dialog';
    dialog.style.cssText = `
        background: linear-gradient(145deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.9));
        backdrop-filter: blur(25px);
        border: 1px solid rgba(0, 210, 255, 0.3);
        border-radius: 30px;
        padding: 2.5rem;
        max-width: 500px;
        width: 90%;
        text-align: center;
        animation: slideInUp 0.4s ease-out;
        box-shadow: 0 25px 50px rgba(0, 210, 255, 0.15);
    `;

    dialog.innerHTML = `
        <div class="ai-avatar-large" style="
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #00d2ff, #00f5a0);
            border-radius: 50%;
            margin: 0 auto 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: white;
            animation: aiContactPulse 2s ease-in-out infinite;
            box-shadow: 0 0 30px rgba(0, 210, 255, 0.4);
        ">
            <i class="fas fa-robot"></i>
        </div>
        <h3 style="color: #00d2ff; margin-bottom: 1rem; font-size: 1.8rem;">AI Contact Assistant</h3>
        <p style="color: #9ca3af; margin-bottom: 2rem; line-height: 1.6; font-size: 1.1rem;">
            Hi! I'm your intelligent contact assistant. I can help you with project inquiries, 
            technical questions, or connect you with the right team member instantly.
        </p>
        <div class="contact-options" style="margin-bottom: 2rem;">
            <button class="contact-option-btn" data-option="project">
                <i class="fas fa-rocket"></i>
                New Project Inquiry
            </button>
            <button class="contact-option-btn" data-option="support">
                <i class="fas fa-life-ring"></i>
                Technical Support
            </button>
            <button class="contact-option-btn" data-option="partnership">
                <i class="fas fa-handshake"></i>
                Partnership Opportunity
            </button>
        </div>
        <div style="display: flex; gap: 1rem;">
            <button class="ai-chat-start-btn" style="
                background: linear-gradient(135deg, #00d2ff, #1e40af);
                border: none;
                color: white;
                padding: 1rem 2rem;
                border-radius: 30px;
                font-weight: 600;
                cursor: pointer;
                flex: 1;
                transition: all 0.3s ease;
            ">Start AI Chat</button>
            <button class="ai-close-btn" style="
                background: transparent;
                border: 2px solid #00d2ff;
                color: #00d2ff;
                padding: 1rem 2rem;
                border-radius: 30px;
                cursor: pointer;
                font-weight: 600;
                flex: 1;
                transition: all 0.3s ease;
            ">Close</button>
        </div>
    `;

    // Style contact option buttons
    const optionStyle = `
        .contact-option-btn {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            width: 100%;
            margin-bottom: 1rem;
            padding: 1rem 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            color: #e5e7eb;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem;
            font-weight: 500;
        }
        .contact-option-btn:hover {
            background: rgba(0, 210, 255, 0.1);
            border-color: #00d2ff;
            color: #00d2ff;
            transform: translateX(10px);
        }
        .contact-option-btn i {
            color: #00f5a0;
            font-size: 1.2rem;
        }
        @keyframes aiContactPulse {
            0%, 100% { 
                transform: scale(1); 
                box-shadow: 0 0 30px rgba(0, 210, 255, 0.4);
            }
            50% { 
                transform: scale(1.05); 
                box-shadow: 0 0 40px rgba(0, 210, 255, 0.6);
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = optionStyle;
    document.head.appendChild(styleSheet);

    backdrop.appendChild(dialog);
    document.body.appendChild(backdrop);

    // Handle interactions
    const optionBtns = dialog.querySelectorAll('.contact-option-btn');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const option = this.dataset.option;
            showContactForm(option);
        });
    });

    const chatStartBtn = dialog.querySelector('.ai-chat-start-btn');
    chatStartBtn.addEventListener('click', function() {
        // Simulate AI chat interface
        showAIChat();
    });

    const closeBtn = dialog.querySelector('.ai-close-btn');
    closeBtn.addEventListener('click', closeDialog);
    backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) closeDialog();
    });

    function closeDialog() {
        backdrop.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(backdrop);
            document.head.removeChild(styleSheet);
        }, 300);
    }
}

// Meeting Scheduler
function showMeetingScheduler() {
    alert('AI Meeting Scheduler would open here! This would integrate with calendar APIs to find optimal meeting times based on team availability and project requirements.');
}

// Contact Stats Animation
function initContactStats() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));

    function animateCounter(element) {
        const target = parseInt(element.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}

// Multi-Step Form (same as before but with AI enhancements)
function initMultiStepForm() {
    const form = document.getElementById('contact-form-element');
    if (!form) return; // Form might not exist in new design
    
    const steps = document.querySelectorAll('.form-step');
    const nextBtns = document.querySelectorAll('.btn-next');
    const prevBtns = document.querySelectorAll('.btn-prev');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (!steps.length) return;
    
    let currentStep = 1;
    const totalSteps = steps.length;

    // Update progress bar
    function updateProgress() {
        const progress = (currentStep / totalSteps) * 100;
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = `Step ${currentStep} of ${totalSteps}`;
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

    // Form navigation
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep < totalSteps) {
                showStep(currentStep + 1);
            }
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                showStep(currentStep - 1);
            }
        });
    });

    // Initialize
    updateProgress();
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

// Form Validation (simplified)
function initFormValidation() {
    // This would contain form validation logic
    // For now, keeping it simple since the main focus is on the AI design
}

// AI Chat Simulation
function showAIChat() {
    alert('AI Chat would launch here! This would be a real-time chat interface with our AI assistant, capable of understanding project requirements, scheduling meetings, and providing instant technical support.');
}

// Enhanced scroll effects for contact page
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar-modern');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Enhanced navbar effects
    if (navbar) {
        if (currentScrollY > 100) {
            navbar.style.backdropFilter = 'blur(30px)';
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 210, 255, 0.3)';
        } else {
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
    }
    
    lastScrollY = currentScrollY;
});

// Add dynamic CSS animations
const contactStyles = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        to { opacity: 0; transform: scale(0.95); }
    }
    @keyframes slideInUp {
        from { opacity: 0; transform: translateY(30px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
    }
`;

const contactStyleSheet = document.createElement('style');
contactStyleSheet.textContent = contactStyles;
document.head.appendChild(contactStyleSheet);