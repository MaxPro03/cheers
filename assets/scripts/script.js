new Swiper('.main-slider', {
    navigation: {
        nextEl: '.slider-btn-next',
        prevEl: '.slider-btn-prev',
    },
    effect: 'fade',
    // autoplay: {
    //     delay: 5000,
    // },
    allowTouchMove: false,
    loop: true,
});

new Swiper('.products-slider', {
    navigation: {
        nextEl: '.product-btn-next',
        prevEl: '.product-btn-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    // slidesPerView: "auto",
    // centeredSlides: true,
    allowTouchMove: false,
    loop: true,
    watchOverflow: true,
    breakpoints: {
        1025:{
            slideToClickedSlide: false,
            // freeMode: false,
            // allowTouchMove: false,
        },
        1024:{
            slideToClickedSlide: true,
            // freeMode: true,
            // allowTouchMove: true
        },
        767: {
            slideToClickedSlide: false,
            spaceBetween: 24
        },
    }
});

// Burger Menu
const iconMenu = document.querySelector('.burger-icon');
if (iconMenu) {
    const headerNav = document.querySelector('.header-nav');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
    });
}