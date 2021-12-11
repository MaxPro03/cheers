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