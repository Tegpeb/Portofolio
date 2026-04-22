// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Custom Cursor Logic
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursor-trail');

window.addEventListener('mousemove', (e) => {
    // Main dot follows instantly
    gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "power2.out"
    });
    // Trail follows with a slight delay
    gsap.to(cursorTrail, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.5,
        ease: "power2.out"
    });
});

// Cursor Hover Effects for links/buttons
const hoverElements = document.querySelectorAll('a, button, input, textarea');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 2.5, backgroundColor: 'rgba(236, 72, 153, 0.5)', duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: '', duration: 0.3 });
    });
});

// 2. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileMenuPanel = document.getElementById('mobile-menu-panel');
const mobileLinks = mobileMenuPanel.querySelectorAll('a');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenuPanel.classList.remove('translate-x-full');
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        mobileMenuPanel.classList.add('translate-x-full');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
}

mobileMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// 3. GSAP Animations

// Hero Section Entry
gsap.from('.hero-text > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.5
});

// About Section Trigger
gsap.from('.profile-image', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%'
    },
    x: -50,
    opacity: 0,
    duration: 1
});

gsap.from('#about h3, #about p, #about .grid', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%'
    },
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// Skills Section Trigger
gsap.from('.skill-card', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 70%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

// Projects Section Trigger
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 70%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});
