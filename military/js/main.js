$(function () {
    $('section.service .service_r article .s_menu_h').click(function () {
        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    $('section.notice .container article h2').click(function () {
        $(this).parent().addClass('on').siblings().removeClass('on');

    })

    let mediaSwiper = new Swiper(".mswiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let guideSwiper = new Swiper(".guide_l", {
        navigation: {
            nextEl: ".guide_l .swiper-button-next",
            prevEl: ".guide_l .swiper-button-prev",
        },
    });

    $('.txtAniBox .txtAni1').simplyScroll({
        speed: 1,
        direction: 'forwards',
        pauseOnHover: true,
        pauseOnTouch: false,
        clone: true,
    });

})