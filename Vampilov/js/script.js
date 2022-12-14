"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const sliderSpeed = 700;
	const bgSlider = new Swiper(".hero__slider", {
		effect: "fade",
		speed: sliderSpeed,
		// autoplay: {
		// 	delay: 3000,
		// },
		pagination: {
			el: ".swiper-pagination",
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const descrSlider = new Swiper(".hero-content", {
		direction: "vertical",
		speed: sliderSpeed,
		slidesPerView: 1,
		spaceBetween: 30,
		enabled: false,
		// Настройка высоты для блока (так как не поддерживает autoheight для вертикального слайдера)
		on: {
			init: function (swiper) {
				const slider = document.querySelector(".hero-content");
				const currentSlide = swiper.slides[swiper.activeIndex];
				const currentSlideItem = currentSlide.children[0];
				slider.style.height = currentSlideItem.clientHeight + "px";
			},
			slideChange: function (swiper) {
				const slider = document.querySelector(".hero-content");
				const currentSlide = swiper.slides[swiper.activeIndex];
				const currentSlideItem = currentSlide.children[0];
				slider.style.height = currentSlideItem.clientHeight + "px";
			},
		},
	});

	bgSlider.controller.control = descrSlider;

	{
		// Формирования шапки для моб.устройств

		const headerIcons = document.querySelector(".header__mobile-icons");
		const headerSearch = document.querySelector(".header__searh");
		const headerList = document.querySelector(".header__list");
		const headerMenu = document.querySelector(".mobile-menu__content");
		const headerNav = document.querySelector(".header__navigation");
		const headerWrapper = document.querySelector(".header__wrapper");
		const eyeVersion = document.querySelector(".eye-version");
		const headerTop = document.querySelector(".header__content-top");
		const headerContent = document.querySelector(".header__content");
		const headerChanged = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 992) {
				headerIcons.querySelector(".header__phone-link").before(headerSearch);
			} else {
				headerList.after(headerSearch);
			}
			if (windowWidth <= 992 && windowWidth > 768) {
				headerWrapper.after(headerList);
			} else if (windowWidth <= 768) {
				headerMenu.prepend(headerList);
			} else {
				headerNav.prepend(headerList);
			}
			if (windowWidth <= 568) {
				headerContent.after(eyeVersion);
			} else {
				headerTop.append(eyeVersion);
			}
		};
		headerChanged();
		window.addEventListener("resize", () => {
			headerChanged();
		});

		// Открытие мобильного меню
		const page = document.querySelector(".page");
		const burger = document.querySelector(".burger");
		burger.addEventListener("click", (e) => {
			page.classList.toggle("show-menu");
			document.querySelector("body").classList.toggle("overlay");
		});
	}

	$(window).scroll(function () {
		$(".hero-slide__bg").bgscroll({
			direction: "bottom", // направление bottom или top
			bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
			debug: false, // Режим отладки
			min: 0, // минимальное положение (в %) на которое может смещаться фон
			max: 100, // максимальное положение (в %) на которое может смещаться фон
		});
	});
});
