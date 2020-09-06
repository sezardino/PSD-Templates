let nav = document.querySelector('.nav'),
    navBtn = document.querySelector('.nav__btn'),
    navLink = document.querySelectorAll('.nav__link');


nav.classList.remove('nav__no-js')

navBtn.addEventListener('click', function(){
    nav.classList.toggle('nav-active')
    navBtn.classList.toggle('nav__btn--active')
})
hero.addEventListener('click', ()=>{
    if(nav.classList.contains('nav-active')){
        nav.classList.toggle('nav-active')
        navBtn.classList.toggle('nav__btn--active')
    }

})
about.addEventListener('click', ()=>{
    if(nav.classList.contains('nav-active')){
        nav.classList.toggle('nav-active')
        navBtn.classList.toggle('nav__btn--active')
    }

})

navLink.forEach(item => {
    item.onclick = function() {
        nav.classList.toggle('nav-active')
        navBtn.classList.toggle('nav__btn--active')
    }
});
