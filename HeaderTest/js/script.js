"use strict";

// swiper slider initilization
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 15,
  slidesPerView: 1,
  breakpoints: {
    990: { slidesPerView: 2, },
    1200: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  },
  autoplay: {
    delay: 3000,
  },
});

// header-menu adaptive 
const headerMenu = document.querySelector('.header__nav-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuContent = document.querySelector('.mobile-menu__top')
const mobileMenuFooter = document.querySelector('.mobile-menu__top')
const headerNav = document.querySelector('.header__nav')
const adapiveMenu = () => {
  const windowWidth = window.innerWidth
  if (windowWidth < 990 && !headerMenu.classList.contains('mob')) {
    mobileMenuContent.appendChild(headerMenu)
    headerMenu.classList.add('mob')
  } else if (windowWidth > 990 && headerMenu.classList.contains('mob')) {
    headerNav.prepend(headerMenu)
    headerMenu.classList.remove('mob')
  }
}
adapiveMenu()

// banner change adaptive
const headerTop = document.querySelector('.header__top')
const headerContent = document.querySelector('.header__content')
const banner = document.querySelector('.header__banner')

const changeBannePosition = () => {
  const windowWidth = window.innerWidth
  if (windowWidth < 568 && !banner.classList.contains('full')) {
    headerTop.after(banner)
    banner.classList.add('full')
  } else if (windowWidth > 568 && banner.classList.contains('full')) {
    headerContent.prepend(banner)
    banner.classList.remove('full')
  }
}
changeBannePosition()
// burger menu show/hide
const burgerBtn = document.querySelector('.burger')
const showMenu = () => {
  mobileMenu.classList.add('show')
  burgerBtn.classList.add('active')
}
const hideMenu = () => {
  mobileMenu.classList.remove('show');
  burgerBtn.classList.remove('active')
};

burgerBtn.addEventListener('click', e => {
  !mobileMenu.classList.contains('show') ? showMenu() : hideMenu()
});

// basket icons change content 
const changeContent = () => {
  const windowWidth = window.innerWidth
  const baskets = document.querySelector('.baskets__list')
  const basketLinks = document.querySelectorAll('.basket__link')
  if (windowWidth < 568 && !baskets.classList.contains('mob')) {
    baskets.classList.add('mob')
    basketLinks.forEach(el => {
      el.querySelector('.basket__link-mob').prepend(el.querySelector('.count'))
    })
  } else if (windowWidth > 568 && baskets.classList.contains('mob')) {
    baskets.classList.remove('mob')
    basketLinks.forEach(el => {
      el.querySelector('.count-inner').prepend(el.querySelector('.count'))
    })
  }
};
changeContent();

// sale link changed positions

const menu = document.querySelector('.header-menu')
const saleLinChanged = () => {
  const windowWidth = window.innerWidth
  const saleLink = document.querySelector('.header-menu__sale')
  if (windowWidth < 568 && !saleLink.classList.contains('mob')) {
    headerContent.after(saleLink)
    saleLink.classList.add('mob')
  } else if (windowWidth > 568 && saleLink.classList.contains('mob')) {
    menu.appendChild(saleLink)
    saleLink.classList.remove('mob')
  }
}
saleLinChanged()
// resize init func
window.addEventListener('resize', e => {
  adapiveMenu();
  changeBannePosition();
  changeContent();
  saleLinChanged();
});

// show/hide searchInp 
const searchInput = document.querySelector('.header-menu__search-input')
const searchBtn = document.querySelector('#search-btn')
const showHideSearch = () => {
  searchInput.classList.toggle('show')
}
searchBtn.addEventListener('click', e => {
  showHideSearch()
});
// popups

(function () {
  const popups = document.querySelector('.popups')
  function showPopup(el) {
    popups.classList.add('show');
    document.querySelector(el).classList.add('show');
  }
  function closePopup() {
    const popupsElements = document.querySelectorAll('.popup')
    popups.classList.remove('show');
    popupsElements.forEach(el => {
      el.classList.remove('show')
    })
  }

  // City change
  const selectedCity = document.querySelector('.info-city__selected')
  const cityes = document.querySelectorAll('.location-catalog__link')
  const cityChanges = (el) => {
    cityes.forEach(el => el.classList.remove('active'))
    selectedCity.textContent = el.textContent
    el.classList.add("active")
    closePopup()
  }

  document.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.closest('[data-popup]')) {
      const id = e.target.closest('[data-popup]').getAttribute('data-popup')
      showPopup(id)
    } else if (e.target.className === 'popups__inner' || e.target.closest('.js-close-popup')) {
      closePopup()
    } else if (e.target.closest('.location-catalog__link')) {
      cityChanges(e.target)
    } else {
      return false
    }
  })

})();

// catr 
(function () {
  const goodsCatalog = document.querySelector('.cart-catalog')
  const goodsSliderWrapper = document.querySelector('.header__goods .swiper-wrapper')
  const countEl = document.querySelector('#goods-count')
  const summEl = document.querySelector('#summ')


  const goods = [{
    id: 1,
    name: 'Товар 1',
    price: 10000,
    srcPhoto: 'img/goods/goods_1.png'
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 5000,
    srcPhoto: 'img/goods/goods_2.png'
  }, {
    id: 3,
    name: 'Товар 3',
    price: 7000,
    srcPhoto: 'img/goods/goods_3.png'
  },
  {
    id: 4,
    name: 'Товар 4',
    price: 4000,
    srcPhoto: 'img/goods/goods_1.png'
  },
  {
    id: 5,
    name: 'Товар 5',
    price: 2000,
    srcPhoto: 'img/goods/goods_2.png'
  }, {
    id: 6,
    name: 'Товар 6',
    price: 1000,
    srcPhoto: 'img/goods/goods_3.png'
  }
  ]
  const goodsInit = () => {
    let summ = 0;
    goodsCatalog.innerHTML = ``
    goodsSliderWrapper.innerHTML = ``
    if (goods.length > 0) {
      goods.forEach(({ id, name, price, srcPhoto }) => {
        const cartCard = document.createElement('div')
        const cartSlide = document.createElement('div')
        cartCard.className = 'cart-card'
        cartSlide.className = 'header__goods-item swiper-slide'
        cartSlide.setAttribute('data-popup', '#cart')

        cartCard.innerHTML = `
     
        <div class="cart-card__img">
          <img src="${srcPhoto}" alt="${name}">
        </div>
        <div class="cart-card__content">
          <div class="cart-card__name">${name}</div>
          <div class="cart-card__price">${price} р</div>
        </div>
        <button data-id="${id}" class="cart-card__delete btn">Удалить</button>
      
      `
        cartSlide.innerHTML = `<img src="${srcPhoto}" alt="${name}">`

        goodsCatalog.appendChild(cartCard)
        goodsSliderWrapper.appendChild(cartSlide)
        summ += price
      })
    } else {
      goodsCatalog.innerHTML = `Корзина пуста`
      goodsSliderWrapper.innerHTML = `Корзина пуста`
    }
    countEl.textContent = goods.length
    summEl.textContent = summ
  }
  goodsInit()

  const deletedProduct = (id) => {
    goods.splice(goods[id], 1)
    goodsInit()
  }
  document.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.closest('.cart-card__delete')) {
      const id = e.target.getAttribute('data-id')
      deletedProduct(id)
    }
  })
})();