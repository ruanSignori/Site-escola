
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
    reset: true,
    origin: 'bottom',
    distance: '50px',
});

ScrollReveal().reveal('.animation', { 
    reset: true, 
    distance: '70%', 
    origin: 'left', 
    duration: 1500, 
    easing: 'ease-in-out',
    delay: 80
});

ScrollReveal().reveal('.animation-left', {
    reset: true,
    distance: '150px',
    origin: 'top',
    duration: 800
});

ScrollReveal().reveal('.animation-right', {
    reset: true,
    distance: '150px',
    origin: 'bottom',
    duration: 800,
});

ScrollReveal().reveal('.span-animated', {
    reset: true,
    distance: '150px',
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.73, 0.12, 0.35, 0.96)',
    delay: 30
});

ScrollReveal().reveal('.span-animated-school', {
    reset: true,
    distance: '150px',
    origin: 'bottom',
    duration: 1400,
    easing: 'cubic-bezier(0.73, 0.12, 0.35, 0.96)',
    delay: 30
});
