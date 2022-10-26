const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuHamburguer = document.querySelector('.menu');
const shoppingCartt = document.querySelector('.navbar-shopping-cart');
const asaide = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



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
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            // product= {name, price, image} -> product.image
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
        
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
