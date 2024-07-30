document.addEventListener('DOMContentLoaded', function() {
    // Animation du texte avec Anime.js
    anime({
        targets: '.text-box h2',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.text-box p',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(500, {start: 1000}),
        duration: 2000,
        easing: 'easeOutExpo'
    });

    anime({
        targets: 'button',
        opacity: [0, 1],
        delay: 3000,
        duration: 2000,
        easing: 'easeOutExpo'
    });
});


function parallaxEffect() {
    const parallax = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
}

window.addEventListener('scroll', parallaxEffect);
parallaxEffect(); // Initial call to set parallax position on page load


