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
/* En esta seccion es donde el usuario alagira la cantidad del producto */
const i = document.getElementById('counter');

function incrementer() {
    i.value++;
}

function decrementer() {
    if (i.value > 0) {
        i.value--;
    } else alert('Operacion no disponible');
}