$(document).ready(function () {
    $('.burger__icon').on('click', function () {
        $(this).toggleClass('active');
        $('.header__mobile').slideToggle();
    });
    const addActive = (element, className) => {
        element.on('click', function () {
            $(this).addClass(className).siblings().removeClass(className);
        })
    }
    addActive($('.header__lang'), 'active');
    addActive($('.header__mobile-lang'), 'active');
    addActive($('.tabs__name-item'), 'active');

    const equalHeightContent = (element) => {
        let imgHeidht = $('.online__images').height();
        element.height(imgHeidht);
    }
    equalHeightContent($('.online__content'))

    $(window).resize(function () {
        let windowWidth = $(window).width();
        contentHeigh();
        if (windowWidth > 992) {
        }
        equalHeightContent($('.online__content'))
    })
    $('.accordion__title').on('click', function () {
        $(this).toggleClass('active').next().slideToggle();
        return false;
    });
    // scrollbar
    $('.online__content').mCustomScrollbar({
        axis: "y",
    });
    $('.instruction-content__text--scroll').mCustomScrollbar({
        axis: "y",
    });
    // scrollbar end
    // slick silder

    $('.info__slider').slick({
        arrows: false,
        swipe: true,
        dots: true,
    });

    $('.intresting-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<div class="slider-arrow slider-arrow--prev"></div>',
        nextArrow: '<div class="slider-arrow slider-arrow--next"></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    })

    // slick silder end
    const contentHeigh = () => {
        let mainHeight = $('.instruction__wrapper').height();
        let titleHeight = $('.instruction-content__title').height() + parseInt($('.instruction-content__title').css('marginBottom'));
        let headHeight = $('.instruction-content__head').height() + parseInt($('.instruction-content__head').css('marginBottom'));
        let upperHeight = titleHeight + headHeight;
        let downHeight = $('.instruction-footer').height();
        let contentHeight = mainHeight - upperHeight - downHeight - parseInt($('.instruction-content__text').css('paddingBottom'));
        $('.instruction-content__text').height(contentHeight);
    }
    contentHeigh();
});


$('#about-link').on('click', function () {
    $('.footer__left-about').slideToggle();
    return false;
})
$('#useful-link').on('click', function () {
    $('.footer__left-useful').slideToggle();
    return false;
})
// modalWindow
$('.modal-close').on('click', function () {
    $(this).parent().hide();
})
// modalWindow

// personalCabinet

let cabinetTypesPas = $('.typePassport')
cabinetTypesPas.on('change', function () {
    if ($(this).is('#radio_passport')) {
        $('.cabinet-new__item--passport').show()
        $('.cabinet-new__item--idCard').hide()
    } else {
        $('.cabinet-new__item--passport').hide()
        $('.cabinet-new__item--idCard').show()
    }
})
$('.add-card__btn').on('click', function () {
    $('.cabinet-new__item--newCard').show()
})

$('.credit-table__col--creditNum').on('click', function () {
    $(this).toggleClass('active')
    $(this).parent().next().slideToggle()
})
// personalCabinet end


// calc
const calc = document.querySelector('.credits__calc')

if (calc) {
    let CreditCalc = function ($) {
        'use strict';
        const productBtn = $('.credits-head__item')

        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        let inputs = $('.number-input');
        let prod = 1;
        productBtn.on('click', function () {
            $(this).addClass('current').siblings().removeClass('current');
            if ($(this).is('#product1')) {
                $('.wrap__content--product1').show(200);
                $('.wrap__content--product2').hide(200);
            } else {
                $('.wrap__content--product1').hide(200);
                $('.wrap__content--product2').show(200);
            }

            if ($('#product1').is('.current')) {
                prod = 1;
            } else {
                prod = 2
            }
            return prod = prod;
        })


        inputs.on('change', function () {

        })
        let termPlus = $('.date_plus'),
            termMinus = $('.date_minus'),
            summPlus = $('.sum_plus'),
            summMinus = $('.sum_minus'),
            getSumm = $('.get__sum');

        let handle = function () {
            summPlus.on('click', function (event) {
                let summFormat = + $(this).siblings('.summ').val().replace(/\s/g, '');
                if (summFormat !== 10000) {
                    summFormat += 500;
                    $(this).siblings('.summ').val(summFormat)
                }
                slideUpdate();
                calc();
            })

            summMinus.on('click', function (event) {
                let summFormat = + $(this).siblings('.summ').val().replace(/\s/g, '');
                if (summFormat !== 0) {
                    summFormat -= 500;
                    $(this).siblings('.summ').val(summFormat)
                    getSumm.html(summFormat)
                }
                slideUpdate();
                calc();
            })

            termPlus.on('click', function (event) {
                let term = +$(this).siblings('.term').val().replace(/\s/g, '');

                if (prod == 1) {
                    if (term !== 36) {
                        term += 1;
                        $(this).siblings('.term').val(term)
                    }
                } else {
                    if (term !== 30) {
                        term += 1;
                        $(this).siblings('.term').val(term)
                    }
                }
                slideUpdate();
                calc();
            })
            termMinus.on('click', function (event) {
                let term = +$(this).siblings('.term').val().replace(/\s/g, '');
                if (prod == 1) {
                    if (term !== 3) {
                        term--;
                        $(this).siblings('.term').val(term)
                    }
                } else {
                    if (term !== 1) {
                        term--;
                        $(this).siblings('.term').val(term)
                    }
                }
                slideUpdate();
                calc();
            })

        };
        let calc = function () {
            let summFormat = $('#summ').val(),//Сумма отформатированная
                summFormat2 = $('#summ2').val(),
                term2 = Number.parseInt($('#term2').val()),
                summ = Number.parseInt( //Сумма без форматирования
                    summFormat.replace(/\s/g, '')
                ),
                summ2 = Number.parseInt( //Сумма без форматирования
                    summFormat2.replace(/\s/g, '')
                ),
                term = Number.parseInt($('#term').val()),//срок
                commission = 0,//Комиссия
                persent = 0.01,//думаю, можно менять в зависмости от срок займа
                cresitSumm = summ / term,//Сумма возврата без форматирования
                cresitSummFormat = numberWithCommas(Math.round(cresitSumm)),//Сумма возврата отформатированная
                cresitSumm2 = summ2 + (summ2 / 100 * persent) * term2,
                //Сумма возврата без форматирования
                cresitSummFormat2 = numberWithCommas(Math.round(cresitSumm2));//Сумма возврата отформатированная
            persent = numberWithCommas(persent);

            $('#get__sum').text(summFormat);
            $('#return__sum').text(cresitSummFormat);
            $('#get__sum2').text(summFormat2);
            $('#return__sum2').text(cresitSummFormat2);
            let left__pos = term * 0.7 + '%';
            let persent__block = $('.info__percent');
            let day__block = $('.quantity__center');
            let day__inp = term * 0.3;
            let day__inner = (Math.round(day__inp));
            persent__block.css({
                left: left__pos,
            })
            day__block.css({
                left: left__pos,
            })
            if (day__inner == 3 || day__inner == 4) {
                day__block.html(day__inner + ' дня');
            } else {
                day__block.html(day__inner + ' дней');
            }
        }
        let slide = function (obj) {
            let input = obj.find('input'),
                k = parseInt(input.attr('data-k')),
                min = parseFloat(input.attr('data-min')) * k,
                max = parseFloat(input.attr('data-max')) * k,
                step = parseFloat(input.attr('data-step')) * k,
                val = parseFloat(input.val()) * k,
                minEvemt = input.attr('data-min-event');

            input.val(numberWithCommas(input.val()));
            input.keyup(function () {
                var val = $(this).val();
                val = val.replace(/\s+/g, "");
                val = val.replace(/,/g, ".");

                $(this).val(numberWithCommas(val));
                if (val == '')
                    val = 0;
                else
                    val = parseFloat(val) * k;

                $(this).closest('.range').find('.slider').slider({ value: val });
            });
            obj.find(".slider").slider({
                min: min,
                max: max,
                step: step,
                range: "min",
                value: val,
                slide: function (event, ui) {
                    var k = parseInt(input.attr('data-k'));
                    var val = parseFloat(ui.value) / k;
                    if (minEvemt && ui.value < minEvemt)
                        return false;
                    if (val)
                        input.val(numberWithCommas(val));
                },
                change: function (event, ui) {
                    calc();
                }
            });

        }
        let slideUpdate = function () {
            $('.range').each(function (obj, i) {
                let $slider = $(this).find(".slider"),
                    val = $(this).find("input").val();
                $slider.slider('value', val);
            });
        }
        let initialisation = function () {
            $('.range').each(function (obj, i) {
                slide($(this));
            });
            handle();
            calc();
        };
        return {
            init: function () {
                initialisation();
            },
        }
    }(jQuery);
    jQuery(document).ready(function ($) {
        CreditCalc.init();
    });


    function setInputFilter(textbox, inputFilter, val) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (textbox.value > val) {
                    this.value = val;
                } else {
                    if (inputFilter(this.value)) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    } else {
                        this.value = val;
                    }
                }
            });
        });
    }

    setInputFilter(document.getElementById("summ"), function (value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    }, 10000);
    setInputFilter(document.getElementById("term"), function (value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    }, 36);
    setInputFilter(document.getElementById("summ2"), function (value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    }, 10000);
    setInputFilter(document.getElementById("term2"), function (value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
    }, 30);
}

