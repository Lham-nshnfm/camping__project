const navBtn = document.querySelector('.nav__btn');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const overlay = document.querySelector('.overlay');
const navBtnOpen = document.querySelector('.nav__btn--open');
let navOpen = false;

navBtn.addEventListener('click', function () {
    if (navOpen) {
        navBtn.classList.remove('nav__btn--open');
        mobileNavMenu.classList.remove('mobile-nav-menu--open');
        overlay.classList.add('overlay--hidden');
        navOpen = false;
    } else {
        navBtn.classList.add('nav__btn--open');
        mobileNavMenu.classList.add('mobile-nav-menu--open');
        overlay.classList.remove('overlay--hidden');
        navOpen = true;
    }
});

overlay.addEventListener('click', function () {
    navBtn.classList.remove('nav__btn--open');
    mobileNavMenu.classList.remove('mobile-nav-menu--open');
    overlay.classList.add('overlay--hidden');
    navOpen = false;
});
