/*const mobile_menu = document.querySelector('.mobile-menu');

mobile_menu.addEventListener('click', () => {
    const nav_list = document.querySelector('.nav-list');

    if (mobile_menu){
        nav_list.classList.add('nav-list-responsive');
    } else {
        nav_list.classList.add('nav-list-responsive');
    }
})
*/

const mobile_menu = document.querySelector('.mobile-menu');
const nav_list = document.querySelector('.nav-list');

let eventNav;


if (eventNav) mobile_menu.removeEventListener('click')

mobile_menu.addEventListener('click', ()=> {
    eventNav = true;
    nav_list.style.display = 'flex';
    nav_list.style.animation = 'animationNavbar 0.7s ease';
});