const regCalc = document.querySelector('.reg__calc')
if (regCalc) {
    let regCalc = function ($) {
        'use strict';
        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        let termPlus = $('.date_plus'),
            termMinus = $('.date_minus'),
            summPlus = $('.sum_plus'),
            summMinus = $('.sum_minus'),
            term = + $('#term').val(),
            summFormat = + $('#summ').val(),
            getSumm = $('.get__sum'),
            returnSumm = $('.return__sum'),
            persent = 0.01;

        let handle = function () {
            summPlus.on('click', function (event) {
                if (summFormat !== 10000) {
                    summFormat += 500;
                    $('#summ').val(summFormat)
                }
                calc();
            })

            summMinus.on('click', function (event) {
                if (summFormat !== 0) {
                    summFormat -= 500;
                    $('#summ').val(summFormat)
                }
                calc();
            })

            termPlus.on('click', function (event) {
                if (term !== 30) {
                    term += 1;
                    $('#term').val(term)
                }
                calc();
            })

            termMinus.on('click', function (event) {
                if (term !== 1) {
                    term--;
                    $('#term').val(term)
                }
                calc();
            })
            $("#summ")
                .keyup(function () {
                    let value = $(this).val();
                    $("#summ").val(value)
                    calc();
                })
                .keyup();
            $("#term")
                .keyup(function () {
                    let value = $(this).val();
                    $("#term").val(value)
                    calc();
                })
                .keyup();
        };

        let calc = function () {
            let summFormat = $('#summ').val(),//Сумма отформатированная
                summ = Number.parseInt( //Сумма без форматирования
                    summFormat.replace(/\s/g, '')
                ),
                term = Number.parseInt($('#term').val()),//срок
                commission = 0,//Комиссия
                persent = 0.01,//думаю, можно менять в зависмости от срок займа
                cresitSumm = summ + (summ / 100 * persent) * term,//Сумма возврата без форматирования
                cresitSummFormat = numberWithCommas(Math.round(cresitSumm));//Сумма возврата отформатированная
            persent = numberWithCommas(persent);

            $('.get__sum').text(summFormat);
            $('.return__sum').text(cresitSummFormat);
            $('.rate__sum').text(persent + '%');

        }

        let initialisation = function () {
            handle();
            calc();
        };
        return {
            init: function () {
                initialisation();
            },
        }
    }(jQuery);
    jQuery(document).ready(function ($) {
        regCalc.init();
    });
    function setInputFilter(textbox, inputFilter, val) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (textbox.value > val) {
                    this.value = val;
                } else {
                    if (inputFilter(this.value)) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    } else {
                        this.value = val;
                    }
                }
            });
        });
    }
    setInputFilter(document.getElementById("summ"), function (value) {
        return /^\d*\.?\d*$/.test(value);
    }, 10000);
    setInputFilter(document.getElementById("term"), function (value) {
        return /^\d*\.?\d*$/.test(value);
    }, 30);
}
// calc


