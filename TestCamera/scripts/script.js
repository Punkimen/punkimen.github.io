let lang = $('.account__language-item')
lang.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
})

$('#about').on('click', function () {
    $('.mainMenu').slideToggle();;
});

$('.accordion__title').on('click', function () {
    $(this).toggleClass('active').next().slideToggle();
    return false;
});

$('.info__slider').slick({
    arrows: false,
    swipe: true,
    dots: true,
    adaptiveHeight: true
});

$('.burger__menu').on('click', function () {
    $('.header__menu').slideToggle();
    return false;
})


if ($(window).width() <= '750') {
    $('.menu__list-link').on('click', function () {
        $('.header__menu').slideToggle();
    })
}

$('.credits-contract').on('click', function () {
    $(this).toggleClass('active').parent(this).next().slideToggle();
})

$('.pay-cards-btn').on('click', function () {
    $('.pay-cards-add').slideToggle();
    return false;
})


$('.file').on('change', function () {
    $(this).children('.select-file').css('display', 'none');
    $(this).children('.downloaded-file').css('display', 'inline-block');
})

$('select').on('change', function () {
    $(this).css('color', '#333');
    $('.lang').css('color', '#fff');
})

$('#radio_idCard').on('click', function (event) {
    $('.passport__content-section').removeClass('visible');
    $('.idCard__content-section').addClass('visible');
    $('.passport__inner').removeClass('visible');
    $('.idCard__inner').addClass('visible');
})
$('#radio_passport').on('click', function (event) {
    $('.passport__content-section').addClass('visible');
    $('.idCard__content-section').removeClass('visible');
    $('.passport__inner').addClass('visible');
    $('.idCard__inner').removeClass('visible');
})

$('.reg__step-code').eq(0).css('display', 'block');

$('.passport__content-section').addClass('visible');
$('.passport__inner').addClass('visible');
let stepItem = $('.reg__step-code')

function steps() {
    let index = 0;
    $('#step__btn-next').on('click', function (event) {
        stepItem.eq(index).fadeOut();
        if (index !== 3) {
            index += 1;
        }
        stepItem.eq(index).fadeIn();
        let inner = +$('.step__inner-num > span').html()
        if (inner !== 5) {
            inner += 1;
            $('.step__inner-num > span').html(inner);
        }
        console.log(inner)
    })

    $('#step__btn-prev').on('click', function () {
        stepItem.eq(index).fadeOut();
        if (index !== 0) {
            index -= 1;
        }
        stepItem.eq(index).fadeIn();
        let inner = +$('.step__inner-num > span').html()
        if (inner !== 2) {
            inner -= 1;
            $('.step__inner-num > span').html(inner);
            console.log(inner)
        }
    })
}
steps();
$('#price-range-filter-header').click(function () {
    FilterContainerSlideUpDown('filter_but', 'price-range-filter-header');
});
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 300,
        values: [0, 300],
        step: 5,
        slide: function (event, ui) {
            $("#slider-range-caption").html('<?=$currency_type->symbol?>' + ui.values[0] + ' - ' + '<?=$currency_type->symbol?>' + ui.values[1]);
        },
        change: function (event, ui) {
            ApplyPriceRangeFilter(ui.values[0], ui.values[1]);
        }

    });

    $("#slider-range-caption").html('<?=$currency_type->symbol?>' + $("#slider-range").slider("values", 0) + ' - ' + '<?=$currency_type->symbol?>' + $("#slider-range").slider("values", 1));

    //initialise jquery scrollbar
});
$('.tabs__name-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.verification-exit').on('click', function () {
    $(this).parent().hide()
})
$('.chatbot').on('click', function () {
    $('.chatbot__messanger').slideToggle()
})