const navMenu = () => {
    const nav = document.querySelector('.nav'),
          navBtn = document.querySelector('.nav__btn');

    nav.classList.remove('nav__no-js');

    const openNavMenu = () => {
        nav.classList.add('nav-active');
        navBtn.classList.add('nav__btn--active');
        document.addEventListener('click', onDocumentClick);
    };
    
    const closeNavMenu = () => {
        nav.classList.remove('nav-active');
        navBtn.classList.remove('nav__btn--active');
        document.removeEventListener('click', onDocumentClick);
    };

    const onDocumentClick = (evt) => {
        if (!evt.target.closest('nav') && !evt.target.closest('.nav__btn')) {
            closeNavMenu();
        };
    };

    const onNavBtnClick = (evt) => {
        if (!evt.target.closest('.nav__btn--active')) {
            openNavMenu();
        } else {
            closeNavMenu();
        };
    };

    const onNavClick = (evt) => {
        if (evt.target.classList.contains('nav__link')) {
            closeNavMenu()
        }
    };

    navBtn.addEventListener('click', onNavBtnClick);
    nav.addEventListener('click', onNavClick);
};

export default navMenu;