const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
let currentSlide = 0;

function createDots() {
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);
    });
}

function updateCarousel(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    const bannerImg = document.querySelector('.banner-img');
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;

    const bannerText = document.querySelector('#banner p');
    bannerText.innerHTML = slides[currentSlide].tagLine;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentSlide);
    });
}

leftArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche');
    updateCarousel(-1);
});

rightArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche droite');
    updateCarousel(1);
});

document.addEventListener('DOMContentLoaded', function() {
    createDots();
    updateCarousel(0);
});
