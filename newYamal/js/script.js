(function () {
    const openSelect = function () {
        if ($(this).hasClass('disabled')) {
            return false
        }
        $(this).toggleClass('active')
        $(this).next().slideToggle();

        $('.custom-select__categoryes').mCustomScrollbar({
            axis: "y",
        });
        $('.custom-select__category__elem .control').on('click', function () {
            let text = $(this).text()
            if ($(this).parents('.enter-banner__input')) {
                $(this).parents('.enter-banner__input').addClass('show-title')
            }
            $(this).parents('.custom-select').find('.custom-select__current-elem').text(text)
            $(this).parents('.custom-select').addClass('filed')
            $(this).parents('.custom-select').removeClass('error')
            $('.custom-select__header').removeClass('active');
            $('.custom-select__body').hide();
        })

    }
    $('.custom-select__header').on('click', openSelect)
})();



var tabs = $('.category__btns');
var selector = $('.category__btns').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".category-selector").css({
    "left": activeItem.position.left + "px",
    "width": activeWidth + "px"
});

$(".category__btns").on("click", "a", function (e) {
    e.preventDefault();
    $('.category__btns a').removeClass("active");
    $(this).addClass('active');
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".category-selector").css({
        "left": itemPos.left + "px",
        "width": activeWidth + "px"
    });
});

$('.fixed-menu__close').on('click', () => {
    $('.header-menu').removeClass('active');
})
$('.burger').on('click', function (e) {
    $(this).find('.burger__icon').toggleClass('active')
    $('.header-menu').toggleClass('active');
});

$('.card-choose__btn').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('current')
})


$('.btn-change-theme').on('click', function () {
    $('.btn-change-theme').removeClass('active')
    $(this).addClass('active')
    if ($(this).attr('id') === 'dark-btn-theme') {
        $('body').addClass('dark')
    } else {
        $('body').removeClass('dark')
    }
});



// calendar
(function () {
    $(function () {
        $('input[name="daterange"]').daterangepicker({
            opens: 'right',
            autoUpdateInput: false,
            // showWeekNumbers: false,
            // showISOWeekNumbers: false,
            autoApply: true,
            locale: {
                format: 'DD.MM.YY',
                cancelLabel: 'Clear',
                daysOfWeek: false,
                "monthNames": [
                    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
                ],
                "daysOfWeek": [
                ],
            },

        },
            function (start, end, label) {
                $('input[name="daterange"]').addClass('filed')
            });
    });
    $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD.MM.YY') + ' - ' + picker.endDate.format('DD.MM.YY'));
        $(this).parents('.costumn-calendar').addClass('filed')
        $(this).parent().removeClass('error')
        $(this).parents('.enter-banner__input').addClass('show-title')
    });

    $('input[name="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
})();


// costumn-select

$('.costumn-select .choosen-radio').on('change', function () {
    let val = $(this).val()
    $(this).parents('.costumn-select').find('.costumn-select__val').text(val);
    $(this).parents('.costumn-select').addClass('filed');
    $(this).parents('.costumn-select').find('.costumn-select__body').slideUp();
    $(this).parents('.costumn-select').removeClass('active')
})
$('.costumn-select .costumn-select__head').on('click', function () {
    if (!$(this).parents('.costumn-select').hasClass('costumn-calendar')) {
        $(this).next().slideToggle();
        $(this).parents('.costumn-select').toggleClass('active')
    }
})



// bannerCard anomation
