/* seccion del nav lateral y el fondo oscuro */
const overlay = document.querySelector('.overlay');

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.querySelector('span').style.visibility = 'hidden';
    overlay.classList.toggle('visible');
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
    document.querySelector('span').style.visibility = 'visible';
    overlay.classList.toggle('visible');
}
/* ------------------------------cart open & clase funtion---------------------------------------- */
let menuStatus = 1;

function openAndClose() {
    if (menuStatus == 1) {
        document.querySelector('.submenu-ul').style.display = 'block';
        menuStatus = 0;
    } else if (menuStatus == 0) {
        document.querySelector('.submenu-ul').style.display = 'none';
        menuStatus = 1;
    }
}
/* Este codigo es para que cuando se haga click afuera del submenu tambien se cierre el submenu-ul */

/* -------------------/------</cart open & clase funtion> -----------------*/

/* -----------------------/nav------------------------- */

('use strict');
// Select all slides
const slides = document.querySelectorAll('.slide');

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector('.btn-next');

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener('click', function() {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select next slide button
const prevSlide = document.querySelector('.btn-prev');

// add event listener and navigation functionality
prevSlide.addEventListener('click', function() {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

/* section rest & add  */
/* En esta seccion es donde el usuario elige la cantidad del producto */
const i = document.getElementById('counter');

function incrementer() {
    i.value++;
}

function decrementer() {
    if (i.value > 0) {
        i.value--;
    } else {
        alert('operacion no disponible');
    }
}

/* ---------------------------------- */

/* objeto con los datos de compra */

/* ------------------------------- */
let activeClass = document.querySelector('.active');

/* sumar la cantidad de producto con el precio de 'sneakerPrice' para tener el precio total */
const sneakerPrice = document.getElementById('sneakerPrice');
let initialPrice = parseInt(sneakerPrice.innerHTML);

function btn() {
    const numProduct = parseInt(document.getElementById('counter').value);

    while (numProduct >= 1) {
        document.querySelector('.submenu-div__button-subcontain').style.visibility = 'visible';
        document.querySelector('.btn--cart').style.visibility = 'visible';
        submenuDivButton.style.visibility = 'visible';
        activeClass.style.display = 'none';

        prodSneakers.quantity = numProduct;
        prodSneakers.price = initialPrice;
        prodSneakers.total = initialPrice * prodSneakers.quantity;

        let array = [prodSneakers.quantity, prodSneakers.total];

        document.getElementById('priceOne').innerHTML = initialPrice;
        document.getElementById('totalQuantity').innerHTML = prodSneakers.quantity;
        document.getElementById('totalPrice').innerHTML = prodSneakers.total;
        prueba = 0;

        return array;
    }
}

/* objeto con valores del producto */
const prodSneakers = {
    quantity: '',
    price: '',
    total: '',
};
/* ---------------------------------- */

/* ICON-FUNTION */
function cartReset() {
    document.querySelector('.submenu-div__button-subcontain').style.visibility = 'hidden';
    document.querySelector('.btn--cart').style.visibility = 'hidden';
    document.getElementById('priceOne').innerHTML = '';
    document.getElementById('totalQuantity').innerHTML = '';
    document.getElementById('totalPrice').innerHTML = '';
    delete prodSneakers.quantity;
    delete prodSneakers.price;
    delete prodSneakers.total;
    activeClass.style.display = 'block';
}