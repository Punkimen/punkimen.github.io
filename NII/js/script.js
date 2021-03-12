$(document).ready(function () {
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow--prev"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow--next"></div>',
    })
    $('.team__all-scroll').mCustomScrollbar({
        axis: "y",
    });
});