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


downloadLink.addEventListener('click', () => {
    downloadLink.setAttribute('href', 'https://download855.mediafire.com/p4o41hqa1s4g/wp2wdog1gyklajj/MageSiel.rar');
    downloadLink.setAttribute('download', 'true');
});

downloadLink.removeAttribute('href');
downloadLink.removeAttribute('download')