// --- Scroll Animations (Intersection Observer) ---
const cards = document.querySelectorAll('.comp-card');
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

cards.forEach((card, index) => {
    // Add staggered delay
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// --- Mouse Move Glow Effect on Cards (throttled) ---
let ticking = false;
cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const glow = this.querySelector('.card-glow');
            if(!glow) { ticking = false; return; }
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glow.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
            ticking = false;
        });
    });
});

// --- Particle Background Engine ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let particlesArray;
let w, h;
const colors = ['#00f0ff', '#ff00ea', '#ffffff', '#2a00ff'];

function initParams() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}
initParams();
window.addEventListener('resize', initParams);

class Particle {
    constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random drift
        this.driftX = (Math.random() - 0.5) * 0.5;
        this.driftY = (Math.random() - 0.5) * 0.5;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    
    update() {
        this.x += this.driftX;
        this.y += this.driftY;
        
        // Wrap around edges
        if(this.x > w) this.x = 0;
        if(this.x < 0) this.x = w;
        if(this.y > h) this.y = 0;
        if(this.y < 0) this.y = h;
    }
}

function initParticles() {
    particlesArray = [];
    let numberOfParticles = Math.min((w * h) / 9000, 150);
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    
    // Draw connections line for a tech/magical feel
    connectParticles();
    
    requestAnimationFrame(animateParticles);
}

function connectParticles() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = dx * dx + dy * dy;
            
            if (distance < (w/12) * (h/12)) {
                opacityValue = 1 - (distance / 12000);
                // Subdued connection lines
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.15})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

initParticles();
animateParticles();

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if(window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 20, 0.8)';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(20, 20, 40, 0.4)';
        nav.style.boxShadow = 'none';
    }
});

// --- Hamburger Menu ---
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.glass-nav nav');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isOpen);
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('open');
        });
    });
}
