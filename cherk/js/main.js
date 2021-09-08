window.addEventListener('DOMContentLoaded', () => {
    // costumn scrollBar 


    //burger

    function scrollbarWidth() {
        var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
            indicator = $('<div>').css({ 'height': '200px' });

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }


    function burgerOpen() {
        document.documentElement.style.marginRight = `${scrollbarWidth()}px`;
        $('.menu').toggleClass('active')
        // setTimeout($('body').toggleClass('bg000'),
        //     500
        // )
        document.documentElement.classList.add('overflow-y');
        $('.page-wrap-top').toggleClass('hide');
        $('.burger-js').toggleClass('active')


    }

    function burgerClose() {

        $('.menu').toggleClass('active')
        // setTimeout($('body').toggleClass('bg000'),
        //     500
        // )

        document.documentElement.classList.remove('overflow-y');
        $('.page-wrap-top').toggleClass('hide');
        $('.burger-js').toggleClass('active')
        document.documentElement.style.marginRight = "";


    }

    var isMenuShow = false;

    $('.burger-js').on('click', () => {

        if (isMenuShow) {
            burgerClose();
            isMenuShow = false;
        } else {
            burgerOpen();
            isMenuShow = true;
        }
    })


    //menu


    $('.hover-menu-js').hover(
        function () {
            $(this).toggleClass('active-hover');
            let dataImg = $(this).data('img');
            document.querySelector('.menu__img-item').style.backgroundImage = `url('./img/${dataImg}.png')`;
            document.querySelector('.menu__img-item-text').style.backgroundImage = `url('./img/${dataImg}-text.png')`;


        }
    )

    $('.benefits-item__link').hover(function () {
        $('.benefits-item__link').toggleClass('active-hover')
    })

    // id for svg
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    function idArrow(item, gradient, path) {
        item.forEach(function (i) {
            let arrowId = randomInteger(1000, 5000);
            i.querySelector(gradient).setAttribute('id', arrowId);
            i.querySelector(path).setAttribute('fill', `url(#${arrowId})`)

        })
    }

    const arrowR = document.querySelectorAll('.arrow-js');
    const lineGradient = ('.arrow-r__linegradient');
    const path = ('.arrow-r__path');
    idArrow(arrowR, lineGradient, path);
    $('input, select').styler();

    $('.card__item-button').hover(function () {
        $(this).toggleClass('active-hover');
    })
    $('.button__map').hover(function () {
        $(this).toggleClass('active-hover');
    })
    $('.hover-js').hover(function () {
        $(this).toggleClass('active-hover');
    })

    // slider


    const feedbackSlider = new Swiper('.slider-feedback__container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: false,
        autoHeight: true,
        breakpoints: {
            1200: {
                slidesPerView: 2,
            },
            768: {
                autoHeight: false,
                spaceBetween: 30,
            }
        }
    })
    $('.slider-feedback-button-prev').on('click', function () { feedbackSlider.slidePrev() })
    $('.slider-feedback-button-next').on('click', function () { feedbackSlider.slideNext() })


    const crewSlider = new Swiper('.slider-crew__container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            500: {
                slidesPerView: "auto",
            },
        }
    })

    $('.slider-crew-button-prev').on('click', function () { crewSlider.slidePrev() })
    $('.slider-crew-button-next').on('click', function () { crewSlider.slideNext() })

    const garantSlider = new Swiper('.slider-garant__container', {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
    })

    $('.slider-garant-button-prev').on('click', function () { garantSlider.slidePrev() })
    $('.slider-garant-button-next').on('click', function () { garantSlider.slideNext() })


    // function swiperHitOn() {
    //     let sliderWrapperGalerry3 = document.querySelectorAll('.slider-crew-hit-on-js');

    //     sliderWrapperGalerry3.forEach(item => {


    //         let mySwiper3 = new Swiper(item.querySelector('.slider-crew__container'), {
    //             slidesPerView: 4,
    //             spaceBetween: 100,
    //             loop: true,
    //             navigation: {
    //                 nextEl: item.querySelector('.swiper-button-next-btn'),
    //                 prevEl: item.querySelector('.swiper-button-prev-btn'),
    //             },
    //         })

    //             ;
    //     })
    // }

    // swiperHitOn();

    const recomendedSwiper = new Swiper(".slider-recommendation__container", {
        slidesPerView: "auto",
        spaceBetween: 125,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    $('.slider-recommendation-button-prev').on('click', function () { recomendedSwiper.slidePrev() })
    $('.slider-recommendation-button-next').on('click', function () { recomendedSwiper.slideNext() })

    //phone mask

    function maskPhonefun(selectorInput) {

        $('.phone-input-js').attr("placeholder", "+375 (___) ___-__-__");
        $('.phone-input-js').mask("+375 (999) 999-99-99");


        $('.select-lang-js').change(function () {
            let value = $(this).val()
            let parentBlock = $(this).parents('.form__item-phone')

            console.log(value);

            if (value === "by") {
                console.log('1');

                parentBlock.children('.phone-input-js').attr("placeholder", "+375 (___) ___-__-__");
                parentBlock.children('.phone-input-js').mask("+375 (999) 999-99-99");
            } else if (value === "ru") {
                console.log('2');

                parentBlock.children('.phone-input-js').attr("placeholder", "+7 (___) ___-__-__");
                parentBlock.children('.phone-input-js').mask("+7 (999) 999-99-99");
            }
        });
    }

    maskPhonefun();

    $(".phone-input-js-focus").focus(function () {
        $(this).parent().addClass('focus');
    });
    $('.phone-input-js-focus').focusout(function () {
        $(this).parent().removeClass('focus');
    });
    $('.option-js').on('click', function () {
        $(this).parents(".jq-selectbox").find('.jq-selectbox__select-text').addClass('color-white');
    })
    $('.option-top').on('click', function () {
        $(this).parents(".jq-selectbox").find('.jq-selectbox__select-text').removeClass('color-white');
    })


    // purchase-step add active

    $('.purchase-step').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })


    //tabs

    $('.tabs-wrapper').each(function () {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide(1000);
        ths.find('.tab').click(function () {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn(1000)
        }).eq(0).addClass('active');
    });


    $('.accor-title-js').on('click', function () {
        console.log('w');

        $(this).toggleClass('active')
        $(this).next().slideToggle()
    })

    // scroll

    // scroll
    const scrollProgressItem = document.querySelectorAll('.progress-section')
    const paginationList = document.querySelector('.pagination__list')


    function scrollingPagination() {
        scrollProgressItem.forEach(el => {
            const progressSectionHeight = el.offsetHeight;
            const progressSectionOffset = offset(el).top;
            let count = 3;


            let progressSectionPoint = window.innerHeight - progressSectionHeight / count;

            if (progressSectionHeight > window.innerHeight) {
                progressSectionPoint = window.innerHeight - window.innerHeight / count
            }

            if ((pageYOffset >= progressSectionOffset - progressSectionPoint) && pageYOffset < (progressSectionOffset + progressSectionHeight)) {
                const id = `#${el.id}`;
                const progressItemActive = $(`.pagination__item[href="${id}"]`)
                progressItemActive.addClass('active').siblings().removeClass('active')
                let dataItemNum = +progressItemActive.attr('data-item')
                if (dataItemNum < 4) {
                    paginationList.style.top = '0px';
                } else if (dataItemNum >= 4 && dataItemNum < 8) {
                    paginationList.style.top = '-100px';
                } else if (dataItemNum >= 8 && dataItemNum < 12) {
                    paginationList.style.top = '-200px';
                } else if (dataItemNum >= 12 && dataItemNum < 16) {
                    paginationList.style.top = '-300px';
                } else if (dataItemNum >= 16 && dataItemNum < 20) {
                    paginationList.style.top = '-400px';
                }


            } else {
                el.classList.remove('active')
            }
        })
        function offset(el) {
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    }
    scrollingPagination()
    window.addEventListener('scroll', scrollingPagination)


    //poupap

    $('.open-popup-js').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.

        callbacks: {
            open: function () {
                $('section,footer').addClass('blur');

            },
            close: function () {
                $('section,footer').removeClass('blur');
            }
            // e.t.c.
        },

    });


    // change appart photos

    $('.apartment__item-photos-item').on('click', function () {
        const srcImg = $(this).attr('data-src')
        $(this).addClass('current').siblings().removeClass('current')
        $(this).parents('.apartment__item').find('.apartment__item-body').css('background', `url(../${srcImg})`)
    })

    $('.card-apart__gallery-item').on('click', function () {
        const srcImg = $(this).attr('data-src')
        $(this).addClass('current').siblings().removeClass('current')
        $(this).parents('.card-apart__slider').find('.card-apart__img').attr('src', srcImg)
    })

    const browserIdChrome = navigator.userAgent.search(/Chrome/)
    const browserIdOpera = navigator.userAgent.search(/Opera/)

    const addScrollbar = function () {
        let windowWidth = $(window).width();
        if (windowWidth > 767) {
            $('.menu').mCustomScrollbar({
                axis: "y",
            });
            $('.apartment__item-photos').mCustomScrollbar({
                axis: "y",
            });
            $('.feedback__item-info-box-text-2').mCustomScrollbar({
                axis: "y",
            });
            $('.feedback-slide__text').mCustomScrollbar({
                axis: "y",
            });
        } else {
            $('.menu').mCustomScrollbar("destroy");
            $('.apartment__item-photos').mCustomScrollbar("destroy");
            $('.feedback__item-info-box-text-2').mCustomScrollbar("destroy");
            $('.feedback-slide__text').mCustomScrollbar("destroy");
        }
        if (browserIdChrome > 0 || browserIdOpera > 0) {
            $('.card-apart__gallery').mCustomScrollbar({
                axis: "x",
                updateOnContentResize: true,
            });
        }

    }
    addScrollbar()
    $(window).resize(function () {
        addScrollbar()
    })

});