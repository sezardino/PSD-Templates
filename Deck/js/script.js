let navBtn = document.querySelector('.nav__btn'),
    nav = document.querySelector('.nav__list');


nav.classList.remove('nav__list--nojs')
navBtn.classList.remove('nav__btn--nojs')

navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('nav__btn--active');
    nav.classList.toggle('nav__list--hidden');
})