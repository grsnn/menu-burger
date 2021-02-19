let iconMenu = document.querySelector('#menu');
let nav = document.querySelector('#nav');

window.addEventListener('load', () => {

    iconMenu.addEventListener('click', () => {
        iconMenu.classList.toggle('active')
        nav.classList.toggle('nav-open')
    })
    nav.addEventListener('click', () => {
        iconMenu.classList.remove('active')
        nav.classList.remove('nav-open')
    })
})