$('select').on('change', function () {
    $(this).css('color', '#333');
})

$('.file').on('change', function () {
    $(this).children('.select-file').css('display', 'none');
    $(this).children('.downloaded-file').css('display', 'inline-block');
})



// timer
const timerBlock = document.querySelector('.timer')
if (timerBlock) {
    let formatDate = 'December 31, 2021 00:00:00'

    let toDate = new Date(formatDate).getTime();
    let timer = setInterval(function () {
        let nowDate = new Date().getTime();
        let distance = toDate - nowDate;
        let day = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $('.timer').text(day + ' д ' + hours + ' ч ' + minutes + ' м ' + seconds + ' с');
        console.log(distance)
        if (distance <= 86400000 && distance >= 3600000) {
            $('.timer').text(hours + ' ч ' + minutes + ' м ' + seconds + ' с');
        } else if (distance <= 3600000 && distance >= 0) {
            $('.timer').text(minutes + ' м ' + seconds + ' с');
        } else if (distance < 0) {
            clearInterval(timer);
            $('.timer').text("Время истекло")
        }
    }, 1000)
}
// timer end

// registration

let rules = {
    filterInp(textbox, inputFilter, val) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                }
            });
        });
    },
}
if (document.querySelector('input[name="phone"]')) {
    rules.filterInp(document.querySelector('input[name="phone"]'), function (value) {
        return /^\d*\.?\d*$/.test(value);
    });
}
if (document.querySelector('input[name="series"]')) {
    rules.filterInp(document.querySelector('input[name="series"]'), function (value) {
        return /^\d*\.?\d*$/.test(value);
    });
}
if (document.querySelector('input[name="passportNum"]')) {
    rules.filterInp(document.querySelector('input[name="passportNum"]'), function (value) {
        return /^\d*\.?\d*$/.test(value);
    });
}
if (document.querySelector('input[name="inn"]')) {
    rules.filterInp(document.querySelector('input[name="inn"]'), function (value) {
        return /^\d*\.?\d*$/.test(value);
    });
}
if (document.querySelector('input[name="child"]')) {
    rules.filterInp(document.querySelector('input[name="child"]'), function (value) {
        return /^\d*\.?\d*$/.test(value);
    });
}
if (document.querySelector('input[name="workPhone"]')) {
    rules.filterInp(document.querySelector('input[name="workPhone"]'), function (value) {
        return /^\d*\.?\d*$/.test(value);
    });
}
let typePas = $('.typePassport')
typePas.on('change', function () {
    if ($(this).is('#radio_passport')) {
        $('.passport__inner').show()
        $('.idCard__inner').hide()
    } else {
        $('.passport__inner').hide()
        $('.idCard__inner').show()
    }
})

