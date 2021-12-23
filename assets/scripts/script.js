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



var swiper = new Swiper('.products-slider', {
    navigation: {
        nextEl: '.product-btn-next',
        prevEl: '.product-btn-prev',
    },
	 // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
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

// Accodrion Active Class
const accordion = document.querySelector('.product-info .accordion');
if (accordion) {
    accordion.addEventListener("click", function (e) {
        accordion.classList.toggle('active');
    });
}

// Lang Switch
const langSwitch = document.querySelector('.switch');
if (langSwitch) {
    langSwitch.addEventListener("click", function (e) {
      langSwitch.classList.toggle('active');
    });
}

// VIDEO
$("#video-item-modal-1").on('hidden.bs.modal', function (e) {
    $("#video-item-modal-1 iframe").attr("src", $("#video-item-modal-1 iframe").attr("src"));
});

$("#video-item-modal-2").on('hidden.bs.modal', function (e) {
    $("#video-item-modal-2 iframe").attr("src", $("#video-item-modal-2 iframe").attr("src"));
});

$("#video-item-modal-3").on('hidden.bs.modal', function (e) {
    $("#video-item-modal-3 iframe").attr("src", $("#video-item-modal-3 iframe").attr("src"));
});

$("#video-item-modal-4").on('hidden.bs.modal', function (e) {
    $("#video-item-modal-4 iframe").attr("src", $("#video-item-modal-4 iframe").attr("src"));
});

$("#video-item-modal-5").on('hidden.bs.modal', function (e) {
    $("#video-item-modal-5 iframe").attr("src", $("#video-item-modal-5 iframe").attr("src"));
});

var regions=[
    {
        "region_name": "Karalpakistan Republic",
        "region_code": "karalpakistanRepublic",
    },
    {
        "region_name": "Xorazm",
        "region_code": "xorazm",
    },
    {
        "region_name": "Namangan",
        "region_code": "namangan",
    },
    {
        "region_name": "Andijon",
        "region_code": "andijon",
    },
    {
        "region_name": "Fergana",
        "region_code": "fergana-2",
    },
    {
        "region_name": "Fergana",
        "region_code": "fergana",
    },
    {
        "region_name": "Surhandarya",
        "region_code": "surhandarya",
    },
    {
        "region_name": "Sirdarya",
        "region_code": "sirdarya",
    },
    {
        "region_name": "Samarkand",
        "region_code": "samarkand",
    },
    {
        "region_name": "Kashkadarya",
        "region_code": "kashkadarya",
    },
    {
        "region_name": "Navoi",
        "region_code": "navoi",
    },
    {
        "region_name": "Djizzak",
        "region_code": "djizzak",
    },
    {
        "region_name": "Djizzak",
        "region_code": "djizzak",
    },
    {
        "region_name": "Bukhara",
        "region_code": "bukhara",
    },
    {
        "region_name": "Tashkent",
        "region_code": "tashkent",
    }
];


var temp_array= regions.map(function(item){
    return item.population;
});
var highest_value = Math.max.apply(Math, temp_array);

$(function() {

    for(i = 0; i < regions.length; i++) {

        $('#'+ regions[i].region_code)
        .css({'fill': '#999999' + regions[i].population/highest_value +')'})
        .data('region', regions[i]);
    }

    $('.where-to-buy__map path').click(function (e) {
        var region_data=$(this).data('region');
        $('<div class="info_panel">'+
            region_data.region_name +
          	'</div>'
         )
        .appendTo('body');
        
    })
    // $('body').click(function() {
    //     $('.info_panel').remove()
    // })
    .click(function(e) {
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse
        $('.info_panel').css({
            top: mouseY-70,
            left: mouseX - ($('.info_panel').width()/2)
        });
    });


});
