// burger-menu

let burgerMenu = $('.header__burger')
burgerMenu.on('click', () => {
    $('.burger__icon').toggleClass('active')
    $('.header-mobile').toggleClass('show')
})

let headerMobile = function () {
    let windowWidth = $(window).width();
    if (windowWidth < 993) {
        $('.header-mobile__container').prepend($('.header-search'))
        $('.header-search').after($('.header-bottom__menu'))
    } else {
        $('.header-main__left').after($('.header-search'))
        $('.header-bottom__container').prepend($('.header-bottom__menu'))
    }
    if (windowWidth < 768) {
        $('.header-mobile__container').append($('.header-phone'))
    } else {
        $('.header-main__right').prepend($('.header-phone'))
    }
    if (windowWidth < 569) {
        $('.header-bottom__menu').before($('.header-top__nav'))
    } else {
        $('.header-top__container').append($('.header-top__nav'))
    }
}
headerMobile()
$(window).resize(function () {
    headerMobile()
})


// burger-menu end

// slider

$('.slider-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendArrows: $('.slider-slick__container'),
    prevArrow: '<div class="slider-slick__arrows slider-slick__arrows--left"></div>',
    nextArrow: '<div class="slider-slick__arrows slider-slick__arrows--right"></div>',
})

// slider end

// costum select 

const select = () => {
    const costumSelectHeader = document.querySelectorAll('.costum-select__header');
    const costumSelectItem = document.querySelectorAll('.costum-select__item');
    const selectToogle = e => {
        e.currentTarget.parentElement.classList.toggle('active');
    }
    const selectChoice = e => {
        let item = e.currentTarget;
        let currentText = e.currentTarget.closest('.costum-select').querySelector('.costum-select__current');
        let costumSelect = e.currentTarget.closest('.costum-select');
        currentText.dataset.current = item.dataset.value;
        currentText.innerText = item.innerText;
        costumSelect.classList.remove('active');
    }

    costumSelectHeader.forEach(el => {
        el.addEventListener('click', selectToogle)
    })
    costumSelectItem.forEach(el => {
        el.addEventListener('click', selectChoice)
    })
}
select();

// costum select end
