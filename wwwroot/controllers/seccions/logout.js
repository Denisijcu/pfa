document.querySelector("#nav-logout").addEventListener('click', fnLogout, false);

function fnLogout() {
    document.querySelector("#nav-logout").classList.replace('show', 'hide');
    document.querySelector("#nav-login").classList.replace('hide', 'show');
    document.querySelector("#menu").classList.replace('show', 'hide');
    document.querySelector("#lytsearch").classList.replace('show', 'hide');
    document.querySelector("#nav-userName").textContent = "";
    fnHome();
}