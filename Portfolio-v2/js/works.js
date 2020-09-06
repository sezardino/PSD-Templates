let overflow = document.querySelector('.overflow'),
    galeryImg = document.querySelectorAll('.work__img');
    overflowImg = document.querySelector('.overflow__img');

galeryImg.forEach(item =>{
    item.onclick = function(){
        overflowImg.src = item.src;
        overflow.style.display = 'block';
        document.body.style.overflow = 'hidden'
    }
})
overflow.onclick = function(){
    overflow.style.display = 'none';
    document.body.style.overflow = ''
}