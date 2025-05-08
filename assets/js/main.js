(function ($) {
    'use strict';
    var preloader = document.getElementById('pre-loader');
    window.addEventListener("load", function () {
        preloader.style.display = "none";
    })

    var typed = new Typed('.auto-type', {
        strings: ['Web developer', 'Freelancer', 'Wordpress developer', 'Shopify developer'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

    $('.click_function').click(function () {
        $('body').toggleClass('dark-mode');
    });
    $('.click_function').click(function () {
        $(this).toggleClass('icon_show');
    });


    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww > 991) {
            $('.header-section').removeClass('mobile-menu');
        } else if (ww <= 991) {
            $('.header-section').addClass('mobile-menu');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    alterClass();
    $('.header-section.mobile-menu .mobile-menu-icon').click(function () {
        $('.header-section.mobile-menu').toggleClass('menu-show');
    });
    $('.header-section nav#sticky_header li.nav-item').click(function () {
        $('.header-section.mobile-menu').removeClass('menu-show');
    });




    $(".portfolio-items").isotope();
    $(".portfolio-menu li").on("click", function () {
        var selector = $(this).attr("data-filter");
        $(".portfolio-items .row").isotope({
            filter: selector
        });
    });

    $('.portfolio-menu li').click(function () {
        $('.portfolio-menu li').removeClass("active");
        $(this).addClass("active");
    });

    $(".portfolio-media-section.owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        nav: true,
        dots: true,
        dotsData: false,
        loop: true,
        autoplayTimeout: 7000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag: false,
    });

    $(".testimonial-items .testimonial-carousel.owl-carousel").owlCarousel({
        autoplay: false,
        nav: false,
        dots: true,
        loop: true,
        margin: 20,
        autoplayTimeout: 7000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    if ($('#map').length > 0) {
        $(function () {
            var fenway = [-33.7719703, 150.9113093];
            $('#map').gmap3({
                center: fenway,
                zoom: 13,
                scrollwheel: false
            }).streetviewpanorama('#street', {
                position: fenway,
                pov: {
                    heading: 34,
                    pitch: 10,
                    zoom: 1
                }
            });
        });
    }

    $(window).scroll(function () {


    });

}(jQuery));
