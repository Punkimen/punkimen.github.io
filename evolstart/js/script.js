"use strict";
let burgerMenu = $('.header__burger')
burgerMenu.on('click', () => {
    $('.burger__icon').toggleClass('active')
    $('.header-mobile').toggleClass('show')
    $('body').toggleClass('overlay')
})
let headerMobile = function () {
    let windowWidth = $(window).width();
    if (windowWidth < 993) {
        $('.header-mobile__container').prepend($('.header__nav'))
    } else {
        $('.header__search').after($('.header__nav'))
    }
    if (windowWidth < 768) {
        $('.header-mobile__container').prepend($('.header__search'))
    } else {
        $('.header__logo').after($('.header__search'))
    }
    if (windowWidth < 569) {
        $('.header-mobile__container').prepend($('.header__btns'))
    } else {
        $('.header__language').after($('.header__btns'))
    }
}
headerMobile()
$(window).resize(function () {
    headerMobile()
})

// banner-slider
$('.banner__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
})

// catalog-slider
$('.tournaments-catalog__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 568,
            settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})

// language
const select = () => {
    const selectHeader = $('.costum-select__header')
    const selectBody = $('.costum-select__body')
    const selectCurrent = $('.costum-select__current')
    const selectElem = $('.costum-select__elem')
    selectHeader.on('click', function () {
        selectBody.toggleClass('show')
    })
    selectElem.on('click', function () {
        let dataValue = $(this).attr('data-lang')
        let srcIcon = $(this).children('.language__icon').attr('src')
        $(this).addClass('active').siblings().removeClass('active')
        selectCurrent.attr('data-lang', dataValue)
        $('.costum-select__current span').text(dataValue)
        $('.costum-select__current img').attr('src', srcIcon)
        selectBody.removeClass('show')
        console.log(srcIcon);

    })
}
select();

// tabs

const tab = $('.tabs-tab')
const tabItem = $('.tabs__item')

tab.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    let index = $(this).index()
    tabItem.removeClass('show')
    tabItem.eq(index).addClass('show')
})