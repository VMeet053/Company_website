// Team Page - AI Neural Network Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all AI-powered components
    initNeuralNetwork();
    initAIAssistant();
    initTeamAnimations();
    initStatsCounters();
    initAIScanner();
    initCapabilityCards();
});

// Neural Network Canvas Animation
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-network');
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

    // Neural Node Class
    class NeuralNode {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = Math.random() * 4 + 2;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.activity = Math.random();
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.maxConnections = 3;
            this.connections = [];
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

            // Update activity with neural-like pulsing
            this.activity = 0.5 + 0.5 * Math.sin(Date.now() * 0.003 + this.pulsePhase);
        }

        draw() {
            ctx.save();
            
            // Main node
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            // Create neural gradient
            const gradient = ctx.createRadialGradient(
                this.x, this.y, 0,
                this.x, this.y, this.radius * 3
            );
            
            const alpha = this.activity * 0.8 + 0.2;
            gradient.addColorStop(0, `rgba(0, 210, 255, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(58, 123, 213, ${alpha * 0.6})`);
            gradient.addColorStop(1, 'rgba(0, 210, 255, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fill();

            // Core node
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 245, 160, ${this.activity})`;
            ctx.fill();

            ctx.restore();
        }
    }

    // Initialize network
    function initializeNetwork() {
        nodes = [];
        connections = [];
        
        const nodeCount = Math.floor((canvas.width * canvas.height) / 25000);
        
        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new NeuralNode(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
        
        createConnections();
    }

    // Create neural connections
    function createConnections() {
        connections = [];
        
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = getDistance(nodes[i], nodes[j]);
                const maxDistance = 150;
                
                if (distance < maxDistance && 
                    nodes[i].connections.length < nodes[i].maxConnections &&
                    nodes[j].connections.length < nodes[j].maxConnections) {
                    
                    const connection = {
                        nodeA: nodes[i],
                        nodeB: nodes[j],
                        distance: distance,
                        strength: (maxDistance - distance) / maxDistance,
                        pulsePhase: Math.random() * Math.PI * 2,
                        isActive: false
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

    // Draw neural connections
    function drawConnections() {
        connections.forEach(connection => {
            const { nodeA, nodeB, strength } = connection;
            
            // Calculate signal pulse
            const pulseValue = Math.sin(Date.now() * 0.005 + connection.pulsePhase);
            const signalStrength = (pulseValue + 1) * 0.5;
            
            // Draw connection line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            
            const alpha = strength * 0.3 * (nodeA.activity + nodeB.activity) * 0.5;
            ctx.strokeStyle = `rgba(116, 254, 234, ${alpha})`;
            ctx.lineWidth = strength * 2;
            ctx.stroke();
            
            // Draw signal pulse
            if (signalStrength > 0.7) {
                const signalX = nodeA.x + (nodeB.x - nodeA.x) * signalStrength;
                const signalY = nodeA.y + (nodeB.y - nodeA.y) * signalStrength;
                
                ctx.beginPath();
                ctx.arc(signalX, signalY, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 245, 160, ${alpha * 2})`;
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
        
        // Update connection distances
        connections.forEach(connection => {
            connection.distance = getDistance(connection.nodeA, connection.nodeB);
        });
        
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

    // Interactive node activation on mouse move
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        nodes.forEach(node => {
            const distance = Math.sqrt(
                Math.pow(mouseX - node.x, 2) + Math.pow(mouseY - node.y, 2)
            );
            
            if (distance < 100) {
                node.activity = Math.min(1, node.activity + 0.1);
                
                // Activate connected nodes
                node.connections.forEach(connection => {
                    const otherNode = connection.nodeA === node ? connection.nodeB : connection.nodeA;
                    otherNode.activity = Math.min(1, otherNode.activity + 0.05);
                });
            }
        });
    });
}

