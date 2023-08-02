const carousel = document.querySelector('.carousel');
const slideContainer = carousel.querySelector('.slide-container');
const prevButton = carousel.querySelector('.prev-btn');
const nextButton = carousel.querySelector('.next-btn');
const totalSlides = slideContainer.children.length;
let currentSlide = 1;

function showSlide(slideNumber) {
  slideContainer.style.transform = `translateX(-${(slideNumber - 1) * 100}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentSlide > 1) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < totalSlides) {
    currentSlide++;
    showSlide(currentSlide);
  }
});
