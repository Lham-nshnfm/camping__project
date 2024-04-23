const navBtn=document.querySelector(".nav__btn");
const mobileNavMenu=document.querySelector(".mobile-nav-menu")
let navOpen=false;
navBtn.addEventListener("click", function(){
    if (navOpen) {
        navBtn.classList.remove("nav__btn--open");
        mobileNavMenu.classList.remove("mobile-nav-menu--open")
        navOpen=false;
    } else {
        navBtn.classList.add("nav__btn--open");
        mobileNavMenu.classList.add("mobile-nav-menu--open")
        navOpen=true;
    }
});