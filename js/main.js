const headerBurger = document.querySelector('.header__burger');
const headerBurgerIcon = document.querySelector('.header__burger-icon');
const headerNav = document.querySelector('.header__nav');

headerBurger.addEventListener('click', function(){
    headerNav.classList.toggle('header__nav_active');
    headerBurgerIcon.classList.toggle('header__burger-icon_active');
})