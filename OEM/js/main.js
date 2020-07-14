// const { active } = require("browser-sync");

$(function () {

    $(".menu a").click(function () {
        let element = $(this).attr("href");

        let dist = $(element).offset().top;

        $("html, body").animate({
            "scrollTop": dist,
        }, 1000)

        return false;

    })

    $(window).scroll(function () {
        let height = $(window).scrollTop();
        if (height > 600) {
            $(".arrow__up").addClass("fix");
        } else {
            $('.arrow__up').removeClass('fix');
        }
    })

    $(".arrow__up").on("click", function () {
        $("html, body").animate({
            "scrollTop": 0,
        }, 1000)

        return false;
    })

    $(".burger-menu").on("click", function () {
        $(".menu").toggleClass("active");
    })

    $(".menu a").on("click", function () {
        $(".menu").toggleClass("active");
    })

    $('.head__row-item').not('.active').click(function () {
        let index = $(this).index();
        let content = $('.tabs-content__item').eq(index);
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabs-content__item').css('display', 'none').eq(index).css('display', 'flex');
    })

    $(".head__row-item:first").addClass("active");
    $(".tabs-content__item:first").css("display", "flex");


    $(".unique__tabs-item").on("click", function () {
        $(this).addClass('active').siblings().removeClass('active');
        return false;
    })
    $(".unique__tabs-item:first").addClass("active");


    $(".statistic__inner-tabs li").on("click", function () {
        let index = $(this).index();
        let content = $(".statistic__inner-tabs__item").eq(index);
        $(this).addClass("active").siblings().removeClass('active');
        $(".statistic__inner-tabs__item").css('display', 'none').eq(index).css('display', 'block');
        return false;
    })
    $(".statistic__inner-tabs li:first").addClass("active");
    $(".statistic__inner-tabs__item:first").css("display", "block");


    $(".rates__buy-item").on("click", function () {
        $(this).addClass('rates-active').siblings().removeClass('rates-active');
        return false;
    })
    // $(".rates__buy-item:nth-child(2)").addClass("rates-active");

    if (window.innerWidth <= 1005) {
        $(".rates__buy-items").slick({
            infinite: true,
            prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/back.png" alt="">',
            nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/forward.png" alt="">',
        });
        $(".rates__buy-item").addClass("rates-active");
    }

});

