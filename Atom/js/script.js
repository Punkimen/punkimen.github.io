"use strict";
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
