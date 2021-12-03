
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
  download.setAttribute('href', `https://download855.mediafire.com/326l2aapk7lg/wp2wdog1gyklajj/MageSiel.rar`);
  download.setAttribute('download', 'MageSiel');
});

download.removeAttribute('href');
download.removeAttribute('download');

