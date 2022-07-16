
//Botão de subir para o topo da página
const to_top = document.querySelector('.smooth-to-top');
window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    to_top.style.opacity = 1;
    to_top.style.animation = "fadeVisibilityRight 0.7s";
  } else {
    to_top.style.animation = "HidenElement ease 0.7s";
  }
})

to_top.addEventListener('click', () => {
  window.scroll({
      top: 0,
      behavior: 'smooth'
  });
});
