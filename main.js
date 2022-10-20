const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuHamburguer = document.querySelector('.menu');
const shoppingCartt = document.querySelector('.navbar-shopping-cart');
const asaide = document.querySelector('.product-detail');
const ordersecundary = document.querySelector('.my-order');
const bottomprimary = document.querySelector('.primary-button');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMenuHamburguer);
shoppingCartt.addEventListener('click', toggleshopping);
bottomprimary.addEventListener('click', toggleordersecundary);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuHamburguer() {
    menuMobile.classList.toggle('inactive');
}

function toggleshopping() {
 asaide.classList.toggle('inactive');
}

function toggleordersecundary() {
    ordersecundary.classList.toggle('inactive');
}