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