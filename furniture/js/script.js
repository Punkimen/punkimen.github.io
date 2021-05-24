// burger-menu

let burgerMenu = $('.header__burger')
burgerMenu.on('click', () => {
    $('.burger__icon').toggleClass('active')
})

// burger-menu end

// slider

$('.slider-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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