$('#step_1').validate({
    rules: {
        fullName: {
            required: true,
            minlength: 2,
        },
        phone: {
            required: true,
        },
        status: {
            required: true,
        },
        dateBornDay: {
            required: true,
        },
        dateBornMounth: {
            required: true,
        },
        dateBornYear: {
            required: true,
        },
        series: {
            required: true,
        },
        passportNum: {
            required: true,
        },
        issued: {
            required: true,
        },
        inn: {
            required: true,
        },
        inn: {
            required: true,
        },
        "date-day": {
            required: true,
        },
        "date-month": {
            required: true,
        },
        "date-year": {
            required: true,
        },
        IDCard: {
            required: true,
        },
        checkbox: {
            required: true,
        }
    },
});

// steps2-5

let formSteps = document.querySelector('#step_1-5')
if (formSteps) {
    let count = 2;
    const stepCount = document.querySelector('.step-count');
    const nextBtn = $('#step__btn-next');
    const prevBtn = $('#step__btn-prev');
    const stepItem = document.querySelectorAll('.reg__step-item');
    stepCount.innerText = count;

    steps = {
        nextStep() {
            if (count != 5) {
                count++
                stepCount.innerText = count;
                return count
            }
        },
        prevStep() {
            if (count != 2) {
                count--
                stepCount.innerText = count;
                return count
            }
        },
        renderStep() {
            stepItem.forEach(function (el) {
                let stepCount = +el.dataset.step
                if (stepCount == count) {
                    el.classList.add('active')
                } else {
                    el.classList.remove('active')
                }
            })
        },
        showBtn() {
            if (count === 5) {
                $('#step__btn-next').hide()
                $('#submitBtn').show()
            } else {
                $('#step__btn-next').show()
                $('#submitBtn').hide()
            }
        },
    }
    $("#step_1-5").validate({
        rules: {
            status: {
                required: true,
            },
            education: {
                required: true,
            },
            child: {
                required: true,
            },
            name: {
                required: true,
            },
            surname: {
                required: true,
            },
            middleName: {
                required: true,
            },
            phone: {
                required: true,
            },
            statusRelationship: {
                required: true,
            },
            country: {
                required: true,
            },
            region: {
                required: true,
            },
            district: {
                required: true,
            },
            TypeOfRegion: {
                required: true,
            },
            nameregion: {
                required: true,
            },
            typeOfStreet: {
                required: true,
            },
            street: {
                required: true,
            },
            home: {
                required: true,
            },
            appart: {
                required: true,
            },
            term: {
                required: true,
            },
            index: {
                required: true,
            },
            nameWork: {
                required: true,
            },
            industry: {
                required: true,
            },
            numberEmployees: {
                required: true,
            },
            workPhone: {
                required: true,
            },
            employment: {
                required: true,
            },
            positionCat: {
                required: true,
            },
            specialty: {
                required: true,
            },
            workTerm: {
                required: true,
            },
            totalExperience: {
                required: true,
            },
            workRegion: {
                required: true,
            },
            workDistrict: {
                required: true,
            },
            workTypesRegion: {
                required: true,
            },
            workIndex: {
                required: true,
            },
            workNameRegion: {
                required: true,
            },
            workTypesOfStreet: {
                required: true,
            },
            workStreet: {
                required: true,
            },
            workHome: {
                required: true,
            },
            workCorps: {
                required: true,
            },
            workOffice: {
                required: true,
            },
            last: {
                required: true,
            },
            pay: {
                required: true,
            },
            summ: {
                required: true,
            },
            summIncome: {
                required: true,
            },
            'date-day': {
                required: true,
            },
            'date-month': {
                required: true,
            },
            'date-year': {
                required: true,
            },
        },
    })

    nextBtn.on('click', e => {
        e.preventDefault();
        if (!$("#step_1-5").valid()) {
            return
        }
        steps.nextStep()
        steps.renderStep()
        steps.showBtn()
    });
    prevBtn.on('click', e => {
        e.preventDefault();
        steps.prevStep()
        steps.renderStep()
        steps.showBtn()
    });


}

