$(function () {

    $(".slider__inner, .blog__sllider-inner").slick({
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
    })

    $(".header_btn-menu").on('click', function () {
        $(".header__menu ul").slideToggle();
    })

    $(".header__menu a").click(function () {
        let element = $(this).attr("href");

        let dist = $(element).offset().top;

        $("html, body").animate({
            "scrollTop": dist,
        }, 1000)

        return false;

    })

})