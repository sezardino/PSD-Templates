import animation from './modules/animation';
import navMenu from './modules/navMenu';
import works from './modules/works';
import slider from './modules/slider';

animation();
navMenu()
works()
if (window.innerWidth < 768) {
  slider({
    container:'.can',
    slide:'.slider__slide',
    nextArrow: '.next',
    prevArrow: '.prev',
    wrapper: '.can__wrapper',
    field: '.slider__inner'
    });
}


// document.querySelectorAll('.can__circle').forEach(item => item.style.display = 'flex')