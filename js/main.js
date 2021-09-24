// бургер и бокове меню
const headerBurger = document.querySelector('.header__burger');
const headerBurgerIcon = document.querySelector('.header__burger-icon');
const headerNav = document.querySelector('.header__mobile-nav');
const bodyLock = document.querySelector('body')

headerBurger.addEventListener('click', function(){
    headerNav.classList.toggle('header__mobile-nav_active');
    headerBurgerIcon.classList.toggle('header__burger-icon_active');
    bodyLock.classList.toggle('body__lock');
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
                bodyLock.classList.remove('body__lock');
            })
        }
            
    }
};

const headerBtn = document.querySelector('.header__btn');

headerBtn.addEventListener('click', function(){
    headerNav.classList.remove('header__mobile-nav_active');
    headerBurgerIcon.classList.remove('header__burger-icon_active');  
    bodyLock.classList.remove('body__lock');

})


// карусель
$('.consist__main').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: true,
    autoHeight:true,
    autoHeightClass: 'owl-height',
    mouseDrag: false,
    touchDrag: false,
    margin:30,
});


// скролл к якорным ссылкам
$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});
// 


$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});