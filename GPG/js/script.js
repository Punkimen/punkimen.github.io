"use strict";

// experts slider
// (function () {

//   const expertsData = [
//     {
//       "id": 1,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Марк Брониц",
//       "descr": " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quos. Illo aliquid ea et soluta qui impedit dignissimos voluptatum libero dolores quo. Eum, beatae assumenda esse explicabo inventore nulla magnam."
//     },
//     {
//       "id": 2,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Иван Иванов",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 3,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Петр Петров",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 4,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Андрей Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 5,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Максим Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 6,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Артур Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 7,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Дмитрий Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 8,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Владимир Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 9,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Марк Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 10,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Иван Иванов",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 11,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Петр Петров",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 12,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Андрей Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 13,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Максим Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 14,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Артур Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 15,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Дмитрий Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//     {
//       "id": 16,
//       "photo": "img/experts/expert_big.png", "smallPhoto": "img/experts/expert_1.png",
//       "name": "Владимир Брониц",
//       "descr": "Партнер, руководитель управления правовой защиты"
//     },
//   ]

//   const createCurrentExpert = (id) => {
//     let expert = expertsData.find(el => el.id == id)

//     const expertBlock = document.querySelector('.current-expert')
//     expertBlock.innerHTML = ''
//     const currentExpertElem = document.createElement('div')
//     currentExpertElem.className = "current-expert__inner"
//     currentExpertElem.innerHTML = `
//     <div class="current-expert__photo">
//       <img src="${expert.photo}" alt="#">
//     </div>
//     <div class="current-expert__content">
//         <div class="current-expert__name">
//           ${expert.name}
//         </div>
//         <div class="current-expert__descr">
//           ${expert.descr}
//         </div>
//         <button type="button" class="current-expert__btn orange-btn">
//             Задать вопрос эксперту
//         </button>
//     </div>
//     `
//     expertBlock.append(currentExpertElem)
//   }

//   const createSilder = (arr, arrLength, countInnerItem) => {

//     const sliderInner = document.querySelector('.experts__slider')
//     sliderInner.innerHTML = ""
//     const undeletedSlide = document.querySelectorAll('.experts__slide')

//     const countsSlide = Math.ceil(arrLength / countInnerItem)

//     for (let i = 1; i <= countsSlide; i++) {
//       const slider = document.createElement('div')
//       slider.className = "experts__slide"
//       sliderInner.append(slider)
//     }
//     const slides = document.querySelectorAll('.experts__slide')

//     slides.forEach((slide, index) => {

//       let leftPortionNum = ((index + 1) - 1) * countInnerItem
//       let rightPortionNum = (index + 1) * countInnerItem

//       arr.forEach((el, index) => {

//         if (index >= leftPortionNum && index < rightPortionNum) {
//           const item = document.createElement('div')
//           item.className = "experts__photo"
//           item.setAttribute('data-id', el.id)
//           item.innerHTML = `
//           <img src="${el.smallPhoto}" alt="">
//           `
//           slide.append(item)
//         }
//       })

//     })
//   }

//   let countInnerItem = 8;
//   const changeCountInnerItem = () => {
//     const windowWidth = $(window).width()

//     if (windowWidth <= 1200 && windowWidth > 767) {
//       countInnerItem = 4
//     } else if (windowWidth <= 767 && windowWidth > 440) {
//       countInnerItem = 3
//     } else if (windowWidth <= 440) {
//       countInnerItem = 4
//     } else {
//       countInnerItem = 8
//     }
//     return countInnerItem
//   }
//   countInnerItem = changeCountInnerItem()

//   let startCount = countInnerItem

//   createSilder(expertsData, expertsData.length, countInnerItem)

//   $(window).on('resize', function () {
//     countInnerItem = changeCountInnerItem()
//     if (startCount !== countInnerItem) {
//       startCount = countInnerItem
//       $('.experts__slider').slick('unslick');
//       createSilder(expertsData, expertsData.length, startCount)
//       $('.experts__slider').slick({
//         infinite: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: false,
//       });
//     }
//   })

//   changeCountInnerItem()

//   $('.experts__slider').slick({
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     arrows: false,
//   });

//   document.querySelector('.experts__slider').addEventListener('click', e => {
//     if (e.target.closest('.experts__photo')) {
//       let id = +e.target.closest('.experts__photo').getAttribute('data-id')

//       createCurrentExpert(id)
//     }
//   })

//   // expertItem.on('click', function () {
//   //   let id = +$(this).attr('data-id')

//   //   createCurrentExpert(id)
//   // })
// })();
// experts slider end


// news slider  

$('.news__slider').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<div class="slider-arrow slider-arrow--prev"></div>',
  nextArrow: '<div class="slider-arrow slider-arrow--next"></div>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
      }
    },

  ]
});

// news slider  end



$('#open').on('click', function () {
  $('#main-menu').toggleClass('show')
})
$('.mobile-menu__close').on('click', function () {
  $(this).closest('.mobile-menu').toggleClass('show')
})

$('.mobile-menu__sublist-elem').on('click', function () {
  $('#services-menu').toggleClass('show')
})


// about-content 

const showMoreBtn = () => {
  const heightMenu = $('.about-menu').height();
  const heightContent = $('.about-content__text').height();

  if (heightContent > heightMenu) {
    $('.about-content__text').addClass('limited')
    $('#about-more').css('display', 'block')
  } else {
    $('#about-more').hide()
  }
}
showMoreBtn()

$('#about-more').on('click', function () {
  $('.about-content__text').toggleClass('limited')
  if ($('.about-content__text').hasClass('limited')) {
    $(this).text('Скрыть текст')
  } else {
    $(this).text('Читать далее')
  }
})



$('.customers-slider').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      }
    }, {
      breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
});



const showBtns = document.querySelectorAll('.show-more__btn')
if (showBtns) {
  document.addEventListener('click', e => {
    const target = e.target
    if (target.closest('.show-more__btn')) {
      target.parentElement.querySelector('.text-limited__content').classList.toggle('show')
      if (target.parentElement.querySelector('.text-limited__content').closest('.show')) {
        target.innerText = "Скрыть текст"
      } else {
        target.innerText = "Читать далее"
      }
    }
  })
}

const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? $('.fixed-top__btn').addClass("show")
    : $('.fixed-top__btn').removeClass("show");
};

const scrollWindow = function () {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 50);
      scrollWindow();
    }, 10);
  }
};

$('.fixed-top__btn').on('click', () => {
  scrollWindow()
})


// mktu

$('.mktu-search__input').on('input', (e) => {
  e.target.closest('form').querySelector('.search-dropdown').style.display = 'block'
})

document.addEventListener('click', e => {
  if (!e.target.closest('.search-dropdown') && $('.search-dropdown').css('display') == 'block') {
    $('.search-dropdown').hide()
  }
})

$('.trademark-filter__choose-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active')
  $('.trademark-filter__classes').slideToggle();
})


const changeTitlePos = (title, startPos, endPost, windowWith) => {
  const nowWindowWidth = $(window).width()
  if (nowWindowWidth < windowWith) {
    endPost.prepend(title)
  } else {
    startPos.prepend(title)
  }
}
$(window).on('resize', e => {
  changeTitlePos($('.personal-cabinet__title'), $('.personal-cabinet__left'), $('.personal-cabinet__right'), 992)
})
changeTitlePos($('.personal-cabinet__title'), $('.personal-cabinet__left'), $('.personal-cabinet__right'), 992)



$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
  });
  $(document).on('click', '.popup-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

Scrollbar.initAll();