const swiperReviews = new Swiper('.reviews__slider', {
  loop: false,
  spaceBetween: 30,
  slidesPerView: 2,
  autoHeigh: true,
});
const swiperVideo = new Swiper('.reviews-videos__slider', {
  loop: false,
  spaceBetween: 30,
  slidesPerView: 3,
});

let count = 1;
let countMax = $('.reviews-slide').length - 1;
function sliderCountSet(count) {
  $('#start-slide').text(count)
  $('#end-slide').text(countMax)
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

$('#reviews-slider__prev').on('click', function () {
  swiperReviews.slidePrev()
  swiperVideo.slidePrev();
  sliderCountMinus()
})
$('#reviews-slider__next').on('click', function () {
  swiperReviews.slideNext()
  swiperVideo.slideNext()
  sliderCountPlus()
})

swiperReviews.on('slideChange', function () {
  sliderCountSet(swiperReviews.activeIndex + 1)
});
