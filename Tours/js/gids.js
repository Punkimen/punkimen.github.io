(function () {

  const swiperGids = new Swiper('.gids-slide', {
    loop: false,
    spaceBetween: 15,
    slidesPerView: 1,
    autoHeigh: true,
    breakpoints: {

      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  let count = swiperGids.activeIndex + 1;
  let countMax = $('.gids-item').length;
  function sliderCountSet(count) {
    $('#start-slide-gids').text(count)
    $('#end-slide-gids').text(countMax)
  }
  sliderCountSet()
  function sliderCountPlus() {
    if (count < countMax) {
      count++
      sliderCountSet(count)
    }
  }
  function sliderCountMinus() {
    if (count > 1) {
      count--
      sliderCountSet(count)
    }
  }

  $('#gids-slider__prev').on('click', function () {
    swiperGids.slidePrev()
    sliderCountMinus()
  })
  $('#gids-slider__next').on('click', function () {
    swiperGids.slideNext()
    sliderCountPlus()
  })

  swiperGids.on('slideChange', function () {
    sliderCountSet(swiperGids.activeIndex + 1)
  });
})();

