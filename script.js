// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===================================
// Smooth Scrolling for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Menu Filter Functionality
// ===================================
const categoryButtons = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Get selected category
        const selectedCategory = button.getAttribute('data-category');
        
        // Filter menu items with animation
        menuItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                item.classList.remove('hide');
                setTimeout(() => {
                    item.style.display = 'block';
                }, 10);
            } else {
                item.classList.add('hide');
                setTimeout(() => {
                    if (item.classList.contains('hide')) {
                        item.style.display = 'none';
                    }
                }, 300);
            }
        });
    });
});

// ===================================
// Scroll Animations (Intersection Observer)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.menu-item, .feature-card, .location-card, .contact-item');
animatedElements.forEach(el => observer.observe(el));

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 600);
        }
    }
});

// ===================================
// Initialize Menu Items Display
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Ensure all menu items are visible initially
    menuItems.forEach(item => {
        item.style.display = 'block';
    });
    
    // Trigger initial scroll check
    updateActiveLink();
});

// ===================================
// Add Hover Sound Effect (Optional)
// ===================================
const buttons = document.querySelectorAll('.btn, .category-btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        // You can add a subtle scale effect
        button.style.transition = 'all 0.2s ease';
    });
});

// ===================================
// Wild Cafe Greeting Animation
// ===================================
console.log('%c🌿 WELCOME TO WILD CAFE! 🌿', 'color: #3A6B35; font-size: 24px; font-weight: bold; font-family: Arial;');
console.log('%cGo Wild with Sri Lankan Comfort Food!', 'color: #FF6B35; font-size: 16px; font-family: Arial;');
console.log('%cWebsite by [Your Team Name]', 'color: #7CB518; font-size: 12px; font-style: italic;');

// ===================================
// Easter Egg: Konami Code
// ===================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Wild effect!
        document.body.style.animation = 'rainbow 3s ease-in-out';
        
        // Show wild message
        const wildMessage = document.createElement('div');
        wildMessage.innerHTML = '🌿 YOU WENT WILD! 🌿';
        wildMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #3A6B35, #7CB518);
            color: white;
            padding: 2rem 4rem;
            border-radius: 20px;
            font-family: 'Righteous', cursive;
            font-size: 3rem;
            z-index: 10000;
            box-shadow: 0 10px 50px rgba(0,0,0,0.5);
            animation: fadeInUp 0.5s ease-out;
        `;
        document.body.appendChild(wildMessage);
        
        setTimeout(() => {
            wildMessage.remove();
            document.body.style.animation = '';
        }, 3000);
        
        console.log('🎉 SECRET UNLOCKED! YOU WENT WILD! 🎉');
    }
});

// ===================================
// Dynamic Copyright Year
// ===================================
const updateYear = () => {
    const yearElements = document.querySelectorAll('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el.textContent.includes('2026')) {
            el.textContent = el.textContent.replace('2026', currentYear);
        }
    });
};

updateYear();

// ===================================
// Lazy Loading Effect for Images (when you add them)
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Accessibility: Skip to Main Content
// ===================================
const skipLink = document.createElement('a');
skipLink.href = '#menu';
skipLink.textContent = 'Skip to menu';
skipLink.className = 'skip-link';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #3A6B35;
    color: white;
    padding: 8px 12px;
    text-decoration: none;
    z-index: 9999;
    border-radius: 0 0 8px 0;
    font-weight: 600;
`;

skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});

skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ===================================
// Performance Monitoring
// ===================================
window.addEventListener('load', () => {
    if ('performance' in window) {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`🚀 Page loaded in ${pageLoadTime}ms`);
    }
});

// ===================================
// Add Ripple Effect to Buttons
// ===================================
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('style[data-ripple]')) {
        rippleStyle.setAttribute('data-ripple', 'true');
        document.head.appendChild(rippleStyle);
    }
    
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple to all buttons
document.querySelectorAll('.btn, .category-btn').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.addEventListener('click', createRipple);
});
