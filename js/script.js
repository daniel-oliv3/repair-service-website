/*Menu Toggle*/
let menu = document.querySelector('#menu-btn');

let navbarLinks = document.querySelector('.header .navbar .links');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbarLinks.classList.toggle('active');
}

















