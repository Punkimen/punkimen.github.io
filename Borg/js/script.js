$('.icon-menu').on('click', function () {
    $('.icon-menu').toggleClass('active');
    $('.header__mobile').slideToggle();
});

function equalWH(group) {
    var tallest = 0;
    group.each(function () {
        thisWidth = $(this).width();
        tallest = thisWidth;
    });
    group.height(tallest);
}
$(document).ready(function () {
    equalWH($(".section-info__item-img"));
});

function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        console.log($(this).height());
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
$(document).ready(function () {
    equalHeight($(".help-link__content"));

});
if (jQuery(window).width() > 650) {
    $(document).ready(function () {
        equalHeight($(".form-content__title_height"));
    });
}

function equalMarg(group) {
    var tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $(".work__btn").css({
        marginTop: tallest + 60,
    });
}
if (jQuery(window).width() > 750) {
    $(document).ready(function () {
        equalMarg($(".work-item__text"));
    });

    $('.questions-search__clear').on('click', function () {
        $('#search').val('');
    })
}
$('.accordion-quest').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).siblings().children('.accordion-quest__content').slideUp();
    $(this).children('.accordion-quest__content').slideToggle();
})

$('.form-accordion__name').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.form-accordion__content').slideToggle();
})

$('.form-file__inp').on('change', function () {
    $(this).children('.select-file').css('display', 'none');
    $(this).children('.downloaded-file').css('display', 'inline-block');
})