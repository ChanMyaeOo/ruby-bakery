/**
 * CAROUSEL SECTION
 */
const carouselSlide = document.querySelector('.carousel__slide');
const carouselBoxes = document.querySelectorAll('.carousel__slide > div');

// Buttons
const prevBtn = document.querySelector('#carousel__prevBtn');
const nextBtn = document.querySelector('#carousel__nextBtn');

// Counter
let counter = 1;
const size = carouselBoxes[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

// Button listeners
nextBtn.addEventListener('click', () => {
  if (counter >= carouselBoxes.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});

// Transitionend listener
carouselSlide.addEventListener('transitionend', () => {
  if (carouselBoxes[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselBoxes.length - 2;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }

  if (carouselBoxes[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselBoxes.length - counter;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});
