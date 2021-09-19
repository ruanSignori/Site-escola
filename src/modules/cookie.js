
/*function setCookie(nome, valor) {
    var validade = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        validade = "; expires=" + date.toUTCString();
    }
    document.cookie = nome + "=" + (valor || "") + validade + "; path=/";
}

function getCookie(nome) {
    var nomeCookie = nome + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length, c.length);
    }
    return null;
} */


const div = document.querySelector('.acept-cookies');
const button = document.querySelector('.button-cookies');

button.addEventListener('click', e => {
    if (e.target) div.remove('div');
});