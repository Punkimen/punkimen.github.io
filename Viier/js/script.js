$('.burger__icon').on('click', function () {
    $(this).toggleClass('active');
    $('.header-mobile__menu').toggleClass('show')
})

let spiral = $('.welcome-spiral__img');
if ($(window).width() < '1440') {
    $('.welcome-spiral__left').append($('.welcome-spiral__info_interest'));
    $('.welcome-spiral__left').append($('.welcome-spiral__info_buy'));
}

let spiralHeight = $('.welcome-spiral').height();
let spiralInnerHeight = $('.welcome-spiral__inner').height();
let generalHeight = spiralHeight + spiralInnerHeight

if ($(window).width() < '769') {
    generalHeight += 35;
    $('.welcome-spiral').css('height', generalHeight + 'px')
}

let max_col_height = 0;
$('.services-item__wrapper').each(function () {
    if ($(this).height() > max_col_height) {
        max_col_height = $(this).height();
    }
});
$('.services-item__wrapper').height(max_col_height);

AOS.init({
    easing: 'linear',
    duration: 1000
});

let arr = $('.team__wrapper-photo')
arr.on('mousemove', function () {
    let scene = $(this);
    console.log(typeof (scene[0]));
    var parallaxInstance = new Parallax(scene[0]);
})

let accordion = $('.question-accodrion__title')

accordion.on('click', function () {
    $(this).parent().toggleClass('active');
    $(this).next('.question-accodrion__content').slideToggle();
})

$('.works__wrapper-scroll').mCustomScrollbar({
    axis: "x",
});

let tabsHead = $('.works-tabs__item');
let tabsContent = $('.works-content__example');

tabsHead.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    if ($(this).hasClass('active')) {
        console.log($(this).index());
        index = $(this).index();
    }
    tabsContent.removeClass('visible')
    tabsContent.eq(index).addClass('visible')
})

$('#formValid').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            require: true,
        }
    },
    messages: {
        name: {
            required: "Пожалуйста заполните поле",
            minlength: "В имени миниму 2 символа"
        },
        email: {
            required: "Пожалуйста заполните поле",
        }
    },
});

$(function cb() {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        closeOnBgClick: true,
        enableEscapeKey: true,
        closeBtnInside: false
    });
    $(document).on('click', '.popup__exit', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

$(".scrollMenu").click(function () {
    let element = $(this).attr("scroll-href");

    let dist = $(element).offset().top;

    $("html, body").animate({
        "scrollTop": dist,
    }, 1000)
    $('.burger__icon').removeClass('active');
    $('.header-mobile__menu').removeClass('show')
    return false;

})