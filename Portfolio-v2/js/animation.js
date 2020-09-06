let progress = document.querySelectorAll('.progress__item'),
    circle = document.querySelectorAll('.can__circle');

window.addEventListener('scroll', function(){
    if(this.scrollY > 1200){
        progress.forEach(i =>{
            i.classList.add('progress__animation');
        })
    } else if(this.scrollY > 80){
        circle.forEach(i =>{
            i.classList.add('circle__animation');
        })
    }

})