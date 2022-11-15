const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamburguer = document.querySelector('.menu');
const shoppingCartt = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMenuHamburguer);
shoppingCartt.addEventListener('click', toggleshopping);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//funciones para que cierre uno cuando abre otro menu
function toggleDesktopMenu() {
    const isAsaideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsaideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuHamburguer() {
    const isAsaideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsaideClosed) {
        shoppingCartContainer.classList.add('inactive');
    };

    menuMobile.classList.toggle('inactive');
}

function toggleshopping() {
    const isMobileClosed = menuMobile.classList.contains('inactive');
    const isDesktopClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileClosed) {
        menuMobile.classList.add('inactive');
    };
    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive');
    };

    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

/* manejando el DOM para agregar tarjetas de productos */

const  productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
//ciclo for donde creo los elementos de product y manejo el DOM, llenando la pantalla con una lista mas facil de entender
function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            // product= {name, price, image} -> product.image
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
            productImg.addEventListener('click', openProductDetailAside);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
            //creando las etiquetas que se veran en el DOM y que llamaran la lista de objetos ya hecha
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            //exciste appendchild en el que tocaria uno por uno hacer el llamado para agregar al product
            productInfoDiv.append(productPrice, productName)
        
            const productInfoFigure = document.createElement('figure');
            const productImgCart = document.createElement('img');
            productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg') //los svg tener encuenta que esten bien ubicados la carpeta
        
        
            //aninando el product para que se vea la tarjeta completa de cada uno 
        
            productInfoFigure.appendChild(productImgCart);
        
            productInfo.append(productInfoDiv, productInfoFigure);
        
            productCard.append(productImg, productInfo);
        
            cardsContainer.appendChild(productCard);
        }
}

renderProducts(productList);
