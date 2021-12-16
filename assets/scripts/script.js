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
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        // },
        // // when window width is >= 480px
        // 480: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        // },
        // // when window width is >= 640px
        // 640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        // },
        320:{
            slidesPerView: "auto",
            spaceBetween: 25,
            touchRatio: 0.5
        },
        768:{
            slidesPerView: "auto",
            spaceBetween: 30,
            touchRatio: 0.5
        }
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

/* add a class to <html> */
var isTouch = 'ontouchstart' in window;
document.documentElement.className += isTouch?' touch ':' no-touch ';

// Main-Video
$("#mainVideo").on('hidden.bs.modal', function (e) {
    $("#mainVideo iframe").attr("src", $("#mainVideo iframe").attr("src"));
});

$('.swiper-slide').on('mouseover', function() {
    slidercontent.slideTo($(this).index());
})