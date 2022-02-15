(function () {
  $('.input-date input').daterangepicker({
    startDate: 0,
    singleDatePicker: true,
    showDropdowns: true,
    autoUpdateInput: false,
    minYear: parseInt(moment().format('YYYY'), 10) - 1,
    maxYear: parseInt(moment().format('YYYY'), 10) + 10,
    autoApply: true,
    locale: {
      daysOfWeek: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      format: 'DD.MM.YYYY',
      cancelLabel: 'Clear',
    },

  });
  $('.input-date input').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY'));
    $(this).parents('.find-tour__select').addClass('filed')
    $(this).parents('.find-tour__select').removeClass('error')

  });
  $('.input-date input').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });

  const setValue = () => {
    const nightCount = $('#nights-count').text()
    const adultCount = $('#adult-count').text()
    const childCount = $('#child-count').text()
    $('#nights').text(nightCount)
    $('#adults').text(adultCount)
    $('#child').text(childCount)
  }

  $('.plus-btn').on('click', function () {
    let countVal = parseInt($(this).parent().find('.custom-select__handle-val').text())
    countVal++
    if (countVal > 0) {
      $(this).parents('.custom-select').addClass('filed');
      $(this).parents('.custom-select').removeClass('error')
    }
    $(this).parent().find('.custom-select__handle-val').text(countVal)
    setValue()
  })
  $('.minus-btn').on('click', function () {
    let countVal = parseInt($(this).parent().find('.custom-select__handle-val').text())
    if (countVal > 0) {
      $(this).parents('.custom-select').addClass('filed')
      $(this).parents('.custom-select').removeClass('error')
      countVal--
    }
    $(this).parent().find('.custom-select__handle-val').text(countVal)
    setValue()
  })
})();
// form validate
(function () {
  const formValidate = () => {
    const inputsFileds = $('#find-tour .custom-select')
    const inputDate = $('#find-tour .input-date')
    inputsFileds.each((index, el) => {
      if (!el.classList.contains('filed')) {
        console.log(el);
        el.classList.add('error')
        fieldForm = false
      } else {
        el.classList.remove('error')
        fieldForm = true
      }
    })
    if (!inputDate.hasClass('filed')) {
      inputDate.addClass('error')
    }
  }
  $('#serch-btn').on('click', function () {
    formValidate()
  })
})();

(function () {
  const selectsPosition = () => {
    const allFileds = document.querySelectorAll('.find-tour__select');
    const windowWidth = $(window).width();
    if (windowWidth <= 992) {
      allFileds.forEach(el => {
        $('.find-tour__row_top').append(el)
        $('.find-tour__checkbox').after($('.find-tour__btn'))
      })
    } else {
      allFileds.forEach((el, index) => {
        if (index > 4) {
          $('.find-tour__row_bottom').append(el)
          $('.find-tour__row_bottom').append($('.find-tour__btn'))
        }
        // console.log(index);
      })
    }
  }
  selectsPosition()
})();