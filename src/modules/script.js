import ScrollReveal from 'scrollreveal';

//Botão de subir para o topo da página
const to_top = document.querySelector('.smooth-to-top');

window.addEventListener('scroll', () => {
  to_top.style.opacity = 1;
  to_top.style.animation = "fadeVisibilityRight 0.7s";
})

to_top.addEventListener('click', () => {
  window.scroll({
      top: 0,
      behavior: 'smooth'
  });
});

//Todos as animações de scroll do site
ScrollReveal().reveal('.paragraph', { 
  delay: 80, 
  reset: true,
  origin: 'bottom',
  distance: '50px',
  interval: 100,
  scale: 0.90
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

ScrollReveal().reveal('.accept-cookies', {
  delay: 2000,
  distance: '150px',
  origin: 'bottom'
});

ScrollReveal().reveal('.smooth-animation', {
  reset: true,
  distance: '170px',
  origin: 'bottom',
  duration: 1500,
  easing: 'cubic-bezier(0.73, 0.12, 0.35, 0.96)',
  delay: 30
});

ScrollReveal().reveal('.item a button', {
  scale: 0.40,
  duration: 600,
  reset: true
})

ScrollReveal().reveal('.content-child-3', {
  reset: true,
  scale: 0.80,
  delay: 50,
  duration: 700
});
