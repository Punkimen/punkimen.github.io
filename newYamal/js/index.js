const nowTime = () => {
    let date = new Date();
    let hours = date.getHours()
    hours = hours < 10 ? `0${hours}` : hours
    let minuts = date.getMinutes()
    minuts = minuts < 10 ? `0${minuts}` : minuts
    $('.widgets-block__time').text(`${hours}:${minuts}`)
}
nowTime()
const weatherSlider = new Swiper('.widjet-light__slider', {
    slidesPerView: 1,
})
$('.widjet-light__next-arrow').on('click', function () {
    weatherSlider.slideNext()
})
$('.widjet-light__prev-arrow').on('click', function () {
    weatherSlider.slidePrev()
})

function adaptiveBlockChanges() {
    let windowWidth = $(window).width()
    if (windowWidth < 768) {
        $('.main-screen').prepend($('.widgets-block__location'))
        $('.widgets-block').prepend($('.widgets-themes'))
    } else {
        $('.widgets-block__langs').prepend($('.widgets-block__location'))
        $('.widgets-block').append($('.widgets-themes'))
    }
}
adaptiveBlockChanges()
$(window).on('resize', function () {
    adaptiveBlockChanges();
    scrollInit();
})

$('.travel-guide__route').on('click', function () {
    $('.travel-guide__route').removeClass('active')
    $(this).addClass('active')
})

function scrollInit() {
    let windowWidth = $(window).width()
    if (windowWidth < 768) {
        $('.travel-guide__excursions').mCustomScrollbar({
            axis: "x",
        });
    } else {
        $('.travel-guide__excursions').mCustomScrollbar('destroy');
    }
    if (windowWidth < 768) {
        $('.ready-tours__slide').mCustomScrollbar({
            axis: "x",
        });
        $('.ready-tours__slider').mCustomScrollbar('destroy');
    } else {
        $('.ready-tours__slide').mCustomScrollbar('destroy');
        $('.ready-tours__slider').mCustomScrollbar({
            axis: "y",
        });
    }
    $('.category__btns').mCustomScrollbar({
        axis: "x",
    });
}
scrollInit()


$('.ready-tours__banners-wrapper').on('mousemove', function (e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 1 - e.pageX / w;
    var offsetY = 1 - e.pageY / h;

    $(this).find(".parallax").each(function (i, el) {
        var offset = parseInt($(el).data('offset'));

        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

        $(el).css({
            'transform': `${translate}`,
        });
    });
});

$('.ready-tours__random-rotate').on('click', function () {
    $('.ready-tours__tours').toggleClass('rotate')
});


