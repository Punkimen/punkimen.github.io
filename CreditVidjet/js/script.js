let colorCheck = $('.color-item');
let memoryCheck = $('.memory-item');
colorCheck.on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active')
})
memoryCheck.on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active')
})

$('#credit-card').validate({
    rules: {
        numCard: {
            required: true,

        },
        dateCard: {
            required: true,
        },
        cvv: {
            required: true,
        },
        agree: {
            required: true,
        }
    },
    messages: {
        numCard: {
            required: "Такої карти не існує",
        },
        dateCard: {
            required: "Введені дані некоректні",
        },
        cvv: {
            required: "Введені дані некоректні",
        },
        agree: {
            required: "Підтвердіть угоду",
        }
    },
    highlight: function (element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function (element) {
        $(element).parent().removeClass("field-error");
        $('#numCard').siblings('.input--numCard__type').show();
    },
})
$('#accept').on('change', () => {
    if ($('#accept').is(':checked')) {
        $('#card-btn').removeAttr('disabled')
    } else {
        $('#card-btn').prop('disabled', true)
    }
})

$('#agree').on('change', () => {
    if ($('#agree').is(':checked')) {
        $('#personalForm-btn').removeAttr('disabled')
    } else {
        $('#personalForm-btn').prop('disabled', true)
    }
})
$('#phone').on('change', function () {
    let val = document.querySelector('#phone')
})
$('#personalForm').validate({
    rules: {
        phone: {
            required: true,
            minlength: 17,
        },
        date: {
            required: true,
        },
    },
    messages: {
        phone: {
            required: "Неправильно введений номер",
            minlength: "Неправильно введений номер",
        },
        date: {
            required: "Неправильно введена дата",
        },
    },
    highlight: function (element) {
        $(element).parent().addClass("field-error");
        $('.credit__vidget-label--phone').addClass('label-error');
    },
    unhighlight: function (element) {
        $(element).parent().removeClass("field-error");
        $('.credit__vidget-label--phone').removeClass('label-error');
    },
})
$('#userForm').validate({
    rules: {
        name: {
            required: true,
        },
        date: {
            required: true,
        },
        passport: {
            required: true,
        },
        dateGet: {
            required: true,
        },
        whoGet: {
            required: true,
        },
        INN: {
            required: true,
        },
        adress: {
            required: true,
        },
    },
    messages: {
        name: {
            required: "Введені дані некоректні",
        },
        date: {
            required: "Введені дані некоректні",
        },
        passport: {
            required: "Введені дані некоректні",
        },
        dateGet: {
            required: "Введені дані некоректні",
        },
        whoGet: {
            required: "Введені дані некоректні",
        },
        INN: {
            required: "Введені дані некоректні",
        },
    },

    highlight: function (element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function (element) {
        $(element).parent().removeClass("field-error");
    }
})
$('#numCard').mask("0000 0000 0000 0000", {
    placeholder: "0000 0000 0000 0000",
    selectOnFocus: true
});
$('#dateCard').mask("00 / 00", {
    placeholder: "MM / РР",
    selectOnFocus: true
});
$('#cvv').mask("000", {
    placeholder: "XXX",
    selectOnFocus: true
});
$('#phone').mask("+380 ZZ ZZZ ZZ ZZ", {
    translation: {
        'Z': {
            pattern: /[0-9]/,
            optional: true
        },
        '0': { pattern: /\d/ },
    }
});
$('.number_input').mask("0", {
    selectOnFocus: true
});
$('.number_input-2').mask("0", {
    selectOnFocus: true
});
(function () {

    const timerBlock = document.querySelector('#sms-timer')
    if (timerBlock) {
        let seconds = 1 * 30 + 0,
            h, m, s, t;

        function countDown() {
            if (seconds > 0) {
                seconds--;
                h = seconds / 3600 ^ 0,
                    m = (seconds - h * 3600) / 60 ^ 0,
                    s = seconds - h * 3600 - m * 60,
                    time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                $("#sms-timer").text(time);
            } else {
                $("#sms-timer").hide();
                $("#sms-btn").show();
            }
            setTimeout(function () {
                countDown();
            }, 1000);
        }
        countDown()
        $("#sms-btn").on('click', function () {
            seconds = 30
            $("#sms-timer").show();
            $("#sms-btn").hide();
        })
    }
    const timerBlock2 = document.querySelector('#sms-timer_2')
    if (timerBlock2) {
        let seconds = 1 * 30 + 0,
            h, m, s, t;

        function countDown() {
            if (seconds > 0) {
                seconds--;
                h = seconds / 3600 ^ 0,
                    m = (seconds - h * 3600) / 60 ^ 0,
                    s = seconds - h * 3600 - m * 60,
                    time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                $("#sms-timer_2").text(time);
            } else {
                $("#sms-timer_2").hide();
                $("#sms-btn_2").show();
            }
            setTimeout(function () {
                countDown();
            }, 1000);
        }
        countDown()
        $("#sms-btn_2").on('click', function () {
            seconds = 30
            $("#sms-timer_2").show();
            $("#sms-btn_2").hide();
        })
    }

    $('.number_input').on('keyup', function (e) {
        let value = $(this).val();
        let len = value.length;
        let curTabIndex = parseInt($(this).attr('tabindex'));
        let nextTabIndex = curTabIndex + 1;
        let prevTabIndex = curTabIndex - 1;
        if (len === 1) {
            $(this).val(value.substr(0, 1));
            $('[tabindex=' + nextTabIndex + ']').focus();
        } else if (len == 0 && prevTabIndex != 0) {
            $('[tabindex=' + prevTabIndex + ']').focus();
        }
        let totalValue = ''
        totalValue = $('[tabindex="1"]').val() + $('[tabindex="2"]').val() + $('[tabindex="3"]').val() + $('[tabindex="4"]').val()
        let submitInput = $('#submit-input')
        submitInput.val(totalValue)
        console.log(submitInput.val());

        if (submitInput.val().length === 4) {
            $('#sms-code').submit()
        }
        // else {
        //     $('.credit__vidget-input--sms').addClass('input-error')
        //     $('.inputs__sms-code').addClass('border-error')
        // }
    });
    $('.number_input-2').on('keyup', function (e) {
        let value = $(this).val();
        let len = value.length;
        let curTabIndex = parseInt($(this).attr('tabindex-2'));
        let nextTabIndex = curTabIndex + 1;
        let prevTabIndex = curTabIndex - 1;
        if (len === 1) {
            $(this).val(value.substr(0, 1));
            $('[tabindex-2=' + nextTabIndex + ']').focus();
        } else if (len == 0 && prevTabIndex != 0) {
            $('[tabindex-2=' + prevTabIndex + ']').focus();
        }
        let totalValue = ''
        totalValue = $('[tabindex-2="1"]').val() + $('[tabindex-2="2"]').val() + $('[tabindex-2="3"]').val() + $('[tabindex-2="4"]').val()
        let submitInput = $('#submit-input_2')
        submitInput.val(totalValue)
        console.log(submitInput.val());

        if (submitInput.val().length === 4) {
            $('#sms-code_2').submit()
        }
        // else {
        //     $('.credit__vidget-input--sms').addClass('input-error')
        //     $('.inputs__sms-code-2').addClass('border-error')
        // }

    });
    $('.inputs__sms-dots').on('click', function () {
        $('.inputs__sms-code').addClass('border-green')
        $(this).hide()
        $('[tabindex="1"]').focus();
    })
    $('.inputs__sms-dots-2').on('click', function () {
        $('.inputs__sms-code-2').addClass('border-green')
        $(this).hide()
        $('[tabindex-2="1"]').focus();
    })



    /*
    let smscCodeValidate = () => {
        $('#sms-code').validate({
            rules: {
                sms: {
                    required: true,
                    number: true,
                    maxlength: 4,
                    equalTo: "#sms-code_1"
                }
            },
            messages: {
                sms: {
                    required: "Введите код",
                    number: "Код состоит из цифр",
                    equalTo: 'error'
                }
            },
            highlight: function(element) {
                $(element).parent().addClass("field-error");
            },
            unhighlight: function(element) {
                $(element).parent().removeClass("field-error");
            }
        })
    }
    let smscCodeValidate_2 = () => {
        $('#sms-code_2').validate({
            rules: {
                sms: {
                    required: true,
                    number: true,
                    maxlength: 4,
                    equalTo: "#code_2"
                }
            },
            messages: {
                sms: {
                    required: "Введите код",
                    number: "Код состоит из цифр"
                }
            },
            highlight: function(element) {
                $(element).parent().addClass("field-error");
            },
            unhighlight: function(element) {
                $(element).parent().removeClass("field-error");
            },
            success: function(element) { console.log(element); },
        })
    }
    let smsCodeValue = $('#sms')
    smsCodeValue.on('change', function(e) {
        let smsCodeValueLength = $('#sms').val().length
        if (smsCodeValueLength === 4) {
            $('#sms-code').submit()
        }
    }, smscCodeValidate())
    smsCodeValue.on('keydown', function(e) {
        let code = $('#sms-code_1').val()
        if ($('#sms-code_1').val() == $('#sms').val()) {
            $('#sms-code').submit()
        }
        $('#sms-code').submit()
        console.log($('#sms').val());

    }, smscCodeValidate())
    let smsCodeValue_2 = $('#sms_2')
    smsCodeValue_2.on('change', function(e) {
        let smsCodeValueLength = $('#sms_2').val().length
        if (smsCodeValueLength === 4) {
            $('#sms-code_2').submit()
        }
    }, smscCodeValidate())
    smsCodeValue_2.on('keydown', function(e) {
        $('#sms-code_2').submit()
    }, smscCodeValidate_2())
    */
})();
// ````

$('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    closeOnBgClick: true,
    enableEscapeKey: true,
    closeBtnInside: false
});

$('.popup__content').mCustomScrollbar({
    axis: "y", mouseWheelPixels: 250,
});
$('.credit-flex__content--scroll').mCustomScrollbar({
    axis: "y",
});
$('.credit-flex__upper--scroll').mCustomScrollbar({
    axis: "y",
});
// 
var momentFormat = 'DD.MM.YYYY';
var dateMask = IMask(
    document.getElementById('dateBorn'), {
    mask: Date,
    min: new Date(1950, 0, 1),
    max: new Date(2020, 0, 1),
    pattern: momentFormat,
    lazy: true,
    blocks: {
        YYYY: {
            mask: IMask.MaskedRange,
            from: 1950,
            to: 2030
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        },
        DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31
        }
    }
});
var dateMask = IMask(
    document.getElementById('userDate'), {
    mask: Date,
    min: new Date(1950, 0, 1),
    max: new Date(2020, 0, 1),
    pattern: momentFormat,
    lazy: true,
    blocks: {
        YYYY: {
            mask: IMask.MaskedRange,
            from: 1950,
            to: 2030
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        },
        DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31
        }
    }
});
var dateMask = IMask(
    document.getElementById('dateGet'), {
    mask: Date,
    min: new Date(1950, 0, 1),
    max: new Date(2020, 0, 1),
    pattern: momentFormat,
    lazy: true,
    blocks: {
        YYYY: {
            mask: IMask.MaskedRange,
            from: 1950,
            to: 2030
        },
        MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12
        },
        DD: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 31
        }
    }
})
// $('#').mask("00.00.0000", {
//     placeholder: "ДД.ММ.РРРР",
//     selectOnFocus: true
// })
// $('#').mask("00.00.0000", {
//         placeholder: "ДД.ММ.РРРР",
//         selectOnFocus: true
//     })
//

// adapt height



const contentGetHeight = () => {
    let popupHeight = $('.popup').height();
    let popupHeaderHeight = $('.popup__header').height() + parseInt($('.popup__header').css('padding-top')) * 2;
    let popupFooterHeight = $('.popup__footer').height() + parseInt($('.popup__footer').css('padding-top')) * 2;
    contentHeight = popupHeight - popupHeaderHeight - popupFooterHeight
    $('.popup__content').height(contentHeight)
}
contentGetHeight()

$(window).resize(function () {
    contentGetHeight()
});

// adapt height