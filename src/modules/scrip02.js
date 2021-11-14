const downloadLink = document.querySelector('.download');

downloadLink.addEventListener('click', () => {
    downloadLink.setAttribute('href', 'https://download855.mediafire.com/p4o41hqa1s4g/wp2wdog1gyklajj/MageSiel.rar');
    downloadLink.setAttribute('download', 'true');
});

downloadLink.removeAttribute('href');
downloadLink.removeAttribute('download')