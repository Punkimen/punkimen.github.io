"use strict";
// Подключения слайдера
const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	loop: true,
	SpaceBetween: 35,
	autoHeight: true,
	autoplay: {
		delay: 2500,
	},
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},

	breakpoints: {
		// when window width is >= 320px
		440: {
			slidesPerView: 2,
			spaceBetween: 20,
			autoplay: {
				delay: 2500,
			},
		},
		// when window width is >= 480px
		990: {
			slidesPerView: 3,
			spaceBetween: 30,
			autoplay: {
				delay: 2500,
			},
		},
		// when window width is >= 640px
		1200: {
			slidesPerView: 4,
			spaceBetween: 40,
			autoplay: {
				delay: 2500,
			},
		},
	},
});

// Бургер меню

const headerMobile = document.querySelector(".header-mobile");
const headerNav = document.querySelector(".header__nav");
const headerLogo = document.querySelector(".header__logo");
const burgerBtn = document.querySelector(".burger__icon");

const toogleClass = (el, className) => {
	console.log(el.classList.toggle(className));
};
const removeClass = (el, className) => {
	console.log(el.classList.remove(className));
};
const adaptiveMenu = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth <= 1200) {
		headerMobile.querySelector(".container").prepend(headerNav);
	} else {
		headerLogo.after(headerNav);
	}
};
adaptiveMenu();
window.addEventListener("resize", adaptiveMenu);

burgerBtn.addEventListener("click", (e) => {
	toogleClass(burgerBtn, "active");
	toogleClass(headerMobile, "show");
});

// Якорные ссылки
const smoothLinks = document.querySelectorAll("[scroll-href]");
console.log(smoothLinks);
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("scroll-href");
		removeClass(burgerBtn, "active");
		removeClass(headerMobile, "show");
		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}

// Галерея сертификатов

lightGallery(document.getElementById("sertivicates-gallery"));
