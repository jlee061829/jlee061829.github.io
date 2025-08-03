// Add resume download functionality
document.addEventListener('DOMContentLoaded', () => {
    const resumeLink = document.querySelector('a[href="Justin_Lee_Resume_July_29.pdf"]');
    if (resumeLink) {
        resumeLink.addEventListener('click', (e) => {
            // Create a temporary link element to force download
            const link = document.createElement('a');
            link.href = 'Justin_Lee_Resume_July_29.pdf';
            link.download = 'Justin_Lee_Resume_July_29.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});

// DOM Elements
const fixedNav = document.querySelector('.fixed-nav');
const nameContainer = document.querySelector('.name-container');
const navName = document.querySelector('.nav-name');
const mainContent = document.querySelector('.main-content');
const navLinks = document.querySelectorAll('.nav-link');
const projectItems = document.querySelectorAll('.project-item');
const skillTags = document.querySelectorAll('.skill-tag');

console.log('Navigation links found:', navLinks.length);
navLinks.forEach((link, index) => {
    console.log(`Link ${index}:`, link.textContent, '->', link.getAttribute('href'));
});

// Scroll Behavior
let lastScrollY = 0;
let ticking = false;

function updateHeader() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Calculate scroll progress (0 to 1)
    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    
    // Add scrolled class when past 50% of viewport height
    if (scrollY > windowHeight * 0.5) {
        fixedNav.classList.add('scrolled');
        nameContainer.classList.add('scrolled');
    } else {
        fixedNav.classList.remove('scrolled');
        nameContainer.classList.remove('scrolled');
    }
    
    // Smooth opacity transition for background grid
    const backgroundGrid = document.querySelector('.background-grid');
    if (backgroundGrid) {
        backgroundGrid.style.opacity = 1 - scrollProgress * 0.3;
    }
    
    lastScrollY = scrollY;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}

// Throttled scroll event
window.addEventListener('scroll', requestTick, { passive: true });

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Only prevent default for hash links (internal navigation)
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            console.log('Navigation clicked:', targetId);
            
            // Debug: Show all section positions
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                console.log(`Section ${section.id}: offsetTop = ${section.offsetTop}`);
            });
            
            if (targetId === '#home') {
                // Scroll to top for home link
                console.log('Scrolling to home (top)');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else if (targetId === '#about') {
                // Use the same logic as Experience tab since it works better
                console.log('Scrolling to About section');
                window.scrollTo({
                    top: 850 - 80, // Use Experience offsetTop - header height
                    behavior: 'smooth'
                });
            } else if (targetId === '#experience') {
                // Fix Experience to scroll to actual Experience section
                console.log('Scrolling to Experience section');
                window.scrollTo({
                    top: 1475 - 80, // Experience offsetTop - header height
                    behavior: 'smooth'
                });
            } else if (targetId === '#projects') {
                // Fix Projects to scroll to actual Projects section
                console.log('Scrolling to Projects section');
                window.scrollTo({
                    top: 2225 - 80, // Projects offsetTop - header height
                    behavior: 'smooth'
                });
            } else if (targetId === '#skills') {
                // Fix Skills to scroll down a little more
                console.log('Scrolling to Skills section');
                window.scrollTo({
                    top: 4200 - 80, // Skills offsetTop - header height
                    behavior: 'smooth'
                });
            } else {
                const targetSection = document.querySelector(targetId);
                console.log('Target section:', targetSection);
                if (targetSection) {
                    // Calculate proper offset based on section position
                    const sectionTop = targetSection.offsetTop;
                    const headerHeight = 80; // Fixed header height
                    const heroHeight = window.innerHeight; // Hero section height (100vh)
                    // Try scrolling to a position that accounts for the hero section
                    const offsetTop = Math.max(0, sectionTop - headerHeight - 50);
                    console.log('Scrolling to:', targetId, 'at position:', offsetTop, 'sectionTop:', sectionTop, 'heroHeight:', heroHeight);
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    console.error('Section not found:', targetId);
                }
            }
        }
        // For external links (like back buttons), let the default behavior work
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to project items
    projectItems.forEach((item, index) => {
        item.classList.add('slide-in-left');
        item.style.animationDelay = `${index * 0.2}s`;
        observer.observe(item);
    });

    // Animate skill tags
    skillTags.forEach((tag, index) => {
        tag.classList.add('fade-in');
        tag.style.animationDelay = `${index * 0.1}s`;
        observer.observe(tag);
    });

    // Animate section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('fade-in');
        observer.observe(title);
    });
});

// Parallax effect for phone mockups
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const phoneMockups = document.querySelectorAll('.phone-mockup');
    
    phoneMockups.forEach((mockup, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed / 10);
        mockup.style.transform = `translateY(${yPos}px)`;
    });
});

// Hover effects for project items
projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = '0 20px 40px rgba(93, 78, 55, 0.15)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
    });
});

// Typing animation for the main name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const mainName = document.querySelector('.main-name');
    if (mainName) {
        const originalText = mainName.textContent;
        typeWriter(mainName, originalText, 150);
    }
});

// Scroll indicator interaction
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            const sectionTop = projectsSection.offsetTop;
            const headerHeight = 80;
            const offsetTop = Math.max(0, sectionTop - headerHeight);
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    const scrollY = window.pageYOffset;
    const headerHeight = 80;
    
    // Special handling for home section
    if (scrollY < window.innerHeight * 0.5) {
        current = 'home';
    } else if (scrollY >= 850 - headerHeight && scrollY < 1475 - headerHeight) {
        // About section range
        current = 'about';
    } else if (scrollY >= 1475 - headerHeight && scrollY < 2225 - headerHeight) {
        // Experience section range
        current = 'experience';
    } else if (scrollY >= 2225 - headerHeight && scrollY < 4200 - headerHeight) {
        // Projects section range
        current = 'projects';
    } else if (scrollY >= 4200 - headerHeight) {
        // Skills section range
        current = 'skills';
    } else {
        // Fallback to original logic
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - headerHeight - 50)) {
                current = section.getAttribute('id');
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #5D4E37 !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Smooth reveal animation for sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Apply reveal animation to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(section);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    console.log('Fixed navigation website loaded successfully!');
    
    // Add loading animation
    const loader = document.createElement('div');
    loader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        ">
            <div style="
                width: 50px;
                height: 50px;
                border: 3px solid rgba(139, 115, 85, 0.3);
                border-top: 3px solid #8B7355;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
});

// Add subtle hover effects to navigation
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Add smooth transitions to all interactive elements
const interactiveElements = document.querySelectorAll('.nav-link, .skill-tag, .contact-link');
interactiveElements.forEach(element => {
    element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
});

// Add scroll-based background color change
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const scrollProgress = Math.min(scrollY / windowHeight, 1);
    
    // Subtle background color change
    document.body.style.backgroundColor = `hsl(45, 20%, ${95 - scrollProgress * 5}%)`;
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && window.pageYOffset < window.innerHeight) {
        e.preventDefault();
        const projectsSection = document.querySelector('#projects');
        if (projectsSection) {
            const offsetTop = projectsSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && window.pageYOffset < window.innerHeight) {
            // Swipe up on homepage
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                const offsetTop = projectsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }
}