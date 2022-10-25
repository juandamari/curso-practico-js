const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuHamburguer = document.querySelector('.menu');
const shoppingCartt = document.querySelector('.navbar-shopping-cart');
const asaide = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMenuHamburguer);
shoppingCartt.addEventListener('click', toggleshopping);

//funciones para que cierre uno cuando abre otro menu
function toggleDesktopMenu() {
    const isAsaideClosed = asaide.classList.contains('inactive');
    
    if(!isAsaideClosed) {
        asaide.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuHamburguer() {
    const isAsaideClosed = asaide.classList.contains('inactive');

    if(!isAsaideClosed) {
        asaide.classList.add('inactive');
    };

    menuMobile.classList.toggle('inactive');
}

function toggleshopping() {
    const isMobileClosed = menuMobile.classList.contains('inactive');
    const isDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileClosed) {
        menuMobile.classList.add('inactive');
    }
        if(!isDesktopClosed){
        desktopMenu.classList.add('inactive')
    };

    asaide.classList.toggle('inactive');
}

