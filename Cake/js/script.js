'use strict'
let map = document.querySelector('.map__overflow'),
    bo = document.querySelector('.copyright'),
    info = document.querySelector('.info');

map.addEventListener('click',()=>{
    map.style.display = 'none'
});
bo.addEventListener('click', ()=>{
    map.style.display = '';
});
info.addEventListener('click', ()=>{
    map.style.display = '';
});

$(document).ready(function(){
    $('.hero').slick({
      autoplay: true,

    });
    $('.slider__container').slick({
        autoplay: true,

      });
  });
