$('.burger__icon').on('click', function () {
    $('.burger__icon').toggleClass('active');
    $('.menu__body').toggleClass('active');
})

$('.burger__icon').on('click', function () {
    $('.burger__content').slideToggle();
    return false;
})
$('.burger__content-list>li').on('click', function () {
    return false;
})
$('.burger-body__link_sub').on('click', function () {
    $('.submenu').slideToggle();
    return false;
})