// steps2-5 end

// registration end
// webcam
let camera = document.querySelector('#my_camera')
if (camera) {
    Webcam.set({
        width: 320,
        height: 240,
        dest_width: 320,
        dest_height: 240,
        image_format: 'jpeg',
        jpeg_quality: 90,
        force_flash: false,
        flip_horiz: true,
        fps: 45
    });
    Webcam.attach('#my_camera');
    function take_snapshot() {
        Webcam.snap(function (data_uri) {
            document.getElementById('my_camera').innerHTML = '<img src="' + data_uri + '"/>';
        });
    }
}
// webcam

// popup
$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        closeOnBgClick: true,
        enableEscapeKey: true,
        closeBtnInside: false
    });
    $(document).on('click', '.popup__exit', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});


// get date

const form = document.querySelector('#step_1');
const form2 = document.querySelector('#step_1-5');
const formInput = document.querySelectorAll('input')
const formSelect = document.querySelectorAll('select')
if (form || form2) {
    const temporarily = {
        objInputs: [],

        addValue(name) {
            formInput.forEach((el) => {
                el.addEventListener('change', (e) => {
                    let inputName = e.target.name
                    let inputValue = e.target.value
                    let date = new Date();
                    const thisInput = this.objInputs.find(item => item.name == inputName);
                    if (thisInput) {
                        thisInput.value = inputValue;
                        thisInput.date = date;
                    } else {
                        this.objInputs.push({
                            name: inputName,
                            value: inputValue,
                            date: date,
                        })
                    }
                    console.log(this.objInputs);
                })
            })
            formSelect.forEach((el) => {
                el.addEventListener('change', (e) => {
                    let inputName = e.target.name
                    let inputValue = e.target.value
                    let date = new Date();
                    const thisInput = this.objInputs.find(item => item.name == inputName);
                    if (thisInput) {
                        thisInput.value = inputValue;
                        thisInput.date = date;
                    } else {
                        this.objInputs.push({
                            name: inputName,
                            value: inputValue,
                            date: date,
                        })
                    }
                    console.log(this.objInputs);
                })
            })
        }
    }

    temporarily.addValue();


    // const postData = dataUser => fetch('server', {
    //     method: 'POST',
    //     body: dataUser,
    // })

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(form)
    //     formData.append('cart', JSON.stringify(temporarily.objInputs))

    //     postData(formData)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(response.status)
    //             } else {
    //                 alert('Форма отправлена')
    //                 console.log(JSON.stringify(temporarily.objInputs))
    //                 console.log(response.statusText);
    //             }
    //         })
    // })
}