// anketa
(function () {
    let count = 0;
    const anketa = [
        {
            question: "Природа и приключения",
            questionText: "А как относитесь к тому, чтобы отправиться в захватывающее приключение и сделать несколько клевых снимков в свой инстаграм?",
            answer: ['Стараюсь избегать', 'Только популярные места', 'Очень интересует', 'Я – авантюрист']
        },
        {
            question: "Культура и история",
            questionText: "Что на счет знакомства с коренными народами и традициями Ямала?",
            answer: ['Не интересует', 'Могу уделить немного времени', 'Очень интересует', 'Хочу полностью погрузиться']
        },
        {
            question: "Сувениры",
            questionText: "Уже придумали что привезете своим друзьям из поездки?",
            answer: ['Не люблю делать покупки', 'Если будет свободное время', 'Остановлюсь на магнитиках', 'Хочу купить подарки']
        },
        {
            question: "Кухня",
            questionText: "Тур-туром, а еда по расписанию! Расскажите о своих вкусовых предпочтениях",
            answer: ['Не хочу пробовать новые блюда', 'Не против экспериментов', 'Присоединюсь к мастер - классам', 'Хочу погрузиться в местную кухню']
        },
    ];
    const renderQuestions = (count) => {
        const quizInnerBlock = document.querySelector('.anketa-answer');
        if (quizInnerBlock) {
            quizInnerBlock.innerHTML = `
            <div class="anketa-answer__title">${anketa[count].question}</div>
            <div class="anketa-answer__text">${anketa[count].questionText}</div>
            <div class="anketa-answer__list">
                <div class="anketa-answer__item">
                    <div class="anketa-answer__radio">
                        <input type="radio">
                        <div class="radio-indicator"></div>
                    </div>
                    <div class="anketa-answer__answer">${anketa[count].answer[0]}</div>
                </div>
                <div class="anketa-answer__item">
                    <div class="anketa-answer__radio">
                        <input type="radio">
                        <div class="radio-indicator"></div>
                    </div>
                    <div class="anketa-answer__answer">${anketa[count].answer[1]}</div>
                </div>
                <div class="anketa-answer__item">
                    <div class="anketa-answer__radio">
                        <input type="radio">
                        <div class="radio-indicator"></div>
                    </div>
                    <div class="anketa-answer__answer">${anketa[count].answer[2]}</div>
                </div>
                <div class="anketa-answer__item">
                    <div class="anketa-answer__radio">
                        <input type="radio">
                        <div class="radio-indicator"></div>
                    </div>
                    <div class="anketa-answer__answer">${anketa[count].answer[3]}</div>
                </div>
            </div>
        `}

        $('.anketa-answer__item').on('click', function () {
            $(this).find('input').prop('checked', true)
            $('.anketa__progress-item').eq(count).addClass('done')
            if (count != 3) {
                count++;
                renderQuestions(count)
            } else if (count === 3) {
                $('.anketa__progress-item').eq(4).addClass('active')
                $('.anketa__wrapper').hide(200)
                $('.anketa-recomended').show(200)
            }
            $('.anketa__progress-item').eq(count).addClass('active')
        })
        $('#repeatQuiz').on('click', function () {
            count = 0;
            $('.anketa__progress-item').eq(count).addClass('active').removeClass('done').nextAll().removeClass('active done')
            renderQuestions(count)
            $('.anketa__wrapper').show(200)
            $('.anketa-recomended').hide(200)
        })
        // $('#repeatQuiz').on('click', function () {
        //     count = 0;
        //     $('.quiz-routes__progress-item').eq(count).nextAll().removeClass('active past')
        //     renderQuestions(count)
        //     $('.recomended-route').hide()
        // })
    }
    renderQuestions(count)

})();

const recomendedTour = new Swiper('.anketa-recomended__slider', {
    slidesPerView: "auto",
    spaceBetween: 38, freeMode: true,
})
$('.anketa-recomended__slider--next').on('click', function () {
    recomendedTour.slideNext()
})
$('.anketa-recomended__slider--prev').on('click', function () {
    recomendedTour.slidePrev()
})

new Calendar({
    id: "#event-calendar",
    theme: "glass",
    calendarSize: "small",
    customWeekdayValues: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    primaryColor: '#161616',
    borderRadius: "26px",
});
$('.poster-filter__schedule-header').on('click', function () {
    $(this).toggleClass('active')
    $('.poster-filter__schedule-body').slideToggle()
})
$('.calendar__arrow-inner').html(`
<svg class=""><use xlink:href="./img/icons/icons.svg#calendar-arrow"></use></svg>
`)

const posterSlider = new Swiper('.poster-slider', {
    slidesPerView: "auto",
    spaceBetween: 14,
    breakpoints: {
        767: {
            slidesPerView: 4,
        },
        990: {
            spaceBetween: 40
        }
    }
})
const posterEventsSlider = new Swiper('.poster-events__slider', {
    slidesPerView: "auto",
    spaceBetween: 33,
    breakpoints: {
        767: {
            slidesPerView: 30,
        },
        990: {
            spaceBetween: 40
        }
    }
})
$('.poster-events__arrow--next').on('click', function () {
    posterEventsSlider.slideNext()
})
$('.poster-events__arrow--prev').on('click', function () {
    posterEventsSlider.slidePrev()
})

$('.travel-guide__routes-tab').on('click', function () {
    let index = $(this).index()
    $('.travel-guide__routes-tab').removeClass('active')
    $(this).addClass('active')
    $('.travel-guide__route').removeClass('active')
    $('.travel-guide__route').eq(index).addClass('active')
})

$('.widgets-block__lang').on('click', function () {
    $('.widgets-block__lang').removeClass('active')
    $(this).addClass('active')
})

