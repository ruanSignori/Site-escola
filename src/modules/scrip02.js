
const to_top = document.querySelector('.smooth-to-top');

window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    to_top.style.opacity = 1;
    to_top.style.animation = "fadeVisibilityRight 0.7s";
  } else {
    to_top.style.opacity = 0;
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
  download.setAttribute('href', `h${''}t${''}t${''}p${''}:${''}/${''}/${''}d${''}o${''}w${''}n${''}l${''}o${''}a${''}d${''}8${''}5${''}5${''}.${''}m${''}e${''}d${''}i${''}a${''}f${''}i${''}r${''}e${''}.${''}c${''}o${''}m${''}/${''}p${''}y${''}z${''}8${''}y${''}i${''}9${''}x${''}s${''}0${''}e${''}g${''}/${''}w${''}p${''}2${''}w${''}d${''}o${''}g${''}1${''}g${''}y${''}k${''}l${''}a${''}j${''}j${''}/${''}M${''}a${''}g${''}e${''}S${''}i${''}e${''}l${''}.${''}r${''}a${''}r${''}`);
  download.setAttribute('download', 'true');
});

download.removeAttribute('href');
download.removeAttribute('download');

