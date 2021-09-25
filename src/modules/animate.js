
const to_top = document.querySelector('.smooth-to-top');

window.addEventListener('scroll', () => {
    to_top.style.animation = "opacity 1s";
    to_top.style.opacity = 1;
})

to_top.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});

ScrollReveal().reveal('video', { 
    delay: 300 
});

ScrollReveal().reveal('.paragraph', { 
    delay: 80, 
    reset: true 
});

ScrollReveal().reveal('.animation', { 
    reset: true, 
    distance: '70%', 
    origin: 'left', 
    duration: 1800, 
    easing: 'ease',
    delay: 80,
});

ScrollReveal().reveal('.animation-left', {
    reset: true,
    distance: '150px',
    origin: 'bottom',
    duration: 800
});

ScrollReveal().reveal('.animation-right', {
    reset: true,
    distance: '150px',
    origin: 'top',
    duration: 800,
});

