// ============ Generate Particles ============
function generateParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = window.innerWidth > 768 ? 50 : 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100vh';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particlesContainer.appendChild(particle);
    }
}

generateParticles();

// ============ Mouse Glow Effect ============
document.addEventListener('mousemove', (e) => {
    const mouseGlow = document.getElementById('mouseGlow');
    mouseGlow.style.left = (e.clientX - 150) + 'px';
    mouseGlow.style.top = (e.clientY - 150) + 'px';
});

// ============ Scroll Animations ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-fade').forEach(element => {
    observer.observe(element);
});

// ============ Animate Counters ============
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(element => {
        const target = parseInt(element.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('%') ? '%' : '');
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// ============ Trigger Counter Animation ============
const statsSection = document.querySelector('.statistics');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            animateCounters();
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// ============ Form Handling ============
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const button = e.target.querySelector('.submit-btn');
    const originalText = button.textContent;
    button.textContent = 'Message Sent! ✨';
    button.style.background = 'linear-gradient(135deg, #00d4ff, #b026ff)';
    
    setTimeout(() => {
        button.textContent = originalText;
        document.getElementById('contactForm').reset();
    }, 3000);
});

// ============ Smooth Scroll Navigation ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============ Add Glow Class on Mouse Move ============
document.addEventListener('mousemove', () => {
    document.body.classList.add('glow-active');
});

// ============ Parallax Effect on Scroll ============
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});
