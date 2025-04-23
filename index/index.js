let currentSlide = 0;
function changeSlide(direction){ const slides = document.querySelectorAll('.slide');
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide + direction + slides.length) % slides.length;
slides[currentSlide].classList.add('active');
const slidesContainer = document.querySelector('.slides');
slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;}
// Инициализация document.addEventListener('DOMContentLoaded', () => { const slides = document.querySelectorAll('.slide'); slides[0].classList.add('active'); });