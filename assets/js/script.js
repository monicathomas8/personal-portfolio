// Restart skill bar animation on hover
const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(bar => {
    bar.addEventListener('mouseenter', function() {
        const fill = this.querySelector('.fill');
        fill.style.animation = 'none';
        fill.offsetHeight; // trigger reflow
        fill.style.animation = '';
    });
});

// Animate skill bars when scrolled into view
const skillFills = document.querySelectorAll('.fill');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease-in-out forwards';
        }
    });
}, { threshold: 0.5 });

skillFills.forEach(bar => observer.observe(bar));

// Auto flip the about image
const flipCard = document.querySelector('.flip-card');

setInterval(() => {
    flipCard.classList.toggle('flipped');
}, 3000);

// Toggle mobile menu
document.getElementById('burger').onclick = () => 
    document.getElementById('nav-menu').classList.toggle('open');

