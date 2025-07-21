$(function () {
    $('.header .gnb > ul > li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle(200);
        $(this).parent().siblings().find('.sub').stop().slideUp(200);
    });

    $('.mbtn').on('click', function (e) {
        e.preventDefault();
        $('.gnb').toggleClass('on');
        $('.hd_wrap h1').toggleClass('on');
        $('.header .utils').toggleClass('on');
    });

    // $('.header .gnb > ul > li>a').on('click', function (e) {
    //     e.preventDefault();
    //     //$('.sub').toggleClass('on');
    // });
})



$(function () {

    const mbtn = document.getElementById('mbtn');
    mbtn.addEventListener('click', function () {
        this.classList.toggle('is-active');
    });

    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: true,
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev');
    });
    $('.main_visual .arrows .play').off('click').on('click', function () {
        var $btn = $(this);
        if ($btn.hasClass('on')) {

            $('.main_visual_slide').slick('slickPlay');
        } else {

            $('.main_visual_slide').slick('slickPause');
        }
        $btn.toggleClass('on');
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext');
    });
});


$(function () {
    const main_sec02_slide = new Swiper('.main_sec02_slide', {
        slidesPerView: 4, // 원하는 슬라이드 개수로 조정
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.main_sec02_next',
            prevEl: '.main_sec02_prev',
        },

        scrollbar: {
            el: ".main_sec02 .scrollbar",
            hide: false,
            draggable: true,
            dragSize: 80,
        },

        breakpoints: {
            1025: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 15,
            },

            0: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },

        }
    });



});

$(function () {
    const MIS = new Swiper('.main_sec04_slide', {
        loop: true,
        effect: 'fade',
        pagination: {
            el: '.main_sec04 .page',
            clickable: true,
        },


        navigation: {
            nextEl: '.main_sec04 .next',
            prevEl: '.main_sec04 .prev',
        },
    });

});


$(function () {
    //부드럽게 여닫음
    $('.footer .inner .top .right strong').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });

});
