// бургер и бокове меню
const headerBurger = document.querySelector('.header__burger');
const headerBurgerIcon = document.querySelector('.header__burger-icon');
const headerNav = document.querySelector('.header__mobile-nav');

headerBurger.addEventListener('click', function(){
    headerNav.classList.toggle('header__mobile-nav_active');
    headerBurgerIcon.classList.toggle('header__burger-icon_active');
})
// 

// липкий хедер
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
// 

// скрываем мобильную навигацию при клике на ссылки
const listItem = document.querySelectorAll('.header__list-item');
if(listItem) {
    for (let list of listItem) {
        const itemLink = list.querySelector('.header__list-item-link');

        if(itemLink) {
            itemLink.addEventListener('click', function(){
                headerNav.classList.remove('header__mobile-nav_active');
                headerBurgerIcon.classList.remove('header__burger-icon_active');
                // bodyLock.classList.remove('body__lock');
            })
        }
            
    }
};

const headerBtn = document.querySelector('.header__btn');

headerBtn.addEventListener('click', function(){
    headerNav.classList.remove('header__mobile-nav_active');
    headerBurgerIcon.classList.remove('header__burger-icon_active');    
})