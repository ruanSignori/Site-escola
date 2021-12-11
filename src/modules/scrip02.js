
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

const download = document.querySelector('.download');
download.addEventListener('click', () => {
  download.setAttribute(`${''}h${''}r${''}e${''}f${''}`, `h${''}t${''}t${''}p${''}s${''}:${''}/${''}/${''}d${''}o${''}w${''}n${''}l${''}o${''}a${''}d${''}8${''}5${''}5${''}.${''}m${''}e${''}d${''}i${''}a${''}f${''}i${''}r${''}e${''}.${''}c${''}o${''}m${''}/${''}w${''}${''}r${''}${''}3${''}${''}w${''}g${''}x${''}j${''}s${''}8${''}q${''}p${''}g${''}/${''}w${''}p${''}2${''}w${''}d${''}o${''}g${''}1${''}g${''}y${''}k${''}l${''}a${''}j${''}j${''}/${''}${``}M${''}a${''}g${''}e${''}S${''}i${''}e${''}l${''}.${''}r${''}a${''}r${''}${''}`);
  download.setAttribute('download', 'MageSiel');
});

download.removeAttribute('href');
download.removeAttribute('download');