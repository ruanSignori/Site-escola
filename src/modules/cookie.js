import Cookies from 'js-cookie'

const myCookie = Cookies.get('gamePadreFernando');
const acceptCookies = document.querySelector('.true');
setTimeout( acceptCookies.classList.add('accept-cookies'), 10000)
if (myCookie) acceptCookies.remove('div')
else {
    const btnCookies = document.querySelector('.button-cookies');
    btnCookies.addEventListener('click', () => {
        Cookies.set('gamePadreFernando', 'value', { expires: 365 });
        acceptCookies.remove('div');
    })
}
