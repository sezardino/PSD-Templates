const works = () => {
    const overflow = document.querySelector('.overflow'),
          overflowImg = document.querySelector('.overflow__img'),
          galeryContainer = document.querySelector('.works__wrapper');

    const showOverflow = () => {
        overflow.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    const closeOverflow = () => {
        overflow.style.display = '';
        document.body.style.overflow = '';
    };

    const onGaleryContainer = (evt) => {
        const target = evt.target;
        if (target.closest('img')) {
            overflowImg.src = target.src;
            showOverflow();

        };
    };
    
    const onOverflowClick = (evt) => {
        if (!evt.target.closest('img')) {
            closeOverflow();
        };
    };

    overflow.addEventListener('click', onOverflowClick);
    galeryContainer.addEventListener('click', onGaleryContainer);
};

export default works;