// Tableau des diapositives
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

// Variables globales
let currentSlide = 0;
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

// Fonction pour mettre à jour le carrousel
function updateCarousel(index) {
    currentSlide = index;

    // Mise à jour de l'image
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;

    // Mise à jour du texte
    bannerText.innerHTML = slides[currentSlide].tagLine;

    // Mise à jour des bullet points
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === currentSlide);
    });
}

// Fonction pour créer les dots
function createDots() {
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-index', index);
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dot.addEventListener('click', function() {
            updateCarousel(index);
        });
        dotsContainer.appendChild(dot);
    });
}

// Event listeners pour les flèches
leftArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche');
    updateCarousel((currentSlide - 1 + slides.length) % slides.length);
});

rightArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche droite');
    updateCarousel((currentSlide + 1) % slides.length);
});

// Initialisation du carrousel
document.addEventListener('DOMContentLoaded', function() {
    createDots();
    updateCarousel(0);
});
