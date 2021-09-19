import Cookies from 'js-cookie'

const myCookie = Cookies.get('gamePadreFernando');
const acceptCookies = document.querySelector('.accept-cookies');

if (myCookie) acceptCookies.remove('div')
else {
    const btnCookies = document.querySelector('.button-cookies');
    btnCookies.addEventListener('click', () => {
        Cookies.set('gamePadreFernando', 'value', { expires: 365 });
        acceptCookies.remove('div');
    })
}
