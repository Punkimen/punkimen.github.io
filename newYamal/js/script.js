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


// animation
function mainScreenBgAnimation() {
    let count = 0
    let bgItems = document.querySelectorAll('.main-screen__bg-item')
    bgItems.forEach(el => {
        let index = el.getAttribute('data-index')
        el.style.zIndex = index
    })
    bgItems[count].classList.add('active')
    let animTimer = window.setInterval(function () {
        let maxCount = bgItems.length
        if (++count == maxCount) {
            count = 0
            bgItems.forEach(el => {
                el.classList.remove('active')
            })
            bgItems[count].classList.add('active')
        } else {
            bgItems.forEach(el => {
                el.classList.remove('active')
            })
            bgItems[count].classList.add('active')
        }
    }, 5000)
}

mainScreenBgAnimation()

$('.btn-change-theme').on('click', function () {
    $('.btn-change-theme').removeClass('active')
    $(this).addClass('active')
    if ($(this).attr('id') === 'dark-btn-theme') {
        $('body').addClass('dark')
    } else {
        $('body').removeClass('dark')
    }
})