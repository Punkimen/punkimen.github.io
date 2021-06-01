"use strict";

// range-input
let sliderQuantity = document.querySelector('#quantity-pay');
let sliderTerm = document.querySelector('#term-pay');

noUiSlider.create(sliderQuantity, {
    start: 4,
    step: 1,
    connect: [true, false],
    animate: false,
    range: {
        min: 0,
        max: 14
    }
});
noUiSlider.create(sliderTerm, {
    start: 90,
    step: 5,
    connect: [true, false],
    animate: false,
    range: {
        min: 10,
        max: 115
    }
});

// range-input end
// show more
let showMore = $('.buy-choose__showMore')
let chooseRadio = $('.choosen-radio')

showMore.on('click', function () {
    $(this).toggleClass('active')
    $(this).parents('.buy-choose__head').next().slideToggle()
})
chooseRadio.on('change', function () {
    $('.buy-choose').removeClass('active')
    if ($(this).is(':checked')) {
        $(this).parents('.step-content__item').addClass('active')
    }
})
// show more end
// questions
let questionItem = $('.item-question');
let questionItemHead = $('.item-question__head');

questionItemHead.on('click', function () {
    $(this).parent().toggleClass('active')
})
// questions end