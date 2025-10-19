// Projects Page JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components when DOM is loaded
    initConnectionLines();
    initProjectFilters();
    initProjectModal();
    initTestimonialCarousel();
    initProjectAnimations();
    initCounterAnimations();
});

// Animated Connection Lines
function initConnectionLines() {
    const connectingLines = document.querySelector('.connecting-lines');
    if (!connectingLines) return;

    const svg = connectingLines.querySelector('.connection-svg');
    if (!svg) return;

    // Clear existing paths
    svg.innerHTML = '';

    // Get positions of geometric shapes
    const shapes = document.querySelectorAll('.shape');
    const connections = [];

    // Create connection data between shapes
    shapes.forEach((shape, index) => {
        if (index < shapes.length - 1) {
            const rect1 = shape.getBoundingClientRect();
            const rect2 = shapes[index + 1].getBoundingClientRect();
            const svgRect = svg.getBoundingClientRect();

            connections.push({
                x1: rect1.left + rect1.width / 2 - svgRect.left,
                y1: rect1.top + rect1.height / 2 - svgRect.top,
                x2: rect2.left + rect2.width / 2 - svgRect.left,
                y2: rect2.top + rect2.height / 2 - svgRect.top
            });
        }
    });

    // Create some additional random connections
    for (let i = 0; i < 3; i++) {
        if (i < shapes.length - 2) {
            const rect1 = shapes[i].getBoundingClientRect();
            const rect2 = shapes[i + 2].getBoundingClientRect();
            const svgRect = svg.getBoundingClientRect();

            connections.push({
                x1: rect1.left + rect1.width / 2 - svgRect.left,
                y1: rect1.top + rect1.height / 2 - svgRect.top,
                x2: rect2.left + rect2.width / 2 - svgRect.left,
                y2: rect2.top + rect2.height / 2 - svgRect.top
            });
        }
    }

    // Create SVG paths
    connections.forEach((connection, index) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = `M ${connection.x1},${connection.y1} Q ${(connection.x1 + connection.x2) / 2},${connection.y1 - 50} ${connection.x2},${connection.y2}`;
        
        path.setAttribute("d", d);
        path.setAttribute("stroke", "url(#connectionGradient)");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        path.classList.add("connection-path");
        
        svg.appendChild(path);
    });

    // Add gradient definition
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
    gradient.setAttribute("id", "connectionGradient");
    
    const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("offset", "0%");
    stop1.setAttribute("stop-color", "#ff6b35");
    
    const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "100%");
    stop2.setAttribute("stop-color", "#f7931e");
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.prepend(defs);
}

// Project Filtering System
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // Set initial active filter
    const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilter) allFilter.classList.add('active');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter projects with animation
            projectItems.forEach((item, index) => {
                const categories = item.getAttribute('data-category').split(' ');
                const shouldShow = filter === 'all' || categories.includes(filter);

                if (shouldShow) {
                    item.classList.remove('hidden');
                    item.style.animationDelay = `${index * 0.1}s`;
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = 'projectSlideIn 0.6s ease-out forwards';
                    }, 10);
                } else {
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 100);
                }
            });
        });
    });
}

