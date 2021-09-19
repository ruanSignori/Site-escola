
const anime = document.querySelectorAll('[data-anime]');

if ( anime.length ) {
    (window.addEventListener('scroll', function(){
        const windowTop = window.pageYOffset + (( window.innerHeight * 3) / 4 );
        anime.forEach( function (e) {
            if (( windowTop) > e.offsetTop ) {
                e.classList.add('animate');
            } else {
                e.classList.remove('animate');
            };
        });
    }));
};

const to_top = document.querySelector('.smooth-to-top');
to_top.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})

