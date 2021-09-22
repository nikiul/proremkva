// бургер и бокове меню
const headerBurger = document.querySelector('.header__burger');
const headerBurgerIcon = document.querySelector('.header__burger-icon');
const headerNav = document.querySelector('.header__mobile-nav');

headerBurger.addEventListener('click', function(){
    headerNav.classList.toggle('header__mobile-nav_active');
    headerBurgerIcon.classList.toggle('header__burger-icon_active');
})

// липкий хедер
//  приипающая и уезжающая шапка 
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 500 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

// 