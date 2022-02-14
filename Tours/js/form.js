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
  });
  $('.input-date input').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });
})();