// AI Assistant Chat Button
function initAIAssistant() {
    const aiChatBtn = document.querySelector('.ai-chat-btn');
    if (!aiChatBtn) return;

    // Add pulse animation on hover
    aiChatBtn.addEventListener('mouseenter', function() {
        this.style.animation = 'aiButtonPulse 0.6s ease-out';
    });

    // Chat functionality
    aiChatBtn.addEventListener('click', function() {
        showAIDialog();
    });

    // Create and show AI dialog
    function showAIDialog() {
        // Create modal backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'ai-modal-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        `;

        // Create AI dialog
        const dialog = document.createElement('div');
        dialog.className = 'ai-dialog';
        dialog.style.cssText = `
            background: linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9));
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 210, 255, 0.3);
            border-radius: 25px;
            padding: 2rem;
            max-width: 400px;
            width: 90%;
            text-align: center;
            animation: slideInUp 0.4s ease-out;
        `;

        dialog.innerHTML = `
            <div class="ai-avatar" style="
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #00d2ff, #3a7bd5);
                border-radius: 50%;
                margin: 0 auto 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                color: white;
                animation: aiAvatarPulse 2s ease-in-out infinite;
            ">
                <i class="fas fa-robot"></i>
            </div>
            <h3 style="color: #00d2ff; margin-bottom: 1rem; font-size: 1.5rem;">AI Assistant</h3>
            <p style="color: #94a3b8; margin-bottom: 2rem; line-height: 1.6;">
                Hello! I'm your AI-powered assistant. I can help you learn more about our team, 
                technologies, and how we leverage artificial intelligence in our projects.
            </p>
            <div class="ai-suggestions" style="margin-bottom: 2rem;">
                <button class="ai-suggestion-btn" data-question="team-skills">
                    <i class="fas fa-users"></i>
                    Tell me about team skills
                </button>
                <button class="ai-suggestion-btn" data-question="ai-capabilities">
                    <i class="fas fa-brain"></i>
                    What AI capabilities do you have?
                </button>
                <button class="ai-suggestion-btn" data-question="hiring">
                    <i class="fas fa-briefcase"></i>
                    Are you hiring?
                </button>
            </div>
            <button class="ai-close-btn" style="
                background: transparent;
                border: 2px solid #00d2ff;
                color: #00d2ff;
                padding: 0.7rem 1.5rem;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s ease;
            ">Close</button>
        `;

        // Style suggestion buttons
        const suggestionStyle = `
            .ai-suggestion-btn {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                width: 100%;
                margin-bottom: 0.5rem;
                padding: 0.8rem 1rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 15px;
                color: #e2e8f0;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.9rem;
            }
            .ai-suggestion-btn:hover {
                background: rgba(0, 210, 255, 0.1);
                border-color: #00d2ff;
                color: #00d2ff;
                transform: translateX(5px);
            }
        `;

        // Add styles
        const styleSheet = document.createElement('style');
        styleSheet.textContent = suggestionStyle + `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideInUp {
                from { opacity: 0; transform: translateY(30px) scale(0.95); }
                to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes aiAvatarPulse {
                0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 210, 255, 0.4); }
                50% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(0, 210, 255, 0); }
            }
            @keyframes aiButtonPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(0, 210, 255, 0.4); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(styleSheet);

        backdrop.appendChild(dialog);
        document.body.appendChild(backdrop);

        // Handle AI responses
        const suggestionBtns = dialog.querySelectorAll('.ai-suggestion-btn');
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const question = this.dataset.question;
                showAIResponse(question, dialog);
            });
        });

        // Close dialog
        const closeBtn = dialog.querySelector('.ai-close-btn');
        closeBtn.addEventListener('click', closeAIDialog);
        backdrop.addEventListener('click', function(e) {
            if (e.target === backdrop) closeAIDialog();
        });

        function closeAIDialog() {
            backdrop.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                document.body.removeChild(backdrop);
                document.head.removeChild(styleSheet);
            }, 300);
        }
    }

    // AI Response System
    function showAIResponse(question, dialog) {
        const responses = {
            'team-skills': {
                title: 'Team Expertise',
                content: `Our team combines cutting-edge AI expertise with practical development skills:
                
                • **Machine Learning**: TensorFlow, PyTorch, Scikit-learn
                • **Deep Learning**: Neural networks, Computer Vision, NLP
                • **Cloud AI**: AWS SageMaker, Google AI Platform, Azure ML
                • **Development**: Full-stack with AI integration
                • **Research**: 50+ published papers, ongoing R&D`
            },
            'ai-capabilities': {
                title: 'AI Capabilities',
                content: `We leverage AI across all our development processes:
                
                • **Code Generation**: 75% faster development with AI assistance
                • **Predictive Analytics**: 95% accuracy in business insights  
                • **Computer Vision**: Real-time image and video processing
                • **NLP**: Advanced text analysis and chatbot development
                • **Automation**: Intelligent workflow optimization`
            },
            'hiring': {
                title: 'Join Our Team',
                content: `We're actively seeking AI talent! Current openings:
                
                • **Senior AI Engineer** - Remote
                • **ML Ops Specialist** - San Francisco
                • **AI Product Manager** - New York
                
                We offer competitive salaries, equity, flexible work, and the chance to work on cutting-edge AI projects. Ready to shape the future with us?`
            }
        };

        const response = responses[question];
        dialog.innerHTML = `
            <div class="ai-avatar" style="
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #00f5a0, #00d2ff);
                border-radius: 50%;
                margin: 0 auto 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                color: white;
            ">
                <i class="fas fa-check"></i>
            </div>
            <h3 style="color: #00f5a0; margin-bottom: 1rem;">${response.title}</h3>
            <div style="
                color: #e2e8f0; 
                margin-bottom: 2rem; 
                line-height: 1.6; 
                text-align: left;
                background: rgba(255, 255, 255, 0.03);
                padding: 1.5rem;
                border-radius: 15px;
                border-left: 4px solid #00d2ff;
            ">${response.content.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #00d2ff;">$1</strong>')}</div>
            <div style="display: flex; gap: 1rem;">
                <button class="ai-back-btn" style="
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: #94a3b8;
                    padding: 0.7rem 1.5rem;
                    border-radius: 25px;
                    cursor: pointer;
                    flex: 1;
                ">Ask Another</button>
                <button class="ai-close-btn" style="
                    background: linear-gradient(135deg, #00d2ff, #3a7bd5);
                    border: none;
                    color: white;
                    padding: 0.7rem 1.5rem;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: 600;
                    flex: 1;
                ">Close</button>
            </div>
        `;

        // Handle back button
        dialog.querySelector('.ai-back-btn').addEventListener('click', function() {
            showAIDialog();
        });
    }
}

// Team Member Animations
function initTeamAnimations() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.2 });

    teamMembers.forEach(member => {
        observer.observe(member);
        
        // Add hover effects
        const card = member.querySelector('.member-card');
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Stats Counter Animation
function initStatsCounters() {
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

// AI Scanner Effect
function initAIScanner() {
    const memberImages = document.querySelectorAll('.member-image');
    
    memberImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.ai-overlay');
            const scanLine = overlay.querySelector('.ai-scan-line');
            const insights = overlay.querySelector('.ai-insights');
            
            // Trigger scanning animation
            scanLine.style.animation = 'scanLine 1s ease-in-out';
            
            // Show insights with delay
            setTimeout(() => {
                insights.style.opacity = '1';
                insights.style.transform = 'translateY(0)';
            }, 500);
        });
        
        image.addEventListener('mouseleave', function() {
            const insights = this.querySelector('.ai-insights');
            insights.style.opacity = '0';
            insights.style.transform = 'translateY(10px)';
        });
    });
}

// Capability Cards Animation
function initCapabilityCards() {
    const capabilityCards = document.querySelectorAll('.capability-card');
    
    capabilityCards.forEach((card, index) => {
        // Stagger animation
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Pulse ring animation on hover
        card.addEventListener('mouseenter', function() {
            const pulseRing = this.querySelector('.ai-pulse-ring');
            if (pulseRing) {
                pulseRing.style.animation = 'pulseRing 1s ease-out';
            }
        });
        
        // Metric counter animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const metrics = entry.target.querySelectorAll('.metric-value');
                    metrics.forEach(metric => {
                        const text = metric.textContent;
                        const number = parseFloat(text);
                        
                        if (!isNaN(number)) {
                            animateMetric(metric, number, text);
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(card);
    });

    function animateMetric(element, target, originalText) {
        const isPercentage = originalText.includes('%');
        const hasDecimal = originalText.includes('.');
        const duration = 1500;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            let displayValue;
            if (hasDecimal) {
                displayValue = current.toFixed(1);
            } else {
                displayValue = Math.floor(current).toString();
            }
            
            if (isPercentage) {
                displayValue += '%';
            } else if (originalText.includes('s')) {
                displayValue += 's';
            }
            
            element.textContent = displayValue;
        }, 16);
    }
}

// Smooth scrolling enhancement
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

// Enhanced scroll effects
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar-modern');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Navbar blur effect
    if (currentScrollY > 50) {
        navbar.style.backdropFilter = 'blur(25px)';
        navbar.style.background = 'rgba(10, 14, 22, 0.95)';
    } else {
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.background = 'rgba(10, 14, 22, 0.9)';
    }
    
    lastScrollY = currentScrollY;
});

// Add CSS animations dynamically
const additionalStyles = `
    @keyframes fadeOut {
        to { opacity: 0; transform: scale(0.95); }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);