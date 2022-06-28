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
let activeClass = document.querySelector('.active');

function btn() {
    const numProduct = parseInt(document.getElementById('counter').value);

    while (numProduct >= 1) {
        submenuDivButton.style.visibility = 'visible';
        activeClass.style.display = 'none';
        return numProduct;
    }
}

/* sumar la cantidad de producto con el precio de 'sneakerPrice' para tener el precio total */
const sneakerPrice = document.getElementById('sneakerPrice');
/* let mult = document.querySelector('.mult'); */
/* nota: el problema que se presenta es que no se como agregar el valor total de la multiplicacion a 
el tag <b></b> para que se refleje en el submenu, faltaria agregar la multiplicacion y el resultado total de la misma
para que se muestre en el submenu */
function addTotalPrice() {
    let initialPrice = parseInt(sneakerPrice.innerHTML);
    let multiplicateRes = initialPrice * btn();
    let mulInside = multiplicateRes;
    mult.appendChild(mulInside);
    return multiplicateRes;
}

/* let totalPrice = document.getElementById('totalPrice');
let nose = parseInt(document.createTextNode(addTotalPrice()));
totalPrice.append(nose); */