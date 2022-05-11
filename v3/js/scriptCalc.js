"use strict";
$('.package-services__slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        // centerMode: true,
        slidesToShow: 2,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        dots: true
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 1,
        dots: true
      }
    },
  ]
});

$('.package-services__slider').slick('slickGoTo', 1);