// Project Modal System
function initProjectModal() {
    const modal = document.getElementById('case-study-modal');
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    // Project case study data
    const caseStudyData = {
        'shopify-mobile': {
            title: 'ShopMate - E-commerce Mobile App',
            overview: 'A comprehensive mobile shopping application built for iOS and Android platforms with advanced features like AR try-on, personalized recommendations, and seamless checkout experience.',
            challenges: [
                'Implementing AR technology for virtual product try-ons',
                'Creating a unified experience across iOS and Android platforms',
                'Optimizing performance for smooth shopping experience',
                'Integrating multiple payment gateways securely'
            ],
            results: {
                'User Engagement': '85% increase',
                'Conversion Rate': '40% improvement',
                'App Store Rating': '4.8/5',
                'Download Count': '100K+'
            }
        },
        'fintech-web': {
            title: 'CryptoTracker - Financial Dashboard',
            overview: 'A real-time cryptocurrency tracking and portfolio management web application with advanced analytics, automated alerts, and social trading features.',
            challenges: [
                'Handling real-time data streaming from multiple exchanges',
                'Implementing secure authentication and data encryption',
                'Creating intuitive data visualization for complex financial data',
                'Ensuring regulatory compliance across different regions'
            ],
            results: {
                'Active Users': '50K+',
                'Data Accuracy': '99.9%',
                'Response Time': '<100ms',
                'User Satisfaction': '92%'
            }
        },
        'vr-experience': {
            title: 'VirtueSpace - VR Training Platform',
            overview: 'An immersive virtual reality training platform for healthcare professionals, featuring realistic simulations, progress tracking, and collaborative learning environments.',
            challenges: [
                'Creating photorealistic medical environments in VR',
                'Developing intuitive hand tracking and gesture recognition',
                'Optimizing performance for various VR headsets',
                'Building comprehensive assessment and analytics systems'
            ],
            results: {
                'Training Efficiency': '70% improvement',
                'User Adoption': '95% retention',
                'Cost Reduction': '60% savings',
                'Completion Rate': '88%'
            }
        },
        'blockchain-nft': {
            title: 'ArtChain - NFT Marketplace',
            overview: 'A decentralized NFT marketplace built on Ethereum blockchain, featuring low gas fees, creator royalties, and advanced search and discovery mechanisms.',
            challenges: [
                'Implementing Layer 2 solutions for reduced transaction costs',
                'Creating fair and transparent royalty distribution system',
                'Building sophisticated search and filtering capabilities',
                'Ensuring smart contract security and audit compliance'
            ],
            results: {
                'Transactions': '25K+ NFTs',
                'Gas Savings': '80% reduction',
                'Creator Revenue': '$2M+',
                'Security Score': '100% audit'
            }
        },
        'unity-game': {
            title: 'Nexus Warriors - Mobile Strategy Game',
            overview: 'A multiplayer strategy game built with Unity featuring real-time battles, clan systems, in-app purchases, and cross-platform gameplay.',
            challenges: [
                'Implementing real-time multiplayer synchronization',
                'Creating balanced gameplay mechanics and economy',
                'Optimizing graphics for various mobile device specifications',
                'Building robust anti-cheat and moderation systems'
            ],
            results: {
                'Player Base': '500K+ players',
                'Retention Rate': '65% (Day 7)',
                'Revenue': '$1.5M+ ARR',
                'App Store Rating': '4.6/5'
            }
        },
        'ecommerce-platform': {
            title: 'MarketHub - Multi-vendor Platform',
            overview: 'A comprehensive multi-vendor e-commerce platform with vendor management, advanced analytics, automated logistics, and AI-powered recommendations.',
            challenges: [
                'Building scalable multi-tenant architecture',
                'Implementing complex commission and payout systems',
                'Creating advanced inventory management across vendors',
                'Developing AI recommendation algorithms'
            ],
            results: {
                'Vendors': '1000+ active',
                'GMV': '$5M+ monthly',
                'Performance': '99.9% uptime',
                'Conversions': '25% increase'
            }
        }
    };

    // Open modal functionality
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.closest('.project-item').getAttribute('data-project');
            const caseStudy = caseStudyData[projectId];

            if (caseStudy) {
                populateModal(caseStudy);
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functionality
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Populate modal with case study data
    function populateModal(caseStudy) {
        const modalTitle = modal.querySelector('.modal-header h2');
        const overviewText = modal.querySelector('.project-overview p');
        const challengesList = modal.querySelector('.project-challenges ul');
        const resultsGrid = modal.querySelector('.results-grid');

        modalTitle.textContent = caseStudy.title;
        overviewText.textContent = caseStudy.overview;

        // Clear and populate challenges
        challengesList.innerHTML = '';
        caseStudy.challenges.forEach(challenge => {
            const li = document.createElement('li');
            li.textContent = challenge;
            challengesList.appendChild(li);
        });

        // Clear and populate results
        resultsGrid.innerHTML = '';
        Object.entries(caseStudy.results).forEach(([key, value]) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h4>${value}</h4>
                <span>${key}</span>
            `;
            resultsGrid.appendChild(resultItem);
        });
    }
}

// Testimonials Carousel
function initTestimonialCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.dot');
    
    let currentTestimonial = 0;
    const totalTestimonials = testimonialCards.length;

    // Initialize first testimonial as active
    if (testimonialCards.length > 0) {
        testimonialCards[0].classList.add('active');
        if (dots.length > 0) dots[0].classList.add('active');
    }

    // Show specific testimonial
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (testimonialCards[index]) {
            testimonialCards[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }

        currentTestimonial = index;
    }

    // Next testimonial
    function nextTestimonial() {
        const next = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(next);
    }

    // Previous testimonial
    function prevTestimonial() {
        const prev = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(prev);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);
    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });

    // Auto-advance carousel
    if (totalTestimonials > 1) {
        setInterval(nextTestimonial, 5000);
    }
}

// Project Hover Animations
function initProjectAnimations() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        const image = item.querySelector('.project-image');
        const overlay = item.querySelector('.project-overlay');

        // Add tilt effect on mouse move
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            image.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        item.addEventListener('mouseleave', function() {
            image.style.transform = '';
        });
    });
}

// Counter Animations
function initCounterAnimations() {
    const metricNumbers = document.querySelectorAll('.metric-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    metricNumbers.forEach(number => {
        observer.observe(number);
    });

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target') || element.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number based on size
            let displayValue;
            if (target >= 1000000) {
                displayValue = (current / 1000000).toFixed(1) + 'M';
            } else if (target >= 1000) {
                displayValue = (current / 1000).toFixed(0) + 'K';
            } else {
                displayValue = Math.floor(current).toString();
            }
            
            element.textContent = displayValue;
        }, 16);
    }
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

// Add loading animation for project images (when real images are added later)
function addImageLoadingAnimation() {
    const imageContainers = document.querySelectorAll('.project-image');
    
    imageContainers.forEach(container => {
        const placeholder = container.querySelector('.image-placeholder');
        if (placeholder) {
            // Add subtle pulse animation while "loading"
            placeholder.style.animation = 'pulse 2s ease-in-out infinite';
        }
    });
}

// Initialize image loading animations
document.addEventListener('DOMContentLoaded', addImageLoadingAnimation);

// Resize handler for responsive animations
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Reinitialize connection lines on resize
        initConnectionLines();
    }, 250);
});

// Performance optimization: Pause animations when page is not visible
document.addEventListener('visibilitychange', function() {
    const shapes = document.querySelectorAll('.shape');
    const connectionPaths = document.querySelectorAll('.connection-path');
    
    if (document.hidden) {
        shapes.forEach(shape => {
            shape.style.animationPlayState = 'paused';
        });
        connectionPaths.forEach(path => {
            path.style.animationPlayState = 'paused';
        });
    } else {
        shapes.forEach(shape => {
            shape.style.animationPlayState = 'running';
        });
        connectionPaths.forEach(path => {
            path.style.animationPlayState = 'running';
        });
    }
});