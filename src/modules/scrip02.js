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
  alert('Download índisponível no momento');
//     downloadLink.setAttribute('href', 'https://drive.google.com/file/d/11ts9eHUgoCeb0uV-zSQtCVUHQYyeLl2h/view?usp=sharing');
});

//href="https://mega.nz/file/9NFkRZYa#0P1xlGPttqZ_4-bAxAUsBgxdCRc70Dc-nUzIohnVDEY" download="true" type="zip/application"

// downloadLink.removeAttribute('href');
// downloadLink.removeAttribute('download')