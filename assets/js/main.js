(function () {
    'use strict';

    // :: Loading
    $(window).on('load', function () {
        $('.loading').fadeOut();
    });


    // :: Add Class Active For ('.nav-bar')
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('.nav-bar').height() + 30) {
            $('.nav-bar').addClass('active');
        } else {
            $('.nav-bar').removeClass('active');
        }
    });

    // :: Add Class Active For $menuLink And $navbarMenu
    $('.open-nav-bar').on('click', function (e) {
        e.preventDefault();
        $('#open-nav-bar-menu').toggleClass('active');
        $('#open-nav-bar-menu').slideToggle();
    });


    $('.open-search').on('click', function () {
        $(this).toggleClass('active');
        $('.search-box').slideToggle();
    });

    // :: Swiper Header
    var swiper = new Swiper(".header-swiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        mousewheel: true,
        keyboard: true,
    });


    // :: Swiper Projects
    var swiper = new Swiper(".team-swiper", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-team-button-next",
            prevEl: ".swiper-team-button-prev",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints: {
            575: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1399: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    var swiper = new Swiper(".about-company-swiper", {
        cssMode: true,
        navigation: {
            nextEl: ".swiper-about-company-button-next",
            prevEl: ".swiper-about-company-button-prev",
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-about-company-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
    });


}());