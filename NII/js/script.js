$(document).ready(function () {
    //   общие функции
    const equalHeight = (elem) => {
        let max_col_height = 0;
        elem.each(function () {
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        elem.height(max_col_height);
    }
    //   общие функции end

    $('.burger__icon').on('click', function () {
        $(this).toggleClass('active');
        $('.header-mobile').toggleClass('show');
        $('body').toggleClass('overflow-hidden')
    });
    $('.header-mobile__link--more').on('click', function () {
        $(this).toggleClass('open')
        $(this).next().slideToggle();
        return false
    })
    $('.sublist-elem--more').on('click', function () {
        $(this).toggleClass('open')
        $(this).next().slideToggle();
        return false
    })




    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow--prev"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow--next"></div>',
        responsive: [
            {
                breakpoint: 568,
                settings: {
                    arrows: false,
                }
            },
        ]
    })
    $('.team__all-scroll').mCustomScrollbar({
        axis: "y",
    });
    $(window).resize(function () {
        let windowWidth = $(window).width();
        if (windowWidth > 767) {
            equalHeight($('.footer-title'))
        }
        equalHeight($('.footer-title'))
    })
    // вызов общих функций
    if ($(window).width() > 767) {
        equalHeight($('.footer-title'))
    }
    equalHeight($('.footer-title'))

    // вызов общих функций end
});