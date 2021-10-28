function changeLevelBlock() {
    let windowWidth = $(window).width()
    if (windowWidth < 1200) {
        $('.aurora-photos__level-inner').prepend($('.light-level__block'))
    } else {
        $('.light-level__wrapper').append($('.light-level__block'))
    }
}
changeLevelBlock()
$(window).resize(() => {
    changeLevelBlock()
})

jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле",
});
$('#ooptt-form').validate();

$('#ooptt-form__submit').on('click', function (e) {
    e.preventDefault();
    if ($('#ooptt-form').valid()) {
        let el = $(this).attr('data-popup')
        showPopup(el)
    }
})

const showPopup = el => {
    $('.popups').show();
    $('body').addClass('overlay');
    $(el).addClass('show');
};

const closeModal = () => {
    $('.popup').removeClass('show');
    $('.popups').hide();
    $('body').removeClass('overlay');
}