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

// Auto flip the about image
const flipCard = document.querySelector('.flip-card');

setInterval(() => {
    flipCard.classList.toggle('flipped');
}, 3000);

// Project overlay functionality to replace the default link behavior with an overlay for future updates
