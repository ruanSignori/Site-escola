const downloadLink = document.querySelector('.download');
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


